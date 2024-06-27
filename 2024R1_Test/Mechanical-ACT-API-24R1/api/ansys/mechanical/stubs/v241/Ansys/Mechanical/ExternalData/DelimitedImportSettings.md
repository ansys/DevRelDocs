<!-- vale off -->

<a id="delimitedimportsettings"></a>

# `DelimitedImportSettings`

<a id="ansys.mechanical.stubs.v241.Ansys.Mechanical.ExternalData.DelimitedImportSettings"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.Mechanical.ExternalData.DelimitedImportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------|-------------------------------------------------------|
| [`Clear`](../Table/DelimitedImportSettings.md#DelimitedImportSettings.Clear)                 |                                                       |
| [`GetEnumerator`](../Table/DelimitedImportSettings.md#DelimitedImportSettings.GetEnumerator) |                                                       |
| [`RemoveAt`](../Table/DelimitedImportSettings.md#DelimitedImportSettings.RemoveAt)           | Removes the import definition at the specified index. |
| [`UseColumn`](../Table/DelimitedImportSettings.md#DelimitedImportSettings.UseColumn)         |                                                       |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`Delimiter`](../Table/DelimitedImportSettings.md#DelimitedImportSettings.Delimiter)            | The delimiter used to separate columns.                                              |
| [`AverageCornerNodesToMidsideNodes`](#DelimitedImportSettings.AverageCornerNodesToMidsideNodes) |                                                                                      |
| [`Count`](../Table/DelimitedImportSettings.md#DelimitedImportSettings.Count)                    | Gets the number of column definitions.                                               |
| [`Item`](../Table/DelimitedImportSettings.md#DelimitedImportSettings.Item)                      | Item property.                                                                       |
| [`SkipFooter`](../Table/DelimitedImportSettings.md#DelimitedImportSettings.SkipFooter)          | Gets or sets the number of rows to ignore at the end of the file during import.      |
| [`SkipRows`](../Table/DelimitedImportSettings.md#DelimitedImportSettings.SkipRows)              | Gets or sets the number of rows to skip over at the start of the file during import. |
| [`Format`](../Table/DelimitedImportSettings.md#DelimitedImportSettings.Format)                  | Gets the existing corresponding format.                                              |

<a id="property-detail"></a>

## Property detail

<a id="DelimitedImportSettings.Delimiter"></a>

### *property* DelimitedImportSettings.Delimiter *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The delimiter used to separate columns.

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.AverageCornerNodesToMidsideNodes"></a>

### *property* DelimitedImportSettings.AverageCornerNodesToMidsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.Count"></a>

### *property* DelimitedImportSettings.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

<a id="DelimitedImportSettings.Item"></a>

### *property* DelimitedImportSettings.Item *: [Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* DelimitedImportSettings.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat](../DataModel/MechanicalEnums/ExternalData/ImportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

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

### DelimitedImportSettings.UseColumn(index: System.Int32, variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.VariableType](../DataModel/MechanicalEnums/ExternalData/VariableType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.VariableType), unit: System.String, name: System.String)

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
