<a id="module-ansys.mechanical.stubs.Ansys.Mechanical.ExternalData"></a>

<a id="the-externaldata-package"></a>

# The `ExternalData` package

<a id="summary"></a>

## Summary

### Interfaces

| [`ICEPAKImportSettings`](ICEPAKImportSettings.md#ICEPAKImportSettings)   |    |
|--------------------------------------------------------------------------|----|

### Classes

| [`AXDTImportSettings`](AXDTImportSettings.md#AXDTImportSettings)                                        |                                                                                      |
|---------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`ColumnarDataImportDefinition`](../Table/ColumnarDataImportDefinition.md#ColumnarDataImportDefinition) | A simple class to hold the import definitions for how a column from a data source in |
| [`ColumnarDataSourceBase`](../Table/ColumnarDataSourceBase.md#ColumnarDataSourceBase)                   |                                                                                      |
| [`DelimitedImportSettings`](../Table/DelimitedImportSettings.md#DelimitedImportSettings)                |                                                                                      |
| [`ECADImportSettings`](ECADImportSettings.md#ECADImportSettings)                                        |                                                                                      |
| [`ExternalDataFile`](ExternalDataFile.md#ExternalDataFile)                                              | A basic definition of the external data file.                                        |
| [`ExternalDataFileCollection`](ExternalDataFileCollection.md#ExternalDataFileCollection)                |                                                                                      |
| [`FixedWidthImportSettings`](../Table/FixedWidthImportSettings.md#FixedWidthImportSettings)             |                                                                                      |
| [`ImportSettingsBase`](../Table/ImportSettingsBase.md#ImportSettingsBase)                               | A base class for Table import settings.                                              |
| [`ImportSettingsFactory`](../Table/ImportSettingsFactory.md#ImportSettingsFactory)                      | ImportSettingsFactory interface.                                                     |
| [`MAPDLImportSettings`](MAPDLImportSettings.md#MAPDLImportSettings)                                     |                                                                                      |

<a id="description"></a>

## Description

ExternalData subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="ExternalData.AXDTImportSettings"></a>

### *class* ExternalData.AXDTImportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Dimension`](#id50)                                                     | The dimension of the AXDT file.         |
|--------------------------------------------------------------------------|-----------------------------------------|
| [`Format`](../DataModel/Enums/GeometryImportPreference/Format.md#Format) | Gets the existing corresponding format. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.ExternalData import AXDTImportSettings
```

<a id="property-detail"></a>

## Property detail

<a id="ExternalData.Dimension"></a>

### *property* ExternalData.Dimension *: [Ansys.Mechanical.DataModel.Enums.SourceDimension](../DataModel/Enums/SourceDimension.md#SourceDimension) | [None](https://docs.python.org/3/library/constants.html#None)*

The dimension of the AXDT file.

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.Format"></a>

### *property* ExternalData.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat](../DataModel/MechanicalEnums/ExternalData/ImportFormat.md#ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.ColumnarDataImportDefinition"></a>

### *class* ExternalData.ColumnarDataImportDefinition

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> A simple class to hold the import definitions for how a column from a data source in
> columnar format should be processed.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Index`](#ExternalData.Index)                                                    | Gets or sets the specified data source column index from which this variable will be   |
|-----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [`Name`](#ExternalData.Name)                                                      | Gets or sets an identifier for the data source column.                                 |
| [`Unit`](#ExternalData.Unit)                                                      | Gets or sets the unit of the column.                                                   |
| [`VariableType`](../DataModel/MechanicalEnums/Table/VariableType.md#VariableType) | Gets or sets the variable type of the column.                                          |
| [`UserFieldVariable`](#ExternalData.UserFieldVariable)                            |                                                                                        |

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.ExternalData import ColumnarDataImportDefinition
```

<a id="id2"></a>

## Property detail

<a id="ExternalData.Index"></a>

### *property* ExternalData.Index *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the specified data source column index from which this variable will be
imported.

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.Name"></a>

### *property* ExternalData.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets an identifier for the data source column.

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.Unit"></a>

### *property* ExternalData.Unit *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the unit of the column.

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.VariableType"></a>

### *property* ExternalData.VariableType *: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.VariableType](../DataModel/MechanicalEnums/ExternalData/VariableType.md#VariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the variable type of the column.

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.UserFieldVariable"></a>

### *property* ExternalData.UserFieldVariable *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.ColumnarDataSourceBase"></a>

### *class* ExternalData.ColumnarDataSourceBase

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

### Methods

| [`Clear`](#id39)         |                                                       |
|--------------------------|-------------------------------------------------------|
| [`GetEnumerator`](#id40) |                                                       |
| [`RemoveAt`](#id41)      | Removes the import definition at the specified index. |
| [`UseColumn`](#id42)     |                                                       |

### Properties

| [`Count`](#id33)                                                         | Gets the number of column definitions.                                               |
|--------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`Item`](#id34)                                                          | Item property.                                                                       |
| [`SkipFooter`](#id35)                                                    | Gets or sets the number of rows to ignore at the end of the file during import.      |
| [`SkipRows`](#id36)                                                      | Gets or sets the number of rows to skip over at the start of the file during import. |
| [`Format`](../DataModel/Enums/GeometryImportPreference/Format.md#Format) | Gets the existing corresponding format.                                              |

<a id="id3"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.ExternalData import ColumnarDataSourceBase
```

<a id="id4"></a>

## Property detail

<a id="ExternalData.Count"></a>

### *property* ExternalData.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.Item"></a>

### *property* ExternalData.Item *: [Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ColumnarDataImportDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.SkipFooter"></a>

### *property* ExternalData.SkipFooter *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to ignore at the end of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.SkipRows"></a>

### *property* ExternalData.SkipRows *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to skip over at the start of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ExternalData.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat](../DataModel/MechanicalEnums/ExternalData/ImportFormat.md#ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ExternalData.Clear"></a>

### ExternalData.Clear()

<a id="ExternalData.GetEnumerator"></a>

### ExternalData.GetEnumerator()

<a id="ExternalData.RemoveAt"></a>

### ExternalData.RemoveAt(index: System.Int32)

Removes the import definition at the specified index.

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.UseColumn"></a>

### ExternalData.UseColumn(index: System.Int32, variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.VariableType](../DataModel/MechanicalEnums/ExternalData/VariableType.md#VariableType), unit: System.String, name: System.String)

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.DelimitedImportSettings"></a>

### *class* ExternalData.DelimitedImportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

### Methods

| [`Clear`](#id39)         |                                                       |
|--------------------------|-------------------------------------------------------|
| [`GetEnumerator`](#id40) |                                                       |
| [`RemoveAt`](#id41)      | Removes the import definition at the specified index. |
| [`UseColumn`](#id42)     |                                                       |

### Properties

| [`Delimiter`](#ExternalData.Delimiter)                                   | The delimiter used to separate columns.                                              |
|--------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`AverageCornerNodesToMidsideNodes`](#id32)                              |                                                                                      |
| [`Count`](#id33)                                                         | Gets the number of column definitions.                                               |
| [`Item`](#id34)                                                          | Item property.                                                                       |
| [`SkipFooter`](#id35)                                                    | Gets or sets the number of rows to ignore at the end of the file during import.      |
| [`SkipRows`](#id36)                                                      | Gets or sets the number of rows to skip over at the start of the file during import. |
| [`Format`](../DataModel/Enums/GeometryImportPreference/Format.md#Format) | Gets the existing corresponding format.                                              |

<a id="id5"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.ExternalData import DelimitedImportSettings
```

<a id="id6"></a>

## Property detail

<a id="ExternalData.Delimiter"></a>

### *property* ExternalData.Delimiter *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The delimiter used to separate columns.

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.AverageCornerNodesToMidsideNodes"></a>

### *property* ExternalData.AverageCornerNodesToMidsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* ExternalData.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* ExternalData.Item *: [Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ColumnarDataImportDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

### *property* ExternalData.SkipFooter *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to ignore at the end of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="id10"></a>

### *property* ExternalData.SkipRows *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to skip over at the start of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="id11"></a>

### *property* ExternalData.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat](../DataModel/MechanicalEnums/ExternalData/ImportFormat.md#ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

<a id="id12"></a>

## Method detail

<a id="id13"></a>

### ExternalData.Clear()

<a id="id14"></a>

### ExternalData.GetEnumerator()

<a id="id15"></a>

### ExternalData.RemoveAt(index: System.Int32)

Removes the import definition at the specified index.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### ExternalData.UseColumn(index: System.Int32, variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.VariableType](../DataModel/MechanicalEnums/ExternalData/VariableType.md#VariableType), unit: System.String, name: System.String)

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.ECADImportSettings"></a>

### *class* ExternalData.ECADImportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

### Properties

| [`UseDummyNetData`](#ExternalData.UseDummyNetData)                       | The UseDummyNetData falg of the ECAD file. For External Data files that include trace mapping,   |
|--------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`Format`](../DataModel/Enums/GeometryImportPreference/Format.md#Format) | Gets the existing corresponding format.                                                          |

<a id="id17"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.ExternalData import ECADImportSettings
```

<a id="id18"></a>

## Property detail

<a id="ExternalData.UseDummyNetData"></a>

### *property* ExternalData.UseDummyNetData *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

The UseDummyNetData falg of the ECAD file. For External Data files that include trace mapping,
selecting this option enables you to import trace data belonging to the dummy net of the file.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### *property* ExternalData.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat](../DataModel/MechanicalEnums/ExternalData/ImportFormat.md#ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.ExternalDataFile"></a>

### *class* ExternalData.ExternalDataFile

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> A basic definition of the external data file.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`FilePath`](#ExternalData.FilePath)                              | Gets or sets the file path of the external data file.            |
|-------------------------------------------------------------------|------------------------------------------------------------------|
| [`Identifier`](#ExternalData.Identifier)                          | Gets or sets the identifier of the external data file.           |
| [`Description`](#ExternalData.Description)                        | Gets or sets the optional description of the external data file. |
| [`IsMainFile`](#ExternalData.IsMainFile)                          |                                                                  |
| [`ImportSettings`](../Materials/ImportSettings.md#ImportSettings) |                                                                  |

<a id="id20"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.ExternalData import ExternalDataFile
```

<a id="id21"></a>

## Property detail

<a id="ExternalData.FilePath"></a>

### *property* ExternalData.FilePath *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the file path of the external data file.

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.Identifier"></a>

### *property* ExternalData.Identifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the identifier of the external data file.

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.Description"></a>

### *property* ExternalData.Description *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the optional description of the external data file.

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.IsMainFile"></a>

### *property* ExternalData.IsMainFile *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.ImportSettings"></a>

### *property* ExternalData.ImportSettings *: [Ansys.Mechanical.ExternalData.ImportSettingsBase](ImportSettingsBase.md#ImportSettingsBase) | [None](https://docs.python.org/3/library/constants.html#None)*

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.ExternalDataFileCollection"></a>

### *class* ExternalData.ExternalDataFileCollection

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

### Methods

| [`Add`](#ExternalData.Add)           |                |
|--------------------------------------|----------------|
| [`Clear`](#id39)                     |                |
| [`Contains`](#ExternalData.Contains) |                |
| [`CopyTo`](#ExternalData.CopyTo)     | CopyTo method. |
| [`GetEnumerator`](#id40)             |                |
| [`IndexOf`](#ExternalData.IndexOf)   |                |
| [`Insert`](#ExternalData.Insert)     |                |
| [`Remove`](#ExternalData.Remove)     |                |
| [`RemoveAt`](#id41)                  |                |

### Properties

| [`SaveFilesWithProject`](#ExternalData.SaveFilesWithProject)   | Gets or sets the flag controlling if the external data files will be copied to the project directory.   |
|----------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| [`Item`](#id34)                                                | Item property.                                                                                          |
| [`Count`](#id33)                                               | Gets the number of external data files.                                                                 |

<a id="id22"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.ExternalData import ExternalDataFileCollection
```

<a id="id23"></a>

## Property detail

<a id="ExternalData.SaveFilesWithProject"></a>

### *property* ExternalData.SaveFilesWithProject *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the flag controlling if the external data files will be copied to the project directory.
If this flag is set to False, the external data files will directly reference the file path.
The default is False.

<!-- !! processed by numpydoc !! -->

<a id="id24"></a>

### *property* ExternalData.Item *: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ExternalDataFile) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### *property* ExternalData.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of external data files.

<!-- !! processed by numpydoc !! -->

<a id="id26"></a>

## Method detail

<a id="ExternalData.Add"></a>

### ExternalData.Add(item: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ExternalDataFile))

<a id="id27"></a>

### ExternalData.Clear()

<a id="ExternalData.Contains"></a>

### ExternalData.Contains(item: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ExternalDataFile))

<a id="ExternalData.CopyTo"></a>

### ExternalData.CopyTo(array: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ExternalDataFile), arrayIndex: System.Int32)

CopyTo method.

<!-- !! processed by numpydoc !! -->

<a id="id28"></a>

### ExternalData.GetEnumerator()

<a id="ExternalData.IndexOf"></a>

### ExternalData.IndexOf(item: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ExternalDataFile))

<a id="ExternalData.Insert"></a>

### ExternalData.Insert(index: System.Int32, item: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ExternalDataFile))

<a id="ExternalData.Remove"></a>

### ExternalData.Remove(item: [Ansys.Mechanical.ExternalData.ExternalDataFile](ExternalDataFile.md#ExternalDataFile))

<a id="id29"></a>

### ExternalData.RemoveAt(index: System.Int32)

<a id="ExternalData.FixedWidthImportSettings"></a>

### *class* ExternalData.FixedWidthImportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

### Methods

| [`Clear`](#id39)         |                                                       |
|--------------------------|-------------------------------------------------------|
| [`GetEnumerator`](#id40) |                                                       |
| [`RemoveAt`](#id41)      | Removes the import definition at the specified index. |
| [`UseColumn`](#id42)     |                                                       |

### Properties

| [`ColumnWidths`](#ExternalData.ColumnWidths)                             |                                                                                      |
|--------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`AverageCornerNodesToMidsideNodes`](#id32)                              |                                                                                      |
| [`Count`](#id33)                                                         | Gets the number of column definitions.                                               |
| [`Item`](#id34)                                                          | Item property.                                                                       |
| [`SkipFooter`](#id35)                                                    | Gets or sets the number of rows to ignore at the end of the file during import.      |
| [`SkipRows`](#id36)                                                      | Gets or sets the number of rows to skip over at the start of the file during import. |
| [`Format`](../DataModel/Enums/GeometryImportPreference/Format.md#Format) | Gets the existing corresponding format.                                              |

<a id="id30"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.ExternalData import FixedWidthImportSettings
```

<a id="id31"></a>

## Property detail

<a id="ExternalData.ColumnWidths"></a>

### *property* ExternalData.ColumnWidths *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

<!-- !! processed by numpydoc !! -->

<a id="id32"></a>

### *property* ExternalData.AverageCornerNodesToMidsideNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

<!-- !! processed by numpydoc !! -->

<a id="id33"></a>

### *property* ExternalData.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

<a id="id34"></a>

### *property* ExternalData.Item *: [Ansys.Mechanical.ExternalData.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ColumnarDataImportDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="id35"></a>

### *property* ExternalData.SkipFooter *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to ignore at the end of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="id36"></a>

### *property* ExternalData.SkipRows *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to skip over at the start of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="id37"></a>

### *property* ExternalData.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat](../DataModel/MechanicalEnums/ExternalData/ImportFormat.md#ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

<a id="id38"></a>

## Method detail

<a id="id39"></a>

### ExternalData.Clear()

<a id="id40"></a>

### ExternalData.GetEnumerator()

<a id="id41"></a>

### ExternalData.RemoveAt(index: System.Int32)

Removes the import definition at the specified index.

<!-- !! processed by numpydoc !! -->

<a id="id42"></a>

### ExternalData.UseColumn(index: System.Int32, variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.VariableType](../DataModel/MechanicalEnums/ExternalData/VariableType.md#VariableType), unit: System.String, name: System.String)

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.ImportSettingsBase"></a>

### *class* ExternalData.ImportSettingsBase

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> A base class for Table import settings.

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Format`](../DataModel/Enums/GeometryImportPreference/Format.md#Format)   | Gets the existing corresponding format.   |
|----------------------------------------------------------------------------|-------------------------------------------|

<a id="id43"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.ExternalData import ImportSettingsBase
```

<a id="id44"></a>

## Property detail

<a id="id45"></a>

### *property* ExternalData.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat](../DataModel/MechanicalEnums/ExternalData/ImportFormat.md#ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.ImportSettingsFactory"></a>

### *class* ExternalData.ImportSettingsFactory

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> ImportSettingsFactory interface.

> <!-- !! processed by numpydoc !! -->

### Constructors

| [`GetSettingsForFormat`](#ExternalData.GetSettingsForFormat)   |    |
|----------------------------------------------------------------|----|

<a id="id46"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.ExternalData import ImportSettingsFactory
```

<a id="id47"></a>

## Method detail

<a id="ExternalData.GetSettingsForFormat"></a>

### *classmethod* ExternalData.GetSettingsForFormat(format: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat](../DataModel/MechanicalEnums/ExternalData/ImportFormat.md#ImportFormat))

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.MAPDLImportSettings"></a>

### *class* ExternalData.MAPDLImportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

### Properties

| [`Dimension`](#id50)                                                               | The dimension of the MAPDL CDB file.    |
|------------------------------------------------------------------------------------|-----------------------------------------|
| [`LengthUnit`](../DataModel/MechanicalEnums/ExternalData/LengthUnit.md#LengthUnit) | The length unit of the MAPDL CDB file.  |
| [`Format`](../DataModel/Enums/GeometryImportPreference/Format.md#Format)           | Gets the existing corresponding format. |

<a id="id48"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.ExternalData import MAPDLImportSettings
```

<a id="id49"></a>

## Property detail

<a id="id50"></a>

### *property* ExternalData.Dimension *: [Ansys.Mechanical.DataModel.Enums.SourceDimension](../DataModel/Enums/SourceDimension.md#SourceDimension) | [None](https://docs.python.org/3/library/constants.html#None)*

The dimension of the MAPDL CDB file.

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.LengthUnit"></a>

### *property* ExternalData.LengthUnit *: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.LengthUnit](../DataModel/MechanicalEnums/ExternalData/LengthUnit.md#LengthUnit) | [None](https://docs.python.org/3/library/constants.html#None)*

The length unit of the MAPDL CDB file.

<!-- !! processed by numpydoc !! -->

<a id="id51"></a>

### *property* ExternalData.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat](../DataModel/MechanicalEnums/ExternalData/ImportFormat.md#ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.ICEPAKImportSettings"></a>

### *class* ExternalData.ICEPAKImportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

### Properties

| [`SupportingFilePath`](#ExternalData.SupportingFilePath)                 | The supporting file path of the ICEPAK INFO file.                                                |
|--------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`SupportingFileIdentifier`](#ExternalData.SupportingFileIdentifier)     | The supporting file identifier. The identifier should be unique, otherwise, an exception will be |
| [`SupportingFileDescription`](#ExternalData.SupportingFileDescription)   | The supporting file description. This is optional.                                               |
| [`Format`](../DataModel/Enums/GeometryImportPreference/Format.md#Format) | Gets the existing corresponding format.                                                          |

<a id="id52"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.ExternalData import ICEPAKImportSettings
```

<a id="id53"></a>

## Property detail

<a id="ExternalData.SupportingFilePath"></a>

### *property* ExternalData.SupportingFilePath *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The supporting file path of the ICEPAK INFO file.

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.SupportingFileIdentifier"></a>

### *property* ExternalData.SupportingFileIdentifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The supporting file identifier. The identifier should be unique, otherwise, an exception will be
thrown during the import.

<!-- !! processed by numpydoc !! -->

<a id="ExternalData.SupportingFileDescription"></a>

### *property* ExternalData.SupportingFileDescription *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The supporting file description. This is optional.

<!-- !! processed by numpydoc !! -->

<a id="id54"></a>

### *property* ExternalData.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.ExternalData.ImportFormat](../DataModel/MechanicalEnums/ExternalData/ImportFormat.md#ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->
