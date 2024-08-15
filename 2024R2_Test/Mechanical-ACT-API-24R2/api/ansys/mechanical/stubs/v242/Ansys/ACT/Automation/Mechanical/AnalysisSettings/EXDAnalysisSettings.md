# `EXDAnalysisSettings`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.AnalysisSettings.EXDAnalysisSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines Analysis Settings for Explicit Dynamics System.
Note: Cycles in the UI are referred to as TimeSteps in API

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------|-----------------------------------------------------------------------------------|
| `GetStepEndTime`              | Gets the Step End Time at a given solution step.                                  |
| `SetStepEndTime`              | Sets the Step End Time for a given solution step.                                 |
| `GetLoadStepType`             | Gets the  LoadStepType for a step.                                                |
| `SetLoadStepType`             | Sets the LoadStepType for a step.                                                 |
| `getADRConvergenceMethod`     | Gets the Covergence Method for ADR loadstep.                                      |
| `setADRConvergenceMethod`     | Sets the Covergence Method for ADR loadstep.                                      |
| `getADRConvergenceTolerance`  | Gets the Covergence Tolerance for ADR loadstep.                                   |
| `setADRConvergenceTolerance`  | Sets the Covergence Tolerance for ADR loadstep.                                   |
| `getADRMaximumIterations`     | Gets the Maximum Iterations for ADR loadstep.                                     |
| `setADRMaximumIterations`     | Sets the Maximum Iterations for ADR loadstep.                                     |
| `GetAutomaticMassScalingType` | Gets the  AutomaticMassScalingType for a load step.                               |
| `SetAutomaticMassScalingType` | Sets the  AutomaticMassScalingType for a load step.                               |
| `GetMassScalingMinTimeStep`   | Gets the  MassScalingMinTimeStep for a load step.                                 |
| `SetMassScalingMinTimeStep`   | Sets the  MassScalingMinTimeStep for a load step.                                 |
| `GetStaticDamping`            | Gets the StaticDamping.                                                           |
| `SetStaticDamping`            | Sets the StaticDamping.                                                           |
| `GetSaveResultsOnType`        | Gets the  Save Results Type for a load step.                                      |
| `SetSaveResultsOnType`        | Sets the  Save Results Type for a load step.                                      |
| `GetSaveResultsOnTime`        | Gets the Time increment for Save Results On for a load step.                      |
| `SetSaveResultsOnTime`        | Set the Time increment for Save Results On for a load step.                       |
| `GetSaveResultsOnTimeSteps`   | Gets the Cycle increment for Save Results On for a load step.                     |
| `SetSaveResultsOnTimeSteps`   | Sets the Cycle increment for Save Results On for a load step.                     |
| `GetSaveResultsOnPoints`      | Gets the Points increment for Save Results On for a load step.                    |
| `SetSaveResultsOnPoints`      | Set the Points increment for Save Results On for a load step.                     |
| `GetSaveRestartsOnType`       | Gets the  Save Restarts Type for a load step.                                     |
| `SetSaveRestartsOnType`       | Sets the  Save Restarts Type for a load step.                                     |
| `GetSaveRestartsOnTime`       | Gets the Time increment for Save Restarts On for a load step.                     |
| `SetSaveRestartsOnTime`       | Set the Time increment for Save Restarts On for a load step.                      |
| `GetSaveRestartsOnTimeSteps`  | Gets the Cycle increment for Save Restarts On for a load step.                    |
| `SetSaveRestartsOnTimeSteps`  | Set the Cycle increment for Save Restarts On for a load step.                     |
| `GetSaveRestartsOnPoints`     | Gets the Points increment for Save Restarts On Points for a load step.            |
| `SetSaveRestartsOnPoints`     | Set the Points increment for Save Restarts On for a load step.                    |
| `GetSaveProbeDataOnType`      | Gets the  Save ProbeData Type for a load step.                                    |
| `SetSaveProbeDataOnType`      | Sets the  Save ProbeData Type for a load step.                                    |
| `GetSaveProbeDataOnTime`      | Gets the Time increment for Save ProbeData On for a load step.                    |
| `SetSaveProbeDataOnTime`      | Set the Time increment for Save ProbeData On for a load step.                     |
| `GetSaveProbeDataOnTimeSteps` | Gets the Cycle increment for Save ProbeData On for a load step.                   |
| `SetSaveProbeDataOnTimeSteps` | Set the Cycle increment for Save ProbeData On for a load step.                    |
| `DeleteAllRestartPoints`      | DeleteAllRestartPoints method.                                                    |
| `GetChildren`                 | Gets the list of children, filtered by type.                                      |
| `GetChildren`                 | Gets the list of children, filtered by type.                                      |
| `AddComment`                  | Creates a new child Comment.                                                      |
| `AddFigure`                   | Creates a new child Figure.                                                       |
| `AddImage`                    | Creates a new child Image.                                                        |
| `Activate`                    | Activate the current object.                                                      |
| `CopyTo`                      | Copies all visible properties from this object to another.                        |
| `Duplicate`                   | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren`     | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`         | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`              | Get a property by its unique name.                                                |
| `PropertyByAPIName`           | Get a property by its API name.                                                   |
| `CreateParameter`             | Creates a new parameter for a Property.                                           |
| `GetParameter`                | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`             | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------|----------------------------------------------------------------------|
| `InternalObject`                   | Gets the Internal Object. For advanced usage only.                   |
| `PreferenceType`                   | Gets or sets the PreferenceType                                      |
| `NumberOfSteps`                    | Gets or sets the NumberOfSteps.                                      |
| `CurrentStepNumber`                | Gets or sets the CurrentStepNumber.                                  |
| `ResumeFromTimeStep`               | Gets or sets the ResumeFromCycle.                                    |
| `MaximumTimeSteps`                 | Gets or sets the MaximumNumberofCycles.                              |
| `MaximumEnergyError`               | Gets or sets the  MaximumEnergyError.                                |
| `ReferenceEnergyTimeStep`          | Gets or sets the ReferenceEnergyCycle.                               |
| `InitialTimeStep`                  | Gets or sets the InitialTimeStep.                                    |
| `MinimumTimeStep`                  | Gets or sets the MinimumTimeStep.                                    |
| `MaximumTimeStep`                  | Gets or sets the MaximumTimeStep.                                    |
| `TimeStepSafetyFactor`             | Gets or sets the  TimeStepSafetyFactor.                              |
| `CharZoneDimensionType`            | Gets or sets the  CharZoneDimensionType.                             |
| `StepawareMassScalingType`         | Gets or Sets the Step aware Mass Scaling Controls.                   |
| `AutomaticMassScalingType`         | Gets or sets the  AutomaticMassScaling.                              |
| `MassScalingMinTimeStep`           | Gets or sets the  MassScalingMinTimeStep.                            |
| `MassScalingMaxElem`               | Gets or sets the  MassScalingMaxElem.                                |
| `MassScalingMaxPart`               | Gets or sets the  MassScalingMaxPart.                                |
| `MassScalingUpdateFreq`            | Gets or sets the  MassScalingUpdateFreq.                             |
| `SolverPrecisionType`              | Gets or sets the  SolverPrecisionType.                               |
| `SolveUnits`                       | Gets or sets the  SolveUnits.                                        |
| `BeamSolutionType`                 | Gets or sets the  BeamSolutionType.                                  |
| `BeamTimeStepSafetyFactor`         | Gets or sets the  BeamTimeStepSafetyFactor.                          |
| `HexIntegrationType`               | Gets or sets the  HexIntegrationType.                                |
| `ShellSublayers`                   | Gets or sets the  ShellSublayers.                                    |
| `ShellShearCorrectionFactor`       | Gets or sets the  ShellShearCorrectionFactor.                        |
| `ShellWarpCorrection`              | Gets or sets the  ShellWarpCorrection.                               |
| `ShellThicknessUpdateType`         | Gets or sets the  ShellThicknessUpdateType.                          |
| `PusoCoefficient`                  | Gets or sets the  PusoCoefficient.                                   |
| `TetPressureIntegrationType`       | Gets or sets the  TetIntegrationType.                                |
| `ShellInertiaUpdateType`           | Gets or sets the  ShellInertiaUpdateType.                            |
| `DensityUpdateType`                | Gets or sets the  DensityUpdateType.                                 |
| `SphMinTimeStep`                   | Gets or sets the  Minimum Timestep for SPH.                          |
| `SPHMinDensityFactor`              | Gets or sets the  Minimum Density Factor for SPH.                    |
| `SPHMaxDensityFactor`              | Gets or sets the  Maximum Density Factor for SPH.                    |
| `SPHNodeDensityCutoffOption`       | Gets or sets the  SPHNodeDensityCutoffOption.                        |
| `DetonationBurnType`               | Gets or sets the  DetonationBurnType.                                |
| `MinimumVelocity`                  | Gets or sets the  MinimumVelocity.                                   |
| `MaximumVelocity`                  | Gets or sets the  MaximumVelocity.                                   |
| `RadiusCutoff`                     | Gets or sets the  RadiusCutoff.                                      |
| `MinimumStrainCutOff`              | Gets or sets the  MinimumStrainCutOff.                               |
| `EulerSizeDefType`                 | Gets or sets the  EulerSizeDefType.                                  |
| `EulerDomainType`                  | Gets or sets the  EulerDomainType.                                   |
| `EulerDisplayBox`                  | Gets or sets the  EulerDisplayBox.                                   |
| `EulerDomScopeDefType`             | Gets or sets the  EulerDomScopeDefType.                              |
| `EulerXScaleFactor`                | Gets or sets the  EulerXScaleFactor.                                 |
| `EulerYScaleFactor`                | Gets or sets the  EulerYScaleFactor.                                 |
| `EulerZScaleFactor`                | Gets or sets the  EulerZScaleFactor.                                 |
| `EulerXOrigin`                     | Gets or sets the  EulerXOrigin.                                      |
| `EulerYOrigin`                     | Gets or sets the  EulerYOrigin.                                      |
| `EulerZOrigin`                     | Gets or sets the  EulerZOrigin.                                      |
| `EulerXDim`                        | Gets or sets the  EulerXDim.                                         |
| `EulerYDim`                        | Gets or sets the  EulerYDim.                                         |
| `EulerZDim`                        | Gets or sets the  EulerZDim.                                         |
| `EulerResolutionDefType`           | Gets or sets the  EulerResolutionDefType.                            |
| `EulerGradedDefinition`            | Gets or sets the  EulerGradedDefinition.                             |
| `EulerGradeIncrement`              | Gets or sets the  EulerGradeIncrement.                               |
| `EulerGradeNumberOfTimes`          | Gets or sets the  EulerGradeNumberOfTimes.                           |
| `EulerCellSize`                    | Gets or sets the  EulerCellSize.                                     |
| `EulerTotalCells`                  | Gets or sets the  EulerTotalCells.                                   |
| `EulerXZones`                      | Gets or sets the  EulerXZones.                                       |
| `EulerYZones`                      | Gets or sets the  EulerYZones.                                       |
| `EulerZZones`                      | Gets or sets the  EulerZZones.                                       |
| `EulerBoundLowerX`                 | Gets or sets the  EulerBoundLowerX.                                  |
| `EulerBoundLowerY`                 | Gets or sets the  EulerBoundLowerY.                                  |
| `EulerBoundLowerZ`                 | Gets or sets the  EulerBoundLowerZ.                                  |
| `EulerBoundUpperX`                 | Gets or sets the  EulerBoundUpperX.                                  |
| `EulerBoundUpperY`                 | Gets or sets the  EulerBoundUpperY.                                  |
| `EulerBoundUpperZ`                 | Gets or sets the  EulerBoundUpperZ.                                  |
| `EulerTrackType`                   | Gets the  EulerTrackType.                                            |
| `EulerPropertyXmin`                | Gets or sets the  EulerPropertyXmin.                                 |
| `EulerPropertyYmin`                | Gets or sets the  EulerPropertyYmin.                                 |
| `EulerPropertyZmin`                | Gets or sets the  EulerPropertyZmin.                                 |
| `EulerPropertyXsize`               | Gets or sets the  EulerPropertyXsize.                                |
| `EulerPropertyYsize`               | Gets or sets the  EulerPropertyYsize.                                |
| `EulerPropertyZsize`               | Gets or sets the  EulerPropertyZsize.                                |
| `EulerPropertyXres`                | Gets or sets the  EulerPropertyXres.                                 |
| `EulerPropertyYres`                | Gets or sets the  EulerPropertyYres.                                 |
| `EulerPropertyZres`                | Gets or sets the  EulerPropertyZres.                                 |
| `EulerPropertyDisplayBox`          | Gets or sets the  EulerPropertyDisplayBox.                           |
| `LinearArtificialViscosity`        | Gets or sets the LinearArtificialViscosity.                          |
| `QuadraticArtificialViscosity`     | Gets or sets the QuadraticArtificialViscosity.                       |
| `LinearViscosityExpansionType`     | Gets or sets the LinearViscosityExpansionType.                       |
| `ArtificialViscosityForShellsType` | Gets or sets the ArtificialViscosityForShellsType.                   |
| `LinearViscositySPH`               | Gets or sets the Linear Artificial Viscosity for SPH.                |
| `QuadratricViscositySPH`           | Gets or sets the Quadratic Artificial Viscosity for SPH.             |
| `HourglassDampingType`             | Gets or sets the HourglassDampingType.                               |
| `StiffnessCoefficient`             | Gets or sets the StiffnessCoefficient.                               |
| `ViscousCoefficient`               | Gets or sets the ViscousCoefficient.                                 |
| `ViscousCoefficientFB`             | Gets or sets the ViscousCoefficientFB.                               |
| `ErosionOnGeomStrainType`          | Gets or sets the ErosionOnGeomStrainType.                            |
| `ErosionGeomStrainLimit`           | Gets or sets the ErosionGeomStrainLimit                              |
| `ErosionOnMaterialFailureType`     | Gets or sets the ErosionOnMaterialFailureType                        |
| `ErosionOnMinElemTimestepType`     | Gets or sets the ErosionOnMinElemTimestepType                        |
| `ErosionMinElemTimestep`           | Gets or sets the ErosionMinElemTimestep                              |
| `ErosionRetainIntertiaType`        | Gets or sets the ErosionRetainIntertiaType                           |
| `StepawareOutputControlsType`      | Gets or Sets the Step aware Output Controls.                         |
| `OutputContactForcesOnType`        | Gets or Sets OutputContactForces Increment Type.                     |
| `OutputContactForcesOnTime`        | Gets or Sets the Time increment for OutputContactForcesOnTime.       |
| `OutputContactForcesOnTimeSteps`   | Gets or Sets the Cycle increment for OutputContactForcesOnTimeSteps. |
| `OutputContactForcesOnPoints`      | Gets or Sets the Points increment for OutputContactForcesOnPoints.   |
| `SavePrintSummaryOnType`           | Gets or Sets SavePrintSummaryOnType.                                 |
| `SavePrintSummaryOnTime`           | Gets or Sets the Time increment for SavePrintSummaryOnTime.          |
| `SavePrintSummaryOnTimeSteps`      | Gets or Sets Cycle increment for SavePrintSummaryOnTimeSteps.        |
| `OutputRemapFile`                  | Gets or Sets the Output Remap File Type.                             |
| `SaveUserEditOnType`               | Gets or Sets SaveUserEditOnType.                                     |
| `SaveUserEditOnTime`               | Gets or Sets Time increment for SaveUserEditOnTime.                  |
| `SaveUserEditOnTimeSteps`          | Gets or Sets Cycle increment for SaveUserEditOnTimeSteps.            |
| `Graph`                            | Graph property.                                                      |
| `InternalObject`                   | Gets the internal object. For advanced usage only.                   |
| `ScratchSolverFilesDirectory`      | Gets the ScratchSolverFilesDirectory.                                |
| `SolverFilesDirectory`             | Gets the SolverFilesDirectory.                                       |
| `DataModelObjectCategory`          | Gets the current DataModelObject's category.                         |
| `Children`                         | Gets the list of children.                                           |
| `Comments`                         | Gets the list of associated comments.                                |
| `Figures`                          | Gets the list of associated figures.                                 |
| `Images`                           | Gets the list of associated images.                                  |
| `Properties`                       | Gets the list of properties for this object.                         |
| `VisibleProperties`                | Gets the list of properties that are visible for this object.        |

