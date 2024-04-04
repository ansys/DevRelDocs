# ColumnarDataSourceBase

### *class* ColumnarDataSourceBase

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Clear`](#ColumnarDataSourceBase.Clear)                 |                                                       |
|----------------------------------------------------------|-------------------------------------------------------|
| [`GetEnumerator`](#ColumnarDataSourceBase.GetEnumerator) |                                                       |
| [`RemoveAt`](#ColumnarDataSourceBase.RemoveAt)           | Removes the import definition at the specified index. |
| [`UseColumn`](#ColumnarDataSourceBase.UseColumn)         |                                                       |

### Properties

| [`Count`](#ColumnarDataSourceBase.Count)                                 | Gets the number of column definitions.                                               |
|--------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`Item`](#ColumnarDataSourceBase.Item)                                   | Item property.                                                                       |
| [`SkipFooter`](#ColumnarDataSourceBase.SkipFooter)                       | Gets or sets the number of rows to ignore at the end of the file during import.      |
| [`SkipRows`](#ColumnarDataSourceBase.SkipRows)                           | Gets or sets the number of rows to skip over at the start of the file during import. |
| [`Format`](../DataModel/Enums/GeometryImportPreference/Format.md#Format) | Gets the existing corresponding format.                                              |
| [`PathType`](../DataModel/MechanicalEnums/Common/PathType.md#PathType)   | Gets or sets the type of URI provided for Table import.                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Table import ColumnarDataSourceBase
```

## Property detail

### *property* ColumnarDataSourceBase.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

### *property* ColumnarDataSourceBase.Item *: [Ansys.Mechanical.Table.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ColumnarDataImportDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

### *property* ColumnarDataSourceBase.SkipFooter *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to ignore at the end of the file during import.

<!-- !! processed by numpydoc !! -->

### *property* ColumnarDataSourceBase.SkipRows *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to skip over at the start of the file during import.

<!-- !! processed by numpydoc !! -->

### *property* ColumnarDataSourceBase.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat](../DataModel/MechanicalEnums/Table/ImportFormat.md#ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

### *property* ColumnarDataSourceBase.PathType *: [Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType](../DataModel/MechanicalEnums/Common/PathType.md#PathType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the type of URI provided for Table import.
Default:

<!-- !! processed by numpydoc !! -->

## Method detail

### ColumnarDataSourceBase.Clear()

### ColumnarDataSourceBase.GetEnumerator()

### ColumnarDataSourceBase.RemoveAt(index: System.Int32)

Removes the import definition at the specified index.

<!-- !! processed by numpydoc !! -->

### ColumnarDataSourceBase.UseColumn(index: System.Int32, variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType](../DataModel/MechanicalEnums/Table/VariableType.md#VariableType), variableClassification: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification](../DataModel/MechanicalEnums/Table/VariableClassification.md#VariableClassification), unit: System.String, name: System.String)

<!-- !! processed by numpydoc !! -->
