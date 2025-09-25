# File Access

You can extend the central file registration by using script interfaces. Scripts must be named `*_plm.py`, `*_cfa.py`, or `*_fileaccess.py` and placed in:
- `[installation path]/scripting/plm`
- Directories specified by `SC_AlternativeCIDirectories` configuration settings
- Directories specified by the `OSL_ALT_CFA_SEARCH_DIRS` environment variable, separated by the native environment separator (; on Windows platforms or : on Linux platforms).

Custom file access scripts found in any of these locations are loaded when the application starts and are then available for use within the Central file registration.

Optionally, the following file types with the same filename and in the same directory can be used as:
- Type icon (`.svg`, `.jpg`, `.png`, `.jpeg`, `.ico`, `.bmp`)
- Documentation page (`.html`)
- [Configuration](opti_api_python_nodes_config_files.md) (`.cfg`)

At least one of the following functions is mandatory in the Python script:
- `Store(args)`
- `Restore(args)`

The following functions are optional:
- `CanUseUserName`
- `CanUsePassword`
- `CanBrowse`
- `SaveLocationExists`
- `Browse`
- `ExtractSaveLocationString`
- `ExtractLocalLocationName`

The arguments are defined as follows:

- Local location - path to local reference file
- unused	 
- Revision - string with revision information (use for versioning databases)
- Message - string with a message (use for revision control systems)
- Save location - string containing information about the location of the external file
- Username - string containing user information for authentications
- Password - string containing password information for authentications
- Script path - Path containing the current script file
- Variables	- PyOSDesignPoint containing optiSLang variables
    - `OSL_CUSTOM_SCRIPT_DIR` - contains the absolute path of the current script file
    - `ACTION` - string containing the action type [None, Receive, Send, Compress GZ, Remove]
    - `GUID` - string containing the unique ID of the registered file entry
    - If the called function is "Browse", the following value is also available:
        - `PARENT_FRAME` - string containing the geometry of the parent window in the format "[x,y,width,height]"
    - If there is a node relationship, the following additional values may be available:
        * `OSL_DESIGN_NO` - representing the current numerical design number (for example, 1)
        * `OSL_DESIGN_NAME` - representing the current design directory name (for example, Design_0001)
        * `OSL_DESIGN_DIR` - contains the absolute path of the current design directory
        * `OSL_PROJECT_WORKING_DIR` - Absolute path of the current project (`*.opd`).
        * `OSL_PROJECT_FILE_DIR` - Absolute path of the current directory containing the project file (`*.opf`).
        * `OSL_PROJECT_DIR` - contains the absolute path of the current project (`*.opd`). ***Deprecated.***
        * `OSL_NODE_NAME` - contains the name of the current node
        * `OSL_RLS_VER` - representing the version number of optiSLang
        * `OSL_RLS_REV` - representing the revision number of optiSLang
        * `OSL_RLS_FLG` - is empty unless a specific version of optiSLang is used

---
