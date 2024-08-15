# `Solution`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Solution

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Solution.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| `Solve`                                              | Run the Solve action.                                                                                                        |
| `Solve`                                              | Run the Solve action.                                                                                                        |
| `EvaluateAllResults`                                 | Run the EvaluateAllResults action.                                                                                           |
| `GetResults`                                         | Gets the Results from the server.                                                                                            |
| `ClearGeneratedData`                                 | Run the ClearGeneratedData action.                                                                                           |
| `IsResultFileSameAsLoaded`                           | Checks if the given result file is same the loaded result file                                                               |
| `RelinkResultFile`                                   | Relink the result file. This action allows repairing the result file referencing without altering the generated result data. |
| `IsResultFileChanged`                                | Checks if the referenced result file has been changed.                                                                       |
| `ReloadResultFile`                                   | Reload the result file. For results-only systems, this action reloads the result mesh data and resets all result scopings.   |
| `OpenSolverFilesDirectory`                           | Run the OpenSolverFilesDirectory action.                                                                                     |
| `ReadGivenAnsysResultFile`                           | Run the given Ansys ReadResults action.///                                                                                   |
| `ReadGivenAnsysResultFileByReference`                | Run the given Ansys ReadResults by reference action.///                                                                      |
| `ReadAnsysResultFile`                                | Run the Ansys ReadResults action.                                                                                            |
| `ExtractSolutionStatistics`                          | ExtractSolutionStatistics method.                                                                                            |
| `AddContactTool`                                     | Creates a new ContactTool                                                                                                    |
| `AddBoltTool`                                        | Creates a new BoltTool                                                                                                       |
| `AddForceSummationProbe`                             | Creates a new ForceSummationProbe                                                                                            |
| `AddTorqueProbe`                                     | Creates a new TorqueProbe                                                                                                    |
| `AddResponsePSDTool`                                 | Creates a new ResponsePSDTool                                                                                                |
| `AddForceReactionsForContactRegions`                 | AddForceReactionsForContactRegions method.                                                                                   |
| `AddMomentReactionsForContactRegions`                | AddMomentReactionsForContactRegions method.                                                                                  |
| `AddReactionsForContactRegions`                      | AddReactionsForContactRegions method.                                                                                        |
| `ValueForSolutionTracking`                           | ValueForSolutionTracking method.                                                                                             |
| `DeleteRow`                                          | DeleteRow method.                                                                                                            |
| `ValueForResultTracking`                             | ValueForResultTracking method.                                                                                               |
| `FormatValue`                                        | FormatValue method.                                                                                                          |
| `AddGroupedScopedCustomResult`                       | AddGroupedScopedCustomResult method.                                                                                         |
| `AddGroupedScopedACPResults`                         | AddGroupedScopedACPResults method.                                                                                           |
| `AddFatigueTool`                                     | AddFatigueTool method.                                                                                                       |
| `CreateResultsAtAllSets`                             | CreateResultsAtAllSets method.                                                                                               |
| `EvaluateAllContactTrackers`                         | EvaluateAllContactTrackers method.                                                                                           |
| `EvaluateContactTracker`                             | EvaluateContactTracker method.                                                                                               |
| `ExecutePostCommands`                                | Run Execute Post Commands for all post command objects.                                                                      |
| `ExecutePostCommands`                                | ExecutePostCommands method.                                                                                                  |
| `FetchRemoteResults`                                 | FetchRemoteResults method.                                                                                                   |
| `GenerateAdaptedMesh`                                | GenerateAdaptedMesh method.                                                                                                  |
| `ExportSubstructureInCPAFormat`                      | Export Substructure to cpa file.                                                                                             |
| `DisconnectRemoteJob`                                | DisconnectRemoteJob method.                                                                                                  |
| `ReconnectRemoteJob`                                 | ReconnectRemoteJob method.                                                                                                   |
| `ClearRemoteStorageData`                             | ClearRemoteStorageData method.                                                                                               |
| `AddLineChart2D`                                     | Creates a new LineChart2D                                                                                                    |
| `AddAccelerationFrequencyResponse`                   | Creates a new AccelerationFrequencyResponse                                                                                  |
| `AddAccelerationPhaseResponse`                       | Creates a new AccelerationPhaseResponse                                                                                      |
| `AddAccelerationProbe`                               | Creates a new AccelerationProbe                                                                                              |
| `AddAccelerationWaterfallDiagram`                    | Creates a new AccelerationWaterfallDiagram                                                                                   |
| `AddAccumulatedEquivalentPlasticStrain`              | Creates a new AccumulatedEquivalentPlasticStrain                                                                             |
| `AddAcousticAbsorptionCoefficient`                   | Creates a new AcousticAbsorptionCoefficient                                                                                  |
| `AddAcousticAWeightedSoundPressureLevel`             | Creates a new AcousticAWeightedSoundPressureLevel                                                                            |
| `AddAcousticAWeightedSPLFrequencyResponse`           | Creates a new AcousticAWeightedSPLFrequencyResponse                                                                          |
| `AddAcousticDiffuseSoundTransmissionLoss`            | Creates a new AcousticDiffuseSoundTransmissionLoss                                                                           |
| `AddAcousticDirectionalVelocityResult`               | Creates a new AcousticDirectionalVelocityResult                                                                              |
| `AddAcousticFarFieldSPL`                             | Creates a new AcousticFarFieldResult                                                                                         |
| `AddAcousticFarFieldAWeightedSPL`                    | Creates a new AcousticFarFieldResult                                                                                         |
| `AddAcousticFarFieldMaximumPressure`                 | Creates a new AcousticFarFieldResult                                                                                         |
| `AddAcousticFarFieldPhase`                           | Creates a new AcousticFarFieldResult                                                                                         |
| `AddAcousticFarFieldDirectivity`                     | Creates a new AcousticFarFieldResult                                                                                         |
| `AddAcousticFarFieldMaximumScatteredPressure`        | Creates a new AcousticFarFieldResult                                                                                         |
| `AddAcousticFarFieldTargetStrength`                  | Creates a new AcousticFarFieldResult                                                                                         |
| `AddAcousticFarFieldSoundPowerLevel`                 | Creates a new AcousticFarFieldResult                                                                                         |
| `AddAcousticFarFieldSPLMic`                          | Creates a new AcousticFarFieldResult                                                                                         |
| `AddAcousticFarFieldAWeightedSPLMic`                 | Creates a new AcousticFarFieldResult                                                                                         |
| `AddAcousticFarFieldMaximumPressureMic`              | Creates a new AcousticFarFieldResult                                                                                         |
| `AddAcousticFarFieldPhaseMic`                        | Creates a new AcousticFarFieldResult                                                                                         |
| `AddAcousticFarFieldSoundPowerLevelWaterfallDiagram` | Creates a new AcousticFarFieldSoundPowerLevelWaterfallDiagram                                                                |
| `AddAcousticFarFieldSPLMicWaterfallDiagram`          | Creates a new AcousticFarFieldSPLMicWaterfallDiagram                                                                         |
| `AddAcousticFrequencyBandAWeightedSPL`               | Creates a new AcousticFrequencyBandAWeightedSPL                                                                              |
| `AddAcousticFrequencyBandSPL`                        | Creates a new AcousticFrequencyBandSPL                                                                                       |
| `AddAcousticKineticEnergy`                           | Creates a new AcousticKineticEnergy                                                                                          |
| `AddAcousticKineticEnergyFrequencyResponse`          | Creates a new AcousticKineticEnergyFrequencyResponse                                                                         |
| `AddAcousticPotentialEnergy`                         | Creates a new AcousticPotentialEnergy                                                                                        |
| `AddAcousticPotentialEnergyFrequencyResponse`        | Creates a new AcousticPotentialEnergyFrequencyResponse                                                                       |
| `AddAcousticPressureFrequencyResponse`               | Creates a new AcousticPressureFrequencyResponse                                                                              |
| `AddAcousticPressureResult`                          | Creates a new AcousticPressureResult                                                                                         |
| `AddAcousticReturnLoss`                              | Creates a new AcousticReturnLoss                                                                                             |
| `AddAcousticSoundPressureLevel`                      | Creates a new AcousticSoundPressureLevel                                                                                     |
| `AddAcousticSPLFrequencyResponse`                    | Creates a new AcousticSPLFrequencyResponse                                                                                   |
| `AddAcousticTotalVelocityResult`                     | Creates a new AcousticTotalVelocityResult                                                                                    |
| `AddAcousticTransmissionLoss`                        | Creates a new AcousticTransmissionLoss                                                                                       |
| `AddAcousticVelocityFrequencyResponse`               | Creates a new AcousticVelocityFrequencyResponse                                                                              |
| `AddAngularAccelerationProbe`                        | Creates a new AngularAccelerationProbe                                                                                       |
| `AddAngularVelocityProbe`                            | Creates a new AngularVelocityProbe                                                                                           |
| `AddBeamProbe`                                       | Creates a new BeamProbe                                                                                                      |
| `AddBeamTool`                                        | Creates a new BeamTool                                                                                                       |
| `AddBearingProbe`                                    | Creates a new BearingProbe                                                                                                   |
| `AddBendingStressEquivalent`                         | Creates a new BendingStressEquivalent                                                                                        |
| `AddBendingStressIntensity`                          | Creates a new BendingStressIntensity                                                                                         |
| `AddBoltPretensionProbe`                             | Creates a new BoltPretensionProbe                                                                                            |
| `AddCampbellDiagram`                                 | Creates a new CampbellDiagram                                                                                                |
| `AddChargeReactionFrequencyResponse`                 | Creates a new ChargeReactionFrequencyResponse                                                                                |
| `AddChargeReactionProbe`                             | Creates a new ChargeReactionProbe                                                                                            |
| `AddCommandSnippet`                                  | Creates a new CommandSnippet                                                                                                 |
| `AddCompositeCriterion`                              | Creates a new CompositeCriterion                                                                                             |
| `AddCompositeFailureTool`                            | Creates a new CompositeFailureTool                                                                                           |
| `AddCompositeSamplingPointTool`                      | Creates a new CompositeSamplingPointTool                                                                                     |
| `AddContactDistanceProbe`                            | Creates a new ContactDistanceProbe                                                                                           |
| `AddCurrentDensity`                                  | Creates a new CurrentDensity                                                                                                 |
| `AddCurrentDensityProbe`                             | Creates a new CurrentDensityProbe                                                                                            |
| `AddDamageStatus`                                    | Creates a new DamageStatus                                                                                                   |
| `AddDeformationFrequencyResponse`                    | Creates a new DeformationFrequencyResponse                                                                                   |
| `AddDeformationPhaseResponse`                        | Creates a new DeformationPhaseResponse                                                                                       |
| `AddDeformationProbe`                                | Creates a new DeformationProbe                                                                                               |
| `AddDirectionalAcceleration`                         | Creates a new DirectionalAcceleration                                                                                        |
| `AddDirectionalAccelerationPSD`                      | Creates a new DirectionalAccelerationPSD                                                                                     |
| `AddDirectionalAccelerationRS`                       | Creates a new DirectionalAccelerationRS                                                                                      |
| `AddDirectionalAxialForce`                           | Creates a new DirectionalAxialForce                                                                                          |
| `AddDirectionalBendingMoment`                        | Creates a new DirectionalBendingMoment                                                                                       |
| `AddDirectionalCurrentDensity`                       | Creates a new DirectionalCurrentDensity                                                                                      |
| `AddDirectionalDeformation`                          | Creates a new DirectionalDeformation                                                                                         |
| `AddDirectionalElectricFieldIntensity`               | Creates a new DirectionalElectricFieldIntensity                                                                              |
| `AddDirectionalElectricFluxDensity`                  | Creates a new DirectionalElectricFluxDensity                                                                                 |
| `AddDirectionalElectrostaticForce`                   | Creates a new DirectionalElectrostaticForce                                                                                  |
| `AddDirectionalHeatFlux`                             | Creates a new DirectionalHeatFlux                                                                                            |
| `AddDirectionalMagneticFieldIntensity`               | Creates a new DirectionalMagneticFieldIntensity                                                                              |
| `AddDirectionalMagneticFluxDensity`                  | Creates a new DirectionalMagneticFluxDensity                                                                                 |
| `AddDirectionalShearForce`                           | Creates a new DirectionalShearForce                                                                                          |
| `AddShearMomentDiagramMY`                            | Creates a new DirectionalShearMomentDiagram                                                                                  |
| `AddShearMomentDiagramMZ`                            | Creates a new DirectionalShearMomentDiagram                                                                                  |
| `AddShearMomentDiagramUY`                            | Creates a new DirectionalShearMomentDiagram                                                                                  |
| `AddShearMomentDiagramUZ`                            | Creates a new DirectionalShearMomentDiagram                                                                                  |
| `AddShearMomentDiagramVY`                            | Creates a new DirectionalShearMomentDiagram                                                                                  |
| `AddShearMomentDiagramVZ`                            | Creates a new DirectionalShearMomentDiagram                                                                                  |
| `AddThermalStrain`                                   | Creates a new DirectionalThermalStrain                                                                                       |
| `AddDirectionalTorsionalMoment`                      | Creates a new DirectionalTorsionalMoment                                                                                     |
| `AddDirectionalVelocity`                             | Creates a new DirectionalVelocity                                                                                            |
| `AddDirectionalVelocityPSD`                          | Creates a new DirectionalVelocityPSD                                                                                         |
| `AddDirectionalVelocityRS`                           | Creates a new DirectionalVelocityRS                                                                                          |
| `AddElasticStrainFrequencyResponse`                  | Creates a new ElasticStrainFrequencyResponse                                                                                 |
| `AddElasticStrainIntensity`                          | Creates a new ElasticStrainIntensity                                                                                         |
| `AddElasticStrainPhaseResponse`                      | Creates a new ElasticStrainPhaseResponse                                                                                     |
| `AddElectricFieldProbe`                              | Creates a new ElectricFieldProbe                                                                                             |
| `AddElectricPotential`                               | Creates a new ElectricPotential                                                                                              |
| `AddElectricVoltage`                                 | Creates a new ElectricVoltage                                                                                                |
| `AddVoltageProbe`                                    | Creates a new ElectricVoltageProbe                                                                                           |
| `AddElectromechanicalCouplingCoefficient`            | Creates a new ElectromechanicalCouplingCoefficient                                                                           |
| `AddElementalEulerXYAngle`                           | Creates a new ElementalEulerXYAngle                                                                                          |
| `AddElementalEulerXZAngle`                           | Creates a new ElementalEulerXZAngle                                                                                          |
| `AddElementalEulerYZAngle`                           | Creates a new ElementalEulerYZAngle                                                                                          |
| `AddElementalStrainEnergy`                           | Creates a new ElementalStrainEnergy                                                                                          |
| `AddElementalTriads`                                 | Creates a new ElementalTriads                                                                                                |
| `AddEmagReactionProbe`                               | Creates a new EmagReactionProbe                                                                                              |
| `AddEnergyDissipatedPerUnitVolume`                   | Creates a new EnergyDissipatedPerUnitVolume                                                                                  |
| `AddEnergyProbe`                                     | Creates a new EnergyProbe                                                                                                    |
| `AddEquivalentCreepStrain`                           | Creates a new EquivalentCreepStrain                                                                                          |
| `AddEquivalentCreepStrainRST`                        | Creates a new EquivalentCreepStrainRST                                                                                       |
| `AddEquivalentElasticStrain`                         | Creates a new EquivalentElasticStrain                                                                                        |
| `AddEquivalentElasticStrainRST`                      | Creates a new EquivalentElasticStrainRST                                                                                     |
| `AddEquivalentPlasticStrain`                         | Creates a new EquivalentPlasticStrain                                                                                        |
| `AddEquivalentPlasticStrainRST`                      | Creates a new EquivalentPlasticStrainRST                                                                                     |
| `AddEquivalentRadiatedPower`                         | Creates a new EquivalentRadiatedPower                                                                                        |
| `AddEquivalentRadiatedPowerLevel`                    | Creates a new EquivalentRadiatedPowerLevel                                                                                   |
| `AddEquivalentRadiatedPowerLevelWaterfallDiagram`    | Creates a new EquivalentRadiatedPowerLevelWaterfallDiagram                                                                   |
| `AddEquivalentRadiatedPowerWaterfallDiagram`         | Creates a new EquivalentRadiatedPowerWaterfallDiagram                                                                        |
| `AddEquivalentStress`                                | Creates a new EquivalentStress                                                                                               |
| `AddEquivalentStressPSD`                             | Creates a new EquivalentStressPSD                                                                                            |
| `AddEquivalentStressRS`                              | Creates a new EquivalentStressRS                                                                                             |
| `AddEquivalentTotalStrain`                           | Creates a new EquivalentTotalStrain                                                                                          |
| `AddExpansionSettings`                               | Creates a new ExpansionSettings                                                                                              |
| `AddFiberCompressiveDamageVariable`                  | Creates a new FiberCompressiveDamageVariable                                                                                 |
| `AddFiberCompressiveFailureCriterion`                | Creates a new FiberCompressiveFailureCriterion                                                                               |
| `AddFiberTensileDamageVariable`                      | Creates a new FiberTensileDamageVariable                                                                                     |
| `AddFiberTensileFailureCriterion`                    | Creates a new FiberTensileFailureCriterion                                                                                   |
| `AddFieldIntensityProbe`                             | Creates a new FieldIntensityProbe                                                                                            |
| `AddFlexibleRotationProbe`                           | Creates a new FlexibleRotationProbe                                                                                          |
| `AddFluidFlowRate`                                   | Creates a new FluidFlowRate                                                                                                  |
| `AddFluidHeatConductionRate`                         | Creates a new FluidHeatConductionRate                                                                                        |
| `AddFluidHeatTransportRate`                          | Creates a new FluidHeatTransportRate                                                                                         |
| `AddFluxDensityProbe`                                | Creates a new FluxDensityProbe                                                                                               |
| `AddFluxLinkage`                                     | Creates a new FluxLinkage                                                                                                    |
| `AddForceReaction`                                   | Creates a new ForceReaction                                                                                                  |
| `AddForceReactionFrequencyResponse`                  | Creates a new ForceReactionFrequencyResponse                                                                                 |
| `AddFractureTool`                                    | Creates a new FractureTool                                                                                                   |
| `AddGeneralizedPlaneStrainProbe`                     | Creates a new GeneralizedPlaneStrainProbe                                                                                    |
| `AddHeatFluxProbe`                                   | Creates a new HeatFluxProbe                                                                                                  |
| `AddImpedanceFrequencyResponse`                      | Creates a new ImpedanceFrequencyResponse                                                                                     |
| `AddImpedanceProbe`                                  | Creates a new ImpedanceProbe                                                                                                 |
| `AddInductance`                                      | Creates a new Inductance                                                                                                     |
| `AddJointProbe`                                      | Creates a new JointProbe                                                                                                     |
| `AddJouleHeat`                                       | Creates a new JouleHeat                                                                                                      |
| `AddJouleHeatProbe`                                  | Creates a new JouleHeatProbe                                                                                                 |
| `AddLatticeDensity`                                  | Creates a new LatticeDensity                                                                                                 |
| `AddLatticeElementalDensity`                         | Creates a new LatticeElementalDensity                                                                                        |
| `AddLinearizedEquivalentStress`                      | Creates a new LinearizedEquivalentStress                                                                                     |
| `AddLinearizedMaximumPrincipalStress`                | Creates a new LinearizedMaximumPrincipalStress                                                                               |
| `AddLinearizedMaximumShearStress`                    | Creates a new LinearizedMaximumShearStress                                                                                   |
| `AddLinearizedMiddlePrincipalStress`                 | Creates a new LinearizedMiddlePrincipalStress                                                                                |
| `AddLinearizedMinimumPrincipalStress`                | Creates a new LinearizedMinimumPrincipalStress                                                                               |
| `AddLinearizedNormalStress`                          | Creates a new LinearizedNormalStress                                                                                         |
| `AddLinearizedShearStress`                           | Creates a new LinearizedShearStress                                                                                          |
| `AddLinearizedStressIntensity`                       | Creates a new LinearizedStressIntensity                                                                                      |
| `AddLinePressureResult`                              | Creates a new LinePressureResult                                                                                             |
| `AddMagneticCoenergy`                                | Creates a new MagneticCoenergy                                                                                               |
| `AddMagneticDirectionalForces`                       | Creates a new MagneticDirectionalForces                                                                                      |
| `AddMagneticError`                                   | Creates a new MagneticError                                                                                                  |
| `AddMagneticFluxProbe`                               | Creates a new MagneticFluxProbe                                                                                              |
| `AddMagneticPotential`                               | Creates a new MagneticPotential                                                                                              |
| `AddMagneticTotalForces`                             | Creates a new MagneticTotalForces                                                                                            |
| `AddMatrixCompressiveDamageVariable`                 | Creates a new MatrixCompressiveDamageVariable                                                                                |
| `AddMatrixCompressiveFailureCriterion`               | Creates a new MatrixCompressiveFailureCriterion                                                                              |
| `AddMatrixTensileDamageVariable`                     | Creates a new MatrixTensileDamageVariable                                                                                    |
| `AddMatrixTensileFailureCriterion`                   | Creates a new MatrixTensileFailureCriterion                                                                                  |
| `AddMaximumFailureCriteria`                          | Creates a new MaximumFailureCriteria                                                                                         |
| `AddMaximumPrincipalElasticStrain`                   | Creates a new MaximumPrincipalElasticStrain                                                                                  |
| `AddMaximumPrincipalStress`                          | Creates a new MaximumPrincipalStress                                                                                         |
| `AddMaximumPrincipalThermalStrain`                   | Creates a new MaximumPrincipalThermalStrain                                                                                  |
| `AddMaximumShearElasticStrain`                       | Creates a new MaximumShearElasticStrain                                                                                      |
| `AddMaximumShearStress`                              | Creates a new MaximumShearStress                                                                                             |
| `AddMCFWaterfallDiagram`                             | Creates a new MCFWaterfallDiagram                                                                                            |
| `AddMembraneStressEquivalent`                        | Creates a new MembraneStressEquivalent                                                                                       |
| `AddMembraneStressIntensity`                         | Creates a new MembraneStressIntensity                                                                                        |
| `AddMiddlePrincipalElasticStrain`                    | Creates a new MiddlePrincipalElasticStrain                                                                                   |
| `AddMiddlePrincipalStress`                           | Creates a new MiddlePrincipalStress                                                                                          |
| `AddMiddlePrincipalThermalStrain`                    | Creates a new MiddlePrincipalThermalStrain                                                                                   |
| `AddMinimumPrincipalElasticStrain`                   | Creates a new MinimumPrincipalElasticStrain                                                                                  |
| `AddMinimumPrincipalStress`                          | Creates a new MinimumPrincipalStress                                                                                         |
| `AddMomentReaction`                                  | Creates a new MomentReaction                                                                                                 |
| `AddMullinsDamageVariable`                           | Creates a new MullinsDamageVariable                                                                                          |
| `AddMullinsMaximumPreviousStrainEnergy`              | Creates a new MullinsMaximumPreviousStrainEnergy                                                                             |
| `AddNewtonRaphsonResidualCharge`                     | Creates a new NewtonRaphsonResidualCharge                                                                                    |
| `AddNewtonRaphsonResidualForce`                      | Creates a new NewtonRaphsonResidualForce                                                                                     |
| `AddNewtonRaphsonResidualHeat`                       | Creates a new NewtonRaphsonResidualHeat                                                                                      |
| `AddNewtonRaphsonResidualMoment`                     | Creates a new NewtonRaphsonResidualMoment                                                                                    |
| `AddNodalEulerXYAngle`                               | Creates a new NodalEulerXYAngle                                                                                              |
| `AddNodalEulerXZAngle`                               | Creates a new NodalEulerXZAngle                                                                                              |
| `AddNodalEulerYZAngle`                               | Creates a new NodalEulerYZAngle                                                                                              |
| `AddNodalTriads`                                     | Creates a new NodalTriads                                                                                                    |
| `AddNormalElasticStrain`                             | Creates a new NormalElasticStrain                                                                                            |
| `AddNormalGasketPressure`                            | Creates a new NormalGasketPressure                                                                                           |
| `AddNormalGasketTotalClosure`                        | Creates a new NormalGasketTotalClosure                                                                                       |
| `AddNormalStress`                                    | Creates a new NormalStress                                                                                                   |
| `AddPosition`                                        | Creates a new Position                                                                                                       |
| `AddPrimaryCriterion`                                | Creates a new PrimaryCriterion                                                                                               |
| `AddPythonCodeEventBased`                            | Creates a new PythonCodeEventBased                                                                                           |
| `AddPythonResult`                                    | Creates a new PythonResult                                                                                                   |
| `AddQualityFactor`                                   | Creates a new QualityFactor                                                                                                  |
| `AddRadiationProbe`                                  | Creates a new RadiationProbe                                                                                                 |
| `AddReactionProbe`                                   | Creates a new ReactionProbe                                                                                                  |
| `AddResponsePSD`                                     | Creates a new ResponsePSD                                                                                                    |
| `AddResultMesh`                                      | Creates a new ResultMesh                                                                                                     |
| `AddRotationProbe`                                   | Creates a new RotationProbe                                                                                                  |
| `AddShapeFinder`                                     | Creates a new ShapeFinder                                                                                                    |
| `AddShapeFinderElemental`                            | Creates a new ShapeFinderElemental                                                                                           |
| `AddShearDamageVariable`                             | Creates a new ShearDamageVariable                                                                                            |
| `AddShearElasticStrain`                              | Creates a new ShearElasticStrain                                                                                             |
| `AddShearGasketPressure`                             | Creates a new ShearGasketPressure                                                                                            |
| `AddShearGasketTotalClosure`                         | Creates a new ShearGasketTotalClosure                                                                                        |
| `AddShearStress`                                     | Creates a new ShearStress                                                                                                    |
| `AddShellBendingStress`                              | Creates a new ShellBendingStress                                                                                             |
| `AddShellBottomPeakStress`                           | Creates a new ShellBottomPeakStress                                                                                          |
| `AddShellMembraneStress`                             | Creates a new ShellMembraneStress                                                                                            |
| `AddShellTopPeakStress`                              | Creates a new ShellTopPeakStress                                                                                             |
| `AddSpringProbe`                                     | Creates a new SpringProbe                                                                                                    |
| `AddStabilizationEnergy`                             | Creates a new StabilizationEnergy                                                                                            |
| `AddStrainProbe`                                     | Creates a new StrainProbe                                                                                                    |
| `AddStressFrequencyResponse`                         | Creates a new StressFrequencyResponse                                                                                        |
| `AddStressIntensity`                                 | Creates a new StressIntensity                                                                                                |
| `AddStressPhaseResponse`                             | Creates a new StressPhaseResponse                                                                                            |
| `AddStressProbe`                                     | Creates a new StressProbe                                                                                                    |
| `AddStressTool`                                      | Creates a new StressTool                                                                                                     |
| `AddStructuralError`                                 | Creates a new StructuralError                                                                                                |
| `AddStructuralStrainEnergy`                          | Creates a new StructuralStrainEnergy                                                                                         |
| `AddTemperatureProbe`                                | Creates a new TemperatureProbe                                                                                               |
| `AddTemperature`                                     | Creates a new TemperatureResult                                                                                              |
| `AddThermalError`                                    | Creates a new ThermalError                                                                                                   |
| `AddThermalStrainEnergy`                             | Creates a new ThermalStrainEnergy                                                                                            |
| `AddTopologyDensity`                                 | Creates a new TopologyDensity                                                                                                |
| `AddTopologyElementalDensity`                        | Creates a new TopologyElementalDensity                                                                                       |
| `AddTotalAcceleration`                               | Creates a new TotalAcceleration                                                                                              |
| `AddTotalAxialForce`                                 | Creates a new TotalAxialForce                                                                                                |
| `AddTotalBendingMoment`                              | Creates a new TotalBendingMoment                                                                                             |
| `AddTotalCurrentDensity`                             | Creates a new TotalCurrentDensity                                                                                            |
| `AddTotalDeformation`                                | Creates a new TotalDeformation                                                                                               |
| `AddTotalElectricFieldIntensity`                     | Creates a new TotalElectricFieldIntensity                                                                                    |
| `AddTotalElectricFluxDensity`                        | Creates a new TotalElectricFluxDensity                                                                                       |
| `AddTotalElectrostaticForce`                         | Creates a new TotalElectrostaticForce                                                                                        |
| `AddTotalHeatFlux`                                   | Creates a new TotalHeatFlux                                                                                                  |
| `AddTotalMagneticFieldIntensity`                     | Creates a new TotalMagneticFieldIntensity                                                                                    |
| `AddTotalMagneticFluxDensity`                        | Creates a new TotalMagneticFluxDensity                                                                                       |
| `AddTotalShearForce`                                 | Creates a new TotalShearForce                                                                                                |
| `AddShearMomentDiagramMSUM`                          | Creates a new TotalShearMomentDiagram                                                                                        |
| `AddShearMomentDiagramUSUM`                          | Creates a new TotalShearMomentDiagram                                                                                        |
| `AddShearMomentDiagramVSUM`                          | Creates a new TotalShearMomentDiagram                                                                                        |
| `AddTotalTorsionalMoment`                            | Creates a new TotalTorsionalMoment                                                                                           |
| `AddTotalVelocity`                                   | Creates a new TotalVelocity                                                                                                  |
| `AddUserDefinedResult`                               | Creates a new UserDefinedResult                                                                                              |
| `AddVariableGraph`                                   | Creates a new VariableGraph                                                                                                  |
| `AddVectorAxialForce`                                | Creates a new VectorAxialForce                                                                                               |
| `AddVectorBendingMoment`                             | Creates a new VectorBendingMoment                                                                                            |
| `AddVectorDeformation`                               | Creates a new VectorDeformation                                                                                              |
| `AddVectorHeatFlux`                                  | Creates a new VectorHeatFlux                                                                                                 |
| `AddVectorPrincipalElasticStrain`                    | Creates a new VectorPrincipalElasticStrain                                                                                   |
| `AddVectorPrincipalStress`                           | Creates a new VectorPrincipalStress                                                                                          |
| `AddVectorShearForce`                                | Creates a new VectorShearForce                                                                                               |
| `AddVectorTorsionalMoment`                           | Creates a new VectorTorsionalMoment                                                                                          |
| `AddVelocityFrequencyResponse`                       | Creates a new VelocityFrequencyResponse                                                                                      |
| `AddVelocityPhaseResponse`                           | Creates a new VelocityPhaseResponse                                                                                          |
| `AddVelocityProbe`                                   | Creates a new VelocityProbe                                                                                                  |
| `AddVelocityWaterfallDiagram`                        | Creates a new VelocityWaterfallDiagram                                                                                       |
| `AddVoltageFrequencyResponse`                        | Creates a new VoltageFrequencyResponse                                                                                       |
| `AddVolume`                                          | Creates a new Volume                                                                                                         |
| `AddVolumeProbe`                                     | Creates a new VolumeProbe                                                                                                    |
| `GetChildren`                                        | Gets the list of children, filtered by type.                                                                                 |
| `GetChildren`                                        | Gets the list of children, filtered by type.                                                                                 |
| `AddComment`                                         | Creates a new child Comment.                                                                                                 |
| `AddFigure`                                          | Creates a new child Figure.                                                                                                  |
| `AddImage`                                           | Creates a new child Image.                                                                                                   |
| `Activate`                                           | Activate the current object.                                                                                                 |
| `CopyTo`                                             | Copies all visible properties from this object to another.                                                                   |
| `Duplicate`                                          | Creates a copy of the current DataModelObject.                                                                               |
| `GroupAllSimilarChildren`                            | Run the GroupAllSimilarChildren action.                                                                                      |
| `GroupSimilarObjects`                                | Run the GroupSimilarObjects action.                                                                                          |
| `PropertyByName`                                     | Get a property by its unique name.                                                                                           |
| `PropertyByAPIName`                                  | Get a property by its API name.                                                                                              |
| `CreateParameter`                                    | Creates a new parameter for a Property.                                                                                      |
| `GetParameter`                                       | Gets the parameter corresponding to the given property.                                                                      |
| `RemoveParameter`                                    | Removes the parameter from the parameter set corresponding to the given property.                                            |

