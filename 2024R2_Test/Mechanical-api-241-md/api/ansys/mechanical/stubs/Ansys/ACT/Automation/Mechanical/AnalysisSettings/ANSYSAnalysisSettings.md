<a id="ansysanalysissettings"></a>

# ANSYSAnalysisSettings

<a id="ANSYSAnalysisSettings"></a>

### *class* ANSYSAnalysisSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ANSYSAnalysisSettings.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| [`GetStepEndTime`](#ANSYSAnalysisSettings.GetStepEndTime)                                                         | Gets the Step End Time at a given solution step.                                       |
|-------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [`SetStepEndTime`](#ANSYSAnalysisSettings.SetStepEndTime)                                                         | Sets the Step End Time for a given solution step.                                      |
| [`GetAutomaticTimeStepping`](#ANSYSAnalysisSettings.GetAutomaticTimeStepping)                                     | Gets the Automatic Time Stepping at a given solution step.                             |
| [`SetAutomaticTimeStepping`](#ANSYSAnalysisSettings.SetAutomaticTimeStepping)                                     | Sets the Automatic Time Stepping for a given solution step.                            |
| [`GetForceConvergenceType`](#ANSYSAnalysisSettings.GetForceConvergenceType)                                       | Gets the Force Convergence Tolerance Type at a given solution step.                    |
| [`SetForceConvergenceType`](#ANSYSAnalysisSettings.SetForceConvergenceType)                                       | Sets the Force Convergence Tolerance Type for a given solution step.                   |
| [`GetForceConvergenceTolerance`](#ANSYSAnalysisSettings.GetForceConvergenceTolerance)                             | Gets the Force Convergence Tolerance as a percentage at a given solution step.         |
| [`SetForceConvergenceTolerance`](#ANSYSAnalysisSettings.SetForceConvergenceTolerance)                             | Sets the Force Convergence Tolerance as a percentage for a given solution step.        |
| [`GetForceConvergenceValue`](#ANSYSAnalysisSettings.GetForceConvergenceValue)                                     | Gets the Force Convergence Value at a given solution step.                             |
| [`SetForceConvergenceValue`](#ANSYSAnalysisSettings.SetForceConvergenceValue)                                     | Sets the Force Convergence Value for a given solution step.                            |
| [`GetForceConvergenceMinimumReference`](#ANSYSAnalysisSettings.GetForceConvergenceMinimumReference)               | Gets the Force Convergence Minimum Reference at a given solution step.                 |
| [`SetForceConvergenceMinimumReference`](#ANSYSAnalysisSettings.SetForceConvergenceMinimumReference)               | Sets the Force Convergence Minimum Reference for a given solution step.                |
| [`GetMomentConvergenceType`](#ANSYSAnalysisSettings.GetMomentConvergenceType)                                     | Gets the Moment Convergence Tolerance type at a given solution step.                   |
| [`SetMomentConvergenceType`](#ANSYSAnalysisSettings.SetMomentConvergenceType)                                     | Sets the Moment Convergence Tolerance type for a given solution step.                  |
| [`GetMomentConvergenceTolerance`](#ANSYSAnalysisSettings.GetMomentConvergenceTolerance)                           | Gets the Moment Convergence Tolerance as a percentage at a given solution step.        |
| [`SetMomentConvergenceTolerance`](#ANSYSAnalysisSettings.SetMomentConvergenceTolerance)                           | Sets the Moment Convergence Tolerance as a percentage for a given solution step.       |
| [`GetMomentConvergenceValue`](#ANSYSAnalysisSettings.GetMomentConvergenceValue)                                   | Gets the Moment Convergence Value at a given solution step.                            |
| [`SetMomentConvergenceValue`](#ANSYSAnalysisSettings.SetMomentConvergenceValue)                                   | Sets the Moment Convergence Value for a given solution step.                           |
| [`GetMomentConvergenceMinimumReference`](#ANSYSAnalysisSettings.GetMomentConvergenceMinimumReference)             | Gets the Moment Convergence Minimum Reference at a given solution step.                |
| [`SetMomentConvergenceMinimumReference`](#ANSYSAnalysisSettings.SetMomentConvergenceMinimumReference)             | Sets the Moment Convergence Minimum Reference for a given solution step.               |
| [`GetDisplacementConvergenceType`](#ANSYSAnalysisSettings.GetDisplacementConvergenceType)                         | Gets the Displacement Convergence Tolerance type at a given solution step.             |
| [`SetDisplacementConvergenceType`](#ANSYSAnalysisSettings.SetDisplacementConvergenceType)                         | Sets the Displacement Convergence Tolerance type for a given solution step.            |
| [`GetDisplacementConvergenceTolerance`](#ANSYSAnalysisSettings.GetDisplacementConvergenceTolerance)               | Gets the Displacement Convergence Tolerance as a percentage at a given solution step.  |
| [`SetDisplacementConvergenceTolerance`](#ANSYSAnalysisSettings.SetDisplacementConvergenceTolerance)               | Sets the Displacement Convergence Tolerance as a percentage for a given solution step. |
| [`GetDisplacementConvergenceValue`](#ANSYSAnalysisSettings.GetDisplacementConvergenceValue)                       | Gets the Displacement Convergence Value at a given solution step.                      |
| [`SetDisplacementConvergenceValue`](#ANSYSAnalysisSettings.SetDisplacementConvergenceValue)                       | Sets the Displacement Convergence Value for a given solution step.                     |
| [`GetDisplacementConvergenceMinimumReference`](#ANSYSAnalysisSettings.GetDisplacementConvergenceMinimumReference) | Gets the Displacement Convergence Minimum Reference at a given solution step.          |
| [`SetDisplacementConvergenceMinimumReference`](#ANSYSAnalysisSettings.SetDisplacementConvergenceMinimumReference) | Sets the Displacement Convergence Minimum Reference for a given solution step.         |
| [`GetRotationConvergenceType`](#ANSYSAnalysisSettings.GetRotationConvergenceType)                                 | Gets the Rotation Convergence Tolerance type at a given solution step.                 |
| [`SetRotationConvergenceType`](#ANSYSAnalysisSettings.SetRotationConvergenceType)                                 | Sets the Rotation Convergence Tolerance type for a given solution step.                |
| [`GetRotationConvergenceTolerance`](#ANSYSAnalysisSettings.GetRotationConvergenceTolerance)                       | Gets the Rotation Convergence Tolerance as a percentage at a given solution step.      |
| [`SetRotationConvergenceTolerance`](#ANSYSAnalysisSettings.SetRotationConvergenceTolerance)                       | Sets the Rotation Convergence Tolerance as a percentage for a given solution step.     |
| [`GetRotationConvergenceValue`](#ANSYSAnalysisSettings.GetRotationConvergenceValue)                               | Gets the Rotation Convergence Value at a given solution step.                          |
| [`SetRotationConvergenceValue`](#ANSYSAnalysisSettings.SetRotationConvergenceValue)                               | Sets the Rotation Convergence Value for a given solution step.                         |
| [`GetRotationConvergenceMinimumReference`](#ANSYSAnalysisSettings.GetRotationConvergenceMinimumReference)         | Gets the Rotation Convergence Minimum Reference at a given solution step.              |
| [`SetRotationConvergenceMinimumReference`](#ANSYSAnalysisSettings.SetRotationConvergenceMinimumReference)         | Sets the Rotation Convergence Minimum Reference for a given solution step.             |
| [`SetTemperatureConvergenceType`](#ANSYSAnalysisSettings.SetTemperatureConvergenceType)                           | Sets the Temperature Convergence Tolerance type for a given solution step.             |
| [`SetTemperatureConvergenceTolerance`](#ANSYSAnalysisSettings.SetTemperatureConvergenceTolerance)                 | Sets the Temperature Convergence Tolerance as a percentage for a given solution step.  |
| [`SetTemperatureConvergenceValue`](#ANSYSAnalysisSettings.SetTemperatureConvergenceValue)                         | Sets the Temperature Convergence Value for a given solution step.                      |
| [`SetTemperatureConvergenceInputValue`](#ANSYSAnalysisSettings.SetTemperatureConvergenceInputValue)               | Sets the Temperature Convergence Input Value for a given solution step.                |
| [`SetTemperatureConvergenceMinimumReference`](#ANSYSAnalysisSettings.SetTemperatureConvergenceMinimumReference)   | Sets the Temperature Convergence Minimum Reference for a given solution step.          |
| [`SetHeatConvergenceType`](#ANSYSAnalysisSettings.SetHeatConvergenceType)                                         | Sets the Heat Convergence Tolerance type for a given solution step.                    |
| [`SetHeatConvergenceTolerance`](#ANSYSAnalysisSettings.SetHeatConvergenceTolerance)                               | Sets the Heat Convergence Tolerance as a percentage for a given solution step.         |
| [`SetHeatConvergenceValue`](#ANSYSAnalysisSettings.SetHeatConvergenceValue)                                       | Sets the Heat Convergence Value for a given solution step.                             |
| [`SetHeatConvergenceMinimumReference`](#ANSYSAnalysisSettings.SetHeatConvergenceMinimumReference)                 | Sets the Heat Convergence Minimum Reference for a given solution step.                 |
| [`SetVoltageConvergenceType`](#ANSYSAnalysisSettings.SetVoltageConvergenceType)                                   | Sets the Voltage Convergence Tolerance type for a given solution step.                 |
| [`SetVoltageConvergenceTolerance`](#ANSYSAnalysisSettings.SetVoltageConvergenceTolerance)                         | Sets the Voltage Convergence Tolerance as a percentage for a given solution step.      |
| [`SetVoltageConvergenceValue`](#ANSYSAnalysisSettings.SetVoltageConvergenceValue)                                 | Sets the Voltage Convergence Value for a given solution step.                          |
| [`SetVoltageConvergenceMinimumReference`](#ANSYSAnalysisSettings.SetVoltageConvergenceMinimumReference)           | Sets the Voltage Convergence Minimum Reference for a given solution step.              |
| [`SetChargeConvergenceType`](#ANSYSAnalysisSettings.SetChargeConvergenceType)                                     | Sets the Charge Convergence Tolerance type for a given solution step.                  |
| [`SetChargeConvergenceTolerance`](#ANSYSAnalysisSettings.SetChargeConvergenceTolerance)                           | Sets the Charge Convergence Tolerance as a percentage for a given solution step.       |
| [`SetChargeConvergenceValue`](#ANSYSAnalysisSettings.SetChargeConvergenceValue)                                   | Sets the Charge Convergence Value for a given solution step.                           |
| [`SetChargeConvergenceMinimumReference`](#ANSYSAnalysisSettings.SetChargeConvergenceMinimumReference)             | Sets the Charge Convergence Minimum Reference for a given solution step.               |
| [`SetEnergyConvergenceType`](#ANSYSAnalysisSettings.SetEnergyConvergenceType)                                     | Sets the Energy Convergence Tolerance type for a given solution step.                  |
| [`SetEnergyConvergenceTolerance`](#ANSYSAnalysisSettings.SetEnergyConvergenceTolerance)                           | Sets the Energy Convergence Tolerance as a percentage for a given solution step.       |
| [`SetEnergyConvergenceValue`](#ANSYSAnalysisSettings.SetEnergyConvergenceValue)                                   | Sets the Energy Convergence Value for a given solution step.                           |
| [`SetEnergyConvergenceMinimumReference`](#ANSYSAnalysisSettings.SetEnergyConvergenceMinimumReference)             | Sets the Energy Convergence Minimum Reference for a given solution step.               |
| [`SetCurrentConvergenceType`](#ANSYSAnalysisSettings.SetCurrentConvergenceType)                                   | Sets the Current Convergence Tolerance type for a given solution step.                 |
| [`SetCurrentConvergenceTolerance`](#ANSYSAnalysisSettings.SetCurrentConvergenceTolerance)                         | Sets the Current Convergence Tolerance as a percentage for a given solution step.      |
| [`SetCurrentConvergenceValue`](#ANSYSAnalysisSettings.SetCurrentConvergenceValue)                                 | Sets the Current Convergence Value for a given solution step.                          |
| [`SetCurrentConvergenceMinimumReference`](#ANSYSAnalysisSettings.SetCurrentConvergenceMinimumReference)           | Sets the Current Convergence Minimum Reference for a given solution step.              |
| [`SetEmagAMPSConvergenceType`](#ANSYSAnalysisSettings.SetEmagAMPSConvergenceType)                                 | Sets the EmagAMPS Convergence Tolerance type for a given solution step.                |
| [`SetEmagAMPSConvergenceTolerance`](#ANSYSAnalysisSettings.SetEmagAMPSConvergenceTolerance)                       | Sets the EmagAMPS Convergence Tolerance as a percentage for a given solution step.     |
| [`SetEmagAMPSConvergenceValue`](#ANSYSAnalysisSettings.SetEmagAMPSConvergenceValue)                               | Sets the EmagAMPS Convergence Value for a given solution step.                         |
| [`SetEmagAMPSConvergenceMinimumReference`](#ANSYSAnalysisSettings.SetEmagAMPSConvergenceMinimumReference)         | Sets the EmagAMPS Convergence Minimum Reference for a given solution step.             |
| [`SetEmagCSGConvergenceType`](#ANSYSAnalysisSettings.SetEmagCSGConvergenceType)                                   | Sets the EmagCSG Convergence Tolerance type for a given solution step.                 |
| [`SetEmagCSGConvergenceTolerance`](#ANSYSAnalysisSettings.SetEmagCSGConvergenceTolerance)                         | Sets the EmagCSG Convergence Tolerance as a percentage for a given solution step.      |
| [`SetEmagCSGConvergenceValue`](#ANSYSAnalysisSettings.SetEmagCSGConvergenceValue)                                 | Sets the EmagCSG Convergence Value for a given solution step.                          |
| [`SetEmagCSGConvergenceMinimumReference`](#ANSYSAnalysisSettings.SetEmagCSGConvergenceMinimumReference)           | Sets the EmagCSG Convergence Minimum Reference for a given solution step.              |
| [`GetTemperatureConvergenceType`](#ANSYSAnalysisSettings.GetTemperatureConvergenceType)                           | Gets the Temperature Convergence Tolerance type at a given solution step.              |
| [`GetTemperatureConvergenceTolerance`](#ANSYSAnalysisSettings.GetTemperatureConvergenceTolerance)                 | Gets the Temperature Convergence Tolerance as a percentage at a given solution step.   |
| [`GetTemperatureConvergenceValue`](#ANSYSAnalysisSettings.GetTemperatureConvergenceValue)                         | Gets the Temperature Convergence Value at a given solution step.                       |
| [`GetTemperatureConvergenceInputValue`](#ANSYSAnalysisSettings.GetTemperatureConvergenceInputValue)               | Gets the Temperature Convergence Input Value at a given solution step.                 |
| [`GetTemperatureConvergenceMinimumReference`](#ANSYSAnalysisSettings.GetTemperatureConvergenceMinimumReference)   | Gets the Temperature Convergence Minimum Reference at a given solution step.           |
| [`GetHeatConvergenceType`](#ANSYSAnalysisSettings.GetHeatConvergenceType)                                         | Gets the Heat Convergence Tolerance type at a given solution step.                     |
| [`GetHeatConvergenceTolerance`](#ANSYSAnalysisSettings.GetHeatConvergenceTolerance)                               | Gets the Heat Convergence Tolerance as a percentage at a given solution step.          |
| [`GetHeatConvergenceValue`](#ANSYSAnalysisSettings.GetHeatConvergenceValue)                                       | Gets the Heat Convergence Value at a given solution step.                              |
| [`GetHeatConvergenceMinimumReference`](#ANSYSAnalysisSettings.GetHeatConvergenceMinimumReference)                 | Gets the Heat Convergence Minimum Reference at a given solution step.                  |
| [`GetVoltageConvergenceType`](#ANSYSAnalysisSettings.GetVoltageConvergenceType)                                   | Gets the Voltage Convergence Tolerance type at a given solution step.                  |
| [`GetVoltageConvergenceTolerance`](#ANSYSAnalysisSettings.GetVoltageConvergenceTolerance)                         | Gets the Voltage Convergence Tolerance as a percentage at a given solution step.       |
| [`GetVoltageConvergenceValue`](#ANSYSAnalysisSettings.GetVoltageConvergenceValue)                                 | Gets the Voltage Convergence Value at a given solution step.                           |
| [`GetVoltageConvergenceMinimumReference`](#ANSYSAnalysisSettings.GetVoltageConvergenceMinimumReference)           | Gets the Voltage Convergence Minimum Reference at a given solution step.               |
| [`GetCurrentConvergenceType`](#ANSYSAnalysisSettings.GetCurrentConvergenceType)                                   | Gets the Current Convergence Tolerance type at a given solution step.                  |
| [`GetCurrentConvergenceTolerance`](#ANSYSAnalysisSettings.GetCurrentConvergenceTolerance)                         | Gets the Current Convergence Tolerance as a percentage at a given solution step.       |
| [`GetCurrentConvergenceValue`](#ANSYSAnalysisSettings.GetCurrentConvergenceValue)                                 | Gets the Current Convergence Value at a given solution step.                           |
| [`GetCurrentConvergenceMinimumReference`](#ANSYSAnalysisSettings.GetCurrentConvergenceMinimumReference)           | Gets the Current Convergence Minimum Reference at a given solution step.               |
| [`GetEmagAMPSConvergenceType`](#ANSYSAnalysisSettings.GetEmagAMPSConvergenceType)                                 | Gets the EmagAMPS Convergence Tolerance type at a given solution step.                 |
| [`GetEmagAMPSConvergenceTolerance`](#ANSYSAnalysisSettings.GetEmagAMPSConvergenceTolerance)                       | Gets the EmagAMPS Convergence Tolerance as a percentage at a given solution step.      |
| [`GetEmagAMPSConvergenceValue`](#ANSYSAnalysisSettings.GetEmagAMPSConvergenceValue)                               | Gets the EmagAMPS Convergence Value at a given solution step.                          |
| [`GetEmagAMPSConvergenceMinimumReference`](#ANSYSAnalysisSettings.GetEmagAMPSConvergenceMinimumReference)         | Gets the EmagAMPS Convergence Minimum Reference at a given solution step.              |
| [`GetEmagCSGConvergenceType`](#ANSYSAnalysisSettings.GetEmagCSGConvergenceType)                                   | Gets the EmagCSG Convergence Tolerance type at a given solution step.                  |
| [`GetEmagCSGConvergenceTolerance`](#ANSYSAnalysisSettings.GetEmagCSGConvergenceTolerance)                         | Gets the EmagCSG Convergence Tolerance as a percentage at a given solution step.       |
| [`GetEmagCSGConvergenceValue`](#ANSYSAnalysisSettings.GetEmagCSGConvergenceValue)                                 | Gets the EmagCSG Convergence Value at a given solution step.                           |
| [`GetEmagCSGConvergenceMinimumReference`](#ANSYSAnalysisSettings.GetEmagCSGConvergenceMinimumReference)           | Gets the EmagCSG Convergence Minimum Reference at a given solution step.               |
| [`GetEnergyConvergenceType`](#ANSYSAnalysisSettings.GetEnergyConvergenceType)                                     | Gets the Energy Convergence Tolerance type at a given solution step.                   |
| [`GetEnergyConvergenceTolerance`](#ANSYSAnalysisSettings.GetEnergyConvergenceTolerance)                           | Gets the Energy Convergence Tolerance as a percentage at a given solution step.        |
| [`GetEnergyConvergenceValue`](#ANSYSAnalysisSettings.GetEnergyConvergenceValue)                                   | Gets the Energy Convergence Value at a given solution step.                            |
| [`GetEnergyConvergenceMinimumReference`](#ANSYSAnalysisSettings.GetEnergyConvergenceMinimumReference)             | Gets the Energy Convergence Minimum Reference at a given solution step.                |
| [`GetLineSearch`](#ANSYSAnalysisSettings.GetLineSearch)                                                           | Gets the Line Search at a given solution step.                                         |
| [`SetLineSearch`](#ANSYSAnalysisSettings.SetLineSearch)                                                           | Sets the Line Search for a given solution step.                                        |
| [`GetStabilization`](#ANSYSAnalysisSettings.GetStabilization)                                                     | Gets the Stabilization at a given solution step.                                       |
| [`SetStabilization`](#ANSYSAnalysisSettings.SetStabilization)                                                     | Sets the Stabilization for a given solution step.                                      |
| [`GetStabilizationMethod`](#ANSYSAnalysisSettings.GetStabilizationMethod)                                         | Gets the Stabilization Method at a given solution step.                                |
| [`SetStabilizationMethod`](#ANSYSAnalysisSettings.SetStabilizationMethod)                                         | Sets the Stabilization Method for a given solution step.                               |
| [`GetStabilizationEnergyDissipationRatio`](#ANSYSAnalysisSettings.GetStabilizationEnergyDissipationRatio)         | Gets the Stabilization Energy Dissipation Ratio at a given solution step.              |
| [`SetStabilizationEnergyDissipationRatio`](#ANSYSAnalysisSettings.SetStabilizationEnergyDissipationRatio)         | Sets the Stabilization Energy Dissipation Ratio for a given solution step.             |
| [`GetStabilizationDampingFactor`](#ANSYSAnalysisSettings.GetStabilizationDampingFactor)                           | Gets the Stabilization Damping Factor at a given solution step.                        |
| [`SetStabilizationDampingFactor`](#ANSYSAnalysisSettings.SetStabilizationDampingFactor)                           | Sets the Stabilization Damping Factor for a given solution step.                       |
| [`GetStabilizationFirstSubstepOption`](#ANSYSAnalysisSettings.GetStabilizationFirstSubstepOption)                 | Gets the Stabilization First Substep Option at a given solution step.                  |
| [`SetStabilizationFirstSubstepOption`](#ANSYSAnalysisSettings.SetStabilizationFirstSubstepOption)                 | Sets the Stabilization First Substep Option for a given solution step.                 |
| [`GetStabilizationForceLimit`](#ANSYSAnalysisSettings.GetStabilizationForceLimit)                                 | Gets the Stabilization Force Limit at a given solution step.                           |
| [`SetStabilizationForceLimit`](#ANSYSAnalysisSettings.SetStabilizationForceLimit)                                 | Sets the Stabilization Force Limit for a given solution step.                          |
| [`GetStoreResultsAt`](#ANSYSAnalysisSettings.GetStoreResultsAt)                                                   | Gets the Store Results At at a given solution step.                                    |
| [`SetStoreResultsAt`](#ANSYSAnalysisSettings.SetStoreResultsAt)                                                   | Sets the Store Results At for a given solution step.                                   |
| [`GetStoreResulsAtValue`](#ANSYSAnalysisSettings.GetStoreResulsAtValue)                                           | Gets the Store Results At Value at a given solution step.                              |
| [`SetStoreResulsAtValue`](#ANSYSAnalysisSettings.SetStoreResulsAtValue)                                           | Sets the Store Results At Value for a given solution step.                             |
| [`GetDefineBy`](#ANSYSAnalysisSettings.GetDefineBy)                                                               | Gets the Define By at a given solution step.                                           |
| [`SetDefineBy`](#ANSYSAnalysisSettings.SetDefineBy)                                                               | Sets the Define By for a given solution step.                                          |
| [`GetCarryOverTimeStep`](#ANSYSAnalysisSettings.GetCarryOverTimeStep)                                             | Gets the Carry Over Time Step at a given solution step.                                |
| [`SetCarryOverTimeStep`](#ANSYSAnalysisSettings.SetCarryOverTimeStep)                                             | Sets the Carry Over Time Step for a given solution step.                               |
| [`GetInitialTimeStep`](#ANSYSAnalysisSettings.GetInitialTimeStep)                                                 | Gets the Initial Time Step at a given solution step.                                   |
| [`SetInitialTimeStep`](#ANSYSAnalysisSettings.SetInitialTimeStep)                                                 | Sets the Initial Time Step for a given solution step.                                  |
| [`GetMinimumTimeStep`](#ANSYSAnalysisSettings.GetMinimumTimeStep)                                                 | Gets the Minimum Time Step at a given solution step.                                   |
| [`SetMinimumTimeStep`](#ANSYSAnalysisSettings.SetMinimumTimeStep)                                                 | Sets the Minimum Time Step for a given solution step.                                  |
| [`GetMaximumTimeStep`](#ANSYSAnalysisSettings.GetMaximumTimeStep)                                                 | Gets the Maximum Time Step at a given solution step.                                   |
| [`SetMaximumTimeStep`](#ANSYSAnalysisSettings.SetMaximumTimeStep)                                                 | Sets the Maximum Time Step for a given solution step.                                  |
| [`GetInitialSubsteps`](#ANSYSAnalysisSettings.GetInitialSubsteps)                                                 | Gets the Initial Substeps at a given solution step.                                    |
| [`SetInitialSubsteps`](#ANSYSAnalysisSettings.SetInitialSubsteps)                                                 | Sets the Initial Substeps for a given solution step.                                   |
| [`GetMinimumSubsteps`](#ANSYSAnalysisSettings.GetMinimumSubsteps)                                                 | Gets the Minimum Substeps at a given solution step.                                    |
| [`SetMinimumSubsteps`](#ANSYSAnalysisSettings.SetMinimumSubsteps)                                                 | Sets the Minimum Substeps for a given solution step.                                   |
| [`GetMaximumSubsteps`](#ANSYSAnalysisSettings.GetMaximumSubsteps)                                                 | Gets the Maximum Substeps at a given solution step.                                    |
| [`SetMaximumSubsteps`](#ANSYSAnalysisSettings.SetMaximumSubsteps)                                                 | Sets the Maximum Substeps for a given solution step.                                   |
| [`SetNumberOfSubSteps`](#ANSYSAnalysisSettings.SetNumberOfSubSteps)                                               | Sets the Number of Substeps for a given solution step.                                 |
| [`GetNumberOfSubSteps`](#ANSYSAnalysisSettings.GetNumberOfSubSteps)                                               | Gets the Number of Substeps for a given solution step.                                 |
| [`SetTimeStep`](#ANSYSAnalysisSettings.SetTimeStep)                                                               | Sets the Time Step for a given solution step.                                          |
| [`GetTimeStep`](#ANSYSAnalysisSettings.GetTimeStep)                                                               | Sets the Time Step for a given solution step.                                          |
| [`SetTimeIntegration`](#ANSYSAnalysisSettings.SetTimeIntegration)                                                 | Sets the TimeIntegration for a given solution step.                                    |
| [`SetStructuralOnly`](#ANSYSAnalysisSettings.SetStructuralOnly)                                                   | Sets the TimeIntegration Structural for a given solution step.                         |
| [`SetThermalOnly`](#ANSYSAnalysisSettings.SetThermalOnly)                                                         | Sets the TimeIntegration Thermal for a given solution step.                            |
| [`GetTimeIntegration`](#ANSYSAnalysisSettings.GetTimeIntegration)                                                 | Gets the TimeIntegration for a given solution step.                                    |
| [`GetStructuralOnly`](#ANSYSAnalysisSettings.GetStructuralOnly)                                                   | Gets the TimeIntegration Structural for a given solution step.                         |
| [`GetThermalOnly`](#ANSYSAnalysisSettings.GetThermalOnly)                                                         | Sets the TimeIntegration Thermal for a given solution step.                            |
| [`GetStepName`](#ANSYSAnalysisSettings.GetStepName)                                                               | Gets the Step name at a given step.                                                    |
| [`SetStepName`](#ANSYSAnalysisSettings.SetStepName)                                                               | Sets the Step name at a given step.                                                    |
| [`GetAMStepType`](#ANSYSAnalysisSettings.GetAMStepType)                                                           | Gets the AM Process Step Type at a given step.                                         |
| [`CopyTo`](#ANSYSAnalysisSettings.CopyTo)                                                                         | CopyTo method.                                                                         |
| [`SetCreepEffects`](#ANSYSAnalysisSettings.SetCreepEffects)                                                       | Sets the Creep Effects for a given solution step.                                      |
| [`GetCreepEffects`](#ANSYSAnalysisSettings.GetCreepEffects)                                                       | Gets the Creep Effects for a given solution step.                                      |
| [`SetCreepLimitRatio`](#ANSYSAnalysisSettings.SetCreepLimitRatio)                                                 | Sets the Creep Limit Ratio for a given solution step.                                  |
| [`GetCreepLimitRatio`](#ANSYSAnalysisSettings.GetCreepLimitRatio)                                                 | Gets the Creep Limit Ratio for a given solution step.                                  |
| [`DeleteAllRestartPoints`](#ANSYSAnalysisSettings.DeleteAllRestartPoints)                                         | DeleteAllRestartPoints method.                                                         |
| [`GetChildren`](#id1)                                                                                             | Gets the list of children, filtered by type.                                           |
| [`GetChildren`](#id1)                                                                                             | Gets the list of children, filtered by type.                                           |
| [`AddComment`](#ANSYSAnalysisSettings.AddComment)                                                                 | Creates a new child Comment.                                                           |
| [`AddFigure`](#ANSYSAnalysisSettings.AddFigure)                                                                   | Creates a new child Figure.                                                            |
| [`AddImage`](#ANSYSAnalysisSettings.AddImage)                                                                     | Creates a new child Image.                                                             |
| [`Activate`](#ANSYSAnalysisSettings.Activate)                                                                     | Activate the current object.                                                           |
| [`Duplicate`](#ANSYSAnalysisSettings.Duplicate)                                                                   | Creates a copy of the current DataModelObject.                                         |
| [`GroupAllSimilarChildren`](#ANSYSAnalysisSettings.GroupAllSimilarChildren)                                       | Run the GroupAllSimilarChildren action.                                                |
| [`GroupSimilarObjects`](#ANSYSAnalysisSettings.GroupSimilarObjects)                                               | Run the GroupSimilarObjects action.                                                    |
| [`PropertyByName`](#ANSYSAnalysisSettings.PropertyByName)                                                         | Get a property by its unique name.                                                     |
| [`PropertyByAPIName`](#ANSYSAnalysisSettings.PropertyByAPIName)                                                   | Get a property by its API name.                                                        |
| [`CreateParameter`](#ANSYSAnalysisSettings.CreateParameter)                                                       | Creates a new parameter for a Property.                                                |
| [`GetParameter`](#ANSYSAnalysisSettings.GetParameter)                                                             | Gets the parameter corresponding to the given property.                                |
| [`RemoveParameter`](#ANSYSAnalysisSettings.RemoveParameter)                                                       | Removes the parameter from the parameter set corresponding to the given property.      |

### Properties

| [`StepName`](#ANSYSAnalysisSettings.StepName)                                                                                | Gets or sets the Step Name.                                                                         |
|------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| [`AMStepType`](#ANSYSAnalysisSettings.AMStepType)                                                                            | Gets or sets the AM Process Step Type.                                                              |
| [`AMSubstepsToApplyHeats`](#ANSYSAnalysisSettings.AMSubstepsToApplyHeats)                                                    | Gets or sets the AM Substeps to Apply Heat.                                                         |
| [`AMSubstepsBetweenHeating`](#ANSYSAnalysisSettings.AMSubstepsBetweenHeating)                                                | Gets or sets the AM Substeps Between Heating.                                                       |
| [`AMCooldownNumberOfSubsteps`](#ANSYSAnalysisSettings.AMCooldownNumberOfSubsteps)                                            | Gets or sets the AM Cooldown Number of Substeps.                                                    |
| [`CooldownTimeType`](#ANSYSAnalysisSettings.CooldownTimeType)                                                                | Gets or sets the AM Cooldown Time Type.                                                             |
| [`CooldownTime`](#ANSYSAnalysisSettings.CooldownTime)                                                                        | Gets or sets the AM Cooldown Time.                                                                  |
| [`LayersToBuild`](#ANSYSAnalysisSettings.LayersToBuild)                                                                      | Gets or sets the AM Layers to Build.                                                                |
| [`ReferenceTemperatureType`](#ANSYSAnalysisSettings.ReferenceTemperatureType)                                                | Gets or sets the AM Reference Temperature Type.                                                     |
| [`ReferenceTemperature`](#ANSYSAnalysisSettings.ReferenceTemperature)                                                        | Gets or sets the AM Reference Temperature.                                                          |
| [`RelaxationTemperatureType`](#ANSYSAnalysisSettings.RelaxationTemperatureType)                                              | Gets or sets the AM Relaxation Temperature Type.                                                    |
| [`NumberOfRestartPoints`](#ANSYSAnalysisSettings.NumberOfRestartPoints)                                                      | Gets Number of Restart Points.                                                                      |
| [`CurrentRestartPoint`](#ANSYSAnalysisSettings.CurrentRestartPoint)                                                          | Gets or sets the Current Restart Point.                                                             |
| [`AggressiveRemeshing`](#ANSYSAnalysisSettings.AggressiveRemeshing)                                                          | Gets or sets the AggressiveRemeshing.                                                               |
| [`SpinSoftening`](#ANSYSAnalysisSettings.SpinSoftening)                                                                      | Gets or sets the SpinSoftening.                                                                     |
| [`UserDefinedFrequencySteps`](#ANSYSAnalysisSettings.UserDefinedFrequencySteps)                                              | Gets or sets the UserDefinedFrequencySteps.                                                         |
| [`InternalObject`](#id0)                                                                                                     | Gets the internal object. For advanced usage only.                                                  |
| [`MassCoefficient`](#ANSYSAnalysisSettings.MassCoefficient)                                                                  | Gets or sets the MassCoefficient.                                                                   |
| [`StiffnessCoefficient`](#ANSYSAnalysisSettings.StiffnessCoefficient)                                                        | Gets or sets the StiffnessCoefficient.                                                              |
| [`DampingRatio`](#ANSYSAnalysisSettings.DampingRatio)                                                                        | Gets or sets the DampingRatio.                                                                      |
| [`ConstantDampingRatio`](#ANSYSAnalysisSettings.ConstantDampingRatio)                                                        | Gets or sets the ConstantDampingRatio.                                                              |
| [`StructuralDampingCoefficient`](#ANSYSAnalysisSettings.StructuralDampingCoefficient)                                        | Gets or sets the StructuralDampingCoefficient.                                                      |
| [`ContactSplitMaxNum`](#ANSYSAnalysisSettings.ContactSplitMaxNum)                                                            | Gets or sets the ContactSplitMaxNum.                                                                |
| [`ChargeConvergenceTolerance`](#ANSYSAnalysisSettings.ChargeConvergenceTolerance)                                            | Gets or sets the ChargeConvergenceTolerance.                                                        |
| [`CurrentConvergenceTolerance`](#ANSYSAnalysisSettings.CurrentConvergenceTolerance)                                          | Gets or sets the CurrentConvergenceTolerance.                                                       |
| [`EmagAMPSConvergenceTolerance`](#ANSYSAnalysisSettings.EmagAMPSConvergenceTolerance)                                        | Gets or sets the EmagAMPSConvergenceTolerance.                                                      |
| [`EmagCSGConvergenceTolerance`](#ANSYSAnalysisSettings.EmagCSGConvergenceTolerance)                                          | Gets or sets the EmagCSGConvergenceTolerance.                                                       |
| [`EnergyConvergenceTolerance`](#ANSYSAnalysisSettings.EnergyConvergenceTolerance)                                            | Gets or sets the EnergyConvergenceTolerance.                                                        |
| [`HeatConvergenceTolerance`](#ANSYSAnalysisSettings.HeatConvergenceTolerance)                                                | Gets or sets the HeatConvergenceTolerance.                                                          |
| [`TemperatureConvergenceTolerance`](#ANSYSAnalysisSettings.TemperatureConvergenceTolerance)                                  | Gets or sets the TemperatureConvergenceTolerance.                                                   |
| [`VoltageConvergenceTolerance`](#ANSYSAnalysisSettings.VoltageConvergenceTolerance)                                          | Gets or sets the VoltageConvergenceTolerance.                                                       |
| [`CreepLimitRatio`](#ANSYSAnalysisSettings.CreepLimitRatio)                                                                  | Gets or sets the CreepLimitRatio.                                                                   |
| [`CurrentStepNumberHarmonic`](#ANSYSAnalysisSettings.CurrentStepNumberHarmonic)                                              | Gets or sets the CurrentStepNumberHarmonic.                                                         |
| [`CurrentStepNumber`](#ANSYSAnalysisSettings.CurrentStepNumber)                                                              | Gets or sets the CurrentStepNumber.                                                                 |
| [`EngineOrderofExcitation`](#ANSYSAnalysisSettings.EngineOrderofExcitation)                                                  | Gets or sets the EngineOrderofExcitation.                                                           |
| [`MaximumHarmonicIndex`](#ANSYSAnalysisSettings.MaximumHarmonicIndex)                                                        | Gets or sets the MaximumHarmonicIndex.                                                              |
| [`MinimumHarmonicIndex`](#ANSYSAnalysisSettings.MinimumHarmonicIndex)                                                        | Gets or sets the MinimumHarmonicIndex.                                                              |
| [`HarmonicIndexInterval`](#ANSYSAnalysisSettings.HarmonicIndexInterval)                                                      | Gets or sets the HarmonicIndexInterval.                                                             |
| [`ClusterNumber`](#ANSYSAnalysisSettings.ClusterNumber)                                                                      | Gets or sets the ClusterNumber.                                                                     |
| [`SolutionIntervals`](#ANSYSAnalysisSettings.SolutionIntervals)                                                              | Gets or sets the SolutionIntervals.                                                                 |
| [`KrylovSubspaceDimension`](#ANSYSAnalysisSettings.KrylovSubspaceDimension)                                                  | Gets or sets the KrylovSubspaceDimension.                                                           |
| [`KrylovResidualTolerance`](#ANSYSAnalysisSettings.KrylovResidualTolerance)                                                  | Gets or sets the KrylovResidualTolerance.                                                           |
| [`HarmonicOrders`](#ANSYSAnalysisSettings.HarmonicOrders)                                                                    | Gets or sets the HarmonicOrders.                                                                    |
| [`InitialSubsteps`](#ANSYSAnalysisSettings.InitialSubsteps)                                                                  | Gets or sets the InitialSubsteps.                                                                   |
| [`InverseOptionEndStep`](#ANSYSAnalysisSettings.InverseOptionEndStep)                                                        | Gets or sets the InverseOptionEndStep.                                                              |
| [`MaximumSubsteps`](#ANSYSAnalysisSettings.MaximumSubsteps)                                                                  | Gets or sets the MaximumSubsteps.                                                                   |
| [`MeshLoadStepValue`](#ANSYSAnalysisSettings.MeshLoadStepValue)                                                              | Gets or sets the MeshLoadStepValue.                                                                 |
| [`MinimumSubsteps`](#ANSYSAnalysisSettings.MinimumSubsteps)                                                                  | Gets or sets the MinimumSubsteps.                                                                   |
| [`ModalNumberOfPoints`](#ANSYSAnalysisSettings.ModalNumberOfPoints)                                                          | Gets or sets the ModalNumberOfPoints.                                                               |
| [`ModeSignificanceLevel`](#ANSYSAnalysisSettings.ModeSignificanceLevel)                                                      | Gets or sets the ModeSignificanceLevel.                                                             |
| [`GlobalSizeRatioQualityImprovement`](#ANSYSAnalysisSettings.GlobalSizeRatioQualityImprovement)                              | Gets or sets the GlobalSizeRatioQualityImprovement.                                                 |
| [`GlobalSizeRatioQualityRefinement`](#ANSYSAnalysisSettings.GlobalSizeRatioQualityRefinement)                                | Gets or sets the GlobalSizeRatioQualityRefinement.                                                  |
| [`NumberOfSculptedLayersQualityImprovement`](#ANSYSAnalysisSettings.NumberOfSculptedLayersQualityImprovement)                | Gets or sets the NumberOfSculptedLayersQualityImprovement.                                          |
| [`NumberOfSculptedLayersRefinement`](#ANSYSAnalysisSettings.NumberOfSculptedLayersRefinement)                                | Gets or sets the NumberOfSculptedLayersRefinement.                                                  |
| [`RemeshingToleranceQualityImprovement`](#ANSYSAnalysisSettings.RemeshingToleranceQualityImprovement)                        | Gets or sets the RemeshingToleranceQualityImprovement.                                              |
| [`RemeshingToleranceRefinement`](#ANSYSAnalysisSettings.RemeshingToleranceRefinement)                                        | Gets or sets the RemeshingToleranceRefinement.                                                      |
| [`StoreResulsAtValue`](#ANSYSAnalysisSettings.StoreResulsAtValue)                                                            | Gets or sets the StoreResulsAtValue.                                                                |
| [`NumberOfModesToUse`](#ANSYSAnalysisSettings.NumberOfModesToUse)                                                            | Gets or sets the NumberOfModesToUse.                                                                |
| [`NumberOfRPMs`](#ANSYSAnalysisSettings.NumberOfRPMs)                                                                        | Gets or sets the NumberOfRPMs.                                                                      |
| [`NumberOfSteps`](#ANSYSAnalysisSettings.NumberOfSteps)                                                                      | Gets or sets the NumberOfSteps.                                                                     |
| [`NumberOfSubSteps`](#ANSYSAnalysisSettings.NumberOfSubSteps)                                                                | Gets or sets the NumberOfSubSteps.                                                                  |
| [`NumericalDampingValue`](#ANSYSAnalysisSettings.NumericalDampingValue)                                                      | Gets or sets the NumericalDampingValue.                                                             |
| [`NumLoadVectors`](#ANSYSAnalysisSettings.NumLoadVectors)                                                                    | Gets or sets the NumLoadVectors.                                                                    |
| [`MaximumModesToFind`](#ANSYSAnalysisSettings.MaximumModesToFind)                                                            | Gets or sets the MaximumModesToFind.                                                                |
| [`NumberOfZones`](#ANSYSAnalysisSettings.NumberOfZones)                                                                      | Gets or sets the NumberOfZones.                                                                     |
| [`AxisymmetryDivisions`](#ANSYSAnalysisSettings.AxisymmetryDivisions)                                                        | Gets or sets the AxisymmetryDivisions.                                                              |
| [`HemicubeResolution`](#ANSYSAnalysisSettings.HemicubeResolution)                                                            | Gets or sets the HemicubeResolution.                                                                |
| [`FluxConvergence`](#ANSYSAnalysisSettings.FluxConvergence)                                                                  | Gets or sets the FluxConvergence.                                                                   |
| [`MaximumIteration`](#ANSYSAnalysisSettings.MaximumIteration)                                                                | Gets or sets the MaximumIteration.                                                                  |
| [`OverRelaxation`](#ANSYSAnalysisSettings.OverRelaxation)                                                                    | Gets or sets the OverRelaxation.                                                                    |
| [`ReformulationTolerance`](#ANSYSAnalysisSettings.ReformulationTolerance)                                                    | Gets or sets the ReformulationTolerance.                                                            |
| [`RestartAtLoadStep`](#ANSYSAnalysisSettings.RestartAtLoadStep)                                                              | Gets the RestartAtLoadStep.                                                                         |
| [`RestartAtSubstep`](#ANSYSAnalysisSettings.RestartAtSubstep)                                                                | Gets the RestartAtSubstep.                                                                          |
| [`RestartAtTime`](#ANSYSAnalysisSettings.RestartAtTime)                                                                      | Gets the RestartAtTime.                                                                             |
| [`RpmClusterNumber`](#ANSYSAnalysisSettings.RpmClusterNumber)                                                                | Gets or sets the RpmClusterNumber.                                                                  |
| [`RpmSolutionIntervals`](#ANSYSAnalysisSettings.RpmSolutionIntervals)                                                        | Gets or sets the RpmSolutionIntervals.                                                              |
| [`MaximumPointsToSavePerStep`](#ANSYSAnalysisSettings.MaximumPointsToSavePerStep)                                            | Gets or sets the MaximumPointsToSavePerStep.                                                        |
| [`SaveSpecifiedLoadStep`](#ANSYSAnalysisSettings.SaveSpecifiedLoadStep)                                                      | Gets or sets the SaveSpecifiedLoadStep.                                                             |
| [`LoadStepValue`](#ANSYSAnalysisSettings.LoadStepValue)                                                                      | Gets or sets the LoadStepValue.                                                                     |
| [`SignificanceThreshold`](#ANSYSAnalysisSettings.SignificanceThreshold)                                                      | Gets or sets the SignificanceThreshold.                                                             |
| [`StabilizationDampingFactor`](#ANSYSAnalysisSettings.StabilizationDampingFactor)                                            | Gets or sets the StabilizationDampingFactor.                                                        |
| [`StabilizationEnergyDissipationRatio`](#ANSYSAnalysisSettings.StabilizationEnergyDissipationRatio)                          | Gets or sets the StabilizationEnergyDissipationRatio.                                               |
| [`StabilizationForceLimit`](#ANSYSAnalysisSettings.StabilizationForceLimit)                                                  | Gets or sets the StabilizationForceLimit.                                                           |
| [`TransientApplicationUserDefined`](#ANSYSAnalysisSettings.TransientApplicationUserDefined)                                  | Gets or sets the TransientApplicationUserDefined.                                                   |
| [`SpringStiffnessFactor`](#ANSYSAnalysisSettings.SpringStiffnessFactor)                                                      | Gets or sets the SpringStiffnessFactor.                                                             |
| [`RelaxationTemperature`](#ANSYSAnalysisSettings.RelaxationTemperature)                                                      | Gets or sets the RelaxationTemperature.                                                             |
| [`Frequency`](#ANSYSAnalysisSettings.Frequency)                                                                              | Gets or sets the Frequency.                                                                         |
| [`CentralFrequency`](#ANSYSAnalysisSettings.CentralFrequency)                                                                | Gets or sets the CentralFrequency.                                                                  |
| [`ChargeConvergenceMinimumReference`](#ANSYSAnalysisSettings.ChargeConvergenceMinimumReference)                              | Gets or sets the ChargeConvergenceMinimumReference.                                                 |
| [`ChargeConvergenceValue`](#ANSYSAnalysisSettings.ChargeConvergenceValue)                                                    | Gets or sets the ChargeConvergenceValue.                                                            |
| [`CurrentConvergenceMinimumReference`](#ANSYSAnalysisSettings.CurrentConvergenceMinimumReference)                            | Gets or sets the CurrentConvergenceMinimumReference.                                                |
| [`CurrentConvergenceValue`](#ANSYSAnalysisSettings.CurrentConvergenceValue)                                                  | Gets or sets the CurrentConvergenceValue.                                                           |
| [`DisplacementConvergenceMinimumReference`](#ANSYSAnalysisSettings.DisplacementConvergenceMinimumReference)                  | Gets or sets the DisplacementConvergenceMinimumReference.                                           |
| [`DisplacementConvergenceTolerance`](#ANSYSAnalysisSettings.DisplacementConvergenceTolerance)                                | Gets or sets the DisplacementConvergenceTolerance.                                                  |
| [`DisplacementConvergenceValue`](#ANSYSAnalysisSettings.DisplacementConvergenceValue)                                        | Gets or sets the DisplacementConvergenceValue.                                                      |
| [`EmagAMPSConvergenceMinimumReference`](#ANSYSAnalysisSettings.EmagAMPSConvergenceMinimumReference)                          | Gets or sets the EmagAMPSConvergenceMinimumReference.                                               |
| [`EmagAMPSConvergenceValue`](#ANSYSAnalysisSettings.EmagAMPSConvergenceValue)                                                | Gets or sets the EmagAMPSConvergenceValue.                                                          |
| [`EmagCSGConvergenceMinimumReference`](#ANSYSAnalysisSettings.EmagCSGConvergenceMinimumReference)                            | Gets or sets the EmagCSGConvergenceMinimumReference.                                                |
| [`EmagCSGConvergenceValue`](#ANSYSAnalysisSettings.EmagCSGConvergenceValue)                                                  | Gets or sets the EmagCSGConvergenceValue.                                                           |
| [`EnergyConvergenceMinimumReference`](#ANSYSAnalysisSettings.EnergyConvergenceMinimumReference)                              | Gets or sets the EnergyConvergenceMinimumReference.                                                 |
| [`EnergyConvergenceValue`](#ANSYSAnalysisSettings.EnergyConvergenceValue)                                                    | Gets or sets the EnergyConvergenceValue.                                                            |
| [`ForceConvergenceMinimumReference`](#ANSYSAnalysisSettings.ForceConvergenceMinimumReference)                                | Gets or sets the ForceConvergenceMinimumReference.                                                  |
| [`ForceConvergenceTolerance`](#ANSYSAnalysisSettings.ForceConvergenceTolerance)                                              | Gets or sets the ForceConvergenceTolerance.                                                         |
| [`ForceConvergenceValue`](#ANSYSAnalysisSettings.ForceConvergenceValue)                                                      | Gets or sets the ForceConvergenceValue.                                                             |
| [`HeatConvergenceMinimumReference`](#ANSYSAnalysisSettings.HeatConvergenceMinimumReference)                                  | Gets or sets the HeatConvergenceMinimumReference.                                                   |
| [`HeatConvergenceValue`](#ANSYSAnalysisSettings.HeatConvergenceValue)                                                        | Gets or sets the HeatConvergenceValue.                                                              |
| [`MomentConvergenceMinimumReference`](#ANSYSAnalysisSettings.MomentConvergenceMinimumReference)                              | Gets or sets the MomentConvergenceMinimumReference.                                                 |
| [`MomentConvergenceTolerance`](#ANSYSAnalysisSettings.MomentConvergenceTolerance)                                            | Gets or sets the MomentConvergenceTolerance.                                                        |
| [`MomentConvergenceValue`](#ANSYSAnalysisSettings.MomentConvergenceValue)                                                    | Gets or sets the MomentConvergenceValue.                                                            |
| [`RotationConvergenceMinimumReference`](#ANSYSAnalysisSettings.RotationConvergenceMinimumReference)                          | Gets or sets the RotationConvergenceMinimumReference.                                               |
| [`RotationConvergenceTolerance`](#ANSYSAnalysisSettings.RotationConvergenceTolerance)                                        | Gets or sets the RotationConvergenceTolerance.                                                      |
| [`TemperatureConvergenceMinimumReference`](#ANSYSAnalysisSettings.TemperatureConvergenceMinimumReference)                    | Gets or sets the TemperatureConvergenceMinimumReference.                                            |
| [`TemperatureConvergenceInputValue`](#ANSYSAnalysisSettings.TemperatureConvergenceInputValue)                                | Gets or sets the TemperatureConvergenceInputValue.                                                  |
| [`VoltageConvergenceMinimumReference`](#ANSYSAnalysisSettings.VoltageConvergenceMinimumReference)                            | Gets or sets the VoltageConvergenceMinimumReference.                                                |
| [`VoltageConvergenceValue`](#ANSYSAnalysisSettings.VoltageConvergenceValue)                                                  | Gets or sets the VoltageConvergenceValue.                                                           |
| [`RemovalDirection`](#ANSYSAnalysisSettings.RemovalDirection)                                                                | Gets or sets the RemovalDirection.                                                                  |
| [`RemovalStepSize`](#ANSYSAnalysisSettings.RemovalStepSize)                                                                  | Gets or sets the RemovalStepSize.                                                                   |
| [`StepEndTime`](#ANSYSAnalysisSettings.StepEndTime)                                                                          | Gets or sets the StepEndTime.                                                                       |
| [`MinimumElementSize`](#ANSYSAnalysisSettings.MinimumElementSize)                                                            | Gets or sets the Minimum Element Size property for Geometry Based Adaptivity.                       |
| [`RangeMaximum`](#ANSYSAnalysisSettings.RangeMaximum)                                                                        | Gets or sets the Range Maximum property in Options group of Analysis Settings in Harmonic Analysis. |
| [`RangeMinimum`](#ANSYSAnalysisSettings.RangeMinimum)                                                                        | Gets or sets the Range Minimum property in Options group of Analysis Settings in Harmonic Analysis. |
| [`KrylovSubspaceFrequency`](#ANSYSAnalysisSettings.KrylovSubspaceFrequency)                                                  | Gets or sets the KrylovSubspaceFrequency.                                                           |
| [`ModalRangeMaximum`](#ANSYSAnalysisSettings.ModalRangeMaximum)                                                              | Gets or sets the ModalRangeMaximum.                                                                 |
| [`ModalRangeMinimum`](#ANSYSAnalysisSettings.ModalRangeMinimum)                                                              | Gets or sets the ModalRangeMinimum.                                                                 |
| [`InitialTimeStep`](#ANSYSAnalysisSettings.InitialTimeStep)                                                                  | Gets or sets the InitialTimeStep.                                                                   |
| [`SearchRangeMaximum`](#ANSYSAnalysisSettings.SearchRangeMaximum)                                                            | Gets or sets the Range Maximum property in Options group of Analysis Settings in Modal Analysis.    |
| [`MaximumTimeStep`](#ANSYSAnalysisSettings.MaximumTimeStep)                                                                  | Gets or sets the MaximumTimeStep.                                                                   |
| [`SearchRangeMinimum`](#ANSYSAnalysisSettings.SearchRangeMinimum)                                                            | Gets or sets the Range Minimum property in Options group of Analysis Settings in Modal Analysis.    |
| [`MinimumTimeStep`](#ANSYSAnalysisSettings.MinimumTimeStep)                                                                  | Gets or sets the MinimumTimeStep.                                                                   |
| [`BoundaryAngle`](#ANSYSAnalysisSettings.BoundaryAngle)                                                                      | Gets or sets the BoundaryAngle.                                                                     |
| [`EdgeSplittingAngle`](#ANSYSAnalysisSettings.EdgeSplittingAngle)                                                            | Gets or sets the EdgeSplittingAngle.                                                                |
| [`SolverTolerance`](#ANSYSAnalysisSettings.SolverTolerance)                                                                  | Gets or sets the SolverTolerance.                                                                   |
| [`RpmValue`](#ANSYSAnalysisSettings.RpmValue)                                                                                | Gets or sets the RpmValue.                                                                          |
| [`RpmCentralFrequency`](#ANSYSAnalysisSettings.RpmCentralFrequency)                                                          | Gets or sets the RpmCentralFrequency.                                                               |
| [`RpmRangeMaximum`](#ANSYSAnalysisSettings.RpmRangeMaximum)                                                                  | Gets or sets the RpmRangeMaximum.                                                                   |
| [`RpmRangeMinimum`](#ANSYSAnalysisSettings.RpmRangeMinimum)                                                                  | Gets or sets the RpmRangeMinimum.                                                                   |
| [`TimeStep`](#ANSYSAnalysisSettings.TimeStep)                                                                                | Gets or sets the TimeStep.                                                                          |
| [`SpringStiffnessValue`](#ANSYSAnalysisSettings.SpringStiffnessValue)                                                        | Gets or sets the SpringStiffnessValue.                                                              |
| [`BaseRemovalType`](#ANSYSAnalysisSettings.BaseRemovalType)                                                                  | Gets or sets the BaseRemovalType.                                                                   |
| [`StiffnessCoefficientDefineBy`](#ANSYSAnalysisSettings.StiffnessCoefficientDefineBy)                                        | Gets or sets the StiffnessCoefficientDefineBy.                                                      |
| [`CacheResultsInMemory`](../../../../Mechanical/DataModel/Enums/CacheResultsInMemory.md#CacheResultsInMemory)                | Gets or sets the CacheResultsInMemory.                                                              |
| [`ParticipationFactor`](#ANSYSAnalysisSettings.ParticipationFactor)                                                          | Gets or sets the ParticipationFactor.                                                               |
| [`StoreResultsAt`](#ANSYSAnalysisSettings.StoreResultsAt)                                                                    | Gets or sets the StoreResultsAt.                                                                    |
| [`ConstantDamping`](#ANSYSAnalysisSettings.ConstantDamping)                                                                  | Gets or sets the ConstantDamping.                                                                   |
| [`ContactSplit`](#ANSYSAnalysisSettings.ContactSplit)                                                                        | Gets or sets the ContactSplit.                                                                      |
| [`ContactSummary`](#ANSYSAnalysisSettings.ContactSummary)                                                                    | Gets or sets the ContactSummary.                                                                    |
| [`ChargeConvergence`](#ANSYSAnalysisSettings.ChargeConvergence)                                                              | Gets or sets the ChargeConvergence.                                                                 |
| [`CurrentConvergence`](#ANSYSAnalysisSettings.CurrentConvergence)                                                            | Gets or sets the CurrentConvergence.                                                                |
| [`DisplacementConvergence`](#ANSYSAnalysisSettings.DisplacementConvergence)                                                  | Gets or sets the DisplacementConvergence.                                                           |
| [`AMPSConvergence`](#ANSYSAnalysisSettings.AMPSConvergence)                                                                  | Gets or sets the AMPSConvergence.                                                                   |
| [`CSGConvergence`](#ANSYSAnalysisSettings.CSGConvergence)                                                                    | Gets or sets the CSGConvergence.                                                                    |
| [`EnergyConvergence`](#ANSYSAnalysisSettings.EnergyConvergence)                                                              | Gets or sets the EnergyConvergence.                                                                 |
| [`ForceConvergence`](#ANSYSAnalysisSettings.ForceConvergence)                                                                | Gets or sets the ForceConvergence.                                                                  |
| [`HeatConvergence`](#ANSYSAnalysisSettings.HeatConvergence)                                                                  | Gets or sets the HeatConvergence.                                                                   |
| [`MomentConvergence`](#ANSYSAnalysisSettings.MomentConvergence)                                                              | Gets or sets the MomentConvergence.                                                                 |
| [`RotationConvergence`](#ANSYSAnalysisSettings.RotationConvergence)                                                          | Gets or sets the RotationConvergence.                                                               |
| [`TemperatureConvergence`](#ANSYSAnalysisSettings.TemperatureConvergence)                                                    | Gets or sets the TemperatureConvergence.                                                            |
| [`TemperatureConvergenceValue`](#ANSYSAnalysisSettings.TemperatureConvergenceValue)                                          | Gets or sets the TemperatureConvergenceValue.                                                       |
| [`VoltageConvergence`](#ANSYSAnalysisSettings.VoltageConvergence)                                                            | Gets or sets the VoltageConvergence.                                                                |
| [`CoriolisEffectApplied`](#ANSYSAnalysisSettings.CoriolisEffectApplied)                                                      | Gets or sets the CoriolisEffectApplied.                                                             |
| [`CreepEffects`](#ANSYSAnalysisSettings.CreepEffects)                                                                        | Gets or sets the CreepEffects.                                                                      |
| [`HarmonicIndexRange`](#ANSYSAnalysisSettings.HarmonicIndexRange)                                                            | Gets or sets the HarmonicIndexRange.                                                                |
| [`DampingDefineBy`](../../../../Mechanical/DataModel/Enums/DampingDefineBy.md#DampingDefineBy)                               | Gets or sets the DampingDefineBy.                                                                   |
| [`FarFieldRadiationSurface`](#ANSYSAnalysisSettings.FarFieldRadiationSurface)                                                | Gets or sets the FarFieldRadiationSurface.                                                          |
| [`ExpandResultsFrom`](#ANSYSAnalysisSettings.ExpandResultsFrom)                                                              | Gets or sets the ExpandResultsFrom.                                                                 |
| [`FrequencySpacing`](#ANSYSAnalysisSettings.FrequencySpacing)                                                                | Gets or sets the FrequencySpacing.                                                                  |
| [`FutureAnalysis`](#ANSYSAnalysisSettings.FutureAnalysis)                                                                    | Gets or sets the FutureAnalysis.                                                                    |
| [`GeneralMiscellaneousOption`](#ANSYSAnalysisSettings.GeneralMiscellaneousOption)                                            | Gets or sets the GeneralMiscellaneousOption.                                                        |
| [`MultistepType`](#ANSYSAnalysisSettings.MultistepType)                                                                      | Gets or sets the MultistepType.                                                                     |
| [`ModalFrequencyRange`](#ANSYSAnalysisSettings.ModalFrequencyRange)                                                          | Gets or sets the ModalFrequencyRange.                                                               |
| [`StoreResultsAtAllFrequencies`](#ANSYSAnalysisSettings.StoreResultsAtAllFrequencies)                                        | Gets or sets the StoreResultsAtAllFrequencies.                                                      |
| [`SolutionMethod`](#ANSYSAnalysisSettings.SolutionMethod)                                                                    | Gets or sets the SolutionMethod.                                                                    |
| [`IncludeNegativeLoadMultiplier`](#ANSYSAnalysisSettings.IncludeNegativeLoadMultiplier)                                      | Gets or sets the IncludeNegativeLoadMultiplier.                                                     |
| [`LineSearch`](#ANSYSAnalysisSettings.LineSearch)                                                                            | Gets or sets the LineSearch.                                                                        |
| [`GenerateMeshRestartPoints`](#ANSYSAnalysisSettings.GenerateMeshRestartPoints)                                              | Gets or sets the GenerateMeshRestartPoints.                                                         |
| [`MeshRetainFilesAfterFullSolve`](#ANSYSAnalysisSettings.MeshRetainFilesAfterFullSolve)                                      | Gets or sets the MeshRetainFilesAfterFullSolve.                                                     |
| [`MeshSaveAtLoadStep`](#ANSYSAnalysisSettings.MeshSaveAtLoadStep)                                                            | Gets or sets the MeshSaveAtLoadStep.                                                                |
| [`MeshSaveAtSubstep`](#ANSYSAnalysisSettings.MeshSaveAtSubstep)                                                              | Gets or sets the MeshSaveAtSubstep.                                                                 |
| [`ModeReuse`](#ANSYSAnalysisSettings.ModeReuse)                                                                              | Gets or sets the ModeReuse.                                                                         |
| [`ModesCombinationType`](../../../../Mechanical/DataModel/Enums/ModesCombinationType.md#ModesCombinationType)                | Gets or sets the ModesCombinationType.                                                              |
| [`ModeSelectionMethod`](../../../../Mechanical/DataModel/Enums/ModeSelectionMethod.md#ModeSelectionMethod)                   | Gets or sets the ModeSelectionMethod.                                                               |
| [`OnDemandExpansionOption`](#ANSYSAnalysisSettings.OnDemandExpansionOption)                                                  | Gets or sets the OnDemandExpansionOption.                                                           |
| [`NewtonRaphsonOption`](#ANSYSAnalysisSettings.NewtonRaphsonOption)                                                          | Gets or sets the NewtonRaphsonOption.                                                               |
| [`NodalForces`](#ANSYSAnalysisSettings.NodalForces)                                                                          | Gets or sets the NodalForces.                                                                       |
| [`ProjectToGeometry`](#ANSYSAnalysisSettings.ProjectToGeometry)                                                              | Gets or sets the ProjectToGeometry.                                                                 |
| [`RefinementAlgorithm`](#ANSYSAnalysisSettings.RefinementAlgorithm)                                                          | Gets or sets the RefinementAlgorithm.                                                               |
| [`RemeshingGradient`](#ANSYSAnalysisSettings.RemeshingGradient)                                                              | Gets or sets the RemeshingGradient.                                                                 |
| [`NonLinearFormulation`](#ANSYSAnalysisSettings.NonLinearFormulation)                                                        | Gets or sets the NonLinearFormulation.                                                              |
| [`NumericalDamping`](#ANSYSAnalysisSettings.NumericalDamping)                                                                | Gets or sets the NumericalDamping.                                                                  |
| [`Expansion`](#ANSYSAnalysisSettings.Expansion)                                                                              | Gets the Expansion.                                                                                 |
| [`ViewFactorMethod`](#ANSYSAnalysisSettings.ViewFactorMethod)                                                                | Gets or sets the ViewFactorMethod.                                                                  |
| [`RadiositySolver`](#ANSYSAnalysisSettings.RadiositySolver)                                                                  | Gets or sets the RadiositySolver.                                                                   |
| [`CombineRestartFiles`](#ANSYSAnalysisSettings.CombineRestartFiles)                                                          | Gets or sets the CombineRestartFiles.                                                               |
| [`GenerateRestartPoints`](#ANSYSAnalysisSettings.GenerateRestartPoints)                                                      | Gets or sets the GenerateRestartPoints.                                                             |
| [`RetainFilesAfterFullSolve`](#ANSYSAnalysisSettings.RetainFilesAfterFullSolve)                                              | Gets or sets the RetainFilesAfterFullSolve.                                                         |
| [`RestartType`](../../../../Mechanical/DataModel/Enums/RestartType.md#RestartType)                                           | Gets or sets the RestartType.                                                                       |
| [`ResultFileCompression`](#ANSYSAnalysisSettings.ResultFileCompression)                                                      | Gets or sets the ResultFileCompression.                                                             |
| [`RpmFrequencySpacing`](#ANSYSAnalysisSettings.RpmFrequencySpacing)                                                          | Gets or sets the RpmFrequencySpacing.                                                               |
| [`SaveAtLoadStep`](#ANSYSAnalysisSettings.SaveAtLoadStep)                                                                    | Gets or sets the SaveAtLoadStep.                                                                    |
| [`SaveAtSubstep`](#ANSYSAnalysisSettings.SaveAtSubstep)                                                                      | Gets or sets the SaveAtSubstep.                                                                     |
| [`ScatteredFieldFormulation`](../../../../Mechanical/DataModel/Enums/ScatteredFieldFormulation.md#ScatteredFieldFormulation) | Gets or sets the ScatteredFieldFormulation.                                                         |
| [`ScatteringOutputType`](../../../../Mechanical/DataModel/Enums/ScatteringOutputType.md#ScatteringOutputType)                | Gets or sets the ScatteringOutputType.                                                              |
| [`SolverUnitSystem`](#ANSYSAnalysisSettings.SolverUnitSystem)                                                                | Gets or sets the SolverUnitSystem.                                                                  |
| [`SolverPivotChecking`](../../../../Mechanical/DataModel/Enums/SolverPivotChecking.md#SolverPivotChecking)                   | Gets or sets the SolverPivotChecking.                                                               |
| [`SolverType`](../../../../Mechanical/DataModel/Enums/SolverType.md#SolverType)                                              | Gets or sets the SolverType.                                                                        |
| [`SolverUnits`](#ANSYSAnalysisSettings.SolverUnits)                                                                          | Gets or sets the SolverUnits.                                                                       |
| [`SpectrumType`](../../../../Mechanical/DataModel/Enums/SpectrumType.md#SpectrumType)                                        | Gets or sets the SpectrumType.                                                                      |
| [`Stabilization`](#ANSYSAnalysisSettings.Stabilization)                                                                      | Gets or sets the Stabilization.                                                                     |
| [`StabilizationActivationForFirstSubstep`](#ANSYSAnalysisSettings.StabilizationActivationForFirstSubstep)                    | Gets or sets the StabilizationActivationForFirstSubstep.                                            |
| [`StabilizationMethod`](../../../../Mechanical/DataModel/Enums/StabilizationMethod.md#StabilizationMethod)                   | Gets or sets the StabilizationMethod.                                                               |
| [`StoreModalResults`](#ANSYSAnalysisSettings.StoreModalResults)                                                              | Gets or sets the StoreModalResults.                                                                 |
| [`DefineBy`](#ANSYSAnalysisSettings.DefineBy)                                                                                | Gets or sets the DefineBy.                                                                          |
| [`TransientApplication`](#ANSYSAnalysisSettings.TransientApplication)                                                        | Gets or sets the TransientApplication.                                                              |
| [`AutomaticTimeStepping`](../../../../Mechanical/DataModel/Enums/AutomaticTimeStepping.md#AutomaticTimeStepping)             | Gets or sets the AutomaticTimeStepping.                                                             |
| [`RetainModesymFileAfterSolve`](#ANSYSAnalysisSettings.RetainModesymFileAfterSolve)                                          | Gets or sets the RetainModesymFileAfterSolve.                                                       |
| [`WeakSprings`](#ANSYSAnalysisSettings.WeakSprings)                                                                          | Gets or sets the WeakSprings.                                                                       |
| [`SpringStiffness`](#ANSYSAnalysisSettings.SpringStiffness)                                                                  | Gets or sets the SpringStiffness.                                                                   |
| [`IgnoreAcousticDamping`](#ANSYSAnalysisSettings.IgnoreAcousticDamping)                                                      | Gets or sets the IgnoreAcousticDamping.                                                             |
| [`CalculateAcceleration`](#ANSYSAnalysisSettings.CalculateAcceleration)                                                      | Gets or sets the CalculateAcceleration.                                                             |
| [`BackStress`](#ANSYSAnalysisSettings.BackStress)                                                                            | Gets or sets the BackStress.                                                                        |
| [`ContactMiscellaneous`](#ANSYSAnalysisSettings.ContactMiscellaneous)                                                        | Gets or sets the ContactMiscellaneous.                                                              |
| [`CStarIntegral`](#ANSYSAnalysisSettings.CStarIntegral)                                                                      | Gets or sets the CStarIntegral.                                                                     |
| [`ElementCurrentDensity`](#ANSYSAnalysisSettings.ElementCurrentDensity)                                                      | Gets or sets the ElementCurrentDensity.                                                             |
| [`FieldIntensityandFluxDensity`](#ANSYSAnalysisSettings.FieldIntensityandFluxDensity)                                        | Gets or sets the FieldIntensityandFluxDensity.                                                      |
| [`ElectromagneticNodalForces`](#ANSYSAnalysisSettings.ElectromagneticNodalForces)                                            | Gets or sets the ElectromagneticNodalForces.                                                        |
| [`ContactData`](#ANSYSAnalysisSettings.ContactData)                                                                          | Gets or sets the ContactData.                                                                       |
| [`CalculateVolumeEnergy`](#ANSYSAnalysisSettings.CalculateVolumeEnergy)                                                      | Gets or sets the CalculateVolumeEnergy.                                                             |
| [`NonlinearData`](#ANSYSAnalysisSettings.NonlinearData)                                                                      | Gets or sets the NonlinearData.                                                                     |
| [`CalculateEnergy`](#ANSYSAnalysisSettings.CalculateEnergy)                                                                  | Gets or sets the CalculateEnergy.                                                                   |
| [`CalculateEulerAngles`](#ANSYSAnalysisSettings.CalculateEulerAngles)                                                        | Gets or sets the CalculateEulerAngles.                                                              |
| [`HeatGenerationRate`](#ANSYSAnalysisSettings.HeatGenerationRate)                                                            | Gets or sets the HeatGenerationRate.                                                                |
| [`JIntegral`](#ANSYSAnalysisSettings.JIntegral)                                                                              | Gets or sets the JIntegral.                                                                         |
| [`MaterialForce`](#ANSYSAnalysisSettings.MaterialForce)                                                                      | Gets or sets the MaterialForce.                                                                     |
| [`CalculateReactions`](#ANSYSAnalysisSettings.CalculateReactions)                                                            | Gets or sets the CalculateReactions.                                                                |
| [`SIFS`](#ANSYSAnalysisSettings.SIFS)                                                                                        | Gets or sets the SIFS.                                                                              |
| [`Strain`](#ANSYSAnalysisSettings.Strain)                                                                                    | Gets or sets the Strain.                                                                            |
| [`Stress`](#ANSYSAnalysisSettings.Stress)                                                                                    | Gets or sets the Stress.                                                                            |
| [`CalculateThermalFlux`](#ANSYSAnalysisSettings.CalculateThermalFlux)                                                        | Gets or sets the CalculateThermalFlux.                                                              |
| [`TStress`](#ANSYSAnalysisSettings.TStress)                                                                                  | Gets or sets the TStress.                                                                           |
| [`CalculateVelocity`](#ANSYSAnalysisSettings.CalculateVelocity)                                                              | Gets or sets the CalculateVelocity.                                                                 |
| [`CalculateVelocityAndAcceleration`](#ANSYSAnalysisSettings.CalculateVelocityAndAcceleration)                                | Gets or sets the CalculateVelocityAndAcceleration.                                                  |
| [`CampbellDiagram`](../Results/ResultTrackers/CampbellDiagram.md#CampbellDiagram)                                            | Gets or sets the CampbellDiagram.                                                                   |
| [`CarryOverTimeStep`](#ANSYSAnalysisSettings.CarryOverTimeStep)                                                              | Gets or sets the CarryOverTimeStep.                                                                 |
| [`DeleteUnneededFiles`](#ANSYSAnalysisSettings.DeleteUnneededFiles)                                                          | Gets or sets the DeleteUnneededFiles.                                                               |
| [`CyclicModeSuperposition`](#ANSYSAnalysisSettings.CyclicModeSuperposition)                                                  | Gets or sets the CyclicModeSuperposition.                                                           |
| [`Damped`](#ANSYSAnalysisSettings.Damped)                                                                                    | Gets or sets the Damped.                                                                            |
| [`EqvDampingRatioFromModal`](#ANSYSAnalysisSettings.EqvDampingRatioFromModal)                                                | Gets or sets the EqvDampingRatioFromModal.                                                          |
| [`ExcludeInsignificantModes`](#ANSYSAnalysisSettings.ExcludeInsignificantModes)                                              | Gets or sets the ExcludeInsignificantModes.                                                         |
| [`ExportHighStrains`](#ANSYSAnalysisSettings.ExportHighStrains)                                                              | Gets or sets the ExportHighStrains.                                                                 |
| [`ExportLayerEndTemperature`](#ANSYSAnalysisSettings.ExportLayerEndTemperature)                                              | Gets or sets the ExportLayerEndTemperature.                                                         |
| [`ExportRecoaterInterference`](#ANSYSAnalysisSettings.ExportRecoaterInterference)                                            | Gets or sets the ExportRecoaterInterference.                                                        |
| [`FractureSolverControls`](#ANSYSAnalysisSettings.FractureSolverControls)                                                    | Gets or sets the FractureSolverControls.                                                            |
| [`GeneralMiscellaneous`](#ANSYSAnalysisSettings.GeneralMiscellaneous)                                                        | Gets or sets the GeneralMiscellaneous.                                                              |
| [`ClusterResults`](#ANSYSAnalysisSettings.ClusterResults)                                                                    | Gets or sets the ClusterResults.                                                                    |
| [`UserDefinedFrequencies`](#ANSYSAnalysisSettings.UserDefinedFrequencies)                                                    | Gets or sets the UserDefinedFrequencies.                                                            |
| [`Multistep`](#ANSYSAnalysisSettings.Multistep)                                                                              | Gets or sets the Multistep.                                                                         |
| [`IncludeResidualVector`](#ANSYSAnalysisSettings.IncludeResidualVector)                                                      | Gets or sets the IncludeResidualVector.                                                             |
| [`InverseOption`](#ANSYSAnalysisSettings.InverseOption)                                                                      | Gets or sets the InverseOption.                                                                     |
| [`KeepModalResults`](#ANSYSAnalysisSettings.KeepModalResults)                                                                | Gets or sets the KeepModalResults.                                                                  |
| [`KeepPreStressLoadPattern`](#ANSYSAnalysisSettings.KeepPreStressLoadPattern)                                                | Gets or sets the KeepPreStressLoadPattern.                                                          |
| [`NonLinearSolution`](#ANSYSAnalysisSettings.NonLinearSolution)                                                              | Gets the NonLinearSolution.                                                                         |
| [`QuasiStaticSolution`](#ANSYSAnalysisSettings.QuasiStaticSolution)                                                          | Gets or sets the QuasiStaticSolution.                                                               |
| [`LimitSearchToRange`](#ANSYSAnalysisSettings.LimitSearchToRange)                                                            | Gets or sets the LimitSearchToRange.                                                                |
| [`SaveMAPDLDB`](#ANSYSAnalysisSettings.SaveMAPDLDB)                                                                          | Gets or sets the SaveMAPDLDB.                                                                       |
| [`StoreComplexSolution`](#ANSYSAnalysisSettings.StoreComplexSolution)                                                        | Gets or sets the StoreComplexSolution.                                                              |
| [`InertiaRelief`](#ANSYSAnalysisSettings.InertiaRelief)                                                                      | Gets or sets the InertiaRelief.                                                                     |
| [`LargeDeflection`](#ANSYSAnalysisSettings.LargeDeflection)                                                                  | Gets or sets the LargeDeflection.                                                                   |
| [`TimeIntegration`](#ANSYSAnalysisSettings.TimeIntegration)                                                                  | Gets or sets the TimeIntegration.                                                                   |
| [`ElectricOnly`](#ANSYSAnalysisSettings.ElectricOnly)                                                                        | Gets or sets the ElectricOnly.                                                                      |
| [`StructuralOnly`](#ANSYSAnalysisSettings.StructuralOnly)                                                                    | Gets or sets the StructuralOnly.                                                                    |
| [`ThermalOnly`](#ANSYSAnalysisSettings.ThermalOnly)                                                                          | Gets or sets the ThermalOnly.                                                                       |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory)       | Gets the current DataModelObject’s category.                                                        |
| [`Graph`](#ANSYSAnalysisSettings.Graph)                                                                                      | Graph property.                                                                                     |
| [`ScratchSolverFilesDirectory`](#ANSYSAnalysisSettings.ScratchSolverFilesDirectory)                                          | Gets the ScratchSolverFilesDirectory.                                                               |
| [`SolverFilesDirectory`](#ANSYSAnalysisSettings.SolverFilesDirectory)                                                        | Gets the SolverFilesDirectory.                                                                      |
| [`Children`](#ANSYSAnalysisSettings.Children)                                                                                | Gets the list of children.                                                                          |
| [`Comments`](#ANSYSAnalysisSettings.Comments)                                                                                | Gets the list of associated comments.                                                               |
| [`Figures`](#ANSYSAnalysisSettings.Figures)                                                                                  | Gets the list of associated figures.                                                                |
| [`Images`](#ANSYSAnalysisSettings.Images)                                                                                    | Gets the list of associated images.                                                                 |
| [`InternalObject`](#id0)                                                                                                     | Gets the internal object. For advanced usage only.                                                  |
| [`Properties`](#ANSYSAnalysisSettings.Properties)                                                                            | Gets the list of properties for this object.                                                        |
| [`VisibleProperties`](#ANSYSAnalysisSettings.VisibleProperties)                                                              | Gets the list of properties that are visible for this object.                                       |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AnalysisSettings import ANSYSAnalysisSettings
```

<a id="property-detail"></a>

## Property detail

<a id="ANSYSAnalysisSettings.StepName"></a>

### *property* ANSYSAnalysisSettings.StepName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Step Name.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.AMStepType"></a>

### *property* ANSYSAnalysisSettings.AMStepType *: [Ansys.Mechanical.DataModel.Enums.AMProcessStepType](../../../../Mechanical/DataModel/Enums/AMProcessStepType.md#AMProcessStepType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Process Step Type.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.AMSubstepsToApplyHeats"></a>

### *property* ANSYSAnalysisSettings.AMSubstepsToApplyHeats *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Substeps to Apply Heat.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.AMSubstepsBetweenHeating"></a>

### *property* ANSYSAnalysisSettings.AMSubstepsBetweenHeating *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Substeps Between Heating.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.AMCooldownNumberOfSubsteps"></a>

### *property* ANSYSAnalysisSettings.AMCooldownNumberOfSubsteps *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Cooldown Number of Substeps.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CooldownTimeType"></a>

### *property* ANSYSAnalysisSettings.CooldownTimeType *: [Ansys.Mechanical.DataModel.Enums.AMCooldownTimeType](../../../../Mechanical/DataModel/Enums/AMCooldownTimeType.md#AMCooldownTimeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Cooldown Time Type.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CooldownTime"></a>

### *property* ANSYSAnalysisSettings.CooldownTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Cooldown Time.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.LayersToBuild"></a>

### *property* ANSYSAnalysisSettings.LayersToBuild *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Layers to Build.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ReferenceTemperatureType"></a>

### *property* ANSYSAnalysisSettings.ReferenceTemperatureType *: [Ansys.Mechanical.DataModel.Enums.AMReferenceTemperatureType](../../../../Mechanical/DataModel/Enums/AMReferenceTemperatureType.md#AMReferenceTemperatureType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Reference Temperature Type.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ReferenceTemperature"></a>

### *property* ANSYSAnalysisSettings.ReferenceTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Reference Temperature.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RelaxationTemperatureType"></a>

### *property* ANSYSAnalysisSettings.RelaxationTemperatureType *: [Ansys.Mechanical.DataModel.Enums.AMRelaxationTemperatureType](../../../../Mechanical/DataModel/Enums/AMRelaxationTemperatureType.md#AMRelaxationTemperatureType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Relaxation Temperature Type.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NumberOfRestartPoints"></a>

### *property* ANSYSAnalysisSettings.NumberOfRestartPoints *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets Number of Restart Points.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CurrentRestartPoint"></a>

### *property* ANSYSAnalysisSettings.CurrentRestartPoint *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Current Restart Point.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.AggressiveRemeshing"></a>

### *property* ANSYSAnalysisSettings.AggressiveRemeshing *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AggressiveRemeshing.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SpinSoftening"></a>

### *property* ANSYSAnalysisSettings.SpinSoftening *: [Ansys.Mechanical.DataModel.Enums.SpinSofteningType](../../../../Mechanical/DataModel/Enums/SpinSofteningType.md#SpinSofteningType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpinSoftening.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.UserDefinedFrequencySteps"></a>

### *property* ANSYSAnalysisSettings.UserDefinedFrequencySteps *: System.Collections.Generic.IList[Ansys.Core.Units.Quantity] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UserDefinedFrequencySteps.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.InternalObject"></a>

### *property* ANSYSAnalysisSettings.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAnalysisSettings | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MassCoefficient"></a>

### *property* ANSYSAnalysisSettings.MassCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MassCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StiffnessCoefficient"></a>

### *property* ANSYSAnalysisSettings.StiffnessCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.DampingRatio"></a>

### *property* ANSYSAnalysisSettings.DampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ConstantDampingRatio"></a>

### *property* ANSYSAnalysisSettings.ConstantDampingRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstantDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StructuralDampingCoefficient"></a>

### *property* ANSYSAnalysisSettings.StructuralDampingCoefficient *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StructuralDampingCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ContactSplitMaxNum"></a>

### *property* ANSYSAnalysisSettings.ContactSplitMaxNum *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSplitMaxNum.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ChargeConvergenceTolerance"></a>

### *property* ANSYSAnalysisSettings.ChargeConvergenceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChargeConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CurrentConvergenceTolerance"></a>

### *property* ANSYSAnalysisSettings.CurrentConvergenceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EmagAMPSConvergenceTolerance"></a>

### *property* ANSYSAnalysisSettings.EmagAMPSConvergenceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EmagAMPSConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EmagCSGConvergenceTolerance"></a>

### *property* ANSYSAnalysisSettings.EmagCSGConvergenceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EmagCSGConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EnergyConvergenceTolerance"></a>

### *property* ANSYSAnalysisSettings.EnergyConvergenceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.HeatConvergenceTolerance"></a>

### *property* ANSYSAnalysisSettings.HeatConvergenceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HeatConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.TemperatureConvergenceTolerance"></a>

### *property* ANSYSAnalysisSettings.TemperatureConvergenceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemperatureConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.VoltageConvergenceTolerance"></a>

### *property* ANSYSAnalysisSettings.VoltageConvergenceTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VoltageConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CreepLimitRatio"></a>

### *property* ANSYSAnalysisSettings.CreepLimitRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CreepLimitRatio.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CurrentStepNumberHarmonic"></a>

### *property* ANSYSAnalysisSettings.CurrentStepNumberHarmonic *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentStepNumberHarmonic.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CurrentStepNumber"></a>

### *property* ANSYSAnalysisSettings.CurrentStepNumber *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EngineOrderofExcitation"></a>

### *property* ANSYSAnalysisSettings.EngineOrderofExcitation *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EngineOrderofExcitation.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MaximumHarmonicIndex"></a>

### *property* ANSYSAnalysisSettings.MaximumHarmonicIndex *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumHarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MinimumHarmonicIndex"></a>

### *property* ANSYSAnalysisSettings.MinimumHarmonicIndex *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumHarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.HarmonicIndexInterval"></a>

### *property* ANSYSAnalysisSettings.HarmonicIndexInterval *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndexInterval.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ClusterNumber"></a>

### *property* ANSYSAnalysisSettings.ClusterNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ClusterNumber.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SolutionIntervals"></a>

### *property* ANSYSAnalysisSettings.SolutionIntervals *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionIntervals.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.KrylovSubspaceDimension"></a>

### *property* ANSYSAnalysisSettings.KrylovSubspaceDimension *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KrylovSubspaceDimension.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.KrylovResidualTolerance"></a>

### *property* ANSYSAnalysisSettings.KrylovResidualTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KrylovResidualTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.HarmonicOrders"></a>

### *property* ANSYSAnalysisSettings.HarmonicOrders *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicOrders.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.InitialSubsteps"></a>

### *property* ANSYSAnalysisSettings.InitialSubsteps *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialSubsteps.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.InverseOptionEndStep"></a>

### *property* ANSYSAnalysisSettings.InverseOptionEndStep *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InverseOptionEndStep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MaximumSubsteps"></a>

### *property* ANSYSAnalysisSettings.MaximumSubsteps *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumSubsteps.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MeshLoadStepValue"></a>

### *property* ANSYSAnalysisSettings.MeshLoadStepValue *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshLoadStepValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MinimumSubsteps"></a>

### *property* ANSYSAnalysisSettings.MinimumSubsteps *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumSubsteps.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ModalNumberOfPoints"></a>

### *property* ANSYSAnalysisSettings.ModalNumberOfPoints *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalNumberOfPoints.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ModeSignificanceLevel"></a>

### *property* ANSYSAnalysisSettings.ModeSignificanceLevel *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeSignificanceLevel.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GlobalSizeRatioQualityImprovement"></a>

### *property* ANSYSAnalysisSettings.GlobalSizeRatioQualityImprovement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalSizeRatioQualityImprovement.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GlobalSizeRatioQualityRefinement"></a>

### *property* ANSYSAnalysisSettings.GlobalSizeRatioQualityRefinement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalSizeRatioQualityRefinement.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NumberOfSculptedLayersQualityImprovement"></a>

### *property* ANSYSAnalysisSettings.NumberOfSculptedLayersQualityImprovement *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSculptedLayersQualityImprovement.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NumberOfSculptedLayersRefinement"></a>

### *property* ANSYSAnalysisSettings.NumberOfSculptedLayersRefinement *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSculptedLayersRefinement.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RemeshingToleranceQualityImprovement"></a>

### *property* ANSYSAnalysisSettings.RemeshingToleranceQualityImprovement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshingToleranceQualityImprovement.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RemeshingToleranceRefinement"></a>

### *property* ANSYSAnalysisSettings.RemeshingToleranceRefinement *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshingToleranceRefinement.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StoreResulsAtValue"></a>

### *property* ANSYSAnalysisSettings.StoreResulsAtValue *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreResulsAtValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NumberOfModesToUse"></a>

### *property* ANSYSAnalysisSettings.NumberOfModesToUse *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfModesToUse.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NumberOfRPMs"></a>

### *property* ANSYSAnalysisSettings.NumberOfRPMs *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfRPMs.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NumberOfSteps"></a>

### *property* ANSYSAnalysisSettings.NumberOfSteps *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSteps.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NumberOfSubSteps"></a>

### *property* ANSYSAnalysisSettings.NumberOfSubSteps *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSubSteps.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NumericalDampingValue"></a>

### *property* ANSYSAnalysisSettings.NumericalDampingValue *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumericalDampingValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NumLoadVectors"></a>

### *property* ANSYSAnalysisSettings.NumLoadVectors *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumLoadVectors.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MaximumModesToFind"></a>

### *property* ANSYSAnalysisSettings.MaximumModesToFind *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumModesToFind.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NumberOfZones"></a>

### *property* ANSYSAnalysisSettings.NumberOfZones *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfZones.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.AxisymmetryDivisions"></a>

### *property* ANSYSAnalysisSettings.AxisymmetryDivisions *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AxisymmetryDivisions.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.HemicubeResolution"></a>

### *property* ANSYSAnalysisSettings.HemicubeResolution *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HemicubeResolution.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.FluxConvergence"></a>

### *property* ANSYSAnalysisSettings.FluxConvergence *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluxConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MaximumIteration"></a>

### *property* ANSYSAnalysisSettings.MaximumIteration *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumIteration.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.OverRelaxation"></a>

### *property* ANSYSAnalysisSettings.OverRelaxation *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OverRelaxation.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ReformulationTolerance"></a>

### *property* ANSYSAnalysisSettings.ReformulationTolerance *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReformulationTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RestartAtLoadStep"></a>

### *property* ANSYSAnalysisSettings.RestartAtLoadStep *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RestartAtLoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RestartAtSubstep"></a>

### *property* ANSYSAnalysisSettings.RestartAtSubstep *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RestartAtSubstep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RestartAtTime"></a>

### *property* ANSYSAnalysisSettings.RestartAtTime *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RestartAtTime.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RpmClusterNumber"></a>

### *property* ANSYSAnalysisSettings.RpmClusterNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmClusterNumber.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RpmSolutionIntervals"></a>

### *property* ANSYSAnalysisSettings.RpmSolutionIntervals *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmSolutionIntervals.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MaximumPointsToSavePerStep"></a>

### *property* ANSYSAnalysisSettings.MaximumPointsToSavePerStep *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumPointsToSavePerStep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SaveSpecifiedLoadStep"></a>

### *property* ANSYSAnalysisSettings.SaveSpecifiedLoadStep *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveSpecifiedLoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.LoadStepValue"></a>

### *property* ANSYSAnalysisSettings.LoadStepValue *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SignificanceThreshold"></a>

### *property* ANSYSAnalysisSettings.SignificanceThreshold *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SignificanceThreshold.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StabilizationDampingFactor"></a>

### *property* ANSYSAnalysisSettings.StabilizationDampingFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationDampingFactor.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StabilizationEnergyDissipationRatio"></a>

### *property* ANSYSAnalysisSettings.StabilizationEnergyDissipationRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationEnergyDissipationRatio.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StabilizationForceLimit"></a>

### *property* ANSYSAnalysisSettings.StabilizationForceLimit *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationForceLimit.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.TransientApplicationUserDefined"></a>

### *property* ANSYSAnalysisSettings.TransientApplicationUserDefined *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransientApplicationUserDefined.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SpringStiffnessFactor"></a>

### *property* ANSYSAnalysisSettings.SpringStiffnessFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringStiffnessFactor.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RelaxationTemperature"></a>

### *property* ANSYSAnalysisSettings.RelaxationTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelaxationTemperature.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Frequency"></a>

### *property* ANSYSAnalysisSettings.Frequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CentralFrequency"></a>

### *property* ANSYSAnalysisSettings.CentralFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CentralFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ChargeConvergenceMinimumReference"></a>

### *property* ANSYSAnalysisSettings.ChargeConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChargeConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ChargeConvergenceValue"></a>

### *property* ANSYSAnalysisSettings.ChargeConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChargeConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CurrentConvergenceMinimumReference"></a>

### *property* ANSYSAnalysisSettings.CurrentConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CurrentConvergenceValue"></a>

### *property* ANSYSAnalysisSettings.CurrentConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.DisplacementConvergenceMinimumReference"></a>

### *property* ANSYSAnalysisSettings.DisplacementConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplacementConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.DisplacementConvergenceTolerance"></a>

### *property* ANSYSAnalysisSettings.DisplacementConvergenceTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplacementConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.DisplacementConvergenceValue"></a>

### *property* ANSYSAnalysisSettings.DisplacementConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplacementConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EmagAMPSConvergenceMinimumReference"></a>

### *property* ANSYSAnalysisSettings.EmagAMPSConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EmagAMPSConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EmagAMPSConvergenceValue"></a>

### *property* ANSYSAnalysisSettings.EmagAMPSConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EmagAMPSConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EmagCSGConvergenceMinimumReference"></a>

### *property* ANSYSAnalysisSettings.EmagCSGConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EmagCSGConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EmagCSGConvergenceValue"></a>

### *property* ANSYSAnalysisSettings.EmagCSGConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EmagCSGConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EnergyConvergenceMinimumReference"></a>

### *property* ANSYSAnalysisSettings.EnergyConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EnergyConvergenceValue"></a>

### *property* ANSYSAnalysisSettings.EnergyConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ForceConvergenceMinimumReference"></a>

### *property* ANSYSAnalysisSettings.ForceConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ForceConvergenceTolerance"></a>

### *property* ANSYSAnalysisSettings.ForceConvergenceTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ForceConvergenceValue"></a>

### *property* ANSYSAnalysisSettings.ForceConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.HeatConvergenceMinimumReference"></a>

### *property* ANSYSAnalysisSettings.HeatConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HeatConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.HeatConvergenceValue"></a>

### *property* ANSYSAnalysisSettings.HeatConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HeatConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MomentConvergenceMinimumReference"></a>

### *property* ANSYSAnalysisSettings.MomentConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MomentConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MomentConvergenceTolerance"></a>

### *property* ANSYSAnalysisSettings.MomentConvergenceTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MomentConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MomentConvergenceValue"></a>

### *property* ANSYSAnalysisSettings.MomentConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MomentConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RotationConvergenceMinimumReference"></a>

### *property* ANSYSAnalysisSettings.RotationConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RotationConvergenceTolerance"></a>

### *property* ANSYSAnalysisSettings.RotationConvergenceTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.TemperatureConvergenceMinimumReference"></a>

### *property* ANSYSAnalysisSettings.TemperatureConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemperatureConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.TemperatureConvergenceInputValue"></a>

### *property* ANSYSAnalysisSettings.TemperatureConvergenceInputValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemperatureConvergenceInputValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.VoltageConvergenceMinimumReference"></a>

### *property* ANSYSAnalysisSettings.VoltageConvergenceMinimumReference *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VoltageConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.VoltageConvergenceValue"></a>

### *property* ANSYSAnalysisSettings.VoltageConvergenceValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VoltageConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RemovalDirection"></a>

### *property* ANSYSAnalysisSettings.RemovalDirection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemovalDirection.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RemovalStepSize"></a>

### *property* ANSYSAnalysisSettings.RemovalStepSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemovalStepSize.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StepEndTime"></a>

### *property* ANSYSAnalysisSettings.StepEndTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepEndTime.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MinimumElementSize"></a>

### *property* ANSYSAnalysisSettings.MinimumElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Minimum Element Size property for Geometry Based Adaptivity.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RangeMaximum"></a>

### *property* ANSYSAnalysisSettings.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Range Maximum property in Options group of Analysis Settings in Harmonic Analysis.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RangeMinimum"></a>

### *property* ANSYSAnalysisSettings.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Range Minimum property in Options group of Analysis Settings in Harmonic Analysis.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.KrylovSubspaceFrequency"></a>

### *property* ANSYSAnalysisSettings.KrylovSubspaceFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KrylovSubspaceFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ModalRangeMaximum"></a>

### *property* ANSYSAnalysisSettings.ModalRangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalRangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ModalRangeMinimum"></a>

### *property* ANSYSAnalysisSettings.ModalRangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalRangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.InitialTimeStep"></a>

### *property* ANSYSAnalysisSettings.InitialTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SearchRangeMaximum"></a>

### *property* ANSYSAnalysisSettings.SearchRangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Range Maximum property in Options group of Analysis Settings in Modal Analysis.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MaximumTimeStep"></a>

### *property* ANSYSAnalysisSettings.MaximumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SearchRangeMinimum"></a>

### *property* ANSYSAnalysisSettings.SearchRangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Range Minimum property in Options group of Analysis Settings in Modal Analysis.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MinimumTimeStep"></a>

### *property* ANSYSAnalysisSettings.MinimumTimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.BoundaryAngle"></a>

### *property* ANSYSAnalysisSettings.BoundaryAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryAngle.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EdgeSplittingAngle"></a>

### *property* ANSYSAnalysisSettings.EdgeSplittingAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeSplittingAngle.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SolverTolerance"></a>

### *property* ANSYSAnalysisSettings.SolverTolerance *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RpmValue"></a>

### *property* ANSYSAnalysisSettings.RpmValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RpmCentralFrequency"></a>

### *property* ANSYSAnalysisSettings.RpmCentralFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmCentralFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RpmRangeMaximum"></a>

### *property* ANSYSAnalysisSettings.RpmRangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmRangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RpmRangeMinimum"></a>

### *property* ANSYSAnalysisSettings.RpmRangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmRangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.TimeStep"></a>

### *property* ANSYSAnalysisSettings.TimeStep *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeStep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SpringStiffnessValue"></a>

### *property* ANSYSAnalysisSettings.SpringStiffnessValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringStiffnessValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.BaseRemovalType"></a>

### *property* ANSYSAnalysisSettings.BaseRemovalType *: [Ansys.Mechanical.DataModel.Enums.AMBaseRemovalType](../../../../Mechanical/DataModel/Enums/AMBaseRemovalType.md#AMBaseRemovalType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BaseRemovalType.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StiffnessCoefficientDefineBy"></a>

### *property* ANSYSAnalysisSettings.StiffnessCoefficientDefineBy *: [Ansys.Mechanical.DataModel.Enums.DampingType](../../../../Mechanical/DataModel/Enums/DampingType.md#DampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessCoefficientDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CacheResultsInMemory"></a>

### *property* ANSYSAnalysisSettings.CacheResultsInMemory *: [Ansys.Mechanical.DataModel.Enums.CacheResultsInMemory](../../../../Mechanical/DataModel/Enums/CacheResultsInMemory.md#CacheResultsInMemory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CacheResultsInMemory.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ParticipationFactor"></a>

### *property* ANSYSAnalysisSettings.ParticipationFactor *: [Ansys.Mechanical.DataModel.Enums.CalculateParticipationFactorResult](../../../../Mechanical/DataModel/Enums/CalculateParticipationFactorResult.md#CalculateParticipationFactorResult) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ParticipationFactor.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StoreResultsAt"></a>

### *property* ANSYSAnalysisSettings.StoreResultsAt *: [Ansys.Mechanical.DataModel.Enums.TimePointsOptions](../../../../Mechanical/DataModel/Enums/TimePointsOptions.md#TimePointsOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreResultsAt.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ConstantDamping"></a>

### *property* ANSYSAnalysisSettings.ConstantDamping *: [Ansys.Mechanical.DataModel.Enums.ConstantDampingType](../../../../Mechanical/DataModel/Enums/ConstantDampingType.md#ConstantDampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstantDamping.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ContactSplit"></a>

### *property* ANSYSAnalysisSettings.ContactSplit *: [Ansys.Mechanical.DataModel.Enums.ContactSplitType](../../../../Mechanical/DataModel/Enums/ContactSplitType.md#ContactSplitType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSplit.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ContactSummary"></a>

### *property* ANSYSAnalysisSettings.ContactSummary *: [Ansys.Mechanical.DataModel.Enums.ContactSummaryType](../../../../Mechanical/DataModel/Enums/ContactSummaryType.md#ContactSummaryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSummary.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ChargeConvergence"></a>

### *property* ANSYSAnalysisSettings.ChargeConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChargeConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CurrentConvergence"></a>

### *property* ANSYSAnalysisSettings.CurrentConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.DisplacementConvergence"></a>

### *property* ANSYSAnalysisSettings.DisplacementConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplacementConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.AMPSConvergence"></a>

### *property* ANSYSAnalysisSettings.AMPSConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AMPSConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CSGConvergence"></a>

### *property* ANSYSAnalysisSettings.CSGConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CSGConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EnergyConvergence"></a>

### *property* ANSYSAnalysisSettings.EnergyConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ForceConvergence"></a>

### *property* ANSYSAnalysisSettings.ForceConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.HeatConvergence"></a>

### *property* ANSYSAnalysisSettings.HeatConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HeatConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MomentConvergence"></a>

### *property* ANSYSAnalysisSettings.MomentConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MomentConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RotationConvergence"></a>

### *property* ANSYSAnalysisSettings.RotationConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.TemperatureConvergence"></a>

### *property* ANSYSAnalysisSettings.TemperatureConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemperatureConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.TemperatureConvergenceValue"></a>

### *property* ANSYSAnalysisSettings.TemperatureConvergenceValue *: [Ansys.Mechanical.DataModel.Enums.NonLinearValueType](../../../../Mechanical/DataModel/Enums/NonLinearValueType.md#NonLinearValueType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemperatureConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.VoltageConvergence"></a>

### *property* ANSYSAnalysisSettings.VoltageConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VoltageConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CoriolisEffectApplied"></a>

### *property* ANSYSAnalysisSettings.CoriolisEffectApplied *: [Ansys.Mechanical.DataModel.Enums.CoriolisEffectType](../../../../Mechanical/DataModel/Enums/CoriolisEffectType.md#CoriolisEffectType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoriolisEffectApplied.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CreepEffects"></a>

### *property* ANSYSAnalysisSettings.CreepEffects *: [Ansys.Mechanical.DataModel.Enums.Creep](../../../../Mechanical/DataModel/Enums/Creep.md#Creep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CreepEffects.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.HarmonicIndexRange"></a>

### *property* ANSYSAnalysisSettings.HarmonicIndexRange *: [Ansys.Mechanical.DataModel.Enums.CyclicHarmonicIndex](../../../../Mechanical/DataModel/Enums/CyclicHarmonicIndex.md#CyclicHarmonicIndex) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndexRange.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.DampingDefineBy"></a>

### *property* ANSYSAnalysisSettings.DampingDefineBy *: [Ansys.Mechanical.DataModel.Enums.DampingDefineBy](../../../../Mechanical/DataModel/Enums/DampingDefineBy.md#DampingDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DampingDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.FarFieldRadiationSurface"></a>

### *property* ANSYSAnalysisSettings.FarFieldRadiationSurface *: [Ansys.Mechanical.DataModel.Enums.FarFieldRadiationSurfaceType](../../../../Mechanical/DataModel/Enums/FarFieldRadiationSurfaceType.md#FarFieldRadiationSurfaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FarFieldRadiationSurface.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ExpandResultsFrom"></a>

### *property* ANSYSAnalysisSettings.ExpandResultsFrom *: [Ansys.Mechanical.DataModel.Enums.ExpandResultFrom](../../../../Mechanical/DataModel/Enums/ExpandResultFrom.md#ExpandResultFrom) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExpandResultsFrom.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.FrequencySpacing"></a>

### *property* ANSYSAnalysisSettings.FrequencySpacing *: [Ansys.Mechanical.DataModel.Enums.FrequencySpacingType](../../../../Mechanical/DataModel/Enums/FrequencySpacingType.md#FrequencySpacingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencySpacing.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.FutureAnalysis"></a>

### *property* ANSYSAnalysisSettings.FutureAnalysis *: [Ansys.Mechanical.DataModel.Enums.FutureIntentType](../../../../Mechanical/DataModel/Enums/FutureIntentType.md#FutureIntentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FutureAnalysis.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GeneralMiscellaneousOption"></a>

### *property* ANSYSAnalysisSettings.GeneralMiscellaneousOption *: [Ansys.Mechanical.DataModel.Enums.GeneralMiscellaneousOptionType](../../../../Mechanical/DataModel/Enums/GeneralMiscellaneousOptionType.md#GeneralMiscellaneousOptionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneralMiscellaneousOption.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MultistepType"></a>

### *property* ANSYSAnalysisSettings.MultistepType *: [Ansys.Mechanical.DataModel.Enums.HarmonicMultiStepType](../../../../Mechanical/DataModel/Enums/HarmonicMultiStepType.md#HarmonicMultiStepType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultistepType.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ModalFrequencyRange"></a>

### *property* ANSYSAnalysisSettings.ModalFrequencyRange *: [Ansys.Mechanical.DataModel.Enums.ModalFrequencyRangeType](../../../../Mechanical/DataModel/Enums/ModalFrequencyRangeType.md#ModalFrequencyRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StoreResultsAtAllFrequencies"></a>

### *property* ANSYSAnalysisSettings.StoreResultsAtAllFrequencies *: [Ansys.Mechanical.DataModel.Enums.HarmonicMSUPStorage](../../../../Mechanical/DataModel/Enums/HarmonicMSUPStorage.md#HarmonicMSUPStorage) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreResultsAtAllFrequencies.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SolutionMethod"></a>

### *property* ANSYSAnalysisSettings.SolutionMethod *: [Ansys.Mechanical.DataModel.Enums.HarmonicMethod](../../../../Mechanical/DataModel/Enums/HarmonicMethod.md#HarmonicMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionMethod.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.IncludeNegativeLoadMultiplier"></a>

### *property* ANSYSAnalysisSettings.IncludeNegativeLoadMultiplier *: [Ansys.Mechanical.DataModel.Enums.SolverControlsIncludeNegativeLoadMultiplier](../../../../Mechanical/DataModel/Enums/SolverControlsIncludeNegativeLoadMultiplier.md#SolverControlsIncludeNegativeLoadMultiplier) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IncludeNegativeLoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.LineSearch"></a>

### *property* ANSYSAnalysisSettings.LineSearch *: [Ansys.Mechanical.DataModel.Enums.LineSearchType](../../../../Mechanical/DataModel/Enums/LineSearchType.md#LineSearchType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LineSearch.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GenerateMeshRestartPoints"></a>

### *property* ANSYSAnalysisSettings.GenerateMeshRestartPoints *: [Ansys.Mechanical.DataModel.Enums.MeshRestartControlsType](../../../../Mechanical/DataModel/Enums/MeshRestartControlsType.md#MeshRestartControlsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateMeshRestartPoints.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MeshRetainFilesAfterFullSolve"></a>

### *property* ANSYSAnalysisSettings.MeshRetainFilesAfterFullSolve *: [Ansys.Mechanical.DataModel.Enums.MeshRestartRetainFilesType](../../../../Mechanical/DataModel/Enums/MeshRestartRetainFilesType.md#MeshRestartRetainFilesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshRetainFilesAfterFullSolve.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MeshSaveAtLoadStep"></a>

### *property* ANSYSAnalysisSettings.MeshSaveAtLoadStep *: [Ansys.Mechanical.DataModel.Enums.MeshRestartSaveAtLoadStep](../../../../Mechanical/DataModel/Enums/MeshRestartSaveAtLoadStep.md#MeshRestartSaveAtLoadStep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshSaveAtLoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MeshSaveAtSubstep"></a>

### *property* ANSYSAnalysisSettings.MeshSaveAtSubstep *: [Ansys.Mechanical.DataModel.Enums.MeshRestartSaveAtSubstep](../../../../Mechanical/DataModel/Enums/MeshRestartSaveAtSubstep.md#MeshRestartSaveAtSubstep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshSaveAtSubstep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ModeReuse"></a>

### *property* ANSYSAnalysisSettings.ModeReuse *: [Ansys.Mechanical.DataModel.Enums.SolverControlsModeReuse](../../../../Mechanical/DataModel/Enums/SolverControlsModeReuse.md#SolverControlsModeReuse) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeReuse.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ModesCombinationType"></a>

### *property* ANSYSAnalysisSettings.ModesCombinationType *: [Ansys.Mechanical.DataModel.Enums.ModesCombinationType](../../../../Mechanical/DataModel/Enums/ModesCombinationType.md#ModesCombinationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModesCombinationType.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ModeSelectionMethod"></a>

### *property* ANSYSAnalysisSettings.ModeSelectionMethod *: [Ansys.Mechanical.DataModel.Enums.ModeSelectionMethod](../../../../Mechanical/DataModel/Enums/ModeSelectionMethod.md#ModeSelectionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeSelectionMethod.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.OnDemandExpansionOption"></a>

### *property* ANSYSAnalysisSettings.OnDemandExpansionOption *: [Ansys.Mechanical.DataModel.Enums.OnDemandExpansionType](../../../../Mechanical/DataModel/Enums/OnDemandExpansionType.md#OnDemandExpansionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OnDemandExpansionOption.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NewtonRaphsonOption"></a>

### *property* ANSYSAnalysisSettings.NewtonRaphsonOption *: [Ansys.Mechanical.DataModel.Enums.NewtonRaphsonType](../../../../Mechanical/DataModel/Enums/NewtonRaphsonType.md#NewtonRaphsonType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NewtonRaphsonOption.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NodalForces"></a>

### *property* ANSYSAnalysisSettings.NodalForces *: [Ansys.Mechanical.DataModel.Enums.OutputControlsNodalForcesType](../../../../Mechanical/DataModel/Enums/OutputControlsNodalForcesType.md#OutputControlsNodalForcesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodalForces.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ProjectToGeometry"></a>

### *property* ANSYSAnalysisSettings.ProjectToGeometry *: [Ansys.Mechanical.DataModel.Enums.NLADControlProjectToGeometry](../../../../Mechanical/DataModel/Enums/NLADControlProjectToGeometry.md#NLADControlProjectToGeometry) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProjectToGeometry.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RefinementAlgorithm"></a>

### *property* ANSYSAnalysisSettings.RefinementAlgorithm *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityControlsRefinementAlgorithmType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityControlsRefinementAlgorithmType.md#NonlinearAdaptivityControlsRefinementAlgorithmType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RefinementAlgorithm.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RemeshingGradient"></a>

### *property* ANSYSAnalysisSettings.RemeshingGradient *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityControlsRemeshingGradientType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityControlsRemeshingGradientType.md#NonlinearAdaptivityControlsRemeshingGradientType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshingGradient.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NonLinearFormulation"></a>

### *property* ANSYSAnalysisSettings.NonLinearFormulation *: [Ansys.Mechanical.DataModel.Enums.NonLinearFormulationType](../../../../Mechanical/DataModel/Enums/NonLinearFormulationType.md#NonLinearFormulationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonLinearFormulation.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NumericalDamping"></a>

### *property* ANSYSAnalysisSettings.NumericalDamping *: [Ansys.Mechanical.DataModel.Enums.TransientDampingType](../../../../Mechanical/DataModel/Enums/TransientDampingType.md#TransientDampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumericalDamping.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Expansion"></a>

### *property* ANSYSAnalysisSettings.Expansion *: [Ansys.Mechanical.DataModel.Enums.ExpandResultsSubType](../../../../Mechanical/DataModel/Enums/ExpandResultsSubType.md#ExpandResultsSubType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Expansion.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ViewFactorMethod"></a>

### *property* ANSYSAnalysisSettings.ViewFactorMethod *: [Ansys.Mechanical.DataModel.Enums.RadiosityViewFactorType](../../../../Mechanical/DataModel/Enums/RadiosityViewFactorType.md#RadiosityViewFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ViewFactorMethod.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RadiositySolver"></a>

### *property* ANSYSAnalysisSettings.RadiositySolver *: [Ansys.Mechanical.DataModel.Enums.RadiositySolverType](../../../../Mechanical/DataModel/Enums/RadiositySolverType.md#RadiositySolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadiositySolver.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CombineRestartFiles"></a>

### *property* ANSYSAnalysisSettings.CombineRestartFiles *: [Ansys.Mechanical.DataModel.Enums.CombineRestartFilesType](../../../../Mechanical/DataModel/Enums/CombineRestartFilesType.md#CombineRestartFilesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CombineRestartFiles.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GenerateRestartPoints"></a>

### *property* ANSYSAnalysisSettings.GenerateRestartPoints *: [Ansys.Mechanical.DataModel.Enums.RestartControlsType](../../../../Mechanical/DataModel/Enums/RestartControlsType.md#RestartControlsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateRestartPoints.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RetainFilesAfterFullSolve"></a>

### *property* ANSYSAnalysisSettings.RetainFilesAfterFullSolve *: [Ansys.Mechanical.DataModel.Enums.RestartRetainFilesType](../../../../Mechanical/DataModel/Enums/RestartRetainFilesType.md#RestartRetainFilesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RetainFilesAfterFullSolve.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RestartType"></a>

### *property* ANSYSAnalysisSettings.RestartType *: [Ansys.Mechanical.DataModel.Enums.RestartType](../../../../Mechanical/DataModel/Enums/RestartType.md#RestartType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RestartType.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ResultFileCompression"></a>

### *property* ANSYSAnalysisSettings.ResultFileCompression *: [Ansys.Mechanical.DataModel.Enums.ResultFileCompressionType](../../../../Mechanical/DataModel/Enums/ResultFileCompressionType.md#ResultFileCompressionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultFileCompression.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RpmFrequencySpacing"></a>

### *property* ANSYSAnalysisSettings.RpmFrequencySpacing *: [Ansys.Mechanical.DataModel.Enums.FrequencySpacingType](../../../../Mechanical/DataModel/Enums/FrequencySpacingType.md#FrequencySpacingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmFrequencySpacing.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SaveAtLoadStep"></a>

### *property* ANSYSAnalysisSettings.SaveAtLoadStep *: [Ansys.Mechanical.DataModel.Enums.RestartSaveAtLoadStep](../../../../Mechanical/DataModel/Enums/RestartSaveAtLoadStep.md#RestartSaveAtLoadStep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveAtLoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SaveAtSubstep"></a>

### *property* ANSYSAnalysisSettings.SaveAtSubstep *: [Ansys.Mechanical.DataModel.Enums.RestartSaveAtSubstep](../../../../Mechanical/DataModel/Enums/RestartSaveAtSubstep.md#RestartSaveAtSubstep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveAtSubstep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ScatteredFieldFormulation"></a>

### *property* ANSYSAnalysisSettings.ScatteredFieldFormulation *: [Ansys.Mechanical.DataModel.Enums.ScatteredFieldFormulation](../../../../Mechanical/DataModel/Enums/ScatteredFieldFormulation.md#ScatteredFieldFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScatteredFieldFormulation.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ScatteringOutputType"></a>

### *property* ANSYSAnalysisSettings.ScatteringOutputType *: [Ansys.Mechanical.DataModel.Enums.ScatteringOutputType](../../../../Mechanical/DataModel/Enums/ScatteringOutputType.md#ScatteringOutputType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScatteringOutputType.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SolverUnitSystem"></a>

### *property* ANSYSAnalysisSettings.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SolverPivotChecking"></a>

### *property* ANSYSAnalysisSettings.SolverPivotChecking *: [Ansys.Mechanical.DataModel.Enums.SolverPivotChecking](../../../../Mechanical/DataModel/Enums/SolverPivotChecking.md#SolverPivotChecking) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverPivotChecking.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SolverType"></a>

### *property* ANSYSAnalysisSettings.SolverType *: [Ansys.Mechanical.DataModel.Enums.SolverType](../../../../Mechanical/DataModel/Enums/SolverType.md#SolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverType.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SolverUnits"></a>

### *property* ANSYSAnalysisSettings.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../../Mechanical/DataModel/Enums/SolverUnitsControlType.md#SolverUnitsControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnits.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SpectrumType"></a>

### *property* ANSYSAnalysisSettings.SpectrumType *: [Ansys.Mechanical.DataModel.Enums.SpectrumType](../../../../Mechanical/DataModel/Enums/SpectrumType.md#SpectrumType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpectrumType.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Stabilization"></a>

### *property* ANSYSAnalysisSettings.Stabilization *: [Ansys.Mechanical.DataModel.Enums.StabilizationType](../../../../Mechanical/DataModel/Enums/StabilizationType.md#StabilizationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Stabilization.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StabilizationActivationForFirstSubstep"></a>

### *property* ANSYSAnalysisSettings.StabilizationActivationForFirstSubstep *: [Ansys.Mechanical.DataModel.Enums.StabilizationFirstSubstepOption](../../../../Mechanical/DataModel/Enums/StabilizationFirstSubstepOption.md#StabilizationFirstSubstepOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationActivationForFirstSubstep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StabilizationMethod"></a>

### *property* ANSYSAnalysisSettings.StabilizationMethod *: [Ansys.Mechanical.DataModel.Enums.StabilizationMethod](../../../../Mechanical/DataModel/Enums/StabilizationMethod.md#StabilizationMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationMethod.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StoreModalResults"></a>

### *property* ANSYSAnalysisSettings.StoreModalResults *: [Ansys.Mechanical.DataModel.Enums.StoreModalResult](../../../../Mechanical/DataModel/Enums/StoreModalResult.md#StoreModalResult) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreModalResults.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.DefineBy"></a>

### *property* ANSYSAnalysisSettings.DefineBy *: [Ansys.Mechanical.DataModel.Enums.TimeStepDefineByType](../../../../Mechanical/DataModel/Enums/TimeStepDefineByType.md#TimeStepDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.TransientApplication"></a>

### *property* ANSYSAnalysisSettings.TransientApplication *: [Ansys.Mechanical.DataModel.Enums.TransientApplicationType](../../../../Mechanical/DataModel/Enums/TransientApplicationType.md#TransientApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransientApplication.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.AutomaticTimeStepping"></a>

### *property* ANSYSAnalysisSettings.AutomaticTimeStepping *: [Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping](../../../../Mechanical/DataModel/Enums/AutomaticTimeStepping.md#AutomaticTimeStepping) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticTimeStepping.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RetainModesymFileAfterSolve"></a>

### *property* ANSYSAnalysisSettings.RetainModesymFileAfterSolve *: [Ansys.Mechanical.DataModel.Enums.UseExistingModesymFile](../../../../Mechanical/DataModel/Enums/UseExistingModesymFile.md#UseExistingModesymFile) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RetainModesymFileAfterSolve.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.WeakSprings"></a>

### *property* ANSYSAnalysisSettings.WeakSprings *: [Ansys.Mechanical.DataModel.Enums.WeakSpringsType](../../../../Mechanical/DataModel/Enums/WeakSpringsType.md#WeakSpringsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeakSprings.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SpringStiffness"></a>

### *property* ANSYSAnalysisSettings.SpringStiffness *: [Ansys.Mechanical.DataModel.Enums.SpringsStiffnessType](../../../../Mechanical/DataModel/Enums/SpringsStiffnessType.md#SpringsStiffnessType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringStiffness.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.IgnoreAcousticDamping"></a>

### *property* ANSYSAnalysisSettings.IgnoreAcousticDamping *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IgnoreAcousticDamping.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CalculateAcceleration"></a>

### *property* ANSYSAnalysisSettings.CalculateAcceleration *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateAcceleration.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.BackStress"></a>

### *property* ANSYSAnalysisSettings.BackStress *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BackStress.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ContactMiscellaneous"></a>

### *property* ANSYSAnalysisSettings.ContactMiscellaneous *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactMiscellaneous.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CStarIntegral"></a>

### *property* ANSYSAnalysisSettings.CStarIntegral *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CStarIntegral.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ElementCurrentDensity"></a>

### *property* ANSYSAnalysisSettings.ElementCurrentDensity *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementCurrentDensity.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.FieldIntensityandFluxDensity"></a>

### *property* ANSYSAnalysisSettings.FieldIntensityandFluxDensity *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FieldIntensityandFluxDensity.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ElectromagneticNodalForces"></a>

### *property* ANSYSAnalysisSettings.ElectromagneticNodalForces *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectromagneticNodalForces.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ContactData"></a>

### *property* ANSYSAnalysisSettings.ContactData *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactData.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CalculateVolumeEnergy"></a>

### *property* ANSYSAnalysisSettings.CalculateVolumeEnergy *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateVolumeEnergy.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NonlinearData"></a>

### *property* ANSYSAnalysisSettings.NonlinearData *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonlinearData.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CalculateEnergy"></a>

### *property* ANSYSAnalysisSettings.CalculateEnergy *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateEnergy.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CalculateEulerAngles"></a>

### *property* ANSYSAnalysisSettings.CalculateEulerAngles *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateEulerAngles.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.HeatGenerationRate"></a>

### *property* ANSYSAnalysisSettings.HeatGenerationRate *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HeatGenerationRate.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.JIntegral"></a>

### *property* ANSYSAnalysisSettings.JIntegral *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the JIntegral.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MaterialForce"></a>

### *property* ANSYSAnalysisSettings.MaterialForce *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialForce.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CalculateReactions"></a>

### *property* ANSYSAnalysisSettings.CalculateReactions *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateReactions.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SIFS"></a>

### *property* ANSYSAnalysisSettings.SIFS *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SIFS.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Strain"></a>

### *property* ANSYSAnalysisSettings.Strain *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Strain.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Stress"></a>

### *property* ANSYSAnalysisSettings.Stress *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Stress.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CalculateThermalFlux"></a>

### *property* ANSYSAnalysisSettings.CalculateThermalFlux *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateThermalFlux.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.TStress"></a>

### *property* ANSYSAnalysisSettings.TStress *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TStress.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CalculateVelocity"></a>

### *property* ANSYSAnalysisSettings.CalculateVelocity *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateVelocity.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CalculateVelocityAndAcceleration"></a>

### *property* ANSYSAnalysisSettings.CalculateVelocityAndAcceleration *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateVelocityAndAcceleration.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CampbellDiagram"></a>

### *property* ANSYSAnalysisSettings.CampbellDiagram *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CampbellDiagram.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CarryOverTimeStep"></a>

### *property* ANSYSAnalysisSettings.CarryOverTimeStep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CarryOverTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.DeleteUnneededFiles"></a>

### *property* ANSYSAnalysisSettings.DeleteUnneededFiles *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeleteUnneededFiles.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CyclicModeSuperposition"></a>

### *property* ANSYSAnalysisSettings.CyclicModeSuperposition *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicModeSuperposition.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Damped"></a>

### *property* ANSYSAnalysisSettings.Damped *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Damped.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EqvDampingRatioFromModal"></a>

### *property* ANSYSAnalysisSettings.EqvDampingRatioFromModal *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EqvDampingRatioFromModal.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ExcludeInsignificantModes"></a>

### *property* ANSYSAnalysisSettings.ExcludeInsignificantModes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExcludeInsignificantModes.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ExportHighStrains"></a>

### *property* ANSYSAnalysisSettings.ExportHighStrains *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportHighStrains.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ExportLayerEndTemperature"></a>

### *property* ANSYSAnalysisSettings.ExportLayerEndTemperature *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportLayerEndTemperature.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ExportRecoaterInterference"></a>

### *property* ANSYSAnalysisSettings.ExportRecoaterInterference *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportRecoaterInterference.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.FractureSolverControls"></a>

### *property* ANSYSAnalysisSettings.FractureSolverControls *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureSolverControls.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GeneralMiscellaneous"></a>

### *property* ANSYSAnalysisSettings.GeneralMiscellaneous *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneralMiscellaneous.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ClusterResults"></a>

### *property* ANSYSAnalysisSettings.ClusterResults *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ClusterResults.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.UserDefinedFrequencies"></a>

### *property* ANSYSAnalysisSettings.UserDefinedFrequencies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UserDefinedFrequencies.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Multistep"></a>

### *property* ANSYSAnalysisSettings.Multistep *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Multistep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.IncludeResidualVector"></a>

### *property* ANSYSAnalysisSettings.IncludeResidualVector *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IncludeResidualVector.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.InverseOption"></a>

### *property* ANSYSAnalysisSettings.InverseOption *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InverseOption.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.KeepModalResults"></a>

### *property* ANSYSAnalysisSettings.KeepModalResults *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KeepModalResults.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.KeepPreStressLoadPattern"></a>

### *property* ANSYSAnalysisSettings.KeepPreStressLoadPattern *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KeepPreStressLoadPattern.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NonLinearSolution"></a>

### *property* ANSYSAnalysisSettings.NonLinearSolution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NonLinearSolution.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.QuasiStaticSolution"></a>

### *property* ANSYSAnalysisSettings.QuasiStaticSolution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the QuasiStaticSolution.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.LimitSearchToRange"></a>

### *property* ANSYSAnalysisSettings.LimitSearchToRange *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitSearchToRange.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SaveMAPDLDB"></a>

### *property* ANSYSAnalysisSettings.SaveMAPDLDB *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveMAPDLDB.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StoreComplexSolution"></a>

### *property* ANSYSAnalysisSettings.StoreComplexSolution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreComplexSolution.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.InertiaRelief"></a>

### *property* ANSYSAnalysisSettings.InertiaRelief *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InertiaRelief.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.LargeDeflection"></a>

### *property* ANSYSAnalysisSettings.LargeDeflection *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LargeDeflection.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.TimeIntegration"></a>

### *property* ANSYSAnalysisSettings.TimeIntegration *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeIntegration.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ElectricOnly"></a>

### *property* ANSYSAnalysisSettings.ElectricOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricOnly.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StructuralOnly"></a>

### *property* ANSYSAnalysisSettings.StructuralOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StructuralOnly.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ThermalOnly"></a>

### *property* ANSYSAnalysisSettings.ThermalOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalOnly.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.DataModelObjectCategory"></a>

### *property* ANSYSAnalysisSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Graph"></a>

### *property* ANSYSAnalysisSettings.Graph *: [Ansys.Mechanical.Graphics.AnalysisSettingsGraph](../../../../Mechanical/Graphics/AnalysisSettingsGraph.md#AnalysisSettingsGraph) | [None](https://docs.python.org/3/library/constants.html#None)*

Graph property.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ScratchSolverFilesDirectory"></a>

### *property* ANSYSAnalysisSettings.ScratchSolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScratchSolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SolverFilesDirectory"></a>

### *property* ANSYSAnalysisSettings.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Children"></a>

### *property* ANSYSAnalysisSettings.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Comments"></a>

### *property* ANSYSAnalysisSettings.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Figures"></a>

### *property* ANSYSAnalysisSettings.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Images"></a>

### *property* ANSYSAnalysisSettings.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ANSYSAnalysisSettings.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Properties"></a>

### *property* ANSYSAnalysisSettings.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.VisibleProperties"></a>

### *property* ANSYSAnalysisSettings.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ANSYSAnalysisSettings.GetStepEndTime"></a>

### ANSYSAnalysisSettings.GetStepEndTime(stepNumber: System.UInt32)

Gets the Step End Time at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetStepEndTime"></a>

### ANSYSAnalysisSettings.SetStepEndTime(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Step End Time for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetAutomaticTimeStepping"></a>

### ANSYSAnalysisSettings.GetAutomaticTimeStepping(stepNumber: System.UInt32)

Gets the Automatic Time Stepping at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetAutomaticTimeStepping"></a>

### ANSYSAnalysisSettings.SetAutomaticTimeStepping(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping](../../../../Mechanical/DataModel/Enums/AutomaticTimeStepping.md#AutomaticTimeStepping))

Sets the Automatic Time Stepping for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetForceConvergenceType"></a>

### ANSYSAnalysisSettings.GetForceConvergenceType(stepNumber: System.UInt32)

Gets the Force Convergence Tolerance Type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetForceConvergenceType"></a>

### ANSYSAnalysisSettings.SetForceConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Force Convergence Tolerance Type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetForceConvergenceTolerance"></a>

### ANSYSAnalysisSettings.GetForceConvergenceTolerance(stepNumber: System.UInt32)

Gets the Force Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetForceConvergenceTolerance"></a>

### ANSYSAnalysisSettings.SetForceConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Force Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetForceConvergenceValue"></a>

### ANSYSAnalysisSettings.GetForceConvergenceValue(stepNumber: System.UInt32)

Gets the Force Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetForceConvergenceValue"></a>

### ANSYSAnalysisSettings.SetForceConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Force Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetForceConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.GetForceConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Force Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetForceConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.SetForceConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Force Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetMomentConvergenceType"></a>

### ANSYSAnalysisSettings.GetMomentConvergenceType(stepNumber: System.UInt32)

Gets the Moment Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetMomentConvergenceType"></a>

### ANSYSAnalysisSettings.SetMomentConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Moment Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetMomentConvergenceTolerance"></a>

### ANSYSAnalysisSettings.GetMomentConvergenceTolerance(stepNumber: System.UInt32)

Gets the Moment Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetMomentConvergenceTolerance"></a>

### ANSYSAnalysisSettings.SetMomentConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Moment Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetMomentConvergenceValue"></a>

### ANSYSAnalysisSettings.GetMomentConvergenceValue(stepNumber: System.UInt32)

Gets the Moment Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetMomentConvergenceValue"></a>

### ANSYSAnalysisSettings.SetMomentConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Moment Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetMomentConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.GetMomentConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Moment Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetMomentConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.SetMomentConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Moment Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetDisplacementConvergenceType"></a>

### ANSYSAnalysisSettings.GetDisplacementConvergenceType(stepNumber: System.UInt32)

Gets the Displacement Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetDisplacementConvergenceType"></a>

### ANSYSAnalysisSettings.SetDisplacementConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Displacement Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetDisplacementConvergenceTolerance"></a>

### ANSYSAnalysisSettings.GetDisplacementConvergenceTolerance(stepNumber: System.UInt32)

Gets the Displacement Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetDisplacementConvergenceTolerance"></a>

### ANSYSAnalysisSettings.SetDisplacementConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Displacement Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetDisplacementConvergenceValue"></a>

### ANSYSAnalysisSettings.GetDisplacementConvergenceValue(stepNumber: System.UInt32)

Gets the Displacement Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetDisplacementConvergenceValue"></a>

### ANSYSAnalysisSettings.SetDisplacementConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Displacement Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetDisplacementConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.GetDisplacementConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Displacement Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetDisplacementConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.SetDisplacementConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Displacement Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetRotationConvergenceType"></a>

### ANSYSAnalysisSettings.GetRotationConvergenceType(stepNumber: System.UInt32)

Gets the Rotation Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetRotationConvergenceType"></a>

### ANSYSAnalysisSettings.SetRotationConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Rotation Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetRotationConvergenceTolerance"></a>

### ANSYSAnalysisSettings.GetRotationConvergenceTolerance(stepNumber: System.UInt32)

Gets the Rotation Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetRotationConvergenceTolerance"></a>

### ANSYSAnalysisSettings.SetRotationConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Rotation Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetRotationConvergenceValue"></a>

### ANSYSAnalysisSettings.GetRotationConvergenceValue(stepNumber: System.UInt32)

Gets the Rotation Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetRotationConvergenceValue"></a>

### ANSYSAnalysisSettings.SetRotationConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Rotation Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetRotationConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.GetRotationConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Rotation Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetRotationConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.SetRotationConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Rotation Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetTemperatureConvergenceType"></a>

### ANSYSAnalysisSettings.SetTemperatureConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Temperature Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetTemperatureConvergenceTolerance"></a>

### ANSYSAnalysisSettings.SetTemperatureConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Temperature Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetTemperatureConvergenceValue"></a>

### ANSYSAnalysisSettings.SetTemperatureConvergenceValue(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.NonLinearValueType](../../../../Mechanical/DataModel/Enums/NonLinearValueType.md#NonLinearValueType))

Sets the Temperature Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetTemperatureConvergenceInputValue"></a>

### ANSYSAnalysisSettings.SetTemperatureConvergenceInputValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Temperature Convergence Input Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetTemperatureConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.SetTemperatureConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Temperature Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetHeatConvergenceType"></a>

### ANSYSAnalysisSettings.SetHeatConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Heat Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetHeatConvergenceTolerance"></a>

### ANSYSAnalysisSettings.SetHeatConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Heat Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetHeatConvergenceValue"></a>

### ANSYSAnalysisSettings.SetHeatConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Heat Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetHeatConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.SetHeatConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Heat Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetVoltageConvergenceType"></a>

### ANSYSAnalysisSettings.SetVoltageConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Voltage Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetVoltageConvergenceTolerance"></a>

### ANSYSAnalysisSettings.SetVoltageConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Voltage Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetVoltageConvergenceValue"></a>

### ANSYSAnalysisSettings.SetVoltageConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Voltage Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetVoltageConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.SetVoltageConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Voltage Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetChargeConvergenceType"></a>

### ANSYSAnalysisSettings.SetChargeConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Charge Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetChargeConvergenceTolerance"></a>

### ANSYSAnalysisSettings.SetChargeConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Charge Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetChargeConvergenceValue"></a>

### ANSYSAnalysisSettings.SetChargeConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Charge Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetChargeConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.SetChargeConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Charge Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetEnergyConvergenceType"></a>

### ANSYSAnalysisSettings.SetEnergyConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Energy Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetEnergyConvergenceTolerance"></a>

### ANSYSAnalysisSettings.SetEnergyConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Energy Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetEnergyConvergenceValue"></a>

### ANSYSAnalysisSettings.SetEnergyConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Energy Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetEnergyConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.SetEnergyConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Energy Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetCurrentConvergenceType"></a>

### ANSYSAnalysisSettings.SetCurrentConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Current Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetCurrentConvergenceTolerance"></a>

### ANSYSAnalysisSettings.SetCurrentConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Current Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetCurrentConvergenceValue"></a>

### ANSYSAnalysisSettings.SetCurrentConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Current Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetCurrentConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.SetCurrentConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Current Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetEmagAMPSConvergenceType"></a>

### ANSYSAnalysisSettings.SetEmagAMPSConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the EmagAMPS Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetEmagAMPSConvergenceTolerance"></a>

### ANSYSAnalysisSettings.SetEmagAMPSConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the EmagAMPS Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetEmagAMPSConvergenceValue"></a>

### ANSYSAnalysisSettings.SetEmagAMPSConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the EmagAMPS Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetEmagAMPSConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.SetEmagAMPSConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the EmagAMPS Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetEmagCSGConvergenceType"></a>

### ANSYSAnalysisSettings.SetEmagCSGConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the EmagCSG Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetEmagCSGConvergenceTolerance"></a>

### ANSYSAnalysisSettings.SetEmagCSGConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the EmagCSG Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetEmagCSGConvergenceValue"></a>

### ANSYSAnalysisSettings.SetEmagCSGConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the EmagCSG Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetEmagCSGConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.SetEmagCSGConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the EmagCSG Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetTemperatureConvergenceType"></a>

### ANSYSAnalysisSettings.GetTemperatureConvergenceType(stepNumber: System.UInt32)

Gets the Temperature Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetTemperatureConvergenceTolerance"></a>

### ANSYSAnalysisSettings.GetTemperatureConvergenceTolerance(stepNumber: System.UInt32)

Gets the Temperature Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetTemperatureConvergenceValue"></a>

### ANSYSAnalysisSettings.GetTemperatureConvergenceValue(stepNumber: System.UInt32)

Gets the Temperature Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetTemperatureConvergenceInputValue"></a>

### ANSYSAnalysisSettings.GetTemperatureConvergenceInputValue(stepNumber: System.UInt32)

Gets the Temperature Convergence Input Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetTemperatureConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.GetTemperatureConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Temperature Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetHeatConvergenceType"></a>

### ANSYSAnalysisSettings.GetHeatConvergenceType(stepNumber: System.UInt32)

Gets the Heat Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetHeatConvergenceTolerance"></a>

### ANSYSAnalysisSettings.GetHeatConvergenceTolerance(stepNumber: System.UInt32)

Gets the Heat Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetHeatConvergenceValue"></a>

### ANSYSAnalysisSettings.GetHeatConvergenceValue(stepNumber: System.UInt32)

Gets the Heat Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetHeatConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.GetHeatConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Heat Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetVoltageConvergenceType"></a>

### ANSYSAnalysisSettings.GetVoltageConvergenceType(stepNumber: System.UInt32)

Gets the Voltage Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetVoltageConvergenceTolerance"></a>

### ANSYSAnalysisSettings.GetVoltageConvergenceTolerance(stepNumber: System.UInt32)

Gets the Voltage Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetVoltageConvergenceValue"></a>

### ANSYSAnalysisSettings.GetVoltageConvergenceValue(stepNumber: System.UInt32)

Gets the Voltage Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetVoltageConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.GetVoltageConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Voltage Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetCurrentConvergenceType"></a>

### ANSYSAnalysisSettings.GetCurrentConvergenceType(stepNumber: System.UInt32)

Gets the Current Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetCurrentConvergenceTolerance"></a>

### ANSYSAnalysisSettings.GetCurrentConvergenceTolerance(stepNumber: System.UInt32)

Gets the Current Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetCurrentConvergenceValue"></a>

### ANSYSAnalysisSettings.GetCurrentConvergenceValue(stepNumber: System.UInt32)

Gets the Current Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetCurrentConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.GetCurrentConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Current Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetEmagAMPSConvergenceType"></a>

### ANSYSAnalysisSettings.GetEmagAMPSConvergenceType(stepNumber: System.UInt32)

Gets the EmagAMPS Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetEmagAMPSConvergenceTolerance"></a>

### ANSYSAnalysisSettings.GetEmagAMPSConvergenceTolerance(stepNumber: System.UInt32)

Gets the EmagAMPS Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetEmagAMPSConvergenceValue"></a>

### ANSYSAnalysisSettings.GetEmagAMPSConvergenceValue(stepNumber: System.UInt32)

Gets the EmagAMPS Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetEmagAMPSConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.GetEmagAMPSConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the EmagAMPS Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetEmagCSGConvergenceType"></a>

### ANSYSAnalysisSettings.GetEmagCSGConvergenceType(stepNumber: System.UInt32)

Gets the EmagCSG Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetEmagCSGConvergenceTolerance"></a>

### ANSYSAnalysisSettings.GetEmagCSGConvergenceTolerance(stepNumber: System.UInt32)

Gets the EmagCSG Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetEmagCSGConvergenceValue"></a>

### ANSYSAnalysisSettings.GetEmagCSGConvergenceValue(stepNumber: System.UInt32)

Gets the EmagCSG Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetEmagCSGConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.GetEmagCSGConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the EmagCSG Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetEnergyConvergenceType"></a>

### ANSYSAnalysisSettings.GetEnergyConvergenceType(stepNumber: System.UInt32)

Gets the Energy Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetEnergyConvergenceTolerance"></a>

### ANSYSAnalysisSettings.GetEnergyConvergenceTolerance(stepNumber: System.UInt32)

Gets the Energy Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetEnergyConvergenceValue"></a>

### ANSYSAnalysisSettings.GetEnergyConvergenceValue(stepNumber: System.UInt32)

Gets the Energy Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetEnergyConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.GetEnergyConvergenceMinimumReference(stepNumber: System.UInt32)

Gets the Energy Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetLineSearch"></a>

### ANSYSAnalysisSettings.GetLineSearch(stepNumber: System.UInt32)

Gets the Line Search at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetLineSearch"></a>

### ANSYSAnalysisSettings.SetLineSearch(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.LineSearchType](../../../../Mechanical/DataModel/Enums/LineSearchType.md#LineSearchType))

Sets the Line Search for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetStabilization"></a>

### ANSYSAnalysisSettings.GetStabilization(stepNumber: System.UInt32)

Gets the Stabilization at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetStabilization"></a>

### ANSYSAnalysisSettings.SetStabilization(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.StabilizationType](../../../../Mechanical/DataModel/Enums/StabilizationType.md#StabilizationType))

Sets the Stabilization for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetStabilizationMethod"></a>

### ANSYSAnalysisSettings.GetStabilizationMethod(stepNumber: System.UInt32)

Gets the Stabilization Method at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetStabilizationMethod"></a>

### ANSYSAnalysisSettings.SetStabilizationMethod(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.StabilizationMethod](../../../../Mechanical/DataModel/Enums/StabilizationMethod.md#StabilizationMethod))

Sets the Stabilization Method for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetStabilizationEnergyDissipationRatio"></a>

### ANSYSAnalysisSettings.GetStabilizationEnergyDissipationRatio(stepNumber: System.UInt32)

Gets the Stabilization Energy Dissipation Ratio at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetStabilizationEnergyDissipationRatio"></a>

### ANSYSAnalysisSettings.SetStabilizationEnergyDissipationRatio(stepNumber: System.UInt32, value: System.Double)

Sets the Stabilization Energy Dissipation Ratio for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetStabilizationDampingFactor"></a>

### ANSYSAnalysisSettings.GetStabilizationDampingFactor(stepNumber: System.UInt32)

Gets the Stabilization Damping Factor at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetStabilizationDampingFactor"></a>

### ANSYSAnalysisSettings.SetStabilizationDampingFactor(stepNumber: System.UInt32, value: System.Double)

Sets the Stabilization Damping Factor for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetStabilizationFirstSubstepOption"></a>

### ANSYSAnalysisSettings.GetStabilizationFirstSubstepOption(stepNumber: System.UInt32)

Gets the Stabilization First Substep Option at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetStabilizationFirstSubstepOption"></a>

### ANSYSAnalysisSettings.SetStabilizationFirstSubstepOption(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.StabilizationFirstSubstepOption](../../../../Mechanical/DataModel/Enums/StabilizationFirstSubstepOption.md#StabilizationFirstSubstepOption))

Sets the Stabilization First Substep Option for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetStabilizationForceLimit"></a>

### ANSYSAnalysisSettings.GetStabilizationForceLimit(stepNumber: System.UInt32)

Gets the Stabilization Force Limit at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetStabilizationForceLimit"></a>

### ANSYSAnalysisSettings.SetStabilizationForceLimit(stepNumber: System.UInt32, value: System.Double)

Sets the Stabilization Force Limit for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetStoreResultsAt"></a>

### ANSYSAnalysisSettings.GetStoreResultsAt(stepNumber: System.UInt32)

Gets the Store Results At at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetStoreResultsAt"></a>

### ANSYSAnalysisSettings.SetStoreResultsAt(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.TimePointsOptions](../../../../Mechanical/DataModel/Enums/TimePointsOptions.md#TimePointsOptions))

Sets the Store Results At for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetStoreResulsAtValue"></a>

### ANSYSAnalysisSettings.GetStoreResulsAtValue(stepNumber: System.UInt32)

Gets the Store Results At Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetStoreResulsAtValue"></a>

### ANSYSAnalysisSettings.SetStoreResulsAtValue(stepNumber: System.UInt32, value: System.UInt32)

Sets the Store Results At Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetDefineBy"></a>

### ANSYSAnalysisSettings.GetDefineBy(stepNumber: System.UInt32)

Gets the Define By at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetDefineBy"></a>

### ANSYSAnalysisSettings.SetDefineBy(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.TimeStepDefineByType](../../../../Mechanical/DataModel/Enums/TimeStepDefineByType.md#TimeStepDefineByType))

Sets the Define By for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetCarryOverTimeStep"></a>

### ANSYSAnalysisSettings.GetCarryOverTimeStep(stepNumber: System.UInt32)

Gets the Carry Over Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetCarryOverTimeStep"></a>

### ANSYSAnalysisSettings.SetCarryOverTimeStep(stepNumber: System.UInt32, value: System.Boolean)

Sets the Carry Over Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetInitialTimeStep"></a>

### ANSYSAnalysisSettings.GetInitialTimeStep(stepNumber: System.UInt32)

Gets the Initial Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetInitialTimeStep"></a>

### ANSYSAnalysisSettings.SetInitialTimeStep(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Initial Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetMinimumTimeStep"></a>

### ANSYSAnalysisSettings.GetMinimumTimeStep(stepNumber: System.UInt32)

Gets the Minimum Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetMinimumTimeStep"></a>

### ANSYSAnalysisSettings.SetMinimumTimeStep(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Minimum Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetMaximumTimeStep"></a>

### ANSYSAnalysisSettings.GetMaximumTimeStep(stepNumber: System.UInt32)

Gets the Maximum Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetMaximumTimeStep"></a>

### ANSYSAnalysisSettings.SetMaximumTimeStep(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Maximum Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetInitialSubsteps"></a>

### ANSYSAnalysisSettings.GetInitialSubsteps(stepNumber: System.UInt32)

Gets the Initial Substeps at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetInitialSubsteps"></a>

### ANSYSAnalysisSettings.SetInitialSubsteps(stepNumber: System.UInt32, value: System.UInt32)

Sets the Initial Substeps for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetMinimumSubsteps"></a>

### ANSYSAnalysisSettings.GetMinimumSubsteps(stepNumber: System.UInt32)

Gets the Minimum Substeps at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetMinimumSubsteps"></a>

### ANSYSAnalysisSettings.SetMinimumSubsteps(stepNumber: System.UInt32, value: System.UInt32)

Sets the Minimum Substeps for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetMaximumSubsteps"></a>

### ANSYSAnalysisSettings.GetMaximumSubsteps(stepNumber: System.UInt32)

Gets the Maximum Substeps at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetMaximumSubsteps"></a>

### ANSYSAnalysisSettings.SetMaximumSubsteps(stepNumber: System.UInt32, value: System.UInt32)

Sets the Maximum Substeps for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetNumberOfSubSteps"></a>

### ANSYSAnalysisSettings.SetNumberOfSubSteps(stepNumber: System.UInt32, value: System.UInt32)

Sets the Number of Substeps for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetNumberOfSubSteps"></a>

### ANSYSAnalysisSettings.GetNumberOfSubSteps(stepNumber: System.UInt32)

Gets the Number of Substeps for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetTimeStep"></a>

### ANSYSAnalysisSettings.SetTimeStep(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetTimeStep"></a>

### ANSYSAnalysisSettings.GetTimeStep(stepNumber: System.UInt32)

Sets the Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetTimeIntegration"></a>

### ANSYSAnalysisSettings.SetTimeIntegration(stepNumber: System.UInt32, value: System.Boolean)

Sets the TimeIntegration for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetStructuralOnly"></a>

### ANSYSAnalysisSettings.SetStructuralOnly(stepNumber: System.UInt32, value: System.Boolean)

Sets the TimeIntegration Structural for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetThermalOnly"></a>

### ANSYSAnalysisSettings.SetThermalOnly(stepNumber: System.UInt32, value: System.Boolean)

Sets the TimeIntegration Thermal for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetTimeIntegration"></a>

### ANSYSAnalysisSettings.GetTimeIntegration(stepNumber: System.UInt32)

Gets the TimeIntegration for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetStructuralOnly"></a>

### ANSYSAnalysisSettings.GetStructuralOnly(stepNumber: System.UInt32)

Gets the TimeIntegration Structural for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetThermalOnly"></a>

### ANSYSAnalysisSettings.GetThermalOnly(stepNumber: System.UInt32)

Sets the TimeIntegration Thermal for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetStepName"></a>

### ANSYSAnalysisSettings.GetStepName(stepNumber: System.UInt32)

Gets the Step name at a given step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetStepName"></a>

### ANSYSAnalysisSettings.SetStepName(stepNumber: System.UInt32, value: System.String)

Sets the Step name at a given step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetAMStepType"></a>

### ANSYSAnalysisSettings.GetAMStepType(stepNumber: System.UInt32)

Gets the AM Process Step Type at a given step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CopyTo"></a>

### ANSYSAnalysisSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

CopyTo method.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetCreepEffects"></a>

### ANSYSAnalysisSettings.SetCreepEffects(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.Creep](../../../../Mechanical/DataModel/Enums/Creep.md#Creep))

Sets the Creep Effects for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetCreepEffects"></a>

### ANSYSAnalysisSettings.GetCreepEffects(stepNumber: System.UInt32)

Gets the Creep Effects for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetCreepLimitRatio"></a>

### ANSYSAnalysisSettings.SetCreepLimitRatio(stepNumber: System.UInt32, value: System.Double)

Sets the Creep Limit Ratio for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetCreepLimitRatio"></a>

### ANSYSAnalysisSettings.GetCreepLimitRatio(stepNumber: System.UInt32)

Gets the Creep Limit Ratio for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.DeleteAllRestartPoints"></a>

### ANSYSAnalysisSettings.DeleteAllRestartPoints()

DeleteAllRestartPoints method.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetChildren"></a>

### ANSYSAnalysisSettings.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ANSYSAnalysisSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.AddComment"></a>

### ANSYSAnalysisSettings.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.AddFigure"></a>

### ANSYSAnalysisSettings.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.AddImage"></a>

### ANSYSAnalysisSettings.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Activate"></a>

### ANSYSAnalysisSettings.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Duplicate"></a>

### ANSYSAnalysisSettings.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GroupAllSimilarChildren"></a>

### ANSYSAnalysisSettings.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GroupSimilarObjects"></a>

### ANSYSAnalysisSettings.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.PropertyByName"></a>

### ANSYSAnalysisSettings.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.PropertyByAPIName"></a>

### ANSYSAnalysisSettings.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CreateParameter"></a>

### ANSYSAnalysisSettings.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetParameter"></a>

### ANSYSAnalysisSettings.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RemoveParameter"></a>

### ANSYSAnalysisSettings.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
