# `FrictionlessSupport`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.FrictionlessSupport"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.FrictionlessSupport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FrictionlessSupport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#FrictionlessSupport.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#FrictionlessSupport.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#FrictionlessSupport.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#FrictionlessSupport.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#FrictionlessSupport.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#FrictionlessSupport.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#FrictionlessSupport.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#FrictionlessSupport.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#FrictionlessSupport.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#FrictionlessSupport.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#FrictionlessSupport.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FrictionlessSupport.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#FrictionlessSupport.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#FrictionlessSupport.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#FrictionlessSupport.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#FrictionlessSupport.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#FrictionlessSupport.Children)                               | Gets the list of children.                                    |
| [`Comments`](#FrictionlessSupport.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#FrictionlessSupport.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#FrictionlessSupport.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#FrictionlessSupport.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#FrictionlessSupport.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#FrictionlessSupport.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#FrictionlessSupport.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#FrictionlessSupport.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#FrictionlessSupport.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#FrictionlessSupport.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#FrictionlessSupport.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FrictionlessSupport.Children"></a>

### *property* FrictionlessSupport.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.Comments"></a>

### *property* FrictionlessSupport.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.DataModelObjectCategory"></a>

### *property* FrictionlessSupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.Figures"></a>

### *property* FrictionlessSupport.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.Images"></a>

### *property* FrictionlessSupport.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.InternalObject"></a>

### *property* FrictionlessSupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.Location"></a>

### *property* FrictionlessSupport.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.Properties"></a>

### *property* FrictionlessSupport.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.ReadOnly"></a>

### *property* FrictionlessSupport.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.SharedRefBody"></a>

### *property* FrictionlessSupport.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.Suppressed"></a>

### *property* FrictionlessSupport.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.VisibleProperties"></a>

### *property* FrictionlessSupport.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FrictionlessSupport.Activate"></a>

### FrictionlessSupport.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.AddComment"></a>

### FrictionlessSupport.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.AddFigure"></a>

### FrictionlessSupport.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.AddImage"></a>

### FrictionlessSupport.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.CopyTo"></a>

### FrictionlessSupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.CreateParameter"></a>

### FrictionlessSupport.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.Delete"></a>

### FrictionlessSupport.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.Duplicate"></a>

### FrictionlessSupport.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.GetChildren"></a>

### FrictionlessSupport.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.GetParameter"></a>

### FrictionlessSupport.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.GroupAllSimilarChildren"></a>

### FrictionlessSupport.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.GroupSimilarObjects"></a>

### FrictionlessSupport.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.PromoteToNamedSelection"></a>

### FrictionlessSupport.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.PropertyByAPIName"></a>

### FrictionlessSupport.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.PropertyByName"></a>

### FrictionlessSupport.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FrictionlessSupport.RemoveParameter"></a>

### FrictionlessSupport.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

