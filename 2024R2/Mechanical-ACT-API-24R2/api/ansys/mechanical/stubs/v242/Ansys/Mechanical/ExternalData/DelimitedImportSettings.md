# `DelimitedImportSettings`

<a id="ansys.mechanical.stubs.v242.Ansys.Mechanical.ExternalData.DelimitedImportSettings"></a>

#### *class* Ansys.Mechanical.ExternalData.DelimitedImportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

T:Ansys.Mechanical.ExternalData.DelimitedImportSettings defines how to import external data from a delimited source file.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`Clear`](#DelimitedImportSettings.Clear)                 |                                                       |
| [`GetEnumerator`](#DelimitedImportSettings.GetEnumerator) |                                                       |
| [`RemoveAt`](#DelimitedImportSettings.RemoveAt)           | Removes the import definition at the specified index. |
| [`UseColumn`](#DelimitedImportSettings.UseColumn)         |                                                       |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`AverageCornerNodesToMidsideNodes`](#DelimitedImportSettings.AverageCornerNodesToMidsideNodes)   |                                                                                      |
| [`Count`](#DelimitedImportSettings.Count)                                                         | Gets the number of column definitions.                                               |
| [`Delimiter`](#DelimitedImportSettings.Delimiter)                                                 | The delimiter used to separate columns.                                              |
| [`Format`](#DelimitedImportSettings.Format)                                                       | Gets the existing corresponding format.                                              |
| [`Item`](#DelimitedImportSettings.Item)                                                           | Item property.                                                                       |
| [`SkipFooter`](#DelimitedImportSettings.SkipFooter)                                               | Gets or sets the number of rows to ignore at the end of the file during import.      |
| [`SkipRows`](#DelimitedImportSettings.SkipRows)                                                   | Gets or sets the number of rows to skip over at the start of the file during import. |

<a id="property-detail"></a>

## Property detail

<a id="DelimitedImportSettings.AverageCornerNodesToMidsideNodes"></a>

### *property* DelimitedImportSettings.AverageCornerNodesToMidsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.Count"></a>

### *property* DelimitedImportSettings.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.Delimiter"></a>

### *property* DelimitedImportSettings.Delimiter *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The delimiter used to separate columns.

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.Format"></a>

### *property* DelimitedImportSettings.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat](../DataModel/MechanicalEnums/ExternalData/ImportFormat.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.Item"></a>

### *property* DelimitedImportSettings.Item *: [Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### DelimitedImportSettings.UseColumn(index: System.Int32, variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.VariableType](../DataModel/MechanicalEnums/ExternalData/VariableType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.VariableType), unit: System.String, name: System.String)

<!-- !! processed by numpydoc !! -->

