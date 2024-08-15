# `Variable`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Variable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Represents an object that is either an input or an output for a P:Ansys.ACT.Mechanical.Fields.Variable.Field. Depending on whether it is an input or output and on the way it is defined, this object holds a series of discrete values
or an expression that may involve other variables.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------|----------------------------------------------------------------------------------|
| `GetDiscreteValue`   | Changes a value at a given position in the tabular definition of the variable.   |
| `SetDiscreteValue`   | Changes a value at a given position in the tabular definition of the variable.   |

### Properties

| Name | Description |
|------------------------|-------------------------------------------------------------------------------------------------------------------------|
| `Field`                | Gets the owner field.                                                                                                   |
| `IsInput`              | Gets a value indicating whether this variable is an input for its container field. Otherwise, it is an output variable. |
| `IsOutput`             | Gets a value indicating whether this variable is an output for its container field. Otherwise, it is an input variable. |
| `Index`                | Gets the index of this variable in its container field.                                                                 |
| `Name`                 | Gets the variable's name.                                                                                               |
| `Range`                | Gets the domain of validity for variable's value.                                                                       |
| `DefinitionType`       | Gets a value that indicates how this variable is defined.                                                               |
| `DiscreteValueCount`   | Gets the number of discrete values of this variable.                                                                    |
| `DiscreteValues`       | Gets or sets the discrete values of this variable or                                                                    |
| `MinMaxDiscreteValues` | Returns a Tuple containing the min and max values from the list of discrete values.                                     |
| `Formula`              | Gets or sets the expression that is used to defined this variable, or                                                   |
| `Unit`                 | Gets the symbol of the unit used to express this variable's values.                                                     |
| `QuantityName`         | Gets the name of the quantity represented by this variable.                                                             |

<a id="property-detail"></a>

## Property detail

### *property* Variable.Field *: [Ansys.ACT.Mechanical.Fields.Field](Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the owner field.

<!-- !! processed by numpydoc !! -->

### *property* Variable.IsInput *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a value indicating whether this variable is an input for its container field. Otherwise, it is an output variable.

<!-- !! processed by numpydoc !! -->

### *property* Variable.IsOutput *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a value indicating whether this variable is an output for its container field. Otherwise, it is an input variable.

<!-- !! processed by numpydoc !! -->

### *property* Variable.Index *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the index of this variable in its container field.

<!-- !! processed by numpydoc !! -->

### *property* Variable.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the variable's name.

<!-- !! processed by numpydoc !! -->

### *property* Variable.Range *: Ansys.ACT.Mechanical.Fields.Range | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the domain of validity for variable's value.

<!-- !! processed by numpydoc !! -->

### *property* Variable.DefinitionType *: [Ansys.ACT.Mechanical.Fields.VariableDefinitionType](VariableDefinitionType.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.VariableDefinitionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets a value that indicates how this variable is defined.

<!-- !! processed by numpydoc !! -->

### *property* Variable.DiscreteValueCount *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of discrete values of this variable.

<!-- !! processed by numpydoc !! -->

### *property* Variable.DiscreteValues *: System.Collections.Generic.IList[Ansys.Core.Units.Quantity] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the discrete values of this variable or

<!-- !! processed by numpydoc !! -->

### *property* Variable.MinMaxDiscreteValues *: System.Tuple[Ansys.Core.Units.Quantity, Ansys.Core.Units.Quantity] | [None](https://docs.python.org/3/library/constants.html#None)*

Returns a Tuple containing the min and max values from the list of discrete values.

<!-- !! processed by numpydoc !! -->

### *property* Variable.Formula *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the expression that is used to defined this variable, or

<!-- !! processed by numpydoc !! -->

### *property* Variable.Unit *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the symbol of the unit used to express this variable's values.

<!-- !! processed by numpydoc !! -->

### *property* Variable.QuantityName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the name of the quantity represented by this variable.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### Variable.GetDiscreteValue(index: System.Int32)

Changes a value at a given position in the tabular definition of the variable.

<!-- !! processed by numpydoc !! -->

### Variable.SetDiscreteValue(index: System.Int32, value: Ansys.Core.Units.Quantity)

Changes a value at a given position in the tabular definition of the variable.

<!-- !! processed by numpydoc !! -->

