# `SolutionInformation`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SolutionInformation

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a SolutionInformation.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ImportResultTrackersFromFile`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.ImportResultTrackersFromFile)                 | Import Result Trackers from File.                                                 |
| [`AddDeformationPlotTracker`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddDeformationPlotTracker)                       | Creates a new TotalDeformation Plot Tracker.                                      |
| [`AddStressPlotTracker`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddStressPlotTracker)                                 | Creates a new EquivalentStress Plot Tracker.                                      |
| [`AddStrainPlotTracker`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddStrainPlotTracker)                                 | Creates a new EquivalentElasticStrainRST Plot Tracker.                            |
| [`AddTemperaturePlotTracker`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddTemperaturePlotTracker)                       | Creates a new TemperatureResult Plot Tracker.                                     |
| [`EvaluateAllContactTrackers`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.EvaluateAllContactTrackers)                     | Run the EvaluateAllContactTrackers action.                                        |
| [`AddAddedMass`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddAddedMass)                                                 | Creates a new AddedMassTracker                                                    |
| [`AddArtificialEnergy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddArtificialEnergy)                                   | Creates a new ArtificialEnergyTracker                                             |
| [`AddChattering`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddChattering)                                               | Creates a new ContactChatteringTracker                                            |
| [`AddClosedPenetration`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddClosedPenetration)                                 | Creates a new ContactClosedPenetrationTracker                                     |
| [`AddContactDepth`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddContactDepth)                                           | Creates a new ContactDepthTracker                                                 |
| [`AddElasticSlip`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddElasticSlip)                                             | Creates a new ContactElasticSlipTracker                                           |
| [`AddContactEnergy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddContactEnergy)                                         | Creates a new ContactEnergyTracker                                                |
| [`AddFluidPressure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddFluidPressure)                                         | Creates a new ContactFluidPressureTracker                                         |
| [`AddContactForce`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddContactForce)                                           | Creates a new ContactForceTracker                                                 |
| [`AddFrictionalDissipationEnergy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddFrictionalDissipationEnergy)             | Creates a new ContactFrictionalDissipationEnergyTracker                           |
| [`AddFrictionalStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddFrictionalStress)                                   | Creates a new ContactFrictionalStressTracker                                      |
| [`AddGap`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddGap)                                                             | Creates a new ContactGapTracker                                                   |
| [`AddContactHeatFlux`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddContactHeatFlux)                                     | Creates a new ContactHeatFluxTracker                                              |
| [`AddContactingArea`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddContactingArea)                                       | Creates a new ContactingAreaTracker                                               |
| [`AddMaximumDampingPressure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddMaximumDampingPressure)                       | Creates a new ContactMaximumDampingPressureTracker                                |
| [`AddMaximumGeometricSlidingDistance`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddMaximumGeometricSlidingDistance)     | Creates a new ContactMaximumGeometricSlidingDistanceTracker                       |
| [`AddContactMaximumNormalStiffness`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddContactMaximumNormalStiffness)         | Creates a new ContactMaximumNormalStiffnessTracker                                |
| [`AddMaximumTangentialStiffness`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddMaximumTangentialStiffness)               | Creates a new ContactMaximumTangentialStiffnessTracker                            |
| [`AddContactMaxTangentialFluidPressure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddContactMaxTangentialFluidPressure) | Creates a new ContactMaxTangentialFluidPressureTracker                            |
| [`AddMinimumGeometricSlidingDistance`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddMinimumGeometricSlidingDistance)     | Creates a new ContactMinimumGeometricSlidingDistanceTracker                       |
| [`AddContactMinimumNormalStiffness`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddContactMinimumNormalStiffness)         | Creates a new ContactMinimumNormalStiffnessTracker                                |
| [`AddMinimumTangentialStiffness`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddMinimumTangentialStiffness)               | Creates a new ContactMinimumTangentialStiffnessTracker                            |
| [`AddNumberSticking`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddNumberSticking)                                       | Creates a new ContactNumberStickingTracker                                        |
| [`AddNumberWithLargePenetration`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddNumberWithLargePenetration)               | Creates a new ContactNumberWithLargePenetrationTracker                            |
| [`AddNumberWithTooMuchSliding`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddNumberWithTooMuchSliding)                   | Creates a new ContactNumberWithTooMuchSlidingTracker                              |
| [`AddContactPairForceConvergenceNorm`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddContactPairForceConvergenceNorm)     | Creates a new ContactPairForceConvergenceNormTracker                              |
| [`AddPenetration`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddPenetration)                                             | Creates a new ContactPenetrationTracker                                           |
| [`AddPossibleOverconstraint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddPossibleOverconstraint)                       | Creates a new ContactPossibleOverconstraintTracker                                |
| [`AddContactPressure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddContactPressure)                                     | Creates a new ContactPressureTracker                                              |
| [`AddResultingPinball`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddResultingPinball)                                   | Creates a new ContactResultingPinballTracker                                      |
| [`AddSlidingDistance`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddSlidingDistance)                                     | Creates a new ContactSlidingDistanceTracker                                       |
| [`AddSlidingIndication`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddSlidingIndication)                                 | Creates a new ContactSlidingIndicationTracker                                     |
| [`AddStabilizationEnergy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddStabilizationEnergy)                             | Creates a new ContactStabilizationEnergyTracker                                   |
| [`AddStrainEnergy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddStrainEnergy)                                           | Creates a new ContactStrainEnergyTracker                                          |
| [`AddTangentialDampingStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddTangentialDampingStress)                     | Creates a new ContactTangentialDampingStressTracker                               |
| [`AddTotalForceFromContactPressureX`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddTotalForceFromContactPressureX)       | Creates a new ContactTotalForceFromContactPressureXTracker                        |
| [`AddTotalForceFromContactPressureY`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddTotalForceFromContactPressureY)       | Creates a new ContactTotalForceFromContactPressureYTracker                        |
| [`AddTotalForceFromContactPressureZ`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddTotalForceFromContactPressureZ)       | Creates a new ContactTotalForceFromContactPressureZTracker                        |
| [`AddTotalForceFromTangentialStressX`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddTotalForceFromTangentialStressX)     | Creates a new ContactTotalForceFromTangentialStressXTracker                       |
| [`AddTotalForceFromTangentialStressY`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddTotalForceFromTangentialStressY)     | Creates a new ContactTotalForceFromTangentialStressYTracker                       |
| [`AddTotalForceFromTangentialStressZ`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddTotalForceFromTangentialStressZ)     | Creates a new ContactTotalForceFromTangentialStressZTracker                       |
| [`AddVolumeLossDueToWear`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddVolumeLossDueToWear)                             | Creates a new ContactVolumeLossDueToWearTracker                                   |
| [`AddDampingEnergy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddDampingEnergy)                                         | Creates a new DampingEnergyTracker                                                |
| [`AddDensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddDensity)                                                     | Creates a new DensityTracker                                                      |
| [`AddDirectionalAcceleration`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddDirectionalAcceleration)                     | Creates a new DirectionalAccelerationTracker                                      |
| [`AddDirectionalDeformation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddDirectionalDeformation)                       | Creates a new DirectionalDeformationTracker                                       |
| [`AddDirectionalVelocity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddDirectionalVelocity)                             | Creates a new DirectionalVelocityTracker                                          |
| [`AddEffectiveStrain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddEffectiveStrain)                                     | Creates a new EffectiveStrainTracker                                              |
| [`AddEffectiveStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddEffectiveStress)                                     | Creates a new EffectiveStressTracker                                              |
| [`AddErodedInternalEnergy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddErodedInternalEnergy)                           | Creates a new ErodedInternalEnergyTracker                                         |
| [`AddErodedKineticEnergy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddErodedKineticEnergy)                             | Creates a new ErodedKineticEnergyTracker                                          |
| [`AddExternalForce`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddExternalForce)                                         | Creates a new ExternalForceTracker                                                |
| [`AddForceReaction`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddForceReaction)                                         | Creates a new ForceReactionTracker                                                |
| [`AddHourglassEnergy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddHourglassEnergy)                                     | Creates a new HourglassEnergyTracker                                              |
| [`AddInternalEnergy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddInternalEnergy)                                       | Creates a new InternalEnergyTracker                                               |
| [`AddKineticEnergy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddKineticEnergy)                                         | Creates a new KineticEnergyTracker                                                |
| [`AddLatticeDensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddLatticeDensity)                                       | Creates a new LatticeDensity                                                      |
| [`AddLatticeElementalDensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddLatticeElementalDensity)                     | Creates a new LatticeElementalDensity                                             |
| [`AddLSDYNAGeneralTracker`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddLSDYNAGeneralTracker)                           | Creates a new LSDYNAGeneralTracker                                                |
| [`AddMomentReaction`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddMomentReaction)                                       | Creates a new MomentReactionTracker                                               |
| [`AddMomentum`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddMomentum)                                                   | Creates a new MomentumTracker                                                     |
| [`AddNonLinearStabilizationEnergy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddNonLinearStabilizationEnergy)           | Creates a new NonLinearStabilizationEnergyTracker                                 |
| [`AddNumberContacting`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddNumberContacting)                                   | Creates a new NumberContactingTracker                                             |
| [`AddPlasticWork`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddPlasticWork)                                             | Creates a new PlasticWorkTracker                                                  |
| [`AddPosition`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddPosition)                                                   | Creates a new PositionTracker                                                     |
| [`AddPressure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddPressure)                                                   | Creates a new PressureTracker                                                     |
| [`AddRigidBodyVelocity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddRigidBodyVelocity)                                 | Creates a new RigidBodyVelocityTracker                                            |
| [`AddSpringTrackerDampingForce`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddSpringTrackerDampingForce)                 | Creates a new SpringDampingForceTracker                                           |
| [`AddSpringTrackerElasticForce`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddSpringTrackerElasticForce)                 | Creates a new SpringElasticForceTracker                                           |
| [`AddSpringTrackerElongation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddSpringTrackerElongation)                     | Creates a new SpringElongationTracker                                             |
| [`AddSpringTrackerVelocity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddSpringTrackerVelocity)                         | Creates a new SpringVelocityTracker                                               |
| [`AddStiffnessEnergy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddStiffnessEnergy)                                     | Creates a new StiffnessEnergyTracker                                              |
| [`AddTemperature`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddTemperature)                                             | Creates a new TemperatureTracker                                                  |
| [`AddTopologyDensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddTopologyDensity)                                     | Creates a new TopologyDensity                                                     |
| [`AddTopologyElementalDensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddTopologyElementalDensity)                   | Creates a new TopologyElementalDensity                                            |
| [`AddTotalEnergy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddTotalEnergy)                                             | Creates a new TotalEnergyTracker                                                  |
| [`AddTotalMassAverageVelocity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddTotalMassAverageVelocity)                   | Creates a new TotalMassAverageVelocityTracker                                     |
| [`RenameBasedOnDefinition`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.RenameBasedOnDefinition)                           | Run the RenameBasedOnDefinition action.                                           |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#id1)                                                                               | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#id1)                                                                               | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddComment)                                                     | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddFigure)                                                       | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.AddImage)                                                         | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.Activate)                                                         | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.CopyTo)                                                             | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.Duplicate)                                                       | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.GroupAllSimilarChildren)                           | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.GroupSimilarObjects)                                   | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.PropertyByName)                                             | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.PropertyByAPIName)                                       | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.CreateParameter)                                           | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.GetParameter)                                                 | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.RemoveParameter)                                           | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`EnvironmentSelection`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.EnvironmentSelection)           | Gets or Sets the EnvironmentSelection to an Analysis object.   |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#id0)                                                      | Gets the internal object. For advanced usage only.             |
| [`DisplayPoints`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.DisplayPoints)                         | Gets or sets the DisplayPoints.                                |
| [`IdentifyElementViolations`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.IdentifyElementViolations) | Gets or sets the IdentifyElementViolations.                    |
| [`NewtonRaphsonResiduals`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.NewtonRaphsonResiduals)       | Gets or sets the NewtonRaphsonResiduals.                       |
| [`ModeNumber`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.ModeNumber)                               | Gets or sets the ModeNumber.                                   |
| [`StepNumber`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.StepNumber)                               | Gets or sets the StepNumber.                                   |
| [`UpdateInterval`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.UpdateInterval)                       | Gets or sets the UpdateInterval.                               |
| [`Component`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.Component)                                 | Gets or sets the Component.                                    |
| [`LineColor`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.LineColor)                                 | Gets or sets the LineColor.                                    |
| [`DrawConnectionsAttachedTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.DrawConnectionsAttachedTo) | Gets or sets the DrawConnectionsAttachedTo.                    |
| [`Display`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.Display)                                     | Gets or sets the Display.                                      |
| [`DisplayType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.DisplayType)                             | Gets or sets the DisplayType.                                  |
| [`LineThickness`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.LineThickness)                         | Gets or sets the LineThickness.                                |
| [`SummaryType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.SummaryType)                             | Gets or sets the SummaryType.                                  |
| [`SolutionOutput`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.SolutionOutput)                       | Gets or sets the SolutionOutput.                               |
| [`StepSelectionMode`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.StepSelectionMode)                 | Gets or sets the StepSelectionMode.                            |
| [`VisibleOnResults`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.VisibleOnResults)                   | Gets or sets the VisibleOnResults.                             |
| [`ActivateVisibility`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.ActivateVisibility)               | Gets or sets the ActivateVisibility.                           |
| [`ShowChargeResiduals`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.ShowChargeResiduals)             | Gets or sets the ShowChargeResiduals.                          |
| [`ShowHeatResiduals`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.ShowHeatResiduals)                 | Gets or sets the ShowHeatResiduals.                            |
| [`ShowMomentResiduals`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.ShowMomentResiduals)             | Gets or sets the ShowMomentResiduals.                          |
| [`DisplayFilterDuringSolve`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.DisplayFilterDuringSolve)   | Gets or sets the DisplayFilterDuringSolve.                     |
| [`ResponseConstraint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.ResponseConstraint)               | Gets or sets the ResponseConstraint.                           |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.DataModelObjectCategory)     | Gets the current DataModelObject’s category.                   |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.Children)                                   | Gets the list of children.                                     |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.Comments)                                   | Gets the list of associated comments.                          |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.Figures)                                     | Gets the list of associated figures.                           |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.Images)                                       | Gets the list of associated images.                            |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#id0)                                                      | Gets the internal object. For advanced usage only.             |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.Properties)                               | Gets the list of properties for this object.                   |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/SolutionInformation.md#SolutionInformation.VisibleProperties)                 | Gets the list of properties that are visible for this object.  |

