import os
import re

def remove_links_from_markdown_files(directory_path):
    # Define the regular expression pattern to match <a id="..."></a> tags at the beginning of the file
    pattern = r'^<a id=".*?"></a>'

    # Iterate over all files and subdirectories in the specified directory
    for root, _, files in os.walk(directory_path):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)

                # Read the content of the Markdown file with UTF-8 encoding
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Use re.sub() to remove the pattern only if it's at the beginning of the file
                new_content = re.sub(pattern, '', content, count=1)

                # Write the modified content back to the file
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)

                print(f'Removed <a id="">...</a> tag from the first row of {file_path}.')

# Replace 'your_directory' with the actual path to the directory containing your Markdown files
remove_links_from_markdown_files('articles')

