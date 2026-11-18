

# Release notes for 2027 R1

<a id="added"></a>

## Added

<a id="new-methods"></a>

### New Methods

* [`RAVolumetricInlet`](RAVolumetricInlet.md)
  * [`SetRegionBoundingBox`](RAVolumetricInlet.md#generated.RAVolumetricInlet.SetRegionBoundingBox)
  * [`GetRegionBoundingBox`](RAVolumetricInlet.md#generated.RAVolumetricInlet.GetRegionBoundingBox)
  * [`GetUseRegionCenterAsSeedPoint`](RAVolumetricInlet.md#generated.RAVolumetricInlet.GetUseRegionCenterAsSeedPoint)
  * [`SetUseRegionCenterAsSeedPoint`](RAVolumetricInlet.md#generated.RAVolumetricInlet.SetUseRegionCenterAsSeedPoint)
  * [`EnableUseRegionCenterAsSeedPoint`](RAVolumetricInlet.md#generated.RAVolumetricInlet.EnableUseRegionCenterAsSeedPoint)
  * [`DisableUseRegionCenterAsSeedPoint`](RAVolumetricInlet.md#generated.RAVolumetricInlet.DisableUseRegionCenterAsSeedPoint)
  * [`IsUseRegionCenterAsSeedPointEnabled`](RAVolumetricInlet.md#generated.RAVolumetricInlet.IsUseRegionCenterAsSeedPointEnabled)
  * [`GetSphPacking`](RAVolumetricInlet.md#generated.RAVolumetricInlet.GetSphPacking)
  * [`SetSphPacking`](RAVolumetricInlet.md#generated.RAVolumetricInlet.SetSphPacking)
  * [`EnableSphPacking`](RAVolumetricInlet.md#generated.RAVolumetricInlet.EnableSphPacking)
  * [`DisableSphPacking`](RAVolumetricInlet.md#generated.RAVolumetricInlet.DisableSphPacking)
  * [`IsSphPackingEnabled`](RAVolumetricInlet.md#generated.RAVolumetricInlet.IsSphPackingEnabled)
* [`RAFluidInlet`](RAFluidInlet.md)
  * [`GetSphPacking`](RAFluidInlet.md#generated.RAFluidInlet.GetSphPacking)
  * [`SetSphPacking`](RAFluidInlet.md#generated.RAFluidInlet.SetSphPacking)
  * [`EnableSphPacking`](RAFluidInlet.md#generated.RAFluidInlet.EnableSphPacking)
  * [`DisableSphPacking`](RAFluidInlet.md#generated.RAFluidInlet.DisableSphPacking)
  * [`IsSphPackingEnabled`](RAFluidInlet.md#generated.RAFluidInlet.IsSphPackingEnabled)
* [`RAModule`](RAModule.md)
  * [`GetAllModuleProperties`](RAModule.md#generated.RAModule.GetAllModuleProperties)
* [`RAFluidMaterial`](RAFluidMaterial.md)
  * [`GetRheologicalModel`](RAFluidMaterial.md#generated.RAFluidMaterial.GetRheologicalModel)
  * [`GetNewtonianRheologicalModel`](RAFluidMaterial.md#generated.RAFluidMaterial.GetNewtonianRheologicalModel)
  * [`GetHerschelBulkleyRheologicalModel`](RAFluidMaterial.md#generated.RAFluidMaterial.GetHerschelBulkleyRheologicalModel)
  * [`GetRheologicalModel`](RAFluidMaterial.md#generated.RAFluidMaterial.GetRheologicalModel)
  * [`SetRheologicalModelType`](RAFluidMaterial.md#generated.RAFluidMaterial.SetRheologicalModelType)
  * [`GetRheologicalModelType`](RAFluidMaterial.md#generated.RAFluidMaterial.GetRheologicalModelType)
* [`RAFluentSemiResolvedCoupling`](RAFluentSemiResolvedCoupling.md)
  * [`SetTargetGpus`](RAFluentSemiResolvedCoupling.md#generated.RAFluentSemiResolvedCoupling.SetTargetGpus)
  * [`GetTargetGpus`](RAFluentSemiResolvedCoupling.md#generated.RAFluentSemiResolvedCoupling.GetTargetGpus)
  * [`GetAvailableTargetGpus`](RAFluentSemiResolvedCoupling.md#generated.RAFluentSemiResolvedCoupling.GetAvailableTargetGpus)
* [`RAFluentTwoWayCoupling`](RAFluentTwoWayCoupling.md)
  * [`SetTargetGpus`](RAFluentTwoWayCoupling.md#generated.RAFluentTwoWayCoupling.SetTargetGpus)
  * [`GetTargetGpus`](RAFluentTwoWayCoupling.md#generated.RAFluentTwoWayCoupling.GetTargetGpus)
  * [`GetAvailableTargetGpus`](RAFluentTwoWayCoupling.md#generated.RAFluentTwoWayCoupling.GetAvailableTargetGpus)
* [`RACalculations`](RACalculations.md)
  * [`CreateFrameBasedResultsCalculator`](RACalculations.md#generated.RACalculations.CreateFrameBasedResultsCalculator)
* [`RADomainSettings`](RADomainSettings.md)
  * [`GetBoundingBox`](RADomainSettings.md#generated.RADomainSettings.GetBoundingBox)
* [`RASurface`](RASurface.md)
  * [`GetOriginalCenterCoordinates`](RASurface.md#generated.RASurface.GetOriginalCenterCoordinates)
  * [`GetOriginalNormal`](RASurface.md#generated.RASurface.GetOriginalNormal)
  * [`GetPlanarDimensions`](RASurface.md#generated.RASurface.GetPlanarDimensions)
* [`RAUserProcessCollection`](RAUserProcessCollection.md)
  * [`RemoveProcess`](RAUserProcessCollection.md#generated.RAUserProcessCollection.RemoveProcess)

  Only available for Freeflow:
  * [`GetAdaptiveSphSizingEnabled`](RASPHSettings.md#generated.RASPHSettings.GetAdaptiveSphSizingEnabled)
  * [`SetAdaptiveSphSizingEnabled`](RASPHSettings.md#generated.RASPHSettings.SetAdaptiveSphSizingEnabled)
  * [`EnableAdaptiveSphSizing`](RASPHSettings.md#generated.RASPHSettings.EnableAdaptiveSphSizing)
  * [`DisableAdaptiveSphSizing`](RASPHSettings.md#generated.RASPHSettings.DisableAdaptiveSphSizing)
  * [`IsAdaptiveSphSizingEnabled`](RASPHSettings.md#generated.RASPHSettings.IsAdaptiveSphSizingEnabled)
  * [`GetSphAdaptiveSizing`](RASPHSettings.md#generated.RASPHSettings.GetSphAdaptiveSizing)

<a id="new-classes"></a>

### New Classes

* [`RAClipPlaneCollection`](RAClipPlaneCollection.md)
* [`RAClipPlane`](RAClipPlane.md)
* [`RASPHResidenceTime`](RASPHResidenceTime.md)
* [`RAHerschelBulkleyRheologicalModel`]()
* [`RANewtonianRheologicalModel`]()
* [`RAOutputData`](RAOutputData.md)
* [`RARelativeVelocityCalculator`]()
* [`RARoiRefinementItem`](RARoiRefinementItem.md)
* [`RARoiRefinementItemList`](RARoiRefinementItemList.md)
* [`RASphAdaptiveSizing`](RASphAdaptiveSizing.md)
* [`RALocalExecutionSettings`](RALocalExecutionSettings.md)
* [`RAMpiSettings`](RAMpiSettings.md)

<a id="changed"></a>

## Changed

* [`RASimulatorRun`](RASimulatorRun.md)
  * `GetStandardOutputPropertyEnabled` moved to [`RAOutputData.GetStandardOutputPropertyEnabled`](RAOutputData.md#generated.RAOutputData.GetStandardOutputPropertyEnabled)
  * `SetStandardOutputPropertyEnabled` moved to [`RAOutputData.SetStandardOutputPropertyEnabled`](RAOutputData.md#generated.RAOutputData.SetStandardOutputPropertyEnabled)
  * `GetModulesOutputPropertyEnabled` moved to [`RAOutputData.GetModulesOutputPropertyEnabled`](RAOutputData.md#generated.RAOutputData.GetModulesOutputPropertyEnabled)
  * `SetModulesOutputPropertyEnabled` moved to [`RAOutputData.SetModulesOutputPropertyEnabled`](RAOutputData.md#generated.RAOutputData.SetModulesOutputPropertyEnabled)
  * `GetAvailableStandardOutputProperties` moved to [`RAOutputData.GetAvailableStandardOutputProperties`](RAOutputData.md#generated.RAOutputData.GetAvailableStandardOutputProperties)
  * `GetAvailableModulesOutputProperties` moved to [`RAOutputData.GetAvailableModulesOutputProperties`](RAOutputData.md#generated.RAOutputData.GetAvailableModulesOutputProperties)
  * `GetStandardOutputPropertiesData` moved to [`RAOutputData.GetStandardOutputPropertiesData`](RAOutputData.md#generated.RAOutputData.GetStandardOutputPropertiesData)
  * `SetStandardOutputPropertiesData` moved to [`RAOutputData.SetStandardOutputPropertiesData`](RAOutputData.md#generated.RAOutputData.SetStandardOutputPropertiesData)
  * `GetModulesOutputPropertiesData` moved to [`RAOutputData.GetModulesOutputPropertiesData`](RAOutputData.md#generated.RAOutputData.GetModulesOutputPropertiesData)
  * `SetModulesOutputPropertiesData` moved to [`RAOutputData.SetModulesOutputPropertiesData`](RAOutputData.md#generated.RAOutputData.SetModulesOutputPropertiesData)
  * `RestoreOutputPropertiesDefaults` moved to [`RAOutputData.RestoreOutputPropertiesDefaults`](RAOutputData.md#generated.RAOutputData.RestoreOutputPropertiesDefaults)
  * `GetNumberOfProcessors` moved to [`RALocalExecutionSettings.GetNumberOfProcessors`](RALocalExecutionSettings.md#RALocalExecutionSettings.GetNumberOfProcessors)
  * `SetNumberOfProcessors` moved to [`RALocalExecutionSettings.SetNumberOfProcessors`](RALocalExecutionSettings.md#RALocalExecutionSettings.SetNumberOfProcessors)
  * `GetMultiGpuSlicingDirection` moved to [`RALocalExecutionSettings.GetMultiGpuSlicingDirection`](RALocalExecutionSettings.md#RALocalExecutionSettings.GetMultiGpuSlicingDirection)
  * `SetMultiGpuSlicingDirection` moved to [`RALocalExecutionSettings.SetMultiGpuSlicingDirection`](RALocalExecutionSettings.md#RALocalExecutionSettings.SetMultiGpuSlicingDirection)
  * `GetProcessingUnit` moved to [`RALocalExecutionSettings.GetProcessingUnit`](RALocalExecutionSettings.md#RALocalExecutionSettings.GetProcessingUnit)
  * `SetProcessingUnit` moved to [`RALocalExecutionSettings.SetProcessingUnit`](RALocalExecutionSettings.md#RALocalExecutionSettings.SetProcessingUnit)
  * `GetTargetGpu` moved to [`RALocalExecutionSettings.GetTargetGpu`](RALocalExecutionSettings.md#RALocalExecutionSettings.GetTargetGpu)
  * `SetTargetGpu` moved to [`RALocalExecutionSettings.SetTargetGpu`](RALocalExecutionSettings.md#RALocalExecutionSettings.SetTargetGpu)
  * `GetTargetGpus` moved to [`RALocalExecutionSettings.GetTargetGpus`](RALocalExecutionSettings.md#RALocalExecutionSettings.GetTargetGpus)
  * `SetTargetGpus` moved to [`RALocalExecutionSettings.SetTargetGpus`](RALocalExecutionSettings.md#RALocalExecutionSettings.SetTargetGpus)
* [`RASPHEulerianSolution`](RASPHEulerianSolution.md)
  * `GetEulerianSolutionEnabled` renamed to [`RAOutputData.GetSphEulerianSolutionEnabled`](RAOutputData.md#generated.RAOutputData.GetEulerianSolutionEnabled)
  * `SetEulerianSolutionEnabled` renamed to [`RAOutputData.SetSphEulerianSolutionEnabled`](RAOutputData.md#generated.RAOutputData.SetEulerianSolutionEnabled)
  * `EnableEulerianSolutionEnabled` renamed to [`RAOutputData.EnableSphEulerianSolution`](RAOutputData.md#generated.RAOutputData.EnableEulerianSolution)
  * `DisableEulerianSolutionEnabled` renamed to [`RAOutputData.DisableSphEulerianSolution`](RAOutputData.md#generated.RAOutputData.DisableEulerianSolution)
  * `IsEulerianSolutionEnabledEnabled` renamed to [`RAOutputData.IsSphEulerianSolutionEnabled`](RAOutputData.md#generated.RAOutputData.IsEulerianSolutionEnabled)
* [`RASPHSettings`](RASPHSettings.md)
  * `GetEulerianSolutionEnabled` renamed to [`RAOutputData.GetSphEulerianSolutionEnabled`](RAOutputData.md#generated.RAOutputData.GetEulerianSolutionEnabled)
  * `SetEulerianSolutionEnabled` renamed to [`RAOutputData.SetSphEulerianSolutionEnabled`](RAOutputData.md#generated.RAOutputData.SetEulerianSolutionEnabled)
  * `EnableEulerianSolutionEnabled` renamed to [`RAOutputData.EnableSphEulerianSolution`](RAOutputData.md#generated.RAOutputData.EnableEulerianSolution)
  * `DisableEulerianSolutionEnabled` renamed to [`RAOutputData.DisableSphEulerianSolution`](RAOutputData.md#generated.RAOutputData.DisableEulerianSolution)
  * `IsEulerianSolutionEnabled` renamed to [`RAOutputData.IsSphEulerianSolutionEnabled`](RAOutputData.md#generated.RAOutputData.IsEulerianSolutionEnabled)
* [`RAParticleJointsData`](RAParticleJointsData.md)
  * `GetCollectJointData` moved to [`RAOutputData.GetCollectJointData`](RAOutputData.md#generated.RAOutputData.GetCollectJointData)
  * `SetCollectJointData` moved to [`RAOutputData.SetCollectJointData`](RAOutputData.md#generated.RAOutputData.SetCollectJointData)
  * `EnableCollectJointData` moved to [`RAOutputData.EnableCollectJointData`](RAOutputData.md#generated.RAOutputData.EnableCollectJointData)
  * `DisableCollectJointData` moved to [`RAOutputData.DisableCollectJointData`](RAOutputData.md#generated.RAOutputData.DisableCollectJointData)
  * `IsCollectJointDataEnabled` moved to [`RAOutputData.IsCollectJointDataEnabled`](RAOutputData.md#generated.RAOutputData.IsCollectJointDataEnabled)
* [`RAContactData`](RAContactData.md)
  * `GetCollectContactsData` moved to [`RAOutputData.GetCollectContactsData`](RAOutputData.md#generated.RAOutputData.GetCollectContactsData)
  * `SetCollectContactsData` moved to [`RAOutputData.SetCollectContactsData`](RAOutputData.md#generated.RAOutputData.SetCollectContactsData)
  * `EnableCollectContactsData` moved to [`RAOutputData.EnableCollectContactsData`](RAOutputData.md#generated.RAOutputData.EnableCollectContactsData)
  * `DisableCollectContactsData` moved to [`RAOutputData.DisableCollectContactsData`](RAOutputData.md#generated.RAOutputData.DisableCollectContactsData)
  * `IsCollectContactsDataEnabled` moved to [`RAOutputData.IsCollectContactsDataEnabled`](RAOutputData.md#generated.RAOutputData.IsCollectContactsDataEnabled)
  * `GetIncludeAdhesiveContacts` moved to [`RAOutputData.GetIncludeAdhesiveContacts`](RAOutputData.md#generated.RAOutputData.GetIncludeAdhesiveContacts)
  * `SetIncludeAdhesiveContacts` moved to [`RAOutputData.SetIncludeAdhesiveContacts`](RAOutputData.md#generated.RAOutputData.SetIncludeAdhesiveContacts)
  * `EnableIncludeAdhesiveContacts` moved to [`RAOutputData.EnableIncludeAdhesiveContacts`](RAOutputData.md#generated.RAOutputData.EnableIncludeAdhesiveContacts)
  * `DisableIncludeAdhesiveContacts` moved to [`RAOutputData.DisableIncludeAdhesiveContacts`](RAOutputData.md#generated.RAOutputData.DisableIncludeAdhesiveContacts)
  * `IsIncludeAdhesiveContactsEnabled` moved to [`RAOutputData.IsIncludeAdhesiveContactsEnabled`](RAOutputData.md#generated.RAOutputData.IsIncludeAdhesiveContactsEnabled)
* [`RAParticleAssemblyPart`](RAParticleAssemblyPart.md)
  * [`GetRotationX`](RAParticleAssemblyPart.md#generated.RAParticleAssemblyPart.GetRotationX) unit argument no longer accepts length units.
  * [`GetRotationY`](RAParticleAssemblyPart.md#generated.RAParticleAssemblyPart.GetRotationY) unit argument no longer accepts length units.
  * [`GetRotationZ`](RAParticleAssemblyPart.md#generated.RAParticleAssemblyPart.GetRotationZ) unit argument no longer accepts length units.

<a id="deprecated"></a>

## Deprecated

* [`RAVolumetricInlet`](RAVolumetricInlet.md)
  * [`GetUseBoxCenterAsSeedPoint`](RAVolumetricInlet.md#generated.RAVolumetricInlet.GetUseBoxCenterAsSeedPoint)
  * [`SetUseBoxCenterAsSeedPoint`](RAVolumetricInlet.md#generated.RAVolumetricInlet.SetUseBoxCenterAsSeedPoint)
  * [`EnableUseBoxCenterAsSeedPoint`](RAVolumetricInlet.md#generated.RAVolumetricInlet.EnableUseBoxCenterAsSeedPoint)
  * [`DisableUseBoxCenterAsSeedPoint`](RAVolumetricInlet.md#generated.RAVolumetricInlet.DisableUseBoxCenterAsSeedPoint)
  * [`IsUseBoxCenterAsSeedPointEnabled`](RAVolumetricInlet.md#generated.RAVolumetricInlet.IsUseBoxCenterAsSeedPointEnabled)
* [`RATimeStatistics`](RATimeStatistics.md)
  * [`CreateFor`](RATimeStatistics.md#generated.RATimeStatistics.CreateFor)
* [`RAFluidMaterial`](RAFluidMaterial.md)
  * [`SetViscosity`](RAFluidMaterial.md#generated.RAFluidMaterial.SetViscosity)
  * [`GetViscosity`](RAFluidMaterial.md#generated.RAFluidMaterial.GetViscosity)

<a id="removed"></a>

## Removed

* [`RASimulatorRun`](RASimulatorRun.md)
  * `GetAvailableOutputRoots`
  * `GetAvailableOutputRootProperties`
  * `GetOutputRootEnabled`
  * `SetOutputRootEnabled`
  * `GetOutputPropertyEnabled`
  * `SetOutputPropertyEnabled`
