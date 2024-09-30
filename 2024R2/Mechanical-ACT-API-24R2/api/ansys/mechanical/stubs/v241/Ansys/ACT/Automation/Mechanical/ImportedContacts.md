# `ImportedContacts`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedContacts"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ImportedContacts

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedContacts.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ImportedContacts.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ImportedContacts.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedContacts.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedContacts.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ImportedContacts.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ImportedContacts.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#ImportedContacts.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#ImportedContacts.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ImportedContacts.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ImportedContacts.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ImportedContacts.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedContacts.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ImportedContacts.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ImportedContacts.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ImportedContacts.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#ImportedContacts.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ImportedContacts.Comments)                               | Gets the list of associated comments.                         |
| [`Count`](#ImportedContacts.Count)                                     | Gets the NumberOfRows.                                        |
| [`DataModelObjectCategory`](#ImportedContacts.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Figures`](#ImportedContacts.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ImportedContacts.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#ImportedContacts.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedContacts.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#ImportedContacts.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`Suppressed`](#ImportedContacts.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#ImportedContacts.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedContacts.Children"></a>

### *property* ImportedContacts.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedContacts.Comments"></a>

### *property* ImportedContacts.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedContacts.Count"></a>

### *property* ImportedContacts.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberOfRows.

<!-- !! processed by numpydoc !! -->

<a id="ImportedContacts.DataModelObjectCategory"></a>

### *property* ImportedContacts.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedContacts.Figures"></a>

### *property* ImportedContacts.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedContacts.Images"></a>

### *property* ImportedContacts.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedContacts.InternalObject"></a>

### *property* ImportedContacts.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSExternalModelDataCollAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedContacts.Properties"></a>

### *property* ImportedContacts.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedContacts.ReadOnly"></a>

### *property* ImportedContacts.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ImportedContacts.Suppressed"></a>

### *property* ImportedContacts.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedContacts.VisibleProperties"></a>

### *property* ImportedContacts.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedContacts.Activate"></a>

### ImportedContacts.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedContacts.AddComment"></a>

### ImportedContacts.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedContacts.AddFigure"></a>

### ImportedContacts.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedContacts.AddImage"></a>

### ImportedContacts.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedContacts.CopyTo"></a>

### ImportedContacts.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedContacts.CreateParameter"></a>

### ImportedContacts.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedContacts.Delete"></a>

### ImportedContacts.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedContacts.Duplicate"></a>

### ImportedContacts.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedContacts.GetChildren"></a>

### ImportedContacts.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedContacts.GetParameter"></a>

### ImportedContacts.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedContacts.GroupAllSimilarChildren"></a>

### ImportedContacts.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedContacts.GroupSimilarObjects"></a>

### ImportedContacts.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedContacts.PropertyByAPIName"></a>

### ImportedContacts.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedContacts.PropertyByName"></a>

### ImportedContacts.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedContacts.RemoveParameter"></a>

### ImportedContacts.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

