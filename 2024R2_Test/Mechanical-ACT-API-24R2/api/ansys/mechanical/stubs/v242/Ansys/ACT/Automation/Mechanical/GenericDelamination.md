# `GenericDelamination`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.GenericDelamination

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a GenericDelamination.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddCommandSnippet`](#GenericDelamination.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`Delete`](#GenericDelamination.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                     | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#GenericDelamination.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#GenericDelamination.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#GenericDelamination.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#GenericDelamination.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#GenericDelamination.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#GenericDelamination.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#GenericDelamination.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#GenericDelamination.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#GenericDelamination.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#GenericDelamination.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#GenericDelamination.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#GenericDelamination.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#GenericDelamination.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                  | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](#GenericDelamination.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#GenericDelamination.Children)                               | Gets the list of children.                                    |
| [`Comments`](#GenericDelamination.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#GenericDelamination.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#GenericDelamination.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#GenericDelamination.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#GenericDelamination.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#GenericDelamination.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="GenericDelamination.InternalObject"></a>

### *property* GenericDelamination.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSDelaminationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.DataModelObjectCategory"></a>

### *property* GenericDelamination.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Children"></a>

### *property* GenericDelamination.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Comments"></a>

### *property* GenericDelamination.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Figures"></a>

### *property* GenericDelamination.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Images"></a>

### *property* GenericDelamination.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.ReadOnly"></a>

### *property* GenericDelamination.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* GenericDelamination.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Properties"></a>

### *property* GenericDelamination.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.VisibleProperties"></a>

### *property* GenericDelamination.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GenericDelamination.AddCommandSnippet"></a>

### GenericDelamination.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Delete"></a>

### GenericDelamination.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.GetChildren"></a>

### GenericDelamination.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### GenericDelamination.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.AddComment"></a>

### GenericDelamination.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.AddFigure"></a>

### GenericDelamination.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.AddImage"></a>

### GenericDelamination.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Activate"></a>

### GenericDelamination.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.CopyTo"></a>

### GenericDelamination.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Duplicate"></a>

### GenericDelamination.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.GroupAllSimilarChildren"></a>

### GenericDelamination.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.GroupSimilarObjects"></a>

### GenericDelamination.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.PropertyByName"></a>

### GenericDelamination.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.PropertyByAPIName"></a>

### GenericDelamination.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.CreateParameter"></a>

### GenericDelamination.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.GetParameter"></a>

### GenericDelamination.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.RemoveParameter"></a>

### GenericDelamination.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

