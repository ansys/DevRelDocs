# Analysis

### *class* Analysis

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Analysis.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddSymmetryManufacturingConstraint`](#Analysis.AddSymmetryManufacturingConstraint)                         | Creates a new SymmetryManufacturingConstraint                                                                          |
|--------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| [`AddTemperature`](#Analysis.AddTemperature)                                                                 | Creates a new Temperature                                                                                              |
| [`AddTemperatureConstraint`](#Analysis.AddTemperatureConstraint)                                             | Creates a new TemperatureConstraint                                                                                    |
| [`AddThermalComplianceConstraint`](#Analysis.AddThermalComplianceConstraint)                                 | Creates a new ThermalComplianceConstraint                                                                              |
| [`AddUniformConstraint`](#Analysis.AddUniformConstraint)                                                     | Creates a new UniformConstraint                                                                                        |
| [`AddVelocity`](#Analysis.AddVelocity)                                                                       | Creates a new Velocity                                                                                                 |
| [`AddViscoelasticHeating`](#Analysis.AddViscoelasticHeating)                                                 | Creates a new ViscoelasticHeating                                                                                      |
| [`AddVoltage`](#Analysis.AddVoltage)                                                                         | Creates a new Voltage                                                                                                  |
| [`AddVoltageGround`](#Analysis.AddVoltageGround)                                                             | Creates a new VoltageGround                                                                                            |
| [`AddVolumeChargeDensity`](#Analysis.AddVolumeChargeDensity)                                                 | Creates a new VolumeChargeDensity                                                                                      |
| [`AddVolumeConstraint`](#Analysis.AddVolumeConstraint)                                                       | Creates a new VolumeConstraint                                                                                         |
| [`Delete`](#Analysis.Delete)                                                                                 | Run the Delete action.                                                                                                 |
| [`GetChildren`](#id1)                                                                                        | Gets the list of children, filtered by type.                                                                           |
| [`GetChildren`](#id1)                                                                                        | Gets the list of children, filtered by type.                                                                           |
| [`AddComment`](#Analysis.AddComment)                                                                         | Creates a new child Comment.                                                                                           |
| [`AddFigure`](#Analysis.AddFigure)                                                                           | Creates a new child Figure.                                                                                            |
| [`AddImage`](#Analysis.AddImage)                                                                             | Creates a new child Image.                                                                                             |
| [`Solve`](#id2)                                                                                              | Run the Solve action.                                                                                                  |
| [`Solve`](#id2)                                                                                              | Run the Solve action.                                                                                                  |
| [`ClearGeneratedData`](#Analysis.ClearGeneratedData)                                                         | Run the ClearGeneratedData action.                                                                                     |
| [`OpenSolverFilesDirectory`](#Analysis.OpenSolverFilesDirectory)                                             | Run the OpenSolverFilesDirectory action.                                                                               |
| [`FilterBasedOnEnvironment`](#Analysis.FilterBasedOnEnvironment)                                             | Enables interface filtering that only displays model-level items applicable to                                         |
| [`AddInitialVelocity`](#Analysis.AddInitialVelocity)                                                         | Creates a new child Initial Velocity.                                                                                  |
| [`AddSystemCouplingRegion`](#Analysis.AddSystemCouplingRegion)                                               | Creates a new SystemCouplingRegion                                                                                     |
| [`AddThermalCondition`](#Analysis.AddThermalCondition)                                                       | Creates a new child ThermalCondition.                                                                                  |
| [`AddBoltPretension`](#Analysis.AddBoltPretension)                                                           | Creates a new BoltPretension                                                                                           |
| [`AddOptimizationRegion`](#Analysis.AddOptimizationRegion)                                                   | Creates a new OptimizationRegion                                                                                       |
| [`AddAcousticTemperature`](#Analysis.AddAcousticTemperature)                                                 | Creates a new child ThermalCondition.                                                                                  |
| [`AddSourceConductor`](#Analysis.AddSourceConductor)                                                         | Creates a new child SourceConductor.                                                                                   |
| [`WriteSystemCouplingFiles`](#Analysis.WriteSystemCouplingFiles)                                             | Writes the system coupling files. Usage WriteSystemCouplingFiles(“C:Desktoptempscp1.scp”);                             |
| [`CreateAutomaticFarFieldRadiationSurfaces`](#Analysis.CreateAutomaticFarFieldRadiationSurfaces)             | Run the CreateAutomaticEquivalentSourceSurfaces action.                                                                |
| [`CreateAutomaticFSI`](#Analysis.CreateAutomaticFSI)                                                         | Run the CreateAutomaticFSI action.                                                                                     |
| [`CreateAutomaticFSIandFarFieldRadiationSurfaces`](#Analysis.CreateAutomaticFSIandFarFieldRadiationSurfaces) | Run the CreateAutomaticFSIandEquivalentSourceSurfaces action.                                                          |
| [`SelectBodiesWithoutPhysicsRegion`](#Analysis.SelectBodiesWithoutPhysicsRegion)                             | Run the SelectBodiesWithoutPhysicsRegion action to select the bodies that don’t belong to a Physics Region.            |
| [`SelectBodiesWithMultiplePhysicsRegion`](#Analysis.SelectBodiesWithMultiplePhysicsRegion)                   | Run the SelectBodiesWithMultiplePhysicsRegion action to select the bodies that belong to more than one Physics Region. |
| [`AddImportedLoadMAPDLResultsFile`](#Analysis.AddImportedLoadMAPDLResultsFile)                               | Creates a new Import Load for MAPDL Results File.                                                                      |
| [`AddImportedLoadFluidsResultsFile`](#Analysis.AddImportedLoadFluidsResultsFile)                             | Creates a new Import Load for Fluids Results File.                                                                     |
| [`AddImportedLoadExternalData`](#Analysis.AddImportedLoadExternalData)                                       | For Standalone Mode only. Creates a new Imported Load (External Data).                                                 |
| [`AddImportedRemoteLoadsGroup`](#Analysis.AddImportedRemoteLoadsGroup)                                       | Creates a new Import Remote Load Group.                                                                                |
| [`TransferDataFrom`](#Analysis.TransferDataFrom)                                                             | Transfer Data From action.                                                                                             |
| [`UnlinkDataFrom`](#Analysis.UnlinkDataFrom)                                                                 | Unlink Data From action.                                                                                               |
| [`ImportLoad`](#Analysis.ImportLoad)                                                                         | Import Load action.                                                                                                    |
| [`ExportNastranFile`](#Analysis.ExportNastranFile)                                                           | Export Nastran File.                                                                                                   |
| [`Duplicate`](#Analysis.Duplicate)                                                                           | Duplicate method.                                                                                                      |
| [`AddAcceleration`](#Analysis.AddAcceleration)                                                               | Creates a new Acceleration                                                                                             |
| [`AddAcousticAbsorptionElement`](#Analysis.AddAcousticAbsorptionElement)                                     | Creates a new AcousticAbsorptionElement                                                                                |
| [`AddAcousticAbsorptionSurface`](#Analysis.AddAcousticAbsorptionSurface)                                     | Creates a new AcousticAbsorptionSurface                                                                                |
| [`AddAcousticDiffuseSoundField`](#Analysis.AddAcousticDiffuseSoundField)                                     | Creates a new AcousticDiffuseSoundField                                                                                |
| [`AddAcousticFarFieldRadationSurface`](#Analysis.AddAcousticFarFieldRadationSurface)                         | Creates a new AcousticFarFieldRadationSurface                                                                          |
| [`AddAcousticFreeSurface`](#Analysis.AddAcousticFreeSurface)                                                 | Creates a new AcousticFreeSurface                                                                                      |
| [`AddAcousticImpedanceBoundary`](#Analysis.AddAcousticImpedanceBoundary)                                     | Creates a new AcousticImpedanceBoundary                                                                                |
| [`AddAcousticImpedanceSheet`](#Analysis.AddAcousticImpedanceSheet)                                           | Creates a new AcousticImpedanceSheet                                                                                   |
| [`AddAcousticIncidentWaveSource`](#Analysis.AddAcousticIncidentWaveSource)                                   | Creates a new AcousticIncidentWaveSource                                                                               |
| [`AddAcousticLowReducedFrequency`](#Analysis.AddAcousticLowReducedFrequency)                                 | Creates a new AcousticLowReducedFrequency                                                                              |
| [`AddAcousticMassSource`](#Analysis.AddAcousticMassSource)                                                   | Creates a new AcousticMassSource                                                                                       |
| [`AddAcousticMassSourceRate`](#Analysis.AddAcousticMassSourceRate)                                           | Creates a new AcousticMassSourceRate                                                                                   |
| [`AddAcousticPort`](#Analysis.AddAcousticPort)                                                               | Creates a new AcousticPort                                                                                             |
| [`AddAcousticPortInDuct`](#Analysis.AddAcousticPortInDuct)                                                   | Creates a new AcousticPortInDuct                                                                                       |
| [`AddAcousticPressure`](#Analysis.AddAcousticPressure)                                                       | Creates a new AcousticPressure                                                                                         |
| [`AddAcousticRadiationBoundary`](#Analysis.AddAcousticRadiationBoundary)                                     | Creates a new AcousticRadiationBoundary                                                                                |
| [`AddAcousticRigidWall`](#Analysis.AddAcousticRigidWall)                                                     | Creates a new AcousticRigidWall                                                                                        |
| [`AddAcousticStaticPressure`](#Analysis.AddAcousticStaticPressure)                                           | Creates a new AcousticStaticPressure                                                                                   |
| [`AddAcousticSurfaceAcceleration`](#Analysis.AddAcousticSurfaceAcceleration)                                 | Creates a new AcousticSurfaceAcceleration                                                                              |
| [`AddAcousticSurfaceVelocity`](#Analysis.AddAcousticSurfaceVelocity)                                         | Creates a new AcousticSurfaceVelocity                                                                                  |
| [`AddAcousticSymmetryPlane`](#Analysis.AddAcousticSymmetryPlane)                                             | Creates a new AcousticSymmetryPlane                                                                                    |
| [`AddAcousticThermoViscousBLIBoundary`](#Analysis.AddAcousticThermoViscousBLIBoundary)                       | Creates a new AcousticThermoViscousBLIBoundary                                                                         |
| [`AddAcousticTransferAdmittanceMatrix`](#Analysis.AddAcousticTransferAdmittanceMatrix)                       | Creates a new AcousticTransferAdmittanceMatrix                                                                         |
| [`AddAMOverhangConstraint`](#Analysis.AddAMOverhangConstraint)                                               | Creates a new AMOverhangConstraint                                                                                     |
| [`AddBearingLoad`](#Analysis.AddBearingLoad)                                                                 | Creates a new BearingLoad                                                                                              |
| [`AddBodyControl`](#Analysis.AddBodyControl)                                                                 | Creates a new BodyControl                                                                                              |
| [`AddCenterOfGravityConstraint`](#Analysis.AddCenterOfGravityConstraint)                                     | Creates a new CenterOfGravityConstraint                                                                                |
| [`AddCommandSnippet`](#Analysis.AddCommandSnippet)                                                           | Creates a new CommandSnippet                                                                                           |
| [`AddComplexityIndexConstraint`](#Analysis.AddComplexityIndexConstraint)                                     | Creates a new ComplexityIndexConstraint                                                                                |
| [`AddComplianceConstraint`](#Analysis.AddComplianceConstraint)                                               | Creates a new ComplianceConstraint                                                                                     |
| [`AddCompressionOnlySupport`](#Analysis.AddCompressionOnlySupport)                                           | Creates a new CompressionOnlySupport                                                                                   |
| [`AddConstraintEquation`](#Analysis.AddConstraintEquation)                                                   | Creates a new ConstraintEquation                                                                                       |
| [`AddContactStepControl`](#Analysis.AddContactStepControl)                                                   | Creates a new ContactStepControl                                                                                       |
| [`AddConvection`](#Analysis.AddConvection)                                                                   | Creates a new Convection                                                                                               |
| [`AddCoupling`](#Analysis.AddCoupling)                                                                       | Creates a new Coupling                                                                                                 |
| [`AddVoltageCoupling`](#Analysis.AddVoltageCoupling)                                                         | Creates a new Coupling                                                                                                 |
| [`AddCriterionConstraint`](#Analysis.AddCriterionConstraint)                                                 | Creates a new CriterionConstraint                                                                                      |
| [`AddCurrent`](#Analysis.AddCurrent)                                                                         | Creates a new Current                                                                                                  |
| [`AddCyclicManufacturingConstraint`](#Analysis.AddCyclicManufacturingConstraint)                             | Creates a new CyclicManufacturingConstraint                                                                            |
| [`AddCylindricalSupport`](#Analysis.AddCylindricalSupport)                                                   | Creates a new CylindricalSupport                                                                                       |
| [`AddDetonationPoint`](#Analysis.AddDetonationPoint)                                                         | Creates a new DetonationPoint                                                                                          |
| [`AddDisplacement`](#Analysis.AddDisplacement)                                                               | Creates a new Displacement                                                                                             |
| [`AddDisplacementConstraint`](#Analysis.AddDisplacementConstraint)                                           | Creates a new DisplacementConstraint                                                                                   |
| [`AddDynamicComplianceConstraint`](#Analysis.AddDynamicComplianceConstraint)                                 | Creates a new DynamicComplianceConstraint                                                                              |
| [`AddEarthGravity`](#Analysis.AddEarthGravity)                                                               | Creates a new EarthGravity                                                                                             |
| [`AddElasticSupport`](#Analysis.AddElasticSupport)                                                           | Creates a new ElasticSupport                                                                                           |
| [`AddElectricCharge`](#Analysis.AddElectricCharge)                                                           | Creates a new ElectricCharge                                                                                           |
| [`AddElementBirthAndDeath`](#Analysis.AddElementBirthAndDeath)                                               | Creates a new ElementBirthAndDeath                                                                                     |
| [`AddEMTransducer`](#Analysis.AddEMTransducer)                                                               | Creates a new EMTransducer                                                                                             |
| [`AddExtrusionManufacturingConstraint`](#Analysis.AddExtrusionManufacturingConstraint)                       | Creates a new ExtrusionManufacturingConstraint                                                                         |
| [`AddFixedRotation`](#Analysis.AddFixedRotation)                                                             | Creates a new FixedRotation                                                                                            |
| [`AddFixedSupport`](#Analysis.AddFixedSupport)                                                               | Creates a new FixedSupport                                                                                             |
| [`AddFluidSolidInterface`](#Analysis.AddFluidSolidInterface)                                                 | Creates a new FluidSolidInterface                                                                                      |
| [`AddForce`](#Analysis.AddForce)                                                                             | Creates a new Force                                                                                                    |
| [`AddFrictionlessSupport`](#Analysis.AddFrictionlessSupport)                                                 | Creates a new FrictionlessSupport                                                                                      |
| [`AddGeneralizedPlaneStrain`](#Analysis.AddGeneralizedPlaneStrain)                                           | Creates a new GeneralizedPlaneStrain                                                                                   |
| [`AddGeometryBasedAdaptivity`](#Analysis.AddGeometryBasedAdaptivity)                                         | Creates a new GeometryBasedAdaptivity                                                                                  |
| [`AddGlobalVonMisesStressConstraint`](#Analysis.AddGlobalVonMisesStressConstraint)                           | Creates a new GlobalVonMisesStressConstraint                                                                           |
| [`AddHeatFlow`](#Analysis.AddHeatFlow)                                                                       | Creates a new HeatFlow                                                                                                 |
| [`AddHeatFlux`](#Analysis.AddHeatFlux)                                                                       | Creates a new HeatFlux                                                                                                 |
| [`AddHousingConstraint`](#Analysis.AddHousingConstraint)                                                     | Creates a new HousingConstraint                                                                                        |
| [`AddHydrostaticPressure`](#Analysis.AddHydrostaticPressure)                                                 | Creates a new HydrostaticPressure                                                                                      |
| [`AddImpedanceBoundary`](#Analysis.AddImpedanceBoundary)                                                     | Creates a new ImpedanceBoundary                                                                                        |
| [`AddImportedCFDPressure`](#Analysis.AddImportedCFDPressure)                                                 | Creates a new ImportedCFDPressure                                                                                      |
| [`AddInternalHeatGeneration`](#Analysis.AddInternalHeatGeneration)                                           | Creates a new InternalHeatGeneration                                                                                   |
| [`AddJointLoad`](#Analysis.AddJointLoad)                                                                     | Creates a new JointLoad                                                                                                |
| [`AddLimitBoundary`](#Analysis.AddLimitBoundary)                                                             | Creates a new LimitBoundary                                                                                            |
| [`AddLinePressure`](#Analysis.AddLinePressure)                                                               | Creates a new LinePressure                                                                                             |
| [`AddLocalVonMisesStressConstraint`](#Analysis.AddLocalVonMisesStressConstraint)                             | Creates a new LocalVonMisesStressConstraint                                                                            |
| [`AddMagneticFluxParallel`](#Analysis.AddMagneticFluxParallel)                                               | Creates a new MagneticFluxParallel                                                                                     |
| [`AddMassConstraint`](#Analysis.AddMassConstraint)                                                           | Creates a new MassConstraint                                                                                           |
| [`AddMassFlowRate`](#Analysis.AddMassFlowRate)                                                               | Creates a new MassFlowRate                                                                                             |
| [`AddMemberSizeManufacturingConstraint`](#Analysis.AddMemberSizeManufacturingConstraint)                     | Creates a new MemberSizeManufacturingConstraint                                                                        |
| [`AddMoment`](#Analysis.AddMoment)                                                                           | Creates a new Moment                                                                                                   |
| [`AddMomentOfInertiaConstraint`](#Analysis.AddMomentOfInertiaConstraint)                                     | Creates a new MomentOfInertiaConstraint                                                                                |
| [`AddMorphingRegion`](#Analysis.AddMorphingRegion)                                                           | Creates a new MorphingRegion                                                                                           |
| [`AddNaturalFrequencyConstraint`](#Analysis.AddNaturalFrequencyConstraint)                                   | Creates a new NaturalFrequencyConstraint                                                                               |
| [`AddNodalDisplacement`](#Analysis.AddNodalDisplacement)                                                     | Creates a new NodalDisplacement                                                                                        |
| [`AddNodalForce`](#Analysis.AddNodalForce)                                                                   | Creates a new NodalForce                                                                                               |
| [`AddNodalOrientation`](#Analysis.AddNodalOrientation)                                                       | Creates a new NodalOrientation                                                                                         |
| [`AddNodalPressure`](#Analysis.AddNodalPressure)                                                             | Creates a new NodalPressure                                                                                            |
| [`AddNodalRotation`](#Analysis.AddNodalRotation)                                                             | Creates a new NodalRotation                                                                                            |
| [`AddNonlinearAdaptiveRegion`](#Analysis.AddNonlinearAdaptiveRegion)                                         | Creates a new NonlinearAdaptiveRegion                                                                                  |
| [`AddObjective`](#Analysis.AddObjective)                                                                     | Creates a new Objective                                                                                                |
| [`AddPatternRepetitionConstraint`](#Analysis.AddPatternRepetitionConstraint)                                 | Creates a new PatternRepetitionConstraint                                                                              |
| [`AddPerfectlyInsulated`](#Analysis.AddPerfectlyInsulated)                                                   | Creates a new PerfectlyInsulated                                                                                       |
| [`AddPhysicsRegion`](#Analysis.AddPhysicsRegion)                                                             | Creates a new PhysicsRegion                                                                                            |
| [`AddPipeIdealization`](#Analysis.AddPipeIdealization)                                                       | Creates a new child PipeIdealization.                                                                                  |
| [`AddPipePressure`](#Analysis.AddPipePressure)                                                               | Creates a new PipePressure                                                                                             |
| [`AddPipeTemperature`](#Analysis.AddPipeTemperature)                                                         | Creates a new PipeTemperature                                                                                          |
| [`AddPlasticHeating`](#Analysis.AddPlasticHeating)                                                           | Creates a new PlasticHeating                                                                                           |
| [`AddPressure`](#Analysis.AddPressure)                                                                       | Creates a new child Pressure.                                                                                          |
| [`AddPSDAcceleration`](#Analysis.AddPSDAcceleration)                                                         | Creates a new PSDAcceleration                                                                                          |
| [`AddPSDDisplacement`](#Analysis.AddPSDDisplacement)                                                         | Creates a new PSDDisplacement                                                                                          |
| [`AddPSDGAcceleration`](#Analysis.AddPSDGAcceleration)                                                       | Creates a new PSDGAcceleration                                                                                         |
| [`AddPSDVelocity`](#Analysis.AddPSDVelocity)                                                                 | Creates a new PSDVelocity                                                                                              |
| [`AddPullOutDirectionManufacturingConstraint`](#Analysis.AddPullOutDirectionManufacturingConstraint)         | Creates a new PullOutDirectionManufacturingConstraint                                                                  |
| [`AddPythonCodeEventBased`](#Analysis.AddPythonCodeEventBased)                                               | Creates a new PythonCodeEventBased                                                                                     |
| [`AddRadiation`](#Analysis.AddRadiation)                                                                     | Creates a new Radiation                                                                                                |
| [`AddReactionForceConstraint`](#Analysis.AddReactionForceConstraint)                                         | Creates a new ReactionForceConstraint                                                                                  |
| [`AddRemoteDisplacement`](#Analysis.AddRemoteDisplacement)                                                   | Creates a new RemoteDisplacement                                                                                       |
| [`AddRemoteForce`](#Analysis.AddRemoteForce)                                                                 | Creates a new RemoteForce                                                                                              |
| [`AddRotatingForce`](#Analysis.AddRotatingForce)                                                             | Creates a new RotatingForce                                                                                            |
| [`AddRotationalAcceleration`](#Analysis.AddRotationalAcceleration)                                           | Creates a new RotationalAcceleration                                                                                   |
| [`AddRotationalVelocity`](#Analysis.AddRotationalVelocity)                                                   | Creates a new RotationalVelocity                                                                                       |
| [`AddRSAcceleration`](#Analysis.AddRSAcceleration)                                                           | Creates a new RSAcceleration                                                                                           |
| [`AddRSDisplacement`](#Analysis.AddRSDisplacement)                                                           | Creates a new RSDisplacement                                                                                           |
| [`AddRSVelocity`](#Analysis.AddRSVelocity)                                                                   | Creates a new RSVelocity                                                                                               |
| [`AddSimplySupported`](#Analysis.AddSimplySupported)                                                         | Creates a new SimplySupported                                                                                          |
| [`AddSubstructureGenerationCondensedPart`](#Analysis.AddSubstructureGenerationCondensedPart)                 | Creates a new SubstructureGenerationCondensedPart                                                                      |
| [`AddSurfaceChargeDensity`](#Analysis.AddSurfaceChargeDensity)                                               | Creates a new SurfaceChargeDensity                                                                                     |
| [`Activate`](#Analysis.Activate)                                                                             | Activate the current object.                                                                                           |
| [`CopyTo`](#Analysis.CopyTo)                                                                                 | Copies all visible properties from this object to another.                                                             |
| [`GroupAllSimilarChildren`](#Analysis.GroupAllSimilarChildren)                                               | Run the GroupAllSimilarChildren action.                                                                                |
| [`GroupSimilarObjects`](#Analysis.GroupSimilarObjects)                                                       | Run the GroupSimilarObjects action.                                                                                    |
| [`PropertyByName`](#Analysis.PropertyByName)                                                                 | Get a property by its unique name.                                                                                     |
| [`PropertyByAPIName`](#Analysis.PropertyByAPIName)                                                           | Get a property by its API name.                                                                                        |
| [`CreateParameter`](#Analysis.CreateParameter)                                                               | Creates a new parameter for a Property.                                                                                |
| [`GetParameter`](#Analysis.GetParameter)                                                                     | Gets the parameter corresponding to the given property.                                                                |
| [`RemoveParameter`](#Analysis.RemoveParameter)                                                               | Removes the parameter from the parameter set corresponding to the given property.                                      |

### Properties

| [`CellId`](#Analysis.CellId)                                                                                        | Gets the CellId.                                              |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`SystemCaption`](#Analysis.SystemCaption)                                                                          | Gets the SystemCaption.                                       |
| [`InitialConditions`](InitialConditions.md#InitialConditions)                                                       | Get InitialConditions.                                        |
| [`ResultFileName`](#Analysis.ResultFileName)                                                                        | Get the full path and name of the result file.                |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`EnvironmentTemperature`](#Analysis.EnvironmentTemperature)                                                        | Gets or sets the EnvironmentTemperature.                      |
| [`AMProcessSimulation`](#Analysis.AMProcessSimulation)                                                              | Gets or sets the AMProcessSimulation.                         |
| [`AnalysisType`](../../../Mechanical/DataModel/Enums/GeometryImportPreference/AnalysisType.md#AnalysisType)         | Gets the AnalysisType.                                        |
| [`PhysicsType`](../../../Mechanical/DataModel/Enums/PhysicsType.md#PhysicsType)                                     | Gets the PhysicsType.                                         |
| [`Acoustics`](#Analysis.Acoustics)                                                                                  | Gets or sets the Acoustics.                                   |
| [`Electric`](#Analysis.Electric)                                                                                    | Gets the Electric.                                            |
| [`GenerateInputOnly`](#Analysis.GenerateInputOnly)                                                                  | Gets the GenerateInputOnly.                                   |
| [`Structural`](#Analysis.Structural)                                                                                | Gets or sets the Structural.                                  |
| [`Thermal`](#Analysis.Thermal)                                                                                      | Gets the Thermal.                                             |
| [`AnalysisSettings`](AnalysisSettings/AnalysisSettings.md#AnalysisSettings)                                         | Gets the AnalysisSettings.                                    |
| [`Solution`](Solution.md#Solution)                                                                                  | Gets the Solution.                                            |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#Analysis.Children)                                                                                    | Gets the list of children.                                    |
| [`Comments`](#Analysis.Comments)                                                                                    | Gets the list of associated comments.                         |
| [`Figures`](#Analysis.Figures)                                                                                      | Gets the list of associated figures.                          |
| [`Images`](#Analysis.Images)                                                                                        | Gets the list of associated images.                           |
| [`ReadOnly`](#Analysis.ReadOnly)                                                                                    | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Analysis.Properties)                                                                                | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Analysis.VisibleProperties)                                                                  | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import Analysis
```

