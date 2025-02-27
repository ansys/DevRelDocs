import os
import re

def replace_pattern(directory):
    # Define the pattern to be replaced
    pattern = r'(#+ \w+)\n\n\n\n\1.*?\n\s*\*+\n\s*\*+\n\s*\*+\n'

    # Walk through all directories and files in the given directory
    for root, dirs, files in os.walk(directory):
        for file in files:
            # Check if the file is a markdown file
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Replace the pattern if it matches
                if re.search(pattern, content, re.DOTALL):
                    content = re.sub(pattern, r'\1\n\n', content, flags=re.DOTALL)

                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)

# Call the function with the directory path
replace_pattern(r'..\chemkin-doc-test')