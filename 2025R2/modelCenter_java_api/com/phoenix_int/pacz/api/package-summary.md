# Package com.phoenix_int.pacz.api
PACZ (extension .pacz) is a universal component/workflow format for use in the Phoenix Integration products Analysis 
 Server and ModelCenter Server.


## Interface Summary
| Interface | Description |
| --- | --- |
| [IComponentConfig](IComponentConfig.md) | Deprecated<br>see [`com.phoenix_int.pacz.api.v2.IComponentConfig`](v2/IComponentConfig.md) |
| [IInstanceFile](IInstanceFile.md) | Deprecated<br>see [`com.phoenix_int.pacz.api.v2.IInstanceFile`](v2/IInstanceFile.md) |
| [IRuntimeVariable](IRuntimeVariable.md) | Deprecated<br>see [`com.phoenix_int.pacz.api.v2.IRuntimeVariable`](v2/IRuntimeVariable.md) |

## Class Summary
| Class | Description |
| --- | --- |
| [Environment](Environment.md) | Deprecated<br>see [`com.phoenix_int.pacz.api.v2.Environment`](v2/Environment.md) |

## Enum Summary
| Enum | Description |
| --- | --- |
| [RunFolderPreference](RunFolderPreference.md) | Deprecated<br>see [`com.phoenix_int.pacz.api.v2.RunFolderPreference`](v2/RunFolderPreference.md) |
| [VariableDataType](VariableDataType.md) | Deprecated<br>`IRuntimeVariables` are now using the canonical PHX type identifiers which are literal strings (see [`com.phoenix_int.pacz.api.v2.IRuntimeVariable`](v2/IRuntimeVariable.md)) |

## Package com.phoenix_int.pacz.api Description
PACZ (extension .pacz) is a universal component/workflow format for use in the Phoenix Integration products ModelCenter Remote Execution and ModelCenter Server. A PACZ is a zip archive with component files and a file containing metadata (extension ".pacj"; see below for details) that specifies its usage.

Note: PACZ files must be created using an archiving tool that supports UTF-8 encoding for filenames.

## PACJ Configuration File

Each PACZ file contains an internal PACJ file, which is a metadata file with an extension of ".pacj". This file is a simple text file that contains information about the component/workflow specified in JSON and must always be named "component.pacj". The PACJ format specifies fields that describe the component, and the information it contains is case sensitive. Much of the information in the file is used by many programs to describe the component.

Each PACJ file is broken into three sections: component-specific metadata, information about the variables associated with a component, and information about instance files associated with each component.

### Component-specific metadata section

Component-specific metadata contains information about the component from a high level. This information includes a description of the component, what version it is, who authored it, and what icon to present to the user.

See [IComponentConfig](IComponentConfig.md)for the interface representing the component configuration metadata

All fields listed below should be used in the component-specific configuration, unless otherwise specified:

| Field name | Description | Corresponding method |
| --- | --- | --- |
| Field name | Description | Corresponding method |
| `version` | A human-readable string of the version info | [IComponentConfig.getVersion()](IComponentConfig.md) |
| `author` | The author of this component | Not currently implemented |
| `description` | A description of this component | [IComponentConfig.getDescription()](IComponentConfig.md) |
| `ASComponent` | The MCRE name of the underlying component | [IComponentConfig.getASComponent()](IComponentConfig.md) |
| `icon` | The file relative to the ".pacj" file (usually stored in the ".pacz" file) to be used as an icon (optional) | [IComponentConfig.getIconUri()](IComponentConfig.md) |
| `commandArgs` | Reserved for future use. Do not specify. | [IComponentConfig.getCommandLineArguments()](IComponentConfig.md) |
| `requires` | Reserved for future use. Must currently be specified as ["analysisserver"] | [IComponentConfig.getRequiredFeatures()](IComponentConfig.md) |
| `properties` | Reserved for future use. Any specified values will be ignored. | [IComponentConfig.getProperties()](IComponentConfig.md) |
| `inputs` | A list of all input variables.See below for variable definitions. | [IComponentConfig.getInputs()](IComponentConfig.md) |
| `outputs` | A list of all output variables.See below for variable definitions. | [IComponentConfig.getOutputs()](IComponentConfig.md) |
| `instanceFiles` | Reserved for future use. Any specified values will be ignored. | [IComponentConfig.getInstanceFiles()](IComponentConfig.md) |

### Variables section

The Variables section is specified by the`inputs`and`outputs`properties and contains information about the variables used in the component. Both inputs and outputs have the same general format and contain specific information about the variable, including the name, type, and other information as specified below. 

Input variables should be specified in an array in the field `inputs`and output variables should be specified in an array in the field `outputs`.

See [IRuntimeVariable](IRuntimeVariable.md) for the interface describing variables.

All fields listed below should be used for each variable, unless otherwise specified:

