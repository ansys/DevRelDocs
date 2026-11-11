# `ApplyCancelProperty`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.AdditionalProperties.ApplyCancelProperty"></a>

#### *class* Ansys.ACT.Mechanical.AdditionalProperties.ApplyCancelProperty(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str), groupName: [str](https://docs.python.org/3/builtins/stdtypes.html#str))

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Provides a way to create properties with Apply/Cancel buttons.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|----------------------------------------|
| [`CopyFrom`](#ApplyCancelProperty.CopyFrom)                                             | CopyFrom method.                       |
| [`GetObjectData`](#ApplyCancelProperty.GetObjectData)                                   | GetObjectData method.                  |
| [`Resume`](#ApplyCancelProperty.Resume)                                                 | Resume method.                         |
| [`add_OnAfterPropertyChanged`](#ApplyCancelProperty.add_OnAfterPropertyChanged)         | add_OnAfterPropertyChanged method.     |
| [`add_OnBeforePropertyChanged`](#ApplyCancelProperty.add_OnBeforePropertyChanged)       | add_OnBeforePropertyChanged method.    |
| [`remove_OnAfterPropertyChanged`](#ApplyCancelProperty.remove_OnAfterPropertyChanged)   | remove_OnAfterPropertyChanged method.  |
| [`remove_OnBeforePropertyChanged`](#ApplyCancelProperty.remove_OnBeforePropertyChanged) | remove_OnBeforePropertyChanged method. |

### Properties

| Name | Description |
|-----------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| [`Access`](#ApplyCancelProperty.Access)                   | Access property.                                                                                     |
| [`DisplayName`](#ApplyCancelProperty.DisplayName)         | The name of the property shown in the UI. If not set, the Name property is used.                     |
| [`GroupName`](#ApplyCancelProperty.GroupName)             | The group name of the property shown in the UI, and used to separate properties based on group name. |
| [`ID`](#ApplyCancelProperty.ID)                           | ID property.                                                                                         |
| [`Name`](#ApplyCancelProperty.Name)                       | The name of the property.                                                                            |
| [`Owner`](#ApplyCancelProperty.Owner)                     | Owner property.                                                                                      |
| [`PropertyControl`](#ApplyCancelProperty.PropertyControl) | PropertyControl property.                                                                            |
| [`ReadOnly`](#ApplyCancelProperty.ReadOnly)               | Returns whether a property is readonly.                                                              |
| [`Tag`](#ApplyCancelProperty.Tag)                         | Tag property.                                                                                        |
| [`Tooltip`](#ApplyCancelProperty.Tooltip)                 | The tooltip of the property in the UI.                                                               |
| [`Type`](#ApplyCancelProperty.Type)                       | Type property.                                                                                       |
| [`Valid`](#ApplyCancelProperty.Valid)                     | Returns whether a property is valid.                                                                 |
| [`Value`](#ApplyCancelProperty.Value)                     | The stored value of the property.                                                                    |
| [`ValueString`](#ApplyCancelProperty.ValueString)         | Get the string representation of the value.                                                          |

<a id="property-detail"></a>

## Property detail

<a id="ApplyCancelProperty.Access"></a>

### *property* ApplyCancelProperty.Access *: Ansys.Common.Interop.WBPropertyBrowsing.AnsPropertyAccess | [None](https://docs.python.org/3/builtins/constants.html#None)*

Access property.

<!-- !! processed by numpydoc !! -->

<a id="ApplyCancelProperty.DisplayName"></a>

### *property* ApplyCancelProperty.DisplayName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The name of the property shown in the UI. If not set, the Name property is used.

<!-- !! processed by numpydoc !! -->

<a id="ApplyCancelProperty.GroupName"></a>

### *property* ApplyCancelProperty.GroupName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The group name of the property shown in the UI, and used to separate properties based on group name.

<!-- !! processed by numpydoc !! -->

<a id="ApplyCancelProperty.ID"></a>

### *property* ApplyCancelProperty.ID *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ID property.

<!-- !! processed by numpydoc !! -->

<a id="ApplyCancelProperty.Name"></a>

### *property* ApplyCancelProperty.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The name of the property.

<!-- !! processed by numpydoc !! -->

<a id="ApplyCancelProperty.Owner"></a>

### *property* ApplyCancelProperty.Owner *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Owner property.

<!-- !! processed by numpydoc !! -->

<a id="ApplyCancelProperty.PropertyControl"></a>

### *property* ApplyCancelProperty.PropertyControl *: [Ansys.ACT.Mechanical.AdditionalProperties.Control](Control.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.AdditionalProperties.Control) | [None](https://docs.python.org/3/builtins/constants.html#None)*

PropertyControl property.

<!-- !! processed by numpydoc !! -->

<a id="ApplyCancelProperty.ReadOnly"></a>

### *property* ApplyCancelProperty.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns whether a property is readonly.

<!-- !! processed by numpydoc !! -->

<a id="ApplyCancelProperty.Tag"></a>

### *property* ApplyCancelProperty.Tag *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Tag property.

<!-- !! processed by numpydoc !! -->

<a id="ApplyCancelProperty.Tooltip"></a>

### *property* ApplyCancelProperty.Tooltip *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The tooltip of the property in the UI.

<!-- !! processed by numpydoc !! -->

<a id="ApplyCancelProperty.Type"></a>

### *property* ApplyCancelProperty.Type *: System.UInt16 | [None](https://docs.python.org/3/builtins/constants.html#None)*

Type property.

<!-- !! processed by numpydoc !! -->

<a id="ApplyCancelProperty.Valid"></a>

### *property* ApplyCancelProperty.Valid *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns whether a property is valid.

<!-- !! processed by numpydoc !! -->

<a id="ApplyCancelProperty.Value"></a>

### *property* ApplyCancelProperty.Value *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

The stored value of the property.

<!-- !! processed by numpydoc !! -->

<a id="ApplyCancelProperty.ValueString"></a>

### *property* ApplyCancelProperty.ValueString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the string representation of the value.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ApplyCancelProperty.CopyFrom"></a>

### ApplyCancelProperty.CopyFrom(property: Ansys.ACT.Mechanical.AdditionalProperties.CustomProperty) → [None](https://docs.python.org/3/builtins/constants.html#None)

CopyFrom method.

<!-- !! processed by numpydoc !! -->

<a id="ApplyCancelProperty.GetObjectData"></a>

### ApplyCancelProperty.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ApplyCancelProperty.Resume"></a>

### ApplyCancelProperty.Resume(property: Ansys.ACT.Mechanical.AdditionalProperties.CustomProperty) → [None](https://docs.python.org/3/builtins/constants.html#None)

Resume method.

<!-- !! processed by numpydoc !! -->

<a id="ApplyCancelProperty.add_OnAfterPropertyChanged"></a>

### ApplyCancelProperty.add_OnAfterPropertyChanged(value: System.EventHandler[Any]) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_OnAfterPropertyChanged method.

<!-- !! processed by numpydoc !! -->

<a id="ApplyCancelProperty.add_OnBeforePropertyChanged"></a>

### ApplyCancelProperty.add_OnBeforePropertyChanged(value: System.EventHandler[Any]) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_OnBeforePropertyChanged method.

<!-- !! processed by numpydoc !! -->

<a id="ApplyCancelProperty.remove_OnAfterPropertyChanged"></a>

### ApplyCancelProperty.remove_OnAfterPropertyChanged(value: System.EventHandler[Any]) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_OnAfterPropertyChanged method.

<!-- !! processed by numpydoc !! -->

<a id="ApplyCancelProperty.remove_OnBeforePropertyChanged"></a>

### ApplyCancelProperty.remove_OnBeforePropertyChanged(value: System.EventHandler[Any]) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_OnBeforePropertyChanged method.

<!-- !! processed by numpydoc !! -->

