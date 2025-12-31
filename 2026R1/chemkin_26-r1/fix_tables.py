import os
import re
from pathlib import Path

def normalize_table(file_path):
    """
    Fix and normalize tables in markdown files:
    1. Remove excessive padding in table separator lines
    2. Clean up spacing issues
    3. Fix broken table rows
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if file contains tables
    if '|' not in content:
        return False
    
    lines = content.split('\n')
    result_lines = []
    modified = False
    in_table = False
    
    for i, line in enumerate(lines):
        # Check if this is a table line
        if '|' in line and not line.strip().startswith('```'):
            # Check if it's a table separator line with excessive dashes
            if re.match(r'^\s*\|[\s\-]+\|', line):
                # Normalize separator to simple "| --- | --- |" format
                num_columns = line.count('|') - 1
                if num_columns > 0:
                    new_line = '| ' + ' | '.join(['---'] * num_columns) + ' |'
                    if new_line != line:
                        result_lines.append(new_line)
                        modified = True
                        in_table = True
                        continue
            
            # Regular table row - clean up excessive spacing
            if '|' in line:
                # Split by pipe, clean each cell, rejoin
                cells = line.split('|')
                cleaned_cells = []
                for cell in cells:
                    # Remove leading/trailing spaces, but preserve content
                    cleaned = cell.strip()
                    # Fix multiple spaces (but keep intentional spacing in content)
                    cleaned = re.sub(r'\s+', ' ', cleaned)
                    # Fix "format- free" -> "format-free"
                    cleaned = re.sub(r'(\w+)-\s+(\w+)', r'\1-\2', cleaned)
                    # Fix " , " -> ", "
                    cleaned = re.sub(r'\s+,\s+', ', ', cleaned)
                    cleaned_cells.append(cleaned)
                
                # Rebuild line
                new_line = '| ' + ' | '.join(cleaned_cells[1:-1]) + ' |'
                if new_line != line:
                    result_lines.append(new_line)
                    modified = True
                    in_table = True
                else:
                    result_lines.append(line)
                    in_table = True
                continue
        else:
            in_table = False
        
        result_lines.append(line)
    
    if modified:
        # Write back to file
        new_content = '\n'.join(result_lines)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
    
    return modified

def main():
    articles_dir = Path('articles')
    
    # Find all .md files
    files = list(articles_dir.glob('*.md'))
    
    print(f"Found {len(files)} markdown files")
    
    fixed_count = 0
    
    for file_path in files:
        try:
            if normalize_table(file_path):
                fixed_count += 1
                print(f"Fixed tables in: {file_path.name}")
        except Exception as e:
            print(f"Error processing {file_path.name}: {e}")
    
    print(f"\nFixed tables in {fixed_count} files")

if __name__ == '__main__':
    main()
