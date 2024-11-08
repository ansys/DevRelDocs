# `FixedWidthImportSettings`

<a id="ansys.mechanical.stubs.v251.Ansys.Mechanical.ExternalData.FixedWidthImportSettings"></a>

#### *class* Ansys.Mechanical.ExternalData.FixedWidthImportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

T:Ansys.Mechanical.ExternalData.FixedWidthImportSettings defines how to import external data from a fixed-width source file.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`Clear`](#FixedWidthImportSettings.Clear)                 |                                                       |
| [`GetEnumerator`](#FixedWidthImportSettings.GetEnumerator) |                                                       |
| [`RemoveAt`](#FixedWidthImportSettings.RemoveAt)           | Removes the import definition at the specified index. |
| [`UseColumn`](#FixedWidthImportSettings.UseColumn)         |                                                       |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`AverageCornerNodesToMidsideNodes`](#FixedWidthImportSettings.AverageCornerNodesToMidsideNodes)   |                                                                                      |
| [`ColumnWidths`](#FixedWidthImportSettings.ColumnWidths)       |                                                                                      |
| [`Count`](#FixedWidthImportSettings.Count)                     | Gets the number of column definitions.                                               |
| [`Format`](#FixedWidthImportSettings.Format)                   | Gets the existing corresponding format.                                              |
| [`Item`](#FixedWidthImportSettings.Item)                       | Item property.                                                                       |
| [`SkipFooter`](#FixedWidthImportSettings.SkipFooter)           | Gets or sets the number of rows to ignore at the end of the file during import.      |
| [`SkipRows`](#FixedWidthImportSettings.SkipRows)               | Gets or sets the number of rows to skip over at the start of the file during import. |

<a id="property-detail"></a>

## Property detail

<a id="FixedWidthImportSettings.AverageCornerNodesToMidsideNodes"></a>

### *property* FixedWidthImportSettings.AverageCornerNodesToMidsideNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.ColumnWidths"></a>

### *property* FixedWidthImportSettings.ColumnWidths *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.Count"></a>

### *property* FixedWidthImportSettings.Count *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.Format"></a>

### *property* FixedWidthImportSettings.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat](../DataModel/MechanicalEnums/ExternalData/ImportFormat.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.Item"></a>

### *property* FixedWidthImportSettings.Item *: [Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

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

### FixedWidthImportSettings.UseColumn(index: [int](https://docs.python.org/3/library/functions.html#int), variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.VariableType](../DataModel/MechanicalEnums/ExternalData/VariableType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.VariableType), unit: [str](https://docs.python.org/3/library/stdtypes.html#str), name: [str](https://docs.python.org/3/library/stdtypes.html#str))

<!-- !! processed by numpydoc !! -->

