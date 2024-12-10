# `DetonationPoint`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.DetonationPoint"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.DetonationPoint

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a DetonationPoint.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#DetonationPoint.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#DetonationPoint.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#DetonationPoint.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#DetonationPoint.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#DetonationPoint.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#DetonationPoint.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#DetonationPoint.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#DetonationPoint.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#DetonationPoint.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#DetonationPoint.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#DetonationPoint.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#DetonationPoint.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#DetonationPoint.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#DetonationPoint.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#DetonationPoint.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#DetonationPoint.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`BurnInstantaneously`](#DetonationPoint.BurnInstantaneously)         | Gets or sets the BurnInstantaneously.                         |
| [`Children`](#DetonationPoint.Children)                               | Gets the list of children.                                    |
| [`Comments`](#DetonationPoint.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#DetonationPoint.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`DetonationTime`](#DetonationPoint.DetonationTime)                   | Gets or sets the DetonationTime.                              |
| [`Figures`](#DetonationPoint.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#DetonationPoint.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#DetonationPoint.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#DetonationPoint.Location)                               | Gets or sets the Direction.                                   |
| [`Properties`](#DetonationPoint.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#DetonationPoint.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#DetonationPoint.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#DetonationPoint.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#DetonationPoint.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`XCoordinate`](#DetonationPoint.XCoordinate)                         | Gets or sets the XCoordinate.                                 |
| [`YCoordinate`](#DetonationPoint.YCoordinate)                         | Gets or sets the YCoordinate.                                 |
| [`ZCoordinate`](#DetonationPoint.ZCoordinate)                         | Gets or sets the ZCoordinate.                                 |

<a id="property-detail"></a>

## Property detail

<a id="DetonationPoint.BurnInstantaneously"></a>

### *property* DetonationPoint.BurnInstantaneously *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BurnInstantaneously.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.Children"></a>

### *property* DetonationPoint.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.Comments"></a>

### *property* DetonationPoint.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.DataModelObjectCategory"></a>

### *property* DetonationPoint.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.DetonationTime"></a>

### *property* DetonationPoint.DetonationTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DetonationTime.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.Figures"></a>

### *property* DetonationPoint.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.Images"></a>

### *property* DetonationPoint.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.InternalObject"></a>

### *property* DetonationPoint.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.Location"></a>

### *property* DetonationPoint.Location *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.Properties"></a>

### *property* DetonationPoint.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.ReadOnly"></a>

### *property* DetonationPoint.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.SharedRefBody"></a>

### *property* DetonationPoint.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.Suppressed"></a>

### *property* DetonationPoint.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.VisibleProperties"></a>

### *property* DetonationPoint.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.XCoordinate"></a>

### *property* DetonationPoint.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.YCoordinate"></a>

### *property* DetonationPoint.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.ZCoordinate"></a>

### *property* DetonationPoint.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="DetonationPoint.Activate"></a>

### DetonationPoint.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.AddComment"></a>

### DetonationPoint.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.AddFigure"></a>

### DetonationPoint.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.AddImage"></a>

### DetonationPoint.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.CopyTo"></a>

### DetonationPoint.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.CreateParameter"></a>

### DetonationPoint.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.Delete"></a>

### DetonationPoint.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.Duplicate"></a>

### DetonationPoint.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.GetChildren"></a>

### DetonationPoint.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.GetParameter"></a>

### DetonationPoint.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.GroupAllSimilarChildren"></a>

### DetonationPoint.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.GroupSimilarObjects"></a>

### DetonationPoint.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.PromoteToNamedSelection"></a>

### DetonationPoint.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.PropertyByAPIName"></a>

### DetonationPoint.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.PropertyByName"></a>

### DetonationPoint.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="DetonationPoint.RemoveParameter"></a>

### DetonationPoint.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

