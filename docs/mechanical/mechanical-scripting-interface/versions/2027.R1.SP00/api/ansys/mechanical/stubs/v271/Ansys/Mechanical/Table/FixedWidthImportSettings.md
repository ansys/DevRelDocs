# `FixedWidthImportSettings`

<a id="ansys.mechanical.stubs.v271.Ansys.Mechanical.Table.FixedWidthImportSettings"></a>

#### *class* Ansys.Mechanical.Table.FixedWidthImportSettings

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

> defines how to import data from a delimited source

for tabular data.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Constructors

| Name | Description |
|----------------------------------------------------------------------------------------------|-----------------------------------------|
| [`GenerateFromComImportSettings`](#FixedWidthImportSettings.GenerateFromComImportSettings)   | GenerateFromComImportSettings method.   |
| [`SaveToComImportSettings`](#FixedWidthImportSettings.SaveToComImportSettings)               | SaveToComImportSettings method.         |

### Methods

| Name | Description |
|------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [`Clear`](#FixedWidthImportSettings.Clear)                 |                                                                                        |
| [`GetEnumerator`](#FixedWidthImportSettings.GetEnumerator) |                                                                                        |
| [`RemoveAt`](#FixedWidthImportSettings.RemoveAt)           | Removes the import definition at the specified index.                                  |
| [`UseColumn`](#FixedWidthImportSettings.UseColumn)         | Add a column to be imported from the specified data source column index and configured |

### Properties

| Name | Description |
|------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`ColumnWidths`](#FixedWidthImportSettings.ColumnWidths)   | Gets or sets the specified column widths.                                            |
| [`Count`](#FixedWidthImportSettings.Count)                 | Gets the number of column definitions.                                               |
| [`Format`](#FixedWidthImportSettings.Format)               | Gets the existing corresponding format.                                              |
| [`Item`](#FixedWidthImportSettings.Item)                   | Item property.                                                                       |
| [`PathType`](#FixedWidthImportSettings.PathType)           | Gets or sets the type of URI provided for Table import.                              |
| [`SkipFooter`](#FixedWidthImportSettings.SkipFooter)       | Gets or sets the number of rows to ignore at the end of the file during import.      |
| [`SkipRows`](#FixedWidthImportSettings.SkipRows)           | Gets or sets the number of rows to skip over at the start of the file during import. |

<a id="property-detail"></a>

## Property detail

<a id="FixedWidthImportSettings.ColumnWidths"></a>

### *property* FixedWidthImportSettings.ColumnWidths *: Any | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the specified column widths.
When setting, The value provided to  may be either:

A string using Fortran-esque fixed-format specifications. This is similar to the
“User-Defined” format specifier for External Data as described in the product
documentation. Note, however, that regardless of the format specifier all imported
columns WILL be interpreted using the .NET command double.TryParse() to support
the requirements of the underlying variable data for Table.

An  containing the widths of each column. Negative
values may be specified to define a negated width, meaning '-2' would be equivalent
to the fixed-width string specification '2X'.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.Count"></a>

### *property* FixedWidthImportSettings.Count *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.Format"></a>

### *property* FixedWidthImportSettings.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat](../DataModel/MechanicalEnums/Table/ImportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.Item"></a>

### *property* FixedWidthImportSettings.Item *: [Ansys.Mechanical.Table.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Table.ColumnarDataImportDefinition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.PathType"></a>

### *property* FixedWidthImportSettings.PathType *: [Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType](../DataModel/MechanicalEnums/Common/PathType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of URI provided for Table import.
Default:

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.SkipFooter"></a>

### *property* FixedWidthImportSettings.SkipFooter *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of rows to ignore at the end of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.SkipRows"></a>

### *property* FixedWidthImportSettings.SkipRows *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of rows to skip over at the start of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FixedWidthImportSettings.Clear"></a>

### FixedWidthImportSettings.Clear() → [None](https://docs.python.org/3/builtins/constants.html#None)

<a id="FixedWidthImportSettings.GenerateFromComImportSettings"></a>

### *classmethod* FixedWidthImportSettings.GenerateFromComImportSettings(importSettings: Ansys.Common.Interop.DSObjects.IDSTableImportSettingsFixedWidth) → [Ansys.Mechanical.Table.ImportSettingsBase](ImportSettingsBase.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Table.ImportSettingsBase)

GenerateFromComImportSettings method.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.GetEnumerator"></a>

### FixedWidthImportSettings.GetEnumerator() → Iterator[[Ansys.Mechanical.Table.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Table.ColumnarDataImportDefinition)]

<a id="FixedWidthImportSettings.RemoveAt"></a>

### FixedWidthImportSettings.RemoveAt(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the import definition at the specified index.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.SaveToComImportSettings"></a>

### *classmethod* FixedWidthImportSettings.SaveToComImportSettings(importSettings: [Ansys.Mechanical.Table.FixedWidthImportSettings](#ansys.mechanical.stubs.v271.Ansys.Mechanical.Table.FixedWidthImportSettings)) → Ansys.Common.Interop.DSObjects.IDSTableImportSettingsBase

SaveToComImportSettings method.

<!-- !! processed by numpydoc !! -->

<a id="FixedWidthImportSettings.UseColumn"></a>

### FixedWidthImportSettings.UseColumn(index: [int](https://docs.python.org/3/builtins/functions.html#int), variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType](../DataModel/MechanicalEnums/Table/VariableType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType), variableClassification: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification](../DataModel/MechanicalEnums/Table/VariableClassification.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification), unit: [str](https://docs.python.org/3/builtins/stdtypes.html#str), name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.Mechanical.Table.ColumnarDataSourceBase](ColumnarDataSourceBase.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Table.ColumnarDataSourceBase)

```text
Add a column to be imported from the specified data source column index and configured
as the specified variable type. The order in which columns are added determines their
order in the data imported to .

If unit is `null`, the default unit (in the active unit system) for the specified
variable type will be assumed during import.

If name is `null` or empty, a unique name will be generated from the specified
variableType during import.

A reference to the instance is returned so that invocations can be chained together.
```

<!-- !! processed by numpydoc !! -->

