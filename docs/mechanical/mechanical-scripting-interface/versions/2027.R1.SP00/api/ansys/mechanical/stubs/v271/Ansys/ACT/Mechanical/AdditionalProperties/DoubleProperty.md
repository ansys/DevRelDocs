# `DoubleProperty`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.AdditionalProperties.DoubleProperty"></a>

#### *class* Ansys.ACT.Mechanical.AdditionalProperties.DoubleProperty(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str), groupName: [str](https://docs.python.org/3/builtins/stdtypes.html#str))

<a id="DoubleProperty"></a>

### *class* DoubleProperty(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Provides a way to create properties that can hold double type values.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------|----------------------------------------|
| [`CopyFrom`](#DoubleProperty.CopyFrom)                                             | CopyFrom method.                       |
| [`GetObjectData`](#DoubleProperty.GetObjectData)                                   | GetObjectData method.                  |
| [`Resume`](#DoubleProperty.Resume)                                                 | Resume method.                         |
| [`add_OnAfterPropertyChanged`](#DoubleProperty.add_OnAfterPropertyChanged)         | add_OnAfterPropertyChanged method.     |
| [`add_OnBeforePropertyChanged`](#DoubleProperty.add_OnBeforePropertyChanged)       | add_OnBeforePropertyChanged method.    |
| [`remove_OnAfterPropertyChanged`](#DoubleProperty.remove_OnAfterPropertyChanged)   | remove_OnAfterPropertyChanged method.  |
| [`remove_OnBeforePropertyChanged`](#DoubleProperty.remove_OnBeforePropertyChanged) | remove_OnBeforePropertyChanged method. |

### Properties

| Name | Description |
|------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| [`Access`](#DoubleProperty.Access)                   | Access property.                                                                                     |
| [`CanParameterize`](#DoubleProperty.CanParameterize) | CanParameterize property.                                                                            |
| [`DisplayName`](#DoubleProperty.DisplayName)         | The name of the property shown in the UI. If not set, the Name property is used.                     |
| [`GroupName`](#DoubleProperty.GroupName)             | The group name of the property shown in the UI, and used to separate properties based on group name. |
| [`ID`](#DoubleProperty.ID)                           | ID property.                                                                                         |
| [`IsParameterized`](#DoubleProperty.IsParameterized) | IsParameterized property.                                                                            |
| [`Name`](#DoubleProperty.Name)                       | The name of the property.                                                                            |
| [`Owner`](#DoubleProperty.Owner)                     | Owner property.                                                                                      |
| [`ParameterType`](#DoubleProperty.ParameterType)     | ParameterType property.                                                                              |
| [`PropertyControl`](#DoubleProperty.PropertyControl) | PropertyControl property.                                                                            |
| [`ReadOnly`](#DoubleProperty.ReadOnly)               | Returns whether a property is readonly.                                                              |
| [`Tag`](#DoubleProperty.Tag)                         | Tag property.                                                                                        |
| [`Tooltip`](#DoubleProperty.Tooltip)                 | The tooltip of the property in the UI.                                                               |
| [`Type`](#DoubleProperty.Type)                       | Type property.                                                                                       |
| [`Valid`](#DoubleProperty.Valid)                     | Returns whether a property is valid.                                                                 |
| [`ValidRange`](#DoubleProperty.ValidRange)           | Tuple that can be used to control the upper and lower bounds of a double property.                   |
| [`Value`](#DoubleProperty.Value)                     | The stored value of the property.                                                                    |
| [`ValueString`](#DoubleProperty.ValueString)         | Get the string representation of the value.                                                          |

<a id="property-detail"></a>

## Property detail

<a id="DoubleProperty.Access"></a>

### *property* DoubleProperty.Access *: Ansys.Common.Interop.WBPropertyBrowsing.AnsPropertyAccess | [None](https://docs.python.org/3/builtins/constants.html#None)*

Access property.

<!-- !! processed by numpydoc !! -->

<a id="DoubleProperty.CanParameterize"></a>

### *property* DoubleProperty.CanParameterize *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

CanParameterize property.

<!-- !! processed by numpydoc !! -->

<a id="DoubleProperty.DisplayName"></a>

### *property* DoubleProperty.DisplayName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The name of the property shown in the UI. If not set, the Name property is used.

<!-- !! processed by numpydoc !! -->

<a id="DoubleProperty.GroupName"></a>

### *property* DoubleProperty.GroupName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The group name of the property shown in the UI, and used to separate properties based on group name.

<!-- !! processed by numpydoc !! -->

<a id="DoubleProperty.ID"></a>

### *property* DoubleProperty.ID *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ID property.

<!-- !! processed by numpydoc !! -->

<a id="DoubleProperty.IsParameterized"></a>

### *property* DoubleProperty.IsParameterized *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IsParameterized property.

<!-- !! processed by numpydoc !! -->

<a id="DoubleProperty.Name"></a>

### *property* DoubleProperty.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The name of the property.

<!-- !! processed by numpydoc !! -->

<a id="DoubleProperty.Owner"></a>

### *property* DoubleProperty.Owner *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Owner property.

<!-- !! processed by numpydoc !! -->

<a id="DoubleProperty.ParameterType"></a>

### *property* DoubleProperty.ParameterType *: Ansys.Mechanical.DataModel.Enums.ParameterType | [None](https://docs.python.org/3/builtins/constants.html#None)*

ParameterType property.

<!-- !! processed by numpydoc !! -->

<a id="DoubleProperty.PropertyControl"></a>

### *property* DoubleProperty.PropertyControl *: [Ansys.ACT.Mechanical.AdditionalProperties.Control](Control.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.AdditionalProperties.Control) | [None](https://docs.python.org/3/builtins/constants.html#None)*

PropertyControl property.

<!-- !! processed by numpydoc !! -->

<a id="DoubleProperty.ReadOnly"></a>

### *property* DoubleProperty.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns whether a property is readonly.

<!-- !! processed by numpydoc !! -->

<a id="DoubleProperty.Tag"></a>

### *property* DoubleProperty.Tag *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Tag property.

<!-- !! processed by numpydoc !! -->

<a id="DoubleProperty.Tooltip"></a>

### *property* DoubleProperty.Tooltip *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The tooltip of the property in the UI.

<!-- !! processed by numpydoc !! -->

<a id="DoubleProperty.Type"></a>

### *property* DoubleProperty.Type *: System.UInt16 | [None](https://docs.python.org/3/builtins/constants.html#None)*

Type property.

<!-- !! processed by numpydoc !! -->

<a id="DoubleProperty.Valid"></a>

### *property* DoubleProperty.Valid *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns whether a property is valid.

<!-- !! processed by numpydoc !! -->

<a id="DoubleProperty.ValidRange"></a>

### *property* DoubleProperty.ValidRange *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Tuple that can be used to control the upper and lower bounds of a double property.

<!-- !! processed by numpydoc !! -->

<a id="DoubleProperty.Value"></a>

### *property* DoubleProperty.Value *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

The stored value of the property.

<!-- !! processed by numpydoc !! -->

<a id="DoubleProperty.ValueString"></a>

### *property* DoubleProperty.ValueString *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the string representation of the value.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DoubleProperty.CopyFrom"></a>

### DoubleProperty.CopyFrom(property: Ansys.ACT.Mechanical.AdditionalProperties.CustomProperty) → [None](https://docs.python.org/3/builtins/constants.html#None)

CopyFrom method.

<!-- !! processed by numpydoc !! -->

<a id="DoubleProperty.GetObjectData"></a>

### DoubleProperty.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="DoubleProperty.Resume"></a>

### DoubleProperty.Resume(property: Ansys.ACT.Mechanical.AdditionalProperties.CustomProperty) → [None](https://docs.python.org/3/builtins/constants.html#None)

Resume method.

<!-- !! processed by numpydoc !! -->

<a id="DoubleProperty.add_OnAfterPropertyChanged"></a>

### DoubleProperty.add_OnAfterPropertyChanged(value: System.EventHandler[Any]) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_OnAfterPropertyChanged method.

<!-- !! processed by numpydoc !! -->

<a id="DoubleProperty.add_OnBeforePropertyChanged"></a>

### DoubleProperty.add_OnBeforePropertyChanged(value: System.EventHandler[Any]) → [None](https://docs.python.org/3/builtins/constants.html#None)

add_OnBeforePropertyChanged method.

<!-- !! processed by numpydoc !! -->

<a id="DoubleProperty.remove_OnAfterPropertyChanged"></a>

### DoubleProperty.remove_OnAfterPropertyChanged(value: System.EventHandler[Any]) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_OnAfterPropertyChanged method.

<!-- !! processed by numpydoc !! -->

<a id="DoubleProperty.remove_OnBeforePropertyChanged"></a>

### DoubleProperty.remove_OnBeforePropertyChanged(value: System.EventHandler[Any]) → [None](https://docs.python.org/3/builtins/constants.html#None)

remove_OnBeforePropertyChanged method.

<!-- !! processed by numpydoc !! -->

