#!/usr/bin/env python3
"""
Add header row to formula tables that contain images.
Transforms:
    | ![image](./graphics/file.svg) | **(X-Y)** |
    | --- | --- |
To:
    | Formula | # |
    | --- | --- |
    | ![image](./graphics/file.svg) | **(X-Y)** |
"""

import re
from pathlib import Path

def fix_formula_tables(file_path):
    """Add headers to formula tables in a markdown file."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Pattern: Line with image followed by separator line
    # Match the table starting with the image row
    pattern = r'(\| !\[image\]\(\.\/graphics\/[^)]+\.svg\) \| \*\*\([^)]+\)\*\* \|\n\| --- \| --- \|)'
    
    def replacement(match):
        # Add header row before the image row
        image_and_sep = match.group(1)
        # Split into image row and separator
        lines = image_and_sep.split('\n')
        return '| Formula | # |\n| --- | --- |\n' + lines[0]
    
    content = re.sub(pattern, replacement, content)
    
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    # Files that need fixing based on grep results
    files_to_fix = [
        'articles/marker-1017775.md',
        'articles/pgfId-1017885.md',
        'articles/pgfId-1020396.md',
        'articles/pgfId-1085459.md',
        'articles/pgfId-1126317.md'
    ]
    
    fixed_count = 0
    for file_path in files_to_fix:
        path = Path(file_path)
        if path.exists():
            if fix_formula_tables(path):
                print(f"✓ Fixed: {file_path}")
                fixed_count += 1
            else:
                print(f"⚠ No changes needed: {file_path}")
        else:
            print(f"✗ Not found: {file_path}")
    
    print(f"\nTotal files fixed: {fixed_count}")

if __name__ == '__main__':
    main()
