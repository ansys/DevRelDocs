# Variable

### *class* Variable

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents an object that is either an input or an output for a

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetDiscreteValue`](#Variable.GetDiscreteValue)   | Changes a value at a given position in the tabular definition of the variable.   |
|----------------------------------------------------|----------------------------------------------------------------------------------|
| [`SetDiscreteValue`](#Variable.SetDiscreteValue)   | Changes a value at a given position in the tabular definition of the variable.   |

### Properties

| [`Field`](Field.md#Field)                                | Gets the owner field.                                                                                                   |
|----------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| [`IsInput`](#Variable.IsInput)                           | Gets a value indicating whether this variable is an input for its container field. Otherwise, it is an output variable. |
| [`IsOutput`](#Variable.IsOutput)                         | Gets a value indicating whether this variable is an output for its container field. Otherwise, it is an input variable. |
| [`Index`](#Variable.Index)                               | Gets the index of this variable in its container field.                                                                 |
| [`Name`](#Variable.Name)                                 | Gets the variable’s name.                                                                                               |
| [`Range`](#Variable.Range)                               | Gets the domain of validity for variable’s value.                                                                       |
| [`DefinitionType`](#Variable.DefinitionType)             | Gets a value that indicates how this variable is defined.                                                               |
| [`DiscreteValueCount`](#Variable.DiscreteValueCount)     | Gets the number of discrete values of this variable.                                                                    |
| [`DiscreteValues`](#Variable.DiscreteValues)             | Gets or sets the discrete values of this variable or                                                                    |
| [`MinMaxDiscreteValues`](#Variable.MinMaxDiscreteValues) | Returns a Tuple containing the min and max values from the list of discrete values.                                     |
| [`Formula`](#Variable.Formula)                           | Gets or sets the expression that is used to defined this variable, or                                                   |
| [`Unit`](#Variable.Unit)                                 | Gets the symbol of the unit used to express this variable’s values.                                                     |
| [`QuantityName`](#Variable.QuantityName)                 | Gets the name of the quantity represented by this variable.                                                             |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Mechanical.Fields import Variable
```

## Property detail

### *property* Variable.Field *: [Ansys.ACT.Mechanical.Fields.Field](Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

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

Gets the variable’s name.

<!-- !! processed by numpydoc !! -->

### *property* Variable.Range *: Ansys.ACT.Mechanical.Fields.Range | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the domain of validity for variable’s value.

<!-- !! processed by numpydoc !! -->

### *property* Variable.DefinitionType *: [Ansys.ACT.Mechanical.Fields.VariableDefinitionType](VariableDefinitionType.md#VariableDefinitionType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

Gets the symbol of the unit used to express this variable’s values.

<!-- !! processed by numpydoc !! -->

### *property* Variable.QuantityName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the name of the quantity represented by this variable.

<!-- !! processed by numpydoc !! -->

## Method detail

### Variable.GetDiscreteValue(index: System.Int32)

Changes a value at a given position in the tabular definition of the variable.

<!-- !! processed by numpydoc !! -->

### Variable.SetDiscreteValue(index: System.Int32, value: Ansys.Core.Units.Quantity)

Changes a value at a given position in the tabular definition of the variable.

<!-- !! processed by numpydoc !! -->
