# ANSYSAnalysisSettings

### *class* ANSYSAnalysisSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ANSYSAnalysisSettings.

> <!-- !! processed by numpydoc !! -->

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

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AnalysisSettings import ANSYSAnalysisSettings
```

## Property detail

### *property* ANSYSAnalysisSettings.StepName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Step Name.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.AMStepType *: [Ansys.Mechanical.DataModel.Enums.AMProcessStepType](../../../../Mechanical/DataModel/Enums/AMProcessStepType.md#AMProcessStepType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ANSYSAnalysisSettings.CooldownTimeType *: [Ansys.Mechanical.DataModel.Enums.AMCooldownTimeType](../../../../Mechanical/DataModel/Enums/AMCooldownTimeType.md#AMCooldownTimeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Cooldown Time Type.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CooldownTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Cooldown Time.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.LayersToBuild *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Layers to Build.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ReferenceTemperatureType *: [Ansys.Mechanical.DataModel.Enums.AMReferenceTemperatureType](../../../../Mechanical/DataModel/Enums/AMReferenceTemperatureType.md#AMReferenceTemperatureType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Reference Temperature Type.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ReferenceTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Reference Temperature.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RelaxationTemperatureType *: [Ansys.Mechanical.DataModel.Enums.AMRelaxationTemperatureType](../../../../Mechanical/DataModel/Enums/AMRelaxationTemperatureType.md#AMRelaxationTemperatureType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ANSYSAnalysisSettings.SpinSoftening *: [Ansys.Mechanical.DataModel.Enums.SpinSofteningType](../../../../Mechanical/DataModel/Enums/SpinSofteningType.md#SpinSofteningType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpinSoftening.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.UserDefinedFrequencySteps *: System.Collections.Generic.IList[Ansys.Core.Units.Quantity] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UserDefinedFrequencySteps.

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

### *property* ANSYSAnalysisSettings.BaseRemovalType *: [Ansys.Mechanical.DataModel.Enums.AMBaseRemovalType](../../../../Mechanical/DataModel/Enums/AMBaseRemovalType.md#AMBaseRemovalType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BaseRemovalType.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.StiffnessCoefficientDefineBy *: [Ansys.Mechanical.DataModel.Enums.DampingType](../../../../Mechanical/DataModel/Enums/DampingType.md#DampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessCoefficientDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CacheResultsInMemory *: [Ansys.Mechanical.DataModel.Enums.CacheResultsInMemory](../../../../Mechanical/DataModel/Enums/CacheResultsInMemory.md#CacheResultsInMemory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CacheResultsInMemory.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ParticipationFactor *: [Ansys.Mechanical.DataModel.Enums.CalculateParticipationFactorResult](../../../../Mechanical/DataModel/Enums/CalculateParticipationFactorResult.md#CalculateParticipationFactorResult) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ParticipationFactor.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.StoreResultsAt *: [Ansys.Mechanical.DataModel.Enums.TimePointsOptions](../../../../Mechanical/DataModel/Enums/TimePointsOptions.md#TimePointsOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreResultsAt.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ConstantDamping *: [Ansys.Mechanical.DataModel.Enums.ConstantDampingType](../../../../Mechanical/DataModel/Enums/ConstantDampingType.md#ConstantDampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstantDamping.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ContactSplit *: [Ansys.Mechanical.DataModel.Enums.ContactSplitType](../../../../Mechanical/DataModel/Enums/ContactSplitType.md#ContactSplitType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSplit.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ContactSummary *: [Ansys.Mechanical.DataModel.Enums.ContactSummaryType](../../../../Mechanical/DataModel/Enums/ContactSummaryType.md#ContactSummaryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSummary.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ChargeConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChargeConvergence.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CurrentConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentConvergence.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.DisplacementConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplacementConvergence.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.AMPSConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AMPSConvergence.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CSGConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CSGConvergence.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.EnergyConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyConvergence.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ForceConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceConvergence.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.HeatConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HeatConvergence.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.MomentConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MomentConvergence.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RotationConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationConvergence.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.TemperatureConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemperatureConvergence.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.TemperatureConvergenceValue *: [Ansys.Mechanical.DataModel.Enums.NonLinearValueType](../../../../Mechanical/DataModel/Enums/NonLinearValueType.md#NonLinearValueType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemperatureConvergenceValue.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.VoltageConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VoltageConvergence.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CoriolisEffectApplied *: [Ansys.Mechanical.DataModel.Enums.CoriolisEffectType](../../../../Mechanical/DataModel/Enums/CoriolisEffectType.md#CoriolisEffectType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoriolisEffectApplied.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CreepEffects *: [Ansys.Mechanical.DataModel.Enums.Creep](../../../../Mechanical/DataModel/Enums/Creep.md#Creep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CreepEffects.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.HarmonicIndexRange *: [Ansys.Mechanical.DataModel.Enums.CyclicHarmonicIndex](../../../../Mechanical/DataModel/Enums/CyclicHarmonicIndex.md#CyclicHarmonicIndex) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndexRange.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.DampingDefineBy *: [Ansys.Mechanical.DataModel.Enums.DampingDefineBy](../../../../Mechanical/DataModel/Enums/DampingDefineBy.md#DampingDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DampingDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.FarFieldRadiationSurface *: [Ansys.Mechanical.DataModel.Enums.FarFieldRadiationSurfaceType](../../../../Mechanical/DataModel/Enums/FarFieldRadiationSurfaceType.md#FarFieldRadiationSurfaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FarFieldRadiationSurface.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ExpandResultsFrom *: [Ansys.Mechanical.DataModel.Enums.ExpandResultFrom](../../../../Mechanical/DataModel/Enums/ExpandResultFrom.md#ExpandResultFrom) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExpandResultsFrom.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.FrequencySpacing *: [Ansys.Mechanical.DataModel.Enums.FrequencySpacingType](../../../../Mechanical/DataModel/Enums/FrequencySpacingType.md#FrequencySpacingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencySpacing.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.FutureAnalysis *: [Ansys.Mechanical.DataModel.Enums.FutureIntentType](../../../../Mechanical/DataModel/Enums/FutureIntentType.md#FutureIntentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FutureAnalysis.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.GeneralMiscellaneousOption *: [Ansys.Mechanical.DataModel.Enums.GeneralMiscellaneousOptionType](../../../../Mechanical/DataModel/Enums/GeneralMiscellaneousOptionType.md#GeneralMiscellaneousOptionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneralMiscellaneousOption.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.MultistepType *: [Ansys.Mechanical.DataModel.Enums.HarmonicMultiStepType](../../../../Mechanical/DataModel/Enums/HarmonicMultiStepType.md#HarmonicMultiStepType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultistepType.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ModalFrequencyRange *: [Ansys.Mechanical.DataModel.Enums.ModalFrequencyRangeType](../../../../Mechanical/DataModel/Enums/ModalFrequencyRangeType.md#ModalFrequencyRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalFrequencyRange.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.StoreResultsAtAllFrequencies *: [Ansys.Mechanical.DataModel.Enums.HarmonicMSUPStorage](../../../../Mechanical/DataModel/Enums/HarmonicMSUPStorage.md#HarmonicMSUPStorage) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreResultsAtAllFrequencies.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SolutionMethod *: [Ansys.Mechanical.DataModel.Enums.HarmonicMethod](../../../../Mechanical/DataModel/Enums/HarmonicMethod.md#HarmonicMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionMethod.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.IncludeNegativeLoadMultiplier *: [Ansys.Mechanical.DataModel.Enums.SolverControlsIncludeNegativeLoadMultiplier](../../../../Mechanical/DataModel/Enums/SolverControlsIncludeNegativeLoadMultiplier.md#SolverControlsIncludeNegativeLoadMultiplier) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IncludeNegativeLoadMultiplier.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.LineSearch *: [Ansys.Mechanical.DataModel.Enums.LineSearchType](../../../../Mechanical/DataModel/Enums/LineSearchType.md#LineSearchType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LineSearch.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.GenerateMeshRestartPoints *: [Ansys.Mechanical.DataModel.Enums.MeshRestartControlsType](../../../../Mechanical/DataModel/Enums/MeshRestartControlsType.md#MeshRestartControlsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateMeshRestartPoints.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.MeshRetainFilesAfterFullSolve *: [Ansys.Mechanical.DataModel.Enums.MeshRestartRetainFilesType](../../../../Mechanical/DataModel/Enums/MeshRestartRetainFilesType.md#MeshRestartRetainFilesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshRetainFilesAfterFullSolve.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.MeshSaveAtLoadStep *: [Ansys.Mechanical.DataModel.Enums.MeshRestartSaveAtLoadStep](../../../../Mechanical/DataModel/Enums/MeshRestartSaveAtLoadStep.md#MeshRestartSaveAtLoadStep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshSaveAtLoadStep.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.MeshSaveAtSubstep *: [Ansys.Mechanical.DataModel.Enums.MeshRestartSaveAtSubstep](../../../../Mechanical/DataModel/Enums/MeshRestartSaveAtSubstep.md#MeshRestartSaveAtSubstep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshSaveAtSubstep.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ModeReuse *: [Ansys.Mechanical.DataModel.Enums.SolverControlsModeReuse](../../../../Mechanical/DataModel/Enums/SolverControlsModeReuse.md#SolverControlsModeReuse) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeReuse.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ModesCombinationType *: [Ansys.Mechanical.DataModel.Enums.ModesCombinationType](../../../../Mechanical/DataModel/Enums/ModesCombinationType.md#ModesCombinationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModesCombinationType.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ModeSelectionMethod *: [Ansys.Mechanical.DataModel.Enums.ModeSelectionMethod](../../../../Mechanical/DataModel/Enums/ModeSelectionMethod.md#ModeSelectionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeSelectionMethod.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.OnDemandExpansionOption *: [Ansys.Mechanical.DataModel.Enums.OnDemandExpansionType](../../../../Mechanical/DataModel/Enums/OnDemandExpansionType.md#OnDemandExpansionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OnDemandExpansionOption.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.NewtonRaphsonOption *: [Ansys.Mechanical.DataModel.Enums.NewtonRaphsonType](../../../../Mechanical/DataModel/Enums/NewtonRaphsonType.md#NewtonRaphsonType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NewtonRaphsonOption.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.NodalForces *: [Ansys.Mechanical.DataModel.Enums.OutputControlsNodalForcesType](../../../../Mechanical/DataModel/Enums/OutputControlsNodalForcesType.md#OutputControlsNodalForcesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodalForces.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ProjectToGeometry *: [Ansys.Mechanical.DataModel.Enums.NLADControlProjectToGeometry](../../../../Mechanical/DataModel/Enums/NLADControlProjectToGeometry.md#NLADControlProjectToGeometry) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProjectToGeometry.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RefinementAlgorithm *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityControlsRefinementAlgorithmType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityControlsRefinementAlgorithmType.md#NonlinearAdaptivityControlsRefinementAlgorithmType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RefinementAlgorithm.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RemeshingGradient *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityControlsRemeshingGradientType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityControlsRemeshingGradientType.md#NonlinearAdaptivityControlsRemeshingGradientType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshingGradient.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.NonLinearFormulation *: [Ansys.Mechanical.DataModel.Enums.NonLinearFormulationType](../../../../Mechanical/DataModel/Enums/NonLinearFormulationType.md#NonLinearFormulationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonLinearFormulation.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.NumericalDamping *: [Ansys.Mechanical.DataModel.Enums.TransientDampingType](../../../../Mechanical/DataModel/Enums/TransientDampingType.md#TransientDampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumericalDamping.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.Expansion *: [Ansys.Mechanical.DataModel.Enums.ExpandResultsSubType](../../../../Mechanical/DataModel/Enums/ExpandResultsSubType.md#ExpandResultsSubType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Expansion.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ViewFactorMethod *: [Ansys.Mechanical.DataModel.Enums.RadiosityViewFactorType](../../../../Mechanical/DataModel/Enums/RadiosityViewFactorType.md#RadiosityViewFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ViewFactorMethod.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RadiositySolver *: [Ansys.Mechanical.DataModel.Enums.RadiositySolverType](../../../../Mechanical/DataModel/Enums/RadiositySolverType.md#RadiositySolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadiositySolver.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.CombineRestartFiles *: [Ansys.Mechanical.DataModel.Enums.CombineRestartFilesType](../../../../Mechanical/DataModel/Enums/CombineRestartFilesType.md#CombineRestartFilesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CombineRestartFiles.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.GenerateRestartPoints *: [Ansys.Mechanical.DataModel.Enums.RestartControlsType](../../../../Mechanical/DataModel/Enums/RestartControlsType.md#RestartControlsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateRestartPoints.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RetainFilesAfterFullSolve *: [Ansys.Mechanical.DataModel.Enums.RestartRetainFilesType](../../../../Mechanical/DataModel/Enums/RestartRetainFilesType.md#RestartRetainFilesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RetainFilesAfterFullSolve.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RestartType *: [Ansys.Mechanical.DataModel.Enums.RestartType](../../../../Mechanical/DataModel/Enums/RestartType.md#RestartType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RestartType.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ResultFileCompression *: [Ansys.Mechanical.DataModel.Enums.ResultFileCompressionType](../../../../Mechanical/DataModel/Enums/ResultFileCompressionType.md#ResultFileCompressionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultFileCompression.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RpmFrequencySpacing *: [Ansys.Mechanical.DataModel.Enums.FrequencySpacingType](../../../../Mechanical/DataModel/Enums/FrequencySpacingType.md#FrequencySpacingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmFrequencySpacing.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SaveAtLoadStep *: [Ansys.Mechanical.DataModel.Enums.RestartSaveAtLoadStep](../../../../Mechanical/DataModel/Enums/RestartSaveAtLoadStep.md#RestartSaveAtLoadStep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveAtLoadStep.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SaveAtSubstep *: [Ansys.Mechanical.DataModel.Enums.RestartSaveAtSubstep](../../../../Mechanical/DataModel/Enums/RestartSaveAtSubstep.md#RestartSaveAtSubstep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveAtSubstep.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ScatteredFieldFormulation *: [Ansys.Mechanical.DataModel.Enums.ScatteredFieldFormulation](../../../../Mechanical/DataModel/Enums/ScatteredFieldFormulation.md#ScatteredFieldFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScatteredFieldFormulation.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.ScatteringOutputType *: [Ansys.Mechanical.DataModel.Enums.ScatteringOutputType](../../../../Mechanical/DataModel/Enums/ScatteringOutputType.md#ScatteringOutputType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScatteringOutputType.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SolverPivotChecking *: [Ansys.Mechanical.DataModel.Enums.SolverPivotChecking](../../../../Mechanical/DataModel/Enums/SolverPivotChecking.md#SolverPivotChecking) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverPivotChecking.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SolverType *: [Ansys.Mechanical.DataModel.Enums.SolverType](../../../../Mechanical/DataModel/Enums/SolverType.md#SolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverType.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../../Mechanical/DataModel/Enums/SolverUnitsControlType.md#SolverUnitsControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnits.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SpectrumType *: [Ansys.Mechanical.DataModel.Enums.SpectrumType](../../../../Mechanical/DataModel/Enums/SpectrumType.md#SpectrumType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpectrumType.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.Stabilization *: [Ansys.Mechanical.DataModel.Enums.StabilizationType](../../../../Mechanical/DataModel/Enums/StabilizationType.md#StabilizationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Stabilization.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.StabilizationActivationForFirstSubstep *: [Ansys.Mechanical.DataModel.Enums.StabilizationFirstSubstepOption](../../../../Mechanical/DataModel/Enums/StabilizationFirstSubstepOption.md#StabilizationFirstSubstepOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationActivationForFirstSubstep.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.StabilizationMethod *: [Ansys.Mechanical.DataModel.Enums.StabilizationMethod](../../../../Mechanical/DataModel/Enums/StabilizationMethod.md#StabilizationMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationMethod.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.StoreModalResults *: [Ansys.Mechanical.DataModel.Enums.StoreModalResult](../../../../Mechanical/DataModel/Enums/StoreModalResult.md#StoreModalResult) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreModalResults.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.DefineBy *: [Ansys.Mechanical.DataModel.Enums.TimeStepDefineByType](../../../../Mechanical/DataModel/Enums/TimeStepDefineByType.md#TimeStepDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.TransientApplication *: [Ansys.Mechanical.DataModel.Enums.TransientApplicationType](../../../../Mechanical/DataModel/Enums/TransientApplicationType.md#TransientApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransientApplication.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.AutomaticTimeStepping *: [Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping](../../../../Mechanical/DataModel/Enums/AutomaticTimeStepping.md#AutomaticTimeStepping) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticTimeStepping.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.RetainModesymFileAfterSolve *: [Ansys.Mechanical.DataModel.Enums.UseExistingModesymFile](../../../../Mechanical/DataModel/Enums/UseExistingModesymFile.md#UseExistingModesymFile) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RetainModesymFileAfterSolve.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.WeakSprings *: [Ansys.Mechanical.DataModel.Enums.WeakSpringsType](../../../../Mechanical/DataModel/Enums/WeakSpringsType.md#WeakSpringsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeakSprings.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.SpringStiffness *: [Ansys.Mechanical.DataModel.Enums.SpringsStiffnessType](../../../../Mechanical/DataModel/Enums/SpringsStiffnessType.md#SpringsStiffnessType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ANSYSAnalysisSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.Graph *: [Ansys.Mechanical.Graphics.AnalysisSettingsGraph](../../../../Mechanical/Graphics/AnalysisSettingsGraph.md#AnalysisSettingsGraph) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ANSYSAnalysisSettings.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ANSYSAnalysisSettings.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### ANSYSAnalysisSettings.SetAutomaticTimeStepping(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping](../../../../Mechanical/DataModel/Enums/AutomaticTimeStepping.md#AutomaticTimeStepping))

Sets the Automatic Time Stepping for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetForceConvergenceType(stepNumber: System.UInt32)

Gets the Force Convergence Tolerance Type at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetForceConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Force Convergence Tolerance Type for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetForceConvergenceTolerance(stepNumber: System.UInt32)

Gets the Force Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetForceConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Force Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

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

### ANSYSAnalysisSettings.SetMomentConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Moment Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetMomentConvergenceTolerance(stepNumber: System.UInt32)

Gets the Moment Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetMomentConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Moment Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

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

### ANSYSAnalysisSettings.SetDisplacementConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Displacement Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetDisplacementConvergenceTolerance(stepNumber: System.UInt32)

Gets the Displacement Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetDisplacementConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Displacement Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

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

### ANSYSAnalysisSettings.SetRotationConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Rotation Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetRotationConvergenceTolerance(stepNumber: System.UInt32)

Gets the Rotation Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetRotationConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Rotation Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

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

### ANSYSAnalysisSettings.SetTemperatureConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Temperature Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetTemperatureConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Temperature Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetTemperatureConvergenceValue(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.NonLinearValueType](../../../../Mechanical/DataModel/Enums/NonLinearValueType.md#NonLinearValueType))

Sets the Temperature Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetTemperatureConvergenceInputValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Temperature Convergence Input Value for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetTemperatureConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Temperature Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetHeatConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Heat Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetHeatConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Heat Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetHeatConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Heat Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetHeatConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Heat Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetVoltageConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Voltage Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetVoltageConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Voltage Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetVoltageConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Voltage Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetVoltageConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Voltage Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetChargeConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Charge Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetChargeConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Charge Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetChargeConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Charge Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetChargeConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Charge Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetEnergyConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Energy Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetEnergyConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Energy Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetEnergyConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Energy Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetEnergyConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Energy Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetCurrentConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the Current Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetCurrentConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Current Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetCurrentConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Current Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetCurrentConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the Current Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetEmagAMPSConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the EmagAMPS Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetEmagAMPSConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the EmagAMPS Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetEmagAMPSConvergenceValue(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the EmagAMPS Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetEmagAMPSConvergenceMinimumReference(stepNumber: System.UInt32, value: Ansys.Core.Units.Quantity)

Sets the EmagAMPS Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetEmagCSGConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ConvergenceToleranceType))

Sets the EmagCSG Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetEmagCSGConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the EmagCSG Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

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

### ANSYSAnalysisSettings.SetLineSearch(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.LineSearchType](../../../../Mechanical/DataModel/Enums/LineSearchType.md#LineSearchType))

Sets the Line Search for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetStabilization(stepNumber: System.UInt32)

Gets the Stabilization at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetStabilization(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.StabilizationType](../../../../Mechanical/DataModel/Enums/StabilizationType.md#StabilizationType))

Sets the Stabilization for a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.GetStabilizationMethod(stepNumber: System.UInt32)

Gets the Stabilization Method at a given solution step.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.SetStabilizationMethod(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.StabilizationMethod](../../../../Mechanical/DataModel/Enums/StabilizationMethod.md#StabilizationMethod))

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

### ANSYSAnalysisSettings.SetStabilizationFirstSubstepOption(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.StabilizationFirstSubstepOption](../../../../Mechanical/DataModel/Enums/StabilizationFirstSubstepOption.md#StabilizationFirstSubstepOption))

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

### ANSYSAnalysisSettings.SetStoreResultsAt(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.TimePointsOptions](../../../../Mechanical/DataModel/Enums/TimePointsOptions.md#TimePointsOptions))

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

### ANSYSAnalysisSettings.SetDefineBy(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.TimeStepDefineByType](../../../../Mechanical/DataModel/Enums/TimeStepDefineByType.md#TimeStepDefineByType))

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

### ANSYSAnalysisSettings.SetCreepEffects(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.Creep](../../../../Mechanical/DataModel/Enums/Creep.md#Creep))

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

### ANSYSAnalysisSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ANSYSAnalysisSettings.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

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

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

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
