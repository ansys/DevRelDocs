# `Table`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Table"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Table

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Table.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Table.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#Table.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Table.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Table.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Table.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateAndAddColumn`](#Table.CreateAndAddColumn)           | Creates and adds a new column (data series) to the table.                         |
| [`CreateParameter`](#Table.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Duplicate`](#Table.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#Table.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetDataURI`](#Table.GetDataURI)                           | Gets the data URI from which the tabular data was imported.                       |
| [`GetImportSettings`](#Table.GetImportSettings)             | Get the settings used for an import operation.                                    |
| [`GetParameter`](#Table.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Table.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Table.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`Import`](#Table.Import)                                   |                                                                                   |
| [`PropertyByAPIName`](#Table.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Table.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Table.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [`APDLName`](#Table.APDLName)                               | Gets or sets the name of the Table when explicitly written to the APDL input file.     |
| [`Children`](#Table.Children)                               | Gets the list of children.                                                             |
| [`Comments`](#Table.Comments)                               | Gets the list of associated comments.                                                  |
| [`DataModelObjectCategory`](#Table.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                           |
| [`Figures`](#Table.Figures)                                 | Gets the list of associated figures.                                                   |
| [`Images`](#Table.Images)                                   | Gets the list of associated images.                                                    |
| [`InternalObject`](#Table.InternalObject)                   | Gets the internal object. For advanced usage only.                                     |
| [`IsStrictSizing`](#Table.IsStrictSizing)                   | Whether column add/create/import/refresh operations cannot grow the number of rows.    |
| [`PathType`](#Table.PathType)                               | Gets or sets the PathType.                                                             |
| [`Properties`](#Table.Properties)                           | Gets the list of properties for this object.                                           |
| [`RefreshImportOn`](#Table.RefreshImportOn)                 | Gets or sets the RefreshImportOn.                                                      |
| [`SendToSolver`](#Table.SendToSolver)                       | Get whether the Table will be explicitly written to the APDL input file.               |
| [`SpatialCoordinateSystem`](#Table.SpatialCoordinateSystem) | Gets or sets the coordinate system applied to the Table’s spatial independent columns. |
| [`VisibleProperties`](#Table.VisibleProperties)             | Gets the list of properties that are visible for this object.                          |

<a id="property-detail"></a>

## Property detail

<a id="Table.APDLName"></a>

### *property* Table.APDLName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the name of the Table when explicitly written to the APDL input file.

<!-- !! processed by numpydoc !! -->

<a id="Table.Children"></a>

### *property* Table.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Table.Comments"></a>

### *property* Table.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Table.DataModelObjectCategory"></a>

### *property* Table.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Table.Figures"></a>

### *property* Table.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Table.Images"></a>

### *property* Table.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Table.InternalObject"></a>

### *property* Table.InternalObject *: Ansys.Common.Interop.DSTableObjects.IDSTableAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Table.IsStrictSizing"></a>

### *property* Table.IsStrictSizing *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Whether column add/create/import/refresh operations cannot grow the number of rows.

<!-- !! processed by numpydoc !! -->

<a id="Table.PathType"></a>

### *property* Table.PathType *: [Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType](../../../Mechanical/DataModel/MechanicalEnums/Common/PathType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PathType.

<!-- !! processed by numpydoc !! -->

<a id="Table.Properties"></a>

### *property* Table.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Table.RefreshImportOn"></a>

### *property* Table.RefreshImportOn *: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.TableRefreshImportOn](../../../Mechanical/DataModel/MechanicalEnums/Table/TableRefreshImportOn.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.Table.TableRefreshImportOn) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RefreshImportOn.

<!-- !! processed by numpydoc !! -->

<a id="Table.SendToSolver"></a>

### *property* Table.SendToSolver *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Get whether the Table will be explicitly written to the APDL input file.

<!-- !! processed by numpydoc !! -->

<a id="Table.SpatialCoordinateSystem"></a>

### *property* Table.SpatialCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the coordinate system applied to the Table’s spatial independent columns.

<!-- !! processed by numpydoc !! -->

<a id="Table.VisibleProperties"></a>

### *property* Table.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Table.Activate"></a>

### Table.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Table.AddComment"></a>

### Table.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Table.AddFigure"></a>

### Table.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Table.AddImage"></a>

### Table.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Table.CopyTo"></a>

### Table.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Table.CreateAndAddColumn"></a>

### Table.CreateAndAddColumn(variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType](../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType), variableClassification: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification](../../../Mechanical/DataModel/MechanicalEnums/Table/VariableClassification.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification), data: Iterable, unit: [str](https://docs.python.org/3/library/stdtypes.html#str), name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.Mechanical.Interfaces.IDataSeries](../../../Mechanical/Interfaces/IDataSeries.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Interfaces.IDataSeries)

Creates and adds a new column (data series) to the table.

<!-- !! processed by numpydoc !! -->

<a id="Table.CreateParameter"></a>

### Table.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Table.Duplicate"></a>

### Table.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Table.GetChildren"></a>

### Table.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Table.GetDataURI"></a>

### Table.GetDataURI(newColumn: Ansys.ACT.Automation.Mechanical.Table.Column) → [str](https://docs.python.org/3/library/stdtypes.html#str)

Gets the data URI from which the tabular data was imported.

<!-- !! processed by numpydoc !! -->

<a id="Table.GetImportSettings"></a>

### Table.GetImportSettings(newColumn: Ansys.ACT.Automation.Mechanical.Table.Column) → [Ansys.Mechanical.Table.ImportSettingsBase](../../../Mechanical/Table/ImportSettingsBase.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Table.ImportSettingsBase)

Get the settings used for an import operation.

<!-- !! processed by numpydoc !! -->

<a id="Table.GetParameter"></a>

### Table.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Table.GroupAllSimilarChildren"></a>

### Table.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Table.GroupSimilarObjects"></a>

### Table.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Table.Import"></a>

### Table.Import(dataURI: [str](https://docs.python.org/3/library/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat](../../../Mechanical/DataModel/MechanicalEnums/Table/ImportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat), settings: [Ansys.Mechanical.Table.ImportSettingsBase](../../../Mechanical/Table/ImportSettingsBase.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Table.ImportSettingsBase)) → List[[Ansys.Mechanical.Interfaces.IDataSeries](../../../Mechanical/Interfaces/IDataSeries.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Interfaces.IDataSeries)]

<!-- !! processed by numpydoc !! -->

<a id="Table.PropertyByAPIName"></a>

### Table.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Table.PropertyByName"></a>

### Table.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Table.RemoveParameter"></a>

### Table.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

