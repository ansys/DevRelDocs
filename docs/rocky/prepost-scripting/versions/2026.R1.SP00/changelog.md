

# Release notes for 2026 R1

<a id="added"></a>

## Added

<a id="new-methods"></a>

### New Methods

* [`RAPlaneGroup`](RAPlaneGroup.md)
  * [`AddProcess`](RAPlaneGroup.md#generated.RAPlaneGroup.AddProcess) - Adds a new plane in the group using the given process as source.
  * [`GetType`](RAPlaneGroup.md#generated.RAPlaneGroup.GetType)
  * [`SetType`](RAPlaneGroup.md#generated.RAPlaneGroup.SetType)
  * [`GetMode`](RAPlaneGroup.md#generated.RAPlaneGroup.GetMode)
  * [`SetMode`](RAPlaneGroup.md#generated.RAPlaneGroup.SetMode)
  * [`GetOrigin`](RAPlaneGroup.md#generated.RAPlaneGroup.GetOrigin)
  * [`SetOrigin`](RAPlaneGroup.md#generated.RAPlaneGroup.SetOrigin)
* [`RAPointCloud`](RAPointCloud.md)
  * [`GetSearchCutOffDistance`](RAPointCloud.md#generated.RAPointCloud.GetSearchCutOffDistance)
  * [`SetSearchCutOffDistance`](RAPointCloud.md#generated.RAPointCloud.SetSearchCutOffDistance)
* [`RADomainSettings`](RADomainSettings.md)
  * [`ResetDomainToGeometriesLimits`](RADomainSettings.md#generated.RADomainSettings.ResetDomainToGeometriesLimits)
* [`RASPHSettings`](RASPHSettings.md)
  * [`GetViscousForceIntegration`](RASPHSettings.md#generated.RASPHSettings.GetViscousForceIntegration)
  * [`SetViscousForceIntegration`](RASPHSettings.md#generated.RASPHSettings.SetViscousForceIntegration)
  * [`GetValidViscousForceIntegrationValues`](RASPHSettings.md#generated.RASPHSettings.GetValidViscousForceIntegrationValues)
  * [`GetViscousForceMaximumNumberOfIterations`](RASPHSettings.md#generated.RASPHSettings.GetViscousForceMaximumNumberOfIterations)
  * [`SetViscousForceMaximumNumberOfIterations`](RASPHSettings.md#generated.RASPHSettings.SetViscousForceMaximumNumberOfIterations)
  * [`GetViscousForceRelativeErrorTolerance`](RASPHSettings.md#generated.RASPHSettings.GetViscousForceRelativeErrorTolerance)
  * [`SetViscousForceRelativeErrorTolerance`](RASPHSettings.md#generated.RASPHSettings.SetViscousForceRelativeErrorTolerance)
  * [`GetViscousForceUnderRelaxationFactor`](RASPHSettings.md#generated.RASPHSettings.GetViscousForceUnderRelaxationFactor)
  * [`SetViscousForceUnderRelaxationFactor`](RASPHSettings.md#generated.RASPHSettings.SetViscousForceUnderRelaxationFactor)
  * [`GetIncompressibilityRelaxationFactor`](RASPHSettings.md#generated.RASPHSettings.GetIncompressibilityRelaxationFactor)
  * [`SetIncompressibilityRelaxationFactor`](RASPHSettings.md#generated.RASPHSettings.SetIncompressibilityRelaxationFactor)
  * [`GetRelaxedIncompressibilityConstraintEnabled`](RASPHSettings.md#generated.RASPHSettings.GetRelaxedIncompressibilityConstraintEnabled)
  * [`SetRelaxedIncompressibilityConstraintEnabled`](RASPHSettings.md#generated.RASPHSettings.SetRelaxedIncompressibilityConstraintEnabled)
  * [`EnableRelaxedIncompressibilityConstraint`](RASPHSettings.md#generated.RASPHSettings.EnableRelaxedIncompressibilityConstraint)
  * [`DisableRelaxedIncompressibilityConstraint`](RASPHSettings.md#generated.RASPHSettings.DisableRelaxedIncompressibilityConstraint)
  * [`IsRelaxedIncompressibilityConstraintEnabled`](RASPHSettings.md#generated.RASPHSettings.IsRelaxedIncompressibilityConstraintEnabled)
* [`RAVolumetricInlet`](RAVolumetricInlet.md)
  * [`GetUseBoxCenterAsSeedPoint`](RAVolumetricInlet.md#generated.RAVolumetricInlet.GetUseBoxCenterAsSeedPoint)
  * [`SetUseBoxCenterAsSeedPoint`](RAVolumetricInlet.md#generated.RAVolumetricInlet.SetUseBoxCenterAsSeedPoint)
  * [`EnableUseBoxCenterAsSeedPoint`](RAVolumetricInlet.md#generated.RAVolumetricInlet.EnableUseBoxCenterAsSeedPoint)
  * [`DisableUseBoxCenterAsSeedPoint`](RAVolumetricInlet.md#generated.RAVolumetricInlet.DisableUseBoxCenterAsSeedPoint)
  * [`IsUseBoxCenterAsSeedPointEnabled`](RAVolumetricInlet.md#generated.RAVolumetricInlet.IsUseBoxCenterAsSeedPointEnabled)
  * [`AddParticle`](RAVolumetricInlet.md#generated.RAVolumetricInlet.AddParticle)
  * [`RemoveParticle`](RAVolumetricInlet.md#generated.RAVolumetricInlet.RemoveParticle)
* [`RAMotionFrame`](RAMotionFrame.md)
  * [`AddFreeBodyTranslationMotion`](RAMotionFrame.md#generated.RAMotionFrame.AddFreeBodyTranslationMotion)
  * [`AddFreeBodyRotationMotion`](RAMotionFrame.md#generated.RAMotionFrame.AddFreeBodyRotationMotion)
* [`RAWall`](RAWall.md)
  * [`GetCapillaryFrictionCoefficient`](RAWall.md#generated.RAWall.GetCapillaryFrictionCoefficient)
  * [`SetCapillaryFrictionCoefficient`](RAWall.md#generated.RAWall.SetCapillaryFrictionCoefficient)
  * [`GetMotionFrame`](RAWall.md#generated.RAWall.GetMotionFrame)
  * [`SetMotionFrame`](RAWall.md#generated.RAWall.SetMotionFrame)
* [`RASystemCouplingWall`](RASystemCouplingWall.md)
  * [`GetCapillaryFrictionCoefficient`](RASystemCouplingWall.md#generated.RASystemCouplingWall.GetCapillaryFrictionCoefficient)
  * [`SetCapillaryFrictionCoefficient`](RASystemCouplingWall.md#generated.RASystemCouplingWall.SetCapillaryFrictionCoefficient)
* [`RAReceivingConveyor`](RAReceivingConveyor.md)
  * [`GetCapillaryFrictionCoefficient`](RAReceivingConveyor.md#generated.RAReceivingConveyor.GetCapillaryFrictionCoefficient)
  * [`SetCapillaryFrictionCoefficient`](RAReceivingConveyor.md#generated.RAReceivingConveyor.SetCapillaryFrictionCoefficient)
* [`RAFeedConveyor`](RAFeedConveyor.md)
  * [`GetCapillaryFrictionCoefficient`](RAFeedConveyor.md#generated.RAFeedConveyor.GetCapillaryFrictionCoefficient)
  * [`SetCapillaryFrictionCoefficient`](RAFeedConveyor.md#generated.RAFeedConveyor.SetCapillaryFrictionCoefficient)
* [`RAFluidInlet`](RAFluidInlet.md)
  * [`GetInjectionDuration`](RAFluidInlet.md#generated.RAFluidInlet.GetInjectionDuration)
  * [`SetInjectionDuration`](RAFluidInlet.md#generated.RAFluidInlet.SetInjectionDuration)
  * [`GetPeriodic`](RAFluidInlet.md#generated.RAFluidInlet.GetPeriodic)
  * [`SetPeriodic`](RAFluidInlet.md#generated.RAFluidInlet.SetPeriodic)
  * [`EnablePeriodic`](RAFluidInlet.md#generated.RAFluidInlet.EnablePeriodic)
  * [`DisablePeriodic`](RAFluidInlet.md#generated.RAFluidInlet.DisablePeriodic)
  * [`IsPeriodicEnabled`](RAFluidInlet.md#generated.RAFluidInlet.IsPeriodicEnabled)
  * [`GetPeriod`](RAFluidInlet.md#generated.RAFluidInlet.GetPeriod)
  * [`SetPeriod`](RAFluidInlet.md#generated.RAFluidInlet.SetPeriod)
* [`RASimulatorRun`](RASimulatorRun.md)
  * [`GetProcessingUnit`](RASimulatorRun.md#generated.RASimulatorRun.GetProcessingUnit)
  * [`SetProcessingUnit`](RASimulatorRun.md#generated.RASimulatorRun.SetProcessingUnit)
* [`RASphSettings`]()
  * [`GetEnabled`]()
  * [`SetEnabled`]()
* [`RAParticleInlet`](RAParticleInlet.md)
  * [`AddParticle`](RAParticleInlet.md#generated.RAParticleInlet.AddParticle)
  * [`RemoveParticle`](RAParticleInlet.md#generated.RAParticleInlet.RemoveParticle)
* [`RACircularSurface`](RACircularSurface.md)
  * [`GetMotionFrame`](RACircularSurface.md#generated.RACircularSurface.GetMotionFrame)
  * [`SetMotionFrame`](RACircularSurface.md#generated.RACircularSurface.SetMotionFrame)
* [`RACoupledWall`](RACoupledWall.md)
  * [`GetMotionFrame`](RACoupledWall.md#generated.RACoupledWall.GetMotionFrame)
  * [`SetMotionFrame`](RACoupledWall.md#generated.RACoupledWall.SetMotionFrame)
* [`RACustomInput`](RACustomInput.md)
  * [`GetMotionFrame`](RACustomInput.md#generated.RACustomInput.GetMotionFrame)
  * [`SetMotionFrame`](RACustomInput.md#generated.RACustomInput.SetMotionFrame)
* [`RARectangularSurface`](RARectangularSurface.md)
  * [`GetMotionFrame`](RARectangularSurface.md#generated.RARectangularSurface.GetMotionFrame)
  * [`SetMotionFrame`](RARectangularSurface.md#generated.RARectangularSurface.SetMotionFrame)
* [`RASurface`](RASurface.md)
  * [`GetMotionFrame`](RASurface.md#generated.RASurface.GetMotionFrame)
  * [`SetMotionFrame`](RASurface.md#generated.RASurface.SetMotionFrame)
* [`RAProject`](RAProject.md)
  * [`HasUnsavedChanges`](RAProject.md#generated.RAProject.HasUnsavedChanges)

<a id="new-classes"></a>

### New Classes

* [`RAPlaneGroup`](RAPlaneGroup.md) - Wraps a series of plane user processes.

<a id="changed"></a>

## Changed

* [`RAStudy`](RAStudy.md)
  * [`CreateVolumetricInlet`](RAStudy.md#generated.RAStudy.CreateVolumetricInlet) - Added `use_box_center_as_seed_point` argument.
* [`RAMaterialCollection`](RAMaterialCollection.md)
  * [`AddSolidMaterial`](RAMaterialCollection.md#generated.RAMaterialCollection.AddSolidMaterial) - Added `material_name` argument.
  * [`AddFluidMaterial`](RAMaterialCollection.md#generated.RAMaterialCollection.AddFluidMaterial) - Added `material_name` argument.

<a id="deprecated"></a>

## Deprecated

* [`RASimulatorRun`](RASimulatorRun.md)
  * [`GetSimulationTarget`](RASimulatorRun.md#generated.RASimulatorRun.GetSimulationTarget)
  * [`SetSimulationTarget`](RASimulatorRun.md#generated.RASimulatorRun.SetSimulationTarget)

<a id="removed"></a>

## Removed

* [`RAAdditionalFeatures`]()
  * [`GetMeshedParticlesUpscalingEnabled`]() - Use `RAStudy.GetMeshedParticlesUpscaling` instead.
  * [`SetMeshedParticlesUpscalingEnabled`]() - Use `RAStudy.SetMeshedParticlesUpscalingEnabled` instead.
* [`RACalculations`](RACalculations.md)
  * [`CreateSelectionTagging`](RACalculations.md#generated.RACalculations.CreateSelectionTagging) - Use `CreateTagging` instead.
* [`RACFDCoupling`](RACFDCoupling.md)
  * [`SetupAirFlow`](RACFDCoupling.md#generated.RACFDCoupling.SetupAirFlow) - Use `SetupOneWayLBM` instead.
  * [`GetAirFlow`](RACFDCoupling.md#generated.RACFDCoupling.GetAirFlow) - Use `GetOneWayLBM` instead.
  * [`SetupFluentOneWaySteadyState`](RACFDCoupling.md#generated.RACFDCoupling.SetupFluentOneWaySteadyState) - Use `SetupOneWayFluent` instead.
  * [`SetupOneWayFluentSteadyState`](RACFDCoupling.md#generated.RACFDCoupling.SetupOneWayFluentSteadyState) - Use `SetupOneWayFluent` instead.
  * [`SetupFluentTwoWay`](RACFDCoupling.md#generated.RACFDCoupling.SetupFluentTwoWay) - Use `SetupTwoWayFluent` instead.
  * [`SetupConstantOneWay`](RACFDCoupling.md#generated.RACFDCoupling.SetupConstantOneWay) - Use `SetupOneWayConstant` instead.
  * [`SetupCFDConstantOneWayCouplingProcess`](RACFDCoupling.md#generated.RACFDCoupling.SetupCFDConstantOneWayCouplingProcess) - Use `SetupOneWayConstant` instead.
* [`RADomainSettings`](RADomainSettings.md)
  * [`GetBoundariesDirections`](RADomainSettings.md#generated.RADomainSettings.GetBoundariesDirections) - Use `GetCartesianPeriodicDirections` instead.
  * [`SetBoundariesDirections`](RADomainSettings.md#generated.RADomainSettings.SetBoundariesDirections) - Use `SetCartesianPeriodicDirections` instead.
  * [`GetValidBoundariesDirectionsValues`](RADomainSettings.md#generated.RADomainSettings.GetValidBoundariesDirectionsValues) - Use `GetValidCartesianPeriodicDirectionsValues` instead.
* [`RAFluentTwoWayCoupling`](RAFluentTwoWayCoupling.md)
  * [`GetMaximumVolumeFractionTarget`](RAFluentTwoWayCoupling.md#generated.RAFluentTwoWayCoupling.GetMaximumVolumeFractionTarget) - Use `GetSolidsMaximumVolumeFractionTarget` instead.
  * [`SetMaximumVolumeFractionTarget`](RAFluentTwoWayCoupling.md#generated.RAFluentTwoWayCoupling.SetMaximumVolumeFractionTarget) - Use `SetSolidsMaximumVolumeFractionTarget` instead.
* [`RAFluidMaterial`](RAFluidMaterial.md)
  * [`GetSoundSpeed`](RAFluidMaterial.md#generated.RAFluidMaterial.GetSoundSpeed) - Use `RASPHSettings.GetSoundSpeed` instead.
  * [`SetSoundSpeed`](RAFluidMaterial.md#generated.RAFluidMaterial.SetSoundSpeed) - Use `RASPHSettings.SetSoundSpeed` instead.
* [`RAGeometryCollection`](RAGeometryCollection.md)
  * [`IterInputGeometries`](RAGeometryCollection.md#generated.RAGeometryCollection.IterInputGeometries) - Use `IterInletGeometries` instead.
* [`RAInletsOutletsCollection`](RAInletsOutletsCollection.md)
  * [`AddContinuousInjection`](RAInletsOutletsCollection.md#generated.RAInletsOutletsCollection.AddContinuousInjection) - Use `AddParticleInlet` instead.
  * [`AddVolumeFill`](RAInletsOutletsCollection.md#generated.RAInletsOutletsCollection.AddVolumeFill) - Use `AddVolumetricInlet` instead.
* [`RAMaterialManager`]()
  * [`CreateMaterialAndRelatedInteractions`]() - Use `CreateSolidMaterialAndRelatedInteractions` instead.
  * [`RemoveMaterialAndRelatedInteractions`]() - Use `RemoveSolidMaterialAndRelatedInteractions` instead.
* [`RAParticleInletProperties`](RAParticleInletProperties.md)
  * [`GetTonnage`](RAParticleInletProperties.md#generated.RAParticleInletProperties.GetTonnage) - Use `GetMassFlowRate` instead.
  * [`SetTonnage`](RAParticleInletProperties.md#generated.RAParticleInletProperties.SetTonnage) - Use `SetMassFlowRate` instead.
* [`RAParticleInlet`](RAParticleInlet.md)
  * [`GetTonnageList`](RAParticleInlet.md#generated.RAParticleInlet.GetTonnageList) - Use `GetInputPropertiesList` instead.
  * [`EnablePeriodicDischarge`](RAParticleInlet.md#generated.RAParticleInlet.EnablePeriodicDischarge) - Use `EnablePeriodic` instead.
  * [`DisablePeriodicDischarge`](RAParticleInlet.md#generated.RAParticleInlet.DisablePeriodicDischarge) - Use `DisablePeriodic` instead.
  * [`IsPeriodicDischargeEnabled`](RAParticleInlet.md#generated.RAParticleInlet.IsPeriodicDischargeEnabled) - Use `IsPeriodicEnabled` instead.
  * [`GetPeriodicDischarge`](RAParticleInlet.md#generated.RAParticleInlet.GetPeriodicDischarge) - Use `GetPeriodic` instead.
  * [`SetPeriodicDischarge`](RAParticleInlet.md#generated.RAParticleInlet.SetPeriodicDischarge) - Use `SetPeriodic` instead.
  * [`GetDischargeTime`](RAParticleInlet.md#generated.RAParticleInlet.GetDischargeTime) - Use `GetInjectionDuration` instead.
  * [`SetDischargeTime`](RAParticleInlet.md#generated.RAParticleInlet.SetDischargeTime) - Use `SetInjectionDuration` instead.
* [`RAParticle`](RAParticle.md)
  * [`ImportFiberFromTXT`](RAParticle.md#generated.RAParticle.ImportFiberFromTXT) - Use `ImportCustomFiber` instead.
  * [`GetRotationAngle`](RAParticle.md#generated.RAParticle.GetRotationAngle) - Use `GetOrientationFromAngleAndVector` instead.
  * [`SetRotationAngle`](RAParticle.md#generated.RAParticle.SetRotationAngle) - Use `SetOrientationFromAngleAndVector` instead.
  * [`GetRotationVector`](RAParticle.md#generated.RAParticle.GetRotationVector) - Use `GetOrientationFromAngleAndVector` instead.
  * [`SetRotationVector`](RAParticle.md#generated.RAParticle.SetRotationVector) - Use `SetOrientationFromAngleAndVector` instead.
* [`RACubeProcess`](RACubeProcess.md)
  * [`GetCubeCenter`](RACubeProcess.md#generated.RACubeProcess.GetCubeCenter) - Use `GetCenter` instead.
  * [`SetCubeCenter`](RACubeProcess.md#generated.RACubeProcess.SetCubeCenter) - Use `SetCenter` instead.
  * [`GetCubeMagnitude`](RACubeProcess.md#generated.RACubeProcess.GetCubeMagnitude) - Use `GetSize` instead.
  * [`SetCubeMagnitude`](RACubeProcess.md#generated.RACubeProcess.SetCubeMagnitude) - Use `SetSize` instead.
  * [`GetCubeRotation`](RACubeProcess.md#generated.RACubeProcess.GetCubeRotation) - Use `GetRotation` instead.
  * [`SetCubeRotation`](RACubeProcess.md#generated.RACubeProcess.SetCubeRotation) - Use `SetRotation` instead.
* [`RAPlaneProcess`](RAPlaneProcess.md)
  * [`GetPlaneOrigin`](RAPlaneProcess.md#generated.RAPlaneProcess.GetPlaneOrigin) - Use `GetOrigin` instead.
  * [`SetPlaneOrigin`](RAPlaneProcess.md#generated.RAPlaneProcess.SetPlaneOrigin) - Use `SetOrigin` instead.
  * [`GetNormal`](RAPlaneProcess.md#generated.RAPlaneProcess.GetNormal) - Use `GetRelativeRotationVector` instead.
  * [`GetPlaneNormal`](RAPlaneProcess.md#generated.RAPlaneProcess.GetPlaneNormal) - Use `GetRelativeRotationVector` instead.
  * [`SetNormal`](RAPlaneProcess.md#generated.RAPlaneProcess.SetNormal) - Use `SetRelativeRotationVector` instead.
  * [`SetPlaneNormal`](RAPlaneProcess.md#generated.RAPlaneProcess.SetPlaneNormal) - Use `SetRelativeRotationVector` instead.
* [`RATrajectoryProcess`](RATrajectoryProcess.md)
  * [`SetStartingTimeStep`](RATrajectoryProcess.md#generated.RATrajectoryProcess.SetStartingTimeStep) - Use `SetStartingTime` instead.
  * [`GetStartingTimeStep`](RATrajectoryProcess.md#generated.RATrajectoryProcess.GetStartingTimeStep) - Use `GetStartingTime` instead.
  * [`SetNumberOfTimeSteps`](RATrajectoryProcess.md#generated.RATrajectoryProcess.SetNumberOfTimeSteps) - Use `SetNumberOfIntervals` instead.
  * [`GetNumberOfTimeSteps`](RATrajectoryProcess.md#generated.RATrajectoryProcess.GetNumberOfTimeSteps) - Use `GetNumberOfIntervals` instead.
* [`RAPolyhedronProcess`](RAPolyhedronProcess.md)
  * [`GetSize`](RAPolyhedronProcess.md#generated.RAPolyhedronProcess.GetSize) - Use `GetScale` instead.
  * [`SetSize`](RAPolyhedronProcess.md#generated.RAPolyhedronProcess.SetSize) - Use `SetScale` instead.
  * [`GetRotation`](RAPolyhedronProcess.md#generated.RAPolyhedronProcess.GetRotation) - Use `GetOrientation` instead.
  * [`SetRotation`](RAPolyhedronProcess.md#generated.RAPolyhedronProcess.SetRotation) - Use `SetOrientation` instead.
* [`RASurfaceUserProcess`](RASurfaceUserProcess.md)
  * [`GetRotation`](RASurfaceUserProcess.md#generated.RASurfaceUserProcess.GetRotation) - Use `GetOrientation` instead.
  * [`SetRotation`](RASurfaceUserProcess.md#generated.RASurfaceUserProcess.SetRotation) - Use `SetOrientation` instead.
  * [`GetSize`](RASurfaceUserProcess.md#generated.RASurfaceUserProcess.GetSize) - Use `GetScale` instead.
  * [`SetSize`](RASurfaceUserProcess.md#generated.RASurfaceUserProcess.SetSize) - Use `SetScale` instead.
* [`RASimulatorRun`](RASimulatorRun.md)
  * [`GetWearGeometryUpdateFrequency`](RASimulatorRun.md#generated.RASimulatorRun.GetWearGeometryUpdateFrequency) - Use `GetWearGeometryUpdateInterval` instead.
  * [`SetWearGeometryUpdateFrequency`](RASimulatorRun.md#generated.RASimulatorRun.SetWearGeometryUpdateFrequency) - Use `SetWearGeometryUpdateInterval` instead.
  * [`SetCollectForcesForFemAnalysis`](RASimulatorRun.md#generated.RASimulatorRun.SetCollectForcesForFemAnalysis) - Use `RAStudy.SetCollectForcesForFemAnalysis` instead.
  * [`GetCollectForcesForFemAnalysis`](RASimulatorRun.md#generated.RASimulatorRun.GetCollectForcesForFemAnalysis) - Use `RAStudy.GetCollectForcesForFemAnalysis` instead.
  * [`GetWearEnergySpectraBreakageStart`](RASimulatorRun.md#generated.RASimulatorRun.GetWearEnergySpectraBreakageStart) - Use `GetWearStart` or `GetBreakageStart` instead.
  * [`SetWearEnergySpectraBreakageStart`](RASimulatorRun.md#generated.RASimulatorRun.SetWearEnergySpectraBreakageStart) - Use `SetWearStart` or `SetBreakageStart` instead.
  * [`GetWearEnergySpectraBreakageDelayAfterRelease`](RASimulatorRun.md#generated.RASimulatorRun.GetWearEnergySpectraBreakageDelayAfterRelease) - Use `GetBreakageDelayAfterRelease` instead.
  * [`SetWearEnergySpectraBreakageDelayAfterRelease`](RASimulatorRun.md#generated.RASimulatorRun.SetWearEnergySpectraBreakageDelayAfterRelease) - Use `SetBreakageDelayAfterRelease` instead.
  * [`GetSimulationOutputFrequency`](RASimulatorRun.md#generated.RASimulatorRun.GetSimulationOutputFrequency) - Use `GetTimeInterval` instead.
  * [`SetSimulationOutputFrequency`](RASimulatorRun.md#generated.RASimulatorRun.SetSimulationOutputFrequency) - Use `SetTimeInterval` instead.
  * [`GetSolverCurvesOutputFrequency`](RASimulatorRun.md#generated.RASimulatorRun.GetSolverCurvesOutputFrequency) - Use `GetSolverCurvesFrequency` instead.
  * [`SetSolverCurvesOutputFrequency`](RASimulatorRun.md#generated.RASimulatorRun.SetSolverCurvesOutputFrequency) - Use `SetSolverCurvesFrequency` instead.
* [`RASPHSettings`](RASPHSettings.md)
  * [`GetBackgroundPressure`](RASPHSettings.md#generated.RASPHSettings.GetBackgroundPressure) - The Background Pressure parameter was removed from Rocky since 24R1.
  * [`SetBackgroundPressure`](RASPHSettings.md#generated.RASPHSettings.SetBackgroundPressure) - The Background Pressure parameter was removed from Rocky since 24R1.
* [`RAStudy`](RAStudy.md)
  * [`CreateParticleInput`](RAStudy.md#generated.RAStudy.CreateParticleInput) - Use `CreateParticleInlet` instead.
  * [`CreateContinuousInjection`](RAStudy.md#generated.RAStudy.CreateContinuousInjection) - Use `CreateParticleInlet` instead.
  * [`CreateVolumeFill`](RAStudy.md#generated.RAStudy.CreateVolumeFill) - Use `CreateVolumetricInlet` instead.
  * [`CreateInlet`](RAStudy.md#generated.RAStudy.CreateInlet) - Use `'CreateRectangularSurface` or `CreateCircularSurface'` instead.
  * [`ImportCustomGeometries`](RAStudy.md#generated.RAStudy.ImportCustomGeometries) - Use `ImportWall` instead.
  * [`ImportGeometries`](RAStudy.md#generated.RAStudy.ImportGeometries) - Use `ImportWall` instead.
  * [`GetCustomGeometriesFromFilename`](RAStudy.md#generated.RAStudy.GetCustomGeometriesFromFilename) - Use `GetWallFromFilename` instead.
  * [`GetGeometriesFromFilename`](RAStudy.md#generated.RAStudy.GetGeometriesFromFilename) - Use `GetWallFromFilename` instead.
  * [`ReplaceCustomGeometryTriangles`](RAStudy.md#generated.RAStudy.ReplaceCustomGeometryTriangles) - Use `ReplaceWallTriangles` instead.
  * [`ReplaceGeometryTriangles`](RAStudy.md#generated.RAStudy.ReplaceGeometryTriangles) - Use `ReplaceWallTriangles` instead.
  * [`RemoveCustomGeometries`](RAStudy.md#generated.RAStudy.RemoveCustomGeometries) - Use `RemoveWall` instead.
  * [`RemoveGeometries`](RAStudy.md#generated.RAStudy.RemoveGeometries) - Use `RemoveWall` instead.
  * [`GetParticleInputCollection`](RAStudy.md#generated.RAStudy.GetParticleInputCollection) - Use `GetInletsOutletsCollection` instead.
  * [`GetParticlesCalculations`](RAStudy.md#generated.RAStudy.GetParticlesCalculations) - Use `GetCalculations` instead.
  * [`CreateMaterialAndRelatedInteractions`](RAStudy.md#generated.RAStudy.CreateMaterialAndRelatedInteractions) - Use `CreateSolidMaterialAndRelatedInteractions` instead.
  * [`RemoveMaterialAndRelatedInteractions`](RAStudy.md#generated.RAStudy.RemoveMaterialAndRelatedInteractions) - Use `RemoveSolidMaterialAndRelatedInteractions` instead.
* [`RAVolumetricInlet`](RAVolumetricInlet.md)
  * [`GetCustomGeometries`](RAVolumetricInlet.md#generated.RAVolumetricInlet.GetCustomGeometries) - Use `GetGeometries` instead.
  * [`SetCustomGeometries`](RAVolumetricInlet.md#generated.RAVolumetricInlet.SetCustomGeometries) - Use `SetGeometries` instead.
  * [`GetUseCustomGeometriesToCompute`](RAVolumetricInlet.md#generated.RAVolumetricInlet.GetUseCustomGeometriesToCompute) - Use `GetUseGeometriesToCompute` instead.
  * [`SetUseCustomGeometriesToCompute`](RAVolumetricInlet.md#generated.RAVolumetricInlet.SetUseCustomGeometriesToCompute) - Use `SetUseGeometriesToCompute` instead.
* [`RAWall`](RAWall.md)
  * [`GetUseWear`](RAWall.md#generated.RAWall.GetUseWear) - Use `GetWearModel` instead.
  * [`SetUseWear`](RAWall.md#generated.RAWall.SetUseWear) - Use `SetWearModel` instead.
  * [`GetHorizontalOffset`](RAWall.md#generated.RAWall.GetHorizontalOffset) - Use `GetTranslation` instead.
  * [`SetHorizontalOffset`](RAWall.md#generated.RAWall.SetHorizontalOffset) - Use `SetTranslation` instead.
  * [`GetVerticalOffset`](RAWall.md#generated.RAWall.GetVerticalOffset) - Use `GetTranslation` instead.
  * [`SetVerticalOffset`](RAWall.md#generated.RAWall.SetVerticalOffset) - Use `SetTranslation` instead.
  * [`GetOutOfPlaneOffset`](RAWall.md#generated.RAWall.GetOutOfPlaneOffset) - Use `GetTranslation` instead.
  * [`SetOutOfPlaneOffset`](RAWall.md#generated.RAWall.SetOutOfPlaneOffset) - Use `SetTranslation` instead.
* [`RAMotionFrame`](RAMotionFrame.md)
  * [`GetRotationAngle`](RAMotionFrame.md#generated.RAMotionFrame.GetRotationAngle) - Use `GetOrientationFromAngleAndVector` instead.
  * [`SetRotationAngle`](RAMotionFrame.md#generated.RAMotionFrame.SetRotationAngle) - Use `SetOrientationFromAngleAndVector` instead.
  * [`GetRelativeRotationVector`](RAMotionFrame.md#generated.RAMotionFrame.GetRelativeRotationVector) - Use `GetOrientationFromAngleAndVector` instead.
  * [`SetRelativeRotationVector`](RAMotionFrame.md#generated.RAMotionFrame.SetRelativeRotationVector) - Use `SetOrientationFromAngleAndVector` instead.
* [`RAMaterialCollection`](RAMaterialCollection.md)
  * [`GetDefaultMaterials`](RAMaterialCollection.md#generated.RAMaterialCollection.GetDefaultMaterials) - Use `GetDefaultSolidMaterials` instead.
  * [`GetMaterial`](RAMaterialCollection.md#generated.RAMaterialCollection.GetMaterial) - Use `GetSolidMaterial` instead.
