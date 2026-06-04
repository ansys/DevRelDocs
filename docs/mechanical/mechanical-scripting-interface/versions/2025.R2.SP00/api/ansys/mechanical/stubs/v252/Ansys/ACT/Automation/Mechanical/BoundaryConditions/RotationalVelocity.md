# `RotationalVelocity`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.RotationalVelocity"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.RotationalVelocity

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a RotationalVelocity.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#RotationalVelocity.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#RotationalVelocity.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#RotationalVelocity.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#RotationalVelocity.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#RotationalVelocity.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#RotationalVelocity.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#RotationalVelocity.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#RotationalVelocity.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#RotationalVelocity.GetActivateAtLoadStep)     | Gets whether the rotational velocity is active at the specified load step.        |
| [`GetChildren`](#RotationalVelocity.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#RotationalVelocity.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#RotationalVelocity.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RotationalVelocity.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#RotationalVelocity.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#RotationalVelocity.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#RotationalVelocity.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#RotationalVelocity.SetActivateAtLoadStep)     | Sets whether the rotational velocity is active at the specified load step.        |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Axis`](#RotationalVelocity.Axis)                                       | Gets or sets the Axis.                                        |
| [`Children`](#RotationalVelocity.Children)                               | Gets the list of children.                                    |
| [`Comments`](#RotationalVelocity.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#RotationalVelocity.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#RotationalVelocity.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`DefineBy`](#RotationalVelocity.DefineBy)                               | Gets or sets the DefineBy.                                    |
| [`Figures`](#RotationalVelocity.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#RotationalVelocity.Images)                                   | Gets the list of associated images.                           |
| [`IndependentVariable`](#RotationalVelocity.IndependentVariable)         | Gets or sets the IndependentVariable.                         |
| [`InternalObject`](#RotationalVelocity.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#RotationalVelocity.Location)                               | Gets or sets the Location.                                    |
| [`Magnitude`](#RotationalVelocity.Magnitude)                             | Gets the Magnitude.                                           |
| [`NumberOfSegments`](#RotationalVelocity.NumberOfSegments)               | Gets or sets the NumberOfSegments.                            |
| [`Properties`](#RotationalVelocity.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#RotationalVelocity.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`Suppressed`](#RotationalVelocity.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#RotationalVelocity.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`XComponent`](#RotationalVelocity.XComponent)                           | Gets the XComponent.                                          |
| [`XCoordinate`](#RotationalVelocity.XCoordinate)                         | Gets or sets the XCoordinate.                                 |
| [`YComponent`](#RotationalVelocity.YComponent)                           | Gets the YComponent.                                          |
| [`YCoordinate`](#RotationalVelocity.YCoordinate)                         | Gets or sets the YCoordinate.                                 |
| [`ZComponent`](#RotationalVelocity.ZComponent)                           | Gets the ZComponent.                                          |
| [`ZCoordinate`](#RotationalVelocity.ZCoordinate)                         | Gets or sets the ZCoordinate.                                 |

<a id="property-detail"></a>

## Property detail

<a id="RotationalVelocity.Axis"></a>

### *property* RotationalVelocity.Axis *: [Ansys.Mechanical.Math.BoundVector](../../../../Mechanical/Math/BoundVector.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Math.BoundVector) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Axis.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Children"></a>

### *property* RotationalVelocity.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Comments"></a>

### *property* RotationalVelocity.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.CoordinateSystem"></a>

### *property* RotationalVelocity.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.DataModelObjectCategory"></a>

### *property* RotationalVelocity.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.DefineBy"></a>

### *property* RotationalVelocity.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Figures"></a>

### *property* RotationalVelocity.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Images"></a>

### *property* RotationalVelocity.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.IndependentVariable"></a>

### *property* RotationalVelocity.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.InternalObject"></a>

### *property* RotationalVelocity.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSRotationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Location"></a>

### *property* RotationalVelocity.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Magnitude"></a>

### *property* RotationalVelocity.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.NumberOfSegments"></a>

### *property* RotationalVelocity.NumberOfSegments *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Properties"></a>

### *property* RotationalVelocity.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.ReadOnly"></a>

### *property* RotationalVelocity.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Suppressed"></a>

### *property* RotationalVelocity.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.VisibleProperties"></a>

### *property* RotationalVelocity.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.XComponent"></a>

### *property* RotationalVelocity.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.XCoordinate"></a>

### *property* RotationalVelocity.XCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.YComponent"></a>

### *property* RotationalVelocity.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.YCoordinate"></a>

### *property* RotationalVelocity.YCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.ZComponent"></a>

### *property* RotationalVelocity.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.ZCoordinate"></a>

### *property* RotationalVelocity.ZCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RotationalVelocity.Activate"></a>

### RotationalVelocity.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.AddComment"></a>

### RotationalVelocity.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.AddFigure"></a>

### RotationalVelocity.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.AddImage"></a>

### RotationalVelocity.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.CopyTo"></a>

### RotationalVelocity.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.CreateParameter"></a>

### RotationalVelocity.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Delete"></a>

### RotationalVelocity.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.Duplicate"></a>

### RotationalVelocity.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.GetActivateAtLoadStep"></a>

### RotationalVelocity.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

Gets whether the rotational velocity is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.GetChildren"></a>

### RotationalVelocity.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.GetParameter"></a>

### RotationalVelocity.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.GroupAllSimilarChildren"></a>

### RotationalVelocity.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.GroupSimilarObjects"></a>

### RotationalVelocity.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.PropertyByAPIName"></a>

### RotationalVelocity.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.PropertyByName"></a>

### RotationalVelocity.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.RemoveParameter"></a>

### RotationalVelocity.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RotationalVelocity.SetActivateAtLoadStep"></a>

### RotationalVelocity.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets whether the rotational velocity is active at the specified load step.

<!-- !! processed by numpydoc !! -->

