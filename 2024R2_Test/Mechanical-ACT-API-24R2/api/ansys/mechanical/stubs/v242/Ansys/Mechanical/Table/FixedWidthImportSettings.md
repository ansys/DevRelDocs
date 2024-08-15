# `FixedWidthImportSettings`



#### *class* ansys.mechanical.stubs.v242.Ansys.Mechanical.Table.FixedWidthImportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

T:Ansys.Mechanical.Table.FixedWidthImportSettings defines how to import data from a delimited source
for tabular data.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------|-------------------------------------------------------|
| `Clear`         |                                                       |
| `GetEnumerator` |                                                       |
| `RemoveAt`      | Removes the import definition at the specified index. |
| `UseColumn`     |                                                       |

### Properties

| Name | Description |
|------------------|--------------------------------------------------------------------------------------|
| `ColumnWidths`   | Gets or sets the specified column widths.                                            |
| `Count`          | Gets the number of column definitions.                                               |
| `Item`           | Item property.                                                                       |
| `SkipFooter`     | Gets or sets the number of rows to ignore at the end of the file during import.      |
| `SkipRows`       | Gets or sets the number of rows to skip over at the start of the file during import. |
| `Format`         | Gets the existing corresponding format.                                              |
| `PathType`       | Gets or sets the type of URI provided for Table import.                              |

<a id="property-detail"></a>

## Property detail

### *property* FixedWidthImportSettings.ColumnWidths *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the specified column widths.
When setting, The value provided to P:Ansys.Mechanical.Table.FixedWidthImportSettings.ColumnWidths may be either:
number

<!-- !! processed by numpydoc !! -->

### *property* FixedWidthImportSettings.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

### *property* FixedWidthImportSettings.Item *: [Ansys.Mechanical.Table.ColumnarDataImportDefinition](../../../../v241/Ansys/Mechanical/Table/ColumnarDataImportDefinition.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Table.ColumnarDataImportDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

### *property* FixedWidthImportSettings.SkipFooter *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to ignore at the end of the file during import.

<!-- !! processed by numpydoc !! -->

### *property* FixedWidthImportSettings.SkipRows *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to skip over at the start of the file during import.

<!-- !! processed by numpydoc !! -->

### *property* FixedWidthImportSettings.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat](../../../../v241/Ansys/Mechanical/DataModel/MechanicalEnums/Table/ImportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

### *property* FixedWidthImportSettings.PathType *: [Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType](../../../../v241/Ansys/Mechanical/DataModel/MechanicalEnums/Common/PathType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the type of URI provided for Table import.
Default: F:Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType.Absolute

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### FixedWidthImportSettings.Clear()

### FixedWidthImportSettings.GetEnumerator()

### FixedWidthImportSettings.RemoveAt(index: System.Int32)

Removes the import definition at the specified index.

<!-- !! processed by numpydoc !! -->

### FixedWidthImportSettings.UseColumn(index: System.Int32, variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType](../../../../v241/Ansys/Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType), variableClassification: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification](../../../../v241/Ansys/Mechanical/DataModel/MechanicalEnums/Table/VariableClassification.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification), unit: System.String, name: System.String)

<!-- !! processed by numpydoc !! -->