## Property detail

### *property* Analysis.CellId *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CellId.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.SystemCaption *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SystemCaption.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.InitialConditions *: System.Collections.Generic.IList[[Ansys.ACT.Automation.Mechanical.InitialCondition](InitialCondition.md#InitialCondition)] | [None](https://docs.python.org/3/library/constants.html#None)*

Get InitialConditions.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.ResultFileName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Get the full path and name of the result file.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEnvironmentAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.EnvironmentTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EnvironmentTemperature.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.AMProcessSimulation *: [Ansys.Mechanical.DataModel.Enums.AMProcessSimulationType](../../../Mechanical/DataModel/Enums/AMProcessSimulationType.md#AMProcessSimulationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AMProcessSimulation.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.AnalysisType *: [Ansys.Mechanical.DataModel.Enums.AnalysisType](../../../Mechanical/DataModel/Enums/AnalysisType.md#AnalysisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AnalysisType.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.PhysicsType *: [Ansys.Mechanical.DataModel.Enums.PhysicsType](../../../Mechanical/DataModel/Enums/PhysicsType.md#PhysicsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhysicsType.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.Acoustics *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Acoustics.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.Electric *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Electric.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.GenerateInputOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the GenerateInputOnly.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.Structural *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Structural.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.Thermal *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Thermal.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.AnalysisSettings *: [Ansys.ACT.Automation.Mechanical.AnalysisSettings.AnalysisSettings](AnalysisSettings/AnalysisSettings.md#AnalysisSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AnalysisSettings.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.Solution *: [Ansys.ACT.Automation.Mechanical.Solution](Solution.md#Solution) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Solution.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Analysis.AddSymmetryManufacturingConstraint()

Creates a new SymmetryManufacturingConstraint

<!-- !! processed by numpydoc !! -->

### Analysis.AddTemperature()

Creates a new Temperature

<!-- !! processed by numpydoc !! -->

### Analysis.AddTemperatureConstraint()

Creates a new TemperatureConstraint

<!-- !! processed by numpydoc !! -->

### Analysis.AddThermalComplianceConstraint()

Creates a new ThermalComplianceConstraint

<!-- !! processed by numpydoc !! -->

### Analysis.AddUniformConstraint()

Creates a new UniformConstraint

<!-- !! processed by numpydoc !! -->

### Analysis.AddVelocity()

Creates a new Velocity

<!-- !! processed by numpydoc !! -->

### Analysis.AddViscoelasticHeating()

Creates a new ViscoelasticHeating

<!-- !! processed by numpydoc !! -->

### Analysis.AddVoltage()

Creates a new Voltage

<!-- !! processed by numpydoc !! -->

### Analysis.AddVoltageGround()

Creates a new VoltageGround

<!-- !! processed by numpydoc !! -->

### Analysis.AddVolumeChargeDensity()

Creates a new VolumeChargeDensity

<!-- !! processed by numpydoc !! -->

### Analysis.AddVolumeConstraint()

Creates a new VolumeConstraint

<!-- !! processed by numpydoc !! -->

### Analysis.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Analysis.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Analysis.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Analysis.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Analysis.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Analysis.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Analysis.Solve(wait: System.Boolean)

Run the Solve action.

<!-- !! processed by numpydoc !! -->

### Analysis.Solve(wait: System.Boolean, config: System.String)

Run the Solve action.

<!-- !! processed by numpydoc !! -->

### Analysis.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

### Analysis.OpenSolverFilesDirectory()

Run the OpenSolverFilesDirectory action.

<!-- !! processed by numpydoc !! -->

### Analysis.FilterBasedOnEnvironment()

Enables interface filtering that only displays model-level items applicable to
: the currently selected environment type.

<!-- !! processed by numpydoc !! -->

### Analysis.AddInitialVelocity()

Creates a new child Initial Velocity.

<!-- !! processed by numpydoc !! -->

### Analysis.AddSystemCouplingRegion()

Creates a new SystemCouplingRegion

<!-- !! processed by numpydoc !! -->

### Analysis.AddThermalCondition()

Creates a new child ThermalCondition.

<!-- !! processed by numpydoc !! -->

### Analysis.AddBoltPretension()

Creates a new BoltPretension

<!-- !! processed by numpydoc !! -->

### Analysis.AddOptimizationRegion()

Creates a new OptimizationRegion

<!-- !! processed by numpydoc !! -->

### Analysis.AddAcousticTemperature()

Creates a new child ThermalCondition.

<!-- !! processed by numpydoc !! -->

### Analysis.AddSourceConductor()

Creates a new child SourceConductor.

<!-- !! processed by numpydoc !! -->

### Analysis.WriteSystemCouplingFiles(filename: System.String)

Writes the system coupling files. Usage WriteSystemCouplingFiles(“C:Desktoptempscp1.scp”);

<!-- !! processed by numpydoc !! -->

### Analysis.CreateAutomaticFarFieldRadiationSurfaces()

Run the CreateAutomaticEquivalentSourceSurfaces action.

<!-- !! processed by numpydoc !! -->

### Analysis.CreateAutomaticFSI()

Run the CreateAutomaticFSI action.

<!-- !! processed by numpydoc !! -->

### Analysis.CreateAutomaticFSIandFarFieldRadiationSurfaces()

Run the CreateAutomaticFSIandEquivalentSourceSurfaces action.

<!-- !! processed by numpydoc !! -->

### Analysis.SelectBodiesWithoutPhysicsRegion()

Run the SelectBodiesWithoutPhysicsRegion action to select the bodies that don’t belong to a Physics Region.

<!-- !! processed by numpydoc !! -->

### Analysis.SelectBodiesWithMultiplePhysicsRegion()

Run the SelectBodiesWithMultiplePhysicsRegion action to select the bodies that belong to more than one Physics Region.

<!-- !! processed by numpydoc !! -->

### Analysis.AddImportedLoadMAPDLResultsFile()

Creates a new Import Load for MAPDL Results File.

<!-- !! processed by numpydoc !! -->

### Analysis.AddImportedLoadFluidsResultsFile()

Creates a new Import Load for Fluids Results File.

<!-- !! processed by numpydoc !! -->

### Analysis.AddImportedLoadExternalData()

For Standalone Mode only. Creates a new Imported Load (External Data).

<!-- !! processed by numpydoc !! -->

### Analysis.AddImportedRemoteLoadsGroup()

Creates a new Import Remote Load Group.

<!-- !! processed by numpydoc !! -->

### Analysis.TransferDataFrom(analysis: [Ansys.ACT.Automation.Mechanical.Analysis](#Analysis))

Transfer Data From action.

<!-- !! processed by numpydoc !! -->

### Analysis.UnlinkDataFrom(analysis: [Ansys.ACT.Automation.Mechanical.Analysis](#Analysis))

Unlink Data From action.

<!-- !! processed by numpydoc !! -->

### Analysis.ImportLoad(analysis: [Ansys.ACT.Automation.Mechanical.Analysis](#Analysis))

Import Load action.

<!-- !! processed by numpydoc !! -->

### Analysis.ExportNastranFile(exportOptions: [Ansys.ACT.Automation.Mechanical.NastranExportOptions](NastranExportOptions.md#NastranExportOptions))

Export Nastran File.

<!-- !! processed by numpydoc !! -->

### Analysis.Duplicate()

Duplicate method.

<!-- !! processed by numpydoc !! -->

### Analysis.AddAcceleration()

Creates a new Acceleration

<!-- !! processed by numpydoc !! -->

### Analysis.AddAcousticAbsorptionElement()

Creates a new AcousticAbsorptionElement

<!-- !! processed by numpydoc !! -->

### Analysis.AddAcousticAbsorptionSurface()

Creates a new AcousticAbsorptionSurface

<!-- !! processed by numpydoc !! -->

### Analysis.AddAcousticDiffuseSoundField()

Creates a new AcousticDiffuseSoundField

<!-- !! processed by numpydoc !! -->

### Analysis.AddAcousticFarFieldRadationSurface()

Creates a new AcousticFarFieldRadationSurface

<!-- !! processed by numpydoc !! -->

### Analysis.AddAcousticFreeSurface()

Creates a new AcousticFreeSurface

<!-- !! processed by numpydoc !! -->

### Analysis.AddAcousticImpedanceBoundary()

Creates a new AcousticImpedanceBoundary

<!-- !! processed by numpydoc !! -->

### Analysis.AddAcousticImpedanceSheet()

Creates a new AcousticImpedanceSheet

<!-- !! processed by numpydoc !! -->

### Analysis.AddAcousticIncidentWaveSource()

Creates a new AcousticIncidentWaveSource

<!-- !! processed by numpydoc !! -->

### Analysis.AddAcousticLowReducedFrequency()

Creates a new AcousticLowReducedFrequency

<!-- !! processed by numpydoc !! -->

### Analysis.AddAcousticMassSource()

Creates a new AcousticMassSource

<!-- !! processed by numpydoc !! -->

### Analysis.AddAcousticMassSourceRate()

Creates a new AcousticMassSourceRate

<!-- !! processed by numpydoc !! -->

### Analysis.AddAcousticPort()

Creates a new AcousticPort

<!-- !! processed by numpydoc !! -->

### Analysis.AddAcousticPortInDuct()

Creates a new AcousticPortInDuct

<!-- !! processed by numpydoc !! -->

### Analysis.AddAcousticPressure()

Creates a new AcousticPressure

<!-- !! processed by numpydoc !! -->

### Analysis.AddAcousticRadiationBoundary()

Creates a new AcousticRadiationBoundary

<!-- !! processed by numpydoc !! -->

### Analysis.AddAcousticRigidWall()

Creates a new AcousticRigidWall

<!-- !! processed by numpydoc !! -->

### Analysis.AddAcousticStaticPressure()

Creates a new AcousticStaticPressure

<!-- !! processed by numpydoc !! -->

### Analysis.AddAcousticSurfaceAcceleration()

Creates a new AcousticSurfaceAcceleration

<!-- !! processed by numpydoc !! -->

### Analysis.AddAcousticSurfaceVelocity()

Creates a new AcousticSurfaceVelocity

<!-- !! processed by numpydoc !! -->

### Analysis.AddAcousticSymmetryPlane()

Creates a new AcousticSymmetryPlane

<!-- !! processed by numpydoc !! -->

### Analysis.AddAcousticThermoViscousBLIBoundary()

Creates a new AcousticThermoViscousBLIBoundary

<!-- !! processed by numpydoc !! -->

### Analysis.AddAcousticTransferAdmittanceMatrix()

Creates a new AcousticTransferAdmittanceMatrix

<!-- !! processed by numpydoc !! -->

### Analysis.AddAMOverhangConstraint()

Creates a new AMOverhangConstraint

<!-- !! processed by numpydoc !! -->

### Analysis.AddBearingLoad()

Creates a new BearingLoad

<!-- !! processed by numpydoc !! -->

### Analysis.AddBodyControl()

Creates a new BodyControl

<!-- !! processed by numpydoc !! -->

### Analysis.AddCenterOfGravityConstraint()

Creates a new CenterOfGravityConstraint

<!-- !! processed by numpydoc !! -->

### Analysis.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

### Analysis.AddComplexityIndexConstraint()

Creates a new ComplexityIndexConstraint

<!-- !! processed by numpydoc !! -->

### Analysis.AddComplianceConstraint()

Creates a new ComplianceConstraint

<!-- !! processed by numpydoc !! -->

### Analysis.AddCompressionOnlySupport()

Creates a new CompressionOnlySupport

<!-- !! processed by numpydoc !! -->

### Analysis.AddConstraintEquation()

Creates a new ConstraintEquation

<!-- !! processed by numpydoc !! -->

### Analysis.AddContactStepControl()

Creates a new ContactStepControl

<!-- !! processed by numpydoc !! -->

### Analysis.AddConvection()

Creates a new Convection

<!-- !! processed by numpydoc !! -->

### Analysis.AddCoupling()

Creates a new Coupling

<!-- !! processed by numpydoc !! -->

### Analysis.AddVoltageCoupling()

Creates a new Coupling

<!-- !! processed by numpydoc !! -->

### Analysis.AddCriterionConstraint()

Creates a new CriterionConstraint

<!-- !! processed by numpydoc !! -->

### Analysis.AddCurrent()

Creates a new Current

<!-- !! processed by numpydoc !! -->

### Analysis.AddCyclicManufacturingConstraint()

Creates a new CyclicManufacturingConstraint

<!-- !! processed by numpydoc !! -->

### Analysis.AddCylindricalSupport()

Creates a new CylindricalSupport

<!-- !! processed by numpydoc !! -->

### Analysis.AddDetonationPoint()

Creates a new DetonationPoint

<!-- !! processed by numpydoc !! -->

### Analysis.AddDisplacement()

Creates a new Displacement

<!-- !! processed by numpydoc !! -->

### Analysis.AddDisplacementConstraint()

Creates a new DisplacementConstraint

<!-- !! processed by numpydoc !! -->

### Analysis.AddDynamicComplianceConstraint()

Creates a new DynamicComplianceConstraint

<!-- !! processed by numpydoc !! -->

### Analysis.AddEarthGravity()

Creates a new EarthGravity

<!-- !! processed by numpydoc !! -->

### Analysis.AddElasticSupport()

Creates a new ElasticSupport

<!-- !! processed by numpydoc !! -->

### Analysis.AddElectricCharge()

Creates a new ElectricCharge

<!-- !! processed by numpydoc !! -->

### Analysis.AddElementBirthAndDeath()

Creates a new ElementBirthAndDeath

<!-- !! processed by numpydoc !! -->

### Analysis.AddEMTransducer()

Creates a new EMTransducer

<!-- !! processed by numpydoc !! -->

### Analysis.AddExtrusionManufacturingConstraint()

Creates a new ExtrusionManufacturingConstraint

<!-- !! processed by numpydoc !! -->

### Analysis.AddFixedRotation()

Creates a new FixedRotation

<!-- !! processed by numpydoc !! -->

### Analysis.AddFixedSupport()

Creates a new FixedSupport

<!-- !! processed by numpydoc !! -->

### Analysis.AddFluidSolidInterface()

Creates a new FluidSolidInterface

<!-- !! processed by numpydoc !! -->

### Analysis.AddForce()

Creates a new Force

<!-- !! processed by numpydoc !! -->

### Analysis.AddFrictionlessSupport()

Creates a new FrictionlessSupport

<!-- !! processed by numpydoc !! -->

### Analysis.AddGeneralizedPlaneStrain()

Creates a new GeneralizedPlaneStrain

<!-- !! processed by numpydoc !! -->

### Analysis.AddGeometryBasedAdaptivity()

Creates a new GeometryBasedAdaptivity

<!-- !! processed by numpydoc !! -->

### Analysis.AddGlobalVonMisesStressConstraint()

Creates a new GlobalVonMisesStressConstraint

<!-- !! processed by numpydoc !! -->

### Analysis.AddHeatFlow()

Creates a new HeatFlow

<!-- !! processed by numpydoc !! -->

### Analysis.AddHeatFlux()

Creates a new HeatFlux

<!-- !! processed by numpydoc !! -->

### Analysis.AddHousingConstraint()

Creates a new HousingConstraint

<!-- !! processed by numpydoc !! -->

### Analysis.AddHydrostaticPressure()

Creates a new HydrostaticPressure

<!-- !! processed by numpydoc !! -->

### Analysis.AddImpedanceBoundary()

Creates a new ImpedanceBoundary

<!-- !! processed by numpydoc !! -->

### Analysis.AddImportedCFDPressure()

Creates a new ImportedCFDPressure

<!-- !! processed by numpydoc !! -->

### Analysis.AddInternalHeatGeneration()

Creates a new InternalHeatGeneration

<!-- !! processed by numpydoc !! -->

### Analysis.AddJointLoad()

Creates a new JointLoad

<!-- !! processed by numpydoc !! -->

### Analysis.AddLimitBoundary()

Creates a new LimitBoundary

<!-- !! processed by numpydoc !! -->

### Analysis.AddLinePressure()

Creates a new LinePressure

<!-- !! processed by numpydoc !! -->

### Analysis.AddLocalVonMisesStressConstraint()

Creates a new LocalVonMisesStressConstraint

<!-- !! processed by numpydoc !! -->

### Analysis.AddMagneticFluxParallel()

Creates a new MagneticFluxParallel

<!-- !! processed by numpydoc !! -->

### Analysis.AddMassConstraint()

Creates a new MassConstraint

<!-- !! processed by numpydoc !! -->

### Analysis.AddMassFlowRate()

Creates a new MassFlowRate

<!-- !! processed by numpydoc !! -->

### Analysis.AddMemberSizeManufacturingConstraint()

Creates a new MemberSizeManufacturingConstraint

<!-- !! processed by numpydoc !! -->

### Analysis.AddMoment()

Creates a new Moment

<!-- !! processed by numpydoc !! -->

### Analysis.AddMomentOfInertiaConstraint()

Creates a new MomentOfInertiaConstraint

<!-- !! processed by numpydoc !! -->

### Analysis.AddMorphingRegion()

Creates a new MorphingRegion

<!-- !! processed by numpydoc !! -->

### Analysis.AddNaturalFrequencyConstraint()

Creates a new NaturalFrequencyConstraint

<!-- !! processed by numpydoc !! -->

### Analysis.AddNodalDisplacement()

Creates a new NodalDisplacement

<!-- !! processed by numpydoc !! -->

### Analysis.AddNodalForce()

Creates a new NodalForce

<!-- !! processed by numpydoc !! -->

### Analysis.AddNodalOrientation()

Creates a new NodalOrientation

<!-- !! processed by numpydoc !! -->

### Analysis.AddNodalPressure()

Creates a new NodalPressure

<!-- !! processed by numpydoc !! -->

### Analysis.AddNodalRotation()

Creates a new NodalRotation

<!-- !! processed by numpydoc !! -->

### Analysis.AddNonlinearAdaptiveRegion()

Creates a new NonlinearAdaptiveRegion

<!-- !! processed by numpydoc !! -->

### Analysis.AddObjective()

Creates a new Objective

<!-- !! processed by numpydoc !! -->

### Analysis.AddPatternRepetitionConstraint()

Creates a new PatternRepetitionConstraint

<!-- !! processed by numpydoc !! -->

### Analysis.AddPerfectlyInsulated()

Creates a new PerfectlyInsulated

<!-- !! processed by numpydoc !! -->

### Analysis.AddPhysicsRegion()

Creates a new PhysicsRegion

<!-- !! processed by numpydoc !! -->

### Analysis.AddPipeIdealization()

Creates a new child PipeIdealization.

<!-- !! processed by numpydoc !! -->

### Analysis.AddPipePressure()

Creates a new PipePressure

<!-- !! processed by numpydoc !! -->

### Analysis.AddPipeTemperature()

Creates a new PipeTemperature

<!-- !! processed by numpydoc !! -->

### Analysis.AddPlasticHeating()

Creates a new PlasticHeating

<!-- !! processed by numpydoc !! -->

### Analysis.AddPressure()

Creates a new child Pressure.

<!-- !! processed by numpydoc !! -->

### Analysis.AddPSDAcceleration()

Creates a new PSDAcceleration

<!-- !! processed by numpydoc !! -->

### Analysis.AddPSDDisplacement()

Creates a new PSDDisplacement

<!-- !! processed by numpydoc !! -->

### Analysis.AddPSDGAcceleration()

Creates a new PSDGAcceleration

<!-- !! processed by numpydoc !! -->

### Analysis.AddPSDVelocity()

Creates a new PSDVelocity

<!-- !! processed by numpydoc !! -->

### Analysis.AddPullOutDirectionManufacturingConstraint()

Creates a new PullOutDirectionManufacturingConstraint

<!-- !! processed by numpydoc !! -->

### Analysis.AddPythonCodeEventBased()

Creates a new PythonCodeEventBased

<!-- !! processed by numpydoc !! -->

### Analysis.AddRadiation()

Creates a new Radiation

<!-- !! processed by numpydoc !! -->

### Analysis.AddReactionForceConstraint()

Creates a new ReactionForceConstraint

<!-- !! processed by numpydoc !! -->

### Analysis.AddRemoteDisplacement()

Creates a new RemoteDisplacement

<!-- !! processed by numpydoc !! -->

### Analysis.AddRemoteForce()

Creates a new RemoteForce

<!-- !! processed by numpydoc !! -->

### Analysis.AddRotatingForce()

Creates a new RotatingForce

<!-- !! processed by numpydoc !! -->

### Analysis.AddRotationalAcceleration()

Creates a new RotationalAcceleration

<!-- !! processed by numpydoc !! -->

### Analysis.AddRotationalVelocity()

Creates a new RotationalVelocity

<!-- !! processed by numpydoc !! -->

### Analysis.AddRSAcceleration()

Creates a new RSAcceleration

<!-- !! processed by numpydoc !! -->

### Analysis.AddRSDisplacement()

Creates a new RSDisplacement

<!-- !! processed by numpydoc !! -->

### Analysis.AddRSVelocity()

Creates a new RSVelocity

<!-- !! processed by numpydoc !! -->

### Analysis.AddSimplySupported()

Creates a new SimplySupported

<!-- !! processed by numpydoc !! -->

### Analysis.AddSubstructureGenerationCondensedPart()

Creates a new SubstructureGenerationCondensedPart

<!-- !! processed by numpydoc !! -->

### Analysis.AddSurfaceChargeDensity()

Creates a new SurfaceChargeDensity

<!-- !! processed by numpydoc !! -->

### Analysis.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Analysis.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Analysis.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Analysis.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Analysis.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Analysis.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Analysis.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Analysis.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Analysis.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
