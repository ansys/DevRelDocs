# Configuration Files for Nodes

The various Python script interfaces can optionally be configured using a JSON file with the same file name and same directory as the Python script `*.py` but with the extension `*.json`.

The following name-value pairs can be contained in the file:

| Name                       | Value Description |
|----------------------------|------------------|
| Name                       | Specifies a distinct display name. |
| Maturity                   | Specifies the level of development. Allowed values are `Beta`, `Stable`, and `Deprecated`. |
| ScriptInterfaceVersion     | Specifies the version of the script interface. In the current optiSLang version, interface version 3 is the recommended choice for all node types. |
| EnableParallel             | Allows parallel execution of multiple instances of the integration. Allowed values are `true` and `false`. |
| EnableMultiDesignMode      | Enables multiple designs being passed to script at once. Allowed values are `true` and `false`. |
| PythonPath                 | List of search directories. Separate different paths using `;` on Windows or `:` on Linux. |
| PythonEnvironment          | Specifies the type of Python environment to use. The default value is optiSLang Python.<br>- You can choose between different Python environments installed on the system, for example, Python 3.5 64 bit or Anaconda 3.5 64 bit.<br>- Additional Python environments can be made available by adding the location to the PATH environment variable or to the `optiSLang.ini` file.<br>- optiSLang's own Python can be extended with [additional packages](https://ansysproducthelpqa.win.ansys.com/account/secured?returnurl=/Views/Secured/corp/v252/en/opti_inst_lic/opti_inst_lic_python_packages.html). |
| AbortMode| Controls how `Stop` requests to custom integrations are handled.<br>- The default value is `KillProcessTree`, which terminates the process hosting the custom integration (as well as all processes it started).<br>- The other mode is `Exception`, which injects an exception into the running Python code.<br>- The plugin node has the `ExceptionTimeout` number of seconds to cleanly finish its processing before terminating processes. |
| ExceptionTimeout| Used with `AbortMode`.<br>- Specifies the number of seconds (default of 30) for the plugin node to cleanly finish its processing before the process hosting the plugin node, and sub-processes, are terminated. |
| InputSlots| Declares multiple slots by providing `{"name_1" : "slot_type_1", "name_2" : "slot_type_2", …}`.<br>See [Supported InputSlots/OutputSlots Types](#supported-inputslotsoutputslots-types) for the full list. |
| OutputSlots| Declares multiple slots by providing `{"name_1" : "slot_type_1", "name_2" : "slot_type_2", …}`.<br>See [Supported InputSlots/OutputSlots Types](#supported-inputslotsoutputslots-types) for the full list. |
| SupportsHPCLicenseContext  |  |
| EnableMaximumRuntime       |  |
| FileBased| Specifies whether the plugin node requires a reference file for setup and execution or not.<br>The node edit dialog box will not display a reference file selector when nodes do not require files.<br>Defaults to `true` for integrations and `false` for other types of plugin nodes. |
| FileFilter| Specifies what kind of files are shown when browsing for a reference file in the file selector of the plugin node edit dialog box. |
| ToolBoxPath| Specifies the location in the Modules pane where the plugin node should appear. |
| Documentation| Specifies a link/anchor to documentation for this plugin node.<br>Can be either an Ansys Product Help ID or a path to an HTML file.<br>The path must be specified either absolute or relative to the plugin node. |
| EnableSolverWizard| Enables the automatic support of Python-based integration nodes in the solver wizard.<br>Defaults to `false`. |
| Icon| Specifies the path to an icon which is used for the plugin node in Modules and Schematic. |
| EnableReadMode| Enables `read mode` for [Node Plugins](opti_api_python_nodes_basic.md#table-1), [Integration Node Plugins](opti_api_python_nodes_integration.md#table-7), and [MOP Node Plugins](opti_api_python_nodes_mop.md#table-15). |
| DefaultPropertiesValues    | Specifies a dict of node properties and values which override the default values for these properties. See example below. |
| **Integration-specific** |
| ShowInputs | Displays the input parameter registration in the plugin integration node edit dialog box.<br>Defaults to `true`. |
| ShowOutputs | Displays the output parameter registration in the plugin integration node edit dialog box.<br>Defaults to `true`. |
| UseSettings | Displays the node settings in the plugin integration node edit dialog box.<br>Defaults:<br>- Interface version 3: `true`.<br>- Interface version 1 and 2: `true` if configuration setting is provided. If not, node settings are shown if the interface function for default settings is provided. |
| ComBasedConnection | Specifies whether the plugin node utilizes the COM interface.<br>This will result in a warning message if the node is part of the workflow when using the optiSLang app wizard.<br>Defaults to `false`. |

## Example

An example configuration might look like this:
```json
{    
    "InputSlots": {
        "in_slot_str": "String",
        "in_slot_int": "Integer",
        "in_slot_unsigned": "Unsigned Integer",
        "in_slot_float": "Real"
    },
    "OutputSlots": {
        "out_slot_str": "String",
        "out_slot_int": "Integer",
        "out_slot_unsigned": "Unsigned Integer",
        "out_slot_float": "Real"
    },
    "EnableParallel": true,
    "EnableReadMode": true,
    "AbortMode": "Exception",
    "ExceptionTimeout": 15,
    "SupportsHPCLicenseContext": true,
    "EnableMaximumRuntime": true,
    "DefaultPropertiesValues": {
        "MultiDesignLaunchNum" : 5,
        "MaxParallel" : 2
    }
}  
```

## Supported InputSlots/OutputSlots Types
- Bool
- Integer
- Unsigned Integer
- Unsigned Integer Vector
- Real
- String
- String List
- Variant
- Path
- Parameter Manager
- Design
- Designpoint
- Design Container
- Bool Vector
- Criterion
- Criterion Sequence
- Designpoints
- DesignEntry

