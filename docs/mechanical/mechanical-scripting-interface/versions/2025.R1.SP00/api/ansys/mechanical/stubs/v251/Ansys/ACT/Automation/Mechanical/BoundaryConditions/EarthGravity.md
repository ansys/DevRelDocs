# `EarthGravity`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.EarthGravity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.EarthGravity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a EarthGravity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#EarthGravity.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#EarthGravity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#EarthGravity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#EarthGravity.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#EarthGravity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#EarthGravity.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#EarthGravity.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#EarthGravity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#EarthGravity.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#EarthGravity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#EarthGravity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EarthGravity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#EarthGravity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#EarthGravity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#EarthGravity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#EarthGravity.Children)                               | Gets the list of children.                                    |
| [`Comments`](#EarthGravity.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#EarthGravity.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#EarthGravity.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Direction`](#EarthGravity.Direction)                             | Gets or sets the Direction.                                   |
| [`Figures`](#EarthGravity.Figures)                                 | Gets the list of associated figures.                          |
| [`GeometrySelection`](#EarthGravity.GeometrySelection)             | Gets the GeometrySelection.                                   |
| [`Images`](#EarthGravity.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#EarthGravity.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#EarthGravity.Properties)                           | Gets the list of properties for this object.                  |
| [`Suppressed`](#EarthGravity.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#EarthGravity.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`XComponent`](#EarthGravity.XComponent)                           | Gets the XComponent.                                          |
| [`YComponent`](#EarthGravity.YComponent)                           | Gets the YComponent.                                          |
| [`ZComponent`](#EarthGravity.ZComponent)                           | Gets the ZComponent.                                          |

<a id="property-detail"></a>

## Property detail

<a id="EarthGravity.Children"></a>

### *property* EarthGravity.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.Comments"></a>

### *property* EarthGravity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.CoordinateSystem"></a>

### *property* EarthGravity.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.DataModelObjectCategory"></a>

### *property* EarthGravity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.Direction"></a>

### *property* EarthGravity.Direction *: [Ansys.Mechanical.DataModel.Enums.GravityOrientationType](../../../../Mechanical/DataModel/Enums/GravityOrientationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GravityOrientationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.Figures"></a>

### *property* EarthGravity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.GeometrySelection"></a>

### *property* EarthGravity.GeometrySelection *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the GeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.Images"></a>

### *property* EarthGravity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.InternalObject"></a>

### *property* EarthGravity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAccelerationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.Properties"></a>

### *property* EarthGravity.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.Suppressed"></a>

### *property* EarthGravity.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.VisibleProperties"></a>

### *property* EarthGravity.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.XComponent"></a>

### *property* EarthGravity.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.YComponent"></a>

### *property* EarthGravity.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.ZComponent"></a>

### *property* EarthGravity.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EarthGravity.Activate"></a>

### EarthGravity.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.AddComment"></a>

### EarthGravity.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.AddFigure"></a>

### EarthGravity.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.AddImage"></a>

### EarthGravity.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.CopyTo"></a>

### EarthGravity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.CreateParameter"></a>

### EarthGravity.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.Delete"></a>

### EarthGravity.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.Duplicate"></a>

### EarthGravity.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.GetChildren"></a>

### EarthGravity.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.GetParameter"></a>

### EarthGravity.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.GroupAllSimilarChildren"></a>

### EarthGravity.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.GroupSimilarObjects"></a>

### EarthGravity.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.PropertyByAPIName"></a>

### EarthGravity.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.PropertyByName"></a>

### EarthGravity.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EarthGravity.RemoveParameter"></a>

### EarthGravity.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

