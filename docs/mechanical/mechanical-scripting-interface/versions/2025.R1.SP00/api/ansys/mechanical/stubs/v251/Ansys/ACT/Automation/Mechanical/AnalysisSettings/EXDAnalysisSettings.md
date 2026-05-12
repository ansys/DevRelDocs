# `EXDAnalysisSettings`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.AnalysisSettings.EXDAnalysisSettings"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AnalysisSettings.EXDAnalysisSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines Analysis Settings for Explicit Dynamics System.
Note: Cycles in the UI are referred to as TimeSteps in API

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#EXDAnalysisSettings.Activate)                                       | Activate the current object.                                                      |
| [`AddComment`](#EXDAnalysisSettings.AddComment)                                   | Creates a new child Comment.                                                      |
| [`AddFigure`](#EXDAnalysisSettings.AddFigure)                                     | Creates a new child Figure.                                                       |
| [`AddImage`](#EXDAnalysisSettings.AddImage)                                       | Creates a new child Image.                                                        |
| [`CopyTo`](#EXDAnalysisSettings.CopyTo)                                           | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#EXDAnalysisSettings.CreateParameter)                         | Creates a new parameter for a Property.                                           |
| [`DeleteAllRestartPoints`](#EXDAnalysisSettings.DeleteAllRestartPoints)           | DeleteAllRestartPoints method.                                                    |
| [`Duplicate`](#EXDAnalysisSettings.Duplicate)                                     | Creates a copy of the current DataModelObject.                                    |
| [`GetAutomaticMassScalingType`](#EXDAnalysisSettings.GetAutomaticMassScalingType) | Gets the  AutomaticMassScalingType for a load step.                               |
| [`GetChildren`](#EXDAnalysisSettings.GetChildren)                                 | Gets the list of children, filtered by type.                                      |
| [`GetLoadStepType`](#EXDAnalysisSettings.GetLoadStepType)                         | Gets the  LoadStepType for a step.                                                |
| [`GetMassScalingMinTimeStep`](#EXDAnalysisSettings.GetMassScalingMinTimeStep)     | Gets the  MassScalingMinTimeStep for a load step.                                 |
| [`GetParameter`](#EXDAnalysisSettings.GetParameter)                               | Gets the parameter corresponding to the given property.                           |
| [`GetSaveProbeDataOnTime`](#EXDAnalysisSettings.GetSaveProbeDataOnTime)           | Gets the Time increment for Save ProbeData On for a load step.                    |
| [`GetSaveProbeDataOnTimeSteps`](#EXDAnalysisSettings.GetSaveProbeDataOnTimeSteps) | Gets the Cycle increment for Save ProbeData On for a load step.                   |
| [`GetSaveProbeDataOnType`](#EXDAnalysisSettings.GetSaveProbeDataOnType)           | Gets the  Save ProbeData Type for a load step.                                    |
| [`GetSaveRestartsOnPoints`](#EXDAnalysisSettings.GetSaveRestartsOnPoints)         | Gets the Points increment for Save Restarts On Points for a load step.            |
| [`GetSaveRestartsOnTime`](#EXDAnalysisSettings.GetSaveRestartsOnTime)             | Gets the Time increment for Save Restarts On for a load step.                     |
| [`GetSaveRestartsOnTimeSteps`](#EXDAnalysisSettings.GetSaveRestartsOnTimeSteps)   | Gets the Cycle increment for Save Restarts On for a load step.                    |
| [`GetSaveRestartsOnType`](#EXDAnalysisSettings.GetSaveRestartsOnType)             | Gets the  Save Restarts Type for a load step.                                     |
| [`GetSaveResultsOnPoints`](#EXDAnalysisSettings.GetSaveResultsOnPoints)           | Gets the Points increment for Save Results On for a load step.                    |
| [`GetSaveResultsOnTime`](#EXDAnalysisSettings.GetSaveResultsOnTime)               | Gets the Time increment for Save Results On for a load step.                      |
| [`GetSaveResultsOnTimeSteps`](#EXDAnalysisSettings.GetSaveResultsOnTimeSteps)     | Gets the Cycle increment for Save Results On for a load step.                     |
| [`GetSaveResultsOnType`](#EXDAnalysisSettings.GetSaveResultsOnType)               | Gets the  Save Results Type for a load step.                                      |
| [`GetStaticDamping`](#EXDAnalysisSettings.GetStaticDamping)                       | Gets the StaticDamping.                                                           |
| [`GetStepEndTime`](#EXDAnalysisSettings.GetStepEndTime)                           | Gets the Step End Time at a given solution step.                                  |
| [`GroupAllSimilarChildren`](#EXDAnalysisSettings.GroupAllSimilarChildren)         | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#EXDAnalysisSettings.GroupSimilarObjects)                 | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#EXDAnalysisSettings.PropertyByAPIName)                     | Get a property by its API name.                                                   |
| [`PropertyByName`](#EXDAnalysisSettings.PropertyByName)                           | Get a property by its unique name.                                                |
| [`RemoveParameter`](#EXDAnalysisSettings.RemoveParameter)                         | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetAutomaticMassScalingType`](#EXDAnalysisSettings.SetAutomaticMassScalingType) | Sets the  AutomaticMassScalingType for a load step.                               |
| [`SetLoadStepType`](#EXDAnalysisSettings.SetLoadStepType)                         | Sets the LoadStepType for a step.                                                 |
| [`SetMassScalingMinTimeStep`](#EXDAnalysisSettings.SetMassScalingMinTimeStep)     | Sets the  MassScalingMinTimeStep for a load step.                                 |
| [`SetSaveProbeDataOnTime`](#EXDAnalysisSettings.SetSaveProbeDataOnTime)           | Set the Time increment for Save ProbeData On for a load step.                     |
| [`SetSaveProbeDataOnTimeSteps`](#EXDAnalysisSettings.SetSaveProbeDataOnTimeSteps) | Set the Cycle increment for Save ProbeData On for a load step.                    |
| [`SetSaveProbeDataOnType`](#EXDAnalysisSettings.SetSaveProbeDataOnType)           | Sets the  Save ProbeData Type for a load step.                                    |
| [`SetSaveRestartsOnPoints`](#EXDAnalysisSettings.SetSaveRestartsOnPoints)         | Set the Points increment for Save Restarts On for a load step.                    |
| [`SetSaveRestartsOnTime`](#EXDAnalysisSettings.SetSaveRestartsOnTime)             | Set the Time increment for Save Restarts On for a load step.                      |
| [`SetSaveRestartsOnTimeSteps`](#EXDAnalysisSettings.SetSaveRestartsOnTimeSteps)   | Set the Cycle increment for Save Restarts On for a load step.                     |
| [`SetSaveRestartsOnType`](#EXDAnalysisSettings.SetSaveRestartsOnType)             | Sets the  Save Restarts Type for a load step.                                     |
| [`SetSaveResultsOnPoints`](#EXDAnalysisSettings.SetSaveResultsOnPoints)           | Set the Points increment for Save Results On for a load step.                     |
| [`SetSaveResultsOnTime`](#EXDAnalysisSettings.SetSaveResultsOnTime)               | Set the Time increment for Save Results On for a load step.                       |
| [`SetSaveResultsOnTimeSteps`](#EXDAnalysisSettings.SetSaveResultsOnTimeSteps)     | Sets the Cycle increment for Save Results On for a load step.                     |
| [`SetSaveResultsOnType`](#EXDAnalysisSettings.SetSaveResultsOnType)               | Sets the  Save Results Type for a load step.                                      |
| [`SetStaticDamping`](#EXDAnalysisSettings.SetStaticDamping)                       | Sets the StaticDamping.                                                           |
| [`SetStepEndTime`](#EXDAnalysisSettings.SetStepEndTime)                           | Sets the Step End Time for a given solution step.                                 |
| [`getADRConvergenceMethod`](#EXDAnalysisSettings.getADRConvergenceMethod)         | Gets the Covergence Method for ADR loadstep.                                      |
| [`getADRConvergenceTolerance`](#EXDAnalysisSettings.getADRConvergenceTolerance)   | Gets the Covergence Tolerance for ADR loadstep.                                   |
| [`getADRMaximumIterations`](#EXDAnalysisSettings.getADRMaximumIterations)         | Gets the Maximum Iterations for ADR loadstep.                                     |
| [`setADRConvergenceMethod`](#EXDAnalysisSettings.setADRConvergenceMethod)         | Sets the Covergence Method for ADR loadstep.                                      |
| [`setADRConvergenceTolerance`](#EXDAnalysisSettings.setADRConvergenceTolerance)   | Sets the Covergence Tolerance for ADR loadstep.                                   |
| [`setADRMaximumIterations`](#EXDAnalysisSettings.setADRMaximumIterations)         | Sets the Maximum Iterations for ADR loadstep.                                     |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| [`ArtificialViscosityForShellsType`](#EXDAnalysisSettings.ArtificialViscosityForShellsType)   | Gets or sets the ArtificialViscosityForShellsType.                   |
| [`AutomaticMassScalingType`](#EXDAnalysisSettings.AutomaticMassScalingType)                   | Gets or sets the  AutomaticMassScaling.                              |
| [`BeamSolutionType`](#EXDAnalysisSettings.BeamSolutionType)                                   | Gets or sets the  BeamSolutionType.                                  |
| [`BeamTimeStepSafetyFactor`](#EXDAnalysisSettings.BeamTimeStepSafetyFactor)                   | Gets or sets the  BeamTimeStepSafetyFactor.                          |
| [`CharZoneDimensionType`](#EXDAnalysisSettings.CharZoneDimensionType)                         | Gets or sets the  CharZoneDimensionType.                             |
| [`Children`](#EXDAnalysisSettings.Children)                                                   | Gets the list of children.                                           |
| [`Comments`](#EXDAnalysisSettings.Comments)                                                   | Gets the list of associated comments.                                |
| [`CurrentStepNumber`](#EXDAnalysisSettings.CurrentStepNumber)                                 | Gets or sets the CurrentStepNumber.                                  |
| [`DataModelObjectCategory`](#EXDAnalysisSettings.DataModelObjectCategory)                     | Gets the current DataModelObject’s category.                         |
| [`DensityUpdateType`](#EXDAnalysisSettings.DensityUpdateType)                                 | Gets or sets the  DensityUpdateType.                                 |
| [`DetonationBurnType`](#EXDAnalysisSettings.DetonationBurnType)                               | Gets or sets the  DetonationBurnType.                                |
| [`ErosionGeomStrainLimit`](#EXDAnalysisSettings.ErosionGeomStrainLimit)                       | Gets or sets the ErosionGeomStrainLimit                              |
| [`ErosionMinElemTimestep`](#EXDAnalysisSettings.ErosionMinElemTimestep)                       | Gets or sets the ErosionMinElemTimestep                              |
| [`ErosionOnGeomStrainType`](#EXDAnalysisSettings.ErosionOnGeomStrainType)                     | Gets or sets the ErosionOnGeomStrainType.                            |
| [`ErosionOnMaterialFailureType`](#EXDAnalysisSettings.ErosionOnMaterialFailureType)           | Gets or sets the ErosionOnMaterialFailureType                        |
| [`ErosionOnMinElemTimestepType`](#EXDAnalysisSettings.ErosionOnMinElemTimestepType)           | Gets or sets the ErosionOnMinElemTimestepType                        |
| [`ErosionRetainIntertiaType`](#EXDAnalysisSettings.ErosionRetainIntertiaType)                 | Gets or sets the ErosionRetainIntertiaType                           |
| [`EulerBoundLowerX`](#EXDAnalysisSettings.EulerBoundLowerX)                                   | Gets or sets the  EulerBoundLowerX.                                  |
| [`EulerBoundLowerY`](#EXDAnalysisSettings.EulerBoundLowerY)                                   | Gets or sets the  EulerBoundLowerY.                                  |
| [`EulerBoundLowerZ`](#EXDAnalysisSettings.EulerBoundLowerZ)                                   | Gets or sets the  EulerBoundLowerZ.                                  |
| [`EulerBoundUpperX`](#EXDAnalysisSettings.EulerBoundUpperX)                                   | Gets or sets the  EulerBoundUpperX.                                  |
| [`EulerBoundUpperY`](#EXDAnalysisSettings.EulerBoundUpperY)                                   | Gets or sets the  EulerBoundUpperY.                                  |
| [`EulerBoundUpperZ`](#EXDAnalysisSettings.EulerBoundUpperZ)                                   | Gets or sets the  EulerBoundUpperZ.                                  |
| [`EulerCellSize`](#EXDAnalysisSettings.EulerCellSize)                                         | Gets or sets the  EulerCellSize.                                     |
| [`EulerDisplayBox`](#EXDAnalysisSettings.EulerDisplayBox)                                     | Gets or sets the  EulerDisplayBox.                                   |
| [`EulerDomScopeDefType`](#EXDAnalysisSettings.EulerDomScopeDefType)                           | Gets or sets the  EulerDomScopeDefType.                              |
| [`EulerDomainType`](#EXDAnalysisSettings.EulerDomainType)                                     | Gets or sets the  EulerDomainType.                                   |
| [`EulerGradeIncrement`](#EXDAnalysisSettings.EulerGradeIncrement)                             | Gets or sets the  EulerGradeIncrement.                               |
| [`EulerGradeNumberOfTimes`](#EXDAnalysisSettings.EulerGradeNumberOfTimes)                     | Gets or sets the  EulerGradeNumberOfTimes.                           |
| [`EulerGradedDefinition`](#EXDAnalysisSettings.EulerGradedDefinition)                         | Gets or sets the  EulerGradedDefinition.                             |
| [`EulerPropertyDisplayBox`](#EXDAnalysisSettings.EulerPropertyDisplayBox)                     | Gets or sets the  EulerPropertyDisplayBox.                           |
| [`EulerPropertyXmin`](#EXDAnalysisSettings.EulerPropertyXmin)                                 | Gets or sets the  EulerPropertyXmin.                                 |
| [`EulerPropertyXres`](#EXDAnalysisSettings.EulerPropertyXres)                                 | Gets or sets the  EulerPropertyXres.                                 |
| [`EulerPropertyXsize`](#EXDAnalysisSettings.EulerPropertyXsize)                               | Gets or sets the  EulerPropertyXsize.                                |
| [`EulerPropertyYmin`](#EXDAnalysisSettings.EulerPropertyYmin)                                 | Gets or sets the  EulerPropertyYmin.                                 |
| [`EulerPropertyYres`](#EXDAnalysisSettings.EulerPropertyYres)                                 | Gets or sets the  EulerPropertyYres.                                 |
| [`EulerPropertyYsize`](#EXDAnalysisSettings.EulerPropertyYsize)                               | Gets or sets the  EulerPropertyYsize.                                |
| [`EulerPropertyZmin`](#EXDAnalysisSettings.EulerPropertyZmin)                                 | Gets or sets the  EulerPropertyZmin.                                 |
| [`EulerPropertyZres`](#EXDAnalysisSettings.EulerPropertyZres)                                 | Gets or sets the  EulerPropertyZres.                                 |
| [`EulerPropertyZsize`](#EXDAnalysisSettings.EulerPropertyZsize)                               | Gets or sets the  EulerPropertyZsize.                                |
| [`EulerResolutionDefType`](#EXDAnalysisSettings.EulerResolutionDefType)                       | Gets or sets the  EulerResolutionDefType.                            |
| [`EulerSizeDefType`](#EXDAnalysisSettings.EulerSizeDefType)                                   | Gets or sets the  EulerSizeDefType.                                  |
| [`EulerTotalCells`](#EXDAnalysisSettings.EulerTotalCells)                                     | Gets or sets the  EulerTotalCells.                                   |
| [`EulerTrackType`](#EXDAnalysisSettings.EulerTrackType)                                       | Gets the  EulerTrackType.                                            |
| [`EulerXDim`](#EXDAnalysisSettings.EulerXDim)                                                 | Gets or sets the  EulerXDim.                                         |
| [`EulerXOrigin`](#EXDAnalysisSettings.EulerXOrigin)                                           | Gets or sets the  EulerXOrigin.                                      |
| [`EulerXScaleFactor`](#EXDAnalysisSettings.EulerXScaleFactor)                                 | Gets or sets the  EulerXScaleFactor.                                 |
| [`EulerXZones`](#EXDAnalysisSettings.EulerXZones)                                             | Gets or sets the  EulerXZones.                                       |
| [`EulerYDim`](#EXDAnalysisSettings.EulerYDim)                                                 | Gets or sets the  EulerYDim.                                         |
| [`EulerYOrigin`](#EXDAnalysisSettings.EulerYOrigin)                                           | Gets or sets the  EulerYOrigin.                                      |
| [`EulerYScaleFactor`](#EXDAnalysisSettings.EulerYScaleFactor)                                 | Gets or sets the  EulerYScaleFactor.                                 |
| [`EulerYZones`](#EXDAnalysisSettings.EulerYZones)                                             | Gets or sets the  EulerYZones.                                       |
| [`EulerZDim`](#EXDAnalysisSettings.EulerZDim)                                                 | Gets or sets the  EulerZDim.                                         |
| [`EulerZOrigin`](#EXDAnalysisSettings.EulerZOrigin)                                           | Gets or sets the  EulerZOrigin.                                      |
| [`EulerZScaleFactor`](#EXDAnalysisSettings.EulerZScaleFactor)                                 | Gets or sets the  EulerZScaleFactor.                                 |
| [`EulerZZones`](#EXDAnalysisSettings.EulerZZones)                                             | Gets or sets the  EulerZZones.                                       |
| [`Figures`](#EXDAnalysisSettings.Figures)                                                     | Gets the list of associated figures.                                 |
| [`Graph`](#EXDAnalysisSettings.Graph)                                                         | Graph property.                                                      |
| [`HexIntegrationType`](#EXDAnalysisSettings.HexIntegrationType)                               | Gets or sets the  HexIntegrationType.                                |
| [`HourglassDampingType`](#EXDAnalysisSettings.HourglassDampingType)                           | Gets or sets the HourglassDampingType.                               |
| [`Images`](#EXDAnalysisSettings.Images)                                                       | Gets the list of associated images.                                  |
| [`InitialTimeStep`](#EXDAnalysisSettings.InitialTimeStep)                                     | Gets or sets the InitialTimeStep.                                    |
| [`InternalObject`](#EXDAnalysisSettings.InternalObject)                                       | Gets the Internal Object. For advanced usage only.                   |
| [`LinearArtificialViscosity`](#EXDAnalysisSettings.LinearArtificialViscosity)                 | Gets or sets the LinearArtificialViscosity.                          |
| [`LinearViscosityExpansionType`](#EXDAnalysisSettings.LinearViscosityExpansionType)           | Gets or sets the LinearViscosityExpansionType.                       |
| [`LinearViscositySPH`](#EXDAnalysisSettings.LinearViscositySPH)                               | Gets or sets the Linear Artificial Viscosity for SPH.                |
| [`MassScalingMaxElem`](#EXDAnalysisSettings.MassScalingMaxElem)                               | Gets or sets the  MassScalingMaxElem.                                |
| [`MassScalingMaxPart`](#EXDAnalysisSettings.MassScalingMaxPart)                               | Gets or sets the  MassScalingMaxPart.                                |
| [`MassScalingMinTimeStep`](#EXDAnalysisSettings.MassScalingMinTimeStep)                       | Gets or sets the  MassScalingMinTimeStep.                            |
| [`MassScalingUpdateFreq`](#EXDAnalysisSettings.MassScalingUpdateFreq)                         | Gets or sets the  MassScalingUpdateFreq.                             |
| [`MaximumEnergyError`](#EXDAnalysisSettings.MaximumEnergyError)                               | Gets or sets the  MaximumEnergyError.                                |
| [`MaximumTimeStep`](#EXDAnalysisSettings.MaximumTimeStep)                                     | Gets or sets the MaximumTimeStep.                                    |
| [`MaximumTimeSteps`](#EXDAnalysisSettings.MaximumTimeSteps)                                   | Gets or sets the MaximumNumberofCycles.                              |
| [`MaximumVelocity`](#EXDAnalysisSettings.MaximumVelocity)                                     | Gets or sets the  MaximumVelocity.                                   |
| [`MinimumStrainCutOff`](#EXDAnalysisSettings.MinimumStrainCutOff)                             | Gets or sets the  MinimumStrainCutOff.                               |
| [`MinimumTimeStep`](#EXDAnalysisSettings.MinimumTimeStep)                                     | Gets or sets the MinimumTimeStep.                                    |
| [`MinimumVelocity`](#EXDAnalysisSettings.MinimumVelocity)                                     | Gets or sets the  MinimumVelocity.                                   |
| [`NumberOfSteps`](#EXDAnalysisSettings.NumberOfSteps)                                         | Gets or sets the NumberOfSteps.                                      |
| [`OutputContactForcesOnPoints`](#EXDAnalysisSettings.OutputContactForcesOnPoints)             | Gets or Sets the Points increment for OutputContactForcesOnPoints.   |
| [`OutputContactForcesOnTime`](#EXDAnalysisSettings.OutputContactForcesOnTime)                 | Gets or Sets the Time increment for OutputContactForcesOnTime.       |
| [`OutputContactForcesOnTimeSteps`](#EXDAnalysisSettings.OutputContactForcesOnTimeSteps)       | Gets or Sets the Cycle increment for OutputContactForcesOnTimeSteps. |
| [`OutputContactForcesOnType`](#EXDAnalysisSettings.OutputContactForcesOnType)                 | Gets or Sets OutputContactForces Increment Type.                     |
| [`OutputRemapFile`](#EXDAnalysisSettings.OutputRemapFile)                                     | Gets or Sets the Output Remap File Type.                             |
| [`PreferenceType`](#EXDAnalysisSettings.PreferenceType)                                       | Gets or sets the PreferenceType                                      |
| [`Properties`](#EXDAnalysisSettings.Properties)                                               | Gets the list of properties for this object.                         |
| [`PusoCoefficient`](#EXDAnalysisSettings.PusoCoefficient)                                     | Gets or sets the  PusoCoefficient.                                   |
| [`QuadraticArtificialViscosity`](#EXDAnalysisSettings.QuadraticArtificialViscosity)           | Gets or sets the QuadraticArtificialViscosity.                       |
| [`QuadratricViscositySPH`](#EXDAnalysisSettings.QuadratricViscositySPH)                       | Gets or sets the Quadratic Artificial Viscosity for SPH.             |
| [`RadiusCutoff`](#EXDAnalysisSettings.RadiusCutoff)                                           | Gets or sets the  RadiusCutoff.                                      |
| [`ReferenceEnergyTimeStep`](#EXDAnalysisSettings.ReferenceEnergyTimeStep)                     | Gets or sets the ReferenceEnergyCycle.                               |
| [`ResumeFromTimeStep`](#EXDAnalysisSettings.ResumeFromTimeStep)                               | Gets or sets the ResumeFromCycle.                                    |
| [`SPHMaxDensityFactor`](#EXDAnalysisSettings.SPHMaxDensityFactor)                             | Gets or sets the  Maximum Density Factor for SPH.                    |
| [`SPHMinDensityFactor`](#EXDAnalysisSettings.SPHMinDensityFactor)                             | Gets or sets the  Minimum Density Factor for SPH.                    |
| [`SPHNodeDensityCutoffOption`](#EXDAnalysisSettings.SPHNodeDensityCutoffOption)               | Gets or sets the  SPHNodeDensityCutoffOption.                        |
| [`SavePrintSummaryOnTime`](#EXDAnalysisSettings.SavePrintSummaryOnTime)                       | Gets or Sets the Time increment for SavePrintSummaryOnTime.          |
| [`SavePrintSummaryOnTimeSteps`](#EXDAnalysisSettings.SavePrintSummaryOnTimeSteps)             | Gets or Sets Cycle increment for SavePrintSummaryOnTimeSteps.        |
| [`SavePrintSummaryOnType`](#EXDAnalysisSettings.SavePrintSummaryOnType)                       | Gets or Sets SavePrintSummaryOnType.                                 |
| [`SaveUserEditOnTime`](#EXDAnalysisSettings.SaveUserEditOnTime)                               | Gets or Sets Time increment for SaveUserEditOnTime.                  |
| [`SaveUserEditOnTimeSteps`](#EXDAnalysisSettings.SaveUserEditOnTimeSteps)                     | Gets or Sets Cycle increment for SaveUserEditOnTimeSteps.            |
| [`SaveUserEditOnType`](#EXDAnalysisSettings.SaveUserEditOnType)                               | Gets or Sets SaveUserEditOnType.                                     |
| [`ScratchSolverFilesDirectory`](#EXDAnalysisSettings.ScratchSolverFilesDirectory)             | Gets the ScratchSolverFilesDirectory.                                |
| [`ShellInertiaUpdateType`](#EXDAnalysisSettings.ShellInertiaUpdateType)                       | Gets or sets the  ShellInertiaUpdateType.                            |
| [`ShellShearCorrectionFactor`](#EXDAnalysisSettings.ShellShearCorrectionFactor)               | Gets or sets the  ShellShearCorrectionFactor.                        |
| [`ShellSublayers`](#EXDAnalysisSettings.ShellSublayers)                                       | Gets or sets the  ShellSublayers.                                    |
| [`ShellThicknessUpdateType`](#EXDAnalysisSettings.ShellThicknessUpdateType)                   | Gets or sets the  ShellThicknessUpdateType.                          |
| [`ShellWarpCorrection`](#EXDAnalysisSettings.ShellWarpCorrection)                             | Gets or sets the  ShellWarpCorrection.                               |
| [`SolveUnits`](#EXDAnalysisSettings.SolveUnits)                                               | Gets or sets the  SolveUnits.                                        |
| [`SolverFilesDirectory`](#EXDAnalysisSettings.SolverFilesDirectory)                           | Gets the SolverFilesDirectory.                                       |
| [`SolverPrecisionType`](#EXDAnalysisSettings.SolverPrecisionType)                             | Gets or sets the  SolverPrecisionType.                               |
| [`SphMinTimeStep`](#EXDAnalysisSettings.SphMinTimeStep)                                       | Gets or sets the  Minimum Timestep for SPH.                          |
| [`StepawareMassScalingType`](#EXDAnalysisSettings.StepawareMassScalingType)                   | Gets or Sets the Step aware Mass Scaling Controls.                   |
| [`StepawareOutputControlsType`](#EXDAnalysisSettings.StepawareOutputControlsType)             | Gets or Sets the Step aware Output Controls.                         |
| [`StiffnessCoefficient`](#EXDAnalysisSettings.StiffnessCoefficient)                           | Gets or sets the StiffnessCoefficient.                               |
| [`TetPressureIntegrationType`](#EXDAnalysisSettings.TetPressureIntegrationType)               | Gets or sets the  TetIntegrationType.                                |
| [`TimeStepSafetyFactor`](#EXDAnalysisSettings.TimeStepSafetyFactor)                           | Gets or sets the  TimeStepSafetyFactor.                              |
| [`ViscousCoefficient`](#EXDAnalysisSettings.ViscousCoefficient)                               | Gets or sets the ViscousCoefficient.                                 |
| [`ViscousCoefficientFB`](#EXDAnalysisSettings.ViscousCoefficientFB)                           | Gets or sets the ViscousCoefficientFB.                               |
| [`VisibleProperties`](#EXDAnalysisSettings.VisibleProperties)                                 | Gets the list of properties that are visible for this object.        |

<a id="property-detail"></a>

## Property detail

<a id="EXDAnalysisSettings.ArtificialViscosityForShellsType"></a>

### *property* EXDAnalysisSettings.ArtificialViscosityForShellsType *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ArtificialViscosityForShellsType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.AutomaticMassScalingType"></a>

### *property* EXDAnalysisSettings.AutomaticMassScalingType *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  AutomaticMassScaling.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.BeamSolutionType"></a>

### *property* EXDAnalysisSettings.BeamSolutionType *: [Ansys.Mechanical.DataModel.Enums.EXDBeamSolutionType](../../../../Mechanical/DataModel/Enums/EXDBeamSolutionType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDBeamSolutionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  BeamSolutionType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.BeamTimeStepSafetyFactor"></a>

### *property* EXDAnalysisSettings.BeamTimeStepSafetyFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  BeamTimeStepSafetyFactor.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.CharZoneDimensionType"></a>

### *property* EXDAnalysisSettings.CharZoneDimensionType *: [Ansys.Mechanical.DataModel.Enums.EXDCharZoneDimensionType](../../../../Mechanical/DataModel/Enums/EXDCharZoneDimensionType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDCharZoneDimensionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  CharZoneDimensionType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.Children"></a>

### *property* EXDAnalysisSettings.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.Comments"></a>

### *property* EXDAnalysisSettings.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.CurrentStepNumber"></a>

### *property* EXDAnalysisSettings.CurrentStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.DataModelObjectCategory"></a>

### *property* EXDAnalysisSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.DensityUpdateType"></a>

### *property* EXDAnalysisSettings.DensityUpdateType *: [Ansys.Mechanical.DataModel.Enums.EXDDensityUpdateType](../../../../Mechanical/DataModel/Enums/EXDDensityUpdateType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDDensityUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  DensityUpdateType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.DetonationBurnType"></a>

### *property* EXDAnalysisSettings.DetonationBurnType *: [Ansys.Mechanical.DataModel.Enums.EXDDetonationBurnType](../../../../Mechanical/DataModel/Enums/EXDDetonationBurnType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDDetonationBurnType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  DetonationBurnType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ErosionGeomStrainLimit"></a>

### *property* EXDAnalysisSettings.ErosionGeomStrainLimit *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ErosionGeomStrainLimit

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ErosionMinElemTimestep"></a>

### *property* EXDAnalysisSettings.ErosionMinElemTimestep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ErosionMinElemTimestep

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ErosionOnGeomStrainType"></a>

### *property* EXDAnalysisSettings.ErosionOnGeomStrainType *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ErosionOnGeomStrainType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ErosionOnMaterialFailureType"></a>

### *property* EXDAnalysisSettings.ErosionOnMaterialFailureType *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ErosionOnMaterialFailureType

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ErosionOnMinElemTimestepType"></a>

### *property* EXDAnalysisSettings.ErosionOnMinElemTimestepType *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ErosionOnMinElemTimestepType

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ErosionRetainIntertiaType"></a>

### *property* EXDAnalysisSettings.ErosionRetainIntertiaType *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ErosionRetainIntertiaType

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerBoundLowerX"></a>

### *property* EXDAnalysisSettings.EulerBoundLowerX *: [Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType](../../../../Mechanical/DataModel/Enums/EXDEulerBoundaryDefType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerBoundLowerX.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerBoundLowerY"></a>

### *property* EXDAnalysisSettings.EulerBoundLowerY *: [Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType](../../../../Mechanical/DataModel/Enums/EXDEulerBoundaryDefType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerBoundLowerY.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerBoundLowerZ"></a>

### *property* EXDAnalysisSettings.EulerBoundLowerZ *: [Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType](../../../../Mechanical/DataModel/Enums/EXDEulerBoundaryDefType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerBoundLowerZ.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerBoundUpperX"></a>

### *property* EXDAnalysisSettings.EulerBoundUpperX *: [Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType](../../../../Mechanical/DataModel/Enums/EXDEulerBoundaryDefType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerBoundUpperX.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerBoundUpperY"></a>

### *property* EXDAnalysisSettings.EulerBoundUpperY *: [Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType](../../../../Mechanical/DataModel/Enums/EXDEulerBoundaryDefType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerBoundUpperY.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerBoundUpperZ"></a>

### *property* EXDAnalysisSettings.EulerBoundUpperZ *: [Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType](../../../../Mechanical/DataModel/Enums/EXDEulerBoundaryDefType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerBoundUpperZ.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerCellSize"></a>

### *property* EXDAnalysisSettings.EulerCellSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerCellSize.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerDisplayBox"></a>

### *property* EXDAnalysisSettings.EulerDisplayBox *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerDisplayBox.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerDomScopeDefType"></a>

### *property* EXDAnalysisSettings.EulerDomScopeDefType *: [Ansys.Mechanical.DataModel.Enums.EXDEulerDomScopeDefType](../../../../Mechanical/DataModel/Enums/EXDEulerDomScopeDefType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDEulerDomScopeDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerDomScopeDefType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerDomainType"></a>

### *property* EXDAnalysisSettings.EulerDomainType *: [Ansys.Mechanical.DataModel.Enums.EXDEulerDomainType](../../../../Mechanical/DataModel/Enums/EXDEulerDomainType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDEulerDomainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerDomainType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerGradeIncrement"></a>

### *property* EXDAnalysisSettings.EulerGradeIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerGradeIncrement.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerGradeNumberOfTimes"></a>

### *property* EXDAnalysisSettings.EulerGradeNumberOfTimes *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerGradeNumberOfTimes.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerGradedDefinition"></a>

### *property* EXDAnalysisSettings.EulerGradedDefinition *: [Ansys.Mechanical.DataModel.Enums.EXDEulerGradedDefinition](../../../../Mechanical/DataModel/Enums/EXDEulerGradedDefinition.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDEulerGradedDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerGradedDefinition.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerPropertyDisplayBox"></a>

### *property* EXDAnalysisSettings.EulerPropertyDisplayBox *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyDisplayBox.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerPropertyXmin"></a>

### *property* EXDAnalysisSettings.EulerPropertyXmin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyXmin.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerPropertyXres"></a>

### *property* EXDAnalysisSettings.EulerPropertyXres *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyXres.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerPropertyXsize"></a>

### *property* EXDAnalysisSettings.EulerPropertyXsize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyXsize.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerPropertyYmin"></a>

### *property* EXDAnalysisSettings.EulerPropertyYmin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyYmin.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerPropertyYres"></a>

### *property* EXDAnalysisSettings.EulerPropertyYres *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyYres.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerPropertyYsize"></a>

### *property* EXDAnalysisSettings.EulerPropertyYsize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyYsize.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerPropertyZmin"></a>

### *property* EXDAnalysisSettings.EulerPropertyZmin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyZmin.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerPropertyZres"></a>

### *property* EXDAnalysisSettings.EulerPropertyZres *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyZres.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerPropertyZsize"></a>

### *property* EXDAnalysisSettings.EulerPropertyZsize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyZsize.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerResolutionDefType"></a>

### *property* EXDAnalysisSettings.EulerResolutionDefType *: [Ansys.Mechanical.DataModel.Enums.EXDEulerResolutionDefType](../../../../Mechanical/DataModel/Enums/EXDEulerResolutionDefType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDEulerResolutionDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerResolutionDefType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerSizeDefType"></a>

### *property* EXDAnalysisSettings.EulerSizeDefType *: [Ansys.Mechanical.DataModel.Enums.EXDEulerSizeDefType](../../../../Mechanical/DataModel/Enums/EXDEulerSizeDefType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDEulerSizeDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerSizeDefType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerTotalCells"></a>

### *property* EXDAnalysisSettings.EulerTotalCells *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerTotalCells.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerTrackType"></a>

### *property* EXDAnalysisSettings.EulerTrackType *: [Ansys.Mechanical.DataModel.Enums.EXDEulerTrackType](../../../../Mechanical/DataModel/Enums/EXDEulerTrackType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDEulerTrackType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the  EulerTrackType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerXDim"></a>

### *property* EXDAnalysisSettings.EulerXDim *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerXDim.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerXOrigin"></a>

### *property* EXDAnalysisSettings.EulerXOrigin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerXOrigin.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerXScaleFactor"></a>

### *property* EXDAnalysisSettings.EulerXScaleFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerXScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerXZones"></a>

### *property* EXDAnalysisSettings.EulerXZones *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerXZones.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerYDim"></a>

### *property* EXDAnalysisSettings.EulerYDim *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerYDim.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerYOrigin"></a>

### *property* EXDAnalysisSettings.EulerYOrigin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerYOrigin.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerYScaleFactor"></a>

### *property* EXDAnalysisSettings.EulerYScaleFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerYScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerYZones"></a>

### *property* EXDAnalysisSettings.EulerYZones *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerYZones.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerZDim"></a>

### *property* EXDAnalysisSettings.EulerZDim *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerZDim.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerZOrigin"></a>

### *property* EXDAnalysisSettings.EulerZOrigin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerZOrigin.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerZScaleFactor"></a>

### *property* EXDAnalysisSettings.EulerZScaleFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerZScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.EulerZZones"></a>

### *property* EXDAnalysisSettings.EulerZZones *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerZZones.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.Figures"></a>

### *property* EXDAnalysisSettings.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.Graph"></a>

### *property* EXDAnalysisSettings.Graph *: [Ansys.Mechanical.Graphics.AnalysisSettingsGraph](../../../../Mechanical/Graphics/AnalysisSettingsGraph.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.Graphics.AnalysisSettingsGraph) | [None](https://docs.python.org/3/library/constants.html#None)*

Graph property.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.HexIntegrationType"></a>

### *property* EXDAnalysisSettings.HexIntegrationType *: [Ansys.Mechanical.DataModel.Enums.EXDHexIntegrationType](../../../../Mechanical/DataModel/Enums/EXDHexIntegrationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDHexIntegrationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  HexIntegrationType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.HourglassDampingType"></a>

### *property* EXDAnalysisSettings.HourglassDampingType *: [Ansys.Mechanical.DataModel.Enums.EXDHourglassDampingType](../../../../Mechanical/DataModel/Enums/EXDHourglassDampingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDHourglassDampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HourglassDampingType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.Images"></a>

### *property* EXDAnalysisSettings.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.InitialTimeStep"></a>

### *property* EXDAnalysisSettings.InitialTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.InternalObject"></a>

### *property* EXDAnalysisSettings.InternalObject *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Internal Object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.LinearArtificialViscosity"></a>

### *property* EXDAnalysisSettings.LinearArtificialViscosity *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LinearArtificialViscosity.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.LinearViscosityExpansionType"></a>

### *property* EXDAnalysisSettings.LinearViscosityExpansionType *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LinearViscosityExpansionType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.LinearViscositySPH"></a>

### *property* EXDAnalysisSettings.LinearViscositySPH *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linear Artificial Viscosity for SPH.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.MassScalingMaxElem"></a>

### *property* EXDAnalysisSettings.MassScalingMaxElem *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MassScalingMaxElem.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.MassScalingMaxPart"></a>

### *property* EXDAnalysisSettings.MassScalingMaxPart *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MassScalingMaxPart.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.MassScalingMinTimeStep"></a>

### *property* EXDAnalysisSettings.MassScalingMinTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MassScalingMinTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.MassScalingUpdateFreq"></a>

### *property* EXDAnalysisSettings.MassScalingUpdateFreq *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MassScalingUpdateFreq.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.MaximumEnergyError"></a>

### *property* EXDAnalysisSettings.MaximumEnergyError *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MaximumEnergyError.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.MaximumTimeStep"></a>

### *property* EXDAnalysisSettings.MaximumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.MaximumTimeSteps"></a>

### *property* EXDAnalysisSettings.MaximumTimeSteps *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumNumberofCycles.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.MaximumVelocity"></a>

### *property* EXDAnalysisSettings.MaximumVelocity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MaximumVelocity.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.MinimumStrainCutOff"></a>

### *property* EXDAnalysisSettings.MinimumStrainCutOff *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MinimumStrainCutOff.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.MinimumTimeStep"></a>

### *property* EXDAnalysisSettings.MinimumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.MinimumVelocity"></a>

### *property* EXDAnalysisSettings.MinimumVelocity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MinimumVelocity.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.NumberOfSteps"></a>

### *property* EXDAnalysisSettings.NumberOfSteps *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSteps.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.OutputContactForcesOnPoints"></a>

### *property* EXDAnalysisSettings.OutputContactForcesOnPoints *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Points increment for OutputContactForcesOnPoints.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.OutputContactForcesOnTime"></a>

### *property* EXDAnalysisSettings.OutputContactForcesOnTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Time increment for OutputContactForcesOnTime.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.OutputContactForcesOnTimeSteps"></a>

### *property* EXDAnalysisSettings.OutputContactForcesOnTimeSteps *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Cycle increment for OutputContactForcesOnTimeSteps.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.OutputContactForcesOnType"></a>

### *property* EXDAnalysisSettings.OutputContactForcesOnType *: [Ansys.Mechanical.DataModel.Enums.EXDOutputContactForcesOnType](../../../../Mechanical/DataModel/Enums/EXDOutputContactForcesOnType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDOutputContactForcesOnType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets OutputContactForces Increment Type.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.OutputRemapFile"></a>

### *property* EXDAnalysisSettings.OutputRemapFile *: Ansys.Mechanical.DataModel.Enums.EXDOutputRemapFileOnType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Output Remap File Type.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.PreferenceType"></a>

### *property* EXDAnalysisSettings.PreferenceType *: [Ansys.Mechanical.DataModel.Enums.EXDPreferenceType](../../../../Mechanical/DataModel/Enums/EXDPreferenceType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDPreferenceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreferenceType

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.Properties"></a>

### *property* EXDAnalysisSettings.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.PusoCoefficient"></a>

### *property* EXDAnalysisSettings.PusoCoefficient *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  PusoCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.QuadraticArtificialViscosity"></a>

### *property* EXDAnalysisSettings.QuadraticArtificialViscosity *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the QuadraticArtificialViscosity.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.QuadratricViscositySPH"></a>

### *property* EXDAnalysisSettings.QuadratricViscositySPH *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Quadratic Artificial Viscosity for SPH.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.RadiusCutoff"></a>

### *property* EXDAnalysisSettings.RadiusCutoff *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  RadiusCutoff.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ReferenceEnergyTimeStep"></a>

### *property* EXDAnalysisSettings.ReferenceEnergyTimeStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceEnergyCycle.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ResumeFromTimeStep"></a>

### *property* EXDAnalysisSettings.ResumeFromTimeStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResumeFromCycle.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SPHMaxDensityFactor"></a>

### *property* EXDAnalysisSettings.SPHMaxDensityFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  Maximum Density Factor for SPH.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SPHMinDensityFactor"></a>

### *property* EXDAnalysisSettings.SPHMinDensityFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  Minimum Density Factor for SPH.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SPHNodeDensityCutoffOption"></a>

### *property* EXDAnalysisSettings.SPHNodeDensityCutoffOption *: [Ansys.Mechanical.DataModel.Enums.EXDSPHNodeDensityCutoffOption](../../../../Mechanical/DataModel/Enums/EXDSPHNodeDensityCutoffOption.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDSPHNodeDensityCutoffOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  SPHNodeDensityCutoffOption.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SavePrintSummaryOnTime"></a>

### *property* EXDAnalysisSettings.SavePrintSummaryOnTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Time increment for SavePrintSummaryOnTime.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SavePrintSummaryOnTimeSteps"></a>

### *property* EXDAnalysisSettings.SavePrintSummaryOnTimeSteps *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets Cycle increment for SavePrintSummaryOnTimeSteps.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SavePrintSummaryOnType"></a>

### *property* EXDAnalysisSettings.SavePrintSummaryOnType *: [Ansys.Mechanical.DataModel.Enums.EXDSavePrintSummaryOnType](../../../../Mechanical/DataModel/Enums/EXDSavePrintSummaryOnType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDSavePrintSummaryOnType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets SavePrintSummaryOnType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SaveUserEditOnTime"></a>

### *property* EXDAnalysisSettings.SaveUserEditOnTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets Time increment for SaveUserEditOnTime.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SaveUserEditOnTimeSteps"></a>

### *property* EXDAnalysisSettings.SaveUserEditOnTimeSteps *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets Cycle increment for SaveUserEditOnTimeSteps.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SaveUserEditOnType"></a>

### *property* EXDAnalysisSettings.SaveUserEditOnType *: [Ansys.Mechanical.DataModel.Enums.EXDSaveUserEditOnType](../../../../Mechanical/DataModel/Enums/EXDSaveUserEditOnType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDSaveUserEditOnType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets SaveUserEditOnType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ScratchSolverFilesDirectory"></a>

### *property* EXDAnalysisSettings.ScratchSolverFilesDirectory *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScratchSolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ShellInertiaUpdateType"></a>

### *property* EXDAnalysisSettings.ShellInertiaUpdateType *: [Ansys.Mechanical.DataModel.Enums.EXDShellInertiaUpdateType](../../../../Mechanical/DataModel/Enums/EXDShellInertiaUpdateType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDShellInertiaUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  ShellInertiaUpdateType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ShellShearCorrectionFactor"></a>

### *property* EXDAnalysisSettings.ShellShearCorrectionFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  ShellShearCorrectionFactor.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ShellSublayers"></a>

### *property* EXDAnalysisSettings.ShellSublayers *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  ShellSublayers.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ShellThicknessUpdateType"></a>

### *property* EXDAnalysisSettings.ShellThicknessUpdateType *: [Ansys.Mechanical.DataModel.Enums.EXDShellThicknessUpdateType](../../../../Mechanical/DataModel/Enums/EXDShellThicknessUpdateType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDShellThicknessUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  ShellThicknessUpdateType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ShellWarpCorrection"></a>

### *property* EXDAnalysisSettings.ShellWarpCorrection *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  ShellWarpCorrection.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SolveUnits"></a>

### *property* EXDAnalysisSettings.SolveUnits *: [Ansys.Mechanical.DataModel.Enums.EXDSolveUnitsType](../../../../Mechanical/DataModel/Enums/EXDSolveUnitsType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDSolveUnitsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  SolveUnits.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SolverFilesDirectory"></a>

### *property* EXDAnalysisSettings.SolverFilesDirectory *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SolverPrecisionType"></a>

### *property* EXDAnalysisSettings.SolverPrecisionType *: [Ansys.Mechanical.DataModel.Enums.EXDSolverPrecisionType](../../../../Mechanical/DataModel/Enums/EXDSolverPrecisionType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDSolverPrecisionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  SolverPrecisionType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SphMinTimeStep"></a>

### *property* EXDAnalysisSettings.SphMinTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  Minimum Timestep for SPH.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.StepawareMassScalingType"></a>

### *property* EXDAnalysisSettings.StepawareMassScalingType *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Step aware Mass Scaling Controls.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.StepawareOutputControlsType"></a>

### *property* EXDAnalysisSettings.StepawareOutputControlsType *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Step aware Output Controls.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.StiffnessCoefficient"></a>

### *property* EXDAnalysisSettings.StiffnessCoefficient *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.TetPressureIntegrationType"></a>

### *property* EXDAnalysisSettings.TetPressureIntegrationType *: [Ansys.Mechanical.DataModel.Enums.EXDTetPressureIntegrationType](../../../../Mechanical/DataModel/Enums/EXDTetPressureIntegrationType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDTetPressureIntegrationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  TetIntegrationType.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.TimeStepSafetyFactor"></a>

### *property* EXDAnalysisSettings.TimeStepSafetyFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  TimeStepSafetyFactor.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ViscousCoefficient"></a>

### *property* EXDAnalysisSettings.ViscousCoefficient *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ViscousCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.ViscousCoefficientFB"></a>

### *property* EXDAnalysisSettings.ViscousCoefficientFB *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ViscousCoefficientFB.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.VisibleProperties"></a>

### *property* EXDAnalysisSettings.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EXDAnalysisSettings.Activate"></a>

### EXDAnalysisSettings.Activate()

Activate the current object.

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

### EXDAnalysisSettings.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.CopyTo"></a>

### EXDAnalysisSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.CreateParameter"></a>

### EXDAnalysisSettings.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.DeleteAllRestartPoints"></a>

### EXDAnalysisSettings.DeleteAllRestartPoints()

DeleteAllRestartPoints method.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.Duplicate"></a>

### EXDAnalysisSettings.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetAutomaticMassScalingType"></a>

### EXDAnalysisSettings.GetAutomaticMassScalingType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets the  AutomaticMassScalingType for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetChildren"></a>

### EXDAnalysisSettings.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetLoadStepType"></a>

### EXDAnalysisSettings.GetLoadStepType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets the  LoadStepType for a step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetMassScalingMinTimeStep"></a>

### EXDAnalysisSettings.GetMassScalingMinTimeStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets the  MassScalingMinTimeStep for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetParameter"></a>

### EXDAnalysisSettings.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetSaveProbeDataOnTime"></a>

### EXDAnalysisSettings.GetSaveProbeDataOnTime(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets the Time increment for Save ProbeData On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetSaveProbeDataOnTimeSteps"></a>

### EXDAnalysisSettings.GetSaveProbeDataOnTimeSteps(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets the Cycle increment for Save ProbeData On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetSaveProbeDataOnType"></a>

### EXDAnalysisSettings.GetSaveProbeDataOnType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets the  Save ProbeData Type for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetSaveRestartsOnPoints"></a>

### EXDAnalysisSettings.GetSaveRestartsOnPoints(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets the Points increment for Save Restarts On Points for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetSaveRestartsOnTime"></a>

### EXDAnalysisSettings.GetSaveRestartsOnTime(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets the Time increment for Save Restarts On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetSaveRestartsOnTimeSteps"></a>

### EXDAnalysisSettings.GetSaveRestartsOnTimeSteps(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets the Cycle increment for Save Restarts On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetSaveRestartsOnType"></a>

### EXDAnalysisSettings.GetSaveRestartsOnType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets the  Save Restarts Type for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetSaveResultsOnPoints"></a>

### EXDAnalysisSettings.GetSaveResultsOnPoints(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets the Points increment for Save Results On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetSaveResultsOnTime"></a>

### EXDAnalysisSettings.GetSaveResultsOnTime(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets the Time increment for Save Results On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetSaveResultsOnTimeSteps"></a>

### EXDAnalysisSettings.GetSaveResultsOnTimeSteps(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets the Cycle increment for Save Results On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetSaveResultsOnType"></a>

### EXDAnalysisSettings.GetSaveResultsOnType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets the  Save Results Type for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetStaticDamping"></a>

### EXDAnalysisSettings.GetStaticDamping(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets the StaticDamping.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GetStepEndTime"></a>

### EXDAnalysisSettings.GetStepEndTime(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets the Step End Time at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GroupAllSimilarChildren"></a>

### EXDAnalysisSettings.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.GroupSimilarObjects"></a>

### EXDAnalysisSettings.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.PropertyByAPIName"></a>

### EXDAnalysisSettings.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.PropertyByName"></a>

### EXDAnalysisSettings.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.RemoveParameter"></a>

### EXDAnalysisSettings.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetAutomaticMassScalingType"></a>

### EXDAnalysisSettings.SetAutomaticMassScalingType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.EXDAutomaticMassScalingType](../../../../Mechanical/DataModel/Enums/EXDAutomaticMassScalingType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDAutomaticMassScalingType))

Sets the  AutomaticMassScalingType for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetLoadStepType"></a>

### EXDAnalysisSettings.SetLoadStepType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.EXDLoadStepType](../../../../Mechanical/DataModel/Enums/EXDLoadStepType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDLoadStepType))

Sets the LoadStepType for a step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetMassScalingMinTimeStep"></a>

### EXDAnalysisSettings.SetMassScalingMinTimeStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: Ansys.Core.Units.Quantity)

Sets the  MassScalingMinTimeStep for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetSaveProbeDataOnTime"></a>

### EXDAnalysisSettings.SetSaveProbeDataOnTime(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: Ansys.Core.Units.Quantity)

Set the Time increment for Save ProbeData On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetSaveProbeDataOnTimeSteps"></a>

### EXDAnalysisSettings.SetSaveProbeDataOnTimeSteps(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [int](https://docs.python.org/3/library/functions.html#int))

Set the Cycle increment for Save ProbeData On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetSaveProbeDataOnType"></a>

### EXDAnalysisSettings.SetSaveProbeDataOnType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.EXDSaveProbeDataOnType](../../../../Mechanical/DataModel/Enums/EXDSaveProbeDataOnType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDSaveProbeDataOnType))

Sets the  Save ProbeData Type for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetSaveRestartsOnPoints"></a>

### EXDAnalysisSettings.SetSaveRestartsOnPoints(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [int](https://docs.python.org/3/library/functions.html#int))

Set the Points increment for Save Restarts On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetSaveRestartsOnTime"></a>

### EXDAnalysisSettings.SetSaveRestartsOnTime(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: Ansys.Core.Units.Quantity)

Set the Time increment for Save Restarts On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetSaveRestartsOnTimeSteps"></a>

### EXDAnalysisSettings.SetSaveRestartsOnTimeSteps(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [int](https://docs.python.org/3/library/functions.html#int))

Set the Cycle increment for Save Restarts On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetSaveRestartsOnType"></a>

### EXDAnalysisSettings.SetSaveRestartsOnType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.EXDSaveRestartsOnType](../../../../Mechanical/DataModel/Enums/EXDSaveRestartsOnType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDSaveRestartsOnType))

Sets the  Save Restarts Type for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetSaveResultsOnPoints"></a>

### EXDAnalysisSettings.SetSaveResultsOnPoints(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [int](https://docs.python.org/3/library/functions.html#int))

Set the Points increment for Save Results On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetSaveResultsOnTime"></a>

### EXDAnalysisSettings.SetSaveResultsOnTime(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: Ansys.Core.Units.Quantity)

Set the Time increment for Save Results On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetSaveResultsOnTimeSteps"></a>

### EXDAnalysisSettings.SetSaveResultsOnTimeSteps(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [int](https://docs.python.org/3/library/functions.html#int))

Sets the Cycle increment for Save Results On for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetSaveResultsOnType"></a>

### EXDAnalysisSettings.SetSaveResultsOnType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.EXDSaveResultsOnType](../../../../Mechanical/DataModel/Enums/EXDSaveResultsOnType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDSaveResultsOnType))

Sets the  Save Results Type for a load step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetStaticDamping"></a>

### EXDAnalysisSettings.SetStaticDamping(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [float](https://docs.python.org/3/library/functions.html#float))

Sets the StaticDamping.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.SetStepEndTime"></a>

### EXDAnalysisSettings.SetStepEndTime(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: Ansys.Core.Units.Quantity)

Sets the Step End Time for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.getADRConvergenceMethod"></a>

### EXDAnalysisSettings.getADRConvergenceMethod(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets the Covergence Method for ADR loadstep.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.getADRConvergenceTolerance"></a>

### EXDAnalysisSettings.getADRConvergenceTolerance(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets the Covergence Tolerance for ADR loadstep.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.getADRMaximumIterations"></a>

### EXDAnalysisSettings.getADRMaximumIterations(stepNumber: [int](https://docs.python.org/3/library/functions.html#int))

Gets the Maximum Iterations for ADR loadstep.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.setADRConvergenceMethod"></a>

### EXDAnalysisSettings.setADRConvergenceMethod(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.EXDADRConvergenceMethod](../../../../Mechanical/DataModel/Enums/EXDADRConvergenceMethod.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.EXDADRConvergenceMethod))

Sets the Covergence Method for ADR loadstep.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.setADRConvergenceTolerance"></a>

### EXDAnalysisSettings.setADRConvergenceTolerance(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [float](https://docs.python.org/3/library/functions.html#float))

Sets the Covergence Tolerance for ADR loadstep.

<!-- !! processed by numpydoc !! -->

<a id="EXDAnalysisSettings.setADRMaximumIterations"></a>

### EXDAnalysisSettings.setADRMaximumIterations(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [int](https://docs.python.org/3/library/functions.html#int))

Sets the Maximum Iterations for ADR loadstep.

<!-- !! processed by numpydoc !! -->

