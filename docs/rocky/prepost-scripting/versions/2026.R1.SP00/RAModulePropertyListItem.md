

# RAModulePropertyListItem

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAModulePropertyListItem"></a>

### *class* RAModulePropertyListItem

Rocky PrePost Scripting wrapper for an item inside a [`RAModulePropertyList`](RAModulePropertyList.md#generated.RAModulePropertyList).

The wrapper corresponds to a single row in a table of module properties inside the editor of
an individual Module or simulation entity. It is retrieved from its containing list, via:

```python
my_module = study.GetElement('My Module')
module_list = my_module.GetModuleProperty('List of Items')
module_item = module_list.New()
```

**Methods:**

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| [`GetModuleProperties`](#generated.RAModulePropertyListItem.GetModuleProperties)()                                        | Get the names of the module properties.                                         |
| [`GetModuleProperty`](#generated.RAModulePropertyListItem.GetModuleProperty)(property_name[, unit])                       | Get the value of a module property.                                             |
| [`GetValidOptionsForModuleProperty`](#generated.RAModulePropertyListItem.GetValidOptionsForModuleProperty)(property_name) | Get all valid options only for properties that have a list of possible options. |
| [`SetModuleProperty`](#generated.RAModulePropertyListItem.SetModuleProperty)(property_name, value[, unit])                | Set the value of a module property.                                             |

<a id="generated.RAModulePropertyListItem.GetModuleProperties"></a>

#### GetModuleProperties()

Get the names of the module properties.

* **Return type:**
  tuple(ModulePropertyIdentifier)

<a id="generated.RAModulePropertyListItem.GetModuleProperty"></a>

#### GetModuleProperty(property_name: str | ModulePropertyIdentifier, unit: str | None = None)

Get the value of a module property.

* **Parameters:**
  * **property_name** (*Union* *[**str* *,* *ModulePropertyIdentifier* *]*) – The name of the module property to get.
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

<a id="generated.RAModulePropertyListItem.GetValidOptionsForModuleProperty"></a>

#### GetValidOptionsForModuleProperty(property_name)

Get all valid options only for properties that have a list of possible options.

* **Parameters:**
  **property_name** (*str*) – The name of the module property.
* **Return type:**
  List[str]

<a id="generated.RAModulePropertyListItem.SetModuleProperty"></a>

#### SetModuleProperty(property_name: str | ModulePropertyIdentifier, value: float | bool | str, unit: str | None = None)

Set the value of a module property.

* **Parameters:**
  * **property_name** (*Union* *[**str* *,* *ModulePropertyIdentifier* *]*) – The name of the module property to set.
  * **value** (*float* *,* *bool* *or* *str*) – The value to set.
    If the property_name references to an enum property then value must be an str value.
  * **unit** (*str*) – The unit for value, just for scalar properties. If no unit is provided,
    value is assumed to be the unit was set before.
