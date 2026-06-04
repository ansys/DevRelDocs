import os
import re

def remove_braces_in_headings(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Regular expression to match headings with braces
    modified_content = re.sub(r'(#+\s.*?){.*?}', r'\1', content)

    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(modified_content)

def process_markdown_files(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                remove_braces_in_headings(file_path)

# Example usage
if __name__ == "__main__":
    directory = 'libraries'
    process_markdown_files(directory)