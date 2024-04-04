# SolutionInformation

### *class* SolutionInformation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a SolutionInformation.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`ImportResultTrackersFromFile`](#SolutionInformation.ImportResultTrackersFromFile)                 | Import Result Trackers from File.                                                 |
|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddDeformationPlotTracker`](#SolutionInformation.AddDeformationPlotTracker)                       | Creates a new TotalDeformation Plot Tracker.                                      |
| [`AddStressPlotTracker`](#SolutionInformation.AddStressPlotTracker)                                 | Creates a new EquivalentStress Plot Tracker.                                      |
| [`AddStrainPlotTracker`](#SolutionInformation.AddStrainPlotTracker)                                 | Creates a new EquivalentElasticStrainRST Plot Tracker.                            |
| [`AddTemperaturePlotTracker`](#SolutionInformation.AddTemperaturePlotTracker)                       | Creates a new TemperatureResult Plot Tracker.                                     |
| [`EvaluateAllContactTrackers`](#SolutionInformation.EvaluateAllContactTrackers)                     | Run the EvaluateAllContactTrackers action.                                        |
| [`AddAddedMass`](#SolutionInformation.AddAddedMass)                                                 | Creates a new AddedMassTracker                                                    |
| [`AddArtificialEnergy`](#SolutionInformation.AddArtificialEnergy)                                   | Creates a new ArtificialEnergyTracker                                             |
| [`AddChattering`](#SolutionInformation.AddChattering)                                               | Creates a new ContactChatteringTracker                                            |
| [`AddClosedPenetration`](#SolutionInformation.AddClosedPenetration)                                 | Creates a new ContactClosedPenetrationTracker                                     |
| [`AddContactDepth`](#SolutionInformation.AddContactDepth)                                           | Creates a new ContactDepthTracker                                                 |
| [`AddElasticSlip`](#SolutionInformation.AddElasticSlip)                                             | Creates a new ContactElasticSlipTracker                                           |
| [`AddContactEnergy`](#SolutionInformation.AddContactEnergy)                                         | Creates a new ContactEnergyTracker                                                |
| [`AddFluidPressure`](#SolutionInformation.AddFluidPressure)                                         | Creates a new ContactFluidPressureTracker                                         |
| [`AddContactForce`](#SolutionInformation.AddContactForce)                                           | Creates a new ContactForceTracker                                                 |
| [`AddFrictionalDissipationEnergy`](#SolutionInformation.AddFrictionalDissipationEnergy)             | Creates a new ContactFrictionalDissipationEnergyTracker                           |
| [`AddFrictionalStress`](#SolutionInformation.AddFrictionalStress)                                   | Creates a new ContactFrictionalStressTracker                                      |
| [`AddGap`](#SolutionInformation.AddGap)                                                             | Creates a new ContactGapTracker                                                   |
| [`AddContactHeatFlux`](#SolutionInformation.AddContactHeatFlux)                                     | Creates a new ContactHeatFluxTracker                                              |
| [`AddContactingArea`](#SolutionInformation.AddContactingArea)                                       | Creates a new ContactingAreaTracker                                               |
| [`AddMaximumDampingPressure`](#SolutionInformation.AddMaximumDampingPressure)                       | Creates a new ContactMaximumDampingPressureTracker                                |
| [`AddMaximumGeometricSlidingDistance`](#SolutionInformation.AddMaximumGeometricSlidingDistance)     | Creates a new ContactMaximumGeometricSlidingDistanceTracker                       |
| [`AddContactMaximumNormalStiffness`](#SolutionInformation.AddContactMaximumNormalStiffness)         | Creates a new ContactMaximumNormalStiffnessTracker                                |
| [`AddMaximumTangentialStiffness`](#SolutionInformation.AddMaximumTangentialStiffness)               | Creates a new ContactMaximumTangentialStiffnessTracker                            |
| [`AddContactMaxTangentialFluidPressure`](#SolutionInformation.AddContactMaxTangentialFluidPressure) | Creates a new ContactMaxTangentialFluidPressureTracker                            |
| [`AddMinimumGeometricSlidingDistance`](#SolutionInformation.AddMinimumGeometricSlidingDistance)     | Creates a new ContactMinimumGeometricSlidingDistanceTracker                       |
| [`AddContactMinimumNormalStiffness`](#SolutionInformation.AddContactMinimumNormalStiffness)         | Creates a new ContactMinimumNormalStiffnessTracker                                |
| [`AddMinimumTangentialStiffness`](#SolutionInformation.AddMinimumTangentialStiffness)               | Creates a new ContactMinimumTangentialStiffnessTracker                            |
| [`AddNumberSticking`](#SolutionInformation.AddNumberSticking)                                       | Creates a new ContactNumberStickingTracker                                        |
| [`AddNumberWithLargePenetration`](#SolutionInformation.AddNumberWithLargePenetration)               | Creates a new ContactNumberWithLargePenetrationTracker                            |
| [`AddNumberWithTooMuchSliding`](#SolutionInformation.AddNumberWithTooMuchSliding)                   | Creates a new ContactNumberWithTooMuchSlidingTracker                              |
| [`AddContactPairForceConvergenceNorm`](#SolutionInformation.AddContactPairForceConvergenceNorm)     | Creates a new ContactPairForceConvergenceNormTracker                              |
| [`AddPenetration`](#SolutionInformation.AddPenetration)                                             | Creates a new ContactPenetrationTracker                                           |
| [`AddPossibleOverconstraint`](#SolutionInformation.AddPossibleOverconstraint)                       | Creates a new ContactPossibleOverconstraintTracker                                |
| [`AddContactPressure`](#SolutionInformation.AddContactPressure)                                     | Creates a new ContactPressureTracker                                              |
| [`AddResultingPinball`](#SolutionInformation.AddResultingPinball)                                   | Creates a new ContactResultingPinballTracker                                      |
| [`AddSlidingDistance`](#SolutionInformation.AddSlidingDistance)                                     | Creates a new ContactSlidingDistanceTracker                                       |
| [`AddSlidingIndication`](#SolutionInformation.AddSlidingIndication)                                 | Creates a new ContactSlidingIndicationTracker                                     |
| [`AddStabilizationEnergy`](#SolutionInformation.AddStabilizationEnergy)                             | Creates a new ContactStabilizationEnergyTracker                                   |
| [`AddStrainEnergy`](#SolutionInformation.AddStrainEnergy)                                           | Creates a new ContactStrainEnergyTracker                                          |
| [`AddTangentialDampingStress`](#SolutionInformation.AddTangentialDampingStress)                     | Creates a new ContactTangentialDampingStressTracker                               |
| [`AddTotalForceFromContactPressureX`](#SolutionInformation.AddTotalForceFromContactPressureX)       | Creates a new ContactTotalForceFromContactPressureXTracker                        |
| [`AddTotalForceFromContactPressureY`](#SolutionInformation.AddTotalForceFromContactPressureY)       | Creates a new ContactTotalForceFromContactPressureYTracker                        |
| [`AddTotalForceFromContactPressureZ`](#SolutionInformation.AddTotalForceFromContactPressureZ)       | Creates a new ContactTotalForceFromContactPressureZTracker                        |
| [`AddTotalForceFromTangentialStressX`](#SolutionInformation.AddTotalForceFromTangentialStressX)     | Creates a new ContactTotalForceFromTangentialStressXTracker                       |
| [`AddTotalForceFromTangentialStressY`](#SolutionInformation.AddTotalForceFromTangentialStressY)     | Creates a new ContactTotalForceFromTangentialStressYTracker                       |
| [`AddTotalForceFromTangentialStressZ`](#SolutionInformation.AddTotalForceFromTangentialStressZ)     | Creates a new ContactTotalForceFromTangentialStressZTracker                       |
| [`AddVolumeLossDueToWear`](#SolutionInformation.AddVolumeLossDueToWear)                             | Creates a new ContactVolumeLossDueToWearTracker                                   |
| [`AddDampingEnergy`](#SolutionInformation.AddDampingEnergy)                                         | Creates a new DampingEnergyTracker                                                |
| [`AddDensity`](#SolutionInformation.AddDensity)                                                     | Creates a new DensityTracker                                                      |
| [`AddDirectionalAcceleration`](#SolutionInformation.AddDirectionalAcceleration)                     | Creates a new DirectionalAccelerationTracker                                      |
| [`AddDirectionalDeformation`](#SolutionInformation.AddDirectionalDeformation)                       | Creates a new DirectionalDeformationTracker                                       |
| [`AddDirectionalVelocity`](#SolutionInformation.AddDirectionalVelocity)                             | Creates a new DirectionalVelocityTracker                                          |
| [`AddEffectiveStrain`](#SolutionInformation.AddEffectiveStrain)                                     | Creates a new EffectiveStrainTracker                                              |
| [`AddEffectiveStress`](#SolutionInformation.AddEffectiveStress)                                     | Creates a new EffectiveStressTracker                                              |
| [`AddErodedInternalEnergy`](#SolutionInformation.AddErodedInternalEnergy)                           | Creates a new ErodedInternalEnergyTracker                                         |
| [`AddErodedKineticEnergy`](#SolutionInformation.AddErodedKineticEnergy)                             | Creates a new ErodedKineticEnergyTracker                                          |
| [`AddExternalForce`](#SolutionInformation.AddExternalForce)                                         | Creates a new ExternalForceTracker                                                |
| [`AddForceReaction`](#SolutionInformation.AddForceReaction)                                         | Creates a new ForceReactionTracker                                                |
| [`AddHourglassEnergy`](#SolutionInformation.AddHourglassEnergy)                                     | Creates a new HourglassEnergyTracker                                              |
| [`AddInternalEnergy`](#SolutionInformation.AddInternalEnergy)                                       | Creates a new InternalEnergyTracker                                               |
| [`AddKineticEnergy`](#SolutionInformation.AddKineticEnergy)                                         | Creates a new KineticEnergyTracker                                                |
| [`AddLatticeDensity`](#SolutionInformation.AddLatticeDensity)                                       | Creates a new LatticeDensity                                                      |
| [`AddLatticeElementalDensity`](#SolutionInformation.AddLatticeElementalDensity)                     | Creates a new LatticeElementalDensity                                             |
| [`AddLSDYNAGeneralTracker`](#SolutionInformation.AddLSDYNAGeneralTracker)                           | Creates a new LSDYNAGeneralTracker                                                |
| [`AddMomentReaction`](#SolutionInformation.AddMomentReaction)                                       | Creates a new MomentReactionTracker                                               |
| [`AddMomentum`](#SolutionInformation.AddMomentum)                                                   | Creates a new MomentumTracker                                                     |
| [`AddNonLinearStabilizationEnergy`](#SolutionInformation.AddNonLinearStabilizationEnergy)           | Creates a new NonLinearStabilizationEnergyTracker                                 |
| [`AddNumberContacting`](#SolutionInformation.AddNumberContacting)                                   | Creates a new NumberContactingTracker                                             |
| [`AddPlasticWork`](#SolutionInformation.AddPlasticWork)                                             | Creates a new PlasticWorkTracker                                                  |
| [`AddPosition`](#SolutionInformation.AddPosition)                                                   | Creates a new PositionTracker                                                     |
| [`AddPressure`](#SolutionInformation.AddPressure)                                                   | Creates a new PressureTracker                                                     |
| [`AddRigidBodyVelocity`](#SolutionInformation.AddRigidBodyVelocity)                                 | Creates a new RigidBodyVelocityTracker                                            |
| [`AddSpringTrackerDampingForce`](#SolutionInformation.AddSpringTrackerDampingForce)                 | Creates a new SpringDampingForceTracker                                           |
| [`AddSpringTrackerElasticForce`](#SolutionInformation.AddSpringTrackerElasticForce)                 | Creates a new SpringElasticForceTracker                                           |
| [`AddSpringTrackerElongation`](#SolutionInformation.AddSpringTrackerElongation)                     | Creates a new SpringElongationTracker                                             |
| [`AddSpringTrackerVelocity`](#SolutionInformation.AddSpringTrackerVelocity)                         | Creates a new SpringVelocityTracker                                               |
| [`AddStiffnessEnergy`](#SolutionInformation.AddStiffnessEnergy)                                     | Creates a new StiffnessEnergyTracker                                              |
| [`AddTemperature`](#SolutionInformation.AddTemperature)                                             | Creates a new TemperatureTracker                                                  |
| [`AddTopologyDensity`](#SolutionInformation.AddTopologyDensity)                                     | Creates a new TopologyDensity                                                     |
| [`AddTopologyElementalDensity`](#SolutionInformation.AddTopologyElementalDensity)                   | Creates a new TopologyElementalDensity                                            |
| [`AddTotalEnergy`](#SolutionInformation.AddTotalEnergy)                                             | Creates a new TotalEnergyTracker                                                  |
| [`AddTotalMassAverageVelocity`](#SolutionInformation.AddTotalMassAverageVelocity)                   | Creates a new TotalMassAverageVelocityTracker                                     |
| [`RenameBasedOnDefinition`](#SolutionInformation.RenameBasedOnDefinition)                           | Run the RenameBasedOnDefinition action.                                           |
| [`GetChildren`](#id1)                                                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#SolutionInformation.AddComment)                                                     | Creates a new child Comment.                                                      |
| [`AddFigure`](#SolutionInformation.AddFigure)                                                       | Creates a new child Figure.                                                       |
| [`AddImage`](#SolutionInformation.AddImage)                                                         | Creates a new child Image.                                                        |
| [`Activate`](#SolutionInformation.Activate)                                                         | Activate the current object.                                                      |
| [`CopyTo`](#SolutionInformation.CopyTo)                                                             | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#SolutionInformation.Duplicate)                                                       | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#SolutionInformation.GroupAllSimilarChildren)                           | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#SolutionInformation.GroupSimilarObjects)                                   | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#SolutionInformation.PropertyByName)                                             | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#SolutionInformation.PropertyByAPIName)                                       | Get a property by its API name.                                                   |
| [`CreateParameter`](#SolutionInformation.CreateParameter)                                           | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#SolutionInformation.GetParameter)                                                 | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#SolutionInformation.RemoveParameter)                                           | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`EnvironmentSelection`](#SolutionInformation.EnvironmentSelection)                                                 | Gets or Sets the EnvironmentSelection to an Analysis object.   |
|---------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.             |
| [`DisplayPoints`](#SolutionInformation.DisplayPoints)                                                               | Gets or sets the DisplayPoints.                                |
| [`IdentifyElementViolations`](#SolutionInformation.IdentifyElementViolations)                                       | Gets or sets the IdentifyElementViolations.                    |
| [`NewtonRaphsonResiduals`](#SolutionInformation.NewtonRaphsonResiduals)                                             | Gets or sets the NewtonRaphsonResiduals.                       |
| [`ModeNumber`](#SolutionInformation.ModeNumber)                                                                     | Gets or sets the ModeNumber.                                   |
| [`StepNumber`](#SolutionInformation.StepNumber)                                                                     | Gets or sets the StepNumber.                                   |
| [`UpdateInterval`](#SolutionInformation.UpdateInterval)                                                             | Gets or sets the UpdateInterval.                               |
| [`Component`](#SolutionInformation.Component)                                                                       | Gets or sets the Component.                                    |
| [`LineColor`](#SolutionInformation.LineColor)                                                                       | Gets or sets the LineColor.                                    |
| [`DrawConnectionsAttachedTo`](#SolutionInformation.DrawConnectionsAttachedTo)                                       | Gets or sets the DrawConnectionsAttachedTo.                    |
| [`Display`](#SolutionInformation.Display)                                                                           | Gets or sets the Display.                                      |
| [`DisplayType`](#SolutionInformation.DisplayType)                                                                   | Gets or sets the DisplayType.                                  |
| [`LineThickness`](#SolutionInformation.LineThickness)                                                               | Gets or sets the LineThickness.                                |
| [`SummaryType`](#SolutionInformation.SummaryType)                                                                   | Gets or sets the SummaryType.                                  |
| [`SolutionOutput`](#SolutionInformation.SolutionOutput)                                                             | Gets or sets the SolutionOutput.                               |
| [`StepSelectionMode`](#SolutionInformation.StepSelectionMode)                                                       | Gets or sets the StepSelectionMode.                            |
| [`VisibleOnResults`](#SolutionInformation.VisibleOnResults)                                                         | Gets or sets the VisibleOnResults.                             |
| [`ActivateVisibility`](#SolutionInformation.ActivateVisibility)                                                     | Gets or sets the ActivateVisibility.                           |
| [`ShowChargeResiduals`](#SolutionInformation.ShowChargeResiduals)                                                   | Gets or sets the ShowChargeResiduals.                          |
| [`ShowHeatResiduals`](#SolutionInformation.ShowHeatResiduals)                                                       | Gets or sets the ShowHeatResiduals.                            |
| [`ShowMomentResiduals`](#SolutionInformation.ShowMomentResiduals)                                                   | Gets or sets the ShowMomentResiduals.                          |
| [`DisplayFilterDuringSolve`](#SolutionInformation.DisplayFilterDuringSolve)                                         | Gets or sets the DisplayFilterDuringSolve.                     |
| [`ResponseConstraint`](ResponseConstraint.md#ResponseConstraint)                                                    | Gets or sets the ResponseConstraint.                           |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                   |
| [`Children`](#SolutionInformation.Children)                                                                         | Gets the list of children.                                     |
| [`Comments`](#SolutionInformation.Comments)                                                                         | Gets the list of associated comments.                          |
| [`Figures`](#SolutionInformation.Figures)                                                                           | Gets the list of associated figures.                           |
| [`Images`](#SolutionInformation.Images)                                                                             | Gets the list of associated images.                            |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.             |
| [`Properties`](#SolutionInformation.Properties)                                                                     | Gets the list of properties for this object.                   |
| [`VisibleProperties`](#SolutionInformation.VisibleProperties)                                                       | Gets the list of properties that are visible for this object.  |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import SolutionInformation
```

