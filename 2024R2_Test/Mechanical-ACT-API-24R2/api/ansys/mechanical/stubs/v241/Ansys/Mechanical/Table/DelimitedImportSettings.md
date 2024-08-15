# `DelimitedImportSettings`



#### *class* ansys.mechanical.stubs.v241.Ansys.Mechanical.Table.DelimitedImportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

T:Ansys.Mechanical.Table.DelimitedImportSettings defines how to import data from a delimited source
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
|---------------|--------------------------------------------------------------------------------------|
| `Delimiter`   | The delimiter used to separate columns.                                              |
| `Count`       | Gets the number of column definitions.                                               |
| `Item`        | Item property.                                                                       |
| `SkipFooter`  | Gets or sets the number of rows to ignore at the end of the file during import.      |
| `SkipRows`    | Gets or sets the number of rows to skip over at the start of the file during import. |
| `Format`      | Gets the existing corresponding format.                                              |
| `PathType`    | Gets or sets the type of URI provided for Table import.                              |

<a id="property-detail"></a>

## Property detail

### *property* DelimitedImportSettings.Delimiter *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The delimiter used to separate columns.

<!-- !! processed by numpydoc !! -->

### *property* DelimitedImportSettings.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

### *property* DelimitedImportSettings.Item *: [Ansys.Mechanical.Table.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Table.ColumnarDataImportDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

### *property* DelimitedImportSettings.SkipFooter *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to ignore at the end of the file during import.

<!-- !! processed by numpydoc !! -->

### *property* DelimitedImportSettings.SkipRows *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to skip over at the start of the file during import.

<!-- !! processed by numpydoc !! -->

### *property* DelimitedImportSettings.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat](../DataModel/MechanicalEnums/Table/ImportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

### *property* DelimitedImportSettings.PathType *: [Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType](../DataModel/MechanicalEnums/Common/PathType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the type of URI provided for Table import.
Default: F:Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType.Absolute

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### DelimitedImportSettings.Clear()

### DelimitedImportSettings.GetEnumerator()

### DelimitedImportSettings.RemoveAt(index: System.Int32)

Removes the import definition at the specified index.

<!-- !! processed by numpydoc !! -->

### DelimitedImportSettings.UseColumn(index: System.Int32, variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType](../DataModel/MechanicalEnums/Table/VariableType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType), variableClassification: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification](../DataModel/MechanicalEnums/Table/VariableClassification.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification), unit: System.String, name: System.String)

<!-- !! processed by numpydoc !! -->

