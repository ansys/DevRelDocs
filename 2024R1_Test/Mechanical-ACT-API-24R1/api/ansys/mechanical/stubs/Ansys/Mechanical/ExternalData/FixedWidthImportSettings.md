# FixedWidthImportSettings

<a id="FixedWidthImportSettings"></a>

### *class* FixedWidthImportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`Clear`](./../Table/FixedWidthImportSettings.md#FixedWidthImportSettings.Clear)                 |                                                       |
| [`GetEnumerator`](./../Table/FixedWidthImportSettings.md#FixedWidthImportSettings.GetEnumerator) |                                                       |
| [`RemoveAt`](./../Table/FixedWidthImportSettings.md#FixedWidthImportSettings.RemoveAt)           | Removes the import definition at the specified index. |
| [`UseColumn`](./../Table/FixedWidthImportSettings.md#FixedWidthImportSettings.UseColumn)         |                                                       |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`ColumnWidths`](./../Table/FixedWidthImportSettings.md#FixedWidthImportSettings.ColumnWidths)     |                                                                                      |
| [`AverageCornerNodesToMidsideNodes`](#FixedWidthImportSettings.AverageCornerNodesToMidsideNodes) |                                                                                      |
| [`Count`](./../Table/FixedWidthImportSettings.md#FixedWidthImportSettings.Count)                   | Gets the number of column definitions.                                               |
| [`Item`](./../Table/FixedWidthImportSettings.md#FixedWidthImportSettings.Item)                     | Item property.                                                                       |
| [`SkipFooter`](./../Table/FixedWidthImportSettings.md#FixedWidthImportSettings.SkipFooter)         | Gets or sets the number of rows to ignore at the end of the file during import.      |
| [`SkipRows`](./../Table/FixedWidthImportSettings.md#FixedWidthImportSettings.SkipRows)             | Gets or sets the number of rows to skip over at the start of the file during import. |
| [`Format`](./../DataModel/Enums/GeometryImportPreference/Format.md#Format)                         | Gets the existing corresponding format.                                              |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.ExternalData import FixedWidthImportSettings
```

<a id="property-detail"></a>

## Property detail

<a id="FixedWidthImportSettings.ColumnWidths"></a>

### *property* FixedWidthImportSettings.ColumnWidths *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.AverageCornerNodesToMidsideNodes"></a>

### *property* FixedWidthImportSettings.AverageCornerNodesToMidsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.Count"></a>

### *property* FixedWidthImportSettings.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.Item"></a>

### *property* FixedWidthImportSettings.Item *: [Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ColumnarDataImportDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.SkipFooter"></a>

### *property* FixedWidthImportSettings.SkipFooter *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to ignore at the end of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.SkipRows"></a>

### *property* FixedWidthImportSettings.SkipRows *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to skip over at the start of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.Format"></a>

### *property* FixedWidthImportSettings.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat](./../DataModel/MechanicalEnums/ExternalData/ImportFormat.md#ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FixedWidthImportSettings.Clear"></a>

### FixedWidthImportSettings.Clear()

<a id="FixedWidthImportSettings.GetEnumerator"></a>

### FixedWidthImportSettings.GetEnumerator()

<a id="FixedWidthImportSettings.RemoveAt"></a>

### FixedWidthImportSettings.RemoveAt(index: System.Int32)

Removes the import definition at the specified index.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.UseColumn"></a>

### FixedWidthImportSettings.UseColumn(index: System.Int32, variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.VariableType](./../DataModel/MechanicalEnums/ExternalData/VariableType.md#VariableType), unit: System.String, name: System.String)

<!-- !! processed by numpydoc !! -->
