# `Analysis`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Analysis(internalObject: Any)

<a id="Analysis"></a>

### *class* Analysis(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Analysis.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#Analysis.Activate)                                                                             | Activate the current object.                                                                                                                                         |
| [`AddAMOverhangConstraint`](#Analysis.AddAMOverhangConstraint)                                               | Creates a new AMOverhangConstraint                                                                                                                                   |
| [`AddAcceleration`](#Analysis.AddAcceleration)                                                               | Creates a new Acceleration                                                                                                                                           |
| [`AddAcousticAbsorptionElement`](#Analysis.AddAcousticAbsorptionElement)                                     | Creates a new AcousticAbsorptionElement                                                                                                                              |
| [`AddAcousticAbsorptionSurface`](#Analysis.AddAcousticAbsorptionSurface)                                     | Creates a new AcousticAbsorptionSurface                                                                                                                              |
| [`AddAcousticDiffuseSoundField`](#Analysis.AddAcousticDiffuseSoundField)                                     | Creates a new AcousticDiffuseSoundField                                                                                                                              |
| [`AddAcousticFarFieldRadationSurface`](#Analysis.AddAcousticFarFieldRadationSurface)                         | Creates a new AcousticFarFieldRadationSurface                                                                                                                        |
| [`AddAcousticFreeSurface`](#Analysis.AddAcousticFreeSurface)                                                 | Creates a new AcousticFreeSurface                                                                                                                                    |
| [`AddAcousticImpedanceBoundary`](#Analysis.AddAcousticImpedanceBoundary)                                     | Creates a new AcousticImpedanceBoundary                                                                                                                              |
| [`AddAcousticImpedanceSheet`](#Analysis.AddAcousticImpedanceSheet)                                           | Creates a new AcousticImpedanceSheet                                                                                                                                 |
| [`AddAcousticIncidentWaveSource`](#Analysis.AddAcousticIncidentWaveSource)                                   | Creates a new AcousticIncidentWaveSource                                                                                                                             |
| [`AddAcousticLowReducedFrequency`](#Analysis.AddAcousticLowReducedFrequency)                                 | Creates a new AcousticLowReducedFrequency                                                                                                                            |
| [`AddAcousticMassSource`](#Analysis.AddAcousticMassSource)                                                   | Creates a new AcousticMassSource                                                                                                                                     |
| [`AddAcousticMassSourceRate`](#Analysis.AddAcousticMassSourceRate)                                           | Creates a new AcousticMassSourceRate                                                                                                                                 |
| [`AddAcousticPort`](#Analysis.AddAcousticPort)                                                               | Creates a new AcousticPort                                                                                                                                           |
| [`AddAcousticPortInDuct`](#Analysis.AddAcousticPortInDuct)                                                   | Creates a new AcousticPortInDuct                                                                                                                                     |
| [`AddAcousticPressure`](#Analysis.AddAcousticPressure)                                                       | Creates a new AcousticPressure                                                                                                                                       |
| [`AddAcousticRadiationBoundary`](#Analysis.AddAcousticRadiationBoundary)                                     | Creates a new AcousticRadiationBoundary                                                                                                                              |
| [`AddAcousticRigidWall`](#Analysis.AddAcousticRigidWall)                                                     | Creates a new AcousticRigidWall                                                                                                                                      |
| [`AddAcousticStaticPressure`](#Analysis.AddAcousticStaticPressure)                                           | Creates a new AcousticStaticPressure                                                                                                                                 |
| [`AddAcousticSurfaceAcceleration`](#Analysis.AddAcousticSurfaceAcceleration)                                 | Creates a new AcousticSurfaceAcceleration                                                                                                                            |
| [`AddAcousticSurfaceVelocity`](#Analysis.AddAcousticSurfaceVelocity)                                         | Creates a new AcousticSurfaceVelocity                                                                                                                                |
| [`AddAcousticSymmetryPlane`](#Analysis.AddAcousticSymmetryPlane)                                             | Creates a new AcousticSymmetryPlane                                                                                                                                  |
| [`AddAcousticTemperature`](#Analysis.AddAcousticTemperature)                                                 | Creates a new child ThermalCondition.                                                                                                                                |
| [`AddAcousticThermoViscousBLIBoundary`](#Analysis.AddAcousticThermoViscousBLIBoundary)                       | Creates a new AcousticThermoViscousBLIBoundary                                                                                                                       |
| [`AddAcousticTransferAdmittanceMatrix`](#Analysis.AddAcousticTransferAdmittanceMatrix)                       | Creates a new AcousticTransferAdmittanceMatrix                                                                                                                       |
| [`AddAxialForce`](#Analysis.AddAxialForce)                                                                   | Creates a new AxialForce                                                                                                                                             |
| [`AddBearingLoad`](#Analysis.AddBearingLoad)                                                                 | Creates a new BearingLoad                                                                                                                                            |
| [`AddBodyControl`](#Analysis.AddBodyControl)                                                                 | Creates a new BodyControl                                                                                                                                            |
| [`AddBoltPretension`](#Analysis.AddBoltPretension)                                                           | Creates a new BoltPretension                                                                                                                                         |
| [`AddCenterOfGravityConstraint`](#Analysis.AddCenterOfGravityConstraint)                                     | Creates a new CenterOfGravityConstraint                                                                                                                              |
| [`AddCommandSnippet`](#Analysis.AddCommandSnippet)                                                           | Creates a new CommandSnippet                                                                                                                                         |
| [`AddComment`](#Analysis.AddComment)                                                                         | Creates a new child Comment.                                                                                                                                         |
| [`AddComplexityIndexConstraint`](#Analysis.AddComplexityIndexConstraint)                                     | Creates a new ComplexityIndexConstraint                                                                                                                              |
| [`AddComplianceConstraint`](#Analysis.AddComplianceConstraint)                                               | Creates a new ComplianceConstraint                                                                                                                                   |
| [`AddCompressionOnlySupport`](#Analysis.AddCompressionOnlySupport)                                           | Creates a new CompressionOnlySupport                                                                                                                                 |
| [`AddConstraintEquation`](#Analysis.AddConstraintEquation)                                                   | Creates a new ConstraintEquation                                                                                                                                     |
| [`AddContactStepControl`](#Analysis.AddContactStepControl)                                                   | Creates a new ContactStepControl                                                                                                                                     |
| [`AddConvection`](#Analysis.AddConvection)                                                                   |                                                                                                                                                                      |
| [`AddCoupling`](#Analysis.AddCoupling)                                                                       | Creates a new Coupling                                                                                                                                               |
| [`AddCriterionConstraint`](#Analysis.AddCriterionConstraint)                                                 | Creates a new CriterionConstraint                                                                                                                                    |
| [`AddCurrent`](#Analysis.AddCurrent)                                                                         | Creates a new Current                                                                                                                                                |
| [`AddCyclicManufacturingConstraint`](#Analysis.AddCyclicManufacturingConstraint)                             | Creates a new CyclicManufacturingConstraint                                                                                                                          |
| [`AddCylindricalSupport`](#Analysis.AddCylindricalSupport)                                                   | Creates a new CylindricalSupport                                                                                                                                     |
| [`AddDetonationPoint`](#Analysis.AddDetonationPoint)                                                         | Creates a new DetonationPoint                                                                                                                                        |
| [`AddDisplacement`](#Analysis.AddDisplacement)                                                               | Creates a new Displacement                                                                                                                                           |
| [`AddDisplacementConstraint`](#Analysis.AddDisplacementConstraint)                                           | Creates a new DisplacementConstraint                                                                                                                                 |
| [`AddDynamicComplianceConstraint`](#Analysis.AddDynamicComplianceConstraint)                                 | Creates a new DynamicComplianceConstraint                                                                                                                            |
| [`AddEMTransducer`](#Analysis.AddEMTransducer)                                                               | Creates a new EMTransducer                                                                                                                                           |
| [`AddEarthGravity`](#Analysis.AddEarthGravity)                                                               | Creates a new EarthGravity                                                                                                                                           |
| [`AddElasticSupport`](#Analysis.AddElasticSupport)                                                           | Creates a new ElasticSupport                                                                                                                                         |
| [`AddElectricCharge`](#Analysis.AddElectricCharge)                                                           | Creates a new ElectricCharge                                                                                                                                         |
| [`AddElementBirthAndDeath`](#Analysis.AddElementBirthAndDeath)                                               | Creates a new ElementBirthAndDeath                                                                                                                                   |
| [`AddExtrusionManufacturingConstraint`](#Analysis.AddExtrusionManufacturingConstraint)                       | Creates a new ExtrusionManufacturingConstraint                                                                                                                       |
| [`AddFigure`](#Analysis.AddFigure)                                                                           | Creates a new child Figure.                                                                                                                                          |
| [`AddFixedRotation`](#Analysis.AddFixedRotation)                                                             | Creates a new FixedRotation                                                                                                                                          |
| [`AddFixedSupport`](#Analysis.AddFixedSupport)                                                               | Creates a new FixedSupport                                                                                                                                           |
| [`AddFluidPenetrationPressure`](#Analysis.AddFluidPenetrationPressure)                                       | Creates a new Fluid Penetration Pressure object in Mechanical. This load object is used to simulate surrounding fluid or air penetrating into the contact interface. |
| [`AddFluidSolidInterface`](#Analysis.AddFluidSolidInterface)                                                 | Creates a new FluidSolidInterface                                                                                                                                    |
| [`AddForce`](#Analysis.AddForce)                                                                             | Creates a new Force                                                                                                                                                  |
| [`AddFrictionlessSupport`](#Analysis.AddFrictionlessSupport)                                                 | Creates a new FrictionlessSupport                                                                                                                                    |
| [`AddGeneralizedPlaneStrain`](#Analysis.AddGeneralizedPlaneStrain)                                           | Creates a new GeneralizedPlaneStrain                                                                                                                                 |
| [`AddGeometryBasedAdaptivity`](#Analysis.AddGeometryBasedAdaptivity)                                         | Creates a new GeometryBasedAdaptivity                                                                                                                                |
| [`AddGlobalVonMisesStressConstraint`](#Analysis.AddGlobalVonMisesStressConstraint)                           | Creates a new GlobalVonMisesStressConstraint                                                                                                                         |
| [`AddHeatFlow`](#Analysis.AddHeatFlow)                                                                       | Creates a new HeatFlow                                                                                                                                               |
| [`AddHeatFlux`](#Analysis.AddHeatFlux)                                                                       | Creates a new HeatFlux                                                                                                                                               |
| [`AddHousingConstraint`](#Analysis.AddHousingConstraint)                                                     | Creates a new HousingConstraint                                                                                                                                      |
| [`AddHydrostaticPressure`](#Analysis.AddHydrostaticPressure)                                                 | Creates a new HydrostaticPressure                                                                                                                                    |
| [`AddImage`](#Analysis.AddImage)                                                                             | Creates a new child Image.                                                                                                                                           |
| [`AddImpedanceBoundary`](#Analysis.AddImpedanceBoundary)                                                     | Creates a new ImpedanceBoundary                                                                                                                                      |
| [`AddImportedCFDPressure`](#Analysis.AddImportedCFDPressure)                                                 | Creates a new ImportedCFDPressure                                                                                                                                    |
| [`AddImportedLoadExternalData`](#Analysis.AddImportedLoadExternalData)                                       | Creates a new Imported Load (External Data).                                                                                                                         |
| [`AddImportedLoadFluidsResultsFile`](#Analysis.AddImportedLoadFluidsResultsFile)                             | Creates a new Import Load for Fluids Results File.                                                                                                                   |
| [`AddImportedLoadMAPDLResultsFile`](#Analysis.AddImportedLoadMAPDLResultsFile)                               | Creates a new Import Load for MAPDL Results File.                                                                                                                    |
| [`AddImportedLoadResultFile`](#Analysis.AddImportedLoadResultFile)                                           | Creates a new Import Load for MAPDL Results File.                                                                                                                    |
| [`AddImportedRemoteLoadsGroup`](#Analysis.AddImportedRemoteLoadsGroup)                                       | Creates a new Import Remote Load Group.                                                                                                                              |
| [`AddInitialVelocity`](#Analysis.AddInitialVelocity)                                                         | Creates a new child Initial Velocity.                                                                                                                                |
| [`AddInternalHeatGeneration`](#Analysis.AddInternalHeatGeneration)                                           | Creates a new InternalHeatGeneration                                                                                                                                 |
| [`AddJointLoad`](#Analysis.AddJointLoad)                                                                     | Creates a new JointLoad                                                                                                                                              |
| [`AddLimitBoundary`](#Analysis.AddLimitBoundary)                                                             | Creates a new LimitBoundary                                                                                                                                          |
| [`AddLinePressure`](#Analysis.AddLinePressure)                                                               | Creates a new LinePressure                                                                                                                                           |
| [`AddLoadApplication`](#Analysis.AddLoadApplication)                                                         |                                                                                                                                                                      |
| [`AddLocalVonMisesStressConstraint`](#Analysis.AddLocalVonMisesStressConstraint)                             | Creates a new LocalVonMisesStressConstraint                                                                                                                          |
| [`AddMagneticFluxParallel`](#Analysis.AddMagneticFluxParallel)                                               | Creates a new MagneticFluxParallel                                                                                                                                   |
| [`AddMassConstraint`](#Analysis.AddMassConstraint)                                                           | Creates a new MassConstraint                                                                                                                                         |
| [`AddMassFlowRate`](#Analysis.AddMassFlowRate)                                                               | Creates a new MassFlowRate                                                                                                                                           |
| [`AddMemberSizeManufacturingConstraint`](#Analysis.AddMemberSizeManufacturingConstraint)                     | Creates a new MemberSizeManufacturingConstraint                                                                                                                      |
| [`AddMillingConstraint`](#Analysis.AddMillingConstraint)                                                     | Add a Milling constraint to ensure the final shape is manufacturable through 4-axis milling.                                                                         |
| [`AddMoment`](#Analysis.AddMoment)                                                                           | Creates a new Moment                                                                                                                                                 |
| [`AddMomentOfInertiaConstraint`](#Analysis.AddMomentOfInertiaConstraint)                                     | Creates a new MomentOfInertiaConstraint                                                                                                                              |
| [`AddMorphingRegion`](#Analysis.AddMorphingRegion)                                                           | Creates a new MorphingRegion                                                                                                                                         |
| [`AddNaturalFrequencyConstraint`](#Analysis.AddNaturalFrequencyConstraint)                                   | Creates a new NaturalFrequencyConstraint                                                                                                                             |
| [`AddNodalDisplacement`](#Analysis.AddNodalDisplacement)                                                     | Creates a new NodalDisplacement                                                                                                                                      |
| [`AddNodalForce`](#Analysis.AddNodalForce)                                                                   | Creates a new NodalForce                                                                                                                                             |
| [`AddNodalOrientation`](#Analysis.AddNodalOrientation)                                                       | Creates a new NodalOrientation                                                                                                                                       |
| [`AddNodalPressure`](#Analysis.AddNodalPressure)                                                             | Creates a new NodalPressure                                                                                                                                          |
| [`AddNodalRotation`](#Analysis.AddNodalRotation)                                                             | Creates a new NodalRotation                                                                                                                                          |
| [`AddNonlinearAdaptiveRegion`](#Analysis.AddNonlinearAdaptiveRegion)                                         | Creates a new NonlinearAdaptiveRegion                                                                                                                                |
| [`AddObjective`](#Analysis.AddObjective)                                                                     | Creates a new Objective                                                                                                                                              |
| [`AddOptimizationRegion`](#Analysis.AddOptimizationRegion)                                                   | Creates a new OptimizationRegion                                                                                                                                     |
| [`AddPSDAcceleration`](#Analysis.AddPSDAcceleration)                                                         | Creates a new PSDAcceleration                                                                                                                                        |
| [`AddPSDDisplacement`](#Analysis.AddPSDDisplacement)                                                         | Creates a new PSDDisplacement                                                                                                                                        |
| [`AddPSDGAcceleration`](#Analysis.AddPSDGAcceleration)                                                       | Creates a new PSDGAcceleration                                                                                                                                       |
| [`AddPSDPressure`](#Analysis.AddPSDPressure)                                                                 |                                                                                                                                                                      |
| [`AddPSDVelocity`](#Analysis.AddPSDVelocity)                                                                 | Creates a new PSDVelocity                                                                                                                                            |
| [`AddPatternRepetitionConstraint`](#Analysis.AddPatternRepetitionConstraint)                                 | Creates a new PatternRepetitionConstraint                                                                                                                            |
| [`AddPerfectlyInsulated`](#Analysis.AddPerfectlyInsulated)                                                   | Creates a new PerfectlyInsulated                                                                                                                                     |
| [`AddPhysicsRegion`](#Analysis.AddPhysicsRegion)                                                             | Creates a new PhysicsRegion                                                                                                                                          |
| [`AddPipeIdealization`](#Analysis.AddPipeIdealization)                                                       | Creates a new child PipeIdealization.                                                                                                                                |
| [`AddPipePressure`](#Analysis.AddPipePressure)                                                               | Creates a new PipePressure                                                                                                                                           |
| [`AddPipeTemperature`](#Analysis.AddPipeTemperature)                                                         | Creates a new PipeTemperature                                                                                                                                        |
| [`AddPlasticHeating`](#Analysis.AddPlasticHeating)                                                           | Creates a new PlasticHeating                                                                                                                                         |
| [`AddPressure`](#Analysis.AddPressure)                                                                       | Creates a new child Pressure.                                                                                                                                        |
| [`AddPullOutDirectionManufacturingConstraint`](#Analysis.AddPullOutDirectionManufacturingConstraint)         | Creates a new PullOutDirectionManufacturingConstraint                                                                                                                |
| [`AddPythonCodeEventBased`](#Analysis.AddPythonCodeEventBased)                                               | Creates a new PythonCodeEventBased                                                                                                                                   |
| [`AddRSAcceleration`](#Analysis.AddRSAcceleration)                                                           | Creates a new RSAcceleration                                                                                                                                         |
| [`AddRSDisplacement`](#Analysis.AddRSDisplacement)                                                           | Creates a new RSDisplacement                                                                                                                                         |
| [`AddRSVelocity`](#Analysis.AddRSVelocity)                                                                   | Creates a new RSVelocity                                                                                                                                             |
| [`AddRadiation`](#Analysis.AddRadiation)                                                                     | Creates a new Radiation                                                                                                                                              |
| [`AddReactionForceConstraint`](#Analysis.AddReactionForceConstraint)                                         | Creates a new ReactionForceConstraint                                                                                                                                |
| [`AddRemoteDisplacement`](#Analysis.AddRemoteDisplacement)                                                   | Creates a new RemoteDisplacement                                                                                                                                     |
| [`AddRemoteForce`](#Analysis.AddRemoteForce)                                                                 | Creates a new RemoteForce                                                                                                                                            |
| [`AddRotatingForce`](#Analysis.AddRotatingForce)                                                             | Creates a new RotatingForce                                                                                                                                          |
| [`AddRotationalAcceleration`](#Analysis.AddRotationalAcceleration)                                           | Creates a new RotationalAcceleration                                                                                                                                 |
| [`AddRotationalVelocity`](#Analysis.AddRotationalVelocity)                                                   | Creates a new RotationalVelocity                                                                                                                                     |
| [`AddSimplySupported`](#Analysis.AddSimplySupported)                                                         | Creates a new SimplySupported                                                                                                                                        |
| [`AddSourceConductor`](#Analysis.AddSourceConductor)                                                         | Creates a new child SourceConductor.                                                                                                                                 |
| [`AddSubstructureGenerationCondensedPart`](#Analysis.AddSubstructureGenerationCondensedPart)                 | Creates a new SubstructureGenerationCondensedPart                                                                                                                    |
| [`AddSurfaceChargeDensity`](#Analysis.AddSurfaceChargeDensity)                                               | Creates a new SurfaceChargeDensity                                                                                                                                   |
| [`AddSymmetryManufacturingConstraint`](#Analysis.AddSymmetryManufacturingConstraint)                         | Creates a new SymmetryManufacturingConstraint                                                                                                                        |
| [`AddSystemCouplingRegion`](#Analysis.AddSystemCouplingRegion)                                               | Creates a new SystemCouplingRegion                                                                                                                                   |
| [`AddTemperature`](#Analysis.AddTemperature)                                                                 | Creates a new child Temperature.                                                                                                                                     |
| [`AddTemperatureConstraint`](#Analysis.AddTemperatureConstraint)                                             | Creates a new TemperatureConstraint                                                                                                                                  |
| [`AddThermalComplianceConstraint`](#Analysis.AddThermalComplianceConstraint)                                 | Creates a new ThermalComplianceConstraint                                                                                                                            |
| [`AddThermalCondition`](#Analysis.AddThermalCondition)                                                       |                                                                                                                                                                      |
| [`AddTorsionalMoment`](#Analysis.AddTorsionalMoment)                                                         | Creates a new TorsionalMoment                                                                                                                                        |
| [`AddUniformConstraint`](#Analysis.AddUniformConstraint)                                                     | Creates a new UniformConstraint                                                                                                                                      |
| [`AddVectorLoad`](#Analysis.AddVectorLoad)                                                                   | Creates a new VectorLoad                                                                                                                                             |
| [`AddVelocity`](#Analysis.AddVelocity)                                                                       | Creates a new Velocity                                                                                                                                               |
| [`AddViscoelasticHeating`](#Analysis.AddViscoelasticHeating)                                                 | Creates a new ViscoelasticHeating                                                                                                                                    |
| [`AddVoltage`](#Analysis.AddVoltage)                                                                         | Creates a new Voltage                                                                                                                                                |
| [`AddVoltageCoupling`](#Analysis.AddVoltageCoupling)                                                         | Creates a new Coupling                                                                                                                                               |
| [`AddVoltageGround`](#Analysis.AddVoltageGround)                                                             | Creates a new VoltageGround                                                                                                                                          |
| [`AddVolumeChargeDensity`](#Analysis.AddVolumeChargeDensity)                                                 | Creates a new VolumeChargeDensity                                                                                                                                    |
| [`AddVolumeConstraint`](#Analysis.AddVolumeConstraint)                                                       | Creates a new VolumeConstraint                                                                                                                                       |
| [`ClearGeneratedData`](#Analysis.ClearGeneratedData)                                                         | Run the ClearGeneratedData action.                                                                                                                                   |
| [`ComponentById`](#Analysis.ComponentById)                                                                   | ComponentById method.                                                                                                                                                |
| [`CoordinateSystemById`](#Analysis.CoordinateSystemById)                                                     | CoordinateSystemById method.                                                                                                                                         |
| [`Copy`](#Analysis.Copy)                                                                                     | Copies the current DataModelObject.                                                                                                                                  |
| [`CopyTo`](#Analysis.CopyTo)                                                                                 | Copies all visible properties from this object to another.                                                                                                           |
| [`CreateAutomaticFSI`](#Analysis.CreateAutomaticFSI)                                                         | Run the CreateAutomaticFSI action.                                                                                                                                   |
| [`CreateAutomaticFSIandFarFieldRadiationSurfaces`](#Analysis.CreateAutomaticFSIandFarFieldRadiationSurfaces) | Run the CreateAutomaticFSIandEquivalentSourceSurfaces action.                                                                                                        |
| [`CreateAutomaticFarFieldRadiationSurfaces`](#Analysis.CreateAutomaticFarFieldRadiationSurfaces)             | Run the CreateAutomaticEquivalentSourceSurfaces action.                                                                                                              |
| [`CreateLoadObject`](#Analysis.CreateLoadObject)                                                             | CreateLoadObject method.                                                                                                                                             |
| [`CreateObjRef`](#Analysis.CreateObjRef)                                                                     | CreateObjRef method.                                                                                                                                                 |
| [`CreateObjectCommand`](#Analysis.CreateObjectCommand)                                                       | CreateObjectCommand method.                                                                                                                                          |
| [`CreateParameter`](#Analysis.CreateParameter)                                                               | Creates a new parameter for a Property.                                                                                                                              |
| [`CreatePostObject`](#Analysis.CreatePostObject)                                                             | CreatePostObject method.                                                                                                                                             |
| [`CreateResultObject`](#Analysis.CreateResultObject)                                                         | CreateResultObject method.                                                                                                                                           |
| [`CurrentConsistentUnitFromQuantityName`](#Analysis.CurrentConsistentUnitFromQuantityName)                   | CurrentConsistentUnitFromQuantityName method.                                                                                                                        |
| [`Cut`](#Analysis.Cut)                                                                                       | Cuts the current DataModelObject.                                                                                                                                    |
| [`DataObjectById`](#Analysis.DataObjectById)                                                                 | DataObjectById method.                                                                                                                                               |
| [`DataObjectByName`](#Analysis.DataObjectByName)                                                             | DataObjectByName method.                                                                                                                                             |
| [`DataObjectNamesByType`](#Analysis.DataObjectNamesByType)                                                   | DataObjectNamesByType method.                                                                                                                                        |
| [`Delete`](#Analysis.Delete)                                                                                 | Run the Delete action.                                                                                                                                               |
| [`Duplicate`](#Analysis.Duplicate)                                                                           | Duplicate method.                                                                                                                                                    |
| [`Equals`](#Analysis.Equals)                                                                                 | Equals method.                                                                                                                                                       |
| [`ExportNastranFile`](#Analysis.ExportNastranFile)                                                           | Export Nastran File.                                                                                                                                                 |
| [`FilterBasedOnEnvironment`](#Analysis.FilterBasedOnEnvironment)                                             | Enables interface filtering that only displays model-level items applicable to                                                                                       |
| [`GenerateCDBFile`](#Analysis.GenerateCDBFile)                                                               | GenerateCDBFile method.                                                                                                                                              |
| [`GenerateMesh`](#Analysis.GenerateMesh)                                                                     | GenerateMesh method.                                                                                                                                                 |
| [`GetAPIName`](#Analysis.GetAPIName)                                                                         | Property name bound to dispId.                                                                                                                                       |
| [`GetAllProperties`](#Analysis.GetAllProperties)                                                             | GetAllProperties method.                                                                                                                                             |
| [`GetChildren`](#Analysis.GetChildren)                                                                       | Gets the list of children, filtered by type.                                                                                                                         |
| [`GetDetailsView`](#Analysis.GetDetailsView)                                                                 | GetDetailsView method.                                                                                                                                               |
| [`GetEnumName`](#Analysis.GetEnumName)                                                                       | Enum name bound to value                                                                                                                                             |
| [`GetHashCode`](#Analysis.GetHashCode)                                                                       | GetHashCode method.                                                                                                                                                  |
| [`GetIconFile`](#Analysis.GetIconFile)                                                                       | GetIconFile method.                                                                                                                                                  |
| [`GetLifetimeService`](#Analysis.GetLifetimeService)                                                         | GetLifetimeService method.                                                                                                                                           |
| [`GetLoadObjects`](#Analysis.GetLoadObjects)                                                                 | GetLoadObjects method.                                                                                                                                               |
| [`GetObjectData`](#Analysis.GetObjectData)                                                                   | GetObjectData method.                                                                                                                                                |
| [`GetParameter`](#Analysis.GetParameter)                                                                     | Gets the parameter corresponding to the given property.                                                                                                              |
| [`GetPath`](#Analysis.GetPath)                                                                               | GetPath method.                                                                                                                                                      |
| [`GetPropertyName`](#Analysis.GetPropertyName)                                                               | GetPropertyName method.                                                                                                                                              |
| [`GetPropertyValue`](#Analysis.GetPropertyValue)                                                             | GetPropertyValue method.                                                                                                                                             |
| [`GetResultObjects`](#Analysis.GetResultObjects)                                                             | GetResultObjects method.                                                                                                                                             |
| [`GetResultsData`](#Analysis.GetResultsData)                                                                 | GetResultsData method.                                                                                                                                               |
| [`GetUserObjects`](#Analysis.GetUserObjects)                                                                 | GetUserObjects method.                                                                                                                                               |
| [`GetVisibleProperties`](#Analysis.GetVisibleProperties)                                                     | GetVisibleProperties method.                                                                                                                                         |
| [`GetVisiblePropertyNames`](#Analysis.GetVisiblePropertyNames)                                               | GetVisiblePropertyNames method.                                                                                                                                      |
| [`GroupAllSimilarChildren`](#Analysis.GroupAllSimilarChildren)                                               | Run the GroupAllSimilarChildren action.                                                                                                                              |
| [`GroupSimilarObjects`](#Analysis.GroupSimilarObjects)                                                       | Run the GroupSimilarObjects action.                                                                                                                                  |
| [`ImportLoad`](#Analysis.ImportLoad)                                                                         | Import Load action.                                                                                                                                                  |
| [`InitializeLifetimeService`](#Analysis.InitializeLifetimeService)                                           | InitializeLifetimeService method.                                                                                                                                    |
| [`IsPropertyEditable`](#Analysis.IsPropertyEditable)                                                         | IsPropertyEditable method.                                                                                                                                           |
| [`IsPropertyVisible`](#Analysis.IsPropertyVisible)                                                           | IsPropertyVisible method.                                                                                                                                            |
| [`OpenSolverFilesDirectory`](#Analysis.OpenSolverFilesDirectory)                                             | Run the OpenSolverFilesDirectory action.                                                                                                                             |
| [`Paste`](#Analysis.Paste)                                                                                   | Pastes to the current DataModelObject context.                                                                                                                       |
| [`PropertyByAPIName`](#Analysis.PropertyByAPIName)                                                           | Get a property by its API name.                                                                                                                                      |
| [`PropertyById`](#Analysis.PropertyById)                                                                     | PropertyById method.                                                                                                                                                 |
| [`PropertyByName`](#Analysis.PropertyByName)                                                                 | Get a property by its unique name.                                                                                                                                   |
| [`PropertyValue`](#Analysis.PropertyValue)                                                                   | PropertyValue method.                                                                                                                                                |
| [`RemoveFromGroup`](#Analysis.RemoveFromGroup)                                                               | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.                                                                          |
| [`RemoveParameter`](#Analysis.RemoveParameter)                                                               | Removes the parameter from the parameter set corresponding to the given property.                                                                                    |
| [`SelectBodiesWithMultiplePhysicsRegion`](#Analysis.SelectBodiesWithMultiplePhysicsRegion)                   | Run the SelectBodiesWithMultiplePhysicsRegion action to select the bodies that belong to more than one Physics Region.                                               |
| [`SelectBodiesWithoutPhysicsRegion`](#Analysis.SelectBodiesWithoutPhysicsRegion)                             | Run the SelectBodiesWithoutPhysicsRegion action to select the bodies that don't belong to a Physics Region.                                                          |
| [`Solve`](#Analysis.Solve)                                                                                   | Run the Solve action.                                                                                                                                                |
| [`TransferDataFrom`](#Analysis.TransferDataFrom)                                                             | Transfer Data From action.                                                                                                                                           |
| [`UnlinkDataFrom`](#Analysis.UnlinkDataFrom)                                                                 | Unlink Data From action.                                                                                                                                             |
| [`WriteInputFile`](#Analysis.WriteInputFile)                                                                 | WriteInputFile method.                                                                                                                                               |
| [`WriteSystemCouplingFiles`](#Analysis.WriteSystemCouplingFiles)                                             | Writes the system coupling files. Usage WriteSystemCouplingFiles(“C:Desktoptempscp1.scp”);                                                                           |

### Properties

| Name | Description |
|--------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [`AMProcessSimulation`](#Analysis.AMProcessSimulation)                                                             | Gets or sets the AMProcessSimulation.                          |
| [`Acoustics`](#Analysis.Acoustics)                                                                                 | Gets or sets the Acoustics.                                    |
| [`AnalysisSettings`](AnalysisSettings/AnalysisSettings.md#AnalysisSettings)                                        | Gets the AnalysisSettings.                                     |
| [`AnalysisType`](#Analysis.AnalysisType)                                                                           | Gets the AnalysisType.                                         |
| [`AttachedRefs`](#Analysis.AttachedRefs)                                                                           | AttachedRefs property.                                         |
| [`CellId`](#Analysis.CellId)                                                                                       | Gets the CellId.                                               |
| [`Children`](#Analysis.Children)                                                                                   | Gets the list of children.                                     |
| [`ClsId`](#Analysis.ClsId)                                                                                         | ClsId property.                                                |
| [`Comments`](#Analysis.Comments)                                                                                   | Gets the list of associated comments.                          |
| [`Components`](#Analysis.Components)                                                                               | Components property.                                           |
| [`CoordinateSystems`](CoordinateSystems.md#CoordinateSystems)                                                      | CoordinateSystems property.                                    |
| [`DataModelObjectCategory`](#Analysis.DataModelObjectCategory)                                                     | Gets the current DataModelObject's category.                   |
| [`DataObjectIds`](#Analysis.DataObjectIds)                                                                         | DataObjectIds property.                                        |
| [`DataObjectNames`](#Analysis.DataObjectNames)                                                                     | DataObjectNames property.                                      |
| [`DataObjects`](#Analysis.DataObjects)                                                                             | DataObjects property.                                          |
| [`Electric`](#Analysis.Electric)                                                                                   | Gets the Electric.                                             |
| [`EnvironmentTemperature`](#Analysis.EnvironmentTemperature)                                                       | Gets or sets the EnvironmentTemperature.                       |
| [`Figures`](#Analysis.Figures)                                                                                     | Gets the list of associated figures.                           |
| [`GenerateInputOnly`](#Analysis.GenerateInputOnly)                                                                 | Gets the GenerateInputOnly.                                    |
| [`GeoData`](#Analysis.GeoData)                                                                                     | GeoData property.                                              |
| [`GroupingFolder`](#Analysis.GroupingFolder)                                                                       | GroupingFolder property.                                       |
| [`IAnalysisSettings`](#Analysis.IAnalysisSettings)                                                                 | Gets the IAnalysisSettings.                                    |
| [`IconName`](#Analysis.IconName)                                                                                   | IconName property.                                             |
| [`Id`](#Analysis.Id)                                                                                               | Id property.                                                   |
| [`Images`](#Analysis.Images)                                                                                       | Gets the list of associated images.                            |
| [`ImportableObjectSourceId`](#Analysis.ImportableObjectSourceId)                                                   | ImportableObjectSourceId property.                             |
| [`InitialConditions`](InitialConditions.md#InitialConditions)                                                      | Get InitialConditions.                                         |
| [`InternalDataObjects`](#Analysis.InternalDataObjects)                                                             | InternalDataObjects property.                                  |
| [`InternalObject`](#Analysis.InternalObject)                                                                       | Gets the internal object. For advanced usage only.             |
| [`LinkedEnvironments`](#Analysis.LinkedEnvironments)                                                               | LinkedEnvironments property.                                   |
| [`LocalizedAnalysisType`](#Analysis.LocalizedAnalysisType)                                                         | LocalizedAnalysisType property.                                |
| [`MeshData`](#Analysis.MeshData)                                                                                   | MeshData property.                                             |
| [`Name`](#Analysis.Name)                                                                                           | Name property.                                                 |
| [`ObjectId`](#Analysis.ObjectId)                                                                                   | ObjectId property.                                             |
| [`ObjectIdentifier`](#Analysis.ObjectIdentifier)                                                                   | ObjectIdentifier property.                                     |
| [`ObjectLocation`](#Analysis.ObjectLocation)                                                                       | ObjectLocation property.                                       |
| [`ObjectState`](#Analysis.ObjectState)                                                                             | ObjectState property.                                          |
| [`ObjectTags`](#Analysis.ObjectTags)                                                                               | ObjectTags property.                                           |
| [`Parent`](#Analysis.Parent)                                                                                       | Parent property.                                               |
| [`PhysicsType`](#Analysis.PhysicsType)                                                                             | Gets the PhysicsType.                                          |
| [`PredictResourceAfterInputFileGeneration`](#Analysis.PredictResourceAfterInputFileGeneration)                     | PredictResourceAfterInputFileGeneration property.              |
| [`Properties`](#Analysis.Properties)                                                                               | Gets the list of properties for this object.                   |
| [`PropertyNames`](#Analysis.PropertyNames)                                                                         | PropertyNames property.                                        |
| [`ReadOnly`](#Analysis.ReadOnly)                                                                                   | Gets or sets the ReadOnly.                                     |
| [`ResultFileName`](#Analysis.ResultFileName)                                                                       | Get the full path and name of the result file.                 |
| [`Solution`](Solution.md#Solution)                                                                                 | Gets the Solution.                                             |
| [`SolveConfiguration`](#SolveConfiguration) | Gets the configuration that this analysis will be solved with. |
| [`Solver`](#Analysis.Solver)                                                                                       | Solver property.                                               |
| [`SolverFilesDirectory`](#Analysis.SolverFilesDirectory)                                                           | SolverFilesDirectory property.                                 |
| [`SolverName`](#Analysis.SolverName)                                                                               | SolverName property.                                           |
| [`State`](#Analysis.State)                                                                                         | State property.                                                |
| [`StepCount`](#Analysis.StepCount)                                                                                 | StepCount property.                                            |
| [`StepsEndTime`](#Analysis.StepsEndTime)                                                                           | StepsEndTime property.                                         |
| [`Structural`](#Analysis.Structural)                                                                               | Gets or sets the Structural.                                   |
| [`SupportedLocations`](#Analysis.SupportedLocations)                                                               | SupportedLocations property.                                   |
| [`SystemCaption`](#Analysis.SystemCaption)                                                                         | Gets the SystemCaption.                                        |
| [`SystemID`](#Analysis.SystemID)                                                                                   | SystemID property.                                             |
| [`Thermal`](#Analysis.Thermal)                                                                                     | Gets the Thermal.                                              |
| [`TransferableObjectId`](#Analysis.TransferableObjectId)                                                           | TransferableObjectId property.                                 |
| [`VisibleProperties`](#Analysis.VisibleProperties)                                                                 | Gets the list of properties that are visible for this object.  |
| [`WorkingDir`](#Analysis.WorkingDir)                                                                               | WorkingDir property.                                           |

<a id="property-detail"></a>

## Property detail

<a id="Analysis.AMProcessSimulation"></a>

### *property* Analysis.AMProcessSimulation *: [Ansys.Mechanical.DataModel.Enums.AMProcessSimulationType](../../../Mechanical/DataModel/Enums/AMProcessSimulationType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AMProcessSimulationType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AMProcessSimulation.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Acoustics"></a>

### *property* Analysis.Acoustics *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Acoustics.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AnalysisSettings"></a>

### *property* Analysis.AnalysisSettings *: [Ansys.ACT.Automation.Mechanical.AnalysisSettings.AnalysisSettings](AnalysisSettings/AnalysisSettings.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AnalysisSettings.AnalysisSettings) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the AnalysisSettings.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AnalysisType"></a>

### *property* Analysis.AnalysisType *: [Ansys.Mechanical.DataModel.Enums.AnalysisType](../../../Mechanical/DataModel/Enums/AnalysisType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AnalysisType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the AnalysisType.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AttachedRefs"></a>

### *property* Analysis.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.CellId"></a>

### *property* Analysis.CellId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CellId.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Children"></a>

### *property* Analysis.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.ClsId"></a>

### *property* Analysis.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Comments"></a>

### *property* Analysis.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Components"></a>

### *property* Analysis.Components *: List[[Ansys.ACT.Interfaces.Mechanical.IMechanicalSelectionInfo](../../Interfaces/Mechanical/IMechanicalSelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Mechanical.IMechanicalSelectionInfo)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Components property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.CoordinateSystems"></a>

### *property* Analysis.CoordinateSystems *: List[Ansys.ACT.Interfaces.Analysis.ICoordinateSystem] | [None](https://docs.python.org/3/builtins/constants.html#None)*

CoordinateSystems property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.DataModelObjectCategory"></a>

### *property* Analysis.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.DataObjectIds"></a>

### *property* Analysis.DataObjectIds *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

DataObjectIds property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.DataObjectNames"></a>

### *property* Analysis.DataObjectNames *: List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

DataObjectNames property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.DataObjects"></a>

### *property* Analysis.DataObjects *: Ansys.ACT.Interfaces.Analysis.IDataObjectCollection | [None](https://docs.python.org/3/builtins/constants.html#None)*

DataObjects property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Electric"></a>

### *property* Analysis.Electric *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Electric.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.EnvironmentTemperature"></a>

### *property* Analysis.EnvironmentTemperature *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EnvironmentTemperature.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Figures"></a>

### *property* Analysis.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GenerateInputOnly"></a>

### *property* Analysis.GenerateInputOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the GenerateInputOnly.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GeoData"></a>

### *property* Analysis.GeoData *: Ansys.ACT.Interfaces.Geometry.IGeoData | [None](https://docs.python.org/3/builtins/constants.html#None)*

GeoData property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GroupingFolder"></a>

### *property* Analysis.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.IAnalysisSettings"></a>

### *property* Analysis.IAnalysisSettings *: Ansys.Mechanical.DataModel.Interfaces.IAnalysisSettings | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the IAnalysisSettings.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.IconName"></a>

### *property* Analysis.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Id"></a>

### *property* Analysis.Id *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Id property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Images"></a>

### *property* Analysis.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.ImportableObjectSourceId"></a>

### *property* Analysis.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.InitialConditions"></a>

### *property* Analysis.InitialConditions *: List[[Ansys.ACT.Automation.Mechanical.InitialCondition](InitialCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.InitialCondition)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get InitialConditions.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.InternalDataObjects"></a>

### *property* Analysis.InternalDataObjects *: List[Any] | [None](https://docs.python.org/3/builtins/constants.html#None)*

InternalDataObjects property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.InternalObject"></a>

### *property* Analysis.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEnvironmentAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.LinkedEnvironments"></a>

### *property* Analysis.LinkedEnvironments *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

LinkedEnvironments property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.LocalizedAnalysisType"></a>

### *property* Analysis.LocalizedAnalysisType *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

LocalizedAnalysisType property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.MeshData"></a>

### *property* Analysis.MeshData *: Ansys.ACT.Interfaces.Mesh.IMeshData | [None](https://docs.python.org/3/builtins/constants.html#None)*

MeshData property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Name"></a>

### *property* Analysis.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.ObjectId"></a>

### *property* Analysis.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.ObjectIdentifier"></a>

### *property* Analysis.ObjectIdentifier *: Ansys.ACT.Core.Application.Model.ObjectIdentifier | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectIdentifier property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.ObjectLocation"></a>

### *property* Analysis.ObjectLocation *: Ansys.ACT.Interfaces.UserObject.ObjectLocationEnum | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectLocation property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.ObjectState"></a>

### *property* Analysis.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.ObjectTags"></a>

### *property* Analysis.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Parent"></a>

### *property* Analysis.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.PhysicsType"></a>

### *property* Analysis.PhysicsType *: [Ansys.Mechanical.DataModel.Enums.PhysicsType](../../../Mechanical/DataModel/Enums/PhysicsType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.PhysicsType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the PhysicsType.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.PredictResourceAfterInputFileGeneration"></a>

### *property* Analysis.PredictResourceAfterInputFileGeneration *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

PredictResourceAfterInputFileGeneration property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Properties"></a>

### *property* Analysis.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.PropertyNames"></a>

### *property* Analysis.PropertyNames *: List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

PropertyNames property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.ReadOnly"></a>

### *property* Analysis.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.ResultFileName"></a>

### *property* Analysis.ResultFileName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Get the full path and name of the result file.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Solution"></a>

### *property* Analysis.Solution *: [Ansys.ACT.Automation.Mechanical.Solution](Solution.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Solution) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Solution.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.SolveConfiguration"></a>

### *property* Analysis.SolveConfiguration *: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.ISolveConfiguration](../../Mechanical/Application/SolveProcessSettings/ISolveConfiguration.md#ansys.mechanical.stubs.v271.Ansys.ACT.Mechanical.Application.SolveProcessSettings.ISolveConfiguration) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the configuration that this analysis will be solved with.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Solver"></a>

### *property* Analysis.Solver *: Ansys.ACT.Interfaces.UserObject.IUserSolver | [None](https://docs.python.org/3/builtins/constants.html#None)*

Solver property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.SolverFilesDirectory"></a>

### *property* Analysis.SolverFilesDirectory *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SolverFilesDirectory property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.SolverName"></a>

### *property* Analysis.SolverName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SolverName property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.State"></a>

### *property* Analysis.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.StepCount"></a>

### *property* Analysis.StepCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

StepCount property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.StepsEndTime"></a>

### *property* Analysis.StepsEndTime *: List[[float](https://docs.python.org/3/builtins/functions.html#float)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

StepsEndTime property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Structural"></a>

### *property* Analysis.Structural *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Structural.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.SupportedLocations"></a>

### *property* Analysis.SupportedLocations *: Ansys.ACT.Interfaces.UserObject.ObjectLocationEnum | [None](https://docs.python.org/3/builtins/constants.html#None)*

SupportedLocations property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.SystemCaption"></a>

### *property* Analysis.SystemCaption *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the SystemCaption.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.SystemID"></a>

### *property* Analysis.SystemID *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SystemID property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Thermal"></a>

### *property* Analysis.Thermal *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Thermal.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.TransferableObjectId"></a>

### *property* Analysis.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.VisibleProperties"></a>

### *property* Analysis.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.WorkingDir"></a>

### *property* Analysis.WorkingDir *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

WorkingDir property.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Analysis.Activate"></a>

### Analysis.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAMOverhangConstraint"></a>

### Analysis.AddAMOverhangConstraint() → [Ansys.ACT.Automation.Mechanical.AMOverhangConstraint](AMOverhangConstraint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.AMOverhangConstraint)

Creates a new AMOverhangConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcceleration"></a>

### Analysis.AddAcceleration() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.Acceleration](BoundaryConditions/Acceleration.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Acceleration)

Creates a new Acceleration

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticAbsorptionElement"></a>

### Analysis.AddAcousticAbsorptionElement() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticAbsorptionElement](BoundaryConditions/AcousticAbsorptionElement.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticAbsorptionElement)

Creates a new AcousticAbsorptionElement

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticAbsorptionSurface"></a>

### Analysis.AddAcousticAbsorptionSurface() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticAbsorptionSurface](BoundaryConditions/AcousticAbsorptionSurface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticAbsorptionSurface)

Creates a new AcousticAbsorptionSurface

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticDiffuseSoundField"></a>

### Analysis.AddAcousticDiffuseSoundField() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticDiffuseSoundField](BoundaryConditions/AcousticDiffuseSoundField.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticDiffuseSoundField)

Creates a new AcousticDiffuseSoundField

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticFarFieldRadationSurface"></a>

### Analysis.AddAcousticFarFieldRadationSurface() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticFarFieldRadationSurface](BoundaryConditions/AcousticFarFieldRadationSurface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticFarFieldRadationSurface)

Creates a new AcousticFarFieldRadationSurface

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticFreeSurface"></a>

### Analysis.AddAcousticFreeSurface() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticFreeSurface](BoundaryConditions/AcousticFreeSurface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticFreeSurface)

Creates a new AcousticFreeSurface

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticImpedanceBoundary"></a>

### Analysis.AddAcousticImpedanceBoundary() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticImpedanceBoundary](BoundaryConditions/AcousticImpedanceBoundary.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticImpedanceBoundary)

Creates a new AcousticImpedanceBoundary

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticImpedanceSheet"></a>

### Analysis.AddAcousticImpedanceSheet() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticImpedanceSheet](BoundaryConditions/AcousticImpedanceSheet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticImpedanceSheet)

Creates a new AcousticImpedanceSheet

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticIncidentWaveSource"></a>

### Analysis.AddAcousticIncidentWaveSource() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticIncidentWaveSource](BoundaryConditions/AcousticIncidentWaveSource.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticIncidentWaveSource)

Creates a new AcousticIncidentWaveSource

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticLowReducedFrequency"></a>

### Analysis.AddAcousticLowReducedFrequency() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticLowReducedFrequency](BoundaryConditions/AcousticLowReducedFrequency.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticLowReducedFrequency)

Creates a new AcousticLowReducedFrequency

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticMassSource"></a>

### Analysis.AddAcousticMassSource() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticMassSource](BoundaryConditions/AcousticMassSource.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticMassSource)

Creates a new AcousticMassSource

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticMassSourceRate"></a>

### Analysis.AddAcousticMassSourceRate() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticMassSourceRate](BoundaryConditions/AcousticMassSourceRate.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticMassSourceRate)

Creates a new AcousticMassSourceRate

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticPort"></a>

### Analysis.AddAcousticPort() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort](BoundaryConditions/AcousticPort.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort)

Creates a new AcousticPort

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticPortInDuct"></a>

### Analysis.AddAcousticPortInDuct() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPortInDuct](BoundaryConditions/AcousticPortInDuct.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPortInDuct)

Creates a new AcousticPortInDuct

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticPressure"></a>

### Analysis.AddAcousticPressure() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPressure](BoundaryConditions/AcousticPressure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPressure)

Creates a new AcousticPressure

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticRadiationBoundary"></a>

### Analysis.AddAcousticRadiationBoundary() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticRadiationBoundary](BoundaryConditions/AcousticRadiationBoundary.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticRadiationBoundary)

Creates a new AcousticRadiationBoundary

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticRigidWall"></a>

### Analysis.AddAcousticRigidWall() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticRigidWall](BoundaryConditions/AcousticRigidWall.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticRigidWall)

Creates a new AcousticRigidWall

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticStaticPressure"></a>

### Analysis.AddAcousticStaticPressure() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticStaticPressure](BoundaryConditions/AcousticStaticPressure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticStaticPressure)

Creates a new AcousticStaticPressure

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticSurfaceAcceleration"></a>

### Analysis.AddAcousticSurfaceAcceleration() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticSurfaceAcceleration](BoundaryConditions/AcousticSurfaceAcceleration.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticSurfaceAcceleration)

Creates a new AcousticSurfaceAcceleration

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticSurfaceVelocity"></a>

### Analysis.AddAcousticSurfaceVelocity() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticSurfaceVelocity](BoundaryConditions/AcousticSurfaceVelocity.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticSurfaceVelocity)

Creates a new AcousticSurfaceVelocity

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticSymmetryPlane"></a>

### Analysis.AddAcousticSymmetryPlane() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticSymmetryPlane](BoundaryConditions/AcousticSymmetryPlane.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticSymmetryPlane)

Creates a new AcousticSymmetryPlane

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticTemperature"></a>

### Analysis.AddAcousticTemperature() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticTemperature](BoundaryConditions/AcousticTemperature.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticTemperature)

Creates a new child ThermalCondition.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticThermoViscousBLIBoundary"></a>

### Analysis.AddAcousticThermoViscousBLIBoundary() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticThermoViscousBLIBoundary](BoundaryConditions/AcousticThermoViscousBLIBoundary.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticThermoViscousBLIBoundary)

Creates a new AcousticThermoViscousBLIBoundary

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAcousticTransferAdmittanceMatrix"></a>

### Analysis.AddAcousticTransferAdmittanceMatrix() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticTransferAdmittanceMatrix](BoundaryConditions/AcousticTransferAdmittanceMatrix.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticTransferAdmittanceMatrix)

Creates a new AcousticTransferAdmittanceMatrix

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddAxialForce"></a>

### Analysis.AddAxialForce() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.AxialForce](BoundaryConditions/AxialForce.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AxialForce)

Creates a new AxialForce

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddBearingLoad"></a>

### Analysis.AddBearingLoad() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.BearingLoad](BoundaryConditions/BearingLoad.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.BearingLoad)

Creates a new BearingLoad

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddBodyControl"></a>

### Analysis.AddBodyControl() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.BodyControl](BoundaryConditions/BodyControl.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.BodyControl)

Creates a new BodyControl

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddBoltPretension"></a>

### Analysis.AddBoltPretension() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.BoltPretension](BoundaryConditions/BoltPretension.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.BoltPretension)

Creates a new BoltPretension

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddCenterOfGravityConstraint"></a>

### Analysis.AddCenterOfGravityConstraint() → [Ansys.ACT.Automation.Mechanical.CenterOfGravityConstraint](CenterOfGravityConstraint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CenterOfGravityConstraint)

Creates a new CenterOfGravityConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddCommandSnippet"></a>

### Analysis.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddComment"></a>

### Analysis.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddComplexityIndexConstraint"></a>

### Analysis.AddComplexityIndexConstraint() → [Ansys.ACT.Automation.Mechanical.ComplexityIndexConstraint](ComplexityIndexConstraint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ComplexityIndexConstraint)

Creates a new ComplexityIndexConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddComplianceConstraint"></a>

### Analysis.AddComplianceConstraint() → [Ansys.ACT.Automation.Mechanical.ComplianceConstraint](ComplianceConstraint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ComplianceConstraint)

Creates a new ComplianceConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddCompressionOnlySupport"></a>

### Analysis.AddCompressionOnlySupport() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.CompressionOnlySupport](BoundaryConditions/CompressionOnlySupport.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.CompressionOnlySupport)

Creates a new CompressionOnlySupport

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddConstraintEquation"></a>

### Analysis.AddConstraintEquation() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.ConstraintEquation](BoundaryConditions/ConstraintEquation.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ConstraintEquation)

Creates a new ConstraintEquation

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddContactStepControl"></a>

### Analysis.AddContactStepControl() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.ContactStepControl](BoundaryConditions/ContactStepControl.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ContactStepControl)

Creates a new ContactStepControl

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddConvection"></a>

### Analysis.AddConvection(representation: [Ansys.Mechanical.DataModel.MechanicalEnums.BoundaryConditions.DataRepresentation](../../../Mechanical/DataModel/MechanicalEnums/BoundaryConditions/DataRepresentation.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.BoundaryConditions.DataRepresentation)) → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.Convection](BoundaryConditions/Convection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Convection)

Creates a new Convection

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddCoupling"></a>

### Analysis.AddCoupling() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.Coupling](BoundaryConditions/Coupling.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Coupling)

Creates a new Coupling

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddCriterionConstraint"></a>

### Analysis.AddCriterionConstraint() → [Ansys.ACT.Automation.Mechanical.CriterionConstraint](CriterionConstraint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CriterionConstraint)

Creates a new CriterionConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddCurrent"></a>

### Analysis.AddCurrent() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.Current](BoundaryConditions/Current.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Current)

Creates a new Current

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddCyclicManufacturingConstraint"></a>

### Analysis.AddCyclicManufacturingConstraint() → [Ansys.ACT.Automation.Mechanical.CyclicManufacturingConstraint](CyclicManufacturingConstraint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CyclicManufacturingConstraint)

Creates a new CyclicManufacturingConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddCylindricalSupport"></a>

### Analysis.AddCylindricalSupport() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.CylindricalSupport](BoundaryConditions/CylindricalSupport.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.CylindricalSupport)

Creates a new CylindricalSupport

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddDetonationPoint"></a>

### Analysis.AddDetonationPoint() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.DetonationPoint](BoundaryConditions/DetonationPoint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.DetonationPoint)

Creates a new DetonationPoint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddDisplacement"></a>

### Analysis.AddDisplacement() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.Displacement](BoundaryConditions/Displacement.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Displacement)

Creates a new Displacement

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddDisplacementConstraint"></a>

### Analysis.AddDisplacementConstraint() → [Ansys.ACT.Automation.Mechanical.DisplacementConstraint](DisplacementConstraint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.DisplacementConstraint)

Creates a new DisplacementConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddDynamicComplianceConstraint"></a>

### Analysis.AddDynamicComplianceConstraint() → [Ansys.ACT.Automation.Mechanical.DynamicComplianceConstraint](DynamicComplianceConstraint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.DynamicComplianceConstraint)

Creates a new DynamicComplianceConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddEMTransducer"></a>

### Analysis.AddEMTransducer() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.EMTransducer](BoundaryConditions/EMTransducer.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.EMTransducer)

Creates a new EMTransducer

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddEarthGravity"></a>

### Analysis.AddEarthGravity() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.EarthGravity](BoundaryConditions/EarthGravity.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.EarthGravity)

Creates a new EarthGravity

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddElasticSupport"></a>

### Analysis.AddElasticSupport() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.ElasticSupport](BoundaryConditions/ElasticSupport.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ElasticSupport)

Creates a new ElasticSupport

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddElectricCharge"></a>

### Analysis.AddElectricCharge() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.ElectricCharge](BoundaryConditions/ElectricCharge.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ElectricCharge)

Creates a new ElectricCharge

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddElementBirthAndDeath"></a>

### Analysis.AddElementBirthAndDeath() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.ElementBirthAndDeath](BoundaryConditions/ElementBirthAndDeath.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ElementBirthAndDeath)

Creates a new ElementBirthAndDeath

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddExtrusionManufacturingConstraint"></a>

### Analysis.AddExtrusionManufacturingConstraint() → [Ansys.ACT.Automation.Mechanical.ExtrusionManufacturingConstraint](ExtrusionManufacturingConstraint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ExtrusionManufacturingConstraint)

Creates a new ExtrusionManufacturingConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddFigure"></a>

### Analysis.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddFixedRotation"></a>

### Analysis.AddFixedRotation() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.FixedRotation](BoundaryConditions/FixedRotation.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.FixedRotation)

Creates a new FixedRotation

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddFixedSupport"></a>

### Analysis.AddFixedSupport() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.FixedSupport](BoundaryConditions/FixedSupport.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.FixedSupport)

Creates a new FixedSupport

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddFluidPenetrationPressure"></a>

### Analysis.AddFluidPenetrationPressure() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.FluidPenetrationPressure](BoundaryConditions/FluidPenetrationPressure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.FluidPenetrationPressure)

```text
Creates a new Fluid Penetration Pressure object in Mechanical. This load object is used to simulate surrounding fluid or air penetrating into the contact interface.
    Users can apply this load to flexible-to-flexible or rigid-to-flexible contact pairs. This load object is available for static structural analysis.
```

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddFluidSolidInterface"></a>

### Analysis.AddFluidSolidInterface() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.FluidSolidInterface](BoundaryConditions/FluidSolidInterface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.FluidSolidInterface)

Creates a new FluidSolidInterface

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddForce"></a>

### Analysis.AddForce() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.Force](BoundaryConditions/Force.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Force)

Creates a new Force

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddFrictionlessSupport"></a>

### Analysis.AddFrictionlessSupport() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.FrictionlessSupport](BoundaryConditions/FrictionlessSupport.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.FrictionlessSupport)

Creates a new FrictionlessSupport

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddGeneralizedPlaneStrain"></a>

### Analysis.AddGeneralizedPlaneStrain() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GeneralizedPlaneStrain](BoundaryConditions/GeneralizedPlaneStrain.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GeneralizedPlaneStrain)

Creates a new GeneralizedPlaneStrain

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddGeometryBasedAdaptivity"></a>

### Analysis.AddGeometryBasedAdaptivity() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.GeometryBasedAdaptivity](BoundaryConditions/GeometryBasedAdaptivity.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.GeometryBasedAdaptivity)

Creates a new GeometryBasedAdaptivity

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddGlobalVonMisesStressConstraint"></a>

### Analysis.AddGlobalVonMisesStressConstraint() → [Ansys.ACT.Automation.Mechanical.GlobalVonMisesStressConstraint](GlobalVonMisesStressConstraint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.GlobalVonMisesStressConstraint)

Creates a new GlobalVonMisesStressConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddHeatFlow"></a>

### Analysis.AddHeatFlow() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.HeatFlow](BoundaryConditions/HeatFlow.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.HeatFlow)

Creates a new HeatFlow

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddHeatFlux"></a>

### Analysis.AddHeatFlux() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.HeatFlux](BoundaryConditions/HeatFlux.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.HeatFlux)

Creates a new HeatFlux

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddHousingConstraint"></a>

### Analysis.AddHousingConstraint() → [Ansys.ACT.Automation.Mechanical.HousingConstraint](HousingConstraint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.HousingConstraint)

Creates a new HousingConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddHydrostaticPressure"></a>

### Analysis.AddHydrostaticPressure() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.HydrostaticPressure](BoundaryConditions/HydrostaticPressure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.HydrostaticPressure)

Creates a new HydrostaticPressure

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddImage"></a>

### Analysis.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddImpedanceBoundary"></a>

### Analysis.AddImpedanceBoundary() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.ImpedanceBoundary](BoundaryConditions/ImpedanceBoundary.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ImpedanceBoundary)

Creates a new ImpedanceBoundary

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddImportedCFDPressure"></a>

### Analysis.AddImportedCFDPressure() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.ImportedCFDPressure](BoundaryConditions/ImportedCFDPressure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ImportedCFDPressure)

Creates a new ImportedCFDPressure

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddImportedLoadExternalData"></a>

### Analysis.AddImportedLoadExternalData() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedLoadGroup](ImportedLoads/ImportedLoadGroup.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedLoadGroup)

Creates a new Imported Load (External Data).

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddImportedLoadFluidsResultsFile"></a>

### Analysis.AddImportedLoadFluidsResultsFile() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedLoadGroup](ImportedLoads/ImportedLoadGroup.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedLoadGroup)

Creates a new Import Load for Fluids Results File.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddImportedLoadMAPDLResultsFile"></a>

### Analysis.AddImportedLoadMAPDLResultsFile() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedLoadGroup](ImportedLoads/ImportedLoadGroup.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedLoadGroup)

Creates a new Import Load for MAPDL Results File.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddImportedLoadResultFile"></a>

### Analysis.AddImportedLoadResultFile() → [Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedLoadGroup](ImportedLoads/ImportedLoadGroup.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedLoadGroup)

Creates a new Import Load for MAPDL Results File.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddImportedRemoteLoadsGroup"></a>

### Analysis.AddImportedRemoteLoadsGroup() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.LoadGroup](BoundaryConditions/LoadGroup.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.LoadGroup)

Creates a new Import Remote Load Group.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddInitialVelocity"></a>

### Analysis.AddInitialVelocity() → [Ansys.ACT.Automation.Mechanical.InitialCondition](InitialCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.InitialCondition)

Creates a new child Initial Velocity.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddInternalHeatGeneration"></a>

### Analysis.AddInternalHeatGeneration() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.InternalHeatGeneration](BoundaryConditions/InternalHeatGeneration.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.InternalHeatGeneration)

Creates a new InternalHeatGeneration

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddJointLoad"></a>

### Analysis.AddJointLoad() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.JointLoad](BoundaryConditions/JointLoad.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.JointLoad)

Creates a new JointLoad

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddLimitBoundary"></a>

### Analysis.AddLimitBoundary() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.LimitBoundary](BoundaryConditions/LimitBoundary.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.LimitBoundary)

Creates a new LimitBoundary

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddLinePressure"></a>

### Analysis.AddLinePressure() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.LinePressure](BoundaryConditions/LinePressure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.LinePressure)

Creates a new LinePressure

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddLoadApplication"></a>

### Analysis.AddLoadApplication() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.LoadApplication](BoundaryConditions/LoadApplication.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.LoadApplication)

<a id="Analysis.AddLocalVonMisesStressConstraint"></a>

### Analysis.AddLocalVonMisesStressConstraint() → [Ansys.ACT.Automation.Mechanical.LocalVonMisesStressConstraint](LocalVonMisesStressConstraint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.LocalVonMisesStressConstraint)

Creates a new LocalVonMisesStressConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddMagneticFluxParallel"></a>

### Analysis.AddMagneticFluxParallel() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.MagneticFluxParallel](BoundaryConditions/MagneticFluxParallel.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.MagneticFluxParallel)

Creates a new MagneticFluxParallel

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddMassConstraint"></a>

### Analysis.AddMassConstraint() → [Ansys.ACT.Automation.Mechanical.MassConstraint](MassConstraint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MassConstraint)

Creates a new MassConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddMassFlowRate"></a>

### Analysis.AddMassFlowRate() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.MassFlowRate](BoundaryConditions/MassFlowRate.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.MassFlowRate)

Creates a new MassFlowRate

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddMemberSizeManufacturingConstraint"></a>

### Analysis.AddMemberSizeManufacturingConstraint() → [Ansys.ACT.Automation.Mechanical.MemberSizeManufacturingConstraint](MemberSizeManufacturingConstraint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MemberSizeManufacturingConstraint)

Creates a new MemberSizeManufacturingConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddMillingConstraint"></a>

### Analysis.AddMillingConstraint() → [Ansys.ACT.Automation.Mechanical.MillingConstraint](MillingConstraint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MillingConstraint)

Add a Milling constraint to ensure the final shape is manufacturable through 4-axis milling.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddMoment"></a>

### Analysis.AddMoment() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.Moment](BoundaryConditions/Moment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Moment)

Creates a new Moment

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddMomentOfInertiaConstraint"></a>

### Analysis.AddMomentOfInertiaConstraint() → [Ansys.ACT.Automation.Mechanical.MomentOfInertiaConstraint](MomentOfInertiaConstraint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MomentOfInertiaConstraint)

Creates a new MomentOfInertiaConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddMorphingRegion"></a>

### Analysis.AddMorphingRegion() → [Ansys.ACT.Automation.Mechanical.MorphingRegion](MorphingRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MorphingRegion)

Creates a new MorphingRegion

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddNaturalFrequencyConstraint"></a>

### Analysis.AddNaturalFrequencyConstraint() → [Ansys.ACT.Automation.Mechanical.NaturalFrequencyConstraint](NaturalFrequencyConstraint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NaturalFrequencyConstraint)

Creates a new NaturalFrequencyConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddNodalDisplacement"></a>

### Analysis.AddNodalDisplacement() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.NodalDisplacement](BoundaryConditions/NodalDisplacement.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.NodalDisplacement)

Creates a new NodalDisplacement

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddNodalForce"></a>

### Analysis.AddNodalForce() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.NodalForce](BoundaryConditions/NodalForce.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.NodalForce)

Creates a new NodalForce

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddNodalOrientation"></a>

### Analysis.AddNodalOrientation() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.NodalOrientation](BoundaryConditions/NodalOrientation.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.NodalOrientation)

Creates a new NodalOrientation

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddNodalPressure"></a>

### Analysis.AddNodalPressure() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.NodalPressure](BoundaryConditions/NodalPressure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.NodalPressure)

Creates a new NodalPressure

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddNodalRotation"></a>

### Analysis.AddNodalRotation() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.NodalRotation](BoundaryConditions/NodalRotation.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.NodalRotation)

Creates a new NodalRotation

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddNonlinearAdaptiveRegion"></a>

### Analysis.AddNonlinearAdaptiveRegion() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.NonlinearAdaptiveRegion](BoundaryConditions/NonlinearAdaptiveRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.NonlinearAdaptiveRegion)

Creates a new NonlinearAdaptiveRegion

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddObjective"></a>

### Analysis.AddObjective() → [Ansys.ACT.Automation.Mechanical.Objective](Objective.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Objective)

Creates a new Objective

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddOptimizationRegion"></a>

### Analysis.AddOptimizationRegion() → [Ansys.ACT.Automation.Mechanical.OptimizationRegion](OptimizationRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.OptimizationRegion)

Creates a new OptimizationRegion

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPSDAcceleration"></a>

### Analysis.AddPSDAcceleration() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDAcceleration](BoundaryConditions/PSDAcceleration.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDAcceleration)

Creates a new PSDAcceleration

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPSDDisplacement"></a>

### Analysis.AddPSDDisplacement() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDDisplacement](BoundaryConditions/PSDDisplacement.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDDisplacement)

Creates a new PSDDisplacement

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPSDGAcceleration"></a>

### Analysis.AddPSDGAcceleration() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDGAcceleration](BoundaryConditions/PSDGAcceleration.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDGAcceleration)

Creates a new PSDGAcceleration

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPSDPressure"></a>

### Analysis.AddPSDPressure() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDPressure](BoundaryConditions/PSDPressure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDPressure)

<a id="Analysis.AddPSDVelocity"></a>

### Analysis.AddPSDVelocity() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDVelocity](BoundaryConditions/PSDVelocity.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PSDVelocity)

Creates a new PSDVelocity

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPatternRepetitionConstraint"></a>

### Analysis.AddPatternRepetitionConstraint() → [Ansys.ACT.Automation.Mechanical.PatternRepetitionConstraint](PatternRepetitionConstraint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.PatternRepetitionConstraint)

Creates a new PatternRepetitionConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPerfectlyInsulated"></a>

### Analysis.AddPerfectlyInsulated() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.PerfectlyInsulated](BoundaryConditions/PerfectlyInsulated.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PerfectlyInsulated)

Creates a new PerfectlyInsulated

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPhysicsRegion"></a>

### Analysis.AddPhysicsRegion() → [Ansys.ACT.Automation.Mechanical.PhysicsRegion](PhysicsRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.PhysicsRegion)

Creates a new PhysicsRegion

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPipeIdealization"></a>

### Analysis.AddPipeIdealization() → [Ansys.ACT.Automation.Mechanical.PipeIdealization](PipeIdealization.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.PipeIdealization)

Creates a new child PipeIdealization.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPipePressure"></a>

### Analysis.AddPipePressure() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.PipePressure](BoundaryConditions/PipePressure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PipePressure)

Creates a new PipePressure

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPipeTemperature"></a>

### Analysis.AddPipeTemperature() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.PipeTemperature](BoundaryConditions/PipeTemperature.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PipeTemperature)

Creates a new PipeTemperature

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPlasticHeating"></a>

### Analysis.AddPlasticHeating() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.PlasticHeating](BoundaryConditions/PlasticHeating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.PlasticHeating)

Creates a new PlasticHeating

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPressure"></a>

### Analysis.AddPressure(representation: [Ansys.Mechanical.DataModel.MechanicalEnums.BoundaryConditions.DataRepresentation](../../../Mechanical/DataModel/MechanicalEnums/BoundaryConditions/DataRepresentation.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.BoundaryConditions.DataRepresentation)) → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.Pressure](BoundaryConditions/Pressure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Pressure)

```text
Creates a new child Pressure.
DataRepresentation.Field will use the Field object for working with tabular data
DataRepresentation.Flexible allows the use of the following types when the pressure is defined as a normal to a surface:
Quantity: The unit must be a valid Pressure unit
string: It is interpreted as s table if it matches a Table name. Else it is interpreted as an expresion
Table: A table object can be specified.
```

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPullOutDirectionManufacturingConstraint"></a>

### Analysis.AddPullOutDirectionManufacturingConstraint() → [Ansys.ACT.Automation.Mechanical.PullOutDirectionManufacturingConstraint](PullOutDirectionManufacturingConstraint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.PullOutDirectionManufacturingConstraint)

Creates a new PullOutDirectionManufacturingConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddPythonCodeEventBased"></a>

### Analysis.AddPythonCodeEventBased() → [Ansys.ACT.Automation.Mechanical.PythonCodeEventBased](PythonCodeEventBased.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.PythonCodeEventBased)

Creates a new PythonCodeEventBased

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddRSAcceleration"></a>

### Analysis.AddRSAcceleration() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.RSAcceleration](BoundaryConditions/RSAcceleration.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.RSAcceleration)

Creates a new RSAcceleration

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddRSDisplacement"></a>

### Analysis.AddRSDisplacement() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.RSDisplacement](BoundaryConditions/RSDisplacement.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.RSDisplacement)

Creates a new RSDisplacement

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddRSVelocity"></a>

### Analysis.AddRSVelocity() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.RSVelocity](BoundaryConditions/RSVelocity.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.RSVelocity)

Creates a new RSVelocity

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddRadiation"></a>

### Analysis.AddRadiation() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.Radiation](BoundaryConditions/Radiation.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Radiation)

Creates a new Radiation

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddReactionForceConstraint"></a>

### Analysis.AddReactionForceConstraint() → [Ansys.ACT.Automation.Mechanical.ReactionForceConstraint](ReactionForceConstraint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ReactionForceConstraint)

Creates a new ReactionForceConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddRemoteDisplacement"></a>

### Analysis.AddRemoteDisplacement() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.RemoteDisplacement](BoundaryConditions/RemoteDisplacement.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.RemoteDisplacement)

Creates a new RemoteDisplacement

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddRemoteForce"></a>

### Analysis.AddRemoteForce() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.RemoteForce](BoundaryConditions/RemoteForce.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.RemoteForce)

Creates a new RemoteForce

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddRotatingForce"></a>

### Analysis.AddRotatingForce() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.RotatingForce](BoundaryConditions/RotatingForce.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.RotatingForce)

Creates a new RotatingForce

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddRotationalAcceleration"></a>

### Analysis.AddRotationalAcceleration() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.RotationalAcceleration](BoundaryConditions/RotationalAcceleration.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.RotationalAcceleration)

Creates a new RotationalAcceleration

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddRotationalVelocity"></a>

### Analysis.AddRotationalVelocity() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.RotationalVelocity](BoundaryConditions/RotationalVelocity.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.RotationalVelocity)

Creates a new RotationalVelocity

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddSimplySupported"></a>

### Analysis.AddSimplySupported() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.SimplySupported](BoundaryConditions/SimplySupported.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.SimplySupported)

Creates a new SimplySupported

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddSourceConductor"></a>

### Analysis.AddSourceConductor() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.LoadGroup](BoundaryConditions/LoadGroup.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.LoadGroup)

Creates a new child SourceConductor.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddSubstructureGenerationCondensedPart"></a>

### Analysis.AddSubstructureGenerationCondensedPart() → [Ansys.ACT.Automation.Mechanical.SubstructureGenerationCondensedPart](SubstructureGenerationCondensedPart.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SubstructureGenerationCondensedPart)

Creates a new SubstructureGenerationCondensedPart

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddSurfaceChargeDensity"></a>

### Analysis.AddSurfaceChargeDensity() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.SurfaceChargeDensity](BoundaryConditions/SurfaceChargeDensity.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.SurfaceChargeDensity)

Creates a new SurfaceChargeDensity

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddSymmetryManufacturingConstraint"></a>

### Analysis.AddSymmetryManufacturingConstraint() → [Ansys.ACT.Automation.Mechanical.SymmetryManufacturingConstraint](SymmetryManufacturingConstraint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SymmetryManufacturingConstraint)

Creates a new SymmetryManufacturingConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddSystemCouplingRegion"></a>

### Analysis.AddSystemCouplingRegion() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.FluidSolidInterface](BoundaryConditions/FluidSolidInterface.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.FluidSolidInterface)

Creates a new SystemCouplingRegion

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddTemperature"></a>

### Analysis.AddTemperature(representation: [Ansys.Mechanical.DataModel.MechanicalEnums.BoundaryConditions.DataRepresentation](../../../Mechanical/DataModel/MechanicalEnums/BoundaryConditions/DataRepresentation.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.BoundaryConditions.DataRepresentation)) → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.Temperature](BoundaryConditions/Temperature.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Temperature)

Creates a new child Temperature.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddTemperatureConstraint"></a>

### Analysis.AddTemperatureConstraint() → [Ansys.ACT.Automation.Mechanical.TemperatureConstraint](TemperatureConstraint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TemperatureConstraint)

Creates a new TemperatureConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddThermalComplianceConstraint"></a>

### Analysis.AddThermalComplianceConstraint() → [Ansys.ACT.Automation.Mechanical.ThermalComplianceConstraint](ThermalComplianceConstraint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ThermalComplianceConstraint)

Creates a new ThermalComplianceConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddThermalCondition"></a>

### Analysis.AddThermalCondition(representation: [Ansys.Mechanical.DataModel.MechanicalEnums.BoundaryConditions.DataRepresentation](../../../Mechanical/DataModel/MechanicalEnums/BoundaryConditions/DataRepresentation.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.BoundaryConditions.DataRepresentation)) → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.ThermalCondition](BoundaryConditions/ThermalCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ThermalCondition)

### Analysis.AddThermalCondition() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.ThermalCondition](BoundaryConditions/ThermalCondition.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ThermalCondition)

Creates a new Thermal Condition

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddTorsionalMoment"></a>

### Analysis.AddTorsionalMoment() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.TorsionalMoment](BoundaryConditions/TorsionalMoment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.TorsionalMoment)

Creates a new TorsionalMoment

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddUniformConstraint"></a>

### Analysis.AddUniformConstraint() → [Ansys.ACT.Automation.Mechanical.UniformConstraint](UniformConstraint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.UniformConstraint)

Creates a new UniformConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddVectorLoad"></a>

### Analysis.AddVectorLoad() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.VectorLoad](BoundaryConditions/VectorLoad.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.VectorLoad)

Creates a new VectorLoad

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddVelocity"></a>

### Analysis.AddVelocity() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.Velocity](BoundaryConditions/Velocity.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Velocity)

Creates a new Velocity

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddViscoelasticHeating"></a>

### Analysis.AddViscoelasticHeating() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.ViscoelasticHeating](BoundaryConditions/ViscoelasticHeating.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ViscoelasticHeating)

Creates a new ViscoelasticHeating

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddVoltage"></a>

### Analysis.AddVoltage() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.Voltage](BoundaryConditions/Voltage.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Voltage)

Creates a new Voltage

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddVoltageCoupling"></a>

### Analysis.AddVoltageCoupling() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.Coupling](BoundaryConditions/Coupling.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Coupling)

Creates a new Coupling

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddVoltageGround"></a>

### Analysis.AddVoltageGround() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.VoltageGround](BoundaryConditions/VoltageGround.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.VoltageGround)

Creates a new VoltageGround

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddVolumeChargeDensity"></a>

### Analysis.AddVolumeChargeDensity() → [Ansys.ACT.Automation.Mechanical.BoundaryConditions.VolumeChargeDensity](BoundaryConditions/VolumeChargeDensity.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.BoundaryConditions.VolumeChargeDensity)

Creates a new VolumeChargeDensity

<!-- !! processed by numpydoc !! -->

<a id="Analysis.AddVolumeConstraint"></a>

### Analysis.AddVolumeConstraint() → [Ansys.ACT.Automation.Mechanical.VolumeConstraint](VolumeConstraint.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.VolumeConstraint)

Creates a new VolumeConstraint

<!-- !! processed by numpydoc !! -->

<a id="Analysis.ClearGeneratedData"></a>

### Analysis.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.ComponentById"></a>

### Analysis.ComponentById(id: [int](https://docs.python.org/3/builtins/functions.html#int)) → [Ansys.ACT.Interfaces.Mechanical.IMechanicalSelectionInfo](../../Interfaces/Mechanical/IMechanicalSelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Mechanical.IMechanicalSelectionInfo)

ComponentById method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.CoordinateSystemById"></a>

### Analysis.CoordinateSystemById(id: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Interfaces.Analysis.ICoordinateSystem

CoordinateSystemById method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Copy"></a>

### Analysis.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.CopyTo"></a>

### Analysis.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.CreateAutomaticFSI"></a>

### Analysis.CreateAutomaticFSI() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the CreateAutomaticFSI action.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.CreateAutomaticFSIandFarFieldRadiationSurfaces"></a>

### Analysis.CreateAutomaticFSIandFarFieldRadiationSurfaces() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the CreateAutomaticFSIandEquivalentSourceSurfaces action.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.CreateAutomaticFarFieldRadiationSurfaces"></a>

### Analysis.CreateAutomaticFarFieldRadiationSurfaces() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the CreateAutomaticEquivalentSourceSurfaces action.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.CreateLoadObject"></a>

### Analysis.CreateLoadObject(objName: [str](https://docs.python.org/3/builtins/stdtypes.html#str), extNameOrGUID: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.UserObject.IUserLoad

### Analysis.CreateLoadObject(objName: [str](https://docs.python.org/3/builtins/stdtypes.html#str), ext: [Ansys.ACT.Interfaces.Common.IExtension](../../Interfaces/Common/IExtension.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.IExtension)) → Ansys.ACT.Interfaces.UserObject.IUserLoad

CreateLoadObject method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.CreateObjRef"></a>

### Analysis.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.CreateObjectCommand"></a>

### Analysis.CreateObjectCommand(userObject: Ansys.ACT.Interfaces.UserObject.IUserObject) → Ansys.Common.Interop.DSWBApplet.IDSAppCommand

CreateObjectCommand method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.CreateParameter"></a>

### Analysis.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.CreatePostObject"></a>

### Analysis.CreatePostObject(objName: [str](https://docs.python.org/3/builtins/stdtypes.html#str), extNameOrGUID: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.UserObject.IUserLoad

### Analysis.CreatePostObject(objName: [str](https://docs.python.org/3/builtins/stdtypes.html#str), ext: [Ansys.ACT.Interfaces.Common.IExtension](../../Interfaces/Common/IExtension.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.IExtension)) → Ansys.ACT.Interfaces.UserObject.IUserLoad

CreatePostObject method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.CreateResultObject"></a>

### Analysis.CreateResultObject(objName: [str](https://docs.python.org/3/builtins/stdtypes.html#str), extNameOrGUID: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.UserObject.IUserResult

### Analysis.CreateResultObject(objName: [str](https://docs.python.org/3/builtins/stdtypes.html#str), ext: [Ansys.ACT.Interfaces.Common.IExtension](../../Interfaces/Common/IExtension.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.IExtension)) → Ansys.ACT.Interfaces.UserObject.IUserResult

CreateResultObject method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.CurrentConsistentUnitFromQuantityName"></a>

### Analysis.CurrentConsistentUnitFromQuantityName(quantityName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

CurrentConsistentUnitFromQuantityName method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Cut"></a>

### Analysis.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.DataObjectById"></a>

### Analysis.DataObjectById(id: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Interfaces.Analysis.IDataObject

DataObjectById method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.DataObjectByName"></a>

### Analysis.DataObjectByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Analysis.IDataObject

DataObjectByName method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.DataObjectNamesByType"></a>

### Analysis.DataObjectNamesByType(dataType: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

DataObjectNamesByType method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Delete"></a>

### Analysis.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Duplicate"></a>

### Analysis.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Duplicate method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Equals"></a>

### Analysis.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.ExportNastranFile"></a>

### Analysis.ExportNastranFile(exportOptions: [Ansys.ACT.Automation.Mechanical.NastranExportOptions](NastranExportOptions.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NastranExportOptions)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Export Nastran File.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.FilterBasedOnEnvironment"></a>

### Analysis.FilterBasedOnEnvironment() → [None](https://docs.python.org/3/builtins/constants.html#None)

```text
Enables interface filtering that only displays model-level items applicable to
    the currently selected environment type.
```

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GenerateCDBFile"></a>

### Analysis.GenerateCDBFile(filename: [str](https://docs.python.org/3/builtins/stdtypes.html#str), arguments: Ansys.ACT.Automation.Mechanical.CDBGenerationArguments, progress: [Ansys.Mechanical.Application.Progress](../../../Mechanical/Application/Progress.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Application.Progress)) → [None](https://docs.python.org/3/builtins/constants.html#None)

GenerateCDBFile method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GenerateMesh"></a>

### Analysis.GenerateMesh() → [None](https://docs.python.org/3/builtins/constants.html#None)

GenerateMesh method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GetAPIName"></a>

### Analysis.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GetAllProperties"></a>

### Analysis.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GetChildren"></a>

### Analysis.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Analysis.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GetDetailsView"></a>

### Analysis.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GetEnumName"></a>

### Analysis.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GetHashCode"></a>

### Analysis.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GetIconFile"></a>

### Analysis.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GetLifetimeService"></a>

### Analysis.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GetLoadObjects"></a>

### Analysis.GetLoadObjects(ext: [Ansys.ACT.Interfaces.Common.IExtension](../../Interfaces/Common/IExtension.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.IExtension)) → Iterable[Ansys.ACT.Interfaces.UserObject.IUserLoad]

### Analysis.GetLoadObjects(extNameOrGUID: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Iterable[Ansys.ACT.Interfaces.UserObject.IUserLoad]

GetLoadObjects method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GetObjectData"></a>

### Analysis.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GetParameter"></a>

### Analysis.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GetPath"></a>

### Analysis.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GetPropertyName"></a>

### Analysis.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GetPropertyValue"></a>

### Analysis.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GetResultObjects"></a>

### Analysis.GetResultObjects(ext: [Ansys.ACT.Interfaces.Common.IExtension](../../Interfaces/Common/IExtension.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.IExtension)) → Iterable[Ansys.ACT.Interfaces.UserObject.IUserResult]

### Analysis.GetResultObjects(extNameOrGUID: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Iterable[Ansys.ACT.Interfaces.UserObject.IUserResult]

GetResultObjects method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GetResultsData"></a>

### Analysis.GetResultsData() → Ansys.ACT.Interfaces.Post.IResultReader

GetResultsData method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GetUserObjects"></a>

### Analysis.GetUserObjects(ext: [Ansys.ACT.Interfaces.Common.IExtension](../../Interfaces/Common/IExtension.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.IExtension)) → Iterable[Ansys.ACT.Interfaces.UserObject.IUserObject]

### Analysis.GetUserObjects(extNameOrGUID: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Iterable[Ansys.ACT.Interfaces.UserObject.IUserObject]

GetUserObjects method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GetVisibleProperties"></a>

### Analysis.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GetVisiblePropertyNames"></a>

### Analysis.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GroupAllSimilarChildren"></a>

### Analysis.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.GroupSimilarObjects"></a>

### Analysis.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.ImportLoad"></a>

### Analysis.ImportLoad(analysis: [Ansys.ACT.Automation.Mechanical.Analysis](#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Import Load action.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.InitializeLifetimeService"></a>

### Analysis.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.IsPropertyEditable"></a>

### Analysis.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Analysis.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.IsPropertyVisible"></a>

### Analysis.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Analysis.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.OpenSolverFilesDirectory"></a>

### Analysis.OpenSolverFilesDirectory() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the OpenSolverFilesDirectory action.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Paste"></a>

### Analysis.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.PropertyByAPIName"></a>

### Analysis.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Analysis.PropertyById"></a>

### Analysis.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.PropertyByName"></a>

### Analysis.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.PropertyValue"></a>

### Analysis.PropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

### Analysis.PropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str), value: Any) → [None](https://docs.python.org/3/builtins/constants.html#None)

PropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.RemoveFromGroup"></a>

### Analysis.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.RemoveParameter"></a>

### Analysis.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.SelectBodiesWithMultiplePhysicsRegion"></a>

### Analysis.SelectBodiesWithMultiplePhysicsRegion() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the SelectBodiesWithMultiplePhysicsRegion action to select the bodies that belong to more than one Physics Region.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.SelectBodiesWithoutPhysicsRegion"></a>

### Analysis.SelectBodiesWithoutPhysicsRegion() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the SelectBodiesWithoutPhysicsRegion action to select the bodies that don't belong to a Physics Region.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.Solve"></a>

### Analysis.Solve(wait: [bool](https://docs.python.org/3/builtins/functions.html#bool)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### Analysis.Solve(wait: [bool](https://docs.python.org/3/builtins/functions.html#bool), config: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Solve action.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.TransferDataFrom"></a>

### Analysis.TransferDataFrom(analysis: [Ansys.ACT.Automation.Mechanical.Analysis](#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Transfer Data From action.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.UnlinkDataFrom"></a>

### Analysis.UnlinkDataFrom(analysis: [Ansys.ACT.Automation.Mechanical.Analysis](#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Analysis)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Unlink Data From action.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.WriteInputFile"></a>

### Analysis.WriteInputFile(filename: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

WriteInputFile method.

<!-- !! processed by numpydoc !! -->

<a id="Analysis.WriteSystemCouplingFiles"></a>

### Analysis.WriteSystemCouplingFiles(filename: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Writes the system coupling files. Usage WriteSystemCouplingFiles(“C:Desktoptempscp1.scp”);

<!-- !! processed by numpydoc !! -->

