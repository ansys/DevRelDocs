

# Release notes for 2025 R2

<a id="added"></a>

## Added

<a id="new-methods"></a>

### New Methods

* [`RASolidMaterial`](RASolidMaterial.md)
  * [`GetBulkSolidFraction`](RASolidMaterial.md#generated.RASolidMaterial.GetBulkSolidFraction)
  * [`SetBulkSolidFraction`](RASolidMaterial.md#generated.RASolidMaterial.SetBulkSolidFraction)
* `RockyApiApplication`
  * `DuplicateWindow`
* [`RACubeGroup`](RACubeGroup.md)
  * [`AddProcess`](RACubeGroup.md#generated.RACubeGroup.AddProcess) - Add a new cube in the group using the given process as source.
  * [`SetCenter`](RACubeGroup.md#generated.RACubeGroup.SetCenter)
  * [`GetCenterAfterMovement`](RACubeGroup.md#generated.RACubeGroup.GetCenterAfterMovement)
  * [`GetSize`](RACubeGroup.md#generated.RACubeGroup.GetSize)
  * [`SetSize`](RACubeGroup.md#generated.RACubeGroup.SetSize)
  * [`SetRotation`](RACubeGroup.md#generated.RACubeGroup.SetRotation)
* [`RACylinderGroup`](RACylinderGroup.md)
  * [`AddProcess`](RACylinderGroup.md#generated.RACylinderGroup.AddProcess) - Add a new cube in the group using the given process as source.
  * [`GetCenter`](RACylinderGroup.md#generated.RACylinderGroup.GetCenter)
  * [`SetCenter`](RACylinderGroup.md#generated.RACylinderGroup.SetCenter)
  * [`GetCenterAfterMovement`](RACylinderGroup.md#generated.RACylinderGroup.GetCenterAfterMovement)
  * [`GetSize`](RACylinderGroup.md#generated.RACylinderGroup.GetSize)
  * [`SetSize`](RACylinderGroup.md#generated.RACylinderGroup.SetSize)
  * [`SetRotation`](RACylinderGroup.md#generated.RACylinderGroup.SetRotation)
  * [`GetRotation`](RACylinderGroup.md#generated.RACylinderGroup.GetRotation)
  * [`SetInternalFactor`](RACylinderGroup.md#generated.RACylinderGroup.SetInternalFactor)
  * [`GetInternalFactor`](RACylinderGroup.md#generated.RACylinderGroup.GetInternalFactor)
  * [`SetInitialAngle`](RACylinderGroup.md#generated.RACylinderGroup.SetInitialAngle)
  * [`GetInitialAngle`](RACylinderGroup.md#generated.RACylinderGroup.GetInitialAngle)
  * [`SetFinalAngle`](RACylinderGroup.md#generated.RACylinderGroup.SetFinalAngle)
  * [`GetFinalAngle`](RACylinderGroup.md#generated.RACylinderGroup.GetFinalAngle)
* [`RAVolumetricInlet`](RAVolumetricInlet.md)
  * [`GetOrientation`](RAVolumetricInlet.md#generated.RAVolumetricInlet.GetOrientation)
  * [`SetOrientation`](RAVolumetricInlet.md#generated.RAVolumetricInlet.SetOrientation)
  * [`SetOrientationFromAngles`](RAVolumetricInlet.md#generated.RAVolumetricInlet.SetOrientationFromAngles)
  * [`GetOrientationFromAngles`](RAVolumetricInlet.md#generated.RAVolumetricInlet.GetOrientationFromAngles)
  * [`SetOrientationFromAngleAndVector`](RAVolumetricInlet.md#generated.RAVolumetricInlet.SetOrientationFromAngleAndVector)
  * [`GetOrientationFromAngleAndVector`](RAVolumetricInlet.md#generated.RAVolumetricInlet.GetOrientationFromAngleAndVector)
  * [`SetOrientationFromBasisVector`](RAVolumetricInlet.md#generated.RAVolumetricInlet.SetOrientationFromBasisVector)
  * [`GetOrientationFromBasisVector`](RAVolumetricInlet.md#generated.RAVolumetricInlet.GetOrientationFromBasisVector)
* [`RASPHSettings`](RASPHSettings.md)
  * [`GetShepardFilterOnDensityEnabled`](RASPHSettings.md#generated.RASPHSettings.GetShepardFilterOnDensityEnabled)
  * [`SetShepardFilterOnDensityEnabled`](RASPHSettings.md#generated.RASPHSettings.SetShepardFilterOnDensityEnabled)
  * [`EnableShepardFilterOnDensity`](RASPHSettings.md#generated.RASPHSettings.EnableShepardFilterOnDensity)
  * [`DisableShepardFilterOnDensity`](RASPHSettings.md#generated.RASPHSettings.DisableShepardFilterOnDensity)
  * [`IsShepardFilterOnDensityEnabled`](RASPHSettings.md#generated.RASPHSettings.IsShepardFilterOnDensityEnabled)
  * [`GetShepardFilterOnPressureEnabled`](RASPHSettings.md#generated.RASPHSettings.GetShepardFilterOnPressureEnabled)
  * [`SetShepardFilterOnPressureEnabled`](RASPHSettings.md#generated.RASPHSettings.SetShepardFilterOnPressureEnabled)
  * [`EnableShepardFilterOnPressure`](RASPHSettings.md#generated.RASPHSettings.EnableShepardFilterOnPressure)
  * [`DisableShepardFilterOnPressure`](RASPHSettings.md#generated.RASPHSettings.DisableShepardFilterOnPressure)
  * [`IsShepardFilterOnPressureEnabled`](RASPHSettings.md#generated.RASPHSettings.IsShepardFilterOnPressureEnabled)
* [`RAParticle`](RAParticle.md)
  * [`GetAllowSelfContacts`](RAParticle.md#generated.RAParticle.GetAllowSelfContacts)
  * [`SetAllowSelfContacts`](RAParticle.md#generated.RAParticle.SetAllowSelfContacts)
  * [`GetDeformationModel`](RAParticle.md#generated.RAParticle.GetDeformationModel)
  * [`SetDeformationModel`](RAParticle.md#generated.RAParticle.SetDeformationModel)
  * [`GetValidDeformationModelValues`](RAParticle.md#generated.RAParticle.GetValidDeformationModelValues)
  * [`GetInternalFriction`](RAParticle.md#generated.RAParticle.GetInternalFriction)
  * [`SetInternalFriction`](RAParticle.md#generated.RAParticle.SetInternalFriction)
  * [`GetPlasticLimit`](RAParticle.md#generated.RAParticle.GetPlasticLimit)
  * [`SetPlasticLimit`](RAParticle.md#generated.RAParticle.SetPlasticLimit)
* [`RASimulatorRun`](RASimulatorRun.md)
  * [`GetIterDefAccur`](RASimulatorRun.md#generated.RASimulatorRun.GetIterDefAccur)
  * [`SetIterDefAccur`](RASimulatorRun.md#generated.RASimulatorRun.SetIterDefAccur)
  * [`GetLengthDefAccur`](RASimulatorRun.md#generated.RASimulatorRun.GetLengthDefAccur)
  * [`SetLengthDefAccur`](RASimulatorRun.md#generated.RASimulatorRun.SetLengthDefAccur)
  * [`GetMassMatrixDef`](RASimulatorRun.md#generated.RASimulatorRun.GetMassMatrixDef)
  * [`SetMassMatrixDef`](RASimulatorRun.md#generated.RASimulatorRun.SetMassMatrixDef)
  * [`GetValidMassMatrixDefValues`](RASimulatorRun.md#generated.RASimulatorRun.GetValidMassMatrixDefValues)
  * [`GetMinVolumeFactor`](RASimulatorRun.md#generated.RASimulatorRun.GetMinVolumeFactor)
  * [`SetMinVolumeFactor`](RASimulatorRun.md#generated.RASimulatorRun.SetMinVolumeFactor)
  * [`GetNiterDefMax`](RASimulatorRun.md#generated.RASimulatorRun.GetNiterDefMax)
  * [`SetNiterDefMax`](RASimulatorRun.md#generated.RASimulatorRun.SetNiterDefMax)
  * [`GetOverrelaxationCoefficient`](RASimulatorRun.md#generated.RASimulatorRun.GetOverrelaxationCoefficient)
  * [`SetOverrelaxationCoefficient`](RASimulatorRun.md#generated.RASimulatorRun.SetOverrelaxationCoefficient)
  * [`GetJointElasticRatio`](RASimulatorRun.md#generated.RASimulatorRun.GetJointElasticRatio)
  * [`SetJointElasticRatio`](RASimulatorRun.md#generated.RASimulatorRun.SetJointElasticRatio)

<a id="new-classes"></a>

### New Classes

* [`RACubeGroup`](RACubeGroup.md) - Wraps a series of user cubes.
* [`RACylinderGroup`](RACylinderGroup.md) - Wraps a series of user cylinders.

<a id="changed"></a>

## Changed

<a id="deprecated"></a>

## Deprecated

* [`RAMaterialCollection`](RAMaterialCollection.md)
  * [`GetBulkSolidFraction`](RAMaterialCollection.md#generated.RAMaterialCollection.GetBulkSolidFraction)
  * [`SetBulkSolidFraction`](RAMaterialCollection.md#generated.RAMaterialCollection.SetBulkSolidFraction)
* `RockyApiApplication`
  * `Duplicate3DWindow`
* [`RASimulatorRun`](RASimulatorRun.md)
  * [`GetUseDpmBlockingEffectForSinglePhaseSimulations`](RASimulatorRun.md#generated.RASimulatorRun.GetUseDpmBlockingEffectForSinglePhaseSimulations)
  * [`SetUseDpmBlockingEffectForSinglePhaseSimulations`](RASimulatorRun.md#generated.RASimulatorRun.SetUseDpmBlockingEffectForSinglePhaseSimulations)
  * [`EnableDpmBlockingEffectForSinglePhaseSimulations`](RASimulatorRun.md#generated.RASimulatorRun.EnableDpmBlockingEffectForSinglePhaseSimulations)
  * [`DisableDpmBlockingEffectForSinglePhaseSimulations`](RASimulatorRun.md#generated.RASimulatorRun.DisableDpmBlockingEffectForSinglePhaseSimulations)
  * [`IsDpmBlockingEffectForSinglePhaseSimulationsEnabled`](RASimulatorRun.md#generated.RASimulatorRun.IsDpmBlockingEffectForSinglePhaseSimulationsEnabled)
* [`RAStudy`](RAStudy.md)
  * [`CreateVolumetricInlet`](RAStudy.md#generated.RAStudy.CreateVolumetricInlet) - `particle` and `mass` arguments are deprecated.
  * [`GetAirFlow`](RAStudy.md#generated.RAStudy.GetAirFlow) - Use `GetCFDCoupling` to obtain the coupling object.

<a id="removed"></a>

## Removed
