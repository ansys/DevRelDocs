# Release notes for 2025 R1

<a id="added"></a>

## Added

<a id="new-methods"></a>

### New Methods

* `RockyApiApplication`
  * `GetVersion` - This method return the current application version `app.GetVersion()`.
* [`RAVolumetricInlet`](RAVolumetricInlet.md)
  * [`GetInitialVelocity`](RAVolumetricInlet.md#generated.RAVolumetricInlet.GetInitialVelocity)
  * [`SetInitialVelocity`](RAVolumetricInlet.md#generated.RAVolumetricInlet.SetInitialVelocity)
  * [`GetPeriodic`](RAVolumetricInlet.md#generated.RAVolumetricInlet.GetPeriodic)
  * [`SetPeriodic`](RAVolumetricInlet.md#generated.RAVolumetricInlet.SetPeriodic)
  * [`EnablePeriodic`](RAVolumetricInlet.md#generated.RAVolumetricInlet.EnablePeriodic)
  * [`DisablePeriodic`](RAVolumetricInlet.md#generated.RAVolumetricInlet.DisablePeriodic)
  * [`IsPeriodicEnabled`](RAVolumetricInlet.md#generated.RAVolumetricInlet.IsPeriodicEnabled)
  * [`SetPeriod`](RAVolumetricInlet.md#generated.RAVolumetricInlet.SetPeriod)
  * [`GetPeriod`](RAVolumetricInlet.md#generated.RAVolumetricInlet.GetPeriod)
  * [`GetPeriodicStop`](RAVolumetricInlet.md#generated.RAVolumetricInlet.GetPeriodicStop)
  * [`SetPeriodicStop`](RAVolumetricInlet.md#generated.RAVolumetricInlet.SetPeriodicStop)
  * [`GetInjectionTime`](RAVolumetricInlet.md#generated.RAVolumetricInlet.GetInjectionTime)
  * [`SetInjectionTime`](RAVolumetricInlet.md#generated.RAVolumetricInlet.SetInjectionTime)
* [`RAStudy`](RAStudy.md)
  * [`GetProgress`](RAStudy.md#generated.RAStudy.GetProgress)
* [`RAParticles`](RAParticles.md)
  * [`AddCustomCurve`](RAParticles.md#generated.RAParticles.AddCustomCurve)
  * [`EditCustomCurve`](RAParticles.md#generated.RAParticles.EditCustomCurve)
  * [`RemoveCustomCurve`](RAParticles.md#generated.RAParticles.RemoveCustomCurve)
  * [`AddCustomProperty`](RAParticles.md#generated.RAParticles.AddCustomProperty)
  * [`EditCustomProperty`](RAParticles.md#generated.RAParticles.EditCustomProperty)
  * [`RemoveCustomProperty`](RAParticles.md#generated.RAParticles.RemoveCustomProperty)
* [`RAPointCloud`](RAPointCloud.md)
  * [`IsTransient`](RAPointCloud.md#generated.RAPointCloud.IsTransient)
  * [`GetEnablePeriodic`](RAPointCloud.md#generated.RAPointCloud.GetEnablePeriodic)
  * [`SetEnablePeriodic`](RAPointCloud.md#generated.RAPointCloud.SetEnablePeriodic)
  * [`EnablePeriodic`](RAPointCloud.md#generated.RAPointCloud.EnablePeriodic)
  * [`DisablePeriodic`](RAPointCloud.md#generated.RAPointCloud.DisablePeriodic)
  * [`IsPeriodicEnabled`](RAPointCloud.md#generated.RAPointCloud.IsPeriodicEnabled)
  * [`GetPeriodicStartTime`](RAPointCloud.md#generated.RAPointCloud.GetPeriodicStartTime)
  * [`SetPeriodicStartTime`](RAPointCloud.md#generated.RAPointCloud.SetPeriodicStartTime)
  * [`GetPeriodicStopTime`](RAPointCloud.md#generated.RAPointCloud.GetPeriodicStopTime)
  * [`SetPeriodicStopTime`](RAPointCloud.md#generated.RAPointCloud.SetPeriodicStopTime)
* [`RAPolyhedronProcess`](RAPolyhedronProcess.md)
  * [`GetCenterAfterMovement`](RAPolyhedronProcess.md#generated.RAPolyhedronProcess.GetCenterAfterMovement)
  * [`GetMotionFrame`](RAPolyhedronProcess.md#generated.RAPolyhedronProcess.GetMotionFrame)
  * [`SetMotionFrame`](RAPolyhedronProcess.md#generated.RAPolyhedronProcess.SetMotionFrame)
* [`RAFluentTwoWayCoupling`](RAFluentTwoWayCoupling.md)
  * [`GetMinimumIterations`](RAFluentTwoWayCoupling.md#generated.RAFluentTwoWayCoupling.GetMinimumIterations)
  * [`SetMinimumIterations`](RAFluentTwoWayCoupling.md#generated.RAFluentTwoWayCoupling.SetMinimumIterations)
  * [`GetDiffusionCoefficient`](RAFluentTwoWayCoupling.md#generated.RAFluentTwoWayCoupling.GetDiffusionCoefficient)
  * [`SetDiffusionCoefficient`](RAFluentTwoWayCoupling.md#generated.RAFluentTwoWayCoupling.SetDiffusionCoefficient)
  * [`GetMaximumTimeSteps`](RAFluentTwoWayCoupling.md#generated.RAFluentTwoWayCoupling.GetMaximumTimeSteps)
  * [`SetMaximumTimeSteps`](RAFluentTwoWayCoupling.md#generated.RAFluentTwoWayCoupling.SetMaximumTimeSteps)
  * [`GetMinimumTimeSteps`](RAFluentTwoWayCoupling.md#generated.RAFluentTwoWayCoupling.GetMinimumTimeSteps)
  * [`SetMinimumTimeSteps`](RAFluentTwoWayCoupling.md#generated.RAFluentTwoWayCoupling.SetMinimumTimeSteps)
  * [`GetNumberOfThreads`](RAFluentTwoWayCoupling.md#generated.RAFluentTwoWayCoupling.GetNumberOfThreads)
  * [`SetNumberOfThreads`](RAFluentTwoWayCoupling.md#generated.RAFluentTwoWayCoupling.SetNumberOfThreads)
  * [`GetMaximumVolumeFraction`](RAFluentTwoWayCoupling.md#generated.RAFluentTwoWayCoupling.GetMaximumVolumeFraction)
  * [`SetMaximumVolumeFraction`](RAFluentTwoWayCoupling.md#generated.RAFluentTwoWayCoupling.SetMaximumVolumeFraction)
  * [`GetBackDiffusion`](RAFluentTwoWayCoupling.md#generated.RAFluentTwoWayCoupling.GetBackDiffusion)
  * [`SetBackDiffusion`](RAFluentTwoWayCoupling.md#generated.RAFluentTwoWayCoupling.SetBackDiffusion)
  * [`EnableBackDiffusion`](RAFluentTwoWayCoupling.md#generated.RAFluentTwoWayCoupling.EnableBackDiffusion)
  * [`DisableBackDiffusion`](RAFluentTwoWayCoupling.md#generated.RAFluentTwoWayCoupling.DisableBackDiffusion)
  * [`IsBackDiffusionEnabled`](RAFluentTwoWayCoupling.md#generated.RAFluentTwoWayCoupling.IsBackDiffusionEnabled)
* [`RAFeedConveyor`](RAFeedConveyor.md)
  * [`GetSurfaceTensionContactAngle`](RAFeedConveyor.md#generated.RAFeedConveyor.GetSurfaceTensionContactAngle)
  * [`SetSurfaceTensionContactAngle`](RAFeedConveyor.md#generated.RAFeedConveyor.SetSurfaceTensionContactAngle)
* [`RAReceivingConveyor`](RAReceivingConveyor.md)
  * [`GetSurfaceTensionContactAngle`](RAReceivingConveyor.md#generated.RAReceivingConveyor.GetSurfaceTensionContactAngle)
  * [`SetSurfaceTensionContactAngle`](RAReceivingConveyor.md#generated.RAReceivingConveyor.SetSurfaceTensionContactAngle)
* [`RASystemCouplingWall`](RASystemCouplingWall.md)
  * [`GetSurfaceTensionContactAngle`](RASystemCouplingWall.md#generated.RASystemCouplingWall.GetSurfaceTensionContactAngle)
  * [`SetSurfaceTensionContactAngle`](RASystemCouplingWall.md#generated.RASystemCouplingWall.SetSurfaceTensionContactAngle)
* [`RAWall`](RAWall.md)
  * [`GetSurfaceTensionContactAngle`](RAWall.md#generated.RAWall.GetSurfaceTensionContactAngle)
  * [`SetSurfaceTensionContactAngle`](RAWall.md#generated.RAWall.SetSurfaceTensionContactAngle)
* [`RASimulatorRun`](RASimulatorRun.md)
  * [`GetMoveCfdCellsWithRockyBoundaries`](RASimulatorRun.md#generated.RASimulatorRun.GetMoveCfdCellsWithRockyBoundaries)
  * [`SetMoveCfdCellsWithRockyBoundaries`](RASimulatorRun.md#generated.RASimulatorRun.SetMoveCfdCellsWithRockyBoundaries)
  * [`EnableMoveCfdCellsWithRockyBoundaries`](RASimulatorRun.md#generated.RASimulatorRun.EnableMoveCfdCellsWithRockyBoundaries)
  * [`DisableMoveCfdCellsWithRockyBoundaries`](RASimulatorRun.md#generated.RASimulatorRun.DisableMoveCfdCellsWithRockyBoundaries)
  * [`IsMoveCfdCellsWithRockyBoundariesEnabled`](RASimulatorRun.md#generated.RASimulatorRun.IsMoveCfdCellsWithRockyBoundariesEnabled)
  * [`GetUse3RdPowerForCfdCgm`](RASimulatorRun.md#generated.RASimulatorRun.GetUse3RdPowerForCfdCgm)
  * [`SetUse3RdPowerForCfdCgm`](RASimulatorRun.md#generated.RASimulatorRun.GetUse3RdPowerForCfdCgm)
  * [`EnableUse3RdPowerForCfdCgm`](RASimulatorRun.md#generated.RASimulatorRun.EnableUse3RdPowerForCfdCgm)
  * [`DisableUse3RdPowerForCfdCgm`](RASimulatorRun.md#generated.RASimulatorRun.DisableUse3RdPowerForCfdCgm)
  * [`IsUse3RdPowerForCfdCgmEnabled`](RASimulatorRun.md#generated.RASimulatorRun.IsUse3RdPowerForCfdCgmEnabled)
  * [`GetUseDpmBlockingEffectForSinglePhaseSimulations`](RASimulatorRun.md#generated.RASimulatorRun.GetUseDpmBlockingEffectForSinglePhaseSimulations)
  * [`SetUseDpmBlockingEffectForSinglePhaseSimulations`](RASimulatorRun.md#generated.RASimulatorRun.SetUseDpmBlockingEffectForSinglePhaseSimulations)
  * [`EnableDpmBlockingEffectForSinglePhaseSimulations`](RASimulatorRun.md#generated.RASimulatorRun.EnableDpmBlockingEffectForSinglePhaseSimulations)
  * [`DisableDpmBlockingEffectForSinglePhaseSimulations`](RASimulatorRun.md#generated.RASimulatorRun.DisableDpmBlockingEffectForSinglePhaseSimulations)
  * [`IsDpmBlockingEffectForSinglePhaseSimulationsEnabled`](RASimulatorRun.md#generated.RASimulatorRun.IsDpmBlockingEffectForSinglePhaseSimulationsEnabled)
* [`RASPHSettings`](RASPHSettings.md)
  * [`GetLimitTurbulentViscosity`](RASPHSettings.md#generated.RASPHSettings.GetLimitTurbulentViscosity)
  * [`SetLimitTurbulentViscosity`](RASPHSettings.md#generated.RASPHSettings.SetLimitTurbulentViscosity)
  * [`GetTurbulentViscosityMaximumRatio`](RASPHSettings.md#generated.RASPHSettings.GetTurbulentViscosityMaximumRatio)
  * [`SetTurbulentViscosityMaximumRatio`](RASPHSettings.md#generated.RASPHSettings.SetTurbulentViscosityMaximumRatio)

<a id="new-classes"></a>

### New Classes

* [`RAFilterProcess`](RAFilterProcess.md) - This class allows filtering properties by a cut or range of values. Replaces `RAPropertyProcess`.
* [`RAResidenceTime`]() - This class allows manipulating Residence Time Calculators in a project.

<a id="changed"></a>

## Changed

* [`RAStudy`](RAStudy.md)
  * [`StartSimulation`](RAStudy.md#generated.RAStudy.StartSimulation) - Added a new parameter `non_blocking` that allows for asynchronous simulation.
  * [`ExtendSimulation`](RAStudy.md#generated.RAStudy.ExtendSimulation) - Added a new parameter `periodic_motion_extensions` that allows for time extension on periodic motion frames.

<a id="deprecated"></a>

## Deprecated

* [`RAUserProcessCollection`](RAUserProcessCollection.md)
  * `CreatePropertyProcess` was renamed to [`RAUserProcessCollection.CreateFilterProcess`](RAUserProcessCollection.md#generated.RAUserProcessCollection.CreateFilterProcess)
  * `GetPropertyProcessNames` was renamed to [`RAUserProcessCollection.GetFilterProcessNames`](RAUserProcessCollection.md#generated.RAUserProcessCollection.GetFilterProcessNames)
* [`RAStudy`](RAStudy.md)
  * `GetMaterialsInteractionCollection` was deprecated, use [`RAMaterialCollection.GetMaterialsInteractionCollection`](RAMaterialCollection.md#generated.RAMaterialCollection.GetMaterialsInteractionCollection) instead.

<a id="removed"></a>

## Removed

* `RAPropertyProcess`
* [`RAStudy`](RAStudy.md)
  * `GetFrameOfReferenceContainer`

<a id="release-notes-for-2024-r2"></a>

# Release notes for 2024 R2

<a id="id1"></a>

## Added

<a id="id2"></a>

### New Classes

* [`RAContactsDataMeshColoring`](RAContactsDataMeshColoring.md) - This class allow users to change coloring properties for Contacts Data.
* [`RAJointsDataMeshColoring`](RAJointsDataMeshColoring.md) - This class allow users to change coloring properties for Joints Data.
* [`RATimeSeriesRotation`](RATimeSeriesRotation.md) - This class is a Rocky PrePost Scripting wrapper representing a Time Series Rotation motion.
* [`RATimeSeriesTranslation`](RATimeSeriesTranslation.md) - This class is a Rocky PrePost Scripting wrapper representing a Time Series Translation motion.

<a id="id3"></a>

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

<a id="id4"></a>

## Changed

* [`RAUserProcessCollection`](RAUserProcessCollection.md)
  * [`CreateStreamlinesUserProcess`](RAUserProcessCollection.md#generated.RAUserProcessCollection.CreateStreamlinesUserProcess)
* [`RAStudy`](RAStudy.md):
  * [`ExtendSimulation`](RAStudy.md#generated.RAStudy.ExtendSimulation)

<a id="id5"></a>

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

<a id="id6"></a>

## Removed

* `RAMacroHooks`