## Property detail

### *property* SolutionInformation.EnvironmentSelection *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the EnvironmentSelection to an Analysis object.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSolutionInfoToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.DisplayPoints *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayPoints.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.IdentifyElementViolations *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IdentifyElementViolations.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.NewtonRaphsonResiduals *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NewtonRaphsonResiduals.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.ModeNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeNumber.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.StepNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepNumber.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.UpdateInterval *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UpdateInterval.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.Component *: [Ansys.Mechanical.DataModel.Enums.OptimizationResponseConstraintComponentType](../../../Mechanical/DataModel/Enums/OptimizationResponseConstraintComponentType.md#OptimizationResponseConstraintComponentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Component.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.LineColor *: [Ansys.Mechanical.DataModel.Enums.FEConnectionLineColor](../../../Mechanical/DataModel/Enums/FEConnectionLineColor.md#FEConnectionLineColor) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LineColor.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.DrawConnectionsAttachedTo *: [Ansys.Mechanical.DataModel.Enums.NodeSelection](../../../Mechanical/DataModel/Enums/NodeSelection.md#NodeSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DrawConnectionsAttachedTo.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.Display *: [Ansys.Mechanical.DataModel.Enums.FEConnectionDisplay](../../../Mechanical/DataModel/Enums/FEConnectionDisplay.md#FEConnectionDisplay) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Display.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.DisplayType *: [Ansys.Mechanical.DataModel.Enums.FEConnectionDisplayType](../../../Mechanical/DataModel/Enums/FEConnectionDisplayType.md#FEConnectionDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayType.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.LineThickness *: [Ansys.Mechanical.DataModel.Enums.FEConnectionLineThicknessType](../../../Mechanical/DataModel/Enums/FEConnectionLineThicknessType.md#FEConnectionLineThicknessType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LineThickness.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.SummaryType *: [Ansys.Mechanical.DataModel.Enums.PFactorResultType](../../../Mechanical/DataModel/Enums/PFactorResultType.md#PFactorResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SummaryType.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.SolutionOutput *: [Ansys.Mechanical.DataModel.Enums.SolutionOutputType](../../../Mechanical/DataModel/Enums/SolutionOutputType.md#SolutionOutputType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionOutput.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.StepSelectionMode *: [Ansys.Mechanical.DataModel.Enums.SeqSelectionMode](../../../Mechanical/DataModel/Enums/SeqSelectionMode.md#SeqSelectionMode) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepSelectionMode.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.VisibleOnResults *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VisibleOnResults.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.ActivateVisibility *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActivateVisibility.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.ShowChargeResiduals *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowChargeResiduals.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.ShowHeatResiduals *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowHeatResiduals.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.ShowMomentResiduals *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowMomentResiduals.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.DisplayFilterDuringSolve *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayFilterDuringSolve.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.ResponseConstraint *: [Ansys.ACT.Automation.Mechanical.ResponseConstraint](ResponseConstraint.md#ResponseConstraint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResponseConstraint.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* SolutionInformation.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### SolutionInformation.ImportResultTrackersFromFile(fileName: System.String)

