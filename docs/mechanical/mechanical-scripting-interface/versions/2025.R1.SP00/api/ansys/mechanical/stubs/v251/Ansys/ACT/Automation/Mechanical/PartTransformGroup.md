# `PartTransformGroup`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.PartTransformGroup"></a>

#### *class* Ansys.ACT.Automation.Mechanical.PartTransformGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PartTransformGroup.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#PartTransformGroup.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#PartTransformGroup.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PartTransformGroup.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PartTransformGroup.AddImage)                               | Creates a new child Image.                                                        |
| [`AddPartTransform`](#PartTransformGroup.AddPartTransform)               | Creates a new PartTransform                                                       |
| [`CopyTo`](#PartTransformGroup.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#PartTransformGroup.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#PartTransformGroup.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#PartTransformGroup.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#PartTransformGroup.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#PartTransformGroup.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#PartTransformGroup.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PartTransformGroup.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#PartTransformGroup.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#PartTransformGroup.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#PartTransformGroup.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`TransformGeometry`](#PartTransformGroup.TransformGeometry)             | TransformGeometry method.                                                         |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#PartTransformGroup.Children)                               | Gets the list of children.                                    |
| [`Comments`](#PartTransformGroup.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#PartTransformGroup.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#PartTransformGroup.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#PartTransformGroup.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#PartTransformGroup.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#PartTransformGroup.Properties)                           | Gets the list of properties for this object.                  |
| [`RegenerateContacts`](#PartTransformGroup.RegenerateContacts)           | Gets or sets the RegenerateContacts.                          |
| [`Suppressed`](#PartTransformGroup.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`TransformMesh`](#PartTransformGroup.TransformMesh)                     | Gets or sets the TransformMesh.                               |
| [`VisibleProperties`](#PartTransformGroup.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PartTransformGroup.Children"></a>

### *property* PartTransformGroup.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.Comments"></a>

### *property* PartTransformGroup.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.DataModelObjectCategory"></a>

### *property* PartTransformGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.Figures"></a>

### *property* PartTransformGroup.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.Images"></a>

### *property* PartTransformGroup.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.InternalObject"></a>

### *property* PartTransformGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPartTransformGroupAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.Properties"></a>

### *property* PartTransformGroup.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.RegenerateContacts"></a>

### *property* PartTransformGroup.RegenerateContacts *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RegenerateContacts.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.Suppressed"></a>

### *property* PartTransformGroup.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.TransformMesh"></a>

### *property* PartTransformGroup.TransformMesh *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransformMesh.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.VisibleProperties"></a>

### *property* PartTransformGroup.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PartTransformGroup.Activate"></a>

### PartTransformGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.AddComment"></a>

### PartTransformGroup.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.AddFigure"></a>

### PartTransformGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.AddImage"></a>

### PartTransformGroup.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.AddPartTransform"></a>

### PartTransformGroup.AddPartTransform()

Creates a new PartTransform

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.CopyTo"></a>

### PartTransformGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.CreateParameter"></a>

### PartTransformGroup.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.Delete"></a>

### PartTransformGroup.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.Duplicate"></a>

### PartTransformGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.GetChildren"></a>

### PartTransformGroup.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.GetParameter"></a>

### PartTransformGroup.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.GroupAllSimilarChildren"></a>

### PartTransformGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.GroupSimilarObjects"></a>

### PartTransformGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.PropertyByAPIName"></a>

### PartTransformGroup.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.PropertyByName"></a>

### PartTransformGroup.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.RemoveParameter"></a>

### PartTransformGroup.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PartTransformGroup.TransformGeometry"></a>

### PartTransformGroup.TransformGeometry()

TransformGeometry method.

<!-- !! processed by numpydoc !! -->

