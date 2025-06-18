# `ANSYSAnalysisSettings`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.AnalysisSettings.ANSYSAnalysisSettings"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AnalysisSettings.ANSYSAnalysisSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ANSYSAnalysisSettings.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [`Activate`](#ANSYSAnalysisSettings.Activate)                                                                     | Activate the current object.                                                           |
| [`AddComment`](#ANSYSAnalysisSettings.AddComment)                                                                 | Creates a new child Comment.                                                           |
| [`AddFigure`](#ANSYSAnalysisSettings.AddFigure)                                                                   | Creates a new child Figure.                                                            |
| [`AddImage`](#ANSYSAnalysisSettings.AddImage)                                                                     | Creates a new child Image.                                                             |
| [`CopyTo`](#ANSYSAnalysisSettings.CopyTo)                                                                         | CopyTo method.                                                                         |
| [`CreateParameter`](#ANSYSAnalysisSettings.CreateParameter)                                                       | Creates a new parameter for a Property.                                                |
| [`DeleteAllRestartPoints`](#ANSYSAnalysisSettings.DeleteAllRestartPoints)                                         | DeleteAllRestartPoints method.                                                         |
| [`Duplicate`](#ANSYSAnalysisSettings.Duplicate)                                                                   | Creates a copy of the current DataModelObject.                                         |
| [`GetAMStepType`](#ANSYSAnalysisSettings.GetAMStepType)                                                           | Gets the AM Process Step Type at a given step.                                         |
| [`GetAutomaticTimeStepping`](#ANSYSAnalysisSettings.GetAutomaticTimeStepping)                                     | Gets the Automatic Time Stepping at a given solution step.                             |
| [`GetCarryOverTimeStep`](#ANSYSAnalysisSettings.GetCarryOverTimeStep)                                             | Gets the Carry Over Time Step at a given solution step.                                |
| [`GetChildren`](#ANSYSAnalysisSettings.GetChildren)                                                               | Gets the list of children, filtered by type.                                           |
| [`GetCreepEffects`](#ANSYSAnalysisSettings.GetCreepEffects)                                                       | Gets the Creep Effects for a given solution step.                                      |
| [`GetCreepLimitRatio`](#ANSYSAnalysisSettings.GetCreepLimitRatio)                                                 | Gets the Creep Limit Ratio for a given solution step.                                  |
| [`GetCurrentConvergenceMinimumReference`](#ANSYSAnalysisSettings.GetCurrentConvergenceMinimumReference)           | Gets the Current Convergence Minimum Reference at a given solution step.               |
| [`GetCurrentConvergenceTolerance`](#ANSYSAnalysisSettings.GetCurrentConvergenceTolerance)                         | Gets the Current Convergence Tolerance as a percentage at a given solution step.       |
| [`GetCurrentConvergenceType`](#ANSYSAnalysisSettings.GetCurrentConvergenceType)                                   | Gets the Current Convergence Tolerance type at a given solution step.                  |
| [`GetCurrentConvergenceValue`](#ANSYSAnalysisSettings.GetCurrentConvergenceValue)                                 | Gets the Current Convergence Value at a given solution step.                           |
| [`GetDefineBy`](#ANSYSAnalysisSettings.GetDefineBy)                                                               | Gets the Define By at a given solution step.                                           |
| [`GetDisplacementConvergenceMinimumReference`](#ANSYSAnalysisSettings.GetDisplacementConvergenceMinimumReference) | Gets the Displacement Convergence Minimum Reference at a given solution step.          |
| [`GetDisplacementConvergenceTolerance`](#ANSYSAnalysisSettings.GetDisplacementConvergenceTolerance)               | Gets the Displacement Convergence Tolerance as a percentage at a given solution step.  |
| [`GetDisplacementConvergenceType`](#ANSYSAnalysisSettings.GetDisplacementConvergenceType)                         | Gets the Displacement Convergence Tolerance type at a given solution step.             |
| [`GetDisplacementConvergenceValue`](#ANSYSAnalysisSettings.GetDisplacementConvergenceValue)                       | Gets the Displacement Convergence Value at a given solution step.                      |
| [`GetEmagAMPSConvergenceMinimumReference`](#ANSYSAnalysisSettings.GetEmagAMPSConvergenceMinimumReference)         | Gets the EmagAMPS Convergence Minimum Reference at a given solution step.              |
| [`GetEmagAMPSConvergenceTolerance`](#ANSYSAnalysisSettings.GetEmagAMPSConvergenceTolerance)                       | Gets the EmagAMPS Convergence Tolerance as a percentage at a given solution step.      |
| [`GetEmagAMPSConvergenceType`](#ANSYSAnalysisSettings.GetEmagAMPSConvergenceType)                                 | Gets the EmagAMPS Convergence Tolerance type at a given solution step.                 |
| [`GetEmagAMPSConvergenceValue`](#ANSYSAnalysisSettings.GetEmagAMPSConvergenceValue)                               | Gets the EmagAMPS Convergence Value at a given solution step.                          |
| [`GetEmagCSGConvergenceMinimumReference`](#ANSYSAnalysisSettings.GetEmagCSGConvergenceMinimumReference)           | Gets the EmagCSG Convergence Minimum Reference at a given solution step.               |
| [`GetEmagCSGConvergenceTolerance`](#ANSYSAnalysisSettings.GetEmagCSGConvergenceTolerance)                         | Gets the EmagCSG Convergence Tolerance as a percentage at a given solution step.       |
| [`GetEmagCSGConvergenceType`](#ANSYSAnalysisSettings.GetEmagCSGConvergenceType)                                   | Gets the EmagCSG Convergence Tolerance type at a given solution step.                  |
| [`GetEmagCSGConvergenceValue`](#ANSYSAnalysisSettings.GetEmagCSGConvergenceValue)                                 | Gets the EmagCSG Convergence Value at a given solution step.                           |
| [`GetEnergyConvergenceMinimumReference`](#ANSYSAnalysisSettings.GetEnergyConvergenceMinimumReference)             | Gets the Energy Convergence Minimum Reference at a given solution step.                |
| [`GetEnergyConvergenceTolerance`](#ANSYSAnalysisSettings.GetEnergyConvergenceTolerance)                           | Gets the Energy Convergence Tolerance as a percentage at a given solution step.        |
| [`GetEnergyConvergenceType`](#ANSYSAnalysisSettings.GetEnergyConvergenceType)                                     | Gets the Energy Convergence Tolerance type at a given solution step.                   |
| [`GetEnergyConvergenceValue`](#ANSYSAnalysisSettings.GetEnergyConvergenceValue)                                   | Gets the Energy Convergence Value at a given solution step.                            |
| [`GetForceConvergenceMinimumReference`](#ANSYSAnalysisSettings.GetForceConvergenceMinimumReference)               | Gets the Force Convergence Minimum Reference at a given solution step.                 |
| [`GetForceConvergenceTolerance`](#ANSYSAnalysisSettings.GetForceConvergenceTolerance)                             | Gets the Force Convergence Tolerance as a percentage at a given solution step.         |
| [`GetForceConvergenceType`](#ANSYSAnalysisSettings.GetForceConvergenceType)                                       | Gets the Force Convergence Tolerance Type at a given solution step.                    |
| [`GetForceConvergenceValue`](#ANSYSAnalysisSettings.GetForceConvergenceValue)                                     | Gets the Force Convergence Value at a given solution step.                             |
| [`GetHeatConvergenceMinimumReference`](#ANSYSAnalysisSettings.GetHeatConvergenceMinimumReference)                 | Gets the Heat Convergence Minimum Reference at a given solution step.                  |
| [`GetHeatConvergenceTolerance`](#ANSYSAnalysisSettings.GetHeatConvergenceTolerance)                               | Gets the Heat Convergence Tolerance as a percentage at a given solution step.          |
| [`GetHeatConvergenceType`](#ANSYSAnalysisSettings.GetHeatConvergenceType)                                         | Gets the Heat Convergence Tolerance type at a given solution step.                     |
| [`GetHeatConvergenceValue`](#ANSYSAnalysisSettings.GetHeatConvergenceValue)                                       | Gets the Heat Convergence Value at a given solution step.                              |
| [`GetInitialSubsteps`](#ANSYSAnalysisSettings.GetInitialSubsteps)                                                 | Gets the Initial Substeps at a given solution step.                                    |
| [`GetInitialTimeStep`](#ANSYSAnalysisSettings.GetInitialTimeStep)                                                 | Gets the Initial Time Step at a given solution step.                                   |
| [`GetLineSearch`](#ANSYSAnalysisSettings.GetLineSearch)                                                           | Gets the Line Search at a given solution step.                                         |
| [`GetMaximumSubsteps`](#ANSYSAnalysisSettings.GetMaximumSubsteps)                                                 | Gets the Maximum Substeps at a given solution step.                                    |
| [`GetMaximumTimeStep`](#ANSYSAnalysisSettings.GetMaximumTimeStep)                                                 | Gets the Maximum Time Step at a given solution step.                                   |
| [`GetMinimumSubsteps`](#ANSYSAnalysisSettings.GetMinimumSubsteps)                                                 | Gets the Minimum Substeps at a given solution step.                                    |
| [`GetMinimumTimeStep`](#ANSYSAnalysisSettings.GetMinimumTimeStep)                                                 | Gets the Minimum Time Step at a given solution step.                                   |
| [`GetMomentConvergenceMinimumReference`](#ANSYSAnalysisSettings.GetMomentConvergenceMinimumReference)             | Gets the Moment Convergence Minimum Reference at a given solution step.                |
| [`GetMomentConvergenceTolerance`](#ANSYSAnalysisSettings.GetMomentConvergenceTolerance)                           | Gets the Moment Convergence Tolerance as a percentage at a given solution step.        |
| [`GetMomentConvergenceType`](#ANSYSAnalysisSettings.GetMomentConvergenceType)                                     | Gets the Moment Convergence Tolerance type at a given solution step.                   |
| [`GetMomentConvergenceValue`](#ANSYSAnalysisSettings.GetMomentConvergenceValue)                                   | Gets the Moment Convergence Value at a given solution step.                            |
| [`GetNumberOfSubSteps`](#ANSYSAnalysisSettings.GetNumberOfSubSteps)                                               | Gets the Number of Substeps for a given solution step.                                 |
| [`GetParameter`](#ANSYSAnalysisSettings.GetParameter)                                                             | Gets the parameter corresponding to the given property.                                |
| [`GetRotationConvergenceMinimumReference`](#ANSYSAnalysisSettings.GetRotationConvergenceMinimumReference)         | Gets the Rotation Convergence Minimum Reference at a given solution step.              |
| [`GetRotationConvergenceTolerance`](#ANSYSAnalysisSettings.GetRotationConvergenceTolerance)                       | Gets the Rotation Convergence Tolerance as a percentage at a given solution step.      |
| [`GetRotationConvergenceType`](#ANSYSAnalysisSettings.GetRotationConvergenceType)                                 | Gets the Rotation Convergence Tolerance type at a given solution step.                 |
| [`GetRotationConvergenceValue`](#ANSYSAnalysisSettings.GetRotationConvergenceValue)                               | Gets the Rotation Convergence Value at a given solution step.                          |
| [`GetStabilization`](#ANSYSAnalysisSettings.GetStabilization)                                                     | Gets the Stabilization at a given solution step.                                       |
| [`GetStabilizationDampingFactor`](#ANSYSAnalysisSettings.GetStabilizationDampingFactor)                           | Gets the Stabilization Damping Factor at a given solution step.                        |
| [`GetStabilizationEnergyDissipationRatio`](#ANSYSAnalysisSettings.GetStabilizationEnergyDissipationRatio)         | Gets the Stabilization Energy Dissipation Ratio at a given solution step.              |
| [`GetStabilizationFirstSubstepOption`](#ANSYSAnalysisSettings.GetStabilizationFirstSubstepOption)                 | Gets the Stabilization First Substep Option at a given solution step.                  |
| [`GetStabilizationForceLimit`](#ANSYSAnalysisSettings.GetStabilizationForceLimit)                                 | Gets the Stabilization Force Limit at a given solution step.                           |
| [`GetStabilizationMethod`](#ANSYSAnalysisSettings.GetStabilizationMethod)                                         | Gets the Stabilization Method at a given solution step.                                |
| [`GetStepEndTime`](#ANSYSAnalysisSettings.GetStepEndTime)                                                         | Gets the Step End Time at a given solution step.                                       |
| [`GetStepName`](#ANSYSAnalysisSettings.GetStepName)                                                               | Gets the Step name at a given step.                                                    |
| [`GetStoreResulsAtValue`](#ANSYSAnalysisSettings.GetStoreResulsAtValue)                                           | Gets the Store Results At Value at a given solution step.                              |
| [`GetStoreResultsAt`](#ANSYSAnalysisSettings.GetStoreResultsAt)                                                   | Gets the Store Results At at a given solution step.                                    |
| [`GetStructuralOnly`](#ANSYSAnalysisSettings.GetStructuralOnly)                                                   | Gets the TimeIntegration Structural for a given solution step.                         |
| [`GetTemperatureConvergenceInputValue`](#ANSYSAnalysisSettings.GetTemperatureConvergenceInputValue)               | Gets the Temperature Convergence Input Value at a given solution step.                 |
| [`GetTemperatureConvergenceMinimumReference`](#ANSYSAnalysisSettings.GetTemperatureConvergenceMinimumReference)   | Gets the Temperature Convergence Minimum Reference at a given solution step.           |
| [`GetTemperatureConvergenceTolerance`](#ANSYSAnalysisSettings.GetTemperatureConvergenceTolerance)                 | Gets the Temperature Convergence Tolerance as a percentage at a given solution step.   |
| [`GetTemperatureConvergenceType`](#ANSYSAnalysisSettings.GetTemperatureConvergenceType)                           | Gets the Temperature Convergence Tolerance type at a given solution step.              |
| [`GetTemperatureConvergenceValue`](#ANSYSAnalysisSettings.GetTemperatureConvergenceValue)                         | Gets the Temperature Convergence Value at a given solution step.                       |
| [`GetThermalOnly`](#ANSYSAnalysisSettings.GetThermalOnly)                                                         | Sets the TimeIntegration Thermal for a given solution step.                            |
| [`GetTimeIntegration`](#ANSYSAnalysisSettings.GetTimeIntegration)                                                 | Gets the TimeIntegration for a given solution step.                                    |
| [`GetTimeStep`](#ANSYSAnalysisSettings.GetTimeStep)                                                               | Sets the Time Step for a given solution step.                                          |
| [`GetVoltageConvergenceMinimumReference`](#ANSYSAnalysisSettings.GetVoltageConvergenceMinimumReference)           | Gets the Voltage Convergence Minimum Reference at a given solution step.               |
| [`GetVoltageConvergenceTolerance`](#ANSYSAnalysisSettings.GetVoltageConvergenceTolerance)                         | Gets the Voltage Convergence Tolerance as a percentage at a given solution step.       |
| [`GetVoltageConvergenceType`](#ANSYSAnalysisSettings.GetVoltageConvergenceType)                                   | Gets the Voltage Convergence Tolerance type at a given solution step.                  |
| [`GetVoltageConvergenceValue`](#ANSYSAnalysisSettings.GetVoltageConvergenceValue)                                 | Gets the Voltage Convergence Value at a given solution step.                           |
| [`GroupAllSimilarChildren`](#ANSYSAnalysisSettings.GroupAllSimilarChildren)                                       | Run the GroupAllSimilarChildren action.                                                |
| [`GroupSimilarObjects`](#ANSYSAnalysisSettings.GroupSimilarObjects)                                               | Run the GroupSimilarObjects action.                                                    |
| [`PropertyByAPIName`](#ANSYSAnalysisSettings.PropertyByAPIName)                                                   | Get a property by its API name.                                                        |
| [`PropertyByName`](#ANSYSAnalysisSettings.PropertyByName)                                                         | Get a property by its unique name.                                                     |
| [`RemoveParameter`](#ANSYSAnalysisSettings.RemoveParameter)                                                       | Removes the parameter from the parameter set corresponding to the given property.      |
| [`SetAutomaticTimeStepping`](#ANSYSAnalysisSettings.SetAutomaticTimeStepping)                                     | Sets the Automatic Time Stepping for a given solution step.                            |
| [`SetCarryOverTimeStep`](#ANSYSAnalysisSettings.SetCarryOverTimeStep)                                             | Sets the Carry Over Time Step for a given solution step.                               |
| [`SetChargeConvergenceMinimumReference`](#ANSYSAnalysisSettings.SetChargeConvergenceMinimumReference)             | Sets the Charge Convergence Minimum Reference for a given solution step.               |
| [`SetChargeConvergenceTolerance`](#ANSYSAnalysisSettings.SetChargeConvergenceTolerance)                           | Sets the Charge Convergence Tolerance as a percentage for a given solution step.       |
| [`SetChargeConvergenceType`](#ANSYSAnalysisSettings.SetChargeConvergenceType)                                     | Sets the Charge Convergence Tolerance type for a given solution step.                  |
| [`SetChargeConvergenceValue`](#ANSYSAnalysisSettings.SetChargeConvergenceValue)                                   | Sets the Charge Convergence Value for a given solution step.                           |
| [`SetCreepEffects`](#ANSYSAnalysisSettings.SetCreepEffects)                                                       | Sets the Creep Effects for a given solution step.                                      |
| [`SetCreepLimitRatio`](#ANSYSAnalysisSettings.SetCreepLimitRatio)                                                 | Sets the Creep Limit Ratio for a given solution step.                                  |
| [`SetCurrentConvergenceMinimumReference`](#ANSYSAnalysisSettings.SetCurrentConvergenceMinimumReference)           | Sets the Current Convergence Minimum Reference for a given solution step.              |
| [`SetCurrentConvergenceTolerance`](#ANSYSAnalysisSettings.SetCurrentConvergenceTolerance)                         | Sets the Current Convergence Tolerance as a percentage for a given solution step.      |
| [`SetCurrentConvergenceType`](#ANSYSAnalysisSettings.SetCurrentConvergenceType)                                   | Sets the Current Convergence Tolerance type for a given solution step.                 |
| [`SetCurrentConvergenceValue`](#ANSYSAnalysisSettings.SetCurrentConvergenceValue)                                 | Sets the Current Convergence Value for a given solution step.                          |
| [`SetDefineBy`](#ANSYSAnalysisSettings.SetDefineBy)                                                               | Sets the Define By for a given solution step.                                          |
| [`SetDisplacementConvergenceMinimumReference`](#ANSYSAnalysisSettings.SetDisplacementConvergenceMinimumReference) | Sets the Displacement Convergence Minimum Reference for a given solution step.         |
| [`SetDisplacementConvergenceTolerance`](#ANSYSAnalysisSettings.SetDisplacementConvergenceTolerance)               | Sets the Displacement Convergence Tolerance as a percentage for a given solution step. |
| [`SetDisplacementConvergenceType`](#ANSYSAnalysisSettings.SetDisplacementConvergenceType)                         | Sets the Displacement Convergence Tolerance type for a given solution step.            |
| [`SetDisplacementConvergenceValue`](#ANSYSAnalysisSettings.SetDisplacementConvergenceValue)                       | Sets the Displacement Convergence Value for a given solution step.                     |
| [`SetEmagAMPSConvergenceMinimumReference`](#ANSYSAnalysisSettings.SetEmagAMPSConvergenceMinimumReference)         | Sets the EmagAMPS Convergence Minimum Reference for a given solution step.             |
| [`SetEmagAMPSConvergenceTolerance`](#ANSYSAnalysisSettings.SetEmagAMPSConvergenceTolerance)                       | Sets the EmagAMPS Convergence Tolerance as a percentage for a given solution step.     |
| [`SetEmagAMPSConvergenceType`](#ANSYSAnalysisSettings.SetEmagAMPSConvergenceType)                                 | Sets the EmagAMPS Convergence Tolerance type for a given solution step.                |
| [`SetEmagAMPSConvergenceValue`](#ANSYSAnalysisSettings.SetEmagAMPSConvergenceValue)                               | Sets the EmagAMPS Convergence Value for a given solution step.                         |
| [`SetEmagCSGConvergenceMinimumReference`](#ANSYSAnalysisSettings.SetEmagCSGConvergenceMinimumReference)           | Sets the EmagCSG Convergence Minimum Reference for a given solution step.              |
| [`SetEmagCSGConvergenceTolerance`](#ANSYSAnalysisSettings.SetEmagCSGConvergenceTolerance)                         | Sets the EmagCSG Convergence Tolerance as a percentage for a given solution step.      |
| [`SetEmagCSGConvergenceType`](#ANSYSAnalysisSettings.SetEmagCSGConvergenceType)                                   | Sets the EmagCSG Convergence Tolerance type for a given solution step.                 |
| [`SetEmagCSGConvergenceValue`](#ANSYSAnalysisSettings.SetEmagCSGConvergenceValue)                                 | Sets the EmagCSG Convergence Value for a given solution step.                          |
| [`SetEnergyConvergenceMinimumReference`](#ANSYSAnalysisSettings.SetEnergyConvergenceMinimumReference)             | Sets the Energy Convergence Minimum Reference for a given solution step.               |
| [`SetEnergyConvergenceTolerance`](#ANSYSAnalysisSettings.SetEnergyConvergenceTolerance)                           | Sets the Energy Convergence Tolerance as a percentage for a given solution step.       |
| [`SetEnergyConvergenceType`](#ANSYSAnalysisSettings.SetEnergyConvergenceType)                                     | Sets the Energy Convergence Tolerance type for a given solution step.                  |
| [`SetEnergyConvergenceValue`](#ANSYSAnalysisSettings.SetEnergyConvergenceValue)                                   | Sets the Energy Convergence Value for a given solution step.                           |
| [`SetForceConvergenceMinimumReference`](#ANSYSAnalysisSettings.SetForceConvergenceMinimumReference)               | Sets the Force Convergence Minimum Reference for a given solution step.                |
| [`SetForceConvergenceTolerance`](#ANSYSAnalysisSettings.SetForceConvergenceTolerance)                             | Sets the Force Convergence Tolerance as a percentage for a given solution step.        |
| [`SetForceConvergenceType`](#ANSYSAnalysisSettings.SetForceConvergenceType)                                       | Sets the Force Convergence Tolerance Type for a given solution step.                   |
| [`SetForceConvergenceValue`](#ANSYSAnalysisSettings.SetForceConvergenceValue)                                     | Sets the Force Convergence Value for a given solution step.                            |
| [`SetHeatConvergenceMinimumReference`](#ANSYSAnalysisSettings.SetHeatConvergenceMinimumReference)                 | Sets the Heat Convergence Minimum Reference for a given solution step.                 |
| [`SetHeatConvergenceTolerance`](#ANSYSAnalysisSettings.SetHeatConvergenceTolerance)                               | Sets the Heat Convergence Tolerance as a percentage for a given solution step.         |
| [`SetHeatConvergenceType`](#ANSYSAnalysisSettings.SetHeatConvergenceType)                                         | Sets the Heat Convergence Tolerance type for a given solution step.                    |
| [`SetHeatConvergenceValue`](#ANSYSAnalysisSettings.SetHeatConvergenceValue)                                       | Sets the Heat Convergence Value for a given solution step.                             |
| [`SetInitialSubsteps`](#ANSYSAnalysisSettings.SetInitialSubsteps)                                                 | Sets the Initial Substeps for a given solution step.                                   |
| [`SetInitialTimeStep`](#ANSYSAnalysisSettings.SetInitialTimeStep)                                                 | Sets the Initial Time Step for a given solution step.                                  |
| [`SetLineSearch`](#ANSYSAnalysisSettings.SetLineSearch)                                                           | Sets the Line Search for a given solution step.                                        |
| [`SetMaximumSubsteps`](#ANSYSAnalysisSettings.SetMaximumSubsteps)                                                 | Sets the Maximum Substeps for a given solution step.                                   |
| [`SetMaximumTimeStep`](#ANSYSAnalysisSettings.SetMaximumTimeStep)                                                 | Sets the Maximum Time Step for a given solution step.                                  |
| [`SetMinimumSubsteps`](#ANSYSAnalysisSettings.SetMinimumSubsteps)                                                 | Sets the Minimum Substeps for a given solution step.                                   |
| [`SetMinimumTimeStep`](#ANSYSAnalysisSettings.SetMinimumTimeStep)                                                 | Sets the Minimum Time Step for a given solution step.                                  |
| [`SetMomentConvergenceMinimumReference`](#ANSYSAnalysisSettings.SetMomentConvergenceMinimumReference)             | Sets the Moment Convergence Minimum Reference for a given solution step.               |
| [`SetMomentConvergenceTolerance`](#ANSYSAnalysisSettings.SetMomentConvergenceTolerance)                           | Sets the Moment Convergence Tolerance as a percentage for a given solution step.       |
| [`SetMomentConvergenceType`](#ANSYSAnalysisSettings.SetMomentConvergenceType)                                     | Sets the Moment Convergence Tolerance type for a given solution step.                  |
| [`SetMomentConvergenceValue`](#ANSYSAnalysisSettings.SetMomentConvergenceValue)                                   | Sets the Moment Convergence Value for a given solution step.                           |
| [`SetNumberOfSubSteps`](#ANSYSAnalysisSettings.SetNumberOfSubSteps)                                               | Sets the Number of Substeps for a given solution step.                                 |
| [`SetRotationConvergenceMinimumReference`](#ANSYSAnalysisSettings.SetRotationConvergenceMinimumReference)         | Sets the Rotation Convergence Minimum Reference for a given solution step.             |
| [`SetRotationConvergenceTolerance`](#ANSYSAnalysisSettings.SetRotationConvergenceTolerance)                       | Sets the Rotation Convergence Tolerance as a percentage for a given solution step.     |
| [`SetRotationConvergenceType`](#ANSYSAnalysisSettings.SetRotationConvergenceType)                                 | Sets the Rotation Convergence Tolerance type for a given solution step.                |
| [`SetRotationConvergenceValue`](#ANSYSAnalysisSettings.SetRotationConvergenceValue)                               | Sets the Rotation Convergence Value for a given solution step.                         |
| [`SetStabilization`](#ANSYSAnalysisSettings.SetStabilization)                                                     | Sets the Stabilization for a given solution step.                                      |
| [`SetStabilizationDampingFactor`](#ANSYSAnalysisSettings.SetStabilizationDampingFactor)                           | Sets the Stabilization Damping Factor for a given solution step.                       |
| [`SetStabilizationEnergyDissipationRatio`](#ANSYSAnalysisSettings.SetStabilizationEnergyDissipationRatio)         | Sets the Stabilization Energy Dissipation Ratio for a given solution step.             |
| [`SetStabilizationFirstSubstepOption`](#ANSYSAnalysisSettings.SetStabilizationFirstSubstepOption)                 | Sets the Stabilization First Substep Option for a given solution step.                 |
| [`SetStabilizationForceLimit`](#ANSYSAnalysisSettings.SetStabilizationForceLimit)                                 | Sets the Stabilization Force Limit for a given solution step.                          |
| [`SetStabilizationMethod`](#ANSYSAnalysisSettings.SetStabilizationMethod)                                         | Sets the Stabilization Method for a given solution step.                               |
| [`SetStepEndTime`](#ANSYSAnalysisSettings.SetStepEndTime)                                                         | Sets the Step End Time for a given solution step.                                      |
| [`SetStepName`](#ANSYSAnalysisSettings.SetStepName)                                                               | Sets the Step name at a given step.                                                    |
| [`SetStoreResulsAtValue`](#ANSYSAnalysisSettings.SetStoreResulsAtValue)                                           | Sets the Store Results At Value for a given solution step.                             |
| [`SetStoreResultsAt`](#ANSYSAnalysisSettings.SetStoreResultsAt)                                                   | Sets the Store Results At for a given solution step.                                   |
| [`SetStructuralOnly`](#ANSYSAnalysisSettings.SetStructuralOnly)                                                   | Sets the TimeIntegration Structural for a given solution step.                         |
| [`SetTemperatureConvergenceInputValue`](#ANSYSAnalysisSettings.SetTemperatureConvergenceInputValue)               | Sets the Temperature Convergence Input Value for a given solution step.                |
| [`SetTemperatureConvergenceMinimumReference`](#ANSYSAnalysisSettings.SetTemperatureConvergenceMinimumReference)   | Sets the Temperature Convergence Minimum Reference for a given solution step.          |
| [`SetTemperatureConvergenceTolerance`](#ANSYSAnalysisSettings.SetTemperatureConvergenceTolerance)                 | Sets the Temperature Convergence Tolerance as a percentage for a given solution step.  |
| [`SetTemperatureConvergenceType`](#ANSYSAnalysisSettings.SetTemperatureConvergenceType)                           | Sets the Temperature Convergence Tolerance type for a given solution step.             |
| [`SetTemperatureConvergenceValue`](#ANSYSAnalysisSettings.SetTemperatureConvergenceValue)                         | Sets the Temperature Convergence Value for a given solution step.                      |
| [`SetThermalOnly`](#ANSYSAnalysisSettings.SetThermalOnly)                                                         | Sets the TimeIntegration Thermal for a given solution step.                            |
| [`SetTimeIntegration`](#ANSYSAnalysisSettings.SetTimeIntegration)                                                 | Sets the TimeIntegration for a given solution step.                                    |
| [`SetTimeStep`](#ANSYSAnalysisSettings.SetTimeStep)                                                               | Sets the Time Step for a given solution step.                                          |
| [`SetVoltageConvergenceMinimumReference`](#ANSYSAnalysisSettings.SetVoltageConvergenceMinimumReference)           | Sets the Voltage Convergence Minimum Reference for a given solution step.              |
| [`SetVoltageConvergenceTolerance`](#ANSYSAnalysisSettings.SetVoltageConvergenceTolerance)                         | Sets the Voltage Convergence Tolerance as a percentage for a given solution step.      |
| [`SetVoltageConvergenceType`](#ANSYSAnalysisSettings.SetVoltageConvergenceType)                                   | Sets the Voltage Convergence Tolerance type for a given solution step.                 |
| [`SetVoltageConvergenceValue`](#ANSYSAnalysisSettings.SetVoltageConvergenceValue)                                 | Sets the Voltage Convergence Value for a given solution step.                          |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| [`AMCooldownNumberOfSubsteps`](#ANSYSAnalysisSettings.AMCooldownNumberOfSubsteps)                             | Gets or sets the AM Cooldown Number of Substeps.                                                                                 |
| [`AMPSConvergence`](#ANSYSAnalysisSettings.AMPSConvergence)                                                   | Gets or sets the AMPSConvergence.                                                                                                |
| [`AMStepType`](#ANSYSAnalysisSettings.AMStepType)                                                             | Gets or sets the AM Process Step Type.                                                                                           |
| [`AMSubstepsBetweenHeating`](#ANSYSAnalysisSettings.AMSubstepsBetweenHeating)                                 | Gets or sets the AM Substeps Between Heating.                                                                                    |
| [`AMSubstepsToApplyHeats`](#ANSYSAnalysisSettings.AMSubstepsToApplyHeats)                                     | Gets or sets the AM Substeps to Apply Heat.                                                                                      |
| [`AggressiveRemeshing`](#ANSYSAnalysisSettings.AggressiveRemeshing)                                           | Gets or sets the AggressiveRemeshing.                                                                                            |
| [`AutomaticTimeStepping`](#ANSYSAnalysisSettings.AutomaticTimeStepping)                                       | Gets or sets the AutomaticTimeStepping.                                                                                          |
| [`AxisymmetryDivisions`](#ANSYSAnalysisSettings.AxisymmetryDivisions)                                         | Gets or sets the AxisymmetryDivisions.                                                                                           |
| [`BackStress`](#ANSYSAnalysisSettings.BackStress)                                                             | Gets or sets the BackStress.                                                                                                     |
| [`BaseRemovalType`](#ANSYSAnalysisSettings.BaseRemovalType)                                                   | Gets or sets the BaseRemovalType.                                                                                                |
| [`BoundaryAngle`](#ANSYSAnalysisSettings.BoundaryAngle)                                                       | Gets or sets the BoundaryAngle.                                                                                                  |
| [`CSGConvergence`](#ANSYSAnalysisSettings.CSGConvergence)                                                     | Gets or sets the CSGConvergence.                                                                                                 |
| [`CStarIntegral`](#ANSYSAnalysisSettings.CStarIntegral)                                                       | Gets or sets the CStarIntegral.                                                                                                  |
| [`CacheResultsInMemory`](#ANSYSAnalysisSettings.CacheResultsInMemory)                                         | Gets or sets the CacheResultsInMemory.                                                                                           |
| [`CalculateAcceleration`](#ANSYSAnalysisSettings.CalculateAcceleration)                                       | Gets or sets the CalculateAcceleration.                                                                                          |
| [`CalculateEnergy`](#ANSYSAnalysisSettings.CalculateEnergy)                                                   | Gets or sets the CalculateEnergy.                                                                                                |
| [`CalculateEulerAngles`](#ANSYSAnalysisSettings.CalculateEulerAngles)                                         | Gets or sets the CalculateEulerAngles.                                                                                           |
| [`CalculateReactions`](#ANSYSAnalysisSettings.CalculateReactions)                                             | Gets or sets the CalculateReactions.                                                                                             |
| [`CalculateThermalFlux`](#ANSYSAnalysisSettings.CalculateThermalFlux)                                         | Gets or sets the CalculateThermalFlux.                                                                                           |
| [`CalculateVelocity`](#ANSYSAnalysisSettings.CalculateVelocity)                                               | Gets or sets the CalculateVelocity.                                                                                              |
| [`CalculateVelocityAndAcceleration`](#ANSYSAnalysisSettings.CalculateVelocityAndAcceleration)                 | Gets or sets the CalculateVelocityAndAcceleration.                                                                               |
| [`CalculateVolumeEnergy`](#ANSYSAnalysisSettings.CalculateVolumeEnergy)                                       | Gets or sets the CalculateVolumeEnergy.                                                                                          |
| [`CampbellDiagram`](#ANSYSAnalysisSettings.CampbellDiagram)                                                   | Gets or sets the CampbellDiagram.                                                                                                |
| [`CarryOverTimeStep`](#ANSYSAnalysisSettings.CarryOverTimeStep)                                               | Gets or sets the CarryOverTimeStep.                                                                                              |
| [`CentralFrequency`](#ANSYSAnalysisSettings.CentralFrequency)                                                 | Gets or sets the CentralFrequency.                                                                                               |
| [`ChargeConvergence`](#ANSYSAnalysisSettings.ChargeConvergence)                                               | Gets or sets the ChargeConvergence.                                                                                              |
| [`ChargeConvergenceMinimumReference`](#ANSYSAnalysisSettings.ChargeConvergenceMinimumReference)               | Gets or sets the ChargeConvergenceMinimumReference.                                                                              |
| [`ChargeConvergenceTolerance`](#ANSYSAnalysisSettings.ChargeConvergenceTolerance)                             | Gets or sets the ChargeConvergenceTolerance.                                                                                     |
| [`ChargeConvergenceValue`](#ANSYSAnalysisSettings.ChargeConvergenceValue)                                     | Gets or sets the ChargeConvergenceValue.                                                                                         |
| [`Children`](#ANSYSAnalysisSettings.Children)                                                                 | Gets the list of children.                                                                                                       |
| [`ClusterNumber`](#ANSYSAnalysisSettings.ClusterNumber)                                                       | Gets or sets the ClusterNumber.                                                                                                  |
| [`ClusterResults`](#ANSYSAnalysisSettings.ClusterResults)                                                     | Gets or sets the ClusterResults.                                                                                                 |
| [`CombineRestartFiles`](#ANSYSAnalysisSettings.CombineRestartFiles)                                           | Gets or sets the CombineRestartFiles.                                                                                            |
| [`Comments`](#ANSYSAnalysisSettings.Comments)                                                                 | Gets the list of associated comments.                                                                                            |
| [`ConstantDamping`](#ANSYSAnalysisSettings.ConstantDamping)                                                   | Gets or sets the ConstantDamping.                                                                                                |
| [`ConstantDampingRatio`](#ANSYSAnalysisSettings.ConstantDampingRatio)                                         | Gets or sets the ConstantDampingRatio.                                                                                           |
| [`ContactData`](#ANSYSAnalysisSettings.ContactData)                                                           | Gets or sets the ContactData.                                                                                                    |
| [`ContactMiscellaneous`](#ANSYSAnalysisSettings.ContactMiscellaneous)                                         | Gets or sets the ContactMiscellaneous.                                                                                           |
| [`ContactSplit`](#ANSYSAnalysisSettings.ContactSplit)                                                         | Gets or sets the ContactSplit.                                                                                                   |
| [`ContactSplitMaxNum`](#ANSYSAnalysisSettings.ContactSplitMaxNum)                                             | Gets or sets the ContactSplitMaxNum.                                                                                             |
| [`ContactSummary`](#ANSYSAnalysisSettings.ContactSummary)                                                     | Gets or sets the ContactSummary.                                                                                                 |
| [`CooldownTime`](#ANSYSAnalysisSettings.CooldownTime)                                                         | Gets or sets the AM Cooldown Time.                                                                                               |
| [`CooldownTimeType`](#ANSYSAnalysisSettings.CooldownTimeType)                                                 | Gets or sets the AM Cooldown Time Type.                                                                                          |
| [`CoriolisEffectApplied`](#ANSYSAnalysisSettings.CoriolisEffectApplied)                                       | Gets or sets the CoriolisEffectApplied.                                                                                          |
| [`CreepEffects`](#ANSYSAnalysisSettings.CreepEffects)                                                         | Gets or sets the CreepEffects.                                                                                                   |
| [`CreepLimitRatio`](#ANSYSAnalysisSettings.CreepLimitRatio)                                                   | Gets or sets the CreepLimitRatio.                                                                                                |
| [`CurrentConvergence`](#ANSYSAnalysisSettings.CurrentConvergence)                                             | Gets or sets the CurrentConvergence.                                                                                             |
| [`CurrentConvergenceMinimumReference`](#ANSYSAnalysisSettings.CurrentConvergenceMinimumReference)             | Gets or sets the CurrentConvergenceMinimumReference.                                                                             |
| [`CurrentConvergenceTolerance`](#ANSYSAnalysisSettings.CurrentConvergenceTolerance)                           | Gets or sets the CurrentConvergenceTolerance.                                                                                    |
| [`CurrentConvergenceValue`](#ANSYSAnalysisSettings.CurrentConvergenceValue)                                   | Gets or sets the CurrentConvergenceValue.                                                                                        |
| [`CurrentRestartPoint`](#ANSYSAnalysisSettings.CurrentRestartPoint)                                           | Gets or sets the Current Restart Point.                                                                                          |
| [`CurrentStepNumber`](#ANSYSAnalysisSettings.CurrentStepNumber)                                               | Gets or sets the CurrentStepNumber.                                                                                              |
| [`CurrentStepNumberHarmonic`](#ANSYSAnalysisSettings.CurrentStepNumberHarmonic)                               | Gets or sets the CurrentStepNumberHarmonic.                                                                                      |
| [`CyclicModeSuperposition`](#ANSYSAnalysisSettings.CyclicModeSuperposition)                                   | Gets or sets the CyclicModeSuperposition.                                                                                        |
| [`Damped`](#ANSYSAnalysisSettings.Damped)                                                                     | Gets or sets the Damped.                                                                                                         |
| [`DampingDefineBy`](#ANSYSAnalysisSettings.DampingDefineBy)                                                   | Gets or sets the DampingDefineBy.                                                                                                |
| [`DampingRatio`](#ANSYSAnalysisSettings.DampingRatio)                                                         | Gets or sets the DampingRatio.                                                                                                   |
| [`DataModelObjectCategory`](#ANSYSAnalysisSettings.DataModelObjectCategory)                                   | Gets the current DataModelObject’s category.                                                                                     |
| [`DefineBy`](#ANSYSAnalysisSettings.DefineBy)                                                                 | Gets or sets the DefineBy.                                                                                                       |
| [`DeleteUnneededFiles`](#ANSYSAnalysisSettings.DeleteUnneededFiles)                                           | Gets or sets the DeleteUnneededFiles.                                                                                            |
| [`DisplacementConvergence`](#ANSYSAnalysisSettings.DisplacementConvergence)                                   | Gets or sets the DisplacementConvergence.                                                                                        |
| [`DisplacementConvergenceMinimumReference`](#ANSYSAnalysisSettings.DisplacementConvergenceMinimumReference)   | Gets or sets the DisplacementConvergenceMinimumReference.                                                                        |
| [`DisplacementConvergenceTolerance`](#ANSYSAnalysisSettings.DisplacementConvergenceTolerance)                 | Gets or sets the DisplacementConvergenceTolerance.                                                                               |
| [`DisplacementConvergenceValue`](#ANSYSAnalysisSettings.DisplacementConvergenceValue)                         | Gets or sets the DisplacementConvergenceValue.                                                                                   |
| [`EdgeSplittingAngle`](#ANSYSAnalysisSettings.EdgeSplittingAngle)                                             | Gets or sets the EdgeSplittingAngle.                                                                                             |
| [`ElectricOnly`](#ANSYSAnalysisSettings.ElectricOnly)                                                         | Gets or sets the ElectricOnly.                                                                                                   |
| [`ElectromagneticNodalForces`](#ANSYSAnalysisSettings.ElectromagneticNodalForces)                             | Gets or sets the ElectromagneticNodalForces.                                                                                     |
| [`ElementCurrentDensity`](#ANSYSAnalysisSettings.ElementCurrentDensity)                                       | Gets or sets the ElementCurrentDensity.                                                                                          |
| [`EmagAMPSConvergenceMinimumReference`](#ANSYSAnalysisSettings.EmagAMPSConvergenceMinimumReference)           | Gets or sets the EmagAMPSConvergenceMinimumReference.                                                                            |
| [`EmagAMPSConvergenceTolerance`](#ANSYSAnalysisSettings.EmagAMPSConvergenceTolerance)                         | Gets or sets the EmagAMPSConvergenceTolerance.                                                                                   |
| [`EmagAMPSConvergenceValue`](#ANSYSAnalysisSettings.EmagAMPSConvergenceValue)                                 | Gets or sets the EmagAMPSConvergenceValue.                                                                                       |
| [`EmagCSGConvergenceMinimumReference`](#ANSYSAnalysisSettings.EmagCSGConvergenceMinimumReference)             | Gets or sets the EmagCSGConvergenceMinimumReference.                                                                             |
| [`EmagCSGConvergenceTolerance`](#ANSYSAnalysisSettings.EmagCSGConvergenceTolerance)                           | Gets or sets the EmagCSGConvergenceTolerance.                                                                                    |
| [`EmagCSGConvergenceValue`](#ANSYSAnalysisSettings.EmagCSGConvergenceValue)                                   | Gets or sets the EmagCSGConvergenceValue.                                                                                        |
| [`EnergyConvergence`](#ANSYSAnalysisSettings.EnergyConvergence)                                               | Gets or sets the EnergyConvergence.                                                                                              |
| [`EnergyConvergenceMinimumReference`](#ANSYSAnalysisSettings.EnergyConvergenceMinimumReference)               | Gets or sets the EnergyConvergenceMinimumReference.                                                                              |
| [`EnergyConvergenceTolerance`](#ANSYSAnalysisSettings.EnergyConvergenceTolerance)                             | Gets or sets the EnergyConvergenceTolerance.                                                                                     |
| [`EnergyConvergenceValue`](#ANSYSAnalysisSettings.EnergyConvergenceValue)                                     | Gets or sets the EnergyConvergenceValue.                                                                                         |
| [`EngineOrderofExcitation`](#ANSYSAnalysisSettings.EngineOrderofExcitation)                                   | Gets or sets the EngineOrderofExcitation.                                                                                        |
| [`EqvDampingRatioFromModal`](#ANSYSAnalysisSettings.EqvDampingRatioFromModal)                                 | Gets or sets the EqvDampingRatioFromModal.                                                                                       |
| [`ExcludeInsignificantModes`](#ANSYSAnalysisSettings.ExcludeInsignificantModes)                               | Gets or sets the ExcludeInsignificantModes.                                                                                      |
| [`ExpandResultsFrom`](#ANSYSAnalysisSettings.ExpandResultsFrom)                                               | Gets or sets the ExpandResultsFrom.                                                                                              |
| [`Expansion`](#ANSYSAnalysisSettings.Expansion)                                                               | Gets the Expansion.                                                                                                              |
| [`ExportHighStrains`](#ANSYSAnalysisSettings.ExportHighStrains)                                               | Gets or sets the ExportHighStrains.                                                                                              |
| [`ExportLayerEndTemperature`](#ANSYSAnalysisSettings.ExportLayerEndTemperature)                               | Gets or sets the ExportLayerEndTemperature.                                                                                      |
| [`ExportRecoaterInterference`](#ANSYSAnalysisSettings.ExportRecoaterInterference)                             | Gets or sets the ExportRecoaterInterference.                                                                                     |
| [`ExportShrinkline`](#ANSYSAnalysisSettings.ExportShrinkline)                                                 | Gets or sets the specification for exporting the AM Shrinkline Result.                                                           |
| [`FarFieldRadiationSurface`](#ANSYSAnalysisSettings.FarFieldRadiationSurface)                                 | Gets or sets the FarFieldRadiationSurface.                                                                                       |
| [`FieldIntensityandFluxDensity`](#ANSYSAnalysisSettings.FieldIntensityandFluxDensity)                         | Gets or sets the FieldIntensityandFluxDensity.                                                                                   |
| [`Figures`](#ANSYSAnalysisSettings.Figures)                                                                   | Gets the list of associated figures.                                                                                             |
| [`FluxConvergence`](#ANSYSAnalysisSettings.FluxConvergence)                                                   | Gets or sets the FluxConvergence.                                                                                                |
| [`ForceConvergence`](#ANSYSAnalysisSettings.ForceConvergence)                                                 | Gets or sets the ForceConvergence.                                                                                               |
| [`ForceConvergenceMinimumReference`](#ANSYSAnalysisSettings.ForceConvergenceMinimumReference)                 | Gets or sets the ForceConvergenceMinimumReference.                                                                               |
| [`ForceConvergenceTolerance`](#ANSYSAnalysisSettings.ForceConvergenceTolerance)                               | Gets or sets the ForceConvergenceTolerance.                                                                                      |
| [`ForceConvergenceValue`](#ANSYSAnalysisSettings.ForceConvergenceValue)                                       | Gets or sets the ForceConvergenceValue.                                                                                          |
| [`FractureSolverControls`](#ANSYSAnalysisSettings.FractureSolverControls)                                     | Gets or sets the FractureSolverControls.                                                                                         |
| [`Frequency`](#ANSYSAnalysisSettings.Frequency)                                                               | Gets or sets the Frequency.                                                                                                      |
| [`FrequencySpacing`](#ANSYSAnalysisSettings.FrequencySpacing)                                                 | Gets or sets the FrequencySpacing.                                                                                               |
| [`FutureAnalysis`](#ANSYSAnalysisSettings.FutureAnalysis)                                                     | Gets or sets the FutureAnalysis.                                                                                                 |
| [`GeneralMiscellaneous`](#ANSYSAnalysisSettings.GeneralMiscellaneous)                                         | Gets or sets the GeneralMiscellaneous.                                                                                           |
| [`GeneralMiscellaneousOption`](#ANSYSAnalysisSettings.GeneralMiscellaneousOption)                             | Gets or sets the GeneralMiscellaneousOption.                                                                                     |
| [`GenerateMeshRestartPoints`](#ANSYSAnalysisSettings.GenerateMeshRestartPoints)                               | Gets or sets the GenerateMeshRestartPoints.                                                                                      |
| [`GenerateRestartPoints`](#ANSYSAnalysisSettings.GenerateRestartPoints)                                       | Gets or sets the GenerateRestartPoints.                                                                                          |
| [`GlobalSizeRatioQualityImprovement`](#ANSYSAnalysisSettings.GlobalSizeRatioQualityImprovement)               | Gets or sets the GlobalSizeRatioQualityImprovement.                                                                              |
| [`GlobalSizeRatioQualityRefinement`](#ANSYSAnalysisSettings.GlobalSizeRatioQualityRefinement)                 | Gets or sets the GlobalSizeRatioQualityRefinement.                                                                               |
| [`Graph`](#ANSYSAnalysisSettings.Graph)                                                                       | Graph property.                                                                                                                  |
| [`HarmonicIndexInterval`](#ANSYSAnalysisSettings.HarmonicIndexInterval)                                       | Gets or sets the HarmonicIndexInterval.                                                                                          |
| [`HarmonicIndexRange`](#ANSYSAnalysisSettings.HarmonicIndexRange)                                             | Gets or sets the HarmonicIndexRange.                                                                                             |
| [`HarmonicOrders`](#ANSYSAnalysisSettings.HarmonicOrders)                                                     | Gets or sets the HarmonicOrders.                                                                                                 |
| [`HeatConvergence`](#ANSYSAnalysisSettings.HeatConvergence)                                                   | Gets or sets the HeatConvergence.                                                                                                |
| [`HeatConvergenceMinimumReference`](#ANSYSAnalysisSettings.HeatConvergenceMinimumReference)                   | Gets or sets the HeatConvergenceMinimumReference.                                                                                |
| [`HeatConvergenceTolerance`](#ANSYSAnalysisSettings.HeatConvergenceTolerance)                                 | Gets or sets the HeatConvergenceTolerance.                                                                                       |
| [`HeatConvergenceValue`](#ANSYSAnalysisSettings.HeatConvergenceValue)                                         | Gets or sets the HeatConvergenceValue.                                                                                           |
| [`HeatGenerationRate`](#ANSYSAnalysisSettings.HeatGenerationRate)                                             | Gets or sets the HeatGenerationRate.                                                                                             |
| [`HemicubeResolution`](#ANSYSAnalysisSettings.HemicubeResolution)                                             | Gets or sets the HemicubeResolution.                                                                                             |
| [`IgnoreAcousticDamping`](#ANSYSAnalysisSettings.IgnoreAcousticDamping)                                       | Gets or sets the IgnoreAcousticDamping.                                                                                          |
| [`Images`](#ANSYSAnalysisSettings.Images)                                                                     | Gets the list of associated images.                                                                                              |
| [`IncludeNegativeLoadMultiplier`](#ANSYSAnalysisSettings.IncludeNegativeLoadMultiplier)                       | Gets or sets the IncludeNegativeLoadMultiplier.                                                                                  |
| [`IncludeResidualVector`](#ANSYSAnalysisSettings.IncludeResidualVector)                                       | Gets or sets the IncludeResidualVector.                                                                                          |
| [`InertiaRelief`](#ANSYSAnalysisSettings.InertiaRelief)                                                       | Gets or sets the InertiaRelief.                                                                                                  |
| [`InitialSubsteps`](#ANSYSAnalysisSettings.InitialSubsteps)                                                   | Gets or sets the InitialSubsteps.                                                                                                |
| [`InitialTimeStep`](#ANSYSAnalysisSettings.InitialTimeStep)                                                   | Gets or sets the InitialTimeStep.                                                                                                |
| [`InternalObject`](#ANSYSAnalysisSettings.InternalObject)                                                     | Gets the internal object. For advanced usage only.                                                                               |
| [`InverseOption`](#ANSYSAnalysisSettings.InverseOption)                                                       | Gets or sets the InverseOption.                                                                                                  |
| [`InverseOptionEndStep`](#ANSYSAnalysisSettings.InverseOptionEndStep)                                         | Gets or sets the InverseOptionEndStep.                                                                                           |
| [`JIntegral`](#ANSYSAnalysisSettings.JIntegral)                                                               | Gets or sets the JIntegral.                                                                                                      |
| [`KeepModalResults`](#ANSYSAnalysisSettings.KeepModalResults)                                                 | Gets or sets the KeepModalResults.                                                                                               |
| [`KeepPreStressLoadPattern`](#ANSYSAnalysisSettings.KeepPreStressLoadPattern)                                 | Gets or sets the KeepPreStressLoadPattern.                                                                                       |
| [`KrylovResidualTolerance`](#ANSYSAnalysisSettings.KrylovResidualTolerance)                                   | Gets or sets the KrylovResidualTolerance.                                                                                        |
| [`KrylovSubspaceDimension`](#ANSYSAnalysisSettings.KrylovSubspaceDimension)                                   | Gets or sets the KrylovSubspaceDimension.                                                                                        |
| [`KrylovSubspaceFrequency`](#ANSYSAnalysisSettings.KrylovSubspaceFrequency)                                   | Gets or sets the KrylovSubspaceFrequency.                                                                                        |
| [`LargeDeflection`](#ANSYSAnalysisSettings.LargeDeflection)                                                   | Gets or sets the LargeDeflection.                                                                                                |
| [`LayersToBuild`](#ANSYSAnalysisSettings.LayersToBuild)                                                       | Gets or sets the AM Layers to Build.                                                                                             |
| [`LimitSearchToRange`](#ANSYSAnalysisSettings.LimitSearchToRange)                                             | Gets or sets the LimitSearchToRange.                                                                                             |
| [`LineSearch`](#ANSYSAnalysisSettings.LineSearch)                                                             | Gets or sets the LineSearch.                                                                                                     |
| [`LoadStepValue`](#ANSYSAnalysisSettings.LoadStepValue)                                                       | Gets or sets the LoadStepValue.                                                                                                  |
| [`MassCoefficient`](#ANSYSAnalysisSettings.MassCoefficient)                                                   | Gets or sets the MassCoefficient.                                                                                                |
| [`MaterialForce`](#ANSYSAnalysisSettings.MaterialForce)                                                       | Gets or sets the MaterialForce.                                                                                                  |
| [`MaximumHarmonicIndex`](#ANSYSAnalysisSettings.MaximumHarmonicIndex)                                         | Gets or sets the MaximumHarmonicIndex.                                                                                           |
| [`MaximumIteration`](#ANSYSAnalysisSettings.MaximumIteration)                                                 | Gets or sets the MaximumIteration.                                                                                               |
| [`MaximumModesToFind`](#ANSYSAnalysisSettings.MaximumModesToFind)                                             | Gets or sets the MaximumModesToFind.                                                                                             |
| [`MaximumPointsToSavePerStep`](#ANSYSAnalysisSettings.MaximumPointsToSavePerStep)                             | Gets or sets the MaximumPointsToSavePerStep.                                                                                     |
| [`MaximumSubsteps`](#ANSYSAnalysisSettings.MaximumSubsteps)                                                   | Gets or sets the MaximumSubsteps.                                                                                                |
| [`MaximumTimeStep`](#ANSYSAnalysisSettings.MaximumTimeStep)                                                   | Gets or sets the MaximumTimeStep.                                                                                                |
| [`MeshLoadStepValue`](#ANSYSAnalysisSettings.MeshLoadStepValue)                                               | Gets or sets the MeshLoadStepValue.                                                                                              |
| [`MeshRetainFilesAfterFullSolve`](#ANSYSAnalysisSettings.MeshRetainFilesAfterFullSolve)                       | Gets or sets the MeshRetainFilesAfterFullSolve.                                                                                  |
| [`MeshSaveAtLoadStep`](#ANSYSAnalysisSettings.MeshSaveAtLoadStep)                                             | Gets or sets the MeshSaveAtLoadStep.                                                                                             |
| [`MeshSaveAtSubstep`](#ANSYSAnalysisSettings.MeshSaveAtSubstep)                                               | Gets or sets the MeshSaveAtSubstep.                                                                                              |
| [`MinimumElementSize`](#ANSYSAnalysisSettings.MinimumElementSize)                                             | Gets or sets the Minimum Element Size property for Geometry Based Adaptivity.                                                    |
| [`MinimumHarmonicIndex`](#ANSYSAnalysisSettings.MinimumHarmonicIndex)                                         | Gets or sets the MinimumHarmonicIndex.                                                                                           |
| [`MinimumSubsteps`](#ANSYSAnalysisSettings.MinimumSubsteps)                                                   | Gets or sets the MinimumSubsteps.                                                                                                |
| [`MinimumTimeStep`](#ANSYSAnalysisSettings.MinimumTimeStep)                                                   | Gets or sets the MinimumTimeStep.                                                                                                |
| [`ModalFrequencyRange`](#ANSYSAnalysisSettings.ModalFrequencyRange)                                           | Gets or sets the ModalFrequencyRange.                                                                                            |
| [`ModalNumberOfPoints`](#ANSYSAnalysisSettings.ModalNumberOfPoints)                                           | Gets or sets the ModalNumberOfPoints.                                                                                            |
| [`ModalRangeMaximum`](#ANSYSAnalysisSettings.ModalRangeMaximum)                                               | Gets or sets the ModalRangeMaximum.                                                                                              |
| [`ModalRangeMinimum`](#ANSYSAnalysisSettings.ModalRangeMinimum)                                               | Gets or sets the ModalRangeMinimum.                                                                                              |
| [`ModeReuse`](#ANSYSAnalysisSettings.ModeReuse)                                                               | Gets or sets the ModeReuse.                                                                                                      |
| [`ModeSelectionMethod`](#ANSYSAnalysisSettings.ModeSelectionMethod)                                           | Gets or sets the ModeSelectionMethod.                                                                                            |
| [`ModeSignificanceLevel`](#ANSYSAnalysisSettings.ModeSignificanceLevel)                                       | Gets or sets the ModeSignificanceLevel.                                                                                          |
| [`ModesCombinationType`](#ANSYSAnalysisSettings.ModesCombinationType)                                         | Gets or sets the ModesCombinationType.                                                                                           |
| [`MomentConvergence`](#ANSYSAnalysisSettings.MomentConvergence)                                               | Gets or sets the MomentConvergence.                                                                                              |
| [`MomentConvergenceMinimumReference`](#ANSYSAnalysisSettings.MomentConvergenceMinimumReference)               | Gets or sets the MomentConvergenceMinimumReference.                                                                              |
| [`MomentConvergenceTolerance`](#ANSYSAnalysisSettings.MomentConvergenceTolerance)                             | Gets or sets the MomentConvergenceTolerance.                                                                                     |
| [`MomentConvergenceValue`](#ANSYSAnalysisSettings.MomentConvergenceValue)                                     | Gets or sets the MomentConvergenceValue.                                                                                         |
| [`Multistep`](#ANSYSAnalysisSettings.Multistep)                                                               | Gets or sets the Multistep.                                                                                                      |
| [`MultistepType`](#ANSYSAnalysisSettings.MultistepType)                                                       | Gets or sets the MultistepType.                                                                                                  |
| [`NamedSelection`](#ANSYSAnalysisSettings.NamedSelection)                                                     | Gets or sets the objects of type NamedSelection to – Named Selection property in the Output Controls group of Analysis Settings. |
| [`NewtonRaphsonOption`](#ANSYSAnalysisSettings.NewtonRaphsonOption)                                           | Gets or sets the NewtonRaphsonOption.                                                                                            |
| [`NodalForces`](#ANSYSAnalysisSettings.NodalForces)                                                           | Gets or sets the NodalForces.                                                                                                    |
| [`NonLinearFormulation`](#ANSYSAnalysisSettings.NonLinearFormulation)                                         | Gets or sets the NonLinearFormulation.                                                                                           |
| [`NonLinearSolution`](#ANSYSAnalysisSettings.NonLinearSolution)                                               | Gets the NonLinearSolution.                                                                                                      |
| [`NonlinearData`](#ANSYSAnalysisSettings.NonlinearData)                                                       | Gets or sets the NonlinearData.                                                                                                  |
| [`NumLoadVectors`](#ANSYSAnalysisSettings.NumLoadVectors)                                                     | Gets or sets the NumLoadVectors.                                                                                                 |
| [`NumberOfModesToUse`](#ANSYSAnalysisSettings.NumberOfModesToUse)                                             | Gets or sets the NumberOfModesToUse.                                                                                             |
| [`NumberOfRPMs`](#ANSYSAnalysisSettings.NumberOfRPMs)                                                         | Gets or sets the NumberOfRPMs.                                                                                                   |
| [`NumberOfRestartPoints`](#ANSYSAnalysisSettings.NumberOfRestartPoints)                                       | Gets Number of Restart Points.                                                                                                   |
| [`NumberOfSculptedLayersQualityImprovement`](#ANSYSAnalysisSettings.NumberOfSculptedLayersQualityImprovement) | Gets or sets the NumberOfSculptedLayersQualityImprovement.                                                                       |
| [`NumberOfSculptedLayersRefinement`](#ANSYSAnalysisSettings.NumberOfSculptedLayersRefinement)                 | Gets or sets the NumberOfSculptedLayersRefinement.                                                                               |
| [`NumberOfSteps`](#ANSYSAnalysisSettings.NumberOfSteps)                                                       | Gets or sets the NumberOfSteps.                                                                                                  |
| [`NumberOfSubSteps`](#ANSYSAnalysisSettings.NumberOfSubSteps)                                                 | Gets or sets the NumberOfSubSteps.                                                                                               |
| [`NumberOfZones`](#ANSYSAnalysisSettings.NumberOfZones)                                                       | Gets or sets the NumberOfZones.                                                                                                  |
| [`NumericalDamping`](#ANSYSAnalysisSettings.NumericalDamping)                                                 | Gets or sets the NumericalDamping.                                                                                               |
| [`NumericalDampingValue`](#ANSYSAnalysisSettings.NumericalDampingValue)                                       | Gets or sets the NumericalDampingValue.                                                                                          |
| [`OnDemandExpansionOption`](#ANSYSAnalysisSettings.OnDemandExpansionOption)                                   | Gets or sets the OnDemandExpansionOption.                                                                                        |
| [`OutputSelection`](#ANSYSAnalysisSettings.OutputSelection)                                                   | Gets or sets the Output Selection property in the Output Controls group of Analysis Settings.                                    |
| [`OverRelaxation`](#ANSYSAnalysisSettings.OverRelaxation)                                                     | Gets or sets the OverRelaxation.                                                                                                 |
| [`ParticipationFactor`](#ANSYSAnalysisSettings.ParticipationFactor)                                           | Gets or sets the ParticipationFactor.                                                                                            |
| [`ProjectToGeometry`](#ANSYSAnalysisSettings.ProjectToGeometry)                                               | Gets or sets the ProjectToGeometry.                                                                                              |
| [`Properties`](#ANSYSAnalysisSettings.Properties)                                                             | Gets the list of properties for this object.                                                                                     |
| [`QuasiStaticSolution`](#ANSYSAnalysisSettings.QuasiStaticSolution)                                           | Gets or sets the QuasiStaticSolution.                                                                                            |
| [`RadiositySolver`](#ANSYSAnalysisSettings.RadiositySolver)                                                   | Gets or sets the RadiositySolver.                                                                                                |
| [`RangeMaximum`](#ANSYSAnalysisSettings.RangeMaximum)                                                         | Gets or sets the Range Maximum property in Options group of Analysis Settings in Harmonic Analysis.                              |
| [`RangeMinimum`](#ANSYSAnalysisSettings.RangeMinimum)                                                         | Gets or sets the Range Minimum property in Options group of Analysis Settings in Harmonic Analysis.                              |
| [`ReferenceTemperature`](#ANSYSAnalysisSettings.ReferenceTemperature)                                         | Gets or sets the AM Reference Temperature.                                                                                       |
| [`ReferenceTemperatureType`](#ANSYSAnalysisSettings.ReferenceTemperatureType)                                 | Gets or sets the AM Reference Temperature Type.                                                                                  |
| [`RefinementAlgorithm`](#ANSYSAnalysisSettings.RefinementAlgorithm)                                           | Gets or sets the RefinementAlgorithm.                                                                                            |
| [`ReformulationTolerance`](#ANSYSAnalysisSettings.ReformulationTolerance)                                     | Gets or sets the ReformulationTolerance.                                                                                         |
| [`RelaxationTemperature`](#ANSYSAnalysisSettings.RelaxationTemperature)                                       | Gets or sets the RelaxationTemperature.                                                                                          |
| [`RelaxationTemperatureType`](#ANSYSAnalysisSettings.RelaxationTemperatureType)                               | Gets or sets the AM Relaxation Temperature Type.                                                                                 |
| [`RemeshingGradient`](#ANSYSAnalysisSettings.RemeshingGradient)                                               | Gets or sets the RemeshingGradient.                                                                                              |
| [`RemeshingToleranceQualityImprovement`](#ANSYSAnalysisSettings.RemeshingToleranceQualityImprovement)         | Gets or sets the RemeshingToleranceQualityImprovement.                                                                           |
| [`RemeshingToleranceRefinement`](#ANSYSAnalysisSettings.RemeshingToleranceRefinement)                         | Gets or sets the RemeshingToleranceRefinement.                                                                                   |
| [`RemovalDirection`](#ANSYSAnalysisSettings.RemovalDirection)                                                 | Gets or sets the RemovalDirection.                                                                                               |
| [`RemovalStepSize`](#ANSYSAnalysisSettings.RemovalStepSize)                                                   | Gets or sets the RemovalStepSize.                                                                                                |
| [`RestartAtLoadStep`](#ANSYSAnalysisSettings.RestartAtLoadStep)                                               | Gets the RestartAtLoadStep.                                                                                                      |
| [`RestartAtSubstep`](#ANSYSAnalysisSettings.RestartAtSubstep)                                                 | Gets the RestartAtSubstep.                                                                                                       |
| [`RestartAtTime`](#ANSYSAnalysisSettings.RestartAtTime)                                                       | Gets the RestartAtTime.                                                                                                          |
| [`RestartType`](#ANSYSAnalysisSettings.RestartType)                                                           | Gets or sets the RestartType.                                                                                                    |
| [`ResultFileCompression`](#ANSYSAnalysisSettings.ResultFileCompression)                                       | Gets or sets the ResultFileCompression.                                                                                          |
| [`RetainFilesAfterFullSolve`](#ANSYSAnalysisSettings.RetainFilesAfterFullSolve)                               | Gets or sets the RetainFilesAfterFullSolve.                                                                                      |
| [`RetainModesymFileAfterSolve`](#ANSYSAnalysisSettings.RetainModesymFileAfterSolve)                           | Gets or sets the RetainModesymFileAfterSolve.                                                                                    |
| [`RotationConvergence`](#ANSYSAnalysisSettings.RotationConvergence)                                           | Gets or sets the RotationConvergence.                                                                                            |
| [`RotationConvergenceMinimumReference`](#ANSYSAnalysisSettings.RotationConvergenceMinimumReference)           | Gets or sets the RotationConvergenceMinimumReference.                                                                            |
| [`RotationConvergenceTolerance`](#ANSYSAnalysisSettings.RotationConvergenceTolerance)                         | Gets or sets the RotationConvergenceTolerance.                                                                                   |
| [`RpmCentralFrequency`](#ANSYSAnalysisSettings.RpmCentralFrequency)                                           | Gets or sets the RpmCentralFrequency.                                                                                            |
| [`RpmClusterNumber`](#ANSYSAnalysisSettings.RpmClusterNumber)                                                 | Gets or sets the RpmClusterNumber.                                                                                               |
| [`RpmFrequencySpacing`](#ANSYSAnalysisSettings.RpmFrequencySpacing)                                           | Gets or sets the RpmFrequencySpacing.                                                                                            |
| [`RpmRangeMaximum`](#ANSYSAnalysisSettings.RpmRangeMaximum)                                                   | Gets or sets the RpmRangeMaximum.                                                                                                |
| [`RpmRangeMinimum`](#ANSYSAnalysisSettings.RpmRangeMinimum)                                                   | Gets or sets the RpmRangeMinimum.                                                                                                |
| [`RpmSolutionIntervals`](#ANSYSAnalysisSettings.RpmSolutionIntervals)                                         | Gets or sets the RpmSolutionIntervals.                                                                                           |
| [`RpmValue`](#ANSYSAnalysisSettings.RpmValue)                                                                 | Gets or sets the RpmValue.                                                                                                       |
| [`SIFS`](#ANSYSAnalysisSettings.SIFS)                                                                         | Gets or sets the SIFS.                                                                                                           |
| [`SaveAtLoadStep`](#ANSYSAnalysisSettings.SaveAtLoadStep)                                                     | Gets or sets the SaveAtLoadStep.                                                                                                 |
| [`SaveAtSubstep`](#ANSYSAnalysisSettings.SaveAtSubstep)                                                       | Gets or sets the SaveAtSubstep.                                                                                                  |
| [`SaveMAPDLDB`](#ANSYSAnalysisSettings.SaveMAPDLDB)                                                           | Gets or sets the SaveMAPDLDB.                                                                                                    |
| [`SaveSpecifiedLoadStep`](#ANSYSAnalysisSettings.SaveSpecifiedLoadStep)                                       | Gets or sets the SaveSpecifiedLoadStep.                                                                                          |
| [`ScatteredFieldFormulation`](#ANSYSAnalysisSettings.ScatteredFieldFormulation)                               | Gets or sets the ScatteredFieldFormulation.                                                                                      |
| [`ScatteringOutputType`](#ANSYSAnalysisSettings.ScatteringOutputType)                                         | Gets or sets the ScatteringOutputType.                                                                                           |
| [`ScratchSolverFilesDirectory`](#ANSYSAnalysisSettings.ScratchSolverFilesDirectory)                           | Gets the ScratchSolverFilesDirectory.                                                                                            |
| [`SearchRangeMaximum`](#ANSYSAnalysisSettings.SearchRangeMaximum)                                             | Gets or sets the Range Maximum property in Options group of Analysis Settings in Modal Analysis.                                 |
| [`SearchRangeMinimum`](#ANSYSAnalysisSettings.SearchRangeMinimum)                                             | Gets or sets the Range Minimum property in Options group of Analysis Settings in Modal Analysis.                                 |
| [`SignificanceThreshold`](#ANSYSAnalysisSettings.SignificanceThreshold)                                       | Gets or sets the SignificanceThreshold.                                                                                          |
| [`SolutionIntervals`](#ANSYSAnalysisSettings.SolutionIntervals)                                               | Gets or sets the SolutionIntervals.                                                                                              |
| [`SolutionMethod`](#ANSYSAnalysisSettings.SolutionMethod)                                                     | Gets or sets the SolutionMethod.                                                                                                 |
| [`SolverFilesDirectory`](#ANSYSAnalysisSettings.SolverFilesDirectory)                                         | Gets the SolverFilesDirectory.                                                                                                   |
| [`SolverPivotChecking`](#ANSYSAnalysisSettings.SolverPivotChecking)                                           | Gets or sets the SolverPivotChecking.                                                                                            |
| [`SolverTolerance`](#ANSYSAnalysisSettings.SolverTolerance)                                                   | Gets or sets the SolverTolerance.                                                                                                |
| [`SolverType`](#ANSYSAnalysisSettings.SolverType)                                                             | Gets or sets the SolverType.                                                                                                     |
| [`SolverUnitSystem`](#ANSYSAnalysisSettings.SolverUnitSystem)                                                 | Gets or sets the SolverUnitSystem.                                                                                               |
| [`SolverUnits`](#ANSYSAnalysisSettings.SolverUnits)                                                           | Gets or sets the SolverUnits.                                                                                                    |
| [`SpectrumType`](#ANSYSAnalysisSettings.SpectrumType)                                                         | Gets or sets the SpectrumType.                                                                                                   |
| [`SpinSoftening`](#ANSYSAnalysisSettings.SpinSoftening)                                                       | Gets or sets the SpinSoftening.                                                                                                  |
| [`SpringStiffness`](#ANSYSAnalysisSettings.SpringStiffness)                                                   | Gets or sets the SpringStiffness.                                                                                                |
| [`SpringStiffnessFactor`](#ANSYSAnalysisSettings.SpringStiffnessFactor)                                       | Gets or sets the SpringStiffnessFactor.                                                                                          |
| [`SpringStiffnessValue`](#ANSYSAnalysisSettings.SpringStiffnessValue)                                         | Gets or sets the SpringStiffnessValue.                                                                                           |
| [`Stabilization`](#ANSYSAnalysisSettings.Stabilization)                                                       | Gets or sets the Stabilization.                                                                                                  |
| [`StabilizationActivationForFirstSubstep`](#ANSYSAnalysisSettings.StabilizationActivationForFirstSubstep)     | Gets or sets the StabilizationActivationForFirstSubstep.                                                                         |
| [`StabilizationDampingFactor`](#ANSYSAnalysisSettings.StabilizationDampingFactor)                             | Gets or sets the StabilizationDampingFactor.                                                                                     |
| [`StabilizationEnergyDissipationRatio`](#ANSYSAnalysisSettings.StabilizationEnergyDissipationRatio)           | Gets or sets the StabilizationEnergyDissipationRatio.                                                                            |
| [`StabilizationForceLimit`](#ANSYSAnalysisSettings.StabilizationForceLimit)                                   | Gets or sets the StabilizationForceLimit.                                                                                        |
| [`StabilizationMethod`](#ANSYSAnalysisSettings.StabilizationMethod)                                           | Gets or sets the StabilizationMethod.                                                                                            |
| [`StepEndTime`](#ANSYSAnalysisSettings.StepEndTime)                                                           | Gets or sets the StepEndTime.                                                                                                    |
| [`StepName`](#ANSYSAnalysisSettings.StepName)                                                                 | Gets or sets the Step Name.                                                                                                      |
| [`StiffnessCoefficient`](#ANSYSAnalysisSettings.StiffnessCoefficient)                                         | Gets or sets the StiffnessCoefficient.                                                                                           |
| [`StiffnessCoefficientDefineBy`](#ANSYSAnalysisSettings.StiffnessCoefficientDefineBy)                         | Gets or sets the StiffnessCoefficientDefineBy.                                                                                   |
| [`StoreComplexSolution`](#ANSYSAnalysisSettings.StoreComplexSolution)                                         | Gets or sets the StoreComplexSolution.                                                                                           |
| [`StoreModalResults`](#ANSYSAnalysisSettings.StoreModalResults)                                               | Gets or sets the StoreModalResults.                                                                                              |
| [`StoreResulsAtValue`](#ANSYSAnalysisSettings.StoreResulsAtValue)                                             | Gets or sets the StoreResulsAtValue.                                                                                             |
| [`StoreResultsAt`](#ANSYSAnalysisSettings.StoreResultsAt)                                                     | Gets or sets the StoreResultsAt.                                                                                                 |
| [`StoreResultsAtAllFrequencies`](#ANSYSAnalysisSettings.StoreResultsAtAllFrequencies)                         | Gets or sets the StoreResultsAtAllFrequencies.                                                                                   |
| [`Strain`](#ANSYSAnalysisSettings.Strain)                                                                     | Gets or sets the Strain.                                                                                                         |
| [`Stress`](#ANSYSAnalysisSettings.Stress)                                                                     | Gets or sets the Stress.                                                                                                         |
| [`StructuralDampingCoefficient`](#ANSYSAnalysisSettings.StructuralDampingCoefficient)                         | Gets or sets the StructuralDampingCoefficient.                                                                                   |
| [`StructuralOnly`](#ANSYSAnalysisSettings.StructuralOnly)                                                     | Gets or sets the StructuralOnly.                                                                                                 |
| [`TStress`](#ANSYSAnalysisSettings.TStress)                                                                   | Gets or sets the TStress.                                                                                                        |
| [`TemperatureConvergence`](#ANSYSAnalysisSettings.TemperatureConvergence)                                     | Gets or sets the TemperatureConvergence.                                                                                         |
| [`TemperatureConvergenceInputValue`](#ANSYSAnalysisSettings.TemperatureConvergenceInputValue)                 | Gets or sets the TemperatureConvergenceInputValue.                                                                               |
| [`TemperatureConvergenceMinimumReference`](#ANSYSAnalysisSettings.TemperatureConvergenceMinimumReference)     | Gets or sets the TemperatureConvergenceMinimumReference.                                                                         |
| [`TemperatureConvergenceTolerance`](#ANSYSAnalysisSettings.TemperatureConvergenceTolerance)                   | Gets or sets the TemperatureConvergenceTolerance.                                                                                |
| [`TemperatureConvergenceValue`](#ANSYSAnalysisSettings.TemperatureConvergenceValue)                           | Gets or sets the TemperatureConvergenceValue.                                                                                    |
| [`ThermalOnly`](#ANSYSAnalysisSettings.ThermalOnly)                                                           | Gets or sets the ThermalOnly.                                                                                                    |
| [`TimeIntegration`](#ANSYSAnalysisSettings.TimeIntegration)                                                   | Gets or sets the TimeIntegration.                                                                                                |
| [`TimeStep`](#ANSYSAnalysisSettings.TimeStep)                                                                 | Gets or sets the TimeStep.                                                                                                       |
| [`TransientApplication`](#ANSYSAnalysisSettings.TransientApplication)                                         | Gets or sets the TransientApplication.                                                                                           |
| [`TransientApplicationUserDefined`](#ANSYSAnalysisSettings.TransientApplicationUserDefined)                   | Gets or sets the TransientApplicationUserDefined.                                                                                |
| [`UpdateViewFactor`](#ANSYSAnalysisSettings.UpdateViewFactor)                                                 | Gets or sets the specification for updating the view factor.                                                                     |
| [`UserDefinedFrequencies`](#ANSYSAnalysisSettings.UserDefinedFrequencies)                                     | Gets or sets the UserDefinedFrequencies.                                                                                         |
| [`UserDefinedFrequencySteps`](#ANSYSAnalysisSettings.UserDefinedFrequencySteps)                               | Gets or sets the UserDefinedFrequencySteps.                                                                                      |
| [`ViewFactorMethod`](#ANSYSAnalysisSettings.ViewFactorMethod)                                                 | Gets or sets the ViewFactorMethod.                                                                                               |
| [`VisibleProperties`](#ANSYSAnalysisSettings.VisibleProperties)                                               | Gets the list of properties that are visible for this object.                                                                    |
| [`VoltageConvergence`](#ANSYSAnalysisSettings.VoltageConvergence)                                             | Gets or sets the VoltageConvergence.                                                                                             |
| [`VoltageConvergenceMinimumReference`](#ANSYSAnalysisSettings.VoltageConvergenceMinimumReference)             | Gets or sets the VoltageConvergenceMinimumReference.                                                                             |
| [`VoltageConvergenceTolerance`](#ANSYSAnalysisSettings.VoltageConvergenceTolerance)                           | Gets or sets the VoltageConvergenceTolerance.                                                                                    |
| [`VoltageConvergenceValue`](#ANSYSAnalysisSettings.VoltageConvergenceValue)                                   | Gets or sets the VoltageConvergenceValue.                                                                                        |
| [`WeakSprings`](#ANSYSAnalysisSettings.WeakSprings)                                                           | Gets or sets the WeakSprings.                                                                                                    |

<a id="property-detail"></a>

## Property detail

<a id="ANSYSAnalysisSettings.AMCooldownNumberOfSubsteps"></a>

### *property* ANSYSAnalysisSettings.AMCooldownNumberOfSubsteps *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Cooldown Number of Substeps.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.AMPSConvergence"></a>

### *property* ANSYSAnalysisSettings.AMPSConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AMPSConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.AMStepType"></a>

### *property* ANSYSAnalysisSettings.AMStepType *: [Ansys.Mechanical.DataModel.Enums.AMProcessStepType](../../../../Mechanical/DataModel/Enums/AMProcessStepType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AMProcessStepType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Process Step Type.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.AMSubstepsBetweenHeating"></a>

### *property* ANSYSAnalysisSettings.AMSubstepsBetweenHeating *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Substeps Between Heating.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.AMSubstepsToApplyHeats"></a>

### *property* ANSYSAnalysisSettings.AMSubstepsToApplyHeats *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Substeps to Apply Heat.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.AggressiveRemeshing"></a>

### *property* ANSYSAnalysisSettings.AggressiveRemeshing *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AggressiveRemeshing.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.AutomaticTimeStepping"></a>

### *property* ANSYSAnalysisSettings.AutomaticTimeStepping *: [Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping](../../../../Mechanical/DataModel/Enums/AutomaticTimeStepping.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticTimeStepping.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.AxisymmetryDivisions"></a>

### *property* ANSYSAnalysisSettings.AxisymmetryDivisions *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AxisymmetryDivisions.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.BackStress"></a>

### *property* ANSYSAnalysisSettings.BackStress *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BackStress.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.BaseRemovalType"></a>

### *property* ANSYSAnalysisSettings.BaseRemovalType *: [Ansys.Mechanical.DataModel.Enums.AMBaseRemovalType](../../../../Mechanical/DataModel/Enums/AMBaseRemovalType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AMBaseRemovalType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BaseRemovalType.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.BoundaryAngle"></a>

### *property* ANSYSAnalysisSettings.BoundaryAngle *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BoundaryAngle.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CSGConvergence"></a>

### *property* ANSYSAnalysisSettings.CSGConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CSGConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CStarIntegral"></a>

### *property* ANSYSAnalysisSettings.CStarIntegral *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CStarIntegral.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CacheResultsInMemory"></a>

### *property* ANSYSAnalysisSettings.CacheResultsInMemory *: [Ansys.Mechanical.DataModel.Enums.CacheResultsInMemory](../../../../Mechanical/DataModel/Enums/CacheResultsInMemory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CacheResultsInMemory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CacheResultsInMemory.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CalculateAcceleration"></a>

### *property* ANSYSAnalysisSettings.CalculateAcceleration *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateAcceleration.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CalculateEnergy"></a>

### *property* ANSYSAnalysisSettings.CalculateEnergy *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateEnergy.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CalculateEulerAngles"></a>

### *property* ANSYSAnalysisSettings.CalculateEulerAngles *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateEulerAngles.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CalculateReactions"></a>

### *property* ANSYSAnalysisSettings.CalculateReactions *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateReactions.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CalculateThermalFlux"></a>

### *property* ANSYSAnalysisSettings.CalculateThermalFlux *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateThermalFlux.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CalculateVelocity"></a>

### *property* ANSYSAnalysisSettings.CalculateVelocity *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateVelocity.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CalculateVelocityAndAcceleration"></a>

### *property* ANSYSAnalysisSettings.CalculateVelocityAndAcceleration *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateVelocityAndAcceleration.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CalculateVolumeEnergy"></a>

### *property* ANSYSAnalysisSettings.CalculateVolumeEnergy *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateVolumeEnergy.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CampbellDiagram"></a>

### *property* ANSYSAnalysisSettings.CampbellDiagram *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CampbellDiagram.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CarryOverTimeStep"></a>

### *property* ANSYSAnalysisSettings.CarryOverTimeStep *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CarryOverTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CentralFrequency"></a>

### *property* ANSYSAnalysisSettings.CentralFrequency *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CentralFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ChargeConvergence"></a>

### *property* ANSYSAnalysisSettings.ChargeConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChargeConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ChargeConvergenceMinimumReference"></a>

### *property* ANSYSAnalysisSettings.ChargeConvergenceMinimumReference *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChargeConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ChargeConvergenceTolerance"></a>

### *property* ANSYSAnalysisSettings.ChargeConvergenceTolerance *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChargeConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ChargeConvergenceValue"></a>

### *property* ANSYSAnalysisSettings.ChargeConvergenceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChargeConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Children"></a>

### *property* ANSYSAnalysisSettings.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ClusterNumber"></a>

### *property* ANSYSAnalysisSettings.ClusterNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ClusterNumber.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ClusterResults"></a>

### *property* ANSYSAnalysisSettings.ClusterResults *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ClusterResults.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CombineRestartFiles"></a>

### *property* ANSYSAnalysisSettings.CombineRestartFiles *: [Ansys.Mechanical.DataModel.Enums.CombineRestartFilesType](../../../../Mechanical/DataModel/Enums/CombineRestartFilesType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CombineRestartFilesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CombineRestartFiles.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Comments"></a>

### *property* ANSYSAnalysisSettings.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ConstantDamping"></a>

### *property* ANSYSAnalysisSettings.ConstantDamping *: [Ansys.Mechanical.DataModel.Enums.ConstantDampingType](../../../../Mechanical/DataModel/Enums/ConstantDampingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConstantDampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstantDamping.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ConstantDampingRatio"></a>

### *property* ANSYSAnalysisSettings.ConstantDampingRatio *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstantDampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ContactData"></a>

### *property* ANSYSAnalysisSettings.ContactData *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactData.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ContactMiscellaneous"></a>

### *property* ANSYSAnalysisSettings.ContactMiscellaneous *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactMiscellaneous.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ContactSplit"></a>

### *property* ANSYSAnalysisSettings.ContactSplit *: [Ansys.Mechanical.DataModel.Enums.ContactSplitType](../../../../Mechanical/DataModel/Enums/ContactSplitType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactSplitType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSplit.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ContactSplitMaxNum"></a>

### *property* ANSYSAnalysisSettings.ContactSplitMaxNum *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSplitMaxNum.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ContactSummary"></a>

### *property* ANSYSAnalysisSettings.ContactSummary *: [Ansys.Mechanical.DataModel.Enums.ContactSummaryType](../../../../Mechanical/DataModel/Enums/ContactSummaryType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ContactSummaryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSummary.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CooldownTime"></a>

### *property* ANSYSAnalysisSettings.CooldownTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Cooldown Time.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CooldownTimeType"></a>

### *property* ANSYSAnalysisSettings.CooldownTimeType *: [Ansys.Mechanical.DataModel.Enums.AMCooldownTimeType](../../../../Mechanical/DataModel/Enums/AMCooldownTimeType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AMCooldownTimeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Cooldown Time Type.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CoriolisEffectApplied"></a>

### *property* ANSYSAnalysisSettings.CoriolisEffectApplied *: [Ansys.Mechanical.DataModel.Enums.CoriolisEffectType](../../../../Mechanical/DataModel/Enums/CoriolisEffectType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CoriolisEffectType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoriolisEffectApplied.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CreepEffects"></a>

### *property* ANSYSAnalysisSettings.CreepEffects *: [Ansys.Mechanical.DataModel.Enums.Creep](../../../../Mechanical/DataModel/Enums/Creep.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.Creep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CreepEffects.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CreepLimitRatio"></a>

### *property* ANSYSAnalysisSettings.CreepLimitRatio *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CreepLimitRatio.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CurrentConvergence"></a>

### *property* ANSYSAnalysisSettings.CurrentConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CurrentConvergenceMinimumReference"></a>

### *property* ANSYSAnalysisSettings.CurrentConvergenceMinimumReference *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CurrentConvergenceTolerance"></a>

### *property* ANSYSAnalysisSettings.CurrentConvergenceTolerance *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CurrentConvergenceValue"></a>

### *property* ANSYSAnalysisSettings.CurrentConvergenceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CurrentRestartPoint"></a>

### *property* ANSYSAnalysisSettings.CurrentRestartPoint *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Current Restart Point.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CurrentStepNumber"></a>

### *property* ANSYSAnalysisSettings.CurrentStepNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentStepNumber.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CurrentStepNumberHarmonic"></a>

### *property* ANSYSAnalysisSettings.CurrentStepNumberHarmonic *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentStepNumberHarmonic.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CyclicModeSuperposition"></a>

### *property* ANSYSAnalysisSettings.CyclicModeSuperposition *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicModeSuperposition.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Damped"></a>

### *property* ANSYSAnalysisSettings.Damped *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Damped.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.DampingDefineBy"></a>

### *property* ANSYSAnalysisSettings.DampingDefineBy *: [Ansys.Mechanical.DataModel.Enums.DampingDefineBy](../../../../Mechanical/DataModel/Enums/DampingDefineBy.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DampingDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DampingDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.DampingRatio"></a>

### *property* ANSYSAnalysisSettings.DampingRatio *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DampingRatio.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.DataModelObjectCategory"></a>

### *property* ANSYSAnalysisSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.DefineBy"></a>

### *property* ANSYSAnalysisSettings.DefineBy *: [Ansys.Mechanical.DataModel.Enums.TimeStepDefineByType](../../../../Mechanical/DataModel/Enums/TimeStepDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TimeStepDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.DeleteUnneededFiles"></a>

### *property* ANSYSAnalysisSettings.DeleteUnneededFiles *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DeleteUnneededFiles.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.DisplacementConvergence"></a>

### *property* ANSYSAnalysisSettings.DisplacementConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplacementConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.DisplacementConvergenceMinimumReference"></a>

### *property* ANSYSAnalysisSettings.DisplacementConvergenceMinimumReference *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplacementConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.DisplacementConvergenceTolerance"></a>

### *property* ANSYSAnalysisSettings.DisplacementConvergenceTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplacementConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.DisplacementConvergenceValue"></a>

### *property* ANSYSAnalysisSettings.DisplacementConvergenceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplacementConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EdgeSplittingAngle"></a>

### *property* ANSYSAnalysisSettings.EdgeSplittingAngle *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EdgeSplittingAngle.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ElectricOnly"></a>

### *property* ANSYSAnalysisSettings.ElectricOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectricOnly.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ElectromagneticNodalForces"></a>

### *property* ANSYSAnalysisSettings.ElectromagneticNodalForces *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElectromagneticNodalForces.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ElementCurrentDensity"></a>

### *property* ANSYSAnalysisSettings.ElementCurrentDensity *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementCurrentDensity.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EmagAMPSConvergenceMinimumReference"></a>

### *property* ANSYSAnalysisSettings.EmagAMPSConvergenceMinimumReference *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EmagAMPSConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EmagAMPSConvergenceTolerance"></a>

### *property* ANSYSAnalysisSettings.EmagAMPSConvergenceTolerance *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EmagAMPSConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EmagAMPSConvergenceValue"></a>

### *property* ANSYSAnalysisSettings.EmagAMPSConvergenceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EmagAMPSConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EmagCSGConvergenceMinimumReference"></a>

### *property* ANSYSAnalysisSettings.EmagCSGConvergenceMinimumReference *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EmagCSGConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EmagCSGConvergenceTolerance"></a>

### *property* ANSYSAnalysisSettings.EmagCSGConvergenceTolerance *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EmagCSGConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EmagCSGConvergenceValue"></a>

### *property* ANSYSAnalysisSettings.EmagCSGConvergenceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EmagCSGConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EnergyConvergence"></a>

### *property* ANSYSAnalysisSettings.EnergyConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EnergyConvergenceMinimumReference"></a>

### *property* ANSYSAnalysisSettings.EnergyConvergenceMinimumReference *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EnergyConvergenceTolerance"></a>

### *property* ANSYSAnalysisSettings.EnergyConvergenceTolerance *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EnergyConvergenceValue"></a>

### *property* ANSYSAnalysisSettings.EnergyConvergenceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EngineOrderofExcitation"></a>

### *property* ANSYSAnalysisSettings.EngineOrderofExcitation *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EngineOrderofExcitation.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EqvDampingRatioFromModal"></a>

### *property* ANSYSAnalysisSettings.EqvDampingRatioFromModal *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EqvDampingRatioFromModal.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ExcludeInsignificantModes"></a>

### *property* ANSYSAnalysisSettings.ExcludeInsignificantModes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExcludeInsignificantModes.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ExpandResultsFrom"></a>

### *property* ANSYSAnalysisSettings.ExpandResultsFrom *: [Ansys.Mechanical.DataModel.Enums.ExpandResultFrom](../../../../Mechanical/DataModel/Enums/ExpandResultFrom.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ExpandResultFrom) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExpandResultsFrom.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Expansion"></a>

### *property* ANSYSAnalysisSettings.Expansion *: [Ansys.Mechanical.DataModel.Enums.ExpandResultsSubType](../../../../Mechanical/DataModel/Enums/ExpandResultsSubType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ExpandResultsSubType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Expansion.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ExportHighStrains"></a>

### *property* ANSYSAnalysisSettings.ExportHighStrains *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportHighStrains.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ExportLayerEndTemperature"></a>

### *property* ANSYSAnalysisSettings.ExportLayerEndTemperature *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportLayerEndTemperature.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ExportRecoaterInterference"></a>

### *property* ANSYSAnalysisSettings.ExportRecoaterInterference *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportRecoaterInterference.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ExportShrinkline"></a>

### *property* ANSYSAnalysisSettings.ExportShrinkline *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the specification for exporting the AM Shrinkline Result.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.FarFieldRadiationSurface"></a>

### *property* ANSYSAnalysisSettings.FarFieldRadiationSurface *: [Ansys.Mechanical.DataModel.Enums.FarFieldRadiationSurfaceType](../../../../Mechanical/DataModel/Enums/FarFieldRadiationSurfaceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.FarFieldRadiationSurfaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FarFieldRadiationSurface.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.FieldIntensityandFluxDensity"></a>

### *property* ANSYSAnalysisSettings.FieldIntensityandFluxDensity *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FieldIntensityandFluxDensity.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Figures"></a>

### *property* ANSYSAnalysisSettings.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.FluxConvergence"></a>

### *property* ANSYSAnalysisSettings.FluxConvergence *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FluxConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ForceConvergence"></a>

### *property* ANSYSAnalysisSettings.ForceConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ForceConvergenceMinimumReference"></a>

### *property* ANSYSAnalysisSettings.ForceConvergenceMinimumReference *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ForceConvergenceTolerance"></a>

### *property* ANSYSAnalysisSettings.ForceConvergenceTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ForceConvergenceValue"></a>

### *property* ANSYSAnalysisSettings.ForceConvergenceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.FractureSolverControls"></a>

### *property* ANSYSAnalysisSettings.FractureSolverControls *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FractureSolverControls.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Frequency"></a>

### *property* ANSYSAnalysisSettings.Frequency *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Frequency.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.FrequencySpacing"></a>

### *property* ANSYSAnalysisSettings.FrequencySpacing *: [Ansys.Mechanical.DataModel.Enums.FrequencySpacingType](../../../../Mechanical/DataModel/Enums/FrequencySpacingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.FrequencySpacingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencySpacing.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.FutureAnalysis"></a>

### *property* ANSYSAnalysisSettings.FutureAnalysis *: [Ansys.Mechanical.DataModel.Enums.FutureIntentType](../../../../Mechanical/DataModel/Enums/FutureIntentType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.FutureIntentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FutureAnalysis.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GeneralMiscellaneous"></a>

### *property* ANSYSAnalysisSettings.GeneralMiscellaneous *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneralMiscellaneous.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GeneralMiscellaneousOption"></a>

### *property* ANSYSAnalysisSettings.GeneralMiscellaneousOption *: [Ansys.Mechanical.DataModel.Enums.GeneralMiscellaneousOptionType](../../../../Mechanical/DataModel/Enums/GeneralMiscellaneousOptionType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.GeneralMiscellaneousOptionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneralMiscellaneousOption.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GenerateMeshRestartPoints"></a>

### *property* ANSYSAnalysisSettings.GenerateMeshRestartPoints *: [Ansys.Mechanical.DataModel.Enums.MeshRestartControlsType](../../../../Mechanical/DataModel/Enums/MeshRestartControlsType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshRestartControlsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateMeshRestartPoints.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GenerateRestartPoints"></a>

### *property* ANSYSAnalysisSettings.GenerateRestartPoints *: [Ansys.Mechanical.DataModel.Enums.RestartControlsType](../../../../Mechanical/DataModel/Enums/RestartControlsType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RestartControlsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateRestartPoints.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GlobalSizeRatioQualityImprovement"></a>

### *property* ANSYSAnalysisSettings.GlobalSizeRatioQualityImprovement *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalSizeRatioQualityImprovement.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GlobalSizeRatioQualityRefinement"></a>

### *property* ANSYSAnalysisSettings.GlobalSizeRatioQualityRefinement *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GlobalSizeRatioQualityRefinement.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Graph"></a>

### *property* ANSYSAnalysisSettings.Graph *: [Ansys.Mechanical.Graphics.AnalysisSettingsGraph](../../../../Mechanical/Graphics/AnalysisSettingsGraph.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.AnalysisSettingsGraph) | [None](https://docs.python.org/3/library/constants.html#None)*

Graph property.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.HarmonicIndexInterval"></a>

### *property* ANSYSAnalysisSettings.HarmonicIndexInterval *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndexInterval.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.HarmonicIndexRange"></a>

### *property* ANSYSAnalysisSettings.HarmonicIndexRange *: [Ansys.Mechanical.DataModel.Enums.CyclicHarmonicIndex](../../../../Mechanical/DataModel/Enums/CyclicHarmonicIndex.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CyclicHarmonicIndex) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndexRange.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.HarmonicOrders"></a>

### *property* ANSYSAnalysisSettings.HarmonicOrders *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicOrders.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.HeatConvergence"></a>

### *property* ANSYSAnalysisSettings.HeatConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HeatConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.HeatConvergenceMinimumReference"></a>

### *property* ANSYSAnalysisSettings.HeatConvergenceMinimumReference *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HeatConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.HeatConvergenceTolerance"></a>

### *property* ANSYSAnalysisSettings.HeatConvergenceTolerance *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HeatConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.HeatConvergenceValue"></a>

### *property* ANSYSAnalysisSettings.HeatConvergenceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HeatConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.HeatGenerationRate"></a>

### *property* ANSYSAnalysisSettings.HeatGenerationRate *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HeatGenerationRate.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.HemicubeResolution"></a>

### *property* ANSYSAnalysisSettings.HemicubeResolution *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HemicubeResolution.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.IgnoreAcousticDamping"></a>

### *property* ANSYSAnalysisSettings.IgnoreAcousticDamping *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IgnoreAcousticDamping.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Images"></a>

### *property* ANSYSAnalysisSettings.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.IncludeNegativeLoadMultiplier"></a>

### *property* ANSYSAnalysisSettings.IncludeNegativeLoadMultiplier *: [Ansys.Mechanical.DataModel.Enums.SolverControlsIncludeNegativeLoadMultiplier](../../../../Mechanical/DataModel/Enums/SolverControlsIncludeNegativeLoadMultiplier.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolverControlsIncludeNegativeLoadMultiplier) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IncludeNegativeLoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.IncludeResidualVector"></a>

### *property* ANSYSAnalysisSettings.IncludeResidualVector *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IncludeResidualVector.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.InertiaRelief"></a>

### *property* ANSYSAnalysisSettings.InertiaRelief *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InertiaRelief.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.InitialSubsteps"></a>

### *property* ANSYSAnalysisSettings.InitialSubsteps *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialSubsteps.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.InitialTimeStep"></a>

### *property* ANSYSAnalysisSettings.InitialTimeStep *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.InternalObject"></a>

### *property* ANSYSAnalysisSettings.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAnalysisSettings | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.InverseOption"></a>

### *property* ANSYSAnalysisSettings.InverseOption *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InverseOption.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.InverseOptionEndStep"></a>

### *property* ANSYSAnalysisSettings.InverseOptionEndStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InverseOptionEndStep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.JIntegral"></a>

### *property* ANSYSAnalysisSettings.JIntegral *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the JIntegral.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.KeepModalResults"></a>

### *property* ANSYSAnalysisSettings.KeepModalResults *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KeepModalResults.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.KeepPreStressLoadPattern"></a>

### *property* ANSYSAnalysisSettings.KeepPreStressLoadPattern *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KeepPreStressLoadPattern.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.KrylovResidualTolerance"></a>

### *property* ANSYSAnalysisSettings.KrylovResidualTolerance *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KrylovResidualTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.KrylovSubspaceDimension"></a>

### *property* ANSYSAnalysisSettings.KrylovSubspaceDimension *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KrylovSubspaceDimension.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.KrylovSubspaceFrequency"></a>

### *property* ANSYSAnalysisSettings.KrylovSubspaceFrequency *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KrylovSubspaceFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.LargeDeflection"></a>

### *property* ANSYSAnalysisSettings.LargeDeflection *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LargeDeflection.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.LayersToBuild"></a>

### *property* ANSYSAnalysisSettings.LayersToBuild *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Layers to Build.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.LimitSearchToRange"></a>

### *property* ANSYSAnalysisSettings.LimitSearchToRange *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LimitSearchToRange.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.LineSearch"></a>

### *property* ANSYSAnalysisSettings.LineSearch *: [Ansys.Mechanical.DataModel.Enums.LineSearchType](../../../../Mechanical/DataModel/Enums/LineSearchType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LineSearchType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LineSearch.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.LoadStepValue"></a>

### *property* ANSYSAnalysisSettings.LoadStepValue *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadStepValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MassCoefficient"></a>

### *property* ANSYSAnalysisSettings.MassCoefficient *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MassCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MaterialForce"></a>

### *property* ANSYSAnalysisSettings.MaterialForce *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialForce.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MaximumHarmonicIndex"></a>

### *property* ANSYSAnalysisSettings.MaximumHarmonicIndex *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumHarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MaximumIteration"></a>

### *property* ANSYSAnalysisSettings.MaximumIteration *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumIteration.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MaximumModesToFind"></a>

### *property* ANSYSAnalysisSettings.MaximumModesToFind *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumModesToFind.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MaximumPointsToSavePerStep"></a>

### *property* ANSYSAnalysisSettings.MaximumPointsToSavePerStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumPointsToSavePerStep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MaximumSubsteps"></a>

### *property* ANSYSAnalysisSettings.MaximumSubsteps *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumSubsteps.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MaximumTimeStep"></a>

### *property* ANSYSAnalysisSettings.MaximumTimeStep *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MeshLoadStepValue"></a>

### *property* ANSYSAnalysisSettings.MeshLoadStepValue *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshLoadStepValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MeshRetainFilesAfterFullSolve"></a>

### *property* ANSYSAnalysisSettings.MeshRetainFilesAfterFullSolve *: [Ansys.Mechanical.DataModel.Enums.MeshRestartRetainFilesType](../../../../Mechanical/DataModel/Enums/MeshRestartRetainFilesType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshRestartRetainFilesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshRetainFilesAfterFullSolve.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MeshSaveAtLoadStep"></a>

### *property* ANSYSAnalysisSettings.MeshSaveAtLoadStep *: [Ansys.Mechanical.DataModel.Enums.MeshRestartSaveAtLoadStep](../../../../Mechanical/DataModel/Enums/MeshRestartSaveAtLoadStep.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshRestartSaveAtLoadStep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshSaveAtLoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MeshSaveAtSubstep"></a>

### *property* ANSYSAnalysisSettings.MeshSaveAtSubstep *: [Ansys.Mechanical.DataModel.Enums.MeshRestartSaveAtSubstep](../../../../Mechanical/DataModel/Enums/MeshRestartSaveAtSubstep.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshRestartSaveAtSubstep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshSaveAtSubstep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MinimumElementSize"></a>

### *property* ANSYSAnalysisSettings.MinimumElementSize *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Minimum Element Size property for Geometry Based Adaptivity.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MinimumHarmonicIndex"></a>

### *property* ANSYSAnalysisSettings.MinimumHarmonicIndex *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumHarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MinimumSubsteps"></a>

### *property* ANSYSAnalysisSettings.MinimumSubsteps *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumSubsteps.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MinimumTimeStep"></a>

### *property* ANSYSAnalysisSettings.MinimumTimeStep *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumTimeStep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ModalFrequencyRange"></a>

### *property* ANSYSAnalysisSettings.ModalFrequencyRange *: [Ansys.Mechanical.DataModel.Enums.ModalFrequencyRangeType](../../../../Mechanical/DataModel/Enums/ModalFrequencyRangeType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ModalFrequencyRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ModalNumberOfPoints"></a>

### *property* ANSYSAnalysisSettings.ModalNumberOfPoints *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalNumberOfPoints.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ModalRangeMaximum"></a>

### *property* ANSYSAnalysisSettings.ModalRangeMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalRangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ModalRangeMinimum"></a>

### *property* ANSYSAnalysisSettings.ModalRangeMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalRangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ModeReuse"></a>

### *property* ANSYSAnalysisSettings.ModeReuse *: [Ansys.Mechanical.DataModel.Enums.SolverControlsModeReuse](../../../../Mechanical/DataModel/Enums/SolverControlsModeReuse.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolverControlsModeReuse) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeReuse.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ModeSelectionMethod"></a>

### *property* ANSYSAnalysisSettings.ModeSelectionMethod *: [Ansys.Mechanical.DataModel.Enums.ModeSelectionMethod](../../../../Mechanical/DataModel/Enums/ModeSelectionMethod.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ModeSelectionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeSelectionMethod.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ModeSignificanceLevel"></a>

### *property* ANSYSAnalysisSettings.ModeSignificanceLevel *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeSignificanceLevel.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ModesCombinationType"></a>

### *property* ANSYSAnalysisSettings.ModesCombinationType *: [Ansys.Mechanical.DataModel.Enums.ModesCombinationType](../../../../Mechanical/DataModel/Enums/ModesCombinationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ModesCombinationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModesCombinationType.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MomentConvergence"></a>

### *property* ANSYSAnalysisSettings.MomentConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MomentConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MomentConvergenceMinimumReference"></a>

### *property* ANSYSAnalysisSettings.MomentConvergenceMinimumReference *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MomentConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MomentConvergenceTolerance"></a>

### *property* ANSYSAnalysisSettings.MomentConvergenceTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MomentConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MomentConvergenceValue"></a>

### *property* ANSYSAnalysisSettings.MomentConvergenceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MomentConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Multistep"></a>

### *property* ANSYSAnalysisSettings.Multistep *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Multistep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MultistepType"></a>

### *property* ANSYSAnalysisSettings.MultistepType *: [Ansys.Mechanical.DataModel.Enums.HarmonicMultiStepType](../../../../Mechanical/DataModel/Enums/HarmonicMultiStepType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.HarmonicMultiStepType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultistepType.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NamedSelection"></a>

### *property* ANSYSAnalysisSettings.NamedSelection *: Iterable[[Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.NamedSelection)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the objects of type NamedSelection to – Named Selection property in the Output Controls group of Analysis Settings.
If the OutputSelection != OutputSelection.NamedSelection or NamedSelectionOnModeFile,
1. NamedSelection cannot be set. An exception will be thrown saying “Cannot modify ANSYSAnalysisSettings.NamedSelection if ANSYSAnalysisSettings.OutputSelection is not set to “OutputSelection.NamedSelection”.”
2. Getting the NamedSelection value will return an empty list.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NewtonRaphsonOption"></a>

### *property* ANSYSAnalysisSettings.NewtonRaphsonOption *: [Ansys.Mechanical.DataModel.Enums.NewtonRaphsonType](../../../../Mechanical/DataModel/Enums/NewtonRaphsonType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.NewtonRaphsonType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NewtonRaphsonOption.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NodalForces"></a>

### *property* ANSYSAnalysisSettings.NodalForces *: [Ansys.Mechanical.DataModel.Enums.OutputControlsNodalForcesType](../../../../Mechanical/DataModel/Enums/OutputControlsNodalForcesType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.OutputControlsNodalForcesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodalForces.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NonLinearFormulation"></a>

### *property* ANSYSAnalysisSettings.NonLinearFormulation *: [Ansys.Mechanical.DataModel.Enums.NonLinearFormulationType](../../../../Mechanical/DataModel/Enums/NonLinearFormulationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.NonLinearFormulationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonLinearFormulation.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NonLinearSolution"></a>

### *property* ANSYSAnalysisSettings.NonLinearSolution *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NonLinearSolution.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NonlinearData"></a>

### *property* ANSYSAnalysisSettings.NonlinearData *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonlinearData.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NumLoadVectors"></a>

### *property* ANSYSAnalysisSettings.NumLoadVectors *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumLoadVectors.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NumberOfModesToUse"></a>

### *property* ANSYSAnalysisSettings.NumberOfModesToUse *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfModesToUse.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NumberOfRPMs"></a>

### *property* ANSYSAnalysisSettings.NumberOfRPMs *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfRPMs.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NumberOfRestartPoints"></a>

### *property* ANSYSAnalysisSettings.NumberOfRestartPoints *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets Number of Restart Points.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NumberOfSculptedLayersQualityImprovement"></a>

### *property* ANSYSAnalysisSettings.NumberOfSculptedLayersQualityImprovement *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSculptedLayersQualityImprovement.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NumberOfSculptedLayersRefinement"></a>

### *property* ANSYSAnalysisSettings.NumberOfSculptedLayersRefinement *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSculptedLayersRefinement.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NumberOfSteps"></a>

### *property* ANSYSAnalysisSettings.NumberOfSteps *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSteps.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NumberOfSubSteps"></a>

### *property* ANSYSAnalysisSettings.NumberOfSubSteps *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSubSteps.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NumberOfZones"></a>

### *property* ANSYSAnalysisSettings.NumberOfZones *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfZones.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NumericalDamping"></a>

### *property* ANSYSAnalysisSettings.NumericalDamping *: [Ansys.Mechanical.DataModel.Enums.TransientDampingType](../../../../Mechanical/DataModel/Enums/TransientDampingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TransientDampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumericalDamping.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NumericalDampingValue"></a>

### *property* ANSYSAnalysisSettings.NumericalDampingValue *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumericalDampingValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.OnDemandExpansionOption"></a>

### *property* ANSYSAnalysisSettings.OnDemandExpansionOption *: [Ansys.Mechanical.DataModel.Enums.OnDemandExpansionType](../../../../Mechanical/DataModel/Enums/OnDemandExpansionType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.OnDemandExpansionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OnDemandExpansionOption.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.OutputSelection"></a>

### *property* ANSYSAnalysisSettings.OutputSelection *: [Ansys.Mechanical.DataModel.Enums.OutputSelection](../../../../Mechanical/DataModel/Enums/OutputSelection.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.OutputSelection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Output Selection property in the Output Controls group of Analysis Settings.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.OverRelaxation"></a>

### *property* ANSYSAnalysisSettings.OverRelaxation *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OverRelaxation.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ParticipationFactor"></a>

### *property* ANSYSAnalysisSettings.ParticipationFactor *: [Ansys.Mechanical.DataModel.Enums.CalculateParticipationFactorResult](../../../../Mechanical/DataModel/Enums/CalculateParticipationFactorResult.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CalculateParticipationFactorResult) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ParticipationFactor.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ProjectToGeometry"></a>

### *property* ANSYSAnalysisSettings.ProjectToGeometry *: [Ansys.Mechanical.DataModel.Enums.NLADControlProjectToGeometry](../../../../Mechanical/DataModel/Enums/NLADControlProjectToGeometry.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.NLADControlProjectToGeometry) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProjectToGeometry.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Properties"></a>

### *property* ANSYSAnalysisSettings.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.QuasiStaticSolution"></a>

### *property* ANSYSAnalysisSettings.QuasiStaticSolution *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the QuasiStaticSolution.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RadiositySolver"></a>

### *property* ANSYSAnalysisSettings.RadiositySolver *: [Ansys.Mechanical.DataModel.Enums.RadiositySolverType](../../../../Mechanical/DataModel/Enums/RadiositySolverType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RadiositySolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadiositySolver.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RangeMaximum"></a>

### *property* ANSYSAnalysisSettings.RangeMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Range Maximum property in Options group of Analysis Settings in Harmonic Analysis.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RangeMinimum"></a>

### *property* ANSYSAnalysisSettings.RangeMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Range Minimum property in Options group of Analysis Settings in Harmonic Analysis.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ReferenceTemperature"></a>

### *property* ANSYSAnalysisSettings.ReferenceTemperature *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Reference Temperature.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ReferenceTemperatureType"></a>

### *property* ANSYSAnalysisSettings.ReferenceTemperatureType *: [Ansys.Mechanical.DataModel.Enums.AMReferenceTemperatureType](../../../../Mechanical/DataModel/Enums/AMReferenceTemperatureType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AMReferenceTemperatureType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Reference Temperature Type.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RefinementAlgorithm"></a>

### *property* ANSYSAnalysisSettings.RefinementAlgorithm *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityControlsRefinementAlgorithmType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityControlsRefinementAlgorithmType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityControlsRefinementAlgorithmType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RefinementAlgorithm.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ReformulationTolerance"></a>

### *property* ANSYSAnalysisSettings.ReformulationTolerance *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReformulationTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RelaxationTemperature"></a>

### *property* ANSYSAnalysisSettings.RelaxationTemperature *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RelaxationTemperature.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RelaxationTemperatureType"></a>

### *property* ANSYSAnalysisSettings.RelaxationTemperatureType *: [Ansys.Mechanical.DataModel.Enums.AMRelaxationTemperatureType](../../../../Mechanical/DataModel/Enums/AMRelaxationTemperatureType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AMRelaxationTemperatureType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Relaxation Temperature Type.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RemeshingGradient"></a>

### *property* ANSYSAnalysisSettings.RemeshingGradient *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityControlsRemeshingGradientType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityControlsRemeshingGradientType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityControlsRemeshingGradientType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshingGradient.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RemeshingToleranceQualityImprovement"></a>

### *property* ANSYSAnalysisSettings.RemeshingToleranceQualityImprovement *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshingToleranceQualityImprovement.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RemeshingToleranceRefinement"></a>

### *property* ANSYSAnalysisSettings.RemeshingToleranceRefinement *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshingToleranceRefinement.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RemovalDirection"></a>

### *property* ANSYSAnalysisSettings.RemovalDirection *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemovalDirection.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RemovalStepSize"></a>

### *property* ANSYSAnalysisSettings.RemovalStepSize *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemovalStepSize.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RestartAtLoadStep"></a>

### *property* ANSYSAnalysisSettings.RestartAtLoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RestartAtLoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RestartAtSubstep"></a>

### *property* ANSYSAnalysisSettings.RestartAtSubstep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RestartAtSubstep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RestartAtTime"></a>

### *property* ANSYSAnalysisSettings.RestartAtTime *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the RestartAtTime.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RestartType"></a>

### *property* ANSYSAnalysisSettings.RestartType *: [Ansys.Mechanical.DataModel.Enums.RestartType](../../../../Mechanical/DataModel/Enums/RestartType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RestartType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RestartType.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ResultFileCompression"></a>

### *property* ANSYSAnalysisSettings.ResultFileCompression *: [Ansys.Mechanical.DataModel.Enums.ResultFileCompressionType](../../../../Mechanical/DataModel/Enums/ResultFileCompressionType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultFileCompressionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultFileCompression.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RetainFilesAfterFullSolve"></a>

### *property* ANSYSAnalysisSettings.RetainFilesAfterFullSolve *: [Ansys.Mechanical.DataModel.Enums.RestartRetainFilesType](../../../../Mechanical/DataModel/Enums/RestartRetainFilesType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RestartRetainFilesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RetainFilesAfterFullSolve.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RetainModesymFileAfterSolve"></a>

### *property* ANSYSAnalysisSettings.RetainModesymFileAfterSolve *: [Ansys.Mechanical.DataModel.Enums.UseExistingModesymFile](../../../../Mechanical/DataModel/Enums/UseExistingModesymFile.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.UseExistingModesymFile) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RetainModesymFileAfterSolve.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RotationConvergence"></a>

### *property* ANSYSAnalysisSettings.RotationConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RotationConvergenceMinimumReference"></a>

### *property* ANSYSAnalysisSettings.RotationConvergenceMinimumReference *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RotationConvergenceTolerance"></a>

### *property* ANSYSAnalysisSettings.RotationConvergenceTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RpmCentralFrequency"></a>

### *property* ANSYSAnalysisSettings.RpmCentralFrequency *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmCentralFrequency.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RpmClusterNumber"></a>

### *property* ANSYSAnalysisSettings.RpmClusterNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmClusterNumber.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RpmFrequencySpacing"></a>

### *property* ANSYSAnalysisSettings.RpmFrequencySpacing *: [Ansys.Mechanical.DataModel.Enums.FrequencySpacingType](../../../../Mechanical/DataModel/Enums/FrequencySpacingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.FrequencySpacingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmFrequencySpacing.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RpmRangeMaximum"></a>

### *property* ANSYSAnalysisSettings.RpmRangeMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmRangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RpmRangeMinimum"></a>

### *property* ANSYSAnalysisSettings.RpmRangeMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmRangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RpmSolutionIntervals"></a>

### *property* ANSYSAnalysisSettings.RpmSolutionIntervals *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmSolutionIntervals.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RpmValue"></a>

### *property* ANSYSAnalysisSettings.RpmValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SIFS"></a>

### *property* ANSYSAnalysisSettings.SIFS *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SIFS.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SaveAtLoadStep"></a>

### *property* ANSYSAnalysisSettings.SaveAtLoadStep *: [Ansys.Mechanical.DataModel.Enums.RestartSaveAtLoadStep](../../../../Mechanical/DataModel/Enums/RestartSaveAtLoadStep.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RestartSaveAtLoadStep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveAtLoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SaveAtSubstep"></a>

### *property* ANSYSAnalysisSettings.SaveAtSubstep *: [Ansys.Mechanical.DataModel.Enums.RestartSaveAtSubstep](../../../../Mechanical/DataModel/Enums/RestartSaveAtSubstep.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RestartSaveAtSubstep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveAtSubstep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SaveMAPDLDB"></a>

### *property* ANSYSAnalysisSettings.SaveMAPDLDB *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveMAPDLDB.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SaveSpecifiedLoadStep"></a>

### *property* ANSYSAnalysisSettings.SaveSpecifiedLoadStep *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveSpecifiedLoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ScatteredFieldFormulation"></a>

### *property* ANSYSAnalysisSettings.ScatteredFieldFormulation *: [Ansys.Mechanical.DataModel.Enums.ScatteredFieldFormulation](../../../../Mechanical/DataModel/Enums/ScatteredFieldFormulation.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ScatteredFieldFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScatteredFieldFormulation.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ScatteringOutputType"></a>

### *property* ANSYSAnalysisSettings.ScatteringOutputType *: [Ansys.Mechanical.DataModel.Enums.ScatteringOutputType](../../../../Mechanical/DataModel/Enums/ScatteringOutputType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ScatteringOutputType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScatteringOutputType.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ScratchSolverFilesDirectory"></a>

### *property* ANSYSAnalysisSettings.ScratchSolverFilesDirectory *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ScratchSolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SearchRangeMaximum"></a>

### *property* ANSYSAnalysisSettings.SearchRangeMaximum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Range Maximum property in Options group of Analysis Settings in Modal Analysis.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SearchRangeMinimum"></a>

### *property* ANSYSAnalysisSettings.SearchRangeMinimum *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Range Minimum property in Options group of Analysis Settings in Modal Analysis.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SignificanceThreshold"></a>

### *property* ANSYSAnalysisSettings.SignificanceThreshold *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SignificanceThreshold.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SolutionIntervals"></a>

### *property* ANSYSAnalysisSettings.SolutionIntervals *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionIntervals.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SolutionMethod"></a>

### *property* ANSYSAnalysisSettings.SolutionMethod *: [Ansys.Mechanical.DataModel.Enums.HarmonicMethod](../../../../Mechanical/DataModel/Enums/HarmonicMethod.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.HarmonicMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionMethod.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SolverFilesDirectory"></a>

### *property* ANSYSAnalysisSettings.SolverFilesDirectory *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SolverPivotChecking"></a>

### *property* ANSYSAnalysisSettings.SolverPivotChecking *: [Ansys.Mechanical.DataModel.Enums.SolverPivotChecking](../../../../Mechanical/DataModel/Enums/SolverPivotChecking.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolverPivotChecking) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverPivotChecking.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SolverTolerance"></a>

### *property* ANSYSAnalysisSettings.SolverTolerance *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SolverType"></a>

### *property* ANSYSAnalysisSettings.SolverType *: [Ansys.Mechanical.DataModel.Enums.SolverType](../../../../Mechanical/DataModel/Enums/SolverType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverType.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SolverUnitSystem"></a>

### *property* ANSYSAnalysisSettings.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SolverUnits"></a>

### *property* ANSYSAnalysisSettings.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../../Mechanical/DataModel/Enums/SolverUnitsControlType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnits.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SpectrumType"></a>

### *property* ANSYSAnalysisSettings.SpectrumType *: [Ansys.Mechanical.DataModel.Enums.SpectrumType](../../../../Mechanical/DataModel/Enums/SpectrumType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SpectrumType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpectrumType.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SpinSoftening"></a>

### *property* ANSYSAnalysisSettings.SpinSoftening *: [Ansys.Mechanical.DataModel.Enums.SpinSofteningType](../../../../Mechanical/DataModel/Enums/SpinSofteningType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SpinSofteningType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpinSoftening.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SpringStiffness"></a>

### *property* ANSYSAnalysisSettings.SpringStiffness *: [Ansys.Mechanical.DataModel.Enums.SpringsStiffnessType](../../../../Mechanical/DataModel/Enums/SpringsStiffnessType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SpringsStiffnessType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringStiffness.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SpringStiffnessFactor"></a>

### *property* ANSYSAnalysisSettings.SpringStiffnessFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringStiffnessFactor.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SpringStiffnessValue"></a>

### *property* ANSYSAnalysisSettings.SpringStiffnessValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpringStiffnessValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Stabilization"></a>

### *property* ANSYSAnalysisSettings.Stabilization *: [Ansys.Mechanical.DataModel.Enums.StabilizationType](../../../../Mechanical/DataModel/Enums/StabilizationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.StabilizationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Stabilization.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StabilizationActivationForFirstSubstep"></a>

### *property* ANSYSAnalysisSettings.StabilizationActivationForFirstSubstep *: [Ansys.Mechanical.DataModel.Enums.StabilizationFirstSubstepOption](../../../../Mechanical/DataModel/Enums/StabilizationFirstSubstepOption.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.StabilizationFirstSubstepOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationActivationForFirstSubstep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StabilizationDampingFactor"></a>

### *property* ANSYSAnalysisSettings.StabilizationDampingFactor *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationDampingFactor.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StabilizationEnergyDissipationRatio"></a>

### *property* ANSYSAnalysisSettings.StabilizationEnergyDissipationRatio *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationEnergyDissipationRatio.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StabilizationForceLimit"></a>

### *property* ANSYSAnalysisSettings.StabilizationForceLimit *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationForceLimit.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StabilizationMethod"></a>

### *property* ANSYSAnalysisSettings.StabilizationMethod *: [Ansys.Mechanical.DataModel.Enums.StabilizationMethod](../../../../Mechanical/DataModel/Enums/StabilizationMethod.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.StabilizationMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationMethod.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StepEndTime"></a>

### *property* ANSYSAnalysisSettings.StepEndTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepEndTime.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StepName"></a>

### *property* ANSYSAnalysisSettings.StepName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Step Name.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StiffnessCoefficient"></a>

### *property* ANSYSAnalysisSettings.StiffnessCoefficient *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StiffnessCoefficientDefineBy"></a>

### *property* ANSYSAnalysisSettings.StiffnessCoefficientDefineBy *: [Ansys.Mechanical.DataModel.Enums.DampingType](../../../../Mechanical/DataModel/Enums/DampingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessCoefficientDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StoreComplexSolution"></a>

### *property* ANSYSAnalysisSettings.StoreComplexSolution *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreComplexSolution.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StoreModalResults"></a>

### *property* ANSYSAnalysisSettings.StoreModalResults *: [Ansys.Mechanical.DataModel.Enums.StoreModalResult](../../../../Mechanical/DataModel/Enums/StoreModalResult.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.StoreModalResult) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreModalResults.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StoreResulsAtValue"></a>

### *property* ANSYSAnalysisSettings.StoreResulsAtValue *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreResulsAtValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StoreResultsAt"></a>

### *property* ANSYSAnalysisSettings.StoreResultsAt *: [Ansys.Mechanical.DataModel.Enums.TimePointsOptions](../../../../Mechanical/DataModel/Enums/TimePointsOptions.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TimePointsOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreResultsAt.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StoreResultsAtAllFrequencies"></a>

### *property* ANSYSAnalysisSettings.StoreResultsAtAllFrequencies *: [Ansys.Mechanical.DataModel.Enums.HarmonicMSUPStorage](../../../../Mechanical/DataModel/Enums/HarmonicMSUPStorage.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.HarmonicMSUPStorage) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreResultsAtAllFrequencies.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Strain"></a>

### *property* ANSYSAnalysisSettings.Strain *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Strain.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Stress"></a>

### *property* ANSYSAnalysisSettings.Stress *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Stress.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StructuralDampingCoefficient"></a>

### *property* ANSYSAnalysisSettings.StructuralDampingCoefficient *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StructuralDampingCoefficient.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StructuralOnly"></a>

### *property* ANSYSAnalysisSettings.StructuralOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StructuralOnly.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.TStress"></a>

### *property* ANSYSAnalysisSettings.TStress *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TStress.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.TemperatureConvergence"></a>

### *property* ANSYSAnalysisSettings.TemperatureConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemperatureConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.TemperatureConvergenceInputValue"></a>

### *property* ANSYSAnalysisSettings.TemperatureConvergenceInputValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemperatureConvergenceInputValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.TemperatureConvergenceMinimumReference"></a>

### *property* ANSYSAnalysisSettings.TemperatureConvergenceMinimumReference *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemperatureConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.TemperatureConvergenceTolerance"></a>

### *property* ANSYSAnalysisSettings.TemperatureConvergenceTolerance *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemperatureConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.TemperatureConvergenceValue"></a>

### *property* ANSYSAnalysisSettings.TemperatureConvergenceValue *: [Ansys.Mechanical.DataModel.Enums.NonLinearValueType](../../../../Mechanical/DataModel/Enums/NonLinearValueType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.NonLinearValueType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemperatureConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ThermalOnly"></a>

### *property* ANSYSAnalysisSettings.ThermalOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalOnly.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.TimeIntegration"></a>

### *property* ANSYSAnalysisSettings.TimeIntegration *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeIntegration.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.TimeStep"></a>

### *property* ANSYSAnalysisSettings.TimeStep *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeStep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.TransientApplication"></a>

### *property* ANSYSAnalysisSettings.TransientApplication *: [Ansys.Mechanical.DataModel.Enums.TransientApplicationType](../../../../Mechanical/DataModel/Enums/TransientApplicationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TransientApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransientApplication.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.TransientApplicationUserDefined"></a>

### *property* ANSYSAnalysisSettings.TransientApplicationUserDefined *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransientApplicationUserDefined.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.UpdateViewFactor"></a>

### *property* ANSYSAnalysisSettings.UpdateViewFactor *: [Ansys.Mechanical.DataModel.Enums.UpdateViewFactor](../../../../Mechanical/DataModel/Enums/UpdateViewFactor.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.UpdateViewFactor) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the specification for updating the view factor.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.UserDefinedFrequencies"></a>

### *property* ANSYSAnalysisSettings.UserDefinedFrequencies *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UserDefinedFrequencies.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.UserDefinedFrequencySteps"></a>

### *property* ANSYSAnalysisSettings.UserDefinedFrequencySteps *: List[[Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UserDefinedFrequencySteps.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ViewFactorMethod"></a>

### *property* ANSYSAnalysisSettings.ViewFactorMethod *: [Ansys.Mechanical.DataModel.Enums.RadiosityViewFactorType](../../../../Mechanical/DataModel/Enums/RadiosityViewFactorType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.RadiosityViewFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ViewFactorMethod.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.VisibleProperties"></a>

### *property* ANSYSAnalysisSettings.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.VoltageConvergence"></a>

### *property* ANSYSAnalysisSettings.VoltageConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VoltageConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.VoltageConvergenceMinimumReference"></a>

### *property* ANSYSAnalysisSettings.VoltageConvergenceMinimumReference *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VoltageConvergenceMinimumReference.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.VoltageConvergenceTolerance"></a>

### *property* ANSYSAnalysisSettings.VoltageConvergenceTolerance *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VoltageConvergenceTolerance.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.VoltageConvergenceValue"></a>

### *property* ANSYSAnalysisSettings.VoltageConvergenceValue *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VoltageConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.WeakSprings"></a>

### *property* ANSYSAnalysisSettings.WeakSprings *: [Ansys.Mechanical.DataModel.Enums.WeakSpringsType](../../../../Mechanical/DataModel/Enums/WeakSpringsType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.WeakSpringsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeakSprings.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ANSYSAnalysisSettings.Activate"></a>

### ANSYSAnalysisSettings.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.AddComment"></a>

### ANSYSAnalysisSettings.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.AddFigure"></a>

### ANSYSAnalysisSettings.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.AddImage"></a>

### ANSYSAnalysisSettings.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CopyTo"></a>

### ANSYSAnalysisSettings.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

CopyTo method.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CreateParameter"></a>

### ANSYSAnalysisSettings.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.DeleteAllRestartPoints"></a>

### ANSYSAnalysisSettings.DeleteAllRestartPoints() → [None](https://docs.python.org/3/library/constants.html#None)

DeleteAllRestartPoints method.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Duplicate"></a>

### ANSYSAnalysisSettings.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetAMStepType"></a>

### ANSYSAnalysisSettings.GetAMStepType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Mechanical.DataModel.Enums.AMProcessStepType](../../../../Mechanical/DataModel/Enums/AMProcessStepType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AMProcessStepType)

Gets the AM Process Step Type at a given step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetAutomaticTimeStepping"></a>

### ANSYSAnalysisSettings.GetAutomaticTimeStepping(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping](../../../../Mechanical/DataModel/Enums/AutomaticTimeStepping.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping)

Gets the Automatic Time Stepping at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetCarryOverTimeStep"></a>

### ANSYSAnalysisSettings.GetCarryOverTimeStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

Gets the Carry Over Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetChildren"></a>

### ANSYSAnalysisSettings.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetCreepEffects"></a>

### ANSYSAnalysisSettings.GetCreepEffects(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Mechanical.DataModel.Enums.Creep](../../../../Mechanical/DataModel/Enums/Creep.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.Creep)

Gets the Creep Effects for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetCreepLimitRatio"></a>

### ANSYSAnalysisSettings.GetCreepLimitRatio(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

Gets the Creep Limit Ratio for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetCurrentConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.GetCurrentConvergenceMinimumReference(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the Current Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetCurrentConvergenceTolerance"></a>

### ANSYSAnalysisSettings.GetCurrentConvergenceTolerance(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

Gets the Current Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetCurrentConvergenceType"></a>

### ANSYSAnalysisSettings.GetCurrentConvergenceType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType)

Gets the Current Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetCurrentConvergenceValue"></a>

### ANSYSAnalysisSettings.GetCurrentConvergenceValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the Current Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetDefineBy"></a>

### ANSYSAnalysisSettings.GetDefineBy(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Mechanical.DataModel.Enums.TimeStepDefineByType](../../../../Mechanical/DataModel/Enums/TimeStepDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TimeStepDefineByType)

Gets the Define By at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetDisplacementConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.GetDisplacementConvergenceMinimumReference(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the Displacement Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetDisplacementConvergenceTolerance"></a>

### ANSYSAnalysisSettings.GetDisplacementConvergenceTolerance(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

Gets the Displacement Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetDisplacementConvergenceType"></a>

### ANSYSAnalysisSettings.GetDisplacementConvergenceType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType)

Gets the Displacement Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetDisplacementConvergenceValue"></a>

### ANSYSAnalysisSettings.GetDisplacementConvergenceValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the Displacement Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetEmagAMPSConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.GetEmagAMPSConvergenceMinimumReference(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the EmagAMPS Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetEmagAMPSConvergenceTolerance"></a>

### ANSYSAnalysisSettings.GetEmagAMPSConvergenceTolerance(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

Gets the EmagAMPS Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetEmagAMPSConvergenceType"></a>

### ANSYSAnalysisSettings.GetEmagAMPSConvergenceType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType)

Gets the EmagAMPS Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetEmagAMPSConvergenceValue"></a>

### ANSYSAnalysisSettings.GetEmagAMPSConvergenceValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the EmagAMPS Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetEmagCSGConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.GetEmagCSGConvergenceMinimumReference(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the EmagCSG Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetEmagCSGConvergenceTolerance"></a>

### ANSYSAnalysisSettings.GetEmagCSGConvergenceTolerance(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

Gets the EmagCSG Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetEmagCSGConvergenceType"></a>

### ANSYSAnalysisSettings.GetEmagCSGConvergenceType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType)

Gets the EmagCSG Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetEmagCSGConvergenceValue"></a>

### ANSYSAnalysisSettings.GetEmagCSGConvergenceValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the EmagCSG Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetEnergyConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.GetEnergyConvergenceMinimumReference(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the Energy Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetEnergyConvergenceTolerance"></a>

### ANSYSAnalysisSettings.GetEnergyConvergenceTolerance(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

Gets the Energy Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetEnergyConvergenceType"></a>

### ANSYSAnalysisSettings.GetEnergyConvergenceType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType)

Gets the Energy Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetEnergyConvergenceValue"></a>

### ANSYSAnalysisSettings.GetEnergyConvergenceValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the Energy Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetForceConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.GetForceConvergenceMinimumReference(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the Force Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetForceConvergenceTolerance"></a>

### ANSYSAnalysisSettings.GetForceConvergenceTolerance(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

Gets the Force Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetForceConvergenceType"></a>

### ANSYSAnalysisSettings.GetForceConvergenceType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType)

Gets the Force Convergence Tolerance Type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetForceConvergenceValue"></a>

### ANSYSAnalysisSettings.GetForceConvergenceValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the Force Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetHeatConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.GetHeatConvergenceMinimumReference(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the Heat Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetHeatConvergenceTolerance"></a>

### ANSYSAnalysisSettings.GetHeatConvergenceTolerance(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

Gets the Heat Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetHeatConvergenceType"></a>

### ANSYSAnalysisSettings.GetHeatConvergenceType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType)

Gets the Heat Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetHeatConvergenceValue"></a>

### ANSYSAnalysisSettings.GetHeatConvergenceValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the Heat Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetInitialSubsteps"></a>

### ANSYSAnalysisSettings.GetInitialSubsteps(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [int](https://docs.python.org/3/library/functions.html#int)

Gets the Initial Substeps at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetInitialTimeStep"></a>

### ANSYSAnalysisSettings.GetInitialTimeStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the Initial Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetLineSearch"></a>

### ANSYSAnalysisSettings.GetLineSearch(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Mechanical.DataModel.Enums.LineSearchType](../../../../Mechanical/DataModel/Enums/LineSearchType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LineSearchType)

Gets the Line Search at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetMaximumSubsteps"></a>

### ANSYSAnalysisSettings.GetMaximumSubsteps(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [int](https://docs.python.org/3/library/functions.html#int)

Gets the Maximum Substeps at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetMaximumTimeStep"></a>

### ANSYSAnalysisSettings.GetMaximumTimeStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the Maximum Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetMinimumSubsteps"></a>

### ANSYSAnalysisSettings.GetMinimumSubsteps(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [int](https://docs.python.org/3/library/functions.html#int)

Gets the Minimum Substeps at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetMinimumTimeStep"></a>

### ANSYSAnalysisSettings.GetMinimumTimeStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the Minimum Time Step at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetMomentConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.GetMomentConvergenceMinimumReference(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the Moment Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetMomentConvergenceTolerance"></a>

### ANSYSAnalysisSettings.GetMomentConvergenceTolerance(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

Gets the Moment Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetMomentConvergenceType"></a>

### ANSYSAnalysisSettings.GetMomentConvergenceType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType)

Gets the Moment Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetMomentConvergenceValue"></a>

### ANSYSAnalysisSettings.GetMomentConvergenceValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the Moment Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetNumberOfSubSteps"></a>

### ANSYSAnalysisSettings.GetNumberOfSubSteps(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [int](https://docs.python.org/3/library/functions.html#int)

Gets the Number of Substeps for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetParameter"></a>

### ANSYSAnalysisSettings.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetRotationConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.GetRotationConvergenceMinimumReference(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the Rotation Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetRotationConvergenceTolerance"></a>

### ANSYSAnalysisSettings.GetRotationConvergenceTolerance(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

Gets the Rotation Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetRotationConvergenceType"></a>

### ANSYSAnalysisSettings.GetRotationConvergenceType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType)

Gets the Rotation Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetRotationConvergenceValue"></a>

### ANSYSAnalysisSettings.GetRotationConvergenceValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the Rotation Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetStabilization"></a>

### ANSYSAnalysisSettings.GetStabilization(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Mechanical.DataModel.Enums.StabilizationType](../../../../Mechanical/DataModel/Enums/StabilizationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.StabilizationType)

Gets the Stabilization at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetStabilizationDampingFactor"></a>

### ANSYSAnalysisSettings.GetStabilizationDampingFactor(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

Gets the Stabilization Damping Factor at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetStabilizationEnergyDissipationRatio"></a>

### ANSYSAnalysisSettings.GetStabilizationEnergyDissipationRatio(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

Gets the Stabilization Energy Dissipation Ratio at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetStabilizationFirstSubstepOption"></a>

### ANSYSAnalysisSettings.GetStabilizationFirstSubstepOption(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Mechanical.DataModel.Enums.StabilizationFirstSubstepOption](../../../../Mechanical/DataModel/Enums/StabilizationFirstSubstepOption.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.StabilizationFirstSubstepOption)

Gets the Stabilization First Substep Option at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetStabilizationForceLimit"></a>

### ANSYSAnalysisSettings.GetStabilizationForceLimit(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

Gets the Stabilization Force Limit at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetStabilizationMethod"></a>

### ANSYSAnalysisSettings.GetStabilizationMethod(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Mechanical.DataModel.Enums.StabilizationMethod](../../../../Mechanical/DataModel/Enums/StabilizationMethod.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.StabilizationMethod)

Gets the Stabilization Method at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetStepEndTime"></a>

### ANSYSAnalysisSettings.GetStepEndTime(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the Step End Time at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetStepName"></a>

### ANSYSAnalysisSettings.GetStepName(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [str](https://docs.python.org/3/library/stdtypes.html#str)

Gets the Step name at a given step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetStoreResulsAtValue"></a>

### ANSYSAnalysisSettings.GetStoreResulsAtValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [int](https://docs.python.org/3/library/functions.html#int)

Gets the Store Results At Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetStoreResultsAt"></a>

### ANSYSAnalysisSettings.GetStoreResultsAt(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Mechanical.DataModel.Enums.TimePointsOptions](../../../../Mechanical/DataModel/Enums/TimePointsOptions.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TimePointsOptions)

Gets the Store Results At at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetStructuralOnly"></a>

### ANSYSAnalysisSettings.GetStructuralOnly(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

Gets the TimeIntegration Structural for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetTemperatureConvergenceInputValue"></a>

### ANSYSAnalysisSettings.GetTemperatureConvergenceInputValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the Temperature Convergence Input Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetTemperatureConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.GetTemperatureConvergenceMinimumReference(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the Temperature Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetTemperatureConvergenceTolerance"></a>

### ANSYSAnalysisSettings.GetTemperatureConvergenceTolerance(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

Gets the Temperature Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetTemperatureConvergenceType"></a>

### ANSYSAnalysisSettings.GetTemperatureConvergenceType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType)

Gets the Temperature Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetTemperatureConvergenceValue"></a>

### ANSYSAnalysisSettings.GetTemperatureConvergenceValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Mechanical.DataModel.Enums.NonLinearValueType](../../../../Mechanical/DataModel/Enums/NonLinearValueType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.NonLinearValueType)

Gets the Temperature Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetThermalOnly"></a>

### ANSYSAnalysisSettings.GetThermalOnly(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

Sets the TimeIntegration Thermal for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetTimeIntegration"></a>

### ANSYSAnalysisSettings.GetTimeIntegration(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [bool](https://docs.python.org/3/library/functions.html#bool)

Gets the TimeIntegration for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetTimeStep"></a>

### ANSYSAnalysisSettings.GetTimeStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Sets the Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetVoltageConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.GetVoltageConvergenceMinimumReference(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the Voltage Convergence Minimum Reference at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetVoltageConvergenceTolerance"></a>

### ANSYSAnalysisSettings.GetVoltageConvergenceTolerance(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [float](https://docs.python.org/3/library/functions.html#float)

Gets the Voltage Convergence Tolerance as a percentage at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetVoltageConvergenceType"></a>

### ANSYSAnalysisSettings.GetVoltageConvergenceType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType)

Gets the Voltage Convergence Tolerance type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetVoltageConvergenceValue"></a>

### ANSYSAnalysisSettings.GetVoltageConvergenceValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int)) → [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)

Gets the Voltage Convergence Value at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GroupAllSimilarChildren"></a>

### ANSYSAnalysisSettings.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GroupSimilarObjects"></a>

### ANSYSAnalysisSettings.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.PropertyByAPIName"></a>

### ANSYSAnalysisSettings.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.PropertyByName"></a>

### ANSYSAnalysisSettings.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RemoveParameter"></a>

### ANSYSAnalysisSettings.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetAutomaticTimeStepping"></a>

### ANSYSAnalysisSettings.SetAutomaticTimeStepping(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping](../../../../Mechanical/DataModel/Enums/AutomaticTimeStepping.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Automatic Time Stepping for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetCarryOverTimeStep"></a>

### ANSYSAnalysisSettings.SetCarryOverTimeStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Carry Over Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetChargeConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.SetChargeConvergenceMinimumReference(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Charge Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetChargeConvergenceTolerance"></a>

### ANSYSAnalysisSettings.SetChargeConvergenceTolerance(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

```text
Sets the Charge Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the "value" argument should be set to 5.
```

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetChargeConvergenceType"></a>

### ANSYSAnalysisSettings.SetChargeConvergenceType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Charge Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetChargeConvergenceValue"></a>

### ANSYSAnalysisSettings.SetChargeConvergenceValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Charge Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetCreepEffects"></a>

### ANSYSAnalysisSettings.SetCreepEffects(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.Creep](../../../../Mechanical/DataModel/Enums/Creep.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.Creep)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Creep Effects for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetCreepLimitRatio"></a>

### ANSYSAnalysisSettings.SetCreepLimitRatio(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Creep Limit Ratio for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetCurrentConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.SetCurrentConvergenceMinimumReference(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Current Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetCurrentConvergenceTolerance"></a>

### ANSYSAnalysisSettings.SetCurrentConvergenceTolerance(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

```text
Sets the Current Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the "value" argument should be set to 5.
```

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetCurrentConvergenceType"></a>

### ANSYSAnalysisSettings.SetCurrentConvergenceType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Current Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetCurrentConvergenceValue"></a>

### ANSYSAnalysisSettings.SetCurrentConvergenceValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Current Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetDefineBy"></a>

### ANSYSAnalysisSettings.SetDefineBy(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.TimeStepDefineByType](../../../../Mechanical/DataModel/Enums/TimeStepDefineByType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TimeStepDefineByType)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Define By for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetDisplacementConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.SetDisplacementConvergenceMinimumReference(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Displacement Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetDisplacementConvergenceTolerance"></a>

### ANSYSAnalysisSettings.SetDisplacementConvergenceTolerance(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

```text
Sets the Displacement Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the "value" argument should be set to 5.
```

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetDisplacementConvergenceType"></a>

### ANSYSAnalysisSettings.SetDisplacementConvergenceType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Displacement Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetDisplacementConvergenceValue"></a>

### ANSYSAnalysisSettings.SetDisplacementConvergenceValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Displacement Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetEmagAMPSConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.SetEmagAMPSConvergenceMinimumReference(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the EmagAMPS Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetEmagAMPSConvergenceTolerance"></a>

### ANSYSAnalysisSettings.SetEmagAMPSConvergenceTolerance(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

```text
Sets the EmagAMPS Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the "value" argument should be set to 5.
```

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetEmagAMPSConvergenceType"></a>

### ANSYSAnalysisSettings.SetEmagAMPSConvergenceType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the EmagAMPS Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetEmagAMPSConvergenceValue"></a>

### ANSYSAnalysisSettings.SetEmagAMPSConvergenceValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the EmagAMPS Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetEmagCSGConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.SetEmagCSGConvergenceMinimumReference(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the EmagCSG Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetEmagCSGConvergenceTolerance"></a>

### ANSYSAnalysisSettings.SetEmagCSGConvergenceTolerance(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

```text
Sets the EmagCSG Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the "value" argument should be set to 5.
```

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetEmagCSGConvergenceType"></a>

### ANSYSAnalysisSettings.SetEmagCSGConvergenceType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the EmagCSG Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetEmagCSGConvergenceValue"></a>

### ANSYSAnalysisSettings.SetEmagCSGConvergenceValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the EmagCSG Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetEnergyConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.SetEnergyConvergenceMinimumReference(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Energy Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetEnergyConvergenceTolerance"></a>

### ANSYSAnalysisSettings.SetEnergyConvergenceTolerance(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

```text
Sets the Energy Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the "value" argument should be set to 5.
```

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetEnergyConvergenceType"></a>

### ANSYSAnalysisSettings.SetEnergyConvergenceType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Energy Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetEnergyConvergenceValue"></a>

### ANSYSAnalysisSettings.SetEnergyConvergenceValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Energy Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetForceConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.SetForceConvergenceMinimumReference(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Force Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetForceConvergenceTolerance"></a>

### ANSYSAnalysisSettings.SetForceConvergenceTolerance(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

```text
Sets the Force Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the "value" argument should be set to 5.
```

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetForceConvergenceType"></a>

### ANSYSAnalysisSettings.SetForceConvergenceType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Force Convergence Tolerance Type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetForceConvergenceValue"></a>

### ANSYSAnalysisSettings.SetForceConvergenceValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Force Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetHeatConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.SetHeatConvergenceMinimumReference(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Heat Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetHeatConvergenceTolerance"></a>

### ANSYSAnalysisSettings.SetHeatConvergenceTolerance(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

```text
Sets the Heat Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the "value" argument should be set to 5.
```

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetHeatConvergenceType"></a>

### ANSYSAnalysisSettings.SetHeatConvergenceType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Heat Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetHeatConvergenceValue"></a>

### ANSYSAnalysisSettings.SetHeatConvergenceValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Heat Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetInitialSubsteps"></a>

### ANSYSAnalysisSettings.SetInitialSubsteps(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Initial Substeps for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetInitialTimeStep"></a>

### ANSYSAnalysisSettings.SetInitialTimeStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Initial Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetLineSearch"></a>

### ANSYSAnalysisSettings.SetLineSearch(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.LineSearchType](../../../../Mechanical/DataModel/Enums/LineSearchType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.LineSearchType)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Line Search for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetMaximumSubsteps"></a>

### ANSYSAnalysisSettings.SetMaximumSubsteps(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Maximum Substeps for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetMaximumTimeStep"></a>

### ANSYSAnalysisSettings.SetMaximumTimeStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Maximum Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetMinimumSubsteps"></a>

### ANSYSAnalysisSettings.SetMinimumSubsteps(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Minimum Substeps for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetMinimumTimeStep"></a>

### ANSYSAnalysisSettings.SetMinimumTimeStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Minimum Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetMomentConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.SetMomentConvergenceMinimumReference(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Moment Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetMomentConvergenceTolerance"></a>

### ANSYSAnalysisSettings.SetMomentConvergenceTolerance(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

```text
Sets the Moment Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the "value" argument should be set to 5.
```

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetMomentConvergenceType"></a>

### ANSYSAnalysisSettings.SetMomentConvergenceType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Moment Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetMomentConvergenceValue"></a>

### ANSYSAnalysisSettings.SetMomentConvergenceValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Moment Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetNumberOfSubSteps"></a>

### ANSYSAnalysisSettings.SetNumberOfSubSteps(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Number of Substeps for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetRotationConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.SetRotationConvergenceMinimumReference(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Rotation Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetRotationConvergenceTolerance"></a>

### ANSYSAnalysisSettings.SetRotationConvergenceTolerance(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

```text
Sets the Rotation Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the "value" argument should be set to 5.
```

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetRotationConvergenceType"></a>

### ANSYSAnalysisSettings.SetRotationConvergenceType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Rotation Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetRotationConvergenceValue"></a>

### ANSYSAnalysisSettings.SetRotationConvergenceValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Rotation Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetStabilization"></a>

### ANSYSAnalysisSettings.SetStabilization(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.StabilizationType](../../../../Mechanical/DataModel/Enums/StabilizationType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.StabilizationType)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Stabilization for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetStabilizationDampingFactor"></a>

### ANSYSAnalysisSettings.SetStabilizationDampingFactor(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Stabilization Damping Factor for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetStabilizationEnergyDissipationRatio"></a>

### ANSYSAnalysisSettings.SetStabilizationEnergyDissipationRatio(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Stabilization Energy Dissipation Ratio for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetStabilizationFirstSubstepOption"></a>

### ANSYSAnalysisSettings.SetStabilizationFirstSubstepOption(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.StabilizationFirstSubstepOption](../../../../Mechanical/DataModel/Enums/StabilizationFirstSubstepOption.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.StabilizationFirstSubstepOption)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Stabilization First Substep Option for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetStabilizationForceLimit"></a>

### ANSYSAnalysisSettings.SetStabilizationForceLimit(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Stabilization Force Limit for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetStabilizationMethod"></a>

### ANSYSAnalysisSettings.SetStabilizationMethod(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.StabilizationMethod](../../../../Mechanical/DataModel/Enums/StabilizationMethod.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.StabilizationMethod)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Stabilization Method for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetStepEndTime"></a>

### ANSYSAnalysisSettings.SetStepEndTime(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Step End Time for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetStepName"></a>

### ANSYSAnalysisSettings.SetStepName(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Step name at a given step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetStoreResulsAtValue"></a>

### ANSYSAnalysisSettings.SetStoreResulsAtValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Store Results At Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetStoreResultsAt"></a>

### ANSYSAnalysisSettings.SetStoreResultsAt(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.TimePointsOptions](../../../../Mechanical/DataModel/Enums/TimePointsOptions.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.TimePointsOptions)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Store Results At for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetStructuralOnly"></a>

### ANSYSAnalysisSettings.SetStructuralOnly(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the TimeIntegration Structural for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetTemperatureConvergenceInputValue"></a>

### ANSYSAnalysisSettings.SetTemperatureConvergenceInputValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Temperature Convergence Input Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetTemperatureConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.SetTemperatureConvergenceMinimumReference(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Temperature Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetTemperatureConvergenceTolerance"></a>

### ANSYSAnalysisSettings.SetTemperatureConvergenceTolerance(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

```text
Sets the Temperature Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the "value" argument should be set to 5.
```

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetTemperatureConvergenceType"></a>

### ANSYSAnalysisSettings.SetTemperatureConvergenceType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Temperature Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetTemperatureConvergenceValue"></a>

### ANSYSAnalysisSettings.SetTemperatureConvergenceValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.NonLinearValueType](../../../../Mechanical/DataModel/Enums/NonLinearValueType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.NonLinearValueType)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Temperature Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetThermalOnly"></a>

### ANSYSAnalysisSettings.SetThermalOnly(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the TimeIntegration Thermal for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetTimeIntegration"></a>

### ANSYSAnalysisSettings.SetTimeIntegration(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [bool](https://docs.python.org/3/library/functions.html#bool)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the TimeIntegration for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetTimeStep"></a>

### ANSYSAnalysisSettings.SetTimeStep(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Time Step for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetVoltageConvergenceMinimumReference"></a>

### ANSYSAnalysisSettings.SetVoltageConvergenceMinimumReference(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Voltage Convergence Minimum Reference for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetVoltageConvergenceTolerance"></a>

### ANSYSAnalysisSettings.SetVoltageConvergenceTolerance(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [float](https://docs.python.org/3/library/functions.html#float)) → [None](https://docs.python.org/3/library/constants.html#None)

```text
Sets the Voltage Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the "value" argument should be set to 5.
```

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetVoltageConvergenceType"></a>

### ANSYSAnalysisSettings.SetVoltageConvergenceType(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Voltage Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetVoltageConvergenceValue"></a>

### ANSYSAnalysisSettings.SetVoltageConvergenceValue(stepNumber: [int](https://docs.python.org/3/library/functions.html#int), value: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Sets the Voltage Convergence Value for a given solution step.

<!-- !! processed by numpydoc !! -->

