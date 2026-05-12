# `PSDLoad`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDLoad"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDLoad

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PSDLoad.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#PSDLoad.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#PSDLoad.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PSDLoad.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PSDLoad.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#PSDLoad.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#PSDLoad.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#PSDLoad.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#PSDLoad.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#PSDLoad.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#PSDLoad.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#PSDLoad.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PSDLoad.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#PSDLoad.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#PSDLoad.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#PSDLoad.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------|---------------------------------------------------------------|
| [`BoundaryCondition`](#PSDLoad.BoundaryCondition)             | Gets or sets the BoundaryCondition.                           |
| [`Children`](#PSDLoad.Children)                               | Gets the list of children.                                    |
| [`Comments`](#PSDLoad.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#PSDLoad.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Direction`](#PSDLoad.Direction)                             | Gets or sets the Direction.                                   |
| [`Figures`](#PSDLoad.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#PSDLoad.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#PSDLoad.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#PSDLoad.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#PSDLoad.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`Suppressed`](#PSDLoad.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#PSDLoad.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PSDLoad.BoundaryCondition"></a>

### *property* PSDLoad.BoundaryCondition *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Children"></a>

### *property* PSDLoad.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Comments"></a>

### *property* PSDLoad.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.DataModelObjectCategory"></a>

### *property* PSDLoad.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Direction"></a>

### *property* PSDLoad.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Figures"></a>

### *property* PSDLoad.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Images"></a>

### *property* PSDLoad.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.InternalObject"></a>

### *property* PSDLoad.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPSDLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Properties"></a>

### *property* PSDLoad.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.ReadOnly"></a>

### *property* PSDLoad.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Suppressed"></a>

### *property* PSDLoad.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.VisibleProperties"></a>

### *property* PSDLoad.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PSDLoad.Activate"></a>

### PSDLoad.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.AddComment"></a>

### PSDLoad.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.AddFigure"></a>

### PSDLoad.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.AddImage"></a>

### PSDLoad.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.CopyTo"></a>

### PSDLoad.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.CreateParameter"></a>

### PSDLoad.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Delete"></a>

### PSDLoad.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.Duplicate"></a>

### PSDLoad.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.GetChildren"></a>

### PSDLoad.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.GetParameter"></a>

### PSDLoad.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.GroupAllSimilarChildren"></a>

### PSDLoad.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.GroupSimilarObjects"></a>

### PSDLoad.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.PropertyByAPIName"></a>

### PSDLoad.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.PropertyByName"></a>

### PSDLoad.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PSDLoad.RemoveParameter"></a>

### PSDLoad.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

