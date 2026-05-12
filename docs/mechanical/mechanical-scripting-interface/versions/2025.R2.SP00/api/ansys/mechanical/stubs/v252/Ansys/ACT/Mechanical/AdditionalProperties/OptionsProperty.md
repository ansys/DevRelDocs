# `OptionsProperty`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.AdditionalProperties.OptionsProperty"></a>

#### *class* Ansys.ACT.Mechanical.AdditionalProperties.OptionsProperty

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Provides a way to create properties that show up as a drop down in the UI.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|-------------------------------------------------|------------------------------------------------------------------------------------------------------|
| [`DisplayName`](#OptionsProperty.DisplayName)   | The name of the property shown in the UI. If not set, the Name property is used.                     |
| [`GroupName`](#OptionsProperty.GroupName)       | The group name of the property shown in the UI, and used to separate properties based on group name. |
| [`Name`](#OptionsProperty.Name)                 | The name of the property.                                                                            |
| [`Options`](#OptionsProperty.Options)           | Options shown in the drop-down, represented by a dictionary of int -> string.                        |
| [`ReadOnly`](#OptionsProperty.ReadOnly)         | Returns whether a property is readonly.                                                              |
| [`Tooltip`](#OptionsProperty.Tooltip)           | The tooltip of the property in the UI.                                                               |
| [`Value`](#OptionsProperty.Value)               | The stored value of the property.                                                                    |
| [`ValueString`](#OptionsProperty.ValueString)   | Get the string representation of the value.                                                          |

<a id="property-detail"></a>

## Property detail

<a id="OptionsProperty.DisplayName"></a>

### *property* OptionsProperty.DisplayName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The name of the property shown in the UI. If not set, the Name property is used.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.GroupName"></a>

### *property* OptionsProperty.GroupName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The group name of the property shown in the UI, and used to separate properties based on group name.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.Name"></a>

### *property* OptionsProperty.Name *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The name of the property.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.Options"></a>

### *property* OptionsProperty.Options *: [dict](https://docs.python.org/3/library/stdtypes.html#dict)[Any, Any] | [None](https://docs.python.org/3/library/constants.html#None)*

Options shown in the drop-down, represented by a dictionary of int -> string.
Where the int represents the option, and string represents string shown in the UI.
When an option is selected the Value property of the property is set to to the option int.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.ReadOnly"></a>

### *property* OptionsProperty.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns whether a property is readonly.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.Tooltip"></a>

### *property* OptionsProperty.Tooltip *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The tooltip of the property in the UI.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.Value"></a>

### *property* OptionsProperty.Value *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

The stored value of the property.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.ValueString"></a>

### *property* OptionsProperty.ValueString *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the string representation of the value.

<!-- !! processed by numpydoc !! -->

