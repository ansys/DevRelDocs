import os
import re

def remove_links_and_comments_from_markdown_files(directory_path):
    # Define the regular expression patterns to match <a id="..."></a> tags and <!-- vale off --> comments
    link_pattern = r'<a id=".*?"></a>'
    comment_pattern = r'<!-- vale off -->'

    # Iterate over all files and subdirectories in the specified directory
    for root, _, files in os.walk(directory_path):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)

                # Read the content of the Markdown file with UTF-8 encoding
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Split the content into lines
                lines = content.split('\n')
                new_lines = []
                heading_found = False

                # Iterate over the lines and remove the patterns and empty lines until a heading 1 is encountered
                for line in lines:
                    if line.startswith('# '):
                        heading_found = True
                    if not heading_found:
                        line = re.sub(link_pattern, '', line)
                        line = re.sub(comment_pattern, '', line)
                        if line.strip() == '':
                            continue
                    new_lines.append(line)

                # Ensure the file starts with a heading 1
                if not new_lines or not new_lines[0].startswith('# '):
                    print(f'Warning: {file_path} does not start with a heading 1.')

                # Join the modified lines back into a single string
                new_content = '\n'.join(new_lines)

                # Write the modified content back to the file
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)

                print(f'Removed <a id="">...</a> tags, <!-- vale off --> comments, and empty lines before heading 1 in {file_path}.')

# Replace 'your_directory' with the actual path to the directory containing your Markdown files
remove_links_and_comments_from_markdown_files('modules')