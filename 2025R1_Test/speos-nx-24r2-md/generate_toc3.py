import yaml
import re
import os

def convert_md_to_yaml(md_content, yaml_filepath):
    sections = re.split(r'# (.*)\n', md_content)[1:]
    sections = list(zip(sections[::2], sections[1::2]))  # Pair up the section titles and contents

    toc = []
    for title, content in sections:
        section = {'name': title, 'items': []}
        items = re.findall(r'\* \[(.*)\]\((.*)\)', content)
        for name, href in items:
            section['items'].append({'name': name, 'href': href})
            # Open each .md file and read the links
            with open(href, 'r') as f:
                links = re.findall(r'\[(.*)\]\((.*)\)', f.read())
                for link_name, link_href in links:
                    section['items'].append({'name': link_name, 'href': link_href})
        toc.append(section)

    with open(yaml_filepath, 'w') as yaml_file:
        yaml.dump(toc, yaml_file, default_flow_style=False, sort_keys=False)

if __name__ == "__main__":
    md_content = """
    # Contents pages

    * [Global contents](global_contents.md)
    * [Classes](class_contents.md)
    * [Namespaces](namespace_contents.md)
    * [Files](file_contents.md)
    * [Pages](page_contents.md)
    * [Directories](dir_contents.md)

    # Index pages

    * [Global index](global_index.md)
    * [Classes](class_index.md)
    * [Namespaces](namespace_index.md)
    * [Files](file_index.md)
    * [Pages](page_index.md)
    * [Directories](dir_index.md)
    """
    convert_md_to_yaml(md_content, 'toc.yml')