<a id="property-detail"></a>

## Property detail

<a id="SolutionInformation.EnvironmentSelection"></a>

### *property* SolutionInformation.EnvironmentSelection *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the EnvironmentSelection to an Analysis object.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.InternalObject"></a>

### *property* SolutionInformation.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSolutionInfoToolAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.DisplayPoints"></a>

### *property* SolutionInformation.DisplayPoints *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayPoints.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.IdentifyElementViolations"></a>

### *property* SolutionInformation.IdentifyElementViolations *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IdentifyElementViolations.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.NewtonRaphsonResiduals"></a>

### *property* SolutionInformation.NewtonRaphsonResiduals *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NewtonRaphsonResiduals.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.ModeNumber"></a>

### *property* SolutionInformation.ModeNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeNumber.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.StepNumber"></a>

### *property* SolutionInformation.StepNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepNumber.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.UpdateInterval"></a>

### *property* SolutionInformation.UpdateInterval *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UpdateInterval.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.Component"></a>

### *property* SolutionInformation.Component *: [Ansys.Mechanical.DataModel.Enums.OptimizationResponseConstraintComponentType](../../../Mechanical/DataModel/Enums/OptimizationResponseConstraintComponentType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.OptimizationResponseConstraintComponentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Component.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.LineColor"></a>

