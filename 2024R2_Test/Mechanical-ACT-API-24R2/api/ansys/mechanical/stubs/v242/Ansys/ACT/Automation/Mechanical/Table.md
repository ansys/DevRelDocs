# `Table`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Table

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Table.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `CreateAndAddColumn`      | Creates and adds a new column (data series) to the table.                         |
| `GetDataURI`              | Gets the data URI from which the tabular data was imported.                       |
| `GetImportSettings`       | Get the settings used for an import operation.                                    |
| `Import`                  |                                                                                   |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `AddComment`              | Creates a new child Comment.                                                      |
| `AddFigure`               | Creates a new child Figure.                                                       |
| `AddImage`                | Creates a new child Image.                                                        |
| `Activate`                | Activate the current object.                                                      |
| `CopyTo`                  | Copies all visible properties from this object to another.                        |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`          | Get a property by its unique name.                                                |
| `PropertyByAPIName`       | Get a property by its API name.                                                   |
| `CreateParameter`         | Creates a new parameter for a Property.                                           |
| `GetParameter`            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------|----------------------------------------------------------------------------------------|
| `IsStrictSizing`          | Whether column add/create/import/refresh operations cannot grow the number of rows.    |
| `InternalObject`          | Gets the internal object. For advanced usage only.                                     |
| `APDLName`                | Gets or sets the name of the Table when explicitly written to the APDL input file.     |
| `PathType`                | Gets or sets the PathType.                                                             |
| `RefreshImportOn`         | Gets or sets the RefreshImportOn.                                                      |
| `SendToSolver`            | Get whether the Table will be explicitly written to the APDL input file.               |
| `SpatialCoordinateSystem` | Gets or sets the coordinate system applied to the Table's spatial independent columns. |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                                           |
| `Children`                | Gets the list of children.                                                             |
| `Comments`                | Gets the list of associated comments.                                                  |
| `Figures`                 | Gets the list of associated figures.                                                   |
| `Images`                  | Gets the list of associated images.                                                    |
| `InternalObject`          | Gets the internal object. For advanced usage only.                                     |
| `Properties`              | Gets the list of properties for this object.                                           |
| `VisibleProperties`       | Gets the list of properties that are visible for this object.                          |

<a id="property-detail"></a>

## Property detail

### *property* Table.IsStrictSizing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Whether column add/create/import/refresh operations cannot grow the number of rows.

<!-- !! processed by numpydoc !! -->

### *property* Table.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSTableAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Table.APDLName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the name of the Table when explicitly written to the APDL input file.

<!-- !! processed by numpydoc !! -->

### *property* Table.PathType *: [Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType](../../../../../v241/Ansys/Mechanical/DataModel/MechanicalEnums/Common/PathType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.Common.PathType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PathType.

<!-- !! processed by numpydoc !! -->

### *property* Table.RefreshImportOn *: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.TableRefreshImportOn](../../../../../v241/Ansys/Mechanical/DataModel/MechanicalEnums/Table/TableRefreshImportOn.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.Table.TableRefreshImportOn) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RefreshImportOn.

<!-- !! processed by numpydoc !! -->

### *property* Table.SendToSolver *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Get whether the Table will be explicitly written to the APDL input file.

<!-- !! processed by numpydoc !! -->

### *property* Table.SpatialCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the coordinate system applied to the Table's spatial independent columns.

<!-- !! processed by numpydoc !! -->

### *property* Table.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* Table.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Table.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Table.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Table.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="method-detail"></a>

## Method detail

### Table.CreateAndAddColumn(variableType: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType](../../../../../v241/Ansys/Mechanical/DataModel/MechanicalEnums/Table/VariableType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableType), variableClassification: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification](../../../../../v241/Ansys/Mechanical/DataModel/MechanicalEnums/Table/VariableClassification.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.Table.VariableClassification), data: System.Collections.IEnumerable, unit: System.String, name: System.String)

Creates and adds a new column (data series) to the table.

<!-- !! processed by numpydoc !! -->

### Table.GetDataURI(newColumn: Ansys.ACT.Automation.Mechanical.Table.Column)

Gets the data URI from which the tabular data was imported.

<!-- !! processed by numpydoc !! -->

### Table.GetImportSettings(newColumn: Ansys.ACT.Automation.Mechanical.Table.Column)

Get the settings used for an import operation.

<!-- !! processed by numpydoc !! -->

### Table.Import(dataURI: System.String, format: [Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat](../../../../../v241/Ansys/Mechanical/DataModel/MechanicalEnums/Table/ImportFormat.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.Table.ImportFormat), settings: [Ansys.Mechanical.Table.ImportSettingsBase](../../../../../v241/Ansys/Mechanical/Table/ImportSettingsBase.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Table.ImportSettingsBase))

<!-- !! processed by numpydoc !! -->

### Table.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Table.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Table.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Table.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Table.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

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

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

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

