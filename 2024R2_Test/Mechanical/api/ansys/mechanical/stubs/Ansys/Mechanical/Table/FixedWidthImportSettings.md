<a id="fixedwidthimportsettings"></a>

# FixedWidthImportSettings

<a id="FixedWidthImportSettings"></a>

### *class* FixedWidthImportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|------------------------------------------------------------|-------------------------------------------------------|
| [`Clear`](#FixedWidthImportSettings.Clear)                 |                                                       |
| [`GetEnumerator`](#FixedWidthImportSettings.GetEnumerator) |                                                       |
| [`RemoveAt`](#FixedWidthImportSettings.RemoveAt)           | Removes the import definition at the specified index. |
| [`UseColumn`](#FixedWidthImportSettings.UseColumn)         |                                                       |

### Properties

| Name | Summary |
|--------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`ColumnWidths`](#FixedWidthImportSettings.ColumnWidths)                 | Gets or sets the specified column widths.                                            |
| [`Count`](#FixedWidthImportSettings.Count)                               | Gets the number of column definitions.                                               |
| [`Item`](#FixedWidthImportSettings.Item)                                 | Item property.                                                                       |
| [`SkipFooter`](#FixedWidthImportSettings.SkipFooter)                     | Gets or sets the number of rows to ignore at the end of the file during import.      |
| [`SkipRows`](#FixedWidthImportSettings.SkipRows)                         | Gets or sets the number of rows to skip over at the start of the file during import. |
| [`Format`](../DataModel/Enums/GeometryImportPreference/Format.md#Format) | Gets the existing corresponding format.                                              |
| [`PathType`](../DataModel/MechanicalEnums/Common/PathType.md#PathType)   | Gets or sets the type of URI provided for Table import.                              |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Table import FixedWidthImportSettings
```

<a id="property-detail"></a>

## Property detail

<a id="FixedWidthImportSettings.ColumnWidths"></a>

### *property* FixedWidthImportSettings.ColumnWidths *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the specified column widths.
When setting, The value provided to

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.Count"></a>

### *property* FixedWidthImportSettings.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.Item"></a>

### *property* FixedWidthImportSettings.Item *: [Ansys.Mechanical.Table.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ColumnarDataImportDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* FixedWidthImportSettings.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat](../DataModel/MechanicalEnums/Table/ImportFormat.md#ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.PathType"></a>

### *property* FixedWidthImportSettings.PathType *: [Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType](../DataModel/MechanicalEnums/Common/PathType.md#PathType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the type of URI provided for Table import.
Default:

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

### FixedWidthImportSettings.UseColumn(index: System.Int32, variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType](../DataModel/MechanicalEnums/Table/VariableType.md#VariableType), variableClassification: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification](../DataModel/MechanicalEnums/Table/VariableClassification.md#VariableClassification), unit: System.String, name: System.String)

<!-- !! processed by numpydoc !! -->
