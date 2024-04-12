<a id="module-ansys.mechanical.stubs.Ansys.ACT.Mechanical.Fields"></a>

<a id="the-fields-package"></a>

# The `Fields` package

<a id="summary"></a>

## Summary

### Subpackages

| [`Adapters`](Adapters/index.md#module-ansys.mechanical.stubs.Ansys.ACT.Mechanical.Fields.Adapters)   | Adapters subpackage.   |
|------------------------------------------------------------------------------------------------------|------------------------|

### Classes

| [`Field`](Field.md#Field)          | Represents a discrete or continuous field that can be used in a component of a boundary condition from Mechanical, for instance.   |
|------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| [`Variable`](Variable.md#Variable) | Represents an object that is either an input or an output for a                                                                    |

### Enums

| [`VariableDefinitionType`](VariableDefinitionType.md#VariableDefinitionType)   | Defines the various ways to define the values of a variable.   |
|--------------------------------------------------------------------------------|----------------------------------------------------------------|

<a id="description"></a>

## Description

Fields subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="Fields.Field"></a>

### *class* Fields.Field

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents a discrete or continuous field that can be used in a component of a boundary condition from Mechanical, for instance.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Inputs`](#Fields.Inputs)   | Gets the input variables of this component.   |
|------------------------------|-----------------------------------------------|
| [`Output`](#Fields.Output)   | Gets the output variable of this component.   |
| [`Name`](#id3)               | Gets the name of this component.              |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Fields import Field
```

<a id="property-detail"></a>

## Property detail

<a id="Fields.Inputs"></a>

### *property* Fields.Inputs *: System.Collections.Generic.IList[[Ansys.ACT.Mechanical.Fields.Variable](Variable.md#Variable)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the input variables of this component.

<!-- !! processed by numpydoc !! -->

<a id="Fields.Output"></a>

### *property* Fields.Output *: [Ansys.ACT.Mechanical.Fields.Variable](Variable.md#Variable) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the output variable of this component.

<!-- !! processed by numpydoc !! -->

<a id="Fields.Name"></a>

### *property* Fields.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the name of this component.

<!-- !! processed by numpydoc !! -->

<a id="Fields.Variable"></a>

### *class* Fields.Variable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents an object that is either an input or an output for a

> <!-- !! processed by numpydoc !! -->

### Methods

| [`GetDiscreteValue`](#Fields.GetDiscreteValue)   | Changes a value at a given position in the tabular definition of the variable.   |
|--------------------------------------------------|----------------------------------------------------------------------------------|
| [`SetDiscreteValue`](#Fields.SetDiscreteValue)   | Changes a value at a given position in the tabular definition of the variable.   |

### Properties

| [`Field`](Field.md#Field)                              | Gets the owner field.                                                                                                   |
|--------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| [`IsInput`](#Fields.IsInput)                           | Gets a value indicating whether this variable is an input for its container field. Otherwise, it is an output variable. |
| [`IsOutput`](#Fields.IsOutput)                         | Gets a value indicating whether this variable is an output for its container field. Otherwise, it is an input variable. |
| [`Index`](#Fields.Index)                               | Gets the index of this variable in its container field.                                                                 |
| [`Name`](#id3)                                         | Gets the variable’s name.                                                                                               |
| [`Range`](#Fields.Range)                               | Gets the domain of validity for variable’s value.                                                                       |
| [`DefinitionType`](#Fields.DefinitionType)             | Gets a value that indicates how this variable is defined.                                                               |
| [`DiscreteValueCount`](#Fields.DiscreteValueCount)     | Gets the number of discrete values of this variable.                                                                    |
| [`DiscreteValues`](#Fields.DiscreteValues)             | Gets or sets the discrete values of this variable or                                                                    |
| [`MinMaxDiscreteValues`](#Fields.MinMaxDiscreteValues) | Returns a Tuple containing the min and max values from the list of discrete values.                                     |
| [`Formula`](#id5)                                      | Gets or sets the expression that is used to defined this variable, or                                                   |
| [`Unit`](#Fields.Unit)                                 | Gets the symbol of the unit used to express this variable’s values.                                                     |
| [`QuantityName`](#Fields.QuantityName)                 | Gets the name of the quantity represented by this variable.                                                             |

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Fields import Variable
```

<a id="id2"></a>

## Property detail

<a id="id0"></a>

### *property* Fields.Field *: [Ansys.ACT.Mechanical.Fields.Field](Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the owner field.

<!-- !! processed by numpydoc !! -->

<a id="Fields.IsInput"></a>

### *property* Fields.IsInput *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a value indicating whether this variable is an input for its container field. Otherwise, it is an output variable.

<!-- !! processed by numpydoc !! -->

<a id="Fields.IsOutput"></a>

### *property* Fields.IsOutput *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a value indicating whether this variable is an output for its container field. Otherwise, it is an input variable.

<!-- !! processed by numpydoc !! -->

<a id="Fields.Index"></a>

### *property* Fields.Index *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the index of this variable in its container field.

<!-- !! processed by numpydoc !! -->

<a id="id3"></a>

### *property* Fields.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the variable’s name.

<!-- !! processed by numpydoc !! -->

<a id="Fields.Range"></a>

### *property* Fields.Range *: Ansys.ACT.Mechanical.Fields.Range | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the domain of validity for variable’s value.

<!-- !! processed by numpydoc !! -->

<a id="Fields.DefinitionType"></a>

### *property* Fields.DefinitionType *: [Ansys.ACT.Mechanical.Fields.VariableDefinitionType](VariableDefinitionType.md#VariableDefinitionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a value that indicates how this variable is defined.

<!-- !! processed by numpydoc !! -->

<a id="Fields.DiscreteValueCount"></a>

### *property* Fields.DiscreteValueCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of discrete values of this variable.

<!-- !! processed by numpydoc !! -->

<a id="Fields.DiscreteValues"></a>

### *property* Fields.DiscreteValues *: System.Collections.Generic.IList[Ansys.Core.Units.Quantity] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the discrete values of this variable or

<!-- !! processed by numpydoc !! -->

<a id="Fields.MinMaxDiscreteValues"></a>

### *property* Fields.MinMaxDiscreteValues *: System.Tuple[Ansys.Core.Units.Quantity, Ansys.Core.Units.Quantity] | [None](https://docs.python.org/3/library/constants.html#None)*

Returns a Tuple containing the min and max values from the list of discrete values.

<!-- !! processed by numpydoc !! -->

<a id="Fields.Formula"></a>

### *property* Fields.Formula *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the expression that is used to defined this variable, or

<!-- !! processed by numpydoc !! -->

<a id="Fields.Unit"></a>

### *property* Fields.Unit *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the symbol of the unit used to express this variable’s values.

<!-- !! processed by numpydoc !! -->

<a id="Fields.QuantityName"></a>

### *property* Fields.QuantityName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the name of the quantity represented by this variable.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Fields.GetDiscreteValue"></a>

### Fields.GetDiscreteValue(index: System.Int32)

Changes a value at a given position in the tabular definition of the variable.

<!-- !! processed by numpydoc !! -->

<a id="Fields.SetDiscreteValue"></a>

### Fields.SetDiscreteValue(index: System.Int32, value: Ansys.Core.Units.Quantity)

Changes a value at a given position in the tabular definition of the variable.

<!-- !! processed by numpydoc !! -->

<a id="Fields.VariableDefinitionType"></a>

### *class* Fields.VariableDefinitionType

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Defines the various ways to define the values of a variable.

> <!-- !! processed by numpydoc !! -->

### Attributes

| [`Free`](#Fields.Free)         |    |
|--------------------------------|----|
| [`Discrete`](#Fields.Discrete) |    |
| [`Formula`](#id5)              |    |

<a id="id4"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Fields import VariableDefinitionType
```

<a id="attribute-detail"></a>

## Attribute detail

<a id="Fields.Free"></a>

### Fields.Free *= 0*

<a id="Fields.Discrete"></a>

### Fields.Discrete *= 1*

<a id="id5"></a>

### Fields.Formula *= 2*
