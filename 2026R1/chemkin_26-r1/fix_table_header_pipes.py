#!/usr/bin/env python3
"""
Fix tables that have headers but are missing the leading pipe |.

From:
Subroutine | Description
---|---

To:
| Subroutine | Description |
| --- | --- |
"""

import re
from pathlib import Path

def fix_table_headers(content):
    """
    Find and fix table headers that are missing leading pipes.
    Pattern: Line with text|text followed by ---|--- separator
    """
    lines = content.split('\n')
    fixed_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check if this line looks like a table header without leading |
        # Pattern: text | text (no leading |)
        if (not line.startswith('|') and '|' in line and 
            i + 1 < len(lines) and re.match(r'^---\|---', lines[i + 1])):
            
            # This is a table header without leading |
            # Add leading | and ensure trailing |
            header = line.strip()
            if not header.endswith('|'):
                header += ' |'
            header = '| ' + header
            
            # Fix the separator line too
            separator = lines[i + 1].strip()
            if not separator.startswith('|'):
                separator = '| ' + separator
            if not separator.endswith('|'):
                separator += ' |'
            
            fixed_lines.append(header)
            fixed_lines.append(separator)
            i += 2
            continue
        
        fixed_lines.append(line)
        i += 1
    
    return '\n'.join(fixed_lines)

def process_file(file_path):
    """Process a single file to fix table headers."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    fixed_content = fix_table_headers(content)
    
    if fixed_content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        return True
    return False

def main():
    # Get all markdown files in articles directory
    articles_dir = Path('articles')
    md_files = list(articles_dir.glob('*.md'))
    
    print(f"Scanning {len(md_files)} files for tables with improper headers...\n")
    
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
