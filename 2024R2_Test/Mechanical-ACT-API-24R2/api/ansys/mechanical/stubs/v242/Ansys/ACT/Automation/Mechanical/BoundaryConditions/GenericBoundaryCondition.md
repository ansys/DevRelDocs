# `GenericBoundaryCondition`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GenericBoundaryCondition

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a GenericBoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](#GenericBoundaryCondition.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#GenericBoundaryCondition.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#GenericBoundaryCondition.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#GenericBoundaryCondition.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#GenericBoundaryCondition.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#GenericBoundaryCondition.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#GenericBoundaryCondition.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#GenericBoundaryCondition.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#GenericBoundaryCondition.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#GenericBoundaryCondition.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#GenericBoundaryCondition.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#GenericBoundaryCondition.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#GenericBoundaryCondition.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#GenericBoundaryCondition.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#GenericBoundaryCondition.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                       | Gets the internal object. For advanced usage only.            |
| [`Suppressed`](#GenericBoundaryCondition.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#GenericBoundaryCondition.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`DataModelObjectCategory`](#GenericBoundaryCondition.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Children`](#GenericBoundaryCondition.Children)                               | Gets the list of children.                                    |
| [`Comments`](#GenericBoundaryCondition.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#GenericBoundaryCondition.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#GenericBoundaryCondition.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#GenericBoundaryCondition.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                       | Gets the internal object. For advanced usage only.            |
| [`Properties`](#GenericBoundaryCondition.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#GenericBoundaryCondition.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="GenericBoundaryCondition.InternalObject"></a>

### *property* GenericBoundaryCondition.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Suppressed"></a>

### *property* GenericBoundaryCondition.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.SharedRefBody"></a>

### *property* GenericBoundaryCondition.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.DataModelObjectCategory"></a>

### *property* GenericBoundaryCondition.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Children"></a>

### *property* GenericBoundaryCondition.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Comments"></a>

### *property* GenericBoundaryCondition.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Figures"></a>

### *property* GenericBoundaryCondition.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Images"></a>

### *property* GenericBoundaryCondition.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.ReadOnly"></a>

### *property* GenericBoundaryCondition.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* GenericBoundaryCondition.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Properties"></a>

### *property* GenericBoundaryCondition.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.VisibleProperties"></a>

### *property* GenericBoundaryCondition.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GenericBoundaryCondition.PromoteToNamedSelection"></a>

### GenericBoundaryCondition.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Delete"></a>

### GenericBoundaryCondition.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.GetChildren"></a>

### GenericBoundaryCondition.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### GenericBoundaryCondition.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Activate"></a>

### GenericBoundaryCondition.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.CopyTo"></a>

### GenericBoundaryCondition.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.Duplicate"></a>

### GenericBoundaryCondition.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.GroupAllSimilarChildren"></a>

### GenericBoundaryCondition.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.GroupSimilarObjects"></a>

### GenericBoundaryCondition.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.PropertyByName"></a>

### GenericBoundaryCondition.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.PropertyByAPIName"></a>

### GenericBoundaryCondition.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.CreateParameter"></a>

### GenericBoundaryCondition.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.GetParameter"></a>

### GenericBoundaryCondition.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GenericBoundaryCondition.RemoveParameter"></a>

### GenericBoundaryCondition.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

