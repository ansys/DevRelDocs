# `ResultType`

<a id="ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultType"></a>

#### *class* Ansys.Mechanical.DataModel.Enums.ResultType(\*args, \*\*kwds)

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

Specifies the ResultType.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Attributes

| Name |
| ------------------------------------------------------------------------------------------------------------------ |
| [`AWeightedFrequencyBandSPL`](#ResultType.AWeightedFrequencyBandSPL) |
| [`AWeightedSoundPressureLevel`](#ResultType.AWeightedSoundPressureLevel) |
| [`AbsorptionCoefficient`](#ResultType.AbsorptionCoefficient) |
| [`AccelerationWaterfallDiagram`](#ResultType.AccelerationWaterfallDiagram) |
| [`AccumulatedEquivalentPlasticStrain`](#ResultType.AccumulatedEquivalentPlasticStrain) |
| [`AcousticFarFieldSPLMicWaterfallDiagram`](#ResultType.AcousticFarFieldSPLMicWaterfallDiagram) |
| [`AcousticFarFieldSoundPowerLevelWaterfallDiagram`](#ResultType.AcousticFarFieldSoundPowerLevelWaterfallDiagram) |
| [`ArtificialEnergy`](#ResultType.ArtificialEnergy) |
| [`BendingStressEquivalent`](#ResultType.BendingStressEquivalent) |
| [`BendingStressIntensity`](#ResultType.BendingStressIntensity) |
| [`BoltAdjustment`](#ResultType.BoltAdjustment) |
| [`BoltWorkingLoad`](#ResultType.BoltWorkingLoad) |
| [`CampbellDiagram`](#ResultType.CampbellDiagram) |
| [`ContactChattering`](#ResultType.ContactChattering) |
| [`ContactContactingArea`](#ResultType.ContactContactingArea) |
| [`ContactFluidPressure`](#ResultType.ContactFluidPressure) |
| [`ContactFrictionalStress`](#ResultType.ContactFrictionalStress) |
| [`ContactGap`](#ResultType.ContactGap) |
| [`ContactHeatFlux`](#ResultType.ContactHeatFlux) |
| [`ContactMaximumDampingPressure`](#ResultType.ContactMaximumDampingPressure) |
| [`ContactMaximumNormalStiffness`](#ResultType.ContactMaximumNormalStiffness) |
| [`ContactMaximumTangentialStiffness`](#ResultType.ContactMaximumTangentialStiffness) |
| [`ContactMaxiumGeometricSlidingDistance`](#ResultType.ContactMaxiumGeometricSlidingDistance) |
| [`ContactMinimumGeometricSlidingDistance`](#ResultType.ContactMinimumGeometricSlidingDistance) |
| [`ContactMinimumTangentialStiffness`](#ResultType.ContactMinimumTangentialStiffness) |
| [`ContactNumberContacting`](#ResultType.ContactNumberContacting) |
| [`ContactNumberSticking`](#ResultType.ContactNumberSticking) |
| [`ContactPenetration`](#ResultType.ContactPenetration) |
| [`ContactPressure`](#ResultType.ContactPressure) |
| [`ContactResultingPinball`](#ResultType.ContactResultingPinball) |
| [`ContactSlidingDistance`](#ResultType.ContactSlidingDistance) |
| [`ContactStatus`](#ResultType.ContactStatus) |
| [`CurrentDensity`](#ResultType.CurrentDensity) |
| [`DamageStatus`](#ResultType.DamageStatus) |
| [`DampingEnergy`](#ResultType.DampingEnergy) |
| [`Density`](#ResultType.Density) |
| [`DiffuseSoundTransmissionLoss`](#ResultType.DiffuseSoundTransmissionLoss) |
| [`DirectStress`](#ResultType.DirectStress) |
| [`ElectricPotential`](#ResultType.ElectricPotential) |
| [`ElectricVoltage`](#ResultType.ElectricVoltage) |
| [`ElementalEulerXYAngle`](#ResultType.ElementalEulerXYAngle) |
| [`ElementalEulerXZAngle`](#ResultType.ElementalEulerXZAngle) |
| [`ElementalEulerYZAngle`](#ResultType.ElementalEulerYZAngle) |
| [`ElementalStrainEnergy`](#ResultType.ElementalStrainEnergy) |
| [`ElementalTriads`](#ResultType.ElementalTriads) |
| [`EnergyDissipatedPerUnitVolume`](#ResultType.EnergyDissipatedPerUnitVolume) |
| [`EquivalentCreepStrain`](#ResultType.EquivalentCreepStrain) |
| [`EquivalentCreepStrainRST`](#ResultType.EquivalentCreepStrainRST) |
| [`EquivalentElasticStrain`](#ResultType.EquivalentElasticStrain) |
| [`EquivalentElasticStrainRST`](#ResultType.EquivalentElasticStrainRST) |
| [`EquivalentPlasticStrain`](#ResultType.EquivalentPlasticStrain) |
| [`EquivalentPlasticStrainRST`](#ResultType.EquivalentPlasticStrainRST) |
| [`EquivalentRadiatedPower`](#ResultType.EquivalentRadiatedPower) |
| [`EquivalentRadiatedPowerLevel`](#ResultType.EquivalentRadiatedPowerLevel) |
| [`EquivalentRadiatedPowerLevelWaterfallDiagram`](#ResultType.EquivalentRadiatedPowerLevelWaterfallDiagram) |
| [`EquivalentRadiatedPowerWaterfallDiagram`](#ResultType.EquivalentRadiatedPowerWaterfallDiagram) |
| [`EquivalentStress`](#ResultType.EquivalentStress) |
| [`EquivalentStressPSD`](#ResultType.EquivalentStressPSD) |
| [`EquivalentStressRS`](#ResultType.EquivalentStressRS) |
| [`EquivalentTotalStrainRST`](#ResultType.EquivalentTotalStrainRST) |
| [`FactorReserveInverseCompositeFailure`](#ResultType.FactorReserveInverseCompositeFailure) |
| [`FarFieldAWeightedSPL`](#ResultType.FarFieldAWeightedSPL) |
| [`FarFieldAWeightedSPLMic`](#ResultType.FarFieldAWeightedSPLMic) |
| [`FarFieldDirectivity`](#ResultType.FarFieldDirectivity) |
| [`FarFieldMaximumPressure`](#ResultType.FarFieldMaximumPressure) |
| [`FarFieldMaximumPressureMic`](#ResultType.FarFieldMaximumPressureMic) |
| [`FarFieldMaximumScatteredPressure`](#ResultType.FarFieldMaximumScatteredPressure) |
| [`FarFieldPhase`](#ResultType.FarFieldPhase) |
| [`FarFieldPhaseMic`](#ResultType.FarFieldPhaseMic) |
| [`FarFieldSPL`](#ResultType.FarFieldSPL) |
| [`FarFieldSPLMic`](#ResultType.FarFieldSPLMic) |
| [`FarFieldSoundPowerLevel`](#ResultType.FarFieldSoundPowerLevel) |
| [`FarFieldTargetStrength`](#ResultType.FarFieldTargetStrength) |
| [`FatigueDamage`](#ResultType.FatigueDamage) |
| [`FatigueEquivalentReversedStress`](#ResultType.FatigueEquivalentReversedStress) |
| [`FatigueLife`](#ResultType.FatigueLife) |
| [`FatigueResultBiaxialityIndication`](#ResultType.FatigueResultBiaxialityIndication) |
| [`FatigueSensitivity`](#ResultType.FatigueSensitivity) |
| [`FiberCompressiveDamageVariable`](#ResultType.FiberCompressiveDamageVariable) |
| [`FiberCompressiveFailureCriterion`](#ResultType.FiberCompressiveFailureCriterion) |
| [`FiberTensileDamageVariable`](#ResultType.FiberTensileDamageVariable) |
| [`FiberTensileFailureCriterion`](#ResultType.FiberTensileFailureCriterion) |
| [`FluidFlowRate`](#ResultType.FluidFlowRate) |
| [`FluidHeatConductionRate`](#ResultType.FluidHeatConductionRate) |
| [`FluidHeatTransportRate`](#ResultType.FluidHeatTransportRate) |
| [`ForceReaction`](#ResultType.ForceReaction) |
| [`FractureCSTAR`](#ResultType.FractureCSTAR) |
| [`FractureEquivalentSIFSRange`](#ResultType.FractureEquivalentSIFSRange) |
| [`FractureJINT`](#ResultType.FractureJINT) |
| [`FractureMaterialForceX`](#ResultType.FractureMaterialForceX) |
| [`FractureMaterialForceY`](#ResultType.FractureMaterialForceY) |
| [`FractureMaterialForceZ`](#ResultType.FractureMaterialForceZ) |
| [`FractureSIFSK1`](#ResultType.FractureSIFSK1) |
| [`FractureSIFSK2`](#ResultType.FractureSIFSK2) |
| [`FractureSIFSK3`](#ResultType.FractureSIFSK3) |
| [`FractureTSTRESS`](#ResultType.FractureTSTRESS) |
| [`FractureVCCTG1`](#ResultType.FractureVCCTG1) |
| [`FractureVCCTG2`](#ResultType.FractureVCCTG2) |
| [`FractureVCCTG3`](#ResultType.FractureVCCTG3) |
| [`FractureVCCTGT`](#ResultType.FractureVCCTGT) |
| [`FrequencyBandSPL`](#ResultType.FrequencyBandSPL) |
| [`Hysteresis`](#ResultType.Hysteresis) |
| [`JouleHeat`](#ResultType.JouleHeat) |
| [`KineticEnergy`](#ResultType.KineticEnergy) |
| [`LSDYNAGeneralTracker`](#ResultType.LSDYNAGeneralTracker) |
| [`LatticeDensity`](#ResultType.LatticeDensity) |
| [`LatticeElementalDensity`](#ResultType.LatticeElementalDensity) |
| [`LinePressure`](#ResultType.LinePressure) |
| [`MCFWaterfallDiagram`](#ResultType.MCFWaterfallDiagram) |
| [`MagneticCoenergy`](#ResultType.MagneticCoenergy) |
| [`MagneticError`](#ResultType.MagneticError) |
| [`MagneticPotential`](#ResultType.MagneticPotential) |
| [`MagneticXDirectionalForces`](#ResultType.MagneticXDirectionalForces) |
| [`MagneticYDirectionalForces`](#ResultType.MagneticYDirectionalForces) |
| [`MagneticZDirectionalForces`](#ResultType.MagneticZDirectionalForces) |
| [`MarginSafetyCompositeFailure`](#ResultType.MarginSafetyCompositeFailure) |
| [`MatrixCompressiveDamageVariable`](#ResultType.MatrixCompressiveDamageVariable) |
| [`MatrixCompressiveFailureCriterion`](#ResultType.MatrixCompressiveFailureCriterion) |
| [`MatrixTensileDamageVariable`](#ResultType.MatrixTensileDamageVariable) |
| [`MatrixTensileFailureCriterion`](#ResultType.MatrixTensileFailureCriterion) |
| [`MaximumBendingStress`](#ResultType.MaximumBendingStress) |
| [`MaximumCombinedStress`](#ResultType.MaximumCombinedStress) |
| [`MaximumFailureCriteria`](#ResultType.MaximumFailureCriteria) |
| [`MaximumPrincipalElasticStrain`](#ResultType.MaximumPrincipalElasticStrain) |
| [`MaximumPrincipalStress`](#ResultType.MaximumPrincipalStress) |
| [`MaximumPrincipalThermalStrain`](#ResultType.MaximumPrincipalThermalStrain) |
| [`MaximumShearElasticStrain`](#ResultType.MaximumShearElasticStrain) |
| [`MaximumShearStress`](#ResultType.MaximumShearStress) |
| [`MembraneStressEquivalent`](#ResultType.MembraneStressEquivalent) |
| [`MembraneStressIntensity`](#ResultType.MembraneStressIntensity) |
| [`MiddlePrincipalElasticStrain`](#ResultType.MiddlePrincipalElasticStrain) |
| [`MiddlePrincipalStress`](#ResultType.MiddlePrincipalStress) |
| [`MiddlePrincipalThermalStrain`](#ResultType.MiddlePrincipalThermalStrain) |
| [`MinimumBendingStress`](#ResultType.MinimumBendingStress) |
| [`MinimumCombinedStress`](#ResultType.MinimumCombinedStress) |
| [`MinimumPrincipalElasticStrain`](#ResultType.MinimumPrincipalElasticStrain) |
| [`MinimumPrincipalStress`](#ResultType.MinimumPrincipalStress) |
| [`MinimumPrincipalThermalStrain`](#ResultType.MinimumPrincipalThermalStrain) |
| [`MomentReactionTracker`](#ResultType.MomentReactionTracker) |
| [`MullinsDamageVariable`](#ResultType.MullinsDamageVariable) |
| [`MullinsMaximumPreviousStrainEnergy`](#ResultType.MullinsMaximumPreviousStrainEnergy) |
| [`NewtonRaphsonResidualCharge`](#ResultType.NewtonRaphsonResidualCharge) |
| [`NewtonRaphsonResidualForce`](#ResultType.NewtonRaphsonResidualForce) |
| [`NewtonRaphsonResidualHeat`](#ResultType.NewtonRaphsonResidualHeat) |
| [`NewtonRaphsonResidualMoment`](#ResultType.NewtonRaphsonResidualMoment) |
| [`NodalEulerXYAngle`](#ResultType.NodalEulerXYAngle) |
| [`NodalEulerXZAngle`](#ResultType.NodalEulerXZAngle) |
| [`NodalEulerYZNodal`](#ResultType.NodalEulerYZNodal) |
| [`NodalTriads`](#ResultType.NodalTriads) |
| [`NonLinearStabilizationEnergy`](#ResultType.NonLinearStabilizationEnergy) |
| [`NormalGasketPressure`](#ResultType.NormalGasketPressure) |
| [`NormalGasketTotalClosure`](#ResultType.NormalGasketTotalClosure) |
| [`PlasticWork`](#ResultType.PlasticWork) |
| [`Pressure`](#ResultType.Pressure) |
| [`ReturnLoss`](#ResultType.ReturnLoss) |
| [`SafetyFactor`](#ResultType.SafetyFactor) |
| [`SafetyFactorCompositeFailure`](#ResultType.SafetyFactorCompositeFailure) |
| [`SafetyFactorFatigue`](#ResultType.SafetyFactorFatigue) |
| [`SafetyMargin`](#ResultType.SafetyMargin) |
| [`ShapeFinder`](#ResultType.ShapeFinder) |
| [`ShapeFinderElemental`](#ResultType.ShapeFinderElemental) |
| [`ShearDamageVariable`](#ResultType.ShearDamageVariable) |
| [`ShearMomentDiagramMSUM`](#ResultType.ShearMomentDiagramMSUM) |
| [`ShearMomentDiagramMY`](#ResultType.ShearMomentDiagramMY) |
| [`ShearMomentDiagramMZ`](#ResultType.ShearMomentDiagramMZ) |
| [`ShearMomentDiagramUSUM`](#ResultType.ShearMomentDiagramUSUM) |
| [`ShearMomentDiagramUY`](#ResultType.ShearMomentDiagramUY) |
| [`ShearMomentDiagramUZ`](#ResultType.ShearMomentDiagramUZ) |
| [`ShearMomentDiagramVSUM`](#ResultType.ShearMomentDiagramVSUM) |
| [`ShearMomentDiagramVY`](#ResultType.ShearMomentDiagramVY) |
| [`ShearMomentDiagramVZ`](#ResultType.ShearMomentDiagramVZ) |
| [`ShellBendingStress11`](#ResultType.ShellBendingStress11) |
| [`ShellBendingStress12`](#ResultType.ShellBendingStress12) |
| [`ShellBendingStress22`](#ResultType.ShellBendingStress22) |
| [`ShellBottomPeakStress11`](#ResultType.ShellBottomPeakStress11) |
| [`ShellBottomPeakStress12`](#ResultType.ShellBottomPeakStress12) |
| [`ShellBottomPeakStress22`](#ResultType.ShellBottomPeakStress22) |
| [`ShellMembraneStress11`](#ResultType.ShellMembraneStress11) |
| [`ShellMembraneStress12`](#ResultType.ShellMembraneStress12) |
| [`ShellMembraneStress22`](#ResultType.ShellMembraneStress22) |
| [`ShellTopPeakStress11`](#ResultType.ShellTopPeakStress11) |
| [`ShellTopPeakStress12`](#ResultType.ShellTopPeakStress12) |
| [`ShellTopPeakStress22`](#ResultType.ShellTopPeakStress22) |
| [`SoundPressureLevel`](#ResultType.SoundPressureLevel) |
| [`SpringTrackerDampingForce`](#ResultType.SpringTrackerDampingForce) |
| [`SpringTrackerElasticForce`](#ResultType.SpringTrackerElasticForce) |
| [`SpringTrackerElongation`](#ResultType.SpringTrackerElongation) |
| [`SpringTrackerVelocity`](#ResultType.SpringTrackerVelocity) |
| [`StabilizationEnergy`](#ResultType.StabilizationEnergy) |
| [`StiffnessEnergy`](#ResultType.StiffnessEnergy) |
| [`StrainIntensity`](#ResultType.StrainIntensity) |
| [`StressIntensity`](#ResultType.StressIntensity) |
| [`StressRatio`](#ResultType.StressRatio) |
| [`StructuralError`](#ResultType.StructuralError) |
| [`StructuralStrainEnergy`](#ResultType.StructuralStrainEnergy) |
| [`Temperature`](#ResultType.Temperature) |
| [`ThermalError`](#ResultType.ThermalError) |
| [`ThermalStrainEnergy`](#ResultType.ThermalStrainEnergy) |
| [`TopologyDensity`](#ResultType.TopologyDensity) |
| [`TopologyElementalDensity`](#ResultType.TopologyElementalDensity) |
| [`TopologyMultiDensity`](#ResultType.TopologyMultiDensity) |
| [`TotalAcceleration`](#ResultType.TotalAcceleration) |
| [`TotalAxialForceDiagram`](#ResultType.TotalAxialForceDiagram) |
| [`TotalBendingMomentDiagram`](#ResultType.TotalBendingMomentDiagram) |
| [`TotalCurrentDensity`](#ResultType.TotalCurrentDensity) |
| [`TotalDeformation`](#ResultType.TotalDeformation) |
| [`TotalElectricFieldIntensity`](#ResultType.TotalElectricFieldIntensity) |
| [`TotalElectricFluxDensity`](#ResultType.TotalElectricFluxDensity) |
| [`TotalEnergy`](#ResultType.TotalEnergy) |
| [`TotalHeatFlux`](#ResultType.TotalHeatFlux) |
| [`TotalMagneticFieldIntensity`](#ResultType.TotalMagneticFieldIntensity) |
| [`TotalMagneticFluxDensity`](#ResultType.TotalMagneticFluxDensity) |
| [`TotalMagneticForces`](#ResultType.TotalMagneticForces) |
| [`TotalShearForce`](#ResultType.TotalShearForce) |
| [`TotalTorsionalMoment`](#ResultType.TotalTorsionalMoment) |
| [`TotalVelocity`](#ResultType.TotalVelocity) |
| [`TransmissionLoss`](#ResultType.TransmissionLoss) |
| [`VariableGraph`](#ResultType.VariableGraph) |
| [`VectorAxialForce`](#ResultType.VectorAxialForce) |
| [`VectorBendingMoment`](#ResultType.VectorBendingMoment) |
| [`VectorDeformation`](#ResultType.VectorDeformation) |
| [`VectorHeatFlux`](#ResultType.VectorHeatFlux) |
| [`VectorPrincipalElasticStrain`](#ResultType.VectorPrincipalElasticStrain) |
| [`VectorPrincipalStress`](#ResultType.VectorPrincipalStress) |
| [`VectorShearForce`](#ResultType.VectorShearForce) |
| [`VectorTorsionalMoment`](#ResultType.VectorTorsionalMoment) |
| [`VelocityWaterfallDiagram`](#ResultType.VelocityWaterfallDiagram) |
| [`Volume`](#ResultType.Volume) |
| [`XContactForce`](#ResultType.XContactForce) |
| [`XDirectionalAcceleration`](#ResultType.XDirectionalAcceleration) |
| [`XDirectionalAccelerationPSD`](#ResultType.XDirectionalAccelerationPSD) |
| [`XDirectionalAccelerationRS`](#ResultType.XDirectionalAccelerationRS) |
| [`XDirectionalAxialForce`](#ResultType.XDirectionalAxialForce) |
| [`XDirectionalBendingMoment`](#ResultType.XDirectionalBendingMoment) |
| [`XDirectionalCurrentDensity`](#ResultType.XDirectionalCurrentDensity) |
| [`XDirectionalDisplacement`](#ResultType.XDirectionalDisplacement) |
| [`XDirectionalElectricFieldIntensity`](#ResultType.XDirectionalElectricFieldIntensity) |
| [`XDirectionalElectricFluxDensity`](#ResultType.XDirectionalElectricFluxDensity) |
| [`XDirectionalHeatFlux`](#ResultType.XDirectionalHeatFlux) |
| [`XDirectionalMagneticFieldIntensity`](#ResultType.XDirectionalMagneticFieldIntensity) |
| [`XDirectionalMagneticFluxDensity`](#ResultType.XDirectionalMagneticFluxDensity) |
| [`XDirectionalShearForce`](#ResultType.XDirectionalShearForce) |
| [`XDirectionalTorsionalMoment`](#ResultType.XDirectionalTorsionalMoment) |
| [`XDirectionalVelocity`](#ResultType.XDirectionalVelocity) |
| [`XDirectionalVelocityPSD`](#ResultType.XDirectionalVelocityPSD) |
| [`XDirectionalVelocityRS`](#ResultType.XDirectionalVelocityRS) |
| [`XExternalForce`](#ResultType.XExternalForce) |
| [`XMomentum`](#ResultType.XMomentum) |
| [`XNormalElasticStrain`](#ResultType.XNormalElasticStrain) |
| [`XNormalStress`](#ResultType.XNormalStress) |
| [`XThermalStrain`](#ResultType.XThermalStrain) |
| [`XTotalMassAverageVelocity`](#ResultType.XTotalMassAverageVelocity) |
| [`XYShearElasticStrain`](#ResultType.XYShearElasticStrain) |
| [`XYShearGasketPressure`](#ResultType.XYShearGasketPressure) |
| [`XYShearGasketTotalClosure`](#ResultType.XYShearGasketTotalClosure) |
| [`XYShearStress`](#ResultType.XYShearStress) |
| [`XZShearElasticStrain`](#ResultType.XZShearElasticStrain) |
| [`XZShearGasketPressure`](#ResultType.XZShearGasketPressure) |
| [`XZShearGasketTotalClosure`](#ResultType.XZShearGasketTotalClosure) |
| [`XZShearStress`](#ResultType.XZShearStress) |
| [`YContactForce`](#ResultType.YContactForce) |
| [`YDirectionalAcceleration`](#ResultType.YDirectionalAcceleration) |
| [`YDirectionalAccelerationPSD`](#ResultType.YDirectionalAccelerationPSD) |
| [`YDirectionalAccelerationRS`](#ResultType.YDirectionalAccelerationRS) |
| [`YDirectionalAxialForce`](#ResultType.YDirectionalAxialForce) |
| [`YDirectionalBendingMoment`](#ResultType.YDirectionalBendingMoment) |
| [`YDirectionalCurrentDensity`](#ResultType.YDirectionalCurrentDensity) |
| [`YDirectionalDisplacement`](#ResultType.YDirectionalDisplacement) |
| [`YDirectionalElectricFieldIntensity`](#ResultType.YDirectionalElectricFieldIntensity) |
| [`YDirectionalElectricFluxDensity`](#ResultType.YDirectionalElectricFluxDensity) |
| [`YDirectionalHeatFlux`](#ResultType.YDirectionalHeatFlux) |
| [`YDirectionalMagneticFieldIntensity`](#ResultType.YDirectionalMagneticFieldIntensity) |
| [`YDirectionalMagneticFluxDensity`](#ResultType.YDirectionalMagneticFluxDensity) |
| [`YDirectionalShearForce`](#ResultType.YDirectionalShearForce) |
| [`YDirectionalTorsionalMoment`](#ResultType.YDirectionalTorsionalMoment) |
| [`YDirectionalVelocity`](#ResultType.YDirectionalVelocity) |
| [`YDirectionalVelocityPSD`](#ResultType.YDirectionalVelocityPSD) |
| [`YDirectionalVelocityRS`](#ResultType.YDirectionalVelocityRS) |
| [`YExternalForce`](#ResultType.YExternalForce) |
| [`YMomentum`](#ResultType.YMomentum) |
| [`YNormalElasticStrain`](#ResultType.YNormalElasticStrain) |
| [`YNormalStress`](#ResultType.YNormalStress) |
| [`YThermalStrain`](#ResultType.YThermalStrain) |
| [`YTotalMassAverageVelocity`](#ResultType.YTotalMassAverageVelocity) |
| [`YZShearElasticStrain`](#ResultType.YZShearElasticStrain) |
| [`YZShearStress`](#ResultType.YZShearStress) |
| [`ZContactForce`](#ResultType.ZContactForce) |
| [`ZDirectionalAcceleration`](#ResultType.ZDirectionalAcceleration) |
| [`ZDirectionalAccelerationRS`](#ResultType.ZDirectionalAccelerationRS) |
| [`ZDirectionalAxialForce`](#ResultType.ZDirectionalAxialForce) |
| [`ZDirectionalBendingMoment`](#ResultType.ZDirectionalBendingMoment) |
| [`ZDirectionalCurrentDensity`](#ResultType.ZDirectionalCurrentDensity) |
| [`ZDirectionalDisplacement`](#ResultType.ZDirectionalDisplacement) |
| [`ZDirectionalElectricFieldIntensity`](#ResultType.ZDirectionalElectricFieldIntensity) |
| [`ZDirectionalElectricFluxDensity`](#ResultType.ZDirectionalElectricFluxDensity) |
| [`ZDirectionalHeatFlux`](#ResultType.ZDirectionalHeatFlux) |
| [`ZDirectionalMagneticFieldIntensity`](#ResultType.ZDirectionalMagneticFieldIntensity) |
| [`ZDirectionalMagneticFluxDensity`](#ResultType.ZDirectionalMagneticFluxDensity) |
| [`ZDirectionalShearForce`](#ResultType.ZDirectionalShearForce) |
| [`ZDirectionalTorsionalMoment`](#ResultType.ZDirectionalTorsionalMoment) |
| [`ZDirectionalVelocity`](#ResultType.ZDirectionalVelocity) |
| [`ZDirectionalVelocityPSD`](#ResultType.ZDirectionalVelocityPSD) |
| [`ZDirectionalVelocityRS`](#ResultType.ZDirectionalVelocityRS) |
| [`ZExternalForce`](#ResultType.ZExternalForce) |
| [`ZMomentum`](#ResultType.ZMomentum) |
| [`ZNormalElasticStrain`](#ResultType.ZNormalElasticStrain) |
| [`ZNormalStress`](#ResultType.ZNormalStress) |
| [`ZThermalStrain`](#ResultType.ZThermalStrain) |
| [`ZTotalMassAverageVelocity`](#ResultType.ZTotalMassAverageVelocity) |
| [`ZdirectionalAccelerationPSD`](#ResultType.ZdirectionalAccelerationPSD) |

<a id="attribute-detail"></a>

## Attribute detail

<a id="ResultType.AWeightedFrequencyBandSPL"></a>

### ResultType.AWeightedFrequencyBandSPL *= 361*

<a id="ResultType.AWeightedSoundPressureLevel"></a>

### ResultType.AWeightedSoundPressureLevel *= 359*

<a id="ResultType.AbsorptionCoefficient"></a>

### ResultType.AbsorptionCoefficient *= 370*

<a id="ResultType.AccelerationWaterfallDiagram"></a>

### ResultType.AccelerationWaterfallDiagram *= 406*

<a id="ResultType.AccumulatedEquivalentPlasticStrain"></a>

### ResultType.AccumulatedEquivalentPlasticStrain *= 386*

<a id="ResultType.AcousticFarFieldSPLMicWaterfallDiagram"></a>

### ResultType.AcousticFarFieldSPLMicWaterfallDiagram *= 388*

<a id="ResultType.AcousticFarFieldSoundPowerLevelWaterfallDiagram"></a>

### ResultType.AcousticFarFieldSoundPowerLevelWaterfallDiagram *= 387*

<a id="ResultType.ArtificialEnergy"></a>

### ResultType.ArtificialEnergy *= 401*

<a id="ResultType.BendingStressEquivalent"></a>

### ResultType.BendingStressEquivalent *= 121*

<a id="ResultType.BendingStressIntensity"></a>

### ResultType.BendingStressIntensity *= 123*

<a id="ResultType.BoltAdjustment"></a>

### ResultType.BoltAdjustment *= 294*

<a id="ResultType.BoltWorkingLoad"></a>

### ResultType.BoltWorkingLoad *= 295*

<a id="ResultType.CampbellDiagram"></a>

### ResultType.CampbellDiagram *= 248*

<a id="ResultType.ContactChattering"></a>

### ResultType.ContactChattering *= 101*

<a id="ResultType.ContactContactingArea"></a>

### ResultType.ContactContactingArea *= 245*

<a id="ResultType.ContactFluidPressure"></a>

### ResultType.ContactFluidPressure *= 265*

<a id="ResultType.ContactFrictionalStress"></a>

### ResultType.ContactFrictionalStress *= 71*

<a id="ResultType.ContactGap"></a>

### ResultType.ContactGap *= 70*

<a id="ResultType.ContactHeatFlux"></a>

### ResultType.ContactHeatFlux *= 334*

<a id="ResultType.ContactMaximumDampingPressure"></a>

### ResultType.ContactMaximumDampingPressure *= 249*

<a id="ResultType.ContactMaximumNormalStiffness"></a>

### ResultType.ContactMaximumNormalStiffness *= 103*

<a id="ResultType.ContactMaximumTangentialStiffness"></a>

### ResultType.ContactMaximumTangentialStiffness *= 104*

<a id="ResultType.ContactMaxiumGeometricSlidingDistance"></a>

### ResultType.ContactMaxiumGeometricSlidingDistance *= 289*

<a id="ResultType.ContactMinimumGeometricSlidingDistance"></a>

### ResultType.ContactMinimumGeometricSlidingDistance *= 288*

<a id="ResultType.ContactMinimumTangentialStiffness"></a>

### ResultType.ContactMinimumTangentialStiffness *= 108*

<a id="ResultType.ContactNumberContacting"></a>

### ResultType.ContactNumberContacting *= 100*

<a id="ResultType.ContactNumberSticking"></a>

### ResultType.ContactNumberSticking *= 106*

<a id="ResultType.ContactPenetration"></a>

### ResultType.ContactPenetration *= 69*

<a id="ResultType.ContactPressure"></a>

### ResultType.ContactPressure *= 68*

<a id="ResultType.ContactResultingPinball"></a>

### ResultType.ContactResultingPinball *= 105*

<a id="ResultType.ContactSlidingDistance"></a>

### ResultType.ContactSlidingDistance *= 72*

<a id="ResultType.ContactStatus"></a>

### ResultType.ContactStatus *= 73*

<a id="ResultType.CurrentDensity"></a>

### ResultType.CurrentDensity *= 118*

<a id="ResultType.DamageStatus"></a>

### ResultType.DamageStatus *= 281*

<a id="ResultType.DampingEnergy"></a>

### ResultType.DampingEnergy *= 400*

<a id="ResultType.Density"></a>

### ResultType.Density *= 195*

<a id="ResultType.DiffuseSoundTransmissionLoss"></a>

### ResultType.DiffuseSoundTransmissionLoss *= 377*

<a id="ResultType.DirectStress"></a>

### ResultType.DirectStress *= 109*

<a id="ResultType.ElectricPotential"></a>

### ResultType.ElectricPotential *= 114*

<a id="ResultType.ElectricVoltage"></a>

### ResultType.ElectricVoltage *= 153*

<a id="ResultType.ElementalEulerXYAngle"></a>

### ResultType.ElementalEulerXYAngle *= 197*

<a id="ResultType.ElementalEulerXZAngle"></a>

### ResultType.ElementalEulerXZAngle *= 199*

<a id="ResultType.ElementalEulerYZAngle"></a>

### ResultType.ElementalEulerYZAngle *= 198*

<a id="ResultType.ElementalStrainEnergy"></a>

### ResultType.ElementalStrainEnergy *= 135*

<a id="ResultType.ElementalTriads"></a>

### ResultType.ElementalTriads *= 200*

<a id="ResultType.EnergyDissipatedPerUnitVolume"></a>

### ResultType.EnergyDissipatedPerUnitVolume *= 287*

<a id="ResultType.EquivalentCreepStrain"></a>

### ResultType.EquivalentCreepStrain *= 242*

<a id="ResultType.EquivalentCreepStrainRST"></a>

### ResultType.EquivalentCreepStrainRST *= 252*

<a id="ResultType.EquivalentElasticStrain"></a>

### ResultType.EquivalentElasticStrain *= 13*

<a id="ResultType.EquivalentElasticStrainRST"></a>

### ResultType.EquivalentElasticStrainRST *= 250*

<a id="ResultType.EquivalentPlasticStrain"></a>

### ResultType.EquivalentPlasticStrain *= 84*

<a id="ResultType.EquivalentPlasticStrainRST"></a>

### ResultType.EquivalentPlasticStrainRST *= 251*

<a id="ResultType.EquivalentRadiatedPower"></a>

### ResultType.EquivalentRadiatedPower *= 378*

<a id="ResultType.EquivalentRadiatedPowerLevel"></a>

### ResultType.EquivalentRadiatedPowerLevel *= 379*

<a id="ResultType.EquivalentRadiatedPowerLevelWaterfallDiagram"></a>

### ResultType.EquivalentRadiatedPowerLevelWaterfallDiagram *= 385*

<a id="ResultType.EquivalentRadiatedPowerWaterfallDiagram"></a>

### ResultType.EquivalentRadiatedPowerWaterfallDiagram *= 384*

<a id="ResultType.EquivalentStress"></a>

### ResultType.EquivalentStress *= 1*

<a id="ResultType.EquivalentStressPSD"></a>

### ResultType.EquivalentStressPSD *= 138*

<a id="ResultType.EquivalentStressRS"></a>

### ResultType.EquivalentStressRS *= 173*

<a id="ResultType.EquivalentTotalStrainRST"></a>

### ResultType.EquivalentTotalStrainRST *= 243*

<a id="ResultType.FactorReserveInverseCompositeFailure"></a>

### ResultType.FactorReserveInverseCompositeFailure *= 321*

<a id="ResultType.FarFieldAWeightedSPL"></a>

### ResultType.FarFieldAWeightedSPL *= 351*

<a id="ResultType.FarFieldAWeightedSPLMic"></a>

### ResultType.FarFieldAWeightedSPLMic *= 373*

<a id="ResultType.FarFieldDirectivity"></a>

### ResultType.FarFieldDirectivity *= 354*

<a id="ResultType.FarFieldMaximumPressure"></a>

### ResultType.FarFieldMaximumPressure *= 352*

<a id="ResultType.FarFieldMaximumPressureMic"></a>

### ResultType.FarFieldMaximumPressureMic *= 374*

<a id="ResultType.FarFieldMaximumScatteredPressure"></a>

### ResultType.FarFieldMaximumScatteredPressure *= 355*

<a id="ResultType.FarFieldPhase"></a>

### ResultType.FarFieldPhase *= 353*

<a id="ResultType.FarFieldPhaseMic"></a>

### ResultType.FarFieldPhaseMic *= 375*

<a id="ResultType.FarFieldSPL"></a>

### ResultType.FarFieldSPL *= 350*

<a id="ResultType.FarFieldSPLMic"></a>

### ResultType.FarFieldSPLMic *= 372*

<a id="ResultType.FarFieldSoundPowerLevel"></a>

### ResultType.FarFieldSoundPowerLevel *= 357*

<a id="ResultType.FarFieldTargetStrength"></a>

### ResultType.FarFieldTargetStrength *= 356*

<a id="ResultType.FatigueDamage"></a>

### ResultType.FatigueDamage *= 62*

<a id="ResultType.FatigueEquivalentReversedStress"></a>

### ResultType.FatigueEquivalentReversedStress *= 74*

<a id="ResultType.FatigueLife"></a>

### ResultType.FatigueLife *= 60*

<a id="ResultType.FatigueResultBiaxialityIndication"></a>

### ResultType.FatigueResultBiaxialityIndication *= 63*

<a id="ResultType.FatigueSensitivity"></a>

### ResultType.FatigueSensitivity *= 66*

<a id="ResultType.FiberCompressiveDamageVariable"></a>

### ResultType.FiberCompressiveDamageVariable *= 283*

<a id="ResultType.FiberCompressiveFailureCriterion"></a>

### ResultType.FiberCompressiveFailureCriterion *= 278*

<a id="ResultType.FiberTensileDamageVariable"></a>

### ResultType.FiberTensileDamageVariable *= 282*

<a id="ResultType.FiberTensileFailureCriterion"></a>

### ResultType.FiberTensileFailureCriterion *= 277*

<a id="ResultType.FluidFlowRate"></a>

### ResultType.FluidFlowRate *= 296*

<a id="ResultType.FluidHeatConductionRate"></a>

### ResultType.FluidHeatConductionRate *= 297*

<a id="ResultType.FluidHeatTransportRate"></a>

### ResultType.FluidHeatTransportRate *= 298*

<a id="ResultType.ForceReaction"></a>

### ResultType.ForceReaction *= 246*

<a id="ResultType.FractureCSTAR"></a>

### ResultType.FractureCSTAR *= 311*

<a id="ResultType.FractureEquivalentSIFSRange"></a>

### ResultType.FractureEquivalentSIFSRange *= 314*

<a id="ResultType.FractureJINT"></a>

### ResultType.FractureJINT *= 266*

<a id="ResultType.FractureMaterialForceX"></a>

### ResultType.FractureMaterialForceX *= 308*

<a id="ResultType.FractureMaterialForceY"></a>

### ResultType.FractureMaterialForceY *= 309*

<a id="ResultType.FractureMaterialForceZ"></a>

### ResultType.FractureMaterialForceZ *= 310*

<a id="ResultType.FractureSIFSK1"></a>

### ResultType.FractureSIFSK1 *= 267*

<a id="ResultType.FractureSIFSK2"></a>

### ResultType.FractureSIFSK2 *= 268*

<a id="ResultType.FractureSIFSK3"></a>

### ResultType.FractureSIFSK3 *= 269*

<a id="ResultType.FractureTSTRESS"></a>

### ResultType.FractureTSTRESS *= 307*

<a id="ResultType.FractureVCCTG1"></a>

### ResultType.FractureVCCTG1 *= 270*

<a id="ResultType.FractureVCCTG2"></a>

### ResultType.FractureVCCTG2 *= 271*

<a id="ResultType.FractureVCCTG3"></a>

### ResultType.FractureVCCTG3 *= 272*

<a id="ResultType.FractureVCCTGT"></a>

### ResultType.FractureVCCTGT *= 273*

<a id="ResultType.FrequencyBandSPL"></a>

### ResultType.FrequencyBandSPL *= 360*

<a id="ResultType.Hysteresis"></a>

### ResultType.Hysteresis *= 115*

<a id="ResultType.JouleHeat"></a>

### ResultType.JouleHeat *= 154*

<a id="ResultType.KineticEnergy"></a>

### ResultType.KineticEnergy *= 139*

<a id="ResultType.LSDYNAGeneralTracker"></a>

### ResultType.LSDYNAGeneralTracker *= 403*

<a id="ResultType.LatticeDensity"></a>

### ResultType.LatticeDensity *= 381*

<a id="ResultType.LatticeElementalDensity"></a>

### ResultType.LatticeElementalDensity *= 380*

<a id="ResultType.LinePressure"></a>

### ResultType.LinePressure *= 396*

<a id="ResultType.MCFWaterfallDiagram"></a>

### ResultType.MCFWaterfallDiagram *= 404*

<a id="ResultType.MagneticCoenergy"></a>

### ResultType.MagneticCoenergy *= 193*

<a id="ResultType.MagneticError"></a>

### ResultType.MagneticError *= 134*

<a id="ResultType.MagneticPotential"></a>

### ResultType.MagneticPotential *= 192*

<a id="ResultType.MagneticXDirectionalForces"></a>

### ResultType.MagneticXDirectionalForces *= 97*

<a id="ResultType.MagneticYDirectionalForces"></a>

### ResultType.MagneticYDirectionalForces *= 98*

<a id="ResultType.MagneticZDirectionalForces"></a>

### ResultType.MagneticZDirectionalForces *= 99*

<a id="ResultType.MarginSafetyCompositeFailure"></a>

### ResultType.MarginSafetyCompositeFailure *= 323*

<a id="ResultType.MatrixCompressiveDamageVariable"></a>

### ResultType.MatrixCompressiveDamageVariable *= 285*

<a id="ResultType.MatrixCompressiveFailureCriterion"></a>

### ResultType.MatrixCompressiveFailureCriterion *= 280*

<a id="ResultType.MatrixTensileDamageVariable"></a>

### ResultType.MatrixTensileDamageVariable *= 284*

<a id="ResultType.MatrixTensileFailureCriterion"></a>

### ResultType.MatrixTensileFailureCriterion *= 279*

<a id="ResultType.MaximumBendingStress"></a>

### ResultType.MaximumBendingStress *= 111*

<a id="ResultType.MaximumCombinedStress"></a>

### ResultType.MaximumCombinedStress *= 113*

<a id="ResultType.MaximumFailureCriteria"></a>

### ResultType.MaximumFailureCriteria *= 276*

<a id="ResultType.MaximumPrincipalElasticStrain"></a>

### ResultType.MaximumPrincipalElasticStrain *= 14*

<a id="ResultType.MaximumPrincipalStress"></a>

### ResultType.MaximumPrincipalStress *= 2*

<a id="ResultType.MaximumPrincipalThermalStrain"></a>

### ResultType.MaximumPrincipalThermalStrain *= 54*

<a id="ResultType.MaximumShearElasticStrain"></a>

### ResultType.MaximumShearElasticStrain *= 17*

<a id="ResultType.MaximumShearStress"></a>

### ResultType.MaximumShearStress *= 5*

<a id="ResultType.MembraneStressEquivalent"></a>

### ResultType.MembraneStressEquivalent *= 120*

<a id="ResultType.MembraneStressIntensity"></a>

### ResultType.MembraneStressIntensity *= 122*

<a id="ResultType.MiddlePrincipalElasticStrain"></a>

### ResultType.MiddlePrincipalElasticStrain *= 15*

<a id="ResultType.MiddlePrincipalStress"></a>

### ResultType.MiddlePrincipalStress *= 3*

<a id="ResultType.MiddlePrincipalThermalStrain"></a>

### ResultType.MiddlePrincipalThermalStrain *= 55*

<a id="ResultType.MinimumBendingStress"></a>

### ResultType.MinimumBendingStress *= 110*

<a id="ResultType.MinimumCombinedStress"></a>

### ResultType.MinimumCombinedStress *= 112*

<a id="ResultType.MinimumPrincipalElasticStrain"></a>

### ResultType.MinimumPrincipalElasticStrain *= 16*

<a id="ResultType.MinimumPrincipalStress"></a>

### ResultType.MinimumPrincipalStress *= 4*

<a id="ResultType.MinimumPrincipalThermalStrain"></a>

### ResultType.MinimumPrincipalThermalStrain *= 56*

<a id="ResultType.MomentReactionTracker"></a>

### ResultType.MomentReactionTracker *= 247*

<a id="ResultType.MullinsDamageVariable"></a>

### ResultType.MullinsDamageVariable *= 274*

<a id="ResultType.MullinsMaximumPreviousStrainEnergy"></a>

### ResultType.MullinsMaximumPreviousStrainEnergy *= 275*

<a id="ResultType.NewtonRaphsonResidualCharge"></a>

### ResultType.NewtonRaphsonResidualCharge *= 399*

<a id="ResultType.NewtonRaphsonResidualForce"></a>

### ResultType.NewtonRaphsonResidualForce *= 85*

<a id="ResultType.NewtonRaphsonResidualHeat"></a>

### ResultType.NewtonRaphsonResidualHeat *= 87*

<a id="ResultType.NewtonRaphsonResidualMoment"></a>

### ResultType.NewtonRaphsonResidualMoment *= 86*

<a id="ResultType.NodalEulerXYAngle"></a>

### ResultType.NodalEulerXYAngle *= 201*

<a id="ResultType.NodalEulerXZAngle"></a>

### ResultType.NodalEulerXZAngle *= 203*

<a id="ResultType.NodalEulerYZNodal"></a>

### ResultType.NodalEulerYZNodal *= 202*

<a id="ResultType.NodalTriads"></a>

### ResultType.NodalTriads *= 204*

<a id="ResultType.NonLinearStabilizationEnergy"></a>

### ResultType.NonLinearStabilizationEnergy *= 402*

<a id="ResultType.NormalGasketPressure"></a>

### ResultType.NormalGasketPressure *= 236*

<a id="ResultType.NormalGasketTotalClosure"></a>

### ResultType.NormalGasketTotalClosure *= 239*

<a id="ResultType.PlasticWork"></a>

### ResultType.PlasticWork *= 176*

<a id="ResultType.Pressure"></a>

### ResultType.Pressure *= 194*

<a id="ResultType.ReturnLoss"></a>

### ResultType.ReturnLoss *= 371*

<a id="ResultType.SafetyFactor"></a>

### ResultType.SafetyFactor *= 30*

<a id="ResultType.SafetyFactorCompositeFailure"></a>

### ResultType.SafetyFactorCompositeFailure *= 322*

<a id="ResultType.SafetyFactorFatigue"></a>

### ResultType.SafetyFactorFatigue *= 61*

<a id="ResultType.SafetyMargin"></a>

### ResultType.SafetyMargin *= 29*

<a id="ResultType.ShapeFinder"></a>

### ResultType.ShapeFinder *= 47*

<a id="ResultType.ShapeFinderElemental"></a>

### ResultType.ShapeFinderElemental *= 185*

<a id="ResultType.ShearDamageVariable"></a>

### ResultType.ShearDamageVariable *= 286*

<a id="ResultType.ShearMomentDiagramMSUM"></a>

### ResultType.ShearMomentDiagramMSUM *= 231*

<a id="ResultType.ShearMomentDiagramMY"></a>

### ResultType.ShearMomentDiagramMY *= 225*

<a id="ResultType.ShearMomentDiagramMZ"></a>

### ResultType.ShearMomentDiagramMZ *= 226*

<a id="ResultType.ShearMomentDiagramUSUM"></a>

### ResultType.ShearMomentDiagramUSUM *= 233*

<a id="ResultType.ShearMomentDiagramUY"></a>

### ResultType.ShearMomentDiagramUY *= 229*

<a id="ResultType.ShearMomentDiagramUZ"></a>

### ResultType.ShearMomentDiagramUZ *= 230*

<a id="ResultType.ShearMomentDiagramVSUM"></a>

### ResultType.ShearMomentDiagramVSUM *= 232*

<a id="ResultType.ShearMomentDiagramVY"></a>

### ResultType.ShearMomentDiagramVY *= 227*

<a id="ResultType.ShearMomentDiagramVZ"></a>

### ResultType.ShearMomentDiagramVZ *= 228*

<a id="ResultType.ShellBendingStress11"></a>

### ResultType.ShellBendingStress11 *= 256*

<a id="ResultType.ShellBendingStress12"></a>

### ResultType.ShellBendingStress12 *= 258*

<a id="ResultType.ShellBendingStress22"></a>

### ResultType.ShellBendingStress22 *= 257*

<a id="ResultType.ShellBottomPeakStress11"></a>

### ResultType.ShellBottomPeakStress11 *= 259*

<a id="ResultType.ShellBottomPeakStress12"></a>

### ResultType.ShellBottomPeakStress12 *= 261*

<a id="ResultType.ShellBottomPeakStress22"></a>

### ResultType.ShellBottomPeakStress22 *= 260*

<a id="ResultType.ShellMembraneStress11"></a>

### ResultType.ShellMembraneStress11 *= 253*

<a id="ResultType.ShellMembraneStress12"></a>

### ResultType.ShellMembraneStress12 *= 255*

<a id="ResultType.ShellMembraneStress22"></a>

### ResultType.ShellMembraneStress22 *= 254*

<a id="ResultType.ShellTopPeakStress11"></a>

### ResultType.ShellTopPeakStress11 *= 262*

<a id="ResultType.ShellTopPeakStress12"></a>

### ResultType.ShellTopPeakStress12 *= 264*

<a id="ResultType.ShellTopPeakStress22"></a>

### ResultType.ShellTopPeakStress22 *= 263*

<a id="ResultType.SoundPressureLevel"></a>

### ResultType.SoundPressureLevel *= 358*

<a id="ResultType.SpringTrackerDampingForce"></a>

### ResultType.SpringTrackerDampingForce *= 293*

<a id="ResultType.SpringTrackerElasticForce"></a>

### ResultType.SpringTrackerElasticForce *= 292*

<a id="ResultType.SpringTrackerElongation"></a>

### ResultType.SpringTrackerElongation *= 290*

<a id="ResultType.SpringTrackerVelocity"></a>

### ResultType.SpringTrackerVelocity *= 291*

<a id="ResultType.StabilizationEnergy"></a>

### ResultType.StabilizationEnergy *= 244*

<a id="ResultType.StiffnessEnergy"></a>

### ResultType.StiffnessEnergy *= 140*

<a id="ResultType.StrainIntensity"></a>

### ResultType.StrainIntensity *= 18*

<a id="ResultType.StressIntensity"></a>

### ResultType.StressIntensity *= 6*

<a id="ResultType.StressRatio"></a>

### ResultType.StressRatio *= 31*

<a id="ResultType.StructuralError"></a>

### ResultType.StructuralError *= 116*

<a id="ResultType.StructuralStrainEnergy"></a>

### ResultType.StructuralStrainEnergy *= 136*

<a id="ResultType.Temperature"></a>

### ResultType.Temperature *= 49*

<a id="ResultType.ThermalError"></a>

### ResultType.ThermalError *= 117*

<a id="ResultType.ThermalStrainEnergy"></a>

### ResultType.ThermalStrainEnergy *= 137*

<a id="ResultType.TopologyDensity"></a>

### ResultType.TopologyDensity *= 338*

<a id="ResultType.TopologyElementalDensity"></a>

### ResultType.TopologyElementalDensity *= 335*

<a id="ResultType.TopologyMultiDensity"></a>

### ResultType.TopologyMultiDensity *= 411*

<a id="ResultType.TotalAcceleration"></a>

### ResultType.TotalAcceleration *= 79*

<a id="ResultType.TotalAxialForceDiagram"></a>

### ResultType.TotalAxialForceDiagram *= 208*

<a id="ResultType.TotalBendingMomentDiagram"></a>

### ResultType.TotalBendingMomentDiagram *= 213*

<a id="ResultType.TotalCurrentDensity"></a>

### ResultType.TotalCurrentDensity *= 149*

<a id="ResultType.TotalDeformation"></a>

### ResultType.TotalDeformation *= 25*

<a id="ResultType.TotalElectricFieldIntensity"></a>

### ResultType.TotalElectricFieldIntensity *= 145*

<a id="ResultType.TotalElectricFluxDensity"></a>

### ResultType.TotalElectricFluxDensity *= 141*

<a id="ResultType.TotalEnergy"></a>

### ResultType.TotalEnergy *= 174*

<a id="ResultType.TotalHeatFlux"></a>

### ResultType.TotalHeatFlux *= 50*

<a id="ResultType.TotalMagneticFieldIntensity"></a>

### ResultType.TotalMagneticFieldIntensity *= 92*

<a id="ResultType.TotalMagneticFluxDensity"></a>

### ResultType.TotalMagneticFluxDensity *= 88*

<a id="ResultType.TotalMagneticForces"></a>

### ResultType.TotalMagneticForces *= 96*

<a id="ResultType.TotalShearForce"></a>

### ResultType.TotalShearForce *= 223*

<a id="ResultType.TotalTorsionalMoment"></a>

### ResultType.TotalTorsionalMoment *= 218*

<a id="ResultType.TotalVelocity"></a>

### ResultType.TotalVelocity *= 124*

<a id="ResultType.TransmissionLoss"></a>

### ResultType.TransmissionLoss *= 369*

<a id="ResultType.VariableGraph"></a>

### ResultType.VariableGraph *= 67*

<a id="ResultType.VectorAxialForce"></a>

### ResultType.VectorAxialForce *= 209*

<a id="ResultType.VectorBendingMoment"></a>

### ResultType.VectorBendingMoment *= 214*

<a id="ResultType.VectorDeformation"></a>

### ResultType.VectorDeformation *= 75*

<a id="ResultType.VectorHeatFlux"></a>

### ResultType.VectorHeatFlux *= 76*

<a id="ResultType.VectorPrincipalElasticStrain"></a>

### ResultType.VectorPrincipalElasticStrain *= 78*

<a id="ResultType.VectorPrincipalStress"></a>

### ResultType.VectorPrincipalStress *= 77*

<a id="ResultType.VectorShearForce"></a>

### ResultType.VectorShearForce *= 224*

<a id="ResultType.VectorTorsionalMoment"></a>

### ResultType.VectorTorsionalMoment *= 219*

<a id="ResultType.VelocityWaterfallDiagram"></a>

### ResultType.VelocityWaterfallDiagram *= 405*

<a id="ResultType.Volume"></a>

### ResultType.Volume *= 382*

<a id="ResultType.XContactForce"></a>

### ResultType.XContactForce *= 186*

<a id="ResultType.XDirectionalAcceleration"></a>

### ResultType.XDirectionalAcceleration *= 80*

<a id="ResultType.XDirectionalAccelerationPSD"></a>

### ResultType.XDirectionalAccelerationPSD *= 131*

<a id="ResultType.XDirectionalAccelerationRS"></a>

### ResultType.XDirectionalAccelerationRS *= 170*

<a id="ResultType.XDirectionalAxialForce"></a>

### ResultType.XDirectionalAxialForce *= 205*

<a id="ResultType.XDirectionalBendingMoment"></a>

### ResultType.XDirectionalBendingMoment *= 210*

<a id="ResultType.XDirectionalCurrentDensity"></a>

### ResultType.XDirectionalCurrentDensity *= 150*

<a id="ResultType.XDirectionalDisplacement"></a>

### ResultType.XDirectionalDisplacement *= 26*

<a id="ResultType.XDirectionalElectricFieldIntensity"></a>

### ResultType.XDirectionalElectricFieldIntensity *= 146*

<a id="ResultType.XDirectionalElectricFluxDensity"></a>

### ResultType.XDirectionalElectricFluxDensity *= 142*

<a id="ResultType.XDirectionalHeatFlux"></a>

### ResultType.XDirectionalHeatFlux *= 51*

<a id="ResultType.XDirectionalMagneticFieldIntensity"></a>

### ResultType.XDirectionalMagneticFieldIntensity *= 93*

<a id="ResultType.XDirectionalMagneticFluxDensity"></a>

### ResultType.XDirectionalMagneticFluxDensity *= 89*

<a id="ResultType.XDirectionalShearForce"></a>

### ResultType.XDirectionalShearForce *= 220*

<a id="ResultType.XDirectionalTorsionalMoment"></a>

### ResultType.XDirectionalTorsionalMoment *= 215*

<a id="ResultType.XDirectionalVelocity"></a>

### ResultType.XDirectionalVelocity *= 125*

<a id="ResultType.XDirectionalVelocityPSD"></a>

### ResultType.XDirectionalVelocityPSD *= 128*

<a id="ResultType.XDirectionalVelocityRS"></a>

### ResultType.XDirectionalVelocityRS *= 167*

<a id="ResultType.XExternalForce"></a>

### ResultType.XExternalForce *= 189*

<a id="ResultType.XMomentum"></a>

### ResultType.XMomentum *= 177*

<a id="ResultType.XNormalElasticStrain"></a>

### ResultType.XNormalElasticStrain *= 19*

<a id="ResultType.XNormalStress"></a>

### ResultType.XNormalStress *= 7*

<a id="ResultType.XThermalStrain"></a>

### ResultType.XThermalStrain *= 57*

<a id="ResultType.XTotalMassAverageVelocity"></a>

### ResultType.XTotalMassAverageVelocity *= 180*

<a id="ResultType.XYShearElasticStrain"></a>

### ResultType.XYShearElasticStrain *= 22*

<a id="ResultType.XYShearGasketPressure"></a>

### ResultType.XYShearGasketPressure *= 237*

<a id="ResultType.XYShearGasketTotalClosure"></a>

### ResultType.XYShearGasketTotalClosure *= 240*

<a id="ResultType.XYShearStress"></a>

### ResultType.XYShearStress *= 10*

<a id="ResultType.XZShearElasticStrain"></a>

### ResultType.XZShearElasticStrain *= 24*

<a id="ResultType.XZShearGasketPressure"></a>

### ResultType.XZShearGasketPressure *= 238*

<a id="ResultType.XZShearGasketTotalClosure"></a>

### ResultType.XZShearGasketTotalClosure *= 241*

<a id="ResultType.XZShearStress"></a>

### ResultType.XZShearStress *= 12*

<a id="ResultType.YContactForce"></a>

### ResultType.YContactForce *= 187*

<a id="ResultType.YDirectionalAcceleration"></a>

### ResultType.YDirectionalAcceleration *= 81*

<a id="ResultType.YDirectionalAccelerationPSD"></a>

### ResultType.YDirectionalAccelerationPSD *= 132*

<a id="ResultType.YDirectionalAccelerationRS"></a>

### ResultType.YDirectionalAccelerationRS *= 171*

<a id="ResultType.YDirectionalAxialForce"></a>

### ResultType.YDirectionalAxialForce *= 206*

<a id="ResultType.YDirectionalBendingMoment"></a>

### ResultType.YDirectionalBendingMoment *= 211*

<a id="ResultType.YDirectionalCurrentDensity"></a>

### ResultType.YDirectionalCurrentDensity *= 151*

<a id="ResultType.YDirectionalDisplacement"></a>

### ResultType.YDirectionalDisplacement *= 27*

<a id="ResultType.YDirectionalElectricFieldIntensity"></a>

### ResultType.YDirectionalElectricFieldIntensity *= 147*

<a id="ResultType.YDirectionalElectricFluxDensity"></a>

### ResultType.YDirectionalElectricFluxDensity *= 143*

<a id="ResultType.YDirectionalHeatFlux"></a>

### ResultType.YDirectionalHeatFlux *= 52*

<a id="ResultType.YDirectionalMagneticFieldIntensity"></a>

### ResultType.YDirectionalMagneticFieldIntensity *= 94*

<a id="ResultType.YDirectionalMagneticFluxDensity"></a>

### ResultType.YDirectionalMagneticFluxDensity *= 90*

<a id="ResultType.YDirectionalShearForce"></a>

### ResultType.YDirectionalShearForce *= 221*

<a id="ResultType.YDirectionalTorsionalMoment"></a>

### ResultType.YDirectionalTorsionalMoment *= 216*

<a id="ResultType.YDirectionalVelocity"></a>

### ResultType.YDirectionalVelocity *= 126*

<a id="ResultType.YDirectionalVelocityPSD"></a>

### ResultType.YDirectionalVelocityPSD *= 129*

<a id="ResultType.YDirectionalVelocityRS"></a>

### ResultType.YDirectionalVelocityRS *= 168*

<a id="ResultType.YExternalForce"></a>

### ResultType.YExternalForce *= 190*

<a id="ResultType.YMomentum"></a>

### ResultType.YMomentum *= 178*

<a id="ResultType.YNormalElasticStrain"></a>

### ResultType.YNormalElasticStrain *= 20*

<a id="ResultType.YNormalStress"></a>

### ResultType.YNormalStress *= 8*

<a id="ResultType.YThermalStrain"></a>

### ResultType.YThermalStrain *= 58*

<a id="ResultType.YTotalMassAverageVelocity"></a>

### ResultType.YTotalMassAverageVelocity *= 181*

<a id="ResultType.YZShearElasticStrain"></a>

### ResultType.YZShearElasticStrain *= 23*

<a id="ResultType.YZShearStress"></a>

### ResultType.YZShearStress *= 11*

<a id="ResultType.ZContactForce"></a>

### ResultType.ZContactForce *= 188*

<a id="ResultType.ZDirectionalAcceleration"></a>

### ResultType.ZDirectionalAcceleration *= 82*

<a id="ResultType.ZDirectionalAccelerationRS"></a>

### ResultType.ZDirectionalAccelerationRS *= 172*

<a id="ResultType.ZDirectionalAxialForce"></a>

### ResultType.ZDirectionalAxialForce *= 207*

<a id="ResultType.ZDirectionalBendingMoment"></a>

### ResultType.ZDirectionalBendingMoment *= 212*

<a id="ResultType.ZDirectionalCurrentDensity"></a>

### ResultType.ZDirectionalCurrentDensity *= 152*

<a id="ResultType.ZDirectionalDisplacement"></a>

### ResultType.ZDirectionalDisplacement *= 28*

<a id="ResultType.ZDirectionalElectricFieldIntensity"></a>

### ResultType.ZDirectionalElectricFieldIntensity *= 148*

<a id="ResultType.ZDirectionalElectricFluxDensity"></a>

### ResultType.ZDirectionalElectricFluxDensity *= 144*

<a id="ResultType.ZDirectionalHeatFlux"></a>

### ResultType.ZDirectionalHeatFlux *= 53*

<a id="ResultType.ZDirectionalMagneticFieldIntensity"></a>

### ResultType.ZDirectionalMagneticFieldIntensity *= 95*

<a id="ResultType.ZDirectionalMagneticFluxDensity"></a>

### ResultType.ZDirectionalMagneticFluxDensity *= 91*

<a id="ResultType.ZDirectionalShearForce"></a>

### ResultType.ZDirectionalShearForce *= 222*

<a id="ResultType.ZDirectionalTorsionalMoment"></a>

### ResultType.ZDirectionalTorsionalMoment *= 217*

<a id="ResultType.ZDirectionalVelocity"></a>

### ResultType.ZDirectionalVelocity *= 127*

<a id="ResultType.ZDirectionalVelocityPSD"></a>

### ResultType.ZDirectionalVelocityPSD *= 130*

<a id="ResultType.ZDirectionalVelocityRS"></a>

### ResultType.ZDirectionalVelocityRS *= 169*

<a id="ResultType.ZExternalForce"></a>

### ResultType.ZExternalForce *= 191*

<a id="ResultType.ZMomentum"></a>

### ResultType.ZMomentum *= 179*

<a id="ResultType.ZNormalElasticStrain"></a>

### ResultType.ZNormalElasticStrain *= 21*

<a id="ResultType.ZNormalStress"></a>

### ResultType.ZNormalStress *= 9*

<a id="ResultType.ZThermalStrain"></a>

### ResultType.ZThermalStrain *= 59*

<a id="ResultType.ZTotalMassAverageVelocity"></a>

### ResultType.ZTotalMassAverageVelocity *= 182*

<a id="ResultType.ZdirectionalAccelerationPSD"></a>

### ResultType.ZdirectionalAccelerationPSD *= 133*