### *property* SolutionInformation.LineColor *: [Ansys.Mechanical.DataModel.Enums.FEConnectionLineColor](../../../Mechanical/DataModel/Enums/FEConnectionLineColor.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FEConnectionLineColor) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LineColor.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.DrawConnectionsAttachedTo"></a>

### *property* SolutionInformation.DrawConnectionsAttachedTo *: [Ansys.Mechanical.DataModel.Enums.NodeSelection](../../../Mechanical/DataModel/Enums/NodeSelection.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NodeSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DrawConnectionsAttachedTo.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.Display"></a>

### *property* SolutionInformation.Display *: [Ansys.Mechanical.DataModel.Enums.FEConnectionDisplay](../../../Mechanical/DataModel/Enums/FEConnectionDisplay.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FEConnectionDisplay) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Display.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.DisplayType"></a>

### *property* SolutionInformation.DisplayType *: [Ansys.Mechanical.DataModel.Enums.FEConnectionDisplayType](../../../Mechanical/DataModel/Enums/FEConnectionDisplayType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FEConnectionDisplayType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayType.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.LineThickness"></a>

### *property* SolutionInformation.LineThickness *: [Ansys.Mechanical.DataModel.Enums.FEConnectionLineThicknessType](../../../Mechanical/DataModel/Enums/FEConnectionLineThicknessType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FEConnectionLineThicknessType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LineThickness.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.SummaryType"></a>