Import Result Trackers from File.

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddDeformationPlotTracker()

Creates a new TotalDeformation Plot Tracker.

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddStressPlotTracker()

Creates a new EquivalentStress Plot Tracker.

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddStrainPlotTracker()

Creates a new EquivalentElasticStrainRST Plot Tracker.

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddTemperaturePlotTracker()

Creates a new TemperatureResult Plot Tracker.

<!-- !! processed by numpydoc !! -->

### SolutionInformation.EvaluateAllContactTrackers()

Run the EvaluateAllContactTrackers action.

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddAddedMass()

Creates a new AddedMassTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddArtificialEnergy()

Creates a new ArtificialEnergyTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddChattering()

Creates a new ContactChatteringTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddClosedPenetration()

Creates a new ContactClosedPenetrationTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddContactDepth()

Creates a new ContactDepthTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddElasticSlip()

Creates a new ContactElasticSlipTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddContactEnergy()

Creates a new ContactEnergyTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddFluidPressure()

Creates a new ContactFluidPressureTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddContactForce()

Creates a new ContactForceTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddFrictionalDissipationEnergy()

Creates a new ContactFrictionalDissipationEnergyTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddFrictionalStress()

Creates a new ContactFrictionalStressTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddGap()

