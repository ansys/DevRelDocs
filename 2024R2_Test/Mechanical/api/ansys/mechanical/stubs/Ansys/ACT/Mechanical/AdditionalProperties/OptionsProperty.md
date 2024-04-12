<a id="optionsproperty"></a>

# OptionsProperty

<a id="OptionsProperty"></a>

### *class* OptionsProperty

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Provides a way to create properties that show up as a drop down in the UI.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Summary |
|-----------------------------------------------|------------------------------------------------------------------------------------------------------|
| [`Options`](#OptionsProperty.Options)         | Options shown in the drop-down, represented by a dictionary of int -> string.                        |
| [`Name`](#OptionsProperty.Name)               | The name of the property.                                                                            |
| [`DisplayName`](#OptionsProperty.DisplayName) | The name of the property shown in the UI. If not set, the Name property is used.                     |
| [`GroupName`](#OptionsProperty.GroupName)     | The group name of the property shown in the UI, and used to separate properties based on group name. |
| [`Tooltip`](#OptionsProperty.Tooltip)         | The tooltip of the property in the UI.                                                               |
| [`Value`](#OptionsProperty.Value)             | The stored value of the property.                                                                    |
| [`ValueString`](#OptionsProperty.ValueString) | Get the string representation of the value.                                                          |
| [`ReadOnly`](#OptionsProperty.ReadOnly)       | Returns whether a property is readonly.                                                              |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.AdditionalProperties import OptionsProperty
```

<a id="property-detail"></a>

## Property detail

<a id="OptionsProperty.Options"></a>

### *property* OptionsProperty.Options *: System.Collections.Generic.IDictionary[System.Object, System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

Options shown in the drop-down, represented by a dictionary of int -> string.
Where the int represents the option, and string represents string shown in the UI.
When an option is selected the Value property of the property is set to to the option int.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.Name"></a>

### *property* OptionsProperty.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The name of the property.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.DisplayName"></a>

### *property* OptionsProperty.DisplayName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The name of the property shown in the UI. If not set, the Name property is used.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.GroupName"></a>

### *property* OptionsProperty.GroupName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The group name of the property shown in the UI, and used to separate properties based on group name.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.Tooltip"></a>

### *property* OptionsProperty.Tooltip *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The tooltip of the property in the UI.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.Value"></a>

### *property* OptionsProperty.Value *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

The stored value of the property.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.ValueString"></a>

### *property* OptionsProperty.ValueString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Get the string representation of the value.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.ReadOnly"></a>

### *property* OptionsProperty.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Returns whether a property is readonly.

<!-- !! processed by numpydoc !! -->
