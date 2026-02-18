#!/usr/bin/env python3
"""
Script to reorganize Markdown files where:
- Row 1 contains an HTML tag
- Row 2 contains a heading1 (# ...)

Changes to:
- Row 1: Heading 1
- Row 2: Empty line
- Row 3: HTML tag
"""

import os
import re
from pathlib import Path


def fix_markdown_file(file_path):
    """
    Fix a single markdown file by moving heading to row 1.
    
    Args:
        file_path: Path to the markdown file
        
    Returns:
        True if file was modified, False otherwise
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        # Check if file has at least 2 lines
        if len(lines) < 2:
            return False
        
        # Check if row 1 contains an HTML tag and row 2 contains a heading1
        line1 = lines[0].strip()
        line2 = lines[1].strip()
        
        # Pattern for HTML tag (e.g., <a id="..."></a>)
        html_pattern = r'^<[^>]+>.*</[^>]+>$|^<[^>]+/>$|^<[^>]+>$'
        # Pattern for heading1
        heading_pattern = r'^#\s+.+'
        
        if re.match(html_pattern, line1) and re.match(heading_pattern, line2):
            # Need to reorganize
            # New structure: heading1, empty line, HTML tag, rest of content
            new_lines = [
                lines[1],  # Heading1 to row 1
                '\n',      # Empty row 2
                lines[0],  # HTML tag to row 3
            ]
            
            # Add the rest of the file (from line 3 onwards)
            if len(lines) > 2:
                new_lines.extend(lines[2:])
            
            # Write back to file
            with open(file_path, 'w', encoding='utf-8') as f:
                f.writelines(new_lines)
            
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False


def process_directory(directory):
    """
    Process all markdown files in the given directory.
    
    Args:
        directory: Path to the directory containing markdown files
    """
    directory_path = Path(directory)
    
    if not directory_path.exists():
        print(f"Directory not found: {directory}")
        return
    
    # Find all .md files
    md_files = list(directory_path.glob('*.md'))
    
    if not md_files:
        print(f"No markdown files found in {directory}")
        return
    
    print(f"Found {len(md_files)} markdown files")
    modified_count = 0
    
    for md_file in md_files:
        if fix_markdown_file(md_file):
            modified_count += 1
            print(f"✓ Modified: {md_file.name}")
    
    print(f"\nSummary:")
    print(f"  Total files: {len(md_files)}")
    print(f"  Modified: {modified_count}")
    print(f"  Unchanged: {len(md_files) - modified_count}")


if __name__ == "__main__":
    # Directory containing the markdown files
    markdown_dir = r"examples"
    
    print("Markdown Header Fix Script")
    print("=" * 50)
    print(f"Processing directory: {markdown_dir}\n")
    
    process_directory(markdown_dir)
    
    print("\nDone!")
