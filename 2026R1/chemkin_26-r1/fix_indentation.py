import os
import re
from pathlib import Path

def fix_indentation(file_path):
    """
    Remove the extra 4 spaces of indentation from code blocks in markdown files.
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    result_lines = []
    in_code_block = False
    modified = False
    
    for line in lines:
        # Check if we're entering or exiting a code block
        if line.strip().startswith('```'):
            in_code_block = not in_code_block
            result_lines.append(line)
        elif in_code_block:
            # Remove leading 4 spaces if present
            if line.startswith('    '):
                result_lines.append(line[4:])
                modified = True
            else:
                result_lines.append(line)
        else:
            result_lines.append(line)
    
    if modified:
        # Write back to file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(result_lines)
    
    return modified

def main():
    articles_dir = Path('articles')
    
    # Find all pgfId-*.md files
    files = list(articles_dir.glob('pgfId-*.md'))
    
    print(f"Found {len(files)} pgfId-*.md files")
    
    fixed_count = 0
    
    for file_path in files:
        try:
            if fix_indentation(file_path):
                fixed_count += 1
                print(f"Fixed indentation: {file_path.name}")
        except Exception as e:
            print(f"Error processing {file_path.name}: {e}")
    
    print(f"\nFixed indentation in {fixed_count} files")

if __name__ == '__main__':
    main()