### Properties

| Name | Description |
|---------------------------------|------------------------------------------------------------------------------------------|
| `SolutionInformation`           | Gets the SolutionInformation.                                                            |
| `CellId`                        | Gets the CellId.                                                                         |
| `WorkingDir`                    | Gets the WorkingDir.                                                                     |
| `Status`                        | Gets the Status.                                                                         |
| `NumGPURequested`               | NumGPURequested property.                                                                |
| `MemoryAvailable`               | MemoryAvailable property.                                                                |
| `EigenSolverType`               | EigenSolverType property.                                                                |
| `NumCoresAvailable`             | NumCoresAvailable property.                                                              |
| `NumProcRequested`              | NumProcRequested property.                                                               |
| `IsDistributedSolution`         | IsDistributedSolution property.                                                          |
| `IsHybridParallelSolution`      | IsHybridParallelSolution property.                                                       |
| `IsAutoHybridParallel`          | Returns if Hybrid Parallel was turned on by APDL or not (i.e. Automatic Hybrid Parallel) |
| `ThreadsPerProcessRequested`    | ThreadsPerProcessRequested property.                                                     |
| `NumberOfProcessesRequested`    | NumberOfProcessesRequested property.                                                     |
| `IsGPUAccelerationRequested`    | IsGPUAccelerationRequested property.                                                     |
| `IsDataExtractionComplete`      | IsDataExtractionComplete property.                                                       |
| `IsEigenSolver`                 | IsEigenSolver property.                                                                  |
| `IsUnsymmetricMatrixSolve`      | IsUnsymmetricMatrixSolve property.                                                       |
| `GPUType`                       | GPUType property.                                                                        |
| `MPIType`                       | MPIType property.                                                                        |
| `EquationSolverType`            | EquationSolverType property.                                                             |
| `NumMachinesRequested`          | NumMachinesRequested property.                                                           |
| `MainThreadCPUTime`             | MainThreadCPUTime property.                                                              |
| `AllThreadsCPUTime`             | AllThreadsCPUTime property.                                                              |
| `NumVirtualCoresAvailable`      | NumVirtualCoresAvailable property.                                                       |
| `ElapsedTime`                   | ElapsedTime property.                                                                    |
| `TotalMemoryUsed`               | TotalMemoryUsed property.                                                                |
| `ElementLoadBalRatio`           | ElementLoadBalRatio property.                                                            |
| `ProcessorModel`                | ProcessorModel property.                                                                 |
| `OperatingSystem`               | OperatingSystem property.                                                                |
| `SolverType`                    | SolverType property.                                                                     |
| `License`                       | License property.                                                                        |
| `Nodes`                         | Nodes property.                                                                          |
| `Elements`                      | Elements property.                                                                       |
| `GpuAcceleration`               | GpuAcceleration property.                                                                |
| `LicenseCoresAvailable`         | LicenseCoresAvailable property.                                                          |
| `SolutionUnitSystem`            | SolutionUnitSystem property.                                                             |
| `IOBound`                       | IOBound property.                                                                        |
| `IOWrite`                       | IOWrite property.                                                                        |
| `IORead`                        | IORead property.                                                                         |
| `MSUPHarmonicAnalysis`          | MSUPHarmonicAnalysis property.                                                           |
| `TimeToCombineDistributedFiles` | TimeToCombineDistributedFiles property.                                                  |
| `SolverData`                    | SolverData property.                                                                     |
| `DateOfRun`                     | DateOfRun property.                                                                      |
| `TimeOfRun`                     | TimeOfRun property.                                                                      |
| `SolutionTrackingVectorLength`  | SolutionTrackingVectorLength property.                                                   |
| `ResultTrackingVectorLength`    | ResultTrackingVectorLength property.                                                     |
| `ResultFilePath`                | Get the result file full path.                                                           |
| `NumberOfDOF`                   | Get the Number of DOF.                                                                   |
| `SparseMode`                    | Get the Sparse Mode value.                                                               |
| `SkipSolveCommand`              | Gets or sets the flag to avoid issuing the solve command in the MAPDL solver.            |
| `InternalObject`                | Gets the internal object. For advanced usage only.                                       |
| `CyclicSectorDisplayRangeBegin` | Gets or sets the CyclicSectorDisplayRangeBegin.                                          |
| `NumberofSectors`               | Gets or sets the NumberofSectors.                                                        |
| `ElapsedRunTime`                | Gets or sets the ElapsedRunTime.                                                         |
| `MaximumRefinementLoops`        | Gets or sets the MaximumRefinementLoops.                                                 |
| `MemoryUsed`                    | Gets or sets the MemoryUsed.                                                             |
| `RefinementDepth`               | Gets or sets the RefinementDepth.                                                        |
| `ResultFileDirectory`           | Gets the ResultFileDirectory.                                                            |
| `ResultFileName`                | Gets the ResultFileName.                                                                 |
| `ResultFileSize`                | Gets the ResultFileSize.                                                                 |
| `ResultFileTimestamp`           | Gets the ResultFileTimestamp.                                                            |
| `ExportTopologyFile`            | Gets or sets the ExportTopologyFile.                                                     |
| `MeshSource`                    | Gets or sets the MeshSource.                                                             |
| `ElementSelection`              | Gets or sets the ElementSelection.                                                       |
| `ResultFileUnitSystem`          | Gets the ResultFileUnitSystem.                                                           |
| `CalculateBeamSectionResults`   | Gets or sets the CalculateBeamSectionResults.                                            |
| `TopologyResult`                | Gets or sets the TopologyResult.                                                         |
| `DataModelObjectCategory`       | Gets the current DataModelObject's category.                                             |
| `Children`                      | Gets the list of children.                                                               |
| `Comments`                      | Gets the list of associated comments.                                                    |
| `Figures`                       | Gets the list of associated figures.                                                     |
| `Images`                        | Gets the list of associated images.                                                      |
| `InternalObject`                | Gets the internal object. For advanced usage only.                                       |
| `Properties`                    | Gets the list of properties for this object.                                             |
| `VisibleProperties`             | Gets the list of properties that are visible for this object.                            |

