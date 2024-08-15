# `Analysis`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Analysis.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| `Solve`                                          | Run the Solve action.                                                                                                  |
| `Solve`                                          | Run the Solve action.                                                                                                  |
| `ClearGeneratedData`                             | Run the ClearGeneratedData action.                                                                                     |
| `OpenSolverFilesDirectory`                       | Run the OpenSolverFilesDirectory action.                                                                               |
| `FilterBasedOnEnvironment`                       | Enables interface filtering that only displays model-level items applicable to                                         |
| `AddInitialVelocity`                             | Creates a new child Initial Velocity.                                                                                  |
| `AddSystemCouplingRegion`                        | Creates a new SystemCouplingRegion                                                                                     |
| `AddThermalCondition`                            | Creates a new child ThermalCondition.                                                                                  |
| `AddBoltPretension`                              | Creates a new BoltPretension                                                                                           |
| `AddOptimizationRegion`                          | Creates a new OptimizationRegion                                                                                       |
| `AddAcousticTemperature`                         | Creates a new child ThermalCondition.                                                                                  |
| `AddSourceConductor`                             | Creates a new child SourceConductor.                                                                                   |
| `WriteSystemCouplingFiles`                       | Writes the system coupling files. Usage WriteSystemCouplingFiles(“C:Desktoptempscp1.scp”);                             |
| `CreateAutomaticFarFieldRadiationSurfaces`       | Run the CreateAutomaticEquivalentSourceSurfaces action.                                                                |
| `CreateAutomaticFSI`                             | Run the CreateAutomaticFSI action.                                                                                     |
| `CreateAutomaticFSIandFarFieldRadiationSurfaces` | Run the CreateAutomaticFSIandEquivalentSourceSurfaces action.                                                          |
| `SelectBodiesWithoutPhysicsRegion`               | Run the SelectBodiesWithoutPhysicsRegion action to select the bodies that don't belong to a Physics Region.            |
| `SelectBodiesWithMultiplePhysicsRegion`          | Run the SelectBodiesWithMultiplePhysicsRegion action to select the bodies that belong to more than one Physics Region. |
| `AddImportedLoadMAPDLResultsFile`                | Creates a new Import Load for MAPDL Results File.                                                                      |
| `AddImportedLoadFluidsResultsFile`               | Creates a new Import Load for Fluids Results File.                                                                     |
| `AddImportedLoadExternalData`                    | Creates a new Imported Load (External Data).                                                                           |
| `AddImportedRemoteLoadsGroup`                    | Creates a new Import Remote Load Group.                                                                                |
| `TransferDataFrom`                               | Transfer Data From action.                                                                                             |
| `UnlinkDataFrom`                                 | Unlink Data From action.                                                                                               |
| `ImportLoad`                                     | Import Load action.                                                                                                    |
| `ExportNastranFile`                              | Export Nastran File.                                                                                                   |
| `Duplicate`                                      | Duplicate method.                                                                                                      |
| `AddAcceleration`                                | Creates a new Acceleration                                                                                             |
| `AddAcousticAbsorptionElement`                   | Creates a new AcousticAbsorptionElement                                                                                |
| `AddAcousticAbsorptionSurface`                   | Creates a new AcousticAbsorptionSurface                                                                                |
| `AddAcousticDiffuseSoundField`                   | Creates a new AcousticDiffuseSoundField                                                                                |
| `AddAcousticFarFieldRadationSurface`             | Creates a new AcousticFarFieldRadationSurface                                                                          |
| `AddAcousticFreeSurface`                         | Creates a new AcousticFreeSurface                                                                                      |
| `AddAcousticImpedanceBoundary`                   | Creates a new AcousticImpedanceBoundary                                                                                |
| `AddAcousticImpedanceSheet`                      | Creates a new AcousticImpedanceSheet                                                                                   |
| `AddAcousticIncidentWaveSource`                  | Creates a new AcousticIncidentWaveSource                                                                               |
| `AddAcousticLowReducedFrequency`                 | Creates a new AcousticLowReducedFrequency                                                                              |
| `AddAcousticMassSource`                          | Creates a new AcousticMassSource                                                                                       |
| `AddAcousticMassSourceRate`                      | Creates a new AcousticMassSourceRate                                                                                   |
| `AddAcousticPort`                                | Creates a new AcousticPort                                                                                             |
| `AddAcousticPortInDuct`                          | Creates a new AcousticPortInDuct                                                                                       |
| `AddAcousticPressure`                            | Creates a new AcousticPressure                                                                                         |
| `AddAcousticRadiationBoundary`                   | Creates a new AcousticRadiationBoundary                                                                                |
| `AddAcousticRigidWall`                           | Creates a new AcousticRigidWall                                                                                        |
| `AddAcousticStaticPressure`                      | Creates a new AcousticStaticPressure                                                                                   |
| `AddAcousticSurfaceAcceleration`                 | Creates a new AcousticSurfaceAcceleration                                                                              |
| `AddAcousticSurfaceVelocity`                     | Creates a new AcousticSurfaceVelocity                                                                                  |
| `AddAcousticSymmetryPlane`                       | Creates a new AcousticSymmetryPlane                                                                                    |
| `AddAcousticThermoViscousBLIBoundary`            | Creates a new AcousticThermoViscousBLIBoundary                                                                         |
| `AddAcousticTransferAdmittanceMatrix`            | Creates a new AcousticTransferAdmittanceMatrix                                                                         |
| `AddAMOverhangConstraint`                        | Creates a new AMOverhangConstraint                                                                                     |
| `AddBearingLoad`                                 | Creates a new BearingLoad                                                                                              |
| `AddBodyControl`                                 | Creates a new BodyControl                                                                                              |
| `AddCenterOfGravityConstraint`                   | Creates a new CenterOfGravityConstraint                                                                                |
| `AddCommandSnippet`                              | Creates a new CommandSnippet                                                                                           |
| `AddComplexityIndexConstraint`                   | Creates a new ComplexityIndexConstraint                                                                                |
| `AddComplianceConstraint`                        | Creates a new ComplianceConstraint                                                                                     |
| `AddCompressionOnlySupport`                      | Creates a new CompressionOnlySupport                                                                                   |
| `AddConstraintEquation`                          | Creates a new ConstraintEquation                                                                                       |
| `AddContactStepControl`                          | Creates a new ContactStepControl                                                                                       |
| `AddConvection`                                  | Creates a new Convection                                                                                               |
| `AddCoupling`                                    | Creates a new Coupling                                                                                                 |
| `AddVoltageCoupling`                             | Creates a new Coupling                                                                                                 |
| `AddCriterionConstraint`                         | Creates a new CriterionConstraint                                                                                      |
| `AddCurrent`                                     | Creates a new Current                                                                                                  |
| `AddCyclicManufacturingConstraint`               | Creates a new CyclicManufacturingConstraint                                                                            |
| `AddCylindricalSupport`                          | Creates a new CylindricalSupport                                                                                       |
| `AddDetonationPoint`                             | Creates a new DetonationPoint                                                                                          |
| `AddDisplacement`                                | Creates a new Displacement                                                                                             |
| `AddDisplacementConstraint`                      | Creates a new DisplacementConstraint                                                                                   |
| `AddDynamicComplianceConstraint`                 | Creates a new DynamicComplianceConstraint                                                                              |
| `AddEarthGravity`                                | Creates a new EarthGravity                                                                                             |
| `AddElasticSupport`                              | Creates a new ElasticSupport                                                                                           |
| `AddElectricCharge`                              | Creates a new ElectricCharge                                                                                           |
| `AddElementBirthAndDeath`                        | Creates a new ElementBirthAndDeath                                                                                     |
| `AddEMTransducer`                                | Creates a new EMTransducer                                                                                             |
| `AddExtrusionManufacturingConstraint`            | Creates a new ExtrusionManufacturingConstraint                                                                         |
| `AddFixedRotation`                               | Creates a new FixedRotation                                                                                            |
| `AddFixedSupport`                                | Creates a new FixedSupport                                                                                             |
| `AddFluidSolidInterface`                         | Creates a new FluidSolidInterface                                                                                      |
| `AddForce`                                       | Creates a new Force                                                                                                    |
| `AddFrictionlessSupport`                         | Creates a new FrictionlessSupport                                                                                      |
| `AddGeneralizedPlaneStrain`                      | Creates a new GeneralizedPlaneStrain                                                                                   |
| `AddGeometryBasedAdaptivity`                     | Creates a new GeometryBasedAdaptivity                                                                                  |
| `AddGlobalVonMisesStressConstraint`              | Creates a new GlobalVonMisesStressConstraint                                                                           |
| `AddHeatFlow`                                    | Creates a new HeatFlow                                                                                                 |
| `AddHeatFlux`                                    | Creates a new HeatFlux                                                                                                 |
| `AddHousingConstraint`                           | Creates a new HousingConstraint                                                                                        |
| `AddHydrostaticPressure`                         | Creates a new HydrostaticPressure                                                                                      |
| `AddImpedanceBoundary`                           | Creates a new ImpedanceBoundary                                                                                        |
| `AddImportedCFDPressure`                         | Creates a new ImportedCFDPressure                                                                                      |
| `AddInternalHeatGeneration`                      | Creates a new InternalHeatGeneration                                                                                   |
| `AddJointLoad`                                   | Creates a new JointLoad                                                                                                |
| `AddLimitBoundary`                               | Creates a new LimitBoundary                                                                                            |
| `AddLinePressure`                                | Creates a new LinePressure                                                                                             |
| `AddLocalVonMisesStressConstraint`               | Creates a new LocalVonMisesStressConstraint                                                                            |
| `AddMagneticFluxParallel`                        | Creates a new MagneticFluxParallel                                                                                     |
| `AddMassConstraint`                              | Creates a new MassConstraint                                                                                           |
| `AddMassFlowRate`                                | Creates a new MassFlowRate                                                                                             |
| `AddMemberSizeManufacturingConstraint`           | Creates a new MemberSizeManufacturingConstraint                                                                        |
| `AddMoment`                                      | Creates a new Moment                                                                                                   |
| `AddMomentOfInertiaConstraint`                   | Creates a new MomentOfInertiaConstraint                                                                                |
| `AddMorphingRegion`                              | Creates a new MorphingRegion                                                                                           |
| `AddNaturalFrequencyConstraint`                  | Creates a new NaturalFrequencyConstraint                                                                               |
| `AddNodalDisplacement`                           | Creates a new NodalDisplacement                                                                                        |
| `AddNodalForce`                                  | Creates a new NodalForce                                                                                               |
| `AddNodalOrientation`                            | Creates a new NodalOrientation                                                                                         |
| `AddNodalPressure`                               | Creates a new NodalPressure                                                                                            |
| `AddNodalRotation`                               | Creates a new NodalRotation                                                                                            |
| `AddNonlinearAdaptiveRegion`                     | Creates a new NonlinearAdaptiveRegion                                                                                  |
| `AddObjective`                                   | Creates a new Objective                                                                                                |
| `AddPatternRepetitionConstraint`                 | Creates a new PatternRepetitionConstraint                                                                              |
| `AddPerfectlyInsulated`                          | Creates a new PerfectlyInsulated                                                                                       |
| `AddPhysicsRegion`                               | Creates a new PhysicsRegion                                                                                            |
| `AddPipeIdealization`                            | Creates a new child PipeIdealization.                                                                                  |
| `AddPipePressure`                                | Creates a new PipePressure                                                                                             |
| `AddPipeTemperature`                             | Creates a new PipeTemperature                                                                                          |
| `AddPlasticHeating`                              | Creates a new PlasticHeating                                                                                           |
| `AddPressure`                                    | Creates a new child Pressure.                                                                                          |
| `AddPSDAcceleration`                             | Creates a new PSDAcceleration                                                                                          |
| `AddPSDDisplacement`                             | Creates a new PSDDisplacement                                                                                          |
| `AddPSDGAcceleration`                            | Creates a new PSDGAcceleration                                                                                         |
| `AddPSDVelocity`                                 | Creates a new PSDVelocity                                                                                              |
| `AddPullOutDirectionManufacturingConstraint`     | Creates a new PullOutDirectionManufacturingConstraint                                                                  |
| `AddPythonCodeEventBased`                        | Creates a new PythonCodeEventBased                                                                                     |
| `AddRadiation`                                   | Creates a new Radiation                                                                                                |
| `AddReactionForceConstraint`                     | Creates a new ReactionForceConstraint                                                                                  |
| `AddRemoteDisplacement`                          | Creates a new RemoteDisplacement                                                                                       |
| `AddRemoteForce`                                 | Creates a new RemoteForce                                                                                              |
| `AddRotatingForce`                               | Creates a new RotatingForce                                                                                            |
| `AddRotationalAcceleration`                      | Creates a new RotationalAcceleration                                                                                   |
| `AddRotationalVelocity`                          | Creates a new RotationalVelocity                                                                                       |
| `AddRSAcceleration`                              | Creates a new RSAcceleration                                                                                           |
| `AddRSDisplacement`                              | Creates a new RSDisplacement                                                                                           |
| `AddRSVelocity`                                  | Creates a new RSVelocity                                                                                               |
| `AddSimplySupported`                             | Creates a new SimplySupported                                                                                          |
| `AddSubstructureGenerationCondensedPart`         | Creates a new SubstructureGenerationCondensedPart                                                                      |
| `AddSurfaceChargeDensity`                        | Creates a new SurfaceChargeDensity                                                                                     |
| `AddSymmetryManufacturingConstraint`             | Creates a new SymmetryManufacturingConstraint                                                                          |
| `AddTemperature`                                 | Creates a new Temperature                                                                                              |
| `AddTemperatureConstraint`                       | Creates a new TemperatureConstraint                                                                                    |
| `AddThermalComplianceConstraint`                 | Creates a new ThermalComplianceConstraint                                                                              |
| `AddUniformConstraint`                           | Creates a new UniformConstraint                                                                                        |
| `AddVelocity`                                    | Creates a new Velocity                                                                                                 |
| `AddViscoelasticHeating`                         | Creates a new ViscoelasticHeating                                                                                      |
| `AddVoltage`                                     | Creates a new Voltage                                                                                                  |
| `AddVoltageGround`                               | Creates a new VoltageGround                                                                                            |
| `AddVolumeChargeDensity`                         | Creates a new VolumeChargeDensity                                                                                      |
| `AddVolumeConstraint`                            | Creates a new VolumeConstraint                                                                                         |
| `Delete`                                         | Run the Delete action.                                                                                                 |
| `GetChildren`                                    | Gets the list of children, filtered by type.                                                                           |
| `GetChildren`                                    | Gets the list of children, filtered by type.                                                                           |
| `AddComment`                                     | Creates a new child Comment.                                                                                           |
| `AddFigure`                                      | Creates a new child Figure.                                                                                            |
| `AddImage`                                       | Creates a new child Image.                                                                                             |
| `Activate`                                       | Activate the current object.                                                                                           |
| `CopyTo`                                         | Copies all visible properties from this object to another.                                                             |
| `GroupAllSimilarChildren`                        | Run the GroupAllSimilarChildren action.                                                                                |
| `GroupSimilarObjects`                            | Run the GroupSimilarObjects action.                                                                                    |
| `PropertyByName`                                 | Get a property by its unique name.                                                                                     |
| `PropertyByAPIName`                              | Get a property by its API name.                                                                                        |
| `CreateParameter`                                | Creates a new parameter for a Property.                                                                                |
| `GetParameter`                                   | Gets the parameter corresponding to the given property.                                                                |
| `RemoveParameter`                                | Removes the parameter from the parameter set corresponding to the given property.                                      |

