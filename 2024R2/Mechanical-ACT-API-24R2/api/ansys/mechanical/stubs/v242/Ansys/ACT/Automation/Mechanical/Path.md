# `Path`

<a id="ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Path"></a>

#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Path

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Path.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Path.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#Path.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Path.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Path.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#Path.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Path.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#Path.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#Path.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`FlipPathOrientatation`](#Path.FlipPathOrientatation)     | Flip Path Orientatation                                                           |
| [`GetChildren`](#Path.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#Path.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Path.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Path.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#Path.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#Path.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Path.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`SnapPathToMeshNodes`](#Path.SnapPathToMeshNodes)         | Snap path to mesh nodes                                                           |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#Path.Children)                                   | Gets the list of children.                                    |
| [`Comments`](#Path.Comments)                                   | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Path.DataModelObjectCategory)     | Gets the current DataModelObject’s category.                  |
| [`DiscretizationPoints`](#Path.DiscretizationPoints)           | Gets or sets the DiscretizationPoints.                        |
| [`EndCoordinateSystem`](#Path.EndCoordinateSystem)             | Gets or sets the EndCoordinateSystem.                         |
| [`EndXCoordinate`](#Path.EndXCoordinate)                       | Gets or sets the EndXCoordinate.                              |
| [`EndYCoordinate`](#Path.EndYCoordinate)                       | Gets or sets the EndYCoordinate.                              |
| [`EndZCoordinate`](#Path.EndZCoordinate)                       | Gets or sets the EndZCoordinate.                              |
| [`Figures`](#Path.Figures)                                     | Gets the list of associated figures.                          |
| [`HasValidGeometrySelection`](#Path.HasValidGeometrySelection) | Gets the HasValidGeometrySelection.                           |
| [`Images`](#Path.Images)                                       | Gets the list of associated images.                           |
| [`InternalObject`](#Path.InternalObject)                       | Gets the internal object. For advanced usage only.            |
| [`Location`](#Path.Location)                                   | Gets or sets the Location.                                    |
| [`NumberOfSamplingPoints`](#Path.NumberOfSamplingPoints)       | Gets or sets the NumberOfSamplingPoints.                      |
| [`NumberOfSubpaths`](#Path.NumberOfSubpaths)                   | Gets or sets the NumberOfSubpaths.                            |
| [`OffsetEdgeLocation`](#Path.OffsetEdgeLocation)               | Gets or sets the OffsetEdgeLocation.                          |
| [`PathCoordinateSystem`](#Path.PathCoordinateSystem)           | Gets or sets the PathCoordinateSystem.                        |
| [`PathType`](#Path.PathType)                                   | Gets or sets the PathType.                                    |
| [`Properties`](#Path.Properties)                               | Gets the list of properties for this object.                  |
| [`ShowMesh`](#Path.ShowMesh)                                   | Gets or sets the ShowMesh.                                    |
| [`SnapToMeshNodes`](#Path.SnapToMeshNodes)                     | Gets or sets the SnapToMeshNodes.                             |
| [`StartCoordinateSystem`](#Path.StartCoordinateSystem)         | Gets or sets the StartCoordinateSystem.                       |
| [`StartXCoordinate`](#Path.StartXCoordinate)                   | Gets or sets the StartXCoordinate.                            |
| [`StartYCoordinate`](#Path.StartYCoordinate)                   | Gets or sets the StartYCoordinate.                            |
| [`StartZCoordinate`](#Path.StartZCoordinate)                   | Gets or sets the StartZCoordinate.                            |
| [`Suppressed`](#Path.Suppressed)                               | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#Path.VisibleProperties)                 | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Path.Children"></a>

### *property* Path.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Path.Comments"></a>

### *property* Path.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Path.DataModelObjectCategory"></a>

### *property* Path.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Path.DiscretizationPoints"></a>

### *property* Path.DiscretizationPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DiscretizationPoints.

<!-- !! processed by numpydoc !! -->

<a id="Path.EndCoordinateSystem"></a>

### *property* Path.EndCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Path.EndXCoordinate"></a>

### *property* Path.EndXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Path.EndYCoordinate"></a>

### *property* Path.EndYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Path.EndZCoordinate"></a>

### *property* Path.EndZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EndZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Path.Figures"></a>

### *property* Path.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Path.HasValidGeometrySelection"></a>

### *property* Path.HasValidGeometrySelection *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the HasValidGeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="Path.Images"></a>

### *property* Path.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Path.InternalObject"></a>

### *property* Path.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPathAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Path.Location"></a>

### *property* Path.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Path.NumberOfSamplingPoints"></a>

### *property* Path.NumberOfSamplingPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSamplingPoints.

<!-- !! processed by numpydoc !! -->

<a id="Path.NumberOfSubpaths"></a>

### *property* Path.NumberOfSubpaths *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSubpaths.

<!-- !! processed by numpydoc !! -->

<a id="Path.OffsetEdgeLocation"></a>

### *property* Path.OffsetEdgeLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OffsetEdgeLocation.

<!-- !! processed by numpydoc !! -->

<a id="Path.PathCoordinateSystem"></a>

### *property* Path.PathCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PathCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Path.PathType"></a>

### *property* Path.PathType *: [Ansys.Mechanical.DataModel.Enums.PathScopingType](../../../Mechanical/DataModel/Enums/PathScopingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.PathScopingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PathType.

<!-- !! processed by numpydoc !! -->

<a id="Path.Properties"></a>

### *property* Path.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Path.ShowMesh"></a>

### *property* Path.ShowMesh *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowMesh.

<!-- !! processed by numpydoc !! -->

<a id="Path.SnapToMeshNodes"></a>

### *property* Path.SnapToMeshNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SnapToMeshNodes.

<!-- !! processed by numpydoc !! -->

<a id="Path.StartCoordinateSystem"></a>

### *property* Path.StartCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Path.StartXCoordinate"></a>

### *property* Path.StartXCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartXCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Path.StartYCoordinate"></a>

### *property* Path.StartYCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartYCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Path.StartZCoordinate"></a>

### *property* Path.StartZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StartZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="Path.Suppressed"></a>

### *property* Path.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Path.VisibleProperties"></a>

### *property* Path.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Path.Activate"></a>

### Path.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Path.AddComment"></a>

### Path.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Path.AddFigure"></a>

### Path.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Path.AddImage"></a>

### Path.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Path.CopyTo"></a>

### Path.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Path.CreateParameter"></a>

### Path.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Path.Delete"></a>

### Path.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Path.Duplicate"></a>

### Path.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Path.FlipPathOrientatation"></a>

### Path.FlipPathOrientatation()

Flip Path Orientatation

<!-- !! processed by numpydoc !! -->

<a id="Path.GetChildren"></a>

### Path.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Path.GetParameter"></a>

### Path.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Path.GroupAllSimilarChildren"></a>

### Path.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Path.GroupSimilarObjects"></a>

### Path.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Path.PropertyByAPIName"></a>

### Path.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Path.PropertyByName"></a>

### Path.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Path.RemoveParameter"></a>

### Path.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Path.SnapPathToMeshNodes"></a>

### Path.SnapPathToMeshNodes()

Snap path to mesh nodes

<!-- !! processed by numpydoc !! -->

