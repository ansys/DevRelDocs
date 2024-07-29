# `Pressure`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Pressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Pressure.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetActivateAtLoadStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`GetComponentActivateAtLoadStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`SetComponentActivateAtLoadStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |
| [`PromoteToNamedSelection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.Delete)                                                 | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Direction`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.Direction)                                     | Gets or sets the Direction.                                   |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#id0)                                               | Gets the internal object. For advanced usage only.            |
| [`NumberOfSegments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                            |
| [`LoadVectorNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.LoadVectorNumber)                       | Gets or sets the LoadVectorNumber.                            |
| [`XComponent`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.XComponent)                                   | Gets the XComponent.                                          |
| [`XComponentImag`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.XComponentImag)                           | Gets the XComponentImag.                                      |
| [`YComponent`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.YComponent)                                   | Gets the YComponent.                                          |
| [`YComponentImag`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.YComponentImag)                           | Gets the YComponentImag.                                      |
| [`ZComponent`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.ZComponent)                                   | Gets the ZComponent.                                          |
| [`ZComponentImag`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.ZComponentImag)                           | Gets the ZComponentImag.                                      |
| [`HarmonicIndex`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.HarmonicIndex)                             | Gets or sets the HarmonicIndex.                               |
| [`SectorNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.SectorNumber)                               | Gets or sets the SectorNumber.                                |
| [`Magnitude`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.Magnitude)                                     | Gets the Magnitude.                                           |
| [`MagnitudeImag`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.MagnitudeImag)                             | Gets the MagnitudeImag.                                       |
| [`PhaseAngle`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.PhaseAngle)                                   | Gets the PhaseAngle.                                          |
| [`XPhaseAngle`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.XPhaseAngle)                                 | Gets the XPhaseAngle.                                         |
| [`YPhaseAngle`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.YPhaseAngle)                                 | Gets the YPhaseAngle.                                         |
| [`ZPhaseAngle`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.ZPhaseAngle)                                 | Gets the ZPhaseAngle.                                         |
| [`RangeMaximum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.RangeMaximum)                               | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.RangeMinimum)                               | Gets or sets the RangeMinimum.                                |
| [`AppliedBy`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.AppliedBy)                                     | Gets or sets the AppliedBy.                                   |
| [`DefineBy`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.DefineBy)                                       | Gets or sets the DefineBy.                                    |
| [`DynamicRelaxationBehavior`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.DynamicRelaxationBehavior)     | Gets or sets the DynamicRelaxationBehavior.                   |
| [`GraphControlsXAxis`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                          |
| [`LoadedArea`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.LoadedArea)                                   | Gets or sets the LoadedArea.                                  |
| [`LoadVectorAssignment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.LoadVectorAssignment)               | Gets or sets the LoadVectorAssignment.                        |
| [`NonCyclicLoadingType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.NonCyclicLoadingType)               | Gets or sets the NonCyclicLoadingType.                        |
| [`IndependentVariable`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.IndependentVariable)                 | Gets or sets the IndependentVariable.                         |
| [`CoordinateSystem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                            |
| [`XYZFunctionCoordinateSystem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.XYZFunctionCoordinateSystem) | Gets or sets the XYZFunctionCoordinateSystem.                 |
| [`TableAssignment`](#Pressure.TableAssignment)                                                                                                              | Gets or sets the TableAssignment.                             |
| [`Location`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.Location)                                       | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.SharedRefBody)                             | Gets or sets the SharedRefBody.                               |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.Children)                                       | Gets the list of children.                                    |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.Comments)                                       | Gets the list of associated comments.                         |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.Figures)                                         | Gets the list of associated figures.                          |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.Images)                                           | Gets the list of associated images.                           |
| [`ReadOnly`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.ReadOnly)                                       | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#id0)                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.Properties)                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Pressure.Direction"></a>

### *property* Pressure.Direction *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.InternalObject"></a>

### *property* Pressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.NumberOfSegments"></a>

### *property* Pressure.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.LoadVectorNumber"></a>

### *property* Pressure.LoadVectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.XComponent"></a>

### *property* Pressure.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.XComponentImag"></a>

