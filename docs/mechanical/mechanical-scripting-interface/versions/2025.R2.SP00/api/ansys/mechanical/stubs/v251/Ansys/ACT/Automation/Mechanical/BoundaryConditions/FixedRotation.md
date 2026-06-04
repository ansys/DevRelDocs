# `FixedRotation`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.FixedRotation"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.FixedRotation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FixedRotation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#FixedRotation.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#FixedRotation.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FixedRotation.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FixedRotation.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#FixedRotation.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#FixedRotation.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#FixedRotation.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#FixedRotation.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#FixedRotation.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#FixedRotation.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#FixedRotation.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FixedRotation.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#FixedRotation.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#FixedRotation.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#FixedRotation.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#FixedRotation.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#FixedRotation.Children)                               | Gets the list of children.                                    |
| [`Comments`](#FixedRotation.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#FixedRotation.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#FixedRotation.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#FixedRotation.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#FixedRotation.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#FixedRotation.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#FixedRotation.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#FixedRotation.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#FixedRotation.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`RotationX`](#FixedRotation.RotationX)                             | Gets or sets the RotationX.                                   |
| [`RotationY`](#FixedRotation.RotationY)                             | Gets or sets the RotationY.                                   |
| [`RotationZ`](#FixedRotation.RotationZ)                             | Gets or sets the RotationZ.                                   |
| [`SharedRefBody`](#FixedRotation.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#FixedRotation.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#FixedRotation.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FixedRotation.Children"></a>

### *property* FixedRotation.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Comments"></a>

### *property* FixedRotation.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.CoordinateSystem"></a>

### *property* FixedRotation.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.DataModelObjectCategory"></a>

### *property* FixedRotation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Figures"></a>

### *property* FixedRotation.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Images"></a>

### *property* FixedRotation.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.InternalObject"></a>

### *property* FixedRotation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Location"></a>

### *property* FixedRotation.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Properties"></a>

### *property* FixedRotation.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.ReadOnly"></a>

### *property* FixedRotation.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.RotationX"></a>

### *property* FixedRotation.RotationX *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationX.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.RotationY"></a>

### *property* FixedRotation.RotationY *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationY.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.RotationZ"></a>

### *property* FixedRotation.RotationZ *: [Ansys.Mechanical.DataModel.Enums.FixedOrFree](../../../../Mechanical/DataModel/Enums/FixedOrFree.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.FixedOrFree) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationZ.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.SharedRefBody"></a>

### *property* FixedRotation.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Suppressed"></a>

### *property* FixedRotation.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.VisibleProperties"></a>

### *property* FixedRotation.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FixedRotation.Activate"></a>

### FixedRotation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.AddComment"></a>

### FixedRotation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.AddFigure"></a>

### FixedRotation.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.AddImage"></a>

### FixedRotation.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.CopyTo"></a>

### FixedRotation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.CreateParameter"></a>

### FixedRotation.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Delete"></a>

### FixedRotation.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.Duplicate"></a>

### FixedRotation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.GetChildren"></a>

### FixedRotation.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.GetParameter"></a>

### FixedRotation.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.GroupAllSimilarChildren"></a>

### FixedRotation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.GroupSimilarObjects"></a>

### FixedRotation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.PromoteToNamedSelection"></a>

### FixedRotation.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.PropertyByAPIName"></a>

### FixedRotation.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.PropertyByName"></a>

### FixedRotation.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FixedRotation.RemoveParameter"></a>

### FixedRotation.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

