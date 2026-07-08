# `EndRelease`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.EndRelease"></a>

#### *class* Ansys.ACT.Automation.Mechanical.EndRelease

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a EndRelease.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#EndRelease.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#EndRelease.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#EndRelease.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#EndRelease.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#EndRelease.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#EndRelease.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#EndRelease.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#EndRelease.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#EndRelease.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#EndRelease.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#EndRelease.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EndRelease.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#EndRelease.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#EndRelease.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#EndRelease.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------|---------------------------------------------------------------|
| [`Behavior`](#EndRelease.Behavior)                               | Gets or sets the Behavior.                                    |
| [`Children`](#EndRelease.Children)                               | Gets the list of children.                                    |
| [`Comments`](#EndRelease.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#EndRelease.CoordinateSystem)               | Gets or sets the Coordinate System.                           |
| [`DataModelObjectCategory`](#EndRelease.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`EdgeLocation`](#EndRelease.EdgeLocation)                       | Gets or sets the EdgeLocation.                                |
| [`Figures`](#EndRelease.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#EndRelease.Images)                                   | Gets the list of associated images.                           |
| [`IndependentEdges`](#EndRelease.IndependentEdges)               | Gets or sets the IndependentEdges.                            |
| [`InternalObject`](#EndRelease.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#EndRelease.Properties)                           | Gets the list of properties for this object.                  |
| [`RotationX`](#EndRelease.RotationX)                             | Gets or sets the RotationX.                                   |
| [`RotationY`](#EndRelease.RotationY)                             | Gets or sets the RotationY.                                   |
| [`RotationZ`](#EndRelease.RotationZ)                             | Gets or sets the RotationZ.                                   |
| [`Suppressed`](#EndRelease.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`TranslationX`](#EndRelease.TranslationX)                       | Gets or sets the TranslationX.                                |
| [`TranslationY`](#EndRelease.TranslationY)                       | Gets or sets the TranslationY.                                |
| [`TranslationZ`](#EndRelease.TranslationZ)                       | Gets or sets the TranslationZ.                                |
| [`VertexLocation`](#EndRelease.VertexLocation)                   | Gets or sets the VertexLocation.                              |
| [`VisibleProperties`](#EndRelease.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="EndRelease.Behavior"></a>

### *property* EndRelease.Behavior *: [Ansys.Mechanical.DataModel.Enums.BeamEndReleaseBehavior](../../../Mechanical/DataModel/Enums/BeamEndReleaseBehavior.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.BeamEndReleaseBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.Children"></a>

### *property* EndRelease.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.Comments"></a>

### *property* EndRelease.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.CoordinateSystem"></a>

### *property* EndRelease.CoordinateSystem *: Ansys.Mechanical.DataModel.Interfaces.ICoordinateSystemSelection | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Coordinate System.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.DataModelObjectCategory"></a>

### *property* EndRelease.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.EdgeLocation"></a>

### *property* EndRelease.EdgeLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeLocation.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.Figures"></a>

### *property* EndRelease.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.Images"></a>

### *property* EndRelease.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.IndependentEdges"></a>

### *property* EndRelease.IndependentEdges *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentEdges.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.InternalObject"></a>

### *property* EndRelease.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSBeamEndReleaseAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.Properties"></a>

### *property* EndRelease.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.RotationX"></a>

### *property* EndRelease.RotationX *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationX.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.RotationY"></a>

### *property* EndRelease.RotationY *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationY.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.RotationZ"></a>

### *property* EndRelease.RotationZ *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationZ.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.Suppressed"></a>

### *property* EndRelease.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.TranslationX"></a>

### *property* EndRelease.TranslationX *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslationX.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.TranslationY"></a>

### *property* EndRelease.TranslationY *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslationY.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.TranslationZ"></a>

### *property* EndRelease.TranslationZ *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TranslationZ.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.VertexLocation"></a>

### *property* EndRelease.VertexLocation *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VertexLocation.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.VisibleProperties"></a>

### *property* EndRelease.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EndRelease.Activate"></a>

### EndRelease.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.AddComment"></a>

### EndRelease.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.AddFigure"></a>

### EndRelease.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.AddImage"></a>

### EndRelease.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.CopyTo"></a>

### EndRelease.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.CreateParameter"></a>

### EndRelease.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.Delete"></a>

### EndRelease.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.Duplicate"></a>

### EndRelease.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.GetChildren"></a>

### EndRelease.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.GetParameter"></a>

### EndRelease.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.GroupAllSimilarChildren"></a>

### EndRelease.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.GroupSimilarObjects"></a>

### EndRelease.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.PropertyByAPIName"></a>

### EndRelease.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.PropertyByName"></a>

### EndRelease.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EndRelease.RemoveParameter"></a>

### EndRelease.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