| Field name | Description | Corresponding method |
| --- | --- | --- |
| `name` | The name of the variable. (in dotted notation) | [IRuntimeVariable.getName()](IRuntimeVariable.md) |
| `type` | The type of the variable. (See [VariableDataType](VariableDataType.md)) | [IRuntimeVariable.getType()](IRuntimeVariable.md) |
| `enumAliases` | An array containing names for enumerated lists. If this property is specified, `enumValues`must also be specified. (optional) | [IRuntimeVariable.getEnumAliases()](IRuntimeVariable.md) |
| `enumValues` | An array containing values for enumerated lists. If this property is specified, `enumAliases`must also be specified. (optional) | [IRuntimeVariable.getEnumValues()](IRuntimeVariable.md) |
| `upperBound` | The upper bound for this variable. (optional) | [IRuntimeVariable.getUpperBound()](IRuntimeVariable.md) |
| `lowerBound` | The lower bound for this variable. (optional) | [IRuntimeVariable.getLowerBound()](IRuntimeVariable.md) |
| `units` | The units for this variable. (optional) | [IRuntimeVariable.getUnits()](IRuntimeVariable.md) |
| `description` | The description for this variable. (optional) | [IRuntimeVariable.getDescription()](IRuntimeVariable.md) |
| `defaultValue` | A default value to present to the user | [IRuntimeVariable.getDefaultValue()](IRuntimeVariable.md) |

Variable type may be specified using one of the following types. Types are case-sensitive and must be written exactly as listed.

| Variable types |
| --- |
| `Double` |
| `DoubleArray` |
| `Integer` |
| `IntegerArray` |
| `Boolean` |
| `BooleanArray` |
| `String` |
| `StringArray` |
| `File` |
| `FileArray` |

**Notes:**

- Default values are not currently supported for variables of type`File`or`FileArray`and should be omitted.
- Array default values should be specified by a string that contains the bounding dimensions of the array enclosed in square
 brackets, followed by a comma-separated list of values enclosed in curly braces. 
- Enumerated values should be specified in standard JSON format, using square brackets and a list of comma-separated values, 
 with special characters such as quotes escaped by a backslash, for example, "Hi! I\'m a PACJ enum value". Note that this format is different from the format used in components and wrappers.
- PACJ files must be encoded in UTF-8.

### Instance Files section

The Instance Files section specifies exactly which files inside of the PACZ archive are important to running the component. This feature is currently unimplemented and will be entirely ignored. However, this feature may be implemented at any time and therefore should be used to help document the internal component.

See [IRuntimeVariable](IRuntimeVariable.md) for the interface describing instance files.

Instance files should be located in a field called `instanceFiles` and should be an array of objects, each containing the following values:

| Field name | Description | Corresponding method |
| --- | --- | --- |
| `name` | The name of the instance file | [IInstanceFile.getName()](IInstanceFile.md) |
| `path` | The path to the instance file. The environment variable `COMPONENT_DIR` (which can be substituted in strings using the syntax `${COMPONENT_DIR}`) should be used to point to the file relative to the root of the PACZ. | [IInstanceFile.getPath()](IInstanceFile.md) |

## Validation

When ModelCenter Remote Execution or ModelCenter Server attempts to load a PACZ file, it will attempt to validate the contents of the PACJ configuration file against the referenced component. The following conditions are checked and must be satisfied in order for the PACZ to be loaded:

- All variables that are specified in the component must be present in the PACJ configuration.
- All variables that are specified in the PACJ configuration must be present in the component.
- The names of the variables must match between the PACJ configuration and the component.
- The variable types must match between the PACJ configuration and the component.
- All variables specified as inputs in the PACJ must be inputs in the configuration, and all output variables in the PACJ must be outputs in the component.
- The default values of variables specified in the PACJ configuration must match the default (or initial) values of variables in the component.

## Example PACJ Configuration File
```java

 {
   "version": "1.0",
   "author": "Phoenix Integration",
   "description": "Lunar mission model",
   "ASComponent": "LunarMission",
   "icon": "lunar.png",
   "commandArgs": [],
   "requires": ["java",
      "analysisserver"],
   "properties": {
   },
   "inputs": [{
         "name": "Model.Script.Crew_Size",
         "type": "Integer",
         "defaultValue": 3,
         "lowerBound": 1,
         "upperBound": 6
      },
      {
         "name": "Model.Script.Earth_Entry",
         "type": "String",
         "enumValues": ["direct",
            "aerobraking",
            "propulsive"],
         "enumAliases": ["direct",
            "aerobraking",
            "propulsive"],
         "defaultValue": "direct"
      },
      {
         "name": "Model.Script.Science_Payload_Mass",
         "type": "Double",
         "defaultValue": 300,
         "units": "kg"
      },
      {
         "name": "Model.Script.Single_Stage",
         "type": "Boolean",
         "defaultValue": false
      },
      {
         "name": "Model.Script.Thrust_At_Altitude",
         "type": "DoubleArray",
         "defaultValue": "bounds[3, 2] { 0, 250000, 100, 280700, 350, 312000 }",
         "description": "The rocket nozzle thrust (in N) at various altitudes (in km)"
      },
      {
         "name": "Model.Script.Excel_File",
         "type": "File"
      }],
   "outputs": [{
         "name": "Model.Script.Total_Mission_Cost",
         "type": "Double",
         "defaultValue": 3.47558,
         "units": "$ B"
      },
      {
         "name": "Model.Script.Total_Sample_Return_Mass",
         "type": "Double",
         "defaultValue": 38.2609,
         "units": "kg"
      }],
   "instanceFiles": [{
         "name": "icon",
         "path": "${COMPONENT_DIR}/moon.png"
      },
      {
         "name": "ASComponent",
         "path": "${COMPONENT_DIR}/LunarMission.pxcz"
      }]
}
 
```