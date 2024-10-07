# `GenericBoundaryCondition`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a GenericBoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#GenericBoundaryCondition.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#GenericBoundaryCondition.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#GenericBoundaryCondition.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#GenericBoundaryCondition.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#GenericBoundaryCondition.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#GenericBoundaryCondition.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#GenericBoundaryCondition.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#GenericBoundaryCondition.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#GenericBoundaryCondition.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#GenericBoundaryCondition.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#GenericBoundaryCondition.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#GenericBoundaryCondition.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#GenericBoundaryCondition.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#GenericBoundaryCondition.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#GenericBoundaryCondition.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#GenericBoundaryCondition.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#GenericBoundaryCondition.Children)                               | Gets the list of children.                                    |
| [`Comments`](#GenericBoundaryCondition.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#GenericBoundaryCondition.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#GenericBoundaryCondition.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#GenericBoundaryCondition.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#GenericBoundaryCondition.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#GenericBoundaryCondition.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#GenericBoundaryCondition.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#GenericBoundaryCondition.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#GenericBoundaryCondition.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#GenericBoundaryCondition.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="GenericBoundaryCondition.Children"></a>

### *property* GenericBoundaryCondition.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Comments"></a>

### *property* GenericBoundaryCondition.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.DataModelObjectCategory"></a>

### *property* GenericBoundaryCondition.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Figures"></a>

### *property* GenericBoundaryCondition.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Images"></a>

### *property* GenericBoundaryCondition.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.InternalObject"></a>

### *property* GenericBoundaryCondition.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Properties"></a>

### *property* GenericBoundaryCondition.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.ReadOnly"></a>

### *property* GenericBoundaryCondition.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.SharedRefBody"></a>

### *property* GenericBoundaryCondition.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Suppressed"></a>

### *property* GenericBoundaryCondition.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.VisibleProperties"></a>

### *property* GenericBoundaryCondition.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GenericBoundaryCondition.Activate"></a>

### GenericBoundaryCondition.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.AddComment"></a>

### GenericBoundaryCondition.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.AddFigure"></a>

### GenericBoundaryCondition.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.AddImage"></a>

### GenericBoundaryCondition.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.CopyTo"></a>

### GenericBoundaryCondition.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.CreateParameter"></a>

### GenericBoundaryCondition.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Delete"></a>

### GenericBoundaryCondition.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Duplicate"></a>

### GenericBoundaryCondition.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.GetChildren"></a>

### GenericBoundaryCondition.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.GetParameter"></a>

### GenericBoundaryCondition.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.GroupAllSimilarChildren"></a>

### GenericBoundaryCondition.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.GroupSimilarObjects"></a>

### GenericBoundaryCondition.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.PromoteToNamedSelection"></a>

### GenericBoundaryCondition.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.PropertyByAPIName"></a>

### GenericBoundaryCondition.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.PropertyByName"></a>

### GenericBoundaryCondition.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.RemoveParameter"></a>

### GenericBoundaryCondition.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

