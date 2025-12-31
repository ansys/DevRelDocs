#!/usr/bin/env python3
"""
Find all markdown files with code snippets that are missing triple backticks.
Look for indented code blocks (4+ spaces) that should be fenced code blocks.
"""

import re
from pathlib import Path

def find_missing_code_blocks(file_path):
    """
    Find code blocks that use indentation instead of fenced code blocks.
    Returns list of (line_number, snippet) tuples.
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    issues = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Check for indented code (4+ spaces at start)
        if re.match(r'^    \S', line):
            # This might be an indented code block
            # Check if it's already inside a fenced code block
            in_fenced_block = False
            for j in range(i - 1, max(0, i - 10), -1):
                if lines[j].strip().startswith('```'):
                    in_fenced_block = True
                    break
                if lines[j].strip() and not lines[j].startswith('    '):
                    break
            
            if not in_fenced_block:
                # Found an indented code block that's not in fenced block
                start_line = i
                snippet_lines = []
                
                # Collect all consecutive indented lines
                while i < len(lines):
                    if lines[i].startswith('    ') or lines[i].strip() == '':
                        snippet_lines.append(lines[i])
                        i += 1
                    else:
                        break
                
                # Remove trailing empty lines
                while snippet_lines and snippet_lines[-1].strip() == '':
                    snippet_lines.pop()
                
                if snippet_lines:
                    snippet = ''.join(snippet_lines)
                    issues.append((start_line + 1, snippet))
                
                continue
        
        i += 1
    
    return issues

def main():
    articles_dir = Path('articles')
    md_files = sorted(articles_dir.glob('*.md'))
    
    print(f"Scanning {len(md_files)} files for missing code block fences...\n")
    
    files_with_issues = {}
    
    for md_file in md_files:
        issues = find_missing_code_blocks(md_file)
        if issues:
            files_with_issues[md_file.name] = issues
    
    if files_with_issues:
        print(f"Found {len(files_with_issues)} files with potential missing code block fences:\n")
        
        for filename, issues in sorted(files_with_issues.items()):
            print(f"\n📄 {filename}")
            for line_num, snippet in issues:
                # Show first 2 lines of snippet
                preview = snippet.split('\n')[:2]
                preview_text = '\n      '.join(preview)
                print(f"   Line {line_num:4d}: {preview_text}")
    else:
        print("✓ No files found with missing code block fences")

if __name__ == '__main__':
    main()
