#!/usr/bin/env python3
"""
Fix broken tables where SUBROUTINE rows are split across multiple lines.
Joins the continuation lines back into single table rows.
"""

import re
from pathlib import Path

def fix_broken_table_rows(content):
    """
    Fix table rows that are broken across multiple lines.
    Pattern: A line starting with `SUBROUTINE...` followed by `|` but no closing `|`,
    followed by continuation lines, ending with a line that has description and ends with period + spaces.
    """
    lines = content.split('\n')
    fixed_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check if this is a broken SUBROUTINE table row
        # It should start with `SUBROUTINE and have a |, but the description continues on next lines
        if line.startswith('`SUBROUTINE') and '|' in line:
            # Check if the line is complete (ends with |) or broken
            if not line.rstrip().endswith('|'):
                # This row is broken - we need to find where it ends
                combined = line
                i += 1
                
                # Keep reading lines until we find the end of the description
                while i < len(lines):
                    next_line = lines[i]
                    
                    # Stop if we hit another table row or empty line
                    if (next_line.startswith('`SUBROUTINE') or 
                        next_line.startswith('|') and not combined.rstrip().endswith('|') == False or
                        next_line.strip() == ''):
                        i -= 1  # Back up one line
                        break
                    
                    # Add this line to the combined content
                    combined += ' ' + next_line.strip()
                    i += 1
                    
                    # Check if this line completes the row (ends with period and spaces or just period)
                    if next_line.rstrip().endswith('.') or next_line.rstrip().endswith('|'):
                        break
                
                # Clean up the combined line - ensure it has proper | | format
                # Remove any standalone | at the beginning/end of continuation
                combined = re.sub(r'\s+', ' ', combined)  # Normalize whitespace
                fixed_lines.append(combined)
            else:
                # Line is already complete
                fixed_lines.append(line)
        else:
            fixed_lines.append(line)
        
        i += 1
    
    return '\n'.join(fixed_lines)

def process_file(file_path):
    """Process a single file to fix broken tables."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        fixed_content = fix_broken_table_rows(content)
        
        if fixed_content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    # Get all markdown files in articles directory
    articles_dir = Path('articles')
    md_files = list(articles_dir.glob('*.md'))
    
    print(f"Scanning {len(md_files)} markdown files for broken tables...")
    
    fixed_count = 0
    fixed_files = []
    
    for md_file in md_files:
        if process_file(md_file):
            fixed_count += 1
            fixed_files.append(md_file.name)
    
    print(f"\n✓ Fixed {fixed_count} files with broken tables")
    
    if fixed_files:
        print("\nFixed files:")
        for fname in sorted(fixed_files):
            print(f"  - {fname}")

if __name__ == '__main__':
    main()
