# `EXDAnalysisSettings`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisSettings.EXDAnalysisSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines Analysis Settings for Explicit Dynamics System.
Note: Cycles in the UI are referred to as TimeSteps in API

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetStepEndTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.GetStepEndTime)                           | Gets the Step End Time at a given solution step.                                  |
| [`SetStepEndTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SetStepEndTime)                           | Sets the Step End Time for a given solution step.                                 |
| [`GetLoadStepType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.GetLoadStepType)                         | Gets the  LoadStepType for a step.                                                |
| [`SetLoadStepType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SetLoadStepType)                         | Sets the LoadStepType for a step.                                                 |
| [`getADRConvergenceMethod`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.getADRConvergenceMethod)         | Gets the Covergence Method for ADR loadstep.                                      |
| [`setADRConvergenceMethod`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.setADRConvergenceMethod)         | Sets the Covergence Method for ADR loadstep.                                      |
| [`getADRConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.getADRConvergenceTolerance)   | Gets the Covergence Tolerance for ADR loadstep.                                   |
| [`setADRConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.setADRConvergenceTolerance)   | Sets the Covergence Tolerance for ADR loadstep.                                   |
| [`getADRMaximumIterations`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.getADRMaximumIterations)         | Gets the Maximum Iterations for ADR loadstep.                                     |
| [`setADRMaximumIterations`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.setADRMaximumIterations)         | Sets the Maximum Iterations for ADR loadstep.                                     |
| [`GetAutomaticMassScalingType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.GetAutomaticMassScalingType) | Gets the  AutomaticMassScalingType for a load step.                               |
| [`SetAutomaticMassScalingType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SetAutomaticMassScalingType) | Sets the  AutomaticMassScalingType for a load step.                               |
| [`GetMassScalingMinTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.GetMassScalingMinTimeStep)     | Gets the  MassScalingMinTimeStep for a load step.                                 |
| [`SetMassScalingMinTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SetMassScalingMinTimeStep)     | Sets the  MassScalingMinTimeStep for a load step.                                 |
| [`GetStaticDamping`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.GetStaticDamping)                       | Gets the StaticDamping.                                                           |
| [`SetStaticDamping`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SetStaticDamping)                       | Sets the StaticDamping.                                                           |
| [`GetSaveResultsOnType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.GetSaveResultsOnType)               | Gets the  Save Results Type for a load step.                                      |
| [`SetSaveResultsOnType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SetSaveResultsOnType)               | Sets the  Save Results Type for a load step.                                      |
| [`GetSaveResultsOnTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.GetSaveResultsOnTime)               | Gets the Time increment for Save Results On for a load step.                      |
| [`SetSaveResultsOnTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SetSaveResultsOnTime)               | Set the Time increment for Save Results On for a load step.                       |
| [`GetSaveResultsOnTimeSteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.GetSaveResultsOnTimeSteps)     | Gets the Cycle increment for Save Results On for a load step.                     |
| [`SetSaveResultsOnTimeSteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SetSaveResultsOnTimeSteps)     | Sets the Cycle increment for Save Results On for a load step.                     |
| [`GetSaveResultsOnPoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.GetSaveResultsOnPoints)           | Gets the Points increment for Save Results On for a load step.                    |
| [`SetSaveResultsOnPoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SetSaveResultsOnPoints)           | Set the Points increment for Save Results On for a load step.                     |
| [`GetSaveRestartsOnType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.GetSaveRestartsOnType)             | Gets the  Save Restarts Type for a load step.                                     |
| [`SetSaveRestartsOnType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SetSaveRestartsOnType)             | Sets the  Save Restarts Type for a load step.                                     |
| [`GetSaveRestartsOnTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.GetSaveRestartsOnTime)             | Gets the Time increment for Save Restarts On for a load step.                     |
| [`SetSaveRestartsOnTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SetSaveRestartsOnTime)             | Set the Time increment for Save Restarts On for a load step.                      |
| [`GetSaveRestartsOnTimeSteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.GetSaveRestartsOnTimeSteps)   | Gets the Cycle increment for Save Restarts On for a load step.                    |
| [`SetSaveRestartsOnTimeSteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SetSaveRestartsOnTimeSteps)   | Set the Cycle increment for Save Restarts On for a load step.                     |
| [`GetSaveRestartsOnPoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.GetSaveRestartsOnPoints)         | Gets the Points increment for Save Restarts On Points for a load step.            |
| [`SetSaveRestartsOnPoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SetSaveRestartsOnPoints)         | Set the Points increment for Save Restarts On for a load step.                    |
| [`GetSaveProbeDataOnType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.GetSaveProbeDataOnType)           | Gets the  Save ProbeData Type for a load step.                                    |
| [`SetSaveProbeDataOnType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SetSaveProbeDataOnType)           | Sets the  Save ProbeData Type for a load step.                                    |
| [`GetSaveProbeDataOnTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.GetSaveProbeDataOnTime)           | Gets the Time increment for Save ProbeData On for a load step.                    |
| [`SetSaveProbeDataOnTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SetSaveProbeDataOnTime)           | Set the Time increment for Save ProbeData On for a load step.                     |
| [`GetSaveProbeDataOnTimeSteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.GetSaveProbeDataOnTimeSteps) | Gets the Cycle increment for Save ProbeData On for a load step.                   |
| [`SetSaveProbeDataOnTimeSteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SetSaveProbeDataOnTimeSteps) | Set the Cycle increment for Save ProbeData On for a load step.                    |
| [`DeleteAllRestartPoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.DeleteAllRestartPoints)           | DeleteAllRestartPoints method.                                                    |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#id1)                                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.AddComment)                                   | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.AddFigure)                                     | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.AddImage)                                       | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.Activate)                                       | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.CopyTo)                                           | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.Duplicate)                                     | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.GroupAllSimilarChildren)         | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.GroupSimilarObjects)                 | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.PropertyByName)                           | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.PropertyByAPIName)                     | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.CreateParameter)                         | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.GetParameter)                               | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.RemoveParameter)                         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#id0)                                                                    | Gets the Internal Object. For advanced usage only.                   |
| [`PreferenceType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.PreferenceType)                                     | Gets or sets the PreferenceType                                      |
| [`NumberOfSteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.NumberOfSteps)                                       | Gets or sets the NumberOfSteps.                                      |
| [`CurrentStepNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.CurrentStepNumber)                               | Gets or sets the CurrentStepNumber.                                  |
| [`ResumeFromTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.ResumeFromTimeStep)                             | Gets or sets the ResumeFromCycle.                                    |
| [`MaximumTimeSteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.MaximumTimeSteps)                                 | Gets or sets the MaximumNumberofCycles.                              |
| [`MaximumEnergyError`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.MaximumEnergyError)                             | Gets or sets the  MaximumEnergyError.                                |
| [`ReferenceEnergyTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.ReferenceEnergyTimeStep)                   | Gets or sets the ReferenceEnergyCycle.                               |
| [`InitialTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.InitialTimeStep)                                   | Gets or sets the InitialTimeStep.                                    |
| [`MinimumTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.MinimumTimeStep)                                   | Gets or sets the MinimumTimeStep.                                    |
| [`MaximumTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.MaximumTimeStep)                                   | Gets or sets the MaximumTimeStep.                                    |
| [`TimeStepSafetyFactor`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.TimeStepSafetyFactor)                         | Gets or sets the  TimeStepSafetyFactor.                              |
| [`CharZoneDimensionType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.CharZoneDimensionType)                       | Gets or sets the  CharZoneDimensionType.                             |
| [`StepawareMassScalingType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.StepawareMassScalingType)                 | Gets or Sets the Step aware Mass Scaling Controls.                   |
| [`AutomaticMassScalingType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.AutomaticMassScalingType)                 | Gets or sets the  AutomaticMassScaling.                              |
| [`MassScalingMinTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.MassScalingMinTimeStep)                     | Gets or sets the  MassScalingMinTimeStep.                            |
| [`MassScalingMaxElem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.MassScalingMaxElem)                             | Gets or sets the  MassScalingMaxElem.                                |
| [`MassScalingMaxPart`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.MassScalingMaxPart)                             | Gets or sets the  MassScalingMaxPart.                                |
| [`MassScalingUpdateFreq`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.MassScalingUpdateFreq)                       | Gets or sets the  MassScalingUpdateFreq.                             |
| [`SolverPrecisionType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SolverPrecisionType)                           | Gets or sets the  SolverPrecisionType.                               |
| [`SolveUnits`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SolveUnits)                                             | Gets or sets the  SolveUnits.                                        |
| [`BeamSolutionType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.BeamSolutionType)                                 | Gets or sets the  BeamSolutionType.                                  |
| [`BeamTimeStepSafetyFactor`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.BeamTimeStepSafetyFactor)                 | Gets or sets the  BeamTimeStepSafetyFactor.                          |
| [`HexIntegrationType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.HexIntegrationType)                             | Gets or sets the  HexIntegrationType.                                |
| [`ShellSublayers`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.ShellSublayers)                                     | Gets or sets the  ShellSublayers.                                    |
| [`ShellShearCorrectionFactor`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.ShellShearCorrectionFactor)             | Gets or sets the  ShellShearCorrectionFactor.                        |
| [`ShellWarpCorrection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.ShellWarpCorrection)                           | Gets or sets the  ShellWarpCorrection.                               |
| [`ShellThicknessUpdateType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.ShellThicknessUpdateType)                 | Gets or sets the  ShellThicknessUpdateType.                          |
| [`PusoCoefficient`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.PusoCoefficient)                                   | Gets or sets the  PusoCoefficient.                                   |
| [`TetPressureIntegrationType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.TetPressureIntegrationType)             | Gets or sets the  TetIntegrationType.                                |
| [`ShellInertiaUpdateType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.ShellInertiaUpdateType)                     | Gets or sets the  ShellInertiaUpdateType.                            |
| [`DensityUpdateType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.DensityUpdateType)                               | Gets or sets the  DensityUpdateType.                                 |
| [`SphMinTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SphMinTimeStep)                                     | Gets or sets the  Minimum Timestep for SPH.                          |
| [`SPHMinDensityFactor`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SPHMinDensityFactor)                           | Gets or sets the  Minimum Density Factor for SPH.                    |
| [`SPHMaxDensityFactor`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SPHMaxDensityFactor)                           | Gets or sets the  Maximum Density Factor for SPH.                    |
| [`SPHNodeDensityCutoffOption`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SPHNodeDensityCutoffOption)             | Gets or sets the  SPHNodeDensityCutoffOption.                        |
| [`DetonationBurnType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.DetonationBurnType)                             | Gets or sets the  DetonationBurnType.                                |
| [`MinimumVelocity`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.MinimumVelocity)                                   | Gets or sets the  MinimumVelocity.                                   |
| [`MaximumVelocity`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.MaximumVelocity)                                   | Gets or sets the  MaximumVelocity.                                   |
| [`RadiusCutoff`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.RadiusCutoff)                                         | Gets or sets the  RadiusCutoff.                                      |
| [`MinimumStrainCutOff`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.MinimumStrainCutOff)                           | Gets or sets the  MinimumStrainCutOff.                               |
| [`EulerSizeDefType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerSizeDefType)                                 | Gets or sets the  EulerSizeDefType.                                  |
| [`EulerDomainType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerDomainType)                                   | Gets or sets the  EulerDomainType.                                   |
| [`EulerDisplayBox`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerDisplayBox)                                   | Gets or sets the  EulerDisplayBox.                                   |
| [`EulerDomScopeDefType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerDomScopeDefType)                         | Gets or sets the  EulerDomScopeDefType.                              |
| [`EulerXScaleFactor`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerXScaleFactor)                               | Gets or sets the  EulerXScaleFactor.                                 |
| [`EulerYScaleFactor`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerYScaleFactor)                               | Gets or sets the  EulerYScaleFactor.                                 |
| [`EulerZScaleFactor`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerZScaleFactor)                               | Gets or sets the  EulerZScaleFactor.                                 |
| [`EulerXOrigin`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerXOrigin)                                         | Gets or sets the  EulerXOrigin.                                      |
| [`EulerYOrigin`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerYOrigin)                                         | Gets or sets the  EulerYOrigin.                                      |
| [`EulerZOrigin`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerZOrigin)                                         | Gets or sets the  EulerZOrigin.                                      |
| [`EulerXDim`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerXDim)                                               | Gets or sets the  EulerXDim.                                         |
| [`EulerYDim`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerYDim)                                               | Gets or sets the  EulerYDim.                                         |
| [`EulerZDim`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerZDim)                                               | Gets or sets the  EulerZDim.                                         |
| [`EulerResolutionDefType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerResolutionDefType)                     | Gets or sets the  EulerResolutionDefType.                            |
| [`EulerGradedDefinition`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerGradedDefinition)                       | Gets or sets the  EulerGradedDefinition.                             |
| [`EulerGradeIncrement`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerGradeIncrement)                           | Gets or sets the  EulerGradeIncrement.                               |
| [`EulerGradeNumberOfTimes`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerGradeNumberOfTimes)                   | Gets or sets the  EulerGradeNumberOfTimes.                           |
| [`EulerCellSize`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerCellSize)                                       | Gets or sets the  EulerCellSize.                                     |
| [`EulerTotalCells`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerTotalCells)                                   | Gets or sets the  EulerTotalCells.                                   |
| [`EulerXZones`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerXZones)                                           | Gets or sets the  EulerXZones.                                       |
| [`EulerYZones`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerYZones)                                           | Gets or sets the  EulerYZones.                                       |
| [`EulerZZones`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerZZones)                                           | Gets or sets the  EulerZZones.                                       |
| [`EulerBoundLowerX`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerBoundLowerX)                                 | Gets or sets the  EulerBoundLowerX.                                  |
| [`EulerBoundLowerY`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerBoundLowerY)                                 | Gets or sets the  EulerBoundLowerY.                                  |
| [`EulerBoundLowerZ`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerBoundLowerZ)                                 | Gets or sets the  EulerBoundLowerZ.                                  |
| [`EulerBoundUpperX`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerBoundUpperX)                                 | Gets or sets the  EulerBoundUpperX.                                  |
| [`EulerBoundUpperY`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerBoundUpperY)                                 | Gets or sets the  EulerBoundUpperY.                                  |
| [`EulerBoundUpperZ`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerBoundUpperZ)                                 | Gets or sets the  EulerBoundUpperZ.                                  |
| [`EulerTrackType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerTrackType)                                     | Gets the  EulerTrackType.                                            |
| [`EulerPropertyXmin`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerPropertyXmin)                               | Gets or sets the  EulerPropertyXmin.                                 |
| [`EulerPropertyYmin`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerPropertyYmin)                               | Gets or sets the  EulerPropertyYmin.                                 |
| [`EulerPropertyZmin`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerPropertyZmin)                               | Gets or sets the  EulerPropertyZmin.                                 |
| [`EulerPropertyXsize`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerPropertyXsize)                             | Gets or sets the  EulerPropertyXsize.                                |
| [`EulerPropertyYsize`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerPropertyYsize)                             | Gets or sets the  EulerPropertyYsize.                                |
| [`EulerPropertyZsize`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerPropertyZsize)                             | Gets or sets the  EulerPropertyZsize.                                |
| [`EulerPropertyXres`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerPropertyXres)                               | Gets or sets the  EulerPropertyXres.                                 |
| [`EulerPropertyYres`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerPropertyYres)                               | Gets or sets the  EulerPropertyYres.                                 |
| [`EulerPropertyZres`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerPropertyZres)                               | Gets or sets the  EulerPropertyZres.                                 |
| [`EulerPropertyDisplayBox`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.EulerPropertyDisplayBox)                   | Gets or sets the  EulerPropertyDisplayBox.                           |
| [`LinearArtificialViscosity`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.LinearArtificialViscosity)               | Gets or sets the LinearArtificialViscosity.                          |
| [`QuadraticArtificialViscosity`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.QuadraticArtificialViscosity)         | Gets or sets the QuadraticArtificialViscosity.                       |
| [`LinearViscosityExpansionType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.LinearViscosityExpansionType)         | Gets or sets the LinearViscosityExpansionType.                       |
| [`ArtificialViscosityForShellsType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.ArtificialViscosityForShellsType) | Gets or sets the ArtificialViscosityForShellsType.                   |
| [`LinearViscositySPH`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.LinearViscositySPH)                             | Gets or sets the Linear Artificial Viscosity for SPH.                |
| [`QuadratricViscositySPH`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.QuadratricViscositySPH)                     | Gets or sets the Quadratic Artificial Viscosity for SPH.             |
| [`HourglassDampingType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.HourglassDampingType)                         | Gets or sets the HourglassDampingType.                               |
| [`StiffnessCoefficient`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.StiffnessCoefficient)                         | Gets or sets the StiffnessCoefficient.                               |
| [`ViscousCoefficient`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.ViscousCoefficient)                             | Gets or sets the ViscousCoefficient.                                 |
| [`ViscousCoefficientFB`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.ViscousCoefficientFB)                         | Gets or sets the ViscousCoefficientFB.                               |
| [`ErosionOnGeomStrainType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.ErosionOnGeomStrainType)                   | Gets or sets the ErosionOnGeomStrainType.                            |
| [`ErosionGeomStrainLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.ErosionGeomStrainLimit)                     | Gets or sets the ErosionGeomStrainLimit                              |
| [`ErosionOnMaterialFailureType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.ErosionOnMaterialFailureType)         | Gets or sets the ErosionOnMaterialFailureType                        |
| [`ErosionOnMinElemTimestepType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.ErosionOnMinElemTimestepType)         | Gets or sets the ErosionOnMinElemTimestepType                        |
| [`ErosionMinElemTimestep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.ErosionMinElemTimestep)                     | Gets or sets the ErosionMinElemTimestep                              |
| [`ErosionRetainIntertiaType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.ErosionRetainIntertiaType)               | Gets or sets the ErosionRetainIntertiaType                           |
| [`StepawareOutputControlsType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.StepawareOutputControlsType)           | Gets or Sets the Step aware Output Controls.                         |
| [`OutputContactForcesOnType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.OutputContactForcesOnType)               | Gets or Sets OutputContactForces Increment Type.                     |
| [`OutputContactForcesOnTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.OutputContactForcesOnTime)               | Gets or Sets the Time increment for OutputContactForcesOnTime.       |
| [`OutputContactForcesOnTimeSteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.OutputContactForcesOnTimeSteps)     | Gets or Sets the Cycle increment for OutputContactForcesOnTimeSteps. |
| [`OutputContactForcesOnPoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.OutputContactForcesOnPoints)           | Gets or Sets the Points increment for OutputContactForcesOnPoints.   |
| [`SavePrintSummaryOnType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SavePrintSummaryOnType)                     | Gets or Sets SavePrintSummaryOnType.                                 |
| [`SavePrintSummaryOnTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SavePrintSummaryOnTime)                     | Gets or Sets the Time increment for SavePrintSummaryOnTime.          |
| [`SavePrintSummaryOnTimeSteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SavePrintSummaryOnTimeSteps)           | Gets or Sets Cycle increment for SavePrintSummaryOnTimeSteps.        |
| [`OutputRemapFile`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.OutputRemapFile)                                   | Gets or Sets the Output Remap File Type.                             |
| [`SaveUserEditOnType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SaveUserEditOnType)                             | Gets or Sets SaveUserEditOnType.                                     |
| [`SaveUserEditOnTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SaveUserEditOnTime)                             | Gets or Sets Time increment for SaveUserEditOnTime.                  |
| [`SaveUserEditOnTimeSteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SaveUserEditOnTimeSteps)                   | Gets or Sets Cycle increment for SaveUserEditOnTimeSteps.            |
| [`Graph`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.Graph)                                                       | Graph property.                                                      |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#id0)                                                                    | Gets the internal object. For advanced usage only.                   |
| [`ScratchSolverFilesDirectory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.ScratchSolverFilesDirectory)           | Gets the ScratchSolverFilesDirectory.                                |
| [`SolverFilesDirectory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.SolverFilesDirectory)                         | Gets the SolverFilesDirectory.                                       |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.DataModelObjectCategory)                   | Gets the current DataModelObject’s category.                         |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.Children)                                                 | Gets the list of children.                                           |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.Comments)                                                 | Gets the list of associated comments.                                |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.Figures)                                                   | Gets the list of associated figures.                                 |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.Images)                                                     | Gets the list of associated images.                                  |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.Properties)                                             | Gets the list of properties for this object.                         |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/EXDAnalysisSettings.md#EXDAnalysisSettings.VisibleProperties)                               | Gets the list of properties that are visible for this object.        |

<a id="property-detail"></a>

## Property detail

<a id="EXDAnalysisSettings.InternalObject"></a>

### *property* EXDAnalysisSettings.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Internal Object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.PreferenceType"></a>

### *property* EXDAnalysisSettings.PreferenceType *: [Ansys.Mechanical.DataModel.Enums.EXDPreferenceType](../../../../Mechanical/DataModel/Enums/EXDPreferenceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDPreferenceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreferenceType

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.NumberOfSteps"></a>

### *property* EXDAnalysisSettings.NumberOfSteps *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSteps.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.CurrentStepNumber"></a>

### *property* EXDAnalysisSettings.CurrentStepNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ResumeFromTimeStep"></a>

### *property* EXDAnalysisSettings.ResumeFromTimeStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResumeFromCycle.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.MaximumTimeSteps"></a>

### *property* EXDAnalysisSettings.MaximumTimeSteps *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumNumberofCycles.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.MaximumEnergyError"></a>

### *property* EXDAnalysisSettings.MaximumEnergyError *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MaximumEnergyError.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ReferenceEnergyTimeStep"></a>

### *property* EXDAnalysisSettings.ReferenceEnergyTimeStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceEnergyCycle.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.InitialTimeStep"></a>

### *property* EXDAnalysisSettings.InitialTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.MinimumTimeStep"></a>

### *property* EXDAnalysisSettings.MinimumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.MaximumTimeStep"></a>

### *property* EXDAnalysisSettings.MaximumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.TimeStepSafetyFactor"></a>

### *property* EXDAnalysisSettings.TimeStepSafetyFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  TimeStepSafetyFactor.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.CharZoneDimensionType"></a>

### *property* EXDAnalysisSettings.CharZoneDimensionType *: [Ansys.Mechanical.DataModel.Enums.EXDCharZoneDimensionType](../../../../Mechanical/DataModel/Enums/EXDCharZoneDimensionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDCharZoneDimensionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  CharZoneDimensionType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.StepawareMassScalingType"></a>

### *property* EXDAnalysisSettings.StepawareMassScalingType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Step aware Mass Scaling Controls.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.AutomaticMassScalingType"></a>

### *property* EXDAnalysisSettings.AutomaticMassScalingType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  AutomaticMassScaling.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.MassScalingMinTimeStep"></a>

### *property* EXDAnalysisSettings.MassScalingMinTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MassScalingMinTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.MassScalingMaxElem"></a>

### *property* EXDAnalysisSettings.MassScalingMaxElem *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MassScalingMaxElem.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.MassScalingMaxPart"></a>

### *property* EXDAnalysisSettings.MassScalingMaxPart *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MassScalingMaxPart.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.MassScalingUpdateFreq"></a>

### *property* EXDAnalysisSettings.MassScalingUpdateFreq *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MassScalingUpdateFreq.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SolverPrecisionType"></a>

### *property* EXDAnalysisSettings.SolverPrecisionType *: [Ansys.Mechanical.DataModel.Enums.EXDSolverPrecisionType](../../../../Mechanical/DataModel/Enums/EXDSolverPrecisionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDSolverPrecisionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  SolverPrecisionType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SolveUnits"></a>

### *property* EXDAnalysisSettings.SolveUnits *: [Ansys.Mechanical.DataModel.Enums.EXDSolveUnitsType](../../../../Mechanical/DataModel/Enums/EXDSolveUnitsType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDSolveUnitsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  SolveUnits.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.BeamSolutionType"></a>

### *property* EXDAnalysisSettings.BeamSolutionType *: [Ansys.Mechanical.DataModel.Enums.EXDBeamSolutionType](../../../../Mechanical/DataModel/Enums/EXDBeamSolutionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDBeamSolutionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  BeamSolutionType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.BeamTimeStepSafetyFactor"></a>

### *property* EXDAnalysisSettings.BeamTimeStepSafetyFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  BeamTimeStepSafetyFactor.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.HexIntegrationType"></a>

### *property* EXDAnalysisSettings.HexIntegrationType *: [Ansys.Mechanical.DataModel.Enums.EXDHexIntegrationType](../../../../Mechanical/DataModel/Enums/EXDHexIntegrationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDHexIntegrationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  HexIntegrationType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ShellSublayers"></a>

### *property* EXDAnalysisSettings.ShellSublayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  ShellSublayers.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ShellShearCorrectionFactor"></a>

### *property* EXDAnalysisSettings.ShellShearCorrectionFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  ShellShearCorrectionFactor.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ShellWarpCorrection"></a>

### *property* EXDAnalysisSettings.ShellWarpCorrection *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  ShellWarpCorrection.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ShellThicknessUpdateType"></a>

### *property* EXDAnalysisSettings.ShellThicknessUpdateType *: [Ansys.Mechanical.DataModel.Enums.EXDShellThicknessUpdateType](../../../../Mechanical/DataModel/Enums/EXDShellThicknessUpdateType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDShellThicknessUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  ShellThicknessUpdateType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.PusoCoefficient"></a>

### *property* EXDAnalysisSettings.PusoCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  PusoCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.TetPressureIntegrationType"></a>

### *property* EXDAnalysisSettings.TetPressureIntegrationType *: [Ansys.Mechanical.DataModel.Enums.EXDTetPressureIntegrationType](../../../../Mechanical/DataModel/Enums/EXDTetPressureIntegrationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDTetPressureIntegrationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  TetIntegrationType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ShellInertiaUpdateType"></a>

### *property* EXDAnalysisSettings.ShellInertiaUpdateType *: [Ansys.Mechanical.DataModel.Enums.EXDShellInertiaUpdateType](../../../../Mechanical/DataModel/Enums/EXDShellInertiaUpdateType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDShellInertiaUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  ShellInertiaUpdateType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.DensityUpdateType"></a>

### *property* EXDAnalysisSettings.DensityUpdateType *: [Ansys.Mechanical.DataModel.Enums.EXDDensityUpdateType](../../../../Mechanical/DataModel/Enums/EXDDensityUpdateType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDDensityUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  DensityUpdateType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SphMinTimeStep"></a>

### *property* EXDAnalysisSettings.SphMinTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  Minimum Timestep for SPH.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SPHMinDensityFactor"></a>

### *property* EXDAnalysisSettings.SPHMinDensityFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  Minimum Density Factor for SPH.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SPHMaxDensityFactor"></a>

### *property* EXDAnalysisSettings.SPHMaxDensityFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  Maximum Density Factor for SPH.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SPHNodeDensityCutoffOption"></a>

### *property* EXDAnalysisSettings.SPHNodeDensityCutoffOption *: [Ansys.Mechanical.DataModel.Enums.EXDSPHNodeDensityCutoffOption](../../../../Mechanical/DataModel/Enums/EXDSPHNodeDensityCutoffOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDSPHNodeDensityCutoffOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  SPHNodeDensityCutoffOption.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.DetonationBurnType"></a>

### *property* EXDAnalysisSettings.DetonationBurnType *: [Ansys.Mechanical.DataModel.Enums.EXDDetonationBurnType](../../../../Mechanical/DataModel/Enums/EXDDetonationBurnType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDDetonationBurnType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  DetonationBurnType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.MinimumVelocity"></a>

### *property* EXDAnalysisSettings.MinimumVelocity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MinimumVelocity.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.MaximumVelocity"></a>

### *property* EXDAnalysisSettings.MaximumVelocity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MaximumVelocity.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.RadiusCutoff"></a>

### *property* EXDAnalysisSettings.RadiusCutoff *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  RadiusCutoff.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.MinimumStrainCutOff"></a>

### *property* EXDAnalysisSettings.MinimumStrainCutOff *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MinimumStrainCutOff.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerSizeDefType"></a>

### *property* EXDAnalysisSettings.EulerSizeDefType *: [Ansys.Mechanical.DataModel.Enums.EXDEulerSizeDefType](../../../../Mechanical/DataModel/Enums/EXDEulerSizeDefType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDEulerSizeDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerSizeDefType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerDomainType"></a>

### *property* EXDAnalysisSettings.EulerDomainType *: [Ansys.Mechanical.DataModel.Enums.EXDEulerDomainType](../../../../Mechanical/DataModel/Enums/EXDEulerDomainType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDEulerDomainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerDomainType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerDisplayBox"></a>

### *property* EXDAnalysisSettings.EulerDisplayBox *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerDisplayBox.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerDomScopeDefType"></a>

### *property* EXDAnalysisSettings.EulerDomScopeDefType *: [Ansys.Mechanical.DataModel.Enums.EXDEulerDomScopeDefType](../../../../Mechanical/DataModel/Enums/EXDEulerDomScopeDefType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDEulerDomScopeDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerDomScopeDefType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerXScaleFactor"></a>

### *property* EXDAnalysisSettings.EulerXScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerXScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerYScaleFactor"></a>

### *property* EXDAnalysisSettings.EulerYScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerYScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerZScaleFactor"></a>

### *property* EXDAnalysisSettings.EulerZScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerZScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerXOrigin"></a>

### *property* EXDAnalysisSettings.EulerXOrigin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerXOrigin.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerYOrigin"></a>

### *property* EXDAnalysisSettings.EulerYOrigin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerYOrigin.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerZOrigin"></a>

### *property* EXDAnalysisSettings.EulerZOrigin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerZOrigin.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerXDim"></a>

### *property* EXDAnalysisSettings.EulerXDim *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerXDim.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerYDim"></a>

### *property* EXDAnalysisSettings.EulerYDim *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerYDim.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerZDim"></a>

### *property* EXDAnalysisSettings.EulerZDim *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerZDim.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerResolutionDefType"></a>

### *property* EXDAnalysisSettings.EulerResolutionDefType *: [Ansys.Mechanical.DataModel.Enums.EXDEulerResolutionDefType](../../../../Mechanical/DataModel/Enums/EXDEulerResolutionDefType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDEulerResolutionDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerResolutionDefType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerGradedDefinition"></a>

### *property* EXDAnalysisSettings.EulerGradedDefinition *: [Ansys.Mechanical.DataModel.Enums.EXDEulerGradedDefinition](../../../../Mechanical/DataModel/Enums/EXDEulerGradedDefinition.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDEulerGradedDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerGradedDefinition.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerGradeIncrement"></a>

### *property* EXDAnalysisSettings.EulerGradeIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerGradeIncrement.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerGradeNumberOfTimes"></a>

### *property* EXDAnalysisSettings.EulerGradeNumberOfTimes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerGradeNumberOfTimes.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerCellSize"></a>

### *property* EXDAnalysisSettings.EulerCellSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerCellSize.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerTotalCells"></a>

### *property* EXDAnalysisSettings.EulerTotalCells *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerTotalCells.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerXZones"></a>

### *property* EXDAnalysisSettings.EulerXZones *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerXZones.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerYZones"></a>

### *property* EXDAnalysisSettings.EulerYZones *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerYZones.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerZZones"></a>

### *property* EXDAnalysisSettings.EulerZZones *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerZZones.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerBoundLowerX"></a>

### *property* EXDAnalysisSettings.EulerBoundLowerX *: [Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType](../../../../Mechanical/DataModel/Enums/EXDEulerBoundaryDefType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerBoundLowerX.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerBoundLowerY"></a>

### *property* EXDAnalysisSettings.EulerBoundLowerY *: [Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType](../../../../Mechanical/DataModel/Enums/EXDEulerBoundaryDefType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerBoundLowerY.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerBoundLowerZ"></a>

### *property* EXDAnalysisSettings.EulerBoundLowerZ *: [Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType](../../../../Mechanical/DataModel/Enums/EXDEulerBoundaryDefType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerBoundLowerZ.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerBoundUpperX"></a>

### *property* EXDAnalysisSettings.EulerBoundUpperX *: [Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType](../../../../Mechanical/DataModel/Enums/EXDEulerBoundaryDefType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerBoundUpperX.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerBoundUpperY"></a>

### *property* EXDAnalysisSettings.EulerBoundUpperY *: [Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType](../../../../Mechanical/DataModel/Enums/EXDEulerBoundaryDefType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerBoundUpperY.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerBoundUpperZ"></a>

### *property* EXDAnalysisSettings.EulerBoundUpperZ *: [Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType](../../../../Mechanical/DataModel/Enums/EXDEulerBoundaryDefType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerBoundUpperZ.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerTrackType"></a>

### *property* EXDAnalysisSettings.EulerTrackType *: [Ansys.Mechanical.DataModel.Enums.EXDEulerTrackType](../../../../Mechanical/DataModel/Enums/EXDEulerTrackType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDEulerTrackType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the  EulerTrackType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerPropertyXmin"></a>

### *property* EXDAnalysisSettings.EulerPropertyXmin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyXmin.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerPropertyYmin"></a>

### *property* EXDAnalysisSettings.EulerPropertyYmin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyYmin.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerPropertyZmin"></a>

### *property* EXDAnalysisSettings.EulerPropertyZmin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyZmin.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerPropertyXsize"></a>

### *property* EXDAnalysisSettings.EulerPropertyXsize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyXsize.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerPropertyYsize"></a>

### *property* EXDAnalysisSettings.EulerPropertyYsize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyYsize.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerPropertyZsize"></a>

### *property* EXDAnalysisSettings.EulerPropertyZsize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyZsize.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerPropertyXres"></a>

### *property* EXDAnalysisSettings.EulerPropertyXres *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyXres.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerPropertyYres"></a>

### *property* EXDAnalysisSettings.EulerPropertyYres *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyYres.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerPropertyZres"></a>

### *property* EXDAnalysisSettings.EulerPropertyZres *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyZres.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerPropertyDisplayBox"></a>

### *property* EXDAnalysisSettings.EulerPropertyDisplayBox *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyDisplayBox.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.LinearArtificialViscosity"></a>

### *property* EXDAnalysisSettings.LinearArtificialViscosity *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LinearArtificialViscosity.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.QuadraticArtificialViscosity"></a>

### *property* EXDAnalysisSettings.QuadraticArtificialViscosity *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the QuadraticArtificialViscosity.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.LinearViscosityExpansionType"></a>

### *property* EXDAnalysisSettings.LinearViscosityExpansionType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LinearViscosityExpansionType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ArtificialViscosityForShellsType"></a>

### *property* EXDAnalysisSettings.ArtificialViscosityForShellsType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ArtificialViscosityForShellsType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.LinearViscositySPH"></a>

### *property* EXDAnalysisSettings.LinearViscositySPH *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linear Artificial Viscosity for SPH.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.QuadratricViscositySPH"></a>

### *property* EXDAnalysisSettings.QuadratricViscositySPH *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Quadratic Artificial Viscosity for SPH.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.HourglassDampingType"></a>

### *property* EXDAnalysisSettings.HourglassDampingType *: [Ansys.Mechanical.DataModel.Enums.EXDHourglassDampingType](../../../../Mechanical/DataModel/Enums/EXDHourglassDampingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDHourglassDampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HourglassDampingType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.StiffnessCoefficient"></a>

### *property* EXDAnalysisSettings.StiffnessCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ViscousCoefficient"></a>

### *property* EXDAnalysisSettings.ViscousCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ViscousCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ViscousCoefficientFB"></a>

### *property* EXDAnalysisSettings.ViscousCoefficientFB *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ViscousCoefficientFB.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ErosionOnGeomStrainType"></a>

### *property* EXDAnalysisSettings.ErosionOnGeomStrainType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ErosionOnGeomStrainType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ErosionGeomStrainLimit"></a>

### *property* EXDAnalysisSettings.ErosionGeomStrainLimit *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ErosionGeomStrainLimit

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ErosionOnMaterialFailureType"></a>

### *property* EXDAnalysisSettings.ErosionOnMaterialFailureType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ErosionOnMaterialFailureType

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ErosionOnMinElemTimestepType"></a>

### *property* EXDAnalysisSettings.ErosionOnMinElemTimestepType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ErosionOnMinElemTimestepType

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ErosionMinElemTimestep"></a>

### *property* EXDAnalysisSettings.ErosionMinElemTimestep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ErosionMinElemTimestep

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ErosionRetainIntertiaType"></a>

### *property* EXDAnalysisSettings.ErosionRetainIntertiaType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ErosionRetainIntertiaType

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.StepawareOutputControlsType"></a>

### *property* EXDAnalysisSettings.StepawareOutputControlsType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Step aware Output Controls.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.OutputContactForcesOnType"></a>

### *property* EXDAnalysisSettings.OutputContactForcesOnType *: [Ansys.Mechanical.DataModel.Enums.EXDOutputContactForcesOnType](../../../../Mechanical/DataModel/Enums/EXDOutputContactForcesOnType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDOutputContactForcesOnType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets OutputContactForces Increment Type.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.OutputContactForcesOnTime"></a>

### *property* EXDAnalysisSettings.OutputContactForcesOnTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Time increment for OutputContactForcesOnTime.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.OutputContactForcesOnTimeSteps"></a>

### *property* EXDAnalysisSettings.OutputContactForcesOnTimeSteps *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Cycle increment for OutputContactForcesOnTimeSteps.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.OutputContactForcesOnPoints"></a>

### *property* EXDAnalysisSettings.OutputContactForcesOnPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Points increment for OutputContactForcesOnPoints.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SavePrintSummaryOnType"></a>

### *property* EXDAnalysisSettings.SavePrintSummaryOnType *: [Ansys.Mechanical.DataModel.Enums.EXDSavePrintSummaryOnType](../../../../Mechanical/DataModel/Enums/EXDSavePrintSummaryOnType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDSavePrintSummaryOnType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets SavePrintSummaryOnType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SavePrintSummaryOnTime"></a>

### *property* EXDAnalysisSettings.SavePrintSummaryOnTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Time increment for SavePrintSummaryOnTime.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SavePrintSummaryOnTimeSteps"></a>

### *property* EXDAnalysisSettings.SavePrintSummaryOnTimeSteps *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets Cycle increment for SavePrintSummaryOnTimeSteps.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.OutputRemapFile"></a>

### *property* EXDAnalysisSettings.OutputRemapFile *: Ansys.Mechanical.DataModel.Enums.EXDOutputRemapFileOnType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Output Remap File Type.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SaveUserEditOnType"></a>

### *property* EXDAnalysisSettings.SaveUserEditOnType *: [Ansys.Mechanical.DataModel.Enums.EXDSaveUserEditOnType](../../../../Mechanical/DataModel/Enums/EXDSaveUserEditOnType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDSaveUserEditOnType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets SaveUserEditOnType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SaveUserEditOnTime"></a>

### *property* EXDAnalysisSettings.SaveUserEditOnTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets Time increment for SaveUserEditOnTime.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SaveUserEditOnTimeSteps"></a>

### *property* EXDAnalysisSettings.SaveUserEditOnTimeSteps *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets Cycle increment for SaveUserEditOnTimeSteps.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.Graph"></a>

### *property* EXDAnalysisSettings.Graph *: [Ansys.Mechanical.Graphics.AnalysisSettingsGraph](../../../../Mechanical/Graphics/AnalysisSettingsGraph.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnalysisSettingsGraph) | [None](https://docs.python.org/3/library/constants.html#None)*

Graph property.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* EXDAnalysisSettings.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAnalysisSettings | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ScratchSolverFilesDirectory"></a>

### *property* EXDAnalysisSettings.ScratchSolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScratchSolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SolverFilesDirectory"></a>

### *property* EXDAnalysisSettings.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.DataModelObjectCategory"></a>

### *property* EXDAnalysisSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.Children"></a>

### *property* EXDAnalysisSettings.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.Comments"></a>

### *property* EXDAnalysisSettings.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.Figures"></a>

### *property* EXDAnalysisSettings.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.Images"></a>

### *property* EXDAnalysisSettings.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.Properties"></a>

### *property* EXDAnalysisSettings.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.VisibleProperties"></a>

### *property* EXDAnalysisSettings.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EXDAnalysisSettings.GetStepEndTime"></a>

### EXDAnalysisSettings.GetStepEndTime(stepNumber: System.Int32)

Gets the Step End Time at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetStepEndTime"></a>

### EXDAnalysisSettings.SetStepEndTime(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Sets the Step End Time for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetLoadStepType"></a>

### EXDAnalysisSettings.GetLoadStepType(stepNumber: System.Int32)

Gets the  LoadStepType for a step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetLoadStepType"></a>

### EXDAnalysisSettings.SetLoadStepType(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.EXDLoadStepType](../../../../Mechanical/DataModel/Enums/EXDLoadStepType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDLoadStepType))

Sets the LoadStepType for a step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.getADRConvergenceMethod"></a>

### EXDAnalysisSettings.getADRConvergenceMethod(stepNumber: System.Int32)

Gets the Covergence Method for ADR loadstep.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.setADRConvergenceMethod"></a>

### EXDAnalysisSettings.setADRConvergenceMethod(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.EXDADRConvergenceMethod](../../../../Mechanical/DataModel/Enums/EXDADRConvergenceMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDADRConvergenceMethod))

Sets the Covergence Method for ADR loadstep.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.getADRConvergenceTolerance"></a>

### EXDAnalysisSettings.getADRConvergenceTolerance(stepNumber: System.Int32)

Gets the Covergence Tolerance for ADR loadstep.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.setADRConvergenceTolerance"></a>

### EXDAnalysisSettings.setADRConvergenceTolerance(stepNumber: System.Int32, value: System.Double)

Sets the Covergence Tolerance for ADR loadstep.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.getADRMaximumIterations"></a>

### EXDAnalysisSettings.getADRMaximumIterations(stepNumber: System.Int32)

Gets the Maximum Iterations for ADR loadstep.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.setADRMaximumIterations"></a>

### EXDAnalysisSettings.setADRMaximumIterations(stepNumber: System.Int32, value: System.Int32)

Sets the Maximum Iterations for ADR loadstep.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetAutomaticMassScalingType"></a>

### EXDAnalysisSettings.GetAutomaticMassScalingType(stepNumber: System.Int32)

Gets the  AutomaticMassScalingType for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetAutomaticMassScalingType"></a>

### EXDAnalysisSettings.SetAutomaticMassScalingType(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.EXDAutomaticMassScalingType](../../../../Mechanical/DataModel/Enums/EXDAutomaticMassScalingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDAutomaticMassScalingType))

Sets the  AutomaticMassScalingType for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetMassScalingMinTimeStep"></a>

### EXDAnalysisSettings.GetMassScalingMinTimeStep(stepNumber: System.Int32)

Gets the  MassScalingMinTimeStep for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetMassScalingMinTimeStep"></a>

### EXDAnalysisSettings.SetMassScalingMinTimeStep(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Sets the  MassScalingMinTimeStep for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetStaticDamping"></a>

### EXDAnalysisSettings.GetStaticDamping(stepNumber: System.Int32)

Gets the StaticDamping.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetStaticDamping"></a>

### EXDAnalysisSettings.SetStaticDamping(stepNumber: System.Int32, value: System.Double)

Sets the StaticDamping.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetSaveResultsOnType"></a>

### EXDAnalysisSettings.GetSaveResultsOnType(stepNumber: System.Int32)

Gets the  Save Results Type for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetSaveResultsOnType"></a>

### EXDAnalysisSettings.SetSaveResultsOnType(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.EXDSaveResultsOnType](../../../../Mechanical/DataModel/Enums/EXDSaveResultsOnType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDSaveResultsOnType))

Sets the  Save Results Type for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetSaveResultsOnTime"></a>

### EXDAnalysisSettings.GetSaveResultsOnTime(stepNumber: System.Int32)

Gets the Time increment for Save Results On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetSaveResultsOnTime"></a>

### EXDAnalysisSettings.SetSaveResultsOnTime(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Set the Time increment for Save Results On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetSaveResultsOnTimeSteps"></a>

### EXDAnalysisSettings.GetSaveResultsOnTimeSteps(stepNumber: System.Int32)

Gets the Cycle increment for Save Results On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetSaveResultsOnTimeSteps"></a>

### EXDAnalysisSettings.SetSaveResultsOnTimeSteps(stepNumber: System.Int32, value: System.Int32)

Sets the Cycle increment for Save Results On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetSaveResultsOnPoints"></a>

### EXDAnalysisSettings.GetSaveResultsOnPoints(stepNumber: System.Int32)

Gets the Points increment for Save Results On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetSaveResultsOnPoints"></a>

### EXDAnalysisSettings.SetSaveResultsOnPoints(stepNumber: System.Int32, value: System.Int32)

Set the Points increment for Save Results On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetSaveRestartsOnType"></a>

### EXDAnalysisSettings.GetSaveRestartsOnType(stepNumber: System.Int32)

Gets the  Save Restarts Type for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetSaveRestartsOnType"></a>

### EXDAnalysisSettings.SetSaveRestartsOnType(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.EXDSaveRestartsOnType](../../../../Mechanical/DataModel/Enums/EXDSaveRestartsOnType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDSaveRestartsOnType))

Sets the  Save Restarts Type for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetSaveRestartsOnTime"></a>

### EXDAnalysisSettings.GetSaveRestartsOnTime(stepNumber: System.Int32)

Gets the Time increment for Save Restarts On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetSaveRestartsOnTime"></a>

### EXDAnalysisSettings.SetSaveRestartsOnTime(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Set the Time increment for Save Restarts On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetSaveRestartsOnTimeSteps"></a>

### EXDAnalysisSettings.GetSaveRestartsOnTimeSteps(stepNumber: System.Int32)

Gets the Cycle increment for Save Restarts On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetSaveRestartsOnTimeSteps"></a>

### EXDAnalysisSettings.SetSaveRestartsOnTimeSteps(stepNumber: System.Int32, value: System.Int32)

Set the Cycle increment for Save Restarts On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetSaveRestartsOnPoints"></a>

### EXDAnalysisSettings.GetSaveRestartsOnPoints(stepNumber: System.Int32)

Gets the Points increment for Save Restarts On Points for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetSaveRestartsOnPoints"></a>

### EXDAnalysisSettings.SetSaveRestartsOnPoints(stepNumber: System.Int32, value: System.Int32)

Set the Points increment for Save Restarts On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetSaveProbeDataOnType"></a>

### EXDAnalysisSettings.GetSaveProbeDataOnType(stepNumber: System.Int32)

Gets the  Save ProbeData Type for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetSaveProbeDataOnType"></a>

### EXDAnalysisSettings.SetSaveProbeDataOnType(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.EXDSaveProbeDataOnType](../../../../Mechanical/DataModel/Enums/EXDSaveProbeDataOnType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDSaveProbeDataOnType))

Sets the  Save ProbeData Type for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetSaveProbeDataOnTime"></a>

### EXDAnalysisSettings.GetSaveProbeDataOnTime(stepNumber: System.Int32)

Gets the Time increment for Save ProbeData On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetSaveProbeDataOnTime"></a>

### EXDAnalysisSettings.SetSaveProbeDataOnTime(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Set the Time increment for Save ProbeData On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetSaveProbeDataOnTimeSteps"></a>

### EXDAnalysisSettings.GetSaveProbeDataOnTimeSteps(stepNumber: System.Int32)

Gets the Cycle increment for Save ProbeData On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetSaveProbeDataOnTimeSteps"></a>

### EXDAnalysisSettings.SetSaveProbeDataOnTimeSteps(stepNumber: System.Int32, value: System.Int32)

Set the Cycle increment for Save ProbeData On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.DeleteAllRestartPoints"></a>

### EXDAnalysisSettings.DeleteAllRestartPoints()

DeleteAllRestartPoints method.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetChildren"></a>

### EXDAnalysisSettings.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### EXDAnalysisSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.AddComment"></a>

### EXDAnalysisSettings.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.AddFigure"></a>

### EXDAnalysisSettings.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.AddImage"></a>

### EXDAnalysisSettings.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.Activate"></a>

### EXDAnalysisSettings.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.CopyTo"></a>

### EXDAnalysisSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.Duplicate"></a>

### EXDAnalysisSettings.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GroupAllSimilarChildren"></a>

### EXDAnalysisSettings.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GroupSimilarObjects"></a>

### EXDAnalysisSettings.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.PropertyByName"></a>

### EXDAnalysisSettings.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.PropertyByAPIName"></a>

### EXDAnalysisSettings.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.CreateParameter"></a>

### EXDAnalysisSettings.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetParameter"></a>

### EXDAnalysisSettings.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.RemoveParameter"></a>

### EXDAnalysisSettings.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

