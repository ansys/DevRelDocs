# Solution

### *class* Solution

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Solution.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddEquivalentStress`](#Solution.AddEquivalentStress)                                                               | Creates a new EquivalentStress                                                                                               |
|----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`AddEquivalentStressPSD`](#Solution.AddEquivalentStressPSD)                                                         | Creates a new EquivalentStressPSD                                                                                            |
| [`AddEquivalentStressRS`](#Solution.AddEquivalentStressRS)                                                           | Creates a new EquivalentStressRS                                                                                             |
| [`AddEquivalentTotalStrain`](#Solution.AddEquivalentTotalStrain)                                                     | Creates a new EquivalentTotalStrain                                                                                          |
| [`AddExpansionSettings`](#Solution.AddExpansionSettings)                                                             | Creates a new ExpansionSettings                                                                                              |
| [`AddFiberCompressiveDamageVariable`](#Solution.AddFiberCompressiveDamageVariable)                                   | Creates a new FiberCompressiveDamageVariable                                                                                 |
| [`AddFiberCompressiveFailureCriterion`](#Solution.AddFiberCompressiveFailureCriterion)                               | Creates a new FiberCompressiveFailureCriterion                                                                               |
| [`AddFiberTensileDamageVariable`](#Solution.AddFiberTensileDamageVariable)                                           | Creates a new FiberTensileDamageVariable                                                                                     |
| [`AddFiberTensileFailureCriterion`](#Solution.AddFiberTensileFailureCriterion)                                       | Creates a new FiberTensileFailureCriterion                                                                                   |
| [`AddFieldIntensityProbe`](#Solution.AddFieldIntensityProbe)                                                         | Creates a new FieldIntensityProbe                                                                                            |
| [`AddFlexibleRotationProbe`](#Solution.AddFlexibleRotationProbe)                                                     | Creates a new FlexibleRotationProbe                                                                                          |
| [`AddFluidFlowRate`](#Solution.AddFluidFlowRate)                                                                     | Creates a new FluidFlowRate                                                                                                  |
| [`AddFluidHeatConductionRate`](#Solution.AddFluidHeatConductionRate)                                                 | Creates a new FluidHeatConductionRate                                                                                        |
| [`AddFluidHeatTransportRate`](#Solution.AddFluidHeatTransportRate)                                                   | Creates a new FluidHeatTransportRate                                                                                         |
| [`AddFluxDensityProbe`](#Solution.AddFluxDensityProbe)                                                               | Creates a new FluxDensityProbe                                                                                               |
| [`AddFluxLinkage`](#Solution.AddFluxLinkage)                                                                         | Creates a new FluxLinkage                                                                                                    |
| [`AddForceReaction`](#Solution.AddForceReaction)                                                                     | Creates a new ForceReaction                                                                                                  |
| [`AddForceReactionFrequencyResponse`](#Solution.AddForceReactionFrequencyResponse)                                   | Creates a new ForceReactionFrequencyResponse                                                                                 |
| [`AddFractureTool`](#Solution.AddFractureTool)                                                                       | Creates a new FractureTool                                                                                                   |
| [`AddGeneralizedPlaneStrainProbe`](#Solution.AddGeneralizedPlaneStrainProbe)                                         | Creates a new GeneralizedPlaneStrainProbe                                                                                    |
| [`AddHeatFluxProbe`](#Solution.AddHeatFluxProbe)                                                                     | Creates a new HeatFluxProbe                                                                                                  |
| [`AddImpedanceFrequencyResponse`](#Solution.AddImpedanceFrequencyResponse)                                           | Creates a new ImpedanceFrequencyResponse                                                                                     |
| [`AddImpedanceProbe`](#Solution.AddImpedanceProbe)                                                                   | Creates a new ImpedanceProbe                                                                                                 |
| [`AddInductance`](#Solution.AddInductance)                                                                           | Creates a new Inductance                                                                                                     |
| [`AddJointProbe`](#Solution.AddJointProbe)                                                                           | Creates a new JointProbe                                                                                                     |
| [`AddJouleHeat`](#Solution.AddJouleHeat)                                                                             | Creates a new JouleHeat                                                                                                      |
| [`AddJouleHeatProbe`](#Solution.AddJouleHeatProbe)                                                                   | Creates a new JouleHeatProbe                                                                                                 |
| [`AddLatticeDensity`](#Solution.AddLatticeDensity)                                                                   | Creates a new LatticeDensity                                                                                                 |
| [`AddLatticeElementalDensity`](#Solution.AddLatticeElementalDensity)                                                 | Creates a new LatticeElementalDensity                                                                                        |
| [`AddLinearizedEquivalentStress`](#Solution.AddLinearizedEquivalentStress)                                           | Creates a new LinearizedEquivalentStress                                                                                     |
| [`AddLinearizedMaximumPrincipalStress`](#Solution.AddLinearizedMaximumPrincipalStress)                               | Creates a new LinearizedMaximumPrincipalStress                                                                               |
| [`AddLinearizedMaximumShearStress`](#Solution.AddLinearizedMaximumShearStress)                                       | Creates a new LinearizedMaximumShearStress                                                                                   |
| [`AddLinearizedMiddlePrincipalStress`](#Solution.AddLinearizedMiddlePrincipalStress)                                 | Creates a new LinearizedMiddlePrincipalStress                                                                                |
| [`AddLinearizedMinimumPrincipalStress`](#Solution.AddLinearizedMinimumPrincipalStress)                               | Creates a new LinearizedMinimumPrincipalStress                                                                               |
| [`AddLinearizedNormalStress`](#Solution.AddLinearizedNormalStress)                                                   | Creates a new LinearizedNormalStress                                                                                         |
| [`AddLinearizedShearStress`](#Solution.AddLinearizedShearStress)                                                     | Creates a new LinearizedShearStress                                                                                          |
| [`AddLinearizedStressIntensity`](#Solution.AddLinearizedStressIntensity)                                             | Creates a new LinearizedStressIntensity                                                                                      |
| [`AddLinePressureResult`](#Solution.AddLinePressureResult)                                                           | Creates a new LinePressureResult                                                                                             |
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
| [`AddMCFWaterfallDiagram`](#Solution.AddMCFWaterfallDiagram)                                                         | Creates a new MCFWaterfallDiagram                                                                                            |
| [`AddMembraneStressEquivalent`](#Solution.AddMembraneStressEquivalent)                                               | Creates a new MembraneStressEquivalent                                                                                       |
| [`AddMembraneStressIntensity`](#Solution.AddMembraneStressIntensity)                                                 | Creates a new MembraneStressIntensity                                                                                        |
| [`AddMiddlePrincipalElasticStrain`](#Solution.AddMiddlePrincipalElasticStrain)                                       | Creates a new MiddlePrincipalElasticStrain                                                                                   |
| [`AddMiddlePrincipalStress`](#Solution.AddMiddlePrincipalStress)                                                     | Creates a new MiddlePrincipalStress                                                                                          |
| [`AddMiddlePrincipalThermalStrain`](#Solution.AddMiddlePrincipalThermalStrain)                                       | Creates a new MiddlePrincipalThermalStrain                                                                                   |
| [`AddMinimumPrincipalElasticStrain`](#Solution.AddMinimumPrincipalElasticStrain)                                     | Creates a new MinimumPrincipalElasticStrain                                                                                  |
| [`AddMinimumPrincipalStress`](#Solution.AddMinimumPrincipalStress)                                                   | Creates a new MinimumPrincipalStress                                                                                         |
| [`AddMomentReaction`](#Solution.AddMomentReaction)                                                                   | Creates a new MomentReaction                                                                                                 |
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
| [`AddResponsePSD`](#Solution.AddResponsePSD)                                                                         | Creates a new ResponsePSD                                                                                                    |
| [`AddResultMesh`](#Solution.AddResultMesh)                                                                           | Creates a new ResultMesh                                                                                                     |
| [`AddRotationProbe`](#Solution.AddRotationProbe)                                                                     | Creates a new RotationProbe                                                                                                  |
| [`AddShapeFinder`](#Solution.AddShapeFinder)                                                                         | Creates a new ShapeFinder                                                                                                    |
| [`AddShapeFinderElemental`](#Solution.AddShapeFinderElemental)                                                       | Creates a new ShapeFinderElemental                                                                                           |
| [`AddShearDamageVariable`](#Solution.AddShearDamageVariable)                                                         | Creates a new ShearDamageVariable                                                                                            |
| [`AddShearElasticStrain`](#Solution.AddShearElasticStrain)                                                           | Creates a new ShearElasticStrain                                                                                             |
| [`AddShearGasketPressure`](#Solution.AddShearGasketPressure)                                                         | Creates a new ShearGasketPressure                                                                                            |
| [`AddShearGasketTotalClosure`](#Solution.AddShearGasketTotalClosure)                                                 | Creates a new ShearGasketTotalClosure                                                                                        |
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
| [`AddTemperatureProbe`](#Solution.AddTemperatureProbe)                                                               | Creates a new TemperatureProbe                                                                                               |
| [`AddTemperature`](#Solution.AddTemperature)                                                                         | Creates a new TemperatureResult                                                                                              |
| [`AddThermalError`](#Solution.AddThermalError)                                                                       | Creates a new ThermalError                                                                                                   |
| [`AddThermalStrainEnergy`](#Solution.AddThermalStrainEnergy)                                                         | Creates a new ThermalStrainEnergy                                                                                            |
| [`AddTopologyDensity`](#Solution.AddTopologyDensity)                                                                 | Creates a new TopologyDensity                                                                                                |
| [`AddTopologyElementalDensity`](#Solution.AddTopologyElementalDensity)                                               | Creates a new TopologyElementalDensity                                                                                       |
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
| [`AddShearMomentDiagramMSUM`](#Solution.AddShearMomentDiagramMSUM)                                                   | Creates a new TotalShearMomentDiagram                                                                                        |
| [`AddShearMomentDiagramUSUM`](#Solution.AddShearMomentDiagramUSUM)                                                   | Creates a new TotalShearMomentDiagram                                                                                        |
| [`AddShearMomentDiagramVSUM`](#Solution.AddShearMomentDiagramVSUM)                                                   | Creates a new TotalShearMomentDiagram                                                                                        |
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
| [`AddVolume`](#Solution.AddVolume)                                                                                   | Creates a new Volume                                                                                                         |
| [`AddVolumeProbe`](#Solution.AddVolumeProbe)                                                                         | Creates a new VolumeProbe                                                                                                    |
| [`GetChildren`](#id1)                                                                                                | Gets the list of children, filtered by type.                                                                                 |
| [`GetChildren`](#id1)                                                                                                | Gets the list of children, filtered by type.                                                                                 |
| [`AddComment`](#Solution.AddComment)                                                                                 | Creates a new child Comment.                                                                                                 |
| [`AddFigure`](#Solution.AddFigure)                                                                                   | Creates a new child Figure.                                                                                                  |
| [`AddImage`](#Solution.AddImage)                                                                                     | Creates a new child Image.                                                                                                   |
| [`Solve`](#id2)                                                                                                      | Run the Solve action.                                                                                                        |
| [`Solve`](#id2)                                                                                                      | Run the Solve action.                                                                                                        |
| [`EvaluateAllResults`](#Solution.EvaluateAllResults)                                                                 | Run the EvaluateAllResults action.                                                                                           |
| [`GetResults`](#Solution.GetResults)                                                                                 | Gets the Results from the server.                                                                                            |
| [`ClearGeneratedData`](#Solution.ClearGeneratedData)                                                                 | Run the ClearGeneratedData action.                                                                                           |
| [`IsResultFileSameAsLoaded`](#Solution.IsResultFileSameAsLoaded)                                                     | Checks if the given result file is same the loaded result file                                                               |
| [`RelinkResultFile`](#Solution.RelinkResultFile)                                                                     | Relink the result file. This action allows repairing the result file referencing without altering the generated result data. |
| [`IsResultFileChanged`](#Solution.IsResultFileChanged)                                                               | Checks if the referenced result file has been changed.                                                                       |
| [`ReloadResultFile`](#Solution.ReloadResultFile)                                                                     | Reload the result file. For results-only systems, this action reloads the result mesh data and resets all result scopings.   |
| [`OpenSolverFilesDirectory`](#Solution.OpenSolverFilesDirectory)                                                     | Run the OpenSolverFilesDirectory action.                                                                                     |
| [`ReadGivenAnsysResultFile`](#Solution.ReadGivenAnsysResultFile)                                                     | Run the given Ansys ReadResults action.///                                                                                   |
| [`ReadGivenAnsysResultFileByReference`](#Solution.ReadGivenAnsysResultFileByReference)                               | Run the given Ansys ReadResults by reference action.///                                                                      |
| [`ReadAnsysResultFile`](#Solution.ReadAnsysResultFile)                                                               | Run the Ansys ReadResults action.                                                                                            |
| [`ExtractSolutionStatistics`](#Solution.ExtractSolutionStatistics)                                                   | ExtractSolutionStatistics method.                                                                                            |
| [`AddContactTool`](#Solution.AddContactTool)                                                                         | Creates a new ContactTool                                                                                                    |
| [`AddBoltTool`](#Solution.AddBoltTool)                                                                               | Creates a new BoltTool                                                                                                       |
| [`AddForceSummationProbe`](#Solution.AddForceSummationProbe)                                                         | Creates a new ForceSummationProbe                                                                                            |
| [`AddTorqueProbe`](#Solution.AddTorqueProbe)                                                                         | Creates a new TorqueProbe                                                                                                    |
| [`AddResponsePSDTool`](#Solution.AddResponsePSDTool)                                                                 | Creates a new ResponsePSDTool                                                                                                |
| [`AddForceReactionsForContactRegions`](#Solution.AddForceReactionsForContactRegions)                                 | AddForceReactionsForContactRegions method.                                                                                   |
| [`AddMomentReactionsForContactRegions`](#Solution.AddMomentReactionsForContactRegions)                               | AddMomentReactionsForContactRegions method.                                                                                  |
| [`AddReactionsForContactRegions`](#Solution.AddReactionsForContactRegions)                                           | AddReactionsForContactRegions method.                                                                                        |
| [`ValueForSolutionTracking`](#Solution.ValueForSolutionTracking)                                                     | ValueForSolutionTracking method.                                                                                             |
| [`DeleteRow`](#Solution.DeleteRow)                                                                                   | DeleteRow method.                                                                                                            |
| [`ValueForResultTracking`](#Solution.ValueForResultTracking)                                                         | ValueForResultTracking method.                                                                                               |
| [`FormatValue`](#Solution.FormatValue)                                                                               | FormatValue method.                                                                                                          |
| [`AddGroupedScopedCustomResult`](#Solution.AddGroupedScopedCustomResult)                                             | AddGroupedScopedCustomResult method.                                                                                         |
| [`AddGroupedScopedACPResults`](#Solution.AddGroupedScopedACPResults)                                                 | AddGroupedScopedACPResults method.                                                                                           |
| [`AddFatigueTool`](#Solution.AddFatigueTool)                                                                         | AddFatigueTool method.                                                                                                       |
| [`CreateResultsAtAllSets`](#Solution.CreateResultsAtAllSets)                                                         | CreateResultsAtAllSets method.                                                                                               |
| [`EvaluateAllContactTrackers`](#Solution.EvaluateAllContactTrackers)                                                 | EvaluateAllContactTrackers method.                                                                                           |
| [`EvaluateContactTracker`](#Solution.EvaluateContactTracker)                                                         | EvaluateContactTracker method.                                                                                               |
| [`ExecutePostCommands`](#id3)                                                                                        | Run Execute Post Commands for all post command objects.                                                                      |
| [`ExecutePostCommands`](#id3)                                                                                        | ExecutePostCommands method.                                                                                                  |
| [`FetchRemoteResults`](#Solution.FetchRemoteResults)                                                                 | FetchRemoteResults method.                                                                                                   |
| [`GenerateAdaptedMesh`](#Solution.GenerateAdaptedMesh)                                                               | GenerateAdaptedMesh method.                                                                                                  |
| [`ExportSubstructureInCPAFormat`](#Solution.ExportSubstructureInCPAFormat)                                           | Export Substructure to cpa file.                                                                                             |
| [`DisconnectRemoteJob`](#Solution.DisconnectRemoteJob)                                                               | DisconnectRemoteJob method.                                                                                                  |
| [`ReconnectRemoteJob`](#Solution.ReconnectRemoteJob)                                                                 | ReconnectRemoteJob method.                                                                                                   |
| [`ClearRemoteStorageData`](#Solution.ClearRemoteStorageData)                                                         | ClearRemoteStorageData method.                                                                                               |
| [`AddLineChart2D`](#Solution.AddLineChart2D)                                                                         | Creates a new LineChart2D                                                                                                    |
| [`AddAccelerationFrequencyResponse`](#Solution.AddAccelerationFrequencyResponse)                                     | Creates a new AccelerationFrequencyResponse                                                                                  |
| [`AddAccelerationPhaseResponse`](#Solution.AddAccelerationPhaseResponse)                                             | Creates a new AccelerationPhaseResponse                                                                                      |
| [`AddAccelerationProbe`](#Solution.AddAccelerationProbe)                                                             | Creates a new AccelerationProbe                                                                                              |
| [`AddAccelerationWaterfallDiagram`](#Solution.AddAccelerationWaterfallDiagram)                                       | Creates a new AccelerationWaterfallDiagram                                                                                   |
| [`AddAccumulatedEquivalentPlasticStrain`](#Solution.AddAccumulatedEquivalentPlasticStrain)                           | Creates a new AccumulatedEquivalentPlasticStrain                                                                             |
| [`AddAcousticAbsorptionCoefficient`](#Solution.AddAcousticAbsorptionCoefficient)                                     | Creates a new AcousticAbsorptionCoefficient                                                                                  |
| [`AddAcousticAWeightedSoundPressureLevel`](#Solution.AddAcousticAWeightedSoundPressureLevel)                         | Creates a new AcousticAWeightedSoundPressureLevel                                                                            |
| [`AddAcousticAWeightedSPLFrequencyResponse`](#Solution.AddAcousticAWeightedSPLFrequencyResponse)                     | Creates a new AcousticAWeightedSPLFrequencyResponse                                                                          |
| [`AddAcousticDiffuseSoundTransmissionLoss`](#Solution.AddAcousticDiffuseSoundTransmissionLoss)                       | Creates a new AcousticDiffuseSoundTransmissionLoss                                                                           |
| [`AddAcousticDirectionalVelocityResult`](#Solution.AddAcousticDirectionalVelocityResult)                             | Creates a new AcousticDirectionalVelocityResult                                                                              |
| [`AddAcousticFarFieldSPL`](#Solution.AddAcousticFarFieldSPL)                                                         | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldAWeightedSPL`](#Solution.AddAcousticFarFieldAWeightedSPL)                                       | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldMaximumPressure`](#Solution.AddAcousticFarFieldMaximumPressure)                                 | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldPhase`](#Solution.AddAcousticFarFieldPhase)                                                     | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldDirectivity`](#Solution.AddAcousticFarFieldDirectivity)                                         | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldMaximumScatteredPressure`](#Solution.AddAcousticFarFieldMaximumScatteredPressure)               | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldTargetStrength`](#Solution.AddAcousticFarFieldTargetStrength)                                   | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldSoundPowerLevel`](#Solution.AddAcousticFarFieldSoundPowerLevel)                                 | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldSPLMic`](#Solution.AddAcousticFarFieldSPLMic)                                                   | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldAWeightedSPLMic`](#Solution.AddAcousticFarFieldAWeightedSPLMic)                                 | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldMaximumPressureMic`](#Solution.AddAcousticFarFieldMaximumPressureMic)                           | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldPhaseMic`](#Solution.AddAcousticFarFieldPhaseMic)                                               | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldSoundPowerLevelWaterfallDiagram`](#Solution.AddAcousticFarFieldSoundPowerLevelWaterfallDiagram) | Creates a new AcousticFarFieldSoundPowerLevelWaterfallDiagram                                                                |
| [`AddAcousticFarFieldSPLMicWaterfallDiagram`](#Solution.AddAcousticFarFieldSPLMicWaterfallDiagram)                   | Creates a new AcousticFarFieldSPLMicWaterfallDiagram                                                                         |
| [`AddAcousticFrequencyBandAWeightedSPL`](#Solution.AddAcousticFrequencyBandAWeightedSPL)                             | Creates a new AcousticFrequencyBandAWeightedSPL                                                                              |
| [`AddAcousticFrequencyBandSPL`](#Solution.AddAcousticFrequencyBandSPL)                                               | Creates a new AcousticFrequencyBandSPL                                                                                       |
| [`AddAcousticKineticEnergy`](#Solution.AddAcousticKineticEnergy)                                                     | Creates a new AcousticKineticEnergy                                                                                          |
| [`AddAcousticKineticEnergyFrequencyResponse`](#Solution.AddAcousticKineticEnergyFrequencyResponse)                   | Creates a new AcousticKineticEnergyFrequencyResponse                                                                         |
| [`AddAcousticPotentialEnergy`](#Solution.AddAcousticPotentialEnergy)                                                 | Creates a new AcousticPotentialEnergy                                                                                        |
| [`AddAcousticPotentialEnergyFrequencyResponse`](#Solution.AddAcousticPotentialEnergyFrequencyResponse)               | Creates a new AcousticPotentialEnergyFrequencyResponse                                                                       |
| [`AddAcousticPressureFrequencyResponse`](#Solution.AddAcousticPressureFrequencyResponse)                             | Creates a new AcousticPressureFrequencyResponse                                                                              |
| [`AddAcousticPressureResult`](#Solution.AddAcousticPressureResult)                                                   | Creates a new AcousticPressureResult                                                                                         |
| [`AddAcousticReturnLoss`](#Solution.AddAcousticReturnLoss)                                                           | Creates a new AcousticReturnLoss                                                                                             |
| [`AddAcousticSoundPressureLevel`](#Solution.AddAcousticSoundPressureLevel)                                           | Creates a new AcousticSoundPressureLevel                                                                                     |
| [`AddAcousticSPLFrequencyResponse`](#Solution.AddAcousticSPLFrequencyResponse)                                       | Creates a new AcousticSPLFrequencyResponse                                                                                   |
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
| [`AddCampbellDiagram`](#Solution.AddCampbellDiagram)                                                                 | Creates a new CampbellDiagram                                                                                                |
| [`AddChargeReactionFrequencyResponse`](#Solution.AddChargeReactionFrequencyResponse)                                 | Creates a new ChargeReactionFrequencyResponse                                                                                |
| [`AddChargeReactionProbe`](#Solution.AddChargeReactionProbe)                                                         | Creates a new ChargeReactionProbe                                                                                            |
| [`AddCommandSnippet`](#Solution.AddCommandSnippet)                                                                   | Creates a new CommandSnippet                                                                                                 |
| [`AddCompositeCriterion`](#Solution.AddCompositeCriterion)                                                           | Creates a new CompositeCriterion                                                                                             |
| [`AddCompositeFailureTool`](#Solution.AddCompositeFailureTool)                                                       | Creates a new CompositeFailureTool                                                                                           |
| [`AddCompositeSamplingPointTool`](#Solution.AddCompositeSamplingPointTool)                                           | Creates a new CompositeSamplingPointTool                                                                                     |
| [`AddContactDistanceProbe`](#Solution.AddContactDistanceProbe)                                                       | Creates a new ContactDistanceProbe                                                                                           |
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
| [`AddShearMomentDiagramMY`](#Solution.AddShearMomentDiagramMY)                                                       | Creates a new DirectionalShearMomentDiagram                                                                                  |
| [`AddShearMomentDiagramMZ`](#Solution.AddShearMomentDiagramMZ)                                                       | Creates a new DirectionalShearMomentDiagram                                                                                  |
| [`AddShearMomentDiagramUY`](#Solution.AddShearMomentDiagramUY)                                                       | Creates a new DirectionalShearMomentDiagram                                                                                  |
| [`AddShearMomentDiagramUZ`](#Solution.AddShearMomentDiagramUZ)                                                       | Creates a new DirectionalShearMomentDiagram                                                                                  |
| [`AddShearMomentDiagramVY`](#Solution.AddShearMomentDiagramVY)                                                       | Creates a new DirectionalShearMomentDiagram                                                                                  |
| [`AddShearMomentDiagramVZ`](#Solution.AddShearMomentDiagramVZ)                                                       | Creates a new DirectionalShearMomentDiagram                                                                                  |
| [`AddThermalStrain`](#Solution.AddThermalStrain)                                                                     | Creates a new DirectionalThermalStrain                                                                                       |
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
| [`AddVoltageProbe`](#Solution.AddVoltageProbe)                                                                       | Creates a new ElectricVoltageProbe                                                                                           |
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
| [`Activate`](#Solution.Activate)                                                                                     | Activate the current object.                                                                                                 |
| [`CopyTo`](#Solution.CopyTo)                                                                                         | Copies all visible properties from this object to another.                                                                   |
| [`Duplicate`](#Solution.Duplicate)                                                                                   | Creates a copy of the current DataModelObject.                                                                               |
| [`GroupAllSimilarChildren`](#Solution.GroupAllSimilarChildren)                                                       | Run the GroupAllSimilarChildren action.                                                                                      |
| [`GroupSimilarObjects`](#Solution.GroupSimilarObjects)                                                               | Run the GroupSimilarObjects action.                                                                                          |
| [`PropertyByName`](#Solution.PropertyByName)                                                                         | Get a property by its unique name.                                                                                           |
| [`PropertyByAPIName`](#Solution.PropertyByAPIName)                                                                   | Get a property by its API name.                                                                                              |
| [`CreateParameter`](#Solution.CreateParameter)                                                                       | Creates a new parameter for a Property.                                                                                      |
| [`GetParameter`](#Solution.GetParameter)                                                                             | Gets the parameter corresponding to the given property.                                                                      |
| [`RemoveParameter`](#Solution.RemoveParameter)                                                                       | Removes the parameter from the parameter set corresponding to the given property.                                            |

### Properties

| [`SolutionInformation`](SolutionInformation.md#SolutionInformation)                                                 | Gets the SolutionInformation.                                                            |
|---------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`CellId`](#Solution.CellId)                                                                                        | Gets the CellId.                                                                         |
| [`WorkingDir`](#Solution.WorkingDir)                                                                                | Gets the WorkingDir.                                                                     |
| [`Status`](#Solution.Status)                                                                                        | Gets the Status.                                                                         |
| [`NumGPURequested`](#Solution.NumGPURequested)                                                                      | NumGPURequested property.                                                                |
| [`MemoryAvailable`](#Solution.MemoryAvailable)                                                                      | MemoryAvailable property.                                                                |
| [`EigenSolverType`](../../../Mechanical/DataModel/Enums/EigenSolverType.md#EigenSolverType)                         | EigenSolverType property.                                                                |
| [`NumCoresAvailable`](#Solution.NumCoresAvailable)                                                                  | NumCoresAvailable property.                                                              |
| [`NumProcRequested`](#Solution.NumProcRequested)                                                                    | NumProcRequested property.                                                               |
| [`IsDistributedSolution`](#Solution.IsDistributedSolution)                                                          | IsDistributedSolution property.                                                          |
| [`IsHybridParallelSolution`](#Solution.IsHybridParallelSolution)                                                    | IsHybridParallelSolution property.                                                       |
| [`IsAutoHybridParallel`](#Solution.IsAutoHybridParallel)                                                            | Returns if Hybrid Parallel was turned on by APDL or not (i.e. Automatic Hybrid Parallel) |
| [`ThreadsPerProcessRequested`](#Solution.ThreadsPerProcessRequested)                                                | ThreadsPerProcessRequested property.                                                     |
| [`NumberOfProcessesRequested`](#Solution.NumberOfProcessesRequested)                                                | NumberOfProcessesRequested property.                                                     |
| [`IsGPUAccelerationRequested`](#Solution.IsGPUAccelerationRequested)                                                | IsGPUAccelerationRequested property.                                                     |
| [`IsDataExtractionComplete`](#Solution.IsDataExtractionComplete)                                                    | IsDataExtractionComplete property.                                                       |
| [`IsEigenSolver`](#Solution.IsEigenSolver)                                                                          | IsEigenSolver property.                                                                  |
| [`IsUnsymmetricMatrixSolve`](#Solution.IsUnsymmetricMatrixSolve)                                                    | IsUnsymmetricMatrixSolve property.                                                       |
| [`GPUType`](#Solution.GPUType)                                                                                      | GPUType property.                                                                        |
| [`MPIType`](../../../Mechanical/DataModel/Enums/MPIType.md#MPIType)                                                 | MPIType property.                                                                        |
| [`EquationSolverType`](../../../Mechanical/DataModel/Enums/EquationSolverType.md#EquationSolverType)                | EquationSolverType property.                                                             |
| [`NumMachinesRequested`](#Solution.NumMachinesRequested)                                                            | NumMachinesRequested property.                                                           |
| [`MainThreadCPUTime`](#Solution.MainThreadCPUTime)                                                                  | MainThreadCPUTime property.                                                              |
| [`AllThreadsCPUTime`](#Solution.AllThreadsCPUTime)                                                                  | AllThreadsCPUTime property.                                                              |
| [`NumVirtualCoresAvailable`](#Solution.NumVirtualCoresAvailable)                                                    | NumVirtualCoresAvailable property.                                                       |
| [`ElapsedTime`](#Solution.ElapsedTime)                                                                              | ElapsedTime property.                                                                    |
| [`TotalMemoryUsed`](#Solution.TotalMemoryUsed)                                                                      | TotalMemoryUsed property.                                                                |
| [`ElementLoadBalRatio`](#Solution.ElementLoadBalRatio)                                                              | ElementLoadBalRatio property.                                                            |
| [`ProcessorModel`](#Solution.ProcessorModel)                                                                        | ProcessorModel property.                                                                 |
| [`OperatingSystem`](#Solution.OperatingSystem)                                                                      | OperatingSystem property.                                                                |
| [`SolverType`](../../../Mechanical/DataModel/Enums/SolverType.md#SolverType)                                        | SolverType property.                                                                     |
| [`License`](#Solution.License)                                                                                      | License property.                                                                        |
| [`Nodes`](#Solution.Nodes)                                                                                          | Nodes property.                                                                          |
| [`Elements`](#Solution.Elements)                                                                                    | Elements property.                                                                       |
| [`GpuAcceleration`](#Solution.GpuAcceleration)                                                                      | GpuAcceleration property.                                                                |
| [`LicenseCoresAvailable`](#Solution.LicenseCoresAvailable)                                                          | LicenseCoresAvailable property.                                                          |
| [`SolutionUnitSystem`](#Solution.SolutionUnitSystem)                                                                | SolutionUnitSystem property.                                                             |
| [`IOBound`](#Solution.IOBound)                                                                                      | IOBound property.                                                                        |
| [`IOWrite`](#Solution.IOWrite)                                                                                      | IOWrite property.                                                                        |
| [`IORead`](#Solution.IORead)                                                                                        | IORead property.                                                                         |
| [`MSUPHarmonicAnalysis`](#Solution.MSUPHarmonicAnalysis)                                                            | MSUPHarmonicAnalysis property.                                                           |
| [`TimeToCombineDistributedFiles`](#Solution.TimeToCombineDistributedFiles)                                          | TimeToCombineDistributedFiles property.                                                  |
| [`SolverData`](../../../Mechanical/DataModel/SolverData/SolverData.md#SolverData)                                   | SolverData property.                                                                     |
| [`DateOfRun`](#Solution.DateOfRun)                                                                                  | DateOfRun property.                                                                      |
| [`TimeOfRun`](#Solution.TimeOfRun)                                                                                  | TimeOfRun property.                                                                      |
| [`SolutionTrackingVectorLength`](#Solution.SolutionTrackingVectorLength)                                            | SolutionTrackingVectorLength property.                                                   |
| [`ResultTrackingVectorLength`](#Solution.ResultTrackingVectorLength)                                                | ResultTrackingVectorLength property.                                                     |
| [`ResultFilePath`](#Solution.ResultFilePath)                                                                        | Get the result file full path.                                                           |
| [`NumberOfDOF`](#Solution.NumberOfDOF)                                                                              | Get the Number of DOF.                                                                   |
| [`SparseMode`](#Solution.SparseMode)                                                                                | Get the Sparse Mode value.                                                               |
| [`SkipSolveCommand`](#Solution.SkipSolveCommand)                                                                    | Gets or sets the flag to avoid issuing the solve command in the MAPDL solver.            |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                       |
| [`CyclicSectorDisplayRangeBegin`](#Solution.CyclicSectorDisplayRangeBegin)                                          | Gets or sets the CyclicSectorDisplayRangeBegin.                                          |
| [`NumberofSectors`](#Solution.NumberofSectors)                                                                      | Gets or sets the NumberofSectors.                                                        |
| [`ElapsedRunTime`](#Solution.ElapsedRunTime)                                                                        | Gets or sets the ElapsedRunTime.                                                         |
| [`MaximumRefinementLoops`](#Solution.MaximumRefinementLoops)                                                        | Gets or sets the MaximumRefinementLoops.                                                 |
| [`MemoryUsed`](#Solution.MemoryUsed)                                                                                | Gets or sets the MemoryUsed.                                                             |
| [`RefinementDepth`](#Solution.RefinementDepth)                                                                      | Gets or sets the RefinementDepth.                                                        |
| [`ResultFileDirectory`](#Solution.ResultFileDirectory)                                                              | Gets the ResultFileDirectory.                                                            |
| [`ResultFileName`](#Solution.ResultFileName)                                                                        | Gets the ResultFileName.                                                                 |
| [`ResultFileSize`](#Solution.ResultFileSize)                                                                        | Gets the ResultFileSize.                                                                 |
| [`ResultFileTimestamp`](#Solution.ResultFileTimestamp)                                                              | Gets the ResultFileTimestamp.                                                            |
| [`ExportTopologyFile`](#Solution.ExportTopologyFile)                                                                | Gets or sets the ExportTopologyFile.                                                     |
| [`MeshSource`](#Solution.MeshSource)                                                                                | Gets or sets the MeshSource.                                                             |
| [`ElementSelection`](#Solution.ElementSelection)                                                                    | Gets or sets the ElementSelection.                                                       |
| [`ResultFileUnitSystem`](#Solution.ResultFileUnitSystem)                                                            | Gets the ResultFileUnitSystem.                                                           |
| [`CalculateBeamSectionResults`](#Solution.CalculateBeamSectionResults)                                              | Gets or sets the CalculateBeamSectionResults.                                            |
| [`TopologyResult`](#Solution.TopologyResult)                                                                        | Gets or sets the TopologyResult.                                                         |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                             |
| [`Children`](#Solution.Children)                                                                                    | Gets the list of children.                                                               |
| [`Comments`](#Solution.Comments)                                                                                    | Gets the list of associated comments.                                                    |
| [`Figures`](#Solution.Figures)                                                                                      | Gets the list of associated figures.                                                     |
| [`Images`](#Solution.Images)                                                                                        | Gets the list of associated images.                                                      |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                       |
| [`Properties`](#Solution.Properties)                                                                                | Gets the list of properties for this object.                                             |
| [`VisibleProperties`](#Solution.VisibleProperties)                                                                  | Gets the list of properties that are visible for this object.                            |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import Solution
```

## Property detail

### *property* Solution.SolutionInformation *: [Ansys.ACT.Automation.Mechanical.SolutionInformation](SolutionInformation.md#SolutionInformation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolutionInformation.

<!-- !! processed by numpydoc !! -->

### *property* Solution.CellId *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CellId.

<!-- !! processed by numpydoc !! -->

### *property* Solution.WorkingDir *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the WorkingDir.

<!-- !! processed by numpydoc !! -->

### *property* Solution.Status *: [Ansys.Mechanical.DataModel.Enums.SolutionStatusType](../../../Mechanical/DataModel/Enums/SolutionStatusType.md#SolutionStatusType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Status.

<!-- !! processed by numpydoc !! -->

### *property* Solution.NumGPURequested *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumGPURequested property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.MemoryAvailable *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

MemoryAvailable property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.EigenSolverType *: [Ansys.Mechanical.DataModel.Enums.EigenSolverType](../../../Mechanical/DataModel/Enums/EigenSolverType.md#EigenSolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* Solution.MPIType *: [Ansys.Mechanical.DataModel.Enums.MPIType](../../../Mechanical/DataModel/Enums/MPIType.md#MPIType) | [None](https://docs.python.org/3/library/constants.html#None)*

MPIType property.

<!-- !! processed by numpydoc !! -->

### *property* Solution.EquationSolverType *: [Ansys.Mechanical.DataModel.Enums.EquationSolverType](../../../Mechanical/DataModel/Enums/EquationSolverType.md#EquationSolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* Solution.SolverType *: [Ansys.Mechanical.DataModel.Enums.SolverType](../../../Mechanical/DataModel/Enums/SolverType.md#SolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* Solution.ExportTopologyFile *: [Ansys.Mechanical.DataModel.Enums.ExportTopologyFileOption](../../../Mechanical/DataModel/Enums/ExportTopologyFileOption.md#ExportTopologyFileOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportTopologyFile.

<!-- !! processed by numpydoc !! -->

### *property* Solution.MeshSource *: [Ansys.Mechanical.DataModel.Enums.MeshSourceType](../../../Mechanical/DataModel/Enums/MeshSourceType.md#MeshSourceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshSource.

<!-- !! processed by numpydoc !! -->

### *property* Solution.ElementSelection *: [Ansys.Mechanical.DataModel.Enums.ConvergenceControlType](../../../Mechanical/DataModel/Enums/ConvergenceControlType.md#ConvergenceControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementSelection.

<!-- !! processed by numpydoc !! -->

### *property* Solution.ResultFileUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultFileUnitSystem.

<!-- !! processed by numpydoc !! -->

### *property* Solution.CalculateBeamSectionResults *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateBeamSectionResults.

<!-- !! processed by numpydoc !! -->

### *property* Solution.TopologyResult *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopologyResult.

<!-- !! processed by numpydoc !! -->

### *property* Solution.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Solution.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Solution.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Solution.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Solution.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

## Method detail

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

### Solution.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Solution.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Solution.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Solution.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Solution.Solve(wait: System.Boolean, config: System.String)

Run the Solve action.

<!-- !! processed by numpydoc !! -->

### Solution.Solve(wait: System.Boolean, config: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolveConfiguration](../../Mechanical/Application/SolveProcessSettings/SolveConfiguration.md#SolveConfiguration))

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

### Solution.ReadGivenAnsysResultFile(resultFilePath: System.String, unitSystemID: [Ansys.Mechanical.DataModel.Enums.UnitSystemIDType](../../../Mechanical/DataModel/Enums/UnitSystemIDType.md#UnitSystemIDType))

Run the given Ansys ReadResults action.///

<!-- !! processed by numpydoc !! -->

### Solution.ReadGivenAnsysResultFileByReference(resultFilePath: System.String, unitSystemID: [Ansys.Mechanical.DataModel.Enums.UnitSystemIDType](../../../Mechanical/DataModel/Enums/UnitSystemIDType.md#UnitSystemIDType))

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

### Solution.AddGroupedScopedACPResults(resultType: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../Mechanical/DataModel/Enums/ResultType.md#ResultType), selectedPlies: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

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

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

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
