# `HydrostaticPressure`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.BoundaryConditions.HydrostaticPressure"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.HydrostaticPressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a HydrostaticPressure.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#HydrostaticPressure.Activate)                                             | Activate the current object.                                                      |
| [`AddComment`](#HydrostaticPressure.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#HydrostaticPressure.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#HydrostaticPressure.AddImage)                                             | Creates a new child Image.                                                        |
| [`CopyTo`](#HydrostaticPressure.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#HydrostaticPressure.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`Delete`](#HydrostaticPressure.Delete)                                                 | Run the Delete action.                                                            |
| [`Duplicate`](#HydrostaticPressure.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#HydrostaticPressure.GetActivateAtLoadStep)                   | Gets whether the hydrostatic pressure is active at the specified load step.       |
| [`GetChildren`](#HydrostaticPressure.GetChildren)                                       | Gets the list of children, filtered by type.                                      |
| [`GetComponentActivateAtLoadStep`](#HydrostaticPressure.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`GetParameter`](#HydrostaticPressure.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#HydrostaticPressure.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#HydrostaticPressure.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#HydrostaticPressure.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#HydrostaticPressure.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`PropertyByName`](#HydrostaticPressure.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`RemoveParameter`](#HydrostaticPressure.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#HydrostaticPressure.SetActivateAtLoadStep)                   | Sets whether the hydrostatic pressure is active at the specified load step.       |
| [`SetComponentActivateAtLoadStep`](#HydrostaticPressure.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AppliedBy`](#HydrostaticPressure.AppliedBy)                             | Gets or sets the AppliedBy.                                   |
| [`Children`](#HydrostaticPressure.Children)                               | Gets the list of children.                                    |
| [`Comments`](#HydrostaticPressure.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#HydrostaticPressure.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#HydrostaticPressure.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`DefineBy`](#HydrostaticPressure.DefineBy)                               | Gets or sets the DefineBy.                                    |
| [`Direction`](#HydrostaticPressure.Direction)                             | Gets or sets the Direction.                                   |
| [`Figures`](#HydrostaticPressure.Figures)                                 | Gets the list of associated figures.                          |
| [`FluidDensity`](#HydrostaticPressure.FluidDensity)                       | Gets or sets the FluidDensity.                                |
| [`Images`](#HydrostaticPressure.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#HydrostaticPressure.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#HydrostaticPressure.Location)                               | Gets or sets the Location.                                    |
| [`Magnitude`](#HydrostaticPressure.Magnitude)                             | Gets the Magnitude.                                           |
| [`Properties`](#HydrostaticPressure.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#HydrostaticPressure.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#HydrostaticPressure.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`ShellFace`](#HydrostaticPressure.ShellFace)                             | Gets or sets the ShellFace.                                   |
| [`Suppressed`](#HydrostaticPressure.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#HydrostaticPressure.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`XComponent`](#HydrostaticPressure.XComponent)                           | Gets the XComponent.                                          |
| [`XCoordinate`](#HydrostaticPressure.XCoordinate)                         | Gets or sets the XCoordinate.                                 |
| [`YComponent`](#HydrostaticPressure.YComponent)                           | Gets the YComponent.                                          |
| [`YCoordinate`](#HydrostaticPressure.YCoordinate)                         | Gets or sets the YCoordinate.                                 |
| [`ZComponent`](#HydrostaticPressure.ZComponent)                           | Gets the ZComponent.                                          |
| [`ZCoordinate`](#HydrostaticPressure.ZCoordinate)                         | Gets or sets the ZCoordinate.                                 |

<a id="property-detail"></a>

## Property detail

<a id="HydrostaticPressure.AppliedBy"></a>

### *property* HydrostaticPressure.AppliedBy *: [Ansys.Mechanical.DataModel.Enums.LoadAppliedBy](../../../../Mechanical/DataModel/Enums/LoadAppliedBy.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LoadAppliedBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Children"></a>

### *property* HydrostaticPressure.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Comments"></a>

### *property* HydrostaticPressure.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.CoordinateSystem"></a>

### *property* HydrostaticPressure.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.DataModelObjectCategory"></a>

### *property* HydrostaticPressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.DefineBy"></a>

### *property* HydrostaticPressure.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Direction"></a>

### *property* HydrostaticPressure.Direction *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Figures"></a>

### *property* HydrostaticPressure.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.FluidDensity"></a>

### *property* HydrostaticPressure.FluidDensity *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluidDensity.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Images"></a>

### *property* HydrostaticPressure.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.InternalObject"></a>

### *property* HydrostaticPressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Location"></a>

### *property* HydrostaticPressure.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Magnitude"></a>

### *property* HydrostaticPressure.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Properties"></a>

### *property* HydrostaticPressure.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.ReadOnly"></a>

### *property* HydrostaticPressure.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.SharedRefBody"></a>

### *property* HydrostaticPressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.ShellFace"></a>

### *property* HydrostaticPressure.ShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellFace.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Suppressed"></a>

### *property* HydrostaticPressure.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.VisibleProperties"></a>

### *property* HydrostaticPressure.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.XComponent"></a>

### *property* HydrostaticPressure.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.XCoordinate"></a>

### *property* HydrostaticPressure.XCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.YComponent"></a>

### *property* HydrostaticPressure.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.YCoordinate"></a>

### *property* HydrostaticPressure.YCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.ZComponent"></a>

### *property* HydrostaticPressure.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v252.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.ZCoordinate"></a>

### *property* HydrostaticPressure.ZCoordinate *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="HydrostaticPressure.Activate"></a>

### HydrostaticPressure.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.AddComment"></a>

### HydrostaticPressure.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.AddFigure"></a>

### HydrostaticPressure.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.AddImage"></a>

### HydrostaticPressure.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.CopyTo"></a>

### HydrostaticPressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.CreateParameter"></a>

### HydrostaticPressure.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Delete"></a>

### HydrostaticPressure.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.Duplicate"></a>

### HydrostaticPressure.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GetActivateAtLoadStep"></a>

### HydrostaticPressure.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

Gets whether the hydrostatic pressure is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GetChildren"></a>

### HydrostaticPressure.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GetComponentActivateAtLoadStep"></a>

### HydrostaticPressure.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/library/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GetParameter"></a>

### HydrostaticPressure.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GroupAllSimilarChildren"></a>

### HydrostaticPressure.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.GroupSimilarObjects"></a>

### HydrostaticPressure.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.PromoteToNamedSelection"></a>

### HydrostaticPressure.PromoteToNamedSelection() → Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)]

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.PropertyByAPIName"></a>

### HydrostaticPressure.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.PropertyByName"></a>

### HydrostaticPressure.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.RemoveParameter"></a>

### HydrostaticPressure.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.SetActivateAtLoadStep"></a>

### HydrostaticPressure.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets whether the hydrostatic pressure is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="HydrostaticPressure.SetComponentActivateAtLoadStep"></a>

### HydrostaticPressure.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/library/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

