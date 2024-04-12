<a id="columnardatasourcebase"></a>

# ColumnarDataSourceBase

<a id="ColumnarDataSourceBase"></a>

### *class* ColumnarDataSourceBase

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`Clear`](../Table/ColumnarDataSourceBase.md#ColumnarDataSourceBase.Clear)                 |                                                       |
|--------------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`GetEnumerator`](../Table/ColumnarDataSourceBase.md#ColumnarDataSourceBase.GetEnumerator) |                                                       |
| [`RemoveAt`](../Table/ColumnarDataSourceBase.md#ColumnarDataSourceBase.RemoveAt)           | Removes the import definition at the specified index. |
| [`UseColumn`](../Table/ColumnarDataSourceBase.md#ColumnarDataSourceBase.UseColumn)         |                                                       |

### Properties

| [`Count`](../Table/ColumnarDataSourceBase.md#ColumnarDataSourceBase.Count)           | Gets the number of column definitions.                                               |
|--------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`Item`](../Table/ColumnarDataSourceBase.md#ColumnarDataSourceBase.Item)             | Item property.                                                                       |
| [`SkipFooter`](../Table/ColumnarDataSourceBase.md#ColumnarDataSourceBase.SkipFooter) | Gets or sets the number of rows to ignore at the end of the file during import.      |
| [`SkipRows`](../Table/ColumnarDataSourceBase.md#ColumnarDataSourceBase.SkipRows)     | Gets or sets the number of rows to skip over at the start of the file during import. |
| [`Format`](../DataModel/Enums/GeometryImportPreference/Format.md#Format)             | Gets the existing corresponding format.                                              |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.ExternalData import ColumnarDataSourceBase
```

<a id="property-detail"></a>

## Property detail

<a id="ColumnarDataSourceBase.Count"></a>

### *property* ColumnarDataSourceBase.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

<a id="ColumnarDataSourceBase.Item"></a>

### *property* ColumnarDataSourceBase.Item *: [Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ColumnarDataImportDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ColumnarDataSourceBase.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat](../DataModel/MechanicalEnums/ExternalData/ImportFormat.md#ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

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

### ColumnarDataSourceBase.UseColumn(index: System.Int32, variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.VariableType](../DataModel/MechanicalEnums/ExternalData/VariableType.md#VariableType), unit: System.String, name: System.String)

<!-- !! processed by numpydoc !! -->
