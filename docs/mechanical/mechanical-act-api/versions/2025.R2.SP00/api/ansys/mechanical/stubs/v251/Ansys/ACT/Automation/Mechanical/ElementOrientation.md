# `ElementOrientation`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.ElementOrientation"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ElementOrientation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ElementOrientation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ElementOrientation.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ElementOrientation.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ElementOrientation.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ElementOrientation.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ElementOrientation.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ElementOrientation.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ElementOrientation.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ElementOrientation.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GenerateOrientations`](#ElementOrientation.GenerateOrientations)       | Runs the GenerateOrientations action.                                             |
| [`GetChildren`](#ElementOrientation.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ElementOrientation.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ElementOrientation.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ElementOrientation.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ElementOrientation.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ElementOrientation.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ElementOrientation.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AxisEdgeOrientation`](#ElementOrientation.AxisEdgeOrientation)             | Gets or sets the AxisEdgeOrientation.                         |
| [`AxisSurfaceOrientation`](#ElementOrientation.AxisSurfaceOrientation)       | Gets or sets the AxisSurfaceOrientation.                      |
| [`BodyLocation`](#ElementOrientation.BodyLocation)                           | Gets or sets the BodyLocation.                                |
| [`Children`](#ElementOrientation.Children)                                   | Gets the list of children.                                    |
| [`Comments`](#ElementOrientation.Comments)                                   | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#ElementOrientation.CoordinateSystem)                   | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#ElementOrientation.DataModelObjectCategory)     | Gets the current DataModelObject’s category.                  |
| [`EdgeLocation`](#ElementOrientation.EdgeLocation)                           | Gets or sets the EdgeLocation.                                |
| [`Figures`](#ElementOrientation.Figures)                                     | Gets the list of associated figures.                          |
| [`Images`](#ElementOrientation.Images)                                       | Gets the list of associated images.                           |
| [`InternalObject`](#ElementOrientation.InternalObject)                       | Gets the internal object. For advanced usage only.            |
| [`OrientationGuideDefinedBy`](#ElementOrientation.OrientationGuideDefinedBy) | Gets or sets the OrientationGuideDefinedBy.                   |
| [`Properties`](#ElementOrientation.Properties)                               | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ElementOrientation.ReadOnly)                                   | Gets or sets the ReadOnly.                                    |
| [`Suppressed`](#ElementOrientation.Suppressed)                               | Gets or sets the Suppressed.                                  |
| [`SurfaceLocation`](#ElementOrientation.SurfaceLocation)                     | Gets or sets the SurfaceLocation.                             |
| [`VisibleProperties`](#ElementOrientation.VisibleProperties)                 | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ElementOrientation.AxisEdgeOrientation"></a>

### *property* ElementOrientation.AxisEdgeOrientation *: [Ansys.Mechanical.DataModel.Enums.ElementOrientationAxisType](../../../Mechanical/DataModel/Enums/ElementOrientationAxisType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ElementOrientationAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AxisEdgeOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.AxisSurfaceOrientation"></a>

### *property* ElementOrientation.AxisSurfaceOrientation *: [Ansys.Mechanical.DataModel.Enums.ElementOrientationAxisType](../../../Mechanical/DataModel/Enums/ElementOrientationAxisType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ElementOrientationAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AxisSurfaceOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.BodyLocation"></a>

### *property* ElementOrientation.BodyLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BodyLocation.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Children"></a>

### *property* ElementOrientation.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Comments"></a>

### *property* ElementOrientation.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.CoordinateSystem"></a>

### *property* ElementOrientation.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.DataModelObjectCategory"></a>

### *property* ElementOrientation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.EdgeLocation"></a>

### *property* ElementOrientation.EdgeLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeLocation.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Figures"></a>

### *property* ElementOrientation.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Images"></a>

### *property* ElementOrientation.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.InternalObject"></a>

### *property* ElementOrientation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSElementOrientationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.OrientationGuideDefinedBy"></a>

### *property* ElementOrientation.OrientationGuideDefinedBy *: [Ansys.Mechanical.DataModel.Enums.ElementOrientationGuide](../../../Mechanical/DataModel/Enums/ElementOrientationGuide.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ElementOrientationGuide) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OrientationGuideDefinedBy.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Properties"></a>

### *property* ElementOrientation.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.ReadOnly"></a>

### *property* ElementOrientation.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Suppressed"></a>

### *property* ElementOrientation.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.SurfaceLocation"></a>

### *property* ElementOrientation.SurfaceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SurfaceLocation.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.VisibleProperties"></a>

### *property* ElementOrientation.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElementOrientation.Activate"></a>

### ElementOrientation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.AddComment"></a>

### ElementOrientation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.AddFigure"></a>

### ElementOrientation.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.AddImage"></a>

### ElementOrientation.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.CopyTo"></a>

### ElementOrientation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.CreateParameter"></a>

### ElementOrientation.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Delete"></a>

### ElementOrientation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Duplicate"></a>

### ElementOrientation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GenerateOrientations"></a>

### ElementOrientation.GenerateOrientations()

Runs the GenerateOrientations action.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GetChildren"></a>

### ElementOrientation.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GetParameter"></a>

### ElementOrientation.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GroupAllSimilarChildren"></a>

### ElementOrientation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GroupSimilarObjects"></a>

### ElementOrientation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.PropertyByAPIName"></a>

### ElementOrientation.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.PropertyByName"></a>

### ElementOrientation.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.RemoveParameter"></a>

### ElementOrientation.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

