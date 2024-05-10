# DelimitedImportSettings

<a id="DelimitedImportSettings"></a>

### *class* DelimitedImportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------|-------------------------------------------------------|
| [`Clear`](#DelimitedImportSettings.Clear)                 |                                                       |
| [`GetEnumerator`](#DelimitedImportSettings.GetEnumerator) |                                                       |
| [`RemoveAt`](#DelimitedImportSettings.RemoveAt)           | Removes the import definition at the specified index. |
| [`UseColumn`](#DelimitedImportSettings.UseColumn)         |                                                       |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`Delimiter`](#DelimitedImportSettings.Delimiter)                        | The delimiter used to separate columns.                                              |
| [`Count`](#DelimitedImportSettings.Count)                                | Gets the number of column definitions.                                               |
| [`Item`](#DelimitedImportSettings.Item)                                  | Item property.                                                                       |
| [`SkipFooter`](#DelimitedImportSettings.SkipFooter)                      | Gets or sets the number of rows to ignore at the end of the file during import.      |
| [`SkipRows`](#DelimitedImportSettings.SkipRows)                          | Gets or sets the number of rows to skip over at the start of the file during import. |
| [`Format`](./../DataModel/Enums/GeometryImportPreference/Format.md#Format) | Gets the existing corresponding format.                                              |
| [`PathType`](./../DataModel/MechanicalEnums/Common/PathType.md#PathType)   | Gets or sets the type of URI provided for Table import.                              |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Table import DelimitedImportSettings
```

<a id="property-detail"></a>

## Property detail

<a id="DelimitedImportSettings.Delimiter"></a>

### *property* DelimitedImportSettings.Delimiter *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The delimiter used to separate columns.

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.Count"></a>

### *property* DelimitedImportSettings.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.Item"></a>

### *property* DelimitedImportSettings.Item *: [Ansys.Mechanical.Table.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ColumnarDataImportDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.SkipFooter"></a>

### *property* DelimitedImportSettings.SkipFooter *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to ignore at the end of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.SkipRows"></a>

### *property* DelimitedImportSettings.SkipRows *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to skip over at the start of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.Format"></a>

### *property* DelimitedImportSettings.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat](./../DataModel/MechanicalEnums/Table/ImportFormat.md#ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.PathType"></a>

### *property* DelimitedImportSettings.PathType *: [Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType](./../DataModel/MechanicalEnums/Common/PathType.md#PathType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the type of URI provided for Table import.
Default:

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DelimitedImportSettings.Clear"></a>

### DelimitedImportSettings.Clear()

<a id="DelimitedImportSettings.GetEnumerator"></a>

### DelimitedImportSettings.GetEnumerator()

<a id="DelimitedImportSettings.RemoveAt"></a>

### DelimitedImportSettings.RemoveAt(index: System.Int32)

Removes the import definition at the specified index.

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.UseColumn"></a>

### DelimitedImportSettings.UseColumn(index: System.Int32, variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType](./../DataModel/MechanicalEnums/Table/VariableType.md#VariableType), variableClassification: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification](./../DataModel/MechanicalEnums/Table/VariableClassification.md#VariableClassification), unit: System.String, name: System.String)

<!-- !! processed by numpydoc !! -->
