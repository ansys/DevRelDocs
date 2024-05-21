# ResultType

<a id="ResultType"></a>

### *class* ResultType

Bases: [`enum.Enum`](https://docs.python.org/3/library/enum.html#enum.Enum)

> Specifies the ResultType.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Attributes

| Name |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`AccelerationWaterfallDiagram`](../../../ACT/Automation/Mechanical/Results/FrequencyResponseResults/AccelerationWaterfallDiagram.md#AccelerationWaterfallDiagram) |
| [`AccumulatedEquivalentPlasticStrain`](../../../ACT/Automation/Mechanical/Results/StrainResults/AccumulatedEquivalentPlasticStrain.md#AccumulatedEquivalentPlasticStrain) |
| [`AbsorptionCoefficient`](#ResultType.AbsorptionCoefficient) |
| [`DiffuseSoundTransmissionLoss`](#ResultType.DiffuseSoundTransmissionLoss) |
| [`EquivalentRadiatedPower`](../../../ACT/Automation/Mechanical/Results/FrequencyResponseResults/EquivalentRadiatedPower.md#EquivalentRadiatedPower) |
| [`EquivalentRadiatedPowerLevel`](../../../ACT/Automation/Mechanical/Results/FrequencyResponseResults/EquivalentRadiatedPowerLevel.md#EquivalentRadiatedPowerLevel) |
| [`EquivalentRadiatedPowerLevelWaterfallDiagram`](../../../ACT/Automation/Mechanical/Results/FrequencyResponseResults/EquivalentRadiatedPowerLevelWaterfallDiagram.md#EquivalentRadiatedPowerLevelWaterfallDiagram) |
| [`EquivalentRadiatedPowerWaterfallDiagram`](../../../ACT/Automation/Mechanical/Results/FrequencyResponseResults/EquivalentRadiatedPowerWaterfallDiagram.md#EquivalentRadiatedPowerWaterfallDiagram) |
| [`FarFieldDirectivity`](#ResultType.FarFieldDirectivity) |
| [`FarFieldMaximumPressure`](#ResultType.FarFieldMaximumPressure) |
| [`FarFieldMaximumPressureMic`](#ResultType.FarFieldMaximumPressureMic) |
| [`FarFieldMaximumScatteredPressure`](#ResultType.FarFieldMaximumScatteredPressure) |
| [`FarFieldPhase`](#ResultType.FarFieldPhase) |
| [`FarFieldPhaseMic`](#ResultType.FarFieldPhaseMic) |
| [`FarFieldSoundPowerLevel`](#ResultType.FarFieldSoundPowerLevel) |
| [`AcousticFarFieldSoundPowerLevelWaterfallDiagram`](../../../ACT/Automation/Mechanical/Results/AcousticResults/AcousticFarFieldSoundPowerLevelWaterfallDiagram.md#AcousticFarFieldSoundPowerLevelWaterfallDiagram) |
| [`FarFieldSPL`](#ResultType.FarFieldSPL) |
| [`FarFieldSPLMic`](#ResultType.FarFieldSPLMic) |
| [`AcousticFarFieldSPLMicWaterfallDiagram`](../../../ACT/Automation/Mechanical/Results/AcousticResults/AcousticFarFieldSPLMicWaterfallDiagram.md#AcousticFarFieldSPLMicWaterfallDiagram) |
| [`FarFieldTargetStrength`](#ResultType.FarFieldTargetStrength) |
| [`FarFieldAWeightedSPL`](#ResultType.FarFieldAWeightedSPL) |
| [`FarFieldAWeightedSPLMic`](#ResultType.FarFieldAWeightedSPLMic) |
| [`ReturnLoss`](#ResultType.ReturnLoss) |
| [`TransmissionLoss`](#ResultType.TransmissionLoss) |
| [`FrequencyBandSPL`](#ResultType.FrequencyBandSPL) |
| [`SoundPressureLevel`](#ResultType.SoundPressureLevel) |
| [`AWeightedFrequencyBandSPL`](#ResultType.AWeightedFrequencyBandSPL) |
| [`AWeightedSoundPressureLevel`](#ResultType.AWeightedSoundPressureLevel) |
| [`ArtificialEnergy`](#ResultType.ArtificialEnergy) |
| [`BendingStressEquivalent`](../../../ACT/Automation/Mechanical/Results/StressResults/BendingStressEquivalent.md#BendingStressEquivalent) |
| [`BendingStressIntensity`](../../../ACT/Automation/Mechanical/Results/StressResults/BendingStressIntensity.md#BendingStressIntensity) |
| [`FatigueResultBiaxialityIndication`](#ResultType.FatigueResultBiaxialityIndication) |
| [`BoltAdjustment`](../../../ACT/Automation/Mechanical/Results/BoltToolResults/BoltAdjustment.md#BoltAdjustment) |
| [`BoltWorkingLoad`](../../../ACT/Automation/Mechanical/Results/BoltToolResults/BoltWorkingLoad.md#BoltWorkingLoad) |
| [`ContactChattering`](#ResultType.ContactChattering) |
| [`ContactContactingArea`](#ResultType.ContactContactingArea) |
| [`ContactFluidPressure`](../../../ACT/Automation/Mechanical/Results/ContactToolResults/ContactFluidPressure.md#ContactFluidPressure) |
| [`ContactFrictionalStress`](../../../ACT/Automation/Mechanical/Results/ContactToolResults/ContactFrictionalStress.md#ContactFrictionalStress) |
| [`ContactGap`](../../../ACT/Automation/Mechanical/Results/ContactToolResults/ContactGap.md#ContactGap) |
| [`ContactHeatFlux`](../../../ACT/Automation/Mechanical/Results/ContactToolResults/ContactHeatFlux.md#ContactHeatFlux) |
| [`ContactMaximumDampingPressure`](#ResultType.ContactMaximumDampingPressure) |
| [`ContactMaxiumGeometricSlidingDistance`](#ResultType.ContactMaxiumGeometricSlidingDistance) |
| [`ContactMaximumNormalStiffness`](#ResultType.ContactMaximumNormalStiffness) |
| [`ContactMaximumTangentialStiffness`](#ResultType.ContactMaximumTangentialStiffness) |
| [`ContactMinimumGeometricSlidingDistance`](#ResultType.ContactMinimumGeometricSlidingDistance) |
| [`ContactMinimumTangentialStiffness`](#ResultType.ContactMinimumTangentialStiffness) |
| [`ContactNumberContacting`](#ResultType.ContactNumberContacting) |
| [`ContactNumberSticking`](#ResultType.ContactNumberSticking) |
| [`ContactPenetration`](../../../ACT/Automation/Mechanical/Results/ContactToolResults/ContactPenetration.md#ContactPenetration) |
| [`ContactPressure`](../../../ACT/Automation/Mechanical/Results/ContactToolResults/ContactPressure.md#ContactPressure) |
| [`ContactResultingPinball`](#ResultType.ContactResultingPinball) |
| [`ContactSlidingDistance`](../../../ACT/Automation/Mechanical/Results/ContactToolResults/ContactSlidingDistance.md#ContactSlidingDistance) |
| [`ContactStatus`](../../../ACT/Automation/Mechanical/Results/ContactToolResults/ContactStatus.md#ContactStatus) |
| [`CurrentDensity`](../../../ACT/Automation/Mechanical/Results/ElectromagneticResults/CurrentDensity.md#CurrentDensity) |
| [`FatigueDamage`](../../../ACT/Automation/Mechanical/Results/FatigueToolResults/FatigueDamage.md#FatigueDamage) |
| [`DamageStatus`](../../../ACT/Automation/Mechanical/Results/DamageResults/DamageStatus.md#DamageStatus) |
| [`MullinsDamageVariable`](../../../ACT/Automation/Mechanical/Results/DamageResults/MullinsDamageVariable.md#MullinsDamageVariable) |
| [`DampingEnergy`](#ResultType.DampingEnergy) |
| [`VectorDeformation`](../../../ACT/Automation/Mechanical/Results/DeformationResults/VectorDeformation.md#VectorDeformation) |
| [`TotalDeformation`](../../../ACT/Automation/Mechanical/Results/DeformationResults/TotalDeformation.md#TotalDeformation) |
| [`Density`](#ResultType.Density) |
| [`DirectStress`](../../../ACT/Automation/Mechanical/Results/BeamToolResults/DirectStress.md#DirectStress) |
| [`EquivalentElasticStrain`](../../../ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrain.md#EquivalentElasticStrain) |
| [`EquivalentElasticStrainRST`](../../../ACT/Automation/Mechanical/Results/StrainResults/EquivalentElasticStrainRST.md#EquivalentElasticStrainRST) |
| [`EquivalentStress`](../../../ACT/Automation/Mechanical/Results/StressResults/EquivalentStress.md#EquivalentStress) |
| [`EquivalentStressPSD`](../../../ACT/Automation/Mechanical/Results/StressResults/EquivalentStressPSD.md#EquivalentStressPSD) |
| [`EquivalentStressRS`](../../../ACT/Automation/Mechanical/Results/StressResults/EquivalentStressRS.md#EquivalentStressRS) |
| [`JouleHeat`](../../../ACT/Automation/Mechanical/Results/ElectricResults/JouleHeat.md#JouleHeat) |
| [`ElectricVoltage`](../../../ACT/Automation/Mechanical/Results/ElectricResults/ElectricVoltage.md#ElectricVoltage) |
| [`ElectricPotential`](../../../ACT/Automation/Mechanical/Results/ElectromagneticResults/ElectricPotential.md#ElectricPotential) |
| [`Volume`](../../../ACT/Automation/Mechanical/Results/Volume.md#Volume) |
| [`ElementalStrainEnergy`](../../../ACT/Automation/Mechanical/Results/EnergyResults/ElementalStrainEnergy.md#ElementalStrainEnergy) |
| [`EnergyDissipatedPerUnitVolume`](../../../ACT/Automation/Mechanical/Results/DamageResults/EnergyDissipatedPerUnitVolume.md#EnergyDissipatedPerUnitVolume) |
| [`EquivalentCreepStrain`](../../../ACT/Automation/Mechanical/Results/StrainResults/EquivalentCreepStrain.md#EquivalentCreepStrain) |
| [`EquivalentCreepStrainRST`](../../../ACT/Automation/Mechanical/Results/StrainResults/EquivalentCreepStrainRST.md#EquivalentCreepStrainRST) |
| [`EquivalentPlasticStrain`](../../../ACT/Automation/Mechanical/Results/StrainResults/EquivalentPlasticStrain.md#EquivalentPlasticStrain) |
| [`EquivalentPlasticStrainRST`](../../../ACT/Automation/Mechanical/Results/StrainResults/EquivalentPlasticStrainRST.md#EquivalentPlasticStrainRST) |
| [`EquivalentTotalStrainRST`](#ResultType.EquivalentTotalStrainRST) |
| [`MagneticError`](../../../ACT/Automation/Mechanical/Results/ElectromagneticResults/MagneticError.md#MagneticError) |
| [`StructuralError`](../../../ACT/Automation/Mechanical/Results/StressResults/StructuralError.md#StructuralError) |
| [`ThermalError`](../../../ACT/Automation/Mechanical/Results/ThermalResults/ThermalError.md#ThermalError) |
| [`FactorReserveInverseCompositeFailure`](#ResultType.FactorReserveInverseCompositeFailure) |
| [`SafetyFactorCompositeFailure`](#ResultType.SafetyFactorCompositeFailure) |
| [`SafetyFactorFatigue`](#ResultType.SafetyFactorFatigue) |
| [`SafetyFactor`](#ResultType.SafetyFactor) |
| [`FatigueEquivalentReversedStress`](#ResultType.FatigueEquivalentReversedStress) |
| [`Hysteresis`](#ResultType.Hysteresis) |
| [`FatigueSensitivity`](../../../ACT/Automation/Mechanical/Results/FatigueToolResults/FatigueSensitivity.md#FatigueSensitivity) |
| [`FiberCompressiveDamageVariable`](../../../ACT/Automation/Mechanical/Results/DamageResults/FiberCompressiveDamageVariable.md#FiberCompressiveDamageVariable) |
| [`FiberCompressiveFailureCriterion`](../../../ACT/Automation/Mechanical/Results/DamageResults/FiberCompressiveFailureCriterion.md#FiberCompressiveFailureCriterion) |
| [`FiberTensileDamageVariable`](../../../ACT/Automation/Mechanical/Results/DamageResults/FiberTensileDamageVariable.md#FiberTensileDamageVariable) |
| [`FiberTensileFailureCriterion`](../../../ACT/Automation/Mechanical/Results/DamageResults/FiberTensileFailureCriterion.md#FiberTensileFailureCriterion) |
| [`FluidFlowRate`](../../../ACT/Automation/Mechanical/Results/ThermalResults/FluidFlowRate.md#FluidFlowRate) |
| [`FluidHeatConductionRate`](../../../ACT/Automation/Mechanical/Results/ThermalResults/FluidHeatConductionRate.md#FluidHeatConductionRate) |
| [`FluidHeatTransportRate`](../../../ACT/Automation/Mechanical/Results/ThermalResults/FluidHeatTransportRate.md#FluidHeatTransportRate) |
| [`ForceReaction`](../../../ACT/Automation/Mechanical/Results/ProbeResults/ForceReaction.md#ForceReaction) |
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
| [`NormalGasketPressure`](../../../ACT/Automation/Mechanical/Results/GasketResults/NormalGasketPressure.md#NormalGasketPressure) |
| [`XYShearGasketPressure`](#ResultType.XYShearGasketPressure) |
| [`XZShearGasketPressure`](#ResultType.XZShearGasketPressure) |
| [`NormalGasketTotalClosure`](../../../ACT/Automation/Mechanical/Results/GasketResults/NormalGasketTotalClosure.md#NormalGasketTotalClosure) |
| [`XYShearGasketTotalClosure`](#ResultType.XYShearGasketTotalClosure) |
| [`XZShearGasketTotalClosure`](#ResultType.XZShearGasketTotalClosure) |
| [`MiddlePrincipalElasticStrain`](../../../ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalElasticStrain.md#MiddlePrincipalElasticStrain) |
| [`MiddlePrincipalStress`](../../../ACT/Automation/Mechanical/Results/StressResults/MiddlePrincipalStress.md#MiddlePrincipalStress) |
| [`MiddlePrincipalThermalStrain`](../../../ACT/Automation/Mechanical/Results/StrainResults/MiddlePrincipalThermalStrain.md#MiddlePrincipalThermalStrain) |
| [`KineticEnergy`](#ResultType.KineticEnergy) |
| [`LatticeElementalDensity`](../../../ACT/Automation/Mechanical/Results/LatticeElementalDensity.md#LatticeElementalDensity) |
| [`LatticeDensity`](../../../ACT/Automation/Mechanical/Results/LatticeDensity.md#LatticeDensity) |
| [`FatigueLife`](../../../ACT/Automation/Mechanical/Results/FatigueToolResults/FatigueLife.md#FatigueLife) |
| [`LinePressure`](../../../ACT/Automation/Mechanical/BoundaryConditions/LinePressure.md#LinePressure) |
| [`LSDYNAGeneralTracker`](../../../ACT/Automation/Mechanical/Results/ResultTrackers/LSDYNAGeneralTracker.md#LSDYNAGeneralTracker) |
| [`MagneticCoenergy`](../../../ACT/Automation/Mechanical/Results/MagneticCoenergy.md#MagneticCoenergy) |
| [`MarginSafetyCompositeFailure`](#ResultType.MarginSafetyCompositeFailure) |
| [`SafetyMargin`](#ResultType.SafetyMargin) |
| [`MatrixCompressiveDamageVariable`](../../../ACT/Automation/Mechanical/Results/DamageResults/MatrixCompressiveDamageVariable.md#MatrixCompressiveDamageVariable) |
| [`MatrixCompressiveFailureCriterion`](../../../ACT/Automation/Mechanical/Results/DamageResults/MatrixCompressiveFailureCriterion.md#MatrixCompressiveFailureCriterion) |
| [`MatrixTensileDamageVariable`](../../../ACT/Automation/Mechanical/Results/DamageResults/MatrixTensileDamageVariable.md#MatrixTensileDamageVariable) |
| [`MatrixTensileFailureCriterion`](../../../ACT/Automation/Mechanical/Results/DamageResults/MatrixTensileFailureCriterion.md#MatrixTensileFailureCriterion) |
| [`MaximumBendingStress`](../../../ACT/Automation/Mechanical/Results/BeamToolResults/MaximumBendingStress.md#MaximumBendingStress) |
| [`MaximumCombinedStress`](../../../ACT/Automation/Mechanical/Results/BeamToolResults/MaximumCombinedStress.md#MaximumCombinedStress) |
| [`MaximumFailureCriteria`](../../../ACT/Automation/Mechanical/Results/DamageResults/MaximumFailureCriteria.md#MaximumFailureCriteria) |
| [`MullinsMaximumPreviousStrainEnergy`](../../../ACT/Automation/Mechanical/Results/DamageResults/MullinsMaximumPreviousStrainEnergy.md#MullinsMaximumPreviousStrainEnergy) |
| [`MaximumPrincipalElasticStrain`](../../../ACT/Automation/Mechanical/Results/StrainResults/MaximumPrincipalElasticStrain.md#MaximumPrincipalElasticStrain) |
| [`MaximumPrincipalStress`](../../../ACT/Automation/Mechanical/Results/StressResults/MaximumPrincipalStress.md#MaximumPrincipalStress) |
| [`MaximumPrincipalThermalStrain`](../../../ACT/Automation/Mechanical/Results/StrainResults/MaximumPrincipalThermalStrain.md#MaximumPrincipalThermalStrain) |
| [`MaximumShearElasticStrain`](../../../ACT/Automation/Mechanical/Results/StrainResults/MaximumShearElasticStrain.md#MaximumShearElasticStrain) |
| [`MaximumShearStress`](../../../ACT/Automation/Mechanical/Results/StressResults/MaximumShearStress.md#MaximumShearStress) |
| [`MCFWaterfallDiagram`](../../../ACT/Automation/Mechanical/Results/FrequencyResponseResults/MCFWaterfallDiagram.md#MCFWaterfallDiagram) |
| [`MembraneStressEquivalent`](../../../ACT/Automation/Mechanical/Results/StressResults/MembraneStressEquivalent.md#MembraneStressEquivalent) |
| [`MembraneStressIntensity`](../../../ACT/Automation/Mechanical/Results/StressResults/MembraneStressIntensity.md#MembraneStressIntensity) |
| [`MinimumBendingStress`](../../../ACT/Automation/Mechanical/Results/BeamToolResults/MinimumBendingStress.md#MinimumBendingStress) |
| [`MinimumCombinedStress`](../../../ACT/Automation/Mechanical/Results/BeamToolResults/MinimumCombinedStress.md#MinimumCombinedStress) |
| [`MinimumPrincipalElasticStrain`](../../../ACT/Automation/Mechanical/Results/StrainResults/MinimumPrincipalElasticStrain.md#MinimumPrincipalElasticStrain) |
| [`MinimumPrincipalStress`](../../../ACT/Automation/Mechanical/Results/StressResults/MinimumPrincipalStress.md#MinimumPrincipalStress) |
| [`MinimumPrincipalThermalStrain`](#ResultType.MinimumPrincipalThermalStrain) |
| [`MomentReactionTracker`](../../../ACT/Automation/Mechanical/Results/ResultTrackers/MomentReactionTracker.md#MomentReactionTracker) |
| [`NonLinearStabilizationEnergy`](#ResultType.NonLinearStabilizationEnergy) |
| [`NewtonRaphsonResidualCharge`](../../../ACT/Automation/Mechanical/Results/NewtonRaphsonResidualCharge.md#NewtonRaphsonResidualCharge) |
| [`NewtonRaphsonResidualForce`](../../../ACT/Automation/Mechanical/Results/NewtonRaphsonResidualForce.md#NewtonRaphsonResidualForce) |
| [`NewtonRaphsonResidualHeat`](../../../ACT/Automation/Mechanical/Results/NewtonRaphsonResidualHeat.md#NewtonRaphsonResidualHeat) |
| [`NewtonRaphsonResidualMoment`](../../../ACT/Automation/Mechanical/Results/NewtonRaphsonResidualMoment.md#NewtonRaphsonResidualMoment) |
| [`VariableGraph`](../../../ACT/Automation/Mechanical/Results/VariableGraph.md#VariableGraph) |
| [`PlasticWork`](#ResultType.PlasticWork) |
| [`Pressure`](../../../ACT/Automation/Mechanical/BoundaryConditions/Pressure.md#Pressure) |
| [`VectorPrincipalElasticStrain`](../../../ACT/Automation/Mechanical/Results/StrainResults/VectorPrincipalElasticStrain.md#VectorPrincipalElasticStrain) |
| [`VectorPrincipalStress`](../../../ACT/Automation/Mechanical/Results/StressResults/VectorPrincipalStress.md#VectorPrincipalStress) |
| [`CampbellDiagram`](../../../ACT/Automation/Mechanical/Results/ResultTrackers/CampbellDiagram.md#CampbellDiagram) |
| [`ShearDamageVariable`](../../../ACT/Automation/Mechanical/Results/DamageResults/ShearDamageVariable.md#ShearDamageVariable) |
| [`ShearMomentDiagramMSUM`](#ResultType.ShearMomentDiagramMSUM) |
| [`ShearMomentDiagramMY`](#ResultType.ShearMomentDiagramMY) |
| [`ShearMomentDiagramMZ`](#ResultType.ShearMomentDiagramMZ) |
| [`ShearMomentDiagramVSUM`](#ResultType.ShearMomentDiagramVSUM) |
| [`ShearMomentDiagramVY`](#ResultType.ShearMomentDiagramVY) |
| [`ShearMomentDiagramVZ`](#ResultType.ShearMomentDiagramVZ) |
| [`ShearMomentDiagramUSUM`](#ResultType.ShearMomentDiagramUSUM) |
| [`ShearMomentDiagramUY`](#ResultType.ShearMomentDiagramUY) |
| [`ShearMomentDiagramUZ`](#ResultType.ShearMomentDiagramUZ) |
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
| [`SpringTrackerDampingForce`](#ResultType.SpringTrackerDampingForce) |
| [`SpringTrackerElasticForce`](#ResultType.SpringTrackerElasticForce) |
| [`SpringTrackerElongation`](#ResultType.SpringTrackerElongation) |
| [`SpringTrackerVelocity`](#ResultType.SpringTrackerVelocity) |
| [`StabilizationEnergy`](../../../ACT/Automation/Mechanical/Results/EnergyResults/StabilizationEnergy.md#StabilizationEnergy) |
| [`StiffnessEnergy`](#ResultType.StiffnessEnergy) |
| [`StrainIntensity`](#ResultType.StrainIntensity) |
| [`StressIntensity`](../../../ACT/Automation/Mechanical/Results/StressResults/StressIntensity.md#StressIntensity) |
| [`StressRatio`](../../../ACT/Automation/Mechanical/Results/StressToolResults/StressRatio.md#StressRatio) |
| [`StructuralStrainEnergy`](../../../ACT/Automation/Mechanical/Results/EnergyResults/StructuralStrainEnergy.md#StructuralStrainEnergy) |
| [`Temperature`](../../../ACT/Automation/Mechanical/BoundaryConditions/Temperature.md#Temperature) |
| [`ThermalStrainEnergy`](../../../ACT/Automation/Mechanical/Results/EnergyResults/ThermalStrainEnergy.md#ThermalStrainEnergy) |
| [`TotalHeatFlux`](../../../ACT/Automation/Mechanical/Results/ThermalResults/TotalHeatFlux.md#TotalHeatFlux) |
| [`VectorHeatFlux`](../../../ACT/Automation/Mechanical/Results/ThermalResults/VectorHeatFlux.md#VectorHeatFlux) |
| [`TopologyElementalDensity`](../../../ACT/Automation/Mechanical/Results/TopologyElementalDensity.md#TopologyElementalDensity) |
| [`TopologyDensity`](../../../ACT/Automation/Mechanical/Results/TopologyDensity.md#TopologyDensity) |
| [`TotalAcceleration`](../../../ACT/Automation/Mechanical/Results/DeformationResults/TotalAcceleration.md#TotalAcceleration) |
| [`TotalAxialForceDiagram`](#ResultType.TotalAxialForceDiagram) |
| [`TotalBendingMomentDiagram`](#ResultType.TotalBendingMomentDiagram) |
| [`TotalCurrentDensity`](../../../ACT/Automation/Mechanical/Results/ElectricResults/TotalCurrentDensity.md#TotalCurrentDensity) |
| [`TotalElectricFieldIntensity`](../../../ACT/Automation/Mechanical/Results/ElectricResults/TotalElectricFieldIntensity.md#TotalElectricFieldIntensity) |
| [`TotalElectricFluxDensity`](../../../ACT/Automation/Mechanical/Results/ElectricResults/TotalElectricFluxDensity.md#TotalElectricFluxDensity) |
| [`TotalEnergy`](#ResultType.TotalEnergy) |
| [`TotalMagneticFieldIntensity`](../../../ACT/Automation/Mechanical/Results/ElectromagneticResults/TotalMagneticFieldIntensity.md#TotalMagneticFieldIntensity) |
| [`TotalMagneticFluxDensity`](../../../ACT/Automation/Mechanical/Results/ElectromagneticResults/TotalMagneticFluxDensity.md#TotalMagneticFluxDensity) |
| [`TotalMagneticForces`](#ResultType.TotalMagneticForces) |
| [`TotalShearForce`](../../../ACT/Automation/Mechanical/Results/BeamResults/TotalShearForce.md#TotalShearForce) |
| [`TotalTorsionalMoment`](../../../ACT/Automation/Mechanical/Results/BeamResults/TotalTorsionalMoment.md#TotalTorsionalMoment) |
| [`TotalVelocity`](../../../ACT/Automation/Mechanical/Results/DeformationResults/TotalVelocity.md#TotalVelocity) |
| [`VectorAxialForce`](../../../ACT/Automation/Mechanical/Results/BeamResults/VectorAxialForce.md#VectorAxialForce) |
| [`VectorBendingMoment`](../../../ACT/Automation/Mechanical/Results/BeamResults/VectorBendingMoment.md#VectorBendingMoment) |
| [`ElementalTriads`](../../../ACT/Automation/Mechanical/Results/CoordinateSystemsResults/ElementalTriads.md#ElementalTriads) |
| [`NodalTriads`](../../../ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalTriads.md#NodalTriads) |
| [`VectorShearForce`](../../../ACT/Automation/Mechanical/Results/BeamResults/VectorShearForce.md#VectorShearForce) |
| [`VectorTorsionalMoment`](../../../ACT/Automation/Mechanical/Results/BeamResults/VectorTorsionalMoment.md#VectorTorsionalMoment) |
| [`VelocityWaterfallDiagram`](../../../ACT/Automation/Mechanical/Results/FrequencyResponseResults/VelocityWaterfallDiagram.md#VelocityWaterfallDiagram) |
| [`ShapeFinder`](../../../ACT/Automation/Mechanical/Results/ShapeFinder.md#ShapeFinder) |
| [`ShapeFinderElemental`](../../../ACT/Automation/Mechanical/Results/ShapeFinderElemental.md#ShapeFinderElemental) |
| [`XDirectionalAcceleration`](#ResultType.XDirectionalAcceleration) |
| [`XDirectionalAccelerationPSD`](#ResultType.XDirectionalAccelerationPSD) |
| [`XDirectionalAccelerationRS`](#ResultType.XDirectionalAccelerationRS) |
| [`XDirectionalAxialForce`](#ResultType.XDirectionalAxialForce) |
| [`XDirectionalBendingMoment`](#ResultType.XDirectionalBendingMoment) |
| [`XContactForce`](#ResultType.XContactForce) |
| [`XDirectionalDisplacement`](#ResultType.XDirectionalDisplacement) |
| [`XDirectionalCurrentDensity`](#ResultType.XDirectionalCurrentDensity) |
| [`XDirectionalElectricFieldIntensity`](#ResultType.XDirectionalElectricFieldIntensity) |
| [`XDirectionalElectricFluxDensity`](#ResultType.XDirectionalElectricFluxDensity) |
| [`ElementalEulerXYAngle`](../../../ACT/Automation/Mechanical/Results/CoordinateSystemsResults/ElementalEulerXYAngle.md#ElementalEulerXYAngle) |
| [`XExternalForce`](#ResultType.XExternalForce) |
| [`XDirectionalMagneticFieldIntensity`](#ResultType.XDirectionalMagneticFieldIntensity) |
| [`XDirectionalMagneticFluxDensity`](#ResultType.XDirectionalMagneticFluxDensity) |
| [`MagneticXDirectionalForces`](#ResultType.MagneticXDirectionalForces) |
| [`XMomentum`](#ResultType.XMomentum) |
| [`NodalEulerXYAngle`](../../../ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXYAngle.md#NodalEulerXYAngle) |
| [`XDirectionalShearForce`](#ResultType.XDirectionalShearForce) |
| [`XNormalElasticStrain`](#ResultType.XNormalElasticStrain) |
| [`XNormalStress`](#ResultType.XNormalStress) |
| [`XDirectionalHeatFlux`](#ResultType.XDirectionalHeatFlux) |
| [`XThermalStrain`](#ResultType.XThermalStrain) |
| [`XDirectionalTorsionalMoment`](#ResultType.XDirectionalTorsionalMoment) |
| [`XTotalMassAverageVelocity`](#ResultType.XTotalMassAverageVelocity) |
| [`XDirectionalVelocity`](#ResultType.XDirectionalVelocity) |
| [`XDirectionalVelocityPSD`](#ResultType.XDirectionalVelocityPSD) |
| [`XDirectionalVelocityRS`](#ResultType.XDirectionalVelocityRS) |
| [`XYShearElasticStrain`](#ResultType.XYShearElasticStrain) |
| [`XYShearStress`](#ResultType.XYShearStress) |
| [`XZShearElasticStrain`](#ResultType.XZShearElasticStrain) |
| [`XZShearStress`](#ResultType.XZShearStress) |
| [`YDirectionalAcceleration`](#ResultType.YDirectionalAcceleration) |
| [`YDirectionalAccelerationPSD`](#ResultType.YDirectionalAccelerationPSD) |
| [`YDirectionalAccelerationRS`](#ResultType.YDirectionalAccelerationRS) |
| [`YDirectionalAxialForce`](#ResultType.YDirectionalAxialForce) |
| [`YDirectionalBendingMoment`](#ResultType.YDirectionalBendingMoment) |
| [`YContactForce`](#ResultType.YContactForce) |
| [`YDirectionalDisplacement`](#ResultType.YDirectionalDisplacement) |
| [`YDirectionalCurrentDensity`](#ResultType.YDirectionalCurrentDensity) |
| [`YDirectionalElectricFieldIntensity`](#ResultType.YDirectionalElectricFieldIntensity) |
| [`YDirectionalElectricFluxDensity`](#ResultType.YDirectionalElectricFluxDensity) |
| [`ElementalEulerYZAngle`](../../../ACT/Automation/Mechanical/Results/CoordinateSystemsResults/ElementalEulerYZAngle.md#ElementalEulerYZAngle) |
| [`YExternalForce`](#ResultType.YExternalForce) |
| [`YDirectionalMagneticFieldIntensity`](#ResultType.YDirectionalMagneticFieldIntensity) |
| [`YDirectionalMagneticFluxDensity`](#ResultType.YDirectionalMagneticFluxDensity) |
| [`MagneticYDirectionalForces`](#ResultType.MagneticYDirectionalForces) |
| [`YMomentum`](#ResultType.YMomentum) |
| [`NodalEulerYZNodal`](#ResultType.NodalEulerYZNodal) |
| [`YDirectionalShearForce`](#ResultType.YDirectionalShearForce) |
| [`YNormalElasticStrain`](#ResultType.YNormalElasticStrain) |
| [`YNormalStress`](#ResultType.YNormalStress) |
| [`YDirectionalHeatFlux`](#ResultType.YDirectionalHeatFlux) |
| [`YThermalStrain`](#ResultType.YThermalStrain) |
| [`YDirectionalTorsionalMoment`](#ResultType.YDirectionalTorsionalMoment) |
| [`YTotalMassAverageVelocity`](#ResultType.YTotalMassAverageVelocity) |
| [`YDirectionalVelocity`](#ResultType.YDirectionalVelocity) |
| [`YDirectionalVelocityPSD`](#ResultType.YDirectionalVelocityPSD) |
| [`YDirectionalVelocityRS`](#ResultType.YDirectionalVelocityRS) |
| [`YZShearElasticStrain`](#ResultType.YZShearElasticStrain) |
| [`YZShearStress`](#ResultType.YZShearStress) |
| [`ZDirectionalAcceleration`](#ResultType.ZDirectionalAcceleration) |
| [`ZdirectionalAccelerationPSD`](#ResultType.ZdirectionalAccelerationPSD) |
| [`ZDirectionalAccelerationRS`](#ResultType.ZDirectionalAccelerationRS) |
| [`ZDirectionalAxialForce`](#ResultType.ZDirectionalAxialForce) |
| [`ZDirectionalBendingMoment`](#ResultType.ZDirectionalBendingMoment) |
| [`ZContactForce`](#ResultType.ZContactForce) |
| [`ZDirectionalDisplacement`](#ResultType.ZDirectionalDisplacement) |
| [`ZDirectionalCurrentDensity`](#ResultType.ZDirectionalCurrentDensity) |
| [`ZDirectionalElectricFieldIntensity`](#ResultType.ZDirectionalElectricFieldIntensity) |
| [`ZDirectionalElectricFluxDensity`](#ResultType.ZDirectionalElectricFluxDensity) |
| [`ElementalEulerXZAngle`](../../../ACT/Automation/Mechanical/Results/CoordinateSystemsResults/ElementalEulerXZAngle.md#ElementalEulerXZAngle) |
| [`ZExternalForce`](#ResultType.ZExternalForce) |
| [`ZDirectionalMagneticFieldIntensity`](#ResultType.ZDirectionalMagneticFieldIntensity) |
| [`ZDirectionalMagneticFluxDensity`](#ResultType.ZDirectionalMagneticFluxDensity) |
| [`MagneticZDirectionalForces`](#ResultType.MagneticZDirectionalForces) |
| [`MagneticPotential`](../../../ACT/Automation/Mechanical/Results/MagneticPotential.md#MagneticPotential) |
| [`ZMomentum`](#ResultType.ZMomentum) |
| [`NodalEulerXZAngle`](../../../ACT/Automation/Mechanical/Results/CoordinateSystemsResults/NodalEulerXZAngle.md#NodalEulerXZAngle) |
| [`ZDirectionalShearForce`](#ResultType.ZDirectionalShearForce) |
| [`ZNormalElasticStrain`](#ResultType.ZNormalElasticStrain) |
| [`ZNormalStress`](#ResultType.ZNormalStress) |
| [`ZDirectionalHeatFlux`](#ResultType.ZDirectionalHeatFlux) |
| [`ZThermalStrain`](#ResultType.ZThermalStrain) |
| [`ZDirectionalTorsionalMoment`](#ResultType.ZDirectionalTorsionalMoment) |
| [`ZTotalMassAverageVelocity`](#ResultType.ZTotalMassAverageVelocity) |
| [`ZDirectionalVelocity`](#ResultType.ZDirectionalVelocity) |
| [`ZDirectionalVelocityPSD`](#ResultType.ZDirectionalVelocityPSD) |
| [`ZDirectionalVelocityRS`](#ResultType.ZDirectionalVelocityRS) |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.DataModel.Enums import ResultType
```

<a id="attribute-detail"></a>

## Attribute detail

<a id="ResultType.AccelerationWaterfallDiagram"></a>

### ResultType.AccelerationWaterfallDiagram *= 406*

<a id="ResultType.AccumulatedEquivalentPlasticStrain"></a>

### ResultType.AccumulatedEquivalentPlasticStrain *= 386*

<a id="ResultType.AbsorptionCoefficient"></a>

### ResultType.AbsorptionCoefficient *= 370*

<a id="ResultType.DiffuseSoundTransmissionLoss"></a>

### ResultType.DiffuseSoundTransmissionLoss *= 377*

<a id="ResultType.EquivalentRadiatedPower"></a>

### ResultType.EquivalentRadiatedPower *= 378*

<a id="ResultType.EquivalentRadiatedPowerLevel"></a>

### ResultType.EquivalentRadiatedPowerLevel *= 379*

<a id="ResultType.EquivalentRadiatedPowerLevelWaterfallDiagram"></a>

### ResultType.EquivalentRadiatedPowerLevelWaterfallDiagram *= 385*

<a id="ResultType.EquivalentRadiatedPowerWaterfallDiagram"></a>

### ResultType.EquivalentRadiatedPowerWaterfallDiagram *= 384*

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

<a id="ResultType.FarFieldSoundPowerLevel"></a>

### ResultType.FarFieldSoundPowerLevel *= 357*

<a id="ResultType.AcousticFarFieldSoundPowerLevelWaterfallDiagram"></a>

### ResultType.AcousticFarFieldSoundPowerLevelWaterfallDiagram *= 387*

<a id="ResultType.FarFieldSPL"></a>

### ResultType.FarFieldSPL *= 350*

<a id="ResultType.FarFieldSPLMic"></a>

### ResultType.FarFieldSPLMic *= 372*

<a id="ResultType.AcousticFarFieldSPLMicWaterfallDiagram"></a>

### ResultType.AcousticFarFieldSPLMicWaterfallDiagram *= 388*

<a id="ResultType.FarFieldTargetStrength"></a>

### ResultType.FarFieldTargetStrength *= 356*

<a id="ResultType.FarFieldAWeightedSPL"></a>

### ResultType.FarFieldAWeightedSPL *= 351*

<a id="ResultType.FarFieldAWeightedSPLMic"></a>

### ResultType.FarFieldAWeightedSPLMic *= 373*

<a id="ResultType.ReturnLoss"></a>

### ResultType.ReturnLoss *= 371*

<a id="ResultType.TransmissionLoss"></a>

### ResultType.TransmissionLoss *= 369*

<a id="ResultType.FrequencyBandSPL"></a>

### ResultType.FrequencyBandSPL *= 360*

<a id="ResultType.SoundPressureLevel"></a>

### ResultType.SoundPressureLevel *= 358*

<a id="ResultType.AWeightedFrequencyBandSPL"></a>

### ResultType.AWeightedFrequencyBandSPL *= 361*

<a id="ResultType.AWeightedSoundPressureLevel"></a>

### ResultType.AWeightedSoundPressureLevel *= 359*

<a id="ResultType.ArtificialEnergy"></a>

### ResultType.ArtificialEnergy *= 401*

<a id="ResultType.BendingStressEquivalent"></a>

### ResultType.BendingStressEquivalent *= 121*

<a id="ResultType.BendingStressIntensity"></a>

### ResultType.BendingStressIntensity *= 123*

<a id="ResultType.FatigueResultBiaxialityIndication"></a>

### ResultType.FatigueResultBiaxialityIndication *= 63*

<a id="ResultType.BoltAdjustment"></a>

### ResultType.BoltAdjustment *= 294*

<a id="ResultType.BoltWorkingLoad"></a>

### ResultType.BoltWorkingLoad *= 295*

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

<a id="ResultType.ContactMaxiumGeometricSlidingDistance"></a>

### ResultType.ContactMaxiumGeometricSlidingDistance *= 289*

<a id="ResultType.ContactMaximumNormalStiffness"></a>

### ResultType.ContactMaximumNormalStiffness *= 103*

<a id="ResultType.ContactMaximumTangentialStiffness"></a>

### ResultType.ContactMaximumTangentialStiffness *= 104*

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

<a id="ResultType.FatigueDamage"></a>

### ResultType.FatigueDamage *= 62*

<a id="ResultType.DamageStatus"></a>

### ResultType.DamageStatus *= 281*

<a id="ResultType.MullinsDamageVariable"></a>

### ResultType.MullinsDamageVariable *= 274*

<a id="ResultType.DampingEnergy"></a>

### ResultType.DampingEnergy *= 400*

<a id="ResultType.VectorDeformation"></a>

### ResultType.VectorDeformation *= 75*

<a id="ResultType.TotalDeformation"></a>

### ResultType.TotalDeformation *= 25*

<a id="ResultType.Density"></a>

### ResultType.Density *= 195*

<a id="ResultType.DirectStress"></a>

### ResultType.DirectStress *= 109*

<a id="ResultType.EquivalentElasticStrain"></a>

### ResultType.EquivalentElasticStrain *= 13*

<a id="ResultType.EquivalentElasticStrainRST"></a>

### ResultType.EquivalentElasticStrainRST *= 250*

<a id="ResultType.EquivalentStress"></a>

### ResultType.EquivalentStress *= 1*

<a id="ResultType.EquivalentStressPSD"></a>

### ResultType.EquivalentStressPSD *= 138*

<a id="ResultType.EquivalentStressRS"></a>

### ResultType.EquivalentStressRS *= 173*

<a id="ResultType.JouleHeat"></a>

### ResultType.JouleHeat *= 154*

<a id="ResultType.ElectricVoltage"></a>

### ResultType.ElectricVoltage *= 153*

<a id="ResultType.ElectricPotential"></a>

### ResultType.ElectricPotential *= 114*

<a id="ResultType.Volume"></a>

### ResultType.Volume *= 382*

<a id="ResultType.ElementalStrainEnergy"></a>

### ResultType.ElementalStrainEnergy *= 135*

<a id="ResultType.EnergyDissipatedPerUnitVolume"></a>

### ResultType.EnergyDissipatedPerUnitVolume *= 287*

<a id="ResultType.EquivalentCreepStrain"></a>

### ResultType.EquivalentCreepStrain *= 242*

<a id="ResultType.EquivalentCreepStrainRST"></a>

### ResultType.EquivalentCreepStrainRST *= 252*

<a id="ResultType.EquivalentPlasticStrain"></a>

### ResultType.EquivalentPlasticStrain *= 84*

<a id="ResultType.EquivalentPlasticStrainRST"></a>

### ResultType.EquivalentPlasticStrainRST *= 251*

<a id="ResultType.EquivalentTotalStrainRST"></a>

### ResultType.EquivalentTotalStrainRST *= 243*

<a id="ResultType.MagneticError"></a>

### ResultType.MagneticError *= 134*

<a id="ResultType.StructuralError"></a>

### ResultType.StructuralError *= 116*

<a id="ResultType.ThermalError"></a>

### ResultType.ThermalError *= 117*

<a id="ResultType.FactorReserveInverseCompositeFailure"></a>

### ResultType.FactorReserveInverseCompositeFailure *= 321*

<a id="ResultType.SafetyFactorCompositeFailure"></a>

### ResultType.SafetyFactorCompositeFailure *= 322*

<a id="ResultType.SafetyFactorFatigue"></a>

### ResultType.SafetyFactorFatigue *= 61*

<a id="ResultType.SafetyFactor"></a>

### ResultType.SafetyFactor *= 30*

<a id="ResultType.FatigueEquivalentReversedStress"></a>

### ResultType.FatigueEquivalentReversedStress *= 74*

<a id="ResultType.Hysteresis"></a>

### ResultType.Hysteresis *= 115*

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

<a id="ResultType.NormalGasketPressure"></a>

### ResultType.NormalGasketPressure *= 236*

<a id="ResultType.XYShearGasketPressure"></a>

### ResultType.XYShearGasketPressure *= 237*

<a id="ResultType.XZShearGasketPressure"></a>

### ResultType.XZShearGasketPressure *= 238*

<a id="ResultType.NormalGasketTotalClosure"></a>

### ResultType.NormalGasketTotalClosure *= 239*

<a id="ResultType.XYShearGasketTotalClosure"></a>

### ResultType.XYShearGasketTotalClosure *= 240*

<a id="ResultType.XZShearGasketTotalClosure"></a>

### ResultType.XZShearGasketTotalClosure *= 241*

<a id="ResultType.MiddlePrincipalElasticStrain"></a>

### ResultType.MiddlePrincipalElasticStrain *= 15*

<a id="ResultType.MiddlePrincipalStress"></a>

### ResultType.MiddlePrincipalStress *= 3*

<a id="ResultType.MiddlePrincipalThermalStrain"></a>

### ResultType.MiddlePrincipalThermalStrain *= 55*

<a id="ResultType.KineticEnergy"></a>

### ResultType.KineticEnergy *= 139*

<a id="ResultType.LatticeElementalDensity"></a>

### ResultType.LatticeElementalDensity *= 380*

<a id="ResultType.LatticeDensity"></a>

### ResultType.LatticeDensity *= 381*

<a id="ResultType.FatigueLife"></a>

### ResultType.FatigueLife *= 60*

<a id="ResultType.LinePressure"></a>

### ResultType.LinePressure *= 396*

<a id="ResultType.LSDYNAGeneralTracker"></a>

### ResultType.LSDYNAGeneralTracker *= 403*

<a id="ResultType.MagneticCoenergy"></a>

### ResultType.MagneticCoenergy *= 193*

<a id="ResultType.MarginSafetyCompositeFailure"></a>

### ResultType.MarginSafetyCompositeFailure *= 323*

<a id="ResultType.SafetyMargin"></a>

### ResultType.SafetyMargin *= 29*

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

<a id="ResultType.MullinsMaximumPreviousStrainEnergy"></a>

### ResultType.MullinsMaximumPreviousStrainEnergy *= 275*

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

<a id="ResultType.MCFWaterfallDiagram"></a>

### ResultType.MCFWaterfallDiagram *= 404*

<a id="ResultType.MembraneStressEquivalent"></a>

### ResultType.MembraneStressEquivalent *= 120*

<a id="ResultType.MembraneStressIntensity"></a>

### ResultType.MembraneStressIntensity *= 122*

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

<a id="ResultType.NonLinearStabilizationEnergy"></a>

### ResultType.NonLinearStabilizationEnergy *= 402*

<a id="ResultType.NewtonRaphsonResidualCharge"></a>

### ResultType.NewtonRaphsonResidualCharge *= 399*

<a id="ResultType.NewtonRaphsonResidualForce"></a>

### ResultType.NewtonRaphsonResidualForce *= 85*

<a id="ResultType.NewtonRaphsonResidualHeat"></a>

### ResultType.NewtonRaphsonResidualHeat *= 87*

<a id="ResultType.NewtonRaphsonResidualMoment"></a>

### ResultType.NewtonRaphsonResidualMoment *= 86*

<a id="ResultType.VariableGraph"></a>

### ResultType.VariableGraph *= 67*

<a id="ResultType.PlasticWork"></a>

### ResultType.PlasticWork *= 176*

<a id="ResultType.Pressure"></a>

### ResultType.Pressure *= 194*

<a id="ResultType.VectorPrincipalElasticStrain"></a>

### ResultType.VectorPrincipalElasticStrain *= 78*

<a id="ResultType.VectorPrincipalStress"></a>

### ResultType.VectorPrincipalStress *= 77*

<a id="ResultType.CampbellDiagram"></a>

### ResultType.CampbellDiagram *= 248*

<a id="ResultType.ShearDamageVariable"></a>

### ResultType.ShearDamageVariable *= 286*

<a id="ResultType.ShearMomentDiagramMSUM"></a>

### ResultType.ShearMomentDiagramMSUM *= 231*

<a id="ResultType.ShearMomentDiagramMY"></a>

### ResultType.ShearMomentDiagramMY *= 225*

<a id="ResultType.ShearMomentDiagramMZ"></a>

### ResultType.ShearMomentDiagramMZ *= 226*

<a id="ResultType.ShearMomentDiagramVSUM"></a>

### ResultType.ShearMomentDiagramVSUM *= 232*

<a id="ResultType.ShearMomentDiagramVY"></a>

### ResultType.ShearMomentDiagramVY *= 227*

<a id="ResultType.ShearMomentDiagramVZ"></a>

### ResultType.ShearMomentDiagramVZ *= 228*

<a id="ResultType.ShearMomentDiagramUSUM"></a>

### ResultType.ShearMomentDiagramUSUM *= 233*

<a id="ResultType.ShearMomentDiagramUY"></a>

### ResultType.ShearMomentDiagramUY *= 229*

<a id="ResultType.ShearMomentDiagramUZ"></a>

### ResultType.ShearMomentDiagramUZ *= 230*

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

<a id="ResultType.StructuralStrainEnergy"></a>

### ResultType.StructuralStrainEnergy *= 136*

<a id="ResultType.Temperature"></a>

### ResultType.Temperature *= 49*

<a id="ResultType.ThermalStrainEnergy"></a>

### ResultType.ThermalStrainEnergy *= 137*

<a id="ResultType.TotalHeatFlux"></a>

### ResultType.TotalHeatFlux *= 50*

<a id="ResultType.VectorHeatFlux"></a>

### ResultType.VectorHeatFlux *= 76*

<a id="ResultType.TopologyElementalDensity"></a>

### ResultType.TopologyElementalDensity *= 335*

<a id="ResultType.TopologyDensity"></a>

### ResultType.TopologyDensity *= 338*

<a id="ResultType.TotalAcceleration"></a>

### ResultType.TotalAcceleration *= 79*

<a id="ResultType.TotalAxialForceDiagram"></a>

### ResultType.TotalAxialForceDiagram *= 208*

<a id="ResultType.TotalBendingMomentDiagram"></a>

### ResultType.TotalBendingMomentDiagram *= 213*

<a id="ResultType.TotalCurrentDensity"></a>

### ResultType.TotalCurrentDensity *= 149*

<a id="ResultType.TotalElectricFieldIntensity"></a>

### ResultType.TotalElectricFieldIntensity *= 145*

<a id="ResultType.TotalElectricFluxDensity"></a>

### ResultType.TotalElectricFluxDensity *= 141*

<a id="ResultType.TotalEnergy"></a>

### ResultType.TotalEnergy *= 174*

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

<a id="ResultType.VectorAxialForce"></a>

### ResultType.VectorAxialForce *= 209*

<a id="ResultType.VectorBendingMoment"></a>

### ResultType.VectorBendingMoment *= 214*

<a id="ResultType.ElementalTriads"></a>

### ResultType.ElementalTriads *= 200*

<a id="ResultType.NodalTriads"></a>

### ResultType.NodalTriads *= 204*

<a id="ResultType.VectorShearForce"></a>

### ResultType.VectorShearForce *= 224*

<a id="ResultType.VectorTorsionalMoment"></a>

### ResultType.VectorTorsionalMoment *= 219*

<a id="ResultType.VelocityWaterfallDiagram"></a>

### ResultType.VelocityWaterfallDiagram *= 405*

<a id="ResultType.ShapeFinder"></a>

### ResultType.ShapeFinder *= 47*

<a id="ResultType.ShapeFinderElemental"></a>

### ResultType.ShapeFinderElemental *= 185*

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

<a id="ResultType.XContactForce"></a>

### ResultType.XContactForce *= 186*

<a id="ResultType.XDirectionalDisplacement"></a>

### ResultType.XDirectionalDisplacement *= 26*

<a id="ResultType.XDirectionalCurrentDensity"></a>

### ResultType.XDirectionalCurrentDensity *= 150*

<a id="ResultType.XDirectionalElectricFieldIntensity"></a>

### ResultType.XDirectionalElectricFieldIntensity *= 146*

<a id="ResultType.XDirectionalElectricFluxDensity"></a>

### ResultType.XDirectionalElectricFluxDensity *= 142*

<a id="ResultType.ElementalEulerXYAngle"></a>

### ResultType.ElementalEulerXYAngle *= 197*

<a id="ResultType.XExternalForce"></a>

### ResultType.XExternalForce *= 189*

<a id="ResultType.XDirectionalMagneticFieldIntensity"></a>

### ResultType.XDirectionalMagneticFieldIntensity *= 93*

<a id="ResultType.XDirectionalMagneticFluxDensity"></a>

### ResultType.XDirectionalMagneticFluxDensity *= 89*

<a id="ResultType.MagneticXDirectionalForces"></a>

### ResultType.MagneticXDirectionalForces *= 97*

<a id="ResultType.XMomentum"></a>

### ResultType.XMomentum *= 177*

<a id="ResultType.NodalEulerXYAngle"></a>

### ResultType.NodalEulerXYAngle *= 201*

<a id="ResultType.XDirectionalShearForce"></a>

### ResultType.XDirectionalShearForce *= 220*

<a id="ResultType.XNormalElasticStrain"></a>

### ResultType.XNormalElasticStrain *= 19*

<a id="ResultType.XNormalStress"></a>

### ResultType.XNormalStress *= 7*

<a id="ResultType.XDirectionalHeatFlux"></a>

### ResultType.XDirectionalHeatFlux *= 51*

<a id="ResultType.XThermalStrain"></a>

### ResultType.XThermalStrain *= 57*

<a id="ResultType.XDirectionalTorsionalMoment"></a>

### ResultType.XDirectionalTorsionalMoment *= 215*

<a id="ResultType.XTotalMassAverageVelocity"></a>

### ResultType.XTotalMassAverageVelocity *= 180*

<a id="ResultType.XDirectionalVelocity"></a>

### ResultType.XDirectionalVelocity *= 125*

<a id="ResultType.XDirectionalVelocityPSD"></a>

### ResultType.XDirectionalVelocityPSD *= 128*

<a id="ResultType.XDirectionalVelocityRS"></a>

### ResultType.XDirectionalVelocityRS *= 167*

<a id="ResultType.XYShearElasticStrain"></a>

### ResultType.XYShearElasticStrain *= 22*

<a id="ResultType.XYShearStress"></a>

### ResultType.XYShearStress *= 10*

<a id="ResultType.XZShearElasticStrain"></a>

### ResultType.XZShearElasticStrain *= 24*

<a id="ResultType.XZShearStress"></a>

### ResultType.XZShearStress *= 12*

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

<a id="ResultType.YContactForce"></a>

### ResultType.YContactForce *= 187*

<a id="ResultType.YDirectionalDisplacement"></a>

### ResultType.YDirectionalDisplacement *= 27*

<a id="ResultType.YDirectionalCurrentDensity"></a>

### ResultType.YDirectionalCurrentDensity *= 151*

<a id="ResultType.YDirectionalElectricFieldIntensity"></a>

### ResultType.YDirectionalElectricFieldIntensity *= 147*

<a id="ResultType.YDirectionalElectricFluxDensity"></a>

### ResultType.YDirectionalElectricFluxDensity *= 143*

<a id="ResultType.ElementalEulerYZAngle"></a>

### ResultType.ElementalEulerYZAngle *= 198*

<a id="ResultType.YExternalForce"></a>

### ResultType.YExternalForce *= 190*

<a id="ResultType.YDirectionalMagneticFieldIntensity"></a>

### ResultType.YDirectionalMagneticFieldIntensity *= 94*

<a id="ResultType.YDirectionalMagneticFluxDensity"></a>

### ResultType.YDirectionalMagneticFluxDensity *= 90*

<a id="ResultType.MagneticYDirectionalForces"></a>

### ResultType.MagneticYDirectionalForces *= 98*

<a id="ResultType.YMomentum"></a>

### ResultType.YMomentum *= 178*

<a id="ResultType.NodalEulerYZNodal"></a>

### ResultType.NodalEulerYZNodal *= 202*

<a id="ResultType.YDirectionalShearForce"></a>

### ResultType.YDirectionalShearForce *= 221*

<a id="ResultType.YNormalElasticStrain"></a>

### ResultType.YNormalElasticStrain *= 20*

<a id="ResultType.YNormalStress"></a>

### ResultType.YNormalStress *= 8*

<a id="ResultType.YDirectionalHeatFlux"></a>

### ResultType.YDirectionalHeatFlux *= 52*

<a id="ResultType.YThermalStrain"></a>

### ResultType.YThermalStrain *= 58*

<a id="ResultType.YDirectionalTorsionalMoment"></a>

### ResultType.YDirectionalTorsionalMoment *= 216*

<a id="ResultType.YTotalMassAverageVelocity"></a>

### ResultType.YTotalMassAverageVelocity *= 181*

<a id="ResultType.YDirectionalVelocity"></a>

### ResultType.YDirectionalVelocity *= 126*

<a id="ResultType.YDirectionalVelocityPSD"></a>

### ResultType.YDirectionalVelocityPSD *= 129*

<a id="ResultType.YDirectionalVelocityRS"></a>

### ResultType.YDirectionalVelocityRS *= 168*

<a id="ResultType.YZShearElasticStrain"></a>

### ResultType.YZShearElasticStrain *= 23*

<a id="ResultType.YZShearStress"></a>

### ResultType.YZShearStress *= 11*

<a id="ResultType.ZDirectionalAcceleration"></a>

### ResultType.ZDirectionalAcceleration *= 82*

<a id="ResultType.ZdirectionalAccelerationPSD"></a>

### ResultType.ZdirectionalAccelerationPSD *= 133*

<a id="ResultType.ZDirectionalAccelerationRS"></a>

### ResultType.ZDirectionalAccelerationRS *= 172*

<a id="ResultType.ZDirectionalAxialForce"></a>

### ResultType.ZDirectionalAxialForce *= 207*

<a id="ResultType.ZDirectionalBendingMoment"></a>

### ResultType.ZDirectionalBendingMoment *= 212*

<a id="ResultType.ZContactForce"></a>

### ResultType.ZContactForce *= 188*

<a id="ResultType.ZDirectionalDisplacement"></a>

### ResultType.ZDirectionalDisplacement *= 28*

<a id="ResultType.ZDirectionalCurrentDensity"></a>

### ResultType.ZDirectionalCurrentDensity *= 152*

<a id="ResultType.ZDirectionalElectricFieldIntensity"></a>

### ResultType.ZDirectionalElectricFieldIntensity *= 148*

<a id="ResultType.ZDirectionalElectricFluxDensity"></a>

### ResultType.ZDirectionalElectricFluxDensity *= 144*

<a id="ResultType.ElementalEulerXZAngle"></a>

### ResultType.ElementalEulerXZAngle *= 199*

<a id="ResultType.ZExternalForce"></a>

### ResultType.ZExternalForce *= 191*

<a id="ResultType.ZDirectionalMagneticFieldIntensity"></a>

### ResultType.ZDirectionalMagneticFieldIntensity *= 95*

<a id="ResultType.ZDirectionalMagneticFluxDensity"></a>

### ResultType.ZDirectionalMagneticFluxDensity *= 91*

<a id="ResultType.MagneticZDirectionalForces"></a>

### ResultType.MagneticZDirectionalForces *= 99*

<a id="ResultType.MagneticPotential"></a>

### ResultType.MagneticPotential *= 192*

<a id="ResultType.ZMomentum"></a>

### ResultType.ZMomentum *= 179*

<a id="ResultType.NodalEulerXZAngle"></a>

### ResultType.NodalEulerXZAngle *= 203*

<a id="ResultType.ZDirectionalShearForce"></a>

### ResultType.ZDirectionalShearForce *= 222*

<a id="ResultType.ZNormalElasticStrain"></a>

### ResultType.ZNormalElasticStrain *= 21*

<a id="ResultType.ZNormalStress"></a>

### ResultType.ZNormalStress *= 9*

<a id="ResultType.ZDirectionalHeatFlux"></a>

### ResultType.ZDirectionalHeatFlux *= 53*

<a id="ResultType.ZThermalStrain"></a>

### ResultType.ZThermalStrain *= 59*

<a id="ResultType.ZDirectionalTorsionalMoment"></a>

### ResultType.ZDirectionalTorsionalMoment *= 217*

<a id="ResultType.ZTotalMassAverageVelocity"></a>

### ResultType.ZTotalMassAverageVelocity *= 182*

<a id="ResultType.ZDirectionalVelocity"></a>

### ResultType.ZDirectionalVelocity *= 127*

<a id="ResultType.ZDirectionalVelocityPSD"></a>

### ResultType.ZDirectionalVelocityPSD *= 130*

<a id="ResultType.ZDirectionalVelocityRS"></a>

### ResultType.ZDirectionalVelocityRS *= 169*
