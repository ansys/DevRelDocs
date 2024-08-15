# `ANSYSAnalysisSettings`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.AnalysisSettings.ANSYSAnalysisSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ANSYSAnalysisSettings.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------|----------------------------------------------------------------------------------------|
| `GetStepEndTime`                             | Gets the Step End Time at a given solution step.                                       |
| `SetStepEndTime`                             | Sets the Step End Time for a given solution step.                                      |
| `GetAutomaticTimeStepping`                   | Gets the Automatic Time Stepping at a given solution step.                             |
| `SetAutomaticTimeStepping`                   | Sets the Automatic Time Stepping for a given solution step.                            |
| `GetForceConvergenceType`                    | Gets the Force Convergence Tolerance Type at a given solution step.                    |
| `SetForceConvergenceType`                    | Sets the Force Convergence Tolerance Type for a given solution step.                   |
| `GetForceConvergenceTolerance`               | Gets the Force Convergence Tolerance as a percentage at a given solution step.         |
| `SetForceConvergenceTolerance`               | Sets the Force Convergence Tolerance as a percentage for a given solution step.        |
| `GetForceConvergenceValue`                   | Gets the Force Convergence Value at a given solution step.                             |
| `SetForceConvergenceValue`                   | Sets the Force Convergence Value for a given solution step.                            |
| `GetForceConvergenceMinimumReference`        | Gets the Force Convergence Minimum Reference at a given solution step.                 |
| `SetForceConvergenceMinimumReference`        | Sets the Force Convergence Minimum Reference for a given solution step.                |
| `GetMomentConvergenceType`                   | Gets the Moment Convergence Tolerance type at a given solution step.                   |
| `SetMomentConvergenceType`                   | Sets the Moment Convergence Tolerance type for a given solution step.                  |
| `GetMomentConvergenceTolerance`              | Gets the Moment Convergence Tolerance as a percentage at a given solution step.        |
| `SetMomentConvergenceTolerance`              | Sets the Moment Convergence Tolerance as a percentage for a given solution step.       |
| `GetMomentConvergenceValue`                  | Gets the Moment Convergence Value at a given solution step.                            |
| `SetMomentConvergenceValue`                  | Sets the Moment Convergence Value for a given solution step.                           |
| `GetMomentConvergenceMinimumReference`       | Gets the Moment Convergence Minimum Reference at a given solution step.                |
| `SetMomentConvergenceMinimumReference`       | Sets the Moment Convergence Minimum Reference for a given solution step.               |
| `GetDisplacementConvergenceType`             | Gets the Displacement Convergence Tolerance type at a given solution step.             |
| `SetDisplacementConvergenceType`             | Sets the Displacement Convergence Tolerance type for a given solution step.            |
| `GetDisplacementConvergenceTolerance`        | Gets the Displacement Convergence Tolerance as a percentage at a given solution step.  |
| `SetDisplacementConvergenceTolerance`        | Sets the Displacement Convergence Tolerance as a percentage for a given solution step. |
| `GetDisplacementConvergenceValue`            | Gets the Displacement Convergence Value at a given solution step.                      |
| `SetDisplacementConvergenceValue`            | Sets the Displacement Convergence Value for a given solution step.                     |
| `GetDisplacementConvergenceMinimumReference` | Gets the Displacement Convergence Minimum Reference at a given solution step.          |
| `SetDisplacementConvergenceMinimumReference` | Sets the Displacement Convergence Minimum Reference for a given solution step.         |
| `GetRotationConvergenceType`                 | Gets the Rotation Convergence Tolerance type at a given solution step.                 |
| `SetRotationConvergenceType`                 | Sets the Rotation Convergence Tolerance type for a given solution step.                |
| `GetRotationConvergenceTolerance`            | Gets the Rotation Convergence Tolerance as a percentage at a given solution step.      |
| `SetRotationConvergenceTolerance`            | Sets the Rotation Convergence Tolerance as a percentage for a given solution step.     |
| `GetRotationConvergenceValue`                | Gets the Rotation Convergence Value at a given solution step.                          |
| `SetRotationConvergenceValue`                | Sets the Rotation Convergence Value for a given solution step.                         |
| `GetRotationConvergenceMinimumReference`     | Gets the Rotation Convergence Minimum Reference at a given solution step.              |
| `SetRotationConvergenceMinimumReference`     | Sets the Rotation Convergence Minimum Reference for a given solution step.             |
| `SetTemperatureConvergenceType`              | Sets the Temperature Convergence Tolerance type for a given solution step.             |
| `SetTemperatureConvergenceTolerance`         | Sets the Temperature Convergence Tolerance as a percentage for a given solution step.  |
| `SetTemperatureConvergenceValue`             | Sets the Temperature Convergence Value for a given solution step.                      |
| `SetTemperatureConvergenceInputValue`        | Sets the Temperature Convergence Input Value for a given solution step.                |
| `SetTemperatureConvergenceMinimumReference`  | Sets the Temperature Convergence Minimum Reference for a given solution step.          |
| `SetHeatConvergenceType`                     | Sets the Heat Convergence Tolerance type for a given solution step.                    |
| `SetHeatConvergenceTolerance`                | Sets the Heat Convergence Tolerance as a percentage for a given solution step.         |
| `SetHeatConvergenceValue`                    | Sets the Heat Convergence Value for a given solution step.                             |
| `SetHeatConvergenceMinimumReference`         | Sets the Heat Convergence Minimum Reference for a given solution step.                 |
| `SetVoltageConvergenceType`                  | Sets the Voltage Convergence Tolerance type for a given solution step.                 |
| `SetVoltageConvergenceTolerance`             | Sets the Voltage Convergence Tolerance as a percentage for a given solution step.      |
| `SetVoltageConvergenceValue`                 | Sets the Voltage Convergence Value for a given solution step.                          |
| `SetVoltageConvergenceMinimumReference`      | Sets the Voltage Convergence Minimum Reference for a given solution step.              |
| `SetChargeConvergenceType`                   | Sets the Charge Convergence Tolerance type for a given solution step.                  |
| `SetChargeConvergenceTolerance`              | Sets the Charge Convergence Tolerance as a percentage for a given solution step.       |
| `SetChargeConvergenceValue`                  | Sets the Charge Convergence Value for a given solution step.                           |
| `SetChargeConvergenceMinimumReference`       | Sets the Charge Convergence Minimum Reference for a given solution step.               |
| `SetEnergyConvergenceType`                   | Sets the Energy Convergence Tolerance type for a given solution step.                  |
| `SetEnergyConvergenceTolerance`              | Sets the Energy Convergence Tolerance as a percentage for a given solution step.       |
| `SetEnergyConvergenceValue`                  | Sets the Energy Convergence Value for a given solution step.                           |
| `SetEnergyConvergenceMinimumReference`       | Sets the Energy Convergence Minimum Reference for a given solution step.               |
| `SetCurrentConvergenceType`                  | Sets the Current Convergence Tolerance type for a given solution step.                 |
| `SetCurrentConvergenceTolerance`             | Sets the Current Convergence Tolerance as a percentage for a given solution step.      |
| `SetCurrentConvergenceValue`                 | Sets the Current Convergence Value for a given solution step.                          |
| `SetCurrentConvergenceMinimumReference`      | Sets the Current Convergence Minimum Reference for a given solution step.              |
| `SetEmagAMPSConvergenceType`                 | Sets the EmagAMPS Convergence Tolerance type for a given solution step.                |
| `SetEmagAMPSConvergenceTolerance`            | Sets the EmagAMPS Convergence Tolerance as a percentage for a given solution step.     |
| `SetEmagAMPSConvergenceValue`                | Sets the EmagAMPS Convergence Value for a given solution step.                         |
| `SetEmagAMPSConvergenceMinimumReference`     | Sets the EmagAMPS Convergence Minimum Reference for a given solution step.             |
| `SetEmagCSGConvergenceType`                  | Sets the EmagCSG Convergence Tolerance type for a given solution step.                 |
| `SetEmagCSGConvergenceTolerance`             | Sets the EmagCSG Convergence Tolerance as a percentage for a given solution step.      |
| `SetEmagCSGConvergenceValue`                 | Sets the EmagCSG Convergence Value for a given solution step.                          |
| `SetEmagCSGConvergenceMinimumReference`      | Sets the EmagCSG Convergence Minimum Reference for a given solution step.              |
| `GetTemperatureConvergenceType`              | Gets the Temperature Convergence Tolerance type at a given solution step.              |
| `GetTemperatureConvergenceTolerance`         | Gets the Temperature Convergence Tolerance as a percentage at a given solution step.   |
| `GetTemperatureConvergenceValue`             | Gets the Temperature Convergence Value at a given solution step.                       |
| `GetTemperatureConvergenceInputValue`        | Gets the Temperature Convergence Input Value at a given solution step.                 |
| `GetTemperatureConvergenceMinimumReference`  | Gets the Temperature Convergence Minimum Reference at a given solution step.           |
| `GetHeatConvergenceType`                     | Gets the Heat Convergence Tolerance type at a given solution step.                     |
| `GetHeatConvergenceTolerance`                | Gets the Heat Convergence Tolerance as a percentage at a given solution step.          |
| `GetHeatConvergenceValue`                    | Gets the Heat Convergence Value at a given solution step.                              |
| `GetHeatConvergenceMinimumReference`         | Gets the Heat Convergence Minimum Reference at a given solution step.                  |
| `GetVoltageConvergenceType`                  | Gets the Voltage Convergence Tolerance type at a given solution step.                  |
| `GetVoltageConvergenceTolerance`             | Gets the Voltage Convergence Tolerance as a percentage at a given solution step.       |
| `GetVoltageConvergenceValue`                 | Gets the Voltage Convergence Value at a given solution step.                           |
| `GetVoltageConvergenceMinimumReference`      | Gets the Voltage Convergence Minimum Reference at a given solution step.               |
| `GetCurrentConvergenceType`                  | Gets the Current Convergence Tolerance type at a given solution step.                  |
| `GetCurrentConvergenceTolerance`             | Gets the Current Convergence Tolerance as a percentage at a given solution step.       |
| `GetCurrentConvergenceValue`                 | Gets the Current Convergence Value at a given solution step.                           |
| `GetCurrentConvergenceMinimumReference`      | Gets the Current Convergence Minimum Reference at a given solution step.               |
| `GetEmagAMPSConvergenceType`                 | Gets the EmagAMPS Convergence Tolerance type at a given solution step.                 |
| `GetEmagAMPSConvergenceTolerance`            | Gets the EmagAMPS Convergence Tolerance as a percentage at a given solution step.      |
| `GetEmagAMPSConvergenceValue`                | Gets the EmagAMPS Convergence Value at a given solution step.                          |
| `GetEmagAMPSConvergenceMinimumReference`     | Gets the EmagAMPS Convergence Minimum Reference at a given solution step.              |
| `GetEmagCSGConvergenceType`                  | Gets the EmagCSG Convergence Tolerance type at a given solution step.                  |
| `GetEmagCSGConvergenceTolerance`             | Gets the EmagCSG Convergence Tolerance as a percentage at a given solution step.       |
| `GetEmagCSGConvergenceValue`                 | Gets the EmagCSG Convergence Value at a given solution step.                           |
| `GetEmagCSGConvergenceMinimumReference`      | Gets the EmagCSG Convergence Minimum Reference at a given solution step.               |
| `GetEnergyConvergenceType`                   | Gets the Energy Convergence Tolerance type at a given solution step.                   |
| `GetEnergyConvergenceTolerance`              | Gets the Energy Convergence Tolerance as a percentage at a given solution step.        |
| `GetEnergyConvergenceValue`                  | Gets the Energy Convergence Value at a given solution step.                            |
| `GetEnergyConvergenceMinimumReference`       | Gets the Energy Convergence Minimum Reference at a given solution step.                |
| `GetLineSearch`                              | Gets the Line Search at a given solution step.                                         |
| `SetLineSearch`                              | Sets the Line Search for a given solution step.                                        |
| `GetStabilization`                           | Gets the Stabilization at a given solution step.                                       |
| `SetStabilization`                           | Sets the Stabilization for a given solution step.                                      |
| `GetStabilizationMethod`                     | Gets the Stabilization Method at a given solution step.                                |
| `SetStabilizationMethod`                     | Sets the Stabilization Method for a given solution step.                               |
| `GetStabilizationEnergyDissipationRatio`     | Gets the Stabilization Energy Dissipation Ratio at a given solution step.              |
| `SetStabilizationEnergyDissipationRatio`     | Sets the Stabilization Energy Dissipation Ratio for a given solution step.             |
| `GetStabilizationDampingFactor`              | Gets the Stabilization Damping Factor at a given solution step.                        |
| `SetStabilizationDampingFactor`              | Sets the Stabilization Damping Factor for a given solution step.                       |
| `GetStabilizationFirstSubstepOption`         | Gets the Stabilization First Substep Option at a given solution step.                  |
| `SetStabilizationFirstSubstepOption`         | Sets the Stabilization First Substep Option for a given solution step.                 |
| `GetStabilizationForceLimit`                 | Gets the Stabilization Force Limit at a given solution step.                           |
| `SetStabilizationForceLimit`                 | Sets the Stabilization Force Limit for a given solution step.                          |
| `GetStoreResultsAt`                          | Gets the Store Results At at a given solution step.                                    |
| `SetStoreResultsAt`                          | Sets the Store Results At for a given solution step.                                   |
| `GetStoreResulsAtValue`                      | Gets the Store Results At Value at a given solution step.                              |
| `SetStoreResulsAtValue`                      | Sets the Store Results At Value for a given solution step.                             |
| `GetDefineBy`                                | Gets the Define By at a given solution step.                                           |
| `SetDefineBy`                                | Sets the Define By for a given solution step.                                          |
| `GetCarryOverTimeStep`                       | Gets the Carry Over Time Step at a given solution step.                                |
| `SetCarryOverTimeStep`                       | Sets the Carry Over Time Step for a given solution step.                               |
| `GetInitialTimeStep`                         | Gets the Initial Time Step at a given solution step.                                   |
| `SetInitialTimeStep`                         | Sets the Initial Time Step for a given solution step.                                  |
| `GetMinimumTimeStep`                         | Gets the Minimum Time Step at a given solution step.                                   |
| `SetMinimumTimeStep`                         | Sets the Minimum Time Step for a given solution step.                                  |
| `GetMaximumTimeStep`                         | Gets the Maximum Time Step at a given solution step.                                   |
| `SetMaximumTimeStep`                         | Sets the Maximum Time Step for a given solution step.                                  |
| `GetInitialSubsteps`                         | Gets the Initial Substeps at a given solution step.                                    |
| `SetInitialSubsteps`                         | Sets the Initial Substeps for a given solution step.                                   |
| `GetMinimumSubsteps`                         | Gets the Minimum Substeps at a given solution step.                                    |
| `SetMinimumSubsteps`                         | Sets the Minimum Substeps for a given solution step.                                   |
| `GetMaximumSubsteps`                         | Gets the Maximum Substeps at a given solution step.                                    |
| `SetMaximumSubsteps`                         | Sets the Maximum Substeps for a given solution step.                                   |
| `SetNumberOfSubSteps`                        | Sets the Number of Substeps for a given solution step.                                 |
| `GetNumberOfSubSteps`                        | Gets the Number of Substeps for a given solution step.                                 |
| `SetTimeStep`                                | Sets the Time Step for a given solution step.                                          |
| `GetTimeStep`                                | Sets the Time Step for a given solution step.                                          |
| `SetTimeIntegration`                         | Sets the TimeIntegration for a given solution step.                                    |
| `SetStructuralOnly`                          | Sets the TimeIntegration Structural for a given solution step.                         |
| `SetThermalOnly`                             | Sets the TimeIntegration Thermal for a given solution step.                            |
| `GetTimeIntegration`                         | Gets the TimeIntegration for a given solution step.                                    |
| `GetStructuralOnly`                          | Gets the TimeIntegration Structural for a given solution step.                         |
| `GetThermalOnly`                             | Sets the TimeIntegration Thermal for a given solution step.                            |
| `GetStepName`                                | Gets the Step name at a given step.                                                    |
| `SetStepName`                                | Sets the Step name at a given step.                                                    |
| `GetAMStepType`                              | Gets the AM Process Step Type at a given step.                                         |
| `CopyTo`                                     | CopyTo method.                                                                         |
| `SetCreepEffects`                            | Sets the Creep Effects for a given solution step.                                      |
| `GetCreepEffects`                            | Gets the Creep Effects for a given solution step.                                      |
| `SetCreepLimitRatio`                         | Sets the Creep Limit Ratio for a given solution step.                                  |
| `GetCreepLimitRatio`                         | Gets the Creep Limit Ratio for a given solution step.                                  |
| `DeleteAllRestartPoints`                     | DeleteAllRestartPoints method.                                                         |
| `GetChildren`                                | Gets the list of children, filtered by type.                                           |
| `GetChildren`                                | Gets the list of children, filtered by type.                                           |
| `AddComment`                                 | Creates a new child Comment.                                                           |
| `AddFigure`                                  | Creates a new child Figure.                                                            |
| `AddImage`                                   | Creates a new child Image.                                                             |
| `Activate`                                   | Activate the current object.                                                           |
| `Duplicate`                                  | Creates a copy of the current DataModelObject.                                         |
| `GroupAllSimilarChildren`                    | Run the GroupAllSimilarChildren action.                                                |
| `GroupSimilarObjects`                        | Run the GroupSimilarObjects action.                                                    |
| `PropertyByName`                             | Get a property by its unique name.                                                     |
| `PropertyByAPIName`                          | Get a property by its API name.                                                        |
| `CreateParameter`                            | Creates a new parameter for a Property.                                                |
| `GetParameter`                               | Gets the parameter corresponding to the given property.                                |
| `RemoveParameter`                            | Removes the parameter from the parameter set corresponding to the given property.      |

