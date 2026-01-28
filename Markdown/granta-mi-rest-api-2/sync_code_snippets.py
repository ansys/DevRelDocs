#!/usr/bin/env python3
"""
Synchronize code snippets from source files into Markdown documentation.

This script scans Markdown files for DocFX :::code directives and replaces them
with actual code blocks extracted from the source files, while preserving the
original directives as HTML comments for future re-synchronization.

Usage:
    python sync_code_snippets.py [--docs-dir DOCS_DIR] [--dry-run]

Arguments:
    --docs-dir: Directory containing Markdown files (default: ./docs)
    --dry-run: Show what would be changed without modifying files
"""

import re
import argparse
from pathlib import Path
from typing import List, Tuple, Optional


class CodeSnippetSynchronizer:
    """Synchronizes code snippets between source files and Markdown documentation."""
    
    # Regex to match DocFX code directives
    CODE_DIRECTIVE_PATTERN = re.compile(
        r':::code\s+source="([^"]+)"\s+language="([^"]+)"\s+range="(\d+)-(\d+)":::'
    )
    
    # Pattern to find our synchronized code blocks (directive + code block)
    SYNCED_BLOCK_PATTERN = re.compile(
        r'<!--\s*:::code\s+source="([^"]+)"\s+language="([^"]+)"\s+range="(\d+)-(\d+)":::\s*-->\n```\w+\n.*?```',
        re.DOTALL
    )

    def __init__(self, docs_dir: Path, dry_run: bool = False):
        """
        Initialize the synchronizer.
        
        Args:
            docs_dir: Path to the documentation directory
            dry_run: If True, don't modify files, just report changes
        """
        self.docs_dir = Path(docs_dir)
        self.dry_run = dry_run
        self.changes_made = 0
        
    def extract_code_lines(self, source_path: Path, start_line: int, end_line: int) -> List[str]:
        """
        Extract specified lines from a source file.
        
        Args:
            source_path: Path to the source file
            start_line: Starting line number (1-indexed)
            end_line: Ending line number (1-indexed, inclusive)
            
        Returns:
            List of code lines
        """
        try:
            with open(source_path, 'r', encoding='utf-8') as f:
                lines = f.readlines()
                # Convert to 0-indexed and extract range
                return [line.rstrip('\n') for line in lines[start_line-1:end_line]]
        except FileNotFoundError:
            raise FileNotFoundError(f"Source file not found: {source_path}")
        except Exception as e:
            raise Exception(f"Error reading {source_path}: {e}")
    
    def create_synced_block(self, source: str, language: str, start: int, end: int, code_lines: List[str]) -> str:
        """
        Create a synchronized code block with the original directive as a comment.
        
        Args:
            source: Source file path
            language: Programming language
            start: Start line number
            end: End line number
            code_lines: Extracted code lines
            
        Returns:
            Formatted Markdown with commented directive and code block
        """
        directive = f':::code source="{source}" language="{language}" range="{start}-{end}":::'
        code = '\n'.join(code_lines)
        return f'<!-- {directive} -->\n```{language}\n{code}\n```'
    
    def process_markdown_file(self, md_file: Path) -> Tuple[bool, int]:
        """
        Process a single Markdown file and synchronize code snippets.
        
        Args:
            md_file: Path to the Markdown file
            
        Returns:
            Tuple of (was_modified, num_snippets_updated)
        """
        try:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception as e:
            print(f"Error reading {md_file}: {e}")
            return False, 0
        
        original_content = content
        snippets_updated = 0
        
        # Find all code directives (both standalone and already synced)
        def replace_directive(match):
            nonlocal snippets_updated
            
            source = match.group(1)
            language = match.group(2)
            start = int(match.group(3))
            end = int(match.group(4))
            
            # Resolve source path relative to the Markdown file
            source_path = (md_file.parent / source).resolve()
            
            try:
                # Extract code from source file
                code_lines = self.extract_code_lines(source_path, start, end)
                
                # Create synchronized block
                synced_block = self.create_synced_block(source, language, start, end, code_lines)
                
                snippets_updated += 1
                return synced_block
                
            except FileNotFoundError as e:
                print(f"  Warning in {md_file.name}: {e}")
                return match.group(0)  # Keep original if source not found
            except Exception as e:
                print(f"  Error in {md_file.name}: {e}")
                return match.group(0)  # Keep original on error
        
        # First, replace any existing synced blocks
        content = self.SYNCED_BLOCK_PATTERN.sub(
            lambda m: replace_directive(re.match(self.CODE_DIRECTIVE_PATTERN, m.group(0))),
            content
        )
        
        # Then, replace any standalone directives
        content = self.CODE_DIRECTIVE_PATTERN.sub(replace_directive, content)
        
        # Check if content changed
        if content != original_content:
            if not self.dry_run:
                try:
                    with open(md_file, 'w', encoding='utf-8') as f:
                        f.write(content)
                except Exception as e:
                    print(f"Error writing {md_file}: {e}")
                    return False, 0
            return True, snippets_updated
        
        return False, 0
    
    def synchronize_all(self) -> None:
        """Synchronize all Markdown files in the docs directory."""
        if not self.docs_dir.exists():
            print(f"Error: Documentation directory not found: {self.docs_dir}")
            return
        
        # Find all Markdown files
        md_files = list(self.docs_dir.rglob('*.md'))
        
        if not md_files:
            print(f"No Markdown files found in {self.docs_dir}")
            return
        
        print(f"Scanning {len(md_files)} Markdown file(s)...")
        if self.dry_run:
            print("DRY RUN MODE - No files will be modified\n")
        
        total_files_modified = 0
        total_snippets_updated = 0
        
        for md_file in md_files:
            was_modified, snippets_count = self.process_markdown_file(md_file)
            
            if was_modified:
                total_files_modified += 1
                total_snippets_updated += snippets_count
                status = "[DRY RUN] Would update" if self.dry_run else "Updated"
                print(f"{status}: {md_file.relative_to(self.docs_dir)} ({snippets_count} snippet(s))")
        
        # Summary
        print(f"\n{'=' * 60}")
        if total_files_modified > 0:
            action = "would be modified" if self.dry_run else "modified"
            print(f"✓ {total_files_modified} file(s) {action}")
            print(f"✓ {total_snippets_updated} code snippet(s) synchronized")
        else:
            print("✓ All files are up to date")
        print(f"{'=' * 60}")


def main():
    """Main entry point for the script."""
    parser = argparse.ArgumentParser(
        description='Synchronize code snippets from source files into Markdown documentation.',
        formatter_class=argparse.RawDescriptionHelpFormatter
    )
    parser.add_argument(
        '--docs-dir',
        type=Path,
        default=Path('./docs'),
        help='Directory containing Markdown files (default: ./docs)'
    )
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Show what would be changed without modifying files'
    )
    
    args = parser.parse_args()
    
    # Create synchronizer and run
    synchronizer = CodeSnippetSynchronizer(args.docs_dir, args.dry_run)
    synchronizer.synchronize_all()


if __name__ == '__main__':
    main()
