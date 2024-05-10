# GenericPointMass

<a id="GenericPointMass"></a>

### *class* GenericPointMass

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a GenericPointMass.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddCommandSnippet`](#GenericPointMass.AddCommandSnippet)             | Creates a new CommandSnippet                                                      |
| [`Delete`](#GenericPointMass.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#GenericPointMass.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#GenericPointMass.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#GenericPointMass.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#GenericPointMass.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#GenericPointMass.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#GenericPointMass.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#GenericPointMass.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#GenericPointMass.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#GenericPointMass.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#GenericPointMass.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#GenericPointMass.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#GenericPointMass.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#GenericPointMass.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`RemotePoint`](RemotePoint.md#RemotePoint)                                                                         | Gets the remote point associated to the point mass.           |
| [`IsDistributedMass`](#GenericPointMass.IsDistributedMass)                                                          | Gets the IsDistributedMass.                                   |
| [`Location`](#GenericPointMass.Location)                                                                            | Gets or sets the Geometry.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`DataModelObjectCategory`](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#GenericPointMass.Children)                                                                            | Gets the list of children.                                    |
| [`Comments`](#GenericPointMass.Comments)                                                                            | Gets the list of associated comments.                         |
| [`Figures`](#GenericPointMass.Figures)                                                                              | Gets the list of associated figures.                          |
| [`Images`](#GenericPointMass.Images)                                                                                | Gets the list of associated images.                           |
| [`ReadOnly`](#GenericPointMass.ReadOnly)                                                                            | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#GenericPointMass.Properties)                                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#GenericPointMass.VisibleProperties)                                                          | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import GenericPointMass
```

<a id="property-detail"></a>

## Property detail

<a id="GenericPointMass.RemotePoint"></a>

### *property* GenericPointMass.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the remote point associated to the point mass.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.IsDistributedMass"></a>

### *property* GenericPointMass.IsDistributedMass *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the IsDistributedMass.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Location"></a>

### *property* GenericPointMass.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Geometry.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.InternalObject"></a>

### *property* GenericPointMass.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPointMassAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.DataModelObjectCategory"></a>

### *property* GenericPointMass.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Children"></a>

### *property* GenericPointMass.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Comments"></a>

### *property* GenericPointMass.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Figures"></a>

### *property* GenericPointMass.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Images"></a>

### *property* GenericPointMass.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.ReadOnly"></a>

### *property* GenericPointMass.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* GenericPointMass.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Properties"></a>

### *property* GenericPointMass.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.VisibleProperties"></a>

### *property* GenericPointMass.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="GenericPointMass.AddCommandSnippet"></a>

### GenericPointMass.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Delete"></a>

### GenericPointMass.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.GetChildren"></a>

### GenericPointMass.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### GenericPointMass.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.AddComment"></a>

### GenericPointMass.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.AddFigure"></a>

### GenericPointMass.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.AddImage"></a>

### GenericPointMass.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Activate"></a>

### GenericPointMass.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.CopyTo"></a>

### GenericPointMass.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.Duplicate"></a>

### GenericPointMass.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.GroupAllSimilarChildren"></a>

### GenericPointMass.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.GroupSimilarObjects"></a>

### GenericPointMass.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.PropertyByName"></a>

### GenericPointMass.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.PropertyByAPIName"></a>

### GenericPointMass.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.CreateParameter"></a>

### GenericPointMass.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.GetParameter"></a>

### GenericPointMass.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="GenericPointMass.RemoveParameter"></a>

### GenericPointMass.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
