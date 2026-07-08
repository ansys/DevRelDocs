import os
import re

def process_markdown_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    # Remove comments at the start of the file
    while lines and lines[0].strip().startswith("<!--"):
        lines.pop(0)

    # Find all ID tags before the first heading 1
    id_tags = []
    heading_1_index = None
    for i, line in enumerate(lines):
        if heading_1_index is None and line.startswith("# "):  # Heading 1 found
            heading_1_index = i
            break
        if re.match(r'<a id=".*"></a>', line.strip()):  # ID tag found
            id_tags.append(line.strip())

    # If no heading 1 or no misplaced ID tags, skip processing
    if heading_1_index is None or not id_tags:
        return

    # Remove ID tags from their original position
    lines = [line for line in lines if line.strip() not in id_tags]

    # Insert ID tags after the heading 1 with an empty row before and after
    lines.insert(heading_1_index + 1, "\n")  # Add an empty row after heading 1
    for id_tag in id_tags:
        lines.insert(heading_1_index + 2, id_tag + "\n")  # Add ID tags
    lines.insert(heading_1_index + 2 + len(id_tags), "\n")  # Add an empty row after ID tags

    # Write the updated content back to the file
    with open(file_path, 'w', encoding='utf-8') as file:
        file.writelines(lines)

def process_markdown_files_in_directory(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".md"):
                file_path = os.path.join(root, file)
                process_markdown_file(file_path)

# Specify the directory containing the Markdown files
markdown_directory = "."

# Process all Markdown files in the directory
process_markdown_files_in_directory(markdown_directory)