# `DataModelObjectCategory`

<a id="ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory"></a>

#### *class* Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory(\*args, \*\*kwds)

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

Specifies the category of the F:Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory.DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Attributes

| Name |
| ------------------------------------------------------------------------------------------------------------------------------- |
| [`AMBondConnection`](#DataModelObjectCategory.AMBondConnection) |
| [`AMBuildSettings`](#DataModelObjectCategory.AMBuildSettings) |
| [`AMOverhangConstraint`](#DataModelObjectCategory.AMOverhangConstraint) |
| [`AMProcess`](#DataModelObjectCategory.AMProcess) |
| [`AMSupport`](#DataModelObjectCategory.AMSupport) |
| [`AMSupportGroup`](#DataModelObjectCategory.AMSupportGroup) |
| [`ANSYSAnalysisSettings`](#DataModelObjectCategory.ANSYSAnalysisSettings) |
| [`Acceleration`](#DataModelObjectCategory.Acceleration) |
| [`AccelerationFrequencyResponse`](#DataModelObjectCategory.AccelerationFrequencyResponse) |
| [`AccelerationPhaseResponse`](#DataModelObjectCategory.AccelerationPhaseResponse) |
| [`AccelerationProbe`](#DataModelObjectCategory.AccelerationProbe) |
| [`AccelerationWaterfallDiagram`](#DataModelObjectCategory.AccelerationWaterfallDiagram) |
| [`AccumulatedEquivalentPlasticStrain`](#DataModelObjectCategory.AccumulatedEquivalentPlasticStrain) |
| [`AcousticAWeightedSPLFrequencyResponse`](#DataModelObjectCategory.AcousticAWeightedSPLFrequencyResponse) |
| [`AcousticAWeightedSoundPressureLevel`](#DataModelObjectCategory.AcousticAWeightedSoundPressureLevel) |
| [`AcousticAbsorptionCoefficient`](#DataModelObjectCategory.AcousticAbsorptionCoefficient) |
| [`AcousticAbsorptionElement`](#DataModelObjectCategory.AcousticAbsorptionElement) |
| [`AcousticAbsorptionSurface`](#DataModelObjectCategory.AcousticAbsorptionSurface) |
| [`AcousticDiffuseSoundField`](#DataModelObjectCategory.AcousticDiffuseSoundField) |
| [`AcousticDiffuseSoundTransmissionLoss`](#DataModelObjectCategory.AcousticDiffuseSoundTransmissionLoss) |
| [`AcousticDirectionalVelocityResult`](#DataModelObjectCategory.AcousticDirectionalVelocityResult) |
| [`AcousticFarFieldRadationSurface`](#DataModelObjectCategory.AcousticFarFieldRadationSurface) |
| [`AcousticFarFieldResult`](#DataModelObjectCategory.AcousticFarFieldResult) |
| [`AcousticFarFieldSPLMicWaterfallDiagram`](#DataModelObjectCategory.AcousticFarFieldSPLMicWaterfallDiagram) |
| [`AcousticFarFieldSoundPowerLevelWaterfallDiagram`](#DataModelObjectCategory.AcousticFarFieldSoundPowerLevelWaterfallDiagram) |
| [`AcousticFreeSurface`](#DataModelObjectCategory.AcousticFreeSurface) |
| [`AcousticFrequencyBandAWeightedSPL`](#DataModelObjectCategory.AcousticFrequencyBandAWeightedSPL) |
| [`AcousticFrequencyBandSPL`](#DataModelObjectCategory.AcousticFrequencyBandSPL) |
| [`AcousticImpedanceBoundary`](#DataModelObjectCategory.AcousticImpedanceBoundary) |
| [`AcousticImpedanceSheet`](#DataModelObjectCategory.AcousticImpedanceSheet) |
| [`AcousticIncidentWaveSource`](#DataModelObjectCategory.AcousticIncidentWaveSource) |
| [`AcousticKineticEnergy`](#DataModelObjectCategory.AcousticKineticEnergy) |
| [`AcousticKineticEnergyFrequencyResponse`](#DataModelObjectCategory.AcousticKineticEnergyFrequencyResponse) |
| [`AcousticLowReducedFrequency`](#DataModelObjectCategory.AcousticLowReducedFrequency) |
| [`AcousticMassSource`](#DataModelObjectCategory.AcousticMassSource) |
| [`AcousticMassSourceRate`](#DataModelObjectCategory.AcousticMassSourceRate) |
| [`AcousticPort`](#DataModelObjectCategory.AcousticPort) |
| [`AcousticPortInDuct`](#DataModelObjectCategory.AcousticPortInDuct) |
| [`AcousticPotentialEnergy`](#DataModelObjectCategory.AcousticPotentialEnergy) |
| [`AcousticPotentialEnergyFrequencyResponse`](#DataModelObjectCategory.AcousticPotentialEnergyFrequencyResponse) |
| [`AcousticPressure`](#DataModelObjectCategory.AcousticPressure) |
| [`AcousticPressureFrequencyResponse`](#DataModelObjectCategory.AcousticPressureFrequencyResponse) |
| [`AcousticPressureResult`](#DataModelObjectCategory.AcousticPressureResult) |
| [`AcousticRadiationBoundary`](#DataModelObjectCategory.AcousticRadiationBoundary) |
| [`AcousticResult`](#DataModelObjectCategory.AcousticResult) |
| [`AcousticReturnLoss`](#DataModelObjectCategory.AcousticReturnLoss) |
| [`AcousticRigidWall`](#DataModelObjectCategory.AcousticRigidWall) |
| [`AcousticSPLFrequencyResponse`](#DataModelObjectCategory.AcousticSPLFrequencyResponse) |
| [`AcousticSoundPressureLevel`](#DataModelObjectCategory.AcousticSoundPressureLevel) |
| [`AcousticStaticPressure`](#DataModelObjectCategory.AcousticStaticPressure) |
| [`AcousticSurfaceAcceleration`](#DataModelObjectCategory.AcousticSurfaceAcceleration) |
| [`AcousticSurfaceVelocity`](#DataModelObjectCategory.AcousticSurfaceVelocity) |
| [`AcousticSymmetryPlane`](#DataModelObjectCategory.AcousticSymmetryPlane) |
| [`AcousticTemperature`](#DataModelObjectCategory.AcousticTemperature) |
| [`AcousticThermoViscousBLIBoundary`](#DataModelObjectCategory.AcousticThermoViscousBLIBoundary) |
| [`AcousticTotalVelocityResult`](#DataModelObjectCategory.AcousticTotalVelocityResult) |
| [`AcousticTransferAdmittanceMatrix`](#DataModelObjectCategory.AcousticTransferAdmittanceMatrix) |
| [`AcousticTransmissionLoss`](#DataModelObjectCategory.AcousticTransmissionLoss) |
| [`AcousticVelocityFrequencyResponse`](#DataModelObjectCategory.AcousticVelocityFrequencyResponse) |
| [`AddedMassTracker`](#DataModelObjectCategory.AddedMassTracker) |
| [`Alert`](#DataModelObjectCategory.Alert) |
| [`Analysis`](#DataModelObjectCategory.Analysis) |
| [`AnalysisPly`](#DataModelObjectCategory.AnalysisPly) |
| [`AnalysisSettings`](#DataModelObjectCategory.AnalysisSettings) |
| [`AngularAccelerationProbe`](#DataModelObjectCategory.AngularAccelerationProbe) |
| [`AngularVelocityProbe`](#DataModelObjectCategory.AngularVelocityProbe) |
| [`ArbitraryCrack`](#DataModelObjectCategory.ArbitraryCrack) |
| [`ArtificialEnergyTracker`](#DataModelObjectCategory.ArtificialEnergyTracker) |
| [`AutomaticMethod`](#DataModelObjectCategory.AutomaticMethod) |
| [`Beam`](#DataModelObjectCategory.Beam) |
| [`BeamProbe`](#DataModelObjectCategory.BeamProbe) |
| [`BeamResult`](#DataModelObjectCategory.BeamResult) |
| [`BeamTool`](#DataModelObjectCategory.BeamTool) |
| [`BeamToolResult`](#DataModelObjectCategory.BeamToolResult) |
| [`Bearing`](#DataModelObjectCategory.Bearing) |
| [`BearingLoad`](#DataModelObjectCategory.BearingLoad) |
| [`BearingProbe`](#DataModelObjectCategory.BearingProbe) |
| [`BendingStressEquivalent`](#DataModelObjectCategory.BendingStressEquivalent) |
| [`BendingStressIntensity`](#DataModelObjectCategory.BendingStressIntensity) |
| [`Body`](#DataModelObjectCategory.Body) |
| [`BodyControl`](#DataModelObjectCategory.BodyControl) |
| [`BodyInteraction`](#DataModelObjectCategory.BodyInteraction) |
| [`BodyInteractions`](#DataModelObjectCategory.BodyInteractions) |
| [`BoltAdjustment`](#DataModelObjectCategory.BoltAdjustment) |
| [`BoltPretension`](#DataModelObjectCategory.BoltPretension) |
| [`BoltPretensionProbe`](#DataModelObjectCategory.BoltPretensionProbe) |
| [`BoltTool`](#DataModelObjectCategory.BoltTool) |
| [`BoltToolResult`](#DataModelObjectCategory.BoltToolResult) |
| [`BoltWorkingLoad`](#DataModelObjectCategory.BoltWorkingLoad) |
| [`CampbellDiagram`](#DataModelObjectCategory.CampbellDiagram) |
| [`CenterOfGravityConstraint`](#DataModelObjectCategory.CenterOfGravityConstraint) |
| [`ChannelCrossSection`](#DataModelObjectCategory.ChannelCrossSection) |
| [`ChargeReactionFrequencyResponse`](#DataModelObjectCategory.ChargeReactionFrequencyResponse) |
| [`ChargeReactionProbe`](#DataModelObjectCategory.ChargeReactionProbe) |
| [`Chart`](#DataModelObjectCategory.Chart) |
| [`CircularCrossSection`](#DataModelObjectCategory.CircularCrossSection) |
| [`CircularTubeCrossSection`](#DataModelObjectCategory.CircularTubeCrossSection) |
| [`CoSimulationPin`](#DataModelObjectCategory.CoSimulationPin) |
| [`CommandSnippet`](#DataModelObjectCategory.CommandSnippet) |
| [`Comment`](#DataModelObjectCategory.Comment) |
| [`ComplexityIndexConstraint`](#DataModelObjectCategory.ComplexityIndexConstraint) |
| [`ComplianceConstraint`](#DataModelObjectCategory.ComplianceConstraint) |
| [`CompositeCriterion`](#DataModelObjectCategory.CompositeCriterion) |
| [`CompositeFailureCriteria`](#DataModelObjectCategory.CompositeFailureCriteria) |
| [`CompositeFailureResult`](#DataModelObjectCategory.CompositeFailureResult) |
| [`CompositeFailureTool`](#DataModelObjectCategory.CompositeFailureTool) |
| [`CompositeSamplingPoint`](#DataModelObjectCategory.CompositeSamplingPoint) |
| [`CompositeSamplingPointTool`](#DataModelObjectCategory.CompositeSamplingPointTool) |
| [`CompressionOnlySupport`](#DataModelObjectCategory.CompressionOnlySupport) |
| [`CondensedGeometry`](#DataModelObjectCategory.CondensedGeometry) |
| [`CondensedPart`](#DataModelObjectCategory.CondensedPart) |
| [`CondensedPartBase`](#DataModelObjectCategory.CondensedPartBase) |
| [`CondensedPartInfoTool`](#DataModelObjectCategory.CondensedPartInfoTool) |
| [`Connect`](#DataModelObjectCategory.Connect) |
| [`ConnectionGroup`](#DataModelObjectCategory.ConnectionGroup) |
| [`Connections`](#DataModelObjectCategory.Connections) |
| [`ConstraintEquation`](#DataModelObjectCategory.ConstraintEquation) |
| [`ConstructionGeometry`](#DataModelObjectCategory.ConstructionGeometry) |
| [`ConstructionLine`](#DataModelObjectCategory.ConstructionLine) |
| [`ConstructionPoint`](#DataModelObjectCategory.ConstructionPoint) |
| [`ContactChatteringTracker`](#DataModelObjectCategory.ContactChatteringTracker) |
| [`ContactClosedPenetrationTracker`](#DataModelObjectCategory.ContactClosedPenetrationTracker) |
| [`ContactDataTable`](#DataModelObjectCategory.ContactDataTable) |
| [`ContactDebonding`](#DataModelObjectCategory.ContactDebonding) |
| [`ContactDepthTracker`](#DataModelObjectCategory.ContactDepthTracker) |
| [`ContactDistanceProbe`](#DataModelObjectCategory.ContactDistanceProbe) |
| [`ContactElasticSlipTracker`](#DataModelObjectCategory.ContactElasticSlipTracker) |
| [`ContactEnergyTracker`](#DataModelObjectCategory.ContactEnergyTracker) |
| [`ContactFluidPressure`](#DataModelObjectCategory.ContactFluidPressure) |
| [`ContactFluidPressureTracker`](#DataModelObjectCategory.ContactFluidPressureTracker) |
| [`ContactForceTracker`](#DataModelObjectCategory.ContactForceTracker) |
| [`ContactFrictionalDissipationEnergyTracker`](#DataModelObjectCategory.ContactFrictionalDissipationEnergyTracker) |
| [`ContactFrictionalStress`](#DataModelObjectCategory.ContactFrictionalStress) |
| [`ContactFrictionalStressTracker`](#DataModelObjectCategory.ContactFrictionalStressTracker) |
| [`ContactGap`](#DataModelObjectCategory.ContactGap) |
| [`ContactGapTracker`](#DataModelObjectCategory.ContactGapTracker) |
| [`ContactHeatFlux`](#DataModelObjectCategory.ContactHeatFlux) |
| [`ContactHeatFluxTracker`](#DataModelObjectCategory.ContactHeatFluxTracker) |
| [`ContactMatch`](#DataModelObjectCategory.ContactMatch) |
| [`ContactMatchGroup`](#DataModelObjectCategory.ContactMatchGroup) |
| [`ContactMaxTangentialFluidPressureTracker`](#DataModelObjectCategory.ContactMaxTangentialFluidPressureTracker) |
| [`ContactMaximumDampingPressureTracker`](#DataModelObjectCategory.ContactMaximumDampingPressureTracker) |
| [`ContactMaximumGeometricSlidingDistanceTracker`](#DataModelObjectCategory.ContactMaximumGeometricSlidingDistanceTracker) |
| [`ContactMaximumNormalStiffnessTracker`](#DataModelObjectCategory.ContactMaximumNormalStiffnessTracker) |
| [`ContactMaximumTangentialStiffnessTracker`](#DataModelObjectCategory.ContactMaximumTangentialStiffnessTracker) |
| [`ContactMinimumGeometricSlidingDistanceTracker`](#DataModelObjectCategory.ContactMinimumGeometricSlidingDistanceTracker) |
| [`ContactMinimumNormalStiffnessTracker`](#DataModelObjectCategory.ContactMinimumNormalStiffnessTracker) |
| [`ContactMinimumTangentialStiffnessTracker`](#DataModelObjectCategory.ContactMinimumTangentialStiffnessTracker) |
| [`ContactNumberStickingTracker`](#DataModelObjectCategory.ContactNumberStickingTracker) |
| [`ContactNumberWithLargePenetrationTracker`](#DataModelObjectCategory.ContactNumberWithLargePenetrationTracker) |
| [`ContactNumberWithTooMuchSlidingTracker`](#DataModelObjectCategory.ContactNumberWithTooMuchSlidingTracker) |
| [`ContactPairForceConvergenceNormTracker`](#DataModelObjectCategory.ContactPairForceConvergenceNormTracker) |
| [`ContactPenetration`](#DataModelObjectCategory.ContactPenetration) |
| [`ContactPenetrationTracker`](#DataModelObjectCategory.ContactPenetrationTracker) |
| [`ContactPressure`](#DataModelObjectCategory.ContactPressure) |
| [`ContactPressureTracker`](#DataModelObjectCategory.ContactPressureTracker) |
| [`ContactRegion`](#DataModelObjectCategory.ContactRegion) |
| [`ContactResultingPinballTracker`](#DataModelObjectCategory.ContactResultingPinballTracker) |
| [`ContactSizing`](#DataModelObjectCategory.ContactSizing) |
| [`ContactSlidingDistance`](#DataModelObjectCategory.ContactSlidingDistance) |
| [`ContactSlidingDistanceTracker`](#DataModelObjectCategory.ContactSlidingDistanceTracker) |
| [`ContactSlidingIndicationTracker`](#DataModelObjectCategory.ContactSlidingIndicationTracker) |
| [`ContactSolutionInformation`](#DataModelObjectCategory.ContactSolutionInformation) |
| [`ContactStabilizationEnergyTracker`](#DataModelObjectCategory.ContactStabilizationEnergyTracker) |
| [`ContactStatus`](#DataModelObjectCategory.ContactStatus) |
| [`ContactStepControl`](#DataModelObjectCategory.ContactStepControl) |
| [`ContactStrainEnergyTracker`](#DataModelObjectCategory.ContactStrainEnergyTracker) |
| [`ContactTangentialDampingStressTracker`](#DataModelObjectCategory.ContactTangentialDampingStressTracker) |
| [`ContactTool`](#DataModelObjectCategory.ContactTool) |
| [`ContactToolResult`](#DataModelObjectCategory.ContactToolResult) |
| [`ContactTotalForceFromContactPressureXTracker`](#DataModelObjectCategory.ContactTotalForceFromContactPressureXTracker) |
| [`ContactTotalForceFromContactPressureYTracker`](#DataModelObjectCategory.ContactTotalForceFromContactPressureYTracker) |
| [`ContactTotalForceFromContactPressureZTracker`](#DataModelObjectCategory.ContactTotalForceFromContactPressureZTracker) |
| [`ContactTotalForceFromTangentialStressXTracker`](#DataModelObjectCategory.ContactTotalForceFromTangentialStressXTracker) |
| [`ContactTotalForceFromTangentialStressYTracker`](#DataModelObjectCategory.ContactTotalForceFromTangentialStressYTracker) |
| [`ContactTotalForceFromTangentialStressZTracker`](#DataModelObjectCategory.ContactTotalForceFromTangentialStressZTracker) |
| [`ContactVolumeLossDueToWearTracker`](#DataModelObjectCategory.ContactVolumeLossDueToWearTracker) |
| [`ContactingAreaTracker`](#DataModelObjectCategory.ContactingAreaTracker) |
| [`Convection`](#DataModelObjectCategory.Convection) |
| [`Convergence`](#DataModelObjectCategory.Convergence) |
| [`CoordinateSystem`](#DataModelObjectCategory.CoordinateSystem) |
| [`CoordinateSystems`](#DataModelObjectCategory.CoordinateSystems) |
| [`CoordinateSystemsResult`](#DataModelObjectCategory.CoordinateSystemsResult) |
| [`CornerCrack`](#DataModelObjectCategory.CornerCrack) |
| [`CoupledPhysicsHeatingObjects`](#DataModelObjectCategory.CoupledPhysicsHeatingObjects) |
| [`Coupling`](#DataModelObjectCategory.Coupling) |
| [`Criterion`](#DataModelObjectCategory.Criterion) |
| [`CriterionConstraint`](#DataModelObjectCategory.CriterionConstraint) |
| [`CrossSection`](#DataModelObjectCategory.CrossSection) |
| [`CrossSections`](#DataModelObjectCategory.CrossSections) |
| [`Current`](#DataModelObjectCategory.Current) |
| [`CurrentDensity`](#DataModelObjectCategory.CurrentDensity) |
| [`CurrentDensityProbe`](#DataModelObjectCategory.CurrentDensityProbe) |
| [`CyclicManufacturingConstraint`](#DataModelObjectCategory.CyclicManufacturingConstraint) |
| [`CyclicRegion`](#DataModelObjectCategory.CyclicRegion) |
| [`CylindricalCrack`](#DataModelObjectCategory.CylindricalCrack) |
| [`CylindricalSupport`](#DataModelObjectCategory.CylindricalSupport) |
| [`DamageResult`](#DataModelObjectCategory.DamageResult) |
| [`DamageStatus`](#DataModelObjectCategory.DamageStatus) |
| [`DampingEnergyTracker`](#DataModelObjectCategory.DampingEnergyTracker) |
| [`DataModelObject`](#DataModelObjectCategory.DataModelObject) |
| [`DeformationFrequencyResponse`](#DataModelObjectCategory.DeformationFrequencyResponse) |
| [`DeformationPhaseResponse`](#DataModelObjectCategory.DeformationPhaseResponse) |
| [`DeformationProbe`](#DataModelObjectCategory.DeformationProbe) |
| [`DeformationResult`](#DataModelObjectCategory.DeformationResult) |
| [`DensityTracker`](#DataModelObjectCategory.DensityTracker) |
| [`DetonationPoint`](#DataModelObjectCategory.DetonationPoint) |
| [`Deviation`](#DataModelObjectCategory.Deviation) |
| [`DirectMorph`](#DataModelObjectCategory.DirectMorph) |
| [`DirectStress`](#DataModelObjectCategory.DirectStress) |
| [`DirectionalAcceleration`](#DataModelObjectCategory.DirectionalAcceleration) |
| [`DirectionalAccelerationPSD`](#DataModelObjectCategory.DirectionalAccelerationPSD) |
| [`DirectionalAccelerationRS`](#DataModelObjectCategory.DirectionalAccelerationRS) |
| [`DirectionalAccelerationTracker`](#DataModelObjectCategory.DirectionalAccelerationTracker) |
| [`DirectionalAxialForce`](#DataModelObjectCategory.DirectionalAxialForce) |
| [`DirectionalBendingMoment`](#DataModelObjectCategory.DirectionalBendingMoment) |
| [`DirectionalCurrentDensity`](#DataModelObjectCategory.DirectionalCurrentDensity) |
| [`DirectionalDeformation`](#DataModelObjectCategory.DirectionalDeformation) |
| [`DirectionalDeformationTracker`](#DataModelObjectCategory.DirectionalDeformationTracker) |
| [`DirectionalElectricFieldIntensity`](#DataModelObjectCategory.DirectionalElectricFieldIntensity) |
| [`DirectionalElectricFluxDensity`](#DataModelObjectCategory.DirectionalElectricFluxDensity) |
| [`DirectionalElectrostaticForce`](#DataModelObjectCategory.DirectionalElectrostaticForce) |
| [`DirectionalHeatFlux`](#DataModelObjectCategory.DirectionalHeatFlux) |
| [`DirectionalMagneticFieldIntensity`](#DataModelObjectCategory.DirectionalMagneticFieldIntensity) |
| [`DirectionalMagneticFluxDensity`](#DataModelObjectCategory.DirectionalMagneticFluxDensity) |
| [`DirectionalShearForce`](#DataModelObjectCategory.DirectionalShearForce) |
| [`DirectionalShearMomentDiagram`](#DataModelObjectCategory.DirectionalShearMomentDiagram) |
| [`DirectionalStress`](#DataModelObjectCategory.DirectionalStress) |
| [`DirectionalThermalHeatFlux`](#DataModelObjectCategory.DirectionalThermalHeatFlux) |
| [`DirectionalThermalStrain`](#DataModelObjectCategory.DirectionalThermalStrain) |
| [`DirectionalTorsionalMoment`](#DataModelObjectCategory.DirectionalTorsionalMoment) |
| [`DirectionalVelocity`](#DataModelObjectCategory.DirectionalVelocity) |
| [`DirectionalVelocityPSD`](#DataModelObjectCategory.DirectionalVelocityPSD) |
| [`DirectionalVelocityRS`](#DataModelObjectCategory.DirectionalVelocityRS) |
| [`DirectionalVelocityTracker`](#DataModelObjectCategory.DirectionalVelocityTracker) |
| [`Displacement`](#DataModelObjectCategory.Displacement) |
| [`DisplacementConstraint`](#DataModelObjectCategory.DisplacementConstraint) |
| [`DistributedMass`](#DataModelObjectCategory.DistributedMass) |
| [`DynamicComplianceConstraint`](#DataModelObjectCategory.DynamicComplianceConstraint) |
| [`EMTransducer`](#DataModelObjectCategory.EMTransducer) |
| [`EarthGravity`](#DataModelObjectCategory.EarthGravity) |
| [`EdgeCrack`](#DataModelObjectCategory.EdgeCrack) |
| [`EffectiveStrainTracker`](#DataModelObjectCategory.EffectiveStrainTracker) |
| [`EffectiveStressTracker`](#DataModelObjectCategory.EffectiveStressTracker) |
| [`ElasticStrainFrequencyResponse`](#DataModelObjectCategory.ElasticStrainFrequencyResponse) |
| [`ElasticStrainIntensity`](#DataModelObjectCategory.ElasticStrainIntensity) |
| [`ElasticStrainPhaseResponse`](#DataModelObjectCategory.ElasticStrainPhaseResponse) |
| [`ElasticSupport`](#DataModelObjectCategory.ElasticSupport) |
| [`ElectricCharge`](#DataModelObjectCategory.ElectricCharge) |
| [`ElectricFieldProbe`](#DataModelObjectCategory.ElectricFieldProbe) |
| [`ElectricPotential`](#DataModelObjectCategory.ElectricPotential) |
| [`ElectricResult`](#DataModelObjectCategory.ElectricResult) |
| [`ElectricVoltage`](#DataModelObjectCategory.ElectricVoltage) |
| [`ElectricVoltageProbe`](#DataModelObjectCategory.ElectricVoltageProbe) |
| [`ElectromagneticResult`](#DataModelObjectCategory.ElectromagneticResult) |
| [`ElectromechanicalCouplingCoefficient`](#DataModelObjectCategory.ElectromechanicalCouplingCoefficient) |
| [`ElementBirthAndDeath`](#DataModelObjectCategory.ElementBirthAndDeath) |
| [`ElementControls`](#DataModelObjectCategory.ElementControls) |
| [`ElementOrientation`](#DataModelObjectCategory.ElementOrientation) |
| [`ElementalEulerXYAngle`](#DataModelObjectCategory.ElementalEulerXYAngle) |
| [`ElementalEulerXZAngle`](#DataModelObjectCategory.ElementalEulerXZAngle) |
| [`ElementalEulerYZAngle`](#DataModelObjectCategory.ElementalEulerYZAngle) |
| [`ElementalStrainEnergy`](#DataModelObjectCategory.ElementalStrainEnergy) |
| [`ElementalTriads`](#DataModelObjectCategory.ElementalTriads) |
| [`EllipticalCrack`](#DataModelObjectCategory.EllipticalCrack) |
| [`EmagReactionProbe`](#DataModelObjectCategory.EmagReactionProbe) |
| [`EndRelease`](#DataModelObjectCategory.EndRelease) |
| [`EnergyDissipatedPerUnitVolume`](#DataModelObjectCategory.EnergyDissipatedPerUnitVolume) |
| [`EnergyProbe`](#DataModelObjectCategory.EnergyProbe) |
| [`EnergyResult`](#DataModelObjectCategory.EnergyResult) |
| [`EquivalentCreepStrain`](#DataModelObjectCategory.EquivalentCreepStrain) |
| [`EquivalentCreepStrainRST`](#DataModelObjectCategory.EquivalentCreepStrainRST) |
| [`EquivalentElasticStrain`](#DataModelObjectCategory.EquivalentElasticStrain) |
| [`EquivalentElasticStrainRST`](#DataModelObjectCategory.EquivalentElasticStrainRST) |
| [`EquivalentPlasticStrain`](#DataModelObjectCategory.EquivalentPlasticStrain) |
| [`EquivalentPlasticStrainRST`](#DataModelObjectCategory.EquivalentPlasticStrainRST) |
| [`EquivalentRadiatedPower`](#DataModelObjectCategory.EquivalentRadiatedPower) |
| [`EquivalentRadiatedPowerLevel`](#DataModelObjectCategory.EquivalentRadiatedPowerLevel) |
| [`EquivalentRadiatedPowerLevelWaterfallDiagram`](#DataModelObjectCategory.EquivalentRadiatedPowerLevelWaterfallDiagram) |
| [`EquivalentRadiatedPowerWaterfallDiagram`](#DataModelObjectCategory.EquivalentRadiatedPowerWaterfallDiagram) |
| [`EquivalentStress`](#DataModelObjectCategory.EquivalentStress) |
| [`EquivalentStressPSD`](#DataModelObjectCategory.EquivalentStressPSD) |
| [`EquivalentStressRS`](#DataModelObjectCategory.EquivalentStressRS) |
| [`EquivalentTotalStrain`](#DataModelObjectCategory.EquivalentTotalStrain) |
| [`ErodedInternalEnergyTracker`](#DataModelObjectCategory.ErodedInternalEnergyTracker) |
| [`ErodedKineticEnergyTracker`](#DataModelObjectCategory.ErodedKineticEnergyTracker) |
| [`ExclusionRegion`](#DataModelObjectCategory.ExclusionRegion) |
| [`ExpansionSettings`](#DataModelObjectCategory.ExpansionSettings) |
| [`ExternalEnhancedModel`](#DataModelObjectCategory.ExternalEnhancedModel) |
| [`ExternalForceTracker`](#DataModelObjectCategory.ExternalForceTracker) |
| [`ExternalModelDataColl`](#DataModelObjectCategory.ExternalModelDataColl) |
| [`ExtrusionManufacturingConstraint`](#DataModelObjectCategory.ExtrusionManufacturingConstraint) |
| [`FaceMeshing`](#DataModelObjectCategory.FaceMeshing) |
| [`FatigueBiaxialityIndication`](#DataModelObjectCategory.FatigueBiaxialityIndication) |
| [`FatigueCombination`](#DataModelObjectCategory.FatigueCombination) |
| [`FatigueDamage`](#DataModelObjectCategory.FatigueDamage) |
| [`FatigueDamageMatrix`](#DataModelObjectCategory.FatigueDamageMatrix) |
| [`FatigueEquivalentAlternativeStress`](#DataModelObjectCategory.FatigueEquivalentAlternativeStress) |
| [`FatigueHysteresis`](#DataModelObjectCategory.FatigueHysteresis) |
| [`FatigueLife`](#DataModelObjectCategory.FatigueLife) |
| [`FatigueRainflowMatrix`](#DataModelObjectCategory.FatigueRainflowMatrix) |
| [`FatigueSafetyFactor`](#DataModelObjectCategory.FatigueSafetyFactor) |
| [`FatigueSensitivity`](#DataModelObjectCategory.FatigueSensitivity) |
| [`FatigueTool`](#DataModelObjectCategory.FatigueTool) |
| [`FatigueToolResult`](#DataModelObjectCategory.FatigueToolResult) |
| [`FeatureDetection`](#DataModelObjectCategory.FeatureDetection) |
| [`FeatureSuppress`](#DataModelObjectCategory.FeatureSuppress) |
| [`FiberCompressiveDamageVariable`](#DataModelObjectCategory.FiberCompressiveDamageVariable) |
| [`FiberCompressiveFailureCriterion`](#DataModelObjectCategory.FiberCompressiveFailureCriterion) |
| [`FiberTensileDamageVariable`](#DataModelObjectCategory.FiberTensileDamageVariable) |
| [`FiberTensileFailureCriterion`](#DataModelObjectCategory.FiberTensileFailureCriterion) |
| [`FieldIntensityProbe`](#DataModelObjectCategory.FieldIntensityProbe) |
| [`Figure`](#DataModelObjectCategory.Figure) |
| [`FileBasedImportedLoads`](#DataModelObjectCategory.FileBasedImportedLoads) |
| [`FixedRotation`](#DataModelObjectCategory.FixedRotation) |
| [`FixedSupport`](#DataModelObjectCategory.FixedSupport) |
| [`FlexibleRotationProbe`](#DataModelObjectCategory.FlexibleRotationProbe) |
| [`FluidFlowRate`](#DataModelObjectCategory.FluidFlowRate) |
| [`FluidHeatConductionRate`](#DataModelObjectCategory.FluidHeatConductionRate) |
| [`FluidHeatTransportRate`](#DataModelObjectCategory.FluidHeatTransportRate) |
| [`FluidPenetrationPressure`](#DataModelObjectCategory.FluidPenetrationPressure) |
| [`FluidSolidInterface`](#DataModelObjectCategory.FluidSolidInterface) |
| [`FluxDensityProbe`](#DataModelObjectCategory.FluxDensityProbe) |
| [`FluxLinkage`](#DataModelObjectCategory.FluxLinkage) |
| [`Force`](#DataModelObjectCategory.Force) |
| [`ForceReaction`](#DataModelObjectCategory.ForceReaction) |
| [`ForceReactionFrequencyResponse`](#DataModelObjectCategory.ForceReactionFrequencyResponse) |
| [`ForceReactionTracker`](#DataModelObjectCategory.ForceReactionTracker) |
| [`ForceSummationProbe`](#DataModelObjectCategory.ForceSummationProbe) |
| [`Fracture`](#DataModelObjectCategory.Fracture) |
| [`FractureCrackExtensionProbe`](#DataModelObjectCategory.FractureCrackExtensionProbe) |
| [`FractureEquivalentSIFSRangeProbe`](#DataModelObjectCategory.FractureEquivalentSIFSRangeProbe) |
| [`FractureJINTProbe`](#DataModelObjectCategory.FractureJINTProbe) |
| [`FractureSIFSProbe`](#DataModelObjectCategory.FractureSIFSProbe) |
| [`FractureTool`](#DataModelObjectCategory.FractureTool) |
| [`FractureToolProbe`](#DataModelObjectCategory.FractureToolProbe) |
| [`FractureToolResult`](#DataModelObjectCategory.FractureToolResult) |
| [`FractureTotalNumberOfCyclesProbe`](#DataModelObjectCategory.FractureTotalNumberOfCyclesProbe) |
| [`FrequencyResponseResultChart`](#DataModelObjectCategory.FrequencyResponseResultChart) |
| [`FrictionlessSupport`](#DataModelObjectCategory.FrictionlessSupport) |
| [`Gasket`](#DataModelObjectCategory.Gasket) |
| [`GasketMeshControl`](#DataModelObjectCategory.GasketMeshControl) |
| [`GasketResult`](#DataModelObjectCategory.GasketResult) |
| [`GeneralAxisymmetric`](#DataModelObjectCategory.GeneralAxisymmetric) |
| [`GeneralizedPlaneStrain`](#DataModelObjectCategory.GeneralizedPlaneStrain) |
| [`GeneralizedPlaneStrainProbe`](#DataModelObjectCategory.GeneralizedPlaneStrainProbe) |
| [`GeneratedAMSupport`](#DataModelObjectCategory.GeneratedAMSupport) |
| [`GenericBoundaryCondition`](#DataModelObjectCategory.GenericBoundaryCondition) |
| [`GenericCrack`](#DataModelObjectCategory.GenericCrack) |
| [`GenericDelamination`](#DataModelObjectCategory.GenericDelamination) |
| [`GenericPointMass`](#DataModelObjectCategory.GenericPointMass) |
| [`Geometry`](#DataModelObjectCategory.Geometry) |
| [`GeometryBasedAdaptivity`](#DataModelObjectCategory.GeometryBasedAdaptivity) |
| [`GeometryFidelity`](#DataModelObjectCategory.GeometryFidelity) |
| [`GeometryFileContainer`](#DataModelObjectCategory.GeometryFileContainer) |
| [`GeometryImport`](#DataModelObjectCategory.GeometryImport) |
| [`GeometryImportGroup`](#DataModelObjectCategory.GeometryImportGroup) |
| [`GlobalVonMisesStressConstraint`](#DataModelObjectCategory.GlobalVonMisesStressConstraint) |
| [`HatCrossSection`](#DataModelObjectCategory.HatCrossSection) |
| [`HeatFlow`](#DataModelObjectCategory.HeatFlow) |
| [`HeatFlux`](#DataModelObjectCategory.HeatFlux) |
| [`HeatFluxProbe`](#DataModelObjectCategory.HeatFluxProbe) |
| [`HollowRectangularCrossSection`](#DataModelObjectCategory.HollowRectangularCrossSection) |
| [`HourglassEnergyTracker`](#DataModelObjectCategory.HourglassEnergyTracker) |
| [`HousingConstraint`](#DataModelObjectCategory.HousingConstraint) |
| [`HydrostaticPressure`](#DataModelObjectCategory.HydrostaticPressure) |
| [`ICrossSection`](#DataModelObjectCategory.ICrossSection) |
| [`Image`](#DataModelObjectCategory.Image) |
| [`ImagePlane`](#DataModelObjectCategory.ImagePlane) |
| [`ImpedanceBoundary`](#DataModelObjectCategory.ImpedanceBoundary) |
| [`ImpedanceFrequencyResponse`](#DataModelObjectCategory.ImpedanceFrequencyResponse) |
| [`ImpedanceProbe`](#DataModelObjectCategory.ImpedanceProbe) |
| [`ImportedBodyForceDensity`](#DataModelObjectCategory.ImportedBodyForceDensity) |
| [`ImportedBodyTemperature`](#DataModelObjectCategory.ImportedBodyTemperature) |
| [`ImportedBoltPretensions`](#DataModelObjectCategory.ImportedBoltPretensions) |
| [`ImportedCFDPressure`](#DataModelObjectCategory.ImportedCFDPressure) |
| [`ImportedCondensedPart`](#DataModelObjectCategory.ImportedCondensedPart) |
| [`ImportedConstraintEquations`](#DataModelObjectCategory.ImportedConstraintEquations) |
| [`ImportedContacts`](#DataModelObjectCategory.ImportedContacts) |
| [`ImportedConvection`](#DataModelObjectCategory.ImportedConvection) |
| [`ImportedCoordinateSystems`](#DataModelObjectCategory.ImportedCoordinateSystems) |
| [`ImportedCutBoundaryRemoteConstraint`](#DataModelObjectCategory.ImportedCutBoundaryRemoteConstraint) |
| [`ImportedCutBoundaryRemoteForce`](#DataModelObjectCategory.ImportedCutBoundaryRemoteForce) |
| [`ImportedDisplacement`](#DataModelObjectCategory.ImportedDisplacement) |
| [`ImportedElementOrientation`](#DataModelObjectCategory.ImportedElementOrientation) |
| [`ImportedElementOrientationGroup`](#DataModelObjectCategory.ImportedElementOrientationGroup) |
| [`ImportedElementOrientations`](#DataModelObjectCategory.ImportedElementOrientations) |
| [`ImportedFiberRatio`](#DataModelObjectCategory.ImportedFiberRatio) |
| [`ImportedFlexibleRemoteConnectors`](#DataModelObjectCategory.ImportedFlexibleRemoteConnectors) |
| [`ImportedForce`](#DataModelObjectCategory.ImportedForce) |
| [`ImportedHeatFlux`](#DataModelObjectCategory.ImportedHeatFlux) |
| [`ImportedHeatGeneration`](#DataModelObjectCategory.ImportedHeatGeneration) |
| [`ImportedInitialStrain`](#DataModelObjectCategory.ImportedInitialStrain) |
| [`ImportedInitialStress`](#DataModelObjectCategory.ImportedInitialStress) |
| [`ImportedLayeredSection`](#DataModelObjectCategory.ImportedLayeredSection) |
| [`ImportedLoad`](#DataModelObjectCategory.ImportedLoad) |
| [`ImportedLoadGroup`](#DataModelObjectCategory.ImportedLoadGroup) |
| [`ImportedMaterialField`](#DataModelObjectCategory.ImportedMaterialField) |
| [`ImportedMaterialFieldsGroup`](#DataModelObjectCategory.ImportedMaterialFieldsGroup) |
| [`ImportedNodalOrientations`](#DataModelObjectCategory.ImportedNodalOrientations) |
| [`ImportedPlies`](#DataModelObjectCategory.ImportedPlies) |
| [`ImportedPliesCollection`](#DataModelObjectCategory.ImportedPliesCollection) |
| [`ImportedPointMasses`](#DataModelObjectCategory.ImportedPointMasses) |
| [`ImportedPremeshedBoltPretensions`](#DataModelObjectCategory.ImportedPremeshedBoltPretensions) |
| [`ImportedPressure`](#DataModelObjectCategory.ImportedPressure) |
| [`ImportedRigidRemoteConnectors`](#DataModelObjectCategory.ImportedRigidRemoteConnectors) |
| [`ImportedShellThicknesses`](#DataModelObjectCategory.ImportedShellThicknesses) |
| [`ImportedSpringConnectors`](#DataModelObjectCategory.ImportedSpringConnectors) |
| [`ImportedStresses`](#DataModelObjectCategory.ImportedStresses) |
| [`ImportedSurfaceForceDensity`](#DataModelObjectCategory.ImportedSurfaceForceDensity) |
| [`ImportedTemperature`](#DataModelObjectCategory.ImportedTemperature) |
| [`ImportedThickness`](#DataModelObjectCategory.ImportedThickness) |
| [`ImportedThicknessGroup`](#DataModelObjectCategory.ImportedThicknessGroup) |
| [`ImportedTrace`](#DataModelObjectCategory.ImportedTrace) |
| [`ImportedTraceGroup`](#DataModelObjectCategory.ImportedTraceGroup) |
| [`ImportedVelocity`](#DataModelObjectCategory.ImportedVelocity) |
| [`ImportedWarpWeftRatio`](#DataModelObjectCategory.ImportedWarpWeftRatio) |
| [`ImportedYarnAngle`](#DataModelObjectCategory.ImportedYarnAngle) |
| [`Inductance`](#DataModelObjectCategory.Inductance) |
| [`Inflation`](#DataModelObjectCategory.Inflation) |
| [`InitialCondition`](#DataModelObjectCategory.InitialCondition) |
| [`InitialConditions`](#DataModelObjectCategory.InitialConditions) |
| [`InterfaceDelamination`](#DataModelObjectCategory.InterfaceDelamination) |
| [`InternalEnergyTracker`](#DataModelObjectCategory.InternalEnergyTracker) |
| [`InternalHeatGeneration`](#DataModelObjectCategory.InternalHeatGeneration) |
| [`Joint`](#DataModelObjectCategory.Joint) |
| [`JointLoad`](#DataModelObjectCategory.JointLoad) |
| [`JointProbe`](#DataModelObjectCategory.JointProbe) |
| [`JouleHeat`](#DataModelObjectCategory.JouleHeat) |
| [`JouleHeatProbe`](#DataModelObjectCategory.JouleHeatProbe) |
| [`KineticEnergyTracker`](#DataModelObjectCategory.KineticEnergyTracker) |
| [`LCrossSection`](#DataModelObjectCategory.LCrossSection) |
| [`LSDYNAGeneralTracker`](#DataModelObjectCategory.LSDYNAGeneralTracker) |
| [`LatticeDensity`](#DataModelObjectCategory.LatticeDensity) |
| [`LatticeElementalDensity`](#DataModelObjectCategory.LatticeElementalDensity) |
| [`LayeredSection`](#DataModelObjectCategory.LayeredSection) |
| [`LegacyThermalCondition`](#DataModelObjectCategory.LegacyThermalCondition) |
| [`LimitBoundary`](#DataModelObjectCategory.LimitBoundary) |
| [`LineChart2D`](#DataModelObjectCategory.LineChart2D) |
| [`LinePressure`](#DataModelObjectCategory.LinePressure) |
| [`LinePressureResult`](#DataModelObjectCategory.LinePressureResult) |
| [`LinearizedEquivalentStress`](#DataModelObjectCategory.LinearizedEquivalentStress) |
| [`LinearizedMaximumPrincipalStress`](#DataModelObjectCategory.LinearizedMaximumPrincipalStress) |
| [`LinearizedMaximumShearStress`](#DataModelObjectCategory.LinearizedMaximumShearStress) |
| [`LinearizedMiddlePrincipalStress`](#DataModelObjectCategory.LinearizedMiddlePrincipalStress) |
| [`LinearizedMinimumPrincipalStress`](#DataModelObjectCategory.LinearizedMinimumPrincipalStress) |
| [`LinearizedNormalStress`](#DataModelObjectCategory.LinearizedNormalStress) |
| [`LinearizedShearStress`](#DataModelObjectCategory.LinearizedShearStress) |
| [`LinearizedStressIntensity`](#DataModelObjectCategory.LinearizedStressIntensity) |
| [`LinearizedStressResult`](#DataModelObjectCategory.LinearizedStressResult) |
| [`LoadApplication`](#DataModelObjectCategory.LoadApplication) |
| [`LoadGroup`](#DataModelObjectCategory.LoadGroup) |
| [`LocalVonMisesStressConstraint`](#DataModelObjectCategory.LocalVonMisesStressConstraint) |
| [`MCFWaterfallDiagram`](#DataModelObjectCategory.MCFWaterfallDiagram) |
| [`MagneticCoenergy`](#DataModelObjectCategory.MagneticCoenergy) |
| [`MagneticDirectionalForces`](#DataModelObjectCategory.MagneticDirectionalForces) |
| [`MagneticError`](#DataModelObjectCategory.MagneticError) |
| [`MagneticFluxParallel`](#DataModelObjectCategory.MagneticFluxParallel) |
| [`MagneticFluxProbe`](#DataModelObjectCategory.MagneticFluxProbe) |
| [`MagneticPotential`](#DataModelObjectCategory.MagneticPotential) |
| [`MagneticTotalForces`](#DataModelObjectCategory.MagneticTotalForces) |
| [`ManufacturingConstraint`](#DataModelObjectCategory.ManufacturingConstraint) |
| [`MappingValidation`](#DataModelObjectCategory.MappingValidation) |
| [`MassConstraint`](#DataModelObjectCategory.MassConstraint) |
| [`MassFlowRate`](#DataModelObjectCategory.MassFlowRate) |
| [`MatchControl`](#DataModelObjectCategory.MatchControl) |
| [`Material`](#DataModelObjectCategory.Material) |
| [`MaterialAssignment`](#DataModelObjectCategory.MaterialAssignment) |
| [`MaterialPlot`](#DataModelObjectCategory.MaterialPlot) |
| [`Materials`](#DataModelObjectCategory.Materials) |
| [`MatrixCompressiveDamageVariable`](#DataModelObjectCategory.MatrixCompressiveDamageVariable) |
| [`MatrixCompressiveFailureCriterion`](#DataModelObjectCategory.MatrixCompressiveFailureCriterion) |
| [`MatrixTensileDamageVariable`](#DataModelObjectCategory.MatrixTensileDamageVariable) |
| [`MatrixTensileFailureCriterion`](#DataModelObjectCategory.MatrixTensileFailureCriterion) |
| [`MaximumBendingStress`](#DataModelObjectCategory.MaximumBendingStress) |
| [`MaximumCombinedStress`](#DataModelObjectCategory.MaximumCombinedStress) |
| [`MaximumFailureCriteria`](#DataModelObjectCategory.MaximumFailureCriteria) |
| [`MaximumPrincipalElasticStrain`](#DataModelObjectCategory.MaximumPrincipalElasticStrain) |
| [`MaximumPrincipalStress`](#DataModelObjectCategory.MaximumPrincipalStress) |
| [`MaximumPrincipalThermalStrain`](#DataModelObjectCategory.MaximumPrincipalThermalStrain) |
| [`MaximumShearElasticStrain`](#DataModelObjectCategory.MaximumShearElasticStrain) |
| [`MaximumShearStress`](#DataModelObjectCategory.MaximumShearStress) |
| [`Measures`](#DataModelObjectCategory.Measures) |
| [`MemberSizeManufacturingConstraint`](#DataModelObjectCategory.MemberSizeManufacturingConstraint) |
| [`MembraneStressEquivalent`](#DataModelObjectCategory.MembraneStressEquivalent) |
| [`MembraneStressIntensity`](#DataModelObjectCategory.MembraneStressIntensity) |
| [`Mesh`](#DataModelObjectCategory.Mesh) |
| [`MeshConnection`](#DataModelObjectCategory.MeshConnection) |
| [`MeshConnectionBase`](#DataModelObjectCategory.MeshConnectionBase) |
| [`MeshConnectionGroup`](#DataModelObjectCategory.MeshConnectionGroup) |
| [`MeshControl`](#DataModelObjectCategory.MeshControl) |
| [`MeshCopy`](#DataModelObjectCategory.MeshCopy) |
| [`MeshEdit`](#DataModelObjectCategory.MeshEdit) |
| [`MeshExtrude`](#DataModelObjectCategory.MeshExtrude) |
| [`MeshNumbering`](#DataModelObjectCategory.MeshNumbering) |
| [`MiddlePrincipalElasticStrain`](#DataModelObjectCategory.MiddlePrincipalElasticStrain) |
| [`MiddlePrincipalStress`](#DataModelObjectCategory.MiddlePrincipalStress) |
| [`MiddlePrincipalThermalStrain`](#DataModelObjectCategory.MiddlePrincipalThermalStrain) |
| [`MinimumBendingStress`](#DataModelObjectCategory.MinimumBendingStress) |
| [`MinimumCombinedStress`](#DataModelObjectCategory.MinimumCombinedStress) |
| [`MinimumPrincipalElasticStrain`](#DataModelObjectCategory.MinimumPrincipalElasticStrain) |
| [`MinimumPrincipalStress`](#DataModelObjectCategory.MinimumPrincipalStress) |
| [`Model`](#DataModelObjectCategory.Model) |
| [`ModelImport`](#DataModelObjectCategory.ModelImport) |
| [`Moment`](#DataModelObjectCategory.Moment) |
| [`MomentOfInertiaConstraint`](#DataModelObjectCategory.MomentOfInertiaConstraint) |
| [`MomentReaction`](#DataModelObjectCategory.MomentReaction) |
| [`MomentReactionTracker`](#DataModelObjectCategory.MomentReactionTracker) |
| [`MomentumTracker`](#DataModelObjectCategory.MomentumTracker) |
| [`MorphingRegion`](#DataModelObjectCategory.MorphingRegion) |
| [`MullinsDamageVariable`](#DataModelObjectCategory.MullinsDamageVariable) |
| [`MullinsMaximumPreviousStrainEnergy`](#DataModelObjectCategory.MullinsMaximumPreviousStrainEnergy) |
| [`NamedSelection`](#DataModelObjectCategory.NamedSelection) |
| [`NamedSelections`](#DataModelObjectCategory.NamedSelections) |
| [`NaturalFrequencyConstraint`](#DataModelObjectCategory.NaturalFrequencyConstraint) |
| [`NewtonRaphsonResidualCharge`](#DataModelObjectCategory.NewtonRaphsonResidualCharge) |
| [`NewtonRaphsonResidualForce`](#DataModelObjectCategory.NewtonRaphsonResidualForce) |
| [`NewtonRaphsonResidualHeat`](#DataModelObjectCategory.NewtonRaphsonResidualHeat) |
| [`NewtonRaphsonResidualMoment`](#DataModelObjectCategory.NewtonRaphsonResidualMoment) |
| [`NodalDisplacement`](#DataModelObjectCategory.NodalDisplacement) |
| [`NodalEulerXYAngle`](#DataModelObjectCategory.NodalEulerXYAngle) |
| [`NodalEulerXZAngle`](#DataModelObjectCategory.NodalEulerXZAngle) |
| [`NodalEulerYZAngle`](#DataModelObjectCategory.NodalEulerYZAngle) |
| [`NodalForce`](#DataModelObjectCategory.NodalForce) |
| [`NodalOrientation`](#DataModelObjectCategory.NodalOrientation) |
| [`NodalPressure`](#DataModelObjectCategory.NodalPressure) |
| [`NodalRotation`](#DataModelObjectCategory.NodalRotation) |
| [`NodalTriads`](#DataModelObjectCategory.NodalTriads) |
| [`NodeMerge`](#DataModelObjectCategory.NodeMerge) |
| [`NodeMergeGroup`](#DataModelObjectCategory.NodeMergeGroup) |
| [`NodeMove`](#DataModelObjectCategory.NodeMove) |
| [`NonLinearStabilizationEnergyTracker`](#DataModelObjectCategory.NonLinearStabilizationEnergyTracker) |
| [`NonlinearAdaptiveRegion`](#DataModelObjectCategory.NonlinearAdaptiveRegion) |
| [`NormalElasticStrain`](#DataModelObjectCategory.NormalElasticStrain) |
| [`NormalGasketPressure`](#DataModelObjectCategory.NormalGasketPressure) |
| [`NormalGasketTotalClosure`](#DataModelObjectCategory.NormalGasketTotalClosure) |
| [`NormalStress`](#DataModelObjectCategory.NormalStress) |
| [`NumberContactingTracker`](#DataModelObjectCategory.NumberContactingTracker) |
| [`NumberingControl`](#DataModelObjectCategory.NumberingControl) |
| [`Objective`](#DataModelObjectCategory.Objective) |
| [`OptimizationRegion`](#DataModelObjectCategory.OptimizationRegion) |
| [`PSDAcceleration`](#DataModelObjectCategory.PSDAcceleration) |
| [`PSDDisplacement`](#DataModelObjectCategory.PSDDisplacement) |
| [`PSDGAcceleration`](#DataModelObjectCategory.PSDGAcceleration) |
| [`PSDLoad`](#DataModelObjectCategory.PSDLoad) |
| [`PSDPressure`](#DataModelObjectCategory.PSDPressure) |
| [`PSDVelocity`](#DataModelObjectCategory.PSDVelocity) |
| [`ParameterVariable`](#DataModelObjectCategory.ParameterVariable) |
| [`ParameterVariableGroup`](#DataModelObjectCategory.ParameterVariableGroup) |
| [`Part`](#DataModelObjectCategory.Part) |
| [`PartTransform`](#DataModelObjectCategory.PartTransform) |
| [`PartTransformGroup`](#DataModelObjectCategory.PartTransformGroup) |
| [`Path`](#DataModelObjectCategory.Path) |
| [`PatternRepetitionConstraint`](#DataModelObjectCategory.PatternRepetitionConstraint) |
| [`PerfectlyInsulated`](#DataModelObjectCategory.PerfectlyInsulated) |
| [`PeriodicRegion`](#DataModelObjectCategory.PeriodicRegion) |
| [`PhysicsRegion`](#DataModelObjectCategory.PhysicsRegion) |
| [`Pinch`](#DataModelObjectCategory.Pinch) |
| [`PipeIdealization`](#DataModelObjectCategory.PipeIdealization) |
| [`PipePressure`](#DataModelObjectCategory.PipePressure) |
| [`PipeTemperature`](#DataModelObjectCategory.PipeTemperature) |
| [`PlasticHeating`](#DataModelObjectCategory.PlasticHeating) |
| [`PlasticWorkTracker`](#DataModelObjectCategory.PlasticWorkTracker) |
| [`PointMass`](#DataModelObjectCategory.PointMass) |
| [`Position`](#DataModelObjectCategory.Position) |
| [`PositionTracker`](#DataModelObjectCategory.PositionTracker) |
| [`PostContactTool`](#DataModelObjectCategory.PostContactTool) |
| [`PreContactTool`](#DataModelObjectCategory.PreContactTool) |
| [`PreMeshedCrack`](#DataModelObjectCategory.PreMeshedCrack) |
| [`PreMeshedCyclicRegion`](#DataModelObjectCategory.PreMeshedCyclicRegion) |
| [`PredefinedAMSupport`](#DataModelObjectCategory.PredefinedAMSupport) |
| [`Pressure`](#DataModelObjectCategory.Pressure) |
| [`PressureTracker`](#DataModelObjectCategory.PressureTracker) |
| [`PrimaryCriterion`](#DataModelObjectCategory.PrimaryCriterion) |
| [`Project`](#DataModelObjectCategory.Project) |
| [`PullOutDirectionManufacturingConstraint`](#DataModelObjectCategory.PullOutDirectionManufacturingConstraint) |
| [`PythonCode`](#DataModelObjectCategory.PythonCode) |
| [`PythonCodeEventBased`](#DataModelObjectCategory.PythonCodeEventBased) |
| [`PythonResult`](#DataModelObjectCategory.PythonResult) |
| [`QualityFactor`](#DataModelObjectCategory.QualityFactor) |
| [`RSAcceleration`](#DataModelObjectCategory.RSAcceleration) |
| [`RSDisplacement`](#DataModelObjectCategory.RSDisplacement) |
| [`RSLoad`](#DataModelObjectCategory.RSLoad) |
| [`RSVelocity`](#DataModelObjectCategory.RSVelocity) |
| [`Radiation`](#DataModelObjectCategory.Radiation) |
| [`RadiationProbe`](#DataModelObjectCategory.RadiationProbe) |
| [`ReactionForceConstraint`](#DataModelObjectCategory.ReactionForceConstraint) |
| [`ReactionProbe`](#DataModelObjectCategory.ReactionProbe) |
| [`RectangularCrossSection`](#DataModelObjectCategory.RectangularCrossSection) |
| [`Refinement`](#DataModelObjectCategory.Refinement) |
| [`Relevance`](#DataModelObjectCategory.Relevance) |
| [`RemoteDisplacement`](#DataModelObjectCategory.RemoteDisplacement) |
| [`RemoteForce`](#DataModelObjectCategory.RemoteForce) |
| [`RemotePoint`](#DataModelObjectCategory.RemotePoint) |
| [`RemotePoints`](#DataModelObjectCategory.RemotePoints) |
| [`RepairTopology`](#DataModelObjectCategory.RepairTopology) |
| [`ResponseConstraint`](#DataModelObjectCategory.ResponseConstraint) |
| [`ResponsePSD`](#DataModelObjectCategory.ResponsePSD) |
| [`ResponsePSDTool`](#DataModelObjectCategory.ResponsePSDTool) |
| [`Result`](#DataModelObjectCategory.Result) |
| [`ResultChart`](#DataModelObjectCategory.ResultChart) |
| [`ResultMesh`](#DataModelObjectCategory.ResultMesh) |
| [`ResultProbe`](#DataModelObjectCategory.ResultProbe) |
| [`ResultTable`](#DataModelObjectCategory.ResultTable) |
| [`RigidBodyVelocityTracker`](#DataModelObjectCategory.RigidBodyVelocityTracker) |
| [`RingCrack`](#DataModelObjectCategory.RingCrack) |
| [`RotatingForce`](#DataModelObjectCategory.RotatingForce) |
| [`RotationBoundaryCondition`](#DataModelObjectCategory.RotationBoundaryCondition) |
| [`RotationProbe`](#DataModelObjectCategory.RotationProbe) |
| [`RotationalAcceleration`](#DataModelObjectCategory.RotationalAcceleration) |
| [`RotationalVelocity`](#DataModelObjectCategory.RotationalVelocity) |
| [`SMARTCrackGrowth`](#DataModelObjectCategory.SMARTCrackGrowth) |
| [`STL`](#DataModelObjectCategory.STL) |
| [`STLAMSupport`](#DataModelObjectCategory.STLAMSupport) |
| [`ScriptDefinedResultFolder`](#DataModelObjectCategory.ScriptDefinedResultFolder) |
| [`SemiEllipticalCrack`](#DataModelObjectCategory.SemiEllipticalCrack) |
| [`ShapeFinder`](#DataModelObjectCategory.ShapeFinder) |
| [`ShapeFinderElemental`](#DataModelObjectCategory.ShapeFinderElemental) |
| [`ShearDamageVariable`](#DataModelObjectCategory.ShearDamageVariable) |
| [`ShearElasticStrain`](#DataModelObjectCategory.ShearElasticStrain) |
| [`ShearGasketPressure`](#DataModelObjectCategory.ShearGasketPressure) |
| [`ShearGasketTotalClosure`](#DataModelObjectCategory.ShearGasketTotalClosure) |
| [`ShearStress`](#DataModelObjectCategory.ShearStress) |
| [`ShellBendingStress`](#DataModelObjectCategory.ShellBendingStress) |
| [`ShellBottomPeakStress`](#DataModelObjectCategory.ShellBottomPeakStress) |
| [`ShellMembraneStress`](#DataModelObjectCategory.ShellMembraneStress) |
| [`ShellTopPeakStress`](#DataModelObjectCategory.ShellTopPeakStress) |
| [`SimplySupported`](#DataModelObjectCategory.SimplySupported) |
| [`Sizing`](#DataModelObjectCategory.Sizing) |
| [`Smoothing`](#DataModelObjectCategory.Smoothing) |
| [`Solid`](#DataModelObjectCategory.Solid) |
| [`Solution`](#DataModelObjectCategory.Solution) |
| [`SolutionCombination`](#DataModelObjectCategory.SolutionCombination) |
| [`SolutionInformation`](#DataModelObjectCategory.SolutionInformation) |
| [`SpotWeldConnection`](#DataModelObjectCategory.SpotWeldConnection) |
| [`SpotWeldGroup`](#DataModelObjectCategory.SpotWeldGroup) |
| [`Spring`](#DataModelObjectCategory.Spring) |
| [`SpringDampingForceTracker`](#DataModelObjectCategory.SpringDampingForceTracker) |
| [`SpringElasticForceTracker`](#DataModelObjectCategory.SpringElasticForceTracker) |
| [`SpringElongationTracker`](#DataModelObjectCategory.SpringElongationTracker) |
| [`SpringProbe`](#DataModelObjectCategory.SpringProbe) |
| [`SpringVelocityTracker`](#DataModelObjectCategory.SpringVelocityTracker) |
| [`StabilizationEnergy`](#DataModelObjectCategory.StabilizationEnergy) |
| [`Stage`](#DataModelObjectCategory.Stage) |
| [`StiffnessEnergyTracker`](#DataModelObjectCategory.StiffnessEnergyTracker) |
| [`StrainProbe`](#DataModelObjectCategory.StrainProbe) |
| [`StrainResult`](#DataModelObjectCategory.StrainResult) |
| [`StressFrequencyResponse`](#DataModelObjectCategory.StressFrequencyResponse) |
| [`StressIntensity`](#DataModelObjectCategory.StressIntensity) |
| [`StressPhaseResponse`](#DataModelObjectCategory.StressPhaseResponse) |
| [`StressProbe`](#DataModelObjectCategory.StressProbe) |
| [`StressRatio`](#DataModelObjectCategory.StressRatio) |
| [`StressResult`](#DataModelObjectCategory.StressResult) |
| [`StressSafetyFactor`](#DataModelObjectCategory.StressSafetyFactor) |
| [`StressSafetyMargin`](#DataModelObjectCategory.StressSafetyMargin) |
| [`StressTool`](#DataModelObjectCategory.StressTool) |
| [`StressToolResult`](#DataModelObjectCategory.StressToolResult) |
| [`StructuralError`](#DataModelObjectCategory.StructuralError) |
| [`StructuralStrainEnergy`](#DataModelObjectCategory.StructuralStrainEnergy) |
| [`SubstructureGenerationCondensedPart`](#DataModelObjectCategory.SubstructureGenerationCondensedPart) |
| [`Surface`](#DataModelObjectCategory.Surface) |
| [`SurfaceChargeDensity`](#DataModelObjectCategory.SurfaceChargeDensity) |
| [`SurfaceCoating`](#DataModelObjectCategory.SurfaceCoating) |
| [`Symmetry`](#DataModelObjectCategory.Symmetry) |
| [`SymmetryGeneral`](#DataModelObjectCategory.SymmetryGeneral) |
| [`SymmetryManufacturingConstraint`](#DataModelObjectCategory.SymmetryManufacturingConstraint) |
| [`SymmetryRegion`](#DataModelObjectCategory.SymmetryRegion) |
| [`TCrossSection`](#DataModelObjectCategory.TCrossSection) |
| [`Table`](#DataModelObjectCategory.Table) |
| [`TableGroup`](#DataModelObjectCategory.TableGroup) |
| [`Temperature`](#DataModelObjectCategory.Temperature) |
| [`TemperatureConstraint`](#DataModelObjectCategory.TemperatureConstraint) |
| [`TemperatureProbe`](#DataModelObjectCategory.TemperatureProbe) |
| [`TemperatureResult`](#DataModelObjectCategory.TemperatureResult) |
| [`TemperatureTracker`](#DataModelObjectCategory.TemperatureTracker) |
| [`ThermalComplianceConstraint`](#DataModelObjectCategory.ThermalComplianceConstraint) |
| [`ThermalCondition`](#DataModelObjectCategory.ThermalCondition) |
| [`ThermalError`](#DataModelObjectCategory.ThermalError) |
| [`ThermalPointMass`](#DataModelObjectCategory.ThermalPointMass) |
| [`ThermalResult`](#DataModelObjectCategory.ThermalResult) |
| [`ThermalStrainEnergy`](#DataModelObjectCategory.ThermalStrainEnergy) |
| [`Thickness`](#DataModelObjectCategory.Thickness) |
| [`ThroughCrack`](#DataModelObjectCategory.ThroughCrack) |
| [`TopoOptAnalysisSettings`](#DataModelObjectCategory.TopoOptAnalysisSettings) |
| [`TopologyDensity`](#DataModelObjectCategory.TopologyDensity) |
| [`TopologyElementalDensity`](#DataModelObjectCategory.TopologyElementalDensity) |
| [`TopologyOptimizationResult`](#DataModelObjectCategory.TopologyOptimizationResult) |
| [`TopologySuppressControl`](#DataModelObjectCategory.TopologySuppressControl) |
| [`TorqueProbe`](#DataModelObjectCategory.TorqueProbe) |
| [`TotalAcceleration`](#DataModelObjectCategory.TotalAcceleration) |
| [`TotalAxialForce`](#DataModelObjectCategory.TotalAxialForce) |
| [`TotalBendingMoment`](#DataModelObjectCategory.TotalBendingMoment) |
| [`TotalCurrentDensity`](#DataModelObjectCategory.TotalCurrentDensity) |
| [`TotalDeformation`](#DataModelObjectCategory.TotalDeformation) |
| [`TotalElectricFieldIntensity`](#DataModelObjectCategory.TotalElectricFieldIntensity) |
| [`TotalElectricFluxDensity`](#DataModelObjectCategory.TotalElectricFluxDensity) |
| [`TotalElectrostaticForce`](#DataModelObjectCategory.TotalElectrostaticForce) |
| [`TotalEnergyTracker`](#DataModelObjectCategory.TotalEnergyTracker) |
| [`TotalHeatFlux`](#DataModelObjectCategory.TotalHeatFlux) |
| [`TotalMagneticFieldIntensity`](#DataModelObjectCategory.TotalMagneticFieldIntensity) |
| [`TotalMagneticFluxDensity`](#DataModelObjectCategory.TotalMagneticFluxDensity) |
| [`TotalMassAverageVelocityTracker`](#DataModelObjectCategory.TotalMassAverageVelocityTracker) |
| [`TotalShearForce`](#DataModelObjectCategory.TotalShearForce) |
| [`TotalShearMomentDiagram`](#DataModelObjectCategory.TotalShearMomentDiagram) |
| [`TotalTorsionalMoment`](#DataModelObjectCategory.TotalTorsionalMoment) |
| [`TotalVelocity`](#DataModelObjectCategory.TotalVelocity) |
| [`TreeGroupingFolder`](#DataModelObjectCategory.TreeGroupingFolder) |
| [`UniformConstraint`](#DataModelObjectCategory.UniformConstraint) |
| [`UserDefinedCrossSection`](#DataModelObjectCategory.UserDefinedCrossSection) |
| [`UserDefinedResult`](#DataModelObjectCategory.UserDefinedResult) |
| [`UserLoad`](#DataModelObjectCategory.UserLoad) |
| [`UserObject`](#DataModelObjectCategory.UserObject) |
| [`UserPostObject`](#DataModelObjectCategory.UserPostObject) |
| [`UserResult`](#DataModelObjectCategory.UserResult) |
| [`UserSolver`](#DataModelObjectCategory.UserSolver) |
| [`VariableGraph`](#DataModelObjectCategory.VariableGraph) |
| [`VectorAxialForce`](#DataModelObjectCategory.VectorAxialForce) |
| [`VectorBendingMoment`](#DataModelObjectCategory.VectorBendingMoment) |
| [`VectorDeformation`](#DataModelObjectCategory.VectorDeformation) |
| [`VectorHeatFlux`](#DataModelObjectCategory.VectorHeatFlux) |
| [`VectorPrincipalElasticStrain`](#DataModelObjectCategory.VectorPrincipalElasticStrain) |
| [`VectorPrincipalStress`](#DataModelObjectCategory.VectorPrincipalStress) |
| [`VectorShearForce`](#DataModelObjectCategory.VectorShearForce) |
| [`VectorTorsionalMoment`](#DataModelObjectCategory.VectorTorsionalMoment) |
| [`Velocity`](#DataModelObjectCategory.Velocity) |
| [`VelocityFrequencyResponse`](#DataModelObjectCategory.VelocityFrequencyResponse) |
| [`VelocityPhaseResponse`](#DataModelObjectCategory.VelocityPhaseResponse) |
| [`VelocityProbe`](#DataModelObjectCategory.VelocityProbe) |
| [`VelocityWaterfallDiagram`](#DataModelObjectCategory.VelocityWaterfallDiagram) |
| [`VirtualCell`](#DataModelObjectCategory.VirtualCell) |
| [`VirtualTopology`](#DataModelObjectCategory.VirtualTopology) |
| [`ViscoelasticHeating`](#DataModelObjectCategory.ViscoelasticHeating) |
| [`Voltage`](#DataModelObjectCategory.Voltage) |
| [`VoltageFrequencyResponse`](#DataModelObjectCategory.VoltageFrequencyResponse) |
| [`VoltageGround`](#DataModelObjectCategory.VoltageGround) |
| [`Volume`](#DataModelObjectCategory.Volume) |
| [`VolumeChargeDensity`](#DataModelObjectCategory.VolumeChargeDensity) |
| [`VolumeConstraint`](#DataModelObjectCategory.VolumeConstraint) |
| [`VolumeProbe`](#DataModelObjectCategory.VolumeProbe) |
| [`Washer`](#DataModelObjectCategory.Washer) |
| [`Weld`](#DataModelObjectCategory.Weld) |
| [`ZCrossSection`](#DataModelObjectCategory.ZCrossSection) |

<a id="attribute-detail"></a>

## Attribute detail

<a id="DataModelObjectCategory.AMBondConnection"></a>

### DataModelObjectCategory.AMBondConnection *= 645*

<a id="DataModelObjectCategory.AMBuildSettings"></a>

### DataModelObjectCategory.AMBuildSettings *= 4*

<a id="DataModelObjectCategory.AMOverhangConstraint"></a>

### DataModelObjectCategory.AMOverhangConstraint *= 610*

<a id="DataModelObjectCategory.AMProcess"></a>

### DataModelObjectCategory.AMProcess *= 5*

<a id="DataModelObjectCategory.AMSupport"></a>

### DataModelObjectCategory.AMSupport *= 6*

<a id="DataModelObjectCategory.AMSupportGroup"></a>

### DataModelObjectCategory.AMSupportGroup *= 10*

<a id="DataModelObjectCategory.ANSYSAnalysisSettings"></a>

### DataModelObjectCategory.ANSYSAnalysisSettings *= 13*

<a id="DataModelObjectCategory.Acceleration"></a>

### DataModelObjectCategory.Acceleration *= 1*

<a id="DataModelObjectCategory.AccelerationFrequencyResponse"></a>

### DataModelObjectCategory.AccelerationFrequencyResponse *= 492*

<a id="DataModelObjectCategory.AccelerationPhaseResponse"></a>

### DataModelObjectCategory.AccelerationPhaseResponse *= 576*

<a id="DataModelObjectCategory.AccelerationProbe"></a>

### DataModelObjectCategory.AccelerationProbe *= 256*

<a id="DataModelObjectCategory.AccelerationWaterfallDiagram"></a>

### DataModelObjectCategory.AccelerationWaterfallDiagram *= 757*

<a id="DataModelObjectCategory.AccumulatedEquivalentPlasticStrain"></a>

### DataModelObjectCategory.AccumulatedEquivalentPlasticStrain *= 307*

<a id="DataModelObjectCategory.AcousticAWeightedSPLFrequencyResponse"></a>

### DataModelObjectCategory.AcousticAWeightedSPLFrequencyResponse *= 542*

<a id="DataModelObjectCategory.AcousticAWeightedSoundPressureLevel"></a>

### DataModelObjectCategory.AcousticAWeightedSoundPressureLevel *= 389*

<a id="DataModelObjectCategory.AcousticAbsorptionCoefficient"></a>

### DataModelObjectCategory.AcousticAbsorptionCoefficient *= 396*

<a id="DataModelObjectCategory.AcousticAbsorptionElement"></a>

### DataModelObjectCategory.AcousticAbsorptionElement *= 160*

<a id="DataModelObjectCategory.AcousticAbsorptionSurface"></a>

### DataModelObjectCategory.AcousticAbsorptionSurface *= 158*

<a id="DataModelObjectCategory.AcousticDiffuseSoundField"></a>

### DataModelObjectCategory.AcousticDiffuseSoundField *= 172*

<a id="DataModelObjectCategory.AcousticDiffuseSoundTransmissionLoss"></a>

### DataModelObjectCategory.AcousticDiffuseSoundTransmissionLoss *= 391*

<a id="DataModelObjectCategory.AcousticDirectionalVelocityResult"></a>

### DataModelObjectCategory.AcousticDirectionalVelocityResult *= 385*

<a id="DataModelObjectCategory.AcousticFarFieldRadationSurface"></a>

### DataModelObjectCategory.AcousticFarFieldRadationSurface *= 170*

<a id="DataModelObjectCategory.AcousticFarFieldResult"></a>

### DataModelObjectCategory.AcousticFarFieldResult *= 390*

<a id="DataModelObjectCategory.AcousticFarFieldSPLMicWaterfallDiagram"></a>

### DataModelObjectCategory.AcousticFarFieldSPLMicWaterfallDiagram *= 403*

<a id="DataModelObjectCategory.AcousticFarFieldSoundPowerLevelWaterfallDiagram"></a>

### DataModelObjectCategory.AcousticFarFieldSoundPowerLevelWaterfallDiagram *= 402*

<a id="DataModelObjectCategory.AcousticFreeSurface"></a>

### DataModelObjectCategory.AcousticFreeSurface *= 161*

<a id="DataModelObjectCategory.AcousticFrequencyBandAWeightedSPL"></a>

### DataModelObjectCategory.AcousticFrequencyBandAWeightedSPL *= 399*

<a id="DataModelObjectCategory.AcousticFrequencyBandSPL"></a>

### DataModelObjectCategory.AcousticFrequencyBandSPL *= 398*

<a id="DataModelObjectCategory.AcousticImpedanceBoundary"></a>

### DataModelObjectCategory.AcousticImpedanceBoundary *= 156*

<a id="DataModelObjectCategory.AcousticImpedanceSheet"></a>

### DataModelObjectCategory.AcousticImpedanceSheet *= 162*

<a id="DataModelObjectCategory.AcousticIncidentWaveSource"></a>

### DataModelObjectCategory.AcousticIncidentWaveSource *= 173*

<a id="DataModelObjectCategory.AcousticKineticEnergy"></a>

### DataModelObjectCategory.AcousticKineticEnergy *= 386*

<a id="DataModelObjectCategory.AcousticKineticEnergyFrequencyResponse"></a>

### DataModelObjectCategory.AcousticKineticEnergyFrequencyResponse *= 539*

<a id="DataModelObjectCategory.AcousticLowReducedFrequency"></a>

### DataModelObjectCategory.AcousticLowReducedFrequency *= 178*

<a id="DataModelObjectCategory.AcousticMassSource"></a>

### DataModelObjectCategory.AcousticMassSource *= 167*

<a id="DataModelObjectCategory.AcousticMassSourceRate"></a>

### DataModelObjectCategory.AcousticMassSourceRate *= 668*

<a id="DataModelObjectCategory.AcousticPort"></a>

### DataModelObjectCategory.AcousticPort *= 164*

<a id="DataModelObjectCategory.AcousticPortInDuct"></a>

### DataModelObjectCategory.AcousticPortInDuct *= 174*

<a id="DataModelObjectCategory.AcousticPotentialEnergy"></a>

### DataModelObjectCategory.AcousticPotentialEnergy *= 387*

<a id="DataModelObjectCategory.AcousticPotentialEnergyFrequencyResponse"></a>

### DataModelObjectCategory.AcousticPotentialEnergyFrequencyResponse *= 540*

<a id="DataModelObjectCategory.AcousticPressure"></a>

### DataModelObjectCategory.AcousticPressure *= 155*

<a id="DataModelObjectCategory.AcousticPressureFrequencyResponse"></a>

### DataModelObjectCategory.AcousticPressureFrequencyResponse *= 537*

<a id="DataModelObjectCategory.AcousticPressureResult"></a>

### DataModelObjectCategory.AcousticPressureResult *= 381*

<a id="DataModelObjectCategory.AcousticRadiationBoundary"></a>

### DataModelObjectCategory.AcousticRadiationBoundary *= 159*

<a id="DataModelObjectCategory.AcousticResult"></a>

### DataModelObjectCategory.AcousticResult *= 380*

<a id="DataModelObjectCategory.AcousticReturnLoss"></a>

### DataModelObjectCategory.AcousticReturnLoss *= 397*

<a id="DataModelObjectCategory.AcousticRigidWall"></a>

### DataModelObjectCategory.AcousticRigidWall *= 166*

<a id="DataModelObjectCategory.AcousticSPLFrequencyResponse"></a>

### DataModelObjectCategory.AcousticSPLFrequencyResponse *= 541*

<a id="DataModelObjectCategory.AcousticSoundPressureLevel"></a>

### DataModelObjectCategory.AcousticSoundPressureLevel *= 388*

<a id="DataModelObjectCategory.AcousticStaticPressure"></a>

### DataModelObjectCategory.AcousticStaticPressure *= 163*

<a id="DataModelObjectCategory.AcousticSurfaceAcceleration"></a>

### DataModelObjectCategory.AcousticSurfaceAcceleration *= 669*

<a id="DataModelObjectCategory.AcousticSurfaceVelocity"></a>

### DataModelObjectCategory.AcousticSurfaceVelocity *= 169*

<a id="DataModelObjectCategory.AcousticSymmetryPlane"></a>

### DataModelObjectCategory.AcousticSymmetryPlane *= 176*

<a id="DataModelObjectCategory.AcousticTemperature"></a>

### DataModelObjectCategory.AcousticTemperature *= 175*

<a id="DataModelObjectCategory.AcousticThermoViscousBLIBoundary"></a>

### DataModelObjectCategory.AcousticThermoViscousBLIBoundary *= 165*

<a id="DataModelObjectCategory.AcousticTotalVelocityResult"></a>

### DataModelObjectCategory.AcousticTotalVelocityResult *= 382*

<a id="DataModelObjectCategory.AcousticTransferAdmittanceMatrix"></a>

### DataModelObjectCategory.AcousticTransferAdmittanceMatrix *= 171*

<a id="DataModelObjectCategory.AcousticTransmissionLoss"></a>

### DataModelObjectCategory.AcousticTransmissionLoss *= 394*

<a id="DataModelObjectCategory.AcousticVelocityFrequencyResponse"></a>

### DataModelObjectCategory.AcousticVelocityFrequencyResponse *= 538*

<a id="DataModelObjectCategory.AddedMassTracker"></a>

### DataModelObjectCategory.AddedMassTracker *= 697*

<a id="DataModelObjectCategory.Alert"></a>

### DataModelObjectCategory.Alert *= 3*

<a id="DataModelObjectCategory.Analysis"></a>

### DataModelObjectCategory.Analysis *= 78*

<a id="DataModelObjectCategory.AnalysisPly"></a>

### DataModelObjectCategory.AnalysisPly *= 11*

<a id="DataModelObjectCategory.AnalysisSettings"></a>

### DataModelObjectCategory.AnalysisSettings *= 12*

<a id="DataModelObjectCategory.AngularAccelerationProbe"></a>

### DataModelObjectCategory.AngularAccelerationProbe *= 249*

<a id="DataModelObjectCategory.AngularVelocityProbe"></a>

### DataModelObjectCategory.AngularVelocityProbe *= 250*

<a id="DataModelObjectCategory.ArbitraryCrack"></a>

### DataModelObjectCategory.ArbitraryCrack *= 55*

<a id="DataModelObjectCategory.ArtificialEnergyTracker"></a>

### DataModelObjectCategory.ArtificialEnergyTracker *= 733*

<a id="DataModelObjectCategory.AutomaticMethod"></a>

### DataModelObjectCategory.AutomaticMethod *= 202*

<a id="DataModelObjectCategory.Beam"></a>

### DataModelObjectCategory.Beam *= 16*

<a id="DataModelObjectCategory.BeamProbe"></a>

### DataModelObjectCategory.BeamProbe *= 246*

<a id="DataModelObjectCategory.BeamResult"></a>

### DataModelObjectCategory.BeamResult *= 359*

<a id="DataModelObjectCategory.BeamTool"></a>

### DataModelObjectCategory.BeamTool *= 18*

<a id="DataModelObjectCategory.BeamToolResult"></a>

### DataModelObjectCategory.BeamToolResult *= 360*

<a id="DataModelObjectCategory.Bearing"></a>

### DataModelObjectCategory.Bearing *= 19*

<a id="DataModelObjectCategory.BearingLoad"></a>

### DataModelObjectCategory.BearingLoad *= 134*

<a id="DataModelObjectCategory.BearingProbe"></a>

### DataModelObjectCategory.BearingProbe *= 242*

<a id="DataModelObjectCategory.BendingStressEquivalent"></a>

### DataModelObjectCategory.BendingStressEquivalent *= 424*

<a id="DataModelObjectCategory.BendingStressIntensity"></a>

### DataModelObjectCategory.BendingStressIntensity *= 436*

<a id="DataModelObjectCategory.Body"></a>

### DataModelObjectCategory.Body *= 274*

<a id="DataModelObjectCategory.BodyControl"></a>

### DataModelObjectCategory.BodyControl *= 180*

<a id="DataModelObjectCategory.BodyInteraction"></a>

### DataModelObjectCategory.BodyInteraction *= 21*

<a id="DataModelObjectCategory.BodyInteractions"></a>

### DataModelObjectCategory.BodyInteractions *= 22*

<a id="DataModelObjectCategory.BoltAdjustment"></a>

### DataModelObjectCategory.BoltAdjustment *= 323*

<a id="DataModelObjectCategory.BoltPretension"></a>

### DataModelObjectCategory.BoltPretension *= 231*

<a id="DataModelObjectCategory.BoltPretensionProbe"></a>

### DataModelObjectCategory.BoltPretensionProbe *= 248*

<a id="DataModelObjectCategory.BoltTool"></a>

### DataModelObjectCategory.BoltTool *= 23*

<a id="DataModelObjectCategory.BoltToolResult"></a>

### DataModelObjectCategory.BoltToolResult *= 362*

<a id="DataModelObjectCategory.BoltWorkingLoad"></a>

### DataModelObjectCategory.BoltWorkingLoad *= 451*

<a id="DataModelObjectCategory.CampbellDiagram"></a>

### DataModelObjectCategory.CampbellDiagram *= 564*

<a id="DataModelObjectCategory.CenterOfGravityConstraint"></a>

### DataModelObjectCategory.CenterOfGravityConstraint *= 612*

<a id="DataModelObjectCategory.ChannelCrossSection"></a>

### DataModelObjectCategory.ChannelCrossSection *= 62*

<a id="DataModelObjectCategory.ChargeReactionFrequencyResponse"></a>

### DataModelObjectCategory.ChargeReactionFrequencyResponse *= 641*

<a id="DataModelObjectCategory.ChargeReactionProbe"></a>

### DataModelObjectCategory.ChargeReactionProbe *= 643*

<a id="DataModelObjectCategory.Chart"></a>

### DataModelObjectCategory.Chart *= 24*

<a id="DataModelObjectCategory.CircularCrossSection"></a>

### DataModelObjectCategory.CircularCrossSection *= 57*

<a id="DataModelObjectCategory.CircularTubeCrossSection"></a>

### DataModelObjectCategory.CircularTubeCrossSection *= 63*

<a id="DataModelObjectCategory.CoSimulationPin"></a>

### DataModelObjectCategory.CoSimulationPin *= 691*

<a id="DataModelObjectCategory.CommandSnippet"></a>

### DataModelObjectCategory.CommandSnippet *= 25*

<a id="DataModelObjectCategory.Comment"></a>

### DataModelObjectCategory.Comment *= 26*

<a id="DataModelObjectCategory.ComplexityIndexConstraint"></a>

### DataModelObjectCategory.ComplexityIndexConstraint *= 764*

<a id="DataModelObjectCategory.ComplianceConstraint"></a>

### DataModelObjectCategory.ComplianceConstraint *= 614*

<a id="DataModelObjectCategory.CompositeCriterion"></a>

### DataModelObjectCategory.CompositeCriterion *= 626*

<a id="DataModelObjectCategory.CompositeFailureCriteria"></a>

### DataModelObjectCategory.CompositeFailureCriteria *= 776*

<a id="DataModelObjectCategory.CompositeFailureResult"></a>

### DataModelObjectCategory.CompositeFailureResult *= 679*

<a id="DataModelObjectCategory.CompositeFailureTool"></a>

### DataModelObjectCategory.CompositeFailureTool *= 678*

<a id="DataModelObjectCategory.CompositeSamplingPoint"></a>

### DataModelObjectCategory.CompositeSamplingPoint *= 711*

<a id="DataModelObjectCategory.CompositeSamplingPointTool"></a>

### DataModelObjectCategory.CompositeSamplingPointTool *= 710*

<a id="DataModelObjectCategory.CompressionOnlySupport"></a>

### DataModelObjectCategory.CompressionOnlySupport *= 143*

<a id="DataModelObjectCategory.CondensedGeometry"></a>

### DataModelObjectCategory.CondensedGeometry *= 29*

<a id="DataModelObjectCategory.CondensedPart"></a>

### DataModelObjectCategory.CondensedPart *= 31*

<a id="DataModelObjectCategory.CondensedPartBase"></a>

### DataModelObjectCategory.CondensedPartBase *= 30*

<a id="DataModelObjectCategory.CondensedPartInfoTool"></a>

### DataModelObjectCategory.CondensedPartInfoTool *= 33*

<a id="DataModelObjectCategory.Connect"></a>

### DataModelObjectCategory.Connect *= 724*

<a id="DataModelObjectCategory.ConnectionGroup"></a>

### DataModelObjectCategory.ConnectionGroup *= 34*

<a id="DataModelObjectCategory.Connections"></a>

### DataModelObjectCategory.Connections *= 42*

<a id="DataModelObjectCategory.ConstraintEquation"></a>

### DataModelObjectCategory.ConstraintEquation *= 38*

<a id="DataModelObjectCategory.ConstructionGeometry"></a>

### DataModelObjectCategory.ConstructionGeometry *= 39*

<a id="DataModelObjectCategory.ConstructionLine"></a>

### DataModelObjectCategory.ConstructionLine *= 40*

<a id="DataModelObjectCategory.ConstructionPoint"></a>

### DataModelObjectCategory.ConstructionPoint *= 701*

<a id="DataModelObjectCategory.ContactChatteringTracker"></a>

### DataModelObjectCategory.ContactChatteringTracker *= 523*

<a id="DataModelObjectCategory.ContactClosedPenetrationTracker"></a>

### DataModelObjectCategory.ContactClosedPenetrationTracker *= 545*

<a id="DataModelObjectCategory.ContactDataTable"></a>

### DataModelObjectCategory.ContactDataTable *= 41*

<a id="DataModelObjectCategory.ContactDebonding"></a>

### DataModelObjectCategory.ContactDebonding *= 72*

<a id="DataModelObjectCategory.ContactDepthTracker"></a>

### DataModelObjectCategory.ContactDepthTracker *= 543*

<a id="DataModelObjectCategory.ContactDistanceProbe"></a>

### DataModelObjectCategory.ContactDistanceProbe *= 737*

<a id="DataModelObjectCategory.ContactElasticSlipTracker"></a>

### DataModelObjectCategory.ContactElasticSlipTracker *= 525*

<a id="DataModelObjectCategory.ContactEnergyTracker"></a>

### DataModelObjectCategory.ContactEnergyTracker *= 562*

<a id="DataModelObjectCategory.ContactFluidPressure"></a>

### DataModelObjectCategory.ContactFluidPressure *= 346*

<a id="DataModelObjectCategory.ContactFluidPressureTracker"></a>

### DataModelObjectCategory.ContactFluidPressureTracker *= 520*

<a id="DataModelObjectCategory.ContactForceTracker"></a>

### DataModelObjectCategory.ContactForceTracker *= 495*

<a id="DataModelObjectCategory.ContactFrictionalDissipationEnergyTracker"></a>

### DataModelObjectCategory.ContactFrictionalDissipationEnergyTracker *= 550*

<a id="DataModelObjectCategory.ContactFrictionalStress"></a>

### DataModelObjectCategory.ContactFrictionalStress *= 349*

<a id="DataModelObjectCategory.ContactFrictionalStressTracker"></a>

### DataModelObjectCategory.ContactFrictionalStressTracker *= 515*

<a id="DataModelObjectCategory.ContactGap"></a>

### DataModelObjectCategory.ContactGap *= 348*

<a id="DataModelObjectCategory.ContactGapTracker"></a>

### DataModelObjectCategory.ContactGapTracker *= 514*

<a id="DataModelObjectCategory.ContactHeatFlux"></a>

### DataModelObjectCategory.ContactHeatFlux *= 356*

<a id="DataModelObjectCategory.ContactHeatFluxTracker"></a>

### DataModelObjectCategory.ContactHeatFluxTracker *= 565*

<a id="DataModelObjectCategory.ContactMatch"></a>

### DataModelObjectCategory.ContactMatch *= 198*

<a id="DataModelObjectCategory.ContactMatchGroup"></a>

### DataModelObjectCategory.ContactMatchGroup *= 37*

<a id="DataModelObjectCategory.ContactMaxTangentialFluidPressureTracker"></a>

### DataModelObjectCategory.ContactMaxTangentialFluidPressureTracker *= 574*

<a id="DataModelObjectCategory.ContactMaximumDampingPressureTracker"></a>

### DataModelObjectCategory.ContactMaximumDampingPressureTracker *= 521*

<a id="DataModelObjectCategory.ContactMaximumGeometricSlidingDistanceTracker"></a>

### DataModelObjectCategory.ContactMaximumGeometricSlidingDistanceTracker *= 519*

<a id="DataModelObjectCategory.ContactMaximumNormalStiffnessTracker"></a>

### DataModelObjectCategory.ContactMaximumNormalStiffnessTracker *= 526*

<a id="DataModelObjectCategory.ContactMaximumTangentialStiffnessTracker"></a>

### DataModelObjectCategory.ContactMaximumTangentialStiffnessTracker *= 527*

<a id="DataModelObjectCategory.ContactMinimumGeometricSlidingDistanceTracker"></a>

### DataModelObjectCategory.ContactMinimumGeometricSlidingDistanceTracker *= 518*

<a id="DataModelObjectCategory.ContactMinimumNormalStiffnessTracker"></a>

### DataModelObjectCategory.ContactMinimumNormalStiffnessTracker *= 563*

<a id="DataModelObjectCategory.ContactMinimumTangentialStiffnessTracker"></a>

### DataModelObjectCategory.ContactMinimumTangentialStiffnessTracker *= 530*

<a id="DataModelObjectCategory.ContactNumberStickingTracker"></a>

### DataModelObjectCategory.ContactNumberStickingTracker *= 529*

<a id="DataModelObjectCategory.ContactNumberWithLargePenetrationTracker"></a>

### DataModelObjectCategory.ContactNumberWithLargePenetrationTracker *= 546*

<a id="DataModelObjectCategory.ContactNumberWithTooMuchSlidingTracker"></a>

### DataModelObjectCategory.ContactNumberWithTooMuchSlidingTracker *= 552*

<a id="DataModelObjectCategory.ContactPairForceConvergenceNormTracker"></a>

### DataModelObjectCategory.ContactPairForceConvergenceNormTracker *= 573*

<a id="DataModelObjectCategory.ContactPenetration"></a>

### DataModelObjectCategory.ContactPenetration *= 347*

<a id="DataModelObjectCategory.ContactPenetrationTracker"></a>

### DataModelObjectCategory.ContactPenetrationTracker *= 512*

<a id="DataModelObjectCategory.ContactPressure"></a>

### DataModelObjectCategory.ContactPressure *= 351*

<a id="DataModelObjectCategory.ContactPressureTracker"></a>

### DataModelObjectCategory.ContactPressureTracker *= 517*

<a id="DataModelObjectCategory.ContactRegion"></a>

### DataModelObjectCategory.ContactRegion *= 44*

<a id="DataModelObjectCategory.ContactResultingPinballTracker"></a>

### DataModelObjectCategory.ContactResultingPinballTracker *= 528*

<a id="DataModelObjectCategory.ContactSizing"></a>

### DataModelObjectCategory.ContactSizing *= 208*

<a id="DataModelObjectCategory.ContactSlidingDistance"></a>

### DataModelObjectCategory.ContactSlidingDistance *= 350*

<a id="DataModelObjectCategory.ContactSlidingDistanceTracker"></a>

### DataModelObjectCategory.ContactSlidingDistanceTracker *= 516*

<a id="DataModelObjectCategory.ContactSlidingIndicationTracker"></a>

### DataModelObjectCategory.ContactSlidingIndicationTracker *= 560*

<a id="DataModelObjectCategory.ContactSolutionInformation"></a>

### DataModelObjectCategory.ContactSolutionInformation *= 43*

<a id="DataModelObjectCategory.ContactStabilizationEnergyTracker"></a>

### DataModelObjectCategory.ContactStabilizationEnergyTracker *= 551*

<a id="DataModelObjectCategory.ContactStatus"></a>

### DataModelObjectCategory.ContactStatus *= 352*

<a id="DataModelObjectCategory.ContactStepControl"></a>

### DataModelObjectCategory.ContactStepControl *= 76*

<a id="DataModelObjectCategory.ContactStrainEnergyTracker"></a>

### DataModelObjectCategory.ContactStrainEnergyTracker *= 549*

<a id="DataModelObjectCategory.ContactTangentialDampingStressTracker"></a>

### DataModelObjectCategory.ContactTangentialDampingStressTracker *= 547*

<a id="DataModelObjectCategory.ContactTool"></a>

### DataModelObjectCategory.ContactTool *= 45*

<a id="DataModelObjectCategory.ContactToolResult"></a>

### DataModelObjectCategory.ContactToolResult *= 363*

<a id="DataModelObjectCategory.ContactTotalForceFromContactPressureXTracker"></a>

### DataModelObjectCategory.ContactTotalForceFromContactPressureXTracker *= 553*

<a id="DataModelObjectCategory.ContactTotalForceFromContactPressureYTracker"></a>

### DataModelObjectCategory.ContactTotalForceFromContactPressureYTracker *= 554*

<a id="DataModelObjectCategory.ContactTotalForceFromContactPressureZTracker"></a>

### DataModelObjectCategory.ContactTotalForceFromContactPressureZTracker *= 556*

<a id="DataModelObjectCategory.ContactTotalForceFromTangentialStressXTracker"></a>

### DataModelObjectCategory.ContactTotalForceFromTangentialStressXTracker *= 557*

<a id="DataModelObjectCategory.ContactTotalForceFromTangentialStressYTracker"></a>

### DataModelObjectCategory.ContactTotalForceFromTangentialStressYTracker *= 558*

<a id="DataModelObjectCategory.ContactTotalForceFromTangentialStressZTracker"></a>

### DataModelObjectCategory.ContactTotalForceFromTangentialStressZTracker *= 559*

<a id="DataModelObjectCategory.ContactVolumeLossDueToWearTracker"></a>

### DataModelObjectCategory.ContactVolumeLossDueToWearTracker *= 548*

<a id="DataModelObjectCategory.ContactingAreaTracker"></a>

### DataModelObjectCategory.ContactingAreaTracker *= 522*

<a id="DataModelObjectCategory.Convection"></a>

### DataModelObjectCategory.Convection *= 179*

<a id="DataModelObjectCategory.Convergence"></a>

### DataModelObjectCategory.Convergence *= 48*

<a id="DataModelObjectCategory.CoordinateSystem"></a>

### DataModelObjectCategory.CoordinateSystem *= 49*

<a id="DataModelObjectCategory.CoordinateSystems"></a>

### DataModelObjectCategory.CoordinateSystems *= 50*

<a id="DataModelObjectCategory.CoordinateSystemsResult"></a>

### DataModelObjectCategory.CoordinateSystemsResult *= 364*

<a id="DataModelObjectCategory.CornerCrack"></a>

### DataModelObjectCategory.CornerCrack *= 759*

<a id="DataModelObjectCategory.CoupledPhysicsHeatingObjects"></a>

### DataModelObjectCategory.CoupledPhysicsHeatingObjects *= 224*

<a id="DataModelObjectCategory.Coupling"></a>

### DataModelObjectCategory.Coupling *= 51*

<a id="DataModelObjectCategory.Criterion"></a>

### DataModelObjectCategory.Criterion *= 624*

<a id="DataModelObjectCategory.CriterionConstraint"></a>

### DataModelObjectCategory.CriterionConstraint *= 615*

<a id="DataModelObjectCategory.CrossSection"></a>

### DataModelObjectCategory.CrossSection *= 56*

<a id="DataModelObjectCategory.CrossSections"></a>

### DataModelObjectCategory.CrossSections *= 68*

<a id="DataModelObjectCategory.Current"></a>

### DataModelObjectCategory.Current *= 131*

<a id="DataModelObjectCategory.CurrentDensity"></a>

### DataModelObjectCategory.CurrentDensity *= 434*

<a id="DataModelObjectCategory.CurrentDensityProbe"></a>

### DataModelObjectCategory.CurrentDensityProbe *= 240*

<a id="DataModelObjectCategory.CyclicManufacturingConstraint"></a>

### DataModelObjectCategory.CyclicManufacturingConstraint *= 608*

<a id="DataModelObjectCategory.CyclicRegion"></a>

### DataModelObjectCategory.CyclicRegion *= 597*

<a id="DataModelObjectCategory.CylindricalCrack"></a>

### DataModelObjectCategory.CylindricalCrack *= 766*

<a id="DataModelObjectCategory.CylindricalSupport"></a>

### DataModelObjectCategory.CylindricalSupport *= 127*

<a id="DataModelObjectCategory.DamageResult"></a>

### DataModelObjectCategory.DamageResult *= 365*

<a id="DataModelObjectCategory.DamageStatus"></a>

### DataModelObjectCategory.DamageStatus *= 437*

<a id="DataModelObjectCategory.DampingEnergyTracker"></a>

### DataModelObjectCategory.DampingEnergyTracker *= 732*

<a id="DataModelObjectCategory.DataModelObject"></a>

### DataModelObjectCategory.DataModelObject *= 636*

<a id="DataModelObjectCategory.DeformationFrequencyResponse"></a>

### DataModelObjectCategory.DeformationFrequencyResponse *= 544*

<a id="DataModelObjectCategory.DeformationPhaseResponse"></a>

### DataModelObjectCategory.DeformationPhaseResponse *= 535*

<a id="DataModelObjectCategory.DeformationProbe"></a>

### DataModelObjectCategory.DeformationProbe *= 270*

<a id="DataModelObjectCategory.DeformationResult"></a>

### DataModelObjectCategory.DeformationResult *= 366*

<a id="DataModelObjectCategory.DensityTracker"></a>

### DataModelObjectCategory.DensityTracker *= 498*

<a id="DataModelObjectCategory.DetonationPoint"></a>

### DataModelObjectCategory.DetonationPoint *= 182*

<a id="DataModelObjectCategory.Deviation"></a>

### DataModelObjectCategory.Deviation *= 689*

<a id="DataModelObjectCategory.DirectMorph"></a>

### DataModelObjectCategory.DirectMorph *= 688*

<a id="DataModelObjectCategory.DirectStress"></a>

### DataModelObjectCategory.DirectStress *= 335*

<a id="DataModelObjectCategory.DirectionalAcceleration"></a>

### DataModelObjectCategory.DirectionalAcceleration *= 355*

<a id="DataModelObjectCategory.DirectionalAccelerationPSD"></a>

### DataModelObjectCategory.DirectionalAccelerationPSD *= 439*

<a id="DataModelObjectCategory.DirectionalAccelerationRS"></a>

### DataModelObjectCategory.DirectionalAccelerationRS *= 440*

<a id="DataModelObjectCategory.DirectionalAccelerationTracker"></a>

### DataModelObjectCategory.DirectionalAccelerationTracker *= 569*

<a id="DataModelObjectCategory.DirectionalAxialForce"></a>

### DataModelObjectCategory.DirectionalAxialForce *= 413*

<a id="DataModelObjectCategory.DirectionalBendingMoment"></a>

### DataModelObjectCategory.DirectionalBendingMoment *= 414*

<a id="DataModelObjectCategory.DirectionalCurrentDensity"></a>

### DataModelObjectCategory.DirectionalCurrentDensity *= 433*

<a id="DataModelObjectCategory.DirectionalDeformation"></a>

### DataModelObjectCategory.DirectionalDeformation *= 285*

<a id="DataModelObjectCategory.DirectionalDeformationTracker"></a>

### DataModelObjectCategory.DirectionalDeformationTracker *= 566*

<a id="DataModelObjectCategory.DirectionalElectricFieldIntensity"></a>

### DataModelObjectCategory.DirectionalElectricFieldIntensity *= 429*

<a id="DataModelObjectCategory.DirectionalElectricFluxDensity"></a>

### DataModelObjectCategory.DirectionalElectricFluxDensity *= 407*

<a id="DataModelObjectCategory.DirectionalElectrostaticForce"></a>

### DataModelObjectCategory.DirectionalElectrostaticForce *= 740*

<a id="DataModelObjectCategory.DirectionalHeatFlux"></a>

### DataModelObjectCategory.DirectionalHeatFlux *= 412*

<a id="DataModelObjectCategory.DirectionalMagneticFieldIntensity"></a>

### DataModelObjectCategory.DirectionalMagneticFieldIntensity *= 441*

<a id="DataModelObjectCategory.DirectionalMagneticFluxDensity"></a>

### DataModelObjectCategory.DirectionalMagneticFluxDensity *= 442*

<a id="DataModelObjectCategory.DirectionalShearForce"></a>

### DataModelObjectCategory.DirectionalShearForce *= 443*

<a id="DataModelObjectCategory.DirectionalShearMomentDiagram"></a>

### DataModelObjectCategory.DirectionalShearMomentDiagram *= 305*

<a id="DataModelObjectCategory.DirectionalStress"></a>

### DataModelObjectCategory.DirectionalStress *= 378*

<a id="DataModelObjectCategory.DirectionalThermalHeatFlux"></a>

### DataModelObjectCategory.DirectionalThermalHeatFlux *= 379*

<a id="DataModelObjectCategory.DirectionalThermalStrain"></a>

### DataModelObjectCategory.DirectionalThermalStrain *= 319*

<a id="DataModelObjectCategory.DirectionalTorsionalMoment"></a>

### DataModelObjectCategory.DirectionalTorsionalMoment *= 420*

<a id="DataModelObjectCategory.DirectionalVelocity"></a>

### DataModelObjectCategory.DirectionalVelocity *= 344*

<a id="DataModelObjectCategory.DirectionalVelocityPSD"></a>

### DataModelObjectCategory.DirectionalVelocityPSD *= 444*

<a id="DataModelObjectCategory.DirectionalVelocityRS"></a>

### DataModelObjectCategory.DirectionalVelocityRS *= 445*

<a id="DataModelObjectCategory.DirectionalVelocityTracker"></a>

### DataModelObjectCategory.DirectionalVelocityTracker *= 568*

<a id="DataModelObjectCategory.Displacement"></a>

### DataModelObjectCategory.Displacement *= 132*

<a id="DataModelObjectCategory.DisplacementConstraint"></a>

### DataModelObjectCategory.DisplacementConstraint *= 622*

<a id="DataModelObjectCategory.DistributedMass"></a>

### DataModelObjectCategory.DistributedMass *= 229*

<a id="DataModelObjectCategory.DynamicComplianceConstraint"></a>

### DataModelObjectCategory.DynamicComplianceConstraint *= 714*

<a id="DataModelObjectCategory.EMTransducer"></a>

### DataModelObjectCategory.EMTransducer *= 153*

<a id="DataModelObjectCategory.EarthGravity"></a>

### DataModelObjectCategory.EarthGravity *= 0*

<a id="DataModelObjectCategory.EdgeCrack"></a>

### DataModelObjectCategory.EdgeCrack *= 760*

<a id="DataModelObjectCategory.EffectiveStrainTracker"></a>

### DataModelObjectCategory.EffectiveStrainTracker *= 572*

<a id="DataModelObjectCategory.EffectiveStressTracker"></a>

### DataModelObjectCategory.EffectiveStressTracker *= 571*

<a id="DataModelObjectCategory.ElasticStrainFrequencyResponse"></a>

### DataModelObjectCategory.ElasticStrainFrequencyResponse *= 524*

<a id="DataModelObjectCategory.ElasticStrainIntensity"></a>

### DataModelObjectCategory.ElasticStrainIntensity *= 446*

<a id="DataModelObjectCategory.ElasticStrainPhaseResponse"></a>

### DataModelObjectCategory.ElasticStrainPhaseResponse *= 513*

<a id="DataModelObjectCategory.ElasticSupport"></a>

### DataModelObjectCategory.ElasticSupport *= 142*

<a id="DataModelObjectCategory.ElectricCharge"></a>

### DataModelObjectCategory.ElectricCharge *= 183*

<a id="DataModelObjectCategory.ElectricFieldProbe"></a>

### DataModelObjectCategory.ElectricFieldProbe *= 243*

<a id="DataModelObjectCategory.ElectricPotential"></a>

### DataModelObjectCategory.ElectricPotential *= 361*

<a id="DataModelObjectCategory.ElectricResult"></a>

### DataModelObjectCategory.ElectricResult *= 367*

<a id="DataModelObjectCategory.ElectricVoltage"></a>

### DataModelObjectCategory.ElectricVoltage *= 428*

<a id="DataModelObjectCategory.ElectricVoltageProbe"></a>

### DataModelObjectCategory.ElectricVoltageProbe *= 239*

<a id="DataModelObjectCategory.ElectromagneticResult"></a>

### DataModelObjectCategory.ElectromagneticResult *= 368*

<a id="DataModelObjectCategory.ElectromechanicalCouplingCoefficient"></a>

### DataModelObjectCategory.ElectromechanicalCouplingCoefficient *= 677*

<a id="DataModelObjectCategory.ElementBirthAndDeath"></a>

### DataModelObjectCategory.ElementBirthAndDeath *= 75*

<a id="DataModelObjectCategory.ElementControls"></a>

### DataModelObjectCategory.ElementControls *= 74*

<a id="DataModelObjectCategory.ElementOrientation"></a>

### DataModelObjectCategory.ElementOrientation *= 77*

<a id="DataModelObjectCategory.ElementalEulerXYAngle"></a>

### DataModelObjectCategory.ElementalEulerXYAngle *= 418*

<a id="DataModelObjectCategory.ElementalEulerXZAngle"></a>

### DataModelObjectCategory.ElementalEulerXZAngle *= 447*

<a id="DataModelObjectCategory.ElementalEulerYZAngle"></a>

### DataModelObjectCategory.ElementalEulerYZAngle *= 449*

<a id="DataModelObjectCategory.ElementalStrainEnergy"></a>

### DataModelObjectCategory.ElementalStrainEnergy *= 450*

<a id="DataModelObjectCategory.ElementalTriads"></a>

### DataModelObjectCategory.ElementalTriads *= 410*

<a id="DataModelObjectCategory.EllipticalCrack"></a>

### DataModelObjectCategory.EllipticalCrack *= 735*

<a id="DataModelObjectCategory.EmagReactionProbe"></a>

### DataModelObjectCategory.EmagReactionProbe *= 241*

<a id="DataModelObjectCategory.EndRelease"></a>

### DataModelObjectCategory.EndRelease *= 17*

<a id="DataModelObjectCategory.EnergyDissipatedPerUnitVolume"></a>

### DataModelObjectCategory.EnergyDissipatedPerUnitVolume *= 452*

<a id="DataModelObjectCategory.EnergyProbe"></a>

### DataModelObjectCategory.EnergyProbe *= 247*

<a id="DataModelObjectCategory.EnergyResult"></a>

### DataModelObjectCategory.EnergyResult *= 369*

<a id="DataModelObjectCategory.EquivalentCreepStrain"></a>

### DataModelObjectCategory.EquivalentCreepStrain *= 453*

<a id="DataModelObjectCategory.EquivalentCreepStrainRST"></a>

### DataModelObjectCategory.EquivalentCreepStrainRST *= 454*

<a id="DataModelObjectCategory.EquivalentElasticStrain"></a>

### DataModelObjectCategory.EquivalentElasticStrain *= 333*

<a id="DataModelObjectCategory.EquivalentElasticStrainRST"></a>

### DataModelObjectCategory.EquivalentElasticStrainRST *= 455*

<a id="DataModelObjectCategory.EquivalentPlasticStrain"></a>

### DataModelObjectCategory.EquivalentPlasticStrain *= 426*

<a id="DataModelObjectCategory.EquivalentPlasticStrainRST"></a>

### DataModelObjectCategory.EquivalentPlasticStrainRST *= 456*

<a id="DataModelObjectCategory.EquivalentRadiatedPower"></a>

### DataModelObjectCategory.EquivalentRadiatedPower *= 392*

<a id="DataModelObjectCategory.EquivalentRadiatedPowerLevel"></a>

### DataModelObjectCategory.EquivalentRadiatedPowerLevel *= 393*

<a id="DataModelObjectCategory.EquivalentRadiatedPowerLevelWaterfallDiagram"></a>

### DataModelObjectCategory.EquivalentRadiatedPowerLevelWaterfallDiagram *= 401*

<a id="DataModelObjectCategory.EquivalentRadiatedPowerWaterfallDiagram"></a>

### DataModelObjectCategory.EquivalentRadiatedPowerWaterfallDiagram *= 400*

<a id="DataModelObjectCategory.EquivalentStress"></a>

### DataModelObjectCategory.EquivalentStress *= 376*

<a id="DataModelObjectCategory.EquivalentStressPSD"></a>

### DataModelObjectCategory.EquivalentStressPSD *= 457*

<a id="DataModelObjectCategory.EquivalentStressRS"></a>

### DataModelObjectCategory.EquivalentStressRS *= 458*

<a id="DataModelObjectCategory.EquivalentTotalStrain"></a>

### DataModelObjectCategory.EquivalentTotalStrain *= 460*

<a id="DataModelObjectCategory.ErodedInternalEnergyTracker"></a>

### DataModelObjectCategory.ErodedInternalEnergyTracker *= 695*

<a id="DataModelObjectCategory.ErodedKineticEnergyTracker"></a>

### DataModelObjectCategory.ErodedKineticEnergyTracker *= 694*

<a id="DataModelObjectCategory.ExclusionRegion"></a>

### DataModelObjectCategory.ExclusionRegion *= 218*

<a id="DataModelObjectCategory.ExpansionSettings"></a>

### DataModelObjectCategory.ExpansionSettings *= 79*

<a id="DataModelObjectCategory.ExternalEnhancedModel"></a>

### DataModelObjectCategory.ExternalEnhancedModel *= 80*

<a id="DataModelObjectCategory.ExternalForceTracker"></a>

### DataModelObjectCategory.ExternalForceTracker *= 496*

<a id="DataModelObjectCategory.ExternalModelDataColl"></a>

### DataModelObjectCategory.ExternalModelDataColl *= 95*

<a id="DataModelObjectCategory.ExtrusionManufacturingConstraint"></a>

### DataModelObjectCategory.ExtrusionManufacturingConstraint *= 607*

<a id="DataModelObjectCategory.FaceMeshing"></a>

### DataModelObjectCategory.FaceMeshing *= 204*

<a id="DataModelObjectCategory.FatigueBiaxialityIndication"></a>

### DataModelObjectCategory.FatigueBiaxialityIndication *= 343*

<a id="DataModelObjectCategory.FatigueCombination"></a>

### DataModelObjectCategory.FatigueCombination *= 718*

<a id="DataModelObjectCategory.FatigueDamage"></a>

### DataModelObjectCategory.FatigueDamage *= 342*

<a id="DataModelObjectCategory.FatigueDamageMatrix"></a>

### DataModelObjectCategory.FatigueDamageMatrix *= 534*

<a id="DataModelObjectCategory.FatigueEquivalentAlternativeStress"></a>

### DataModelObjectCategory.FatigueEquivalentAlternativeStress *= 341*

<a id="DataModelObjectCategory.FatigueHysteresis"></a>

### DataModelObjectCategory.FatigueHysteresis *= 532*

<a id="DataModelObjectCategory.FatigueLife"></a>

### DataModelObjectCategory.FatigueLife *= 345*

<a id="DataModelObjectCategory.FatigueRainflowMatrix"></a>

### DataModelObjectCategory.FatigueRainflowMatrix *= 533*

<a id="DataModelObjectCategory.FatigueSafetyFactor"></a>

### DataModelObjectCategory.FatigueSafetyFactor *= 340*

<a id="DataModelObjectCategory.FatigueSensitivity"></a>

### DataModelObjectCategory.FatigueSensitivity *= 536*

<a id="DataModelObjectCategory.FatigueTool"></a>

### DataModelObjectCategory.FatigueTool *= 109*

<a id="DataModelObjectCategory.FatigueToolResult"></a>

### DataModelObjectCategory.FatigueToolResult *= 370*

<a id="DataModelObjectCategory.FeatureDetection"></a>

### DataModelObjectCategory.FeatureDetection *= 110*

<a id="DataModelObjectCategory.FeatureSuppress"></a>

### DataModelObjectCategory.FeatureSuppress *= 730*

<a id="DataModelObjectCategory.FiberCompressiveDamageVariable"></a>

### DataModelObjectCategory.FiberCompressiveDamageVariable *= 461*

<a id="DataModelObjectCategory.FiberCompressiveFailureCriterion"></a>

### DataModelObjectCategory.FiberCompressiveFailureCriterion *= 462*

<a id="DataModelObjectCategory.FiberTensileDamageVariable"></a>

### DataModelObjectCategory.FiberTensileDamageVariable *= 463*

<a id="DataModelObjectCategory.FiberTensileFailureCriterion"></a>

### DataModelObjectCategory.FiberTensileFailureCriterion *= 464*

<a id="DataModelObjectCategory.FieldIntensityProbe"></a>

### DataModelObjectCategory.FieldIntensityProbe *= 268*

<a id="DataModelObjectCategory.Figure"></a>

### DataModelObjectCategory.Figure *= 111*

<a id="DataModelObjectCategory.FileBasedImportedLoads"></a>

### DataModelObjectCategory.FileBasedImportedLoads *= 783*

<a id="DataModelObjectCategory.FixedRotation"></a>

### DataModelObjectCategory.FixedRotation *= 125*

<a id="DataModelObjectCategory.FixedSupport"></a>

### DataModelObjectCategory.FixedSupport *= 124*

<a id="DataModelObjectCategory.FlexibleRotationProbe"></a>

### DataModelObjectCategory.FlexibleRotationProbe *= 670*

<a id="DataModelObjectCategory.FluidFlowRate"></a>

### DataModelObjectCategory.FluidFlowRate *= 465*

<a id="DataModelObjectCategory.FluidHeatConductionRate"></a>

### DataModelObjectCategory.FluidHeatConductionRate *= 466*

<a id="DataModelObjectCategory.FluidHeatTransportRate"></a>

### DataModelObjectCategory.FluidHeatTransportRate *= 467*

<a id="DataModelObjectCategory.FluidPenetrationPressure"></a>

### DataModelObjectCategory.FluidPenetrationPressure *= 771*

<a id="DataModelObjectCategory.FluidSolidInterface"></a>

### DataModelObjectCategory.FluidSolidInterface *= 177*

<a id="DataModelObjectCategory.FluxDensityProbe"></a>

### DataModelObjectCategory.FluxDensityProbe *= 266*

<a id="DataModelObjectCategory.FluxLinkage"></a>

### DataModelObjectCategory.FluxLinkage *= 580*

<a id="DataModelObjectCategory.Force"></a>

### DataModelObjectCategory.Force *= 187*

<a id="DataModelObjectCategory.ForceReaction"></a>

### DataModelObjectCategory.ForceReaction *= 244*

<a id="DataModelObjectCategory.ForceReactionFrequencyResponse"></a>

### DataModelObjectCategory.ForceReactionFrequencyResponse *= 575*

<a id="DataModelObjectCategory.ForceReactionTracker"></a>

### DataModelObjectCategory.ForceReactionTracker *= 507*

<a id="DataModelObjectCategory.ForceSummationProbe"></a>

### DataModelObjectCategory.ForceSummationProbe *= 265*

<a id="DataModelObjectCategory.Fracture"></a>

### DataModelObjectCategory.Fracture *= 112*

<a id="DataModelObjectCategory.FractureCrackExtensionProbe"></a>

### DataModelObjectCategory.FractureCrackExtensionProbe *= 258*

<a id="DataModelObjectCategory.FractureEquivalentSIFSRangeProbe"></a>

### DataModelObjectCategory.FractureEquivalentSIFSRangeProbe *= 260*

<a id="DataModelObjectCategory.FractureJINTProbe"></a>

### DataModelObjectCategory.FractureJINTProbe *= 261*

<a id="DataModelObjectCategory.FractureSIFSProbe"></a>

### DataModelObjectCategory.FractureSIFSProbe *= 262*

<a id="DataModelObjectCategory.FractureTool"></a>

### DataModelObjectCategory.FractureTool *= 113*

<a id="DataModelObjectCategory.FractureToolProbe"></a>

### DataModelObjectCategory.FractureToolProbe *= 257*

<a id="DataModelObjectCategory.FractureToolResult"></a>

### DataModelObjectCategory.FractureToolResult *= 371*

<a id="DataModelObjectCategory.FractureTotalNumberOfCyclesProbe"></a>

### DataModelObjectCategory.FractureTotalNumberOfCyclesProbe *= 259*

<a id="DataModelObjectCategory.FrequencyResponseResultChart"></a>

### DataModelObjectCategory.FrequencyResponseResultChart *= 577*

<a id="DataModelObjectCategory.FrictionlessSupport"></a>

### DataModelObjectCategory.FrictionlessSupport *= 136*

<a id="DataModelObjectCategory.Gasket"></a>

### DataModelObjectCategory.Gasket *= 782*

<a id="DataModelObjectCategory.GasketMeshControl"></a>

### DataModelObjectCategory.GasketMeshControl *= 778*

<a id="DataModelObjectCategory.GasketResult"></a>

### DataModelObjectCategory.GasketResult *= 295*

<a id="DataModelObjectCategory.GeneralAxisymmetric"></a>

### DataModelObjectCategory.GeneralAxisymmetric *= 114*

<a id="DataModelObjectCategory.GeneralizedPlaneStrain"></a>

### DataModelObjectCategory.GeneralizedPlaneStrain *= 115*

<a id="DataModelObjectCategory.GeneralizedPlaneStrainProbe"></a>

### DataModelObjectCategory.GeneralizedPlaneStrainProbe *= 251*

<a id="DataModelObjectCategory.GeneratedAMSupport"></a>

### DataModelObjectCategory.GeneratedAMSupport *= 8*

<a id="DataModelObjectCategory.GenericBoundaryCondition"></a>

### DataModelObjectCategory.GenericBoundaryCondition *= 123*

<a id="DataModelObjectCategory.GenericCrack"></a>

### DataModelObjectCategory.GenericCrack *= 52*

<a id="DataModelObjectCategory.GenericDelamination"></a>

### DataModelObjectCategory.GenericDelamination *= 70*

<a id="DataModelObjectCategory.GenericPointMass"></a>

### DataModelObjectCategory.GenericPointMass *= 227*

<a id="DataModelObjectCategory.Geometry"></a>

### DataModelObjectCategory.Geometry *= 275*

<a id="DataModelObjectCategory.GeometryBasedAdaptivity"></a>

### DataModelObjectCategory.GeometryBasedAdaptivity *= 742*

<a id="DataModelObjectCategory.GeometryFidelity"></a>

### DataModelObjectCategory.GeometryFidelity *= 741*

<a id="DataModelObjectCategory.GeometryFileContainer"></a>

### DataModelObjectCategory.GeometryFileContainer *= 116*

<a id="DataModelObjectCategory.GeometryImport"></a>

### DataModelObjectCategory.GeometryImport *= 709*

<a id="DataModelObjectCategory.GeometryImportGroup"></a>

### DataModelObjectCategory.GeometryImportGroup *= 708*

<a id="DataModelObjectCategory.GlobalVonMisesStressConstraint"></a>

### DataModelObjectCategory.GlobalVonMisesStressConstraint *= 620*

<a id="DataModelObjectCategory.HatCrossSection"></a>

### DataModelObjectCategory.HatCrossSection *= 58*

<a id="DataModelObjectCategory.HeatFlow"></a>

### DataModelObjectCategory.HeatFlow *= 146*

<a id="DataModelObjectCategory.HeatFlux"></a>

### DataModelObjectCategory.HeatFlux *= 157*

<a id="DataModelObjectCategory.HeatFluxProbe"></a>

### DataModelObjectCategory.HeatFluxProbe *= 237*

<a id="DataModelObjectCategory.HollowRectangularCrossSection"></a>

### DataModelObjectCategory.HollowRectangularCrossSection *= 59*

<a id="DataModelObjectCategory.HourglassEnergyTracker"></a>

### DataModelObjectCategory.HourglassEnergyTracker *= 561*

<a id="DataModelObjectCategory.HousingConstraint"></a>

### DataModelObjectCategory.HousingConstraint *= 723*

<a id="DataModelObjectCategory.HydrostaticPressure"></a>

### DataModelObjectCategory.HydrostaticPressure *= 152*

<a id="DataModelObjectCategory.ICrossSection"></a>

### DataModelObjectCategory.ICrossSection *= 66*

<a id="DataModelObjectCategory.Image"></a>

### DataModelObjectCategory.Image *= 2*

<a id="DataModelObjectCategory.ImagePlane"></a>

### DataModelObjectCategory.ImagePlane *= 702*

<a id="DataModelObjectCategory.ImpedanceBoundary"></a>

### DataModelObjectCategory.ImpedanceBoundary *= 181*

<a id="DataModelObjectCategory.ImpedanceFrequencyResponse"></a>

### DataModelObjectCategory.ImpedanceFrequencyResponse *= 642*

<a id="DataModelObjectCategory.ImpedanceProbe"></a>

### DataModelObjectCategory.ImpedanceProbe *= 644*

<a id="DataModelObjectCategory.ImportedBodyForceDensity"></a>

### DataModelObjectCategory.ImportedBodyForceDensity *= 89*

<a id="DataModelObjectCategory.ImportedBodyTemperature"></a>

### DataModelObjectCategory.ImportedBodyTemperature *= 90*

<a id="DataModelObjectCategory.ImportedBoltPretensions"></a>

### DataModelObjectCategory.ImportedBoltPretensions *= 97*

<a id="DataModelObjectCategory.ImportedCFDPressure"></a>

### DataModelObjectCategory.ImportedCFDPressure *= 637*

<a id="DataModelObjectCategory.ImportedCondensedPart"></a>

### DataModelObjectCategory.ImportedCondensedPart *= 32*

<a id="DataModelObjectCategory.ImportedConstraintEquations"></a>

### DataModelObjectCategory.ImportedConstraintEquations *= 105*

<a id="DataModelObjectCategory.ImportedContacts"></a>

### DataModelObjectCategory.ImportedContacts *= 108*

<a id="DataModelObjectCategory.ImportedConvection"></a>

### DataModelObjectCategory.ImportedConvection *= 87*

<a id="DataModelObjectCategory.ImportedCoordinateSystems"></a>

### DataModelObjectCategory.ImportedCoordinateSystems *= 96*

<a id="DataModelObjectCategory.ImportedCutBoundaryRemoteConstraint"></a>

### DataModelObjectCategory.ImportedCutBoundaryRemoteConstraint *= 85*

<a id="DataModelObjectCategory.ImportedCutBoundaryRemoteForce"></a>

### DataModelObjectCategory.ImportedCutBoundaryRemoteForce *= 93*

<a id="DataModelObjectCategory.ImportedDisplacement"></a>

### DataModelObjectCategory.ImportedDisplacement *= 92*

<a id="DataModelObjectCategory.ImportedElementOrientation"></a>

### DataModelObjectCategory.ImportedElementOrientation *= 681*

<a id="DataModelObjectCategory.ImportedElementOrientationGroup"></a>

### DataModelObjectCategory.ImportedElementOrientationGroup *= 680*

<a id="DataModelObjectCategory.ImportedElementOrientations"></a>

### DataModelObjectCategory.ImportedElementOrientations *= 101*

<a id="DataModelObjectCategory.ImportedFiberRatio"></a>

### DataModelObjectCategory.ImportedFiberRatio *= 706*

<a id="DataModelObjectCategory.ImportedFlexibleRemoteConnectors"></a>

### DataModelObjectCategory.ImportedFlexibleRemoteConnectors *= 106*

<a id="DataModelObjectCategory.ImportedForce"></a>

### DataModelObjectCategory.ImportedForce *= 687*

<a id="DataModelObjectCategory.ImportedHeatFlux"></a>

### DataModelObjectCategory.ImportedHeatFlux *= 682*

<a id="DataModelObjectCategory.ImportedHeatGeneration"></a>

### DataModelObjectCategory.ImportedHeatGeneration *= 683*

<a id="DataModelObjectCategory.ImportedInitialStrain"></a>

### DataModelObjectCategory.ImportedInitialStrain *= 684*

<a id="DataModelObjectCategory.ImportedInitialStress"></a>

### DataModelObjectCategory.ImportedInitialStress *= 685*

<a id="DataModelObjectCategory.ImportedLayeredSection"></a>

### DataModelObjectCategory.ImportedLayeredSection *= 81*

<a id="DataModelObjectCategory.ImportedLoad"></a>

### DataModelObjectCategory.ImportedLoad *= 83*

<a id="DataModelObjectCategory.ImportedLoadGroup"></a>

### DataModelObjectCategory.ImportedLoadGroup *= 94*

<a id="DataModelObjectCategory.ImportedMaterialField"></a>

### DataModelObjectCategory.ImportedMaterialField *= 715*

<a id="DataModelObjectCategory.ImportedMaterialFieldsGroup"></a>

### DataModelObjectCategory.ImportedMaterialFieldsGroup *= 717*

<a id="DataModelObjectCategory.ImportedNodalOrientations"></a>

### DataModelObjectCategory.ImportedNodalOrientations *= 103*

<a id="DataModelObjectCategory.ImportedPlies"></a>

### DataModelObjectCategory.ImportedPlies *= 82*

<a id="DataModelObjectCategory.ImportedPliesCollection"></a>

### DataModelObjectCategory.ImportedPliesCollection *= 693*

<a id="DataModelObjectCategory.ImportedPointMasses"></a>

### DataModelObjectCategory.ImportedPointMasses *= 102*

<a id="DataModelObjectCategory.ImportedPremeshedBoltPretensions"></a>

### DataModelObjectCategory.ImportedPremeshedBoltPretensions *= 98*

<a id="DataModelObjectCategory.ImportedPressure"></a>

### DataModelObjectCategory.ImportedPressure *= 686*

<a id="DataModelObjectCategory.ImportedRigidRemoteConnectors"></a>

### DataModelObjectCategory.ImportedRigidRemoteConnectors *= 104*

<a id="DataModelObjectCategory.ImportedShellThicknesses"></a>

### DataModelObjectCategory.ImportedShellThicknesses *= 99*

<a id="DataModelObjectCategory.ImportedSpringConnectors"></a>

### DataModelObjectCategory.ImportedSpringConnectors *= 107*

<a id="DataModelObjectCategory.ImportedStresses"></a>

### DataModelObjectCategory.ImportedStresses *= 100*

<a id="DataModelObjectCategory.ImportedSurfaceForceDensity"></a>

### DataModelObjectCategory.ImportedSurfaceForceDensity *= 88*

<a id="DataModelObjectCategory.ImportedTemperature"></a>

### DataModelObjectCategory.ImportedTemperature *= 91*

<a id="DataModelObjectCategory.ImportedThickness"></a>

### DataModelObjectCategory.ImportedThickness *= 700*

<a id="DataModelObjectCategory.ImportedThicknessGroup"></a>

### DataModelObjectCategory.ImportedThicknessGroup *= 699*

<a id="DataModelObjectCategory.ImportedTrace"></a>

### DataModelObjectCategory.ImportedTrace *= 86*

<a id="DataModelObjectCategory.ImportedTraceGroup"></a>

### DataModelObjectCategory.ImportedTraceGroup *= 716*

<a id="DataModelObjectCategory.ImportedVelocity"></a>

### DataModelObjectCategory.ImportedVelocity *= 84*

<a id="DataModelObjectCategory.ImportedWarpWeftRatio"></a>

### DataModelObjectCategory.ImportedWarpWeftRatio *= 705*

<a id="DataModelObjectCategory.ImportedYarnAngle"></a>

### DataModelObjectCategory.ImportedYarnAngle *= 704*

<a id="DataModelObjectCategory.Inductance"></a>

### DataModelObjectCategory.Inductance *= 579*

<a id="DataModelObjectCategory.Inflation"></a>

### DataModelObjectCategory.Inflation *= 206*

<a id="DataModelObjectCategory.InitialCondition"></a>

### DataModelObjectCategory.InitialCondition *= 120*

<a id="DataModelObjectCategory.InitialConditions"></a>

### DataModelObjectCategory.InitialConditions *= 119*

<a id="DataModelObjectCategory.InterfaceDelamination"></a>

### DataModelObjectCategory.InterfaceDelamination *= 71*

<a id="DataModelObjectCategory.InternalEnergyTracker"></a>

### DataModelObjectCategory.InternalEnergyTracker *= 570*

<a id="DataModelObjectCategory.InternalHeatGeneration"></a>

### DataModelObjectCategory.InternalHeatGeneration *= 168*

<a id="DataModelObjectCategory.Joint"></a>

### DataModelObjectCategory.Joint *= 121*

<a id="DataModelObjectCategory.JointLoad"></a>

### DataModelObjectCategory.JointLoad *= 122*

<a id="DataModelObjectCategory.JointProbe"></a>

### DataModelObjectCategory.JointProbe *= 252*

<a id="DataModelObjectCategory.JouleHeat"></a>

### DataModelObjectCategory.JouleHeat *= 431*

<a id="DataModelObjectCategory.JouleHeatProbe"></a>

### DataModelObjectCategory.JouleHeatProbe *= 264*

<a id="DataModelObjectCategory.KineticEnergyTracker"></a>

### DataModelObjectCategory.KineticEnergyTracker *= 511*

<a id="DataModelObjectCategory.LCrossSection"></a>

### DataModelObjectCategory.LCrossSection *= 65*

<a id="DataModelObjectCategory.LSDYNAGeneralTracker"></a>

### DataModelObjectCategory.LSDYNAGeneralTracker *= 738*

<a id="DataModelObjectCategory.LatticeDensity"></a>

### DataModelObjectCategory.LatticeDensity *= 405*

<a id="DataModelObjectCategory.LatticeElementalDensity"></a>

### DataModelObjectCategory.LatticeElementalDensity *= 406*

<a id="DataModelObjectCategory.LayeredSection"></a>

### DataModelObjectCategory.LayeredSection *= 603*

<a id="DataModelObjectCategory.LegacyThermalCondition"></a>

### DataModelObjectCategory.LegacyThermalCondition *= 601*

<a id="DataModelObjectCategory.LimitBoundary"></a>

### DataModelObjectCategory.LimitBoundary *= 186*

<a id="DataModelObjectCategory.LineChart2D"></a>

### DataModelObjectCategory.LineChart2D *= 762*

<a id="DataModelObjectCategory.LinePressure"></a>

### DataModelObjectCategory.LinePressure *= 140*

<a id="DataModelObjectCategory.LinePressureResult"></a>

### DataModelObjectCategory.LinePressureResult *= 640*

<a id="DataModelObjectCategory.LinearizedEquivalentStress"></a>

### DataModelObjectCategory.LinearizedEquivalentStress *= 415*

<a id="DataModelObjectCategory.LinearizedMaximumPrincipalStress"></a>

### DataModelObjectCategory.LinearizedMaximumPrincipalStress *= 468*

<a id="DataModelObjectCategory.LinearizedMaximumShearStress"></a>

### DataModelObjectCategory.LinearizedMaximumShearStress *= 469*

<a id="DataModelObjectCategory.LinearizedMiddlePrincipalStress"></a>

### DataModelObjectCategory.LinearizedMiddlePrincipalStress *= 377*

<a id="DataModelObjectCategory.LinearizedMinimumPrincipalStress"></a>

### DataModelObjectCategory.LinearizedMinimumPrincipalStress *= 470*

<a id="DataModelObjectCategory.LinearizedNormalStress"></a>

### DataModelObjectCategory.LinearizedNormalStress *= 471*

<a id="DataModelObjectCategory.LinearizedShearStress"></a>

### DataModelObjectCategory.LinearizedShearStress *= 472*

<a id="DataModelObjectCategory.LinearizedStressIntensity"></a>

### DataModelObjectCategory.LinearizedStressIntensity *= 473*

<a id="DataModelObjectCategory.LinearizedStressResult"></a>

### DataModelObjectCategory.LinearizedStressResult *= 373*

<a id="DataModelObjectCategory.LoadApplication"></a>

### DataModelObjectCategory.LoadApplication *= 779*

<a id="DataModelObjectCategory.LoadGroup"></a>

### DataModelObjectCategory.LoadGroup *= 190*

<a id="DataModelObjectCategory.LocalVonMisesStressConstraint"></a>

### DataModelObjectCategory.LocalVonMisesStressConstraint *= 621*

<a id="DataModelObjectCategory.MCFWaterfallDiagram"></a>

### DataModelObjectCategory.MCFWaterfallDiagram *= 755*

<a id="DataModelObjectCategory.MagneticCoenergy"></a>

### DataModelObjectCategory.MagneticCoenergy *= 474*

<a id="DataModelObjectCategory.MagneticDirectionalForces"></a>

### DataModelObjectCategory.MagneticDirectionalForces *= 475*

<a id="DataModelObjectCategory.MagneticError"></a>

### DataModelObjectCategory.MagneticError *= 476*

<a id="DataModelObjectCategory.MagneticFluxParallel"></a>

### DataModelObjectCategory.MagneticFluxParallel *= 129*

<a id="DataModelObjectCategory.MagneticFluxProbe"></a>

### DataModelObjectCategory.MagneticFluxProbe *= 245*

<a id="DataModelObjectCategory.MagneticPotential"></a>

### DataModelObjectCategory.MagneticPotential *= 477*

<a id="DataModelObjectCategory.MagneticTotalForces"></a>

### DataModelObjectCategory.MagneticTotalForces *= 478*

<a id="DataModelObjectCategory.ManufacturingConstraint"></a>

### DataModelObjectCategory.ManufacturingConstraint *= 616*

<a id="DataModelObjectCategory.MappingValidation"></a>

### DataModelObjectCategory.MappingValidation *= 703*

<a id="DataModelObjectCategory.MassConstraint"></a>

### DataModelObjectCategory.MassConstraint *= 617*

<a id="DataModelObjectCategory.MassFlowRate"></a>

### DataModelObjectCategory.MassFlowRate *= 138*

<a id="DataModelObjectCategory.MatchControl"></a>

### DataModelObjectCategory.MatchControl *= 207*

<a id="DataModelObjectCategory.Material"></a>

### DataModelObjectCategory.Material *= 192*

<a id="DataModelObjectCategory.MaterialAssignment"></a>

### DataModelObjectCategory.MaterialAssignment *= 191*

<a id="DataModelObjectCategory.MaterialPlot"></a>

### DataModelObjectCategory.MaterialPlot *= 194*

<a id="DataModelObjectCategory.Materials"></a>

### DataModelObjectCategory.Materials *= 193*

<a id="DataModelObjectCategory.MatrixCompressiveDamageVariable"></a>

### DataModelObjectCategory.MatrixCompressiveDamageVariable *= 480*

<a id="DataModelObjectCategory.MatrixCompressiveFailureCriterion"></a>

### DataModelObjectCategory.MatrixCompressiveFailureCriterion *= 481*

<a id="DataModelObjectCategory.MatrixTensileDamageVariable"></a>

### DataModelObjectCategory.MatrixTensileDamageVariable *= 482*

<a id="DataModelObjectCategory.MatrixTensileFailureCriterion"></a>

### DataModelObjectCategory.MatrixTensileFailureCriterion *= 483*

<a id="DataModelObjectCategory.MaximumBendingStress"></a>

### DataModelObjectCategory.MaximumBendingStress *= 337*

<a id="DataModelObjectCategory.MaximumCombinedStress"></a>

### DataModelObjectCategory.MaximumCombinedStress *= 339*

<a id="DataModelObjectCategory.MaximumFailureCriteria"></a>

### DataModelObjectCategory.MaximumFailureCriteria *= 484*

<a id="DataModelObjectCategory.MaximumPrincipalElasticStrain"></a>

### DataModelObjectCategory.MaximumPrincipalElasticStrain *= 313*

<a id="DataModelObjectCategory.MaximumPrincipalStress"></a>

### DataModelObjectCategory.MaximumPrincipalStress *= 459*

<a id="DataModelObjectCategory.MaximumPrincipalThermalStrain"></a>

### DataModelObjectCategory.MaximumPrincipalThermalStrain *= 485*

<a id="DataModelObjectCategory.MaximumShearElasticStrain"></a>

### DataModelObjectCategory.MaximumShearElasticStrain *= 486*

<a id="DataModelObjectCategory.MaximumShearStress"></a>

### DataModelObjectCategory.MaximumShearStress *= 487*

<a id="DataModelObjectCategory.Measures"></a>

### DataModelObjectCategory.Measures *= 754*

<a id="DataModelObjectCategory.MemberSizeManufacturingConstraint"></a>

### DataModelObjectCategory.MemberSizeManufacturingConstraint *= 605*

<a id="DataModelObjectCategory.MembraneStressEquivalent"></a>

### DataModelObjectCategory.MembraneStressEquivalent *= 425*

<a id="DataModelObjectCategory.MembraneStressIntensity"></a>

### DataModelObjectCategory.MembraneStressIntensity *= 488*

<a id="DataModelObjectCategory.Mesh"></a>

### DataModelObjectCategory.Mesh *= 210*

<a id="DataModelObjectCategory.MeshConnection"></a>

### DataModelObjectCategory.MeshConnection *= 196*

<a id="DataModelObjectCategory.MeshConnectionBase"></a>

### DataModelObjectCategory.MeshConnectionBase *= 195*

<a id="DataModelObjectCategory.MeshConnectionGroup"></a>

### DataModelObjectCategory.MeshConnectionGroup *= 36*

<a id="DataModelObjectCategory.MeshControl"></a>

### DataModelObjectCategory.MeshControl *= 200*

<a id="DataModelObjectCategory.MeshCopy"></a>

### DataModelObjectCategory.MeshCopy *= 753*

<a id="DataModelObjectCategory.MeshEdit"></a>

### DataModelObjectCategory.MeshEdit *= 199*

<a id="DataModelObjectCategory.MeshExtrude"></a>

### DataModelObjectCategory.MeshExtrude *= 671*

<a id="DataModelObjectCategory.MeshNumbering"></a>

### DataModelObjectCategory.MeshNumbering *= 212*

<a id="DataModelObjectCategory.MiddlePrincipalElasticStrain"></a>

### DataModelObjectCategory.MiddlePrincipalElasticStrain *= 306*

<a id="DataModelObjectCategory.MiddlePrincipalStress"></a>

### DataModelObjectCategory.MiddlePrincipalStress *= 448*

<a id="DataModelObjectCategory.MiddlePrincipalThermalStrain"></a>

### DataModelObjectCategory.MiddlePrincipalThermalStrain *= 489*

<a id="DataModelObjectCategory.MinimumBendingStress"></a>

### DataModelObjectCategory.MinimumBendingStress *= 336*

<a id="DataModelObjectCategory.MinimumCombinedStress"></a>

### DataModelObjectCategory.MinimumCombinedStress *= 338*

<a id="DataModelObjectCategory.MinimumPrincipalElasticStrain"></a>

### DataModelObjectCategory.MinimumPrincipalElasticStrain *= 300*

<a id="DataModelObjectCategory.MinimumPrincipalStress"></a>

### DataModelObjectCategory.MinimumPrincipalStress *= 438*

<a id="DataModelObjectCategory.Model"></a>

### DataModelObjectCategory.Model *= 213*

<a id="DataModelObjectCategory.ModelImport"></a>

### DataModelObjectCategory.ModelImport *= 765*

<a id="DataModelObjectCategory.Moment"></a>

### DataModelObjectCategory.Moment *= 189*

<a id="DataModelObjectCategory.MomentOfInertiaConstraint"></a>

### DataModelObjectCategory.MomentOfInertiaConstraint *= 613*

<a id="DataModelObjectCategory.MomentReaction"></a>

### DataModelObjectCategory.MomentReaction *= 269*

<a id="DataModelObjectCategory.MomentReactionTracker"></a>

### DataModelObjectCategory.MomentReactionTracker *= 508*

<a id="DataModelObjectCategory.MomentumTracker"></a>

### DataModelObjectCategory.MomentumTracker *= 499*

<a id="DataModelObjectCategory.MorphingRegion"></a>

### DataModelObjectCategory.MorphingRegion *= 758*

<a id="DataModelObjectCategory.MullinsDamageVariable"></a>

### DataModelObjectCategory.MullinsDamageVariable *= 422*

<a id="DataModelObjectCategory.MullinsMaximumPreviousStrainEnergy"></a>

### DataModelObjectCategory.MullinsMaximumPreviousStrainEnergy *= 423*

<a id="DataModelObjectCategory.NamedSelection"></a>

### DataModelObjectCategory.NamedSelection *= 27*

<a id="DataModelObjectCategory.NamedSelections"></a>

### DataModelObjectCategory.NamedSelections *= 28*

<a id="DataModelObjectCategory.NaturalFrequencyConstraint"></a>

### DataModelObjectCategory.NaturalFrequencyConstraint *= 619*

<a id="DataModelObjectCategory.NewtonRaphsonResidualCharge"></a>

### DataModelObjectCategory.NewtonRaphsonResidualCharge *= 729*

<a id="DataModelObjectCategory.NewtonRaphsonResidualForce"></a>

### DataModelObjectCategory.NewtonRaphsonResidualForce *= 288*

<a id="DataModelObjectCategory.NewtonRaphsonResidualHeat"></a>

### DataModelObjectCategory.NewtonRaphsonResidualHeat *= 290*

<a id="DataModelObjectCategory.NewtonRaphsonResidualMoment"></a>

### DataModelObjectCategory.NewtonRaphsonResidualMoment *= 292*

<a id="DataModelObjectCategory.NodalDisplacement"></a>

### DataModelObjectCategory.NodalDisplacement *= 149*

<a id="DataModelObjectCategory.NodalEulerXYAngle"></a>

### DataModelObjectCategory.NodalEulerXYAngle *= 417*

<a id="DataModelObjectCategory.NodalEulerXZAngle"></a>

### DataModelObjectCategory.NodalEulerXZAngle *= 293*

<a id="DataModelObjectCategory.NodalEulerYZAngle"></a>

### DataModelObjectCategory.NodalEulerYZAngle *= 294*

<a id="DataModelObjectCategory.NodalForce"></a>

### DataModelObjectCategory.NodalForce *= 148*

<a id="DataModelObjectCategory.NodalOrientation"></a>

### DataModelObjectCategory.NodalOrientation *= 214*

<a id="DataModelObjectCategory.NodalPressure"></a>

### DataModelObjectCategory.NodalPressure *= 150*

<a id="DataModelObjectCategory.NodalRotation"></a>

### DataModelObjectCategory.NodalRotation *= 151*

<a id="DataModelObjectCategory.NodalTriads"></a>

### DataModelObjectCategory.NodalTriads *= 409*

<a id="DataModelObjectCategory.NodeMerge"></a>

### DataModelObjectCategory.NodeMerge *= 197*

<a id="DataModelObjectCategory.NodeMergeGroup"></a>

### DataModelObjectCategory.NodeMergeGroup *= 35*

<a id="DataModelObjectCategory.NodeMove"></a>

### DataModelObjectCategory.NodeMove *= 215*

<a id="DataModelObjectCategory.NonLinearStabilizationEnergyTracker"></a>

### DataModelObjectCategory.NonLinearStabilizationEnergyTracker *= 734*

<a id="DataModelObjectCategory.NonlinearAdaptiveRegion"></a>

### DataModelObjectCategory.NonlinearAdaptiveRegion *= 216*

<a id="DataModelObjectCategory.NormalElasticStrain"></a>

### DataModelObjectCategory.NormalElasticStrain *= 479*

<a id="DataModelObjectCategory.NormalGasketPressure"></a>

### DataModelObjectCategory.NormalGasketPressure *= 298*

<a id="DataModelObjectCategory.NormalGasketTotalClosure"></a>

### DataModelObjectCategory.NormalGasketTotalClosure *= 296*

<a id="DataModelObjectCategory.NormalStress"></a>

### DataModelObjectCategory.NormalStress *= 416*

<a id="DataModelObjectCategory.NumberContactingTracker"></a>

### DataModelObjectCategory.NumberContactingTracker *= 531*

<a id="DataModelObjectCategory.NumberingControl"></a>

### DataModelObjectCategory.NumberingControl *= 211*

<a id="DataModelObjectCategory.Objective"></a>

### DataModelObjectCategory.Objective *= 627*

<a id="DataModelObjectCategory.OptimizationRegion"></a>

### DataModelObjectCategory.OptimizationRegion *= 217*

<a id="DataModelObjectCategory.PSDAcceleration"></a>

### DataModelObjectCategory.PSDAcceleration *= 277*

<a id="DataModelObjectCategory.PSDDisplacement"></a>

### DataModelObjectCategory.PSDDisplacement *= 280*

<a id="DataModelObjectCategory.PSDGAcceleration"></a>

### DataModelObjectCategory.PSDGAcceleration *= 278*

<a id="DataModelObjectCategory.PSDLoad"></a>

### DataModelObjectCategory.PSDLoad *= 276*

<a id="DataModelObjectCategory.PSDPressure"></a>

### DataModelObjectCategory.PSDPressure *= 781*

<a id="DataModelObjectCategory.PSDVelocity"></a>

### DataModelObjectCategory.PSDVelocity *= 279*

<a id="DataModelObjectCategory.ParameterVariable"></a>

### DataModelObjectCategory.ParameterVariable *= 728*

<a id="DataModelObjectCategory.ParameterVariableGroup"></a>

### DataModelObjectCategory.ParameterVariableGroup *= 727*

<a id="DataModelObjectCategory.Part"></a>

### DataModelObjectCategory.Part *= 20*

<a id="DataModelObjectCategory.PartTransform"></a>

### DataModelObjectCategory.PartTransform *= 219*

<a id="DataModelObjectCategory.PartTransformGroup"></a>

### DataModelObjectCategory.PartTransformGroup *= 220*

<a id="DataModelObjectCategory.Path"></a>

### DataModelObjectCategory.Path *= 221*

<a id="DataModelObjectCategory.PatternRepetitionConstraint"></a>

### DataModelObjectCategory.PatternRepetitionConstraint *= 720*

<a id="DataModelObjectCategory.PerfectlyInsulated"></a>

### DataModelObjectCategory.PerfectlyInsulated *= 137*

<a id="DataModelObjectCategory.PeriodicRegion"></a>

### DataModelObjectCategory.PeriodicRegion *= 596*

<a id="DataModelObjectCategory.PhysicsRegion"></a>

### DataModelObjectCategory.PhysicsRegion *= 222*

<a id="DataModelObjectCategory.Pinch"></a>

### DataModelObjectCategory.Pinch *= 205*

<a id="DataModelObjectCategory.PipeIdealization"></a>

### DataModelObjectCategory.PipeIdealization *= 223*

<a id="DataModelObjectCategory.PipePressure"></a>

### DataModelObjectCategory.PipePressure *= 145*

<a id="DataModelObjectCategory.PipeTemperature"></a>

### DataModelObjectCategory.PipeTemperature *= 147*

<a id="DataModelObjectCategory.PlasticHeating"></a>

### DataModelObjectCategory.PlasticHeating *= 225*

<a id="DataModelObjectCategory.PlasticWorkTracker"></a>

### DataModelObjectCategory.PlasticWorkTracker *= 501*

<a id="DataModelObjectCategory.PointMass"></a>

### DataModelObjectCategory.PointMass *= 228*

<a id="DataModelObjectCategory.Position"></a>

### DataModelObjectCategory.Position *= 253*

<a id="DataModelObjectCategory.PositionTracker"></a>

### DataModelObjectCategory.PositionTracker *= 509*

<a id="DataModelObjectCategory.PostContactTool"></a>

### DataModelObjectCategory.PostContactTool *= 47*

<a id="DataModelObjectCategory.PreContactTool"></a>

### DataModelObjectCategory.PreContactTool *= 46*

<a id="DataModelObjectCategory.PreMeshedCrack"></a>

### DataModelObjectCategory.PreMeshedCrack *= 53*

<a id="DataModelObjectCategory.PreMeshedCyclicRegion"></a>

### DataModelObjectCategory.PreMeshedCyclicRegion *= 599*

<a id="DataModelObjectCategory.PredefinedAMSupport"></a>

### DataModelObjectCategory.PredefinedAMSupport *= 7*

<a id="DataModelObjectCategory.Pressure"></a>

### DataModelObjectCategory.Pressure *= 133*

<a id="DataModelObjectCategory.PressureTracker"></a>

### DataModelObjectCategory.PressureTracker *= 497*

<a id="DataModelObjectCategory.PrimaryCriterion"></a>

### DataModelObjectCategory.PrimaryCriterion *= 625*

<a id="DataModelObjectCategory.Project"></a>

### DataModelObjectCategory.Project *= 273*

<a id="DataModelObjectCategory.PullOutDirectionManufacturingConstraint"></a>

### DataModelObjectCategory.PullOutDirectionManufacturingConstraint *= 606*

<a id="DataModelObjectCategory.PythonCode"></a>

### DataModelObjectCategory.PythonCode *= 698*

<a id="DataModelObjectCategory.PythonCodeEventBased"></a>

### DataModelObjectCategory.PythonCodeEventBased *= 707*

<a id="DataModelObjectCategory.PythonResult"></a>

### DataModelObjectCategory.PythonResult *= 672*

<a id="DataModelObjectCategory.QualityFactor"></a>

### DataModelObjectCategory.QualityFactor *= 676*

<a id="DataModelObjectCategory.RSAcceleration"></a>

### DataModelObjectCategory.RSAcceleration *= 585*

<a id="DataModelObjectCategory.RSDisplacement"></a>

### DataModelObjectCategory.RSDisplacement *= 587*

<a id="DataModelObjectCategory.RSLoad"></a>

### DataModelObjectCategory.RSLoad *= 584*

<a id="DataModelObjectCategory.RSVelocity"></a>

### DataModelObjectCategory.RSVelocity *= 586*

<a id="DataModelObjectCategory.Radiation"></a>

### DataModelObjectCategory.Radiation *= 188*

<a id="DataModelObjectCategory.RadiationProbe"></a>

### DataModelObjectCategory.RadiationProbe *= 235*

<a id="DataModelObjectCategory.ReactionForceConstraint"></a>

### DataModelObjectCategory.ReactionForceConstraint *= 623*

<a id="DataModelObjectCategory.ReactionProbe"></a>

### DataModelObjectCategory.ReactionProbe *= 238*

<a id="DataModelObjectCategory.RectangularCrossSection"></a>

### DataModelObjectCategory.RectangularCrossSection *= 61*

<a id="DataModelObjectCategory.Refinement"></a>

### DataModelObjectCategory.Refinement *= 203*

<a id="DataModelObjectCategory.Relevance"></a>

### DataModelObjectCategory.Relevance *= 209*

<a id="DataModelObjectCategory.RemoteDisplacement"></a>

### DataModelObjectCategory.RemoteDisplacement *= 126*

<a id="DataModelObjectCategory.RemoteForce"></a>

### DataModelObjectCategory.RemoteForce *= 139*

<a id="DataModelObjectCategory.RemotePoint"></a>

### DataModelObjectCategory.RemotePoint *= 281*

<a id="DataModelObjectCategory.RemotePoints"></a>

### DataModelObjectCategory.RemotePoints *= 282*

<a id="DataModelObjectCategory.RepairTopology"></a>

### DataModelObjectCategory.RepairTopology *= 722*

<a id="DataModelObjectCategory.ResponseConstraint"></a>

### DataModelObjectCategory.ResponseConstraint *= 604*

<a id="DataModelObjectCategory.ResponsePSD"></a>

### DataModelObjectCategory.ResponsePSD *= 255*

<a id="DataModelObjectCategory.ResponsePSDTool"></a>

### DataModelObjectCategory.ResponsePSDTool *= 283*

<a id="DataModelObjectCategory.Result"></a>

### DataModelObjectCategory.Result *= 284*

<a id="DataModelObjectCategory.ResultChart"></a>

### DataModelObjectCategory.ResultChart *= 490*

<a id="DataModelObjectCategory.ResultMesh"></a>

### DataModelObjectCategory.ResultMesh *= 692*

<a id="DataModelObjectCategory.ResultProbe"></a>

### DataModelObjectCategory.ResultProbe *= 232*

<a id="DataModelObjectCategory.ResultTable"></a>

### DataModelObjectCategory.ResultTable *= 578*

<a id="DataModelObjectCategory.RigidBodyVelocityTracker"></a>

### DataModelObjectCategory.RigidBodyVelocityTracker *= 696*

<a id="DataModelObjectCategory.RingCrack"></a>

### DataModelObjectCategory.RingCrack *= 736*

<a id="DataModelObjectCategory.RotatingForce"></a>

### DataModelObjectCategory.RotatingForce *= 128*

<a id="DataModelObjectCategory.RotationBoundaryCondition"></a>

### DataModelObjectCategory.RotationBoundaryCondition *= 581*

<a id="DataModelObjectCategory.RotationProbe"></a>

### DataModelObjectCategory.RotationProbe *= 254*

<a id="DataModelObjectCategory.RotationalAcceleration"></a>

### DataModelObjectCategory.RotationalAcceleration *= 583*

<a id="DataModelObjectCategory.RotationalVelocity"></a>

### DataModelObjectCategory.RotationalVelocity *= 582*

<a id="DataModelObjectCategory.SMARTCrackGrowth"></a>

### DataModelObjectCategory.SMARTCrackGrowth *= 73*

<a id="DataModelObjectCategory.STL"></a>

### DataModelObjectCategory.STL *= 118*

<a id="DataModelObjectCategory.STLAMSupport"></a>

### DataModelObjectCategory.STLAMSupport *= 9*

<a id="DataModelObjectCategory.ScriptDefinedResultFolder"></a>

### DataModelObjectCategory.ScriptDefinedResultFolder *= 673*

<a id="DataModelObjectCategory.SemiEllipticalCrack"></a>

### DataModelObjectCategory.SemiEllipticalCrack *= 54*

<a id="DataModelObjectCategory.ShapeFinder"></a>

### DataModelObjectCategory.ShapeFinder *= 299*

<a id="DataModelObjectCategory.ShapeFinderElemental"></a>

### DataModelObjectCategory.ShapeFinderElemental *= 301*

<a id="DataModelObjectCategory.ShearDamageVariable"></a>

### DataModelObjectCategory.ShearDamageVariable *= 302*

<a id="DataModelObjectCategory.ShearElasticStrain"></a>

### DataModelObjectCategory.ShearElasticStrain *= 286*

<a id="DataModelObjectCategory.ShearGasketPressure"></a>

### DataModelObjectCategory.ShearGasketPressure *= 303*

<a id="DataModelObjectCategory.ShearGasketTotalClosure"></a>

### DataModelObjectCategory.ShearGasketTotalClosure *= 304*

<a id="DataModelObjectCategory.ShearStress"></a>

### DataModelObjectCategory.ShearStress *= 427*

<a id="DataModelObjectCategory.ShellBendingStress"></a>

### DataModelObjectCategory.ShellBendingStress *= 309*

<a id="DataModelObjectCategory.ShellBottomPeakStress"></a>

### DataModelObjectCategory.ShellBottomPeakStress *= 310*

<a id="DataModelObjectCategory.ShellMembraneStress"></a>

### DataModelObjectCategory.ShellMembraneStress *= 311*

<a id="DataModelObjectCategory.ShellTopPeakStress"></a>

### DataModelObjectCategory.ShellTopPeakStress *= 312*

<a id="DataModelObjectCategory.SimplySupported"></a>

### DataModelObjectCategory.SimplySupported *= 141*

<a id="DataModelObjectCategory.Sizing"></a>

### DataModelObjectCategory.Sizing *= 201*

<a id="DataModelObjectCategory.Smoothing"></a>

### DataModelObjectCategory.Smoothing *= 117*

<a id="DataModelObjectCategory.Solid"></a>

### DataModelObjectCategory.Solid *= 588*

<a id="DataModelObjectCategory.Solution"></a>

### DataModelObjectCategory.Solution *= 15*

<a id="DataModelObjectCategory.SolutionCombination"></a>

### DataModelObjectCategory.SolutionCombination *= 589*

<a id="DataModelObjectCategory.SolutionInformation"></a>

### DataModelObjectCategory.SolutionInformation *= 590*

<a id="DataModelObjectCategory.SpotWeldConnection"></a>

### DataModelObjectCategory.SpotWeldConnection *= 675*

<a id="DataModelObjectCategory.SpotWeldGroup"></a>

### DataModelObjectCategory.SpotWeldGroup *= 674*

<a id="DataModelObjectCategory.Spring"></a>

### DataModelObjectCategory.Spring *= 591*

<a id="DataModelObjectCategory.SpringDampingForceTracker"></a>

### DataModelObjectCategory.SpringDampingForceTracker *= 506*

<a id="DataModelObjectCategory.SpringElasticForceTracker"></a>

### DataModelObjectCategory.SpringElasticForceTracker *= 505*

<a id="DataModelObjectCategory.SpringElongationTracker"></a>

### DataModelObjectCategory.SpringElongationTracker *= 503*

<a id="DataModelObjectCategory.SpringProbe"></a>

### DataModelObjectCategory.SpringProbe *= 234*

<a id="DataModelObjectCategory.SpringVelocityTracker"></a>

### DataModelObjectCategory.SpringVelocityTracker *= 504*

<a id="DataModelObjectCategory.StabilizationEnergy"></a>

### DataModelObjectCategory.StabilizationEnergy *= 314*

<a id="DataModelObjectCategory.Stage"></a>

### DataModelObjectCategory.Stage *= 646*

<a id="DataModelObjectCategory.StiffnessEnergyTracker"></a>

### DataModelObjectCategory.StiffnessEnergyTracker *= 510*

<a id="DataModelObjectCategory.StrainProbe"></a>

### DataModelObjectCategory.StrainProbe *= 271*

<a id="DataModelObjectCategory.StrainResult"></a>

### DataModelObjectCategory.StrainResult *= 358*

<a id="DataModelObjectCategory.StressFrequencyResponse"></a>

### DataModelObjectCategory.StressFrequencyResponse *= 491*

<a id="DataModelObjectCategory.StressIntensity"></a>

### DataModelObjectCategory.StressIntensity *= 315*

<a id="DataModelObjectCategory.StressPhaseResponse"></a>

### DataModelObjectCategory.StressPhaseResponse *= 502*

<a id="DataModelObjectCategory.StressProbe"></a>

### DataModelObjectCategory.StressProbe *= 272*

<a id="DataModelObjectCategory.StressRatio"></a>

### DataModelObjectCategory.StressRatio *= 435*

<a id="DataModelObjectCategory.StressResult"></a>

### DataModelObjectCategory.StressResult *= 357*

<a id="DataModelObjectCategory.StressSafetyFactor"></a>

### DataModelObjectCategory.StressSafetyFactor *= 354*

<a id="DataModelObjectCategory.StressSafetyMargin"></a>

### DataModelObjectCategory.StressSafetyMargin *= 353*

<a id="DataModelObjectCategory.StressTool"></a>

### DataModelObjectCategory.StressTool *= 592*

<a id="DataModelObjectCategory.StressToolResult"></a>

### DataModelObjectCategory.StressToolResult *= 375*

<a id="DataModelObjectCategory.StructuralError"></a>

### DataModelObjectCategory.StructuralError *= 316*

<a id="DataModelObjectCategory.StructuralStrainEnergy"></a>

### DataModelObjectCategory.StructuralStrainEnergy *= 317*

<a id="DataModelObjectCategory.SubstructureGenerationCondensedPart"></a>

### DataModelObjectCategory.SubstructureGenerationCondensedPart *= 721*

<a id="DataModelObjectCategory.Surface"></a>

### DataModelObjectCategory.Surface *= 593*

<a id="DataModelObjectCategory.SurfaceChargeDensity"></a>

### DataModelObjectCategory.SurfaceChargeDensity *= 184*

<a id="DataModelObjectCategory.SurfaceCoating"></a>

### DataModelObjectCategory.SurfaceCoating *= 594*

<a id="DataModelObjectCategory.Symmetry"></a>

### DataModelObjectCategory.Symmetry *= 600*

<a id="DataModelObjectCategory.SymmetryGeneral"></a>

### DataModelObjectCategory.SymmetryGeneral *= 595*

<a id="DataModelObjectCategory.SymmetryManufacturingConstraint"></a>

### DataModelObjectCategory.SymmetryManufacturingConstraint *= 609*

<a id="DataModelObjectCategory.SymmetryRegion"></a>

### DataModelObjectCategory.SymmetryRegion *= 598*

<a id="DataModelObjectCategory.TCrossSection"></a>

### DataModelObjectCategory.TCrossSection *= 67*

<a id="DataModelObjectCategory.Table"></a>

### DataModelObjectCategory.Table *= 726*

<a id="DataModelObjectCategory.TableGroup"></a>

### DataModelObjectCategory.TableGroup *= 725*

<a id="DataModelObjectCategory.Temperature"></a>

### DataModelObjectCategory.Temperature *= 135*

<a id="DataModelObjectCategory.TemperatureConstraint"></a>

### DataModelObjectCategory.TemperatureConstraint *= 611*

<a id="DataModelObjectCategory.TemperatureProbe"></a>

### DataModelObjectCategory.TemperatureProbe *= 236*

<a id="DataModelObjectCategory.TemperatureResult"></a>

### DataModelObjectCategory.TemperatureResult *= 334*

<a id="DataModelObjectCategory.TemperatureTracker"></a>

### DataModelObjectCategory.TemperatureTracker *= 493*

<a id="DataModelObjectCategory.ThermalComplianceConstraint"></a>

### DataModelObjectCategory.ThermalComplianceConstraint *= 713*

<a id="DataModelObjectCategory.ThermalCondition"></a>

### DataModelObjectCategory.ThermalCondition *= 154*

<a id="DataModelObjectCategory.ThermalError"></a>

### DataModelObjectCategory.ThermalError *= 318*

<a id="DataModelObjectCategory.ThermalPointMass"></a>

### DataModelObjectCategory.ThermalPointMass *= 230*

<a id="DataModelObjectCategory.ThermalResult"></a>

### DataModelObjectCategory.ThermalResult *= 374*

<a id="DataModelObjectCategory.ThermalStrainEnergy"></a>

### DataModelObjectCategory.ThermalStrainEnergy *= 320*

<a id="DataModelObjectCategory.Thickness"></a>

### DataModelObjectCategory.Thickness *= 602*

<a id="DataModelObjectCategory.ThroughCrack"></a>

### DataModelObjectCategory.ThroughCrack *= 761*

<a id="DataModelObjectCategory.TopoOptAnalysisSettings"></a>

### DataModelObjectCategory.TopoOptAnalysisSettings *= 14*

<a id="DataModelObjectCategory.TopologyDensity"></a>

### DataModelObjectCategory.TopologyDensity *= 289*

<a id="DataModelObjectCategory.TopologyElementalDensity"></a>

### DataModelObjectCategory.TopologyElementalDensity *= 291*

<a id="DataModelObjectCategory.TopologyOptimizationResult"></a>

### DataModelObjectCategory.TopologyOptimizationResult *= 287*

<a id="DataModelObjectCategory.TopologySuppressControl"></a>

### DataModelObjectCategory.TopologySuppressControl *= 770*

<a id="DataModelObjectCategory.TorqueProbe"></a>

### DataModelObjectCategory.TorqueProbe *= 267*

<a id="DataModelObjectCategory.TotalAcceleration"></a>

### DataModelObjectCategory.TotalAcceleration *= 321*

<a id="DataModelObjectCategory.TotalAxialForce"></a>

### DataModelObjectCategory.TotalAxialForce *= 322*

<a id="DataModelObjectCategory.TotalBendingMoment"></a>

### DataModelObjectCategory.TotalBendingMoment *= 419*

<a id="DataModelObjectCategory.TotalCurrentDensity"></a>

### DataModelObjectCategory.TotalCurrentDensity *= 430*

<a id="DataModelObjectCategory.TotalDeformation"></a>

### DataModelObjectCategory.TotalDeformation *= 383*

<a id="DataModelObjectCategory.TotalElectricFieldIntensity"></a>

### DataModelObjectCategory.TotalElectricFieldIntensity *= 432*

<a id="DataModelObjectCategory.TotalElectricFluxDensity"></a>

### DataModelObjectCategory.TotalElectricFluxDensity *= 408*

<a id="DataModelObjectCategory.TotalElectrostaticForce"></a>

### DataModelObjectCategory.TotalElectrostaticForce *= 739*

<a id="DataModelObjectCategory.TotalEnergyTracker"></a>

### DataModelObjectCategory.TotalEnergyTracker *= 494*

<a id="DataModelObjectCategory.TotalHeatFlux"></a>

### DataModelObjectCategory.TotalHeatFlux *= 411*

<a id="DataModelObjectCategory.TotalMagneticFieldIntensity"></a>

### DataModelObjectCategory.TotalMagneticFieldIntensity *= 384*

<a id="DataModelObjectCategory.TotalMagneticFluxDensity"></a>

### DataModelObjectCategory.TotalMagneticFluxDensity *= 372*

<a id="DataModelObjectCategory.TotalMassAverageVelocityTracker"></a>

### DataModelObjectCategory.TotalMassAverageVelocityTracker *= 500*

<a id="DataModelObjectCategory.TotalShearForce"></a>

### DataModelObjectCategory.TotalShearForce *= 421*

<a id="DataModelObjectCategory.TotalShearMomentDiagram"></a>

### DataModelObjectCategory.TotalShearMomentDiagram *= 308*

<a id="DataModelObjectCategory.TotalTorsionalMoment"></a>

### DataModelObjectCategory.TotalTorsionalMoment *= 324*

<a id="DataModelObjectCategory.TotalVelocity"></a>

### DataModelObjectCategory.TotalVelocity *= 325*

<a id="DataModelObjectCategory.TreeGroupingFolder"></a>

### DataModelObjectCategory.TreeGroupingFolder *= 628*

<a id="DataModelObjectCategory.UniformConstraint"></a>

### DataModelObjectCategory.UniformConstraint *= 719*

<a id="DataModelObjectCategory.UserDefinedCrossSection"></a>

### DataModelObjectCategory.UserDefinedCrossSection *= 60*

<a id="DataModelObjectCategory.UserDefinedResult"></a>

### DataModelObjectCategory.UserDefinedResult *= 69*

<a id="DataModelObjectCategory.UserLoad"></a>

### DataModelObjectCategory.UserLoad *= 631*

<a id="DataModelObjectCategory.UserObject"></a>

### DataModelObjectCategory.UserObject *= 632*

<a id="DataModelObjectCategory.UserPostObject"></a>

### DataModelObjectCategory.UserPostObject *= 633*

<a id="DataModelObjectCategory.UserResult"></a>

### DataModelObjectCategory.UserResult *= 634*

<a id="DataModelObjectCategory.UserSolver"></a>

### DataModelObjectCategory.UserSolver *= 635*

<a id="DataModelObjectCategory.VariableGraph"></a>

### DataModelObjectCategory.VariableGraph *= 326*

<a id="DataModelObjectCategory.VectorAxialForce"></a>

### DataModelObjectCategory.VectorAxialForce *= 327*

<a id="DataModelObjectCategory.VectorBendingMoment"></a>

### DataModelObjectCategory.VectorBendingMoment *= 328*

<a id="DataModelObjectCategory.VectorDeformation"></a>

### DataModelObjectCategory.VectorDeformation *= 329*

<a id="DataModelObjectCategory.VectorHeatFlux"></a>

### DataModelObjectCategory.VectorHeatFlux *= 330*

<a id="DataModelObjectCategory.VectorPrincipalElasticStrain"></a>

### DataModelObjectCategory.VectorPrincipalElasticStrain *= 395*

<a id="DataModelObjectCategory.VectorPrincipalStress"></a>

### DataModelObjectCategory.VectorPrincipalStress *= 404*

<a id="DataModelObjectCategory.VectorShearForce"></a>

### DataModelObjectCategory.VectorShearForce *= 331*

<a id="DataModelObjectCategory.VectorTorsionalMoment"></a>

### DataModelObjectCategory.VectorTorsionalMoment *= 332*

<a id="DataModelObjectCategory.Velocity"></a>

### DataModelObjectCategory.Velocity *= 144*

<a id="DataModelObjectCategory.VelocityFrequencyResponse"></a>

### DataModelObjectCategory.VelocityFrequencyResponse *= 567*

<a id="DataModelObjectCategory.VelocityPhaseResponse"></a>

### DataModelObjectCategory.VelocityPhaseResponse *= 555*

<a id="DataModelObjectCategory.VelocityProbe"></a>

### DataModelObjectCategory.VelocityProbe *= 233*

<a id="DataModelObjectCategory.VelocityWaterfallDiagram"></a>

### DataModelObjectCategory.VelocityWaterfallDiagram *= 756*

<a id="DataModelObjectCategory.VirtualCell"></a>

### DataModelObjectCategory.VirtualCell *= 629*

<a id="DataModelObjectCategory.VirtualTopology"></a>

### DataModelObjectCategory.VirtualTopology *= 630*

<a id="DataModelObjectCategory.ViscoelasticHeating"></a>

### DataModelObjectCategory.ViscoelasticHeating *= 226*

<a id="DataModelObjectCategory.Voltage"></a>

### DataModelObjectCategory.Voltage *= 130*

<a id="DataModelObjectCategory.VoltageFrequencyResponse"></a>

### DataModelObjectCategory.VoltageFrequencyResponse *= 639*

<a id="DataModelObjectCategory.VoltageGround"></a>

### DataModelObjectCategory.VoltageGround *= 638*

<a id="DataModelObjectCategory.Volume"></a>

### DataModelObjectCategory.Volume *= 297*

<a id="DataModelObjectCategory.VolumeChargeDensity"></a>

### DataModelObjectCategory.VolumeChargeDensity *= 185*

<a id="DataModelObjectCategory.VolumeConstraint"></a>

### DataModelObjectCategory.VolumeConstraint *= 618*

<a id="DataModelObjectCategory.VolumeProbe"></a>

### DataModelObjectCategory.VolumeProbe *= 263*

<a id="DataModelObjectCategory.Washer"></a>

### DataModelObjectCategory.Washer *= 690*

<a id="DataModelObjectCategory.Weld"></a>

### DataModelObjectCategory.Weld *= 712*

<a id="DataModelObjectCategory.ZCrossSection"></a>

### DataModelObjectCategory.ZCrossSection *= 64*