Creates a new ContactGapTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddContactHeatFlux()

Creates a new ContactHeatFluxTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddContactingArea()

Creates a new ContactingAreaTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddMaximumDampingPressure()

Creates a new ContactMaximumDampingPressureTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddMaximumGeometricSlidingDistance()

Creates a new ContactMaximumGeometricSlidingDistanceTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddContactMaximumNormalStiffness()

Creates a new ContactMaximumNormalStiffnessTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddMaximumTangentialStiffness()

Creates a new ContactMaximumTangentialStiffnessTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddContactMaxTangentialFluidPressure()

Creates a new ContactMaxTangentialFluidPressureTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddMinimumGeometricSlidingDistance()

Creates a new ContactMinimumGeometricSlidingDistanceTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddContactMinimumNormalStiffness()

Creates a new ContactMinimumNormalStiffnessTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddMinimumTangentialStiffness()

Creates a new ContactMinimumTangentialStiffnessTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddNumberSticking()

Creates a new ContactNumberStickingTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddNumberWithLargePenetration()

Creates a new ContactNumberWithLargePenetrationTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddNumberWithTooMuchSliding()

Creates a new ContactNumberWithTooMuchSlidingTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddContactPairForceConvergenceNorm()

Creates a new ContactPairForceConvergenceNormTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddPenetration()

