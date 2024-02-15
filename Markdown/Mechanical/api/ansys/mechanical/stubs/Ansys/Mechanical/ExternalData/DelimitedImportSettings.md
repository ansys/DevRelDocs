# DelimitedImportSettings

### *class* DelimitedImportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Clear`](../Table/DelimitedImportSettings.md#DelimitedImportSettings.Clear)                 |                                                       |
|----------------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`GetEnumerator`](../Table/DelimitedImportSettings.md#DelimitedImportSettings.GetEnumerator) |                                                       |
| [`RemoveAt`](../Table/DelimitedImportSettings.md#DelimitedImportSettings.RemoveAt)           | Removes the import definition at the specified index. |
| [`UseColumn`](../Table/DelimitedImportSettings.md#DelimitedImportSettings.UseColumn)         |                                                       |

### Properties

| [`Delimiter`](../Table/DelimitedImportSettings.md#DelimitedImportSettings.Delimiter)            | The delimiter used to separate columns.                                              |
|-------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`AverageCornerNodesToMidsideNodes`](#DelimitedImportSettings.AverageCornerNodesToMidsideNodes) |                                                                                      |
| [`Count`](../Table/DelimitedImportSettings.md#DelimitedImportSettings.Count)                    | Gets the number of column definitions.                                               |
| [`Item`](../Table/DelimitedImportSettings.md#DelimitedImportSettings.Item)                      | Item property.                                                                       |
| [`SkipFooter`](../Table/DelimitedImportSettings.md#DelimitedImportSettings.SkipFooter)          | Gets or sets the number of rows to ignore at the end of the file during import.      |
| [`SkipRows`](../Table/DelimitedImportSettings.md#DelimitedImportSettings.SkipRows)              | Gets or sets the number of rows to skip over at the start of the file during import. |
| [`Format`](../DataModel/Enums/GeometryImportPreference/Format.md#Format)                        | Gets the existing corresponding format.                                              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.ExternalData import DelimitedImportSettings
```

## Property detail

### *property* DelimitedImportSettings.Delimiter *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The delimiter used to separate columns.

<!-- !! processed by numpydoc !! -->

### *property* DelimitedImportSettings.AverageCornerNodesToMidsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

<!-- !! processed by numpydoc !! -->

### *property* DelimitedImportSettings.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

### *property* DelimitedImportSettings.Item *: [Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ColumnarDataImportDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

### *property* DelimitedImportSettings.SkipFooter *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to ignore at the end of the file during import.

<!-- !! processed by numpydoc !! -->

### *property* DelimitedImportSettings.SkipRows *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to skip over at the start of the file during import.

<!-- !! processed by numpydoc !! -->

### *property* DelimitedImportSettings.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat](../DataModel/MechanicalEnums/ExternalData/ImportFormat.md#ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

## Method detail

### DelimitedImportSettings.Clear()

### DelimitedImportSettings.GetEnumerator()

### DelimitedImportSettings.RemoveAt(index: System.Int32)

Removes the import definition at the specified index.

<!-- !! processed by numpydoc !! -->

### DelimitedImportSettings.UseColumn(index: System.Int32, variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.VariableType](../DataModel/MechanicalEnums/ExternalData/VariableType.md#VariableType), unit: System.String, name: System.String)

<!-- !! processed by numpydoc !! -->
