# Extraction Toolkit (ETK)

You can extend the Extraction Toolkit (ETK) interface using Python scripts. Scripts must be named `*_cetk.py` or `*_etk.py` and placed in:
- `[installation path]/scripting/integrations`
- Directories specified by configuration settings
- Directories specified by the `OSL_ALT_CI_SEARCH_DIRS` environment variable

Custom ETK interfaces found in either one of these locations are loaded when the application starts and are then available for use within optiSLang.

Optionally, the following file types with the same filename and in the same directory can be used as:
- Node icon (`.svg`, `.jpg`, `.png`, `.jpeg`, `.ico`, `.bmp`)
- Documentation page (`.html`)
- [Configuration](opti_api_python_nodes_config_files.md) (`.cfg`)

The following functions are required in the Python script:

## `CheckFile(args)` 
Checks the file format for auto-format detection.
- **Inputs:**	
    - `Path` - path to file    
    - `bool` - quick check
- **Outputs:**	
    - none	 

## `ImportFile(args)` 
Imports the file with the output to be extracted.
- **Inputs:**
    - `Path` - path to file
- **Outputs:**	
    - `bool` - specifies if the import was successful

## `GetNodeInfo(args)`
Gets the value of a node.
- **Inputs:**	
    - list of strings - list of node IDs to traverse tree-structure
- **Outputs:**	
    - list - each entry represents tree-path and value of an output
        - "tree-path": list of strings - list of child-node-IDs
        - "value": VariantD - value of node
        - optional: "meta-data": PyOSDesignPoint - name-value-pair of strings
