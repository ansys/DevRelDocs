# `CompositeSamplingPoint`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeSamplingPoint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeSamplingPoint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CompositeSamplingPoint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#CompositeSamplingPoint.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#CompositeSamplingPoint.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#CompositeSamplingPoint.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#CompositeSamplingPoint.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#CompositeSamplingPoint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#CompositeSamplingPoint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#CompositeSamplingPoint.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#CompositeSamplingPoint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#CompositeSamplingPoint.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#CompositeSamplingPoint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#CompositeSamplingPoint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#CompositeSamplingPoint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#CompositeSamplingPoint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#CompositeSamplingPoint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#CompositeSamplingPoint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#CompositeSamplingPoint.Children)                               | Gets the list of children.                                    |
| [`Comments`](#CompositeSamplingPoint.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CompositeSamplingPoint.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#CompositeSamplingPoint.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#CompositeSamplingPoint.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#CompositeSamplingPoint.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#CompositeSamplingPoint.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#CompositeSamplingPoint.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#CompositeSamplingPoint.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CompositeSamplingPoint.Children"></a>

### *property* CompositeSamplingPoint.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Comments"></a>

### *property* CompositeSamplingPoint.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.DataModelObjectCategory"></a>

### *property* CompositeSamplingPoint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Figures"></a>

### *property* CompositeSamplingPoint.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Images"></a>

### *property* CompositeSamplingPoint.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.InternalObject"></a>

### *property* CompositeSamplingPoint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCompositeSamplingPointResultAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Location"></a>

### *property* CompositeSamplingPoint.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Properties"></a>

### *property* CompositeSamplingPoint.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.VisibleProperties"></a>

### *property* CompositeSamplingPoint.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CompositeSamplingPoint.Activate"></a>

### CompositeSamplingPoint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.AddComment"></a>

### CompositeSamplingPoint.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.AddFigure"></a>

### CompositeSamplingPoint.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.AddImage"></a>

### CompositeSamplingPoint.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.CopyTo"></a>

### CompositeSamplingPoint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.CreateParameter"></a>

### CompositeSamplingPoint.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Delete"></a>

### CompositeSamplingPoint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.Duplicate"></a>

### CompositeSamplingPoint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.GetChildren"></a>

### CompositeSamplingPoint.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.GetParameter"></a>

### CompositeSamplingPoint.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.GroupAllSimilarChildren"></a>

### CompositeSamplingPoint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.GroupSimilarObjects"></a>

### CompositeSamplingPoint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.PropertyByAPIName"></a>

### CompositeSamplingPoint.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.PropertyByName"></a>

### CompositeSamplingPoint.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CompositeSamplingPoint.RemoveParameter"></a>

### CompositeSamplingPoint.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