### *property* SolutionInformation.SummaryType *: [Ansys.Mechanical.DataModel.Enums.PFactorResultType](../../../Mechanical/DataModel/Enums/PFactorResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PFactorResultType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SummaryType.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.SolutionOutput"></a>

### *property* SolutionInformation.SolutionOutput *: [Ansys.Mechanical.DataModel.Enums.SolutionOutputType](../../../Mechanical/DataModel/Enums/SolutionOutputType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionOutputType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionOutput.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.StepSelectionMode"></a>

### *property* SolutionInformation.StepSelectionMode *: [Ansys.Mechanical.DataModel.Enums.SeqSelectionMode](../../../Mechanical/DataModel/Enums/SeqSelectionMode.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SeqSelectionMode) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepSelectionMode.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.VisibleOnResults"></a>

### *property* SolutionInformation.VisibleOnResults *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VisibleOnResults.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.ActivateVisibility"></a>

### *property* SolutionInformation.ActivateVisibility *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ActivateVisibility.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.ShowChargeResiduals"></a>

### *property* SolutionInformation.ShowChargeResiduals *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowChargeResiduals.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.ShowHeatResiduals"></a>

### *property* SolutionInformation.ShowHeatResiduals *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowHeatResiduals.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.ShowMomentResiduals"></a>