### Properties

| Name | Description |
|---------------------------|---------------------------------------------------------------|
| `CellId`                  | Gets the CellId.                                              |
| `SystemCaption`           | Gets the SystemCaption.                                       |
| `InitialConditions`       | Get InitialConditions.                                        |
| `ResultFileName`          | Get the full path and name of the result file.                |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `EnvironmentTemperature`  | Gets or sets the EnvironmentTemperature.                      |
| `AMProcessSimulation`     | Gets or sets the AMProcessSimulation.                         |
| `AnalysisType`            | Gets the AnalysisType.                                        |
| `PhysicsType`             | Gets the PhysicsType.                                         |
| `Acoustics`               | Gets or sets the Acoustics.                                   |
| `Electric`                | Gets the Electric.                                            |
| `GenerateInputOnly`       | Gets the GenerateInputOnly.                                   |
| `Structural`              | Gets or sets the Structural.                                  |
| `Thermal`                 | Gets the Thermal.                                             |
| `AnalysisSettings`        | Gets the AnalysisSettings.                                    |
| `Solution`                | Gets the Solution.                                            |
| `DataModelObjectCategory` | Gets the current DataModelObject's category.                  |
| `Children`                | Gets the list of children.                                    |
| `Comments`                | Gets the list of associated comments.                         |
| `Figures`                 | Gets the list of associated figures.                          |
| `Images`                  | Gets the list of associated images.                           |
| `ReadOnly`                | Gets or sets the ReadOnly.                                    |
| `InternalObject`          | Gets the internal object. For advanced usage only.            |
| `Properties`              | Gets the list of properties for this object.                  |
| `VisibleProperties`       | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* Analysis.CellId *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CellId.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.SystemCaption *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SystemCaption.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.InitialConditions *: System.Collections.Generic.IList[[Ansys.ACT.Automation.Mechanical.InitialCondition](InitialCondition.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.InitialCondition)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* Analysis.AMProcessSimulation *: [Ansys.Mechanical.DataModel.Enums.AMProcessSimulationType](../../../Mechanical/DataModel/Enums/AMProcessSimulationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AMProcessSimulationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AMProcessSimulation.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.AnalysisType *: [Ansys.Mechanical.DataModel.Enums.AnalysisType](../../../Mechanical/DataModel/Enums/AnalysisType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AnalysisType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AnalysisType.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.PhysicsType *: [Ansys.Mechanical.DataModel.Enums.PhysicsType](../../../Mechanical/DataModel/Enums/PhysicsType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PhysicsType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* Analysis.AnalysisSettings *: [Ansys.ACT.Automation.Mechanical.AnalysisSettings.AnalysisSettings](AnalysisSettings/AnalysisSettings.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AnalysisSettings.AnalysisSettings) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the AnalysisSettings.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.Solution *: [Ansys.ACT.Automation.Mechanical.Solution](Solution.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Solution) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Solution.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Analysis.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="method-detail"></a>

## Method detail

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

```text
Enables interface filtering that only displays model-level items applicable to
    the currently selected environment type.
```

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

Run the SelectBodiesWithoutPhysicsRegion action to select the bodies that don't belong to a Physics Region.

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

Creates a new Imported Load (External Data).

<!-- !! processed by numpydoc !! -->

### Analysis.AddImportedRemoteLoadsGroup()

Creates a new Import Remote Load Group.

<!-- !! processed by numpydoc !! -->

### Analysis.TransferDataFrom(analysis: [Ansys.ACT.Automation.Mechanical.Analysis](#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis))

Transfer Data From action.

<!-- !! processed by numpydoc !! -->

### Analysis.UnlinkDataFrom(analysis: [Ansys.ACT.Automation.Mechanical.Analysis](#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis))

Unlink Data From action.

<!-- !! processed by numpydoc !! -->

### Analysis.ImportLoad(analysis: [Ansys.ACT.Automation.Mechanical.Analysis](#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis))

Import Load action.

<!-- !! processed by numpydoc !! -->

### Analysis.ExportNastranFile(exportOptions: [Ansys.ACT.Automation.Mechanical.NastranExportOptions](NastranExportOptions.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.NastranExportOptions))

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

### Analysis.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Analysis.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Analysis.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Analysis.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

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

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

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

