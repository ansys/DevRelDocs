import os
import fnmatch

def remove_vale_off(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()
    
    if lines and lines[0].strip() == "<!-- vale off -->":
        lines.pop(0)  # Remove the first line
        if lines and lines[0].strip() == "":  # Check if the next line is empty
            lines.pop(0)  # Remove the empty line
    
    with open(file_path, 'w', encoding='utf-8') as file:
        file.writelines(lines)

def process_directory(directory):
    for root, _, filenames in os.walk(directory):
        for filename in fnmatch.filter(filenames, '*.md'):
            file_path = os.path.join(root, filename)
            remove_vale_off(file_path)

def main():
    target_directory = '_autosummary'  # Change this to your target directory
    process_directory(target_directory)

if __name__ == "__main__":
    main()
