import os
import sys
import argparse


def remove_column_table(input_table):
    # Split input table into rows
    rows = input_table.strip().split('\n')

    # Create a new array for modified table
    modified_rows = []

    # Add the new header row
    modified_rows.append("| Name |")

   # invert row[0] and row[1]
    temp = rows[0]
    rows[0] = rows[1]
    rows[1] = temp
    

    # Skip the second row of the original table
    # We don't include it in the modified table

    # Add remaining rows from the original table, starting from index 2
    for i in range(0, len(rows)):
        # Split the current row by the '|' character
        columns = rows[i].strip().split('|')

        # Extract the content of the first column
        name_column = columns[1].strip()

        # Add the content of the first column to the modified row
        modified_rows.append("| " + name_column + " |")

    # Construct the modified table string
    modified_table = '\n'.join(modified_rows)
    
    return modified_table
    
def process_md_table(input_table):
    # Split input table into rows
    rows = input_table.strip().split('\n')

    # Create a new array for modified table
    modified_rows = ["| Name | Description |"]

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

                # Check if all items of column 2 are empty
                for table in tables:
                    # Check if the potential table is actually a Markdown table
                    if table.strip().startswith('|'):
                        # Check if the table has two columns with an empty column (first row only)
                        rows = table.strip().split('\n')
                        is2ColumnTable = False
                        for i in range(0, len(rows)):
                                if i==1:
                                    continue
                                if rows[i].count('|') == 3:
                                    s = rows[i].split('|')[2]
                                    if all(char.isspace() or char == '\t' for char in s):
                                        print("Found 1 column table")
                                    else:
                                        print("Found 2 column table")
                                        is2ColumnTable = True

                        if rows[0].count('|') > 3:
                             print("Found >2 column table")
                        elif is2ColumnTable == True:
                             # Process the MD table
                             modified_table = process_md_table(table)
                        elif is2ColumnTable == False:
                             # Remove the empty column from the table
                             modified_table = remove_column_table(table)   
                    else:
                        modified_table = table
                        
                    modified_tables.append(modified_table)

                # Join the modified tables back into the file content
                modified_content = '\n\n'.join(modified_tables)

                # Write the modified content back to the input file
                with open(file_path, 'w', encoding='utf-8') as file:
                    file.write(modified_content)

                print("File '{}' has been updated with corrected tables.".format(file_path))

if __name__ == "__main__":
    # Check if the folder path is provided


    # Get the folder path from command line argument
    #folder_path = sys.argv[1]

    parser = argparse.ArgumentParser(description="Add headers to tables in Markdown files.")
    parser.add_argument("--input_folder", help="Path to the folder of Markdown files")
    args = parser.parse_args()

    folder_path = args.input_folder

    # Process all Markdown files in the folder and its subfolders
    process_md_files(folder_path)