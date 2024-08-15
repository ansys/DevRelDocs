# `DelimitedImportSettings`



#### *class* ansys.mechanical.stubs.v242.Ansys.Mechanical.ExternalData.DelimitedImportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

T:Ansys.Mechanical.ExternalData.DelimitedImportSettings defines how to import external data from a delimited source file.

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
| `Delimiter`                        | The delimiter used to separate columns.                                              |
| `AverageCornerNodesToMidsideNodes` |                                                                                      |
| `Count`                            | Gets the number of column definitions.                                               |
| `Item`                             | Item property.                                                                       |
| `SkipFooter`                       | Gets or sets the number of rows to ignore at the end of the file during import.      |
| `SkipRows`                         | Gets or sets the number of rows to skip over at the start of the file during import. |
| `Format`                           | Gets the existing corresponding format.                                              |

<a id="property-detail"></a>

## Property detail

### *property* DelimitedImportSettings.Delimiter *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The delimiter used to separate columns.

<!-- !! processed by numpydoc !! -->

### *property* DelimitedImportSettings.AverageCornerNodesToMidsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

<!-- !! processed by numpydoc !! -->

### *property* DelimitedImportSettings.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

### *property* DelimitedImportSettings.Item *: [Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition](../../../../v241/Ansys/Mechanical/ExternalData/ColumnarDataImportDefinition.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

### *property* DelimitedImportSettings.SkipFooter *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to ignore at the end of the file during import.

<!-- !! processed by numpydoc !! -->

### *property* DelimitedImportSettings.SkipRows *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to skip over at the start of the file during import.

<!-- !! processed by numpydoc !! -->

### *property* DelimitedImportSettings.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat](../../../../v241/Ansys/Mechanical/DataModel/MechanicalEnums/ExternalData/ImportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### DelimitedImportSettings.Clear()

### DelimitedImportSettings.GetEnumerator()

### DelimitedImportSettings.RemoveAt(index: System.Int32)

Removes the import definition at the specified index.

<!-- !! processed by numpydoc !! -->

### DelimitedImportSettings.UseColumn(index: System.Int32, variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.VariableType](../../../../v241/Ansys/Mechanical/DataModel/MechanicalEnums/ExternalData/VariableType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.VariableType), unit: System.String, name: System.String)

<!-- !! processed by numpydoc !! -->

