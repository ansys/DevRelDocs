# `SurfaceCoating`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.SurfaceCoating"></a>

#### *class* Ansys.ACT.Automation.Mechanical.SurfaceCoating

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SurfaceCoating.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#SurfaceCoating.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#SurfaceCoating.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#SurfaceCoating.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#SurfaceCoating.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#SurfaceCoating.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#SurfaceCoating.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#SurfaceCoating.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#SurfaceCoating.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#SurfaceCoating.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#SurfaceCoating.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#SurfaceCoating.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SurfaceCoating.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#SurfaceCoating.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#SurfaceCoating.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#SurfaceCoating.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#SurfaceCoating.Children)                                               | Gets the list of children.                                    |
| [`Comments`](#SurfaceCoating.Comments)                                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#SurfaceCoating.CoordinateSystem)                               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#SurfaceCoating.DataModelObjectCategory)                 | Gets the current DataModelObject’s category.                  |
| [`Figures`](#SurfaceCoating.Figures)                                                 | Gets the list of associated figures.                          |
| [`Images`](#SurfaceCoating.Images)                                                   | Gets the list of associated images.                           |
| [`InternalObject`](#SurfaceCoating.InternalObject)                                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#SurfaceCoating.Location)                                               | Gets or sets the Location.                                    |
| [`Material`](#SurfaceCoating.Material)                                               | Gets or sets the Material.                                    |
| [`Properties`](#SurfaceCoating.Properties)                                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#SurfaceCoating.ReadOnly)                                               | Gets or sets the ReadOnly.                                    |
| [`Suppressed`](#SurfaceCoating.Suppressed)                                           | Gets or sets the Suppressed.                                  |
| [`SurfaceCoatingStiffnessBehavior`](#SurfaceCoating.SurfaceCoatingStiffnessBehavior) | Gets or sets the SurfaceCoatingStiffnessBehavior.             |
| [`Thickness`](#SurfaceCoating.Thickness)                                             | Gets or sets the Thickness.                                   |
| [`VisibleProperties`](#SurfaceCoating.VisibleProperties)                             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="SurfaceCoating.Children"></a>

### *property* SurfaceCoating.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Comments"></a>

### *property* SurfaceCoating.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.CoordinateSystem"></a>

### *property* SurfaceCoating.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.DataModelObjectCategory"></a>

### *property* SurfaceCoating.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Figures"></a>

### *property* SurfaceCoating.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Images"></a>

### *property* SurfaceCoating.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.InternalObject"></a>

### *property* SurfaceCoating.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSurfaceCoatingAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Location"></a>

### *property* SurfaceCoating.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Material"></a>

### *property* SurfaceCoating.Material *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Material.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Properties"></a>

### *property* SurfaceCoating.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.ReadOnly"></a>

### *property* SurfaceCoating.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Suppressed"></a>

### *property* SurfaceCoating.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.SurfaceCoatingStiffnessBehavior"></a>

### *property* SurfaceCoating.SurfaceCoatingStiffnessBehavior *: [Ansys.Mechanical.DataModel.Enums.SurfaceCoatingStiffnessBehavior](../../../Mechanical/DataModel/Enums/SurfaceCoatingStiffnessBehavior.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SurfaceCoatingStiffnessBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SurfaceCoatingStiffnessBehavior.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Thickness"></a>

### *property* SurfaceCoating.Thickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thickness.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.VisibleProperties"></a>

### *property* SurfaceCoating.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SurfaceCoating.Activate"></a>

### SurfaceCoating.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.AddComment"></a>

### SurfaceCoating.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.AddFigure"></a>

### SurfaceCoating.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.AddImage"></a>

### SurfaceCoating.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.CopyTo"></a>

### SurfaceCoating.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.CreateParameter"></a>

### SurfaceCoating.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Delete"></a>

### SurfaceCoating.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.Duplicate"></a>

### SurfaceCoating.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.GetChildren"></a>

### SurfaceCoating.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.GetParameter"></a>

### SurfaceCoating.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.GroupAllSimilarChildren"></a>

### SurfaceCoating.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.GroupSimilarObjects"></a>

### SurfaceCoating.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.PropertyByAPIName"></a>

### SurfaceCoating.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.PropertyByName"></a>

### SurfaceCoating.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SurfaceCoating.RemoveParameter"></a>

### SurfaceCoating.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

