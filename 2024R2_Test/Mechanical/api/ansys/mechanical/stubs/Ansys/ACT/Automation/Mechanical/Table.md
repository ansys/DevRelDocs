# Table

### *class* Table

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Table.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`CreateAndAddColumn`](#Table.CreateAndAddColumn)           | Creates and adds a new column (data series) to the table.                         |
|-------------------------------------------------------------|-----------------------------------------------------------------------------------|
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

| [`IsStrictSizing`](#Table.IsStrictSizing)                                                                           | Whether column add/create/import/refresh operations cannot grow the number of rows.    |
|---------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [`RefreshImportOn`](#Table.RefreshImportOn)                                                                         | Controls when the imported file should be refreshed.                                   |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                     |
| [`APDLName`](#Table.APDLName)                                                                                       | Gets or sets the name of the Table when explicitly written to the APDL input file.     |
| [`PathType`](../../../Mechanical/DataModel/MechanicalEnums/Common/PathType.md#PathType)                             | Gets or sets the PathType.                                                             |
| [`SendToSolver`](#Table.SendToSolver)                                                                               | Get whether the Table will be explicitly written to the APDL input file.               |
| [`SpatialCoordinateSystem`](#Table.SpatialCoordinateSystem)                                                         | Gets or sets the coordinate system applied to the Table’s spatial independent columns. |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                           |
| [`Children`](#Table.Children)                                                                                       | Gets the list of children.                                                             |
| [`Comments`](#Table.Comments)                                                                                       | Gets the list of associated comments.                                                  |
| [`Figures`](#Table.Figures)                                                                                         | Gets the list of associated figures.                                                   |
| [`Images`](#Table.Images)                                                                                           | Gets the list of associated images.                                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                     |
| [`Properties`](#Table.Properties)                                                                                   | Gets the list of properties for this object.                                           |
| [`VisibleProperties`](#Table.VisibleProperties)                                                                     | Gets the list of properties that are visible for this object.                          |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import Table
```

## Property detail

### *property* Table.IsStrictSizing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether column add/create/import/refresh operations cannot grow the number of rows.

<!-- !! processed by numpydoc !! -->

### *property* Table.RefreshImportOn *: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.TableRefreshImportOn](../../../Mechanical/DataModel/MechanicalEnums/Table/TableRefreshImportOn.md#TableRefreshImportOn) | [None](https://docs.python.org/3/library/constants.html#None)*

Controls when the imported file should be refreshed.

<!-- !! processed by numpydoc !! -->

### *property* Table.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTableAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Table.APDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the name of the Table when explicitly written to the APDL input file.

<!-- !! processed by numpydoc !! -->

### *property* Table.PathType *: [Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType](../../../Mechanical/DataModel/MechanicalEnums/Common/PathType.md#PathType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PathType.

<!-- !! processed by numpydoc !! -->

### *property* Table.SendToSolver *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Get whether the Table will be explicitly written to the APDL input file.

<!-- !! processed by numpydoc !! -->

### *property* Table.SpatialCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the coordinate system applied to the Table’s spatial independent columns.

<!-- !! processed by numpydoc !! -->

### *property* Table.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Table.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Table.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Table.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Table.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Table.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Table.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Table.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Table.CreateAndAddColumn(variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType](../../../Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#VariableType), variableClassification: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification](../../../Mechanical/DataModel/MechanicalEnums/Table/VariableClassification.md#VariableClassification), data: System.Collections.IEnumerable, unit: System.String, name: System.String)

Creates and adds a new column (data series) to the table.

<!-- !! processed by numpydoc !! -->

### Table.GetDataURI(newColumn: Ansys.ACT.Automation.Mechanical.Table.Column)

Gets the data URI from which the tabular data was imported.

<!-- !! processed by numpydoc !! -->

### Table.GetImportSettings(newColumn: Ansys.ACT.Automation.Mechanical.Table.Column)

Get the settings used for an import operation.

<!-- !! processed by numpydoc !! -->

### Table.Import(dataURI: System.String, format: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat](../../../Mechanical/DataModel/MechanicalEnums/Table/ImportFormat.md#ImportFormat), settings: [Ansys.Mechanical.Table.ImportSettingsBase](../../../Mechanical/Table/ImportSettingsBase.md#ImportSettingsBase))

<!-- !! processed by numpydoc !! -->

### Table.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Table.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Table.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Table.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Table.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Table.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Table.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Table.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Table.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Table.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Table.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Table.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Table.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Table.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Table.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
