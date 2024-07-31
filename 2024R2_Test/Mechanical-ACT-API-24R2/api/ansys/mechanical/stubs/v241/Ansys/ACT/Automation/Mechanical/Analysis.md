# `Analysis`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Analysis.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| [`Solve`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#id1)                                                                                              | Run the Solve action.                                                                                                  |
| [`Solve`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#id1)                                                                                              | Run the Solve action.                                                                                                  |
| [`ClearGeneratedData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.ClearGeneratedData)                                                         | Run the ClearGeneratedData action.                                                                                     |
| [`OpenSolverFilesDirectory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.OpenSolverFilesDirectory)                                             | Run the OpenSolverFilesDirectory action.                                                                               |
| [`FilterBasedOnEnvironment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.FilterBasedOnEnvironment)                                             | Enables interface filtering that only displays model-level items applicable to                                         |
| [`AddInitialVelocity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddInitialVelocity)                                                         | Creates a new child Initial Velocity.                                                                                  |
| [`AddSystemCouplingRegion`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddSystemCouplingRegion)                                               | Creates a new SystemCouplingRegion                                                                                     |
| [`AddThermalCondition`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#id2)                                                                                | Creates a new child ThermalCondition.                                                                                  |
| [`AddBoltPretension`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddBoltPretension)                                                           | Creates a new BoltPretension                                                                                           |
| [`AddOptimizationRegion`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddOptimizationRegion)                                                   | Creates a new OptimizationRegion                                                                                       |
| [`AddAcousticTemperature`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddAcousticTemperature)                                                 | Creates a new child ThermalCondition.                                                                                  |
| [`AddSourceConductor`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddSourceConductor)                                                         | Creates a new child SourceConductor.                                                                                   |
| [`WriteSystemCouplingFiles`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.WriteSystemCouplingFiles)                                             | Writes the system coupling files. Usage WriteSystemCouplingFiles(“C:Desktoptempscp1.scp”);                             |
| [`CreateAutomaticFarFieldRadiationSurfaces`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.CreateAutomaticFarFieldRadiationSurfaces)             | Run the CreateAutomaticEquivalentSourceSurfaces action.                                                                |
| [`CreateAutomaticFSI`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.CreateAutomaticFSI)                                                         | Run the CreateAutomaticFSI action.                                                                                     |
| [`CreateAutomaticFSIandFarFieldRadiationSurfaces`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.CreateAutomaticFSIandFarFieldRadiationSurfaces) | Run the CreateAutomaticFSIandEquivalentSourceSurfaces action.                                                          |
| [`SelectBodiesWithoutPhysicsRegion`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.SelectBodiesWithoutPhysicsRegion)                             | Run the SelectBodiesWithoutPhysicsRegion action to select the bodies that don’t belong to a Physics Region.            |
| [`SelectBodiesWithMultiplePhysicsRegion`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.SelectBodiesWithMultiplePhysicsRegion)                   | Run the SelectBodiesWithMultiplePhysicsRegion action to select the bodies that belong to more than one Physics Region. |
| [`AddImportedLoadMAPDLResultsFile`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddImportedLoadMAPDLResultsFile)                               | Creates a new Import Load for MAPDL Results File.                                                                      |
| [`AddImportedLoadFluidsResultsFile`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddImportedLoadFluidsResultsFile)                             | Creates a new Import Load for Fluids Results File.                                                                     |
| [`AddImportedLoadExternalData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddImportedLoadExternalData)                                       | Creates a new Imported Load (External Data).                                                                           |
| [`AddImportedRemoteLoadsGroup`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddImportedRemoteLoadsGroup)                                       | Creates a new Import Remote Load Group.                                                                                |
| [`TransferDataFrom`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.TransferDataFrom)                                                             | Transfer Data From action.                                                                                             |
| [`UnlinkDataFrom`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.UnlinkDataFrom)                                                                 | Unlink Data From action.                                                                                               |
| [`ImportLoad`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.ImportLoad)                                                                         | Import Load action.                                                                                                    |
| [`ExportNastranFile`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.ExportNastranFile)                                                           | Export Nastran File.                                                                                                   |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.Duplicate)                                                                           | Duplicate method.                                                                                                      |
| [`AddAcceleration`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddAcceleration)                                                               | Creates a new Acceleration                                                                                             |
| [`AddAcousticAbsorptionElement`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddAcousticAbsorptionElement)                                     | Creates a new AcousticAbsorptionElement                                                                                |
| [`AddAcousticAbsorptionSurface`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddAcousticAbsorptionSurface)                                     | Creates a new AcousticAbsorptionSurface                                                                                |
| [`AddAcousticDiffuseSoundField`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddAcousticDiffuseSoundField)                                     | Creates a new AcousticDiffuseSoundField                                                                                |
| [`AddAcousticFarFieldRadationSurface`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddAcousticFarFieldRadationSurface)                         | Creates a new AcousticFarFieldRadationSurface                                                                          |
| [`AddAcousticFreeSurface`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddAcousticFreeSurface)                                                 | Creates a new AcousticFreeSurface                                                                                      |
| [`AddAcousticImpedanceBoundary`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddAcousticImpedanceBoundary)                                     | Creates a new AcousticImpedanceBoundary                                                                                |
| [`AddAcousticImpedanceSheet`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddAcousticImpedanceSheet)                                           | Creates a new AcousticImpedanceSheet                                                                                   |
| [`AddAcousticIncidentWaveSource`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddAcousticIncidentWaveSource)                                   | Creates a new AcousticIncidentWaveSource                                                                               |
| [`AddAcousticLowReducedFrequency`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddAcousticLowReducedFrequency)                                 | Creates a new AcousticLowReducedFrequency                                                                              |
| [`AddAcousticMassSource`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddAcousticMassSource)                                                   | Creates a new AcousticMassSource                                                                                       |
| [`AddAcousticMassSourceRate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddAcousticMassSourceRate)                                           | Creates a new AcousticMassSourceRate                                                                                   |
| [`AddAcousticPort`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddAcousticPort)                                                               | Creates a new AcousticPort                                                                                             |
| [`AddAcousticPortInDuct`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddAcousticPortInDuct)                                                   | Creates a new AcousticPortInDuct                                                                                       |
| [`AddAcousticPressure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddAcousticPressure)                                                       | Creates a new AcousticPressure                                                                                         |
| [`AddAcousticRadiationBoundary`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddAcousticRadiationBoundary)                                     | Creates a new AcousticRadiationBoundary                                                                                |
| [`AddAcousticRigidWall`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddAcousticRigidWall)                                                     | Creates a new AcousticRigidWall                                                                                        |
| [`AddAcousticStaticPressure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddAcousticStaticPressure)                                           | Creates a new AcousticStaticPressure                                                                                   |
| [`AddAcousticSurfaceAcceleration`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddAcousticSurfaceAcceleration)                                 | Creates a new AcousticSurfaceAcceleration                                                                              |
| [`AddAcousticSurfaceVelocity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddAcousticSurfaceVelocity)                                         | Creates a new AcousticSurfaceVelocity                                                                                  |
| [`AddAcousticSymmetryPlane`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddAcousticSymmetryPlane)                                             | Creates a new AcousticSymmetryPlane                                                                                    |
| [`AddAcousticThermoViscousBLIBoundary`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddAcousticThermoViscousBLIBoundary)                       | Creates a new AcousticThermoViscousBLIBoundary                                                                         |
| [`AddAcousticTransferAdmittanceMatrix`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddAcousticTransferAdmittanceMatrix)                       | Creates a new AcousticTransferAdmittanceMatrix                                                                         |
| [`AddAMOverhangConstraint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddAMOverhangConstraint)                                               | Creates a new AMOverhangConstraint                                                                                     |
| [`AddBearingLoad`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddBearingLoad)                                                                 | Creates a new BearingLoad                                                                                              |
| [`AddBodyControl`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddBodyControl)                                                                 | Creates a new BodyControl                                                                                              |
| [`AddCenterOfGravityConstraint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddCenterOfGravityConstraint)                                     | Creates a new CenterOfGravityConstraint                                                                                |
| [`AddCommandSnippet`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddCommandSnippet)                                                           | Creates a new CommandSnippet                                                                                           |
| [`AddComplexityIndexConstraint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddComplexityIndexConstraint)                                     | Creates a new ComplexityIndexConstraint                                                                                |
| [`AddComplianceConstraint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddComplianceConstraint)                                               | Creates a new ComplianceConstraint                                                                                     |
| [`AddCompressionOnlySupport`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddCompressionOnlySupport)                                           | Creates a new CompressionOnlySupport                                                                                   |
| [`AddConstraintEquation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddConstraintEquation)                                                   | Creates a new ConstraintEquation                                                                                       |
| [`AddContactStepControl`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddContactStepControl)                                                   | Creates a new ContactStepControl                                                                                       |
| [`AddConvection`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddConvection)                                                                   | Creates a new Convection                                                                                               |
| [`AddCoupling`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddCoupling)                                                                       | Creates a new Coupling                                                                                                 |
| [`AddVoltageCoupling`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddVoltageCoupling)                                                         | Creates a new Coupling                                                                                                 |
| [`AddCriterionConstraint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddCriterionConstraint)                                                 | Creates a new CriterionConstraint                                                                                      |
| [`AddCurrent`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddCurrent)                                                                         | Creates a new Current                                                                                                  |
| [`AddCyclicManufacturingConstraint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddCyclicManufacturingConstraint)                             | Creates a new CyclicManufacturingConstraint                                                                            |
| [`AddCylindricalSupport`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddCylindricalSupport)                                                   | Creates a new CylindricalSupport                                                                                       |
| [`AddDetonationPoint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddDetonationPoint)                                                         | Creates a new DetonationPoint                                                                                          |
| [`AddDisplacement`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddDisplacement)                                                               | Creates a new Displacement                                                                                             |
| [`AddDisplacementConstraint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddDisplacementConstraint)                                           | Creates a new DisplacementConstraint                                                                                   |
| [`AddDynamicComplianceConstraint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddDynamicComplianceConstraint)                                 | Creates a new DynamicComplianceConstraint                                                                              |
| [`AddEarthGravity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddEarthGravity)                                                               | Creates a new EarthGravity                                                                                             |
| [`AddElasticSupport`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddElasticSupport)                                                           | Creates a new ElasticSupport                                                                                           |
| [`AddElectricCharge`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddElectricCharge)                                                           | Creates a new ElectricCharge                                                                                           |
| [`AddElementBirthAndDeath`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddElementBirthAndDeath)                                               | Creates a new ElementBirthAndDeath                                                                                     |
| [`AddEMTransducer`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddEMTransducer)                                                               | Creates a new EMTransducer                                                                                             |
| [`AddExtrusionManufacturingConstraint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddExtrusionManufacturingConstraint)                       | Creates a new ExtrusionManufacturingConstraint                                                                         |
| [`AddFixedRotation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddFixedRotation)                                                             | Creates a new FixedRotation                                                                                            |
| [`AddFixedSupport`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddFixedSupport)                                                               | Creates a new FixedSupport                                                                                             |
| [`AddFluidSolidInterface`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddFluidSolidInterface)                                                 | Creates a new FluidSolidInterface                                                                                      |
| [`AddForce`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddForce)                                                                             | Creates a new Force                                                                                                    |
| [`AddFrictionlessSupport`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddFrictionlessSupport)                                                 | Creates a new FrictionlessSupport                                                                                      |
| [`AddGeneralizedPlaneStrain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddGeneralizedPlaneStrain)                                           | Creates a new GeneralizedPlaneStrain                                                                                   |
| [`AddGeometryBasedAdaptivity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddGeometryBasedAdaptivity)                                         | Creates a new GeometryBasedAdaptivity                                                                                  |
| [`AddGlobalVonMisesStressConstraint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddGlobalVonMisesStressConstraint)                           | Creates a new GlobalVonMisesStressConstraint                                                                           |
| [`AddHeatFlow`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddHeatFlow)                                                                       | Creates a new HeatFlow                                                                                                 |
| [`AddHeatFlux`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddHeatFlux)                                                                       | Creates a new HeatFlux                                                                                                 |
| [`AddHousingConstraint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddHousingConstraint)                                                     | Creates a new HousingConstraint                                                                                        |
| [`AddHydrostaticPressure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddHydrostaticPressure)                                                 | Creates a new HydrostaticPressure                                                                                      |
| [`AddImpedanceBoundary`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddImpedanceBoundary)                                                     | Creates a new ImpedanceBoundary                                                                                        |
| [`AddImportedCFDPressure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddImportedCFDPressure)                                                 | Creates a new ImportedCFDPressure                                                                                      |
| [`AddInternalHeatGeneration`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddInternalHeatGeneration)                                           | Creates a new InternalHeatGeneration                                                                                   |
| [`AddJointLoad`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddJointLoad)                                                                     | Creates a new JointLoad                                                                                                |
| [`AddLimitBoundary`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddLimitBoundary)                                                             | Creates a new LimitBoundary                                                                                            |
| [`AddLinePressure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddLinePressure)                                                               | Creates a new LinePressure                                                                                             |
| [`AddLocalVonMisesStressConstraint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddLocalVonMisesStressConstraint)                             | Creates a new LocalVonMisesStressConstraint                                                                            |
| [`AddMagneticFluxParallel`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddMagneticFluxParallel)                                               | Creates a new MagneticFluxParallel                                                                                     |
| [`AddMassConstraint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddMassConstraint)                                                           | Creates a new MassConstraint                                                                                           |
| [`AddMassFlowRate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddMassFlowRate)                                                               | Creates a new MassFlowRate                                                                                             |
| [`AddMemberSizeManufacturingConstraint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddMemberSizeManufacturingConstraint)                     | Creates a new MemberSizeManufacturingConstraint                                                                        |
| [`AddMoment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddMoment)                                                                           | Creates a new Moment                                                                                                   |
| [`AddMomentOfInertiaConstraint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddMomentOfInertiaConstraint)                                     | Creates a new MomentOfInertiaConstraint                                                                                |
| [`AddMorphingRegion`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddMorphingRegion)                                                           | Creates a new MorphingRegion                                                                                           |
| [`AddNaturalFrequencyConstraint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddNaturalFrequencyConstraint)                                   | Creates a new NaturalFrequencyConstraint                                                                               |
| [`AddNodalDisplacement`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddNodalDisplacement)                                                     | Creates a new NodalDisplacement                                                                                        |
| [`AddNodalForce`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddNodalForce)                                                                   | Creates a new NodalForce                                                                                               |
| [`AddNodalOrientation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddNodalOrientation)                                                       | Creates a new NodalOrientation                                                                                         |
| [`AddNodalPressure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddNodalPressure)                                                             | Creates a new NodalPressure                                                                                            |
| [`AddNodalRotation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddNodalRotation)                                                             | Creates a new NodalRotation                                                                                            |
| [`AddNonlinearAdaptiveRegion`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddNonlinearAdaptiveRegion)                                         | Creates a new NonlinearAdaptiveRegion                                                                                  |
| [`AddObjective`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddObjective)                                                                     | Creates a new Objective                                                                                                |
| [`AddPatternRepetitionConstraint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddPatternRepetitionConstraint)                                 | Creates a new PatternRepetitionConstraint                                                                              |
| [`AddPerfectlyInsulated`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddPerfectlyInsulated)                                                   | Creates a new PerfectlyInsulated                                                                                       |
| [`AddPhysicsRegion`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddPhysicsRegion)                                                             | Creates a new PhysicsRegion                                                                                            |
| [`AddPipeIdealization`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddPipeIdealization)                                                       | Creates a new child PipeIdealization.                                                                                  |
| [`AddPipePressure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddPipePressure)                                                               | Creates a new PipePressure                                                                                             |
| [`AddPipeTemperature`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddPipeTemperature)                                                         | Creates a new PipeTemperature                                                                                          |
| [`AddPlasticHeating`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddPlasticHeating)                                                           | Creates a new PlasticHeating                                                                                           |
| [`AddPressure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddPressure)                                                                       | Creates a new child Pressure.                                                                                          |
| [`AddPSDAcceleration`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddPSDAcceleration)                                                         | Creates a new PSDAcceleration                                                                                          |
| [`AddPSDDisplacement`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddPSDDisplacement)                                                         | Creates a new PSDDisplacement                                                                                          |
| [`AddPSDGAcceleration`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddPSDGAcceleration)                                                       | Creates a new PSDGAcceleration                                                                                         |
| [`AddPSDVelocity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddPSDVelocity)                                                                 | Creates a new PSDVelocity                                                                                              |
| [`AddPullOutDirectionManufacturingConstraint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddPullOutDirectionManufacturingConstraint)         | Creates a new PullOutDirectionManufacturingConstraint                                                                  |
| [`AddPythonCodeEventBased`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddPythonCodeEventBased)                                               | Creates a new PythonCodeEventBased                                                                                     |
| [`AddRadiation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddRadiation)                                                                     | Creates a new Radiation                                                                                                |
| [`AddReactionForceConstraint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddReactionForceConstraint)                                         | Creates a new ReactionForceConstraint                                                                                  |
| [`AddRemoteDisplacement`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddRemoteDisplacement)                                                   | Creates a new RemoteDisplacement                                                                                       |
| [`AddRemoteForce`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddRemoteForce)                                                                 | Creates a new RemoteForce                                                                                              |
| [`AddRotatingForce`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddRotatingForce)                                                             | Creates a new RotatingForce                                                                                            |
| [`AddRotationalAcceleration`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddRotationalAcceleration)                                           | Creates a new RotationalAcceleration                                                                                   |
| [`AddRotationalVelocity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddRotationalVelocity)                                                   | Creates a new RotationalVelocity                                                                                       |
| [`AddRSAcceleration`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddRSAcceleration)                                                           | Creates a new RSAcceleration                                                                                           |
| [`AddRSDisplacement`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddRSDisplacement)                                                           | Creates a new RSDisplacement                                                                                           |
| [`AddRSVelocity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddRSVelocity)                                                                   | Creates a new RSVelocity                                                                                               |
| [`AddSimplySupported`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddSimplySupported)                                                         | Creates a new SimplySupported                                                                                          |
| [`AddSubstructureGenerationCondensedPart`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddSubstructureGenerationCondensedPart)                 | Creates a new SubstructureGenerationCondensedPart                                                                      |
| [`AddSurfaceChargeDensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddSurfaceChargeDensity)                                               | Creates a new SurfaceChargeDensity                                                                                     |
| [`AddSymmetryManufacturingConstraint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddSymmetryManufacturingConstraint)                         | Creates a new SymmetryManufacturingConstraint                                                                          |
| [`AddTemperature`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddTemperature)                                                                 | Creates a new Temperature                                                                                              |
| [`AddTemperatureConstraint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddTemperatureConstraint)                                             | Creates a new TemperatureConstraint                                                                                    |
| [`AddThermalComplianceConstraint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddThermalComplianceConstraint)                                 | Creates a new ThermalComplianceConstraint                                                                              |
| [`AddUniformConstraint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddUniformConstraint)                                                     | Creates a new UniformConstraint                                                                                        |
| [`AddVelocity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddVelocity)                                                                       | Creates a new Velocity                                                                                                 |
| [`AddViscoelasticHeating`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddViscoelasticHeating)                                                 | Creates a new ViscoelasticHeating                                                                                      |
| [`AddVoltage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddVoltage)                                                                         | Creates a new Voltage                                                                                                  |
| [`AddVoltageGround`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddVoltageGround)                                                             | Creates a new VoltageGround                                                                                            |
| [`AddVolumeChargeDensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddVolumeChargeDensity)                                                 | Creates a new VolumeChargeDensity                                                                                      |
| [`AddVolumeConstraint`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddVolumeConstraint)                                                       | Creates a new VolumeConstraint                                                                                         |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.Delete)                                                                                 | Run the Delete action.                                                                                                 |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#id3)                                                                                        | Gets the list of children, filtered by type.                                                                           |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#id3)                                                                                        | Gets the list of children, filtered by type.                                                                           |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddComment)                                                                         | Creates a new child Comment.                                                                                           |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddFigure)                                                                           | Creates a new child Figure.                                                                                            |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AddImage)                                                                             | Creates a new child Image.                                                                                             |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.Activate)                                                                             | Activate the current object.                                                                                           |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.CopyTo)                                                                                 | Copies all visible properties from this object to another.                                                             |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.GroupAllSimilarChildren)                                               | Run the GroupAllSimilarChildren action.                                                                                |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.GroupSimilarObjects)                                                       | Run the GroupSimilarObjects action.                                                                                    |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.PropertyByName)                                                                 | Get a property by its unique name.                                                                                     |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.PropertyByAPIName)                                                           | Get a property by its API name.                                                                                        |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.CreateParameter)                                                               | Creates a new parameter for a Property.                                                                                |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.GetParameter)                                                                     | Gets the parameter corresponding to the given property.                                                                |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.RemoveParameter)                                                               | Removes the parameter from the parameter set corresponding to the given property.                                      |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`CellId`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.CellId)                                   | Gets the CellId.                                              |
| [`SystemCaption`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.SystemCaption)                     | Gets the SystemCaption.                                       |
| [`InitialConditions`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.InitialConditions)             | Get InitialConditions.                                        |
| [`ResultFileName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.ResultFileName)                   | Get the full path and name of the result file.                |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#id0)                                       | Gets the internal object. For advanced usage only.            |
| [`EnvironmentTemperature`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.EnvironmentTemperature)   | Gets or sets the EnvironmentTemperature.                      |
| [`AMProcessSimulation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AMProcessSimulation)         | Gets or sets the AMProcessSimulation.                         |
| [`AnalysisType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AnalysisType)                       | Gets the AnalysisType.                                        |
| [`PhysicsType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.PhysicsType)                         | Gets the PhysicsType.                                         |
| [`Acoustics`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.Acoustics)                             | Gets or sets the Acoustics.                                   |
| [`Electric`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.Electric)                               | Gets the Electric.                                            |
| [`GenerateInputOnly`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.GenerateInputOnly)             | Gets the GenerateInputOnly.                                   |
| [`Structural`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.Structural)                           | Gets or sets the Structural.                                  |
| [`Thermal`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.Thermal)                                 | Gets the Thermal.                                             |
| [`AnalysisSettings`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.AnalysisSettings)               | Gets the AnalysisSettings.                                    |
| [`Solution`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.Solution)                               | Gets the Solution.                                            |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#id0)                                       | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Analysis.md#Analysis.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Analysis.CellId"></a>

### *property* Analysis.CellId *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CellId.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.SystemCaption"></a>

### *property* Analysis.SystemCaption *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SystemCaption.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.InitialConditions"></a>

### *property* Analysis.InitialConditions *: System.Collections.Generic.IList[[Ansys.ACT.Automation.Mechanical.InitialCondition](InitialCondition.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.InitialCondition)] | [None](https://docs.python.org/3/library/constants.html#None)*

Get InitialConditions.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.ResultFileName"></a>

### *property* Analysis.ResultFileName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Get the full path and name of the result file.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.InternalObject"></a>

### *property* Analysis.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEnvironmentAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.EnvironmentTemperature"></a>

### *property* Analysis.EnvironmentTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentTemperature.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AMProcessSimulation"></a>

### *property* Analysis.AMProcessSimulation *: [Ansys.Mechanical.DataModel.Enums.AMProcessSimulationType](../../../Mechanical/DataModel/Enums/AMProcessSimulationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMProcessSimulationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AMProcessSimulation.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AnalysisType"></a>

### *property* Analysis.AnalysisType *: [Ansys.Mechanical.DataModel.Enums.AnalysisType](../../../Mechanical/DataModel/Enums/AnalysisType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AnalysisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AnalysisType.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.PhysicsType"></a>

### *property* Analysis.PhysicsType *: [Ansys.Mechanical.DataModel.Enums.PhysicsType](../../../Mechanical/DataModel/Enums/PhysicsType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PhysicsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhysicsType.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Acoustics"></a>

### *property* Analysis.Acoustics *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Acoustics.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Electric"></a>

### *property* Analysis.Electric *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Electric.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GenerateInputOnly"></a>

### *property* Analysis.GenerateInputOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the GenerateInputOnly.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Structural"></a>

### *property* Analysis.Structural *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Structural.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Thermal"></a>

### *property* Analysis.Thermal *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Thermal.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AnalysisSettings"></a>

### *property* Analysis.AnalysisSettings *: [Ansys.ACT.Automation.Mechanical.AnalysisSettings.AnalysisSettings](AnalysisSettings/AnalysisSettings.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisSettings.AnalysisSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AnalysisSettings.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Solution"></a>

### *property* Analysis.Solution *: [Ansys.ACT.Automation.Mechanical.Solution](Solution.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Solution) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Solution.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.DataModelObjectCategory"></a>

### *property* Analysis.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Children"></a>

### *property* Analysis.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Comments"></a>

### *property* Analysis.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Figures"></a>

### *property* Analysis.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Images"></a>

### *property* Analysis.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.ReadOnly"></a>

### *property* Analysis.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Analysis.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Properties"></a>

### *property* Analysis.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.VisibleProperties"></a>

### *property* Analysis.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Analysis.Solve"></a>

### Analysis.Solve(wait: System.Boolean)

Run the Solve action.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Analysis.Solve(wait: System.Boolean, config: System.String)

Run the Solve action.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.ClearGeneratedData"></a>

### Analysis.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.OpenSolverFilesDirectory"></a>

### Analysis.OpenSolverFilesDirectory()

Run the OpenSolverFilesDirectory action.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.FilterBasedOnEnvironment"></a>

### Analysis.FilterBasedOnEnvironment()

Enables interface filtering that only displays model-level items applicable to
: the currently selected environment type.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddInitialVelocity"></a>

### Analysis.AddInitialVelocity()

Creates a new child Initial Velocity.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddSystemCouplingRegion"></a>

### Analysis.AddSystemCouplingRegion()

Creates a new SystemCouplingRegion

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddThermalCondition"></a>

### Analysis.AddThermalCondition()

Creates a new child ThermalCondition.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddBoltPretension"></a>

### Analysis.AddBoltPretension()

Creates a new BoltPretension

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddOptimizationRegion"></a>

### Analysis.AddOptimizationRegion()

Creates a new OptimizationRegion

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticTemperature"></a>

### Analysis.AddAcousticTemperature()

Creates a new child ThermalCondition.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddSourceConductor"></a>

### Analysis.AddSourceConductor()

Creates a new child SourceConductor.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.WriteSystemCouplingFiles"></a>

### Analysis.WriteSystemCouplingFiles(filename: System.String)

Writes the system coupling files. Usage WriteSystemCouplingFiles(“C:Desktoptempscp1.scp”);

<!-- !! processed by numpydoc !! -->

<a id="Analysis.CreateAutomaticFarFieldRadiationSurfaces"></a>

### Analysis.CreateAutomaticFarFieldRadiationSurfaces()

Run the CreateAutomaticEquivalentSourceSurfaces action.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.CreateAutomaticFSI"></a>

### Analysis.CreateAutomaticFSI()

Run the CreateAutomaticFSI action.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.CreateAutomaticFSIandFarFieldRadiationSurfaces"></a>

### Analysis.CreateAutomaticFSIandFarFieldRadiationSurfaces()

Run the CreateAutomaticFSIandEquivalentSourceSurfaces action.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.SelectBodiesWithoutPhysicsRegion"></a>

### Analysis.SelectBodiesWithoutPhysicsRegion()

Run the SelectBodiesWithoutPhysicsRegion action to select the bodies that don’t belong to a Physics Region.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.SelectBodiesWithMultiplePhysicsRegion"></a>

### Analysis.SelectBodiesWithMultiplePhysicsRegion()

Run the SelectBodiesWithMultiplePhysicsRegion action to select the bodies that belong to more than one Physics Region.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddImportedLoadMAPDLResultsFile"></a>

### Analysis.AddImportedLoadMAPDLResultsFile()

Creates a new Import Load for MAPDL Results File.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddImportedLoadFluidsResultsFile"></a>

### Analysis.AddImportedLoadFluidsResultsFile()

Creates a new Import Load for Fluids Results File.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddImportedLoadExternalData"></a>

### Analysis.AddImportedLoadExternalData()

Creates a new Imported Load (External Data).

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddImportedRemoteLoadsGroup"></a>

### Analysis.AddImportedRemoteLoadsGroup()

Creates a new Import Remote Load Group.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.TransferDataFrom"></a>

### Analysis.TransferDataFrom(analysis: [Ansys.ACT.Automation.Mechanical.Analysis](#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis))

Transfer Data From action.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.UnlinkDataFrom"></a>

### Analysis.UnlinkDataFrom(analysis: [Ansys.ACT.Automation.Mechanical.Analysis](#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis))

Unlink Data From action.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.ImportLoad"></a>

### Analysis.ImportLoad(analysis: [Ansys.ACT.Automation.Mechanical.Analysis](#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis))

Import Load action.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.ExportNastranFile"></a>

### Analysis.ExportNastranFile(exportOptions: [Ansys.ACT.Automation.Mechanical.NastranExportOptions](NastranExportOptions.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NastranExportOptions))

Export Nastran File.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Duplicate"></a>

### Analysis.Duplicate()

Duplicate method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcceleration"></a>

### Analysis.AddAcceleration()

Creates a new Acceleration

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticAbsorptionElement"></a>

### Analysis.AddAcousticAbsorptionElement()

Creates a new AcousticAbsorptionElement

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticAbsorptionSurface"></a>

### Analysis.AddAcousticAbsorptionSurface()

Creates a new AcousticAbsorptionSurface

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticDiffuseSoundField"></a>

### Analysis.AddAcousticDiffuseSoundField()

Creates a new AcousticDiffuseSoundField

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticFarFieldRadationSurface"></a>

### Analysis.AddAcousticFarFieldRadationSurface()

Creates a new AcousticFarFieldRadationSurface

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticFreeSurface"></a>

### Analysis.AddAcousticFreeSurface()

Creates a new AcousticFreeSurface

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticImpedanceBoundary"></a>

### Analysis.AddAcousticImpedanceBoundary()

Creates a new AcousticImpedanceBoundary

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticImpedanceSheet"></a>

### Analysis.AddAcousticImpedanceSheet()

Creates a new AcousticImpedanceSheet

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticIncidentWaveSource"></a>

### Analysis.AddAcousticIncidentWaveSource()

Creates a new AcousticIncidentWaveSource

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticLowReducedFrequency"></a>

### Analysis.AddAcousticLowReducedFrequency()

Creates a new AcousticLowReducedFrequency

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticMassSource"></a>

### Analysis.AddAcousticMassSource()

Creates a new AcousticMassSource

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticMassSourceRate"></a>

### Analysis.AddAcousticMassSourceRate()

Creates a new AcousticMassSourceRate

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticPort"></a>

### Analysis.AddAcousticPort()

Creates a new AcousticPort

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticPortInDuct"></a>

### Analysis.AddAcousticPortInDuct()

Creates a new AcousticPortInDuct

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticPressure"></a>

### Analysis.AddAcousticPressure()

Creates a new AcousticPressure

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticRadiationBoundary"></a>

### Analysis.AddAcousticRadiationBoundary()

Creates a new AcousticRadiationBoundary

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticRigidWall"></a>

### Analysis.AddAcousticRigidWall()

Creates a new AcousticRigidWall

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticStaticPressure"></a>

### Analysis.AddAcousticStaticPressure()

Creates a new AcousticStaticPressure

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticSurfaceAcceleration"></a>

### Analysis.AddAcousticSurfaceAcceleration()

Creates a new AcousticSurfaceAcceleration

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticSurfaceVelocity"></a>

### Analysis.AddAcousticSurfaceVelocity()

Creates a new AcousticSurfaceVelocity

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticSymmetryPlane"></a>

### Analysis.AddAcousticSymmetryPlane()

Creates a new AcousticSymmetryPlane

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticThermoViscousBLIBoundary"></a>

### Analysis.AddAcousticThermoViscousBLIBoundary()

Creates a new AcousticThermoViscousBLIBoundary

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticTransferAdmittanceMatrix"></a>

### Analysis.AddAcousticTransferAdmittanceMatrix()

Creates a new AcousticTransferAdmittanceMatrix

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAMOverhangConstraint"></a>

### Analysis.AddAMOverhangConstraint()

Creates a new AMOverhangConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddBearingLoad"></a>

### Analysis.AddBearingLoad()

Creates a new BearingLoad

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddBodyControl"></a>

### Analysis.AddBodyControl()

Creates a new BodyControl

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddCenterOfGravityConstraint"></a>

### Analysis.AddCenterOfGravityConstraint()

Creates a new CenterOfGravityConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddCommandSnippet"></a>

### Analysis.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddComplexityIndexConstraint"></a>

### Analysis.AddComplexityIndexConstraint()

Creates a new ComplexityIndexConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddComplianceConstraint"></a>

### Analysis.AddComplianceConstraint()

Creates a new ComplianceConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddCompressionOnlySupport"></a>

### Analysis.AddCompressionOnlySupport()

Creates a new CompressionOnlySupport

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddConstraintEquation"></a>

### Analysis.AddConstraintEquation()

Creates a new ConstraintEquation

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddContactStepControl"></a>

### Analysis.AddContactStepControl()

Creates a new ContactStepControl

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddConvection"></a>

### Analysis.AddConvection()

Creates a new Convection

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddCoupling"></a>

### Analysis.AddCoupling()

Creates a new Coupling

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddVoltageCoupling"></a>

### Analysis.AddVoltageCoupling()

Creates a new Coupling

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddCriterionConstraint"></a>

### Analysis.AddCriterionConstraint()

Creates a new CriterionConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddCurrent"></a>

### Analysis.AddCurrent()

Creates a new Current

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddCyclicManufacturingConstraint"></a>

### Analysis.AddCyclicManufacturingConstraint()

Creates a new CyclicManufacturingConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddCylindricalSupport"></a>

### Analysis.AddCylindricalSupport()

Creates a new CylindricalSupport

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddDetonationPoint"></a>

### Analysis.AddDetonationPoint()

Creates a new DetonationPoint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddDisplacement"></a>

### Analysis.AddDisplacement()

Creates a new Displacement

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddDisplacementConstraint"></a>

### Analysis.AddDisplacementConstraint()

Creates a new DisplacementConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddDynamicComplianceConstraint"></a>

### Analysis.AddDynamicComplianceConstraint()

Creates a new DynamicComplianceConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddEarthGravity"></a>

### Analysis.AddEarthGravity()

Creates a new EarthGravity

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddElasticSupport"></a>

### Analysis.AddElasticSupport()

Creates a new ElasticSupport

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddElectricCharge"></a>

### Analysis.AddElectricCharge()

Creates a new ElectricCharge

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddElementBirthAndDeath"></a>

### Analysis.AddElementBirthAndDeath()

Creates a new ElementBirthAndDeath

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddEMTransducer"></a>

### Analysis.AddEMTransducer()

Creates a new EMTransducer

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddExtrusionManufacturingConstraint"></a>

### Analysis.AddExtrusionManufacturingConstraint()

Creates a new ExtrusionManufacturingConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddFixedRotation"></a>

### Analysis.AddFixedRotation()

Creates a new FixedRotation

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddFixedSupport"></a>

### Analysis.AddFixedSupport()

Creates a new FixedSupport

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddFluidSolidInterface"></a>

### Analysis.AddFluidSolidInterface()

Creates a new FluidSolidInterface

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddForce"></a>

### Analysis.AddForce()

Creates a new Force

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddFrictionlessSupport"></a>

### Analysis.AddFrictionlessSupport()

Creates a new FrictionlessSupport

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddGeneralizedPlaneStrain"></a>

### Analysis.AddGeneralizedPlaneStrain()

Creates a new GeneralizedPlaneStrain

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddGeometryBasedAdaptivity"></a>

### Analysis.AddGeometryBasedAdaptivity()

Creates a new GeometryBasedAdaptivity

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddGlobalVonMisesStressConstraint"></a>

### Analysis.AddGlobalVonMisesStressConstraint()

Creates a new GlobalVonMisesStressConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddHeatFlow"></a>

### Analysis.AddHeatFlow()

Creates a new HeatFlow

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddHeatFlux"></a>

### Analysis.AddHeatFlux()

Creates a new HeatFlux

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddHousingConstraint"></a>

### Analysis.AddHousingConstraint()

Creates a new HousingConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddHydrostaticPressure"></a>

### Analysis.AddHydrostaticPressure()

Creates a new HydrostaticPressure

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddImpedanceBoundary"></a>

### Analysis.AddImpedanceBoundary()

Creates a new ImpedanceBoundary

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddImportedCFDPressure"></a>

### Analysis.AddImportedCFDPressure()

Creates a new ImportedCFDPressure

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddInternalHeatGeneration"></a>

### Analysis.AddInternalHeatGeneration()

Creates a new InternalHeatGeneration

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddJointLoad"></a>

### Analysis.AddJointLoad()

Creates a new JointLoad

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddLimitBoundary"></a>

### Analysis.AddLimitBoundary()

Creates a new LimitBoundary

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddLinePressure"></a>

### Analysis.AddLinePressure()

Creates a new LinePressure

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddLocalVonMisesStressConstraint"></a>

### Analysis.AddLocalVonMisesStressConstraint()

Creates a new LocalVonMisesStressConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddMagneticFluxParallel"></a>

### Analysis.AddMagneticFluxParallel()

Creates a new MagneticFluxParallel

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddMassConstraint"></a>

### Analysis.AddMassConstraint()

Creates a new MassConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddMassFlowRate"></a>

### Analysis.AddMassFlowRate()

Creates a new MassFlowRate

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddMemberSizeManufacturingConstraint"></a>

### Analysis.AddMemberSizeManufacturingConstraint()

Creates a new MemberSizeManufacturingConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddMoment"></a>

### Analysis.AddMoment()

Creates a new Moment

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddMomentOfInertiaConstraint"></a>

### Analysis.AddMomentOfInertiaConstraint()

Creates a new MomentOfInertiaConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddMorphingRegion"></a>

### Analysis.AddMorphingRegion()

Creates a new MorphingRegion

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddNaturalFrequencyConstraint"></a>

### Analysis.AddNaturalFrequencyConstraint()

Creates a new NaturalFrequencyConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddNodalDisplacement"></a>

### Analysis.AddNodalDisplacement()

Creates a new NodalDisplacement

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddNodalForce"></a>

### Analysis.AddNodalForce()

Creates a new NodalForce

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddNodalOrientation"></a>

### Analysis.AddNodalOrientation()

Creates a new NodalOrientation

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddNodalPressure"></a>

### Analysis.AddNodalPressure()

Creates a new NodalPressure

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddNodalRotation"></a>

### Analysis.AddNodalRotation()

Creates a new NodalRotation

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddNonlinearAdaptiveRegion"></a>

### Analysis.AddNonlinearAdaptiveRegion()

Creates a new NonlinearAdaptiveRegion

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddObjective"></a>

### Analysis.AddObjective()

Creates a new Objective

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPatternRepetitionConstraint"></a>

### Analysis.AddPatternRepetitionConstraint()

Creates a new PatternRepetitionConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPerfectlyInsulated"></a>

### Analysis.AddPerfectlyInsulated()

Creates a new PerfectlyInsulated

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPhysicsRegion"></a>

### Analysis.AddPhysicsRegion()

Creates a new PhysicsRegion

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPipeIdealization"></a>

### Analysis.AddPipeIdealization()

Creates a new child PipeIdealization.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPipePressure"></a>

### Analysis.AddPipePressure()

Creates a new PipePressure

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPipeTemperature"></a>

### Analysis.AddPipeTemperature()

Creates a new PipeTemperature

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPlasticHeating"></a>

### Analysis.AddPlasticHeating()

Creates a new PlasticHeating

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPressure"></a>

### Analysis.AddPressure()

Creates a new child Pressure.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPSDAcceleration"></a>

### Analysis.AddPSDAcceleration()

Creates a new PSDAcceleration

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPSDDisplacement"></a>

### Analysis.AddPSDDisplacement()

Creates a new PSDDisplacement

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPSDGAcceleration"></a>

### Analysis.AddPSDGAcceleration()

Creates a new PSDGAcceleration

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPSDVelocity"></a>

### Analysis.AddPSDVelocity()

Creates a new PSDVelocity

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPullOutDirectionManufacturingConstraint"></a>

### Analysis.AddPullOutDirectionManufacturingConstraint()

Creates a new PullOutDirectionManufacturingConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPythonCodeEventBased"></a>

### Analysis.AddPythonCodeEventBased()

Creates a new PythonCodeEventBased

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddRadiation"></a>

### Analysis.AddRadiation()

Creates a new Radiation

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddReactionForceConstraint"></a>

### Analysis.AddReactionForceConstraint()

Creates a new ReactionForceConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddRemoteDisplacement"></a>

### Analysis.AddRemoteDisplacement()

Creates a new RemoteDisplacement

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddRemoteForce"></a>

### Analysis.AddRemoteForce()

Creates a new RemoteForce

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddRotatingForce"></a>

### Analysis.AddRotatingForce()

Creates a new RotatingForce

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddRotationalAcceleration"></a>

### Analysis.AddRotationalAcceleration()

Creates a new RotationalAcceleration

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddRotationalVelocity"></a>

### Analysis.AddRotationalVelocity()

Creates a new RotationalVelocity

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddRSAcceleration"></a>

### Analysis.AddRSAcceleration()

Creates a new RSAcceleration

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddRSDisplacement"></a>

### Analysis.AddRSDisplacement()

Creates a new RSDisplacement

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddRSVelocity"></a>

### Analysis.AddRSVelocity()

Creates a new RSVelocity

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddSimplySupported"></a>

### Analysis.AddSimplySupported()

Creates a new SimplySupported

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddSubstructureGenerationCondensedPart"></a>

### Analysis.AddSubstructureGenerationCondensedPart()

Creates a new SubstructureGenerationCondensedPart

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddSurfaceChargeDensity"></a>

### Analysis.AddSurfaceChargeDensity()

Creates a new SurfaceChargeDensity

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddSymmetryManufacturingConstraint"></a>

### Analysis.AddSymmetryManufacturingConstraint()

Creates a new SymmetryManufacturingConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddTemperature"></a>

### Analysis.AddTemperature()

Creates a new Temperature

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddTemperatureConstraint"></a>

### Analysis.AddTemperatureConstraint()

Creates a new TemperatureConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddThermalComplianceConstraint"></a>

### Analysis.AddThermalComplianceConstraint()

Creates a new ThermalComplianceConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddUniformConstraint"></a>

### Analysis.AddUniformConstraint()

Creates a new UniformConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddVelocity"></a>

### Analysis.AddVelocity()

Creates a new Velocity

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddViscoelasticHeating"></a>

### Analysis.AddViscoelasticHeating()

Creates a new ViscoelasticHeating

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddVoltage"></a>

### Analysis.AddVoltage()

Creates a new Voltage

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddVoltageGround"></a>

### Analysis.AddVoltageGround()

Creates a new VoltageGround

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddVolumeChargeDensity"></a>

### Analysis.AddVolumeChargeDensity()

Creates a new VolumeChargeDensity

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddVolumeConstraint"></a>

### Analysis.AddVolumeConstraint()

Creates a new VolumeConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Delete"></a>

### Analysis.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GetChildren"></a>

### Analysis.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id2"></a>

### Analysis.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddComment"></a>

### Analysis.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddFigure"></a>

### Analysis.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddImage"></a>

### Analysis.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Activate"></a>

### Analysis.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.CopyTo"></a>

### Analysis.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GroupAllSimilarChildren"></a>

### Analysis.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GroupSimilarObjects"></a>

### Analysis.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.PropertyByName"></a>

### Analysis.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.PropertyByAPIName"></a>

### Analysis.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.CreateParameter"></a>

### Analysis.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GetParameter"></a>

### Analysis.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.RemoveParameter"></a>

### Analysis.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