Creates a new ContactPenetrationTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddPossibleOverconstraint()

Creates a new ContactPossibleOverconstraintTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddContactPressure()

Creates a new ContactPressureTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddResultingPinball()

Creates a new ContactResultingPinballTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddSlidingDistance()

Creates a new ContactSlidingDistanceTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddSlidingIndication()

Creates a new ContactSlidingIndicationTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddStabilizationEnergy()

Creates a new ContactStabilizationEnergyTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddStrainEnergy()

Creates a new ContactStrainEnergyTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddTangentialDampingStress()

Creates a new ContactTangentialDampingStressTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddTotalForceFromContactPressureX()

Creates a new ContactTotalForceFromContactPressureXTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddTotalForceFromContactPressureY()

Creates a new ContactTotalForceFromContactPressureYTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddTotalForceFromContactPressureZ()

Creates a new ContactTotalForceFromContactPressureZTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddTotalForceFromTangentialStressX()

Creates a new ContactTotalForceFromTangentialStressXTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddTotalForceFromTangentialStressY()

Creates a new ContactTotalForceFromTangentialStressYTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddTotalForceFromTangentialStressZ()

Creates a new ContactTotalForceFromTangentialStressZTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddVolumeLossDueToWear()

Creates a new ContactVolumeLossDueToWearTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddDampingEnergy()

