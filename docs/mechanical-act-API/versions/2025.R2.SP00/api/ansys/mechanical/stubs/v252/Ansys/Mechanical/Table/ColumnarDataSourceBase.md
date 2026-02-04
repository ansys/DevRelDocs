# `ColumnarDataSourceBase`

<a id="ansys.mechanical.stubs.v252.Ansys.Mechanical.Table.ColumnarDataSourceBase"></a>

#### *class* Ansys.Mechanical.Table.ColumnarDataSourceBase

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

T:Ansys.Mechanical.Table.ColumnarDataSourceBase is a class that provides foundational behavior for
import settings that consume data from columnar data sources (such as delimited or
fixed-width files).

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`Clear`](#ColumnarDataSourceBase.Clear)                 |                                                       |
| [`GetEnumerator`](#ColumnarDataSourceBase.GetEnumerator) |                                                       |
| [`RemoveAt`](#ColumnarDataSourceBase.RemoveAt)           | Removes the import definition at the specified index. |
| [`UseColumn`](#ColumnarDataSourceBase.UseColumn)         |                                                       |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`Count`](#ColumnarDataSourceBase.Count)           | Gets the number of column definitions.                                               |
| [`Format`](#ColumnarDataSourceBase.Format)         | Gets the existing corresponding format.                                              |
| [`Item`](#ColumnarDataSourceBase.Item)             | Item property.                                                                       |
| [`PathType`](#ColumnarDataSourceBase.PathType)                                              | Gets or sets the type of URI provided for Table import.                              |
| [`SkipFooter`](#ColumnarDataSourceBase.SkipFooter) | Gets or sets the number of rows to ignore at the end of the file during import.      |
| [`SkipRows`](#ColumnarDataSourceBase.SkipRows)     | Gets or sets the number of rows to skip over at the start of the file during import. |

<a id="property-detail"></a>

## Property detail

<a id="ColumnarDataSourceBase.Count"></a>

### *property* ColumnarDataSourceBase.Count *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

<a id="ColumnarDataSourceBase.Format"></a>

### *property* ColumnarDataSourceBase.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat](../DataModel/MechanicalEnums/Table/ImportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

<a id="ColumnarDataSourceBase.Item"></a>

### *property* ColumnarDataSourceBase.Item *: [Ansys.Mechanical.Table.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Table.ColumnarDataImportDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="ColumnarDataSourceBase.PathType"></a>

### *property* ColumnarDataSourceBase.PathType *: [Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType](../DataModel/MechanicalEnums/Common/PathType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the type of URI provided for Table import.
Default: F:Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType.Absolute

<!-- !! processed by numpydoc !! -->

<a id="ColumnarDataSourceBase.SkipFooter"></a>

### *property* ColumnarDataSourceBase.SkipFooter *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to ignore at the end of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="ColumnarDataSourceBase.SkipRows"></a>

### *property* ColumnarDataSourceBase.SkipRows *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to skip over at the start of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ColumnarDataSourceBase.Clear"></a>

### ColumnarDataSourceBase.Clear() → [None](https://docs.python.org/3/library/constants.html#None)

<a id="ColumnarDataSourceBase.GetEnumerator"></a>

### ColumnarDataSourceBase.GetEnumerator() → Iterator[[Ansys.Mechanical.Table.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Table.ColumnarDataImportDefinition)]

<a id="ColumnarDataSourceBase.RemoveAt"></a>

### ColumnarDataSourceBase.RemoveAt(index: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the import definition at the specified index.

<!-- !! processed by numpydoc !! -->

<a id="ColumnarDataSourceBase.UseColumn"></a>

### ColumnarDataSourceBase.UseColumn(index: [int](https://docs.python.org/3/library/functions.html#int), variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType](../DataModel/MechanicalEnums/Table/VariableType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType), variableClassification: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification](../DataModel/MechanicalEnums/Table/VariableClassification.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification), unit: [str](https://docs.python.org/3/library/stdtypes.html#str), name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.Mechanical.Table.ColumnarDataSourceBase](#ansys.mechanical.stubs.v252.Ansys.Mechanical.Table.ColumnarDataSourceBase)

<!-- !! processed by numpydoc !! -->

