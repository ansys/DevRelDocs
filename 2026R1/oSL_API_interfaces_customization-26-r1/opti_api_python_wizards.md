# Wizards
optiSLang allows you to extend the [solver wizard](https://ansysproducthelpqa.win.ansys.com/account/secured?returnurl=/Views/Secured/corp/v252/en/opti_ug/opti_ug_solver_wizard.html) by using common script interfaces or by enabling automatic support of Python-based integration nodes in the configuration.

To use custom script wizards, the scripts must fulfill the naming conventions `*_cw.py` or `*_solverwizard.py` and must be placed in one of the following locations:

- `[installation path]/scripting/wizards`
- Directories specified by `SC_AlternativeCWDirectories` configuration settings.
- Directories specified by the environment variable `OSL_ALT_CW_SEARCH_DIRS`, separated by the native environment separator (`;` on Windows platforms or `:` on Linux platforms).

Custom script wizards found in any of these locations are loaded when the application starts and are then available for use within optiSLang.

Optionally, the following file types with the same filename and in the same directory can be used as:

- Node icon (`.svg`, `.jpg`, `.png`, `.jpeg`, `.ico`, `.bmp`)
- Documentation page in the help system (`.html`)

The following variables are predefined in the script:

| Variable/Parameter | Description    |
|--------|-----|
| `wizard_system_name`| String containing the name of the [Parametric System](https://ansysproducthelpqa.win.ansys.com/Views/Secured/corp/v252/en/opti_ug/opti_ug_parametric_system.html)|
| `create_in_parametric_system` | Indicates that the flow should be generated in the named system|
| `type_of_script`| Type of script node to use (`"batch"`, `"bash"`, `"Python"`, `"perl"`)|
| `project`| The current optiSLang project|
| `environment`| `PyOSDesignPoint` containing optiSLang variables<br>- `OSL_CUSTOM_SCRIPT_DIR` - Absolute path of the current script file <br>- `OSL_DESIGN_NO` - Current numerical design number (e.g., `1`)<br>- `OSL_DESIGN_NAME` - Current design directory name (e.g., Design_0001) <br>- `OSL_DESIGN_DIR` - Absolute path of the current design directory <br>- `OSL_PROJECT_WORKING_DIR` - Absolute path of the current project (`*.opd`).<br>- `OSL_PROJECT_FILE_DIR` - Absolute path of the current directory containing the project file (`*.opf`).  <br>- `OSL_PROJECT_DIR` - Absolute path of the current project (`*.opd`). ***Deprecated.***<br>- `OSL_NODE_NAME` - Name of the current node<br>-`OSL_RLS_VER` - Version number of optiSLang<br>- `OSL_RLS_REV` - Revision number of optiSLang<br>- `OSL_RLS_FLG` - Empty unless a specific version of optiSLang is used|

Note: The selected project file can also be passed to the script by the second command line argument `sys.argv[1]`.