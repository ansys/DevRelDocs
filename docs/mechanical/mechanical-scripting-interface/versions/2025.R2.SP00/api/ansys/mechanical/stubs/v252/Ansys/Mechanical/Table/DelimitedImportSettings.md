# `DelimitedImportSettings`

<a id="ansys.mechanical.stubs.v252.Ansys.Mechanical.Table.DelimitedImportSettings"></a>

#### *class* Ansys.Mechanical.Table.DelimitedImportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

T:Ansys.Mechanical.Table.DelimitedImportSettings defines how to import data from a delimited source
for tabular data.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`Clear`](#DelimitedImportSettings.Clear)                 |                                                       |
| [`GetEnumerator`](#DelimitedImportSettings.GetEnumerator) |                                                       |
| [`RemoveAt`](#DelimitedImportSettings.RemoveAt)           | Removes the import definition at the specified index. |
| [`UseColumn`](#DelimitedImportSettings.UseColumn)         |                                                       |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`Count`](#DelimitedImportSettings.Count)           | Gets the number of column definitions.                                               |
| [`Delimiter`](#DelimitedImportSettings.Delimiter)   | The delimiter used to separate columns.                                              |
| [`Format`](#DelimitedImportSettings.Format)         | Gets the existing corresponding format.                                              |
| [`Item`](#DelimitedImportSettings.Item)             | Item property.                                                                       |
| [`PathType`](#DelimitedImportSettings.PathType)                                               | Gets or sets the type of URI provided for Table import.                              |
| [`SkipFooter`](#DelimitedImportSettings.SkipFooter) | Gets or sets the number of rows to ignore at the end of the file during import.      |
| [`SkipRows`](#DelimitedImportSettings.SkipRows)     | Gets or sets the number of rows to skip over at the start of the file during import. |

<a id="property-detail"></a>

## Property detail

<a id="DelimitedImportSettings.Count"></a>

### *property* DelimitedImportSettings.Count *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.Delimiter"></a>

### *property* DelimitedImportSettings.Delimiter *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

The delimiter used to separate columns.

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.Format"></a>

### *property* DelimitedImportSettings.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat](../DataModel/MechanicalEnums/Table/ImportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.Item"></a>

### *property* DelimitedImportSettings.Item *: [Ansys.Mechanical.Table.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Table.ColumnarDataImportDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.PathType"></a>

### *property* DelimitedImportSettings.PathType *: [Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType](../DataModel/MechanicalEnums/Common/PathType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the type of URI provided for Table import.
Default: F:Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType.Absolute

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.SkipFooter"></a>

### *property* DelimitedImportSettings.SkipFooter *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to ignore at the end of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.SkipRows"></a>

### *property* DelimitedImportSettings.SkipRows *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to skip over at the start of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DelimitedImportSettings.Clear"></a>

### DelimitedImportSettings.Clear() → [None](https://docs.python.org/3/library/constants.html#None)

<a id="DelimitedImportSettings.GetEnumerator"></a>

### DelimitedImportSettings.GetEnumerator() → Iterator[[Ansys.Mechanical.Table.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Table.ColumnarDataImportDefinition)]

<a id="DelimitedImportSettings.RemoveAt"></a>

### DelimitedImportSettings.RemoveAt(index: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the import definition at the specified index.

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.UseColumn"></a>

### DelimitedImportSettings.UseColumn(index: [int](https://docs.python.org/3/library/functions.html#int), variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType](../DataModel/MechanicalEnums/Table/VariableType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType), variableClassification: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification](../DataModel/MechanicalEnums/Table/VariableClassification.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification), unit: [str](https://docs.python.org/3/library/stdtypes.html#str), name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.Mechanical.Table.ColumnarDataSourceBase](ColumnarDataSourceBase.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Table.ColumnarDataSourceBase)

<!-- !! processed by numpydoc !! -->

