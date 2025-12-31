#!/usr/bin/env python3
"""
Transform formula tables from format without headers to format with headers.

From:
![image](./graphics/file.svg)| (X-Y)
---|---

To:
| Formula | # |
| --- | --- |
| ![image](./graphics/file.svg) | (X-Y) |
"""

import re
from pathlib import Path

def fix_formula_table(content):
    """
    Find and fix formula tables that are missing headers.
    Pattern: Line starting with ![image](...) | followed by separator line
    """
    lines = content.split('\n')
    fixed_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check if this line matches the pattern: ![image](./graphics/...svg)| ...
        if re.match(r'^!\[image\]\(\.\/graphics\/.*\.svg\)\|', line):
            # Check if the next line is the separator
            if i + 1 < len(lines) and re.match(r'^---\|---\s*$', lines[i + 1]):
                # This is a formula table without header - fix it
                
                # Extract the image and formula parts
                # Pattern: ![image](path)| formula text
                match = re.match(r'^(!\[image\]\(\.\/graphics\/.*\.svg\))\|\s*(.+?)\s*$', line)
                if match:
                    image_part = match.group(1)
                    formula_part = match.group(2)
                    
                    # Add the header and formatted table
                    fixed_lines.append('| Formula | # |')
                    fixed_lines.append('| --- | --- |')
                    fixed_lines.append(f'| {image_part} | {formula_part} |')
                    
                    # Skip the separator line
                    i += 2
                    continue
        
        fixed_lines.append(line)
        i += 1
    
    return '\n'.join(fixed_lines)

def process_file(file_path):
    """Process a single file to fix formula tables."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    fixed_content = fix_formula_table(content)
    
    if fixed_content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        return True
    return False

def main():
    # Get all markdown files in articles directory
    articles_dir = Path('articles')
    md_files = list(articles_dir.glob('*.md'))
    
    print(f"Scanning {len(md_files)} files for formula tables without headers...\n")
    
    fixed_files = []
    for md_file in md_files:
        try:
            if process_file(md_file):
                fixed_files.append(md_file.name)
                print(f"✓ Fixed: {md_file.name}")
        except Exception as e:
            print(f"✗ Error in {md_file.name}: {e}")
    
    if fixed_files:
        print(f"\n✓ Total files fixed: {len(fixed_files)}")
    else:
        print("\n✓ No files needed fixing")

if __name__ == '__main__':
    main()