### *property* SolutionInformation.ShowMomentResiduals *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShowMomentResiduals.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.DisplayFilterDuringSolve"></a>

### *property* SolutionInformation.DisplayFilterDuringSolve *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplayFilterDuringSolve.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.ResponseConstraint"></a>

### *property* SolutionInformation.ResponseConstraint *: [Ansys.ACT.Automation.Mechanical.ResponseConstraint](ResponseConstraint.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ResponseConstraint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResponseConstraint.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.DataModelObjectCategory"></a>

### *property* SolutionInformation.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.Children"></a>

### *property* SolutionInformation.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.Comments"></a>

### *property* SolutionInformation.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.Figures"></a>

### *property* SolutionInformation.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.Images"></a>

### *property* SolutionInformation.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* SolutionInformation.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.Properties"></a>

### *property* SolutionInformation.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.VisibleProperties"></a>

### *property* SolutionInformation.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SolutionInformation.ImportResultTrackersFromFile"></a>

### SolutionInformation.ImportResultTrackersFromFile(fileName: System.String)

Import Result Trackers from File.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddDeformationPlotTracker"></a>

### SolutionInformation.AddDeformationPlotTracker()

Creates a new TotalDeformation Plot Tracker.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddStressPlotTracker"></a>

### SolutionInformation.AddStressPlotTracker()

