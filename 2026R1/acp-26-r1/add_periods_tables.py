import os
import re
import sys

def add_period(desc):
    desc_stripped = desc.strip().strip('"\'')
    if desc_stripped and not desc.rstrip().endswith('.'):
        desc = desc.rstrip() + '.'
    return desc

def process_markdown_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    row_pattern = re.compile(
        r'^(\s*\|?\s*\[.*?\]\([^)]+\)[^|]*\|\s*)(.*?)(\s*\|.*)$'
    )

    changed = False
    new_lines = []
    for line in lines:
        m = row_pattern.match(line)
        if m:
            before, desc, after = m.groups()
            new_desc = add_period(desc)
            if desc != new_desc:
                changed = True
            new_lines.append(f"{before}{new_desc}{after}\n")
        else:
            new_lines.append(line)

    if changed:
        print(f"  Updated: {filename}")
        with open(filename, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)

def process_autosummary_folder(folder):
    for root, _, files in os.walk(folder):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                process_markdown_file(file_path)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python add_periods_tables.py <autosummary_folder>")
    else:
        process_autosummary_folder(sys.argv[1])

# python add_periods_tables.py _autosummary

# python add_periods_tables.py _autosummary