<a id="property-detail"></a>

## Property detail

### *property* EXDAnalysisSettings.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Internal Object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.PreferenceType *: [Ansys.Mechanical.DataModel.Enums.EXDPreferenceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDPreferenceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDPreferenceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreferenceType

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.NumberOfSteps *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSteps.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.CurrentStepNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.ResumeFromTimeStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResumeFromCycle.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.MaximumTimeSteps *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumNumberofCycles.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.MaximumEnergyError *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MaximumEnergyError.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.ReferenceEnergyTimeStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceEnergyCycle.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.InitialTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialTimeStep.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.MinimumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumTimeStep.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.MaximumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumTimeStep.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.TimeStepSafetyFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  TimeStepSafetyFactor.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.CharZoneDimensionType *: [Ansys.Mechanical.DataModel.Enums.EXDCharZoneDimensionType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDCharZoneDimensionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDCharZoneDimensionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  CharZoneDimensionType.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.StepawareMassScalingType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Step aware Mass Scaling Controls.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.AutomaticMassScalingType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  AutomaticMassScaling.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.MassScalingMinTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MassScalingMinTimeStep.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.MassScalingMaxElem *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MassScalingMaxElem.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.MassScalingMaxPart *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MassScalingMaxPart.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.MassScalingUpdateFreq *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MassScalingUpdateFreq.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.SolverPrecisionType *: [Ansys.Mechanical.DataModel.Enums.EXDSolverPrecisionType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDSolverPrecisionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDSolverPrecisionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  SolverPrecisionType.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.SolveUnits *: [Ansys.Mechanical.DataModel.Enums.EXDSolveUnitsType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDSolveUnitsType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDSolveUnitsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  SolveUnits.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.BeamSolutionType *: [Ansys.Mechanical.DataModel.Enums.EXDBeamSolutionType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDBeamSolutionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDBeamSolutionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  BeamSolutionType.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.BeamTimeStepSafetyFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  BeamTimeStepSafetyFactor.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.HexIntegrationType *: [Ansys.Mechanical.DataModel.Enums.EXDHexIntegrationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDHexIntegrationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDHexIntegrationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  HexIntegrationType.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.ShellSublayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  ShellSublayers.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.ShellShearCorrectionFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  ShellShearCorrectionFactor.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.ShellWarpCorrection *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  ShellWarpCorrection.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.ShellThicknessUpdateType *: [Ansys.Mechanical.DataModel.Enums.EXDShellThicknessUpdateType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDShellThicknessUpdateType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDShellThicknessUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  ShellThicknessUpdateType.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.PusoCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  PusoCoefficient.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.TetPressureIntegrationType *: [Ansys.Mechanical.DataModel.Enums.EXDTetPressureIntegrationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDTetPressureIntegrationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDTetPressureIntegrationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  TetIntegrationType.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.ShellInertiaUpdateType *: [Ansys.Mechanical.DataModel.Enums.EXDShellInertiaUpdateType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDShellInertiaUpdateType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDShellInertiaUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  ShellInertiaUpdateType.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.DensityUpdateType *: [Ansys.Mechanical.DataModel.Enums.EXDDensityUpdateType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDDensityUpdateType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDDensityUpdateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  DensityUpdateType.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.SphMinTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  Minimum Timestep for SPH.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.SPHMinDensityFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  Minimum Density Factor for SPH.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.SPHMaxDensityFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  Maximum Density Factor for SPH.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.SPHNodeDensityCutoffOption *: [Ansys.Mechanical.DataModel.Enums.EXDSPHNodeDensityCutoffOption](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDSPHNodeDensityCutoffOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDSPHNodeDensityCutoffOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  SPHNodeDensityCutoffOption.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.DetonationBurnType *: [Ansys.Mechanical.DataModel.Enums.EXDDetonationBurnType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDDetonationBurnType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDDetonationBurnType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  DetonationBurnType.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.MinimumVelocity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MinimumVelocity.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.MaximumVelocity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MaximumVelocity.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.RadiusCutoff *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  RadiusCutoff.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.MinimumStrainCutOff *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  MinimumStrainCutOff.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerSizeDefType *: [Ansys.Mechanical.DataModel.Enums.EXDEulerSizeDefType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDEulerSizeDefType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDEulerSizeDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerSizeDefType.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerDomainType *: [Ansys.Mechanical.DataModel.Enums.EXDEulerDomainType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDEulerDomainType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDEulerDomainType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerDomainType.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerDisplayBox *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerDisplayBox.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerDomScopeDefType *: [Ansys.Mechanical.DataModel.Enums.EXDEulerDomScopeDefType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDEulerDomScopeDefType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDEulerDomScopeDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerDomScopeDefType.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerXScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerXScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerYScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerYScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerZScaleFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerZScaleFactor.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerXOrigin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerXOrigin.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerYOrigin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerYOrigin.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerZOrigin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerZOrigin.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerXDim *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerXDim.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerYDim *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerYDim.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerZDim *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerZDim.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerResolutionDefType *: [Ansys.Mechanical.DataModel.Enums.EXDEulerResolutionDefType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDEulerResolutionDefType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDEulerResolutionDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerResolutionDefType.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerGradedDefinition *: [Ansys.Mechanical.DataModel.Enums.EXDEulerGradedDefinition](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDEulerGradedDefinition.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDEulerGradedDefinition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerGradedDefinition.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerGradeIncrement *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerGradeIncrement.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerGradeNumberOfTimes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerGradeNumberOfTimes.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerCellSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerCellSize.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerTotalCells *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerTotalCells.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerXZones *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerXZones.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerYZones *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerYZones.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerZZones *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerZZones.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerBoundLowerX *: [Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDEulerBoundaryDefType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerBoundLowerX.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerBoundLowerY *: [Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDEulerBoundaryDefType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerBoundLowerY.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerBoundLowerZ *: [Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDEulerBoundaryDefType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerBoundLowerZ.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerBoundUpperX *: [Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDEulerBoundaryDefType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerBoundUpperX.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerBoundUpperY *: [Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDEulerBoundaryDefType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerBoundUpperY.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerBoundUpperZ *: [Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDEulerBoundaryDefType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDEulerBoundaryDefType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerBoundUpperZ.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerTrackType *: [Ansys.Mechanical.DataModel.Enums.EXDEulerTrackType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDEulerTrackType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDEulerTrackType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the  EulerTrackType.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerPropertyXmin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyXmin.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerPropertyYmin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyYmin.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerPropertyZmin *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyZmin.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerPropertyXsize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyXsize.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerPropertyYsize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyYsize.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerPropertyZsize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyZsize.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerPropertyXres *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyXres.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerPropertyYres *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyYres.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerPropertyZres *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyZres.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.EulerPropertyDisplayBox *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the  EulerPropertyDisplayBox.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.LinearArtificialViscosity *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LinearArtificialViscosity.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.QuadraticArtificialViscosity *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the QuadraticArtificialViscosity.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.LinearViscosityExpansionType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LinearViscosityExpansionType.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.ArtificialViscosityForShellsType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ArtificialViscosityForShellsType.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.LinearViscositySPH *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Linear Artificial Viscosity for SPH.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.QuadratricViscositySPH *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Quadratic Artificial Viscosity for SPH.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.HourglassDampingType *: [Ansys.Mechanical.DataModel.Enums.EXDHourglassDampingType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDHourglassDampingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDHourglassDampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HourglassDampingType.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.StiffnessCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessCoefficient.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.ViscousCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ViscousCoefficient.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.ViscousCoefficientFB *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ViscousCoefficientFB.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.ErosionOnGeomStrainType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ErosionOnGeomStrainType.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.ErosionGeomStrainLimit *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ErosionGeomStrainLimit

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.ErosionOnMaterialFailureType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ErosionOnMaterialFailureType

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.ErosionOnMinElemTimestepType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ErosionOnMinElemTimestepType

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.ErosionMinElemTimestep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ErosionMinElemTimestep

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.ErosionRetainIntertiaType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ErosionRetainIntertiaType

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.StepawareOutputControlsType *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Step aware Output Controls.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.OutputContactForcesOnType *: [Ansys.Mechanical.DataModel.Enums.EXDOutputContactForcesOnType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDOutputContactForcesOnType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDOutputContactForcesOnType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets OutputContactForces Increment Type.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.OutputContactForcesOnTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Time increment for OutputContactForcesOnTime.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.OutputContactForcesOnTimeSteps *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Cycle increment for OutputContactForcesOnTimeSteps.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.OutputContactForcesOnPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Points increment for OutputContactForcesOnPoints.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.SavePrintSummaryOnType *: [Ansys.Mechanical.DataModel.Enums.EXDSavePrintSummaryOnType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDSavePrintSummaryOnType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDSavePrintSummaryOnType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets SavePrintSummaryOnType.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.SavePrintSummaryOnTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Time increment for SavePrintSummaryOnTime.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.SavePrintSummaryOnTimeSteps *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets Cycle increment for SavePrintSummaryOnTimeSteps.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.OutputRemapFile *: Ansys.Mechanical.DataModel.Enums.EXDOutputRemapFileOnType | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Output Remap File Type.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.SaveUserEditOnType *: [Ansys.Mechanical.DataModel.Enums.EXDSaveUserEditOnType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDSaveUserEditOnType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDSaveUserEditOnType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets SaveUserEditOnType.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.SaveUserEditOnTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets Time increment for SaveUserEditOnTime.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.SaveUserEditOnTimeSteps *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets Cycle increment for SaveUserEditOnTimeSteps.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.Graph *: [Ansys.Mechanical.Graphics.AnalysisSettingsGraph](../../../../../../v241/Ansys/Mechanical/Graphics/AnalysisSettingsGraph.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnalysisSettingsGraph) | [None](https://docs.python.org/3/library/constants.html#None)*

Graph property.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAnalysisSettings | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.ScratchSolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScratchSolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* EXDAnalysisSettings.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### EXDAnalysisSettings.GetStepEndTime(stepNumber: System.Int32)

Gets the Step End Time at a given solution step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.SetStepEndTime(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Sets the Step End Time for a given solution step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.GetLoadStepType(stepNumber: System.Int32)

Gets the  LoadStepType for a step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.SetLoadStepType(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.EXDLoadStepType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDLoadStepType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDLoadStepType))

Sets the LoadStepType for a step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.getADRConvergenceMethod(stepNumber: System.Int32)

Gets the Covergence Method for ADR loadstep.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.setADRConvergenceMethod(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.EXDADRConvergenceMethod](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDADRConvergenceMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDADRConvergenceMethod))

Sets the Covergence Method for ADR loadstep.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.getADRConvergenceTolerance(stepNumber: System.Int32)

Gets the Covergence Tolerance for ADR loadstep.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.setADRConvergenceTolerance(stepNumber: System.Int32, value: System.Double)

Sets the Covergence Tolerance for ADR loadstep.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.getADRMaximumIterations(stepNumber: System.Int32)

Gets the Maximum Iterations for ADR loadstep.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.setADRMaximumIterations(stepNumber: System.Int32, value: System.Int32)

Sets the Maximum Iterations for ADR loadstep.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.GetAutomaticMassScalingType(stepNumber: System.Int32)

Gets the  AutomaticMassScalingType for a load step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.SetAutomaticMassScalingType(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.EXDAutomaticMassScalingType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDAutomaticMassScalingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDAutomaticMassScalingType))

Sets the  AutomaticMassScalingType for a load step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.GetMassScalingMinTimeStep(stepNumber: System.Int32)

Gets the  MassScalingMinTimeStep for a load step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.SetMassScalingMinTimeStep(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Sets the  MassScalingMinTimeStep for a load step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.GetStaticDamping(stepNumber: System.Int32)

Gets the StaticDamping.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.SetStaticDamping(stepNumber: System.Int32, value: System.Double)

Sets the StaticDamping.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.GetSaveResultsOnType(stepNumber: System.Int32)

Gets the  Save Results Type for a load step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.SetSaveResultsOnType(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.EXDSaveResultsOnType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDSaveResultsOnType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDSaveResultsOnType))

Sets the  Save Results Type for a load step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.GetSaveResultsOnTime(stepNumber: System.Int32)

Gets the Time increment for Save Results On for a load step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.SetSaveResultsOnTime(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Set the Time increment for Save Results On for a load step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.GetSaveResultsOnTimeSteps(stepNumber: System.Int32)

Gets the Cycle increment for Save Results On for a load step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.SetSaveResultsOnTimeSteps(stepNumber: System.Int32, value: System.Int32)

Sets the Cycle increment for Save Results On for a load step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.GetSaveResultsOnPoints(stepNumber: System.Int32)

Gets the Points increment for Save Results On for a load step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.SetSaveResultsOnPoints(stepNumber: System.Int32, value: System.Int32)

Set the Points increment for Save Results On for a load step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.GetSaveRestartsOnType(stepNumber: System.Int32)

Gets the  Save Restarts Type for a load step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.SetSaveRestartsOnType(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.EXDSaveRestartsOnType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDSaveRestartsOnType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDSaveRestartsOnType))

Sets the  Save Restarts Type for a load step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.GetSaveRestartsOnTime(stepNumber: System.Int32)

Gets the Time increment for Save Restarts On for a load step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.SetSaveRestartsOnTime(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Set the Time increment for Save Restarts On for a load step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.GetSaveRestartsOnTimeSteps(stepNumber: System.Int32)

Gets the Cycle increment for Save Restarts On for a load step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.SetSaveRestartsOnTimeSteps(stepNumber: System.Int32, value: System.Int32)

Set the Cycle increment for Save Restarts On for a load step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.GetSaveRestartsOnPoints(stepNumber: System.Int32)

Gets the Points increment for Save Restarts On Points for a load step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.SetSaveRestartsOnPoints(stepNumber: System.Int32, value: System.Int32)

Set the Points increment for Save Restarts On for a load step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.GetSaveProbeDataOnType(stepNumber: System.Int32)

Gets the  Save ProbeData Type for a load step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.SetSaveProbeDataOnType(stepNumber: System.Int32, value: [Ansys.Mechanical.DataModel.Enums.EXDSaveProbeDataOnType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/EXDSaveProbeDataOnType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EXDSaveProbeDataOnType))

Sets the  Save ProbeData Type for a load step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.GetSaveProbeDataOnTime(stepNumber: System.Int32)

Gets the Time increment for Save ProbeData On for a load step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.SetSaveProbeDataOnTime(stepNumber: System.Int32, value: Ansys.Core.Units.Quantity)

Set the Time increment for Save ProbeData On for a load step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.GetSaveProbeDataOnTimeSteps(stepNumber: System.Int32)

Gets the Cycle increment for Save ProbeData On for a load step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.SetSaveProbeDataOnTimeSteps(stepNumber: System.Int32, value: System.Int32)

Set the Cycle increment for Save ProbeData On for a load step.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.DeleteAllRestartPoints()

DeleteAllRestartPoints method.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### EXDAnalysisSettings.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

