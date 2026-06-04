# `Variable`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Variable"></a>

#### *class* Ansys.ACT.Mechanical.Fields.Variable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Represents an object that is either an input or an output for a P:Ansys.ACT.Mechanical.Fields.Variable.Field. Depending on whether it is an input or output and on the way it is defined, this object holds a series of discrete values
or an expression that may involve other variables.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------|----------------------------------------------------------------------------------|
| [`GetDiscreteValue`](#Variable.GetDiscreteValue)   | Changes a value at a given position in the tabular definition of the variable.   |
| [`SetDiscreteValue`](#Variable.SetDiscreteValue)   | Changes a value at a given position in the tabular definition of the variable.   |

### Properties

| Name | Description |
|----------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| [`DefinitionType`](#Variable.DefinitionType)             | Gets a value that indicates how this variable is defined.                                                               |
| [`DiscreteValueCount`](#Variable.DiscreteValueCount)     | Gets the number of discrete values of this variable.                                                                    |
| [`DiscreteValues`](#Variable.DiscreteValues)             | Gets or sets the discrete values of this variable or                                                                    |
| [`Field`](#Variable.Field)                               | Gets the owner field.                                                                                                   |
| [`Formula`](#Variable.Formula)                           | Gets or sets the expression that is used to defined this variable, or                                                   |
| [`Index`](#Variable.Index)                               | Gets the index of this variable in its container field.                                                                 |
| [`IsInput`](#Variable.IsInput)                           | Gets a value indicating whether this variable is an input for its container field. Otherwise, it is an output variable. |
| [`IsOutput`](#Variable.IsOutput)                         | Gets a value indicating whether this variable is an output for its container field. Otherwise, it is an input variable. |
| [`MinMaxDiscreteValues`](#Variable.MinMaxDiscreteValues) | Returns a Tuple containing the min and max values from the list of discrete values.                                     |
| [`Name`](#Variable.Name)                                 | Gets the variable’s name.                                                                                               |
| [`QuantityName`](#Variable.QuantityName)                 | Gets the name of the quantity represented by this variable.                                                             |
| [`Range`](#Variable.Range)                               | Gets the domain of validity for variable’s value.                                                                       |
| [`Unit`](#Variable.Unit)                                 | Gets the symbol of the unit used to express this variable’s values.                                                     |

<a id="property-detail"></a>

## Property detail

<a id="Variable.DefinitionType"></a>

### *property* Variable.DefinitionType *: [Ansys.ACT.Mechanical.Fields.VariableDefinitionType](VariableDefinitionType.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.VariableDefinitionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a value that indicates how this variable is defined.

<!-- !! processed by numpydoc !! -->

<a id="Variable.DiscreteValueCount"></a>

### *property* Variable.DiscreteValueCount *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of discrete values of this variable.

<!-- !! processed by numpydoc !! -->

<a id="Variable.DiscreteValues"></a>

### *property* Variable.DiscreteValues *: List[Ansys.Core.Units.Quantity] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the discrete values of this variable or

<!-- !! processed by numpydoc !! -->

<a id="Variable.Field"></a>

### *property* Variable.Field *: [Ansys.ACT.Mechanical.Fields.Field](Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the owner field.

<!-- !! processed by numpydoc !! -->

<a id="Variable.Formula"></a>

### *property* Variable.Formula *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the expression that is used to defined this variable, or

<!-- !! processed by numpydoc !! -->

<a id="Variable.Index"></a>

### *property* Variable.Index *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the index of this variable in its container field.

<!-- !! processed by numpydoc !! -->

<a id="Variable.IsInput"></a>

### *property* Variable.IsInput *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a value indicating whether this variable is an input for its container field. Otherwise, it is an output variable.

<!-- !! processed by numpydoc !! -->

<a id="Variable.IsOutput"></a>

### *property* Variable.IsOutput *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a value indicating whether this variable is an output for its container field. Otherwise, it is an input variable.

<!-- !! processed by numpydoc !! -->

<a id="Variable.MinMaxDiscreteValues"></a>

### *property* Variable.MinMaxDiscreteValues *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.Core.Units.Quantity, Ansys.Core.Units.Quantity] | [None](https://docs.python.org/3/library/constants.html#None)*

Returns a Tuple containing the min and max values from the list of discrete values.

<!-- !! processed by numpydoc !! -->

<a id="Variable.Name"></a>

### *property* Variable.Name *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the variable’s name.

<!-- !! processed by numpydoc !! -->

<a id="Variable.QuantityName"></a>

### *property* Variable.QuantityName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the name of the quantity represented by this variable.

<!-- !! processed by numpydoc !! -->

<a id="Variable.Range"></a>

### *property* Variable.Range *: Ansys.ACT.Mechanical.Fields.Range | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the domain of validity for variable’s value.

<!-- !! processed by numpydoc !! -->

<a id="Variable.Unit"></a>

### *property* Variable.Unit *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the symbol of the unit used to express this variable’s values.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Variable.GetDiscreteValue"></a>

### Variable.GetDiscreteValue(index: [int](https://docs.python.org/3/library/functions.html#int))

Changes a value at a given position in the tabular definition of the variable.

<!-- !! processed by numpydoc !! -->

<a id="Variable.SetDiscreteValue"></a>

### Variable.SetDiscreteValue(index: [int](https://docs.python.org/3/library/functions.html#int), value: Ansys.Core.Units.Quantity)

Changes a value at a given position in the tabular definition of the variable.

<!-- !! processed by numpydoc !! -->

