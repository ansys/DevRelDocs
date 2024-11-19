

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