Creates a new DampingEnergyTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddDensity()

Creates a new DensityTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddDirectionalAcceleration()

Creates a new DirectionalAccelerationTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddDirectionalDeformation()

Creates a new DirectionalDeformationTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddDirectionalVelocity()

Creates a new DirectionalVelocityTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddEffectiveStrain()

Creates a new EffectiveStrainTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddEffectiveStress()

Creates a new EffectiveStressTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddErodedInternalEnergy()

Creates a new ErodedInternalEnergyTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddErodedKineticEnergy()

Creates a new ErodedKineticEnergyTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddExternalForce()

Creates a new ExternalForceTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddForceReaction()

Creates a new ForceReactionTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddHourglassEnergy()

Creates a new HourglassEnergyTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddInternalEnergy()

Creates a new InternalEnergyTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddKineticEnergy()

Creates a new KineticEnergyTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddLatticeDensity()

Creates a new LatticeDensity

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddLatticeElementalDensity()

Creates a new LatticeElementalDensity

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddLSDYNAGeneralTracker()

Creates a new LSDYNAGeneralTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddMomentReaction()

Creates a new MomentReactionTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddMomentum()

Creates a new MomentumTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddNonLinearStabilizationEnergy()

Creates a new NonLinearStabilizationEnergyTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddNumberContacting()

