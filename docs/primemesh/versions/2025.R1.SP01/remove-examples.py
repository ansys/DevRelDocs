import os
import re

def remove_sections(folder_path):
    # Iterate over each file in the folder
    for filename in os.listdir(folder_path):
        if filename.endswith(".md"):
            file_path = os.path.join(folder_path, filename)
            
            # Read the content of the file
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()
            
            # Regular expression to find sections starting with "## Examples usin" and stopping at the next heading of lower level
            pattern = re.compile(r'## Examples usin.*?(?=\n## |### |\Z)', re.DOTALL)
            
            # Remove the matched sections
            modified_content = re.sub(pattern, '', content)
            
            # Write the modified content back to the file
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(modified_content)

# Specify the folder path containing markdown files
folder_path = 'api/_autosummary'

# Call the function to remove sections
remove_sections(folder_path)
