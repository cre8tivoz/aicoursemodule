#!/usr/bin/env python3
"""Migrate course content from current repo to Astro collections"""
import json, os

base = "/Users/habibi/hermes/apps-codebases/aicoursemodule"
out_base = "/Users/habibi/hermes/apps-codebases/astro-ai-course/src/content"

def escape_yaml(val):
    val = str(val).replace('\\', '\\\\').replace('"', '\\"')
    return f'"{val}"'

def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def extract_fm(body):
    lines = body.split('\n')
    if not lines or lines[0].strip() != '---':
        return {}, body
    fm = {}
    end_idx = -1
    for i in range(1, len(lines)):
        if lines[i].strip() == '---':
            end_idx = i
            break
        if ':' in lines[i]:
            key, val = lines[i].split(':', 1)
            fm[key.strip()] = val.strip()
    if end_idx == -1:
        return {}, body
    content = '\n'.join(lines[end_idx+1:]).lstrip('\n')
    return fm, content

# Read data JSONs
lessons_json = json.loads(read_file(f"{base}/_data/lessons.json"))
assessments_json = json.loads(read_file(f"{base}/_data/assessments.json"))
modules_json = json.loads(read_file(f"{base}/_data/courseModules.json"))
lesson_by_url = {l["url"]: l for l in lessons_json}

# ---- Lessons ----
for lesson in lessons_json:
    src_path = f"{base}/{lesson['file']}"
    raw = read_file(src_path)
    fm, body = extract_fm(raw)
    if lesson.get("next") and lesson.get("nextTitle"):
        body = body.replace("{{ next }}", f"Next up: [{lesson['nextTitle']}]({lesson['next']})")
    mod = lesson["module"]
    les_num = lesson["lesson"]
    dir_path = f"{out_base}/lessons/module-{mod}"
    os.makedirs(dir_path, exist_ok=True)
    objectives = fm.get("objectives", [])
    aqfm = fm.get("aqfOutcomeRefs", [])
    out = ["---"]
    out.append(f"title: {escape_yaml(lesson['title'])}")
    out.append(f"module: {escape_yaml(mod)}")
    out.append(f"lesson: {escape_yaml(les_num)}")
    out.append(f"summary: {escape_yaml(lesson.get('summary', ''))}")
    out.append("objectives:")
    if isinstance(objectives, list):
        for obj in objectives:
            out.append(f"  - {escape_yaml(obj)}")
    else:
        out.append("  []")
    out.append("aqfOutcomeRefs:")
    if isinstance(aqfm, list):
        for ref in aqfm:
            out.append(f"  - {escape_yaml(ref)}")
    else:
        out.append("  []")
    out.append("---")
    out.append("")
    out.append(body)
    write_path = f"{dir_path}/{les_num}.md"
    with open(write_path, 'w') as f:
        f.write('\n'.join(out))
print(f"Lessons: {len(lessons_json)} migrated")

# ---- Assessments ----
os.makedirs(f"{out_base}/assessments", exist_ok=True)
for assess in assessments_json:
    src_path = f"{base}/{assess['file']}"
    raw = read_file(src_path)
    fm, body = extract_fm(raw)
    title = assess["title"]
    mod = assess["module"]
    atype = assess.get("type", "checkin")
    aqfm = fm.get("aqfOutcomeRefs", [])
    slug = f"module-{mod}-quiz" if atype == "checkin" else "capstone"
    out = ["---"]
    out.append(f"title: {escape_yaml(title)}")
    out.append(f"module: {escape_yaml(mod)}")
    out.append(f"type: {atype}")
    out.append("aqfOutcomeRefs:")
    if isinstance(aqfm, list):
        for ref in aqfm:
            out.append(f"  - {escape_yaml(ref)}")
    else:
        out.append("  []")
    out.append("---")
    out.append("")
    out.append(body)
    with open(f"{out_base}/assessments/{slug}.md", 'w') as f:
        f.write('\n'.join(out))
print(f"Assessments: {len(assessments_json)} migrated")

# ---- Modules ----
os.makedirs(f"{out_base}/modules", exist_ok=True)
for mod in modules_json:
    slug = f"-module-{mod['id']}"
    out = ["---"]
    out.append(f"title: {escape_yaml(mod['title'])}")
    out.append(f"summary: {escape_yaml(mod.get('summary', ''))}")
    out.append(f"tint: {escape_yaml(mod.get('tint', 'style01'))}")
    out.append("---")
    out.append("")
    with open(f"{out_base}/modules/{slug}.md", 'w') as f:
        f.write('\n'.join(out))
print(f"Modules: {len(modules_json)} migrated")

# ---- Curriculum ----
os.makedirs(f"{out_base}/curriculum", exist_ok=True)
curriculum_dir = f"{base}/curriculum"
skipped = []
for fname in sorted(os.listdir(curriculum_dir)):
    if not fname.endswith('.md'):
        continue
    raw = read_file(f"{curriculum_dir}/{fname}")
    slug = fname.replace('.md', '')
    if slug in ['review-notes', 'phase-06-publication-polish']:
        skipped.append(slug)
        continue
    title = slug.replace('-', ' ').replace('  ', ' ').title()
    if fname == 'course-outline.md':
        title = 'Course Outline'
    fm, body = extract_fm(raw)
    if fm.get('title'):
        title = fm['title']
    desc = fm.get('description', '')
    out = ["---"]
    out.append(f"title: {escape_yaml(title)}")
    out.append(f"description: {escape_yaml(desc)}")
    out.append("---")
    out.append("")
    out.append(body)
    with open(f"{out_base}/curriculum/{slug}.md", 'w') as f:
        f.write('\n'.join(out))
print(f"Curriculum: migrated (skipped {skipped})")

# ---- Reference ----
os.makedirs(f"{out_base}/reference", exist_ok=True)
ref_dir = f"{base}/reference"
ref_count = 0
if os.path.exists(ref_dir):
    for fname in sorted(os.listdir(ref_dir)):
        if not fname.endswith('.md'):
            continue
        raw = read_file(f"{ref_dir}/{fname}")
        slug = fname.replace('.md', '')
        title = slug.replace('-', ' ').replace('  ', ' ').title()
        if 'aqf' in slug.lower():
            title = 'AQF Level 5 Descriptor'
        fm, body = extract_fm(raw)
        if fm.get('title'):
            title = fm['title']
        out = ["---"]
        out.append(f"title: {escape_yaml(title)}")
        out.append(f"description: {escape_yaml(fm.get('description', ''))}")
        out.append("---")
        out.append("")
        out.append(body)
        with open(f"{out_base}/reference/{slug}.md", 'w') as f:
            f.write('\n'.join(out))
        ref_count += 1
print(f"Reference: {ref_count} migrated")
print("DONE")
