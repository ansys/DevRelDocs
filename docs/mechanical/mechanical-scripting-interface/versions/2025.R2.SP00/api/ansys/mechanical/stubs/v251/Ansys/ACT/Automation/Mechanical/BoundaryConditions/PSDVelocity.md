# `PSDVelocity`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDVelocity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDVelocity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PSDVelocity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#PSDVelocity.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#PSDVelocity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PSDVelocity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PSDVelocity.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#PSDVelocity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#PSDVelocity.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#PSDVelocity.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#PSDVelocity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#PSDVelocity.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#PSDVelocity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#PSDVelocity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PSDVelocity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#PSDVelocity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#PSDVelocity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#PSDVelocity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`BoundaryCondition`](#PSDVelocity.BoundaryCondition)             | Gets or sets the BoundaryCondition.                           |
| [`Children`](#PSDVelocity.Children)                               | Gets the list of children.                                    |
| [`Comments`](#PSDVelocity.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#PSDVelocity.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Direction`](#PSDVelocity.Direction)                             | Gets or sets the Direction.                                   |
| [`Figures`](#PSDVelocity.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#PSDVelocity.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#PSDVelocity.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LoadData`](#PSDVelocity.LoadData)                               | Gets or sets the LoadData.                                    |
| [`Properties`](#PSDVelocity.Properties)                           | Gets the list of properties for this object.                  |
| [`Suppressed`](#PSDVelocity.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#PSDVelocity.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PSDVelocity.BoundaryCondition"></a>

### *property* PSDVelocity.BoundaryCondition *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.Children"></a>

### *property* PSDVelocity.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.Comments"></a>

### *property* PSDVelocity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.DataModelObjectCategory"></a>

### *property* PSDVelocity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.Direction"></a>

### *property* PSDVelocity.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.Figures"></a>

### *property* PSDVelocity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.Images"></a>

### *property* PSDVelocity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.InternalObject"></a>

### *property* PSDVelocity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPSDLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.LoadData"></a>

### *property* PSDVelocity.LoadData *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadData.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.Properties"></a>

### *property* PSDVelocity.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.Suppressed"></a>

### *property* PSDVelocity.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.VisibleProperties"></a>

### *property* PSDVelocity.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PSDVelocity.Activate"></a>

### PSDVelocity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.AddComment"></a>

### PSDVelocity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.AddFigure"></a>

### PSDVelocity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.AddImage"></a>

### PSDVelocity.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.CopyTo"></a>

### PSDVelocity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.CreateParameter"></a>

### PSDVelocity.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.Delete"></a>

### PSDVelocity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.Duplicate"></a>

### PSDVelocity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.GetChildren"></a>

### PSDVelocity.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.GetParameter"></a>

### PSDVelocity.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.GroupAllSimilarChildren"></a>

### PSDVelocity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.GroupSimilarObjects"></a>

### PSDVelocity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.PropertyByAPIName"></a>

### PSDVelocity.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.PropertyByName"></a>

### PSDVelocity.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PSDVelocity.RemoveParameter"></a>

### PSDVelocity.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

