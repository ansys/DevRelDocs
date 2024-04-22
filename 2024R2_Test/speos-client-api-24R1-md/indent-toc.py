import sys
import yaml

def organize_toc(toc):
    organized_toc = []
    current_items = organized_toc
    
    for item in toc:
        name = item.get('name', '')
        href = item.get('href', '')
        
        parts = href.split('s')
        current_items = organized_toc
        
        for part in parts[:-1]:
            if not current_items or 'items' not in current_items[-1]:
                current_items.append({})
                current_items[-1]['items'] = []
            current_items = current_items[-1]['items']
        
        current_items.append({'name': name, 'href': href})
    
    return organized_toc

# Load TOC file from command line
def load_toc(file_name):
    with open(file_name, 'r') as file:
        toc_data = yaml.load(file, Loader=yaml.FullLoader)
    return toc_data

# Writing the organized TOC in a YAML file
def write_organized_toc(organized_toc, output_file):
    with open(output_file, 'w') as file:
        for item in organized_toc:
            write_toc_to_file(item, file)

def write_toc_to_file(item, file, level=0):
    name = item.get('name', '')
    href = item.get('href', '')
    if name.strip() != '' or href.strip() != '':  # Check that the name or URL is not empty
        file.write("  " * level + "- name: " + name + "\n")
        file.write("  " * level + "  href: " + href + "\n")
        if 'items' in item:
            file.write("  " * level + "  items:\n")
            for sub_item in item['items']:
                write_toc_to_file(sub_item, file, level + 1)
    else:
        if 'items' in item:
            file.write("  " * level + "  items:\n")
            for sub_item in item['items']:
                write_toc_to_file(sub_item, file, level + 1)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python script.py <input_file> <output_file>")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]
    toc_data = load_toc(input_file)
    organized_toc = organize_toc(toc_data)
    write_organized_toc(organized_toc, output_file)
    print("Organized TOC has been written to", output_file)
