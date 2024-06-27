<!-- vale off -->

<a id="elasticsupport"></a>

# `ElasticSupport`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ElasticSupport"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ElasticSupport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ElasticSupport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](#ElasticSupport.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#ElasticSupport.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ElasticSupport.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#ElasticSupport.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#ElasticSupport.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#ElasticSupport.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#ElasticSupport.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ElasticSupport.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ElasticSupport.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ElasticSupport.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ElasticSupport.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ElasticSupport.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#ElasticSupport.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ElasticSupport.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ElasticSupport.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                             | Gets the internal object. For advanced usage only.            |
| [`FoundationStiffness`](#ElasticSupport.FoundationStiffness)         | Gets or sets the FoundationStiffness.                         |
| [`Location`](#ElasticSupport.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#ElasticSupport.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#ElasticSupport.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#ElasticSupport.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Children`](#ElasticSupport.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ElasticSupport.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#ElasticSupport.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ElasticSupport.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#ElasticSupport.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                             | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ElasticSupport.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ElasticSupport.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ElasticSupport.InternalObject"></a>

### *property* ElasticSupport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.FoundationStiffness"></a>

### *property* ElasticSupport.FoundationStiffness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FoundationStiffness.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Location"></a>

### *property* ElasticSupport.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.DataModelObjectCategory"></a>

### *property* ElasticSupport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Suppressed"></a>

### *property* ElasticSupport.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.SharedRefBody"></a>

### *property* ElasticSupport.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Children"></a>

### *property* ElasticSupport.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Comments"></a>

### *property* ElasticSupport.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Figures"></a>

### *property* ElasticSupport.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Images"></a>

### *property* ElasticSupport.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.ReadOnly"></a>

### *property* ElasticSupport.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ElasticSupport.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Properties"></a>

### *property* ElasticSupport.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.VisibleProperties"></a>

### *property* ElasticSupport.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElasticSupport.PromoteToNamedSelection"></a>

### ElasticSupport.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Delete"></a>

### ElasticSupport.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.GetChildren"></a>

### ElasticSupport.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ElasticSupport.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### ElasticSupport.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Activate"></a>

### ElasticSupport.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.CopyTo"></a>

### ElasticSupport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.Duplicate"></a>

### ElasticSupport.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.GroupAllSimilarChildren"></a>

### ElasticSupport.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.GroupSimilarObjects"></a>

### ElasticSupport.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.PropertyByName"></a>

### ElasticSupport.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.PropertyByAPIName"></a>

### ElasticSupport.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.CreateParameter"></a>

### ElasticSupport.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.GetParameter"></a>

### ElasticSupport.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElasticSupport.RemoveParameter"></a>

### ElasticSupport.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
