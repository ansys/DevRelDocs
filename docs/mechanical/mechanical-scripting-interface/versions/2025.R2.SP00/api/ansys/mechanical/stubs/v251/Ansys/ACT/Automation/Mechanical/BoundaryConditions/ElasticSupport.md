# `ElasticSupport`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ElasticSupport"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.ElasticSupport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ElasticSupport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ElasticSupport.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ElasticSupport.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ElasticSupport.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ElasticSupport.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ElasticSupport.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ElasticSupport.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ElasticSupport.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ElasticSupport.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ElasticSupport.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ElasticSupport.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ElasticSupport.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ElasticSupport.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#ElasticSupport.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#ElasticSupport.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ElasticSupport.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ElasticSupport.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ElasticSupport.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ElasticSupport.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#ElasticSupport.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ElasticSupport.Figures)                                 | Gets the list of associated figures.                          |
| [`FoundationStiffness`](#ElasticSupport.FoundationStiffness)         | Gets or sets the FoundationStiffness.                         |
| [`Images`](#ElasticSupport.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ElasticSupport.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#ElasticSupport.Location)                               | Gets or sets the Location.                                    |
| [`Properties`](#ElasticSupport.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ElasticSupport.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#ElasticSupport.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#ElasticSupport.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ElasticSupport.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ElasticSupport.Children"></a>

### *property* ElasticSupport.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Comments"></a>

### *property* ElasticSupport.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.DataModelObjectCategory"></a>

### *property* ElasticSupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Figures"></a>

### *property* ElasticSupport.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.FoundationStiffness"></a>

### *property* ElasticSupport.FoundationStiffness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FoundationStiffness.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Images"></a>

### *property* ElasticSupport.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.InternalObject"></a>

### *property* ElasticSupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Location"></a>

### *property* ElasticSupport.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Properties"></a>

### *property* ElasticSupport.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.ReadOnly"></a>

### *property* ElasticSupport.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.SharedRefBody"></a>

### *property* ElasticSupport.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Suppressed"></a>

### *property* ElasticSupport.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.VisibleProperties"></a>

### *property* ElasticSupport.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElasticSupport.Activate"></a>

### ElasticSupport.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.AddComment"></a>

### ElasticSupport.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.AddFigure"></a>

### ElasticSupport.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.AddImage"></a>

### ElasticSupport.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.CopyTo"></a>

### ElasticSupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.CreateParameter"></a>

### ElasticSupport.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Delete"></a>

### ElasticSupport.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Duplicate"></a>

### ElasticSupport.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.GetChildren"></a>

### ElasticSupport.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.GetParameter"></a>

### ElasticSupport.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.GroupAllSimilarChildren"></a>

### ElasticSupport.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.GroupSimilarObjects"></a>

### ElasticSupport.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.PromoteToNamedSelection"></a>

### ElasticSupport.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.PropertyByAPIName"></a>

### ElasticSupport.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.PropertyByName"></a>

### ElasticSupport.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.RemoveParameter"></a>

### ElasticSupport.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

