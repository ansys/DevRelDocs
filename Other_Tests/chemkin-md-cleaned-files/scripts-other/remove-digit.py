import re

# Open the file
with open('toc.yml', 'r') as file:
    lines = file.readlines()

# Apply the regex replacement to each line
lines = [re.sub(r"^\s*- name: \d+(\.\d+)*\.\s", "- name: ", line) for line in lines]

# Write the lines back to the file
with open('toc.yml', 'w') as file:
    file.writelines(lines)