Creates a new EquivalentStress Plot Tracker.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddStrainPlotTracker"></a>

### SolutionInformation.AddStrainPlotTracker()

Creates a new EquivalentElasticStrainRST Plot Tracker.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTemperaturePlotTracker"></a>

### SolutionInformation.AddTemperaturePlotTracker()

Creates a new TemperatureResult Plot Tracker.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.EvaluateAllContactTrackers"></a>

### SolutionInformation.EvaluateAllContactTrackers()

Run the EvaluateAllContactTrackers action.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddAddedMass"></a>

### SolutionInformation.AddAddedMass()

Creates a new AddedMassTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddArtificialEnergy"></a>

### SolutionInformation.AddArtificialEnergy()

Creates a new ArtificialEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddChattering"></a>

### SolutionInformation.AddChattering()

Creates a new ContactChatteringTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddClosedPenetration"></a>

### SolutionInformation.AddClosedPenetration()

Creates a new ContactClosedPenetrationTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactDepth"></a>

### SolutionInformation.AddContactDepth()

Creates a new ContactDepthTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddElasticSlip"></a>

### SolutionInformation.AddElasticSlip()

Creates a new ContactElasticSlipTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactEnergy"></a>

### SolutionInformation.AddContactEnergy()

Creates a new ContactEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddFluidPressure"></a>

### SolutionInformation.AddFluidPressure()

Creates a new ContactFluidPressureTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactForce"></a>

### SolutionInformation.AddContactForce()

Creates a new ContactForceTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddFrictionalDissipationEnergy"></a>

### SolutionInformation.AddFrictionalDissipationEnergy()

Creates a new ContactFrictionalDissipationEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddFrictionalStress"></a>

### SolutionInformation.AddFrictionalStress()

Creates a new ContactFrictionalStressTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddGap"></a>

### SolutionInformation.AddGap()

Creates a new ContactGapTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactHeatFlux"></a>

### SolutionInformation.AddContactHeatFlux()

Creates a new ContactHeatFluxTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactingArea"></a>

### SolutionInformation.AddContactingArea()

Creates a new ContactingAreaTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddMaximumDampingPressure"></a>

### SolutionInformation.AddMaximumDampingPressure()

Creates a new ContactMaximumDampingPressureTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddMaximumGeometricSlidingDistance"></a>

### SolutionInformation.AddMaximumGeometricSlidingDistance()

Creates a new ContactMaximumGeometricSlidingDistanceTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactMaximumNormalStiffness"></a>

### SolutionInformation.AddContactMaximumNormalStiffness()

Creates a new ContactMaximumNormalStiffnessTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddMaximumTangentialStiffness"></a>

### SolutionInformation.AddMaximumTangentialStiffness()

Creates a new ContactMaximumTangentialStiffnessTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactMaxTangentialFluidPressure"></a>

### SolutionInformation.AddContactMaxTangentialFluidPressure()

Creates a new ContactMaxTangentialFluidPressureTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddMinimumGeometricSlidingDistance"></a>

### SolutionInformation.AddMinimumGeometricSlidingDistance()

Creates a new ContactMinimumGeometricSlidingDistanceTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactMinimumNormalStiffness"></a>

### SolutionInformation.AddContactMinimumNormalStiffness()

Creates a new ContactMinimumNormalStiffnessTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddMinimumTangentialStiffness"></a>

### SolutionInformation.AddMinimumTangentialStiffness()

Creates a new ContactMinimumTangentialStiffnessTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddNumberSticking"></a>

### SolutionInformation.AddNumberSticking()

Creates a new ContactNumberStickingTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddNumberWithLargePenetration"></a>

### SolutionInformation.AddNumberWithLargePenetration()

Creates a new ContactNumberWithLargePenetrationTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddNumberWithTooMuchSliding"></a>

### SolutionInformation.AddNumberWithTooMuchSliding()

Creates a new ContactNumberWithTooMuchSlidingTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactPairForceConvergenceNorm"></a>

### SolutionInformation.AddContactPairForceConvergenceNorm()

Creates a new ContactPairForceConvergenceNormTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddPenetration"></a>

### SolutionInformation.AddPenetration()

Creates a new ContactPenetrationTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddPossibleOverconstraint"></a>

### SolutionInformation.AddPossibleOverconstraint()

Creates a new ContactPossibleOverconstraintTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddContactPressure"></a>

### SolutionInformation.AddContactPressure()

Creates a new ContactPressureTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddResultingPinball"></a>

### SolutionInformation.AddResultingPinball()

Creates a new ContactResultingPinballTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddSlidingDistance"></a>

### SolutionInformation.AddSlidingDistance()

Creates a new ContactSlidingDistanceTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddSlidingIndication"></a>

### SolutionInformation.AddSlidingIndication()

Creates a new ContactSlidingIndicationTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddStabilizationEnergy"></a>

### SolutionInformation.AddStabilizationEnergy()

Creates a new ContactStabilizationEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddStrainEnergy"></a>

### SolutionInformation.AddStrainEnergy()

Creates a new ContactStrainEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTangentialDampingStress"></a>

### SolutionInformation.AddTangentialDampingStress()

Creates a new ContactTangentialDampingStressTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTotalForceFromContactPressureX"></a>

### SolutionInformation.AddTotalForceFromContactPressureX()

Creates a new ContactTotalForceFromContactPressureXTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTotalForceFromContactPressureY"></a>

### SolutionInformation.AddTotalForceFromContactPressureY()

Creates a new ContactTotalForceFromContactPressureYTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTotalForceFromContactPressureZ"></a>

### SolutionInformation.AddTotalForceFromContactPressureZ()

Creates a new ContactTotalForceFromContactPressureZTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTotalForceFromTangentialStressX"></a>

### SolutionInformation.AddTotalForceFromTangentialStressX()

Creates a new ContactTotalForceFromTangentialStressXTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTotalForceFromTangentialStressY"></a>

### SolutionInformation.AddTotalForceFromTangentialStressY()

Creates a new ContactTotalForceFromTangentialStressYTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTotalForceFromTangentialStressZ"></a>

### SolutionInformation.AddTotalForceFromTangentialStressZ()

Creates a new ContactTotalForceFromTangentialStressZTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddVolumeLossDueToWear"></a>

### SolutionInformation.AddVolumeLossDueToWear()

Creates a new ContactVolumeLossDueToWearTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddDampingEnergy"></a>

### SolutionInformation.AddDampingEnergy()

Creates a new DampingEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddDensity"></a>

### SolutionInformation.AddDensity()

Creates a new DensityTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddDirectionalAcceleration"></a>

### SolutionInformation.AddDirectionalAcceleration()

Creates a new DirectionalAccelerationTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddDirectionalDeformation"></a>

### SolutionInformation.AddDirectionalDeformation()

Creates a new DirectionalDeformationTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddDirectionalVelocity"></a>

### SolutionInformation.AddDirectionalVelocity()

Creates a new DirectionalVelocityTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddEffectiveStrain"></a>

### SolutionInformation.AddEffectiveStrain()

Creates a new EffectiveStrainTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddEffectiveStress"></a>

### SolutionInformation.AddEffectiveStress()

Creates a new EffectiveStressTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddErodedInternalEnergy"></a>

### SolutionInformation.AddErodedInternalEnergy()

Creates a new ErodedInternalEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddErodedKineticEnergy"></a>

### SolutionInformation.AddErodedKineticEnergy()

Creates a new ErodedKineticEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddExternalForce"></a>

### SolutionInformation.AddExternalForce()

Creates a new ExternalForceTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddForceReaction"></a>