### Properties

| Name | Description |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| `StepName`                                 | Gets or sets the Step Name.                                                                                                      |
| `AMStepType`                               | Gets or sets the AM Process Step Type.                                                                                           |
| `AMSubstepsToApplyHeats`                   | Gets or sets the AM Substeps to Apply Heat.                                                                                      |
| `AMSubstepsBetweenHeating`                 | Gets or sets the AM Substeps Between Heating.                                                                                    |
| `AMCooldownNumberOfSubsteps`               | Gets or sets the AM Cooldown Number of Substeps.                                                                                 |
| `CooldownTimeType`                         | Gets or sets the AM Cooldown Time Type.                                                                                          |
| `CooldownTime`                             | Gets or sets the AM Cooldown Time.                                                                                               |
| `LayersToBuild`                            | Gets or sets the AM Layers to Build.                                                                                             |
| `ReferenceTemperatureType`                 | Gets or sets the AM Reference Temperature Type.                                                                                  |
| `ReferenceTemperature`                     | Gets or sets the AM Reference Temperature.                                                                                       |
| `RelaxationTemperatureType`                | Gets or sets the AM Relaxation Temperature Type.                                                                                 |
| `NumberOfRestartPoints`                    | Gets Number of Restart Points.                                                                                                   |
| `CurrentRestartPoint`                      | Gets or sets the Current Restart Point.                                                                                          |
| `AggressiveRemeshing`                      | Gets or sets the AggressiveRemeshing.                                                                                            |
| `SpinSoftening`                            | Gets or sets the SpinSoftening.                                                                                                  |
| `UserDefinedFrequencySteps`                | Gets or sets the UserDefinedFrequencySteps.                                                                                      |
| `OutputSelection`                          | Gets or sets the Output Selection property in the Output Controls group of Analysis Settings.                                    |
| `NamedSelection`                           | Gets or sets the objects of type NamedSelection to – Named Selection property in the Output Controls group of Analysis Settings. |
| `InternalObject`                           | Gets the internal object. For advanced usage only.                                                                               |
| `MassCoefficient`                          | Gets or sets the MassCoefficient.                                                                                                |
| `StiffnessCoefficient`                     | Gets or sets the StiffnessCoefficient.                                                                                           |
| `DampingRatio`                             | Gets or sets the DampingRatio.                                                                                                   |
| `ConstantDampingRatio`                     | Gets or sets the ConstantDampingRatio.                                                                                           |
| `StructuralDampingCoefficient`             | Gets or sets the StructuralDampingCoefficient.                                                                                   |
| `ContactSplitMaxNum`                       | Gets or sets the ContactSplitMaxNum.                                                                                             |
| `ChargeConvergenceTolerance`               | Gets or sets the ChargeConvergenceTolerance.                                                                                     |
| `CurrentConvergenceTolerance`              | Gets or sets the CurrentConvergenceTolerance.                                                                                    |
| `EmagAMPSConvergenceTolerance`             | Gets or sets the EmagAMPSConvergenceTolerance.                                                                                   |
| `EmagCSGConvergenceTolerance`              | Gets or sets the EmagCSGConvergenceTolerance.                                                                                    |
| `EnergyConvergenceTolerance`               | Gets or sets the EnergyConvergenceTolerance.                                                                                     |
| `HeatConvergenceTolerance`                 | Gets or sets the HeatConvergenceTolerance.                                                                                       |
| `TemperatureConvergenceTolerance`          | Gets or sets the TemperatureConvergenceTolerance.                                                                                |
| `VoltageConvergenceTolerance`              | Gets or sets the VoltageConvergenceTolerance.                                                                                    |
| `CreepLimitRatio`                          | Gets or sets the CreepLimitRatio.                                                                                                |
| `CurrentStepNumberHarmonic`                | Gets or sets the CurrentStepNumberHarmonic.                                                                                      |
| `CurrentStepNumber`                        | Gets or sets the CurrentStepNumber.                                                                                              |
| `EngineOrderofExcitation`                  | Gets or sets the EngineOrderofExcitation.                                                                                        |
| `MaximumHarmonicIndex`                     | Gets or sets the MaximumHarmonicIndex.                                                                                           |
| `MinimumHarmonicIndex`                     | Gets or sets the MinimumHarmonicIndex.                                                                                           |
| `HarmonicIndexInterval`                    | Gets or sets the HarmonicIndexInterval.                                                                                          |
| `ClusterNumber`                            | Gets or sets the ClusterNumber.                                                                                                  |
| `SolutionIntervals`                        | Gets or sets the SolutionIntervals.                                                                                              |
| `KrylovSubspaceDimension`                  | Gets or sets the KrylovSubspaceDimension.                                                                                        |
| `KrylovResidualTolerance`                  | Gets or sets the KrylovResidualTolerance.                                                                                        |
| `HarmonicOrders`                           | Gets or sets the HarmonicOrders.                                                                                                 |
| `InitialSubsteps`                          | Gets or sets the InitialSubsteps.                                                                                                |
| `InverseOptionEndStep`                     | Gets or sets the InverseOptionEndStep.                                                                                           |
| `MaximumSubsteps`                          | Gets or sets the MaximumSubsteps.                                                                                                |
| `MeshLoadStepValue`                        | Gets or sets the MeshLoadStepValue.                                                                                              |
| `MinimumSubsteps`                          | Gets or sets the MinimumSubsteps.                                                                                                |
| `ModalNumberOfPoints`                      | Gets or sets the ModalNumberOfPoints.                                                                                            |
| `ModeSignificanceLevel`                    | Gets or sets the ModeSignificanceLevel.                                                                                          |
| `GlobalSizeRatioQualityImprovement`        | Gets or sets the GlobalSizeRatioQualityImprovement.                                                                              |
| `GlobalSizeRatioQualityRefinement`         | Gets or sets the GlobalSizeRatioQualityRefinement.                                                                               |
| `NumberOfSculptedLayersQualityImprovement` | Gets or sets the NumberOfSculptedLayersQualityImprovement.                                                                       |
| `NumberOfSculptedLayersRefinement`         | Gets or sets the NumberOfSculptedLayersRefinement.                                                                               |
| `RemeshingToleranceQualityImprovement`     | Gets or sets the RemeshingToleranceQualityImprovement.                                                                           |
| `RemeshingToleranceRefinement`             | Gets or sets the RemeshingToleranceRefinement.                                                                                   |
| `StoreResulsAtValue`                       | Gets or sets the StoreResulsAtValue.                                                                                             |
| `NumberOfModesToUse`                       | Gets or sets the NumberOfModesToUse.                                                                                             |
| `NumberOfRPMs`                             | Gets or sets the NumberOfRPMs.                                                                                                   |
| `NumberOfSteps`                            | Gets or sets the NumberOfSteps.                                                                                                  |
| `NumberOfSubSteps`                         | Gets or sets the NumberOfSubSteps.                                                                                               |
| `NumericalDampingValue`                    | Gets or sets the NumericalDampingValue.                                                                                          |
| `NumLoadVectors`                           | Gets or sets the NumLoadVectors.                                                                                                 |
| `MaximumModesToFind`                       | Gets or sets the MaximumModesToFind.                                                                                             |
| `NumberOfZones`                            | Gets or sets the NumberOfZones.                                                                                                  |
| `AxisymmetryDivisions`                     | Gets or sets the AxisymmetryDivisions.                                                                                           |
| `HemicubeResolution`                       | Gets or sets the HemicubeResolution.                                                                                             |
| `FluxConvergence`                          | Gets or sets the FluxConvergence.                                                                                                |
| `MaximumIteration`                         | Gets or sets the MaximumIteration.                                                                                               |
| `OverRelaxation`                           | Gets or sets the OverRelaxation.                                                                                                 |
| `ReformulationTolerance`                   | Gets or sets the ReformulationTolerance.                                                                                         |
| `RestartAtLoadStep`                        | Gets the RestartAtLoadStep.                                                                                                      |
| `RestartAtSubstep`                         | Gets the RestartAtSubstep.                                                                                                       |
| `RestartAtTime`                            | Gets the RestartAtTime.                                                                                                          |
| `RpmClusterNumber`                         | Gets or sets the RpmClusterNumber.                                                                                               |
| `RpmSolutionIntervals`                     | Gets or sets the RpmSolutionIntervals.                                                                                           |
| `MaximumPointsToSavePerStep`               | Gets or sets the MaximumPointsToSavePerStep.                                                                                     |
| `SaveSpecifiedLoadStep`                    | Gets or sets the SaveSpecifiedLoadStep.                                                                                          |
| `LoadStepValue`                            | Gets or sets the LoadStepValue.                                                                                                  |
| `SignificanceThreshold`                    | Gets or sets the SignificanceThreshold.                                                                                          |
| `StabilizationDampingFactor`               | Gets or sets the StabilizationDampingFactor.                                                                                     |
| `StabilizationEnergyDissipationRatio`      | Gets or sets the StabilizationEnergyDissipationRatio.                                                                            |
| `StabilizationForceLimit`                  | Gets or sets the StabilizationForceLimit.                                                                                        |
| `TransientApplicationUserDefined`          | Gets or sets the TransientApplicationUserDefined.                                                                                |
| `SpringStiffnessFactor`                    | Gets or sets the SpringStiffnessFactor.                                                                                          |
| `RelaxationTemperature`                    | Gets or sets the RelaxationTemperature.                                                                                          |
| `Frequency`                                | Gets or sets the Frequency.                                                                                                      |
| `CentralFrequency`                         | Gets or sets the CentralFrequency.                                                                                               |
| `ChargeConvergenceMinimumReference`        | Gets or sets the ChargeConvergenceMinimumReference.                                                                              |
| `ChargeConvergenceValue`                   | Gets or sets the ChargeConvergenceValue.                                                                                         |
| `CurrentConvergenceMinimumReference`       | Gets or sets the CurrentConvergenceMinimumReference.                                                                             |
| `CurrentConvergenceValue`                  | Gets or sets the CurrentConvergenceValue.                                                                                        |
| `DisplacementConvergenceMinimumReference`  | Gets or sets the DisplacementConvergenceMinimumReference.                                                                        |
| `DisplacementConvergenceTolerance`         | Gets or sets the DisplacementConvergenceTolerance.                                                                               |
| `DisplacementConvergenceValue`             | Gets or sets the DisplacementConvergenceValue.                                                                                   |
| `EmagAMPSConvergenceMinimumReference`      | Gets or sets the EmagAMPSConvergenceMinimumReference.                                                                            |
| `EmagAMPSConvergenceValue`                 | Gets or sets the EmagAMPSConvergenceValue.                                                                                       |
| `EmagCSGConvergenceMinimumReference`       | Gets or sets the EmagCSGConvergenceMinimumReference.                                                                             |
| `EmagCSGConvergenceValue`                  | Gets or sets the EmagCSGConvergenceValue.                                                                                        |
| `EnergyConvergenceMinimumReference`        | Gets or sets the EnergyConvergenceMinimumReference.                                                                              |
| `EnergyConvergenceValue`                   | Gets or sets the EnergyConvergenceValue.                                                                                         |
| `ForceConvergenceMinimumReference`         | Gets or sets the ForceConvergenceMinimumReference.                                                                               |
| `ForceConvergenceTolerance`                | Gets or sets the ForceConvergenceTolerance.                                                                                      |
| `ForceConvergenceValue`                    | Gets or sets the ForceConvergenceValue.                                                                                          |
| `HeatConvergenceMinimumReference`          | Gets or sets the HeatConvergenceMinimumReference.                                                                                |
| `HeatConvergenceValue`                     | Gets or sets the HeatConvergenceValue.                                                                                           |
| `MomentConvergenceMinimumReference`        | Gets or sets the MomentConvergenceMinimumReference.                                                                              |
| `MomentConvergenceTolerance`               | Gets or sets the MomentConvergenceTolerance.                                                                                     |
| `MomentConvergenceValue`                   | Gets or sets the MomentConvergenceValue.                                                                                         |
| `RotationConvergenceMinimumReference`      | Gets or sets the RotationConvergenceMinimumReference.                                                                            |
| `RotationConvergenceTolerance`             | Gets or sets the RotationConvergenceTolerance.                                                                                   |
| `TemperatureConvergenceMinimumReference`   | Gets or sets the TemperatureConvergenceMinimumReference.                                                                         |
| `TemperatureConvergenceInputValue`         | Gets or sets the TemperatureConvergenceInputValue.                                                                               |
| `VoltageConvergenceMinimumReference`       | Gets or sets the VoltageConvergenceMinimumReference.                                                                             |
| `VoltageConvergenceValue`                  | Gets or sets the VoltageConvergenceValue.                                                                                        |
| `RemovalDirection`                         | Gets or sets the RemovalDirection.                                                                                               |
| `RemovalStepSize`                          | Gets or sets the RemovalStepSize.                                                                                                |
| `StepEndTime`                              | Gets or sets the StepEndTime.                                                                                                    |
| `MinimumElementSize`                       | Gets or sets the Minimum Element Size property for Geometry Based Adaptivity.                                                    |
| `RangeMaximum`                             | Gets or sets the Range Maximum property in Options group of Analysis Settings in Harmonic Analysis.                              |
| `RangeMinimum`                             | Gets or sets the Range Minimum property in Options group of Analysis Settings in Harmonic Analysis.                              |
| `KrylovSubspaceFrequency`                  | Gets or sets the KrylovSubspaceFrequency.                                                                                        |
| `ModalRangeMaximum`                        | Gets or sets the ModalRangeMaximum.                                                                                              |
| `ModalRangeMinimum`                        | Gets or sets the ModalRangeMinimum.                                                                                              |
| `InitialTimeStep`                          | Gets or sets the InitialTimeStep.                                                                                                |
| `SearchRangeMaximum`                       | Gets or sets the Range Maximum property in Options group of Analysis Settings in Modal Analysis.                                 |
| `MaximumTimeStep`                          | Gets or sets the MaximumTimeStep.                                                                                                |
| `SearchRangeMinimum`                       | Gets or sets the Range Minimum property in Options group of Analysis Settings in Modal Analysis.                                 |
| `MinimumTimeStep`                          | Gets or sets the MinimumTimeStep.                                                                                                |
| `BoundaryAngle`                            | Gets or sets the BoundaryAngle.                                                                                                  |
| `EdgeSplittingAngle`                       | Gets or sets the EdgeSplittingAngle.                                                                                             |
| `SolverTolerance`                          | Gets or sets the SolverTolerance.                                                                                                |
| `RpmValue`                                 | Gets or sets the RpmValue.                                                                                                       |
| `RpmCentralFrequency`                      | Gets or sets the RpmCentralFrequency.                                                                                            |
| `RpmRangeMaximum`                          | Gets or sets the RpmRangeMaximum.                                                                                                |
| `RpmRangeMinimum`                          | Gets or sets the RpmRangeMinimum.                                                                                                |
| `TimeStep`                                 | Gets or sets the TimeStep.                                                                                                       |
| `SpringStiffnessValue`                     | Gets or sets the SpringStiffnessValue.                                                                                           |
| `BaseRemovalType`                          | Gets or sets the BaseRemovalType.                                                                                                |
| `StiffnessCoefficientDefineBy`             | Gets or sets the StiffnessCoefficientDefineBy.                                                                                   |
| `CacheResultsInMemory`                     | Gets or sets the CacheResultsInMemory.                                                                                           |
| `ParticipationFactor`                      | Gets or sets the ParticipationFactor.                                                                                            |
| `StoreResultsAt`                           | Gets or sets the StoreResultsAt.                                                                                                 |
| `ConstantDamping`                          | Gets or sets the ConstantDamping.                                                                                                |
| `ContactSplit`                             | Gets or sets the ContactSplit.                                                                                                   |
| `ContactSummary`                           | Gets or sets the ContactSummary.                                                                                                 |
| `ChargeConvergence`                        | Gets or sets the ChargeConvergence.                                                                                              |
| `CurrentConvergence`                       | Gets or sets the CurrentConvergence.                                                                                             |
| `DisplacementConvergence`                  | Gets or sets the DisplacementConvergence.                                                                                        |
| `AMPSConvergence`                          | Gets or sets the AMPSConvergence.                                                                                                |
| `CSGConvergence`                           | Gets or sets the CSGConvergence.                                                                                                 |
| `EnergyConvergence`                        | Gets or sets the EnergyConvergence.                                                                                              |
| `ForceConvergence`                         | Gets or sets the ForceConvergence.                                                                                               |
| `HeatConvergence`                          | Gets or sets the HeatConvergence.                                                                                                |
| `MomentConvergence`                        | Gets or sets the MomentConvergence.                                                                                              |
| `RotationConvergence`                      | Gets or sets the RotationConvergence.                                                                                            |
| `TemperatureConvergence`                   | Gets or sets the TemperatureConvergence.                                                                                         |
| `TemperatureConvergenceValue`              | Gets or sets the TemperatureConvergenceValue.                                                                                    |
| `VoltageConvergence`                       | Gets or sets the VoltageConvergence.                                                                                             |
| `CoriolisEffectApplied`                    | Gets or sets the CoriolisEffectApplied.                                                                                          |
| `CreepEffects`                             | Gets or sets the CreepEffects.                                                                                                   |
| `HarmonicIndexRange`                       | Gets or sets the HarmonicIndexRange.                                                                                             |
| `DampingDefineBy`                          | Gets or sets the DampingDefineBy.                                                                                                |
| `FarFieldRadiationSurface`                 | Gets or sets the FarFieldRadiationSurface.                                                                                       |
| `ExpandResultsFrom`                        | Gets or sets the ExpandResultsFrom.                                                                                              |
| `FrequencySpacing`                         | Gets or sets the FrequencySpacing.                                                                                               |
| `FutureAnalysis`                           | Gets or sets the FutureAnalysis.                                                                                                 |
| `GeneralMiscellaneousOption`               | Gets or sets the GeneralMiscellaneousOption.                                                                                     |
| `MultistepType`                            | Gets or sets the MultistepType.                                                                                                  |
| `ModalFrequencyRange`                      | Gets or sets the ModalFrequencyRange.                                                                                            |
| `StoreResultsAtAllFrequencies`             | Gets or sets the StoreResultsAtAllFrequencies.                                                                                   |
| `SolutionMethod`                           | Gets or sets the SolutionMethod.                                                                                                 |
| `IncludeNegativeLoadMultiplier`            | Gets or sets the IncludeNegativeLoadMultiplier.                                                                                  |
| `LineSearch`                               | Gets or sets the LineSearch.                                                                                                     |
| `GenerateMeshRestartPoints`                | Gets or sets the GenerateMeshRestartPoints.                                                                                      |
| `MeshRetainFilesAfterFullSolve`            | Gets or sets the MeshRetainFilesAfterFullSolve.                                                                                  |
| `MeshSaveAtLoadStep`                       | Gets or sets the MeshSaveAtLoadStep.                                                                                             |
| `MeshSaveAtSubstep`                        | Gets or sets the MeshSaveAtSubstep.                                                                                              |
| `ModeReuse`                                | Gets or sets the ModeReuse.                                                                                                      |
| `ModesCombinationType`                     | Gets or sets the ModesCombinationType.                                                                                           |
| `ModeSelectionMethod`                      | Gets or sets the ModeSelectionMethod.                                                                                            |
| `OnDemandExpansionOption`                  | Gets or sets the OnDemandExpansionOption.                                                                                        |
| `NewtonRaphsonOption`                      | Gets or sets the NewtonRaphsonOption.                                                                                            |
| `NodalForces`                              | Gets or sets the NodalForces.                                                                                                    |
| `ProjectToGeometry`                        | Gets or sets the ProjectToGeometry.                                                                                              |
| `RefinementAlgorithm`                      | Gets or sets the RefinementAlgorithm.                                                                                            |
| `RemeshingGradient`                        | Gets or sets the RemeshingGradient.                                                                                              |
| `NonLinearFormulation`                     | Gets or sets the NonLinearFormulation.                                                                                           |
| `NumericalDamping`                         | Gets or sets the NumericalDamping.                                                                                               |
| `Expansion`                                | Gets the Expansion.                                                                                                              |
| `ViewFactorMethod`                         | Gets or sets the ViewFactorMethod.                                                                                               |
| `RadiositySolver`                          | Gets or sets the RadiositySolver.                                                                                                |
| `CombineRestartFiles`                      | Gets or sets the CombineRestartFiles.                                                                                            |
| `GenerateRestartPoints`                    | Gets or sets the GenerateRestartPoints.                                                                                          |
| `RetainFilesAfterFullSolve`                | Gets or sets the RetainFilesAfterFullSolve.                                                                                      |
| `RestartType`                              | Gets or sets the RestartType.                                                                                                    |
| `ResultFileCompression`                    | Gets or sets the ResultFileCompression.                                                                                          |
| `RpmFrequencySpacing`                      | Gets or sets the RpmFrequencySpacing.                                                                                            |
| `SaveAtLoadStep`                           | Gets or sets the SaveAtLoadStep.                                                                                                 |
| `SaveAtSubstep`                            | Gets or sets the SaveAtSubstep.                                                                                                  |
| `ScatteredFieldFormulation`                | Gets or sets the ScatteredFieldFormulation.                                                                                      |
| `ScatteringOutputType`                     | Gets or sets the ScatteringOutputType.                                                                                           |
| `SolverUnitSystem`                         | Gets or sets the SolverUnitSystem.                                                                                               |
| `SolverPivotChecking`                      | Gets or sets the SolverPivotChecking.                                                                                            |
| `SolverType`                               | Gets or sets the SolverType.                                                                                                     |
| `SolverUnits`                              | Gets or sets the SolverUnits.                                                                                                    |
| `SpectrumType`                             | Gets or sets the SpectrumType.                                                                                                   |
| `Stabilization`                            | Gets or sets the Stabilization.                                                                                                  |
| `StabilizationActivationForFirstSubstep`   | Gets or sets the StabilizationActivationForFirstSubstep.                                                                         |
| `StabilizationMethod`                      | Gets or sets the StabilizationMethod.                                                                                            |
| `StoreModalResults`                        | Gets or sets the StoreModalResults.                                                                                              |
| `DefineBy`                                 | Gets or sets the DefineBy.                                                                                                       |
| `TransientApplication`                     | Gets or sets the TransientApplication.                                                                                           |
| `UpdateViewFactor`                         | Gets or sets the specification for updating the view factor.                                                                     |
| `AutomaticTimeStepping`                    | Gets or sets the AutomaticTimeStepping.                                                                                          |
| `RetainModesymFileAfterSolve`              | Gets or sets the RetainModesymFileAfterSolve.                                                                                    |
| `WeakSprings`                              | Gets or sets the WeakSprings.                                                                                                    |
| `SpringStiffness`                          | Gets or sets the SpringStiffness.                                                                                                |
| `IgnoreAcousticDamping`                    | Gets or sets the IgnoreAcousticDamping.                                                                                          |
| `CalculateAcceleration`                    | Gets or sets the CalculateAcceleration.                                                                                          |
| `BackStress`                               | Gets or sets the BackStress.                                                                                                     |
| `ContactMiscellaneous`                     | Gets or sets the ContactMiscellaneous.                                                                                           |
| `CStarIntegral`                            | Gets or sets the CStarIntegral.                                                                                                  |
| `ElementCurrentDensity`                    | Gets or sets the ElementCurrentDensity.                                                                                          |
| `FieldIntensityandFluxDensity`             | Gets or sets the FieldIntensityandFluxDensity.                                                                                   |
| `ElectromagneticNodalForces`               | Gets or sets the ElectromagneticNodalForces.                                                                                     |
| `ContactData`                              | Gets or sets the ContactData.                                                                                                    |
| `CalculateVolumeEnergy`                    | Gets or sets the CalculateVolumeEnergy.                                                                                          |
| `NonlinearData`                            | Gets or sets the NonlinearData.                                                                                                  |
| `CalculateEnergy`                          | Gets or sets the CalculateEnergy.                                                                                                |
| `CalculateEulerAngles`                     | Gets or sets the CalculateEulerAngles.                                                                                           |
| `HeatGenerationRate`                       | Gets or sets the HeatGenerationRate.                                                                                             |
| `JIntegral`                                | Gets or sets the JIntegral.                                                                                                      |
| `MaterialForce`                            | Gets or sets the MaterialForce.                                                                                                  |
| `CalculateReactions`                       | Gets or sets the CalculateReactions.                                                                                             |
| `SIFS`                                     | Gets or sets the SIFS.                                                                                                           |
| `Strain`                                   | Gets or sets the Strain.                                                                                                         |
| `Stress`                                   | Gets or sets the Stress.                                                                                                         |
| `CalculateThermalFlux`                     | Gets or sets the CalculateThermalFlux.                                                                                           |
| `TStress`                                  | Gets or sets the TStress.                                                                                                        |
| `CalculateVelocity`                        | Gets or sets the CalculateVelocity.                                                                                              |
| `CalculateVelocityAndAcceleration`         | Gets or sets the CalculateVelocityAndAcceleration.                                                                               |
| `CampbellDiagram`                          | Gets or sets the CampbellDiagram.                                                                                                |
| `CarryOverTimeStep`                        | Gets or sets the CarryOverTimeStep.                                                                                              |
| `DeleteUnneededFiles`                      | Gets or sets the DeleteUnneededFiles.                                                                                            |
| `CyclicModeSuperposition`                  | Gets or sets the CyclicModeSuperposition.                                                                                        |
| `Damped`                                   | Gets or sets the Damped.                                                                                                         |
| `EqvDampingRatioFromModal`                 | Gets or sets the EqvDampingRatioFromModal.                                                                                       |
| `ExcludeInsignificantModes`                | Gets or sets the ExcludeInsignificantModes.                                                                                      |
| `ExportHighStrains`                        | Gets or sets the ExportHighStrains.                                                                                              |
| `ExportLayerEndTemperature`                | Gets or sets the ExportLayerEndTemperature.                                                                                      |
| `ExportRecoaterInterference`               | Gets or sets the ExportRecoaterInterference.                                                                                     |
| `FractureSolverControls`                   | Gets or sets the FractureSolverControls.                                                                                         |
| `GeneralMiscellaneous`                     | Gets or sets the GeneralMiscellaneous.                                                                                           |
| `ClusterResults`                           | Gets or sets the ClusterResults.                                                                                                 |
| `UserDefinedFrequencies`                   | Gets or sets the UserDefinedFrequencies.                                                                                         |
| `Multistep`                                | Gets or sets the Multistep.                                                                                                      |
| `IncludeResidualVector`                    | Gets or sets the IncludeResidualVector.                                                                                          |
| `InverseOption`                            | Gets or sets the InverseOption.                                                                                                  |
| `KeepModalResults`                         | Gets or sets the KeepModalResults.                                                                                               |
| `KeepPreStressLoadPattern`                 | Gets or sets the KeepPreStressLoadPattern.                                                                                       |
| `NonLinearSolution`                        | Gets the NonLinearSolution.                                                                                                      |
| `QuasiStaticSolution`                      | Gets or sets the QuasiStaticSolution.                                                                                            |
| `LimitSearchToRange`                       | Gets or sets the LimitSearchToRange.                                                                                             |
| `SaveMAPDLDB`                              | Gets or sets the SaveMAPDLDB.                                                                                                    |
| `StoreComplexSolution`                     | Gets or sets the StoreComplexSolution.                                                                                           |
| `InertiaRelief`                            | Gets or sets the InertiaRelief.                                                                                                  |
| `LargeDeflection`                          | Gets or sets the LargeDeflection.                                                                                                |
| `TimeIntegration`                          | Gets or sets the TimeIntegration.                                                                                                |
| `ElectricOnly`                             | Gets or sets the ElectricOnly.                                                                                                   |
| `StructuralOnly`                           | Gets or sets the StructuralOnly.                                                                                                 |
| `ThermalOnly`                              | Gets or sets the ThermalOnly.                                                                                                    |
| `DataModelObjectCategory`                  | Gets the current DataModelObject's category.                                                                                     |
| `Graph`                                    | Graph property.                                                                                                                  |
| `ScratchSolverFilesDirectory`              | Gets the ScratchSolverFilesDirectory.                                                                                            |
| `SolverFilesDirectory`                     | Gets the SolverFilesDirectory.                                                                                                   |
| `Children`                                 | Gets the list of children.                                                                                                       |
| `Comments`                                 | Gets the list of associated comments.                                                                                            |
| `Figures`                                  | Gets the list of associated figures.                                                                                             |
| `Images`                                   | Gets the list of associated images.                                                                                              |
| `InternalObject`                           | Gets the internal object. For advanced usage only.                                                                               |
| `Properties`                               | Gets the list of properties for this object.                                                                                     |
| `VisibleProperties`                        | Gets the list of properties that are visible for this object.                                                                    |

