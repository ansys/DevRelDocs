# `MorphingRegion`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MorphingRegion"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MorphingRegion

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MorphingRegion.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MorphingRegion.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#MorphingRegion.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MorphingRegion.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MorphingRegion.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#MorphingRegion.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MorphingRegion.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#MorphingRegion.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MorphingRegion.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#MorphingRegion.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MorphingRegion.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MorphingRegion.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MorphingRegion.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#MorphingRegion.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MorphingRegion.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MorphingRegion.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------|
| [`BaseFrequency`](#MorphingRegion.BaseFrequency)                     | Gets or sets the BaseFrequency.                               |
| [`Children`](#MorphingRegion.Children)                               | Gets the list of children.                                    |
| [`Comments`](#MorphingRegion.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#MorphingRegion.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`DisplayMesh`](#MorphingRegion.DisplayMesh)                         | Gets or sets the DisplayMesh.                                 |
| [`Figures`](#MorphingRegion.Figures)                                 | Gets the list of associated figures.                          |
| [`FixedLocation`](#MorphingRegion.FixedLocation)                     | Gets or sets the FixedLocation.                               |
| [`Images`](#MorphingRegion.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#MorphingRegion.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`MaximumFrequency`](#MorphingRegion.MaximumFrequency)               | Gets or sets the MaximumFrequency.                            |
| [`MinimumFrequency`](#MorphingRegion.MinimumFrequency)               | Gets or sets the MinimumFrequency.                            |
| [`MorphingFrequency`](#MorphingRegion.MorphingFrequency)             | Gets or sets the MorphingFrequency.                           |
| [`MorphingIntervals`](#MorphingRegion.MorphingIntervals)             | Gets or sets the MorphingIntervals.                           |
| [`MovingLocation`](#MorphingRegion.MovingLocation)                   | Gets or sets the MovingLocation.                              |
| [`Properties`](#MorphingRegion.Properties)                           | Gets the list of properties for this object.                  |
| [`RegionLocation`](#MorphingRegion.RegionLocation)                   | Gets or sets the RegionLocation.                              |
| [`Suppressed`](#MorphingRegion.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`Thickness`](#MorphingRegion.Thickness)                             | Gets or sets the Thickness .                                  |
| [`VisibleProperties`](#MorphingRegion.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MorphingRegion.BaseFrequency"></a>

### *property* MorphingRegion.BaseFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BaseFrequency.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Children"></a>

### *property* MorphingRegion.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Comments"></a>

### *property* MorphingRegion.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.DataModelObjectCategory"></a>

### *property* MorphingRegion.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.DisplayMesh"></a>

### *property* MorphingRegion.DisplayMesh *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayMesh.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Figures"></a>

### *property* MorphingRegion.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.FixedLocation"></a>

### *property* MorphingRegion.FixedLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FixedLocation.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Images"></a>

### *property* MorphingRegion.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.InternalObject"></a>

### *property* MorphingRegion.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMorphingRegionAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.MaximumFrequency"></a>

### *property* MorphingRegion.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.MinimumFrequency"></a>

### *property* MorphingRegion.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.MorphingFrequency"></a>

### *property* MorphingRegion.MorphingFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MorphingFrequency.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.MorphingIntervals"></a>

### *property* MorphingRegion.MorphingIntervals *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MorphingIntervals.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.MovingLocation"></a>

### *property* MorphingRegion.MovingLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MovingLocation.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Properties"></a>

### *property* MorphingRegion.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.RegionLocation"></a>

### *property* MorphingRegion.RegionLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RegionLocation.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Suppressed"></a>

### *property* MorphingRegion.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Thickness"></a>

### *property* MorphingRegion.Thickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Thickness .

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.VisibleProperties"></a>

### *property* MorphingRegion.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MorphingRegion.Activate"></a>

### MorphingRegion.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.AddComment"></a>

### MorphingRegion.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.AddFigure"></a>

### MorphingRegion.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.AddImage"></a>

### MorphingRegion.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.CopyTo"></a>

### MorphingRegion.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.CreateParameter"></a>

### MorphingRegion.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Delete"></a>

### MorphingRegion.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.Duplicate"></a>

### MorphingRegion.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GetChildren"></a>

### MorphingRegion.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GetParameter"></a>

### MorphingRegion.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GroupAllSimilarChildren"></a>

### MorphingRegion.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.GroupSimilarObjects"></a>

### MorphingRegion.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.PropertyByAPIName"></a>

### MorphingRegion.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.PropertyByName"></a>

### MorphingRegion.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegion.RemoveParameter"></a>

### MorphingRegion.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

