<a id="release-notes-for-2024-r2"></a>

# Release notes for 2024 R2

<a id="added"></a>

## Added

<a id="new-classes"></a>

### New Classes

* [`RAContactsDataMeshColoring`](RAContactsDataMeshColoring.md) - This class allow users to change coloring properties for Contacts Data.
* [`RAJointsDataMeshColoring`](RAJointsDataMeshColoring.md) - This class allow users to change coloring properties for Joints Data.
* [`RATimeSeriesRotation`](RATimeSeriesRotation.md) - This class is a Rocky PrePost Scripting wrapper representing a Time Series Rotation motion.
* [`RATimeSeriesTranslation`](RATimeSeriesTranslation.md) - This class is a Rocky PrePost Scripting wrapper representing a Time Series Translation motion.

<a id="new-methods"></a>

### New Methods

* [`RAExportToolkit`](RAExportToolkit.md)
  * [`ExportHTC`](RAExportToolkit.md#generated.RAExportToolkit.ExportHTC)
* [`RASimulatorRun`](RASimulatorRun.md)
  * [`DisableHtcCalculator`](RASimulatorRun.md#generated.RASimulatorRun.DisableHtcCalculator)
  * [`EnableHtcCalculator`](RASimulatorRun.md#generated.RASimulatorRun.EnableHtcCalculator)
  * [`GetAvailableModulesOutputProperties`](RASimulatorRun.md#generated.RASimulatorRun.GetAvailableModulesOutputProperties)
  * [`GetAvailableStandardOutputProperties`](RASimulatorRun.md#generated.RASimulatorRun.GetAvailableStandardOutputProperties)
  * [`GetModulesOutputPropertiesData`](RASimulatorRun.md#generated.RASimulatorRun.GetModulesOutputPropertiesData)
  * [`GetModulesOutputPropertyEnabled`](RASimulatorRun.md#generated.RASimulatorRun.GetModulesOutputPropertyEnabled)
  * [`GetStandardOutputPropertiesData`](RASimulatorRun.md#generated.RASimulatorRun.GetStandardOutputPropertiesData)
  * [`GetStandardOutputPropertyEnabled`](RASimulatorRun.md#generated.RASimulatorRun.GetStandardOutputPropertyEnabled)
  * [`HasHtcCalculatedData`](RASimulatorRun.md#generated.RASimulatorRun.HasHtcCalculatedData)
  * [`RestoreOutputPropertiesDefaults`](RASimulatorRun.md#generated.RASimulatorRun.RestoreOutputPropertiesDefaults)
  * [`SetModulesOutputPropertiesData`](RASimulatorRun.md#generated.RASimulatorRun.SetModulesOutputPropertiesData)
  * [`SetModulesOutputPropertyEnabled`](RASimulatorRun.md#generated.RASimulatorRun.SetModulesOutputPropertyEnabled)
  * [`SetStandardOutputPropertiesData`](RASimulatorRun.md#generated.RASimulatorRun.SetStandardOutputPropertiesData)
  * [`SetStandardOutputPropertyEnabled`](RASimulatorRun.md#generated.RASimulatorRun.SetStandardOutputPropertyEnabled)
* [`RASPHSettings`](RASPHSettings.md)
  * [`GetDensityRelativeErrorTolerance`](RASPHSettings.md#generated.RASPHSettings.GetDensityRelativeErrorTolerance)
  * [`GetMaximumExpectedVelocity`](RASPHSettings.md#generated.RASPHSettings.GetMaximumExpectedVelocity)
  * [`GetMaximumNumberOfIterations`](RASPHSettings.md#generated.RASPHSettings.GetMaximumNumberOfIterations)
  * [`GetNegativePressureFactor`](RASPHSettings.md#generated.RASPHSettings.GetNegativePressureFactor)
  * [`GetPressureUnderRelaxationFactor`](RASPHSettings.md#generated.RASPHSettings.GetPressureUnderRelaxationFactor)
  * [`GetSolverModel`](RASPHSettings.md#generated.RASPHSettings.GetSolverModel)
  * [`GetSolver`](RASPHSettings.md#generated.RASPHSettings.GetSolver)
  * [`GetSoundSpeed`](RASPHSettings.md#generated.RASPHSettings.GetSoundSpeed)
  * [`GetValidSolverModelValues`](RASPHSettings.md#generated.RASPHSettings.GetValidSolverModelValues)
  * [`SetDensityRelativeErrorTolerance`](RASPHSettings.md#generated.RASPHSettings.SetDensityRelativeErrorTolerance)
  * [`SetMaximumExpectedVelocity`](RASPHSettings.md#generated.RASPHSettings.SetMaximumExpectedVelocity)
  * [`SetMaximumNumberOfIterations`](RASPHSettings.md#generated.RASPHSettings.SetMaximumNumberOfIterations)
  * [`SetNegativePressureFactor`](RASPHSettings.md#generated.RASPHSettings.SetNegativePressureFactor)
  * [`SetPressureUnderRelaxationFactor`](RASPHSettings.md#generated.RASPHSettings.SetPressureUnderRelaxationFactor)
  * [`SetSolverModel`](RASPHSettings.md#generated.RASPHSettings.SetSolverModel)
  * [`SetSolver`](RASPHSettings.md#generated.RASPHSettings.SetSolver)
  * [`SetSoundSpeed`](RASPHSettings.md#generated.RASPHSettings.SetSoundSpeed)
* [`RAStudy`](RAStudy.md)
  * [`HasCalculatedHTC`](RAStudy.md#generated.RAStudy.HasCalculatedHTC)
  * [`SetHTCCalculatorEnabled`](RAStudy.md#generated.RAStudy.SetHTCCalculatorEnabled)
* [`RASystemCouplingWall`](RASystemCouplingWall.md)
  * [`DisableStructuralCouplingType`](RASystemCouplingWall.md#generated.RASystemCouplingWall.DisableStructuralCouplingType)
  * [`DisableThermalCouplingType`](RASystemCouplingWall.md#generated.RASystemCouplingWall.DisableThermalCouplingType)
  * [`EnableStructuralCouplingType`](RASystemCouplingWall.md#generated.RASystemCouplingWall.EnableStructuralCouplingType)
  * [`EnableThermalCouplingType`](RASystemCouplingWall.md#generated.RASystemCouplingWall.EnableThermalCouplingType)
  * [`GetStructuralCouplingTypeEnabled`](RASystemCouplingWall.md#generated.RASystemCouplingWall.GetStructuralCouplingTypeEnabled)
  * [`GetThermalCouplingTypeEnabled`](RASystemCouplingWall.md#generated.RASystemCouplingWall.GetThermalCouplingTypeEnabled)
  * [`IsStructuralCouplingTypeEnabled`](RASystemCouplingWall.md#generated.RASystemCouplingWall.IsStructuralCouplingTypeEnabled)
  * [`IsThermalCouplingTypeEnabled`](RASystemCouplingWall.md#generated.RASystemCouplingWall.IsThermalCouplingTypeEnabled)
  * [`SetStructuralCouplingTypeEnabled`](RASystemCouplingWall.md#generated.RASystemCouplingWall.SetStructuralCouplingTypeEnabled)
  * [`SetThermalCouplingTypeEnabled`](RASystemCouplingWall.md#generated.RASystemCouplingWall.SetThermalCouplingTypeEnabled)

<a id="changed"></a>

## Changed

* [`RAUserProcessCollection`](RAUserProcessCollection.md)
  * [`CreateStreamlinesUserProcess`](RAUserProcessCollection.md#generated.RAUserProcessCollection.CreateStreamlinesUserProcess)
* [`RAStudy`](RAStudy.md):
  * [`ExtendSimulation`](RAStudy.md#generated.RAStudy.ExtendSimulation)

<a id="deprecated"></a>

## Deprecated

* [`RAFluidMaterial`](RAFluidMaterial.md)
  * `GetSoundSpeed` was moved to [`RASPHSettings.GetSoundSpeed`](RASPHSettings.md#generated.RASPHSettings.GetSoundSpeed)
  * `SetSoundSpeed` was moved to [`RASPHSettings.SetSoundSpeed`](RASPHSettings.md#generated.RASPHSettings.SetSoundSpeed)
* [`RASimulatorRun`](RASimulatorRun.md)
  * `GetAvailableOutputRootProperties` was renamed to [`RASimulatorRun.GetAvailableStandardOutputProperties`](RASimulatorRun.md#generated.RASimulatorRun.GetAvailableStandardOutputProperties)
  * `GetAvailableOutputRoots` was renamed to [`RASimulatorRun.GetAvailableStandardOutputProperties`](RASimulatorRun.md#generated.RASimulatorRun.GetAvailableStandardOutputProperties)
  * `GetOutputPropertyEnabled` was renamed to [`RASimulatorRun.GetStandardOutputPropertyEnabled`](RASimulatorRun.md#generated.RASimulatorRun.GetStandardOutputPropertyEnabled)
  * `GetOutputRootEnabled` was renamed to [`RASimulatorRun.GetStandardOutputPropertyEnabled`](RASimulatorRun.md#generated.RASimulatorRun.GetStandardOutputPropertyEnabled)
  * `SetOutputPropertyEnabled` was renamed to [`RASimulatorRun.SetStandardOutputPropertyEnabled`](RASimulatorRun.md#generated.RASimulatorRun.SetStandardOutputPropertyEnabled)
  * `SetOutputRootEnabled` was renamed to [`RASimulatorRun.SetStandardOutputPropertyEnabled`](RASimulatorRun.md#generated.RASimulatorRun.SetStandardOutputPropertyEnabled)

<a id="removed"></a>

## Removed

* `RAMacroHooks`
