# `PSDGAcceleration`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDGAcceleration"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDGAcceleration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PSDGAcceleration.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#PSDGAcceleration.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#PSDGAcceleration.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PSDGAcceleration.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PSDGAcceleration.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#PSDGAcceleration.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#PSDGAcceleration.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#PSDGAcceleration.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#PSDGAcceleration.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#PSDGAcceleration.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#PSDGAcceleration.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#PSDGAcceleration.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PSDGAcceleration.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#PSDGAcceleration.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#PSDGAcceleration.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#PSDGAcceleration.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`BoundaryCondition`](#PSDGAcceleration.BoundaryCondition)             | Gets or sets the BoundaryCondition.                           |
| [`Children`](#PSDGAcceleration.Children)                               | Gets the list of children.                                    |
| [`Comments`](#PSDGAcceleration.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#PSDGAcceleration.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Direction`](#PSDGAcceleration.Direction)                             | Gets or sets the Direction.                                   |
| [`Figures`](#PSDGAcceleration.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#PSDGAcceleration.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#PSDGAcceleration.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LoadData`](#PSDGAcceleration.LoadData)                               | Gets or sets the LoadData.                                    |
| [`Properties`](#PSDGAcceleration.Properties)                           | Gets the list of properties for this object.                  |
| [`Suppressed`](#PSDGAcceleration.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#PSDGAcceleration.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PSDGAcceleration.BoundaryCondition"></a>

### *property* PSDGAcceleration.BoundaryCondition *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="PSDGAcceleration.Children"></a>

### *property* PSDGAcceleration.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PSDGAcceleration.Comments"></a>

### *property* PSDGAcceleration.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PSDGAcceleration.DataModelObjectCategory"></a>

### *property* PSDGAcceleration.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PSDGAcceleration.Direction"></a>

### *property* PSDGAcceleration.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="PSDGAcceleration.Figures"></a>

### *property* PSDGAcceleration.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PSDGAcceleration.Images"></a>

### *property* PSDGAcceleration.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PSDGAcceleration.InternalObject"></a>

### *property* PSDGAcceleration.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPSDLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PSDGAcceleration.LoadData"></a>

### *property* PSDGAcceleration.LoadData *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadData.

<!-- !! processed by numpydoc !! -->

<a id="PSDGAcceleration.Properties"></a>

### *property* PSDGAcceleration.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PSDGAcceleration.Suppressed"></a>

### *property* PSDGAcceleration.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PSDGAcceleration.VisibleProperties"></a>

### *property* PSDGAcceleration.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PSDGAcceleration.Activate"></a>

### PSDGAcceleration.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PSDGAcceleration.AddComment"></a>

### PSDGAcceleration.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PSDGAcceleration.AddFigure"></a>

### PSDGAcceleration.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PSDGAcceleration.AddImage"></a>

### PSDGAcceleration.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PSDGAcceleration.CopyTo"></a>

### PSDGAcceleration.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PSDGAcceleration.CreateParameter"></a>

### PSDGAcceleration.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PSDGAcceleration.Delete"></a>

### PSDGAcceleration.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PSDGAcceleration.Duplicate"></a>

### PSDGAcceleration.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PSDGAcceleration.GetChildren"></a>

### PSDGAcceleration.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PSDGAcceleration.GetParameter"></a>

### PSDGAcceleration.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PSDGAcceleration.GroupAllSimilarChildren"></a>

### PSDGAcceleration.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PSDGAcceleration.GroupSimilarObjects"></a>

### PSDGAcceleration.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PSDGAcceleration.PropertyByAPIName"></a>

### PSDGAcceleration.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PSDGAcceleration.PropertyByName"></a>

### PSDGAcceleration.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PSDGAcceleration.RemoveParameter"></a>

### PSDGAcceleration.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

