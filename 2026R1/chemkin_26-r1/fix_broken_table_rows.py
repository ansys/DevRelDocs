#!/usr/bin/env python3
"""
Fix broken markdown tables where SUBROUTINE rows span multiple lines.
Joins continuation lines into single table rows.
"""

import re
from pathlib import Path

def fix_file_tables(file_path):
    """Fix broken tables in a markdown file."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    lines = content.split('\n')
    fixed_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check if this is a SUBROUTINE table row that's missing the closing |
        # Pattern: starts with `SUBROUTINE, has a |, but doesn't end with |
        if line.startswith('`SUBROUTINE') and '|' in line and not line.rstrip().endswith('|'):
            # This is a broken row - collect continuation lines
            row_parts = [line]
            i += 1
            
            # Keep collecting lines until we find one that ends properly or hit next row/empty line
            while i < len(lines):
                next_line = lines[i]
                
                # Stop conditions:
                # - Hit another SUBROUTINE row
                # - Hit an empty line
                # - Hit a line that starts with | (separator or next row)
                # - Hit a markdown link line [
                if (next_line.startswith('`SUBROUTINE') or 
                    next_line.strip() == '' or
                    (next_line.startswith('[') and ']' in next_line) or
                    (next_line.startswith('|') and '---' in next_line)):
                    break
                
                # Add this continuation line
                row_parts.append(next_line.strip())
                i += 1
                
                # If we found a line ending with period + spaces, we're done
                if next_line.rstrip().endswith('.') or next_line.rstrip().endswith('|'):
                    break
            
            # Join all parts into one row
            combined_row = ' '.join(row_parts)
            # Clean up multiple spaces
            combined_row = re.sub(r'\s+', ' ', combined_row)
            # Ensure it ends with |
            if not combined_row.rstrip().endswith('|'):
                combined_row = combined_row.rstrip() + ' |'
            
            fixed_lines.append(combined_row)
        else:
            fixed_lines.append(line)
        
        i += 1
    
    fixed_content = '\n'.join(fixed_lines)
    
    if fixed_content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        return True
    return False

def main():
    # Get all markdown files
    articles_dir = Path('articles')
    md_files = list(articles_dir.glob('*.md'))
    
    print(f"Scanning {len(md_files)} files for broken tables...")
    
    fixed_files = []
    
    for md_file in md_files:
        try:
            if fix_file_tables(md_file):
                fixed_files.append(md_file.name)
                print(f"✓ Fixed: {md_file.name}")
        except Exception as e:
            print(f"✗ Error in {md_file.name}: {e}")
    
    print(f"\n✓ Total files fixed: {len(fixed_files)}")

if __name__ == '__main__':
    main()
