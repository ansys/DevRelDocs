#!/usr/bin/env python3
"""
Automatically fix indented code blocks by converting them to fenced code blocks.
Only fixes specific known patterns to avoid false positives.
"""

import re
from pathlib import Path

# Files that definitely need fixing based on manual review
FILES_TO_FIX = {
    # Files with actual code snippets (not decorative headers)
    'articles/marker-1082818.md': 'chemkin',
    'articles/marker-1126991.md': 'chemkin',
    'articles/pgfId-1017885.md': ['chemkin', 'fortran'],  # Has both types
    'articles/pgfId-1020396.md': ['chemkin', 'fortran'],
    'articles/pgfId-1080354.md': 'chemkin',
    'articles/pgfId-1082370.md': 'chemkin',
    'articles/pgfId-1085750.md': 'fortran',
    'articles/pgfId-1085808.md': 'cpp',
    'articles/pgfId-1089398.md': 'chemkin',
    'articles/pgfId-1130765.md': 'text',  # Parameter description
    'articles/transformed_marker-1017775.md': ['chemkin', 'fortran'],
    'articles/transformed_pgfId-1017885.md': ['chemkin', 'fortran'],
    'articles/transformed_pgfId-1020396.md': ['chemkin', 'fortran'],
}

def fix_indented_code_blocks(file_path, code_types):
    """
    Convert indented code blocks to fenced code blocks.
    code_types can be a string or list of strings indicating which sections to fix.
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    lines = content.split('\n')
    fixed_lines = []
    i = 0
    
    if isinstance(code_types, str):
        code_types = [code_types]
    
    while i < len(lines):
        line = lines[i]
        
        # Check if this is an indented code block
        if re.match(r'^    \S', line):
            # Check if already in a fenced block
            in_fenced = False
            for j in range(max(0, i - 5), i):
                if fixed_lines and fixed_lines[len(fixed_lines) - (i - j)].strip().startswith('```'):
                    in_fenced = True
                    break
            
            if not in_fenced:
                # Collect the code block
                code_lines = []
                while i < len(lines) and (lines[i].startswith('    ') or lines[i].strip() == ''):
                    code_lines.append(lines[i])
                    i += 1
                
                # Remove trailing empty lines
                while code_lines and code_lines[-1].strip() == '':
                    code_lines.pop()
                
                if code_lines:
                    # Remove the 4-space indentation
                    cleaned_lines = [line[4:] if line.startswith('    ') else line for line in code_lines]
                    
                    # Determine language hint
                    lang = ''
                    text = '\n'.join(cleaned_lines).upper()
                    
                    if 'chemkin' in code_types:
                        if any(kw in text for kw in ['ELEMENTS', 'SPECIES', 'REACTIONS', 'SITE/', 'SDEN']):
                            lang = ''  # Chemkin input - no language specifier
                        elif 'fortran' in code_types and any(kw in text for kw in ['CALL ', 'SUBROUTINE', 'DIMENSION', 'PARAMETER']):
                            lang = 'fortran'
                    elif 'fortran' in code_types:
                        lang = 'fortran'
                    elif 'cpp' in code_types:
                        lang = 'cpp'
                    elif 'text' in code_types:
                        lang = ''
                    
                    # Add fenced code block
                    fixed_lines.append(f'```{lang}')
                    fixed_lines.extend(cleaned_lines)
                    fixed_lines.append('```')
                    
                    continue
        
        fixed_lines.append(line)
        i += 1
    
    fixed_content = '\n'.join(fixed_lines)
    
    if fixed_content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        return True
    return False

def main():
    print("Converting indented code blocks to fenced code blocks...\n")
    
    fixed_count = 0
    for file_path_str, code_types in FILES_TO_FIX.items():
        file_path = Path(file_path_str)
        if file_path.exists():
            try:
                if fix_indented_code_blocks(file_path, code_types):
                    print(f"✓ Fixed: {file_path_str}")
                    fixed_count += 1
                else:
                    print(f"  No changes: {file_path_str}")
            except Exception as e:
                print(f"✗ Error in {file_path_str}: {e}")
        else:
            print(f"✗ Not found: {file_path_str}")
    
    print(f"\n✓ Total files fixed: {fixed_count}")

if __name__ == '__main__':
    main()
