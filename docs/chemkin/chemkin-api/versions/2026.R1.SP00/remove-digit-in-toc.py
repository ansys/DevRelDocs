import re

with open('toc.yml', 'r') as file:
    lines = file.readlines()

new_lines = []
for line in lines:
    if "- name:" in line:
        line = re.sub(r'(- name:)\s*\d+(\.\d+)*\.\s*', r'\1 ', line)
    new_lines.append(line)

with open('toc.yml', 'w') as file:
    file.writelines(new_lines)