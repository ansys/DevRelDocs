# `PSDAcceleration`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDAcceleration"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDAcceleration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PSDAcceleration.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#PSDAcceleration.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#PSDAcceleration.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PSDAcceleration.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PSDAcceleration.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#PSDAcceleration.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#PSDAcceleration.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#PSDAcceleration.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#PSDAcceleration.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#PSDAcceleration.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#PSDAcceleration.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#PSDAcceleration.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PSDAcceleration.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#PSDAcceleration.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#PSDAcceleration.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#PSDAcceleration.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`BoundaryCondition`](#PSDAcceleration.BoundaryCondition)             | Gets or sets the BoundaryCondition.                           |
| [`Children`](#PSDAcceleration.Children)                               | Gets the list of children.                                    |
| [`Comments`](#PSDAcceleration.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#PSDAcceleration.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Direction`](#PSDAcceleration.Direction)                             | Gets or sets the Direction.                                   |
| [`Figures`](#PSDAcceleration.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#PSDAcceleration.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#PSDAcceleration.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LoadData`](#PSDAcceleration.LoadData)                               | Gets or sets the LoadData.                                    |
| [`Properties`](#PSDAcceleration.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#PSDAcceleration.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`Suppressed`](#PSDAcceleration.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#PSDAcceleration.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PSDAcceleration.BoundaryCondition"></a>

### *property* PSDAcceleration.BoundaryCondition *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.Children"></a>

### *property* PSDAcceleration.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.Comments"></a>

### *property* PSDAcceleration.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.DataModelObjectCategory"></a>

### *property* PSDAcceleration.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.Direction"></a>

### *property* PSDAcceleration.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.Figures"></a>

### *property* PSDAcceleration.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.Images"></a>

### *property* PSDAcceleration.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.InternalObject"></a>

### *property* PSDAcceleration.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPSDLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.LoadData"></a>

### *property* PSDAcceleration.LoadData *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadData.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.Properties"></a>

### *property* PSDAcceleration.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.ReadOnly"></a>

### *property* PSDAcceleration.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.Suppressed"></a>

### *property* PSDAcceleration.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.VisibleProperties"></a>

### *property* PSDAcceleration.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PSDAcceleration.Activate"></a>

### PSDAcceleration.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.AddComment"></a>

### PSDAcceleration.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.AddFigure"></a>

### PSDAcceleration.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.AddImage"></a>

### PSDAcceleration.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.CopyTo"></a>

### PSDAcceleration.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.CreateParameter"></a>

### PSDAcceleration.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.Delete"></a>

### PSDAcceleration.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.Duplicate"></a>

### PSDAcceleration.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.GetChildren"></a>

### PSDAcceleration.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.GetParameter"></a>

### PSDAcceleration.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.GroupAllSimilarChildren"></a>

### PSDAcceleration.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.GroupSimilarObjects"></a>

### PSDAcceleration.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.PropertyByAPIName"></a>

### PSDAcceleration.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.PropertyByName"></a>

### PSDAcceleration.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PSDAcceleration.RemoveParameter"></a>

### PSDAcceleration.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

