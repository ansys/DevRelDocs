# ElementControls

<a id="ElementControls"></a>

### *class* ElementControls

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ElementControls.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#ElementControls.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                 | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ElementControls.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ElementControls.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ElementControls.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ElementControls.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ElementControls.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ElementControls.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ElementControls.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ElementControls.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ElementControls.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ElementControls.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ElementControls.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ElementControls.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ElementControls.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Suppressed`](#ElementControls.Suppressed)                                                                            | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#ElementControls.Children)                                                                                | Gets the list of children.                                    |
| [`Comments`](#ElementControls.Comments)                                                                                | Gets the list of associated comments.                         |
| [`Figures`](#ElementControls.Figures)                                                                                  | Gets the list of associated figures.                          |
| [`Images`](#ElementControls.Images)                                                                                    | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ElementControls.Properties)                                                                            | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ElementControls.VisibleProperties)                                                              | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import ElementControls
```

<a id="property-detail"></a>

## Property detail

<a id="ElementControls.InternalObject"></a>

### *property* ElementControls.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSElementControlsAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.Suppressed"></a>

### *property* ElementControls.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.DataModelObjectCategory"></a>

### *property* ElementControls.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.Children"></a>

### *property* ElementControls.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.Comments"></a>

### *property* ElementControls.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.Figures"></a>

### *property* ElementControls.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.Images"></a>

### *property* ElementControls.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ElementControls.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.Properties"></a>

### *property* ElementControls.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.VisibleProperties"></a>

### *property* ElementControls.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ElementControls.Delete"></a>

### ElementControls.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.GetChildren"></a>

### ElementControls.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ElementControls.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.AddComment"></a>

### ElementControls.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.AddFigure"></a>

### ElementControls.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.AddImage"></a>

### ElementControls.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.Activate"></a>

### ElementControls.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.CopyTo"></a>

### ElementControls.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.Duplicate"></a>

### ElementControls.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.GroupAllSimilarChildren"></a>

### ElementControls.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.GroupSimilarObjects"></a>

### ElementControls.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.PropertyByName"></a>

### ElementControls.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.PropertyByAPIName"></a>

### ElementControls.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.CreateParameter"></a>

### ElementControls.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.GetParameter"></a>

### ElementControls.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ElementControls.RemoveParameter"></a>

### ElementControls.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
