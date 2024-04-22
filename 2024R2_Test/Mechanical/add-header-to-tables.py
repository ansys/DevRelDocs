import os
import sys

def process_md_table(input_table):
    # Split input table into rows
    rows = input_table.strip().split('\n')

    # Create a new array for modified table
    modified_rows = ["| Name | Summary |"]

    # Add the second row of the original table
    modified_rows.append(rows[1])

    # Add the first row of the original table
    modified_rows.append(rows[0])

    # Add remaining rows from the original table, starting from index 2
    for i in range(2, len(rows)):
        modified_rows.append(rows[i])

    # Construct the modified table string
    modified_table = '\n'.join(modified_rows)

    return modified_table

def process_md_files(folder_path):
    # Traverse the directory structure recursively
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            # Check if the file is a Markdown file
            if file.endswith(".md"):
                file_path = os.path.join(root, file)
                print("Processing:", file_path)
                # Read the input file
                with open(file_path, 'r', encoding='utf-8') as file:
                    file_content = file.read()

                # Split the file content by at least one newline character
                tables = file_content.split('\n\n')

                # Process each potential Markdown table found in the file
                modified_tables = []
                for table in tables:
                    # Check if the potential table is actually a Markdown table
                    if table.strip().startswith('|'):
                        # Process the MD table
                        modified_table = process_md_table(table)
                        modified_tables.append(modified_table)
                    else:
                        modified_tables.append(table)

                # Join the modified tables back into the file content
                modified_content = '\n\n'.join(modified_tables)

                # Write the modified content back to the input file
                with open(file_path, 'w', encoding='utf-8') as file:
                    file.write(modified_content)

                print("File '{}' has been updated with corrected tables.".format(file_path))

if __name__ == "__main__":
    # Check if the folder path is provided
    if len(sys.argv) != 2:
        print("Usage: python script_name.py 'folder_path'")
        sys.exit(1)

    # Get the folder path from command line argument
    folder_path = sys.argv[1]

    # Process all Markdown files in the folder and its subfolders
    process_md_files(folder_path)
