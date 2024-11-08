# `Moment`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Moment"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.Moment

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Moment.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Moment.Activate)                                             | Activate the current object.                                                      |
| [`AddComment`](#Moment.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#Moment.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#Moment.AddImage)                                             | Creates a new child Image.                                                        |
| [`CopyTo`](#Moment.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Moment.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`Delete`](#Moment.Delete)                                                 | Run the Delete action.                                                            |
| [`Duplicate`](#Moment.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#Moment.GetActivateAtLoadStep)                   | Gets whether the moment is active at the specified load step.                     |
| [`GetChildren`](#Moment.GetChildren)                                       | Gets the list of children, filtered by type.                                      |
| [`GetComponentActivateAtLoadStep`](#Moment.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`GetParameter`](#Moment.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Moment.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Moment.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#Moment.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`PromoteToRemotePoint`](#Moment.PromoteToRemotePoint)                     | Run the PromoteToRemotePoint action.                                              |
| [`PropertyByAPIName`](#Moment.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`PropertyByName`](#Moment.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Moment.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#Moment.SetActivateAtLoadStep)                   | Sets whether the moment is active at the specified load step.                     |
| [`SetComponentActivateAtLoadStep`](#Moment.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |

### Properties

| Name | Description |
|--------------------------------------------------------------|---------------------------------------------------------------|
| [`BeamMaterial`](#Moment.BeamMaterial)                       | Gets or sets the BeamMaterial.                                |
| [`BeamRadius`](#Moment.BeamRadius)                           | Gets or sets the BeamRadius.                                  |
| [`Behavior`](#Moment.Behavior)                               | Gets or sets the Behavior.                                    |
| [`Children`](#Moment.Children)                               | Gets the list of children.                                    |
| [`Comments`](#Moment.Comments)                               | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#Moment.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#Moment.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`DefineBy`](#Moment.DefineBy)                               | Gets or sets the DefineBy.                                    |
| [`Direction`](#Moment.Direction)                             | Gets or sets the Direction.                                   |
| [`Figures`](#Moment.Figures)                                 | Gets the list of associated figures.                          |
| [`HarmonicIndex`](#Moment.HarmonicIndex)                     | Gets or sets the HarmonicIndex.                               |
| [`Images`](#Moment.Images)                                   | Gets the list of associated images.                           |
| [`IndependentVariable`](#Moment.IndependentVariable)         | Gets or sets the IndependentVariable.                         |
| [`InternalObject`](#Moment.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`LoadingApplicationType`](#Moment.LoadingApplicationType)   | Gets or sets the LoadingApplicationType.                      |
| [`Location`](#Moment.Location)                               | Gets or sets the Geometry.                                    |
| [`Magnitude`](#Moment.Magnitude)                             | Gets the Magnitude.                                           |
| [`MagnitudeImag`](#Moment.MagnitudeImag)                     | Gets the MagnitudeImag.                                       |
| [`NonCyclicLoadingType`](#Moment.NonCyclicLoadingType)       | Gets or sets the NonCyclicLoadingType.                        |
| [`NumberOfSegments`](#Moment.NumberOfSegments)               | Gets or sets the NumberOfSegments.                            |
| [`PhaseAngle`](#Moment.PhaseAngle)                           | Gets the PhaseAngle.                                          |
| [`PinballRegion`](#Moment.PinballRegion)                     | Gets or sets the PinballRegion.                               |
| [`Properties`](#Moment.Properties)                           | Gets the list of properties for this object.                  |
| [`ReadOnly`](#Moment.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`RemotePoint`](#Moment.RemotePoint)                         | Gets the remote point associated to the point mass.           |
| [`RpmSelection`](#Moment.RpmSelection)                       | Gets or sets the RPMSelection.                                |
| [`SectorNumber`](#Moment.SectorNumber)                       | Gets or sets the SectorNumber.                                |
| [`SharedRefBody`](#Moment.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`StepSelection`](#Moment.StepSelection)                     | Gets or sets the StepSelection.                               |
| [`StepVarying`](#Moment.StepVarying)                         | Gets or sets the StepVarying.                                 |
| [`Suppressed`](#Moment.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#Moment.VisibleProperties)             | Gets the list of properties that are visible for this object. |
| [`XComponent`](#Moment.XComponent)                           | Gets the XComponent.                                          |
| [`XComponentImag`](#Moment.XComponentImag)                   | Gets the XComponentImag.                                      |
| [`XPhaseAngle`](#Moment.XPhaseAngle)                         | Gets the XPhaseAngle.                                         |
| [`YComponent`](#Moment.YComponent)                           | Gets the YComponent.                                          |
| [`YComponentImag`](#Moment.YComponentImag)                   | Gets the YComponentImag.                                      |
| [`YPhaseAngle`](#Moment.YPhaseAngle)                         | Gets the YPhaseAngle.                                         |
| [`ZComponent`](#Moment.ZComponent)                           | Gets the ZComponent.                                          |
| [`ZComponentImag`](#Moment.ZComponentImag)                   | Gets the ZComponentImag.                                      |
| [`ZPhaseAngle`](#Moment.ZPhaseAngle)                         | Gets the ZPhaseAngle.                                         |

<a id="property-detail"></a>

## Property detail

<a id="Moment.BeamMaterial"></a>

### *property* Moment.BeamMaterial *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="Moment.BeamRadius"></a>

### *property* Moment.BeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Behavior"></a>

### *property* Moment.Behavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Children"></a>

### *property* Moment.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Comments"></a>

### *property* Moment.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Moment.CoordinateSystem"></a>

### *property* Moment.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Moment.DataModelObjectCategory"></a>

### *property* Moment.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Moment.DefineBy"></a>

### *property* Moment.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Direction"></a>

### *property* Moment.Direction *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Figures"></a>

### *property* Moment.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Moment.HarmonicIndex"></a>

### *property* Moment.HarmonicIndex *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Images"></a>

### *property* Moment.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Moment.IndependentVariable"></a>

### *property* Moment.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="Moment.InternalObject"></a>

### *property* Moment.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Moment.LoadingApplicationType"></a>

### *property* Moment.LoadingApplicationType *: [Ansys.Mechanical.DataModel.Enums.LoadingApplicationType](../../../../Mechanical/DataModel/Enums/LoadingApplicationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.LoadingApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadingApplicationType.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Location"></a>

### *property* Moment.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Geometry.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Magnitude"></a>

### *property* Moment.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="Moment.MagnitudeImag"></a>

### *property* Moment.MagnitudeImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MagnitudeImag.

<!-- !! processed by numpydoc !! -->

<a id="Moment.NonCyclicLoadingType"></a>

### *property* Moment.NonCyclicLoadingType *: [Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType](../../../../Mechanical/DataModel/Enums/NonCyclicLoadingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonCyclicLoadingType.

<!-- !! processed by numpydoc !! -->

<a id="Moment.NumberOfSegments"></a>

### *property* Moment.NumberOfSegments *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Moment.PhaseAngle"></a>

### *property* Moment.PhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Moment.PinballRegion"></a>

### *property* Moment.PinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Properties"></a>

### *property* Moment.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Moment.ReadOnly"></a>

### *property* Moment.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Moment.RemotePoint"></a>

### *property* Moment.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../RemotePoint.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the remote point associated to the point mass.

<!-- !! processed by numpydoc !! -->

<a id="Moment.RpmSelection"></a>

### *property* Moment.RpmSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RPMSelection.

<!-- !! processed by numpydoc !! -->

<a id="Moment.SectorNumber"></a>

### *property* Moment.SectorNumber *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="Moment.SharedRefBody"></a>

### *property* Moment.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="Moment.StepSelection"></a>

### *property* Moment.StepSelection *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepSelection.

<!-- !! processed by numpydoc !! -->

<a id="Moment.StepVarying"></a>

### *property* Moment.StepVarying *: [Ansys.Mechanical.DataModel.Enums.StepVarying](../../../../Mechanical/DataModel/Enums/StepVarying.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.StepVarying) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepVarying.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Suppressed"></a>

### *property* Moment.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Moment.VisibleProperties"></a>

### *property* Moment.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Moment.XComponent"></a>

### *property* Moment.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="Moment.XComponentImag"></a>

### *property* Moment.XComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Moment.XPhaseAngle"></a>

### *property* Moment.XPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Moment.YComponent"></a>

### *property* Moment.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="Moment.YComponentImag"></a>

### *property* Moment.YComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Moment.YPhaseAngle"></a>

### *property* Moment.YPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Moment.ZComponent"></a>

### *property* Moment.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="Moment.ZComponentImag"></a>

### *property* Moment.ZComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Moment.ZPhaseAngle"></a>

### *property* Moment.ZPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v251.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Moment.Activate"></a>

### Moment.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Moment.AddComment"></a>

### Moment.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Moment.AddFigure"></a>

### Moment.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Moment.AddImage"></a>

### Moment.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Moment.CopyTo"></a>

### Moment.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Moment.CreateParameter"></a>

### Moment.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Delete"></a>

### Moment.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Duplicate"></a>

### Moment.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GetActivateAtLoadStep"></a>

### Moment.GetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets whether the moment is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GetChildren"></a>

### Moment.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GetComponentActivateAtLoadStep"></a>

### Moment.GetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/library/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GetParameter"></a>

### Moment.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GroupAllSimilarChildren"></a>

### Moment.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GroupSimilarObjects"></a>

### Moment.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Moment.PromoteToNamedSelection"></a>

### Moment.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Moment.PromoteToRemotePoint"></a>

### Moment.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="Moment.PropertyByAPIName"></a>

### Moment.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Moment.PropertyByName"></a>

### Moment.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Moment.RemoveParameter"></a>

### Moment.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Moment.SetActivateAtLoadStep"></a>

### Moment.SetActivateAtLoadStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool))

Sets whether the moment is active at the specified load step.

<!-- !! processed by numpydoc !! -->

<a id="Moment.SetComponentActivateAtLoadStep"></a>

### Moment.SetComponentActivateAtLoadStep(component: [str](https://docs.python.org/3/library/stdtypes.html#str), stepNumber: [int](https://docs.python.org/3/library/functions.html#int), bActive: [bool](https://docs.python.org/3/library/functions.html#bool))

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

