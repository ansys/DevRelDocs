<a id="module-ansys.mechanical.stubs.Ansys.Mechanical.Table"></a>

<a id="the-table-package"></a>

# The `Table` package

<a id="summary"></a>

## Summary

### Classes

| Name | Summary |
|--------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [`ColumnarDataImportDefinition`](ColumnarDataImportDefinition.md#ColumnarDataImportDefinition)   | A simple class to hold the import definitions for how a column from a data source in   |
| [`ColumnarDataSourceBase`](ColumnarDataSourceBase.md#ColumnarDataSourceBase)                     |                                                                                        |
| [`FixedWidthImportSettings`](FixedWidthImportSettings.md#FixedWidthImportSettings)               |                                                                                        |
| [`DelimitedImportSettings`](DelimitedImportSettings.md#DelimitedImportSettings)                  |                                                                                        |
| [`ImportHelpers`](ImportHelpers.md#ImportHelpers)                                                | ImportHelpers interface.                                                               |
| [`ImportSettingsBase`](ImportSettingsBase.md#ImportSettingsBase)                                 | A base class for Table import settings.                                                |
| [`ImportSettingsFactory`](ImportSettingsFactory.md#ImportSettingsFactory)                        | ImportSettingsFactory interface.                                                       |

<a id="description"></a>

## Description

Table subpackage.

<!-- !! processed by numpydoc !! -->

<a id="module-detail"></a>

## Module detail

<a id="Table.ColumnarDataImportDefinition"></a>

### *class* Table.ColumnarDataImportDefinition

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> A simple class to hold the import definitions for how a column from a data source in
> columnar format should be processed.

> <!-- !! processed by numpydoc !! -->

### Properties

| Name | Summary |
|-----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [`Index`](#Table.Index)                                                                                         | Gets or sets the specified data source column index from which this variable will be   |
| [`Name`](#Table.Name)                                                                                           | Gets or sets an identifier for the data source column.                                 |
| [`Unit`](#Table.Unit)                                                                                           | Gets or sets the unit of the column.                                                   |
| [`VariableType`](../DataModel/MechanicalEnums/Table/VariableType.md#VariableType)                               | Gets or sets the variable type of the column.                                          |
| [`VariableClassification`](../DataModel/MechanicalEnums/Table/VariableClassification.md#VariableClassification) | Gets or sets the variable classification of the column.                                |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Table import ColumnarDataImportDefinition
```

<a id="property-detail"></a>

## Property detail

<a id="Table.Index"></a>

### *property* Table.Index *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the specified data source column index from which this variable will be
imported.

<!-- !! processed by numpydoc !! -->

<a id="Table.Name"></a>

### *property* Table.Name *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets an identifier for the data source column.

<!-- !! processed by numpydoc !! -->

<a id="Table.Unit"></a>

### *property* Table.Unit *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the unit of the column.

<!-- !! processed by numpydoc !! -->

<a id="Table.VariableType"></a>

### *property* Table.VariableType *: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType](../DataModel/MechanicalEnums/Table/VariableType.md#VariableType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the variable type of the column.

<!-- !! processed by numpydoc !! -->

<a id="Table.VariableClassification"></a>

### *property* Table.VariableClassification *: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification](../DataModel/MechanicalEnums/Table/VariableClassification.md#VariableClassification) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the variable classification of the column.

<!-- !! processed by numpydoc !! -->

<a id="Table.ColumnarDataSourceBase"></a>

### *class* Table.ColumnarDataSourceBase

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------|-------------------------------------------------------|
| [`Clear`](#id22)         |                                                       |
| [`GetEnumerator`](#id23) |                                                       |
| [`RemoveAt`](#id24)      | Removes the import definition at the specified index. |
| [`UseColumn`](#id25)     |                                                       |

### Properties

| Name | Summary |
|--------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`Count`](#id16)                                                         | Gets the number of column definitions.                                               |
| [`Item`](#id17)                                                          | Item property.                                                                       |
| [`SkipFooter`](#id18)                                                    | Gets or sets the number of rows to ignore at the end of the file during import.      |
| [`SkipRows`](#id19)                                                      | Gets or sets the number of rows to skip over at the start of the file during import. |
| [`Format`](../DataModel/Enums/GeometryImportPreference/Format.md#Format) | Gets the existing corresponding format.                                              |

<a id="id1"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Table import ColumnarDataSourceBase
```

<a id="id2"></a>

## Property detail

<a id="Table.Count"></a>

### *property* Table.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

<a id="Table.Item"></a>

### *property* Table.Item *: [Ansys.Mechanical.Table.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ColumnarDataImportDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="Table.SkipFooter"></a>

### *property* Table.SkipFooter *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to ignore at the end of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="Table.SkipRows"></a>

### *property* Table.SkipRows *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to skip over at the start of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="Table.Format"></a>

### *property* Table.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat](../DataModel/MechanicalEnums/Table/ImportFormat.md#ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Table.Clear"></a>

### Table.Clear()

<a id="Table.GetEnumerator"></a>

### Table.GetEnumerator()

<a id="Table.RemoveAt"></a>

### Table.RemoveAt(index: System.Int32)

Removes the import definition at the specified index.

<!-- !! processed by numpydoc !! -->

<a id="Table.UseColumn"></a>

### Table.UseColumn(index: System.Int32, variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType](../DataModel/MechanicalEnums/Table/VariableType.md#VariableType), variableClassification: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification](../DataModel/MechanicalEnums/Table/VariableClassification.md#VariableClassification), unit: System.String, name: System.String)

<!-- !! processed by numpydoc !! -->

<a id="Table.FixedWidthImportSettings"></a>

### *class* Table.FixedWidthImportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------|-------------------------------------------------------|
| [`Clear`](#id22)         |                                                       |
| [`GetEnumerator`](#id23) |                                                       |
| [`RemoveAt`](#id24)      | Removes the import definition at the specified index. |
| [`UseColumn`](#id25)     |                                                       |

### Properties

| Name | Summary |
|--------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`ColumnWidths`](#Table.ColumnWidths)                                    | Gets or sets the specified column widths.                                            |
| [`Count`](#id16)                                                         | Gets the number of column definitions.                                               |
| [`Item`](#id17)                                                          | Item property.                                                                       |
| [`SkipFooter`](#id18)                                                    | Gets or sets the number of rows to ignore at the end of the file during import.      |
| [`SkipRows`](#id19)                                                      | Gets or sets the number of rows to skip over at the start of the file during import. |
| [`Format`](../DataModel/Enums/GeometryImportPreference/Format.md#Format) | Gets the existing corresponding format.                                              |

<a id="id3"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Table import FixedWidthImportSettings
```

<a id="id4"></a>

## Property detail

<a id="Table.ColumnWidths"></a>

### *property* Table.ColumnWidths *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the specified column widths.
When setting, The value provided to

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Table.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

<a id="id5"></a>

### *property* Table.Item *: [Ansys.Mechanical.Table.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ColumnarDataImportDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="id6"></a>

### *property* Table.SkipFooter *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to ignore at the end of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="id7"></a>

### *property* Table.SkipRows *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to skip over at the start of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="id8"></a>

### *property* Table.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat](../DataModel/MechanicalEnums/Table/ImportFormat.md#ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

<a id="id9"></a>

## Method detail

<a id="id10"></a>

### Table.Clear()

<a id="id11"></a>

### Table.GetEnumerator()

<a id="id12"></a>

### Table.RemoveAt(index: System.Int32)

Removes the import definition at the specified index.

<!-- !! processed by numpydoc !! -->

<a id="id13"></a>

### Table.UseColumn(index: System.Int32, variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType](../DataModel/MechanicalEnums/Table/VariableType.md#VariableType), variableClassification: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification](../DataModel/MechanicalEnums/Table/VariableClassification.md#VariableClassification), unit: System.String, name: System.String)

<!-- !! processed by numpydoc !! -->

<a id="Table.DelimitedImportSettings"></a>

### *class* Table.DelimitedImportSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> <!-- !! processed by numpydoc !! -->

### Methods

| Name | Summary |
|--------------------------|-------------------------------------------------------|
| [`Clear`](#id22)         |                                                       |
| [`GetEnumerator`](#id23) |                                                       |
| [`RemoveAt`](#id24)      | Removes the import definition at the specified index. |
| [`UseColumn`](#id25)     |                                                       |

### Properties

| Name | Summary |
|--------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [`Delimiter`](#Table.Delimiter)                                          | The delimiter used to separate columns.                                              |
| [`Count`](#id16)                                                         | Gets the number of column definitions.                                               |
| [`Item`](#id17)                                                          | Item property.                                                                       |
| [`SkipFooter`](#id18)                                                    | Gets or sets the number of rows to ignore at the end of the file during import.      |
| [`SkipRows`](#id19)                                                      | Gets or sets the number of rows to skip over at the start of the file during import. |
| [`Format`](../DataModel/Enums/GeometryImportPreference/Format.md#Format) | Gets the existing corresponding format.                                              |

<a id="id14"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Table import DelimitedImportSettings
```

<a id="id15"></a>

## Property detail

<a id="Table.Delimiter"></a>

### *property* Table.Delimiter *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

The delimiter used to separate columns.

<!-- !! processed by numpydoc !! -->

<a id="id16"></a>

### *property* Table.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of column definitions.

<!-- !! processed by numpydoc !! -->

<a id="id17"></a>

### *property* Table.Item *: [Ansys.Mechanical.Table.ColumnarDataImportDefinition](ColumnarDataImportDefinition.md#ColumnarDataImportDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="id18"></a>

### *property* Table.SkipFooter *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to ignore at the end of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="id19"></a>

### *property* Table.SkipRows *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the number of rows to skip over at the start of the file during import.

<!-- !! processed by numpydoc !! -->

<a id="id20"></a>

### *property* Table.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat](../DataModel/MechanicalEnums/Table/ImportFormat.md#ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

<a id="id21"></a>

## Method detail

<a id="id22"></a>

### Table.Clear()

<a id="id23"></a>

### Table.GetEnumerator()

<a id="id24"></a>

### Table.RemoveAt(index: System.Int32)

Removes the import definition at the specified index.

<!-- !! processed by numpydoc !! -->

<a id="id25"></a>

### Table.UseColumn(index: System.Int32, variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType](../DataModel/MechanicalEnums/Table/VariableType.md#VariableType), variableClassification: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification](../DataModel/MechanicalEnums/Table/VariableClassification.md#VariableClassification), unit: System.String, name: System.String)

<!-- !! processed by numpydoc !! -->

<a id="Table.ImportHelpers"></a>

### *class* Table.ImportHelpers

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> ImportHelpers interface.

> <!-- !! processed by numpydoc !! -->

<a id="id26"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Table import ImportHelpers
```

<a id="Table.ImportSettingsBase"></a>

### *class* Table.ImportSettingsBase

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> A base class for Table import settings.

> <!-- !! processed by numpydoc !! -->

### Properties

| Name | Summary |
|----------------------------------------------------------------------------|-------------------------------------------|
| [`Format`](../DataModel/Enums/GeometryImportPreference/Format.md#Format)   | Gets the existing corresponding format.   |

<a id="id27"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Table import ImportSettingsBase
```

<a id="id28"></a>

## Property detail

<a id="id29"></a>

### *property* Table.Format *: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat](../DataModel/MechanicalEnums/Table/ImportFormat.md#ImportFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the existing corresponding format.

<!-- !! processed by numpydoc !! -->

<a id="Table.ImportSettingsFactory"></a>

### *class* Table.ImportSettingsFactory

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> ImportSettingsFactory interface.

> <!-- !! processed by numpydoc !! -->

### Constructors

| Name | Summary |
|---------------------------------------------------------|----|
| [`GetSettingsForFormat`](#Table.GetSettingsForFormat)   |    |

<a id="id30"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Table import ImportSettingsFactory
```

<a id="id31"></a>

## Method detail

<a id="Table.GetSettingsForFormat"></a>

### *classmethod* Table.GetSettingsForFormat(format: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat](../DataModel/MechanicalEnums/Table/ImportFormat.md#ImportFormat))

<!-- !! processed by numpydoc !! -->
