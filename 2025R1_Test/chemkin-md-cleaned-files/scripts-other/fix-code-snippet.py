import os
import re

def transform_file(input_file, output_file):
    with open(input_file, 'r') as f:
        content = f.read()

    start_marker = 'MCADIF    MCADIF    MCADIF    MCADIF    MCADIF    MCADIF    MCADIF'
    end_marker = 'cgs units, cm**2/s'

    pattern = f'({start_marker}.*?{end_marker})'
    transformed_content = re.sub(pattern, r'```\n\1\n```', content, flags=re.DOTALL)

    with open(output_file, 'w') as f:
        f.write(transformed_content)

def process_directory(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                input_file = os.path.join(root, file)
                output_file = os.path.join(root, 'transformed_' + file)
                transform_file(input_file, output_file)

# Use the function to process a directory
process_directory('your_directory')