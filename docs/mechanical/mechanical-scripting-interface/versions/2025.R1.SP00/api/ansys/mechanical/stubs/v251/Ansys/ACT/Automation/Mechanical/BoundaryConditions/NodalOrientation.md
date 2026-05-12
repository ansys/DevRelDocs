# `NodalOrientation`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.NodalOrientation"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.NodalOrientation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NodalOrientation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#NodalOrientation.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#NodalOrientation.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddImage`](#NodalOrientation.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#NodalOrientation.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#NodalOrientation.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#NodalOrientation.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#NodalOrientation.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#NodalOrientation.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#NodalOrientation.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#NodalOrientation.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NodalOrientation.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#NodalOrientation.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#NodalOrientation.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#NodalOrientation.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#NodalOrientation.Children)                               | Gets the list of children.                                    |
| [`Comments`](#NodalOrientation.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#NodalOrientation.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#NodalOrientation.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Images`](#NodalOrientation.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#NodalOrientation.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#NodalOrientation.Location)                               | Gets the Location.                                            |
| [`Properties`](#NodalOrientation.Properties)                           | Gets the list of properties for this object.                  |
| [`Suppressed`](#NodalOrientation.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#NodalOrientation.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="NodalOrientation.Children"></a>

### *property* NodalOrientation.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Comments"></a>

### *property* NodalOrientation.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.CoordinateSystem"></a>

### *property* NodalOrientation.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.DataModelObjectCategory"></a>

### *property* NodalOrientation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Images"></a>

### *property* NodalOrientation.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.InternalObject"></a>

### *property* NodalOrientation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSNodalRotationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Location"></a>

### *property* NodalOrientation.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Properties"></a>

### *property* NodalOrientation.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Suppressed"></a>

### *property* NodalOrientation.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.VisibleProperties"></a>

### *property* NodalOrientation.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NodalOrientation.Activate"></a>

### NodalOrientation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.AddComment"></a>

### NodalOrientation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.AddImage"></a>

### NodalOrientation.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.CopyTo"></a>

### NodalOrientation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.CreateParameter"></a>

### NodalOrientation.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Delete"></a>

### NodalOrientation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.Duplicate"></a>

### NodalOrientation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.GetChildren"></a>

### NodalOrientation.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.GetParameter"></a>

### NodalOrientation.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.GroupAllSimilarChildren"></a>

### NodalOrientation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.GroupSimilarObjects"></a>

### NodalOrientation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.PropertyByAPIName"></a>

### NodalOrientation.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.PropertyByName"></a>

### NodalOrientation.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NodalOrientation.RemoveParameter"></a>

### NodalOrientation.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

