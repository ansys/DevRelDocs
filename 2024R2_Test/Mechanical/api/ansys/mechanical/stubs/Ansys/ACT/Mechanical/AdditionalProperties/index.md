<a id="module-ansys.mechanical.stubs.Ansys.ACT.Mechanical.AdditionalProperties"></a>

<a id="the-additionalproperties-package"></a>

# The `AdditionalProperties` package

<a id="summary"></a>

## Summary

### Classes

| Name | Summary |
|-----------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`ApplyCancelProperty`](ApplyCancelProperty.md#ApplyCancelProperty)   | Provides a way to create properties with Apply/Cancel buttons.             |
| [`DoubleProperty`](DoubleProperty.md#DoubleProperty)                  | Provides a way to create properties that can hold double type values.      |
| [`ExpressionProperty`](ExpressionProperty.md#ExpressionProperty)      | Provides a way to create properties that can hold expressions.             |
| [`OptionsProperty`](OptionsProperty.md#OptionsProperty)               | Provides a way to create properties that show up as a drop down in the UI. |

### Enums

| Name | Summary |
|-----------------------------------|------------------------------------------------|
| [`Control`](Control.md#Control)   | The control type for an additional property.   |

<a id="description"></a>

## Description

AdditionalProperties subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="AdditionalProperties.ApplyCancelProperty"></a>

### *class* AdditionalProperties.ApplyCancelProperty

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Provides a way to create properties with Apply/Cancel buttons.

> <!-- !! processed by numpydoc !! -->

### Properties

| Name | Summary |
|------------------------|------------------------------------------------------------------------------------------------------|
| [`Name`](#id20)        | The name of the property.                                                                            |
| [`DisplayName`](#id21) | The name of the property shown in the UI. If not set, the Name property is used.                     |
| [`GroupName`](#id22)   | The group name of the property shown in the UI, and used to separate properties based on group name. |
| [`Tooltip`](#id23)     | The tooltip of the property in the UI.                                                               |
| [`Value`](#id24)       | The stored value of the property.                                                                    |
| [`ValueString`](#id25) | Get the string representation of the value.                                                          |
| [`ReadOnly`](#id26)    | Returns whether a property is readonly.                                                              |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.AdditionalProperties import ApplyCancelProperty
```

<a id="property-detail"></a>

## Property detail

<a id="AdditionalProperties.Name"></a>

### *property* AdditionalProperties.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The name of the property.

<!-- !! processed by numpydoc !! -->

<a id="AdditionalProperties.DisplayName"></a>

### *property* AdditionalProperties.DisplayName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The name of the property shown in the UI. If not set, the Name property is used.

<!-- !! processed by numpydoc !! -->

<a id="AdditionalProperties.GroupName"></a>

### *property* AdditionalProperties.GroupName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The group name of the property shown in the UI, and used to separate properties based on group name.

<!-- !! processed by numpydoc !! -->

<a id="AdditionalProperties.Tooltip"></a>

### *property* AdditionalProperties.Tooltip *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The tooltip of the property in the UI.

<!-- !! processed by numpydoc !! -->

<a id="AdditionalProperties.Value"></a>

### *property* AdditionalProperties.Value *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

The stored value of the property.

<!-- !! processed by numpydoc !! -->

<a id="AdditionalProperties.ValueString"></a>

### *property* AdditionalProperties.ValueString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Get the string representation of the value.

<!-- !! processed by numpydoc !! -->

<a id="AdditionalProperties.ReadOnly"></a>

### *property* AdditionalProperties.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Returns whether a property is readonly.

<!-- !! processed by numpydoc !! -->

<a id="AdditionalProperties.DoubleProperty"></a>

### *class* AdditionalProperties.DoubleProperty

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Provides a way to create properties that can hold double type values.

> <!-- !! processed by numpydoc !! -->

### Properties

| Name | Summary |
|----------------------------------------------------|------------------------------------------------------------------------------------------------------|
| [`ValidRange`](#AdditionalProperties.ValidRange)   | Tuple that can be used to control the upper and lower bounds of a double property.                   |
| [`Name`](#id20)                                    | The name of the property.                                                                            |
| [`DisplayName`](#id21)                             | The name of the property shown in the UI. If not set, the Name property is used.                     |
| [`GroupName`](#id22)                               | The group name of the property shown in the UI, and used to separate properties based on group name. |
| [`Tooltip`](#id23)                                 | The tooltip of the property in the UI.                                                               |
| [`Value`](#id24)                                   | The stored value of the property.                                                                    |
| [`ValueString`](#id25)                             | Get the string representation of the value.                                                          |
| [`ReadOnly`](#id26)                                | Returns whether a property is readonly.                                                              |

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.AdditionalProperties import DoubleProperty
```

<a id="id2"></a>

## Property detail

<a id="AdditionalProperties.ValidRange"></a>

### *property* AdditionalProperties.ValidRange *: IronPython.Runtime.PythonTuple | [None](https://docs.python.org/3/library/constants.html#None)*

Tuple that can be used to control the upper and lower bounds of a double property.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AdditionalProperties.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The name of the property.

<!-- !! processed by numpydoc !! -->

<a id="id3"></a>

### *property* AdditionalProperties.DisplayName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The name of the property shown in the UI. If not set, the Name property is used.

<!-- !! processed by numpydoc !! -->

<a id="id4"></a>

### *property* AdditionalProperties.GroupName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The group name of the property shown in the UI, and used to separate properties based on group name.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* AdditionalProperties.Tooltip *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The tooltip of the property in the UI.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* AdditionalProperties.Value *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

The stored value of the property.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* AdditionalProperties.ValueString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Get the string representation of the value.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* AdditionalProperties.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Returns whether a property is readonly.

<!-- !! processed by numpydoc !! -->

<a id="AdditionalProperties.ExpressionProperty"></a>

### *class* AdditionalProperties.ExpressionProperty

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Provides a way to create properties that can hold expressions.

> <!-- !! processed by numpydoc !! -->

### Properties

| Name | Summary |
|------------------------|------------------------------------------------------------------------------------------------------|
| [`Name`](#id20)        | The name of the property.                                                                            |
| [`DisplayName`](#id21) | The name of the property shown in the UI. If not set, the Name property is used.                     |
| [`GroupName`](#id22)   | The group name of the property shown in the UI, and used to separate properties based on group name. |
| [`Tooltip`](#id23)     | The tooltip of the property in the UI.                                                               |
| [`Value`](#id24)       | The stored value of the property.                                                                    |
| [`ValueString`](#id25) | Get the string representation of the value.                                                          |
| [`ReadOnly`](#id26)    | Returns whether a property is readonly.                                                              |

<a id="id9"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.AdditionalProperties import ExpressionProperty
```

<a id="id10"></a>

## Property detail

<a id="id11"></a>

### *property* AdditionalProperties.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The name of the property.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

### *property* AdditionalProperties.DisplayName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The name of the property shown in the UI. If not set, the Name property is used.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### *property* AdditionalProperties.GroupName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The group name of the property shown in the UI, and used to separate properties based on group name.

<!-- !! processed by numpydoc !! -->

<a id="id14"></a>

### *property* AdditionalProperties.Tooltip *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The tooltip of the property in the UI.

<!-- !! processed by numpydoc !! -->

<a id="id15"></a>

### *property* AdditionalProperties.Value *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

The stored value of the property.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### *property* AdditionalProperties.ValueString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Get the string representation of the value.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### *property* AdditionalProperties.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Returns whether a property is readonly.

<!-- !! processed by numpydoc !! -->

<a id="AdditionalProperties.OptionsProperty"></a>

### *class* AdditionalProperties.OptionsProperty

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Provides a way to create properties that show up as a drop down in the UI.

> <!-- !! processed by numpydoc !! -->

### Properties

| Name | Summary |
|------------------------|------------------------------------------------------------------------------------------------------|
| [`Options`](#id28)     | Options shown in the drop-down, represented by a dictionary of int -> string.                        |
| [`Name`](#id20)        | The name of the property.                                                                            |
| [`DisplayName`](#id21) | The name of the property shown in the UI. If not set, the Name property is used.                     |
| [`GroupName`](#id22)   | The group name of the property shown in the UI, and used to separate properties based on group name. |
| [`Tooltip`](#id23)     | The tooltip of the property in the UI.                                                               |
| [`Value`](#id24)       | The stored value of the property.                                                                    |
| [`ValueString`](#id25) | Get the string representation of the value.                                                          |
| [`ReadOnly`](#id26)    | Returns whether a property is readonly.                                                              |

<a id="id18"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.AdditionalProperties import OptionsProperty
```

<a id="id19"></a>

## Property detail

<a id="AdditionalProperties.Options"></a>

### *property* AdditionalProperties.Options *: System.Collections.Generic.IDictionary[System.Object, System.Object] | [None](https://docs.python.org/3/library/constants.html#None)*

Options shown in the drop-down, represented by a dictionary of int -> string.
Where the int represents the option, and string represents string shown in the UI.
When an option is selected the Value property of the property is set to to the option int.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### *property* AdditionalProperties.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The name of the property.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

### *property* AdditionalProperties.DisplayName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The name of the property shown in the UI. If not set, the Name property is used.

<!-- !! processed by numpydoc !! -->

<a id="id22"></a>

### *property* AdditionalProperties.GroupName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The group name of the property shown in the UI, and used to separate properties based on group name.

<!-- !! processed by numpydoc !! -->

<a id="id23"></a>

### *property* AdditionalProperties.Tooltip *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The tooltip of the property in the UI.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### *property* AdditionalProperties.Value *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

The stored value of the property.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### *property* AdditionalProperties.ValueString *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Get the string representation of the value.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

### *property* AdditionalProperties.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Returns whether a property is readonly.

<!-- !! processed by numpydoc !! -->

<a id="AdditionalProperties.Control"></a>

### *class* AdditionalProperties.Control

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> The control type for an additional property.

> <!-- !! processed by numpydoc !! -->

### Attributes

| Name | Summary |
|----------------------------------------------------|----|
| [`Expression`](#AdditionalProperties.Expression)   |    |
| [`Double`](#AdditionalProperties.Double)           |    |
| [`ApplyCancel`](#AdditionalProperties.ApplyCancel) |    |
| [`Options`](#id28)                                 |    |

<a id="id27"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.AdditionalProperties import Control
```

<a id="attribute-detail"></a>

## Attribute detail

<a id="AdditionalProperties.Expression"></a>

### AdditionalProperties.Expression *= 64*

<a id="AdditionalProperties.Double"></a>

### AdditionalProperties.Double *= 1310720*

<a id="AdditionalProperties.ApplyCancel"></a>

### AdditionalProperties.ApplyCancel *= 131072*

<a id="id28"></a>

### AdditionalProperties.Options *= 2097152*
