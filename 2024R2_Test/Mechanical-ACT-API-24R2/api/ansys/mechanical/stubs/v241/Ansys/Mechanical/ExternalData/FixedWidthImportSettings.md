# `FixedWidthImportSettings`



#### *class* ansys.mechanical.stubs.v241.Ansys.Mechanical.ExternalData.FixedWidthImportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

T:Ansys.Mechanical.ExternalData.FixedWidthImportSettings defines how to import external data from a fixed-width source file.

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
|------------------------------------|--------------------------------------------------------------------------------------|
| `ColumnWidths`                     |                                                                                      |
| `AverageCornerNodesToMidsideNodes` |                                                                                      |
| `Count`                            | Gets the number of column definitions.                                               |
| `Item`                             | Item property.                                                                       |
| `SkipFooter`                       | Gets or sets the number of rows to ignore at the end of the file during import.      |
| `SkipRows`                         | Gets or sets the number of rows to skip over at the start of the file during import. |
| `Format`                           | Gets the existing corresponding format.                                              |

<a id="property-detail"></a>

## Property detail

### *property* FixedWidthImportSettings.ColumnWidths *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

<!-- !! processed by numpydoc !! -->

### *property* FixedWidthImportSettings.AverageCornerNodesToMidsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

<!-- !! processed by numpydoc !! -->

### *property* FixedWidthImportSettings.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

### *property* FixedWidthImportSettings.Item *: [Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

### *property* FixedWidthImportSettings.SkipFooter *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to ignore at the end of the file during import.

<!-- !! processed by numpydoc !! -->

### *property* FixedWidthImportSettings.SkipRows *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to skip over at the start of the file during import.

<!-- !! processed by numpydoc !! -->

### *property* FixedWidthImportSettings.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat](../DataModel/MechanicalEnums/ExternalData/ImportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### FixedWidthImportSettings.Clear()

### FixedWidthImportSettings.GetEnumerator()

### FixedWidthImportSettings.RemoveAt(index: System.Int32)

Removes the import definition at the specified index.

<!-- !! processed by numpydoc !! -->

### FixedWidthImportSettings.UseColumn(index: System.Int32, variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.VariableType](../DataModel/MechanicalEnums/ExternalData/VariableType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.VariableType), unit: System.String, name: System.String)

<!-- !! processed by numpydoc !! -->

