# `PSDDisplacement`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDDisplacement"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDDisplacement

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a PSDDisplacement.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#PSDDisplacement.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#PSDDisplacement.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#PSDDisplacement.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#PSDDisplacement.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#PSDDisplacement.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#PSDDisplacement.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#PSDDisplacement.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#PSDDisplacement.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#PSDDisplacement.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#PSDDisplacement.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#PSDDisplacement.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#PSDDisplacement.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#PSDDisplacement.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#PSDDisplacement.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#PSDDisplacement.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------|
| [`BoundaryCondition`](#PSDDisplacement.BoundaryCondition)             | Gets or sets the BoundaryCondition.                           |
| [`Children`](#PSDDisplacement.Children)                               | Gets the list of children.                                    |
| [`Comments`](#PSDDisplacement.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#PSDDisplacement.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Direction`](#PSDDisplacement.Direction)                             | Gets or sets the Direction.                                   |
| [`Figures`](#PSDDisplacement.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#PSDDisplacement.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#PSDDisplacement.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LoadData`](#PSDDisplacement.LoadData)                               | Gets or sets the LoadData.                                    |
| [`Properties`](#PSDDisplacement.Properties)                           | Gets the list of properties for this object.                  |
| [`Suppressed`](#PSDDisplacement.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#PSDDisplacement.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="PSDDisplacement.BoundaryCondition"></a>

### *property* PSDDisplacement.BoundaryCondition *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryCondition.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Children"></a>

### *property* PSDDisplacement.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Comments"></a>

### *property* PSDDisplacement.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.DataModelObjectCategory"></a>

### *property* PSDDisplacement.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Direction"></a>

### *property* PSDDisplacement.Direction *: [Ansys.Mechanical.DataModel.Enums.NormalOrientationType](../../../../Mechanical/DataModel/Enums/NormalOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NormalOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Figures"></a>

### *property* PSDDisplacement.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Images"></a>

### *property* PSDDisplacement.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.InternalObject"></a>

### *property* PSDDisplacement.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSPSDLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.LoadData"></a>

### *property* PSDDisplacement.LoadData *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadData.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Properties"></a>

### *property* PSDDisplacement.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Suppressed"></a>

### *property* PSDDisplacement.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.VisibleProperties"></a>

### *property* PSDDisplacement.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="PSDDisplacement.Activate"></a>

### PSDDisplacement.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.AddComment"></a>

### PSDDisplacement.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.AddFigure"></a>

### PSDDisplacement.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.AddImage"></a>

### PSDDisplacement.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.CopyTo"></a>

### PSDDisplacement.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.CreateParameter"></a>

### PSDDisplacement.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Delete"></a>

### PSDDisplacement.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.Duplicate"></a>

### PSDDisplacement.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.GetChildren"></a>

### PSDDisplacement.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.GetParameter"></a>

### PSDDisplacement.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.GroupAllSimilarChildren"></a>

### PSDDisplacement.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.GroupSimilarObjects"></a>

### PSDDisplacement.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.PropertyByAPIName"></a>

### PSDDisplacement.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.PropertyByName"></a>

### PSDDisplacement.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="PSDDisplacement.RemoveParameter"></a>

### PSDDisplacement.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