### *property* Pressure.XComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.YComponent"></a>

### *property* Pressure.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.YComponentImag"></a>

### *property* Pressure.YComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.ZComponent"></a>

### *property* Pressure.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.ZComponentImag"></a>

### *property* Pressure.ZComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.HarmonicIndex"></a>

### *property* Pressure.HarmonicIndex *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.SectorNumber"></a>

### *property* Pressure.SectorNumber *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Magnitude"></a>

### *property* Pressure.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.MagnitudeImag"></a>

### *property* Pressure.MagnitudeImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MagnitudeImag.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.PhaseAngle"></a>

### *property* Pressure.PhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.XPhaseAngle"></a>

### *property* Pressure.XPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.YPhaseAngle"></a>

### *property* Pressure.YPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.ZPhaseAngle"></a>

### *property* Pressure.ZPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.RangeMaximum"></a>

### *property* Pressure.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.RangeMinimum"></a>

### *property* Pressure.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.AppliedBy"></a>

### *property* Pressure.AppliedBy *: [Ansys.Mechanical.DataModel.Enums.LoadAppliedBy](../../../../Mechanical/DataModel/Enums/LoadAppliedBy.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadAppliedBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.DefineBy"></a>

### *property* Pressure.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.DynamicRelaxationBehavior"></a>

### *property* Pressure.DynamicRelaxationBehavior *: [Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType](../../../../Mechanical/DataModel/Enums/DynamicRelaxationBehaviorType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DynamicRelaxationBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GraphControlsXAxis"></a>

### *property* Pressure.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.LoadedArea"></a>

### *property* Pressure.LoadedArea *: [Ansys.Mechanical.DataModel.Enums.LoadedArea](../../../../Mechanical/DataModel/Enums/LoadedArea.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadedArea) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadedArea.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.LoadVectorAssignment"></a>

### *property* Pressure.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../Mechanical/DataModel/Enums/LoadVectorAssignment.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorAssignment.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.NonCyclicLoadingType"></a>

### *property* Pressure.NonCyclicLoadingType *: [Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType](../../../../Mechanical/DataModel/Enums/NonCyclicLoadingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonCyclicLoadingType.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.IndependentVariable"></a>

### *property* Pressure.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.CoordinateSystem"></a>

### *property* Pressure.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.XYZFunctionCoordinateSystem"></a>

### *property* Pressure.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.TableAssignment"></a>

### *property* Pressure.TableAssignment *: [Ansys.ACT.Automation.Mechanical.Table](../Table.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Table) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TableAssignment.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Location"></a>

### *property* Pressure.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.DataModelObjectCategory"></a>

### *property* Pressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Suppressed"></a>

### *property* Pressure.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.SharedRefBody"></a>

### *property* Pressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Children"></a>

### *property* Pressure.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Comments"></a>

### *property* Pressure.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Figures"></a>

### *property* Pressure.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Images"></a>

### *property* Pressure.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.ReadOnly"></a>

### *property* Pressure.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Pressure.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Properties"></a>

### *property* Pressure.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.VisibleProperties"></a>

### *property* Pressure.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Pressure.GetActivateAtLoadStep"></a>

### Pressure.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.SetActivateAtLoadStep"></a>

### Pressure.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GetComponentActivateAtLoadStep"></a>

### Pressure.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.SetComponentActivateAtLoadStep"></a>

### Pressure.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.PromoteToNamedSelection"></a>

### Pressure.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Delete"></a>

### Pressure.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GetChildren"></a>

### Pressure.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Pressure.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.AddComment"></a>

### Pressure.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.AddFigure"></a>

### Pressure.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.AddImage"></a>

### Pressure.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Activate"></a>

### Pressure.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.CopyTo"></a>

### Pressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Duplicate"></a>

### Pressure.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GroupAllSimilarChildren"></a>

### Pressure.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GroupSimilarObjects"></a>

### Pressure.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.PropertyByName"></a>

### Pressure.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.PropertyByAPIName"></a>

### Pressure.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.CreateParameter"></a>

### Pressure.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GetParameter"></a>

### Pressure.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.RemoveParameter"></a>

### Pressure.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

