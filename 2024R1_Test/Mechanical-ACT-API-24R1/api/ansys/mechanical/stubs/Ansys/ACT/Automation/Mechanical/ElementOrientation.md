# ElementOrientation

<a id="ElementOrientation"></a>

### *class* ElementOrientation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ElementOrientation.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GenerateOrientations`](#ElementOrientation.GenerateOrientations)       | Runs the GenerateOrientations acton.                                              |
| [`Delete`](#ElementOrientation.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                    | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ElementOrientation.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ElementOrientation.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ElementOrientation.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ElementOrientation.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ElementOrientation.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ElementOrientation.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ElementOrientation.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ElementOrientation.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ElementOrientation.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ElementOrientation.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ElementOrientation.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ElementOrientation.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ElementOrientation.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`AxisEdgeOrientation`](#ElementOrientation.AxisEdgeOrientation)                                                    | Gets or sets the AxisEdgeOrientation.                         |
| [`AxisSurfaceOrientation`](#ElementOrientation.AxisSurfaceOrientation)                                              | Gets or sets the AxisSurfaceOrientation.                      |
| [`OrientationGuideDefinedBy`](#ElementOrientation.OrientationGuideDefinedBy)                                        | Gets or sets the OrientationGuideDefinedBy.                   |
| [`Suppressed`](#ElementOrientation.Suppressed)                                                                      | Gets or sets the Suppressed.                                  |
| [`CoordinateSystem`](./../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`BodyLocation`](#ElementOrientation.BodyLocation)                                                                  | Gets or sets the BodyLocation.                                |
| [`EdgeLocation`](#ElementOrientation.EdgeLocation)                                                                  | Gets or sets the EdgeLocation.                                |
| [`SurfaceLocation`](#ElementOrientation.SurfaceLocation)                                                            | Gets or sets the SurfaceLocation.                             |
| [`DataModelObjectCategory`](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#ElementOrientation.Children)                                                                          | Gets the list of children.                                    |
| [`Comments`](#ElementOrientation.Comments)                                                                          | Gets the list of associated comments.                         |
| [`Figures`](#ElementOrientation.Figures)                                                                            | Gets the list of associated figures.                          |
| [`Images`](#ElementOrientation.Images)                                                                              | Gets the list of associated images.                           |
| [`ReadOnly`](#ElementOrientation.ReadOnly)                                                                          | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ElementOrientation.Properties)                                                                      | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ElementOrientation.VisibleProperties)                                                        | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ElementOrientation
```

<a id="property-detail"></a>

## Property detail

<a id="ElementOrientation.InternalObject"></a>

### *property* ElementOrientation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSElementOrientationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.AxisEdgeOrientation"></a>

### *property* ElementOrientation.AxisEdgeOrientation *: [Ansys.Mechanical.DataModel.Enums.ElementOrientationAxisType](./../../../Mechanical/DataModel/Enums/ElementOrientationAxisType.md#ElementOrientationAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AxisEdgeOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.AxisSurfaceOrientation"></a>

### *property* ElementOrientation.AxisSurfaceOrientation *: [Ansys.Mechanical.DataModel.Enums.ElementOrientationAxisType](./../../../Mechanical/DataModel/Enums/ElementOrientationAxisType.md#ElementOrientationAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AxisSurfaceOrientation.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.OrientationGuideDefinedBy"></a>

### *property* ElementOrientation.OrientationGuideDefinedBy *: [Ansys.Mechanical.DataModel.Enums.ElementOrientationGuide](./../../../Mechanical/DataModel/Enums/ElementOrientationGuide.md#ElementOrientationGuide) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OrientationGuideDefinedBy.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Suppressed"></a>

### *property* ElementOrientation.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.CoordinateSystem"></a>

### *property* ElementOrientation.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.BodyLocation"></a>

### *property* ElementOrientation.BodyLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BodyLocation.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.EdgeLocation"></a>

### *property* ElementOrientation.EdgeLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeLocation.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.SurfaceLocation"></a>

### *property* ElementOrientation.SurfaceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SurfaceLocation.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.DataModelObjectCategory"></a>

### *property* ElementOrientation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Children"></a>

### *property* ElementOrientation.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Comments"></a>

### *property* ElementOrientation.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Figures"></a>

### *property* ElementOrientation.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Images"></a>

### *property* ElementOrientation.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.ReadOnly"></a>

### *property* ElementOrientation.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ElementOrientation.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Properties"></a>

### *property* ElementOrientation.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.VisibleProperties"></a>

### *property* ElementOrientation.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElementOrientation.GenerateOrientations"></a>

### ElementOrientation.GenerateOrientations()

Runs the GenerateOrientations acton.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Delete"></a>

### ElementOrientation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GetChildren"></a>

### ElementOrientation.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ElementOrientation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### ElementOrientation.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Activate"></a>

### ElementOrientation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.CopyTo"></a>

### ElementOrientation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.Duplicate"></a>

### ElementOrientation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GroupAllSimilarChildren"></a>

### ElementOrientation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GroupSimilarObjects"></a>

### ElementOrientation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.PropertyByName"></a>

### ElementOrientation.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.PropertyByAPIName"></a>

### ElementOrientation.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.CreateParameter"></a>

### ElementOrientation.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.GetParameter"></a>

### ElementOrientation.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElementOrientation.RemoveParameter"></a>

### ElementOrientation.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