<a id="property-detail"></a>

## Property detail

### *property* Solution.SolutionInformation *: [Ansys.ACT.Automation.Mechanical.SolutionInformation](SolutionInformation.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SolutionInformation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolutionInformation.

<!-- !! processed by numpydoc !! -->

### *property* Solution.CellId *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CellId.

<!-- !! processed by numpydoc !! -->

### *property* Solution.WorkingDir *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the WorkingDir.

<!-- !! processed by numpydoc !! -->

### *property* Solution.Status *: [Ansys.Mechanical.DataModel.Enums.SolutionStatusType](../../../Mechanical/DataModel/Enums/SolutionStatusType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionStatusType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Status.

<!-- !! processed by numpydoc !! -->

### *property* Solution.NumGPURequested *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumGPURequested property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.MemoryAvailable *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

MemoryAvailable property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.EigenSolverType *: [Ansys.Mechanical.DataModel.Enums.EigenSolverType](../../../Mechanical/DataModel/Enums/EigenSolverType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EigenSolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

EigenSolverType property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.NumCoresAvailable *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumCoresAvailable property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.NumProcRequested *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumProcRequested property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.IsDistributedSolution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

IsDistributedSolution property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.IsHybridParallelSolution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

IsHybridParallelSolution property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.IsAutoHybridParallel *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Returns if Hybrid Parallel was turned on by APDL or not (i.e. Automatic Hybrid Parallel)

<!-- !! processed by numpydoc !! -->

### *property* Solution.ThreadsPerProcessRequested *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

ThreadsPerProcessRequested property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.NumberOfProcessesRequested *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfProcessesRequested property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.IsGPUAccelerationRequested *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

IsGPUAccelerationRequested property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.IsDataExtractionComplete *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

IsDataExtractionComplete property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.IsEigenSolver *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

IsEigenSolver property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.IsUnsymmetricMatrixSolve *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

IsUnsymmetricMatrixSolve property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.GPUType *: Ansys.Common.Interop.DSObjectTypes.DSGPUType | [None](https://docs.python.org/3/library/constants.html#None)*

GPUType property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.MPIType *: [Ansys.Mechanical.DataModel.Enums.MPIType](../../../Mechanical/DataModel/Enums/MPIType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MPIType) | [None](https://docs.python.org/3/library/constants.html#None)*

MPIType property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.EquationSolverType *: [Ansys.Mechanical.DataModel.Enums.EquationSolverType](../../../Mechanical/DataModel/Enums/EquationSolverType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EquationSolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

EquationSolverType property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.NumMachinesRequested *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumMachinesRequested property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.MainThreadCPUTime *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

MainThreadCPUTime property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.AllThreadsCPUTime *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

AllThreadsCPUTime property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.NumVirtualCoresAvailable *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumVirtualCoresAvailable property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.ElapsedTime *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ElapsedTime property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.TotalMemoryUsed *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

TotalMemoryUsed property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.ElementLoadBalRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ElementLoadBalRatio property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.ProcessorModel *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

ProcessorModel property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.OperatingSystem *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OperatingSystem property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.SolverType *: [Ansys.Mechanical.DataModel.Enums.SolverType](../../../Mechanical/DataModel/Enums/SolverType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

SolverType property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.License *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

License property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.Nodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Nodes property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.Elements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Elements property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.GpuAcceleration *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

GpuAcceleration property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.LicenseCoresAvailable *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

LicenseCoresAvailable property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.SolutionUnitSystem *: Ansys.ACT.Interfaces.Common.MechanicalUnitSystem | [None](https://docs.python.org/3/library/constants.html#None)*

SolutionUnitSystem property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.IOBound *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

IOBound property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.IOWrite *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

IOWrite property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.IORead *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

IORead property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.MSUPHarmonicAnalysis *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

MSUPHarmonicAnalysis property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.TimeToCombineDistributedFiles *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

TimeToCombineDistributedFiles property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.SolverData *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

SolverData property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.DateOfRun *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

DateOfRun property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.TimeOfRun *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

TimeOfRun property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.SolutionTrackingVectorLength *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

SolutionTrackingVectorLength property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.ResultTrackingVectorLength *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

ResultTrackingVectorLength property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.ResultFilePath *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Get the result file full path.

<!-- !! processed by numpydoc !! -->

### *property* Solution.NumberOfDOF *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Number of DOF.

<!-- !! processed by numpydoc !! -->

### *property* Solution.SparseMode *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Sparse Mode value.

<!-- !! processed by numpydoc !! -->

### *property* Solution.SkipSolveCommand *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the flag to avoid issuing the solve command in the MAPDL solver.

<!-- !! processed by numpydoc !! -->

### *property* Solution.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAnswerSetAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Solution.CyclicSectorDisplayRangeBegin *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicSectorDisplayRangeBegin.

<!-- !! processed by numpydoc !! -->

### *property* Solution.NumberofSectors *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberofSectors.

<!-- !! processed by numpydoc !! -->

### *property* Solution.ElapsedRunTime *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElapsedRunTime.

<!-- !! processed by numpydoc !! -->

### *property* Solution.MaximumRefinementLoops *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumRefinementLoops.

<!-- !! processed by numpydoc !! -->

### *property* Solution.MemoryUsed *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MemoryUsed.

<!-- !! processed by numpydoc !! -->

### *property* Solution.RefinementDepth *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RefinementDepth.

<!-- !! processed by numpydoc !! -->

### *property* Solution.ResultFileDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultFileDirectory.

<!-- !! processed by numpydoc !! -->

### *property* Solution.ResultFileName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultFileName.

<!-- !! processed by numpydoc !! -->

### *property* Solution.ResultFileSize *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultFileSize.

<!-- !! processed by numpydoc !! -->

### *property* Solution.ResultFileTimestamp *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultFileTimestamp.

<!-- !! processed by numpydoc !! -->

### *property* Solution.ExportTopologyFile *: [Ansys.Mechanical.DataModel.Enums.ExportTopologyFileOption](../../../Mechanical/DataModel/Enums/ExportTopologyFileOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExportTopologyFileOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportTopologyFile.

<!-- !! processed by numpydoc !! -->

### *property* Solution.MeshSource *: [Ansys.Mechanical.DataModel.Enums.MeshSourceType](../../../Mechanical/DataModel/Enums/MeshSourceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshSourceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshSource.

<!-- !! processed by numpydoc !! -->

### *property* Solution.ElementSelection *: [Ansys.Mechanical.DataModel.Enums.ConvergenceControlType](../../../Mechanical/DataModel/Enums/ConvergenceControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementSelection.

<!-- !! processed by numpydoc !! -->

### *property* Solution.ResultFileUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultFileUnitSystem.

<!-- !! processed by numpydoc !! -->

### *property* Solution.CalculateBeamSectionResults *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateBeamSectionResults.

<!-- !! processed by numpydoc !! -->

### *property* Solution.TopologyResult *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopologyResult.

<!-- !! processed by numpydoc !! -->

### *property* Solution.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* Solution.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Solution.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Solution.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Solution.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Solution.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Solution.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Solution.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### Solution.Solve(wait: System.Boolean, config: System.String)

Run the Solve action.

<!-- !! processed by numpydoc !! -->

### Solution.Solve(wait: System.Boolean, config: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolveConfiguration](../../Mechanical/Application/SolveProcessSettings/SolveConfiguration.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolveConfiguration))

Run the Solve action.

<!-- !! processed by numpydoc !! -->

### Solution.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

### Solution.GetResults()

Gets the Results from the server.

<!-- !! processed by numpydoc !! -->

### Solution.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### Solution.IsResultFileSameAsLoaded(filepath: System.String)

Checks if the given result file is same the loaded result file

<!-- !! processed by numpydoc !! -->

### Solution.RelinkResultFile(filepath: System.String)

Relink the result file. This action allows repairing the result file referencing without altering the generated result data.

<!-- !! processed by numpydoc !! -->

### Solution.IsResultFileChanged()

Checks if the referenced result file has been changed.

<!-- !! processed by numpydoc !! -->

### Solution.ReloadResultFile()

Reload the result file. For results-only systems, this action reloads the result mesh data and resets all result scopings.

<!-- !! processed by numpydoc !! -->

### Solution.OpenSolverFilesDirectory()

Run the OpenSolverFilesDirectory action.

<!-- !! processed by numpydoc !! -->

### Solution.ReadGivenAnsysResultFile(resultFilePath: System.String, unitSystemID: [Ansys.Mechanical.DataModel.Enums.UnitSystemIDType](../../../Mechanical/DataModel/Enums/UnitSystemIDType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.UnitSystemIDType))

Run the given Ansys ReadResults action.///

<!-- !! processed by numpydoc !! -->

### Solution.ReadGivenAnsysResultFileByReference(resultFilePath: System.String, unitSystemID: [Ansys.Mechanical.DataModel.Enums.UnitSystemIDType](../../../Mechanical/DataModel/Enums/UnitSystemIDType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.UnitSystemIDType))

Run the given Ansys ReadResults by reference action.///

<!-- !! processed by numpydoc !! -->

### Solution.ReadAnsysResultFile()

Run the Ansys ReadResults action.

<!-- !! processed by numpydoc !! -->

### Solution.ExtractSolutionStatistics()

ExtractSolutionStatistics method.

<!-- !! processed by numpydoc !! -->

### Solution.AddContactTool()

Creates a new ContactTool

<!-- !! processed by numpydoc !! -->

### Solution.AddBoltTool()

Creates a new BoltTool

<!-- !! processed by numpydoc !! -->

### Solution.AddForceSummationProbe()

Creates a new ForceSummationProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddTorqueProbe()

Creates a new TorqueProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddResponsePSDTool()

Creates a new ResponsePSDTool

<!-- !! processed by numpydoc !! -->

### Solution.AddForceReactionsForContactRegions(contactRegionObjIds: System.Collections.Generic.IEnumerable[System.Int32])

AddForceReactionsForContactRegions method.

<!-- !! processed by numpydoc !! -->

### Solution.AddMomentReactionsForContactRegions(contactRegionObjIds: System.Collections.Generic.IEnumerable[System.Int32])

AddMomentReactionsForContactRegions method.

<!-- !! processed by numpydoc !! -->

### Solution.AddReactionsForContactRegions(contactRegionObjIds: System.Collections.Generic.IEnumerable[System.Int32])

AddReactionsForContactRegions method.

<!-- !! processed by numpydoc !! -->

### Solution.ValueForSolutionTracking(index: System.UInt32, key: System.String)

ValueForSolutionTracking method.

<!-- !! processed by numpydoc !! -->

### Solution.DeleteRow(index: System.UInt32)

DeleteRow method.

<!-- !! processed by numpydoc !! -->

### Solution.ValueForResultTracking(index: System.UInt32, key: System.String)

ValueForResultTracking method.

<!-- !! processed by numpydoc !! -->

### Solution.FormatValue(value: System.Double, unitType: System.Int32)

FormatValue method.

<!-- !! processed by numpydoc !! -->

### Solution.AddGroupedScopedCustomResult(selectedPlies: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

AddGroupedScopedCustomResult method.

<!-- !! processed by numpydoc !! -->

### Solution.AddGroupedScopedACPResults(resultType: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultType), selectedPlies: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

AddGroupedScopedACPResults method.

<!-- !! processed by numpydoc !! -->

### Solution.AddFatigueTool()

AddFatigueTool method.

<!-- !! processed by numpydoc !! -->

### Solution.CreateResultsAtAllSets(resId: System.UInt32)

CreateResultsAtAllSets method.

<!-- !! processed by numpydoc !! -->

### Solution.EvaluateAllContactTrackers()

EvaluateAllContactTrackers method.

<!-- !! processed by numpydoc !! -->

### Solution.EvaluateContactTracker()

EvaluateContactTracker method.

<!-- !! processed by numpydoc !! -->

### Solution.ExecutePostCommands()

Run Execute Post Commands for all post command objects.

<!-- !! processed by numpydoc !! -->

### Solution.ExecutePostCommands(activeObjs: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

ExecutePostCommands method.

<!-- !! processed by numpydoc !! -->

### Solution.FetchRemoteResults()

FetchRemoteResults method.

<!-- !! processed by numpydoc !! -->

### Solution.GenerateAdaptedMesh()

GenerateAdaptedMesh method.

<!-- !! processed by numpydoc !! -->

### Solution.ExportSubstructureInCPAFormat(exportFileName: System.String, bAddOnDemandExpansionFiles: System.Boolean)

Export Substructure to cpa file.

<!-- !! processed by numpydoc !! -->

### Solution.DisconnectRemoteJob()

DisconnectRemoteJob method.

<!-- !! processed by numpydoc !! -->

### Solution.ReconnectRemoteJob()

ReconnectRemoteJob method.

<!-- !! processed by numpydoc !! -->

### Solution.ClearRemoteStorageData()

ClearRemoteStorageData method.

<!-- !! processed by numpydoc !! -->

### Solution.AddLineChart2D()

Creates a new LineChart2D

<!-- !! processed by numpydoc !! -->

### Solution.AddAccelerationFrequencyResponse()

Creates a new AccelerationFrequencyResponse

<!-- !! processed by numpydoc !! -->

### Solution.AddAccelerationPhaseResponse()

Creates a new AccelerationPhaseResponse

<!-- !! processed by numpydoc !! -->

### Solution.AddAccelerationProbe()

Creates a new AccelerationProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddAccelerationWaterfallDiagram()

Creates a new AccelerationWaterfallDiagram

<!-- !! processed by numpydoc !! -->

### Solution.AddAccumulatedEquivalentPlasticStrain()

Creates a new AccumulatedEquivalentPlasticStrain

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticAbsorptionCoefficient()

Creates a new AcousticAbsorptionCoefficient

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticAWeightedSoundPressureLevel()

Creates a new AcousticAWeightedSoundPressureLevel

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticAWeightedSPLFrequencyResponse()

Creates a new AcousticAWeightedSPLFrequencyResponse

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticDiffuseSoundTransmissionLoss()

Creates a new AcousticDiffuseSoundTransmissionLoss

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticDirectionalVelocityResult()

Creates a new AcousticDirectionalVelocityResult

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticFarFieldSPL()

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticFarFieldAWeightedSPL()

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticFarFieldMaximumPressure()

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticFarFieldPhase()

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticFarFieldDirectivity()

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticFarFieldMaximumScatteredPressure()

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticFarFieldTargetStrength()

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticFarFieldSoundPowerLevel()

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticFarFieldSPLMic()

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticFarFieldAWeightedSPLMic()

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticFarFieldMaximumPressureMic()

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticFarFieldPhaseMic()

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticFarFieldSoundPowerLevelWaterfallDiagram()

Creates a new AcousticFarFieldSoundPowerLevelWaterfallDiagram

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticFarFieldSPLMicWaterfallDiagram()

Creates a new AcousticFarFieldSPLMicWaterfallDiagram

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticFrequencyBandAWeightedSPL()

Creates a new AcousticFrequencyBandAWeightedSPL

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticFrequencyBandSPL()

Creates a new AcousticFrequencyBandSPL

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticKineticEnergy()

Creates a new AcousticKineticEnergy

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticKineticEnergyFrequencyResponse()

Creates a new AcousticKineticEnergyFrequencyResponse

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticPotentialEnergy()

Creates a new AcousticPotentialEnergy

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticPotentialEnergyFrequencyResponse()

Creates a new AcousticPotentialEnergyFrequencyResponse

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticPressureFrequencyResponse()

Creates a new AcousticPressureFrequencyResponse

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticPressureResult()

Creates a new AcousticPressureResult

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticReturnLoss()

Creates a new AcousticReturnLoss

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticSoundPressureLevel()

Creates a new AcousticSoundPressureLevel

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticSPLFrequencyResponse()

Creates a new AcousticSPLFrequencyResponse

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticTotalVelocityResult()

Creates a new AcousticTotalVelocityResult

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticTransmissionLoss()

Creates a new AcousticTransmissionLoss

<!-- !! processed by numpydoc !! -->

### Solution.AddAcousticVelocityFrequencyResponse()

Creates a new AcousticVelocityFrequencyResponse

<!-- !! processed by numpydoc !! -->

### Solution.AddAngularAccelerationProbe()

Creates a new AngularAccelerationProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddAngularVelocityProbe()

Creates a new AngularVelocityProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddBeamProbe()

Creates a new BeamProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddBeamTool()

Creates a new BeamTool

<!-- !! processed by numpydoc !! -->

### Solution.AddBearingProbe()

Creates a new BearingProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddBendingStressEquivalent()

Creates a new BendingStressEquivalent

<!-- !! processed by numpydoc !! -->

### Solution.AddBendingStressIntensity()

Creates a new BendingStressIntensity

<!-- !! processed by numpydoc !! -->

### Solution.AddBoltPretensionProbe()

Creates a new BoltPretensionProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddCampbellDiagram()

Creates a new CampbellDiagram

<!-- !! processed by numpydoc !! -->

### Solution.AddChargeReactionFrequencyResponse()

Creates a new ChargeReactionFrequencyResponse

<!-- !! processed by numpydoc !! -->

### Solution.AddChargeReactionProbe()

Creates a new ChargeReactionProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### Solution.AddCompositeCriterion()

Creates a new CompositeCriterion

<!-- !! processed by numpydoc !! -->

### Solution.AddCompositeFailureTool()

Creates a new CompositeFailureTool

<!-- !! processed by numpydoc !! -->

### Solution.AddCompositeSamplingPointTool()

Creates a new CompositeSamplingPointTool

<!-- !! processed by numpydoc !! -->

### Solution.AddContactDistanceProbe()

Creates a new ContactDistanceProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddCurrentDensity()

Creates a new CurrentDensity

<!-- !! processed by numpydoc !! -->

### Solution.AddCurrentDensityProbe()

Creates a new CurrentDensityProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddDamageStatus()

Creates a new DamageStatus

<!-- !! processed by numpydoc !! -->

### Solution.AddDeformationFrequencyResponse()

Creates a new DeformationFrequencyResponse

<!-- !! processed by numpydoc !! -->

### Solution.AddDeformationPhaseResponse()

Creates a new DeformationPhaseResponse

<!-- !! processed by numpydoc !! -->

### Solution.AddDeformationProbe()

Creates a new DeformationProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddDirectionalAcceleration()

Creates a new DirectionalAcceleration

<!-- !! processed by numpydoc !! -->

### Solution.AddDirectionalAccelerationPSD()

Creates a new DirectionalAccelerationPSD

<!-- !! processed by numpydoc !! -->

### Solution.AddDirectionalAccelerationRS()

Creates a new DirectionalAccelerationRS

<!-- !! processed by numpydoc !! -->

### Solution.AddDirectionalAxialForce()

Creates a new DirectionalAxialForce

<!-- !! processed by numpydoc !! -->

### Solution.AddDirectionalBendingMoment()

Creates a new DirectionalBendingMoment

<!-- !! processed by numpydoc !! -->

### Solution.AddDirectionalCurrentDensity()

Creates a new DirectionalCurrentDensity

<!-- !! processed by numpydoc !! -->

### Solution.AddDirectionalDeformation()

Creates a new DirectionalDeformation

<!-- !! processed by numpydoc !! -->

### Solution.AddDirectionalElectricFieldIntensity()

Creates a new DirectionalElectricFieldIntensity

<!-- !! processed by numpydoc !! -->

### Solution.AddDirectionalElectricFluxDensity()

Creates a new DirectionalElectricFluxDensity

<!-- !! processed by numpydoc !! -->

### Solution.AddDirectionalElectrostaticForce()

Creates a new DirectionalElectrostaticForce

<!-- !! processed by numpydoc !! -->

### Solution.AddDirectionalHeatFlux()

Creates a new DirectionalHeatFlux

<!-- !! processed by numpydoc !! -->

### Solution.AddDirectionalMagneticFieldIntensity()

Creates a new DirectionalMagneticFieldIntensity

<!-- !! processed by numpydoc !! -->

### Solution.AddDirectionalMagneticFluxDensity()

Creates a new DirectionalMagneticFluxDensity

<!-- !! processed by numpydoc !! -->

### Solution.AddDirectionalShearForce()

Creates a new DirectionalShearForce

<!-- !! processed by numpydoc !! -->

### Solution.AddShearMomentDiagramMY()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

### Solution.AddShearMomentDiagramMZ()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

### Solution.AddShearMomentDiagramUY()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

### Solution.AddShearMomentDiagramUZ()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

### Solution.AddShearMomentDiagramVY()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

### Solution.AddShearMomentDiagramVZ()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

### Solution.AddThermalStrain()

Creates a new DirectionalThermalStrain

<!-- !! processed by numpydoc !! -->

### Solution.AddDirectionalTorsionalMoment()

Creates a new DirectionalTorsionalMoment

<!-- !! processed by numpydoc !! -->

### Solution.AddDirectionalVelocity()

Creates a new DirectionalVelocity

<!-- !! processed by numpydoc !! -->

### Solution.AddDirectionalVelocityPSD()

Creates a new DirectionalVelocityPSD

<!-- !! processed by numpydoc !! -->

### Solution.AddDirectionalVelocityRS()

Creates a new DirectionalVelocityRS

<!-- !! processed by numpydoc !! -->

### Solution.AddElasticStrainFrequencyResponse()

Creates a new ElasticStrainFrequencyResponse

<!-- !! processed by numpydoc !! -->

### Solution.AddElasticStrainIntensity()

Creates a new ElasticStrainIntensity

<!-- !! processed by numpydoc !! -->

### Solution.AddElasticStrainPhaseResponse()

Creates a new ElasticStrainPhaseResponse

<!-- !! processed by numpydoc !! -->

### Solution.AddElectricFieldProbe()

Creates a new ElectricFieldProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddElectricPotential()

Creates a new ElectricPotential

<!-- !! processed by numpydoc !! -->

### Solution.AddElectricVoltage()

Creates a new ElectricVoltage

<!-- !! processed by numpydoc !! -->

### Solution.AddVoltageProbe()

Creates a new ElectricVoltageProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddElectromechanicalCouplingCoefficient()

Creates a new ElectromechanicalCouplingCoefficient

<!-- !! processed by numpydoc !! -->

### Solution.AddElementalEulerXYAngle()

Creates a new ElementalEulerXYAngle

<!-- !! processed by numpydoc !! -->

### Solution.AddElementalEulerXZAngle()

Creates a new ElementalEulerXZAngle

<!-- !! processed by numpydoc !! -->

### Solution.AddElementalEulerYZAngle()

Creates a new ElementalEulerYZAngle

<!-- !! processed by numpydoc !! -->

### Solution.AddElementalStrainEnergy()

Creates a new ElementalStrainEnergy

<!-- !! processed by numpydoc !! -->

### Solution.AddElementalTriads()

Creates a new ElementalTriads

<!-- !! processed by numpydoc !! -->

### Solution.AddEmagReactionProbe()

Creates a new EmagReactionProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddEnergyDissipatedPerUnitVolume()

Creates a new EnergyDissipatedPerUnitVolume

<!-- !! processed by numpydoc !! -->

### Solution.AddEnergyProbe()

Creates a new EnergyProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddEquivalentCreepStrain()

Creates a new EquivalentCreepStrain

<!-- !! processed by numpydoc !! -->

### Solution.AddEquivalentCreepStrainRST()

Creates a new EquivalentCreepStrainRST

<!-- !! processed by numpydoc !! -->

### Solution.AddEquivalentElasticStrain()

Creates a new EquivalentElasticStrain

<!-- !! processed by numpydoc !! -->

### Solution.AddEquivalentElasticStrainRST()

Creates a new EquivalentElasticStrainRST

<!-- !! processed by numpydoc !! -->

### Solution.AddEquivalentPlasticStrain()

Creates a new EquivalentPlasticStrain

<!-- !! processed by numpydoc !! -->

### Solution.AddEquivalentPlasticStrainRST()

Creates a new EquivalentPlasticStrainRST

<!-- !! processed by numpydoc !! -->

### Solution.AddEquivalentRadiatedPower()

Creates a new EquivalentRadiatedPower

<!-- !! processed by numpydoc !! -->

### Solution.AddEquivalentRadiatedPowerLevel()

Creates a new EquivalentRadiatedPowerLevel

<!-- !! processed by numpydoc !! -->

### Solution.AddEquivalentRadiatedPowerLevelWaterfallDiagram()

Creates a new EquivalentRadiatedPowerLevelWaterfallDiagram

<!-- !! processed by numpydoc !! -->

### Solution.AddEquivalentRadiatedPowerWaterfallDiagram()

Creates a new EquivalentRadiatedPowerWaterfallDiagram

<!-- !! processed by numpydoc !! -->

### Solution.AddEquivalentStress()

Creates a new EquivalentStress

<!-- !! processed by numpydoc !! -->

### Solution.AddEquivalentStressPSD()

Creates a new EquivalentStressPSD

<!-- !! processed by numpydoc !! -->

### Solution.AddEquivalentStressRS()

Creates a new EquivalentStressRS

<!-- !! processed by numpydoc !! -->

### Solution.AddEquivalentTotalStrain()

Creates a new EquivalentTotalStrain

<!-- !! processed by numpydoc !! -->

### Solution.AddExpansionSettings()

Creates a new ExpansionSettings

<!-- !! processed by numpydoc !! -->

### Solution.AddFiberCompressiveDamageVariable()

Creates a new FiberCompressiveDamageVariable

<!-- !! processed by numpydoc !! -->

### Solution.AddFiberCompressiveFailureCriterion()

Creates a new FiberCompressiveFailureCriterion

<!-- !! processed by numpydoc !! -->

### Solution.AddFiberTensileDamageVariable()

Creates a new FiberTensileDamageVariable

<!-- !! processed by numpydoc !! -->

### Solution.AddFiberTensileFailureCriterion()

Creates a new FiberTensileFailureCriterion

<!-- !! processed by numpydoc !! -->

### Solution.AddFieldIntensityProbe()

Creates a new FieldIntensityProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddFlexibleRotationProbe()

Creates a new FlexibleRotationProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddFluidFlowRate()

Creates a new FluidFlowRate

<!-- !! processed by numpydoc !! -->

### Solution.AddFluidHeatConductionRate()

Creates a new FluidHeatConductionRate

<!-- !! processed by numpydoc !! -->

### Solution.AddFluidHeatTransportRate()

Creates a new FluidHeatTransportRate

<!-- !! processed by numpydoc !! -->

### Solution.AddFluxDensityProbe()

Creates a new FluxDensityProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddFluxLinkage()

Creates a new FluxLinkage

<!-- !! processed by numpydoc !! -->

### Solution.AddForceReaction()

Creates a new ForceReaction

<!-- !! processed by numpydoc !! -->

### Solution.AddForceReactionFrequencyResponse()

Creates a new ForceReactionFrequencyResponse

<!-- !! processed by numpydoc !! -->

### Solution.AddFractureTool()

Creates a new FractureTool

<!-- !! processed by numpydoc !! -->

### Solution.AddGeneralizedPlaneStrainProbe()

Creates a new GeneralizedPlaneStrainProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddHeatFluxProbe()

Creates a new HeatFluxProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddImpedanceFrequencyResponse()

Creates a new ImpedanceFrequencyResponse

<!-- !! processed by numpydoc !! -->

### Solution.AddImpedanceProbe()

Creates a new ImpedanceProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddInductance()

Creates a new Inductance

<!-- !! processed by numpydoc !! -->

### Solution.AddJointProbe()

Creates a new JointProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddJouleHeat()

Creates a new JouleHeat

<!-- !! processed by numpydoc !! -->

### Solution.AddJouleHeatProbe()

Creates a new JouleHeatProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddLatticeDensity()

Creates a new LatticeDensity

<!-- !! processed by numpydoc !! -->

### Solution.AddLatticeElementalDensity()

Creates a new LatticeElementalDensity

<!-- !! processed by numpydoc !! -->

### Solution.AddLinearizedEquivalentStress()

Creates a new LinearizedEquivalentStress

<!-- !! processed by numpydoc !! -->

### Solution.AddLinearizedMaximumPrincipalStress()

Creates a new LinearizedMaximumPrincipalStress

<!-- !! processed by numpydoc !! -->

### Solution.AddLinearizedMaximumShearStress()

Creates a new LinearizedMaximumShearStress

<!-- !! processed by numpydoc !! -->

### Solution.AddLinearizedMiddlePrincipalStress()

Creates a new LinearizedMiddlePrincipalStress

<!-- !! processed by numpydoc !! -->

### Solution.AddLinearizedMinimumPrincipalStress()

Creates a new LinearizedMinimumPrincipalStress

<!-- !! processed by numpydoc !! -->

### Solution.AddLinearizedNormalStress()

Creates a new LinearizedNormalStress

<!-- !! processed by numpydoc !! -->

### Solution.AddLinearizedShearStress()

Creates a new LinearizedShearStress

<!-- !! processed by numpydoc !! -->

### Solution.AddLinearizedStressIntensity()

Creates a new LinearizedStressIntensity

<!-- !! processed by numpydoc !! -->

### Solution.AddLinePressureResult()

Creates a new LinePressureResult

<!-- !! processed by numpydoc !! -->

### Solution.AddMagneticCoenergy()

Creates a new MagneticCoenergy

<!-- !! processed by numpydoc !! -->

### Solution.AddMagneticDirectionalForces()

Creates a new MagneticDirectionalForces

<!-- !! processed by numpydoc !! -->

### Solution.AddMagneticError()

Creates a new MagneticError

<!-- !! processed by numpydoc !! -->

### Solution.AddMagneticFluxProbe()

Creates a new MagneticFluxProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddMagneticPotential()

Creates a new MagneticPotential

<!-- !! processed by numpydoc !! -->

### Solution.AddMagneticTotalForces()

Creates a new MagneticTotalForces

<!-- !! processed by numpydoc !! -->

### Solution.AddMatrixCompressiveDamageVariable()

Creates a new MatrixCompressiveDamageVariable

<!-- !! processed by numpydoc !! -->

### Solution.AddMatrixCompressiveFailureCriterion()

Creates a new MatrixCompressiveFailureCriterion

<!-- !! processed by numpydoc !! -->

### Solution.AddMatrixTensileDamageVariable()

Creates a new MatrixTensileDamageVariable

<!-- !! processed by numpydoc !! -->

### Solution.AddMatrixTensileFailureCriterion()

Creates a new MatrixTensileFailureCriterion

<!-- !! processed by numpydoc !! -->

### Solution.AddMaximumFailureCriteria()

Creates a new MaximumFailureCriteria

<!-- !! processed by numpydoc !! -->

### Solution.AddMaximumPrincipalElasticStrain()

Creates a new MaximumPrincipalElasticStrain

<!-- !! processed by numpydoc !! -->

### Solution.AddMaximumPrincipalStress()

Creates a new MaximumPrincipalStress

<!-- !! processed by numpydoc !! -->

### Solution.AddMaximumPrincipalThermalStrain()

Creates a new MaximumPrincipalThermalStrain

<!-- !! processed by numpydoc !! -->

### Solution.AddMaximumShearElasticStrain()

Creates a new MaximumShearElasticStrain

<!-- !! processed by numpydoc !! -->

### Solution.AddMaximumShearStress()

Creates a new MaximumShearStress

<!-- !! processed by numpydoc !! -->

### Solution.AddMCFWaterfallDiagram()

Creates a new MCFWaterfallDiagram

<!-- !! processed by numpydoc !! -->

### Solution.AddMembraneStressEquivalent()

Creates a new MembraneStressEquivalent

<!-- !! processed by numpydoc !! -->

### Solution.AddMembraneStressIntensity()

Creates a new MembraneStressIntensity

<!-- !! processed by numpydoc !! -->

### Solution.AddMiddlePrincipalElasticStrain()

Creates a new MiddlePrincipalElasticStrain

<!-- !! processed by numpydoc !! -->

### Solution.AddMiddlePrincipalStress()

Creates a new MiddlePrincipalStress

<!-- !! processed by numpydoc !! -->

### Solution.AddMiddlePrincipalThermalStrain()

Creates a new MiddlePrincipalThermalStrain

<!-- !! processed by numpydoc !! -->

### Solution.AddMinimumPrincipalElasticStrain()

Creates a new MinimumPrincipalElasticStrain

<!-- !! processed by numpydoc !! -->

### Solution.AddMinimumPrincipalStress()

Creates a new MinimumPrincipalStress

<!-- !! processed by numpydoc !! -->

### Solution.AddMomentReaction()

Creates a new MomentReaction

<!-- !! processed by numpydoc !! -->

### Solution.AddMullinsDamageVariable()

Creates a new MullinsDamageVariable

<!-- !! processed by numpydoc !! -->

### Solution.AddMullinsMaximumPreviousStrainEnergy()

Creates a new MullinsMaximumPreviousStrainEnergy

<!-- !! processed by numpydoc !! -->

### Solution.AddNewtonRaphsonResidualCharge()

Creates a new NewtonRaphsonResidualCharge

<!-- !! processed by numpydoc !! -->

### Solution.AddNewtonRaphsonResidualForce()

Creates a new NewtonRaphsonResidualForce

<!-- !! processed by numpydoc !! -->

### Solution.AddNewtonRaphsonResidualHeat()

Creates a new NewtonRaphsonResidualHeat

<!-- !! processed by numpydoc !! -->

### Solution.AddNewtonRaphsonResidualMoment()

Creates a new NewtonRaphsonResidualMoment

<!-- !! processed by numpydoc !! -->

### Solution.AddNodalEulerXYAngle()

Creates a new NodalEulerXYAngle

<!-- !! processed by numpydoc !! -->

### Solution.AddNodalEulerXZAngle()

Creates a new NodalEulerXZAngle

<!-- !! processed by numpydoc !! -->

### Solution.AddNodalEulerYZAngle()

Creates a new NodalEulerYZAngle

<!-- !! processed by numpydoc !! -->

### Solution.AddNodalTriads()

Creates a new NodalTriads

<!-- !! processed by numpydoc !! -->

### Solution.AddNormalElasticStrain()

Creates a new NormalElasticStrain

<!-- !! processed by numpydoc !! -->

### Solution.AddNormalGasketPressure()

Creates a new NormalGasketPressure

<!-- !! processed by numpydoc !! -->

### Solution.AddNormalGasketTotalClosure()

Creates a new NormalGasketTotalClosure

<!-- !! processed by numpydoc !! -->

### Solution.AddNormalStress()

Creates a new NormalStress

<!-- !! processed by numpydoc !! -->

### Solution.AddPosition()

Creates a new Position

<!-- !! processed by numpydoc !! -->

### Solution.AddPrimaryCriterion()

Creates a new PrimaryCriterion

<!-- !! processed by numpydoc !! -->

### Solution.AddPythonCodeEventBased()

Creates a new PythonCodeEventBased

<!-- !! processed by numpydoc !! -->

### Solution.AddPythonResult()

Creates a new PythonResult

<!-- !! processed by numpydoc !! -->

### Solution.AddQualityFactor()

Creates a new QualityFactor

<!-- !! processed by numpydoc !! -->

### Solution.AddRadiationProbe()

Creates a new RadiationProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddReactionProbe()

Creates a new ReactionProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddResponsePSD()

Creates a new ResponsePSD

<!-- !! processed by numpydoc !! -->

### Solution.AddResultMesh()

Creates a new ResultMesh

<!-- !! processed by numpydoc !! -->

### Solution.AddRotationProbe()

Creates a new RotationProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddShapeFinder()

Creates a new ShapeFinder

<!-- !! processed by numpydoc !! -->

### Solution.AddShapeFinderElemental()

Creates a new ShapeFinderElemental

<!-- !! processed by numpydoc !! -->

### Solution.AddShearDamageVariable()

Creates a new ShearDamageVariable

<!-- !! processed by numpydoc !! -->

### Solution.AddShearElasticStrain()

Creates a new ShearElasticStrain

<!-- !! processed by numpydoc !! -->

### Solution.AddShearGasketPressure()

Creates a new ShearGasketPressure

<!-- !! processed by numpydoc !! -->

### Solution.AddShearGasketTotalClosure()

Creates a new ShearGasketTotalClosure

<!-- !! processed by numpydoc !! -->

### Solution.AddShearStress()

Creates a new ShearStress

<!-- !! processed by numpydoc !! -->

### Solution.AddShellBendingStress()

Creates a new ShellBendingStress

<!-- !! processed by numpydoc !! -->

### Solution.AddShellBottomPeakStress()

Creates a new ShellBottomPeakStress

<!-- !! processed by numpydoc !! -->

### Solution.AddShellMembraneStress()

Creates a new ShellMembraneStress

<!-- !! processed by numpydoc !! -->

### Solution.AddShellTopPeakStress()

Creates a new ShellTopPeakStress

<!-- !! processed by numpydoc !! -->

### Solution.AddSpringProbe()

Creates a new SpringProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddStabilizationEnergy()

Creates a new StabilizationEnergy

<!-- !! processed by numpydoc !! -->

### Solution.AddStrainProbe()

Creates a new StrainProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddStressFrequencyResponse()

Creates a new StressFrequencyResponse

<!-- !! processed by numpydoc !! -->

### Solution.AddStressIntensity()

Creates a new StressIntensity

<!-- !! processed by numpydoc !! -->

### Solution.AddStressPhaseResponse()

Creates a new StressPhaseResponse

<!-- !! processed by numpydoc !! -->

### Solution.AddStressProbe()

Creates a new StressProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddStressTool()

Creates a new StressTool

<!-- !! processed by numpydoc !! -->

### Solution.AddStructuralError()

Creates a new StructuralError

<!-- !! processed by numpydoc !! -->

### Solution.AddStructuralStrainEnergy()

Creates a new StructuralStrainEnergy

<!-- !! processed by numpydoc !! -->

### Solution.AddTemperatureProbe()

Creates a new TemperatureProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddTemperature()

Creates a new TemperatureResult

<!-- !! processed by numpydoc !! -->

### Solution.AddThermalError()

Creates a new ThermalError

<!-- !! processed by numpydoc !! -->

### Solution.AddThermalStrainEnergy()

Creates a new ThermalStrainEnergy

<!-- !! processed by numpydoc !! -->

### Solution.AddTopologyDensity()

Creates a new TopologyDensity

<!-- !! processed by numpydoc !! -->

### Solution.AddTopologyElementalDensity()

Creates a new TopologyElementalDensity

<!-- !! processed by numpydoc !! -->

### Solution.AddTotalAcceleration()

Creates a new TotalAcceleration

<!-- !! processed by numpydoc !! -->

### Solution.AddTotalAxialForce()

Creates a new TotalAxialForce

<!-- !! processed by numpydoc !! -->

### Solution.AddTotalBendingMoment()

Creates a new TotalBendingMoment

<!-- !! processed by numpydoc !! -->

### Solution.AddTotalCurrentDensity()

Creates a new TotalCurrentDensity

<!-- !! processed by numpydoc !! -->

### Solution.AddTotalDeformation()

Creates a new TotalDeformation

<!-- !! processed by numpydoc !! -->

### Solution.AddTotalElectricFieldIntensity()

Creates a new TotalElectricFieldIntensity

<!-- !! processed by numpydoc !! -->

### Solution.AddTotalElectricFluxDensity()

Creates a new TotalElectricFluxDensity

<!-- !! processed by numpydoc !! -->

### Solution.AddTotalElectrostaticForce()

Creates a new TotalElectrostaticForce

<!-- !! processed by numpydoc !! -->

### Solution.AddTotalHeatFlux()

Creates a new TotalHeatFlux

<!-- !! processed by numpydoc !! -->

### Solution.AddTotalMagneticFieldIntensity()

Creates a new TotalMagneticFieldIntensity

<!-- !! processed by numpydoc !! -->

### Solution.AddTotalMagneticFluxDensity()

Creates a new TotalMagneticFluxDensity

<!-- !! processed by numpydoc !! -->

### Solution.AddTotalShearForce()

Creates a new TotalShearForce

<!-- !! processed by numpydoc !! -->

### Solution.AddShearMomentDiagramMSUM()

Creates a new TotalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

### Solution.AddShearMomentDiagramUSUM()

Creates a new TotalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

### Solution.AddShearMomentDiagramVSUM()

Creates a new TotalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

### Solution.AddTotalTorsionalMoment()

Creates a new TotalTorsionalMoment

<!-- !! processed by numpydoc !! -->

### Solution.AddTotalVelocity()

Creates a new TotalVelocity

<!-- !! processed by numpydoc !! -->

### Solution.AddUserDefinedResult()

Creates a new UserDefinedResult

<!-- !! processed by numpydoc !! -->

### Solution.AddVariableGraph()

Creates a new VariableGraph

<!-- !! processed by numpydoc !! -->

### Solution.AddVectorAxialForce()

Creates a new VectorAxialForce

<!-- !! processed by numpydoc !! -->

### Solution.AddVectorBendingMoment()

Creates a new VectorBendingMoment

<!-- !! processed by numpydoc !! -->

### Solution.AddVectorDeformation()

Creates a new VectorDeformation

<!-- !! processed by numpydoc !! -->

### Solution.AddVectorHeatFlux()

Creates a new VectorHeatFlux

<!-- !! processed by numpydoc !! -->

### Solution.AddVectorPrincipalElasticStrain()

Creates a new VectorPrincipalElasticStrain

<!-- !! processed by numpydoc !! -->

### Solution.AddVectorPrincipalStress()

Creates a new VectorPrincipalStress

<!-- !! processed by numpydoc !! -->

### Solution.AddVectorShearForce()

Creates a new VectorShearForce

<!-- !! processed by numpydoc !! -->

### Solution.AddVectorTorsionalMoment()

Creates a new VectorTorsionalMoment

<!-- !! processed by numpydoc !! -->

### Solution.AddVelocityFrequencyResponse()

Creates a new VelocityFrequencyResponse

<!-- !! processed by numpydoc !! -->

### Solution.AddVelocityPhaseResponse()

Creates a new VelocityPhaseResponse

<!-- !! processed by numpydoc !! -->

### Solution.AddVelocityProbe()

Creates a new VelocityProbe

<!-- !! processed by numpydoc !! -->

### Solution.AddVelocityWaterfallDiagram()

Creates a new VelocityWaterfallDiagram

<!-- !! processed by numpydoc !! -->

### Solution.AddVoltageFrequencyResponse()

Creates a new VoltageFrequencyResponse

<!-- !! processed by numpydoc !! -->

### Solution.AddVolume()

Creates a new Volume

<!-- !! processed by numpydoc !! -->

### Solution.AddVolumeProbe()

Creates a new VolumeProbe

<!-- !! processed by numpydoc !! -->

### Solution.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Solution.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Solution.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Solution.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Solution.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### Solution.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Solution.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Solution.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Solution.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Solution.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Solution.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Solution.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### Solution.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Solution.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Solution.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

