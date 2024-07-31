# `ANSYSAnalysisSettings`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisSettings.ANSYSAnalysisSettings

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ANSYSAnalysisSettings.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [`GetStepEndTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetStepEndTime)                                                         | Gets the Step End Time at a given solution step.                                       |
| [`SetStepEndTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetStepEndTime)                                                         | Sets the Step End Time for a given solution step.                                      |
| [`GetAutomaticTimeStepping`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetAutomaticTimeStepping)                                     | Gets the Automatic Time Stepping at a given solution step.                             |
| [`SetAutomaticTimeStepping`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetAutomaticTimeStepping)                                     | Sets the Automatic Time Stepping for a given solution step.                            |
| [`GetForceConvergenceType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetForceConvergenceType)                                       | Gets the Force Convergence Tolerance Type at a given solution step.                    |
| [`SetForceConvergenceType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetForceConvergenceType)                                       | Sets the Force Convergence Tolerance Type for a given solution step.                   |
| [`GetForceConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetForceConvergenceTolerance)                             | Gets the Force Convergence Tolerance as a percentage at a given solution step.         |
| [`SetForceConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetForceConvergenceTolerance)                             | Sets the Force Convergence Tolerance as a percentage for a given solution step.        |
| [`GetForceConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetForceConvergenceValue)                                     | Gets the Force Convergence Value at a given solution step.                             |
| [`SetForceConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetForceConvergenceValue)                                     | Sets the Force Convergence Value for a given solution step.                            |
| [`GetForceConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetForceConvergenceMinimumReference)               | Gets the Force Convergence Minimum Reference at a given solution step.                 |
| [`SetForceConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetForceConvergenceMinimumReference)               | Sets the Force Convergence Minimum Reference for a given solution step.                |
| [`GetMomentConvergenceType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetMomentConvergenceType)                                     | Gets the Moment Convergence Tolerance type at a given solution step.                   |
| [`SetMomentConvergenceType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetMomentConvergenceType)                                     | Sets the Moment Convergence Tolerance type for a given solution step.                  |
| [`GetMomentConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetMomentConvergenceTolerance)                           | Gets the Moment Convergence Tolerance as a percentage at a given solution step.        |
| [`SetMomentConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetMomentConvergenceTolerance)                           | Sets the Moment Convergence Tolerance as a percentage for a given solution step.       |
| [`GetMomentConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetMomentConvergenceValue)                                   | Gets the Moment Convergence Value at a given solution step.                            |
| [`SetMomentConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetMomentConvergenceValue)                                   | Sets the Moment Convergence Value for a given solution step.                           |
| [`GetMomentConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetMomentConvergenceMinimumReference)             | Gets the Moment Convergence Minimum Reference at a given solution step.                |
| [`SetMomentConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetMomentConvergenceMinimumReference)             | Sets the Moment Convergence Minimum Reference for a given solution step.               |
| [`GetDisplacementConvergenceType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetDisplacementConvergenceType)                         | Gets the Displacement Convergence Tolerance type at a given solution step.             |
| [`SetDisplacementConvergenceType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetDisplacementConvergenceType)                         | Sets the Displacement Convergence Tolerance type for a given solution step.            |
| [`GetDisplacementConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetDisplacementConvergenceTolerance)               | Gets the Displacement Convergence Tolerance as a percentage at a given solution step.  |
| [`SetDisplacementConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetDisplacementConvergenceTolerance)               | Sets the Displacement Convergence Tolerance as a percentage for a given solution step. |
| [`GetDisplacementConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetDisplacementConvergenceValue)                       | Gets the Displacement Convergence Value at a given solution step.                      |
| [`SetDisplacementConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetDisplacementConvergenceValue)                       | Sets the Displacement Convergence Value for a given solution step.                     |
| [`GetDisplacementConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetDisplacementConvergenceMinimumReference) | Gets the Displacement Convergence Minimum Reference at a given solution step.          |
| [`SetDisplacementConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetDisplacementConvergenceMinimumReference) | Sets the Displacement Convergence Minimum Reference for a given solution step.         |
| [`GetRotationConvergenceType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetRotationConvergenceType)                                 | Gets the Rotation Convergence Tolerance type at a given solution step.                 |
| [`SetRotationConvergenceType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetRotationConvergenceType)                                 | Sets the Rotation Convergence Tolerance type for a given solution step.                |
| [`GetRotationConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetRotationConvergenceTolerance)                       | Gets the Rotation Convergence Tolerance as a percentage at a given solution step.      |
| [`SetRotationConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetRotationConvergenceTolerance)                       | Sets the Rotation Convergence Tolerance as a percentage for a given solution step.     |
| [`GetRotationConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetRotationConvergenceValue)                               | Gets the Rotation Convergence Value at a given solution step.                          |
| [`SetRotationConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetRotationConvergenceValue)                               | Sets the Rotation Convergence Value for a given solution step.                         |
| [`GetRotationConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetRotationConvergenceMinimumReference)         | Gets the Rotation Convergence Minimum Reference at a given solution step.              |
| [`SetRotationConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetRotationConvergenceMinimumReference)         | Sets the Rotation Convergence Minimum Reference for a given solution step.             |
| [`SetTemperatureConvergenceType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetTemperatureConvergenceType)                           | Sets the Temperature Convergence Tolerance type for a given solution step.             |
| [`SetTemperatureConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetTemperatureConvergenceTolerance)                 | Sets the Temperature Convergence Tolerance as a percentage for a given solution step.  |
| [`SetTemperatureConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetTemperatureConvergenceValue)                         | Sets the Temperature Convergence Value for a given solution step.                      |
| [`SetTemperatureConvergenceInputValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetTemperatureConvergenceInputValue)               | Sets the Temperature Convergence Input Value for a given solution step.                |
| [`SetTemperatureConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetTemperatureConvergenceMinimumReference)   | Sets the Temperature Convergence Minimum Reference for a given solution step.          |
| [`SetHeatConvergenceType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetHeatConvergenceType)                                         | Sets the Heat Convergence Tolerance type for a given solution step.                    |
| [`SetHeatConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetHeatConvergenceTolerance)                               | Sets the Heat Convergence Tolerance as a percentage for a given solution step.         |
| [`SetHeatConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetHeatConvergenceValue)                                       | Sets the Heat Convergence Value for a given solution step.                             |
| [`SetHeatConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetHeatConvergenceMinimumReference)                 | Sets the Heat Convergence Minimum Reference for a given solution step.                 |
| [`SetVoltageConvergenceType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetVoltageConvergenceType)                                   | Sets the Voltage Convergence Tolerance type for a given solution step.                 |
| [`SetVoltageConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetVoltageConvergenceTolerance)                         | Sets the Voltage Convergence Tolerance as a percentage for a given solution step.      |
| [`SetVoltageConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetVoltageConvergenceValue)                                 | Sets the Voltage Convergence Value for a given solution step.                          |
| [`SetVoltageConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetVoltageConvergenceMinimumReference)           | Sets the Voltage Convergence Minimum Reference for a given solution step.              |
| [`SetChargeConvergenceType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetChargeConvergenceType)                                     | Sets the Charge Convergence Tolerance type for a given solution step.                  |
| [`SetChargeConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetChargeConvergenceTolerance)                           | Sets the Charge Convergence Tolerance as a percentage for a given solution step.       |
| [`SetChargeConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetChargeConvergenceValue)                                   | Sets the Charge Convergence Value for a given solution step.                           |
| [`SetChargeConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetChargeConvergenceMinimumReference)             | Sets the Charge Convergence Minimum Reference for a given solution step.               |
| [`SetEnergyConvergenceType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetEnergyConvergenceType)                                     | Sets the Energy Convergence Tolerance type for a given solution step.                  |
| [`SetEnergyConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetEnergyConvergenceTolerance)                           | Sets the Energy Convergence Tolerance as a percentage for a given solution step.       |
| [`SetEnergyConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetEnergyConvergenceValue)                                   | Sets the Energy Convergence Value for a given solution step.                           |
| [`SetEnergyConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetEnergyConvergenceMinimumReference)             | Sets the Energy Convergence Minimum Reference for a given solution step.               |
| [`SetCurrentConvergenceType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetCurrentConvergenceType)                                   | Sets the Current Convergence Tolerance type for a given solution step.                 |
| [`SetCurrentConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetCurrentConvergenceTolerance)                         | Sets the Current Convergence Tolerance as a percentage for a given solution step.      |
| [`SetCurrentConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetCurrentConvergenceValue)                                 | Sets the Current Convergence Value for a given solution step.                          |
| [`SetCurrentConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetCurrentConvergenceMinimumReference)           | Sets the Current Convergence Minimum Reference for a given solution step.              |
| [`SetEmagAMPSConvergenceType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetEmagAMPSConvergenceType)                                 | Sets the EmagAMPS Convergence Tolerance type for a given solution step.                |
| [`SetEmagAMPSConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetEmagAMPSConvergenceTolerance)                       | Sets the EmagAMPS Convergence Tolerance as a percentage for a given solution step.     |
| [`SetEmagAMPSConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetEmagAMPSConvergenceValue)                               | Sets the EmagAMPS Convergence Value for a given solution step.                         |
| [`SetEmagAMPSConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetEmagAMPSConvergenceMinimumReference)         | Sets the EmagAMPS Convergence Minimum Reference for a given solution step.             |
| [`SetEmagCSGConvergenceType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetEmagCSGConvergenceType)                                   | Sets the EmagCSG Convergence Tolerance type for a given solution step.                 |
| [`SetEmagCSGConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetEmagCSGConvergenceTolerance)                         | Sets the EmagCSG Convergence Tolerance as a percentage for a given solution step.      |
| [`SetEmagCSGConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetEmagCSGConvergenceValue)                                 | Sets the EmagCSG Convergence Value for a given solution step.                          |
| [`SetEmagCSGConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetEmagCSGConvergenceMinimumReference)           | Sets the EmagCSG Convergence Minimum Reference for a given solution step.              |
| [`GetTemperatureConvergenceType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetTemperatureConvergenceType)                           | Gets the Temperature Convergence Tolerance type at a given solution step.              |
| [`GetTemperatureConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetTemperatureConvergenceTolerance)                 | Gets the Temperature Convergence Tolerance as a percentage at a given solution step.   |
| [`GetTemperatureConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetTemperatureConvergenceValue)                         | Gets the Temperature Convergence Value at a given solution step.                       |
| [`GetTemperatureConvergenceInputValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetTemperatureConvergenceInputValue)               | Gets the Temperature Convergence Input Value at a given solution step.                 |
| [`GetTemperatureConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetTemperatureConvergenceMinimumReference)   | Gets the Temperature Convergence Minimum Reference at a given solution step.           |
| [`GetHeatConvergenceType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetHeatConvergenceType)                                         | Gets the Heat Convergence Tolerance type at a given solution step.                     |
| [`GetHeatConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetHeatConvergenceTolerance)                               | Gets the Heat Convergence Tolerance as a percentage at a given solution step.          |
| [`GetHeatConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetHeatConvergenceValue)                                       | Gets the Heat Convergence Value at a given solution step.                              |
| [`GetHeatConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetHeatConvergenceMinimumReference)                 | Gets the Heat Convergence Minimum Reference at a given solution step.                  |
| [`GetVoltageConvergenceType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetVoltageConvergenceType)                                   | Gets the Voltage Convergence Tolerance type at a given solution step.                  |
| [`GetVoltageConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetVoltageConvergenceTolerance)                         | Gets the Voltage Convergence Tolerance as a percentage at a given solution step.       |
| [`GetVoltageConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetVoltageConvergenceValue)                                 | Gets the Voltage Convergence Value at a given solution step.                           |
| [`GetVoltageConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetVoltageConvergenceMinimumReference)           | Gets the Voltage Convergence Minimum Reference at a given solution step.               |
| [`GetCurrentConvergenceType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetCurrentConvergenceType)                                   | Gets the Current Convergence Tolerance type at a given solution step.                  |
| [`GetCurrentConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetCurrentConvergenceTolerance)                         | Gets the Current Convergence Tolerance as a percentage at a given solution step.       |
| [`GetCurrentConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetCurrentConvergenceValue)                                 | Gets the Current Convergence Value at a given solution step.                           |
| [`GetCurrentConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetCurrentConvergenceMinimumReference)           | Gets the Current Convergence Minimum Reference at a given solution step.               |
| [`GetEmagAMPSConvergenceType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetEmagAMPSConvergenceType)                                 | Gets the EmagAMPS Convergence Tolerance type at a given solution step.                 |
| [`GetEmagAMPSConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetEmagAMPSConvergenceTolerance)                       | Gets the EmagAMPS Convergence Tolerance as a percentage at a given solution step.      |
| [`GetEmagAMPSConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetEmagAMPSConvergenceValue)                               | Gets the EmagAMPS Convergence Value at a given solution step.                          |
| [`GetEmagAMPSConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetEmagAMPSConvergenceMinimumReference)         | Gets the EmagAMPS Convergence Minimum Reference at a given solution step.              |
| [`GetEmagCSGConvergenceType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetEmagCSGConvergenceType)                                   | Gets the EmagCSG Convergence Tolerance type at a given solution step.                  |
| [`GetEmagCSGConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetEmagCSGConvergenceTolerance)                         | Gets the EmagCSG Convergence Tolerance as a percentage at a given solution step.       |
| [`GetEmagCSGConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetEmagCSGConvergenceValue)                                 | Gets the EmagCSG Convergence Value at a given solution step.                           |
| [`GetEmagCSGConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetEmagCSGConvergenceMinimumReference)           | Gets the EmagCSG Convergence Minimum Reference at a given solution step.               |
| [`GetEnergyConvergenceType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetEnergyConvergenceType)                                     | Gets the Energy Convergence Tolerance type at a given solution step.                   |
| [`GetEnergyConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetEnergyConvergenceTolerance)                           | Gets the Energy Convergence Tolerance as a percentage at a given solution step.        |
| [`GetEnergyConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetEnergyConvergenceValue)                                   | Gets the Energy Convergence Value at a given solution step.                            |
| [`GetEnergyConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetEnergyConvergenceMinimumReference)             | Gets the Energy Convergence Minimum Reference at a given solution step.                |
| [`GetLineSearch`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetLineSearch)                                                           | Gets the Line Search at a given solution step.                                         |
| [`SetLineSearch`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetLineSearch)                                                           | Sets the Line Search for a given solution step.                                        |
| [`GetStabilization`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetStabilization)                                                     | Gets the Stabilization at a given solution step.                                       |
| [`SetStabilization`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetStabilization)                                                     | Sets the Stabilization for a given solution step.                                      |
| [`GetStabilizationMethod`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetStabilizationMethod)                                         | Gets the Stabilization Method at a given solution step.                                |
| [`SetStabilizationMethod`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetStabilizationMethod)                                         | Sets the Stabilization Method for a given solution step.                               |
| [`GetStabilizationEnergyDissipationRatio`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetStabilizationEnergyDissipationRatio)         | Gets the Stabilization Energy Dissipation Ratio at a given solution step.              |
| [`SetStabilizationEnergyDissipationRatio`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetStabilizationEnergyDissipationRatio)         | Sets the Stabilization Energy Dissipation Ratio for a given solution step.             |
| [`GetStabilizationDampingFactor`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetStabilizationDampingFactor)                           | Gets the Stabilization Damping Factor at a given solution step.                        |
| [`SetStabilizationDampingFactor`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetStabilizationDampingFactor)                           | Sets the Stabilization Damping Factor for a given solution step.                       |
| [`GetStabilizationFirstSubstepOption`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetStabilizationFirstSubstepOption)                 | Gets the Stabilization First Substep Option at a given solution step.                  |
| [`SetStabilizationFirstSubstepOption`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetStabilizationFirstSubstepOption)                 | Sets the Stabilization First Substep Option for a given solution step.                 |
| [`GetStabilizationForceLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetStabilizationForceLimit)                                 | Gets the Stabilization Force Limit at a given solution step.                           |
| [`SetStabilizationForceLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetStabilizationForceLimit)                                 | Sets the Stabilization Force Limit for a given solution step.                          |
| [`GetStoreResultsAt`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetStoreResultsAt)                                                   | Gets the Store Results At at a given solution step.                                    |
| [`SetStoreResultsAt`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetStoreResultsAt)                                                   | Sets the Store Results At for a given solution step.                                   |
| [`GetStoreResulsAtValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetStoreResulsAtValue)                                           | Gets the Store Results At Value at a given solution step.                              |
| [`SetStoreResulsAtValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetStoreResulsAtValue)                                           | Sets the Store Results At Value for a given solution step.                             |
| [`GetDefineBy`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetDefineBy)                                                               | Gets the Define By at a given solution step.                                           |
| [`SetDefineBy`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetDefineBy)                                                               | Sets the Define By for a given solution step.                                          |
| [`GetCarryOverTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetCarryOverTimeStep)                                             | Gets the Carry Over Time Step at a given solution step.                                |
| [`SetCarryOverTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetCarryOverTimeStep)                                             | Sets the Carry Over Time Step for a given solution step.                               |
| [`GetInitialTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetInitialTimeStep)                                                 | Gets the Initial Time Step at a given solution step.                                   |
| [`SetInitialTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetInitialTimeStep)                                                 | Sets the Initial Time Step for a given solution step.                                  |
| [`GetMinimumTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetMinimumTimeStep)                                                 | Gets the Minimum Time Step at a given solution step.                                   |
| [`SetMinimumTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetMinimumTimeStep)                                                 | Sets the Minimum Time Step for a given solution step.                                  |
| [`GetMaximumTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetMaximumTimeStep)                                                 | Gets the Maximum Time Step at a given solution step.                                   |
| [`SetMaximumTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetMaximumTimeStep)                                                 | Sets the Maximum Time Step for a given solution step.                                  |
| [`GetInitialSubsteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetInitialSubsteps)                                                 | Gets the Initial Substeps at a given solution step.                                    |
| [`SetInitialSubsteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetInitialSubsteps)                                                 | Sets the Initial Substeps for a given solution step.                                   |
| [`GetMinimumSubsteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetMinimumSubsteps)                                                 | Gets the Minimum Substeps at a given solution step.                                    |
| [`SetMinimumSubsteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetMinimumSubsteps)                                                 | Sets the Minimum Substeps for a given solution step.                                   |
| [`GetMaximumSubsteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetMaximumSubsteps)                                                 | Gets the Maximum Substeps at a given solution step.                                    |
| [`SetMaximumSubsteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetMaximumSubsteps)                                                 | Sets the Maximum Substeps for a given solution step.                                   |
| [`SetNumberOfSubSteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetNumberOfSubSteps)                                               | Sets the Number of Substeps for a given solution step.                                 |
| [`GetNumberOfSubSteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetNumberOfSubSteps)                                               | Gets the Number of Substeps for a given solution step.                                 |
| [`SetTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetTimeStep)                                                               | Sets the Time Step for a given solution step.                                          |
| [`GetTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetTimeStep)                                                               | Sets the Time Step for a given solution step.                                          |
| [`SetTimeIntegration`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetTimeIntegration)                                                 | Sets the TimeIntegration for a given solution step.                                    |
| [`SetStructuralOnly`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetStructuralOnly)                                                   | Sets the TimeIntegration Structural for a given solution step.                         |
| [`SetThermalOnly`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetThermalOnly)                                                         | Sets the TimeIntegration Thermal for a given solution step.                            |
| [`GetTimeIntegration`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetTimeIntegration)                                                 | Gets the TimeIntegration for a given solution step.                                    |
| [`GetStructuralOnly`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetStructuralOnly)                                                   | Gets the TimeIntegration Structural for a given solution step.                         |
| [`GetThermalOnly`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetThermalOnly)                                                         | Sets the TimeIntegration Thermal for a given solution step.                            |
| [`GetStepName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetStepName)                                                               | Gets the Step name at a given step.                                                    |
| [`SetStepName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetStepName)                                                               | Sets the Step name at a given step.                                                    |
| [`GetAMStepType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetAMStepType)                                                           | Gets the AM Process Step Type at a given step.                                         |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CopyTo)                                                                         | CopyTo method.                                                                         |
| [`SetCreepEffects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetCreepEffects)                                                       | Sets the Creep Effects for a given solution step.                                      |
| [`GetCreepEffects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetCreepEffects)                                                       | Gets the Creep Effects for a given solution step.                                      |
| [`SetCreepLimitRatio`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SetCreepLimitRatio)                                                 | Sets the Creep Limit Ratio for a given solution step.                                  |
| [`GetCreepLimitRatio`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetCreepLimitRatio)                                                 | Gets the Creep Limit Ratio for a given solution step.                                  |
| [`DeleteAllRestartPoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.DeleteAllRestartPoints)                                         | DeleteAllRestartPoints method.                                                         |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#id1)                                                                                             | Gets the list of children, filtered by type.                                           |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#id1)                                                                                             | Gets the list of children, filtered by type.                                           |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.AddComment)                                                                 | Creates a new child Comment.                                                           |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.AddFigure)                                                                   | Creates a new child Figure.                                                            |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.AddImage)                                                                     | Creates a new child Image.                                                             |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.Activate)                                                                     | Activate the current object.                                                           |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.Duplicate)                                                                   | Creates a copy of the current DataModelObject.                                         |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GroupAllSimilarChildren)                                       | Run the GroupAllSimilarChildren action.                                                |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GroupSimilarObjects)                                               | Run the GroupSimilarObjects action.                                                    |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.PropertyByName)                                                         | Get a property by its unique name.                                                     |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.PropertyByAPIName)                                                   | Get a property by its API name.                                                        |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CreateParameter)                                                       | Creates a new parameter for a Property.                                                |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GetParameter)                                                             | Gets the parameter corresponding to the given property.                                |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RemoveParameter)                                                       | Removes the parameter from the parameter set corresponding to the given property.      |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| [`StepName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.StepName)                                                                 | Gets or sets the Step Name.                                                                         |
| [`AMStepType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.AMStepType)                                                             | Gets or sets the AM Process Step Type.                                                              |
| [`AMSubstepsToApplyHeats`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.AMSubstepsToApplyHeats)                                     | Gets or sets the AM Substeps to Apply Heat.                                                         |
| [`AMSubstepsBetweenHeating`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.AMSubstepsBetweenHeating)                                 | Gets or sets the AM Substeps Between Heating.                                                       |
| [`AMCooldownNumberOfSubsteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.AMCooldownNumberOfSubsteps)                             | Gets or sets the AM Cooldown Number of Substeps.                                                    |
| [`CooldownTimeType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CooldownTimeType)                                                 | Gets or sets the AM Cooldown Time Type.                                                             |
| [`CooldownTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CooldownTime)                                                         | Gets or sets the AM Cooldown Time.                                                                  |
| [`LayersToBuild`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.LayersToBuild)                                                       | Gets or sets the AM Layers to Build.                                                                |
| [`ReferenceTemperatureType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ReferenceTemperatureType)                                 | Gets or sets the AM Reference Temperature Type.                                                     |
| [`ReferenceTemperature`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ReferenceTemperature)                                         | Gets or sets the AM Reference Temperature.                                                          |
| [`RelaxationTemperatureType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RelaxationTemperatureType)                               | Gets or sets the AM Relaxation Temperature Type.                                                    |
| [`NumberOfRestartPoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.NumberOfRestartPoints)                                       | Gets Number of Restart Points.                                                                      |
| [`CurrentRestartPoint`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CurrentRestartPoint)                                           | Gets or sets the Current Restart Point.                                                             |
| [`AggressiveRemeshing`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.AggressiveRemeshing)                                           | Gets or sets the AggressiveRemeshing.                                                               |
| [`SpinSoftening`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SpinSoftening)                                                       | Gets or sets the SpinSoftening.                                                                     |
| [`UserDefinedFrequencySteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.UserDefinedFrequencySteps)                               | Gets or sets the UserDefinedFrequencySteps.                                                         |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#id0)                                                                                      | Gets the internal object. For advanced usage only.                                                  |
| [`MassCoefficient`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.MassCoefficient)                                                   | Gets or sets the MassCoefficient.                                                                   |
| [`StiffnessCoefficient`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.StiffnessCoefficient)                                         | Gets or sets the StiffnessCoefficient.                                                              |
| [`DampingRatio`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.DampingRatio)                                                         | Gets or sets the DampingRatio.                                                                      |
| [`ConstantDampingRatio`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ConstantDampingRatio)                                         | Gets or sets the ConstantDampingRatio.                                                              |
| [`StructuralDampingCoefficient`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.StructuralDampingCoefficient)                         | Gets or sets the StructuralDampingCoefficient.                                                      |
| [`ContactSplitMaxNum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ContactSplitMaxNum)                                             | Gets or sets the ContactSplitMaxNum.                                                                |
| [`ChargeConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ChargeConvergenceTolerance)                             | Gets or sets the ChargeConvergenceTolerance.                                                        |
| [`CurrentConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CurrentConvergenceTolerance)                           | Gets or sets the CurrentConvergenceTolerance.                                                       |
| [`EmagAMPSConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.EmagAMPSConvergenceTolerance)                         | Gets or sets the EmagAMPSConvergenceTolerance.                                                      |
| [`EmagCSGConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.EmagCSGConvergenceTolerance)                           | Gets or sets the EmagCSGConvergenceTolerance.                                                       |
| [`EnergyConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.EnergyConvergenceTolerance)                             | Gets or sets the EnergyConvergenceTolerance.                                                        |
| [`HeatConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.HeatConvergenceTolerance)                                 | Gets or sets the HeatConvergenceTolerance.                                                          |
| [`TemperatureConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.TemperatureConvergenceTolerance)                   | Gets or sets the TemperatureConvergenceTolerance.                                                   |
| [`VoltageConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.VoltageConvergenceTolerance)                           | Gets or sets the VoltageConvergenceTolerance.                                                       |
| [`CreepLimitRatio`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CreepLimitRatio)                                                   | Gets or sets the CreepLimitRatio.                                                                   |
| [`CurrentStepNumberHarmonic`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CurrentStepNumberHarmonic)                               | Gets or sets the CurrentStepNumberHarmonic.                                                         |
| [`CurrentStepNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CurrentStepNumber)                                               | Gets or sets the CurrentStepNumber.                                                                 |
| [`EngineOrderofExcitation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.EngineOrderofExcitation)                                   | Gets or sets the EngineOrderofExcitation.                                                           |
| [`MaximumHarmonicIndex`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.MaximumHarmonicIndex)                                         | Gets or sets the MaximumHarmonicIndex.                                                              |
| [`MinimumHarmonicIndex`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.MinimumHarmonicIndex)                                         | Gets or sets the MinimumHarmonicIndex.                                                              |
| [`HarmonicIndexInterval`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.HarmonicIndexInterval)                                       | Gets or sets the HarmonicIndexInterval.                                                             |
| [`ClusterNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ClusterNumber)                                                       | Gets or sets the ClusterNumber.                                                                     |
| [`SolutionIntervals`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SolutionIntervals)                                               | Gets or sets the SolutionIntervals.                                                                 |
| [`KrylovSubspaceDimension`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.KrylovSubspaceDimension)                                   | Gets or sets the KrylovSubspaceDimension.                                                           |
| [`KrylovResidualTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.KrylovResidualTolerance)                                   | Gets or sets the KrylovResidualTolerance.                                                           |
| [`HarmonicOrders`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.HarmonicOrders)                                                     | Gets or sets the HarmonicOrders.                                                                    |
| [`InitialSubsteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.InitialSubsteps)                                                   | Gets or sets the InitialSubsteps.                                                                   |
| [`InverseOptionEndStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.InverseOptionEndStep)                                         | Gets or sets the InverseOptionEndStep.                                                              |
| [`MaximumSubsteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.MaximumSubsteps)                                                   | Gets or sets the MaximumSubsteps.                                                                   |
| [`MeshLoadStepValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.MeshLoadStepValue)                                               | Gets or sets the MeshLoadStepValue.                                                                 |
| [`MinimumSubsteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.MinimumSubsteps)                                                   | Gets or sets the MinimumSubsteps.                                                                   |
| [`ModalNumberOfPoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ModalNumberOfPoints)                                           | Gets or sets the ModalNumberOfPoints.                                                               |
| [`ModeSignificanceLevel`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ModeSignificanceLevel)                                       | Gets or sets the ModeSignificanceLevel.                                                             |
| [`GlobalSizeRatioQualityImprovement`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GlobalSizeRatioQualityImprovement)               | Gets or sets the GlobalSizeRatioQualityImprovement.                                                 |
| [`GlobalSizeRatioQualityRefinement`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GlobalSizeRatioQualityRefinement)                 | Gets or sets the GlobalSizeRatioQualityRefinement.                                                  |
| [`NumberOfSculptedLayersQualityImprovement`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.NumberOfSculptedLayersQualityImprovement) | Gets or sets the NumberOfSculptedLayersQualityImprovement.                                          |
| [`NumberOfSculptedLayersRefinement`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.NumberOfSculptedLayersRefinement)                 | Gets or sets the NumberOfSculptedLayersRefinement.                                                  |
| [`RemeshingToleranceQualityImprovement`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RemeshingToleranceQualityImprovement)         | Gets or sets the RemeshingToleranceQualityImprovement.                                              |
| [`RemeshingToleranceRefinement`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RemeshingToleranceRefinement)                         | Gets or sets the RemeshingToleranceRefinement.                                                      |
| [`StoreResulsAtValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.StoreResulsAtValue)                                             | Gets or sets the StoreResulsAtValue.                                                                |
| [`NumberOfModesToUse`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.NumberOfModesToUse)                                             | Gets or sets the NumberOfModesToUse.                                                                |
| [`NumberOfRPMs`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.NumberOfRPMs)                                                         | Gets or sets the NumberOfRPMs.                                                                      |
| [`NumberOfSteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.NumberOfSteps)                                                       | Gets or sets the NumberOfSteps.                                                                     |
| [`NumberOfSubSteps`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.NumberOfSubSteps)                                                 | Gets or sets the NumberOfSubSteps.                                                                  |
| [`NumericalDampingValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.NumericalDampingValue)                                       | Gets or sets the NumericalDampingValue.                                                             |
| [`NumLoadVectors`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.NumLoadVectors)                                                     | Gets or sets the NumLoadVectors.                                                                    |
| [`MaximumModesToFind`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.MaximumModesToFind)                                             | Gets or sets the MaximumModesToFind.                                                                |
| [`NumberOfZones`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.NumberOfZones)                                                       | Gets or sets the NumberOfZones.                                                                     |
| [`AxisymmetryDivisions`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.AxisymmetryDivisions)                                         | Gets or sets the AxisymmetryDivisions.                                                              |
| [`HemicubeResolution`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.HemicubeResolution)                                             | Gets or sets the HemicubeResolution.                                                                |
| [`FluxConvergence`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.FluxConvergence)                                                   | Gets or sets the FluxConvergence.                                                                   |
| [`MaximumIteration`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.MaximumIteration)                                                 | Gets or sets the MaximumIteration.                                                                  |
| [`OverRelaxation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.OverRelaxation)                                                     | Gets or sets the OverRelaxation.                                                                    |
| [`ReformulationTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ReformulationTolerance)                                     | Gets or sets the ReformulationTolerance.                                                            |
| [`RestartAtLoadStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RestartAtLoadStep)                                               | Gets the RestartAtLoadStep.                                                                         |
| [`RestartAtSubstep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RestartAtSubstep)                                                 | Gets the RestartAtSubstep.                                                                          |
| [`RestartAtTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RestartAtTime)                                                       | Gets the RestartAtTime.                                                                             |
| [`RpmClusterNumber`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RpmClusterNumber)                                                 | Gets or sets the RpmClusterNumber.                                                                  |
| [`RpmSolutionIntervals`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RpmSolutionIntervals)                                         | Gets or sets the RpmSolutionIntervals.                                                              |
| [`MaximumPointsToSavePerStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.MaximumPointsToSavePerStep)                             | Gets or sets the MaximumPointsToSavePerStep.                                                        |
| [`SaveSpecifiedLoadStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SaveSpecifiedLoadStep)                                       | Gets or sets the SaveSpecifiedLoadStep.                                                             |
| [`LoadStepValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.LoadStepValue)                                                       | Gets or sets the LoadStepValue.                                                                     |
| [`SignificanceThreshold`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SignificanceThreshold)                                       | Gets or sets the SignificanceThreshold.                                                             |
| [`StabilizationDampingFactor`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.StabilizationDampingFactor)                             | Gets or sets the StabilizationDampingFactor.                                                        |
| [`StabilizationEnergyDissipationRatio`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.StabilizationEnergyDissipationRatio)           | Gets or sets the StabilizationEnergyDissipationRatio.                                               |
| [`StabilizationForceLimit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.StabilizationForceLimit)                                   | Gets or sets the StabilizationForceLimit.                                                           |
| [`TransientApplicationUserDefined`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.TransientApplicationUserDefined)                   | Gets or sets the TransientApplicationUserDefined.                                                   |
| [`SpringStiffnessFactor`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SpringStiffnessFactor)                                       | Gets or sets the SpringStiffnessFactor.                                                             |
| [`RelaxationTemperature`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RelaxationTemperature)                                       | Gets or sets the RelaxationTemperature.                                                             |
| [`Frequency`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.Frequency)                                                               | Gets or sets the Frequency.                                                                         |
| [`CentralFrequency`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CentralFrequency)                                                 | Gets or sets the CentralFrequency.                                                                  |
| [`ChargeConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ChargeConvergenceMinimumReference)               | Gets or sets the ChargeConvergenceMinimumReference.                                                 |
| [`ChargeConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ChargeConvergenceValue)                                     | Gets or sets the ChargeConvergenceValue.                                                            |
| [`CurrentConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CurrentConvergenceMinimumReference)             | Gets or sets the CurrentConvergenceMinimumReference.                                                |
| [`CurrentConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CurrentConvergenceValue)                                   | Gets or sets the CurrentConvergenceValue.                                                           |
| [`DisplacementConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.DisplacementConvergenceMinimumReference)   | Gets or sets the DisplacementConvergenceMinimumReference.                                           |
| [`DisplacementConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.DisplacementConvergenceTolerance)                 | Gets or sets the DisplacementConvergenceTolerance.                                                  |
| [`DisplacementConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.DisplacementConvergenceValue)                         | Gets or sets the DisplacementConvergenceValue.                                                      |
| [`EmagAMPSConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.EmagAMPSConvergenceMinimumReference)           | Gets or sets the EmagAMPSConvergenceMinimumReference.                                               |
| [`EmagAMPSConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.EmagAMPSConvergenceValue)                                 | Gets or sets the EmagAMPSConvergenceValue.                                                          |
| [`EmagCSGConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.EmagCSGConvergenceMinimumReference)             | Gets or sets the EmagCSGConvergenceMinimumReference.                                                |
| [`EmagCSGConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.EmagCSGConvergenceValue)                                   | Gets or sets the EmagCSGConvergenceValue.                                                           |
| [`EnergyConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.EnergyConvergenceMinimumReference)               | Gets or sets the EnergyConvergenceMinimumReference.                                                 |
| [`EnergyConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.EnergyConvergenceValue)                                     | Gets or sets the EnergyConvergenceValue.                                                            |
| [`ForceConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ForceConvergenceMinimumReference)                 | Gets or sets the ForceConvergenceMinimumReference.                                                  |
| [`ForceConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ForceConvergenceTolerance)                               | Gets or sets the ForceConvergenceTolerance.                                                         |
| [`ForceConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ForceConvergenceValue)                                       | Gets or sets the ForceConvergenceValue.                                                             |
| [`HeatConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.HeatConvergenceMinimumReference)                   | Gets or sets the HeatConvergenceMinimumReference.                                                   |
| [`HeatConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.HeatConvergenceValue)                                         | Gets or sets the HeatConvergenceValue.                                                              |
| [`MomentConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.MomentConvergenceMinimumReference)               | Gets or sets the MomentConvergenceMinimumReference.                                                 |
| [`MomentConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.MomentConvergenceTolerance)                             | Gets or sets the MomentConvergenceTolerance.                                                        |
| [`MomentConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.MomentConvergenceValue)                                     | Gets or sets the MomentConvergenceValue.                                                            |
| [`RotationConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RotationConvergenceMinimumReference)           | Gets or sets the RotationConvergenceMinimumReference.                                               |
| [`RotationConvergenceTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RotationConvergenceTolerance)                         | Gets or sets the RotationConvergenceTolerance.                                                      |
| [`TemperatureConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.TemperatureConvergenceMinimumReference)     | Gets or sets the TemperatureConvergenceMinimumReference.                                            |
| [`TemperatureConvergenceInputValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.TemperatureConvergenceInputValue)                 | Gets or sets the TemperatureConvergenceInputValue.                                                  |
| [`VoltageConvergenceMinimumReference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.VoltageConvergenceMinimumReference)             | Gets or sets the VoltageConvergenceMinimumReference.                                                |
| [`VoltageConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.VoltageConvergenceValue)                                   | Gets or sets the VoltageConvergenceValue.                                                           |
| [`RemovalDirection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RemovalDirection)                                                 | Gets or sets the RemovalDirection.                                                                  |
| [`RemovalStepSize`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RemovalStepSize)                                                   | Gets or sets the RemovalStepSize.                                                                   |
| [`StepEndTime`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.StepEndTime)                                                           | Gets or sets the StepEndTime.                                                                       |
| [`MinimumElementSize`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.MinimumElementSize)                                             | Gets or sets the Minimum Element Size property for Geometry Based Adaptivity.                       |
| [`RangeMaximum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RangeMaximum)                                                         | Gets or sets the Range Maximum property in Options group of Analysis Settings in Harmonic Analysis. |
| [`RangeMinimum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RangeMinimum)                                                         | Gets or sets the Range Minimum property in Options group of Analysis Settings in Harmonic Analysis. |
| [`KrylovSubspaceFrequency`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.KrylovSubspaceFrequency)                                   | Gets or sets the KrylovSubspaceFrequency.                                                           |
| [`ModalRangeMaximum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ModalRangeMaximum)                                               | Gets or sets the ModalRangeMaximum.                                                                 |
| [`ModalRangeMinimum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ModalRangeMinimum)                                               | Gets or sets the ModalRangeMinimum.                                                                 |
| [`InitialTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.InitialTimeStep)                                                   | Gets or sets the InitialTimeStep.                                                                   |
| [`SearchRangeMaximum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SearchRangeMaximum)                                             | Gets or sets the Range Maximum property in Options group of Analysis Settings in Modal Analysis.    |
| [`MaximumTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.MaximumTimeStep)                                                   | Gets or sets the MaximumTimeStep.                                                                   |
| [`SearchRangeMinimum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SearchRangeMinimum)                                             | Gets or sets the Range Minimum property in Options group of Analysis Settings in Modal Analysis.    |
| [`MinimumTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.MinimumTimeStep)                                                   | Gets or sets the MinimumTimeStep.                                                                   |
| [`BoundaryAngle`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.BoundaryAngle)                                                       | Gets or sets the BoundaryAngle.                                                                     |
| [`EdgeSplittingAngle`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.EdgeSplittingAngle)                                             | Gets or sets the EdgeSplittingAngle.                                                                |
| [`SolverTolerance`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SolverTolerance)                                                   | Gets or sets the SolverTolerance.                                                                   |
| [`RpmValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RpmValue)                                                                 | Gets or sets the RpmValue.                                                                          |
| [`RpmCentralFrequency`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RpmCentralFrequency)                                           | Gets or sets the RpmCentralFrequency.                                                               |
| [`RpmRangeMaximum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RpmRangeMaximum)                                                   | Gets or sets the RpmRangeMaximum.                                                                   |
| [`RpmRangeMinimum`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RpmRangeMinimum)                                                   | Gets or sets the RpmRangeMinimum.                                                                   |
| [`TimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.TimeStep)                                                                 | Gets or sets the TimeStep.                                                                          |
| [`SpringStiffnessValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SpringStiffnessValue)                                         | Gets or sets the SpringStiffnessValue.                                                              |
| [`BaseRemovalType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.BaseRemovalType)                                                   | Gets or sets the BaseRemovalType.                                                                   |
| [`StiffnessCoefficientDefineBy`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.StiffnessCoefficientDefineBy)                         | Gets or sets the StiffnessCoefficientDefineBy.                                                      |
| [`CacheResultsInMemory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CacheResultsInMemory)                                         | Gets or sets the CacheResultsInMemory.                                                              |
| [`ParticipationFactor`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ParticipationFactor)                                           | Gets or sets the ParticipationFactor.                                                               |
| [`StoreResultsAt`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.StoreResultsAt)                                                     | Gets or sets the StoreResultsAt.                                                                    |
| [`ConstantDamping`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ConstantDamping)                                                   | Gets or sets the ConstantDamping.                                                                   |
| [`ContactSplit`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ContactSplit)                                                         | Gets or sets the ContactSplit.                                                                      |
| [`ContactSummary`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ContactSummary)                                                     | Gets or sets the ContactSummary.                                                                    |
| [`ChargeConvergence`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ChargeConvergence)                                               | Gets or sets the ChargeConvergence.                                                                 |
| [`CurrentConvergence`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CurrentConvergence)                                             | Gets or sets the CurrentConvergence.                                                                |
| [`DisplacementConvergence`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.DisplacementConvergence)                                   | Gets or sets the DisplacementConvergence.                                                           |
| [`AMPSConvergence`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.AMPSConvergence)                                                   | Gets or sets the AMPSConvergence.                                                                   |
| [`CSGConvergence`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CSGConvergence)                                                     | Gets or sets the CSGConvergence.                                                                    |
| [`EnergyConvergence`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.EnergyConvergence)                                               | Gets or sets the EnergyConvergence.                                                                 |
| [`ForceConvergence`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ForceConvergence)                                                 | Gets or sets the ForceConvergence.                                                                  |
| [`HeatConvergence`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.HeatConvergence)                                                   | Gets or sets the HeatConvergence.                                                                   |
| [`MomentConvergence`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.MomentConvergence)                                               | Gets or sets the MomentConvergence.                                                                 |
| [`RotationConvergence`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RotationConvergence)                                           | Gets or sets the RotationConvergence.                                                               |
| [`TemperatureConvergence`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.TemperatureConvergence)                                     | Gets or sets the TemperatureConvergence.                                                            |
| [`TemperatureConvergenceValue`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.TemperatureConvergenceValue)                           | Gets or sets the TemperatureConvergenceValue.                                                       |
| [`VoltageConvergence`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.VoltageConvergence)                                             | Gets or sets the VoltageConvergence.                                                                |
| [`CoriolisEffectApplied`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CoriolisEffectApplied)                                       | Gets or sets the CoriolisEffectApplied.                                                             |
| [`CreepEffects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CreepEffects)                                                         | Gets or sets the CreepEffects.                                                                      |
| [`HarmonicIndexRange`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.HarmonicIndexRange)                                             | Gets or sets the HarmonicIndexRange.                                                                |
| [`DampingDefineBy`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.DampingDefineBy)                                                   | Gets or sets the DampingDefineBy.                                                                   |
| [`FarFieldRadiationSurface`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.FarFieldRadiationSurface)                                 | Gets or sets the FarFieldRadiationSurface.                                                          |
| [`ExpandResultsFrom`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ExpandResultsFrom)                                               | Gets or sets the ExpandResultsFrom.                                                                 |
| [`FrequencySpacing`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.FrequencySpacing)                                                 | Gets or sets the FrequencySpacing.                                                                  |
| [`FutureAnalysis`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.FutureAnalysis)                                                     | Gets or sets the FutureAnalysis.                                                                    |
| [`GeneralMiscellaneousOption`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GeneralMiscellaneousOption)                             | Gets or sets the GeneralMiscellaneousOption.                                                        |
| [`MultistepType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.MultistepType)                                                       | Gets or sets the MultistepType.                                                                     |
| [`ModalFrequencyRange`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ModalFrequencyRange)                                           | Gets or sets the ModalFrequencyRange.                                                               |
| [`StoreResultsAtAllFrequencies`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.StoreResultsAtAllFrequencies)                         | Gets or sets the StoreResultsAtAllFrequencies.                                                      |
| [`SolutionMethod`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SolutionMethod)                                                     | Gets or sets the SolutionMethod.                                                                    |
| [`IncludeNegativeLoadMultiplier`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.IncludeNegativeLoadMultiplier)                       | Gets or sets the IncludeNegativeLoadMultiplier.                                                     |
| [`LineSearch`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.LineSearch)                                                             | Gets or sets the LineSearch.                                                                        |
| [`GenerateMeshRestartPoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GenerateMeshRestartPoints)                               | Gets or sets the GenerateMeshRestartPoints.                                                         |
| [`MeshRetainFilesAfterFullSolve`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.MeshRetainFilesAfterFullSolve)                       | Gets or sets the MeshRetainFilesAfterFullSolve.                                                     |
| [`MeshSaveAtLoadStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.MeshSaveAtLoadStep)                                             | Gets or sets the MeshSaveAtLoadStep.                                                                |
| [`MeshSaveAtSubstep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.MeshSaveAtSubstep)                                               | Gets or sets the MeshSaveAtSubstep.                                                                 |
| [`ModeReuse`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ModeReuse)                                                               | Gets or sets the ModeReuse.                                                                         |
| [`ModesCombinationType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ModesCombinationType)                                         | Gets or sets the ModesCombinationType.                                                              |
| [`ModeSelectionMethod`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ModeSelectionMethod)                                           | Gets or sets the ModeSelectionMethod.                                                               |
| [`OnDemandExpansionOption`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.OnDemandExpansionOption)                                   | Gets or sets the OnDemandExpansionOption.                                                           |
| [`NewtonRaphsonOption`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.NewtonRaphsonOption)                                           | Gets or sets the NewtonRaphsonOption.                                                               |
| [`NodalForces`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.NodalForces)                                                           | Gets or sets the NodalForces.                                                                       |
| [`ProjectToGeometry`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ProjectToGeometry)                                               | Gets or sets the ProjectToGeometry.                                                                 |
| [`RefinementAlgorithm`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RefinementAlgorithm)                                           | Gets or sets the RefinementAlgorithm.                                                               |
| [`RemeshingGradient`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RemeshingGradient)                                               | Gets or sets the RemeshingGradient.                                                                 |
| [`NonLinearFormulation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.NonLinearFormulation)                                         | Gets or sets the NonLinearFormulation.                                                              |
| [`NumericalDamping`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.NumericalDamping)                                                 | Gets or sets the NumericalDamping.                                                                  |
| [`Expansion`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.Expansion)                                                               | Gets the Expansion.                                                                                 |
| [`ViewFactorMethod`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ViewFactorMethod)                                                 | Gets or sets the ViewFactorMethod.                                                                  |
| [`RadiositySolver`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RadiositySolver)                                                   | Gets or sets the RadiositySolver.                                                                   |
| [`CombineRestartFiles`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CombineRestartFiles)                                           | Gets or sets the CombineRestartFiles.                                                               |
| [`GenerateRestartPoints`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GenerateRestartPoints)                                       | Gets or sets the GenerateRestartPoints.                                                             |
| [`RetainFilesAfterFullSolve`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RetainFilesAfterFullSolve)                               | Gets or sets the RetainFilesAfterFullSolve.                                                         |
| [`RestartType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RestartType)                                                           | Gets or sets the RestartType.                                                                       |
| [`ResultFileCompression`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ResultFileCompression)                                       | Gets or sets the ResultFileCompression.                                                             |
| [`RpmFrequencySpacing`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RpmFrequencySpacing)                                           | Gets or sets the RpmFrequencySpacing.                                                               |
| [`SaveAtLoadStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SaveAtLoadStep)                                                     | Gets or sets the SaveAtLoadStep.                                                                    |
| [`SaveAtSubstep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SaveAtSubstep)                                                       | Gets or sets the SaveAtSubstep.                                                                     |
| [`ScatteredFieldFormulation`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ScatteredFieldFormulation)                               | Gets or sets the ScatteredFieldFormulation.                                                         |
| [`ScatteringOutputType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ScatteringOutputType)                                         | Gets or sets the ScatteringOutputType.                                                              |
| [`SolverUnitSystem`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SolverUnitSystem)                                                 | Gets or sets the SolverUnitSystem.                                                                  |
| [`SolverPivotChecking`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SolverPivotChecking)                                           | Gets or sets the SolverPivotChecking.                                                               |
| [`SolverType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SolverType)                                                             | Gets or sets the SolverType.                                                                        |
| [`SolverUnits`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SolverUnits)                                                           | Gets or sets the SolverUnits.                                                                       |
| [`SpectrumType`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SpectrumType)                                                         | Gets or sets the SpectrumType.                                                                      |
| [`Stabilization`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.Stabilization)                                                       | Gets or sets the Stabilization.                                                                     |
| [`StabilizationActivationForFirstSubstep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.StabilizationActivationForFirstSubstep)     | Gets or sets the StabilizationActivationForFirstSubstep.                                            |
| [`StabilizationMethod`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.StabilizationMethod)                                           | Gets or sets the StabilizationMethod.                                                               |
| [`StoreModalResults`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.StoreModalResults)                                               | Gets or sets the StoreModalResults.                                                                 |
| [`DefineBy`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.DefineBy)                                                                 | Gets or sets the DefineBy.                                                                          |
| [`TransientApplication`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.TransientApplication)                                         | Gets or sets the TransientApplication.                                                              |
| [`AutomaticTimeStepping`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.AutomaticTimeStepping)                                       | Gets or sets the AutomaticTimeStepping.                                                             |
| [`RetainModesymFileAfterSolve`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.RetainModesymFileAfterSolve)                           | Gets or sets the RetainModesymFileAfterSolve.                                                       |
| [`WeakSprings`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.WeakSprings)                                                           | Gets or sets the WeakSprings.                                                                       |
| [`SpringStiffness`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SpringStiffness)                                                   | Gets or sets the SpringStiffness.                                                                   |
| [`IgnoreAcousticDamping`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.IgnoreAcousticDamping)                                       | Gets or sets the IgnoreAcousticDamping.                                                             |
| [`CalculateAcceleration`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CalculateAcceleration)                                       | Gets or sets the CalculateAcceleration.                                                             |
| [`BackStress`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.BackStress)                                                             | Gets or sets the BackStress.                                                                        |
| [`ContactMiscellaneous`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ContactMiscellaneous)                                         | Gets or sets the ContactMiscellaneous.                                                              |
| [`CStarIntegral`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CStarIntegral)                                                       | Gets or sets the CStarIntegral.                                                                     |
| [`ElementCurrentDensity`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ElementCurrentDensity)                                       | Gets or sets the ElementCurrentDensity.                                                             |
| [`FieldIntensityandFluxDensity`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.FieldIntensityandFluxDensity)                         | Gets or sets the FieldIntensityandFluxDensity.                                                      |
| [`ElectromagneticNodalForces`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ElectromagneticNodalForces)                             | Gets or sets the ElectromagneticNodalForces.                                                        |
| [`ContactData`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ContactData)                                                           | Gets or sets the ContactData.                                                                       |
| [`CalculateVolumeEnergy`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CalculateVolumeEnergy)                                       | Gets or sets the CalculateVolumeEnergy.                                                             |
| [`NonlinearData`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.NonlinearData)                                                       | Gets or sets the NonlinearData.                                                                     |
| [`CalculateEnergy`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CalculateEnergy)                                                   | Gets or sets the CalculateEnergy.                                                                   |
| [`CalculateEulerAngles`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CalculateEulerAngles)                                         | Gets or sets the CalculateEulerAngles.                                                              |
| [`HeatGenerationRate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.HeatGenerationRate)                                             | Gets or sets the HeatGenerationRate.                                                                |
| [`JIntegral`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.JIntegral)                                                               | Gets or sets the JIntegral.                                                                         |
| [`MaterialForce`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.MaterialForce)                                                       | Gets or sets the MaterialForce.                                                                     |
| [`CalculateReactions`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CalculateReactions)                                             | Gets or sets the CalculateReactions.                                                                |
| [`SIFS`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SIFS)                                                                         | Gets or sets the SIFS.                                                                              |
| [`Strain`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.Strain)                                                                     | Gets or sets the Strain.                                                                            |
| [`Stress`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.Stress)                                                                     | Gets or sets the Stress.                                                                            |
| [`CalculateThermalFlux`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CalculateThermalFlux)                                         | Gets or sets the CalculateThermalFlux.                                                              |
| [`TStress`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.TStress)                                                                   | Gets or sets the TStress.                                                                           |
| [`CalculateVelocity`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CalculateVelocity)                                               | Gets or sets the CalculateVelocity.                                                                 |
| [`CalculateVelocityAndAcceleration`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CalculateVelocityAndAcceleration)                 | Gets or sets the CalculateVelocityAndAcceleration.                                                  |
| [`CampbellDiagram`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CampbellDiagram)                                                   | Gets or sets the CampbellDiagram.                                                                   |
| [`CarryOverTimeStep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CarryOverTimeStep)                                               | Gets or sets the CarryOverTimeStep.                                                                 |
| [`DeleteUnneededFiles`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.DeleteUnneededFiles)                                           | Gets or sets the DeleteUnneededFiles.                                                               |
| [`CyclicModeSuperposition`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.CyclicModeSuperposition)                                   | Gets or sets the CyclicModeSuperposition.                                                           |
| [`Damped`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.Damped)                                                                     | Gets or sets the Damped.                                                                            |
| [`EqvDampingRatioFromModal`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.EqvDampingRatioFromModal)                                 | Gets or sets the EqvDampingRatioFromModal.                                                          |
| [`ExcludeInsignificantModes`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ExcludeInsignificantModes)                               | Gets or sets the ExcludeInsignificantModes.                                                         |
| [`ExportHighStrains`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ExportHighStrains)                                               | Gets or sets the ExportHighStrains.                                                                 |
| [`ExportLayerEndTemperature`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ExportLayerEndTemperature)                               | Gets or sets the ExportLayerEndTemperature.                                                         |
| [`ExportRecoaterInterference`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ExportRecoaterInterference)                             | Gets or sets the ExportRecoaterInterference.                                                        |
| [`FractureSolverControls`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.FractureSolverControls)                                     | Gets or sets the FractureSolverControls.                                                            |
| [`GeneralMiscellaneous`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.GeneralMiscellaneous)                                         | Gets or sets the GeneralMiscellaneous.                                                              |
| [`ClusterResults`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ClusterResults)                                                     | Gets or sets the ClusterResults.                                                                    |
| [`UserDefinedFrequencies`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.UserDefinedFrequencies)                                     | Gets or sets the UserDefinedFrequencies.                                                            |
| [`Multistep`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.Multistep)                                                               | Gets or sets the Multistep.                                                                         |
| [`IncludeResidualVector`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.IncludeResidualVector)                                       | Gets or sets the IncludeResidualVector.                                                             |
| [`InverseOption`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.InverseOption)                                                       | Gets or sets the InverseOption.                                                                     |
| [`KeepModalResults`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.KeepModalResults)                                                 | Gets or sets the KeepModalResults.                                                                  |
| [`KeepPreStressLoadPattern`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.KeepPreStressLoadPattern)                                 | Gets or sets the KeepPreStressLoadPattern.                                                          |
| [`NonLinearSolution`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.NonLinearSolution)                                               | Gets the NonLinearSolution.                                                                         |
| [`QuasiStaticSolution`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.QuasiStaticSolution)                                           | Gets or sets the QuasiStaticSolution.                                                               |
| [`LimitSearchToRange`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.LimitSearchToRange)                                             | Gets or sets the LimitSearchToRange.                                                                |
| [`SaveMAPDLDB`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SaveMAPDLDB)                                                           | Gets or sets the SaveMAPDLDB.                                                                       |
| [`StoreComplexSolution`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.StoreComplexSolution)                                         | Gets or sets the StoreComplexSolution.                                                              |
| [`InertiaRelief`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.InertiaRelief)                                                       | Gets or sets the InertiaRelief.                                                                     |
| [`LargeDeflection`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.LargeDeflection)                                                   | Gets or sets the LargeDeflection.                                                                   |
| [`TimeIntegration`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.TimeIntegration)                                                   | Gets or sets the TimeIntegration.                                                                   |
| [`ElectricOnly`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ElectricOnly)                                                         | Gets or sets the ElectricOnly.                                                                      |
| [`StructuralOnly`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.StructuralOnly)                                                     | Gets or sets the StructuralOnly.                                                                    |
| [`ThermalOnly`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ThermalOnly)                                                           | Gets or sets the ThermalOnly.                                                                       |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.DataModelObjectCategory)                                   | Gets the current DataModelObject’s category.                                                        |
| [`Graph`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.Graph)                                                                       | Graph property.                                                                                     |
| [`ScratchSolverFilesDirectory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.ScratchSolverFilesDirectory)                           | Gets the ScratchSolverFilesDirectory.                                                               |
| [`SolverFilesDirectory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.SolverFilesDirectory)                                         | Gets the SolverFilesDirectory.                                                                      |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.Children)                                                                 | Gets the list of children.                                                                          |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.Comments)                                                                 | Gets the list of associated comments.                                                               |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.Figures)                                                                   | Gets the list of associated figures.                                                                |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.Images)                                                                     | Gets the list of associated images.                                                                 |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#id0)                                                                                      | Gets the internal object. For advanced usage only.                                                  |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.Properties)                                                             | Gets the list of properties for this object.                                                        |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AnalysisSettings/ANSYSAnalysisSettings.md#ANSYSAnalysisSettings.VisibleProperties)                                               | Gets the list of properties that are visible for this object.                                       |

<a id="property-detail"></a>

## Property detail

<a id="ANSYSAnalysisSettings.StepName"></a>

### *property* ANSYSAnalysisSettings.StepName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Step Name.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.AMStepType"></a>

### *property* ANSYSAnalysisSettings.AMStepType *: [Ansys.Mechanical.DataModel.Enums.AMProcessStepType](../../../../Mechanical/DataModel/Enums/AMProcessStepType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMProcessStepType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ANSYSAnalysisSettings.CooldownTimeType *: [Ansys.Mechanical.DataModel.Enums.AMCooldownTimeType](../../../../Mechanical/DataModel/Enums/AMCooldownTimeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMCooldownTimeType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ANSYSAnalysisSettings.ReferenceTemperatureType *: [Ansys.Mechanical.DataModel.Enums.AMReferenceTemperatureType](../../../../Mechanical/DataModel/Enums/AMReferenceTemperatureType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMReferenceTemperatureType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Reference Temperature Type.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ReferenceTemperature"></a>

### *property* ANSYSAnalysisSettings.ReferenceTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AM Reference Temperature.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RelaxationTemperatureType"></a>

### *property* ANSYSAnalysisSettings.RelaxationTemperatureType *: [Ansys.Mechanical.DataModel.Enums.AMRelaxationTemperatureType](../../../../Mechanical/DataModel/Enums/AMRelaxationTemperatureType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMRelaxationTemperatureType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ANSYSAnalysisSettings.SpinSoftening *: [Ansys.Mechanical.DataModel.Enums.SpinSofteningType](../../../../Mechanical/DataModel/Enums/SpinSofteningType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SpinSofteningType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ANSYSAnalysisSettings.BaseRemovalType *: [Ansys.Mechanical.DataModel.Enums.AMBaseRemovalType](../../../../Mechanical/DataModel/Enums/AMBaseRemovalType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMBaseRemovalType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BaseRemovalType.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StiffnessCoefficientDefineBy"></a>

### *property* ANSYSAnalysisSettings.StiffnessCoefficientDefineBy *: [Ansys.Mechanical.DataModel.Enums.DampingType](../../../../Mechanical/DataModel/Enums/DampingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StiffnessCoefficientDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CacheResultsInMemory"></a>

### *property* ANSYSAnalysisSettings.CacheResultsInMemory *: [Ansys.Mechanical.DataModel.Enums.CacheResultsInMemory](../../../../Mechanical/DataModel/Enums/CacheResultsInMemory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CacheResultsInMemory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CacheResultsInMemory.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ParticipationFactor"></a>

### *property* ANSYSAnalysisSettings.ParticipationFactor *: [Ansys.Mechanical.DataModel.Enums.CalculateParticipationFactorResult](../../../../Mechanical/DataModel/Enums/CalculateParticipationFactorResult.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CalculateParticipationFactorResult) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ParticipationFactor.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StoreResultsAt"></a>

### *property* ANSYSAnalysisSettings.StoreResultsAt *: [Ansys.Mechanical.DataModel.Enums.TimePointsOptions](../../../../Mechanical/DataModel/Enums/TimePointsOptions.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TimePointsOptions) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreResultsAt.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ConstantDamping"></a>

### *property* ANSYSAnalysisSettings.ConstantDamping *: [Ansys.Mechanical.DataModel.Enums.ConstantDampingType](../../../../Mechanical/DataModel/Enums/ConstantDampingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConstantDampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ConstantDamping.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ContactSplit"></a>

### *property* ANSYSAnalysisSettings.ContactSplit *: [Ansys.Mechanical.DataModel.Enums.ContactSplitType](../../../../Mechanical/DataModel/Enums/ContactSplitType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactSplitType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSplit.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ContactSummary"></a>

### *property* ANSYSAnalysisSettings.ContactSummary *: [Ansys.Mechanical.DataModel.Enums.ContactSummaryType](../../../../Mechanical/DataModel/Enums/ContactSummaryType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ContactSummaryType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactSummary.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ChargeConvergence"></a>

### *property* ANSYSAnalysisSettings.ChargeConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ChargeConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CurrentConvergence"></a>

### *property* ANSYSAnalysisSettings.CurrentConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CurrentConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.DisplacementConvergence"></a>

### *property* ANSYSAnalysisSettings.DisplacementConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DisplacementConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.AMPSConvergence"></a>

### *property* ANSYSAnalysisSettings.AMPSConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AMPSConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CSGConvergence"></a>

### *property* ANSYSAnalysisSettings.CSGConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CSGConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.EnergyConvergence"></a>

### *property* ANSYSAnalysisSettings.EnergyConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnergyConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ForceConvergence"></a>

### *property* ANSYSAnalysisSettings.ForceConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ForceConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.HeatConvergence"></a>

### *property* ANSYSAnalysisSettings.HeatConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HeatConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MomentConvergence"></a>

### *property* ANSYSAnalysisSettings.MomentConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MomentConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RotationConvergence"></a>

### *property* ANSYSAnalysisSettings.RotationConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RotationConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.TemperatureConvergence"></a>

### *property* ANSYSAnalysisSettings.TemperatureConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemperatureConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.TemperatureConvergenceValue"></a>

### *property* ANSYSAnalysisSettings.TemperatureConvergenceValue *: [Ansys.Mechanical.DataModel.Enums.NonLinearValueType](../../../../Mechanical/DataModel/Enums/NonLinearValueType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NonLinearValueType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TemperatureConvergenceValue.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.VoltageConvergence"></a>

### *property* ANSYSAnalysisSettings.VoltageConvergence *: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VoltageConvergence.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CoriolisEffectApplied"></a>

### *property* ANSYSAnalysisSettings.CoriolisEffectApplied *: [Ansys.Mechanical.DataModel.Enums.CoriolisEffectType](../../../../Mechanical/DataModel/Enums/CoriolisEffectType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CoriolisEffectType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoriolisEffectApplied.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CreepEffects"></a>

### *property* ANSYSAnalysisSettings.CreepEffects *: [Ansys.Mechanical.DataModel.Enums.Creep](../../../../Mechanical/DataModel/Enums/Creep.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.Creep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CreepEffects.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.HarmonicIndexRange"></a>

### *property* ANSYSAnalysisSettings.HarmonicIndexRange *: [Ansys.Mechanical.DataModel.Enums.CyclicHarmonicIndex](../../../../Mechanical/DataModel/Enums/CyclicHarmonicIndex.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CyclicHarmonicIndex) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndexRange.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.DampingDefineBy"></a>

### *property* ANSYSAnalysisSettings.DampingDefineBy *: [Ansys.Mechanical.DataModel.Enums.DampingDefineBy](../../../../Mechanical/DataModel/Enums/DampingDefineBy.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DampingDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DampingDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.FarFieldRadiationSurface"></a>

### *property* ANSYSAnalysisSettings.FarFieldRadiationSurface *: [Ansys.Mechanical.DataModel.Enums.FarFieldRadiationSurfaceType](../../../../Mechanical/DataModel/Enums/FarFieldRadiationSurfaceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FarFieldRadiationSurfaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FarFieldRadiationSurface.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ExpandResultsFrom"></a>

### *property* ANSYSAnalysisSettings.ExpandResultsFrom *: [Ansys.Mechanical.DataModel.Enums.ExpandResultFrom](../../../../Mechanical/DataModel/Enums/ExpandResultFrom.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExpandResultFrom) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExpandResultsFrom.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.FrequencySpacing"></a>

### *property* ANSYSAnalysisSettings.FrequencySpacing *: [Ansys.Mechanical.DataModel.Enums.FrequencySpacingType](../../../../Mechanical/DataModel/Enums/FrequencySpacingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FrequencySpacingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FrequencySpacing.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.FutureAnalysis"></a>

### *property* ANSYSAnalysisSettings.FutureAnalysis *: [Ansys.Mechanical.DataModel.Enums.FutureIntentType](../../../../Mechanical/DataModel/Enums/FutureIntentType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FutureIntentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FutureAnalysis.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GeneralMiscellaneousOption"></a>

### *property* ANSYSAnalysisSettings.GeneralMiscellaneousOption *: [Ansys.Mechanical.DataModel.Enums.GeneralMiscellaneousOptionType](../../../../Mechanical/DataModel/Enums/GeneralMiscellaneousOptionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeneralMiscellaneousOptionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeneralMiscellaneousOption.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MultistepType"></a>

### *property* ANSYSAnalysisSettings.MultistepType *: [Ansys.Mechanical.DataModel.Enums.HarmonicMultiStepType](../../../../Mechanical/DataModel/Enums/HarmonicMultiStepType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.HarmonicMultiStepType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MultistepType.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ModalFrequencyRange"></a>

### *property* ANSYSAnalysisSettings.ModalFrequencyRange *: [Ansys.Mechanical.DataModel.Enums.ModalFrequencyRangeType](../../../../Mechanical/DataModel/Enums/ModalFrequencyRangeType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ModalFrequencyRangeType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalFrequencyRange.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StoreResultsAtAllFrequencies"></a>

### *property* ANSYSAnalysisSettings.StoreResultsAtAllFrequencies *: [Ansys.Mechanical.DataModel.Enums.HarmonicMSUPStorage](../../../../Mechanical/DataModel/Enums/HarmonicMSUPStorage.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.HarmonicMSUPStorage) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreResultsAtAllFrequencies.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SolutionMethod"></a>

### *property* ANSYSAnalysisSettings.SolutionMethod *: [Ansys.Mechanical.DataModel.Enums.HarmonicMethod](../../../../Mechanical/DataModel/Enums/HarmonicMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.HarmonicMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionMethod.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.IncludeNegativeLoadMultiplier"></a>

### *property* ANSYSAnalysisSettings.IncludeNegativeLoadMultiplier *: [Ansys.Mechanical.DataModel.Enums.SolverControlsIncludeNegativeLoadMultiplier](../../../../Mechanical/DataModel/Enums/SolverControlsIncludeNegativeLoadMultiplier.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolverControlsIncludeNegativeLoadMultiplier) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IncludeNegativeLoadMultiplier.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.LineSearch"></a>

### *property* ANSYSAnalysisSettings.LineSearch *: [Ansys.Mechanical.DataModel.Enums.LineSearchType](../../../../Mechanical/DataModel/Enums/LineSearchType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LineSearchType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LineSearch.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GenerateMeshRestartPoints"></a>

### *property* ANSYSAnalysisSettings.GenerateMeshRestartPoints *: [Ansys.Mechanical.DataModel.Enums.MeshRestartControlsType](../../../../Mechanical/DataModel/Enums/MeshRestartControlsType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshRestartControlsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateMeshRestartPoints.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MeshRetainFilesAfterFullSolve"></a>

### *property* ANSYSAnalysisSettings.MeshRetainFilesAfterFullSolve *: [Ansys.Mechanical.DataModel.Enums.MeshRestartRetainFilesType](../../../../Mechanical/DataModel/Enums/MeshRestartRetainFilesType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshRestartRetainFilesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshRetainFilesAfterFullSolve.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MeshSaveAtLoadStep"></a>

### *property* ANSYSAnalysisSettings.MeshSaveAtLoadStep *: [Ansys.Mechanical.DataModel.Enums.MeshRestartSaveAtLoadStep](../../../../Mechanical/DataModel/Enums/MeshRestartSaveAtLoadStep.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshRestartSaveAtLoadStep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshSaveAtLoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.MeshSaveAtSubstep"></a>

### *property* ANSYSAnalysisSettings.MeshSaveAtSubstep *: [Ansys.Mechanical.DataModel.Enums.MeshRestartSaveAtSubstep](../../../../Mechanical/DataModel/Enums/MeshRestartSaveAtSubstep.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshRestartSaveAtSubstep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshSaveAtSubstep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ModeReuse"></a>

### *property* ANSYSAnalysisSettings.ModeReuse *: [Ansys.Mechanical.DataModel.Enums.SolverControlsModeReuse](../../../../Mechanical/DataModel/Enums/SolverControlsModeReuse.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolverControlsModeReuse) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeReuse.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ModesCombinationType"></a>

### *property* ANSYSAnalysisSettings.ModesCombinationType *: [Ansys.Mechanical.DataModel.Enums.ModesCombinationType](../../../../Mechanical/DataModel/Enums/ModesCombinationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ModesCombinationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModesCombinationType.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ModeSelectionMethod"></a>

### *property* ANSYSAnalysisSettings.ModeSelectionMethod *: [Ansys.Mechanical.DataModel.Enums.ModeSelectionMethod](../../../../Mechanical/DataModel/Enums/ModeSelectionMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ModeSelectionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModeSelectionMethod.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.OnDemandExpansionOption"></a>

### *property* ANSYSAnalysisSettings.OnDemandExpansionOption *: [Ansys.Mechanical.DataModel.Enums.OnDemandExpansionType](../../../../Mechanical/DataModel/Enums/OnDemandExpansionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.OnDemandExpansionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the OnDemandExpansionOption.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NewtonRaphsonOption"></a>

### *property* ANSYSAnalysisSettings.NewtonRaphsonOption *: [Ansys.Mechanical.DataModel.Enums.NewtonRaphsonType](../../../../Mechanical/DataModel/Enums/NewtonRaphsonType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NewtonRaphsonType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NewtonRaphsonOption.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NodalForces"></a>

### *property* ANSYSAnalysisSettings.NodalForces *: [Ansys.Mechanical.DataModel.Enums.OutputControlsNodalForcesType](../../../../Mechanical/DataModel/Enums/OutputControlsNodalForcesType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.OutputControlsNodalForcesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodalForces.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ProjectToGeometry"></a>

### *property* ANSYSAnalysisSettings.ProjectToGeometry *: [Ansys.Mechanical.DataModel.Enums.NLADControlProjectToGeometry](../../../../Mechanical/DataModel/Enums/NLADControlProjectToGeometry.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NLADControlProjectToGeometry) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProjectToGeometry.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RefinementAlgorithm"></a>

### *property* ANSYSAnalysisSettings.RefinementAlgorithm *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityControlsRefinementAlgorithmType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityControlsRefinementAlgorithmType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityControlsRefinementAlgorithmType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RefinementAlgorithm.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RemeshingGradient"></a>

### *property* ANSYSAnalysisSettings.RemeshingGradient *: [Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityControlsRemeshingGradientType](../../../../Mechanical/DataModel/Enums/NonlinearAdaptivityControlsRemeshingGradientType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NonlinearAdaptivityControlsRemeshingGradientType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RemeshingGradient.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NonLinearFormulation"></a>

### *property* ANSYSAnalysisSettings.NonLinearFormulation *: [Ansys.Mechanical.DataModel.Enums.NonLinearFormulationType](../../../../Mechanical/DataModel/Enums/NonLinearFormulationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NonLinearFormulationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonLinearFormulation.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.NumericalDamping"></a>

### *property* ANSYSAnalysisSettings.NumericalDamping *: [Ansys.Mechanical.DataModel.Enums.TransientDampingType](../../../../Mechanical/DataModel/Enums/TransientDampingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TransientDampingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumericalDamping.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Expansion"></a>

### *property* ANSYSAnalysisSettings.Expansion *: [Ansys.Mechanical.DataModel.Enums.ExpandResultsSubType](../../../../Mechanical/DataModel/Enums/ExpandResultsSubType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExpandResultsSubType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Expansion.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ViewFactorMethod"></a>

### *property* ANSYSAnalysisSettings.ViewFactorMethod *: [Ansys.Mechanical.DataModel.Enums.RadiosityViewFactorType](../../../../Mechanical/DataModel/Enums/RadiosityViewFactorType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RadiosityViewFactorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ViewFactorMethod.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RadiositySolver"></a>

### *property* ANSYSAnalysisSettings.RadiositySolver *: [Ansys.Mechanical.DataModel.Enums.RadiositySolverType](../../../../Mechanical/DataModel/Enums/RadiositySolverType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RadiositySolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RadiositySolver.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.CombineRestartFiles"></a>

### *property* ANSYSAnalysisSettings.CombineRestartFiles *: [Ansys.Mechanical.DataModel.Enums.CombineRestartFilesType](../../../../Mechanical/DataModel/Enums/CombineRestartFilesType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CombineRestartFilesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CombineRestartFiles.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GenerateRestartPoints"></a>

### *property* ANSYSAnalysisSettings.GenerateRestartPoints *: [Ansys.Mechanical.DataModel.Enums.RestartControlsType](../../../../Mechanical/DataModel/Enums/RestartControlsType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RestartControlsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateRestartPoints.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RetainFilesAfterFullSolve"></a>

### *property* ANSYSAnalysisSettings.RetainFilesAfterFullSolve *: [Ansys.Mechanical.DataModel.Enums.RestartRetainFilesType](../../../../Mechanical/DataModel/Enums/RestartRetainFilesType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RestartRetainFilesType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RetainFilesAfterFullSolve.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RestartType"></a>

### *property* ANSYSAnalysisSettings.RestartType *: [Ansys.Mechanical.DataModel.Enums.RestartType](../../../../Mechanical/DataModel/Enums/RestartType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RestartType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RestartType.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ResultFileCompression"></a>

### *property* ANSYSAnalysisSettings.ResultFileCompression *: [Ansys.Mechanical.DataModel.Enums.ResultFileCompressionType](../../../../Mechanical/DataModel/Enums/ResultFileCompressionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultFileCompressionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ResultFileCompression.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RpmFrequencySpacing"></a>

### *property* ANSYSAnalysisSettings.RpmFrequencySpacing *: [Ansys.Mechanical.DataModel.Enums.FrequencySpacingType](../../../../Mechanical/DataModel/Enums/FrequencySpacingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FrequencySpacingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmFrequencySpacing.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SaveAtLoadStep"></a>

### *property* ANSYSAnalysisSettings.SaveAtLoadStep *: [Ansys.Mechanical.DataModel.Enums.RestartSaveAtLoadStep](../../../../Mechanical/DataModel/Enums/RestartSaveAtLoadStep.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RestartSaveAtLoadStep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveAtLoadStep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SaveAtSubstep"></a>

### *property* ANSYSAnalysisSettings.SaveAtSubstep *: [Ansys.Mechanical.DataModel.Enums.RestartSaveAtSubstep](../../../../Mechanical/DataModel/Enums/RestartSaveAtSubstep.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.RestartSaveAtSubstep) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SaveAtSubstep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ScatteredFieldFormulation"></a>

### *property* ANSYSAnalysisSettings.ScatteredFieldFormulation *: [Ansys.Mechanical.DataModel.Enums.ScatteredFieldFormulation](../../../../Mechanical/DataModel/Enums/ScatteredFieldFormulation.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ScatteredFieldFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScatteredFieldFormulation.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.ScatteringOutputType"></a>

### *property* ANSYSAnalysisSettings.ScatteringOutputType *: [Ansys.Mechanical.DataModel.Enums.ScatteringOutputType](../../../../Mechanical/DataModel/Enums/ScatteringOutputType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ScatteringOutputType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ScatteringOutputType.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SolverUnitSystem"></a>

### *property* ANSYSAnalysisSettings.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SolverPivotChecking"></a>

### *property* ANSYSAnalysisSettings.SolverPivotChecking *: [Ansys.Mechanical.DataModel.Enums.SolverPivotChecking](../../../../Mechanical/DataModel/Enums/SolverPivotChecking.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolverPivotChecking) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverPivotChecking.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SolverType"></a>

### *property* ANSYSAnalysisSettings.SolverType *: [Ansys.Mechanical.DataModel.Enums.SolverType](../../../../Mechanical/DataModel/Enums/SolverType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverType.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SolverUnits"></a>

### *property* ANSYSAnalysisSettings.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../../Mechanical/DataModel/Enums/SolverUnitsControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnits.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SpectrumType"></a>

### *property* ANSYSAnalysisSettings.SpectrumType *: [Ansys.Mechanical.DataModel.Enums.SpectrumType](../../../../Mechanical/DataModel/Enums/SpectrumType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SpectrumType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SpectrumType.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Stabilization"></a>

### *property* ANSYSAnalysisSettings.Stabilization *: [Ansys.Mechanical.DataModel.Enums.StabilizationType](../../../../Mechanical/DataModel/Enums/StabilizationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StabilizationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Stabilization.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StabilizationActivationForFirstSubstep"></a>

### *property* ANSYSAnalysisSettings.StabilizationActivationForFirstSubstep *: [Ansys.Mechanical.DataModel.Enums.StabilizationFirstSubstepOption](../../../../Mechanical/DataModel/Enums/StabilizationFirstSubstepOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StabilizationFirstSubstepOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationActivationForFirstSubstep.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StabilizationMethod"></a>

### *property* ANSYSAnalysisSettings.StabilizationMethod *: [Ansys.Mechanical.DataModel.Enums.StabilizationMethod](../../../../Mechanical/DataModel/Enums/StabilizationMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StabilizationMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StabilizationMethod.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.StoreModalResults"></a>

### *property* ANSYSAnalysisSettings.StoreModalResults *: [Ansys.Mechanical.DataModel.Enums.StoreModalResult](../../../../Mechanical/DataModel/Enums/StoreModalResult.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StoreModalResult) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreModalResults.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.DefineBy"></a>

### *property* ANSYSAnalysisSettings.DefineBy *: [Ansys.Mechanical.DataModel.Enums.TimeStepDefineByType](../../../../Mechanical/DataModel/Enums/TimeStepDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TimeStepDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.TransientApplication"></a>

### *property* ANSYSAnalysisSettings.TransientApplication *: [Ansys.Mechanical.DataModel.Enums.TransientApplicationType](../../../../Mechanical/DataModel/Enums/TransientApplicationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TransientApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TransientApplication.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.AutomaticTimeStepping"></a>

### *property* ANSYSAnalysisSettings.AutomaticTimeStepping *: [Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping](../../../../Mechanical/DataModel/Enums/AutomaticTimeStepping.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AutomaticTimeStepping.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.RetainModesymFileAfterSolve"></a>

### *property* ANSYSAnalysisSettings.RetainModesymFileAfterSolve *: [Ansys.Mechanical.DataModel.Enums.UseExistingModesymFile](../../../../Mechanical/DataModel/Enums/UseExistingModesymFile.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.UseExistingModesymFile) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RetainModesymFileAfterSolve.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.WeakSprings"></a>

### *property* ANSYSAnalysisSettings.WeakSprings *: [Ansys.Mechanical.DataModel.Enums.WeakSpringsType](../../../../Mechanical/DataModel/Enums/WeakSpringsType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WeakSpringsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WeakSprings.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SpringStiffness"></a>

### *property* ANSYSAnalysisSettings.SpringStiffness *: [Ansys.Mechanical.DataModel.Enums.SpringsStiffnessType](../../../../Mechanical/DataModel/Enums/SpringsStiffnessType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SpringsStiffnessType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ANSYSAnalysisSettings.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Graph"></a>

### *property* ANSYSAnalysisSettings.Graph *: [Ansys.Mechanical.Graphics.AnalysisSettingsGraph](../../../../Mechanical/Graphics/AnalysisSettingsGraph.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.AnalysisSettingsGraph) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ANSYSAnalysisSettings.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Figures"></a>

### *property* ANSYSAnalysisSettings.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.Images"></a>

### *property* ANSYSAnalysisSettings.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### ANSYSAnalysisSettings.SetAutomaticTimeStepping(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping](../../../../Mechanical/DataModel/Enums/AutomaticTimeStepping.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticTimeStepping))

Sets the Automatic Time Stepping for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetForceConvergenceType"></a>

### ANSYSAnalysisSettings.GetForceConvergenceType(stepNumber: System.UInt32)

Gets the Force Convergence Tolerance Type at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetForceConvergenceType"></a>

### ANSYSAnalysisSettings.SetForceConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType))

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

### ANSYSAnalysisSettings.SetMomentConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType))

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

### ANSYSAnalysisSettings.SetDisplacementConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType))

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

### ANSYSAnalysisSettings.SetRotationConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType))

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

### ANSYSAnalysisSettings.SetTemperatureConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType))

Sets the Temperature Convergence Tolerance type for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetTemperatureConvergenceTolerance"></a>

### ANSYSAnalysisSettings.SetTemperatureConvergenceTolerance(stepNumber: System.UInt32, value: System.Double)

Sets the Temperature Convergence Tolerance as a percentage for a given solution step.
For example if the user input is 5% then the “value” argument should be set to 5.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetTemperatureConvergenceValue"></a>

### ANSYSAnalysisSettings.SetTemperatureConvergenceValue(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.NonLinearValueType](../../../../Mechanical/DataModel/Enums/NonLinearValueType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NonLinearValueType))

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

### ANSYSAnalysisSettings.SetHeatConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType))

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

### ANSYSAnalysisSettings.SetVoltageConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType))

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

### ANSYSAnalysisSettings.SetChargeConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType))

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

### ANSYSAnalysisSettings.SetEnergyConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType))

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

### ANSYSAnalysisSettings.SetCurrentConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType))

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

### ANSYSAnalysisSettings.SetEmagAMPSConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType))

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

### ANSYSAnalysisSettings.SetEmagCSGConvergenceType(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType](../../../../Mechanical/DataModel/Enums/ConvergenceToleranceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceToleranceType))

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

### ANSYSAnalysisSettings.SetLineSearch(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.LineSearchType](../../../../Mechanical/DataModel/Enums/LineSearchType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LineSearchType))

Sets the Line Search for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetStabilization"></a>

### ANSYSAnalysisSettings.GetStabilization(stepNumber: System.UInt32)

Gets the Stabilization at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetStabilization"></a>

### ANSYSAnalysisSettings.SetStabilization(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.StabilizationType](../../../../Mechanical/DataModel/Enums/StabilizationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StabilizationType))

Sets the Stabilization for a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.GetStabilizationMethod"></a>

### ANSYSAnalysisSettings.GetStabilizationMethod(stepNumber: System.UInt32)

Gets the Stabilization Method at a given solution step.

<!-- !! processed by numpydoc !! -->

<a id="ANSYSAnalysisSettings.SetStabilizationMethod"></a>

### ANSYSAnalysisSettings.SetStabilizationMethod(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.StabilizationMethod](../../../../Mechanical/DataModel/Enums/StabilizationMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StabilizationMethod))

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

### ANSYSAnalysisSettings.SetStabilizationFirstSubstepOption(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.StabilizationFirstSubstepOption](../../../../Mechanical/DataModel/Enums/StabilizationFirstSubstepOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.StabilizationFirstSubstepOption))

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

### ANSYSAnalysisSettings.SetStoreResultsAt(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.TimePointsOptions](../../../../Mechanical/DataModel/Enums/TimePointsOptions.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TimePointsOptions))

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

### ANSYSAnalysisSettings.SetDefineBy(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.TimeStepDefineByType](../../../../Mechanical/DataModel/Enums/TimeStepDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.TimeStepDefineByType))

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

### ANSYSAnalysisSettings.SetCreepEffects(stepNumber: System.UInt32, value: [Ansys.Mechanical.DataModel.Enums.Creep](../../../../Mechanical/DataModel/Enums/Creep.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.Creep))

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

### ANSYSAnalysisSettings.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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

