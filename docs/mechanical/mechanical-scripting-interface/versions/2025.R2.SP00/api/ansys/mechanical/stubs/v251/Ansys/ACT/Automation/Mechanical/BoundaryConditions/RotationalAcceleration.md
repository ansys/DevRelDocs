# `RotationalAcceleration`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.RotationalAcceleration"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.RotationalAcceleration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a RotationalAcceleration.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#RotationalAcceleration.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#RotationalAcceleration.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#RotationalAcceleration.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#RotationalAcceleration.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#RotationalAcceleration.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#RotationalAcceleration.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#RotationalAcceleration.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#RotationalAcceleration.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#RotationalAcceleration.GetActivateAtLoadStep)     | Gets whether the rotational acceleration is active at the specified load step.    |
| [`GetChildren`](#RotationalAcceleration.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#RotationalAcceleration.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#RotationalAcceleration.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RotationalAcceleration.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#RotationalAcceleration.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#RotationalAcceleration.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#RotationalAcceleration.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#RotationalAcceleration.SetActivateAtLoadStep)     | Sets whether the rotational acceleration is active at the specified load step.    |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Axis`](#RotationalAcceleration.Axis)                                       | Gets or sets the Axis.                                        |
| [`Children`](#RotationalAcceleration.Children)                               | Gets the list of children.                                    |
| [`Comments`](#RotationalAcceleration.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#RotationalAcceleration.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#RotationalAcceleration.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`DefineBy`](#RotationalAcceleration.DefineBy)                               | Gets or sets the DefineBy.                                    |
| [`Figures`](#RotationalAcceleration.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#RotationalAcceleration.Images)                                   | Gets the list of associated images.                           |
| [`IndependentVariable`](#RotationalAcceleration.IndependentVariable)         | Gets or sets the IndependentVariable.                         |
| [`InternalObject`](#RotationalAcceleration.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#RotationalAcceleration.Location)                               | Gets or sets the Location.                                    |
| [`Magnitude`](#RotationalAcceleration.Magnitude)                             | Gets the Magnitude.                                           |
| [`NumberOfSegments`](#RotationalAcceleration.NumberOfSegments)               | Gets or sets the NumberOfSegments.                            |
| [`Properties`](#RotationalAcceleration.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#RotationalAcceleration.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`Suppressed`](#RotationalAcceleration.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#RotationalAcceleration.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`XComponent`](#RotationalAcceleration.XComponent)                           | Gets the XComponent.                                          |
| [`XCoordinate`](#RotationalAcceleration.XCoordinate)                         | Gets or sets the XCoordinate.                                 |
| [`YComponent`](#RotationalAcceleration.YComponent)                           | Gets the YComponent.                                          |
| [`YCoordinate`](#RotationalAcceleration.YCoordinate)                         | Gets or sets the YCoordinate.                                 |
| [`ZComponent`](#RotationalAcceleration.ZComponent)                           | Gets the ZComponent.                                          |
| [`ZCoordinate`](#RotationalAcceleration.ZCoordinate)                         | Gets or sets the ZCoordinate.                                 |

<a id="property-detail"></a>

## Property detail

<a id="RotationalAcceleration.Axis"></a>

### *property* RotationalAcceleration.Axis *: [Ansys.Mechanical.Math.BoundVector](../../../../Mechanical/Math/BoundVector.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Math.BoundVector) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Axis.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Children"></a>

### *property* RotationalAcceleration.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Comments"></a>

### *property* RotationalAcceleration.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.CoordinateSystem"></a>

### *property* RotationalAcceleration.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.DataModelObjectCategory"></a>

### *property* RotationalAcceleration.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.DefineBy"></a>

### *property* RotationalAcceleration.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Figures"></a>

### *property* RotationalAcceleration.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Images"></a>

### *property* RotationalAcceleration.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.IndependentVariable"></a>

### *property* RotationalAcceleration.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.InternalObject"></a>

### *property* RotationalAcceleration.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRotationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Location"></a>

### *property* RotationalAcceleration.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Magnitude"></a>

### *property* RotationalAcceleration.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.NumberOfSegments"></a>

### *property* RotationalAcceleration.NumberOfSegments *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Properties"></a>

### *property* RotationalAcceleration.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.ReadOnly"></a>

### *property* RotationalAcceleration.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Suppressed"></a>

### *property* RotationalAcceleration.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.VisibleProperties"></a>

### *property* RotationalAcceleration.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.XComponent"></a>

### *property* RotationalAcceleration.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.XCoordinate"></a>

### *property* RotationalAcceleration.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.YComponent"></a>

### *property* RotationalAcceleration.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.YCoordinate"></a>

### *property* RotationalAcceleration.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.ZComponent"></a>

### *property* RotationalAcceleration.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.ZCoordinate"></a>

### *property* RotationalAcceleration.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RotationalAcceleration.Activate"></a>

### RotationalAcceleration.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.AddComment"></a>

### RotationalAcceleration.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.AddFigure"></a>

### RotationalAcceleration.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.AddImage"></a>

### RotationalAcceleration.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.CopyTo"></a>

### RotationalAcceleration.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.CreateParameter"></a>

### RotationalAcceleration.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Delete"></a>

### RotationalAcceleration.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.Duplicate"></a>

### RotationalAcceleration.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.GetActivateAtLoadStep"></a>

### RotationalAcceleration.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets whether the rotational acceleration is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.GetChildren"></a>

### RotationalAcceleration.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.GetParameter"></a>

### RotationalAcceleration.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.GroupAllSimilarChildren"></a>

### RotationalAcceleration.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.GroupSimilarObjects"></a>

### RotationalAcceleration.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.PropertyByAPIName"></a>

### RotationalAcceleration.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.PropertyByName"></a>

### RotationalAcceleration.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.RemoveParameter"></a>

### RotationalAcceleration.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalAcceleration.SetActivateAtLoadStep"></a>

### RotationalAcceleration.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool))

Sets whether the rotational acceleration is active at the specified load step.

<!-- !! processed by numpydoc !! -->

