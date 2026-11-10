# `DelimitedImportSettings`

<a id="ansys.mechanical.stubs.v271.Ansys.Mechanical.ExternalData.DelimitedImportSettings"></a>

#### *class* Ansys.Mechanical.ExternalData.DelimitedImportSettings

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

defines how to import external data from a delimited source file.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [`Clear`](#DelimitedImportSettings.Clear)                 |                                                                                        |
| [`GetEnumerator`](#DelimitedImportSettings.GetEnumerator) |                                                                                        |
| [`RemoveAt`](#DelimitedImportSettings.RemoveAt)           | Removes the import definition at the specified index.                                  |
| [`UseColumn`](#DelimitedImportSettings.UseColumn)         | Add a column to be imported from the specified data source column index and configured |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| [`AverageCornerNodesToMidsideNodes`](#DelimitedImportSettings.AverageCornerNodesToMidsideNodes)   | If set to Yes, the data at Midside nodes is calculated as average of data specified at corner nodes.   |
| [`Count`](#DelimitedImportSettings.Count)                      | Gets the number of column definitions.                                                                 |
| [`Delimiter`](#DelimitedImportSettings.Delimiter)              | The delimiter used to separate columns.                                                                |
| [`Format`](#DelimitedImportSettings.Format)                    | Gets the existing corresponding format.                                                                |
| [`Item`](#DelimitedImportSettings.Item)                        | Item property.                                                                                         |
| [`SkipFooter`](#DelimitedImportSettings.SkipFooter)            | Gets or sets the number of rows to ignore at the end of the file during import.                        |
| [`SkipRows`](#DelimitedImportSettings.SkipRows)                | Gets or sets the number of rows to skip over at the start of the file during import.                   |

<a id="property-detail"></a>

## Property detail

<a id="DelimitedImportSettings.AverageCornerNodesToMidsideNodes"></a>

### *property* DelimitedImportSettings.AverageCornerNodesToMidsideNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

If set to Yes, the data at Midside nodes is calculated as average of data specified at corner nodes.

Defaults to False.

This property is used only when there is another external data file defined with MAPDL import format.

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.Count"></a>

### *property* DelimitedImportSettings.Count *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.Delimiter"></a>

### *property* DelimitedImportSettings.Delimiter *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The delimiter used to separate columns.

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.Format"></a>

### *property* DelimitedImportSettings.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat](../DataModel/MechanicalEnums/ExternalData/ImportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.Item"></a>

### *property* DelimitedImportSettings.Item *: [Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.SkipFooter"></a>

### *property* DelimitedImportSettings.SkipFooter *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of rows to ignore at the end of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.SkipRows"></a>

### *property* DelimitedImportSettings.SkipRows *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of rows to skip over at the start of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DelimitedImportSettings.Clear"></a>

### DelimitedImportSettings.Clear() → [None](https://docs.python.org/3/builtins/constants.html#None)

<a id="DelimitedImportSettings.GetEnumerator"></a>

### DelimitedImportSettings.GetEnumerator() → Iterator[[Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition)]

<a id="DelimitedImportSettings.RemoveAt"></a>

### DelimitedImportSettings.RemoveAt(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the import definition at the specified index.

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.UseColumn"></a>

### DelimitedImportSettings.UseColumn(index: [int](https://docs.python.org/3/builtins/functions.html#int), variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.VariableType](../DataModel/MechanicalEnums/ExternalData/VariableType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.VariableType), unit: [str](https://docs.python.org/3/builtins/stdtypes.html#str), name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.Mechanical.ExternalData.ColumnarDataSourceBase](ColumnarDataSourceBase.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.ExternalData.ColumnarDataSourceBase)

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

