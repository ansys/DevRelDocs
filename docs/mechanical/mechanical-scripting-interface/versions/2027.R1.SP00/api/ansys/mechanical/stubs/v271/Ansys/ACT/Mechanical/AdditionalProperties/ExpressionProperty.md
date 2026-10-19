# `ExpressionProperty`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.AdditionalProperties.ExpressionProperty"></a>

#### *class* Ansys.ACT.Mechanical.AdditionalProperties.ExpressionProperty(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str), groupName: [str](https://docs.python.org/3/builtins/stdtypes.html#str))

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Provides a way to create properties that can hold expressions.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------|----------------------------------------|
| [`CopyFrom`](#ExpressionProperty.CopyFrom)                                             | CopyFrom method.                       |
| [`GetObjectData`](#ExpressionProperty.GetObjectData)                                   | GetObjectData method.                  |
| [`Resume`](#ExpressionProperty.Resume)                                                 | Resume method.                         |
| [`add_OnAfterPropertyChanged`](#ExpressionProperty.add_OnAfterPropertyChanged)         | add_OnAfterPropertyChanged method.     |
| [`add_OnBeforePropertyChanged`](#ExpressionProperty.add_OnBeforePropertyChanged)       | add_OnBeforePropertyChanged method.    |
| [`remove_OnAfterPropertyChanged`](#ExpressionProperty.remove_OnAfterPropertyChanged)   | remove_OnAfterPropertyChanged method.  |
| [`remove_OnBeforePropertyChanged`](#ExpressionProperty.remove_OnBeforePropertyChanged) | remove_OnBeforePropertyChanged method. |

### Properties

| Name | Description |
|----------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| [`Access`](#ExpressionProperty.Access)                   | Access property.                                                                                     |
| [`DisplayName`](#ExpressionProperty.DisplayName)         | The name of the property shown in the UI. If not set, the Name property is used.                     |
| [`GroupName`](#ExpressionProperty.GroupName)             | The group name of the property shown in the UI, and used to separate properties based on group name. |
| [`ID`](#ExpressionProperty.ID)                           | ID property.                                                                                         |
| [`Name`](#ExpressionProperty.Name)                       | The name of the property.                                                                            |
| [`Owner`](#ExpressionProperty.Owner)                     | Owner property.                                                                                      |
| [`PropertyControl`](#ExpressionProperty.PropertyControl) | PropertyControl property.                                                                            |
| [`ReadOnly`](#ExpressionProperty.ReadOnly)               | Returns whether a property is readonly.                                                              |
| [`Tag`](#ExpressionProperty.Tag)                         | Tag property.                                                                                        |
| [`Tooltip`](#ExpressionProperty.Tooltip)                 | The tooltip of the property in the UI.                                                               |
| [`Type`](#ExpressionProperty.Type)                       | Type property.                                                                                       |
| [`Valid`](#ExpressionProperty.Valid)                     | Returns whether a property is valid.                                                                 |
| [`Value`](#ExpressionProperty.Value)                     | The stored value of the property.                                                                    |
| [`ValueString`](#ExpressionProperty.ValueString)         | Get the string representation of the value.                                                          |

<a id="property-detail"></a>

## Property detail

<a id="ExpressionProperty.Access"></a>

### *property* ExpressionProperty.Access *: Ansys.Common.Interop.WBPropertyBrowsing.AnsPropertyAccess | [None](https://docs.python.org/3/builtins/constants.html#None)*

Access property.

<!-- !! processed by numpydoc !! -->

<a id="ExpressionProperty.DisplayName"></a>

### *property* ExpressionProperty.DisplayName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The name of the property shown in the UI. If not set, the Name property is used.

<!-- !! processed by numpydoc !! -->

<a id="ExpressionProperty.GroupName"></a>

### *property* ExpressionProperty.GroupName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The group name of the property shown in the UI, and used to separate properties based on group name.

<!-- !! processed by numpydoc !! -->

<a id="ExpressionProperty.ID"></a>

### *property* ExpressionProperty.ID *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ID property.

<!-- !! processed by numpydoc !! -->

<a id="ExpressionProperty.Name"></a>

### *property* ExpressionProperty.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The name of the property.

<!-- !! processed by numpydoc !! -->

<a id="ExpressionProperty.Owner"></a>

### *property* ExpressionProperty.Owner *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Owner property.

<!-- !! processed by numpydoc !! -->

<a id="ExpressionProperty.PropertyControl"></a>

### *property* ExpressionProperty.PropertyControl *: [Ansys.ACT.Mechanical.AdditionalProperties.Control](Control.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.AdditionalProperties.Control) | [None](https://docs.python.org/3/builtins/constants.html#None)*

PropertyControl property.

<!-- !! processed by numpydoc !! -->

<a id="ExpressionProperty.ReadOnly"></a>

### *property* ExpressionProperty.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns whether a property is readonly.

<!-- !! processed by numpydoc !! -->

<a id="ExpressionProperty.Tag"></a>

### *property* ExpressionProperty.Tag *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Tag property.

<!-- !! processed by numpydoc !! -->

<a id="ExpressionProperty.Tooltip"></a>

### *property* ExpressionProperty.Tooltip *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The tooltip of the property in the UI.

<!-- !! processed by numpydoc !! -->

<a id="ExpressionProperty.Type"></a>

### *property* ExpressionProperty.Type *: System.UInt16 | [None](https://docs.python.org/3/builtins/constants.html#None)*

Type property.

<!-- !! processed by numpydoc !! -->

<a id="ExpressionProperty.Valid"></a>

### *property* ExpressionProperty.Valid *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns whether a property is valid.

<!-- !! processed by numpydoc !! -->

<a id="ExpressionProperty.Value"></a>

### *property* ExpressionProperty.Value *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

The stored value of the property.

<!-- !! processed by numpydoc !! -->

<a id="ExpressionProperty.ValueString"></a>

### *property* ExpressionProperty.ValueString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the string representation of the value.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ExpressionProperty.CopyFrom"></a>

### ExpressionProperty.CopyFrom(property: Ansys.ACT.Mechanical.AdditionalProperties.CustomProperty) → [None](https://docs.python.org/3/builtins/constants.html#None)

CopyFrom method.

<!-- !! processed by numpydoc !! -->

<a id="ExpressionProperty.GetObjectData"></a>

### ExpressionProperty.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ExpressionProperty.Resume"></a>

### ExpressionProperty.Resume(property: Ansys.ACT.Mechanical.AdditionalProperties.CustomProperty) → [None](https://docs.python.org/3/builtins/constants.html#None)

Resume method.

<!-- !! processed by numpydoc !! -->

<a id="ExpressionProperty.add_OnAfterPropertyChanged"></a>

### ExpressionProperty.add_OnAfterPropertyChanged(value: System.EventHandler[Any]) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_OnAfterPropertyChanged method.

<!-- !! processed by numpydoc !! -->

<a id="ExpressionProperty.add_OnBeforePropertyChanged"></a>

### ExpressionProperty.add_OnBeforePropertyChanged(value: System.EventHandler[Any]) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_OnBeforePropertyChanged method.

<!-- !! processed by numpydoc !! -->

<a id="ExpressionProperty.remove_OnAfterPropertyChanged"></a>

### ExpressionProperty.remove_OnAfterPropertyChanged(value: System.EventHandler[Any]) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_OnAfterPropertyChanged method.

<!-- !! processed by numpydoc !! -->

<a id="ExpressionProperty.remove_OnBeforePropertyChanged"></a>

### ExpressionProperty.remove_OnBeforePropertyChanged(value: System.EventHandler[Any]) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_OnBeforePropertyChanged method.

<!-- !! processed by numpydoc !! -->

