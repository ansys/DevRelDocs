import os
import re

def remove_numbers_from_headings(directory):
    # Walk through all directories and files in the given directory
    for root, dirs, files in os.walk(directory):
        for file in files:
            # Check if the file is a markdown file
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    lines = f.readlines()

                with open(file_path, 'w', encoding='utf-8') as f:
                    in_code_block = False
                    for line in lines:
                        # Check if we're entering or leaving a code block
                        if line.strip().startswith('```'):
                            in_code_block = not in_code_block
                        # If the line starts with a heading and we're not in a code block
                        if line.startswith('#') and not in_code_block:
                            # Remove any numbers and dots found directly after # and a possible space
                            line = re.sub(r'(#\s*)[\d\.]+\s*', r'\1', line)
                        f.write(line)

# Call the function with the directory path
remove_numbers_from_headings('./md-files')