<!-- vale off -->

<a id="fixedsupport"></a>

# `FixedSupport`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.FixedSupport"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.FixedSupport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a FixedSupport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](#FixedSupport.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#FixedSupport.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#FixedSupport.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#FixedSupport.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#FixedSupport.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#FixedSupport.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#FixedSupport.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#FixedSupport.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#FixedSupport.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#FixedSupport.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#FixedSupport.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#FixedSupport.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#FixedSupport.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#FixedSupport.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#FixedSupport.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                           | Gets the internal object. For advanced usage only.            |
| [`Location`](#FixedSupport.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#FixedSupport.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#FixedSupport.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#FixedSupport.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Children`](#FixedSupport.Children)                               | Gets the list of children.                                    |
| [`Comments`](#FixedSupport.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#FixedSupport.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#FixedSupport.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#FixedSupport.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                           | Gets the internal object. For advanced usage only.            |
| [`Properties`](#FixedSupport.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#FixedSupport.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="FixedSupport.InternalObject"></a>

### *property* FixedSupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Location"></a>

### *property* FixedSupport.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.DataModelObjectCategory"></a>

### *property* FixedSupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Suppressed"></a>

### *property* FixedSupport.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.SharedRefBody"></a>

### *property* FixedSupport.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Children"></a>

### *property* FixedSupport.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Comments"></a>

### *property* FixedSupport.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Figures"></a>

### *property* FixedSupport.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Images"></a>

### *property* FixedSupport.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.ReadOnly"></a>

### *property* FixedSupport.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* FixedSupport.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Properties"></a>

### *property* FixedSupport.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.VisibleProperties"></a>

### *property* FixedSupport.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FixedSupport.PromoteToNamedSelection"></a>

### FixedSupport.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Delete"></a>

### FixedSupport.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.GetChildren"></a>

### FixedSupport.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### FixedSupport.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.AddComment"></a>

### FixedSupport.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.AddFigure"></a>

### FixedSupport.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.AddImage"></a>

### FixedSupport.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Activate"></a>

### FixedSupport.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.CopyTo"></a>

### FixedSupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.Duplicate"></a>

### FixedSupport.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.GroupAllSimilarChildren"></a>

### FixedSupport.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.GroupSimilarObjects"></a>

### FixedSupport.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.PropertyByName"></a>

### FixedSupport.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.PropertyByAPIName"></a>

### FixedSupport.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.CreateParameter"></a>

### FixedSupport.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.GetParameter"></a>

### FixedSupport.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FixedSupport.RemoveParameter"></a>

### FixedSupport.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
