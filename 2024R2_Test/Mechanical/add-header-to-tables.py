import os
import pandas as pd
import re

def add_heading_row(table):
    # Convert to DataFrame
    df = pd.DataFrame(table)
    
    # Check if 'Name' and 'Meaning' are missing in the header, add if missing
    if df.columns[0] != 'Name' or df.columns[1] != 'Meaning':
        df.columns = ['Name', 'Meaning']
    
    return df

def extract_tables_from_md(md_content):
    # Extract tables from Markdown content
    tables = re.findall(r'\n\|(.+?)\|\n\|(.+?)\|\n', md_content, re.DOTALL)

    table_list = []
    for table in tables:
        rows = table[0].strip().split('\n')
        data = [row.split('|')[1:-1] for row in rows]
        table_list.append(data)
    
    return table_list

def process_md_file(md_file):
    with open(md_file, 'r', encoding='utf-8') as file:
        md_content = file.read()
    
    # Extract tables from Markdown content
    tables = extract_tables_from_md(md_content)

    # Process each table
    for i, table in enumerate(tables):
        modified_table = add_heading_row(table)
        markdown_output = modified_table.to_markdown(index=False)
        print(f"\nTable {i+1} in {md_file}:\n{markdown_output}")

def process_folder(folder_path):
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.endswith('.md'):
                md_file = os.path.join(root, file)
                process_md_file(md_file)

# Input folder path
input_folder = "api"

# Process the folder and its subfolders
process_folder(input_folder)