### SolutionInformation.AddForceReaction()

Creates a new ForceReactionTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddHourglassEnergy"></a>

### SolutionInformation.AddHourglassEnergy()

Creates a new HourglassEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddInternalEnergy"></a>

### SolutionInformation.AddInternalEnergy()

Creates a new InternalEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddKineticEnergy"></a>

### SolutionInformation.AddKineticEnergy()

Creates a new KineticEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddLatticeDensity"></a>

### SolutionInformation.AddLatticeDensity()

Creates a new LatticeDensity

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddLatticeElementalDensity"></a>

### SolutionInformation.AddLatticeElementalDensity()

Creates a new LatticeElementalDensity

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddLSDYNAGeneralTracker"></a>

### SolutionInformation.AddLSDYNAGeneralTracker()

Creates a new LSDYNAGeneralTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddMomentReaction"></a>

### SolutionInformation.AddMomentReaction()

Creates a new MomentReactionTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddMomentum"></a>

### SolutionInformation.AddMomentum()

Creates a new MomentumTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddNonLinearStabilizationEnergy"></a>

### SolutionInformation.AddNonLinearStabilizationEnergy()

Creates a new NonLinearStabilizationEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddNumberContacting"></a>

### SolutionInformation.AddNumberContacting()

Creates a new NumberContactingTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddPlasticWork"></a>

### SolutionInformation.AddPlasticWork()

Creates a new PlasticWorkTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddPosition"></a>

### SolutionInformation.AddPosition()

Creates a new PositionTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddPressure"></a>

### SolutionInformation.AddPressure()

Creates a new PressureTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddRigidBodyVelocity"></a>

### SolutionInformation.AddRigidBodyVelocity()

Creates a new RigidBodyVelocityTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddSpringTrackerDampingForce"></a>

### SolutionInformation.AddSpringTrackerDampingForce()

Creates a new SpringDampingForceTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddSpringTrackerElasticForce"></a>

### SolutionInformation.AddSpringTrackerElasticForce()

Creates a new SpringElasticForceTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddSpringTrackerElongation"></a>

### SolutionInformation.AddSpringTrackerElongation()

Creates a new SpringElongationTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddSpringTrackerVelocity"></a>

### SolutionInformation.AddSpringTrackerVelocity()

Creates a new SpringVelocityTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddStiffnessEnergy"></a>

### SolutionInformation.AddStiffnessEnergy()

Creates a new StiffnessEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTemperature"></a>

### SolutionInformation.AddTemperature()

Creates a new TemperatureTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTopologyDensity"></a>

### SolutionInformation.AddTopologyDensity()

Creates a new TopologyDensity

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTopologyElementalDensity"></a>

### SolutionInformation.AddTopologyElementalDensity()

Creates a new TopologyElementalDensity

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTotalEnergy"></a>

### SolutionInformation.AddTotalEnergy()

Creates a new TotalEnergyTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddTotalMassAverageVelocity"></a>

### SolutionInformation.AddTotalMassAverageVelocity()

Creates a new TotalMassAverageVelocityTracker

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.RenameBasedOnDefinition"></a>

### SolutionInformation.RenameBasedOnDefinition()

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.GetChildren"></a>

### SolutionInformation.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### SolutionInformation.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddComment"></a>

### SolutionInformation.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddFigure"></a>

### SolutionInformation.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.AddImage"></a>

### SolutionInformation.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.Activate"></a>

### SolutionInformation.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.CopyTo"></a>

### SolutionInformation.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.Duplicate"></a>

### SolutionInformation.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.GroupAllSimilarChildren"></a>

### SolutionInformation.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.GroupSimilarObjects"></a>

### SolutionInformation.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.PropertyByName"></a>

### SolutionInformation.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.PropertyByAPIName"></a>

### SolutionInformation.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.CreateParameter"></a>

### SolutionInformation.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.GetParameter"></a>

### SolutionInformation.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SolutionInformation.RemoveParameter"></a>

### SolutionInformation.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

