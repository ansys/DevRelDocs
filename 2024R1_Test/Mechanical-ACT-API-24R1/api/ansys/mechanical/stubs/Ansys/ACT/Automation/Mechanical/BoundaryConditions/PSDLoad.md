# PSDLoad

<a id="PSDLoad"></a>

### *class* PSDLoad

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a PSDLoad.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#PSDLoad.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#PSDLoad.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PSDLoad.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PSDLoad.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#PSDLoad.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#PSDLoad.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#PSDLoad.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#PSDLoad.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PSDLoad.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#PSDLoad.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#PSDLoad.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#PSDLoad.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#PSDLoad.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#PSDLoad.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`BoundaryCondition`](#PSDLoad.BoundaryCondition)                                                                      | Gets or sets the BoundaryCondition.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Direction`](#PSDLoad.Direction)                                                                                      | Gets or sets the Direction.                                   |
| [`Suppressed`](#PSDLoad.Suppressed)                                                                                    | Gets or sets the Suppressed.                                  |
| [`DataModelObjectCategory`](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#PSDLoad.Children)                                                                                        | Gets the list of children.                                    |
| [`Comments`](#PSDLoad.Comments)                                                                                        | Gets the list of associated comments.                         |
| [`Figures`](#PSDLoad.Figures)                                                                                          | Gets the list of associated figures.                          |
| [`Images`](#PSDLoad.Images)                                                                                            | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#PSDLoad.Properties)                                                                                    | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#PSDLoad.VisibleProperties)                                                                      | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import PSDLoad
```

<a id="property-detail"></a>

## Property detail

<a id="PSDLoad.BoundaryCondition"></a>

### *property* PSDLoad.BoundaryCondition *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.InternalObject"></a>

### *property* PSDLoad.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPSDLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Direction"></a>

### *property* PSDLoad.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](./../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Suppressed"></a>

### *property* PSDLoad.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.DataModelObjectCategory"></a>

### *property* PSDLoad.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Children"></a>

### *property* PSDLoad.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Comments"></a>

### *property* PSDLoad.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](./../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Figures"></a>

### *property* PSDLoad.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](./../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Images"></a>

### *property* PSDLoad.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](./../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* PSDLoad.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Properties"></a>

### *property* PSDLoad.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.VisibleProperties"></a>

### *property* PSDLoad.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PSDLoad.Delete"></a>

### PSDLoad.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.GetChildren"></a>

### PSDLoad.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### PSDLoad.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](./../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.AddComment"></a>

### PSDLoad.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.AddFigure"></a>

### PSDLoad.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.AddImage"></a>

### PSDLoad.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Activate"></a>

### PSDLoad.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.CopyTo"></a>

### PSDLoad.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Duplicate"></a>

### PSDLoad.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.GroupAllSimilarChildren"></a>

### PSDLoad.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.GroupSimilarObjects"></a>

### PSDLoad.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.PropertyByName"></a>

### PSDLoad.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.PropertyByAPIName"></a>

### PSDLoad.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.CreateParameter"></a>

### PSDLoad.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.GetParameter"></a>

### PSDLoad.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.RemoveParameter"></a>

### PSDLoad.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
