# `FixedWidthImportSettings`

<a id="ansys.mechanical.stubs.v271.Ansys.Mechanical.ExternalData.FixedWidthImportSettings"></a>

#### *class* Ansys.Mechanical.ExternalData.FixedWidthImportSettings

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

defines how to import external data from a fixed-width source file.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [`Clear`](#FixedWidthImportSettings.Clear)                 |                                                                                        |
| [`GetEnumerator`](#FixedWidthImportSettings.GetEnumerator) |                                                                                        |
| [`RemoveAt`](#FixedWidthImportSettings.RemoveAt)           | Removes the import definition at the specified index.                                  |
| [`UseColumn`](#FixedWidthImportSettings.UseColumn)         | Add a column to be imported from the specified data source column index and configured |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| [`AverageCornerNodesToMidsideNodes`](#FixedWidthImportSettings.AverageCornerNodesToMidsideNodes)   | If set to Yes, the data at Midside nodes is calculated as average of data specified at corner nodes.   |
| [`ColumnWidths`](#FixedWidthImportSettings.ColumnWidths)       | Gets or sets the specified column widths as a string using Fortran-esque fixed-format specifications.  |
| [`Count`](#FixedWidthImportSettings.Count)                     | Gets the number of column definitions.                                                                 |
| [`Format`](#FixedWidthImportSettings.Format)                   | Gets the existing corresponding format.                                                                |
| [`Item`](#FixedWidthImportSettings.Item)                       | Item property.                                                                                         |
| [`SkipFooter`](#FixedWidthImportSettings.SkipFooter)           | Gets or sets the number of rows to ignore at the end of the file during import.                        |
| [`SkipRows`](#FixedWidthImportSettings.SkipRows)               | Gets or sets the number of rows to skip over at the start of the file during import.                   |

<a id="property-detail"></a>

## Property detail

<a id="FixedWidthImportSettings.AverageCornerNodesToMidsideNodes"></a>

### *property* FixedWidthImportSettings.AverageCornerNodesToMidsideNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

If set to Yes, the data at Midside nodes is calculated as average of data specified at corner nodes.

Defaults to False.

This property is used only when there is another external data file defined with MAPDL import format.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.ColumnWidths"></a>

### *property* FixedWidthImportSettings.ColumnWidths *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the specified column widths as a string using Fortran-esque fixed-format specifications.

This is equivalent to the “User-Defined” format specifier for External Data as described in the product
documentation.

Note, however, that regardless of the format specifier all imported columns WILL be interpreted using the
.NET command double.TryParse() to support the requirements of the underlying variable data for Table.

In the example below, the line has one integer followed by four exponential data types.
385 8.333333333E-003 9.375000000E-003 3.375000000E-001 0.000000000E+000
The corresponding format is 1i3,4e17.9
Where:
The first entry is the number of occurrences
The second entry is the format specifier
The third entry is the number of characters of data in the definition(including numeric values (0-9),
the letter 'e' (for instances of scientific notation), and any white space and + or - signs)
The fourth entry is the number of digits after the decimal point.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.Count"></a>

### *property* FixedWidthImportSettings.Count *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.Format"></a>

### *property* FixedWidthImportSettings.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat](../DataModel/MechanicalEnums/ExternalData/ImportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.Item"></a>

### *property* FixedWidthImportSettings.Item *: [Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.SkipFooter"></a>

### *property* FixedWidthImportSettings.SkipFooter *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of rows to ignore at the end of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.SkipRows"></a>

### *property* FixedWidthImportSettings.SkipRows *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of rows to skip over at the start of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FixedWidthImportSettings.Clear"></a>

### FixedWidthImportSettings.Clear() → [None](https://docs.python.org/3/builtins/constants.html#None)

<a id="FixedWidthImportSettings.GetEnumerator"></a>

### FixedWidthImportSettings.GetEnumerator() → Iterator[[Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition)]

<a id="FixedWidthImportSettings.RemoveAt"></a>

### FixedWidthImportSettings.RemoveAt(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the import definition at the specified index.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.UseColumn"></a>

### FixedWidthImportSettings.UseColumn(index: [int](https://docs.python.org/3/builtins/functions.html#int), variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.VariableType](../DataModel/MechanicalEnums/ExternalData/VariableType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.VariableType), unit: [str](https://docs.python.org/3/builtins/stdtypes.html#str), name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.Mechanical.ExternalData.ColumnarDataSourceBase](ColumnarDataSourceBase.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.ExternalData.ColumnarDataSourceBase)

```text
Add a column to be imported from the specified data source column index and configured
as the specified variable type. The order in which columns are added determines their
order in the table/>.

If unit is `null`, the default unit (in the active unit system) for the specified
variable type will be assumed during import.

If name is `null` or empty, a unique name will be generated from the specified
variableType during import.

A reference to the instance is returned so that invocations can be chained together.
```

<!-- !! processed by numpydoc !! -->

