import os
import re

def remove_specific_pattern(directory):
    # Define the pattern to be removed
    pattern = r'\*\s\*\s\*\n\n\|\s\[.*?\)\s\|\s\[.*?\)\s/\s\[.*?\)\s/\s\[.*?\)\s\|\s\[.*?\)\s\|\n\|\s-+\s\|\s-+\s\|\s-+\s\|\n\n\*\s\*\s\*\n'
    
    # Walk through all directories and files in the given directory
    for root, dirs, files in os.walk(directory):
        for file in files:
            # Check if the file is a markdown file
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Remove the pattern if it contains one or several links
                if re.search(pattern, content):
                    content = re.sub(pattern, '', content)
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)

# Call the function with the directory path
remove_specific_pattern(r'.\md-files')