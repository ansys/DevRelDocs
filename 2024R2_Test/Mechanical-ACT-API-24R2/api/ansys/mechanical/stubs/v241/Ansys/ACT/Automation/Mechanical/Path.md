# `Path`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Path

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Path.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `SnapPathToMeshNodes`     | Snap path to mesh nodes                                                           |
| `FlipPathOrientatation`   | Flip Path Orientatation                                                           |
| `Delete`                  | Run the Delete action.                                                            |
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
|-----------------------------|---------------------------------------------------------------|
| `DiscretizationPoints`      | Gets or sets the DiscretizationPoints.                        |
| `InternalObject`            | Gets the internal object. For advanced usage only.            |
| `NumberOfSubpaths`          | Gets or sets the NumberOfSubpaths.                            |
| `NumberOfSamplingPoints`    | Gets or sets the NumberOfSamplingPoints.                      |
| `EndXCoordinate`            | Gets or sets the EndXCoordinate.                              |
| `EndYCoordinate`            | Gets or sets the EndYCoordinate.                              |
| `EndZCoordinate`            | Gets or sets the EndZCoordinate.                              |
| `StartXCoordinate`          | Gets or sets the StartXCoordinate.                            |
| `StartYCoordinate`          | Gets or sets the StartYCoordinate.                            |
| `StartZCoordinate`          | Gets or sets the StartZCoordinate.                            |
| `PathType`                  | Gets or sets the PathType.                                    |
| `HasValidGeometrySelection` | Gets the HasValidGeometrySelection.                           |
| `ShowMesh`                  | Gets or sets the ShowMesh.                                    |
| `SnapToMeshNodes`           | Gets or sets the SnapToMeshNodes.                             |
| `Suppressed`                | Gets or sets the Suppressed.                                  |
| `PathCoordinateSystem`      | Gets or sets the PathCoordinateSystem.                        |
| `EndCoordinateSystem`       | Gets or sets the EndCoordinateSystem.                         |
| `StartCoordinateSystem`     | Gets or sets the StartCoordinateSystem.                       |
| `Location`                  | Gets or sets the Location.                                    |
| `OffsetEdgeLocation`        | Gets or sets the OffsetEdgeLocation.                          |
| `DataModelObjectCategory`   | Gets the current DataModelObject's category.                  |
| `Children`                  | Gets the list of children.                                    |
| `Comments`                  | Gets the list of associated comments.                         |
| `Figures`                   | Gets the list of associated figures.                          |
| `Images`                    | Gets the list of associated images.                           |
| `InternalObject`            | Gets the internal object. For advanced usage only.            |
| `Properties`                | Gets the list of properties for this object.                  |
| `VisibleProperties`         | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* Path.DiscretizationPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DiscretizationPoints.

<!-- !! processed by numpydoc !! -->

### *property* Path.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPathAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Path.NumberOfSubpaths *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSubpaths.

<!-- !! processed by numpydoc !! -->

### *property* Path.NumberOfSamplingPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSamplingPoints.

<!-- !! processed by numpydoc !! -->

### *property* Path.EndXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndXCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* Path.EndYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndYCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* Path.EndZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndZCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* Path.StartXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartXCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* Path.StartYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartYCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* Path.StartZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartZCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* Path.PathType *: [Ansys.Mechanical.DataModel.Enums.PathScopingType](../../../Mechanical/DataModel/Enums/PathScopingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PathScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PathType.

<!-- !! processed by numpydoc !! -->

### *property* Path.HasValidGeometrySelection *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the HasValidGeometrySelection.

<!-- !! processed by numpydoc !! -->

### *property* Path.ShowMesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowMesh.

<!-- !! processed by numpydoc !! -->

### *property* Path.SnapToMeshNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapToMeshNodes.

<!-- !! processed by numpydoc !! -->

### *property* Path.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Path.PathCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PathCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Path.EndCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Path.StartCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartCoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Path.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* Path.OffsetEdgeLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OffsetEdgeLocation.

<!-- !! processed by numpydoc !! -->

### *property* Path.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* Path.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Path.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Path.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Path.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Path.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Path.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Path.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### Path.SnapPathToMeshNodes()

Snap path to mesh nodes

<!-- !! processed by numpydoc !! -->

### Path.FlipPathOrientatation()

Flip Path Orientatation

<!-- !! processed by numpydoc !! -->

### Path.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Path.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Path.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Path.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Path.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Path.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### Path.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Path.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Path.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Path.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Path.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Path.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Path.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### Path.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Path.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Path.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

