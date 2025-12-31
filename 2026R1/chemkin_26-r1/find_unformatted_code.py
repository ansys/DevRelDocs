import os
import re
from pathlib import Path

def has_unformatted_code(file_path):
    """
    Check if a file has unformatted code snippets (indented code without backticks).
    Returns a dict with details if found, None otherwise.
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        issues = []
        
        # Look for patterns indicating unformatted code
        for i, line in enumerate(lines, 1):
            # Check for indented CALL statements (Fortran)
            if re.match(r'^\s{4,}CALL\s+[A-Z]', line):
                # Check if it's not already in a code block
                # Look backwards for opening ```
                in_code_block = False
                for j in range(i-2, max(0, i-20), -1):
                    if lines[j].strip().startswith('```'):
                        in_code_block = True
                        break
                    if lines[j].strip() and not lines[j].startswith(' '):
                        break
                
                if not in_code_block:
                    issues.append({
                        'line': i,
                        'type': 'Fortran CALL statements',
                        'sample': line.strip()[:50]
                    })
                    break
            
            # Check for ELEMENTS/SPECIES/REACTIONS (Chemkin input)
            if re.match(r'^\s{4,}(ELEMENTS\s+|SPECIES\s+|REACTIONS)', line):
                in_code_block = False
                for j in range(i-2, max(0, i-10), -1):
                    if lines[j].strip().startswith('```'):
                        in_code_block = True
                        break
                
                if not in_code_block:
                    issues.append({
                        'line': i,
                        'type': 'Chemkin input file',
                        'sample': line.strip()[:50]
                    })
                    break
            
            # Check for Fortran DO loops
            if re.match(r'^\s{4,}DO\s+\d+', line):
                in_code_block = False
                for j in range(i-2, max(0, i-20), -1):
                    if lines[j].strip().startswith('```'):
                        in_code_block = True
                        break
                
                if not in_code_block:
                    issues.append({
                        'line': i,
                        'type': 'Fortran DO loop',
                        'sample': line.strip()[:50]
                    })
                    break
        
        return issues if issues else None
    
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return None

def main():
    articles_dir = Path('articles')
    
    # Find all .md files (excluding transformed_ files)
    files = [f for f in articles_dir.glob('*.md') if not f.name.startswith('transformed_')]
    
    print(f"Scanning {len(files)} markdown files for unformatted code snippets...\n")
    
    files_to_fix = []
    
    for file_path in sorted(files):
        issues = has_unformatted_code(file_path)
        if issues:
            files_to_fix.append((file_path, issues))
    
    if files_to_fix:
        print(f"Found {len(files_to_fix)} files with unformatted code snippets:\n")
        print("=" * 80)
        
        for file_path, issues in files_to_fix:
            print(f"\n📄 {file_path.name}")
            for issue in issues:
                print(f"   Line {issue['line']:4d}: {issue['type']}")
                print(f"            Sample: {issue['sample']}")
        
        print("\n" + "=" * 80)
        print(f"\nTotal files needing fixes: {len(files_to_fix)}")
    else:
        print("✅ No files with unformatted code snippets found!")

if __name__ == '__main__':
    main()
