# `Solution`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Solution"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Solution

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Solution.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#Solution.Activate)                                                                                     | Activate the current object.                                                                                                 |
| [`AddAccelerationFrequencyResponse`](#Solution.AddAccelerationFrequencyResponse)                                     | Creates a new AccelerationFrequencyResponse                                                                                  |
| [`AddAccelerationPhaseResponse`](#Solution.AddAccelerationPhaseResponse)                                             | Creates a new AccelerationPhaseResponse                                                                                      |
| [`AddAccelerationProbe`](#Solution.AddAccelerationProbe)                                                             | Creates a new AccelerationProbe                                                                                              |
| [`AddAccelerationWaterfallDiagram`](#Solution.AddAccelerationWaterfallDiagram)                                       | Creates a new AccelerationWaterfallDiagram                                                                                   |
| [`AddAccumulatedEquivalentPlasticStrain`](#Solution.AddAccumulatedEquivalentPlasticStrain)                           | Creates a new AccumulatedEquivalentPlasticStrain                                                                             |
| [`AddAcousticAWeightedSPLFrequencyResponse`](#Solution.AddAcousticAWeightedSPLFrequencyResponse)                     | Creates a new AcousticAWeightedSPLFrequencyResponse                                                                          |
| [`AddAcousticAWeightedSoundPressureLevel`](#Solution.AddAcousticAWeightedSoundPressureLevel)                         | Creates a new AcousticAWeightedSoundPressureLevel                                                                            |
| [`AddAcousticAbsorptionCoefficient`](#Solution.AddAcousticAbsorptionCoefficient)                                     | Creates a new AcousticAbsorptionCoefficient                                                                                  |
| [`AddAcousticDiffuseSoundTransmissionLoss`](#Solution.AddAcousticDiffuseSoundTransmissionLoss)                       | Creates a new AcousticDiffuseSoundTransmissionLoss                                                                           |
| [`AddAcousticDirectionalVelocityResult`](#Solution.AddAcousticDirectionalVelocityResult)                             | Creates a new AcousticDirectionalVelocityResult                                                                              |
| [`AddAcousticFarFieldAWeightedSPL`](#Solution.AddAcousticFarFieldAWeightedSPL)                                       | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldAWeightedSPLMic`](#Solution.AddAcousticFarFieldAWeightedSPLMic)                                 | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldDirectivity`](#Solution.AddAcousticFarFieldDirectivity)                                         | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldMaximumPressure`](#Solution.AddAcousticFarFieldMaximumPressure)                                 | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldMaximumPressureMic`](#Solution.AddAcousticFarFieldMaximumPressureMic)                           | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldMaximumScatteredPressure`](#Solution.AddAcousticFarFieldMaximumScatteredPressure)               | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldPhase`](#Solution.AddAcousticFarFieldPhase)                                                     | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldPhaseMic`](#Solution.AddAcousticFarFieldPhaseMic)                                               | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldSPL`](#Solution.AddAcousticFarFieldSPL)                                                         | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldSPLMic`](#Solution.AddAcousticFarFieldSPLMic)                                                   | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldSPLMicWaterfallDiagram`](#Solution.AddAcousticFarFieldSPLMicWaterfallDiagram)                   | Creates a new AcousticFarFieldSPLMicWaterfallDiagram                                                                         |
| [`AddAcousticFarFieldSoundPowerLevel`](#Solution.AddAcousticFarFieldSoundPowerLevel)                                 | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldSoundPowerLevelWaterfallDiagram`](#Solution.AddAcousticFarFieldSoundPowerLevelWaterfallDiagram) | Creates a new AcousticFarFieldSoundPowerLevelWaterfallDiagram                                                                |
| [`AddAcousticFarFieldTargetStrength`](#Solution.AddAcousticFarFieldTargetStrength)                                   | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFrequencyBandAWeightedSPL`](#Solution.AddAcousticFrequencyBandAWeightedSPL)                             | Creates a new AcousticFrequencyBandAWeightedSPL                                                                              |
| [`AddAcousticFrequencyBandSPL`](#Solution.AddAcousticFrequencyBandSPL)                                               | Creates a new AcousticFrequencyBandSPL                                                                                       |
| [`AddAcousticKineticEnergy`](#Solution.AddAcousticKineticEnergy)                                                     | Creates a new AcousticKineticEnergy                                                                                          |
| [`AddAcousticKineticEnergyFrequencyResponse`](#Solution.AddAcousticKineticEnergyFrequencyResponse)                   | Creates a new AcousticKineticEnergyFrequencyResponse                                                                         |
| [`AddAcousticPotentialEnergy`](#Solution.AddAcousticPotentialEnergy)                                                 | Creates a new AcousticPotentialEnergy                                                                                        |
| [`AddAcousticPotentialEnergyFrequencyResponse`](#Solution.AddAcousticPotentialEnergyFrequencyResponse)               | Creates a new AcousticPotentialEnergyFrequencyResponse                                                                       |
| [`AddAcousticPressureFrequencyResponse`](#Solution.AddAcousticPressureFrequencyResponse)                             | Creates a new AcousticPressureFrequencyResponse                                                                              |
| [`AddAcousticPressureResult`](#Solution.AddAcousticPressureResult)                                                   | Creates a new AcousticPressureResult                                                                                         |
| [`AddAcousticReturnLoss`](#Solution.AddAcousticReturnLoss)                                                           | Creates a new AcousticReturnLoss                                                                                             |
| [`AddAcousticSPLFrequencyResponse`](#Solution.AddAcousticSPLFrequencyResponse)                                       | Creates a new AcousticSPLFrequencyResponse                                                                                   |
| [`AddAcousticSoundPressureLevel`](#Solution.AddAcousticSoundPressureLevel)                                           | Creates a new AcousticSoundPressureLevel                                                                                     |
| [`AddAcousticTotalVelocityResult`](#Solution.AddAcousticTotalVelocityResult)                                         | Creates a new AcousticTotalVelocityResult                                                                                    |
| [`AddAcousticTransmissionLoss`](#Solution.AddAcousticTransmissionLoss)                                               | Creates a new AcousticTransmissionLoss                                                                                       |
| [`AddAcousticVelocityFrequencyResponse`](#Solution.AddAcousticVelocityFrequencyResponse)                             | Creates a new AcousticVelocityFrequencyResponse                                                                              |
| [`AddAngularAccelerationProbe`](#Solution.AddAngularAccelerationProbe)                                               | Creates a new AngularAccelerationProbe                                                                                       |
| [`AddAngularVelocityProbe`](#Solution.AddAngularVelocityProbe)                                                       | Creates a new AngularVelocityProbe                                                                                           |
| [`AddBeamProbe`](#Solution.AddBeamProbe)                                                                             | Creates a new BeamProbe                                                                                                      |
| [`AddBeamTool`](#Solution.AddBeamTool)                                                                               | Creates a new BeamTool                                                                                                       |
| [`AddBearingProbe`](#Solution.AddBearingProbe)                                                                       | Creates a new BearingProbe                                                                                                   |
| [`AddBendingStressEquivalent`](#Solution.AddBendingStressEquivalent)                                                 | Creates a new BendingStressEquivalent                                                                                        |
| [`AddBendingStressIntensity`](#Solution.AddBendingStressIntensity)                                                   | Creates a new BendingStressIntensity                                                                                         |
| [`AddBoltPretensionProbe`](#Solution.AddBoltPretensionProbe)                                                         | Creates a new BoltPretensionProbe                                                                                            |
| [`AddBoltTool`](#Solution.AddBoltTool)                                                                               | Creates a new BoltTool                                                                                                       |
| [`AddCampbellDiagram`](#Solution.AddCampbellDiagram)                                                                 | Creates a new CampbellDiagram                                                                                                |
| [`AddChargeReactionFrequencyResponse`](#Solution.AddChargeReactionFrequencyResponse)                                 | Creates a new ChargeReactionFrequencyResponse                                                                                |
| [`AddChargeReactionProbe`](#Solution.AddChargeReactionProbe)                                                         | Creates a new ChargeReactionProbe                                                                                            |
| [`AddCommandSnippet`](#Solution.AddCommandSnippet)                                                                   | Creates a new CommandSnippet                                                                                                 |
| [`AddComment`](#Solution.AddComment)                                                                                 | Creates a new child Comment.                                                                                                 |
| [`AddCompositeCriterion`](#Solution.AddCompositeCriterion)                                                           | Creates a new CompositeCriterion                                                                                             |
| [`AddCompositeFailureTool`](#Solution.AddCompositeFailureTool)                                                       | Creates a new CompositeFailureTool                                                                                           |
| [`AddCompositeSamplingPointTool`](#Solution.AddCompositeSamplingPointTool)                                           | Creates a new CompositeSamplingPointTool                                                                                     |
| [`AddContactDistanceProbe`](#Solution.AddContactDistanceProbe)                                                       | Creates a new ContactDistanceProbe                                                                                           |
| [`AddContactTool`](#Solution.AddContactTool)                                                                         | Creates a new ContactTool                                                                                                    |
| [`AddCurrentDensity`](#Solution.AddCurrentDensity)                                                                   | Creates a new CurrentDensity                                                                                                 |
| [`AddCurrentDensityProbe`](#Solution.AddCurrentDensityProbe)                                                         | Creates a new CurrentDensityProbe                                                                                            |
| [`AddDamageStatus`](#Solution.AddDamageStatus)                                                                       | Creates a new DamageStatus                                                                                                   |
| [`AddDeformationFrequencyResponse`](#Solution.AddDeformationFrequencyResponse)                                       | Creates a new DeformationFrequencyResponse                                                                                   |
| [`AddDeformationPhaseResponse`](#Solution.AddDeformationPhaseResponse)                                               | Creates a new DeformationPhaseResponse                                                                                       |
| [`AddDeformationProbe`](#Solution.AddDeformationProbe)                                                               | Creates a new DeformationProbe                                                                                               |
| [`AddDirectionalAcceleration`](#Solution.AddDirectionalAcceleration)                                                 | Creates a new DirectionalAcceleration                                                                                        |
| [`AddDirectionalAccelerationPSD`](#Solution.AddDirectionalAccelerationPSD)                                           | Creates a new DirectionalAccelerationPSD                                                                                     |
| [`AddDirectionalAccelerationRS`](#Solution.AddDirectionalAccelerationRS)                                             | Creates a new DirectionalAccelerationRS                                                                                      |
| [`AddDirectionalAxialForce`](#Solution.AddDirectionalAxialForce)                                                     | Creates a new DirectionalAxialForce                                                                                          |
| [`AddDirectionalBendingMoment`](#Solution.AddDirectionalBendingMoment)                                               | Creates a new DirectionalBendingMoment                                                                                       |
| [`AddDirectionalCurrentDensity`](#Solution.AddDirectionalCurrentDensity)                                             | Creates a new DirectionalCurrentDensity                                                                                      |
| [`AddDirectionalDeformation`](#Solution.AddDirectionalDeformation)                                                   | Creates a new DirectionalDeformation                                                                                         |
| [`AddDirectionalElectricFieldIntensity`](#Solution.AddDirectionalElectricFieldIntensity)                             | Creates a new DirectionalElectricFieldIntensity                                                                              |
| [`AddDirectionalElectricFluxDensity`](#Solution.AddDirectionalElectricFluxDensity)                                   | Creates a new DirectionalElectricFluxDensity                                                                                 |
| [`AddDirectionalElectrostaticForce`](#Solution.AddDirectionalElectrostaticForce)                                     | Creates a new DirectionalElectrostaticForce                                                                                  |
| [`AddDirectionalHeatFlux`](#Solution.AddDirectionalHeatFlux)                                                         | Creates a new DirectionalHeatFlux                                                                                            |
| [`AddDirectionalMagneticFieldIntensity`](#Solution.AddDirectionalMagneticFieldIntensity)                             | Creates a new DirectionalMagneticFieldIntensity                                                                              |
| [`AddDirectionalMagneticFluxDensity`](#Solution.AddDirectionalMagneticFluxDensity)                                   | Creates a new DirectionalMagneticFluxDensity                                                                                 |
| [`AddDirectionalShearForce`](#Solution.AddDirectionalShearForce)                                                     | Creates a new DirectionalShearForce                                                                                          |
| [`AddDirectionalTorsionalMoment`](#Solution.AddDirectionalTorsionalMoment)                                           | Creates a new DirectionalTorsionalMoment                                                                                     |
| [`AddDirectionalVelocity`](#Solution.AddDirectionalVelocity)                                                         | Creates a new DirectionalVelocity                                                                                            |
| [`AddDirectionalVelocityPSD`](#Solution.AddDirectionalVelocityPSD)                                                   | Creates a new DirectionalVelocityPSD                                                                                         |
| [`AddDirectionalVelocityRS`](#Solution.AddDirectionalVelocityRS)                                                     | Creates a new DirectionalVelocityRS                                                                                          |
| [`AddElasticStrainFrequencyResponse`](#Solution.AddElasticStrainFrequencyResponse)                                   | Creates a new ElasticStrainFrequencyResponse                                                                                 |
| [`AddElasticStrainIntensity`](#Solution.AddElasticStrainIntensity)                                                   | Creates a new ElasticStrainIntensity                                                                                         |
| [`AddElasticStrainPhaseResponse`](#Solution.AddElasticStrainPhaseResponse)                                           | Creates a new ElasticStrainPhaseResponse                                                                                     |
| [`AddElectricFieldProbe`](#Solution.AddElectricFieldProbe)                                                           | Creates a new ElectricFieldProbe                                                                                             |
| [`AddElectricPotential`](#Solution.AddElectricPotential)                                                             | Creates a new ElectricPotential                                                                                              |
| [`AddElectricVoltage`](#Solution.AddElectricVoltage)                                                                 | Creates a new ElectricVoltage                                                                                                |
| [`AddElectromechanicalCouplingCoefficient`](#Solution.AddElectromechanicalCouplingCoefficient)                       | Creates a new ElectromechanicalCouplingCoefficient                                                                           |
| [`AddElementalEulerXYAngle`](#Solution.AddElementalEulerXYAngle)                                                     | Creates a new ElementalEulerXYAngle                                                                                          |
| [`AddElementalEulerXZAngle`](#Solution.AddElementalEulerXZAngle)                                                     | Creates a new ElementalEulerXZAngle                                                                                          |
| [`AddElementalEulerYZAngle`](#Solution.AddElementalEulerYZAngle)                                                     | Creates a new ElementalEulerYZAngle                                                                                          |
| [`AddElementalStrainEnergy`](#Solution.AddElementalStrainEnergy)                                                     | Creates a new ElementalStrainEnergy                                                                                          |
| [`AddElementalTriads`](#Solution.AddElementalTriads)                                                                 | Creates a new ElementalTriads                                                                                                |
| [`AddEmagReactionProbe`](#Solution.AddEmagReactionProbe)                                                             | Creates a new EmagReactionProbe                                                                                              |
| [`AddEnergyDissipatedPerUnitVolume`](#Solution.AddEnergyDissipatedPerUnitVolume)                                     | Creates a new EnergyDissipatedPerUnitVolume                                                                                  |
| [`AddEnergyProbe`](#Solution.AddEnergyProbe)                                                                         | Creates a new EnergyProbe                                                                                                    |
| [`AddEquivalentCreepStrain`](#Solution.AddEquivalentCreepStrain)                                                     | Creates a new EquivalentCreepStrain                                                                                          |
| [`AddEquivalentCreepStrainRST`](#Solution.AddEquivalentCreepStrainRST)                                               | Creates a new EquivalentCreepStrainRST                                                                                       |
| [`AddEquivalentElasticStrain`](#Solution.AddEquivalentElasticStrain)                                                 | Creates a new EquivalentElasticStrain                                                                                        |
| [`AddEquivalentElasticStrainRST`](#Solution.AddEquivalentElasticStrainRST)                                           | Creates a new EquivalentElasticStrainRST                                                                                     |
| [`AddEquivalentPlasticStrain`](#Solution.AddEquivalentPlasticStrain)                                                 | Creates a new EquivalentPlasticStrain                                                                                        |
| [`AddEquivalentPlasticStrainRST`](#Solution.AddEquivalentPlasticStrainRST)                                           | Creates a new EquivalentPlasticStrainRST                                                                                     |
| [`AddEquivalentRadiatedPower`](#Solution.AddEquivalentRadiatedPower)                                                 | Creates a new EquivalentRadiatedPower                                                                                        |
| [`AddEquivalentRadiatedPowerLevel`](#Solution.AddEquivalentRadiatedPowerLevel)                                       | Creates a new EquivalentRadiatedPowerLevel                                                                                   |
| [`AddEquivalentRadiatedPowerLevelWaterfallDiagram`](#Solution.AddEquivalentRadiatedPowerLevelWaterfallDiagram)       | Creates a new EquivalentRadiatedPowerLevelWaterfallDiagram                                                                   |
| [`AddEquivalentRadiatedPowerWaterfallDiagram`](#Solution.AddEquivalentRadiatedPowerWaterfallDiagram)                 | Creates a new EquivalentRadiatedPowerWaterfallDiagram                                                                        |
| [`AddEquivalentStress`](#Solution.AddEquivalentStress)                                                               | Creates a new EquivalentStress                                                                                               |
| [`AddEquivalentStressPSD`](#Solution.AddEquivalentStressPSD)                                                         | Creates a new EquivalentStressPSD                                                                                            |
| [`AddEquivalentStressRS`](#Solution.AddEquivalentStressRS)                                                           | Creates a new EquivalentStressRS                                                                                             |
| [`AddEquivalentTotalStrain`](#Solution.AddEquivalentTotalStrain)                                                     | Creates a new EquivalentTotalStrain                                                                                          |
| [`AddExpansionSettings`](#Solution.AddExpansionSettings)                                                             | Creates a new ExpansionSettings                                                                                              |
| [`AddFatigueTool`](#Solution.AddFatigueTool)                                                                         | AddFatigueTool method.                                                                                                       |
| [`AddFiberCompressiveDamageVariable`](#Solution.AddFiberCompressiveDamageVariable)                                   | Creates a new FiberCompressiveDamageVariable                                                                                 |
| [`AddFiberCompressiveFailureCriterion`](#Solution.AddFiberCompressiveFailureCriterion)                               | Creates a new FiberCompressiveFailureCriterion                                                                               |
| [`AddFiberTensileDamageVariable`](#Solution.AddFiberTensileDamageVariable)                                           | Creates a new FiberTensileDamageVariable                                                                                     |
| [`AddFiberTensileFailureCriterion`](#Solution.AddFiberTensileFailureCriterion)                                       | Creates a new FiberTensileFailureCriterion                                                                                   |
| [`AddFieldIntensityProbe`](#Solution.AddFieldIntensityProbe)                                                         | Creates a new FieldIntensityProbe                                                                                            |
| [`AddFigure`](#Solution.AddFigure)                                                                                   | Creates a new child Figure.                                                                                                  |
| [`AddFlexibleRotationProbe`](#Solution.AddFlexibleRotationProbe)                                                     | Creates a new FlexibleRotationProbe                                                                                          |
| [`AddFluidFlowRate`](#Solution.AddFluidFlowRate)                                                                     | Creates a new FluidFlowRate                                                                                                  |
| [`AddFluidHeatConductionRate`](#Solution.AddFluidHeatConductionRate)                                                 | Creates a new FluidHeatConductionRate                                                                                        |
| [`AddFluidHeatTransportRate`](#Solution.AddFluidHeatTransportRate)                                                   | Creates a new FluidHeatTransportRate                                                                                         |
| [`AddFluxDensityProbe`](#Solution.AddFluxDensityProbe)                                                               | Creates a new FluxDensityProbe                                                                                               |
| [`AddFluxLinkage`](#Solution.AddFluxLinkage)                                                                         | Creates a new FluxLinkage                                                                                                    |
| [`AddForceReaction`](#Solution.AddForceReaction)                                                                     | Creates a new ForceReaction                                                                                                  |
| [`AddForceReactionFrequencyResponse`](#Solution.AddForceReactionFrequencyResponse)                                   | Creates a new ForceReactionFrequencyResponse                                                                                 |
| [`AddForceReactionsForContactRegions`](#Solution.AddForceReactionsForContactRegions)                                 | AddForceReactionsForContactRegions method.                                                                                   |
| [`AddForceSummationProbe`](#Solution.AddForceSummationProbe)                                                         | Creates a new ForceSummationProbe                                                                                            |
| [`AddFractureTool`](#Solution.AddFractureTool)                                                                       | Creates a new FractureTool                                                                                                   |
| [`AddGeneralizedPlaneStrainProbe`](#Solution.AddGeneralizedPlaneStrainProbe)                                         | Creates a new GeneralizedPlaneStrainProbe                                                                                    |
| [`AddGroupedScopedACPResults`](#Solution.AddGroupedScopedACPResults)                                                 | AddGroupedScopedACPResults method.                                                                                           |
| [`AddGroupedScopedCustomResult`](#Solution.AddGroupedScopedCustomResult)                                             | AddGroupedScopedCustomResult method.                                                                                         |
| [`AddHeatFluxProbe`](#Solution.AddHeatFluxProbe)                                                                     | Creates a new HeatFluxProbe                                                                                                  |
| [`AddImage`](#Solution.AddImage)                                                                                     | Creates a new child Image.                                                                                                   |
| [`AddImpedanceFrequencyResponse`](#Solution.AddImpedanceFrequencyResponse)                                           | Creates a new ImpedanceFrequencyResponse                                                                                     |
| [`AddImpedanceProbe`](#Solution.AddImpedanceProbe)                                                                   | Creates a new ImpedanceProbe                                                                                                 |
| [`AddInductance`](#Solution.AddInductance)                                                                           | Creates a new Inductance                                                                                                     |
| [`AddJointProbe`](#Solution.AddJointProbe)                                                                           | Creates a new JointProbe                                                                                                     |
| [`AddJouleHeat`](#Solution.AddJouleHeat)                                                                             | Creates a new JouleHeat                                                                                                      |
| [`AddJouleHeatProbe`](#Solution.AddJouleHeatProbe)                                                                   | Creates a new JouleHeatProbe                                                                                                 |
| [`AddLatticeDensity`](#Solution.AddLatticeDensity)                                                                   | Creates a new LatticeDensity                                                                                                 |
| [`AddLatticeElementalDensity`](#Solution.AddLatticeElementalDensity)                                                 | Creates a new LatticeElementalDensity                                                                                        |
| [`AddLineChart2D`](#Solution.AddLineChart2D)                                                                         | Creates a new LineChart2D                                                                                                    |
| [`AddLinePressureResult`](#Solution.AddLinePressureResult)                                                           | Creates a new LinePressureResult                                                                                             |
| [`AddLinearizedEquivalentStress`](#Solution.AddLinearizedEquivalentStress)                                           | Creates a new LinearizedEquivalentStress                                                                                     |
| [`AddLinearizedMaximumPrincipalStress`](#Solution.AddLinearizedMaximumPrincipalStress)                               | Creates a new LinearizedMaximumPrincipalStress                                                                               |
| [`AddLinearizedMaximumShearStress`](#Solution.AddLinearizedMaximumShearStress)                                       | Creates a new LinearizedMaximumShearStress                                                                                   |
| [`AddLinearizedMiddlePrincipalStress`](#Solution.AddLinearizedMiddlePrincipalStress)                                 | Creates a new LinearizedMiddlePrincipalStress                                                                                |
| [`AddLinearizedMinimumPrincipalStress`](#Solution.AddLinearizedMinimumPrincipalStress)                               | Creates a new LinearizedMinimumPrincipalStress                                                                               |
| [`AddLinearizedNormalStress`](#Solution.AddLinearizedNormalStress)                                                   | Creates a new LinearizedNormalStress                                                                                         |
| [`AddLinearizedShearStress`](#Solution.AddLinearizedShearStress)                                                     | Creates a new LinearizedShearStress                                                                                          |
| [`AddLinearizedStressIntensity`](#Solution.AddLinearizedStressIntensity)                                             | Creates a new LinearizedStressIntensity                                                                                      |
| [`AddMCFWaterfallDiagram`](#Solution.AddMCFWaterfallDiagram)                                                         | Creates a new MCFWaterfallDiagram                                                                                            |
| [`AddMagneticCoenergy`](#Solution.AddMagneticCoenergy)                                                               | Creates a new MagneticCoenergy                                                                                               |
| [`AddMagneticDirectionalForces`](#Solution.AddMagneticDirectionalForces)                                             | Creates a new MagneticDirectionalForces                                                                                      |
| [`AddMagneticError`](#Solution.AddMagneticError)                                                                     | Creates a new MagneticError                                                                                                  |
| [`AddMagneticFluxProbe`](#Solution.AddMagneticFluxProbe)                                                             | Creates a new MagneticFluxProbe                                                                                              |
| [`AddMagneticPotential`](#Solution.AddMagneticPotential)                                                             | Creates a new MagneticPotential                                                                                              |
| [`AddMagneticTotalForces`](#Solution.AddMagneticTotalForces)                                                         | Creates a new MagneticTotalForces                                                                                            |
| [`AddMatrixCompressiveDamageVariable`](#Solution.AddMatrixCompressiveDamageVariable)                                 | Creates a new MatrixCompressiveDamageVariable                                                                                |
| [`AddMatrixCompressiveFailureCriterion`](#Solution.AddMatrixCompressiveFailureCriterion)                             | Creates a new MatrixCompressiveFailureCriterion                                                                              |
| [`AddMatrixTensileDamageVariable`](#Solution.AddMatrixTensileDamageVariable)                                         | Creates a new MatrixTensileDamageVariable                                                                                    |
| [`AddMatrixTensileFailureCriterion`](#Solution.AddMatrixTensileFailureCriterion)                                     | Creates a new MatrixTensileFailureCriterion                                                                                  |
| [`AddMaximumFailureCriteria`](#Solution.AddMaximumFailureCriteria)                                                   | Creates a new MaximumFailureCriteria                                                                                         |
| [`AddMaximumPrincipalElasticStrain`](#Solution.AddMaximumPrincipalElasticStrain)                                     | Creates a new MaximumPrincipalElasticStrain                                                                                  |
| [`AddMaximumPrincipalStress`](#Solution.AddMaximumPrincipalStress)                                                   | Creates a new MaximumPrincipalStress                                                                                         |
| [`AddMaximumPrincipalThermalStrain`](#Solution.AddMaximumPrincipalThermalStrain)                                     | Creates a new MaximumPrincipalThermalStrain                                                                                  |
| [`AddMaximumShearElasticStrain`](#Solution.AddMaximumShearElasticStrain)                                             | Creates a new MaximumShearElasticStrain                                                                                      |
| [`AddMaximumShearStress`](#Solution.AddMaximumShearStress)                                                           | Creates a new MaximumShearStress                                                                                             |
| [`AddMembraneStressEquivalent`](#Solution.AddMembraneStressEquivalent)                                               | Creates a new MembraneStressEquivalent                                                                                       |
| [`AddMembraneStressIntensity`](#Solution.AddMembraneStressIntensity)                                                 | Creates a new MembraneStressIntensity                                                                                        |
| [`AddMiddlePrincipalElasticStrain`](#Solution.AddMiddlePrincipalElasticStrain)                                       | Creates a new MiddlePrincipalElasticStrain                                                                                   |
| [`AddMiddlePrincipalStress`](#Solution.AddMiddlePrincipalStress)                                                     | Creates a new MiddlePrincipalStress                                                                                          |
| [`AddMiddlePrincipalThermalStrain`](#Solution.AddMiddlePrincipalThermalStrain)                                       | Creates a new MiddlePrincipalThermalStrain                                                                                   |
| [`AddMinimumPrincipalElasticStrain`](#Solution.AddMinimumPrincipalElasticStrain)                                     | Creates a new MinimumPrincipalElasticStrain                                                                                  |
| [`AddMinimumPrincipalStress`](#Solution.AddMinimumPrincipalStress)                                                   | Creates a new MinimumPrincipalStress                                                                                         |
| [`AddMomentReaction`](#Solution.AddMomentReaction)                                                                   | Creates a new MomentReaction                                                                                                 |
| [`AddMomentReactionsForContactRegions`](#Solution.AddMomentReactionsForContactRegions)                               | AddMomentReactionsForContactRegions method.                                                                                  |
| [`AddMullinsDamageVariable`](#Solution.AddMullinsDamageVariable)                                                     | Creates a new MullinsDamageVariable                                                                                          |
| [`AddMullinsMaximumPreviousStrainEnergy`](#Solution.AddMullinsMaximumPreviousStrainEnergy)                           | Creates a new MullinsMaximumPreviousStrainEnergy                                                                             |
| [`AddNewtonRaphsonResidualCharge`](#Solution.AddNewtonRaphsonResidualCharge)                                         | Creates a new NewtonRaphsonResidualCharge                                                                                    |
| [`AddNewtonRaphsonResidualForce`](#Solution.AddNewtonRaphsonResidualForce)                                           | Creates a new NewtonRaphsonResidualForce                                                                                     |
| [`AddNewtonRaphsonResidualHeat`](#Solution.AddNewtonRaphsonResidualHeat)                                             | Creates a new NewtonRaphsonResidualHeat                                                                                      |
| [`AddNewtonRaphsonResidualMoment`](#Solution.AddNewtonRaphsonResidualMoment)                                         | Creates a new NewtonRaphsonResidualMoment                                                                                    |
| [`AddNodalEulerXYAngle`](#Solution.AddNodalEulerXYAngle)                                                             | Creates a new NodalEulerXYAngle                                                                                              |
| [`AddNodalEulerXZAngle`](#Solution.AddNodalEulerXZAngle)                                                             | Creates a new NodalEulerXZAngle                                                                                              |
| [`AddNodalEulerYZAngle`](#Solution.AddNodalEulerYZAngle)                                                             | Creates a new NodalEulerYZAngle                                                                                              |
| [`AddNodalTriads`](#Solution.AddNodalTriads)                                                                         | Creates a new NodalTriads                                                                                                    |
| [`AddNormalElasticStrain`](#Solution.AddNormalElasticStrain)                                                         | Creates a new NormalElasticStrain                                                                                            |
| [`AddNormalGasketPressure`](#Solution.AddNormalGasketPressure)                                                       | Creates a new NormalGasketPressure                                                                                           |
| [`AddNormalGasketTotalClosure`](#Solution.AddNormalGasketTotalClosure)                                               | Creates a new NormalGasketTotalClosure                                                                                       |
| [`AddNormalStress`](#Solution.AddNormalStress)                                                                       | Creates a new NormalStress                                                                                                   |
| [`AddPosition`](#Solution.AddPosition)                                                                               | Creates a new Position                                                                                                       |
| [`AddPrimaryCriterion`](#Solution.AddPrimaryCriterion)                                                               | Creates a new PrimaryCriterion                                                                                               |
| [`AddPythonCodeEventBased`](#Solution.AddPythonCodeEventBased)                                                       | Creates a new PythonCodeEventBased                                                                                           |
| [`AddPythonResult`](#Solution.AddPythonResult)                                                                       | Creates a new PythonResult                                                                                                   |
| [`AddQualityFactor`](#Solution.AddQualityFactor)                                                                     | Creates a new QualityFactor                                                                                                  |
| [`AddRadiationProbe`](#Solution.AddRadiationProbe)                                                                   | Creates a new RadiationProbe                                                                                                 |
| [`AddReactionProbe`](#Solution.AddReactionProbe)                                                                     | Creates a new ReactionProbe                                                                                                  |
| [`AddReactionsForContactRegions`](#Solution.AddReactionsForContactRegions)                                           | AddReactionsForContactRegions method.                                                                                        |
| [`AddResponsePSD`](#Solution.AddResponsePSD)                                                                         | Creates a new ResponsePSD                                                                                                    |
| [`AddResponsePSDTool`](#Solution.AddResponsePSDTool)                                                                 | Creates a new ResponsePSDTool                                                                                                |
| [`AddResultMesh`](#Solution.AddResultMesh)                                                                           | Creates a new ResultMesh                                                                                                     |
| [`AddRotationProbe`](#Solution.AddRotationProbe)                                                                     | Creates a new RotationProbe                                                                                                  |
| [`AddShapeFinder`](#Solution.AddShapeFinder)                                                                         | Creates a new ShapeFinder                                                                                                    |
| [`AddShapeFinderElemental`](#Solution.AddShapeFinderElemental)                                                       | Creates a new ShapeFinderElemental                                                                                           |
| [`AddShearDamageVariable`](#Solution.AddShearDamageVariable)                                                         | Creates a new ShearDamageVariable                                                                                            |
| [`AddShearElasticStrain`](#Solution.AddShearElasticStrain)                                                           | Creates a new ShearElasticStrain                                                                                             |
| [`AddShearGasketPressure`](#Solution.AddShearGasketPressure)                                                         | Creates a new ShearGasketPressure                                                                                            |
| [`AddShearGasketTotalClosure`](#Solution.AddShearGasketTotalClosure)                                                 | Creates a new ShearGasketTotalClosure                                                                                        |
| [`AddShearMomentDiagramMSUM`](#Solution.AddShearMomentDiagramMSUM)                                                   | Creates a new TotalShearMomentDiagram                                                                                        |
| [`AddShearMomentDiagramMY`](#Solution.AddShearMomentDiagramMY)                                                       | Creates a new DirectionalShearMomentDiagram                                                                                  |
| [`AddShearMomentDiagramMZ`](#Solution.AddShearMomentDiagramMZ)                                                       | Creates a new DirectionalShearMomentDiagram                                                                                  |
| [`AddShearMomentDiagramUSUM`](#Solution.AddShearMomentDiagramUSUM)                                                   | Creates a new TotalShearMomentDiagram                                                                                        |
| [`AddShearMomentDiagramUY`](#Solution.AddShearMomentDiagramUY)                                                       | Creates a new DirectionalShearMomentDiagram                                                                                  |
| [`AddShearMomentDiagramUZ`](#Solution.AddShearMomentDiagramUZ)                                                       | Creates a new DirectionalShearMomentDiagram                                                                                  |
| [`AddShearMomentDiagramVSUM`](#Solution.AddShearMomentDiagramVSUM)                                                   | Creates a new TotalShearMomentDiagram                                                                                        |
| [`AddShearMomentDiagramVY`](#Solution.AddShearMomentDiagramVY)                                                       | Creates a new DirectionalShearMomentDiagram                                                                                  |
| [`AddShearMomentDiagramVZ`](#Solution.AddShearMomentDiagramVZ)                                                       | Creates a new DirectionalShearMomentDiagram                                                                                  |
| [`AddShearStress`](#Solution.AddShearStress)                                                                         | Creates a new ShearStress                                                                                                    |
| [`AddShellBendingStress`](#Solution.AddShellBendingStress)                                                           | Creates a new ShellBendingStress                                                                                             |
| [`AddShellBottomPeakStress`](#Solution.AddShellBottomPeakStress)                                                     | Creates a new ShellBottomPeakStress                                                                                          |
| [`AddShellMembraneStress`](#Solution.AddShellMembraneStress)                                                         | Creates a new ShellMembraneStress                                                                                            |
| [`AddShellTopPeakStress`](#Solution.AddShellTopPeakStress)                                                           | Creates a new ShellTopPeakStress                                                                                             |
| [`AddSpringProbe`](#Solution.AddSpringProbe)                                                                         | Creates a new SpringProbe                                                                                                    |
| [`AddStabilizationEnergy`](#Solution.AddStabilizationEnergy)                                                         | Creates a new StabilizationEnergy                                                                                            |
| [`AddStrainProbe`](#Solution.AddStrainProbe)                                                                         | Creates a new StrainProbe                                                                                                    |
| [`AddStressFrequencyResponse`](#Solution.AddStressFrequencyResponse)                                                 | Creates a new StressFrequencyResponse                                                                                        |
| [`AddStressIntensity`](#Solution.AddStressIntensity)                                                                 | Creates a new StressIntensity                                                                                                |
| [`AddStressPhaseResponse`](#Solution.AddStressPhaseResponse)                                                         | Creates a new StressPhaseResponse                                                                                            |
| [`AddStressProbe`](#Solution.AddStressProbe)                                                                         | Creates a new StressProbe                                                                                                    |
| [`AddStressTool`](#Solution.AddStressTool)                                                                           | Creates a new StressTool                                                                                                     |
| [`AddStructuralError`](#Solution.AddStructuralError)                                                                 | Creates a new StructuralError                                                                                                |
| [`AddStructuralStrainEnergy`](#Solution.AddStructuralStrainEnergy)                                                   | Creates a new StructuralStrainEnergy                                                                                         |
| [`AddTemperature`](#Solution.AddTemperature)                                                                         | Creates a new TemperatureResult                                                                                              |
| [`AddTemperatureProbe`](#Solution.AddTemperatureProbe)                                                               | Creates a new TemperatureProbe                                                                                               |
| [`AddThermalError`](#Solution.AddThermalError)                                                                       | Creates a new ThermalError                                                                                                   |
| [`AddThermalStrain`](#Solution.AddThermalStrain)                                                                     | Creates a new DirectionalThermalStrain                                                                                       |
| [`AddThermalStrainEnergy`](#Solution.AddThermalStrainEnergy)                                                         | Creates a new ThermalStrainEnergy                                                                                            |
| [`AddTopologyDensity`](#Solution.AddTopologyDensity)                                                                 | Creates a new TopologyDensity                                                                                                |
| [`AddTopologyElementalDensity`](#Solution.AddTopologyElementalDensity)                                               | Creates a new TopologyElementalDensity                                                                                       |
| [`AddTopologyMultiDensity`](#Solution.AddTopologyMultiDensity)                                                       | Creates a new TopologyMultiDensity                                                                                           |
| [`AddTorqueProbe`](#Solution.AddTorqueProbe)                                                                         | Creates a new TorqueProbe                                                                                                    |
| [`AddTotalAcceleration`](#Solution.AddTotalAcceleration)                                                             | Creates a new TotalAcceleration                                                                                              |
| [`AddTotalAxialForce`](#Solution.AddTotalAxialForce)                                                                 | Creates a new TotalAxialForce                                                                                                |
| [`AddTotalBendingMoment`](#Solution.AddTotalBendingMoment)                                                           | Creates a new TotalBendingMoment                                                                                             |
| [`AddTotalCurrentDensity`](#Solution.AddTotalCurrentDensity)                                                         | Creates a new TotalCurrentDensity                                                                                            |
| [`AddTotalDeformation`](#Solution.AddTotalDeformation)                                                               | Creates a new TotalDeformation                                                                                               |
| [`AddTotalElectricFieldIntensity`](#Solution.AddTotalElectricFieldIntensity)                                         | Creates a new TotalElectricFieldIntensity                                                                                    |
| [`AddTotalElectricFluxDensity`](#Solution.AddTotalElectricFluxDensity)                                               | Creates a new TotalElectricFluxDensity                                                                                       |
| [`AddTotalElectrostaticForce`](#Solution.AddTotalElectrostaticForce)                                                 | Creates a new TotalElectrostaticForce                                                                                        |
| [`AddTotalHeatFlux`](#Solution.AddTotalHeatFlux)                                                                     | Creates a new TotalHeatFlux                                                                                                  |
| [`AddTotalMagneticFieldIntensity`](#Solution.AddTotalMagneticFieldIntensity)                                         | Creates a new TotalMagneticFieldIntensity                                                                                    |
| [`AddTotalMagneticFluxDensity`](#Solution.AddTotalMagneticFluxDensity)                                               | Creates a new TotalMagneticFluxDensity                                                                                       |
| [`AddTotalShearForce`](#Solution.AddTotalShearForce)                                                                 | Creates a new TotalShearForce                                                                                                |
| [`AddTotalTorsionalMoment`](#Solution.AddTotalTorsionalMoment)                                                       | Creates a new TotalTorsionalMoment                                                                                           |
| [`AddTotalVelocity`](#Solution.AddTotalVelocity)                                                                     | Creates a new TotalVelocity                                                                                                  |
| [`AddUserDefinedResult`](#Solution.AddUserDefinedResult)                                                             | Creates a new UserDefinedResult                                                                                              |
| [`AddVariableGraph`](#Solution.AddVariableGraph)                                                                     | Creates a new VariableGraph                                                                                                  |
| [`AddVectorAxialForce`](#Solution.AddVectorAxialForce)                                                               | Creates a new VectorAxialForce                                                                                               |
| [`AddVectorBendingMoment`](#Solution.AddVectorBendingMoment)                                                         | Creates a new VectorBendingMoment                                                                                            |
| [`AddVectorDeformation`](#Solution.AddVectorDeformation)                                                             | Creates a new VectorDeformation                                                                                              |
| [`AddVectorHeatFlux`](#Solution.AddVectorHeatFlux)                                                                   | Creates a new VectorHeatFlux                                                                                                 |
| [`AddVectorPrincipalElasticStrain`](#Solution.AddVectorPrincipalElasticStrain)                                       | Creates a new VectorPrincipalElasticStrain                                                                                   |
| [`AddVectorPrincipalStress`](#Solution.AddVectorPrincipalStress)                                                     | Creates a new VectorPrincipalStress                                                                                          |
| [`AddVectorShearForce`](#Solution.AddVectorShearForce)                                                               | Creates a new VectorShearForce                                                                                               |
| [`AddVectorTorsionalMoment`](#Solution.AddVectorTorsionalMoment)                                                     | Creates a new VectorTorsionalMoment                                                                                          |
| [`AddVelocityFrequencyResponse`](#Solution.AddVelocityFrequencyResponse)                                             | Creates a new VelocityFrequencyResponse                                                                                      |
| [`AddVelocityPhaseResponse`](#Solution.AddVelocityPhaseResponse)                                                     | Creates a new VelocityPhaseResponse                                                                                          |
| [`AddVelocityProbe`](#Solution.AddVelocityProbe)                                                                     | Creates a new VelocityProbe                                                                                                  |
| [`AddVelocityWaterfallDiagram`](#Solution.AddVelocityWaterfallDiagram)                                               | Creates a new VelocityWaterfallDiagram                                                                                       |
| [`AddVoltageFrequencyResponse`](#Solution.AddVoltageFrequencyResponse)                                               | Creates a new VoltageFrequencyResponse                                                                                       |
| [`AddVoltageProbe`](#Solution.AddVoltageProbe)                                                                       | Creates a new ElectricVoltageProbe                                                                                           |
| [`AddVolume`](#Solution.AddVolume)                                                                                   | Creates a new Volume                                                                                                         |
| [`AddVolumeProbe`](#Solution.AddVolumeProbe)                                                                         | Creates a new VolumeProbe                                                                                                    |
| [`ClearGeneratedData`](#Solution.ClearGeneratedData)                                                                 | Run the ClearGeneratedData action.                                                                                           |
| [`ClearRemoteStorageData`](#Solution.ClearRemoteStorageData)                                                         | ClearRemoteStorageData method.                                                                                               |
| [`CopyTo`](#Solution.CopyTo)                                                                                         | Copies all visible properties from this object to another.                                                                   |
| [`CreateParameter`](#Solution.CreateParameter)                                                                       | Creates a new parameter for a Property.                                                                                      |
| [`CreateResultsAtAllSets`](#Solution.CreateResultsAtAllSets)                                                         | CreateResultsAtAllSets method.                                                                                               |
| [`DeleteRow`](#Solution.DeleteRow)                                                                                   | DeleteRow method.                                                                                                            |
| [`DisconnectRemoteJob`](#Solution.DisconnectRemoteJob)                                                               | DisconnectRemoteJob method.                                                                                                  |
| [`Duplicate`](#Solution.Duplicate)                                                                                   | Creates a copy of the current DataModelObject.                                                                               |
| [`EvaluateAllContactTrackers`](#Solution.EvaluateAllContactTrackers)                                                 | EvaluateAllContactTrackers method.                                                                                           |
| [`EvaluateAllResults`](#Solution.EvaluateAllResults)                                                                 | Run the EvaluateAllResults action.                                                                                           |
| [`EvaluateContactTracker`](#Solution.EvaluateContactTracker)                                                         | EvaluateContactTracker method.                                                                                               |
| [`ExecutePostCommands`](#Solution.ExecutePostCommands)                                                               | Run Execute Post Commands for all post command objects.                                                                      |
| [`ExportSubstructure`](#Solution.ExportSubstructure)                                                                 | Export Substructure to cpa file.                                                                                             |
| [`ExtractSolutionStatistics`](#Solution.ExtractSolutionStatistics)                                                   | ExtractSolutionStatistics method.                                                                                            |
| [`FetchRemoteResults`](#Solution.FetchRemoteResults)                                                                 | FetchRemoteResults method.                                                                                                   |
| [`FormatValue`](#Solution.FormatValue)                                                                               | FormatValue method.                                                                                                          |
| [`GenerateAdaptedMesh`](#Solution.GenerateAdaptedMesh)                                                               | GenerateAdaptedMesh method.                                                                                                  |
| [`GetChildren`](#Solution.GetChildren)                                                                               | Gets the list of children, filtered by type.                                                                                 |
| [`GetParameter`](#Solution.GetParameter)                                                                             | Gets the parameter corresponding to the given property.                                                                      |
| [`GetResults`](#Solution.GetResults)                                                                                 | Gets the Results from the server.                                                                                            |
| [`GroupAllSimilarChildren`](#Solution.GroupAllSimilarChildren)                                                       | Run the GroupAllSimilarChildren action.                                                                                      |
| [`GroupSimilarObjects`](#Solution.GroupSimilarObjects)                                                               | Run the GroupSimilarObjects action.                                                                                          |
| [`IsResultFileChanged`](#Solution.IsResultFileChanged)                                                               | Checks if the referenced result file has been changed.                                                                       |
| [`IsResultFileSameAsLoaded`](#Solution.IsResultFileSameAsLoaded)                                                     | Checks if the given result file is same the loaded result file                                                               |
| [`OpenSolverFilesDirectory`](#Solution.OpenSolverFilesDirectory)                                                     | Run the OpenSolverFilesDirectory action.                                                                                     |
| [`PropertyByAPIName`](#Solution.PropertyByAPIName)                                                                   | Get a property by its API name.                                                                                              |
| [`PropertyByName`](#Solution.PropertyByName)                                                                         | Get a property by its unique name.                                                                                           |
| [`ReadAnsysResultFile`](#Solution.ReadAnsysResultFile)                                                               | Run the Ansys ReadResults action.                                                                                            |
| [`ReadGivenAnsysResultFile`](#Solution.ReadGivenAnsysResultFile)                                                     | Run the given Ansys ReadResults action.///                                                                                   |
| [`ReadGivenAnsysResultFileByReference`](#Solution.ReadGivenAnsysResultFileByReference)                               | Run the given Ansys ReadResults by reference action.///                                                                      |
| [`ReconnectRemoteJob`](#Solution.ReconnectRemoteJob)                                                                 | ReconnectRemoteJob method.                                                                                                   |
| [`RelinkResultFile`](#Solution.RelinkResultFile)                                                                     | Relink the result file. This action allows repairing the result file referencing without altering the generated result data. |
| [`ReloadResultFile`](#Solution.ReloadResultFile)                                                                     | Reload the result file. For results-only systems, this action reloads the result mesh data and resets all result scopings.   |
| [`RemoveParameter`](#Solution.RemoveParameter)                                                                       | Removes the parameter from the parameter set corresponding to the given property.                                            |
| [`Solve`](#Solution.Solve)                                                                                           | Run the Solve action.                                                                                                        |
| [`ValueForResultTracking`](#Solution.ValueForResultTracking)                                                         | ValueForResultTracking method.                                                                                               |
| [`ValueForSolutionTracking`](#Solution.ValueForSolutionTracking)                                                     | ValueForSolutionTracking method.                                                                                             |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`AllThreadsCPUTime`](#Solution.AllThreadsCPUTime)                         | AllThreadsCPUTime property.                                                              |
| [`CalculateBeamSectionResults`](#Solution.CalculateBeamSectionResults)     | Gets or sets the CalculateBeamSectionResults.                                            |
| [`CellId`](#Solution.CellId)                                               | Gets the CellId.                                                                         |
| [`Children`](#Solution.Children)                                           | Gets the list of children.                                                               |
| [`Comments`](#Solution.Comments)                                           | Gets the list of associated comments.                                                    |
| [`CyclicSectorDisplayRangeBegin`](#Solution.CyclicSectorDisplayRangeBegin) | Gets or sets the CyclicSectorDisplayRangeBegin.                                          |
| [`DataModelObjectCategory`](#Solution.DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                             |
| [`DateOfRun`](#Solution.DateOfRun)                                         | DateOfRun property.                                                                      |
| [`EigenSolverType`](#Solution.EigenSolverType)                             | EigenSolverType property.                                                                |
| [`ElapsedRunTime`](#Solution.ElapsedRunTime)                               | Gets or sets the ElapsedRunTime.                                                         |
| [`ElapsedTime`](#Solution.ElapsedTime)                                     | ElapsedTime property.                                                                    |
| [`ElementLoadBalRatio`](#Solution.ElementLoadBalRatio)                     | ElementLoadBalRatio property.                                                            |
| [`ElementSelection`](#Solution.ElementSelection)                           | Gets or sets the ElementSelection.                                                       |
| [`Elements`](#Solution.Elements)                                           | Elements property.                                                                       |
| [`EquationSolverType`](#Solution.EquationSolverType)                       | EquationSolverType property.                                                             |
| [`ExportTopologyFile`](#Solution.ExportTopologyFile)                       | Gets or sets the ExportTopologyFile.                                                     |
| [`Figures`](#Solution.Figures)                                             | Gets the list of associated figures.                                                     |
| [`GPUType`](#Solution.GPUType)                                             | GPUType property.                                                                        |
| [`GpuAcceleration`](#Solution.GpuAcceleration)                             | GpuAcceleration property.                                                                |
| [`IOBound`](#Solution.IOBound)                                             | IOBound property.                                                                        |
| [`IORead`](#Solution.IORead)                                               | IORead property.                                                                         |
| [`IOWrite`](#Solution.IOWrite)                                             | IOWrite property.                                                                        |
| [`Images`](#Solution.Images)                                               | Gets the list of associated images.                                                      |
| [`InternalObject`](#Solution.InternalObject)                               | Gets the internal object. For advanced usage only.                                       |
| [`IsAutoHybridParallel`](#Solution.IsAutoHybridParallel)                   | Returns if Hybrid Parallel was turned on by APDL or not (i.e. Automatic Hybrid Parallel) |
| [`IsDataExtractionComplete`](#Solution.IsDataExtractionComplete)           | IsDataExtractionComplete property.                                                       |
| [`IsDistributedSolution`](#Solution.IsDistributedSolution)                 | IsDistributedSolution property.                                                          |
| [`IsEigenSolver`](#Solution.IsEigenSolver)                                 | IsEigenSolver property.                                                                  |
| [`IsGPUAccelerationRequested`](#Solution.IsGPUAccelerationRequested)       | IsGPUAccelerationRequested property.                                                     |
| [`IsHybridParallelSolution`](#Solution.IsHybridParallelSolution)           | IsHybridParallelSolution property.                                                       |
| [`IsUnsymmetricMatrixSolve`](#Solution.IsUnsymmetricMatrixSolve)           | IsUnsymmetricMatrixSolve property.                                                       |
| [`License`](#Solution.License)                                             | License property.                                                                        |
| [`LicenseCoresAvailable`](#Solution.LicenseCoresAvailable)                 | LicenseCoresAvailable property.                                                          |
| [`MPIType`](#Solution.MPIType)                                             | MPIType property.                                                                        |
| [`MSUPHarmonicAnalysis`](#Solution.MSUPHarmonicAnalysis)                   | MSUPHarmonicAnalysis property.                                                           |
| [`MainThreadCPUTime`](#Solution.MainThreadCPUTime)                         | MainThreadCPUTime property.                                                              |
| [`MaximumRefinementLoops`](#Solution.MaximumRefinementLoops)               | Gets or sets the MaximumRefinementLoops.                                                 |
| [`MemoryAvailable`](#Solution.MemoryAvailable)                             | MemoryAvailable property.                                                                |
| [`MemoryUsed`](#Solution.MemoryUsed)                                       | Gets or sets the MemoryUsed.                                                             |
| [`MeshSource`](#Solution.MeshSource)                                       | Gets or sets the MeshSource.                                                             |
| [`Nodes`](#Solution.Nodes)                                                 | Nodes property.                                                                          |
| [`NumCoresAvailable`](#Solution.NumCoresAvailable)                         | NumCoresAvailable property.                                                              |
| [`NumGPURequested`](#Solution.NumGPURequested)                             | NumGPURequested property.                                                                |
| [`NumMachinesRequested`](#Solution.NumMachinesRequested)                   | NumMachinesRequested property.                                                           |
| [`NumProcRequested`](#Solution.NumProcRequested)                           | NumProcRequested property.                                                               |
| [`NumVirtualCoresAvailable`](#Solution.NumVirtualCoresAvailable)           | NumVirtualCoresAvailable property.                                                       |
| [`NumberOfDOF`](#Solution.NumberOfDOF)                                     | Get the Number of DOF.                                                                   |
| [`NumberOfProcessesRequested`](#Solution.NumberOfProcessesRequested)       | NumberOfProcessesRequested property.                                                     |
| [`NumberofSectors`](#Solution.NumberofSectors)                             | Gets or sets the NumberofSectors.                                                        |
| [`OperatingSystem`](#Solution.OperatingSystem)                             | OperatingSystem property.                                                                |
| [`ProcessorModel`](#Solution.ProcessorModel)                               | ProcessorModel property.                                                                 |
| [`Properties`](#Solution.Properties)                                       | Gets the list of properties for this object.                                             |
| [`RefinementDepth`](#Solution.RefinementDepth)                             | Gets or sets the RefinementDepth.                                                        |
| [`ResultFileDirectory`](#Solution.ResultFileDirectory)                     | Gets the ResultFileDirectory.                                                            |
| [`ResultFileName`](#Solution.ResultFileName)                               | Gets the ResultFileName.                                                                 |
| [`ResultFilePath`](#Solution.ResultFilePath)                               | Get the result file full path.                                                           |
| [`ResultFileSize`](#Solution.ResultFileSize)                               | Gets the ResultFileSize.                                                                 |
| [`ResultFileTimestamp`](#Solution.ResultFileTimestamp)                     | Gets the ResultFileTimestamp.                                                            |
| [`ResultFileUnitSystem`](#Solution.ResultFileUnitSystem)                   | Gets the ResultFileUnitSystem.                                                           |
| [`ResultTrackingVectorLength`](#Solution.ResultTrackingVectorLength)       | ResultTrackingVectorLength property.                                                     |
| [`SkipSolveCommand`](#Solution.SkipSolveCommand)                           | Gets or sets the flag to avoid issuing the solve command in the MAPDL solver.            |
| [`SolutionInformation`](#Solution.SolutionInformation)                     | Gets the SolutionInformation.                                                            |
| [`SolutionTrackingVectorLength`](#Solution.SolutionTrackingVectorLength)   | SolutionTrackingVectorLength property.                                                   |
| [`SolutionUnitSystem`](#Solution.SolutionUnitSystem)                       | SolutionUnitSystem property.                                                             |
| [`SolverData`](#Solution.SolverData)                                       | SolverData property.                                                                     |
| [`SolverType`](#Solution.SolverType)                                       | SolverType property.                                                                     |
| [`SparseMode`](#Solution.SparseMode)                                       | Get the Sparse Mode value.                                                               |
| [`Status`](#Solution.Status)                                               | Gets the Status.                                                                         |
| [`ThreadsPerProcessRequested`](#Solution.ThreadsPerProcessRequested)       | ThreadsPerProcessRequested property.                                                     |
| [`TimeOfRun`](#Solution.TimeOfRun)                                         | TimeOfRun property.                                                                      |
| [`TimeToCombineDistributedFiles`](#Solution.TimeToCombineDistributedFiles) | TimeToCombineDistributedFiles property.                                                  |
| [`TopologyResult`](#Solution.TopologyResult)                               | Gets or sets the TopologyResult.                                                         |
| [`TotalMemoryUsed`](#Solution.TotalMemoryUsed)                             | TotalMemoryUsed property.                                                                |
| [`VisibleProperties`](#Solution.VisibleProperties)                         | Gets the list of properties that are visible for this object.                            |
| [`WorkingDir`](#Solution.WorkingDir)                                       | Gets the WorkingDir.                                                                     |

<a id="property-detail"></a>

## Property detail

<a id="Solution.AllThreadsCPUTime"></a>

### *property* Solution.AllThreadsCPUTime *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

AllThreadsCPUTime property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.CalculateBeamSectionResults"></a>

### *property* Solution.CalculateBeamSectionResults *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateBeamSectionResults.

<!-- !! processed by numpydoc !! -->

<a id="Solution.CellId"></a>

### *property* Solution.CellId *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CellId.

<!-- !! processed by numpydoc !! -->

<a id="Solution.Children"></a>

### *property* Solution.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Solution.Comments"></a>

### *property* Solution.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Solution.CyclicSectorDisplayRangeBegin"></a>

### *property* Solution.CyclicSectorDisplayRangeBegin *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicSectorDisplayRangeBegin.

<!-- !! processed by numpydoc !! -->

<a id="Solution.DataModelObjectCategory"></a>

### *property* Solution.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Solution.DateOfRun"></a>

### *property* Solution.DateOfRun *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

DateOfRun property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.EigenSolverType"></a>

### *property* Solution.EigenSolverType *: [Ansys.Mechanical.DataModel.Enums.EigenSolverType](../../../Mechanical/DataModel/Enums/EigenSolverType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.EigenSolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

EigenSolverType property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ElapsedRunTime"></a>

### *property* Solution.ElapsedRunTime *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElapsedRunTime.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ElapsedTime"></a>

### *property* Solution.ElapsedTime *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

ElapsedTime property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ElementLoadBalRatio"></a>

### *property* Solution.ElementLoadBalRatio *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

ElementLoadBalRatio property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ElementSelection"></a>

### *property* Solution.ElementSelection *: [Ansys.Mechanical.DataModel.Enums.ConvergenceControlType](../../../Mechanical/DataModel/Enums/ConvergenceControlType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ConvergenceControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementSelection.

<!-- !! processed by numpydoc !! -->

<a id="Solution.Elements"></a>

### *property* Solution.Elements *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Elements property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.EquationSolverType"></a>

### *property* Solution.EquationSolverType *: [Ansys.Mechanical.DataModel.Enums.EquationSolverType](../../../Mechanical/DataModel/Enums/EquationSolverType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.EquationSolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

EquationSolverType property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ExportTopologyFile"></a>

### *property* Solution.ExportTopologyFile *: [Ansys.Mechanical.DataModel.Enums.ExportTopologyFileOption](../../../Mechanical/DataModel/Enums/ExportTopologyFileOption.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ExportTopologyFileOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportTopologyFile.

<!-- !! processed by numpydoc !! -->

<a id="Solution.Figures"></a>

### *property* Solution.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Solution.GPUType"></a>

### *property* Solution.GPUType *: Ansys.Common.Interop.DSObjectTypes.DSGPUType | [None](https://docs.python.org/3/library/constants.html#None)*

GPUType property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.GpuAcceleration"></a>

### *property* Solution.GpuAcceleration *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

GpuAcceleration property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.IOBound"></a>

### *property* Solution.IOBound *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

IOBound property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.IORead"></a>

### *property* Solution.IORead *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

IORead property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.IOWrite"></a>

### *property* Solution.IOWrite *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

IOWrite property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.Images"></a>

### *property* Solution.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Solution.InternalObject"></a>

### *property* Solution.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAnswerSetAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Solution.IsAutoHybridParallel"></a>

### *property* Solution.IsAutoHybridParallel *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns if Hybrid Parallel was turned on by APDL or not (i.e. Automatic Hybrid Parallel)

<!-- !! processed by numpydoc !! -->

<a id="Solution.IsDataExtractionComplete"></a>

### *property* Solution.IsDataExtractionComplete *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

IsDataExtractionComplete property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.IsDistributedSolution"></a>

### *property* Solution.IsDistributedSolution *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

IsDistributedSolution property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.IsEigenSolver"></a>

### *property* Solution.IsEigenSolver *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

IsEigenSolver property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.IsGPUAccelerationRequested"></a>

### *property* Solution.IsGPUAccelerationRequested *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

IsGPUAccelerationRequested property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.IsHybridParallelSolution"></a>

### *property* Solution.IsHybridParallelSolution *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

IsHybridParallelSolution property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.IsUnsymmetricMatrixSolve"></a>

### *property* Solution.IsUnsymmetricMatrixSolve *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

IsUnsymmetricMatrixSolve property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.License"></a>

### *property* Solution.License *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

License property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.LicenseCoresAvailable"></a>

### *property* Solution.LicenseCoresAvailable *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

LicenseCoresAvailable property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.MPIType"></a>

### *property* Solution.MPIType *: [Ansys.Mechanical.DataModel.Enums.MPIType](../../../Mechanical/DataModel/Enums/MPIType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MPIType) | [None](https://docs.python.org/3/library/constants.html#None)*

MPIType property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.MSUPHarmonicAnalysis"></a>

### *property* Solution.MSUPHarmonicAnalysis *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

MSUPHarmonicAnalysis property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.MainThreadCPUTime"></a>

### *property* Solution.MainThreadCPUTime *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

MainThreadCPUTime property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.MaximumRefinementLoops"></a>

### *property* Solution.MaximumRefinementLoops *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumRefinementLoops.

<!-- !! processed by numpydoc !! -->

<a id="Solution.MemoryAvailable"></a>

### *property* Solution.MemoryAvailable *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

MemoryAvailable property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.MemoryUsed"></a>

### *property* Solution.MemoryUsed *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MemoryUsed.

<!-- !! processed by numpydoc !! -->

<a id="Solution.MeshSource"></a>

### *property* Solution.MeshSource *: [Ansys.Mechanical.DataModel.Enums.MeshSourceType](../../../Mechanical/DataModel/Enums/MeshSourceType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.MeshSourceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshSource.

<!-- !! processed by numpydoc !! -->

<a id="Solution.Nodes"></a>

### *property* Solution.Nodes *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Nodes property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.NumCoresAvailable"></a>

### *property* Solution.NumCoresAvailable *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

NumCoresAvailable property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.NumGPURequested"></a>

### *property* Solution.NumGPURequested *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

NumGPURequested property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.NumMachinesRequested"></a>

### *property* Solution.NumMachinesRequested *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

NumMachinesRequested property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.NumProcRequested"></a>

### *property* Solution.NumProcRequested *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

NumProcRequested property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.NumVirtualCoresAvailable"></a>

### *property* Solution.NumVirtualCoresAvailable *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

NumVirtualCoresAvailable property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.NumberOfDOF"></a>

### *property* Solution.NumberOfDOF *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Number of DOF.

<!-- !! processed by numpydoc !! -->

<a id="Solution.NumberOfProcessesRequested"></a>

### *property* Solution.NumberOfProcessesRequested *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfProcessesRequested property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.NumberofSectors"></a>

### *property* Solution.NumberofSectors *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberofSectors.

<!-- !! processed by numpydoc !! -->

<a id="Solution.OperatingSystem"></a>

### *property* Solution.OperatingSystem *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

OperatingSystem property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ProcessorModel"></a>

### *property* Solution.ProcessorModel *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

ProcessorModel property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.Properties"></a>

### *property* Solution.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Solution.RefinementDepth"></a>

### *property* Solution.RefinementDepth *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RefinementDepth.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ResultFileDirectory"></a>

### *property* Solution.ResultFileDirectory *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultFileDirectory.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ResultFileName"></a>

### *property* Solution.ResultFileName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultFileName.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ResultFilePath"></a>

### *property* Solution.ResultFilePath *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the result file full path.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ResultFileSize"></a>

### *property* Solution.ResultFileSize *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultFileSize.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ResultFileTimestamp"></a>

### *property* Solution.ResultFileTimestamp *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultFileTimestamp.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ResultFileUnitSystem"></a>

### *property* Solution.ResultFileUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultFileUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ResultTrackingVectorLength"></a>

### *property* Solution.ResultTrackingVectorLength *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

ResultTrackingVectorLength property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.SkipSolveCommand"></a>

### *property* Solution.SkipSolveCommand *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the flag to avoid issuing the solve command in the MAPDL solver.

<!-- !! processed by numpydoc !! -->

<a id="Solution.SolutionInformation"></a>

### *property* Solution.SolutionInformation *: [Ansys.ACT.Automation.Mechanical.SolutionInformation](SolutionInformation.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.SolutionInformation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolutionInformation.

<!-- !! processed by numpydoc !! -->

<a id="Solution.SolutionTrackingVectorLength"></a>

### *property* Solution.SolutionTrackingVectorLength *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

SolutionTrackingVectorLength property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.SolutionUnitSystem"></a>

### *property* Solution.SolutionUnitSystem *: Ansys.ACT.Interfaces.Common.MechanicalUnitSystem | [None](https://docs.python.org/3/library/constants.html#None)*

SolutionUnitSystem property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.SolverData"></a>

### *property* Solution.SolverData *: Any | [None](https://docs.python.org/3/library/constants.html#None)*

SolverData property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.SolverType"></a>

### *property* Solution.SolverType *: [Ansys.Mechanical.DataModel.Enums.SolverType](../../../Mechanical/DataModel/Enums/SolverType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

SolverType property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.SparseMode"></a>

### *property* Solution.SparseMode *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Sparse Mode value.

<!-- !! processed by numpydoc !! -->

<a id="Solution.Status"></a>

### *property* Solution.Status *: [Ansys.Mechanical.DataModel.Enums.SolutionStatusType](../../../Mechanical/DataModel/Enums/SolutionStatusType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolutionStatusType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Status.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ThreadsPerProcessRequested"></a>

### *property* Solution.ThreadsPerProcessRequested *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

ThreadsPerProcessRequested property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.TimeOfRun"></a>

### *property* Solution.TimeOfRun *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

TimeOfRun property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.TimeToCombineDistributedFiles"></a>

### *property* Solution.TimeToCombineDistributedFiles *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

TimeToCombineDistributedFiles property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.TopologyResult"></a>

### *property* Solution.TopologyResult *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopologyResult.

<!-- !! processed by numpydoc !! -->

<a id="Solution.TotalMemoryUsed"></a>

### *property* Solution.TotalMemoryUsed *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

TotalMemoryUsed property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.VisibleProperties"></a>

### *property* Solution.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Solution.WorkingDir"></a>

### *property* Solution.WorkingDir *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the WorkingDir.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Solution.Activate"></a>

### Solution.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAccelerationFrequencyResponse"></a>

### Solution.AddAccelerationFrequencyResponse() → [Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AccelerationFrequencyResponse](Results/FrequencyResponseResults/AccelerationFrequencyResponse.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AccelerationFrequencyResponse)

Creates a new AccelerationFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAccelerationPhaseResponse"></a>

### Solution.AddAccelerationPhaseResponse() → [Ansys.ACT.Automation.Mechanical.Results.PhaseResponseResults.AccelerationPhaseResponse](Results/PhaseResponseResults/AccelerationPhaseResponse.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.PhaseResponseResults.AccelerationPhaseResponse)

Creates a new AccelerationPhaseResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAccelerationProbe"></a>

### Solution.AddAccelerationProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.AccelerationProbe](Results/ProbeResults/AccelerationProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.AccelerationProbe)

Creates a new AccelerationProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAccelerationWaterfallDiagram"></a>

### Solution.AddAccelerationWaterfallDiagram() → [Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AccelerationWaterfallDiagram](Results/FrequencyResponseResults/AccelerationWaterfallDiagram.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AccelerationWaterfallDiagram)

Creates a new AccelerationWaterfallDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAccumulatedEquivalentPlasticStrain"></a>

### Solution.AddAccumulatedEquivalentPlasticStrain() → [Ansys.ACT.Automation.Mechanical.Results.StrainResults.AccumulatedEquivalentPlasticStrain](Results/StrainResults/AccumulatedEquivalentPlasticStrain.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StrainResults.AccumulatedEquivalentPlasticStrain)

Creates a new AccumulatedEquivalentPlasticStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticAWeightedSPLFrequencyResponse"></a>

### Solution.AddAcousticAWeightedSPLFrequencyResponse() → [Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AcousticAWeightedSPLFrequencyResponse](Results/FrequencyResponseResults/AcousticAWeightedSPLFrequencyResponse.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AcousticAWeightedSPLFrequencyResponse)

Creates a new AcousticAWeightedSPLFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticAWeightedSoundPressureLevel"></a>

### Solution.AddAcousticAWeightedSoundPressureLevel() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticAWeightedSoundPressureLevel](Results/AcousticResults/AcousticAWeightedSoundPressureLevel.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticAWeightedSoundPressureLevel)

Creates a new AcousticAWeightedSoundPressureLevel

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticAbsorptionCoefficient"></a>

### Solution.AddAcousticAbsorptionCoefficient() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticAbsorptionCoefficient](Results/AcousticResults/AcousticAbsorptionCoefficient.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticAbsorptionCoefficient)

Creates a new AcousticAbsorptionCoefficient

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticDiffuseSoundTransmissionLoss"></a>

### Solution.AddAcousticDiffuseSoundTransmissionLoss() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticDiffuseSoundTransmissionLoss](Results/AcousticResults/AcousticDiffuseSoundTransmissionLoss.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticDiffuseSoundTransmissionLoss)

Creates a new AcousticDiffuseSoundTransmissionLoss

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticDirectionalVelocityResult"></a>

### Solution.AddAcousticDirectionalVelocityResult() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticDirectionalVelocityResult](Results/AcousticResults/AcousticDirectionalVelocityResult.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticDirectionalVelocityResult)

Creates a new AcousticDirectionalVelocityResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldAWeightedSPL"></a>

### Solution.AddAcousticFarFieldAWeightedSPL() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult](Results/AcousticResults/AcousticFarFieldResult.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult)

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldAWeightedSPLMic"></a>

### Solution.AddAcousticFarFieldAWeightedSPLMic() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult](Results/AcousticResults/AcousticFarFieldResult.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult)

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldDirectivity"></a>

### Solution.AddAcousticFarFieldDirectivity() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult](Results/AcousticResults/AcousticFarFieldResult.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult)

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldMaximumPressure"></a>

### Solution.AddAcousticFarFieldMaximumPressure() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult](Results/AcousticResults/AcousticFarFieldResult.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult)

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldMaximumPressureMic"></a>

### Solution.AddAcousticFarFieldMaximumPressureMic() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult](Results/AcousticResults/AcousticFarFieldResult.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult)

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldMaximumScatteredPressure"></a>

### Solution.AddAcousticFarFieldMaximumScatteredPressure() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult](Results/AcousticResults/AcousticFarFieldResult.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult)

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldPhase"></a>

### Solution.AddAcousticFarFieldPhase() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult](Results/AcousticResults/AcousticFarFieldResult.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult)

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldPhaseMic"></a>

### Solution.AddAcousticFarFieldPhaseMic() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult](Results/AcousticResults/AcousticFarFieldResult.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult)

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldSPL"></a>

### Solution.AddAcousticFarFieldSPL() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult](Results/AcousticResults/AcousticFarFieldResult.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult)

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldSPLMic"></a>

### Solution.AddAcousticFarFieldSPLMic() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult](Results/AcousticResults/AcousticFarFieldResult.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult)

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldSPLMicWaterfallDiagram"></a>

### Solution.AddAcousticFarFieldSPLMicWaterfallDiagram() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldSPLMicWaterfallDiagram](Results/AcousticResults/AcousticFarFieldSPLMicWaterfallDiagram.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldSPLMicWaterfallDiagram)

Creates a new AcousticFarFieldSPLMicWaterfallDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldSoundPowerLevel"></a>

### Solution.AddAcousticFarFieldSoundPowerLevel() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult](Results/AcousticResults/AcousticFarFieldResult.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult)

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldSoundPowerLevelWaterfallDiagram"></a>

### Solution.AddAcousticFarFieldSoundPowerLevelWaterfallDiagram() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldSoundPowerLevelWaterfallDiagram](Results/AcousticResults/AcousticFarFieldSoundPowerLevelWaterfallDiagram.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldSoundPowerLevelWaterfallDiagram)

Creates a new AcousticFarFieldSoundPowerLevelWaterfallDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldTargetStrength"></a>

### Solution.AddAcousticFarFieldTargetStrength() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult](Results/AcousticResults/AcousticFarFieldResult.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFarFieldResult)

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFrequencyBandAWeightedSPL"></a>

### Solution.AddAcousticFrequencyBandAWeightedSPL() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFrequencyBandAWeightedSPL](Results/AcousticResults/AcousticFrequencyBandAWeightedSPL.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFrequencyBandAWeightedSPL)

Creates a new AcousticFrequencyBandAWeightedSPL

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFrequencyBandSPL"></a>

### Solution.AddAcousticFrequencyBandSPL() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFrequencyBandSPL](Results/AcousticResults/AcousticFrequencyBandSPL.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticFrequencyBandSPL)

Creates a new AcousticFrequencyBandSPL

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticKineticEnergy"></a>

### Solution.AddAcousticKineticEnergy() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticKineticEnergy](Results/AcousticResults/AcousticKineticEnergy.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticKineticEnergy)

Creates a new AcousticKineticEnergy

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticKineticEnergyFrequencyResponse"></a>

### Solution.AddAcousticKineticEnergyFrequencyResponse() → [Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AcousticKineticEnergyFrequencyResponse](Results/FrequencyResponseResults/AcousticKineticEnergyFrequencyResponse.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AcousticKineticEnergyFrequencyResponse)

Creates a new AcousticKineticEnergyFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticPotentialEnergy"></a>

### Solution.AddAcousticPotentialEnergy() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticPotentialEnergy](Results/AcousticResults/AcousticPotentialEnergy.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticPotentialEnergy)

Creates a new AcousticPotentialEnergy

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticPotentialEnergyFrequencyResponse"></a>

### Solution.AddAcousticPotentialEnergyFrequencyResponse() → [Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AcousticPotentialEnergyFrequencyResponse](Results/FrequencyResponseResults/AcousticPotentialEnergyFrequencyResponse.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AcousticPotentialEnergyFrequencyResponse)

Creates a new AcousticPotentialEnergyFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticPressureFrequencyResponse"></a>

### Solution.AddAcousticPressureFrequencyResponse() → [Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AcousticPressureFrequencyResponse](Results/FrequencyResponseResults/AcousticPressureFrequencyResponse.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AcousticPressureFrequencyResponse)

Creates a new AcousticPressureFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticPressureResult"></a>

### Solution.AddAcousticPressureResult() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticPressureResult](Results/AcousticResults/AcousticPressureResult.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticPressureResult)

Creates a new AcousticPressureResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticReturnLoss"></a>

### Solution.AddAcousticReturnLoss() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticReturnLoss](Results/AcousticResults/AcousticReturnLoss.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticReturnLoss)

Creates a new AcousticReturnLoss

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticSPLFrequencyResponse"></a>

### Solution.AddAcousticSPLFrequencyResponse() → [Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AcousticSPLFrequencyResponse](Results/FrequencyResponseResults/AcousticSPLFrequencyResponse.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AcousticSPLFrequencyResponse)

Creates a new AcousticSPLFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticSoundPressureLevel"></a>

### Solution.AddAcousticSoundPressureLevel() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticSoundPressureLevel](Results/AcousticResults/AcousticSoundPressureLevel.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticSoundPressureLevel)

Creates a new AcousticSoundPressureLevel

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticTotalVelocityResult"></a>

### Solution.AddAcousticTotalVelocityResult() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticTotalVelocityResult](Results/AcousticResults/AcousticTotalVelocityResult.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticTotalVelocityResult)

Creates a new AcousticTotalVelocityResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticTransmissionLoss"></a>

### Solution.AddAcousticTransmissionLoss() → [Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticTransmissionLoss](Results/AcousticResults/AcousticTransmissionLoss.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.AcousticResults.AcousticTransmissionLoss)

Creates a new AcousticTransmissionLoss

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticVelocityFrequencyResponse"></a>

### Solution.AddAcousticVelocityFrequencyResponse() → [Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AcousticVelocityFrequencyResponse](Results/FrequencyResponseResults/AcousticVelocityFrequencyResponse.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.AcousticVelocityFrequencyResponse)

Creates a new AcousticVelocityFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAngularAccelerationProbe"></a>

### Solution.AddAngularAccelerationProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.AngularAccelerationProbe](Results/ProbeResults/AngularAccelerationProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.AngularAccelerationProbe)

Creates a new AngularAccelerationProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAngularVelocityProbe"></a>

### Solution.AddAngularVelocityProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.AngularVelocityProbe](Results/ProbeResults/AngularVelocityProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.AngularVelocityProbe)

Creates a new AngularVelocityProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddBeamProbe"></a>

### Solution.AddBeamProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.BeamProbe](Results/ProbeResults/BeamProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.BeamProbe)

Creates a new BeamProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddBeamTool"></a>

### Solution.AddBeamTool() → [Ansys.ACT.Automation.Mechanical.Results.BeamToolResults.BeamTool](Results/BeamToolResults/BeamTool.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.BeamToolResults.BeamTool)

Creates a new BeamTool

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddBearingProbe"></a>

### Solution.AddBearingProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.BearingProbe](Results/ProbeResults/BearingProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.BearingProbe)

Creates a new BearingProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddBendingStressEquivalent"></a>

### Solution.AddBendingStressEquivalent() → [Ansys.ACT.Automation.Mechanical.Results.StressResults.BendingStressEquivalent](Results/StressResults/BendingStressEquivalent.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StressResults.BendingStressEquivalent)

Creates a new BendingStressEquivalent

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddBendingStressIntensity"></a>

### Solution.AddBendingStressIntensity() → [Ansys.ACT.Automation.Mechanical.Results.StressResults.BendingStressIntensity](Results/StressResults/BendingStressIntensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StressResults.BendingStressIntensity)

Creates a new BendingStressIntensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddBoltPretensionProbe"></a>

### Solution.AddBoltPretensionProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.BoltPretensionProbe](Results/ProbeResults/BoltPretensionProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.BoltPretensionProbe)

Creates a new BoltPretensionProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddBoltTool"></a>

### Solution.AddBoltTool() → [Ansys.ACT.Automation.Mechanical.Results.BoltToolResults.BoltTool](Results/BoltToolResults/BoltTool.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.BoltToolResults.BoltTool)

Creates a new BoltTool

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddCampbellDiagram"></a>

### Solution.AddCampbellDiagram() → [Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.CampbellDiagram](Results/ResultTrackers/CampbellDiagram.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ResultTrackers.CampbellDiagram)

Creates a new CampbellDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddChargeReactionFrequencyResponse"></a>

### Solution.AddChargeReactionFrequencyResponse() → [Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.ChargeReactionFrequencyResponse](Results/FrequencyResponseResults/ChargeReactionFrequencyResponse.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.ChargeReactionFrequencyResponse)

Creates a new ChargeReactionFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddChargeReactionProbe"></a>

### Solution.AddChargeReactionProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ChargeReactionProbe](Results/ProbeResults/ChargeReactionProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ChargeReactionProbe)

Creates a new ChargeReactionProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddCommandSnippet"></a>

### Solution.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddComment"></a>

### Solution.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddCompositeCriterion"></a>

### Solution.AddCompositeCriterion() → [Ansys.ACT.Automation.Mechanical.CompositeCriterion](CompositeCriterion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CompositeCriterion)

Creates a new CompositeCriterion

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddCompositeFailureTool"></a>

### Solution.AddCompositeFailureTool() → [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureTool](Results/CompositeFailureResults/CompositeFailureTool.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeFailureTool)

Creates a new CompositeFailureTool

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddCompositeSamplingPointTool"></a>

### Solution.AddCompositeSamplingPointTool() → [Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeSamplingPointTool](Results/CompositeFailureResults/CompositeSamplingPointTool.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.CompositeFailureResults.CompositeSamplingPointTool)

Creates a new CompositeSamplingPointTool

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddContactDistanceProbe"></a>

### Solution.AddContactDistanceProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ContactDistanceProbe](Results/ProbeResults/ContactDistanceProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ContactDistanceProbe)

Creates a new ContactDistanceProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddContactTool"></a>

### Solution.AddContactTool() → [Ansys.ACT.Automation.Mechanical.PostContactTool](PostContactTool.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.PostContactTool)

Creates a new ContactTool

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddCurrentDensity"></a>

### Solution.AddCurrentDensity() → [Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.CurrentDensity](Results/ElectromagneticResults/CurrentDensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.CurrentDensity)

Creates a new CurrentDensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddCurrentDensityProbe"></a>

### Solution.AddCurrentDensityProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.CurrentDensityProbe](Results/ProbeResults/CurrentDensityProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.CurrentDensityProbe)

Creates a new CurrentDensityProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDamageStatus"></a>

### Solution.AddDamageStatus() → [Ansys.ACT.Automation.Mechanical.Results.DamageResults.DamageStatus](Results/DamageResults/DamageStatus.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DamageResults.DamageStatus)

Creates a new DamageStatus

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDeformationFrequencyResponse"></a>

### Solution.AddDeformationFrequencyResponse() → [Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.DeformationFrequencyResponse](Results/FrequencyResponseResults/DeformationFrequencyResponse.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.DeformationFrequencyResponse)

Creates a new DeformationFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDeformationPhaseResponse"></a>

### Solution.AddDeformationPhaseResponse() → [Ansys.ACT.Automation.Mechanical.Results.PhaseResponseResults.DeformationPhaseResponse](Results/PhaseResponseResults/DeformationPhaseResponse.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.PhaseResponseResults.DeformationPhaseResponse)

Creates a new DeformationPhaseResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDeformationProbe"></a>

### Solution.AddDeformationProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.DeformationProbe](Results/ProbeResults/DeformationProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.DeformationProbe)

Creates a new DeformationProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalAcceleration"></a>

### Solution.AddDirectionalAcceleration() → [Ansys.ACT.Automation.Mechanical.Results.DeformationResults.DirectionalAcceleration](Results/DeformationResults/DirectionalAcceleration.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DeformationResults.DirectionalAcceleration)

Creates a new DirectionalAcceleration

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalAccelerationPSD"></a>

### Solution.AddDirectionalAccelerationPSD() → [Ansys.ACT.Automation.Mechanical.Results.DeformationResults.DirectionalAccelerationPSD](Results/DeformationResults/DirectionalAccelerationPSD.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DeformationResults.DirectionalAccelerationPSD)

Creates a new DirectionalAccelerationPSD

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalAccelerationRS"></a>

### Solution.AddDirectionalAccelerationRS() → [Ansys.ACT.Automation.Mechanical.Results.DeformationResults.DirectionalAccelerationRS](Results/DeformationResults/DirectionalAccelerationRS.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DeformationResults.DirectionalAccelerationRS)

Creates a new DirectionalAccelerationRS

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalAxialForce"></a>

### Solution.AddDirectionalAxialForce() → [Ansys.ACT.Automation.Mechanical.Results.BeamResults.DirectionalAxialForce](Results/BeamResults/DirectionalAxialForce.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.BeamResults.DirectionalAxialForce)

Creates a new DirectionalAxialForce

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalBendingMoment"></a>

### Solution.AddDirectionalBendingMoment() → [Ansys.ACT.Automation.Mechanical.Results.BeamResults.DirectionalBendingMoment](Results/BeamResults/DirectionalBendingMoment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.BeamResults.DirectionalBendingMoment)

Creates a new DirectionalBendingMoment

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalCurrentDensity"></a>

### Solution.AddDirectionalCurrentDensity() → [Ansys.ACT.Automation.Mechanical.Results.ElectricResults.DirectionalCurrentDensity](Results/ElectricResults/DirectionalCurrentDensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ElectricResults.DirectionalCurrentDensity)

Creates a new DirectionalCurrentDensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalDeformation"></a>

### Solution.AddDirectionalDeformation() → [Ansys.ACT.Automation.Mechanical.Results.DeformationResults.DirectionalDeformation](Results/DeformationResults/DirectionalDeformation.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DeformationResults.DirectionalDeformation)

Creates a new DirectionalDeformation

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalElectricFieldIntensity"></a>

### Solution.AddDirectionalElectricFieldIntensity() → [Ansys.ACT.Automation.Mechanical.Results.ElectricResults.DirectionalElectricFieldIntensity](Results/ElectricResults/DirectionalElectricFieldIntensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ElectricResults.DirectionalElectricFieldIntensity)

Creates a new DirectionalElectricFieldIntensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalElectricFluxDensity"></a>

### Solution.AddDirectionalElectricFluxDensity() → [Ansys.ACT.Automation.Mechanical.Results.ElectricResults.DirectionalElectricFluxDensity](Results/ElectricResults/DirectionalElectricFluxDensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ElectricResults.DirectionalElectricFluxDensity)

Creates a new DirectionalElectricFluxDensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalElectrostaticForce"></a>

### Solution.AddDirectionalElectrostaticForce() → [Ansys.ACT.Automation.Mechanical.Results.ElectricResults.DirectionalElectrostaticForce](Results/ElectricResults/DirectionalElectrostaticForce.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ElectricResults.DirectionalElectrostaticForce)

Creates a new DirectionalElectrostaticForce

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalHeatFlux"></a>

### Solution.AddDirectionalHeatFlux() → [Ansys.ACT.Automation.Mechanical.Results.ThermalResults.DirectionalHeatFlux](Results/ThermalResults/DirectionalHeatFlux.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ThermalResults.DirectionalHeatFlux)

Creates a new DirectionalHeatFlux

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalMagneticFieldIntensity"></a>

### Solution.AddDirectionalMagneticFieldIntensity() → [Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.DirectionalMagneticFieldIntensity](Results/ElectromagneticResults/DirectionalMagneticFieldIntensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.DirectionalMagneticFieldIntensity)

Creates a new DirectionalMagneticFieldIntensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalMagneticFluxDensity"></a>

### Solution.AddDirectionalMagneticFluxDensity() → [Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.DirectionalMagneticFluxDensity](Results/ElectromagneticResults/DirectionalMagneticFluxDensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.DirectionalMagneticFluxDensity)

Creates a new DirectionalMagneticFluxDensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalShearForce"></a>

### Solution.AddDirectionalShearForce() → [Ansys.ACT.Automation.Mechanical.Results.BeamResults.DirectionalShearForce](Results/BeamResults/DirectionalShearForce.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.BeamResults.DirectionalShearForce)

Creates a new DirectionalShearForce

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalTorsionalMoment"></a>

### Solution.AddDirectionalTorsionalMoment() → [Ansys.ACT.Automation.Mechanical.Results.BeamResults.DirectionalTorsionalMoment](Results/BeamResults/DirectionalTorsionalMoment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.BeamResults.DirectionalTorsionalMoment)

Creates a new DirectionalTorsionalMoment

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalVelocity"></a>

### Solution.AddDirectionalVelocity() → [Ansys.ACT.Automation.Mechanical.Results.DeformationResults.DirectionalVelocity](Results/DeformationResults/DirectionalVelocity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DeformationResults.DirectionalVelocity)

Creates a new DirectionalVelocity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalVelocityPSD"></a>

### Solution.AddDirectionalVelocityPSD() → [Ansys.ACT.Automation.Mechanical.Results.DeformationResults.DirectionalVelocityPSD](Results/DeformationResults/DirectionalVelocityPSD.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DeformationResults.DirectionalVelocityPSD)

Creates a new DirectionalVelocityPSD

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalVelocityRS"></a>

### Solution.AddDirectionalVelocityRS() → [Ansys.ACT.Automation.Mechanical.Results.DeformationResults.DirectionalVelocityRS](Results/DeformationResults/DirectionalVelocityRS.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DeformationResults.DirectionalVelocityRS)

Creates a new DirectionalVelocityRS

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddElasticStrainFrequencyResponse"></a>

### Solution.AddElasticStrainFrequencyResponse() → [Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.ElasticStrainFrequencyResponse](Results/FrequencyResponseResults/ElasticStrainFrequencyResponse.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.ElasticStrainFrequencyResponse)

Creates a new ElasticStrainFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddElasticStrainIntensity"></a>

### Solution.AddElasticStrainIntensity() → [Ansys.ACT.Automation.Mechanical.Results.StrainResults.ElasticStrainIntensity](Results/StrainResults/ElasticStrainIntensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StrainResults.ElasticStrainIntensity)

Creates a new ElasticStrainIntensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddElasticStrainPhaseResponse"></a>

### Solution.AddElasticStrainPhaseResponse() → [Ansys.ACT.Automation.Mechanical.Results.PhaseResponseResults.ElasticStrainPhaseResponse](Results/PhaseResponseResults/ElasticStrainPhaseResponse.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.PhaseResponseResults.ElasticStrainPhaseResponse)

Creates a new ElasticStrainPhaseResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddElectricFieldProbe"></a>

### Solution.AddElectricFieldProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ElectricFieldProbe](Results/ProbeResults/ElectricFieldProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ElectricFieldProbe)

Creates a new ElectricFieldProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddElectricPotential"></a>

### Solution.AddElectricPotential() → [Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.ElectricPotential](Results/ElectromagneticResults/ElectricPotential.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.ElectricPotential)

Creates a new ElectricPotential

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddElectricVoltage"></a>

### Solution.AddElectricVoltage() → [Ansys.ACT.Automation.Mechanical.Results.ElectricResults.ElectricVoltage](Results/ElectricResults/ElectricVoltage.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ElectricResults.ElectricVoltage)

Creates a new ElectricVoltage

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddElectromechanicalCouplingCoefficient"></a>

### Solution.AddElectromechanicalCouplingCoefficient() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ElectromechanicalCouplingCoefficient](Results/ProbeResults/ElectromechanicalCouplingCoefficient.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ElectromechanicalCouplingCoefficient)

Creates a new ElectromechanicalCouplingCoefficient

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddElementalEulerXYAngle"></a>

### Solution.AddElementalEulerXYAngle() → [Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.ElementalEulerXYAngle](Results/CoordinateSystemsResults/ElementalEulerXYAngle.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.ElementalEulerXYAngle)

Creates a new ElementalEulerXYAngle

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddElementalEulerXZAngle"></a>

### Solution.AddElementalEulerXZAngle() → [Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.ElementalEulerXZAngle](Results/CoordinateSystemsResults/ElementalEulerXZAngle.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.ElementalEulerXZAngle)

Creates a new ElementalEulerXZAngle

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddElementalEulerYZAngle"></a>

### Solution.AddElementalEulerYZAngle() → [Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.ElementalEulerYZAngle](Results/CoordinateSystemsResults/ElementalEulerYZAngle.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.ElementalEulerYZAngle)

Creates a new ElementalEulerYZAngle

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddElementalStrainEnergy"></a>

### Solution.AddElementalStrainEnergy() → [Ansys.ACT.Automation.Mechanical.Results.EnergyResults.ElementalStrainEnergy](Results/EnergyResults/ElementalStrainEnergy.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.EnergyResults.ElementalStrainEnergy)

Creates a new ElementalStrainEnergy

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddElementalTriads"></a>

### Solution.AddElementalTriads() → [Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.ElementalTriads](Results/CoordinateSystemsResults/ElementalTriads.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.ElementalTriads)

Creates a new ElementalTriads

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEmagReactionProbe"></a>

### Solution.AddEmagReactionProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.EmagReactionProbe](Results/ProbeResults/EmagReactionProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.EmagReactionProbe)

Creates a new EmagReactionProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEnergyDissipatedPerUnitVolume"></a>

### Solution.AddEnergyDissipatedPerUnitVolume() → [Ansys.ACT.Automation.Mechanical.Results.DamageResults.EnergyDissipatedPerUnitVolume](Results/DamageResults/EnergyDissipatedPerUnitVolume.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DamageResults.EnergyDissipatedPerUnitVolume)

Creates a new EnergyDissipatedPerUnitVolume

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEnergyProbe"></a>

### Solution.AddEnergyProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.EnergyProbe](Results/ProbeResults/EnergyProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.EnergyProbe)

Creates a new EnergyProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentCreepStrain"></a>

### Solution.AddEquivalentCreepStrain() → [Ansys.ACT.Automation.Mechanical.Results.StrainResults.EquivalentCreepStrain](Results/StrainResults/EquivalentCreepStrain.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StrainResults.EquivalentCreepStrain)

Creates a new EquivalentCreepStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentCreepStrainRST"></a>

### Solution.AddEquivalentCreepStrainRST() → [Ansys.ACT.Automation.Mechanical.Results.StrainResults.EquivalentCreepStrainRST](Results/StrainResults/EquivalentCreepStrainRST.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StrainResults.EquivalentCreepStrainRST)

Creates a new EquivalentCreepStrainRST

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentElasticStrain"></a>

### Solution.AddEquivalentElasticStrain() → [Ansys.ACT.Automation.Mechanical.Results.StrainResults.EquivalentElasticStrain](Results/StrainResults/EquivalentElasticStrain.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StrainResults.EquivalentElasticStrain)

Creates a new EquivalentElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentElasticStrainRST"></a>

### Solution.AddEquivalentElasticStrainRST() → [Ansys.ACT.Automation.Mechanical.Results.StrainResults.EquivalentElasticStrainRST](Results/StrainResults/EquivalentElasticStrainRST.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StrainResults.EquivalentElasticStrainRST)

Creates a new EquivalentElasticStrainRST

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentPlasticStrain"></a>

### Solution.AddEquivalentPlasticStrain() → [Ansys.ACT.Automation.Mechanical.Results.StrainResults.EquivalentPlasticStrain](Results/StrainResults/EquivalentPlasticStrain.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StrainResults.EquivalentPlasticStrain)

Creates a new EquivalentPlasticStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentPlasticStrainRST"></a>

### Solution.AddEquivalentPlasticStrainRST() → [Ansys.ACT.Automation.Mechanical.Results.StrainResults.EquivalentPlasticStrainRST](Results/StrainResults/EquivalentPlasticStrainRST.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StrainResults.EquivalentPlasticStrainRST)

Creates a new EquivalentPlasticStrainRST

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentRadiatedPower"></a>

### Solution.AddEquivalentRadiatedPower() → [Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.EquivalentRadiatedPower](Results/FrequencyResponseResults/EquivalentRadiatedPower.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.EquivalentRadiatedPower)

Creates a new EquivalentRadiatedPower

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentRadiatedPowerLevel"></a>

### Solution.AddEquivalentRadiatedPowerLevel() → [Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.EquivalentRadiatedPowerLevel](Results/FrequencyResponseResults/EquivalentRadiatedPowerLevel.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.EquivalentRadiatedPowerLevel)

Creates a new EquivalentRadiatedPowerLevel

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentRadiatedPowerLevelWaterfallDiagram"></a>

### Solution.AddEquivalentRadiatedPowerLevelWaterfallDiagram() → [Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.EquivalentRadiatedPowerLevelWaterfallDiagram](Results/FrequencyResponseResults/EquivalentRadiatedPowerLevelWaterfallDiagram.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.EquivalentRadiatedPowerLevelWaterfallDiagram)

Creates a new EquivalentRadiatedPowerLevelWaterfallDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentRadiatedPowerWaterfallDiagram"></a>

### Solution.AddEquivalentRadiatedPowerWaterfallDiagram() → [Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.EquivalentRadiatedPowerWaterfallDiagram](Results/FrequencyResponseResults/EquivalentRadiatedPowerWaterfallDiagram.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.EquivalentRadiatedPowerWaterfallDiagram)

Creates a new EquivalentRadiatedPowerWaterfallDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentStress"></a>

### Solution.AddEquivalentStress() → [Ansys.ACT.Automation.Mechanical.Results.StressResults.EquivalentStress](Results/StressResults/EquivalentStress.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StressResults.EquivalentStress)

Creates a new EquivalentStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentStressPSD"></a>

### Solution.AddEquivalentStressPSD() → [Ansys.ACT.Automation.Mechanical.Results.StressResults.EquivalentStressPSD](Results/StressResults/EquivalentStressPSD.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StressResults.EquivalentStressPSD)

Creates a new EquivalentStressPSD

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentStressRS"></a>

### Solution.AddEquivalentStressRS() → [Ansys.ACT.Automation.Mechanical.Results.StressResults.EquivalentStressRS](Results/StressResults/EquivalentStressRS.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StressResults.EquivalentStressRS)

Creates a new EquivalentStressRS

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentTotalStrain"></a>

### Solution.AddEquivalentTotalStrain() → [Ansys.ACT.Automation.Mechanical.Results.StrainResults.EquivalentTotalStrain](Results/StrainResults/EquivalentTotalStrain.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StrainResults.EquivalentTotalStrain)

Creates a new EquivalentTotalStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddExpansionSettings"></a>

### Solution.AddExpansionSettings() → [Ansys.ACT.Automation.Mechanical.ExpansionSettings](ExpansionSettings.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ExpansionSettings)

Creates a new ExpansionSettings

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFatigueTool"></a>

### Solution.AddFatigueTool() → [Ansys.ACT.Automation.Mechanical.FatigueTool](FatigueTool.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.FatigueTool)

AddFatigueTool method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFiberCompressiveDamageVariable"></a>

### Solution.AddFiberCompressiveDamageVariable() → [Ansys.ACT.Automation.Mechanical.Results.DamageResults.FiberCompressiveDamageVariable](Results/DamageResults/FiberCompressiveDamageVariable.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DamageResults.FiberCompressiveDamageVariable)

Creates a new FiberCompressiveDamageVariable

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFiberCompressiveFailureCriterion"></a>

### Solution.AddFiberCompressiveFailureCriterion() → [Ansys.ACT.Automation.Mechanical.Results.DamageResults.FiberCompressiveFailureCriterion](Results/DamageResults/FiberCompressiveFailureCriterion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DamageResults.FiberCompressiveFailureCriterion)

Creates a new FiberCompressiveFailureCriterion

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFiberTensileDamageVariable"></a>

### Solution.AddFiberTensileDamageVariable() → [Ansys.ACT.Automation.Mechanical.Results.DamageResults.FiberTensileDamageVariable](Results/DamageResults/FiberTensileDamageVariable.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DamageResults.FiberTensileDamageVariable)

Creates a new FiberTensileDamageVariable

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFiberTensileFailureCriterion"></a>

### Solution.AddFiberTensileFailureCriterion() → [Ansys.ACT.Automation.Mechanical.Results.DamageResults.FiberTensileFailureCriterion](Results/DamageResults/FiberTensileFailureCriterion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DamageResults.FiberTensileFailureCriterion)

Creates a new FiberTensileFailureCriterion

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFieldIntensityProbe"></a>

### Solution.AddFieldIntensityProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.FieldIntensityProbe](Results/ProbeResults/FieldIntensityProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.FieldIntensityProbe)

Creates a new FieldIntensityProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFigure"></a>

### Solution.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFlexibleRotationProbe"></a>

### Solution.AddFlexibleRotationProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.FlexibleRotationProbe](Results/ProbeResults/FlexibleRotationProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.FlexibleRotationProbe)

Creates a new FlexibleRotationProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFluidFlowRate"></a>

### Solution.AddFluidFlowRate() → [Ansys.ACT.Automation.Mechanical.Results.ThermalResults.FluidFlowRate](Results/ThermalResults/FluidFlowRate.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ThermalResults.FluidFlowRate)

Creates a new FluidFlowRate

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFluidHeatConductionRate"></a>

### Solution.AddFluidHeatConductionRate() → [Ansys.ACT.Automation.Mechanical.Results.ThermalResults.FluidHeatConductionRate](Results/ThermalResults/FluidHeatConductionRate.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ThermalResults.FluidHeatConductionRate)

Creates a new FluidHeatConductionRate

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFluidHeatTransportRate"></a>

### Solution.AddFluidHeatTransportRate() → [Ansys.ACT.Automation.Mechanical.Results.ThermalResults.FluidHeatTransportRate](Results/ThermalResults/FluidHeatTransportRate.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ThermalResults.FluidHeatTransportRate)

Creates a new FluidHeatTransportRate

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFluxDensityProbe"></a>

### Solution.AddFluxDensityProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.FluxDensityProbe](Results/ProbeResults/FluxDensityProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.FluxDensityProbe)

Creates a new FluxDensityProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFluxLinkage"></a>

### Solution.AddFluxLinkage() → [Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.FluxLinkage](Results/ElectromagneticResults/FluxLinkage.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.FluxLinkage)

Creates a new FluxLinkage

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddForceReaction"></a>

### Solution.AddForceReaction() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ForceReaction](Results/ProbeResults/ForceReaction.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ForceReaction)

Creates a new ForceReaction

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddForceReactionFrequencyResponse"></a>

### Solution.AddForceReactionFrequencyResponse() → [Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.ForceReactionFrequencyResponse](Results/FrequencyResponseResults/ForceReactionFrequencyResponse.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.ForceReactionFrequencyResponse)

Creates a new ForceReactionFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddForceReactionsForContactRegions"></a>

### Solution.AddForceReactionsForContactRegions(contactRegionObjIds: Iterable[[int](https://docs.python.org/3/library/functions.html#int)]) → [None](https://docs.python.org/3/library/constants.html#None)

AddForceReactionsForContactRegions method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddForceSummationProbe"></a>

### Solution.AddForceSummationProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ForceSummationProbe](Results/ProbeResults/ForceSummationProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ForceSummationProbe)

Creates a new ForceSummationProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFractureTool"></a>

### Solution.AddFractureTool() → [Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureTool](Results/FractureToolResults/FractureTool.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FractureToolResults.FractureTool)

Creates a new FractureTool

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddGeneralizedPlaneStrainProbe"></a>

### Solution.AddGeneralizedPlaneStrainProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.GeneralizedPlaneStrainProbe](Results/ProbeResults/GeneralizedPlaneStrainProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.GeneralizedPlaneStrainProbe)

Creates a new GeneralizedPlaneStrainProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddGroupedScopedACPResults"></a>

### Solution.AddGroupedScopedACPResults(resultType: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ResultType), selectedPlies: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → [None](https://docs.python.org/3/library/constants.html#None)

AddGroupedScopedACPResults method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddGroupedScopedCustomResult"></a>

### Solution.AddGroupedScopedCustomResult(selectedPlies: Iterable[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → [None](https://docs.python.org/3/library/constants.html#None)

AddGroupedScopedCustomResult method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddHeatFluxProbe"></a>

### Solution.AddHeatFluxProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.HeatFluxProbe](Results/ProbeResults/HeatFluxProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.HeatFluxProbe)

Creates a new HeatFluxProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddImage"></a>

### Solution.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddImpedanceFrequencyResponse"></a>

### Solution.AddImpedanceFrequencyResponse() → [Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.ImpedanceFrequencyResponse](Results/FrequencyResponseResults/ImpedanceFrequencyResponse.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.ImpedanceFrequencyResponse)

Creates a new ImpedanceFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddImpedanceProbe"></a>

### Solution.AddImpedanceProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ImpedanceProbe](Results/ProbeResults/ImpedanceProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ImpedanceProbe)

Creates a new ImpedanceProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddInductance"></a>

### Solution.AddInductance() → [Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.Inductance](Results/ElectromagneticResults/Inductance.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.Inductance)

Creates a new Inductance

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddJointProbe"></a>

### Solution.AddJointProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.JointProbe](Results/ProbeResults/JointProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.JointProbe)

Creates a new JointProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddJouleHeat"></a>

### Solution.AddJouleHeat() → [Ansys.ACT.Automation.Mechanical.Results.ElectricResults.JouleHeat](Results/ElectricResults/JouleHeat.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ElectricResults.JouleHeat)

Creates a new JouleHeat

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddJouleHeatProbe"></a>

### Solution.AddJouleHeatProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.JouleHeatProbe](Results/ProbeResults/JouleHeatProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.JouleHeatProbe)

Creates a new JouleHeatProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddLatticeDensity"></a>

### Solution.AddLatticeDensity() → [Ansys.ACT.Automation.Mechanical.Results.LatticeDensity](Results/LatticeDensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.LatticeDensity)

Creates a new LatticeDensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddLatticeElementalDensity"></a>

### Solution.AddLatticeElementalDensity() → [Ansys.ACT.Automation.Mechanical.Results.LatticeElementalDensity](Results/LatticeElementalDensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.LatticeElementalDensity)

Creates a new LatticeElementalDensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddLineChart2D"></a>

### Solution.AddLineChart2D() → [Ansys.ACT.Automation.Mechanical.LineChart2D](LineChart2D.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.LineChart2D)

Creates a new LineChart2D

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddLinePressureResult"></a>

### Solution.AddLinePressureResult() → [Ansys.ACT.Automation.Mechanical.Results.LinePressureResult](Results/LinePressureResult.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.LinePressureResult)

Creates a new LinePressureResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddLinearizedEquivalentStress"></a>

### Solution.AddLinearizedEquivalentStress() → [Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedEquivalentStress](Results/LinearizedStressResults/LinearizedEquivalentStress.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedEquivalentStress)

Creates a new LinearizedEquivalentStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddLinearizedMaximumPrincipalStress"></a>

### Solution.AddLinearizedMaximumPrincipalStress() → [Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedMaximumPrincipalStress](Results/LinearizedStressResults/LinearizedMaximumPrincipalStress.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedMaximumPrincipalStress)

Creates a new LinearizedMaximumPrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddLinearizedMaximumShearStress"></a>

### Solution.AddLinearizedMaximumShearStress() → [Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedMaximumShearStress](Results/LinearizedStressResults/LinearizedMaximumShearStress.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedMaximumShearStress)

Creates a new LinearizedMaximumShearStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddLinearizedMiddlePrincipalStress"></a>

### Solution.AddLinearizedMiddlePrincipalStress() → [Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedMiddlePrincipalStress](Results/LinearizedStressResults/LinearizedMiddlePrincipalStress.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedMiddlePrincipalStress)

Creates a new LinearizedMiddlePrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddLinearizedMinimumPrincipalStress"></a>

### Solution.AddLinearizedMinimumPrincipalStress() → [Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedMinimumPrincipalStress](Results/LinearizedStressResults/LinearizedMinimumPrincipalStress.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedMinimumPrincipalStress)

Creates a new LinearizedMinimumPrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddLinearizedNormalStress"></a>

### Solution.AddLinearizedNormalStress() → [Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedNormalStress](Results/LinearizedStressResults/LinearizedNormalStress.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedNormalStress)

Creates a new LinearizedNormalStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddLinearizedShearStress"></a>

### Solution.AddLinearizedShearStress() → [Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedShearStress](Results/LinearizedStressResults/LinearizedShearStress.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedShearStress)

Creates a new LinearizedShearStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddLinearizedStressIntensity"></a>

### Solution.AddLinearizedStressIntensity() → [Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedStressIntensity](Results/LinearizedStressResults/LinearizedStressIntensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.LinearizedStressResults.LinearizedStressIntensity)

Creates a new LinearizedStressIntensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMCFWaterfallDiagram"></a>

### Solution.AddMCFWaterfallDiagram() → [Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.MCFWaterfallDiagram](Results/FrequencyResponseResults/MCFWaterfallDiagram.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.MCFWaterfallDiagram)

Creates a new MCFWaterfallDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMagneticCoenergy"></a>

### Solution.AddMagneticCoenergy() → [Ansys.ACT.Automation.Mechanical.Results.MagneticCoenergy](Results/MagneticCoenergy.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.MagneticCoenergy)

Creates a new MagneticCoenergy

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMagneticDirectionalForces"></a>

### Solution.AddMagneticDirectionalForces() → [Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.MagneticDirectionalForces](Results/ElectromagneticResults/MagneticDirectionalForces.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.MagneticDirectionalForces)

Creates a new MagneticDirectionalForces

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMagneticError"></a>

### Solution.AddMagneticError() → [Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.MagneticError](Results/ElectromagneticResults/MagneticError.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.MagneticError)

Creates a new MagneticError

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMagneticFluxProbe"></a>

### Solution.AddMagneticFluxProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.MagneticFluxProbe](Results/ProbeResults/MagneticFluxProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.MagneticFluxProbe)

Creates a new MagneticFluxProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMagneticPotential"></a>

### Solution.AddMagneticPotential() → [Ansys.ACT.Automation.Mechanical.Results.MagneticPotential](Results/MagneticPotential.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.MagneticPotential)

Creates a new MagneticPotential

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMagneticTotalForces"></a>

### Solution.AddMagneticTotalForces() → [Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.MagneticTotalForces](Results/ElectromagneticResults/MagneticTotalForces.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.MagneticTotalForces)

Creates a new MagneticTotalForces

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMatrixCompressiveDamageVariable"></a>

### Solution.AddMatrixCompressiveDamageVariable() → [Ansys.ACT.Automation.Mechanical.Results.DamageResults.MatrixCompressiveDamageVariable](Results/DamageResults/MatrixCompressiveDamageVariable.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DamageResults.MatrixCompressiveDamageVariable)

Creates a new MatrixCompressiveDamageVariable

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMatrixCompressiveFailureCriterion"></a>

### Solution.AddMatrixCompressiveFailureCriterion() → [Ansys.ACT.Automation.Mechanical.Results.DamageResults.MatrixCompressiveFailureCriterion](Results/DamageResults/MatrixCompressiveFailureCriterion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DamageResults.MatrixCompressiveFailureCriterion)

Creates a new MatrixCompressiveFailureCriterion

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMatrixTensileDamageVariable"></a>

### Solution.AddMatrixTensileDamageVariable() → [Ansys.ACT.Automation.Mechanical.Results.DamageResults.MatrixTensileDamageVariable](Results/DamageResults/MatrixTensileDamageVariable.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DamageResults.MatrixTensileDamageVariable)

Creates a new MatrixTensileDamageVariable

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMatrixTensileFailureCriterion"></a>

### Solution.AddMatrixTensileFailureCriterion() → [Ansys.ACT.Automation.Mechanical.Results.DamageResults.MatrixTensileFailureCriterion](Results/DamageResults/MatrixTensileFailureCriterion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DamageResults.MatrixTensileFailureCriterion)

Creates a new MatrixTensileFailureCriterion

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMaximumFailureCriteria"></a>

### Solution.AddMaximumFailureCriteria() → [Ansys.ACT.Automation.Mechanical.Results.DamageResults.MaximumFailureCriteria](Results/DamageResults/MaximumFailureCriteria.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DamageResults.MaximumFailureCriteria)

Creates a new MaximumFailureCriteria

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMaximumPrincipalElasticStrain"></a>

### Solution.AddMaximumPrincipalElasticStrain() → [Ansys.ACT.Automation.Mechanical.Results.StrainResults.MaximumPrincipalElasticStrain](Results/StrainResults/MaximumPrincipalElasticStrain.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StrainResults.MaximumPrincipalElasticStrain)

Creates a new MaximumPrincipalElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMaximumPrincipalStress"></a>

### Solution.AddMaximumPrincipalStress() → [Ansys.ACT.Automation.Mechanical.Results.StressResults.MaximumPrincipalStress](Results/StressResults/MaximumPrincipalStress.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StressResults.MaximumPrincipalStress)

Creates a new MaximumPrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMaximumPrincipalThermalStrain"></a>

### Solution.AddMaximumPrincipalThermalStrain() → [Ansys.ACT.Automation.Mechanical.Results.StrainResults.MaximumPrincipalThermalStrain](Results/StrainResults/MaximumPrincipalThermalStrain.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StrainResults.MaximumPrincipalThermalStrain)

Creates a new MaximumPrincipalThermalStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMaximumShearElasticStrain"></a>

### Solution.AddMaximumShearElasticStrain() → [Ansys.ACT.Automation.Mechanical.Results.StrainResults.MaximumShearElasticStrain](Results/StrainResults/MaximumShearElasticStrain.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StrainResults.MaximumShearElasticStrain)

Creates a new MaximumShearElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMaximumShearStress"></a>

### Solution.AddMaximumShearStress() → [Ansys.ACT.Automation.Mechanical.Results.StressResults.MaximumShearStress](Results/StressResults/MaximumShearStress.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StressResults.MaximumShearStress)

Creates a new MaximumShearStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMembraneStressEquivalent"></a>

### Solution.AddMembraneStressEquivalent() → [Ansys.ACT.Automation.Mechanical.Results.StressResults.MembraneStressEquivalent](Results/StressResults/MembraneStressEquivalent.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StressResults.MembraneStressEquivalent)

Creates a new MembraneStressEquivalent

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMembraneStressIntensity"></a>

### Solution.AddMembraneStressIntensity() → [Ansys.ACT.Automation.Mechanical.Results.StressResults.MembraneStressIntensity](Results/StressResults/MembraneStressIntensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StressResults.MembraneStressIntensity)

Creates a new MembraneStressIntensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMiddlePrincipalElasticStrain"></a>

### Solution.AddMiddlePrincipalElasticStrain() → [Ansys.ACT.Automation.Mechanical.Results.StrainResults.MiddlePrincipalElasticStrain](Results/StrainResults/MiddlePrincipalElasticStrain.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StrainResults.MiddlePrincipalElasticStrain)

Creates a new MiddlePrincipalElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMiddlePrincipalStress"></a>

### Solution.AddMiddlePrincipalStress() → [Ansys.ACT.Automation.Mechanical.Results.StressResults.MiddlePrincipalStress](Results/StressResults/MiddlePrincipalStress.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StressResults.MiddlePrincipalStress)

Creates a new MiddlePrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMiddlePrincipalThermalStrain"></a>

### Solution.AddMiddlePrincipalThermalStrain() → [Ansys.ACT.Automation.Mechanical.Results.StrainResults.MiddlePrincipalThermalStrain](Results/StrainResults/MiddlePrincipalThermalStrain.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StrainResults.MiddlePrincipalThermalStrain)

Creates a new MiddlePrincipalThermalStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMinimumPrincipalElasticStrain"></a>

### Solution.AddMinimumPrincipalElasticStrain() → [Ansys.ACT.Automation.Mechanical.Results.StrainResults.MinimumPrincipalElasticStrain](Results/StrainResults/MinimumPrincipalElasticStrain.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StrainResults.MinimumPrincipalElasticStrain)

Creates a new MinimumPrincipalElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMinimumPrincipalStress"></a>

### Solution.AddMinimumPrincipalStress() → [Ansys.ACT.Automation.Mechanical.Results.StressResults.MinimumPrincipalStress](Results/StressResults/MinimumPrincipalStress.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StressResults.MinimumPrincipalStress)

Creates a new MinimumPrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMomentReaction"></a>

### Solution.AddMomentReaction() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.MomentReaction](Results/ProbeResults/MomentReaction.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.MomentReaction)

Creates a new MomentReaction

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMomentReactionsForContactRegions"></a>

### Solution.AddMomentReactionsForContactRegions(contactRegionObjIds: Iterable[[int](https://docs.python.org/3/library/functions.html#int)]) → [None](https://docs.python.org/3/library/constants.html#None)

AddMomentReactionsForContactRegions method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMullinsDamageVariable"></a>

### Solution.AddMullinsDamageVariable() → [Ansys.ACT.Automation.Mechanical.Results.DamageResults.MullinsDamageVariable](Results/DamageResults/MullinsDamageVariable.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DamageResults.MullinsDamageVariable)

Creates a new MullinsDamageVariable

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMullinsMaximumPreviousStrainEnergy"></a>

### Solution.AddMullinsMaximumPreviousStrainEnergy() → [Ansys.ACT.Automation.Mechanical.Results.DamageResults.MullinsMaximumPreviousStrainEnergy](Results/DamageResults/MullinsMaximumPreviousStrainEnergy.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DamageResults.MullinsMaximumPreviousStrainEnergy)

Creates a new MullinsMaximumPreviousStrainEnergy

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddNewtonRaphsonResidualCharge"></a>

### Solution.AddNewtonRaphsonResidualCharge() → [Ansys.ACT.Automation.Mechanical.Results.NewtonRaphsonResidualCharge](Results/NewtonRaphsonResidualCharge.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.NewtonRaphsonResidualCharge)

Creates a new NewtonRaphsonResidualCharge

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddNewtonRaphsonResidualForce"></a>

### Solution.AddNewtonRaphsonResidualForce() → [Ansys.ACT.Automation.Mechanical.Results.NewtonRaphsonResidualForce](Results/NewtonRaphsonResidualForce.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.NewtonRaphsonResidualForce)

Creates a new NewtonRaphsonResidualForce

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddNewtonRaphsonResidualHeat"></a>

### Solution.AddNewtonRaphsonResidualHeat() → [Ansys.ACT.Automation.Mechanical.Results.NewtonRaphsonResidualHeat](Results/NewtonRaphsonResidualHeat.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.NewtonRaphsonResidualHeat)

Creates a new NewtonRaphsonResidualHeat

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddNewtonRaphsonResidualMoment"></a>

### Solution.AddNewtonRaphsonResidualMoment() → [Ansys.ACT.Automation.Mechanical.Results.NewtonRaphsonResidualMoment](Results/NewtonRaphsonResidualMoment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.NewtonRaphsonResidualMoment)

Creates a new NewtonRaphsonResidualMoment

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddNodalEulerXYAngle"></a>

### Solution.AddNodalEulerXYAngle() → [Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.NodalEulerXYAngle](Results/CoordinateSystemsResults/NodalEulerXYAngle.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.NodalEulerXYAngle)

Creates a new NodalEulerXYAngle

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddNodalEulerXZAngle"></a>

### Solution.AddNodalEulerXZAngle() → [Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.NodalEulerXZAngle](Results/CoordinateSystemsResults/NodalEulerXZAngle.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.NodalEulerXZAngle)

Creates a new NodalEulerXZAngle

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddNodalEulerYZAngle"></a>

### Solution.AddNodalEulerYZAngle() → [Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.NodalEulerYZAngle](Results/CoordinateSystemsResults/NodalEulerYZAngle.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.NodalEulerYZAngle)

Creates a new NodalEulerYZAngle

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddNodalTriads"></a>

### Solution.AddNodalTriads() → [Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.NodalTriads](Results/CoordinateSystemsResults/NodalTriads.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.CoordinateSystemsResults.NodalTriads)

Creates a new NodalTriads

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddNormalElasticStrain"></a>

### Solution.AddNormalElasticStrain() → [Ansys.ACT.Automation.Mechanical.Results.StrainResults.NormalElasticStrain](Results/StrainResults/NormalElasticStrain.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StrainResults.NormalElasticStrain)

Creates a new NormalElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddNormalGasketPressure"></a>

### Solution.AddNormalGasketPressure() → [Ansys.ACT.Automation.Mechanical.Results.GasketResults.NormalGasketPressure](Results/GasketResults/NormalGasketPressure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.GasketResults.NormalGasketPressure)

Creates a new NormalGasketPressure

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddNormalGasketTotalClosure"></a>

### Solution.AddNormalGasketTotalClosure() → [Ansys.ACT.Automation.Mechanical.Results.GasketResults.NormalGasketTotalClosure](Results/GasketResults/NormalGasketTotalClosure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.GasketResults.NormalGasketTotalClosure)

Creates a new NormalGasketTotalClosure

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddNormalStress"></a>

### Solution.AddNormalStress() → [Ansys.ACT.Automation.Mechanical.Results.StressResults.NormalStress](Results/StressResults/NormalStress.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StressResults.NormalStress)

Creates a new NormalStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddPosition"></a>

### Solution.AddPosition() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.Position](Results/ProbeResults/Position.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.Position)

Creates a new Position

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddPrimaryCriterion"></a>

### Solution.AddPrimaryCriterion() → [Ansys.ACT.Automation.Mechanical.PrimaryCriterion](PrimaryCriterion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.PrimaryCriterion)

Creates a new PrimaryCriterion

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddPythonCodeEventBased"></a>

### Solution.AddPythonCodeEventBased() → [Ansys.ACT.Automation.Mechanical.PythonCodeEventBased](PythonCodeEventBased.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.PythonCodeEventBased)

Creates a new PythonCodeEventBased

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddPythonResult"></a>

### Solution.AddPythonResult() → [Ansys.ACT.Automation.Mechanical.Results.ScriptableResults.PythonResult](Results/ScriptableResults/PythonResult.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ScriptableResults.PythonResult)

Creates a new PythonResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddQualityFactor"></a>

### Solution.AddQualityFactor() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.QualityFactor](Results/ProbeResults/QualityFactor.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.QualityFactor)

Creates a new QualityFactor

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddRadiationProbe"></a>

### Solution.AddRadiationProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.RadiationProbe](Results/ProbeResults/RadiationProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.RadiationProbe)

Creates a new RadiationProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddReactionProbe"></a>

### Solution.AddReactionProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ReactionProbe](Results/ProbeResults/ReactionProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ReactionProbe)

Creates a new ReactionProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddReactionsForContactRegions"></a>

### Solution.AddReactionsForContactRegions(contactRegionObjIds: Iterable[[int](https://docs.python.org/3/library/functions.html#int)]) → [None](https://docs.python.org/3/library/constants.html#None)

AddReactionsForContactRegions method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddResponsePSD"></a>

### Solution.AddResponsePSD() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ResponsePSD](Results/ProbeResults/ResponsePSD.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ResponsePSD)

Creates a new ResponsePSD

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddResponsePSDTool"></a>

### Solution.AddResponsePSDTool() → [Ansys.ACT.Automation.Mechanical.ResponsePSDTool](ResponsePSDTool.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ResponsePSDTool)

Creates a new ResponsePSDTool

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddResultMesh"></a>

### Solution.AddResultMesh() → [Ansys.ACT.Automation.Mechanical.ResultMesh](ResultMesh.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ResultMesh)

Creates a new ResultMesh

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddRotationProbe"></a>

### Solution.AddRotationProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.RotationProbe](Results/ProbeResults/RotationProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.RotationProbe)

Creates a new RotationProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShapeFinder"></a>

### Solution.AddShapeFinder() → [Ansys.ACT.Automation.Mechanical.Results.ShapeFinder](Results/ShapeFinder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ShapeFinder)

Creates a new ShapeFinder

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShapeFinderElemental"></a>

### Solution.AddShapeFinderElemental() → [Ansys.ACT.Automation.Mechanical.Results.ShapeFinderElemental](Results/ShapeFinderElemental.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ShapeFinderElemental)

Creates a new ShapeFinderElemental

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearDamageVariable"></a>

### Solution.AddShearDamageVariable() → [Ansys.ACT.Automation.Mechanical.Results.DamageResults.ShearDamageVariable](Results/DamageResults/ShearDamageVariable.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DamageResults.ShearDamageVariable)

Creates a new ShearDamageVariable

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearElasticStrain"></a>

### Solution.AddShearElasticStrain() → [Ansys.ACT.Automation.Mechanical.Results.StrainResults.ShearElasticStrain](Results/StrainResults/ShearElasticStrain.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StrainResults.ShearElasticStrain)

Creates a new ShearElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearGasketPressure"></a>

### Solution.AddShearGasketPressure() → [Ansys.ACT.Automation.Mechanical.Results.GasketResults.ShearGasketPressure](Results/GasketResults/ShearGasketPressure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.GasketResults.ShearGasketPressure)

Creates a new ShearGasketPressure

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearGasketTotalClosure"></a>

### Solution.AddShearGasketTotalClosure() → [Ansys.ACT.Automation.Mechanical.Results.GasketResults.ShearGasketTotalClosure](Results/GasketResults/ShearGasketTotalClosure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.GasketResults.ShearGasketTotalClosure)

Creates a new ShearGasketTotalClosure

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearMomentDiagramMSUM"></a>

### Solution.AddShearMomentDiagramMSUM() → [Ansys.ACT.Automation.Mechanical.Results.BeamResults.TotalShearMomentDiagram](Results/BeamResults/TotalShearMomentDiagram.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.BeamResults.TotalShearMomentDiagram)

Creates a new TotalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearMomentDiagramMY"></a>

### Solution.AddShearMomentDiagramMY() → [Ansys.ACT.Automation.Mechanical.Results.BeamResults.DirectionalShearMomentDiagram](Results/BeamResults/DirectionalShearMomentDiagram.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.BeamResults.DirectionalShearMomentDiagram)

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearMomentDiagramMZ"></a>

### Solution.AddShearMomentDiagramMZ() → [Ansys.ACT.Automation.Mechanical.Results.BeamResults.DirectionalShearMomentDiagram](Results/BeamResults/DirectionalShearMomentDiagram.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.BeamResults.DirectionalShearMomentDiagram)

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearMomentDiagramUSUM"></a>

### Solution.AddShearMomentDiagramUSUM() → [Ansys.ACT.Automation.Mechanical.Results.BeamResults.TotalShearMomentDiagram](Results/BeamResults/TotalShearMomentDiagram.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.BeamResults.TotalShearMomentDiagram)

Creates a new TotalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearMomentDiagramUY"></a>

### Solution.AddShearMomentDiagramUY() → [Ansys.ACT.Automation.Mechanical.Results.BeamResults.DirectionalShearMomentDiagram](Results/BeamResults/DirectionalShearMomentDiagram.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.BeamResults.DirectionalShearMomentDiagram)

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearMomentDiagramUZ"></a>

### Solution.AddShearMomentDiagramUZ() → [Ansys.ACT.Automation.Mechanical.Results.BeamResults.DirectionalShearMomentDiagram](Results/BeamResults/DirectionalShearMomentDiagram.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.BeamResults.DirectionalShearMomentDiagram)

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearMomentDiagramVSUM"></a>

### Solution.AddShearMomentDiagramVSUM() → [Ansys.ACT.Automation.Mechanical.Results.BeamResults.TotalShearMomentDiagram](Results/BeamResults/TotalShearMomentDiagram.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.BeamResults.TotalShearMomentDiagram)

Creates a new TotalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearMomentDiagramVY"></a>

### Solution.AddShearMomentDiagramVY() → [Ansys.ACT.Automation.Mechanical.Results.BeamResults.DirectionalShearMomentDiagram](Results/BeamResults/DirectionalShearMomentDiagram.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.BeamResults.DirectionalShearMomentDiagram)

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearMomentDiagramVZ"></a>

### Solution.AddShearMomentDiagramVZ() → [Ansys.ACT.Automation.Mechanical.Results.BeamResults.DirectionalShearMomentDiagram](Results/BeamResults/DirectionalShearMomentDiagram.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.BeamResults.DirectionalShearMomentDiagram)

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearStress"></a>

### Solution.AddShearStress() → [Ansys.ACT.Automation.Mechanical.Results.StressResults.ShearStress](Results/StressResults/ShearStress.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StressResults.ShearStress)

Creates a new ShearStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShellBendingStress"></a>

### Solution.AddShellBendingStress() → [Ansys.ACT.Automation.Mechanical.Results.StressResults.ShellBendingStress](Results/StressResults/ShellBendingStress.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StressResults.ShellBendingStress)

Creates a new ShellBendingStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShellBottomPeakStress"></a>

### Solution.AddShellBottomPeakStress() → [Ansys.ACT.Automation.Mechanical.Results.StressResults.ShellBottomPeakStress](Results/StressResults/ShellBottomPeakStress.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StressResults.ShellBottomPeakStress)

Creates a new ShellBottomPeakStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShellMembraneStress"></a>

### Solution.AddShellMembraneStress() → [Ansys.ACT.Automation.Mechanical.Results.StressResults.ShellMembraneStress](Results/StressResults/ShellMembraneStress.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StressResults.ShellMembraneStress)

Creates a new ShellMembraneStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShellTopPeakStress"></a>

### Solution.AddShellTopPeakStress() → [Ansys.ACT.Automation.Mechanical.Results.StressResults.ShellTopPeakStress](Results/StressResults/ShellTopPeakStress.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StressResults.ShellTopPeakStress)

Creates a new ShellTopPeakStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddSpringProbe"></a>

### Solution.AddSpringProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.SpringProbe](Results/ProbeResults/SpringProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.SpringProbe)

Creates a new SpringProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddStabilizationEnergy"></a>

### Solution.AddStabilizationEnergy() → [Ansys.ACT.Automation.Mechanical.Results.EnergyResults.StabilizationEnergy](Results/EnergyResults/StabilizationEnergy.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.EnergyResults.StabilizationEnergy)

Creates a new StabilizationEnergy

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddStrainProbe"></a>

### Solution.AddStrainProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.StrainProbe](Results/ProbeResults/StrainProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.StrainProbe)

Creates a new StrainProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddStressFrequencyResponse"></a>

### Solution.AddStressFrequencyResponse() → [Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.StressFrequencyResponse](Results/FrequencyResponseResults/StressFrequencyResponse.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.StressFrequencyResponse)

Creates a new StressFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddStressIntensity"></a>

### Solution.AddStressIntensity() → [Ansys.ACT.Automation.Mechanical.Results.StressResults.StressIntensity](Results/StressResults/StressIntensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StressResults.StressIntensity)

Creates a new StressIntensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddStressPhaseResponse"></a>

### Solution.AddStressPhaseResponse() → [Ansys.ACT.Automation.Mechanical.Results.PhaseResponseResults.StressPhaseResponse](Results/PhaseResponseResults/StressPhaseResponse.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.PhaseResponseResults.StressPhaseResponse)

Creates a new StressPhaseResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddStressProbe"></a>

### Solution.AddStressProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.StressProbe](Results/ProbeResults/StressProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.StressProbe)

Creates a new StressProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddStressTool"></a>

### Solution.AddStressTool() → [Ansys.ACT.Automation.Mechanical.Results.StressToolResults.StressTool](Results/StressToolResults/StressTool.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StressToolResults.StressTool)

Creates a new StressTool

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddStructuralError"></a>

### Solution.AddStructuralError() → [Ansys.ACT.Automation.Mechanical.Results.StressResults.StructuralError](Results/StressResults/StructuralError.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StressResults.StructuralError)

Creates a new StructuralError

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddStructuralStrainEnergy"></a>

### Solution.AddStructuralStrainEnergy() → [Ansys.ACT.Automation.Mechanical.Results.EnergyResults.StructuralStrainEnergy](Results/EnergyResults/StructuralStrainEnergy.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.EnergyResults.StructuralStrainEnergy)

Creates a new StructuralStrainEnergy

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTemperature"></a>

### Solution.AddTemperature() → [Ansys.ACT.Automation.Mechanical.Results.ThermalResults.TemperatureResult](Results/ThermalResults/TemperatureResult.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ThermalResults.TemperatureResult)

Creates a new TemperatureResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTemperatureProbe"></a>

### Solution.AddTemperatureProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.TemperatureProbe](Results/ProbeResults/TemperatureProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.TemperatureProbe)

Creates a new TemperatureProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddThermalError"></a>

### Solution.AddThermalError() → [Ansys.ACT.Automation.Mechanical.Results.ThermalResults.ThermalError](Results/ThermalResults/ThermalError.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ThermalResults.ThermalError)

Creates a new ThermalError

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddThermalStrain"></a>

### Solution.AddThermalStrain() → [Ansys.ACT.Automation.Mechanical.Results.StrainResults.DirectionalThermalStrain](Results/StrainResults/DirectionalThermalStrain.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StrainResults.DirectionalThermalStrain)

Creates a new DirectionalThermalStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddThermalStrainEnergy"></a>

### Solution.AddThermalStrainEnergy() → [Ansys.ACT.Automation.Mechanical.Results.EnergyResults.ThermalStrainEnergy](Results/EnergyResults/ThermalStrainEnergy.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.EnergyResults.ThermalStrainEnergy)

Creates a new ThermalStrainEnergy

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTopologyDensity"></a>

### Solution.AddTopologyDensity() → [Ansys.ACT.Automation.Mechanical.Results.TopologyDensity](Results/TopologyDensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.TopologyDensity)

Creates a new TopologyDensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTopologyElementalDensity"></a>

### Solution.AddTopologyElementalDensity() → [Ansys.ACT.Automation.Mechanical.Results.TopologyElementalDensity](Results/TopologyElementalDensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.TopologyElementalDensity)

Creates a new TopologyElementalDensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTopologyMultiDensity"></a>

### Solution.AddTopologyMultiDensity() → [Ansys.ACT.Automation.Mechanical.Results.TopologyMultiDensity](Results/TopologyMultiDensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.TopologyMultiDensity)

Creates a new TopologyMultiDensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTorqueProbe"></a>

### Solution.AddTorqueProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.TorqueProbe](Results/ProbeResults/TorqueProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.TorqueProbe)

Creates a new TorqueProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalAcceleration"></a>

### Solution.AddTotalAcceleration() → [Ansys.ACT.Automation.Mechanical.Results.DeformationResults.TotalAcceleration](Results/DeformationResults/TotalAcceleration.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DeformationResults.TotalAcceleration)

Creates a new TotalAcceleration

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalAxialForce"></a>

### Solution.AddTotalAxialForce() → [Ansys.ACT.Automation.Mechanical.Results.BeamResults.TotalAxialForce](Results/BeamResults/TotalAxialForce.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.BeamResults.TotalAxialForce)

Creates a new TotalAxialForce

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalBendingMoment"></a>

### Solution.AddTotalBendingMoment() → [Ansys.ACT.Automation.Mechanical.Results.BeamResults.TotalBendingMoment](Results/BeamResults/TotalBendingMoment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.BeamResults.TotalBendingMoment)

Creates a new TotalBendingMoment

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalCurrentDensity"></a>

### Solution.AddTotalCurrentDensity() → [Ansys.ACT.Automation.Mechanical.Results.ElectricResults.TotalCurrentDensity](Results/ElectricResults/TotalCurrentDensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ElectricResults.TotalCurrentDensity)

Creates a new TotalCurrentDensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalDeformation"></a>

### Solution.AddTotalDeformation() → [Ansys.ACT.Automation.Mechanical.Results.DeformationResults.TotalDeformation](Results/DeformationResults/TotalDeformation.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DeformationResults.TotalDeformation)

Creates a new TotalDeformation

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalElectricFieldIntensity"></a>

### Solution.AddTotalElectricFieldIntensity() → [Ansys.ACT.Automation.Mechanical.Results.ElectricResults.TotalElectricFieldIntensity](Results/ElectricResults/TotalElectricFieldIntensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ElectricResults.TotalElectricFieldIntensity)

Creates a new TotalElectricFieldIntensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalElectricFluxDensity"></a>

### Solution.AddTotalElectricFluxDensity() → [Ansys.ACT.Automation.Mechanical.Results.ElectricResults.TotalElectricFluxDensity](Results/ElectricResults/TotalElectricFluxDensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ElectricResults.TotalElectricFluxDensity)

Creates a new TotalElectricFluxDensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalElectrostaticForce"></a>

### Solution.AddTotalElectrostaticForce() → [Ansys.ACT.Automation.Mechanical.Results.ElectricResults.TotalElectrostaticForce](Results/ElectricResults/TotalElectrostaticForce.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ElectricResults.TotalElectrostaticForce)

Creates a new TotalElectrostaticForce

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalHeatFlux"></a>

### Solution.AddTotalHeatFlux() → [Ansys.ACT.Automation.Mechanical.Results.ThermalResults.TotalHeatFlux](Results/ThermalResults/TotalHeatFlux.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ThermalResults.TotalHeatFlux)

Creates a new TotalHeatFlux

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalMagneticFieldIntensity"></a>

### Solution.AddTotalMagneticFieldIntensity() → [Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.TotalMagneticFieldIntensity](Results/ElectromagneticResults/TotalMagneticFieldIntensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.TotalMagneticFieldIntensity)

Creates a new TotalMagneticFieldIntensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalMagneticFluxDensity"></a>

### Solution.AddTotalMagneticFluxDensity() → [Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.TotalMagneticFluxDensity](Results/ElectromagneticResults/TotalMagneticFluxDensity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ElectromagneticResults.TotalMagneticFluxDensity)

Creates a new TotalMagneticFluxDensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalShearForce"></a>

### Solution.AddTotalShearForce() → [Ansys.ACT.Automation.Mechanical.Results.BeamResults.TotalShearForce](Results/BeamResults/TotalShearForce.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.BeamResults.TotalShearForce)

Creates a new TotalShearForce

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalTorsionalMoment"></a>

### Solution.AddTotalTorsionalMoment() → [Ansys.ACT.Automation.Mechanical.Results.BeamResults.TotalTorsionalMoment](Results/BeamResults/TotalTorsionalMoment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.BeamResults.TotalTorsionalMoment)

Creates a new TotalTorsionalMoment

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalVelocity"></a>

### Solution.AddTotalVelocity() → [Ansys.ACT.Automation.Mechanical.Results.DeformationResults.TotalVelocity](Results/DeformationResults/TotalVelocity.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DeformationResults.TotalVelocity)

Creates a new TotalVelocity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddUserDefinedResult"></a>

### Solution.AddUserDefinedResult() → [Ansys.ACT.Automation.Mechanical.Results.UserDefinedResult](Results/UserDefinedResult.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.UserDefinedResult)

Creates a new UserDefinedResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVariableGraph"></a>

### Solution.AddVariableGraph() → [Ansys.ACT.Automation.Mechanical.Results.VariableGraph](Results/VariableGraph.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.VariableGraph)

Creates a new VariableGraph

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVectorAxialForce"></a>

### Solution.AddVectorAxialForce() → [Ansys.ACT.Automation.Mechanical.Results.BeamResults.VectorAxialForce](Results/BeamResults/VectorAxialForce.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.BeamResults.VectorAxialForce)

Creates a new VectorAxialForce

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVectorBendingMoment"></a>

### Solution.AddVectorBendingMoment() → [Ansys.ACT.Automation.Mechanical.Results.BeamResults.VectorBendingMoment](Results/BeamResults/VectorBendingMoment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.BeamResults.VectorBendingMoment)

Creates a new VectorBendingMoment

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVectorDeformation"></a>

### Solution.AddVectorDeformation() → [Ansys.ACT.Automation.Mechanical.Results.DeformationResults.VectorDeformation](Results/DeformationResults/VectorDeformation.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.DeformationResults.VectorDeformation)

Creates a new VectorDeformation

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVectorHeatFlux"></a>

### Solution.AddVectorHeatFlux() → [Ansys.ACT.Automation.Mechanical.Results.ThermalResults.VectorHeatFlux](Results/ThermalResults/VectorHeatFlux.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ThermalResults.VectorHeatFlux)

Creates a new VectorHeatFlux

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVectorPrincipalElasticStrain"></a>

### Solution.AddVectorPrincipalElasticStrain() → [Ansys.ACT.Automation.Mechanical.Results.StrainResults.VectorPrincipalElasticStrain](Results/StrainResults/VectorPrincipalElasticStrain.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StrainResults.VectorPrincipalElasticStrain)

Creates a new VectorPrincipalElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVectorPrincipalStress"></a>

### Solution.AddVectorPrincipalStress() → [Ansys.ACT.Automation.Mechanical.Results.StressResults.VectorPrincipalStress](Results/StressResults/VectorPrincipalStress.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.StressResults.VectorPrincipalStress)

Creates a new VectorPrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVectorShearForce"></a>

### Solution.AddVectorShearForce() → [Ansys.ACT.Automation.Mechanical.Results.BeamResults.VectorShearForce](Results/BeamResults/VectorShearForce.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.BeamResults.VectorShearForce)

Creates a new VectorShearForce

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVectorTorsionalMoment"></a>

### Solution.AddVectorTorsionalMoment() → [Ansys.ACT.Automation.Mechanical.Results.BeamResults.VectorTorsionalMoment](Results/BeamResults/VectorTorsionalMoment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.BeamResults.VectorTorsionalMoment)

Creates a new VectorTorsionalMoment

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVelocityFrequencyResponse"></a>

### Solution.AddVelocityFrequencyResponse() → [Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.VelocityFrequencyResponse](Results/FrequencyResponseResults/VelocityFrequencyResponse.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.VelocityFrequencyResponse)

Creates a new VelocityFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVelocityPhaseResponse"></a>

### Solution.AddVelocityPhaseResponse() → [Ansys.ACT.Automation.Mechanical.Results.PhaseResponseResults.VelocityPhaseResponse](Results/PhaseResponseResults/VelocityPhaseResponse.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.PhaseResponseResults.VelocityPhaseResponse)

Creates a new VelocityPhaseResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVelocityProbe"></a>

### Solution.AddVelocityProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.VelocityProbe](Results/ProbeResults/VelocityProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.VelocityProbe)

Creates a new VelocityProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVelocityWaterfallDiagram"></a>

### Solution.AddVelocityWaterfallDiagram() → [Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.VelocityWaterfallDiagram](Results/FrequencyResponseResults/VelocityWaterfallDiagram.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.VelocityWaterfallDiagram)

Creates a new VelocityWaterfallDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVoltageFrequencyResponse"></a>

### Solution.AddVoltageFrequencyResponse() → [Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.VoltageFrequencyResponse](Results/FrequencyResponseResults/VoltageFrequencyResponse.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.FrequencyResponseResults.VoltageFrequencyResponse)

Creates a new VoltageFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVoltageProbe"></a>

### Solution.AddVoltageProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ElectricVoltageProbe](Results/ProbeResults/ElectricVoltageProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.ElectricVoltageProbe)

Creates a new ElectricVoltageProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVolume"></a>

### Solution.AddVolume() → [Ansys.ACT.Automation.Mechanical.Results.Volume](Results/Volume.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.Volume)

Creates a new Volume

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVolumeProbe"></a>

### Solution.AddVolumeProbe() → [Ansys.ACT.Automation.Mechanical.Results.ProbeResults.VolumeProbe](Results/ProbeResults/VolumeProbe.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Results.ProbeResults.VolumeProbe)

Creates a new VolumeProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.ClearGeneratedData"></a>

### Solution.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ClearRemoteStorageData"></a>

### Solution.ClearRemoteStorageData() → [None](https://docs.python.org/3/library/constants.html#None)

ClearRemoteStorageData method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.CopyTo"></a>

### Solution.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Solution.CreateParameter"></a>

### Solution.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.CreateResultsAtAllSets"></a>

### Solution.CreateResultsAtAllSets(resId: [int](https://docs.python.org/3/library/functions.html#int)) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

CreateResultsAtAllSets method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.DeleteRow"></a>

### Solution.DeleteRow(index: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

DeleteRow method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.DisconnectRemoteJob"></a>

### Solution.DisconnectRemoteJob() → [None](https://docs.python.org/3/library/constants.html#None)

DisconnectRemoteJob method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.Duplicate"></a>

### Solution.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Solution.EvaluateAllContactTrackers"></a>

### Solution.EvaluateAllContactTrackers() → [None](https://docs.python.org/3/library/constants.html#None)

EvaluateAllContactTrackers method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.EvaluateAllResults"></a>

### Solution.EvaluateAllResults() → [None](https://docs.python.org/3/library/constants.html#None)

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="Solution.EvaluateContactTracker"></a>

### Solution.EvaluateContactTracker() → [None](https://docs.python.org/3/library/constants.html#None)

EvaluateContactTracker method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ExecutePostCommands"></a>

### Solution.ExecutePostCommands() → [None](https://docs.python.org/3/library/constants.html#None)

Run Execute Post Commands for all post command objects.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ExportSubstructure"></a>

### Solution.ExportSubstructure(exportFileName: [str](https://docs.python.org/3/library/stdtypes.html#str), exportFormat: [Ansys.Mechanical.DataModel.MechanicalEnums.Substructure.ExportFormat](../../../Mechanical/DataModel/MechanicalEnums/Substructure/ExportFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.Substructure.ExportFormat), exportSettings: [Ansys.ACT.Automation.Mechanical.Substructure.ExportSettings](Substructure/ExportSettings.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Substructure.ExportSettings)) → [None](https://docs.python.org/3/library/constants.html#None)

Export Substructure to cpa file.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ExtractSolutionStatistics"></a>

### Solution.ExtractSolutionStatistics() → [None](https://docs.python.org/3/library/constants.html#None)

ExtractSolutionStatistics method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.FetchRemoteResults"></a>

### Solution.FetchRemoteResults() → [None](https://docs.python.org/3/library/constants.html#None)

FetchRemoteResults method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.FormatValue"></a>

### Solution.FormatValue(value: [float](https://docs.python.org/3/library/functions.html#float), unitType: [int](https://docs.python.org/3/library/functions.html#int)) → [str](https://docs.python.org/3/library/stdtypes.html#str)

FormatValue method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.GenerateAdaptedMesh"></a>

### Solution.GenerateAdaptedMesh() → [None](https://docs.python.org/3/library/constants.html#None)

GenerateAdaptedMesh method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.GetChildren"></a>

### Solution.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Solution.GetParameter"></a>

### Solution.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.GetResults"></a>

### Solution.GetResults() → [None](https://docs.python.org/3/library/constants.html#None)

Gets the Results from the server.

<!-- !! processed by numpydoc !! -->

<a id="Solution.GroupAllSimilarChildren"></a>

### Solution.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Solution.GroupSimilarObjects"></a>

### Solution.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Solution.IsResultFileChanged"></a>

### Solution.IsResultFileChanged() → [bool](https://docs.python.org/3/library/functions.html#bool)

Checks if the referenced result file has been changed.

<!-- !! processed by numpydoc !! -->

<a id="Solution.IsResultFileSameAsLoaded"></a>

### Solution.IsResultFileSameAsLoaded(filepath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [bool](https://docs.python.org/3/library/functions.html#bool)

Checks if the given result file is same the loaded result file

<!-- !! processed by numpydoc !! -->

<a id="Solution.OpenSolverFilesDirectory"></a>

### Solution.OpenSolverFilesDirectory() → [None](https://docs.python.org/3/library/constants.html#None)

Run the OpenSolverFilesDirectory action.

<!-- !! processed by numpydoc !! -->

<a id="Solution.PropertyByAPIName"></a>

### Solution.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Solution.PropertyByName"></a>

### Solution.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ReadAnsysResultFile"></a>

### Solution.ReadAnsysResultFile() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Ansys ReadResults action.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ReadGivenAnsysResultFile"></a>

### Solution.ReadGivenAnsysResultFile(resultFilePath: [str](https://docs.python.org/3/library/stdtypes.html#str), unitSystemID: [Ansys.Mechanical.DataModel.Enums.UnitSystemIDType](../../../Mechanical/DataModel/Enums/UnitSystemIDType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.UnitSystemIDType)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the given Ansys ReadResults action.///

<!-- !! processed by numpydoc !! -->

<a id="Solution.ReadGivenAnsysResultFileByReference"></a>

### Solution.ReadGivenAnsysResultFileByReference(resultFilePath: [str](https://docs.python.org/3/library/stdtypes.html#str), unitSystemID: [Ansys.Mechanical.DataModel.Enums.UnitSystemIDType](../../../Mechanical/DataModel/Enums/UnitSystemIDType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.UnitSystemIDType)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the given Ansys ReadResults by reference action.///

<!-- !! processed by numpydoc !! -->

<a id="Solution.ReconnectRemoteJob"></a>

### Solution.ReconnectRemoteJob() → [None](https://docs.python.org/3/library/constants.html#None)

ReconnectRemoteJob method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.RelinkResultFile"></a>

### Solution.RelinkResultFile(filepath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Relink the result file. This action allows repairing the result file referencing without altering the generated result data.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ReloadResultFile"></a>

### Solution.ReloadResultFile() → [None](https://docs.python.org/3/library/constants.html#None)

Reload the result file. For results-only systems, this action reloads the result mesh data and resets all result scopings.

<!-- !! processed by numpydoc !! -->

<a id="Solution.RemoveParameter"></a>

### Solution.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.Solve"></a>

### Solution.Solve(wait: [bool](https://docs.python.org/3/library/functions.html#bool), config: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Run the Solve action.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ValueForResultTracking"></a>

### Solution.ValueForResultTracking(index: [int](https://docs.python.org/3/library/functions.html#int), key: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [str](https://docs.python.org/3/library/stdtypes.html#str)

ValueForResultTracking method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ValueForSolutionTracking"></a>

### Solution.ValueForSolutionTracking(index: [int](https://docs.python.org/3/library/functions.html#int), key: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [str](https://docs.python.org/3/library/stdtypes.html#str)

ValueForSolutionTracking method.

<!-- !! processed by numpydoc !! -->

