import os
import re

def remove_html_id_from_h1(directory):
    # Regex pattern to find HTML id tags
    html_id_tag_pattern = re.compile('<a id=".*?"></a>')

    # Walk through directory and subdirectories
    for root, dirs, files in os.walk(directory):
        for file in files:
            # Only process Markdown files
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    lines = f.readlines()
                with open(file_path, 'w', encoding='utf-8') as f:    
                    for line in lines:
                        # Only process heading 1 lines
                        if line.startswith('# '):
                            # Remove HTML id tags
                            line = re.sub(html_id_tag_pattern, '', line)
                        f.write(line)

# Call the function with the directory path
remove_html_id_from_h1('lib')