import os

def remove_metadata_and_blank_lines_from_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()
    
    # Find the end of the metadata section
    metadata_end = 0
    if lines[0].strip() == '---':
        for i in range(1, len(lines)):
            if lines[i].strip() == '---':
                metadata_end = i + 1
                break
    
    # Remove blank lines before the first heading
    content_start = metadata_end
    while content_start < len(lines) and lines[content_start].strip() == '':
        content_start += 1
    
    # Write the file without the metadata section and blank lines
    with open(file_path, 'w', encoding='utf-8') as file:
        file.writelines(lines[content_start:])

def remove_metadata_and_blank_lines_from_folder(folder_path):
    for root, _, files in os.walk(folder_path):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                remove_metadata_and_blank_lines_from_file(file_path)

# Replace 'your_folder_path' with the path to your folder
folder_path = r'c:\Users\mguyot\Documents\ansys\DevRelDocs\Other_Tests\dpf-op-subset-new-tmpl'
remove_metadata_and_blank_lines_from_folder(folder_path)