# FixedWidthImportSettings

### *class* FixedWidthImportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Clear`](../Table/FixedWidthImportSettings.md#FixedWidthImportSettings.Clear)                 |                                                       |
|------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`GetEnumerator`](../Table/FixedWidthImportSettings.md#FixedWidthImportSettings.GetEnumerator) |                                                       |
| [`RemoveAt`](../Table/FixedWidthImportSettings.md#FixedWidthImportSettings.RemoveAt)           | Removes the import definition at the specified index. |
| [`UseColumn`](../Table/FixedWidthImportSettings.md#FixedWidthImportSettings.UseColumn)         |                                                       |

### Properties

| [`ColumnWidths`](../Table/FixedWidthImportSettings.md#FixedWidthImportSettings.ColumnWidths)     |                                                                                      |
|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`AverageCornerNodesToMidsideNodes`](#FixedWidthImportSettings.AverageCornerNodesToMidsideNodes) |                                                                                      |
| [`Count`](../Table/FixedWidthImportSettings.md#FixedWidthImportSettings.Count)                   | Gets the number of column definitions.                                               |
| [`Item`](../Table/FixedWidthImportSettings.md#FixedWidthImportSettings.Item)                     | Item property.                                                                       |
| [`SkipFooter`](../Table/FixedWidthImportSettings.md#FixedWidthImportSettings.SkipFooter)         | Gets or sets the number of rows to ignore at the end of the file during import.      |
| [`SkipRows`](../Table/FixedWidthImportSettings.md#FixedWidthImportSettings.SkipRows)             | Gets or sets the number of rows to skip over at the start of the file during import. |
| [`Format`](../DataModel/Enums/GeometryImportPreference/Format.md#Format)                         | Gets the existing corresponding format.                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.ExternalData import FixedWidthImportSettings
```

## Property detail

### *property* FixedWidthImportSettings.ColumnWidths *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

<!-- !! processed by numpydoc !! -->

### *property* FixedWidthImportSettings.AverageCornerNodesToMidsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

<!-- !! processed by numpydoc !! -->

### *property* FixedWidthImportSettings.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

### *property* FixedWidthImportSettings.Item *: [Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ColumnarDataImportDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

### *property* FixedWidthImportSettings.SkipFooter *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to ignore at the end of the file during import.

<!-- !! processed by numpydoc !! -->

### *property* FixedWidthImportSettings.SkipRows *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to skip over at the start of the file during import.

<!-- !! processed by numpydoc !! -->

### *property* FixedWidthImportSettings.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat](../DataModel/MechanicalEnums/ExternalData/ImportFormat.md#ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

## Method detail

### FixedWidthImportSettings.Clear()

### FixedWidthImportSettings.GetEnumerator()

### FixedWidthImportSettings.RemoveAt(index: System.Int32)

Removes the import definition at the specified index.

<!-- !! processed by numpydoc !! -->

### FixedWidthImportSettings.UseColumn(index: System.Int32, variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.VariableType](../DataModel/MechanicalEnums/ExternalData/VariableType.md#VariableType), unit: System.String, name: System.String)

<!-- !! processed by numpydoc !! -->
