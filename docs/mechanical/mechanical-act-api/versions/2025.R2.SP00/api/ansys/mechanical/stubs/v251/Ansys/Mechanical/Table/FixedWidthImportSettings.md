# `FixedWidthImportSettings`

<a id="ansys.mechanical.stubs.v251.Ansys.Mechanical.Table.FixedWidthImportSettings"></a>

#### *class* Ansys.Mechanical.Table.FixedWidthImportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

T:Ansys.Mechanical.Table.FixedWidthImportSettings defines how to import data from a delimited source
for tabular data.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------|-------------------------------------------------------|
| [`Clear`](#FixedWidthImportSettings.Clear)                 |                                                       |
| [`GetEnumerator`](#FixedWidthImportSettings.GetEnumerator) |                                                       |
| [`RemoveAt`](#FixedWidthImportSettings.RemoveAt)           | Removes the import definition at the specified index. |
| [`UseColumn`](#FixedWidthImportSettings.UseColumn)         |                                                       |

### Properties

| Name | Description |
|------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`ColumnWidths`](#FixedWidthImportSettings.ColumnWidths)   | Gets or sets the specified column widths.                                            |
| [`Count`](#FixedWidthImportSettings.Count)                 | Gets the number of column definitions.                                               |
| [`Format`](#FixedWidthImportSettings.Format)               | Gets the existing corresponding format.                                              |
| [`Item`](#FixedWidthImportSettings.Item)                   | Item property.                                                                       |
| [`PathType`](#FixedWidthImportSettings.PathType)           | Gets or sets the type of URI provided for Table import.                              |
| [`SkipFooter`](#FixedWidthImportSettings.SkipFooter)       | Gets or sets the number of rows to ignore at the end of the file during import.      |
| [`SkipRows`](#FixedWidthImportSettings.SkipRows)           | Gets or sets the number of rows to skip over at the start of the file during import. |

<a id="property-detail"></a>

## Property detail

<a id="FixedWidthImportSettings.ColumnWidths"></a>

### *property* FixedWidthImportSettings.ColumnWidths *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the specified column widths.
When setting, The value provided to P:Ansys.Mechanical.Table.FixedWidthImportSettings.ColumnWidths may be either:
number

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.Count"></a>

### *property* FixedWidthImportSettings.Count *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.Format"></a>

### *property* FixedWidthImportSettings.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat](../DataModel/MechanicalEnums/Table/ImportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.Item"></a>

### *property* FixedWidthImportSettings.Item *: [Ansys.Mechanical.Table.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Table.ColumnarDataImportDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.PathType"></a>

### *property* FixedWidthImportSettings.PathType *: [Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType](../DataModel/MechanicalEnums/Common/PathType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the type of URI provided for Table import.
Default: F:Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType.Absolute

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.SkipFooter"></a>

### *property* FixedWidthImportSettings.SkipFooter *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to ignore at the end of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.SkipRows"></a>

### *property* FixedWidthImportSettings.SkipRows *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to skip over at the start of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FixedWidthImportSettings.Clear"></a>

### FixedWidthImportSettings.Clear()

<a id="FixedWidthImportSettings.GetEnumerator"></a>

### FixedWidthImportSettings.GetEnumerator()

<a id="FixedWidthImportSettings.RemoveAt"></a>

### FixedWidthImportSettings.RemoveAt(index: [int](https://docs.python.org/3/library/functions.html#int))

Removes the import definition at the specified index.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.UseColumn"></a>

### FixedWidthImportSettings.UseColumn(index: [int](https://docs.python.org/3/library/functions.html#int), variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType](../DataModel/MechanicalEnums/Table/VariableType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType), variableClassification: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification](../DataModel/MechanicalEnums/Table/VariableClassification.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification), unit: [str](https://docs.python.org/3/library/stdtypes.html#str), name: [str](https://docs.python.org/3/library/stdtypes.html#str))

<!-- !! processed by numpydoc !! -->

