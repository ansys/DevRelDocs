import os
import re
from pathlib import Path

def fix_markdown_file(file_path):
    """
    Fix a markdown file by adding code block markers (```fortran) around code sections
    starting from line 4 (before the repeated title) and keeping original indentation.
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Check if file has at least 10 lines
    if len(lines) < 10:
        return False
    
    # Check if line 5 (index 4) has the repeated pattern (e.g., "SKCUMS    SKCUMS    SKCUMS")
    # and lines 6-8 have asterisks
    if len(lines) <= 8:
        return False
    
    line5 = lines[4].strip()
    has_pattern = False
    
    # Check if line 5 has repeated words
    words = line5.split()
    if len(words) >= 3:
        # Check if most words are the same
        if len(set(words)) <= 2:
            has_pattern = True
    
    # Also check for asterisks in subsequent lines
    if not has_pattern:
        for i in range(5, min(9, len(lines))):
            if '*****' in lines[i]:
                has_pattern = True
                break
    
    if not has_pattern:
        return False
    
    # Check if already has code block marker at line 4
    if len(lines) > 3 and lines[3].strip().startswith('```'):
        return False  # Already processed
    
    # Find where the code section ends (multiple consecutive empty lines)
    code_end_index = -1
    for i in range(10, len(lines)):
        # Check for 3+ consecutive empty lines
        if i + 2 < len(lines):
            if (lines[i].strip() == '' and 
                lines[i+1].strip() == '' and 
                lines[i+2].strip() == ''):
                code_end_index = i
                break
    
    if code_end_index == -1:
        code_end_index = len(lines) - 1
    
    # Determine the language - check if it's Fortran
    language = ""
    for i in range(4, min(code_end_index, len(lines))):
        if 'SUBROUTINE' in lines[i]:
            language = "fortran"
            break
    
    # Build the new file content
    result_lines = []
    
    # Lines 1-3 (title and blank lines)
    result_lines.extend(lines[:3])
    
    # Add opening code block at line 4
    if language:
        result_lines.append(f'```{language}\n')
    else:
        result_lines.append('```\n')
    
    # Add the code section (lines 4 through code_end_index) with original indentation
    result_lines.extend(lines[4:code_end_index])
    
    # Add closing code block
    result_lines.append('```\n')
    
    # Add remaining lines (if any)
    if code_end_index < len(lines):
        result_lines.extend(lines[code_end_index:])
    
    # Write back to file
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(result_lines)
    
    return True

def main():
    articles_dir = Path('articles')
    
    # Find all pgfId-*.md files
    files = list(articles_dir.glob('pgfId-*.md'))
    
    print(f"Found {len(files)} pgfId-*.md files")
    
    fixed_count = 0
    skipped_count = 0
    
    for file_path in files:
        try:
            if fix_markdown_file(file_path):
                fixed_count += 1
                print(f"Fixed: {file_path.name}")
            else:
                skipped_count += 1
        except Exception as e:
            print(f"Error processing {file_path.name}: {e}")
            skipped_count += 1
    
    print(f"\nProcessed {fixed_count} files successfully")
    print(f"Skipped {skipped_count} files (already processed or no pattern found)")

if __name__ == '__main__':
    main()