<a id="property-detail"></a>

## Property detail

### *property* ANSYSAnalysisSettings.StepName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Step Name.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.AMStepType *: [Ansys.Mechanical.DataModel.Enums.AMProcessStepType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AMProcessStepType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMProcessStepType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Process Step Type.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.AMSubstepsToApplyHeats *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Substeps to Apply Heat.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.AMSubstepsBetweenHeating *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Substeps Between Heating.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.AMCooldownNumberOfSubsteps *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Cooldown Number of Substeps.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CooldownTimeType *: [Ansys.Mechanical.DataModel.Enums.AMCooldownTimeType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AMCooldownTimeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMCooldownTimeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Cooldown Time Type.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CooldownTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Cooldown Time.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.LayersToBuild *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Layers to Build.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ReferenceTemperatureType *: [Ansys.Mechanical.DataModel.Enums.AMReferenceTemperatureType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AMReferenceTemperatureType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMReferenceTemperatureType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Reference Temperature Type.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ReferenceTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Reference Temperature.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RelaxationTemperatureType *: [Ansys.Mechanical.DataModel.Enums.AMRelaxationTemperatureType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AMRelaxationTemperatureType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMRelaxationTemperatureType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Relaxation Temperature Type.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.NumberOfRestartPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets Number of Restart Points.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CurrentRestartPoint *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Current Restart Point.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.AggressiveRemeshing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AggressiveRemeshing.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SpinSoftening *: [Ansys.Mechanical.DataModel.Enums.SpinSofteningType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SpinSofteningType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SpinSofteningType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpinSoftening.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.UserDefinedFrequencySteps *: System.Collections.Generic.IList[Ansys.Core.Units.Quantity] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UserDefinedFrequencySteps.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.OutputSelection *: [Ansys.Mechanical.DataModel.Enums.OutputSelection](../../../../Mechanical/DataModel/Enums/OutputSelection.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.OutputSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Output Selection property in the Output Controls group of Analysis Settings.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.NamedSelection *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../../../../../../v241/Ansys/ACT/Automation/Mechanical/NamedSelection.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NamedSelection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the objects of type NamedSelection to – Named Selection property in the Output Controls group of Analysis Settings.
If the OutputSelection != OutputSelection.NamedSelection,
1. NamedSelection cannot be set. An exception will be thrown saying “Cannot modify ANSYSAnalysisSettings.NamedSelection if ANSYSAnalysisSettings.OutputSelection is not set to “OutputSelection.NamedSelection”.”
2. Getting the NamedSelection value will return an empty list.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAnalysisSettings | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.MassCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MassCoefficient.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.StiffnessCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessCoefficient.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.DampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DampingRatio.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ConstantDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstantDampingRatio.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.StructuralDampingCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StructuralDampingCoefficient.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ContactSplitMaxNum *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSplitMaxNum.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ChargeConvergenceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChargeConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CurrentConvergenceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.EmagAMPSConvergenceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EmagAMPSConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.EmagCSGConvergenceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EmagCSGConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.EnergyConvergenceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.HeatConvergenceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HeatConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.TemperatureConvergenceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemperatureConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.VoltageConvergenceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VoltageConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CreepLimitRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CreepLimitRatio.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CurrentStepNumberHarmonic *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentStepNumberHarmonic.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CurrentStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentStepNumber.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.EngineOrderofExcitation *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EngineOrderofExcitation.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.MaximumHarmonicIndex *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumHarmonicIndex.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.MinimumHarmonicIndex *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumHarmonicIndex.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.HarmonicIndexInterval *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndexInterval.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ClusterNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ClusterNumber.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SolutionIntervals *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionIntervals.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.KrylovSubspaceDimension *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KrylovSubspaceDimension.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.KrylovResidualTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KrylovResidualTolerance.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.HarmonicOrders *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicOrders.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.InitialSubsteps *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialSubsteps.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.InverseOptionEndStep *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InverseOptionEndStep.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.MaximumSubsteps *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumSubsteps.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.MeshLoadStepValue *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshLoadStepValue.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.MinimumSubsteps *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumSubsteps.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ModalNumberOfPoints *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalNumberOfPoints.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ModeSignificanceLevel *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeSignificanceLevel.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.GlobalSizeRatioQualityImprovement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalSizeRatioQualityImprovement.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.GlobalSizeRatioQualityRefinement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalSizeRatioQualityRefinement.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.NumberOfSculptedLayersQualityImprovement *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSculptedLayersQualityImprovement.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.NumberOfSculptedLayersRefinement *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSculptedLayersRefinement.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RemeshingToleranceQualityImprovement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshingToleranceQualityImprovement.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RemeshingToleranceRefinement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshingToleranceRefinement.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.StoreResulsAtValue *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreResulsAtValue.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.NumberOfModesToUse *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfModesToUse.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.NumberOfRPMs *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfRPMs.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.NumberOfSteps *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSteps.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.NumberOfSubSteps *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSubSteps.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.NumericalDampingValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumericalDampingValue.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.NumLoadVectors *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumLoadVectors.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.MaximumModesToFind *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumModesToFind.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.NumberOfZones *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfZones.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.AxisymmetryDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AxisymmetryDivisions.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.HemicubeResolution *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HemicubeResolution.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.FluxConvergence *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluxConvergence.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.MaximumIteration *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumIteration.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.OverRelaxation *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OverRelaxation.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ReformulationTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReformulationTolerance.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RestartAtLoadStep *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RestartAtLoadStep.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RestartAtSubstep *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RestartAtSubstep.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RestartAtTime *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RestartAtTime.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RpmClusterNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmClusterNumber.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RpmSolutionIntervals *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmSolutionIntervals.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.MaximumPointsToSavePerStep *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumPointsToSavePerStep.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SaveSpecifiedLoadStep *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveSpecifiedLoadStep.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.LoadStepValue *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepValue.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SignificanceThreshold *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SignificanceThreshold.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.StabilizationDampingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationDampingFactor.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.StabilizationEnergyDissipationRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationEnergyDissipationRatio.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.StabilizationForceLimit *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationForceLimit.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.TransientApplicationUserDefined *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransientApplicationUserDefined.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SpringStiffnessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringStiffnessFactor.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RelaxationTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelaxationTemperature.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CentralFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CentralFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ChargeConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChargeConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ChargeConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChargeConvergenceValue.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CurrentConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CurrentConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentConvergenceValue.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.DisplacementConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplacementConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.DisplacementConvergenceTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplacementConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.DisplacementConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplacementConvergenceValue.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.EmagAMPSConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EmagAMPSConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.EmagAMPSConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EmagAMPSConvergenceValue.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.EmagCSGConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EmagCSGConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.EmagCSGConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EmagCSGConvergenceValue.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.EnergyConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.EnergyConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyConvergenceValue.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ForceConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ForceConvergenceTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ForceConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceConvergenceValue.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.HeatConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HeatConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.HeatConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HeatConvergenceValue.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.MomentConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MomentConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.MomentConvergenceTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MomentConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.MomentConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MomentConvergenceValue.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RotationConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RotationConvergenceTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.TemperatureConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemperatureConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.TemperatureConvergenceInputValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemperatureConvergenceInputValue.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.VoltageConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VoltageConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.VoltageConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VoltageConvergenceValue.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RemovalDirection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemovalDirection.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RemovalStepSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemovalStepSize.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.StepEndTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepEndTime.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.MinimumElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Minimum Element Size property for Geometry Based Adaptivity.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Range Maximum property in Options group of Analysis Settings in Harmonic Analysis.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Range Minimum property in Options group of Analysis Settings in Harmonic Analysis.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.KrylovSubspaceFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KrylovSubspaceFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ModalRangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalRangeMaximum.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ModalRangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalRangeMinimum.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.InitialTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialTimeStep.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SearchRangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Range Maximum property in Options group of Analysis Settings in Modal Analysis.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.MaximumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumTimeStep.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SearchRangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Range Minimum property in Options group of Analysis Settings in Modal Analysis.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.MinimumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumTimeStep.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.BoundaryAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryAngle.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.EdgeSplittingAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeSplittingAngle.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SolverTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverTolerance.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RpmValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmValue.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RpmCentralFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmCentralFrequency.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RpmRangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmRangeMaximum.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RpmRangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmRangeMinimum.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.TimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeStep.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SpringStiffnessValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringStiffnessValue.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.BaseRemovalType *: [Ansys.Mechanical.DataModel.Enums.AMBaseRemovalType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AMBaseRemovalType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMBaseRemovalType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BaseRemovalType.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.StiffnessCoefficientDefineBy *: [Ansys.Mechanical.DataModel.Enums.DampingType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DampingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessCoefficientDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CacheResultsInMemory *: [Ansys.Mechanical.DataModel.Enums.CacheResultsInMemory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/CacheResultsInMemory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CacheResultsInMemory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CacheResultsInMemory.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ParticipationFactor *: [Ansys.Mechanical.DataModel.Enums.CalculateParticipationFactorResult](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/CalculateParticipationFactorResult.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CalculateParticipationFactorResult) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ParticipationFactor.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.StoreResultsAt *: [Ansys.Mechanical.DataModel.Enums.TimePointsOptions](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TimePointsOptions.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TimePointsOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreResultsAt.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ConstantDamping *: [Ansys.Mechanical.DataModel.Enums.ConstantDampingType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ConstantDampingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConstantDampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstantDamping.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ContactSplit *: [Ansys.Mechanical.DataModel.Enums.ContactSplitType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactSplitType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactSplitType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSplit.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ContactSummary *: [Ansys.Mechanical.DataModel.Enums.ContactSummaryType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ContactSummaryType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactSummaryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSummary.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ChargeConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChargeConvergence.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CurrentConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentConvergence.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.DisplacementConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplacementConvergence.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.AMPSConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AMPSConvergence.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CSGConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CSGConvergence.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.EnergyConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyConvergence.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ForceConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceConvergence.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.HeatConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HeatConvergence.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.MomentConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MomentConvergence.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RotationConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationConvergence.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.TemperatureConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemperatureConvergence.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.TemperatureConvergenceValue *: [Ansys.Mechanical.DataModel.Enums.NonLinearValueType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/NonLinearValueType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NonLinearValueType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemperatureConvergenceValue.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.VoltageConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VoltageConvergence.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CoriolisEffectApplied *: [Ansys.Mechanical.DataModel.Enums.CoriolisEffectType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/CoriolisEffectType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CoriolisEffectType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoriolisEffectApplied.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CreepEffects *: [Ansys.Mechanical.DataModel.Enums.Creep](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/Creep.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.Creep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CreepEffects.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.HarmonicIndexRange *: [Ansys.Mechanical.DataModel.Enums.CyclicHarmonicIndex](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/CyclicHarmonicIndex.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CyclicHarmonicIndex) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndexRange.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.DampingDefineBy *: [Ansys.Mechanical.DataModel.Enums.DampingDefineBy](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DampingDefineBy.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DampingDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DampingDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.FarFieldRadiationSurface *: [Ansys.Mechanical.DataModel.Enums.FarFieldRadiationSurfaceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/FarFieldRadiationSurfaceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FarFieldRadiationSurfaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FarFieldRadiationSurface.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ExpandResultsFrom *: [Ansys.Mechanical.DataModel.Enums.ExpandResultFrom](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ExpandResultFrom.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExpandResultFrom) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExpandResultsFrom.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.FrequencySpacing *: [Ansys.Mechanical.DataModel.Enums.FrequencySpacingType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/FrequencySpacingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FrequencySpacingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencySpacing.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.FutureAnalysis *: [Ansys.Mechanical.DataModel.Enums.FutureIntentType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/FutureIntentType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FutureIntentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FutureAnalysis.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.GeneralMiscellaneousOption *: [Ansys.Mechanical.DataModel.Enums.GeneralMiscellaneousOptionType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/GeneralMiscellaneousOptionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeneralMiscellaneousOptionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneralMiscellaneousOption.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.MultistepType *: [Ansys.Mechanical.DataModel.Enums.HarmonicMultiStepType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/HarmonicMultiStepType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.HarmonicMultiStepType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultistepType.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ModalFrequencyRange *: [Ansys.Mechanical.DataModel.Enums.ModalFrequencyRangeType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ModalFrequencyRangeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ModalFrequencyRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalFrequencyRange.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.StoreResultsAtAllFrequencies *: [Ansys.Mechanical.DataModel.Enums.HarmonicMSUPStorage](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/HarmonicMSUPStorage.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.HarmonicMSUPStorage) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreResultsAtAllFrequencies.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SolutionMethod *: [Ansys.Mechanical.DataModel.Enums.HarmonicMethod](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/HarmonicMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.HarmonicMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionMethod.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.IncludeNegativeLoadMultiplier *: [Ansys.Mechanical.DataModel.Enums.SolverControlsIncludeNegativeLoadMultiplier](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolverControlsIncludeNegativeLoadMultiplier.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolverControlsIncludeNegativeLoadMultiplier) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IncludeNegativeLoadMultiplier.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.LineSearch *: [Ansys.Mechanical.DataModel.Enums.LineSearchType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LineSearchType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LineSearchType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LineSearch.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.GenerateMeshRestartPoints *: [Ansys.Mechanical.DataModel.Enums.MeshRestartControlsType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MeshRestartControlsType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshRestartControlsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateMeshRestartPoints.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.MeshRetainFilesAfterFullSolve *: [Ansys.Mechanical.DataModel.Enums.MeshRestartRetainFilesType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MeshRestartRetainFilesType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshRestartRetainFilesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshRetainFilesAfterFullSolve.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.MeshSaveAtLoadStep *: [Ansys.Mechanical.DataModel.Enums.MeshRestartSaveAtLoadStep](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MeshRestartSaveAtLoadStep.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshRestartSaveAtLoadStep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshSaveAtLoadStep.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.MeshSaveAtSubstep *: [Ansys.Mechanical.DataModel.Enums.MeshRestartSaveAtSubstep](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/MeshRestartSaveAtSubstep.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshRestartSaveAtSubstep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshSaveAtSubstep.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ModeReuse *: [Ansys.Mechanical.DataModel.Enums.SolverControlsModeReuse](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolverControlsModeReuse.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolverControlsModeReuse) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeReuse.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ModesCombinationType *: [Ansys.Mechanical.DataModel.Enums.ModesCombinationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ModesCombinationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ModesCombinationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModesCombinationType.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ModeSelectionMethod *: [Ansys.Mechanical.DataModel.Enums.ModeSelectionMethod](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ModeSelectionMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ModeSelectionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeSelectionMethod.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.OnDemandExpansionOption *: [Ansys.Mechanical.DataModel.Enums.OnDemandExpansionType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/OnDemandExpansionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.OnDemandExpansionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OnDemandExpansionOption.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.NewtonRaphsonOption *: [Ansys.Mechanical.DataModel.Enums.NewtonRaphsonType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/NewtonRaphsonType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NewtonRaphsonType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NewtonRaphsonOption.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.NodalForces *: [Ansys.Mechanical.DataModel.Enums.OutputControlsNodalForcesType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/OutputControlsNodalForcesType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.OutputControlsNodalForcesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodalForces.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ProjectToGeometry *: [Ansys.Mechanical.DataModel.Enums.NLADControlProjectToGeometry](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/NLADControlProjectToGeometry.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NLADControlProjectToGeometry) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProjectToGeometry.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RefinementAlgorithm *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityControlsRefinementAlgorithmType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/NonlinearAdaptivityControlsRefinementAlgorithmType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityControlsRefinementAlgorithmType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RefinementAlgorithm.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RemeshingGradient *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityControlsRemeshingGradientType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/NonlinearAdaptivityControlsRemeshingGradientType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityControlsRemeshingGradientType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshingGradient.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.NonLinearFormulation *: [Ansys.Mechanical.DataModel.Enums.NonLinearFormulationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/NonLinearFormulationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NonLinearFormulationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonLinearFormulation.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.NumericalDamping *: [Ansys.Mechanical.DataModel.Enums.TransientDampingType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TransientDampingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TransientDampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumericalDamping.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.Expansion *: [Ansys.Mechanical.DataModel.Enums.ExpandResultsSubType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ExpandResultsSubType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExpandResultsSubType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Expansion.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ViewFactorMethod *: [Ansys.Mechanical.DataModel.Enums.RadiosityViewFactorType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RadiosityViewFactorType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RadiosityViewFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ViewFactorMethod.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RadiositySolver *: [Ansys.Mechanical.DataModel.Enums.RadiositySolverType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RadiositySolverType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RadiositySolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadiositySolver.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CombineRestartFiles *: [Ansys.Mechanical.DataModel.Enums.CombineRestartFilesType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/CombineRestartFilesType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CombineRestartFilesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CombineRestartFiles.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.GenerateRestartPoints *: [Ansys.Mechanical.DataModel.Enums.RestartControlsType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RestartControlsType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RestartControlsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateRestartPoints.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RetainFilesAfterFullSolve *: [Ansys.Mechanical.DataModel.Enums.RestartRetainFilesType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RestartRetainFilesType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RestartRetainFilesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RetainFilesAfterFullSolve.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RestartType *: [Ansys.Mechanical.DataModel.Enums.RestartType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RestartType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RestartType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RestartType.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ResultFileCompression *: [Ansys.Mechanical.DataModel.Enums.ResultFileCompressionType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ResultFileCompressionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileCompressionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultFileCompression.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RpmFrequencySpacing *: [Ansys.Mechanical.DataModel.Enums.FrequencySpacingType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/FrequencySpacingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FrequencySpacingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmFrequencySpacing.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SaveAtLoadStep *: [Ansys.Mechanical.DataModel.Enums.RestartSaveAtLoadStep](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RestartSaveAtLoadStep.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RestartSaveAtLoadStep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveAtLoadStep.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SaveAtSubstep *: [Ansys.Mechanical.DataModel.Enums.RestartSaveAtSubstep](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/RestartSaveAtSubstep.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RestartSaveAtSubstep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveAtSubstep.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ScatteredFieldFormulation *: [Ansys.Mechanical.DataModel.Enums.ScatteredFieldFormulation](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ScatteredFieldFormulation.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ScatteredFieldFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScatteredFieldFormulation.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ScatteringOutputType *: [Ansys.Mechanical.DataModel.Enums.ScatteringOutputType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ScatteringOutputType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ScatteringOutputType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScatteringOutputType.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SolverPivotChecking *: [Ansys.Mechanical.DataModel.Enums.SolverPivotChecking](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolverPivotChecking.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolverPivotChecking) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverPivotChecking.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SolverType *: [Ansys.Mechanical.DataModel.Enums.SolverType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolverType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverType.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SolverUnitsControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnits.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SpectrumType *: [Ansys.Mechanical.DataModel.Enums.SpectrumType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SpectrumType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SpectrumType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpectrumType.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.Stabilization *: [Ansys.Mechanical.DataModel.Enums.StabilizationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/StabilizationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StabilizationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Stabilization.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.StabilizationActivationForFirstSubstep *: [Ansys.Mechanical.DataModel.Enums.StabilizationFirstSubstepOption](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/StabilizationFirstSubstepOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StabilizationFirstSubstepOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationActivationForFirstSubstep.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.StabilizationMethod *: [Ansys.Mechanical.DataModel.Enums.StabilizationMethod](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/StabilizationMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StabilizationMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationMethod.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.StoreModalResults *: [Ansys.Mechanical.DataModel.Enums.StoreModalResult](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/StoreModalResult.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StoreModalResult) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreModalResults.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.DefineBy *: [Ansys.Mechanical.DataModel.Enums.TimeStepDefineByType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TimeStepDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TimeStepDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.TransientApplication *: [Ansys.Mechanical.DataModel.Enums.TransientApplicationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TransientApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TransientApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransientApplication.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.UpdateViewFactor *: [Ansys.Mechanical.DataModel.Enums.UpdateViewFactor](../../../../Mechanical/DataModel/Enums/UpdateViewFactor.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.UpdateViewFactor) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the specification for updating the view factor.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.AutomaticTimeStepping *: [Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AutomaticTimeStepping.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticTimeStepping.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RetainModesymFileAfterSolve *: [Ansys.Mechanical.DataModel.Enums.UseExistingModesymFile](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/UseExistingModesymFile.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.UseExistingModesymFile) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RetainModesymFileAfterSolve.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.WeakSprings *: [Ansys.Mechanical.DataModel.Enums.WeakSpringsType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/WeakSpringsType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WeakSpringsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeakSprings.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SpringStiffness *: [Ansys.Mechanical.DataModel.Enums.SpringsStiffnessType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/SpringsStiffnessType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SpringsStiffnessType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringStiffness.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.IgnoreAcousticDamping *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IgnoreAcousticDamping.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CalculateAcceleration *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateAcceleration.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.BackStress *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BackStress.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ContactMiscellaneous *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactMiscellaneous.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CStarIntegral *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CStarIntegral.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ElementCurrentDensity *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementCurrentDensity.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.FieldIntensityandFluxDensity *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FieldIntensityandFluxDensity.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ElectromagneticNodalForces *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectromagneticNodalForces.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ContactData *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactData.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CalculateVolumeEnergy *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateVolumeEnergy.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.NonlinearData *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonlinearData.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CalculateEnergy *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateEnergy.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CalculateEulerAngles *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateEulerAngles.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.HeatGenerationRate *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HeatGenerationRate.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.JIntegral *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the JIntegral.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.MaterialForce *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialForce.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CalculateReactions *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateReactions.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SIFS *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SIFS.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.Strain *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Strain.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.Stress *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Stress.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CalculateThermalFlux *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateThermalFlux.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.TStress *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TStress.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CalculateVelocity *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateVelocity.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CalculateVelocityAndAcceleration *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateVelocityAndAcceleration.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CampbellDiagram *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CampbellDiagram.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CarryOverTimeStep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CarryOverTimeStep.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.DeleteUnneededFiles *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeleteUnneededFiles.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CyclicModeSuperposition *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicModeSuperposition.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.Damped *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Damped.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.EqvDampingRatioFromModal *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EqvDampingRatioFromModal.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ExcludeInsignificantModes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExcludeInsignificantModes.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ExportHighStrains *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportHighStrains.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ExportLayerEndTemperature *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportLayerEndTemperature.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ExportRecoaterInterference *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportRecoaterInterference.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.FractureSolverControls *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureSolverControls.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.GeneralMiscellaneous *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneralMiscellaneous.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ClusterResults *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ClusterResults.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.UserDefinedFrequencies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UserDefinedFrequencies.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.Multistep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Multistep.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.IncludeResidualVector *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IncludeResidualVector.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.InverseOption *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InverseOption.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.KeepModalResults *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KeepModalResults.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.KeepPreStressLoadPattern *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KeepPreStressLoadPattern.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.NonLinearSolution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NonLinearSolution.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.QuasiStaticSolution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the QuasiStaticSolution.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.LimitSearchToRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitSearchToRange.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SaveMAPDLDB *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveMAPDLDB.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.StoreComplexSolution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreComplexSolution.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.InertiaRelief *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InertiaRelief.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.LargeDeflection *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LargeDeflection.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.TimeIntegration *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeIntegration.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ElectricOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricOnly.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.StructuralOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StructuralOnly.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ThermalOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalOnly.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.Graph *: [Ansys.Mechanical.Graphics.AnalysisSettingsGraph](../../../../../../v241/Ansys/Mechanical/Graphics/AnalysisSettingsGraph.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnalysisSettingsGraph) | [None](https://docs.python.org/3/library/constants.html#None)*

Graph property.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ScratchSolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScratchSolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### ANSYSAnalysisSettings.GetStepEndTime(stepNumber: System.UInt32)

Gets the Step End Time at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetStepEndTime(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Step End Time for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetAutomaticTimeStepping(stepNumber: System.UInt32)

Gets the Automatic Time Stepping at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetAutomaticTimeStepping(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/AutomaticTimeStepping.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping))

Sets the Automatic Time Stepping for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetForceConvergenceType(stepNumber: System.UInt32)

Gets the Force Convergence Tolerance Type at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetForceConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType))

Sets the Force Convergence Tolerance Type for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetForceConvergenceTolerance(stepNumber: System.UInt32)

Gets the Force Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetForceConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

```text
Sets the Force Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the "value" argument should be set to 5.
```

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetForceConvergenceValue(stepNumber: System.UInt32)

Gets the Force Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetForceConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Force Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetForceConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Force Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetForceConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Force Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetMomentConvergenceType(stepNumber: System.UInt32)

Gets the Moment Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetMomentConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType))

Sets the Moment Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetMomentConvergenceTolerance(stepNumber: System.UInt32)

Gets the Moment Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetMomentConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

```text
Sets the Moment Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the "value" argument should be set to 5.
```

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetMomentConvergenceValue(stepNumber: System.UInt32)

Gets the Moment Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetMomentConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Moment Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetMomentConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Moment Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetMomentConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Moment Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetDisplacementConvergenceType(stepNumber: System.UInt32)

Gets the Displacement Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetDisplacementConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType))

Sets the Displacement Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetDisplacementConvergenceTolerance(stepNumber: System.UInt32)

Gets the Displacement Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetDisplacementConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

```text
Sets the Displacement Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the "value" argument should be set to 5.
```

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetDisplacementConvergenceValue(stepNumber: System.UInt32)

Gets the Displacement Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetDisplacementConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Displacement Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetDisplacementConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Displacement Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetDisplacementConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Displacement Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetRotationConvergenceType(stepNumber: System.UInt32)

Gets the Rotation Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetRotationConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType))

Sets the Rotation Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetRotationConvergenceTolerance(stepNumber: System.UInt32)

Gets the Rotation Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetRotationConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

```text
Sets the Rotation Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the "value" argument should be set to 5.
```

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetRotationConvergenceValue(stepNumber: System.UInt32)

Gets the Rotation Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetRotationConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Rotation Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetRotationConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Rotation Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetRotationConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Rotation Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetTemperatureConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType))

Sets the Temperature Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetTemperatureConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

```text
Sets the Temperature Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the "value" argument should be set to 5.
```

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetTemperatureConvergenceValue(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.NonLinearValueType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/NonLinearValueType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NonLinearValueType))

Sets the Temperature Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetTemperatureConvergenceInputValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Temperature Convergence Input Value for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetTemperatureConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Temperature Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetHeatConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType))

Sets the Heat Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetHeatConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

```text
Sets the Heat Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the "value" argument should be set to 5.
```

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetHeatConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Heat Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetHeatConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Heat Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetVoltageConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType))

Sets the Voltage Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetVoltageConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

```text
Sets the Voltage Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the "value" argument should be set to 5.
```

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetVoltageConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Voltage Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetVoltageConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Voltage Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetChargeConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType))

Sets the Charge Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetChargeConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

```text
Sets the Charge Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the "value" argument should be set to 5.
```

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetChargeConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Charge Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetChargeConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Charge Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetEnergyConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType))

Sets the Energy Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetEnergyConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

```text
Sets the Energy Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the "value" argument should be set to 5.
```

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetEnergyConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Energy Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetEnergyConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Energy Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetCurrentConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType))

Sets the Current Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetCurrentConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

```text
Sets the Current Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the "value" argument should be set to 5.
```

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetCurrentConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Current Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetCurrentConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Current Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetEmagAMPSConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType))

Sets the EmagAMPS Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetEmagAMPSConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

```text
Sets the EmagAMPS Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the "value" argument should be set to 5.
```

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetEmagAMPSConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the EmagAMPS Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetEmagAMPSConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the EmagAMPS Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetEmagCSGConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType))

Sets the EmagCSG Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetEmagCSGConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

```text
Sets the EmagCSG Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the "value" argument should be set to 5.
```

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetEmagCSGConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the EmagCSG Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetEmagCSGConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the EmagCSG Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetTemperatureConvergenceType(stepNumber: System.UInt32)

Gets the Temperature Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetTemperatureConvergenceTolerance(stepNumber: System.UInt32)

Gets the Temperature Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetTemperatureConvergenceValue(stepNumber: System.UInt32)

Gets the Temperature Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetTemperatureConvergenceInputValue(stepNumber: System.UInt32)

Gets the Temperature Convergence Input Value at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetTemperatureConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Temperature Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetHeatConvergenceType(stepNumber: System.UInt32)

Gets the Heat Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetHeatConvergenceTolerance(stepNumber: System.UInt32)

Gets the Heat Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetHeatConvergenceValue(stepNumber: System.UInt32)

Gets the Heat Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetHeatConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Heat Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetVoltageConvergenceType(stepNumber: System.UInt32)

Gets the Voltage Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetVoltageConvergenceTolerance(stepNumber: System.UInt32)

Gets the Voltage Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetVoltageConvergenceValue(stepNumber: System.UInt32)

Gets the Voltage Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetVoltageConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Voltage Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetCurrentConvergenceType(stepNumber: System.UInt32)

Gets the Current Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetCurrentConvergenceTolerance(stepNumber: System.UInt32)

Gets the Current Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetCurrentConvergenceValue(stepNumber: System.UInt32)

Gets the Current Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetCurrentConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Current Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetEmagAMPSConvergenceType(stepNumber: System.UInt32)

Gets the EmagAMPS Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetEmagAMPSConvergenceTolerance(stepNumber: System.UInt32)

Gets the EmagAMPS Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetEmagAMPSConvergenceValue(stepNumber: System.UInt32)

Gets the EmagAMPS Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetEmagAMPSConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the EmagAMPS Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetEmagCSGConvergenceType(stepNumber: System.UInt32)

Gets the EmagCSG Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetEmagCSGConvergenceTolerance(stepNumber: System.UInt32)

Gets the EmagCSG Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetEmagCSGConvergenceValue(stepNumber: System.UInt32)

Gets the EmagCSG Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetEmagCSGConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the EmagCSG Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetEnergyConvergenceType(stepNumber: System.UInt32)

Gets the Energy Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetEnergyConvergenceTolerance(stepNumber: System.UInt32)

Gets the Energy Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetEnergyConvergenceValue(stepNumber: System.UInt32)

Gets the Energy Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetEnergyConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Energy Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetLineSearch(stepNumber: System.UInt32)

Gets the Line Search at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetLineSearch(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.LineSearchType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LineSearchType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LineSearchType))

Sets the Line Search for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetStabilization(stepNumber: System.UInt32)

Gets the Stabilization at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetStabilization(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.StabilizationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/StabilizationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StabilizationType))

Sets the Stabilization for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetStabilizationMethod(stepNumber: System.UInt32)

Gets the Stabilization Method at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetStabilizationMethod(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.StabilizationMethod](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/StabilizationMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StabilizationMethod))

Sets the Stabilization Method for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetStabilizationEnergyDissipationRatio(stepNumber: System.UInt32)

Gets the Stabilization Energy Dissipation Ratio at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetStabilizationEnergyDissipationRatio(stepNumber: System.UInt32, value: System.Double)

Sets the Stabilization Energy Dissipation Ratio for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetStabilizationDampingFactor(stepNumber: System.UInt32)

Gets the Stabilization Damping Factor at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetStabilizationDampingFactor(stepNumber: System.UInt32, value: System.Double)

Sets the Stabilization Damping Factor for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetStabilizationFirstSubstepOption(stepNumber: System.UInt32)

Gets the Stabilization First Substep Option at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetStabilizationFirstSubstepOption(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.StabilizationFirstSubstepOption](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/StabilizationFirstSubstepOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StabilizationFirstSubstepOption))

Sets the Stabilization First Substep Option for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetStabilizationForceLimit(stepNumber: System.UInt32)

Gets the Stabilization Force Limit at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetStabilizationForceLimit(stepNumber: System.UInt32, value: System.Double)

Sets the Stabilization Force Limit for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetStoreResultsAt(stepNumber: System.UInt32)

Gets the Store Results At at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetStoreResultsAt(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.TimePointsOptions](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TimePointsOptions.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TimePointsOptions))

Sets the Store Results At for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetStoreResulsAtValue(stepNumber: System.UInt32)

Gets the Store Results At Value at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetStoreResulsAtValue(stepNumber: System.UInt32, value: System.UInt32)

Sets the Store Results At Value for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetDefineBy(stepNumber: System.UInt32)

Gets the Define By at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetDefineBy(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.TimeStepDefineByType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/TimeStepDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TimeStepDefineByType))

Sets the Define By for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetCarryOverTimeStep(stepNumber: System.UInt32)

Gets the Carry Over Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetCarryOverTimeStep(stepNumber: System.UInt32, value: System.Boolean)

Sets the Carry Over Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetInitialTimeStep(stepNumber: System.UInt32)

Gets the Initial Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetInitialTimeStep(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Initial Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetMinimumTimeStep(stepNumber: System.UInt32)

Gets the Minimum Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetMinimumTimeStep(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Minimum Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetMaximumTimeStep(stepNumber: System.UInt32)

Gets the Maximum Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetMaximumTimeStep(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Maximum Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetInitialSubsteps(stepNumber: System.UInt32)

Gets the Initial Substeps at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetInitialSubsteps(stepNumber: System.UInt32, value: System.UInt32)

Sets the Initial Substeps for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetMinimumSubsteps(stepNumber: System.UInt32)

Gets the Minimum Substeps at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetMinimumSubsteps(stepNumber: System.UInt32, value: System.UInt32)

Sets the Minimum Substeps for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetMaximumSubsteps(stepNumber: System.UInt32)

Gets the Maximum Substeps at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetMaximumSubsteps(stepNumber: System.UInt32, value: System.UInt32)

Sets the Maximum Substeps for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetNumberOfSubSteps(stepNumber: System.UInt32, value: System.UInt32)

Sets the Number of Substeps for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetNumberOfSubSteps(stepNumber: System.UInt32)

Gets the Number of Substeps for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetTimeStep(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetTimeStep(stepNumber: System.UInt32)

Sets the Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetTimeIntegration(stepNumber: System.UInt32, value: System.Boolean)

Sets the TimeIntegration for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetStructuralOnly(stepNumber: System.UInt32, value: System.Boolean)

Sets the TimeIntegration Structural for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetThermalOnly(stepNumber: System.UInt32, value: System.Boolean)

Sets the TimeIntegration Thermal for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetTimeIntegration(stepNumber: System.UInt32)

Gets the TimeIntegration for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetStructuralOnly(stepNumber: System.UInt32)

Gets the TimeIntegration Structural for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetThermalOnly(stepNumber: System.UInt32)

Sets the TimeIntegration Thermal for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetStepName(stepNumber: System.UInt32)

Gets the Step name at a given step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetStepName(stepNumber: System.UInt32, value: System.String)

Sets the Step name at a given step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetAMStepType(stepNumber: System.UInt32)

Gets the AM Process Step Type at a given step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

CopyTo method.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetCreepEffects(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.Creep](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/Creep.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.Creep))

Sets the Creep Effects for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetCreepEffects(stepNumber: System.UInt32)

Gets the Creep Effects for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetCreepLimitRatio(stepNumber: System.UInt32, value: System.Double)

Sets the Creep Limit Ratio for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetCreepLimitRatio(stepNumber: System.UInt32)

Gets the Creep Limit Ratio for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.DeleteAllRestartPoints()

DeleteAllRestartPoints method.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

