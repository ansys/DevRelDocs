# `OptionsProperty`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.AdditionalProperties.OptionsProperty"></a>

#### *class* Ansys.ACT.Mechanical.AdditionalProperties.OptionsProperty(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str), groupName: [str](https://docs.python.org/3/builtins/stdtypes.html#str))

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Provides a way to create properties that show up as a drop down in the UI.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------|----------------------------------------|
| [`CopyFrom`](#OptionsProperty.CopyFrom)                                             | CopyFrom method.                       |
| [`GetObjectData`](#OptionsProperty.GetObjectData)                                   | GetObjectData method.                  |
| [`Resume`](#OptionsProperty.Resume)                                                 | Resume method.                         |
| [`add_OnAfterPropertyChanged`](#OptionsProperty.add_OnAfterPropertyChanged)         | add_OnAfterPropertyChanged method.     |
| [`add_OnBeforePropertyChanged`](#OptionsProperty.add_OnBeforePropertyChanged)       | add_OnBeforePropertyChanged method.    |
| [`remove_OnAfterPropertyChanged`](#OptionsProperty.remove_OnAfterPropertyChanged)   | remove_OnAfterPropertyChanged method.  |
| [`remove_OnBeforePropertyChanged`](#OptionsProperty.remove_OnBeforePropertyChanged) | remove_OnBeforePropertyChanged method. |

### Properties

| Name | Description |
|-------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| [`Access`](#OptionsProperty.Access)                   | Access property.                                                                                     |
| [`DisplayName`](#OptionsProperty.DisplayName)         | The name of the property shown in the UI. If not set, the Name property is used.                     |
| [`GroupName`](#OptionsProperty.GroupName)             | The group name of the property shown in the UI, and used to separate properties based on group name. |
| [`ID`](#OptionsProperty.ID)                           | ID property.                                                                                         |
| [`Name`](#OptionsProperty.Name)                       | The name of the property.                                                                            |
| [`Options`](#OptionsProperty.Options)                 | Options shown in the drop-down, represented by a dictionary of int -> string.                        |
| [`Owner`](#OptionsProperty.Owner)                     | Owner property.                                                                                      |
| [`PropertyControl`](#OptionsProperty.PropertyControl) | PropertyControl property.                                                                            |
| [`ReadOnly`](#OptionsProperty.ReadOnly)               | Returns whether a property is readonly.                                                              |
| [`Tag`](#OptionsProperty.Tag)                         | Tag property.                                                                                        |
| [`Tooltip`](#OptionsProperty.Tooltip)                 | The tooltip of the property in the UI.                                                               |
| [`Type`](#OptionsProperty.Type)                       | Type property.                                                                                       |
| [`Valid`](#OptionsProperty.Valid)                     | Returns whether a property is valid.                                                                 |
| [`Value`](#OptionsProperty.Value)                     | The stored value of the property.                                                                    |
| [`ValueString`](#OptionsProperty.ValueString)         | Get the string representation of the value.                                                          |

<a id="property-detail"></a>

## Property detail

<a id="OptionsProperty.Access"></a>

### *property* OptionsProperty.Access *: Ansys.Common.Interop.WBPropertyBrowsing.AnsPropertyAccess | [None](https://docs.python.org/3/builtins/constants.html#None)*

Access property.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.DisplayName"></a>

### *property* OptionsProperty.DisplayName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The name of the property shown in the UI. If not set, the Name property is used.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.GroupName"></a>

### *property* OptionsProperty.GroupName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The group name of the property shown in the UI, and used to separate properties based on group name.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.ID"></a>

### *property* OptionsProperty.ID *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ID property.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.Name"></a>

### *property* OptionsProperty.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The name of the property.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.Options"></a>

### *property* OptionsProperty.Options *: [dict](https://docs.python.org/3/builtins/stdtypes.html#dict)[Any, Any] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Options shown in the drop-down, represented by a dictionary of int -> string.
Where the int represents the option, and string represents string shown in the UI.
When an option is selected the Value property of the property is set to to the option int.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.Owner"></a>

### *property* OptionsProperty.Owner *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Owner property.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.PropertyControl"></a>

### *property* OptionsProperty.PropertyControl *: [Ansys.ACT.Mechanical.AdditionalProperties.Control](Control.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.AdditionalProperties.Control) | [None](https://docs.python.org/3/builtins/constants.html#None)*

PropertyControl property.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.ReadOnly"></a>

### *property* OptionsProperty.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns whether a property is readonly.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.Tag"></a>

### *property* OptionsProperty.Tag *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Tag property.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.Tooltip"></a>

### *property* OptionsProperty.Tooltip *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The tooltip of the property in the UI.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.Type"></a>

### *property* OptionsProperty.Type *: System.UInt16 | [None](https://docs.python.org/3/builtins/constants.html#None)*

Type property.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.Valid"></a>

### *property* OptionsProperty.Valid *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns whether a property is valid.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.Value"></a>

### *property* OptionsProperty.Value *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

The stored value of the property.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.ValueString"></a>

### *property* OptionsProperty.ValueString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the string representation of the value.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="OptionsProperty.CopyFrom"></a>

### OptionsProperty.CopyFrom(property: Ansys.ACT.Mechanical.AdditionalProperties.CustomProperty) → [None](https://docs.python.org/3/builtins/constants.html#None)

CopyFrom method.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.GetObjectData"></a>

### OptionsProperty.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.Resume"></a>

### OptionsProperty.Resume(property: Ansys.ACT.Mechanical.AdditionalProperties.CustomProperty) → [None](https://docs.python.org/3/builtins/constants.html#None)

Resume method.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.add_OnAfterPropertyChanged"></a>

### OptionsProperty.add_OnAfterPropertyChanged(value: System.EventHandler[Any]) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_OnAfterPropertyChanged method.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.add_OnBeforePropertyChanged"></a>

### OptionsProperty.add_OnBeforePropertyChanged(value: System.EventHandler[Any]) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_OnBeforePropertyChanged method.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.remove_OnAfterPropertyChanged"></a>

### OptionsProperty.remove_OnAfterPropertyChanged(value: System.EventHandler[Any]) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_OnAfterPropertyChanged method.

<!-- !! processed by numpydoc !! -->

<a id="OptionsProperty.remove_OnBeforePropertyChanged"></a>

### OptionsProperty.remove_OnBeforePropertyChanged(value: System.EventHandler[Any]) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_OnBeforePropertyChanged method.

<!-- !! processed by numpydoc !! -->

