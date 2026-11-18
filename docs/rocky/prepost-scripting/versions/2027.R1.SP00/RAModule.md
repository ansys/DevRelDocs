

# RAModule

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAModule"></a>

### *class* RAModule

Rocky PrePost Scripting wrapper for an individual module in a project, below the “Modules”
item. Retrieve individual module from the [`RAModuleCollection`](RAModuleCollection.md#generated.RAModuleCollection) via:

```python
module_collection = study.GetModuleCollection()
module = module_collection.GetModule('Module Name')
```

**Methods:**

| Name | Description |
|-----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| [`DisableModule`](#generated.RAModule.DisableModule)()                                                    | Disable the module.                                                                       |
| [`EnableModule`](#generated.RAModule.EnableModule)()                                                      | Enable the module.                                                                        |
| [`ExecuteCommand`](#generated.RAModule.ExecuteCommand)(command)                                           | Execute a command related to the module.                                                  |
| [`GetAllModuleProperties`](#generated.RAModule.GetAllModuleProperties)()                                  | Get a dictionary of all module properties values.                                         |
| [`GetModuleProperties`](#generated.RAModule.GetModuleProperties)()                                        | Get the names of the module properties.                                                   |
| [`GetModuleProperty`](#generated.RAModule.GetModuleProperty)(property_name[, unit])                       | Get the value of a module property.                                                       |
| [`GetOutputObject`](#generated.RAModule.GetOutputObject)()                                                | Get the API object that represents this module's unique simulation results, if it exists. |
| [`GetValidOptionsForModuleProperty`](#generated.RAModule.GetValidOptionsForModuleProperty)(property_name) | Get all valid options only for properties that have a list of possible options.           |
| [`IsModuleEnabled`](#generated.RAModule.IsModuleEnabled)()                                                | Check if the module is enabled.                                                           |
| [`ListAddinCommands`](#generated.RAModule.ListAddinCommands)()                                            | Get the names of the active module commands.                                              |
| [`SetModuleEnabled`](#generated.RAModule.SetModuleEnabled)(enabled)                                       | Enable or disable the module.                                                             |
| [`SetModuleProperty`](#generated.RAModule.SetModuleProperty)(property_name, value[, unit])                | Set the value of a module property.                                                       |

<a id="generated.RAModule.DisableModule"></a>

#### DisableModule()

Disable the module.

<a id="generated.RAModule.EnableModule"></a>

#### EnableModule()

Enable the module.

<a id="generated.RAModule.ExecuteCommand"></a>

#### ExecuteCommand(command: str | AddinCommandIdentifier)

Execute a command related to the module.

* **Parameters:**
  **command** (*str* *|* *AddinCommandIdentifier*) – The name or the AddinCommandIdentifier to be executed. Use ListAddinCommands to obtain a sequence of
  active commands.

<a id="generated.RAModule.GetAllModuleProperties"></a>

#### GetAllModuleProperties()

Get a dictionary of all module properties values.

* **Return type:**
  dict(str, Any)
* **Returns:**
  A dictionary with defined spec properties (‘model’, ‘geometries’, ‘particle_input’, …) as keys. For the
  entities keys, the value is another dictionary with the entity name or a tuple of names as keys and their
  module properties as values. For scalar properties, the returned value will be a tuple of (value, unit).

<a id="generated.RAModule.GetModuleProperties"></a>

#### GetModuleProperties()

Get the names of the module properties.

* **Return type:**
  tuple(AddinPropertyIdentifier)

<a id="generated.RAModule.GetModuleProperty"></a>

#### GetModuleProperty(property_name: str | AddinPropertyIdentifier, unit: str | None = None)

Get the value of a module property.

* **Parameters:**
  * **property_name** (*Union* *[**str* *,* *AddinPropertyIdentifier* *]*) – The name of the module property to get.
  * **unit** (*str*) – The unit for value, just for scalar properties. If no unit is provided,
    the returned value will be in the unit that was set before (via SetModuleProperty()).
* **Return type:**
  float, bool, str or [`RAModulePropertyList`](RAModulePropertyList.md#generated.RAModulePropertyList)
* **Returns:**
  - For basic module properties like numbers and booleans, the returned value is a basic
    Python type (float, bool, or string)
  - For input files, the returned value is the string of the full path to the file
  - For properties that are lists of other properties, the returned value is a
    : [`RAModulePropertyList`](RAModulePropertyList.md#generated.RAModulePropertyList).

<a id="generated.RAModule.GetOutputObject"></a>

#### GetOutputObject()

Get the API object that represents this module’s unique simulation results, if it exists.

Note that only modules that declare that they generate “unique” results (as opposed to new
properties/curves on existing items) will have an output object.

<a id="generated.RAModule.GetValidOptionsForModuleProperty"></a>

#### GetValidOptionsForModuleProperty(property_name: str)

Get all valid options only for properties that have a list of possible options.

* **Parameters:**
  **property_name** (*str*) – The name of the module property.
* **Return type:**
  list[str]

<a id="generated.RAModule.IsModuleEnabled"></a>

#### IsModuleEnabled()

Check if the module is enabled.

* **Return type:**
  bool

<a id="generated.RAModule.ListAddinCommands"></a>

#### ListAddinCommands()

Get the names of the active module commands.

* **Return type:**
  tuple(AddinCommandIdentifier)

<a id="generated.RAModule.SetModuleEnabled"></a>

#### SetModuleEnabled(enabled: bool)

Enable or disable the module.

* **Parameters:**
  **enabled** (*bool*) – Whether the module should be enabled (True) or disabled (False).

<a id="generated.RAModule.SetModuleProperty"></a>

#### SetModuleProperty(property_name: str | AddinPropertyIdentifier, value: float | bool | str | ApiElementItem | None, unit: str | None = None)

Set the value of a module property.

* **Parameters:**
  * **property_name** (*Union* *[**str* *,* *AddinPropertyIdentifier* *]*) – The name of the module property to set.
  * **value** (*float* *,* *bool* *,* *str* *or* *ApiElementItem*) – The value to set.
    If the property_name references to an enum property then value must be an str value.
    If the property_name references to an element reference (point cloud, particles, …) then
    the value can be either the name of the element (str) or an ApiElementItem representing it.
  * **unit** (*str*) – The unit for value, just for scalar properties. If no unit is provided,
    value is assumed to be the unit was set before.
