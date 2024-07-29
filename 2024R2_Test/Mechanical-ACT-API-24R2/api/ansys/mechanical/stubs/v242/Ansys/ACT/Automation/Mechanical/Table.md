# `Table`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Table

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Table.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`CreateAndAddColumn`](#Table.CreateAndAddColumn)           | Creates and adds a new column (data series) to the table.                         |
| [`GetDataURI`](#Table.GetDataURI)                           | Gets the data URI from which the tabular data was imported.                       |
| [`GetImportSettings`](#Table.GetImportSettings)             | Get the settings used for an import operation.                                    |
| [`Import`](#Table.Import)                                   |                                                                                   |
| [`GetChildren`](#id1)                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Table.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Table.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Table.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Table.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Table.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Table.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Table.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Table.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Table.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Table.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Table.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Table.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Table.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [`IsStrictSizing`](#Table.IsStrictSizing)                   | Whether column add/create/import/refresh operations cannot grow the number of rows.    |
| [`InternalObject`](#id0)                                    | Gets the internal object. For advanced usage only.                                     |
| [`APDLName`](#Table.APDLName)                               | Gets or sets the name of the Table when explicitly written to the APDL input file.     |
| [`PathType`](#Table.PathType)                               | Gets or sets the PathType.                                                             |
| [`RefreshImportOn`](#Table.RefreshImportOn)                 | Gets or sets the RefreshImportOn.                                                      |
| [`SendToSolver`](#Table.SendToSolver)                       | Get whether the Table will be explicitly written to the APDL input file.               |
| [`SpatialCoordinateSystem`](#Table.SpatialCoordinateSystem) | Gets or sets the coordinate system applied to the Table’s spatial independent columns. |
| [`DataModelObjectCategory`](#Table.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                           |
| [`Children`](#Table.Children)                               | Gets the list of children.                                                             |
| [`Comments`](#Table.Comments)                               | Gets the list of associated comments.                                                  |
| [`Figures`](#Table.Figures)                                 | Gets the list of associated figures.                                                   |
| [`Images`](#Table.Images)                                   | Gets the list of associated images.                                                    |
| [`InternalObject`](#id0)                                    | Gets the internal object. For advanced usage only.                                     |
| [`Properties`](#Table.Properties)                           | Gets the list of properties for this object.                                           |
| [`VisibleProperties`](#Table.VisibleProperties)             | Gets the list of properties that are visible for this object.                          |

<a id="property-detail"></a>

## Property detail

<a id="Table.IsStrictSizing"></a>

### *property* Table.IsStrictSizing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether column add/create/import/refresh operations cannot grow the number of rows.

<!-- !! processed by numpydoc !! -->

<a id="Table.InternalObject"></a>

### *property* Table.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTableAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Table.APDLName"></a>

### *property* Table.APDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the name of the Table when explicitly written to the APDL input file.

<!-- !! processed by numpydoc !! -->

<a id="Table.PathType"></a>

### *property* Table.PathType *: [Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType](../../../../../v241/Ansys/Mechanical/DataModel/MechanicalEnums/Common/PathType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PathType.

<!-- !! processed by numpydoc !! -->

<a id="Table.RefreshImportOn"></a>

### *property* Table.RefreshImportOn *: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.TableRefreshImportOn](../../../../../v241/Ansys/Mechanical/DataModel/MechanicalEnums/Table/TableRefreshImportOn.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.Table.TableRefreshImportOn) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RefreshImportOn.

<!-- !! processed by numpydoc !! -->

<a id="Table.SendToSolver"></a>

### *property* Table.SendToSolver *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Get whether the Table will be explicitly written to the APDL input file.

<!-- !! processed by numpydoc !! -->

<a id="Table.SpatialCoordinateSystem"></a>

### *property* Table.SpatialCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the coordinate system applied to the Table’s spatial independent columns.

<!-- !! processed by numpydoc !! -->

<a id="Table.DataModelObjectCategory"></a>

### *property* Table.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Table.Children"></a>

### *property* Table.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Table.Comments"></a>

### *property* Table.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Table.Figures"></a>

### *property* Table.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Table.Images"></a>

### *property* Table.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Table.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Table.Properties"></a>

### *property* Table.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Table.VisibleProperties"></a>

### *property* Table.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Table.CreateAndAddColumn"></a>

### Table.CreateAndAddColumn(variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType](../../../../../v241/Ansys/Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType), variableClassification: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification](../../../../../v241/Ansys/Mechanical/DataModel/MechanicalEnums/Table/VariableClassification.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification), data: System.Collections.IEnumerable, unit: System.String, name: System.String)

Creates and adds a new column (data series) to the table.

<!-- !! processed by numpydoc !! -->

<a id="Table.GetDataURI"></a>

### Table.GetDataURI(newColumn: Ansys.ACT.Automation.Mechanical.Table.Column)

Gets the data URI from which the tabular data was imported.

<!-- !! processed by numpydoc !! -->

<a id="Table.GetImportSettings"></a>

### Table.GetImportSettings(newColumn: Ansys.ACT.Automation.Mechanical.Table.Column)

Get the settings used for an import operation.

<!-- !! processed by numpydoc !! -->

<a id="Table.Import"></a>

### Table.Import(dataURI: System.String, format: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat](../../../../../v241/Ansys/Mechanical/DataModel/MechanicalEnums/Table/ImportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat), settings: [Ansys.Mechanical.Table.ImportSettingsBase](../../../../../v241/Ansys/Mechanical/Table/ImportSettingsBase.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Table.ImportSettingsBase))

<!-- !! processed by numpydoc !! -->

<a id="Table.GetChildren"></a>

### Table.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Table.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Table.AddComment"></a>

### Table.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Table.AddFigure"></a>

### Table.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Table.AddImage"></a>

### Table.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Table.Activate"></a>

### Table.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Table.CopyTo"></a>

### Table.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Table.Duplicate"></a>

### Table.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Table.GroupAllSimilarChildren"></a>

### Table.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Table.GroupSimilarObjects"></a>

### Table.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Table.PropertyByName"></a>

### Table.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Table.PropertyByAPIName"></a>

### Table.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Table.CreateParameter"></a>

### Table.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Table.GetParameter"></a>

### Table.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Table.RemoveParameter"></a>

### Table.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

