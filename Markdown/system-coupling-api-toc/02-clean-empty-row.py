import os
import re

def remove_empty_rows_at_top_and_before_heading1(directory_path):
    # Define the regular expression pattern to match empty rows at the top and before Heading 1
    pattern = r'^\s*\n+'

    # Iterate over all files and subdirectories in the specified directory
    for root, dirs, files in os.walk(directory_path):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)

                # Read the content of the Markdown file
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Use re.sub() to remove empty rows at the top and before the first Heading 1
                new_content = re.sub(pattern, '', content, count=1)

                # Write the modified content back to the file
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)

                print(f'Removed empty rows at the top and before Heading 1 in {file_path}.')

# Replace 'your_directory' with the actual path to the directory containing your Markdown files
remove_empty_rows_at_top_and_before_heading1('articles')
