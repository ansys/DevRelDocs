# `GenericDelamination`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.GenericDelamination"></a>

#### *class* Ansys.ACT.Automation.Mechanical.GenericDelamination

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a GenericDelamination.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#GenericDelamination.Activate)                               | Activate the current object.                                                      |
| [`AddCommandSnippet`](#GenericDelamination.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`AddComment`](#GenericDelamination.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#GenericDelamination.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#GenericDelamination.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#GenericDelamination.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#GenericDelamination.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#GenericDelamination.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#GenericDelamination.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#GenericDelamination.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#GenericDelamination.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#GenericDelamination.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#GenericDelamination.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#GenericDelamination.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#GenericDelamination.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#GenericDelamination.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#GenericDelamination.Children)                               | Gets the list of children.                                    |
| [`Comments`](#GenericDelamination.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#GenericDelamination.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#GenericDelamination.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#GenericDelamination.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#GenericDelamination.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#GenericDelamination.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#GenericDelamination.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`VisibleProperties`](#GenericDelamination.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="GenericDelamination.Children"></a>

### *property* GenericDelamination.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Comments"></a>

### *property* GenericDelamination.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.DataModelObjectCategory"></a>

### *property* GenericDelamination.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Figures"></a>

### *property* GenericDelamination.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Images"></a>

### *property* GenericDelamination.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.InternalObject"></a>

### *property* GenericDelamination.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSDelaminationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Properties"></a>

### *property* GenericDelamination.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.ReadOnly"></a>

### *property* GenericDelamination.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.VisibleProperties"></a>

### *property* GenericDelamination.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GenericDelamination.Activate"></a>

### GenericDelamination.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.AddCommandSnippet"></a>

### GenericDelamination.AddCommandSnippet()

Creates a new CommandSnippet

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

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.CopyTo"></a>

### GenericDelamination.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.CreateParameter"></a>

### GenericDelamination.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Delete"></a>

### GenericDelamination.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.Duplicate"></a>

### GenericDelamination.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.GetChildren"></a>

### GenericDelamination.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.GetParameter"></a>

### GenericDelamination.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.GroupAllSimilarChildren"></a>

### GenericDelamination.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.GroupSimilarObjects"></a>

### GenericDelamination.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.PropertyByAPIName"></a>

### GenericDelamination.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.PropertyByName"></a>

### GenericDelamination.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GenericDelamination.RemoveParameter"></a>

### GenericDelamination.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

