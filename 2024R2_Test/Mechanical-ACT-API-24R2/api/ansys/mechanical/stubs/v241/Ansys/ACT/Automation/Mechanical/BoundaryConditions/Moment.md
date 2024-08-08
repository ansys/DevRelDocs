# `Moment`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Moment

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Moment.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetActivateAtLoadStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`GetComponentActivateAtLoadStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`SetComponentActivateAtLoadStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |
| [`PromoteToRemotePoint`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.PromoteToRemotePoint)                     | Run the PromoteToRemotePoint action.                                              |
| [`PromoteToNamedSelection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.Delete)                                                 | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Direction`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.Direction)                             | Gets or sets the Direction.                                   |
| [`RemotePoint`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.RemotePoint)                         | Gets the remote point associated to the point mass.           |
| [`Location`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.Location)                               | Gets or sets the Geometry.                                    |
| [`StepSelection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.StepSelection)                     | Gets or sets the StepSelection.                               |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#id0)                                     | Gets the internal object. For advanced usage only.            |
| [`BeamMaterial`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.BeamMaterial)                       | Gets or sets the BeamMaterial.                                |
| [`NumberOfSegments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.NumberOfSegments)               | Gets or sets the NumberOfSegments.                            |
| [`XComponent`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.XComponent)                           | Gets the XComponent.                                          |
| [`XComponentImag`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.XComponentImag)                   | Gets the XComponentImag.                                      |
| [`YComponent`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.YComponent)                           | Gets the YComponent.                                          |
| [`YComponentImag`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.YComponentImag)                   | Gets the YComponentImag.                                      |
| [`ZComponent`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.ZComponent)                           | Gets the ZComponent.                                          |
| [`ZComponentImag`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.ZComponentImag)                   | Gets the ZComponentImag.                                      |
| [`HarmonicIndex`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.HarmonicIndex)                     | Gets or sets the HarmonicIndex.                               |
| [`SectorNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.SectorNumber)                       | Gets or sets the SectorNumber.                                |
| [`Magnitude`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.Magnitude)                             | Gets the Magnitude.                                           |
| [`MagnitudeImag`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.MagnitudeImag)                     | Gets the MagnitudeImag.                                       |
| [`PhaseAngle`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.PhaseAngle)                           | Gets the PhaseAngle.                                          |
| [`XPhaseAngle`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.XPhaseAngle)                         | Gets the XPhaseAngle.                                         |
| [`YPhaseAngle`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.YPhaseAngle)                         | Gets the YPhaseAngle.                                         |
| [`ZPhaseAngle`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.ZPhaseAngle)                         | Gets the ZPhaseAngle.                                         |
| [`BeamRadius`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.BeamRadius)                           | Gets or sets the BeamRadius.                                  |
| [`PinballRegion`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.PinballRegion)                     | Gets or sets the PinballRegion.                               |
| [`RpmSelection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.RpmSelection)                       | Gets or sets the RpmSelection.                                |
| [`Behavior`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.Behavior)                               | Gets or sets the Behavior.                                    |
| [`DefineBy`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.DefineBy)                               | Gets or sets the DefineBy.                                    |
| [`LoadingApplicationType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.LoadingApplicationType)   | Gets or sets the LoadingApplicationType.                      |
| [`StepVarying`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.StepVarying)                         | Gets or sets the StepVarying.                                 |
| [`NonCyclicLoadingType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.NonCyclicLoadingType)       | Gets or sets the NonCyclicLoadingType.                        |
| [`IndependentVariable`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.IndependentVariable)         | Gets or sets the IndependentVariable.                         |
| [`CoordinateSystem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Suppressed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#id0)                                     | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Moment.md#Moment.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Moment.Direction"></a>

### *property* Moment.Direction *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="Moment.RemotePoint"></a>

### *property* Moment.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../RemotePoint.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the remote point associated to the point mass.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Location"></a>

### *property* Moment.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Geometry.

<!-- !! processed by numpydoc !! -->

<a id="Moment.StepSelection"></a>

### *property* Moment.StepSelection *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepSelection.

<!-- !! processed by numpydoc !! -->

<a id="Moment.InternalObject"></a>

### *property* Moment.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Moment.BeamMaterial"></a>

### *property* Moment.BeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="Moment.NumberOfSegments"></a>

### *property* Moment.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Moment.XComponent"></a>

### *property* Moment.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="Moment.XComponentImag"></a>

### *property* Moment.XComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Moment.YComponent"></a>

### *property* Moment.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="Moment.YComponentImag"></a>

### *property* Moment.YComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Moment.ZComponent"></a>

### *property* Moment.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="Moment.ZComponentImag"></a>

### *property* Moment.ZComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Moment.HarmonicIndex"></a>

### *property* Moment.HarmonicIndex *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="Moment.SectorNumber"></a>

### *property* Moment.SectorNumber *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Magnitude"></a>

### *property* Moment.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="Moment.MagnitudeImag"></a>

### *property* Moment.MagnitudeImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MagnitudeImag.

<!-- !! processed by numpydoc !! -->

<a id="Moment.PhaseAngle"></a>

### *property* Moment.PhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Moment.XPhaseAngle"></a>

### *property* Moment.XPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Moment.YPhaseAngle"></a>

### *property* Moment.YPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Moment.ZPhaseAngle"></a>

### *property* Moment.ZPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Moment.BeamRadius"></a>

### *property* Moment.BeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="Moment.PinballRegion"></a>

### *property* Moment.PinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="Moment.RpmSelection"></a>

### *property* Moment.RpmSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmSelection.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Behavior"></a>

### *property* Moment.Behavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="Moment.DefineBy"></a>

### *property* Moment.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="Moment.LoadingApplicationType"></a>

### *property* Moment.LoadingApplicationType *: [Ansys.Mechanical.DataModel.Enums.LoadingApplicationType](../../../../Mechanical/DataModel/Enums/LoadingApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadingApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadingApplicationType.

<!-- !! processed by numpydoc !! -->

<a id="Moment.StepVarying"></a>

### *property* Moment.StepVarying *: [Ansys.Mechanical.DataModel.Enums.StepVarying](../../../../Mechanical/DataModel/Enums/StepVarying.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StepVarying) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepVarying.

<!-- !! processed by numpydoc !! -->

<a id="Moment.NonCyclicLoadingType"></a>

### *property* Moment.NonCyclicLoadingType *: [Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType](../../../../Mechanical/DataModel/Enums/NonCyclicLoadingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonCyclicLoadingType.

<!-- !! processed by numpydoc !! -->

<a id="Moment.IndependentVariable"></a>

### *property* Moment.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="Moment.CoordinateSystem"></a>

### *property* Moment.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Moment.DataModelObjectCategory"></a>

### *property* Moment.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Suppressed"></a>

### *property* Moment.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Moment.SharedRefBody"></a>

### *property* Moment.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Children"></a>

### *property* Moment.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Comments"></a>

### *property* Moment.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Figures"></a>

### *property* Moment.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Images"></a>

### *property* Moment.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Moment.ReadOnly"></a>

### *property* Moment.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Moment.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Properties"></a>

### *property* Moment.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Moment.VisibleProperties"></a>

### *property* Moment.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Moment.GetActivateAtLoadStep"></a>

### Moment.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Moment.SetActivateAtLoadStep"></a>

### Moment.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GetComponentActivateAtLoadStep"></a>

### Moment.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Moment.SetComponentActivateAtLoadStep"></a>

### Moment.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Moment.PromoteToRemotePoint"></a>

### Moment.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="Moment.PromoteToNamedSelection"></a>

### Moment.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Delete"></a>

### Moment.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GetChildren"></a>

### Moment.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Moment.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

### Moment.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Activate"></a>

### Moment.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Moment.CopyTo"></a>

### Moment.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Moment.Duplicate"></a>

### Moment.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GroupAllSimilarChildren"></a>

### Moment.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GroupSimilarObjects"></a>

### Moment.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Moment.PropertyByName"></a>

### Moment.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Moment.PropertyByAPIName"></a>

### Moment.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Moment.CreateParameter"></a>

### Moment.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Moment.GetParameter"></a>

### Moment.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Moment.RemoveParameter"></a>

### Moment.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

