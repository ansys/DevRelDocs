import os
import sys
import re

def extract_link_and_anchor(line):
    match = re.search(r'\[([^\]]+)\]\(([^)#]+)(?:#([^\)]+))?\)', line)
    if match:
        name = match.group(1)
        link_file = match.group(2)
        anchor = match.group(3) if match.group(3) else ''
        return name, link_file, anchor
    return None, None, None

def ends_with_period_or_period_in_quotes(s):
    # Matches: . " . ' . ” . ’ etc. at end of line
    return bool(re.search(r'(\.|[.!?][”"\']*)\s*$', s))

def ends_with_colon_or_colon_in_quotes(s):
    # Matches: : " : ' : ” : ’ etc. at end of line
    return bool(re.search(r'(:[”"\']*)\s*$', s))

def update_linked_file(link_file, anchor):
    if not os.path.exists(link_file):
        print(f"  WARNING: File not found: {link_file}")
        return
    with open(link_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    changed = False
    heading_pattern = re.compile(r'^(####\s+(\*property\*\s+)?[A-Za-z0-9_.]+(\(.*\))?)')
    found_heading = False
    for i, line in enumerate(lines):
        if found_heading:
            if line.strip() and not line.strip().startswith('#') and not line.strip().startswith('-') and not line.strip().startswith('*'):
                # Check if next non-empty line is a continuation
                j = i + 1
                while j < len(lines) and not lines[j].strip():
                    j += 1
                if j < len(lines):
                    next_line = lines[j].strip()
                    if next_line and not next_line.startswith('#') and not next_line.startswith('-') and not next_line.startswith('*'):
                        break
                # Only add period if this is the last line of the sentence
                stripped = line.rstrip('\n').rstrip()
                if not ends_with_period_or_period_in_quotes(stripped) and not ends_with_colon_or_colon_in_quotes(stripped):
                    # Insert period before trailing quotes
                    new_line = re.sub(r'([”"\']+)$', r'.\1', stripped)
                    if new_line == stripped:
                        new_line += '.'
                    lines[i] = new_line + '\n'
                    changed = True
                break
        if heading_pattern.match(line.strip()):
            found_heading = True
    if changed:
        print(f"  Writing changes to {link_file}")
        with open(link_file, 'w', encoding='utf-8') as f:
            f.writelines(lines)

def process_markdown_file(filename):
    base_dir = os.path.dirname(os.path.abspath(filename))
    with open(filename, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    for line in lines:
        name, link_file, anchor = extract_link_and_anchor(line)
        if name and link_file:
            link_path = os.path.join(base_dir, link_file)
            print(f"Processing link: {link_path} anchor: {anchor}")
            update_linked_file(link_path, anchor)

def process_autosummary_folder(folder):
    for root, _, files in os.walk(folder):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                process_markdown_file(file_path)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python add_periods_sublinks_OG.py <autosummary_folder>")
    else:
        process_autosummary_folder(sys.argv[1])
# python add_periods_sublinks.py _autosummary
# python add_periods_sublinks.py _autosummary