Creates a new NumberContactingTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddPlasticWork()

Creates a new PlasticWorkTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddPosition()

Creates a new PositionTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddPressure()

Creates a new PressureTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddRigidBodyVelocity()

Creates a new RigidBodyVelocityTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddSpringTrackerDampingForce()

Creates a new SpringDampingForceTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddSpringTrackerElasticForce()

Creates a new SpringElasticForceTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddSpringTrackerElongation()

Creates a new SpringElongationTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddSpringTrackerVelocity()

Creates a new SpringVelocityTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddStiffnessEnergy()

Creates a new StiffnessEnergyTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddTemperature()

Creates a new TemperatureTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddTopologyDensity()

Creates a new TopologyDensity

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddTopologyElementalDensity()

Creates a new TopologyElementalDensity

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddTotalEnergy()

Creates a new TotalEnergyTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddTotalMassAverageVelocity()

Creates a new TotalMassAverageVelocityTracker

<!-- !! processed by numpydoc !! -->

### SolutionInformation.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

### SolutionInformation.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### SolutionInformation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### SolutionInformation.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### SolutionInformation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### SolutionInformation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### SolutionInformation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### SolutionInformation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### SolutionInformation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### SolutionInformation.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### SolutionInformation.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### SolutionInformation.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### SolutionInformation.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### SolutionInformation.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
