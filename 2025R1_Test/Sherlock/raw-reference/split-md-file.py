import re
import sys

def add_empty_row_after_headers(input_file):
    with open(input_file, 'r') as f:
        lines = f.readlines()

    with open(input_file, 'w') as f:
        for i in range(len(lines)):
            f.write(lines[i])
            if lines[i].startswith('#') and i+1 < len(lines) and lines[i+1].strip() != '':
                f.write('\n')


def adjust_header_level(line):
    match = re.match(r'(#+)( .*)', line)
    if match and len(match.group(1)) > 1:  # Ensure there's more than one '#' character
        return match.group(1)[1:] + match.group(2)  # Remove one '#' character
    return line

def split_markdown_file(input_file):
    output_file = None
    with open(input_file, 'r') as f:
        for line in f:
            if line.startswith('## '):
                if output_file is not None:
                    output_file.close()
                title = line.strip('# \n').replace(' ', '_')
                output_file = open(f'{title}.md', 'w')
            if output_file is not None:
                output_file.write(adjust_header_level(line))
                if line.startswith('#'):
                    output_file.write('\n')

    if output_file is not None:
        output_file.close()
        
if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python split-md-file.py <input_file>")
    else:
        add_empty_row_after_headers(sys.argv[1])
        split_markdown_file(sys.argv[1])