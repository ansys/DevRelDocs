import os
import re

def remove_specific_pattern(directory):
    # Define the patterns to be removed
    pattern = r'\*\s\*\s\*\n\n\|.*?\|\n\n\*\s\*\s\*\n'
    draft_pattern = r'Draft Published.*\n'
    release_pattern = r'_Release 2025 R1 -\(C\) ANSYS, Inc\. All rights reserved\._'
    proprietary_pattern = r'_Contains proprietary and confidential information of ANSYS, Inc\. and its\nsubsidiaries and affiliates\._'
    trailing_underscore_pattern = r'_$'
    
    # Walk through all directories and files in the given directory
    for root, dirs, files in os.walk(directory):
        for file in files:
            # Check if the file is a markdown file
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Remove the pattern if it matches
                if re.search(pattern, content, re.DOTALL):
                    content = re.sub(pattern, '', content, flags=re.DOTALL)

                # Remove lines starting with "Draft Published" along with the following date and time
                if re.search(draft_pattern, content):
                    content = re.sub(draft_pattern, '', content)

                # Remove the release pattern
                if re.search(release_pattern, content):
                    content = re.sub(release_pattern, '', content)

                # Remove the proprietary pattern
                if re.search(proprietary_pattern, content, re.DOTALL):
                    content = re.sub(proprietary_pattern, '', content, flags=re.DOTALL)

                # Remove trailing underscore
                if re.search(trailing_underscore_pattern, content):
                    content = re.sub(trailing_underscore_pattern, '', content)

                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)

# Call the function with the directory path
remove_specific_pattern(r'.\articles')