# `ColumnarDataSourceBase`



#### *class* ansys.mechanical.stubs.v242.Ansys.Mechanical.Table.ColumnarDataSourceBase

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------|-------------------------------------------------------|
| [`Clear`](#ColumnarDataSourceBase.Clear)                 |                                                       |
| [`GetEnumerator`](#ColumnarDataSourceBase.GetEnumerator) |                                                       |
| [`RemoveAt`](#ColumnarDataSourceBase.RemoveAt)           | Removes the import definition at the specified index. |
| [`UseColumn`](#ColumnarDataSourceBase.UseColumn)         |                                                       |

### Properties

| Name | Description |
|----------------------------------------------------|--------------------------------------------------------------------------------------|
| [`Count`](#ColumnarDataSourceBase.Count)           | Gets the number of column definitions.                                               |
| [`Item`](#ColumnarDataSourceBase.Item)             | Item property.                                                                       |
| [`SkipFooter`](#ColumnarDataSourceBase.SkipFooter) | Gets or sets the number of rows to ignore at the end of the file during import.      |
| [`SkipRows`](#ColumnarDataSourceBase.SkipRows)     | Gets or sets the number of rows to skip over at the start of the file during import. |
| [`Format`](#ColumnarDataSourceBase.Format)         | Gets the existing corresponding format.                                              |
| [`PathType`](#ColumnarDataSourceBase.PathType)     | Gets or sets the type of URI provided for Table import.                              |

<a id="property-detail"></a>

## Property detail

<a id="ColumnarDataSourceBase.Count"></a>

### *property* ColumnarDataSourceBase.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

<a id="ColumnarDataSourceBase.Item"></a>

### *property* ColumnarDataSourceBase.Item *: [Ansys.Mechanical.Table.ColumnarDataImportDefinition](../../../../v241/Ansys/Mechanical/Table/ColumnarDataImportDefinition.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Table.ColumnarDataImportDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="ColumnarDataSourceBase.SkipFooter"></a>

### *property* ColumnarDataSourceBase.SkipFooter *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to ignore at the end of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="ColumnarDataSourceBase.SkipRows"></a>

### *property* ColumnarDataSourceBase.SkipRows *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to skip over at the start of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="ColumnarDataSourceBase.Format"></a>

### *property* ColumnarDataSourceBase.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat](../../../../v241/Ansys/Mechanical/DataModel/MechanicalEnums/Table/ImportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

<a id="ColumnarDataSourceBase.PathType"></a>

### *property* ColumnarDataSourceBase.PathType *: [Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType](../../../../v241/Ansys/Mechanical/DataModel/MechanicalEnums/Common/PathType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the type of URI provided for Table import.
Default:

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ColumnarDataSourceBase.Clear"></a>

### ColumnarDataSourceBase.Clear()

<a id="ColumnarDataSourceBase.GetEnumerator"></a>

### ColumnarDataSourceBase.GetEnumerator()

<a id="ColumnarDataSourceBase.RemoveAt"></a>

### ColumnarDataSourceBase.RemoveAt(index: System.Int32)

Removes the import definition at the specified index.

<!-- !! processed by numpydoc !! -->

<a id="ColumnarDataSourceBase.UseColumn"></a>

### ColumnarDataSourceBase.UseColumn(index: System.Int32, variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType](../../../../v241/Ansys/Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType), variableClassification: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification](../../../../v241/Ansys/Mechanical/DataModel/MechanicalEnums/Table/VariableClassification.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification), unit: System.String, name: System.String)

<!-- !! processed by numpydoc !! -->

