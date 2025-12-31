#!/usr/bin/env python3
"""
Manually fix all broken markdown tables by identifying the exact pattern
and joining continuation lines properly without losing any rows.
"""

import re
from pathlib import Path

# List of files with known broken tables based on grep search
FILES_TO_FIX = [
    'articles/pgfId-1062725api.md',
    'articles/pgfId-1062795.md',
    'articles/pgfId-1062833.md',
    'articles/pgfId-1071816.md',
    'articles/pgfId-1071956.md',
    'articles/pgfId-1072129.md',
    'articles/pgfId-1072203.md',
    'articles/pgfId-1072258.md',
    'articles/pgfId-1072364.md',
    'articles/pgfId-1072442.md',
    'articles/pgfId-1021042.md',
    'articles/transformed_i78942.md',
    'articles/transformed_pgfId-1021042.md',
    'articles/transformed_pgfId-1062725api.md',
    'articles/transformed_pgfId-1062756.md',
    'articles/transformed_pgfId-1062795.md',
    'articles/transformed_pgfId-1062833.md',
    'articles/transformed_pgfId-1066867.md',
    'articles/transformed_pgfId-1066901.md',
    'articles/transformed_pgfId-1066953.md',
    'articles/transformed_pgfId-1067107.md',
    'articles/transformed_pgfId-1067123api.md',
    'articles/transformed_pgfId-1067294.md',
    'articles/transformed_pgfId-1067361.md',
    'articles/transformed_pgfId-1067446.md',
    'articles/transformed_pgfId-1067510.md',
    'articles/transformed_pgfId-1067584.md',
    'articles/transformed_pgfId-1067658.md',
    'articles/transformed_pgfId-1068000.md',
    'articles/transformed_pgfId-1068172.md',
]

def fix_table_in_file(filepath):
    """
    Fix broken tables where description spans multiple lines.
    
    Pattern 1: | `SUBROUTINE...` | Text |
              continuation text on next lines
    
    Pattern 2: `SUBROUTINE...`| Text (missing leading |)
              continuation text on next lines
    """
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    fixed_lines = []
    i = 0
    changes_made = False
    
    while i < len(lines):
        line = lines[i]
        
        # Pattern 1: Proper table row start | `SUBROUTINE...` | but description continues
        # Check if line has `SUBROUTINE, has |, and the description part is incomplete
        if ('`SUBROUTINE' in line and '|' in line):
            # Check if this row needs continuation (description is very short or ends with just `|`)
            parts = line.split('|')
            if len(parts) >= 3:
                desc_part = parts[2].strip()
                
                # If description is suspiciously short (< 20 chars) or just ends oddly
                if len(desc_part) < 20 or desc_part.endswith('|'):
                    # Collect continuation lines
                    collected = [line.rstrip()]
                    i += 1
                    
                    while i < len(lines):
                        next_line = lines[i].rstrip()
                        
                        # Stop if we hit another SUBROUTINE row, empty line, or separator
                        if ('`SUBROUTINE' in next_line or 
                            next_line.strip() == '' or
                            next_line.startswith('[') or
                            (next_line.startswith('|') and '---' in next_line)):
                            i -= 1
                            break
                        
                        collected.append(next_line)
                        i += 1
                        
                        # Stop if line ends with period
                        if next_line.endswith('.') or next_line.endswith('|'):
                            break
                    
                    # Join all parts - remove leading | from continuation lines
                    combined = collected[0]
                    for cont_line in collected[1:]:
                        clean_cont = cont_line.lstrip('|').strip()
                        if clean_cont:
                            combined += ' ' + clean_cont
                    
                    # Clean up whitespace
                    combined = re.sub(r'\s+', ' ', combined)
                    # Ensure ends with |
                    if not combined.endswith('|'):
                        combined += ' |'
                    # Ensure starts with |
                    if not combined.startswith('|'):
                        combined = '| ' + combined
                    
                    fixed_lines.append(combined + '\n')
                    changes_made = True
                else:
                    fixed_lines.append(line)
            else:
                fixed_lines.append(line)
        
        # Pattern 2: Row missing leading | - starts directly with `SUBROUTINE
        elif line.startswith('`SUBROUTINE') and '|' in line:
            # This row is missing the leading |
            collected = [line.rstrip()]
            i += 1
            
            while i < len(lines):
                next_line = lines[i].rstrip()
                
                if ('`SUBROUTINE' in next_line or
                    next_line.strip() == '' or
                    next_line.startswith('[') or
                    (next_line.startswith('|') and '---' in next_line)):
                    i -= 1
                    break
                
                collected.append(next_line)
                i += 1
                
                if next_line.endswith('.') or next_line.endswith('|'):
                    break
            
            # Join and add leading |
            combined = '| ' + collected[0]
            for cont_line in collected[1:]:
                clean_cont = cont_line.strip()
                if clean_cont and not clean_cont.startswith('|'):
                    combined += ' ' + clean_cont
            
            combined = re.sub(r'\s+', ' ', combined)
            if not combined.endswith('|'):
                combined += ' |'
            
            fixed_lines.append(combined + '\n')
            changes_made = True
        else:
            fixed_lines.append(line)
        
        i += 1
    
    if changes_made:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(fixed_lines)
        return True
    return False

def main():
    print("Fixing broken tables in markdown files...")
    
    fixed_count = 0
    for filepath in FILES_TO_FIX:
        path = Path(filepath)
        if path.exists():
            try:
                if fix_table_in_file(path):
                    print(f"✓ Fixed: {filepath}")
                    fixed_count += 1
                else:
                    print(f"  No changes: {filepath}")
            except Exception as e:
                print(f"✗ Error in {filepath}: {e}")
        else:
            print(f"✗ Not found: {filepath}")
    
    print(f"\n✓ Total files fixed: {fixed_count}")

if __name__ == '__main__':
    main()
