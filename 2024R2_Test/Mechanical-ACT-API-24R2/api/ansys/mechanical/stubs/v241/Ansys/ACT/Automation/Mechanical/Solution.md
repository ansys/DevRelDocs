# `Solution`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Solution

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Solution.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [`Solve`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#id1)                                                                                                      | Run the Solve action.                                                                                                        |
| [`Solve`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#id1)                                                                                                      | Run the Solve action.                                                                                                        |
| [`EvaluateAllResults`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.EvaluateAllResults)                                                                 | Run the EvaluateAllResults action.                                                                                           |
| [`GetResults`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.GetResults)                                                                                 | Gets the Results from the server.                                                                                            |
| [`ClearGeneratedData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.ClearGeneratedData)                                                                 | Run the ClearGeneratedData action.                                                                                           |
| [`IsResultFileSameAsLoaded`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.IsResultFileSameAsLoaded)                                                     | Checks if the given result file is same the loaded result file                                                               |
| [`RelinkResultFile`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.RelinkResultFile)                                                                     | Relink the result file. This action allows repairing the result file referencing without altering the generated result data. |
| [`IsResultFileChanged`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.IsResultFileChanged)                                                               | Checks if the referenced result file has been changed.                                                                       |
| [`ReloadResultFile`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.ReloadResultFile)                                                                     | Reload the result file. For results-only systems, this action reloads the result mesh data and resets all result scopings.   |
| [`OpenSolverFilesDirectory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.OpenSolverFilesDirectory)                                                     | Run the OpenSolverFilesDirectory action.                                                                                     |
| [`ReadGivenAnsysResultFile`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.ReadGivenAnsysResultFile)                                                     | Run the given Ansys ReadResults action.///                                                                                   |
| [`ReadGivenAnsysResultFileByReference`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.ReadGivenAnsysResultFileByReference)                               | Run the given Ansys ReadResults by reference action.///                                                                      |
| [`ReadAnsysResultFile`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.ReadAnsysResultFile)                                                               | Run the Ansys ReadResults action.                                                                                            |
| [`ExtractSolutionStatistics`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.ExtractSolutionStatistics)                                                   | ExtractSolutionStatistics method.                                                                                            |
| [`AddContactTool`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddContactTool)                                                                         | Creates a new ContactTool                                                                                                    |
| [`AddBoltTool`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddBoltTool)                                                                               | Creates a new BoltTool                                                                                                       |
| [`AddForceSummationProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddForceSummationProbe)                                                         | Creates a new ForceSummationProbe                                                                                            |
| [`AddTorqueProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddTorqueProbe)                                                                         | Creates a new TorqueProbe                                                                                                    |
| [`AddResponsePSDTool`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddResponsePSDTool)                                                                 | Creates a new ResponsePSDTool                                                                                                |
| [`AddForceReactionsForContactRegions`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddForceReactionsForContactRegions)                                 | AddForceReactionsForContactRegions method.                                                                                   |
| [`AddMomentReactionsForContactRegions`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMomentReactionsForContactRegions)                               | AddMomentReactionsForContactRegions method.                                                                                  |
| [`AddReactionsForContactRegions`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddReactionsForContactRegions)                                           | AddReactionsForContactRegions method.                                                                                        |
| [`ValueForSolutionTracking`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.ValueForSolutionTracking)                                                     | ValueForSolutionTracking method.                                                                                             |
| [`DeleteRow`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.DeleteRow)                                                                                   | DeleteRow method.                                                                                                            |
| [`ValueForResultTracking`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.ValueForResultTracking)                                                         | ValueForResultTracking method.                                                                                               |
| [`FormatValue`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.FormatValue)                                                                               | FormatValue method.                                                                                                          |
| [`AddGroupedScopedCustomResult`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddGroupedScopedCustomResult)                                             | AddGroupedScopedCustomResult method.                                                                                         |
| [`AddGroupedScopedACPResults`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddGroupedScopedACPResults)                                                 | AddGroupedScopedACPResults method.                                                                                           |
| [`AddFatigueTool`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddFatigueTool)                                                                         | AddFatigueTool method.                                                                                                       |
| [`CreateResultsAtAllSets`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.CreateResultsAtAllSets)                                                         | CreateResultsAtAllSets method.                                                                                               |
| [`EvaluateAllContactTrackers`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.EvaluateAllContactTrackers)                                                 | EvaluateAllContactTrackers method.                                                                                           |
| [`EvaluateContactTracker`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.EvaluateContactTracker)                                                         | EvaluateContactTracker method.                                                                                               |
| [`ExecutePostCommands`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#id2)                                                                                        | Run Execute Post Commands for all post command objects.                                                                      |
| [`ExecutePostCommands`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#id2)                                                                                        | ExecutePostCommands method.                                                                                                  |
| [`FetchRemoteResults`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.FetchRemoteResults)                                                                 | FetchRemoteResults method.                                                                                                   |
| [`GenerateAdaptedMesh`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.GenerateAdaptedMesh)                                                               | GenerateAdaptedMesh method.                                                                                                  |
| [`ExportSubstructureInCPAFormat`](#Solution.ExportSubstructureInCPAFormat)                                                                                                          | Export Substructure to cpa file.                                                                                             |
| [`DisconnectRemoteJob`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.DisconnectRemoteJob)                                                               | DisconnectRemoteJob method.                                                                                                  |
| [`ReconnectRemoteJob`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.ReconnectRemoteJob)                                                                 | ReconnectRemoteJob method.                                                                                                   |
| [`ClearRemoteStorageData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.ClearRemoteStorageData)                                                         | ClearRemoteStorageData method.                                                                                               |
| [`AddLineChart2D`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddLineChart2D)                                                                         | Creates a new LineChart2D                                                                                                    |
| [`AddAccelerationFrequencyResponse`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAccelerationFrequencyResponse)                                     | Creates a new AccelerationFrequencyResponse                                                                                  |
| [`AddAccelerationPhaseResponse`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAccelerationPhaseResponse)                                             | Creates a new AccelerationPhaseResponse                                                                                      |
| [`AddAccelerationProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAccelerationProbe)                                                             | Creates a new AccelerationProbe                                                                                              |
| [`AddAccelerationWaterfallDiagram`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAccelerationWaterfallDiagram)                                       | Creates a new AccelerationWaterfallDiagram                                                                                   |
| [`AddAccumulatedEquivalentPlasticStrain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAccumulatedEquivalentPlasticStrain)                           | Creates a new AccumulatedEquivalentPlasticStrain                                                                             |
| [`AddAcousticAbsorptionCoefficient`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticAbsorptionCoefficient)                                     | Creates a new AcousticAbsorptionCoefficient                                                                                  |
| [`AddAcousticAWeightedSoundPressureLevel`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticAWeightedSoundPressureLevel)                         | Creates a new AcousticAWeightedSoundPressureLevel                                                                            |
| [`AddAcousticAWeightedSPLFrequencyResponse`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticAWeightedSPLFrequencyResponse)                     | Creates a new AcousticAWeightedSPLFrequencyResponse                                                                          |
| [`AddAcousticDiffuseSoundTransmissionLoss`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticDiffuseSoundTransmissionLoss)                       | Creates a new AcousticDiffuseSoundTransmissionLoss                                                                           |
| [`AddAcousticDirectionalVelocityResult`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticDirectionalVelocityResult)                             | Creates a new AcousticDirectionalVelocityResult                                                                              |
| [`AddAcousticFarFieldSPL`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticFarFieldSPL)                                                         | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldAWeightedSPL`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticFarFieldAWeightedSPL)                                       | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldMaximumPressure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticFarFieldMaximumPressure)                                 | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldPhase`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticFarFieldPhase)                                                     | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldDirectivity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticFarFieldDirectivity)                                         | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldMaximumScatteredPressure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticFarFieldMaximumScatteredPressure)               | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldTargetStrength`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticFarFieldTargetStrength)                                   | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldSoundPowerLevel`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticFarFieldSoundPowerLevel)                                 | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldSPLMic`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticFarFieldSPLMic)                                                   | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldAWeightedSPLMic`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticFarFieldAWeightedSPLMic)                                 | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldMaximumPressureMic`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticFarFieldMaximumPressureMic)                           | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldPhaseMic`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticFarFieldPhaseMic)                                               | Creates a new AcousticFarFieldResult                                                                                         |
| [`AddAcousticFarFieldSoundPowerLevelWaterfallDiagram`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticFarFieldSoundPowerLevelWaterfallDiagram) | Creates a new AcousticFarFieldSoundPowerLevelWaterfallDiagram                                                                |
| [`AddAcousticFarFieldSPLMicWaterfallDiagram`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticFarFieldSPLMicWaterfallDiagram)                   | Creates a new AcousticFarFieldSPLMicWaterfallDiagram                                                                         |
| [`AddAcousticFrequencyBandAWeightedSPL`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticFrequencyBandAWeightedSPL)                             | Creates a new AcousticFrequencyBandAWeightedSPL                                                                              |
| [`AddAcousticFrequencyBandSPL`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticFrequencyBandSPL)                                               | Creates a new AcousticFrequencyBandSPL                                                                                       |
| [`AddAcousticKineticEnergy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticKineticEnergy)                                                     | Creates a new AcousticKineticEnergy                                                                                          |
| [`AddAcousticKineticEnergyFrequencyResponse`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticKineticEnergyFrequencyResponse)                   | Creates a new AcousticKineticEnergyFrequencyResponse                                                                         |
| [`AddAcousticPotentialEnergy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticPotentialEnergy)                                                 | Creates a new AcousticPotentialEnergy                                                                                        |
| [`AddAcousticPotentialEnergyFrequencyResponse`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticPotentialEnergyFrequencyResponse)               | Creates a new AcousticPotentialEnergyFrequencyResponse                                                                       |
| [`AddAcousticPressureFrequencyResponse`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticPressureFrequencyResponse)                             | Creates a new AcousticPressureFrequencyResponse                                                                              |
| [`AddAcousticPressureResult`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticPressureResult)                                                   | Creates a new AcousticPressureResult                                                                                         |
| [`AddAcousticReturnLoss`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticReturnLoss)                                                           | Creates a new AcousticReturnLoss                                                                                             |
| [`AddAcousticSoundPressureLevel`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticSoundPressureLevel)                                           | Creates a new AcousticSoundPressureLevel                                                                                     |
| [`AddAcousticSPLFrequencyResponse`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticSPLFrequencyResponse)                                       | Creates a new AcousticSPLFrequencyResponse                                                                                   |
| [`AddAcousticTotalVelocityResult`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticTotalVelocityResult)                                         | Creates a new AcousticTotalVelocityResult                                                                                    |
| [`AddAcousticTransmissionLoss`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticTransmissionLoss)                                               | Creates a new AcousticTransmissionLoss                                                                                       |
| [`AddAcousticVelocityFrequencyResponse`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAcousticVelocityFrequencyResponse)                             | Creates a new AcousticVelocityFrequencyResponse                                                                              |
| [`AddAngularAccelerationProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAngularAccelerationProbe)                                               | Creates a new AngularAccelerationProbe                                                                                       |
| [`AddAngularVelocityProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddAngularVelocityProbe)                                                       | Creates a new AngularVelocityProbe                                                                                           |
| [`AddBeamProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddBeamProbe)                                                                             | Creates a new BeamProbe                                                                                                      |
| [`AddBeamTool`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddBeamTool)                                                                               | Creates a new BeamTool                                                                                                       |
| [`AddBearingProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddBearingProbe)                                                                       | Creates a new BearingProbe                                                                                                   |
| [`AddBendingStressEquivalent`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddBendingStressEquivalent)                                                 | Creates a new BendingStressEquivalent                                                                                        |
| [`AddBendingStressIntensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddBendingStressIntensity)                                                   | Creates a new BendingStressIntensity                                                                                         |
| [`AddBoltPretensionProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddBoltPretensionProbe)                                                         | Creates a new BoltPretensionProbe                                                                                            |
| [`AddCampbellDiagram`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddCampbellDiagram)                                                                 | Creates a new CampbellDiagram                                                                                                |
| [`AddChargeReactionFrequencyResponse`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddChargeReactionFrequencyResponse)                                 | Creates a new ChargeReactionFrequencyResponse                                                                                |
| [`AddChargeReactionProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddChargeReactionProbe)                                                         | Creates a new ChargeReactionProbe                                                                                            |
| [`AddCommandSnippet`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddCommandSnippet)                                                                   | Creates a new CommandSnippet                                                                                                 |
| [`AddCompositeCriterion`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddCompositeCriterion)                                                           | Creates a new CompositeCriterion                                                                                             |
| [`AddCompositeFailureTool`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddCompositeFailureTool)                                                       | Creates a new CompositeFailureTool                                                                                           |
| [`AddCompositeSamplingPointTool`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddCompositeSamplingPointTool)                                           | Creates a new CompositeSamplingPointTool                                                                                     |
| [`AddContactDistanceProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddContactDistanceProbe)                                                       | Creates a new ContactDistanceProbe                                                                                           |
| [`AddCurrentDensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddCurrentDensity)                                                                   | Creates a new CurrentDensity                                                                                                 |
| [`AddCurrentDensityProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddCurrentDensityProbe)                                                         | Creates a new CurrentDensityProbe                                                                                            |
| [`AddDamageStatus`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddDamageStatus)                                                                       | Creates a new DamageStatus                                                                                                   |
| [`AddDeformationFrequencyResponse`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddDeformationFrequencyResponse)                                       | Creates a new DeformationFrequencyResponse                                                                                   |
| [`AddDeformationPhaseResponse`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddDeformationPhaseResponse)                                               | Creates a new DeformationPhaseResponse                                                                                       |
| [`AddDeformationProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddDeformationProbe)                                                               | Creates a new DeformationProbe                                                                                               |
| [`AddDirectionalAcceleration`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddDirectionalAcceleration)                                                 | Creates a new DirectionalAcceleration                                                                                        |
| [`AddDirectionalAccelerationPSD`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddDirectionalAccelerationPSD)                                           | Creates a new DirectionalAccelerationPSD                                                                                     |
| [`AddDirectionalAccelerationRS`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddDirectionalAccelerationRS)                                             | Creates a new DirectionalAccelerationRS                                                                                      |
| [`AddDirectionalAxialForce`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddDirectionalAxialForce)                                                     | Creates a new DirectionalAxialForce                                                                                          |
| [`AddDirectionalBendingMoment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddDirectionalBendingMoment)                                               | Creates a new DirectionalBendingMoment                                                                                       |
| [`AddDirectionalCurrentDensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddDirectionalCurrentDensity)                                             | Creates a new DirectionalCurrentDensity                                                                                      |
| [`AddDirectionalDeformation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddDirectionalDeformation)                                                   | Creates a new DirectionalDeformation                                                                                         |
| [`AddDirectionalElectricFieldIntensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddDirectionalElectricFieldIntensity)                             | Creates a new DirectionalElectricFieldIntensity                                                                              |
| [`AddDirectionalElectricFluxDensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddDirectionalElectricFluxDensity)                                   | Creates a new DirectionalElectricFluxDensity                                                                                 |
| [`AddDirectionalElectrostaticForce`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddDirectionalElectrostaticForce)                                     | Creates a new DirectionalElectrostaticForce                                                                                  |
| [`AddDirectionalHeatFlux`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddDirectionalHeatFlux)                                                         | Creates a new DirectionalHeatFlux                                                                                            |
| [`AddDirectionalMagneticFieldIntensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddDirectionalMagneticFieldIntensity)                             | Creates a new DirectionalMagneticFieldIntensity                                                                              |
| [`AddDirectionalMagneticFluxDensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddDirectionalMagneticFluxDensity)                                   | Creates a new DirectionalMagneticFluxDensity                                                                                 |
| [`AddDirectionalShearForce`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddDirectionalShearForce)                                                     | Creates a new DirectionalShearForce                                                                                          |
| [`AddShearMomentDiagramMY`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddShearMomentDiagramMY)                                                       | Creates a new DirectionalShearMomentDiagram                                                                                  |
| [`AddShearMomentDiagramMZ`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddShearMomentDiagramMZ)                                                       | Creates a new DirectionalShearMomentDiagram                                                                                  |
| [`AddShearMomentDiagramUY`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddShearMomentDiagramUY)                                                       | Creates a new DirectionalShearMomentDiagram                                                                                  |
| [`AddShearMomentDiagramUZ`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddShearMomentDiagramUZ)                                                       | Creates a new DirectionalShearMomentDiagram                                                                                  |
| [`AddShearMomentDiagramVY`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddShearMomentDiagramVY)                                                       | Creates a new DirectionalShearMomentDiagram                                                                                  |
| [`AddShearMomentDiagramVZ`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddShearMomentDiagramVZ)                                                       | Creates a new DirectionalShearMomentDiagram                                                                                  |
| [`AddThermalStrain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddThermalStrain)                                                                     | Creates a new DirectionalThermalStrain                                                                                       |
| [`AddDirectionalTorsionalMoment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddDirectionalTorsionalMoment)                                           | Creates a new DirectionalTorsionalMoment                                                                                     |
| [`AddDirectionalVelocity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddDirectionalVelocity)                                                         | Creates a new DirectionalVelocity                                                                                            |
| [`AddDirectionalVelocityPSD`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddDirectionalVelocityPSD)                                                   | Creates a new DirectionalVelocityPSD                                                                                         |
| [`AddDirectionalVelocityRS`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddDirectionalVelocityRS)                                                     | Creates a new DirectionalVelocityRS                                                                                          |
| [`AddElasticStrainFrequencyResponse`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddElasticStrainFrequencyResponse)                                   | Creates a new ElasticStrainFrequencyResponse                                                                                 |
| [`AddElasticStrainIntensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddElasticStrainIntensity)                                                   | Creates a new ElasticStrainIntensity                                                                                         |
| [`AddElasticStrainPhaseResponse`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddElasticStrainPhaseResponse)                                           | Creates a new ElasticStrainPhaseResponse                                                                                     |
| [`AddElectricFieldProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddElectricFieldProbe)                                                           | Creates a new ElectricFieldProbe                                                                                             |
| [`AddElectricPotential`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddElectricPotential)                                                             | Creates a new ElectricPotential                                                                                              |
| [`AddElectricVoltage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddElectricVoltage)                                                                 | Creates a new ElectricVoltage                                                                                                |
| [`AddVoltageProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddVoltageProbe)                                                                       | Creates a new ElectricVoltageProbe                                                                                           |
| [`AddElectromechanicalCouplingCoefficient`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddElectromechanicalCouplingCoefficient)                       | Creates a new ElectromechanicalCouplingCoefficient                                                                           |
| [`AddElementalEulerXYAngle`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddElementalEulerXYAngle)                                                     | Creates a new ElementalEulerXYAngle                                                                                          |
| [`AddElementalEulerXZAngle`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddElementalEulerXZAngle)                                                     | Creates a new ElementalEulerXZAngle                                                                                          |
| [`AddElementalEulerYZAngle`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddElementalEulerYZAngle)                                                     | Creates a new ElementalEulerYZAngle                                                                                          |
| [`AddElementalStrainEnergy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddElementalStrainEnergy)                                                     | Creates a new ElementalStrainEnergy                                                                                          |
| [`AddElementalTriads`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddElementalTriads)                                                                 | Creates a new ElementalTriads                                                                                                |
| [`AddEmagReactionProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddEmagReactionProbe)                                                             | Creates a new EmagReactionProbe                                                                                              |
| [`AddEnergyDissipatedPerUnitVolume`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddEnergyDissipatedPerUnitVolume)                                     | Creates a new EnergyDissipatedPerUnitVolume                                                                                  |
| [`AddEnergyProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddEnergyProbe)                                                                         | Creates a new EnergyProbe                                                                                                    |
| [`AddEquivalentCreepStrain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddEquivalentCreepStrain)                                                     | Creates a new EquivalentCreepStrain                                                                                          |
| [`AddEquivalentCreepStrainRST`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddEquivalentCreepStrainRST)                                               | Creates a new EquivalentCreepStrainRST                                                                                       |
| [`AddEquivalentElasticStrain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddEquivalentElasticStrain)                                                 | Creates a new EquivalentElasticStrain                                                                                        |
| [`AddEquivalentElasticStrainRST`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddEquivalentElasticStrainRST)                                           | Creates a new EquivalentElasticStrainRST                                                                                     |
| [`AddEquivalentPlasticStrain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddEquivalentPlasticStrain)                                                 | Creates a new EquivalentPlasticStrain                                                                                        |
| [`AddEquivalentPlasticStrainRST`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddEquivalentPlasticStrainRST)                                           | Creates a new EquivalentPlasticStrainRST                                                                                     |
| [`AddEquivalentRadiatedPower`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddEquivalentRadiatedPower)                                                 | Creates a new EquivalentRadiatedPower                                                                                        |
| [`AddEquivalentRadiatedPowerLevel`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddEquivalentRadiatedPowerLevel)                                       | Creates a new EquivalentRadiatedPowerLevel                                                                                   |
| [`AddEquivalentRadiatedPowerLevelWaterfallDiagram`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddEquivalentRadiatedPowerLevelWaterfallDiagram)       | Creates a new EquivalentRadiatedPowerLevelWaterfallDiagram                                                                   |
| [`AddEquivalentRadiatedPowerWaterfallDiagram`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddEquivalentRadiatedPowerWaterfallDiagram)                 | Creates a new EquivalentRadiatedPowerWaterfallDiagram                                                                        |
| [`AddEquivalentStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddEquivalentStress)                                                               | Creates a new EquivalentStress                                                                                               |
| [`AddEquivalentStressPSD`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddEquivalentStressPSD)                                                         | Creates a new EquivalentStressPSD                                                                                            |
| [`AddEquivalentStressRS`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddEquivalentStressRS)                                                           | Creates a new EquivalentStressRS                                                                                             |
| [`AddEquivalentTotalStrain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddEquivalentTotalStrain)                                                     | Creates a new EquivalentTotalStrain                                                                                          |
| [`AddExpansionSettings`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddExpansionSettings)                                                             | Creates a new ExpansionSettings                                                                                              |
| [`AddFiberCompressiveDamageVariable`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddFiberCompressiveDamageVariable)                                   | Creates a new FiberCompressiveDamageVariable                                                                                 |
| [`AddFiberCompressiveFailureCriterion`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddFiberCompressiveFailureCriterion)                               | Creates a new FiberCompressiveFailureCriterion                                                                               |
| [`AddFiberTensileDamageVariable`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddFiberTensileDamageVariable)                                           | Creates a new FiberTensileDamageVariable                                                                                     |
| [`AddFiberTensileFailureCriterion`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddFiberTensileFailureCriterion)                                       | Creates a new FiberTensileFailureCriterion                                                                                   |
| [`AddFieldIntensityProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddFieldIntensityProbe)                                                         | Creates a new FieldIntensityProbe                                                                                            |
| [`AddFlexibleRotationProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddFlexibleRotationProbe)                                                     | Creates a new FlexibleRotationProbe                                                                                          |
| [`AddFluidFlowRate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddFluidFlowRate)                                                                     | Creates a new FluidFlowRate                                                                                                  |
| [`AddFluidHeatConductionRate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddFluidHeatConductionRate)                                                 | Creates a new FluidHeatConductionRate                                                                                        |
| [`AddFluidHeatTransportRate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddFluidHeatTransportRate)                                                   | Creates a new FluidHeatTransportRate                                                                                         |
| [`AddFluxDensityProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddFluxDensityProbe)                                                               | Creates a new FluxDensityProbe                                                                                               |
| [`AddFluxLinkage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddFluxLinkage)                                                                         | Creates a new FluxLinkage                                                                                                    |
| [`AddForceReaction`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddForceReaction)                                                                     | Creates a new ForceReaction                                                                                                  |
| [`AddForceReactionFrequencyResponse`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddForceReactionFrequencyResponse)                                   | Creates a new ForceReactionFrequencyResponse                                                                                 |
| [`AddFractureTool`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddFractureTool)                                                                       | Creates a new FractureTool                                                                                                   |
| [`AddGeneralizedPlaneStrainProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddGeneralizedPlaneStrainProbe)                                         | Creates a new GeneralizedPlaneStrainProbe                                                                                    |
| [`AddHeatFluxProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddHeatFluxProbe)                                                                     | Creates a new HeatFluxProbe                                                                                                  |
| [`AddImpedanceFrequencyResponse`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddImpedanceFrequencyResponse)                                           | Creates a new ImpedanceFrequencyResponse                                                                                     |
| [`AddImpedanceProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddImpedanceProbe)                                                                   | Creates a new ImpedanceProbe                                                                                                 |
| [`AddInductance`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddInductance)                                                                           | Creates a new Inductance                                                                                                     |
| [`AddJointProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddJointProbe)                                                                           | Creates a new JointProbe                                                                                                     |
| [`AddJouleHeat`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddJouleHeat)                                                                             | Creates a new JouleHeat                                                                                                      |
| [`AddJouleHeatProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddJouleHeatProbe)                                                                   | Creates a new JouleHeatProbe                                                                                                 |
| [`AddLatticeDensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddLatticeDensity)                                                                   | Creates a new LatticeDensity                                                                                                 |
| [`AddLatticeElementalDensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddLatticeElementalDensity)                                                 | Creates a new LatticeElementalDensity                                                                                        |
| [`AddLinearizedEquivalentStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddLinearizedEquivalentStress)                                           | Creates a new LinearizedEquivalentStress                                                                                     |
| [`AddLinearizedMaximumPrincipalStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddLinearizedMaximumPrincipalStress)                               | Creates a new LinearizedMaximumPrincipalStress                                                                               |
| [`AddLinearizedMaximumShearStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddLinearizedMaximumShearStress)                                       | Creates a new LinearizedMaximumShearStress                                                                                   |
| [`AddLinearizedMiddlePrincipalStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddLinearizedMiddlePrincipalStress)                                 | Creates a new LinearizedMiddlePrincipalStress                                                                                |
| [`AddLinearizedMinimumPrincipalStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddLinearizedMinimumPrincipalStress)                               | Creates a new LinearizedMinimumPrincipalStress                                                                               |
| [`AddLinearizedNormalStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddLinearizedNormalStress)                                                   | Creates a new LinearizedNormalStress                                                                                         |
| [`AddLinearizedShearStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddLinearizedShearStress)                                                     | Creates a new LinearizedShearStress                                                                                          |
| [`AddLinearizedStressIntensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddLinearizedStressIntensity)                                             | Creates a new LinearizedStressIntensity                                                                                      |
| [`AddLinePressureResult`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddLinePressureResult)                                                           | Creates a new LinePressureResult                                                                                             |
| [`AddMagneticCoenergy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMagneticCoenergy)                                                               | Creates a new MagneticCoenergy                                                                                               |
| [`AddMagneticDirectionalForces`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMagneticDirectionalForces)                                             | Creates a new MagneticDirectionalForces                                                                                      |
| [`AddMagneticError`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMagneticError)                                                                     | Creates a new MagneticError                                                                                                  |
| [`AddMagneticFluxProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMagneticFluxProbe)                                                             | Creates a new MagneticFluxProbe                                                                                              |
| [`AddMagneticPotential`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMagneticPotential)                                                             | Creates a new MagneticPotential                                                                                              |
| [`AddMagneticTotalForces`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMagneticTotalForces)                                                         | Creates a new MagneticTotalForces                                                                                            |
| [`AddMatrixCompressiveDamageVariable`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMatrixCompressiveDamageVariable)                                 | Creates a new MatrixCompressiveDamageVariable                                                                                |
| [`AddMatrixCompressiveFailureCriterion`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMatrixCompressiveFailureCriterion)                             | Creates a new MatrixCompressiveFailureCriterion                                                                              |
| [`AddMatrixTensileDamageVariable`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMatrixTensileDamageVariable)                                         | Creates a new MatrixTensileDamageVariable                                                                                    |
| [`AddMatrixTensileFailureCriterion`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMatrixTensileFailureCriterion)                                     | Creates a new MatrixTensileFailureCriterion                                                                                  |
| [`AddMaximumFailureCriteria`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMaximumFailureCriteria)                                                   | Creates a new MaximumFailureCriteria                                                                                         |
| [`AddMaximumPrincipalElasticStrain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMaximumPrincipalElasticStrain)                                     | Creates a new MaximumPrincipalElasticStrain                                                                                  |
| [`AddMaximumPrincipalStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMaximumPrincipalStress)                                                   | Creates a new MaximumPrincipalStress                                                                                         |
| [`AddMaximumPrincipalThermalStrain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMaximumPrincipalThermalStrain)                                     | Creates a new MaximumPrincipalThermalStrain                                                                                  |
| [`AddMaximumShearElasticStrain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMaximumShearElasticStrain)                                             | Creates a new MaximumShearElasticStrain                                                                                      |
| [`AddMaximumShearStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMaximumShearStress)                                                           | Creates a new MaximumShearStress                                                                                             |
| [`AddMCFWaterfallDiagram`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMCFWaterfallDiagram)                                                         | Creates a new MCFWaterfallDiagram                                                                                            |
| [`AddMembraneStressEquivalent`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMembraneStressEquivalent)                                               | Creates a new MembraneStressEquivalent                                                                                       |
| [`AddMembraneStressIntensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMembraneStressIntensity)                                                 | Creates a new MembraneStressIntensity                                                                                        |
| [`AddMiddlePrincipalElasticStrain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMiddlePrincipalElasticStrain)                                       | Creates a new MiddlePrincipalElasticStrain                                                                                   |
| [`AddMiddlePrincipalStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMiddlePrincipalStress)                                                     | Creates a new MiddlePrincipalStress                                                                                          |
| [`AddMiddlePrincipalThermalStrain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMiddlePrincipalThermalStrain)                                       | Creates a new MiddlePrincipalThermalStrain                                                                                   |
| [`AddMinimumPrincipalElasticStrain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMinimumPrincipalElasticStrain)                                     | Creates a new MinimumPrincipalElasticStrain                                                                                  |
| [`AddMinimumPrincipalStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMinimumPrincipalStress)                                                   | Creates a new MinimumPrincipalStress                                                                                         |
| [`AddMomentReaction`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMomentReaction)                                                                   | Creates a new MomentReaction                                                                                                 |
| [`AddMullinsDamageVariable`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMullinsDamageVariable)                                                     | Creates a new MullinsDamageVariable                                                                                          |
| [`AddMullinsMaximumPreviousStrainEnergy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddMullinsMaximumPreviousStrainEnergy)                           | Creates a new MullinsMaximumPreviousStrainEnergy                                                                             |
| [`AddNewtonRaphsonResidualCharge`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddNewtonRaphsonResidualCharge)                                         | Creates a new NewtonRaphsonResidualCharge                                                                                    |
| [`AddNewtonRaphsonResidualForce`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddNewtonRaphsonResidualForce)                                           | Creates a new NewtonRaphsonResidualForce                                                                                     |
| [`AddNewtonRaphsonResidualHeat`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddNewtonRaphsonResidualHeat)                                             | Creates a new NewtonRaphsonResidualHeat                                                                                      |
| [`AddNewtonRaphsonResidualMoment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddNewtonRaphsonResidualMoment)                                         | Creates a new NewtonRaphsonResidualMoment                                                                                    |
| [`AddNodalEulerXYAngle`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddNodalEulerXYAngle)                                                             | Creates a new NodalEulerXYAngle                                                                                              |
| [`AddNodalEulerXZAngle`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddNodalEulerXZAngle)                                                             | Creates a new NodalEulerXZAngle                                                                                              |
| [`AddNodalEulerYZAngle`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddNodalEulerYZAngle)                                                             | Creates a new NodalEulerYZAngle                                                                                              |
| [`AddNodalTriads`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddNodalTriads)                                                                         | Creates a new NodalTriads                                                                                                    |
| [`AddNormalElasticStrain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddNormalElasticStrain)                                                         | Creates a new NormalElasticStrain                                                                                            |
| [`AddNormalGasketPressure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddNormalGasketPressure)                                                       | Creates a new NormalGasketPressure                                                                                           |
| [`AddNormalGasketTotalClosure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddNormalGasketTotalClosure)                                               | Creates a new NormalGasketTotalClosure                                                                                       |
| [`AddNormalStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddNormalStress)                                                                       | Creates a new NormalStress                                                                                                   |
| [`AddPosition`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddPosition)                                                                               | Creates a new Position                                                                                                       |
| [`AddPrimaryCriterion`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddPrimaryCriterion)                                                               | Creates a new PrimaryCriterion                                                                                               |
| [`AddPythonCodeEventBased`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddPythonCodeEventBased)                                                       | Creates a new PythonCodeEventBased                                                                                           |
| [`AddPythonResult`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddPythonResult)                                                                       | Creates a new PythonResult                                                                                                   |
| [`AddQualityFactor`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddQualityFactor)                                                                     | Creates a new QualityFactor                                                                                                  |
| [`AddRadiationProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddRadiationProbe)                                                                   | Creates a new RadiationProbe                                                                                                 |
| [`AddReactionProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddReactionProbe)                                                                     | Creates a new ReactionProbe                                                                                                  |
| [`AddResponsePSD`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddResponsePSD)                                                                         | Creates a new ResponsePSD                                                                                                    |
| [`AddResultMesh`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddResultMesh)                                                                           | Creates a new ResultMesh                                                                                                     |
| [`AddRotationProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddRotationProbe)                                                                     | Creates a new RotationProbe                                                                                                  |
| [`AddShapeFinder`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddShapeFinder)                                                                         | Creates a new ShapeFinder                                                                                                    |
| [`AddShapeFinderElemental`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddShapeFinderElemental)                                                       | Creates a new ShapeFinderElemental                                                                                           |
| [`AddShearDamageVariable`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddShearDamageVariable)                                                         | Creates a new ShearDamageVariable                                                                                            |
| [`AddShearElasticStrain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddShearElasticStrain)                                                           | Creates a new ShearElasticStrain                                                                                             |
| [`AddShearGasketPressure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddShearGasketPressure)                                                         | Creates a new ShearGasketPressure                                                                                            |
| [`AddShearGasketTotalClosure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddShearGasketTotalClosure)                                                 | Creates a new ShearGasketTotalClosure                                                                                        |
| [`AddShearStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddShearStress)                                                                         | Creates a new ShearStress                                                                                                    |
| [`AddShellBendingStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddShellBendingStress)                                                           | Creates a new ShellBendingStress                                                                                             |
| [`AddShellBottomPeakStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddShellBottomPeakStress)                                                     | Creates a new ShellBottomPeakStress                                                                                          |
| [`AddShellMembraneStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddShellMembraneStress)                                                         | Creates a new ShellMembraneStress                                                                                            |
| [`AddShellTopPeakStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddShellTopPeakStress)                                                           | Creates a new ShellTopPeakStress                                                                                             |
| [`AddSpringProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddSpringProbe)                                                                         | Creates a new SpringProbe                                                                                                    |
| [`AddStabilizationEnergy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddStabilizationEnergy)                                                         | Creates a new StabilizationEnergy                                                                                            |
| [`AddStrainProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddStrainProbe)                                                                         | Creates a new StrainProbe                                                                                                    |
| [`AddStressFrequencyResponse`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddStressFrequencyResponse)                                                 | Creates a new StressFrequencyResponse                                                                                        |
| [`AddStressIntensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddStressIntensity)                                                                 | Creates a new StressIntensity                                                                                                |
| [`AddStressPhaseResponse`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddStressPhaseResponse)                                                         | Creates a new StressPhaseResponse                                                                                            |
| [`AddStressProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddStressProbe)                                                                         | Creates a new StressProbe                                                                                                    |
| [`AddStressTool`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddStressTool)                                                                           | Creates a new StressTool                                                                                                     |
| [`AddStructuralError`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddStructuralError)                                                                 | Creates a new StructuralError                                                                                                |
| [`AddStructuralStrainEnergy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddStructuralStrainEnergy)                                                   | Creates a new StructuralStrainEnergy                                                                                         |
| [`AddTemperatureProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddTemperatureProbe)                                                               | Creates a new TemperatureProbe                                                                                               |
| [`AddTemperature`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddTemperature)                                                                         | Creates a new TemperatureResult                                                                                              |
| [`AddThermalError`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddThermalError)                                                                       | Creates a new ThermalError                                                                                                   |
| [`AddThermalStrainEnergy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddThermalStrainEnergy)                                                         | Creates a new ThermalStrainEnergy                                                                                            |
| [`AddTopologyDensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddTopologyDensity)                                                                 | Creates a new TopologyDensity                                                                                                |
| [`AddTopologyElementalDensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddTopologyElementalDensity)                                               | Creates a new TopologyElementalDensity                                                                                       |
| [`AddTotalAcceleration`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddTotalAcceleration)                                                             | Creates a new TotalAcceleration                                                                                              |
| [`AddTotalAxialForce`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddTotalAxialForce)                                                                 | Creates a new TotalAxialForce                                                                                                |
| [`AddTotalBendingMoment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddTotalBendingMoment)                                                           | Creates a new TotalBendingMoment                                                                                             |
| [`AddTotalCurrentDensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddTotalCurrentDensity)                                                         | Creates a new TotalCurrentDensity                                                                                            |
| [`AddTotalDeformation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddTotalDeformation)                                                               | Creates a new TotalDeformation                                                                                               |
| [`AddTotalElectricFieldIntensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddTotalElectricFieldIntensity)                                         | Creates a new TotalElectricFieldIntensity                                                                                    |
| [`AddTotalElectricFluxDensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddTotalElectricFluxDensity)                                               | Creates a new TotalElectricFluxDensity                                                                                       |
| [`AddTotalElectrostaticForce`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddTotalElectrostaticForce)                                                 | Creates a new TotalElectrostaticForce                                                                                        |
| [`AddTotalHeatFlux`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddTotalHeatFlux)                                                                     | Creates a new TotalHeatFlux                                                                                                  |
| [`AddTotalMagneticFieldIntensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddTotalMagneticFieldIntensity)                                         | Creates a new TotalMagneticFieldIntensity                                                                                    |
| [`AddTotalMagneticFluxDensity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddTotalMagneticFluxDensity)                                               | Creates a new TotalMagneticFluxDensity                                                                                       |
| [`AddTotalShearForce`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddTotalShearForce)                                                                 | Creates a new TotalShearForce                                                                                                |
| [`AddShearMomentDiagramMSUM`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddShearMomentDiagramMSUM)                                                   | Creates a new TotalShearMomentDiagram                                                                                        |
| [`AddShearMomentDiagramUSUM`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddShearMomentDiagramUSUM)                                                   | Creates a new TotalShearMomentDiagram                                                                                        |
| [`AddShearMomentDiagramVSUM`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddShearMomentDiagramVSUM)                                                   | Creates a new TotalShearMomentDiagram                                                                                        |
| [`AddTotalTorsionalMoment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddTotalTorsionalMoment)                                                       | Creates a new TotalTorsionalMoment                                                                                           |
| [`AddTotalVelocity`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddTotalVelocity)                                                                     | Creates a new TotalVelocity                                                                                                  |
| [`AddUserDefinedResult`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddUserDefinedResult)                                                             | Creates a new UserDefinedResult                                                                                              |
| [`AddVariableGraph`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddVariableGraph)                                                                     | Creates a new VariableGraph                                                                                                  |
| [`AddVectorAxialForce`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddVectorAxialForce)                                                               | Creates a new VectorAxialForce                                                                                               |
| [`AddVectorBendingMoment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddVectorBendingMoment)                                                         | Creates a new VectorBendingMoment                                                                                            |
| [`AddVectorDeformation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddVectorDeformation)                                                             | Creates a new VectorDeformation                                                                                              |
| [`AddVectorHeatFlux`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddVectorHeatFlux)                                                                   | Creates a new VectorHeatFlux                                                                                                 |
| [`AddVectorPrincipalElasticStrain`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddVectorPrincipalElasticStrain)                                       | Creates a new VectorPrincipalElasticStrain                                                                                   |
| [`AddVectorPrincipalStress`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddVectorPrincipalStress)                                                     | Creates a new VectorPrincipalStress                                                                                          |
| [`AddVectorShearForce`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddVectorShearForce)                                                               | Creates a new VectorShearForce                                                                                               |
| [`AddVectorTorsionalMoment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddVectorTorsionalMoment)                                                     | Creates a new VectorTorsionalMoment                                                                                          |
| [`AddVelocityFrequencyResponse`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddVelocityFrequencyResponse)                                             | Creates a new VelocityFrequencyResponse                                                                                      |
| [`AddVelocityPhaseResponse`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddVelocityPhaseResponse)                                                     | Creates a new VelocityPhaseResponse                                                                                          |
| [`AddVelocityProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddVelocityProbe)                                                                     | Creates a new VelocityProbe                                                                                                  |
| [`AddVelocityWaterfallDiagram`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddVelocityWaterfallDiagram)                                               | Creates a new VelocityWaterfallDiagram                                                                                       |
| [`AddVoltageFrequencyResponse`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddVoltageFrequencyResponse)                                               | Creates a new VoltageFrequencyResponse                                                                                       |
| [`AddVolume`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddVolume)                                                                                   | Creates a new Volume                                                                                                         |
| [`AddVolumeProbe`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddVolumeProbe)                                                                         | Creates a new VolumeProbe                                                                                                    |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#id3)                                                                                                | Gets the list of children, filtered by type.                                                                                 |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#id3)                                                                                                | Gets the list of children, filtered by type.                                                                                 |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddComment)                                                                                 | Creates a new child Comment.                                                                                                 |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddFigure)                                                                                   | Creates a new child Figure.                                                                                                  |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AddImage)                                                                                     | Creates a new child Image.                                                                                                   |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.Activate)                                                                                     | Activate the current object.                                                                                                 |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.CopyTo)                                                                                         | Copies all visible properties from this object to another.                                                                   |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.Duplicate)                                                                                   | Creates a copy of the current DataModelObject.                                                                               |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.GroupAllSimilarChildren)                                                       | Run the GroupAllSimilarChildren action.                                                                                      |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.GroupSimilarObjects)                                                               | Run the GroupSimilarObjects action.                                                                                          |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.PropertyByName)                                                                         | Get a property by its unique name.                                                                                           |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.PropertyByAPIName)                                                                   | Get a property by its API name.                                                                                              |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.CreateParameter)                                                                       | Creates a new parameter for a Property.                                                                                      |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.GetParameter)                                                                             | Gets the parameter corresponding to the given property.                                                                      |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.RemoveParameter)                                                                       | Removes the parameter from the parameter set corresponding to the given property.                                            |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| [`SolutionInformation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.SolutionInformation)                     | Gets the SolutionInformation.                                                            |
| [`CellId`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.CellId)                                               | Gets the CellId.                                                                         |
| [`WorkingDir`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.WorkingDir)                                       | Gets the WorkingDir.                                                                     |
| [`Status`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.Status)                                               | Gets the Status.                                                                         |
| [`NumGPURequested`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.NumGPURequested)                             | NumGPURequested property.                                                                |
| [`MemoryAvailable`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.MemoryAvailable)                             | MemoryAvailable property.                                                                |
| [`EigenSolverType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.EigenSolverType)                             | EigenSolverType property.                                                                |
| [`NumCoresAvailable`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.NumCoresAvailable)                         | NumCoresAvailable property.                                                              |
| [`NumProcRequested`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.NumProcRequested)                           | NumProcRequested property.                                                               |
| [`IsDistributedSolution`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.IsDistributedSolution)                 | IsDistributedSolution property.                                                          |
| [`IsHybridParallelSolution`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.IsHybridParallelSolution)           | IsHybridParallelSolution property.                                                       |
| [`IsAutoHybridParallel`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.IsAutoHybridParallel)                   | Returns if Hybrid Parallel was turned on by APDL or not (i.e. Automatic Hybrid Parallel) |
| [`ThreadsPerProcessRequested`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.ThreadsPerProcessRequested)       | ThreadsPerProcessRequested property.                                                     |
| [`NumberOfProcessesRequested`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.NumberOfProcessesRequested)       | NumberOfProcessesRequested property.                                                     |
| [`IsGPUAccelerationRequested`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.IsGPUAccelerationRequested)       | IsGPUAccelerationRequested property.                                                     |
| [`IsDataExtractionComplete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.IsDataExtractionComplete)           | IsDataExtractionComplete property.                                                       |
| [`IsEigenSolver`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.IsEigenSolver)                                 | IsEigenSolver property.                                                                  |
| [`IsUnsymmetricMatrixSolve`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.IsUnsymmetricMatrixSolve)           | IsUnsymmetricMatrixSolve property.                                                       |
| [`GPUType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.GPUType)                                             | GPUType property.                                                                        |
| [`MPIType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.MPIType)                                             | MPIType property.                                                                        |
| [`EquationSolverType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.EquationSolverType)                       | EquationSolverType property.                                                             |
| [`NumMachinesRequested`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.NumMachinesRequested)                   | NumMachinesRequested property.                                                           |
| [`MainThreadCPUTime`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.MainThreadCPUTime)                         | MainThreadCPUTime property.                                                              |
| [`AllThreadsCPUTime`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.AllThreadsCPUTime)                         | AllThreadsCPUTime property.                                                              |
| [`NumVirtualCoresAvailable`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.NumVirtualCoresAvailable)           | NumVirtualCoresAvailable property.                                                       |
| [`ElapsedTime`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.ElapsedTime)                                     | ElapsedTime property.                                                                    |
| [`TotalMemoryUsed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.TotalMemoryUsed)                             | TotalMemoryUsed property.                                                                |
| [`ElementLoadBalRatio`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.ElementLoadBalRatio)                     | ElementLoadBalRatio property.                                                            |
| [`ProcessorModel`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.ProcessorModel)                               | ProcessorModel property.                                                                 |
| [`OperatingSystem`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.OperatingSystem)                             | OperatingSystem property.                                                                |
| [`SolverType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.SolverType)                                       | SolverType property.                                                                     |
| [`License`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.License)                                             | License property.                                                                        |
| [`Nodes`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.Nodes)                                                 | Nodes property.                                                                          |
| [`Elements`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.Elements)                                           | Elements property.                                                                       |
| [`GpuAcceleration`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.GpuAcceleration)                             | GpuAcceleration property.                                                                |
| [`LicenseCoresAvailable`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.LicenseCoresAvailable)                 | LicenseCoresAvailable property.                                                          |
| [`SolutionUnitSystem`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.SolutionUnitSystem)                       | SolutionUnitSystem property.                                                             |
| [`IOBound`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.IOBound)                                             | IOBound property.                                                                        |
| [`IOWrite`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.IOWrite)                                             | IOWrite property.                                                                        |
| [`IORead`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.IORead)                                               | IORead property.                                                                         |
| [`MSUPHarmonicAnalysis`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.MSUPHarmonicAnalysis)                   | MSUPHarmonicAnalysis property.                                                           |
| [`TimeToCombineDistributedFiles`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.TimeToCombineDistributedFiles) | TimeToCombineDistributedFiles property.                                                  |
| [`SolverData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.SolverData)                                       | SolverData property.                                                                     |
| [`DateOfRun`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.DateOfRun)                                         | DateOfRun property.                                                                      |
| [`TimeOfRun`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.TimeOfRun)                                         | TimeOfRun property.                                                                      |
| [`SolutionTrackingVectorLength`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.SolutionTrackingVectorLength)   | SolutionTrackingVectorLength property.                                                   |
| [`ResultTrackingVectorLength`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.ResultTrackingVectorLength)       | ResultTrackingVectorLength property.                                                     |
| [`ResultFilePath`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.ResultFilePath)                               | Get the result file full path.                                                           |
| [`NumberOfDOF`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.NumberOfDOF)                                     | Get the Number of DOF.                                                                   |
| [`SparseMode`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.SparseMode)                                       | Get the Sparse Mode value.                                                               |
| [`SkipSolveCommand`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.SkipSolveCommand)                           | Gets or sets the flag to avoid issuing the solve command in the MAPDL solver.            |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#id0)                                                   | Gets the internal object. For advanced usage only.                                       |
| [`CyclicSectorDisplayRangeBegin`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.CyclicSectorDisplayRangeBegin) | Gets or sets the CyclicSectorDisplayRangeBegin.                                          |
| [`NumberofSectors`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.NumberofSectors)                             | Gets or sets the NumberofSectors.                                                        |
| [`ElapsedRunTime`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.ElapsedRunTime)                               | Gets or sets the ElapsedRunTime.                                                         |
| [`MaximumRefinementLoops`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.MaximumRefinementLoops)               | Gets or sets the MaximumRefinementLoops.                                                 |
| [`MemoryUsed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.MemoryUsed)                                       | Gets or sets the MemoryUsed.                                                             |
| [`RefinementDepth`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.RefinementDepth)                             | Gets or sets the RefinementDepth.                                                        |
| [`ResultFileDirectory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.ResultFileDirectory)                     | Gets the ResultFileDirectory.                                                            |
| [`ResultFileName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.ResultFileName)                               | Gets the ResultFileName.                                                                 |
| [`ResultFileSize`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.ResultFileSize)                               | Gets the ResultFileSize.                                                                 |
| [`ResultFileTimestamp`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.ResultFileTimestamp)                     | Gets the ResultFileTimestamp.                                                            |
| [`ExportTopologyFile`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.ExportTopologyFile)                       | Gets or sets the ExportTopologyFile.                                                     |
| [`MeshSource`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.MeshSource)                                       | Gets or sets the MeshSource.                                                             |
| [`ElementSelection`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.ElementSelection)                           | Gets or sets the ElementSelection.                                                       |
| [`ResultFileUnitSystem`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.ResultFileUnitSystem)                   | Gets the ResultFileUnitSystem.                                                           |
| [`CalculateBeamSectionResults`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.CalculateBeamSectionResults)     | Gets or sets the CalculateBeamSectionResults.                                            |
| [`TopologyResult`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.TopologyResult)                               | Gets or sets the TopologyResult.                                                         |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.DataModelObjectCategory)             | Gets the current DataModelObject’s category.                                             |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.Children)                                           | Gets the list of children.                                                               |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.Comments)                                           | Gets the list of associated comments.                                                    |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.Figures)                                             | Gets the list of associated figures.                                                     |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.Images)                                               | Gets the list of associated images.                                                      |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#id0)                                                   | Gets the internal object. For advanced usage only.                                       |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.Properties)                                       | Gets the list of properties for this object.                                             |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/Solution.md#Solution.VisibleProperties)                         | Gets the list of properties that are visible for this object.                            |

<a id="property-detail"></a>

## Property detail

<a id="Solution.SolutionInformation"></a>

### *property* Solution.SolutionInformation *: [Ansys.ACT.Automation.Mechanical.SolutionInformation](SolutionInformation.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.SolutionInformation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolutionInformation.

<!-- !! processed by numpydoc !! -->

<a id="Solution.CellId"></a>

### *property* Solution.CellId *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CellId.

<!-- !! processed by numpydoc !! -->

<a id="Solution.WorkingDir"></a>

### *property* Solution.WorkingDir *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the WorkingDir.

<!-- !! processed by numpydoc !! -->

<a id="Solution.Status"></a>

### *property* Solution.Status *: [Ansys.Mechanical.DataModel.Enums.SolutionStatusType](../../../Mechanical/DataModel/Enums/SolutionStatusType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolutionStatusType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Status.

<!-- !! processed by numpydoc !! -->

<a id="Solution.NumGPURequested"></a>

### *property* Solution.NumGPURequested *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumGPURequested property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.MemoryAvailable"></a>

### *property* Solution.MemoryAvailable *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

MemoryAvailable property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.EigenSolverType"></a>

### *property* Solution.EigenSolverType *: [Ansys.Mechanical.DataModel.Enums.EigenSolverType](../../../Mechanical/DataModel/Enums/EigenSolverType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EigenSolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

EigenSolverType property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.NumCoresAvailable"></a>

### *property* Solution.NumCoresAvailable *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumCoresAvailable property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.NumProcRequested"></a>

### *property* Solution.NumProcRequested *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumProcRequested property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.IsDistributedSolution"></a>

### *property* Solution.IsDistributedSolution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

IsDistributedSolution property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.IsHybridParallelSolution"></a>

### *property* Solution.IsHybridParallelSolution *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

IsHybridParallelSolution property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.IsAutoHybridParallel"></a>

### *property* Solution.IsAutoHybridParallel *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Returns if Hybrid Parallel was turned on by APDL or not (i.e. Automatic Hybrid Parallel)

<!-- !! processed by numpydoc !! -->

<a id="Solution.ThreadsPerProcessRequested"></a>

### *property* Solution.ThreadsPerProcessRequested *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

ThreadsPerProcessRequested property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.NumberOfProcessesRequested"></a>

### *property* Solution.NumberOfProcessesRequested *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumberOfProcessesRequested property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.IsGPUAccelerationRequested"></a>

### *property* Solution.IsGPUAccelerationRequested *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

IsGPUAccelerationRequested property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.IsDataExtractionComplete"></a>

### *property* Solution.IsDataExtractionComplete *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

IsDataExtractionComplete property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.IsEigenSolver"></a>

### *property* Solution.IsEigenSolver *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

IsEigenSolver property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.IsUnsymmetricMatrixSolve"></a>

### *property* Solution.IsUnsymmetricMatrixSolve *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

IsUnsymmetricMatrixSolve property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.GPUType"></a>

### *property* Solution.GPUType *: Ansys.Common.Interop.DSObjectTypes.DSGPUType | [None](https://docs.python.org/3/library/constants.html#None)*

GPUType property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.MPIType"></a>

### *property* Solution.MPIType *: [Ansys.Mechanical.DataModel.Enums.MPIType](../../../Mechanical/DataModel/Enums/MPIType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MPIType) | [None](https://docs.python.org/3/library/constants.html#None)*

MPIType property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.EquationSolverType"></a>

### *property* Solution.EquationSolverType *: [Ansys.Mechanical.DataModel.Enums.EquationSolverType](../../../Mechanical/DataModel/Enums/EquationSolverType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.EquationSolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

EquationSolverType property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.NumMachinesRequested"></a>

### *property* Solution.NumMachinesRequested *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumMachinesRequested property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.MainThreadCPUTime"></a>

### *property* Solution.MainThreadCPUTime *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

MainThreadCPUTime property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.AllThreadsCPUTime"></a>

### *property* Solution.AllThreadsCPUTime *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

AllThreadsCPUTime property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.NumVirtualCoresAvailable"></a>

### *property* Solution.NumVirtualCoresAvailable *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

NumVirtualCoresAvailable property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ElapsedTime"></a>

### *property* Solution.ElapsedTime *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ElapsedTime property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.TotalMemoryUsed"></a>

### *property* Solution.TotalMemoryUsed *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

TotalMemoryUsed property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ElementLoadBalRatio"></a>

### *property* Solution.ElementLoadBalRatio *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

ElementLoadBalRatio property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ProcessorModel"></a>

### *property* Solution.ProcessorModel *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

ProcessorModel property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.OperatingSystem"></a>

### *property* Solution.OperatingSystem *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

OperatingSystem property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.SolverType"></a>

### *property* Solution.SolverType *: [Ansys.Mechanical.DataModel.Enums.SolverType](../../../Mechanical/DataModel/Enums/SolverType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

SolverType property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.License"></a>

### *property* Solution.License *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

License property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.Nodes"></a>

### *property* Solution.Nodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Nodes property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.Elements"></a>

### *property* Solution.Elements *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Elements property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.GpuAcceleration"></a>

### *property* Solution.GpuAcceleration *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

GpuAcceleration property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.LicenseCoresAvailable"></a>

### *property* Solution.LicenseCoresAvailable *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

LicenseCoresAvailable property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.SolutionUnitSystem"></a>

### *property* Solution.SolutionUnitSystem *: Ansys.ACT.Interfaces.Common.MechanicalUnitSystem | [None](https://docs.python.org/3/library/constants.html#None)*

SolutionUnitSystem property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.IOBound"></a>

### *property* Solution.IOBound *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

IOBound property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.IOWrite"></a>

### *property* Solution.IOWrite *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

IOWrite property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.IORead"></a>

### *property* Solution.IORead *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

IORead property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.MSUPHarmonicAnalysis"></a>

### *property* Solution.MSUPHarmonicAnalysis *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

MSUPHarmonicAnalysis property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.TimeToCombineDistributedFiles"></a>

### *property* Solution.TimeToCombineDistributedFiles *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

TimeToCombineDistributedFiles property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.SolverData"></a>

### *property* Solution.SolverData *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

SolverData property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.DateOfRun"></a>

### *property* Solution.DateOfRun *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

DateOfRun property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.TimeOfRun"></a>

### *property* Solution.TimeOfRun *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

TimeOfRun property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.SolutionTrackingVectorLength"></a>

### *property* Solution.SolutionTrackingVectorLength *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

SolutionTrackingVectorLength property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ResultTrackingVectorLength"></a>

### *property* Solution.ResultTrackingVectorLength *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

ResultTrackingVectorLength property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ResultFilePath"></a>

### *property* Solution.ResultFilePath *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Get the result file full path.

<!-- !! processed by numpydoc !! -->

<a id="Solution.NumberOfDOF"></a>

### *property* Solution.NumberOfDOF *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Number of DOF.

<!-- !! processed by numpydoc !! -->

<a id="Solution.SparseMode"></a>

### *property* Solution.SparseMode *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Get the Sparse Mode value.

<!-- !! processed by numpydoc !! -->

<a id="Solution.SkipSolveCommand"></a>

### *property* Solution.SkipSolveCommand *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the flag to avoid issuing the solve command in the MAPDL solver.

<!-- !! processed by numpydoc !! -->

<a id="Solution.InternalObject"></a>

### *property* Solution.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAnswerSetAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Solution.CyclicSectorDisplayRangeBegin"></a>

### *property* Solution.CyclicSectorDisplayRangeBegin *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CyclicSectorDisplayRangeBegin.

<!-- !! processed by numpydoc !! -->

<a id="Solution.NumberofSectors"></a>

### *property* Solution.NumberofSectors *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberofSectors.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ElapsedRunTime"></a>

### *property* Solution.ElapsedRunTime *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElapsedRunTime.

<!-- !! processed by numpydoc !! -->

<a id="Solution.MaximumRefinementLoops"></a>

### *property* Solution.MaximumRefinementLoops *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumRefinementLoops.

<!-- !! processed by numpydoc !! -->

<a id="Solution.MemoryUsed"></a>

### *property* Solution.MemoryUsed *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MemoryUsed.

<!-- !! processed by numpydoc !! -->

<a id="Solution.RefinementDepth"></a>

### *property* Solution.RefinementDepth *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RefinementDepth.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ResultFileDirectory"></a>

### *property* Solution.ResultFileDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultFileDirectory.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ResultFileName"></a>

### *property* Solution.ResultFileName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultFileName.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ResultFileSize"></a>

### *property* Solution.ResultFileSize *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultFileSize.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ResultFileTimestamp"></a>

### *property* Solution.ResultFileTimestamp *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultFileTimestamp.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ExportTopologyFile"></a>

### *property* Solution.ExportTopologyFile *: [Ansys.Mechanical.DataModel.Enums.ExportTopologyFileOption](../../../Mechanical/DataModel/Enums/ExportTopologyFileOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExportTopologyFileOption) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExportTopologyFile.

<!-- !! processed by numpydoc !! -->

<a id="Solution.MeshSource"></a>

### *property* Solution.MeshSource *: [Ansys.Mechanical.DataModel.Enums.MeshSourceType](../../../Mechanical/DataModel/Enums/MeshSourceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.MeshSourceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshSource.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ElementSelection"></a>

### *property* Solution.ElementSelection *: [Ansys.Mechanical.DataModel.Enums.ConvergenceControlType](../../../Mechanical/DataModel/Enums/ConvergenceControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ConvergenceControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementSelection.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ResultFileUnitSystem"></a>

### *property* Solution.ResultFileUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ResultFileUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="Solution.CalculateBeamSectionResults"></a>

### *property* Solution.CalculateBeamSectionResults *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CalculateBeamSectionResults.

<!-- !! processed by numpydoc !! -->

<a id="Solution.TopologyResult"></a>

### *property* Solution.TopologyResult *: Ansys.ACT.Automation.Mechanical.DataModelObject | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TopologyResult.

<!-- !! processed by numpydoc !! -->

<a id="Solution.DataModelObjectCategory"></a>

### *property* Solution.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Solution.Children"></a>

### *property* Solution.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Solution.Comments"></a>

### *property* Solution.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Solution.Figures"></a>

### *property* Solution.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Solution.Images"></a>

### *property* Solution.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Solution.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Solution.Properties"></a>

### *property* Solution.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Solution.VisibleProperties"></a>

### *property* Solution.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Solution.Solve"></a>

### Solution.Solve(wait: System.Boolean, config: System.String)

Run the Solve action.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Solution.Solve(wait: System.Boolean, config: [Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolveConfiguration](../../Mechanical/Application/SolveProcessSettings/SolveConfiguration.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Application.SolveProcessSettings.SolveConfiguration))

Run the Solve action.

<!-- !! processed by numpydoc !! -->

<a id="Solution.EvaluateAllResults"></a>

### Solution.EvaluateAllResults()

Run the EvaluateAllResults action.

<!-- !! processed by numpydoc !! -->

<a id="Solution.GetResults"></a>

### Solution.GetResults()

Gets the Results from the server.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ClearGeneratedData"></a>

### Solution.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="Solution.IsResultFileSameAsLoaded"></a>

### Solution.IsResultFileSameAsLoaded(filepath: System.String)

Checks if the given result file is same the loaded result file

<!-- !! processed by numpydoc !! -->

<a id="Solution.RelinkResultFile"></a>

### Solution.RelinkResultFile(filepath: System.String)

Relink the result file. This action allows repairing the result file referencing without altering the generated result data.

<!-- !! processed by numpydoc !! -->

<a id="Solution.IsResultFileChanged"></a>

### Solution.IsResultFileChanged()

Checks if the referenced result file has been changed.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ReloadResultFile"></a>

### Solution.ReloadResultFile()

Reload the result file. For results-only systems, this action reloads the result mesh data and resets all result scopings.

<!-- !! processed by numpydoc !! -->

<a id="Solution.OpenSolverFilesDirectory"></a>

### Solution.OpenSolverFilesDirectory()

Run the OpenSolverFilesDirectory action.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ReadGivenAnsysResultFile"></a>

### Solution.ReadGivenAnsysResultFile(resultFilePath: System.String, unitSystemID: [Ansys.Mechanical.DataModel.Enums.UnitSystemIDType](../../../Mechanical/DataModel/Enums/UnitSystemIDType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.UnitSystemIDType))

Run the given Ansys ReadResults action.///

<!-- !! processed by numpydoc !! -->

<a id="Solution.ReadGivenAnsysResultFileByReference"></a>

### Solution.ReadGivenAnsysResultFileByReference(resultFilePath: System.String, unitSystemID: [Ansys.Mechanical.DataModel.Enums.UnitSystemIDType](../../../Mechanical/DataModel/Enums/UnitSystemIDType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.UnitSystemIDType))

Run the given Ansys ReadResults by reference action.///

<!-- !! processed by numpydoc !! -->

<a id="Solution.ReadAnsysResultFile"></a>

### Solution.ReadAnsysResultFile()

Run the Ansys ReadResults action.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ExtractSolutionStatistics"></a>

### Solution.ExtractSolutionStatistics()

ExtractSolutionStatistics method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddContactTool"></a>

### Solution.AddContactTool()

Creates a new ContactTool

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddBoltTool"></a>

### Solution.AddBoltTool()

Creates a new BoltTool

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddForceSummationProbe"></a>

### Solution.AddForceSummationProbe()

Creates a new ForceSummationProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTorqueProbe"></a>

### Solution.AddTorqueProbe()

Creates a new TorqueProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddResponsePSDTool"></a>

### Solution.AddResponsePSDTool()

Creates a new ResponsePSDTool

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddForceReactionsForContactRegions"></a>

### Solution.AddForceReactionsForContactRegions(contactRegionObjIds: System.Collections.Generic.IEnumerable[System.Int32])

AddForceReactionsForContactRegions method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMomentReactionsForContactRegions"></a>

### Solution.AddMomentReactionsForContactRegions(contactRegionObjIds: System.Collections.Generic.IEnumerable[System.Int32])

AddMomentReactionsForContactRegions method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddReactionsForContactRegions"></a>

### Solution.AddReactionsForContactRegions(contactRegionObjIds: System.Collections.Generic.IEnumerable[System.Int32])

AddReactionsForContactRegions method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ValueForSolutionTracking"></a>

### Solution.ValueForSolutionTracking(index: System.UInt32, key: System.String)

ValueForSolutionTracking method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.DeleteRow"></a>

### Solution.DeleteRow(index: System.UInt32)

DeleteRow method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ValueForResultTracking"></a>

### Solution.ValueForResultTracking(index: System.UInt32, key: System.String)

ValueForResultTracking method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.FormatValue"></a>

### Solution.FormatValue(value: System.Double, unitType: System.Int32)

FormatValue method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddGroupedScopedCustomResult"></a>

### Solution.AddGroupedScopedCustomResult(selectedPlies: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

AddGroupedScopedCustomResult method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddGroupedScopedACPResults"></a>

### Solution.AddGroupedScopedACPResults(resultType: [Ansys.Mechanical.DataModel.Enums.ResultType](../../../Mechanical/DataModel/Enums/ResultType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ResultType), selectedPlies: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

AddGroupedScopedACPResults method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFatigueTool"></a>

### Solution.AddFatigueTool()

AddFatigueTool method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.CreateResultsAtAllSets"></a>

### Solution.CreateResultsAtAllSets(resId: System.UInt32)

CreateResultsAtAllSets method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.EvaluateAllContactTrackers"></a>

### Solution.EvaluateAllContactTrackers()

EvaluateAllContactTrackers method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.EvaluateContactTracker"></a>

### Solution.EvaluateContactTracker()

EvaluateContactTracker method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ExecutePostCommands"></a>

### Solution.ExecutePostCommands()

Run Execute Post Commands for all post command objects.

<!-- !! processed by numpydoc !! -->

<a id="id2"></a>

### Solution.ExecutePostCommands(activeObjs: System.Collections.Generic.IEnumerable[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

ExecutePostCommands method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.FetchRemoteResults"></a>

### Solution.FetchRemoteResults()

FetchRemoteResults method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.GenerateAdaptedMesh"></a>

### Solution.GenerateAdaptedMesh()

GenerateAdaptedMesh method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ExportSubstructureInCPAFormat"></a>

### Solution.ExportSubstructureInCPAFormat(exportFileName: System.String, bAddOnDemandExpansionFiles: System.Boolean)

Export Substructure to cpa file.

<!-- !! processed by numpydoc !! -->

<a id="Solution.DisconnectRemoteJob"></a>

### Solution.DisconnectRemoteJob()

DisconnectRemoteJob method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ReconnectRemoteJob"></a>

### Solution.ReconnectRemoteJob()

ReconnectRemoteJob method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.ClearRemoteStorageData"></a>

### Solution.ClearRemoteStorageData()

ClearRemoteStorageData method.

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddLineChart2D"></a>

### Solution.AddLineChart2D()

Creates a new LineChart2D

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAccelerationFrequencyResponse"></a>

### Solution.AddAccelerationFrequencyResponse()

Creates a new AccelerationFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAccelerationPhaseResponse"></a>

### Solution.AddAccelerationPhaseResponse()

Creates a new AccelerationPhaseResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAccelerationProbe"></a>

### Solution.AddAccelerationProbe()

Creates a new AccelerationProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAccelerationWaterfallDiagram"></a>

### Solution.AddAccelerationWaterfallDiagram()

Creates a new AccelerationWaterfallDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAccumulatedEquivalentPlasticStrain"></a>

### Solution.AddAccumulatedEquivalentPlasticStrain()

Creates a new AccumulatedEquivalentPlasticStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticAbsorptionCoefficient"></a>

### Solution.AddAcousticAbsorptionCoefficient()

Creates a new AcousticAbsorptionCoefficient

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticAWeightedSoundPressureLevel"></a>

### Solution.AddAcousticAWeightedSoundPressureLevel()

Creates a new AcousticAWeightedSoundPressureLevel

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticAWeightedSPLFrequencyResponse"></a>

### Solution.AddAcousticAWeightedSPLFrequencyResponse()

Creates a new AcousticAWeightedSPLFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticDiffuseSoundTransmissionLoss"></a>

### Solution.AddAcousticDiffuseSoundTransmissionLoss()

Creates a new AcousticDiffuseSoundTransmissionLoss

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticDirectionalVelocityResult"></a>

### Solution.AddAcousticDirectionalVelocityResult()

Creates a new AcousticDirectionalVelocityResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldSPL"></a>

### Solution.AddAcousticFarFieldSPL()

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldAWeightedSPL"></a>

### Solution.AddAcousticFarFieldAWeightedSPL()

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldMaximumPressure"></a>

### Solution.AddAcousticFarFieldMaximumPressure()

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldPhase"></a>

### Solution.AddAcousticFarFieldPhase()

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldDirectivity"></a>

### Solution.AddAcousticFarFieldDirectivity()

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldMaximumScatteredPressure"></a>

### Solution.AddAcousticFarFieldMaximumScatteredPressure()

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldTargetStrength"></a>

### Solution.AddAcousticFarFieldTargetStrength()

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldSoundPowerLevel"></a>

### Solution.AddAcousticFarFieldSoundPowerLevel()

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldSPLMic"></a>

### Solution.AddAcousticFarFieldSPLMic()

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldAWeightedSPLMic"></a>

### Solution.AddAcousticFarFieldAWeightedSPLMic()

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldMaximumPressureMic"></a>

### Solution.AddAcousticFarFieldMaximumPressureMic()

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldPhaseMic"></a>

### Solution.AddAcousticFarFieldPhaseMic()

Creates a new AcousticFarFieldResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldSoundPowerLevelWaterfallDiagram"></a>

### Solution.AddAcousticFarFieldSoundPowerLevelWaterfallDiagram()

Creates a new AcousticFarFieldSoundPowerLevelWaterfallDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFarFieldSPLMicWaterfallDiagram"></a>

### Solution.AddAcousticFarFieldSPLMicWaterfallDiagram()

Creates a new AcousticFarFieldSPLMicWaterfallDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFrequencyBandAWeightedSPL"></a>

### Solution.AddAcousticFrequencyBandAWeightedSPL()

Creates a new AcousticFrequencyBandAWeightedSPL

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticFrequencyBandSPL"></a>

### Solution.AddAcousticFrequencyBandSPL()

Creates a new AcousticFrequencyBandSPL

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticKineticEnergy"></a>

### Solution.AddAcousticKineticEnergy()

Creates a new AcousticKineticEnergy

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticKineticEnergyFrequencyResponse"></a>

### Solution.AddAcousticKineticEnergyFrequencyResponse()

Creates a new AcousticKineticEnergyFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticPotentialEnergy"></a>

### Solution.AddAcousticPotentialEnergy()

Creates a new AcousticPotentialEnergy

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticPotentialEnergyFrequencyResponse"></a>

### Solution.AddAcousticPotentialEnergyFrequencyResponse()

Creates a new AcousticPotentialEnergyFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticPressureFrequencyResponse"></a>

### Solution.AddAcousticPressureFrequencyResponse()

Creates a new AcousticPressureFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticPressureResult"></a>

### Solution.AddAcousticPressureResult()

Creates a new AcousticPressureResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticReturnLoss"></a>

### Solution.AddAcousticReturnLoss()

Creates a new AcousticReturnLoss

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticSoundPressureLevel"></a>

### Solution.AddAcousticSoundPressureLevel()

Creates a new AcousticSoundPressureLevel

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticSPLFrequencyResponse"></a>

### Solution.AddAcousticSPLFrequencyResponse()

Creates a new AcousticSPLFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticTotalVelocityResult"></a>

### Solution.AddAcousticTotalVelocityResult()

Creates a new AcousticTotalVelocityResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticTransmissionLoss"></a>

### Solution.AddAcousticTransmissionLoss()

Creates a new AcousticTransmissionLoss

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAcousticVelocityFrequencyResponse"></a>

### Solution.AddAcousticVelocityFrequencyResponse()

Creates a new AcousticVelocityFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAngularAccelerationProbe"></a>

### Solution.AddAngularAccelerationProbe()

Creates a new AngularAccelerationProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddAngularVelocityProbe"></a>

### Solution.AddAngularVelocityProbe()

Creates a new AngularVelocityProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddBeamProbe"></a>

### Solution.AddBeamProbe()

Creates a new BeamProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddBeamTool"></a>

### Solution.AddBeamTool()

Creates a new BeamTool

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddBearingProbe"></a>

### Solution.AddBearingProbe()

Creates a new BearingProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddBendingStressEquivalent"></a>

### Solution.AddBendingStressEquivalent()

Creates a new BendingStressEquivalent

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddBendingStressIntensity"></a>

### Solution.AddBendingStressIntensity()

Creates a new BendingStressIntensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddBoltPretensionProbe"></a>

### Solution.AddBoltPretensionProbe()

Creates a new BoltPretensionProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddCampbellDiagram"></a>

### Solution.AddCampbellDiagram()

Creates a new CampbellDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddChargeReactionFrequencyResponse"></a>

### Solution.AddChargeReactionFrequencyResponse()

Creates a new ChargeReactionFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddChargeReactionProbe"></a>

### Solution.AddChargeReactionProbe()

Creates a new ChargeReactionProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddCommandSnippet"></a>

### Solution.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddCompositeCriterion"></a>

### Solution.AddCompositeCriterion()

Creates a new CompositeCriterion

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddCompositeFailureTool"></a>

### Solution.AddCompositeFailureTool()

Creates a new CompositeFailureTool

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddCompositeSamplingPointTool"></a>

### Solution.AddCompositeSamplingPointTool()

Creates a new CompositeSamplingPointTool

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddContactDistanceProbe"></a>

### Solution.AddContactDistanceProbe()

Creates a new ContactDistanceProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddCurrentDensity"></a>

### Solution.AddCurrentDensity()

Creates a new CurrentDensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddCurrentDensityProbe"></a>

### Solution.AddCurrentDensityProbe()

Creates a new CurrentDensityProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDamageStatus"></a>

### Solution.AddDamageStatus()

Creates a new DamageStatus

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDeformationFrequencyResponse"></a>

### Solution.AddDeformationFrequencyResponse()

Creates a new DeformationFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDeformationPhaseResponse"></a>

### Solution.AddDeformationPhaseResponse()

Creates a new DeformationPhaseResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDeformationProbe"></a>

### Solution.AddDeformationProbe()

Creates a new DeformationProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalAcceleration"></a>

### Solution.AddDirectionalAcceleration()

Creates a new DirectionalAcceleration

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalAccelerationPSD"></a>

### Solution.AddDirectionalAccelerationPSD()

Creates a new DirectionalAccelerationPSD

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalAccelerationRS"></a>

### Solution.AddDirectionalAccelerationRS()

Creates a new DirectionalAccelerationRS

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalAxialForce"></a>

### Solution.AddDirectionalAxialForce()

Creates a new DirectionalAxialForce

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalBendingMoment"></a>

### Solution.AddDirectionalBendingMoment()

Creates a new DirectionalBendingMoment

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalCurrentDensity"></a>

### Solution.AddDirectionalCurrentDensity()

Creates a new DirectionalCurrentDensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalDeformation"></a>

### Solution.AddDirectionalDeformation()

Creates a new DirectionalDeformation

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalElectricFieldIntensity"></a>

### Solution.AddDirectionalElectricFieldIntensity()

Creates a new DirectionalElectricFieldIntensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalElectricFluxDensity"></a>

### Solution.AddDirectionalElectricFluxDensity()

Creates a new DirectionalElectricFluxDensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalElectrostaticForce"></a>

### Solution.AddDirectionalElectrostaticForce()

Creates a new DirectionalElectrostaticForce

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalHeatFlux"></a>

### Solution.AddDirectionalHeatFlux()

Creates a new DirectionalHeatFlux

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalMagneticFieldIntensity"></a>

### Solution.AddDirectionalMagneticFieldIntensity()

Creates a new DirectionalMagneticFieldIntensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalMagneticFluxDensity"></a>

### Solution.AddDirectionalMagneticFluxDensity()

Creates a new DirectionalMagneticFluxDensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalShearForce"></a>

### Solution.AddDirectionalShearForce()

Creates a new DirectionalShearForce

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearMomentDiagramMY"></a>

### Solution.AddShearMomentDiagramMY()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearMomentDiagramMZ"></a>

### Solution.AddShearMomentDiagramMZ()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearMomentDiagramUY"></a>

### Solution.AddShearMomentDiagramUY()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearMomentDiagramUZ"></a>

### Solution.AddShearMomentDiagramUZ()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearMomentDiagramVY"></a>

### Solution.AddShearMomentDiagramVY()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearMomentDiagramVZ"></a>

### Solution.AddShearMomentDiagramVZ()

Creates a new DirectionalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddThermalStrain"></a>

### Solution.AddThermalStrain()

Creates a new DirectionalThermalStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalTorsionalMoment"></a>

### Solution.AddDirectionalTorsionalMoment()

Creates a new DirectionalTorsionalMoment

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalVelocity"></a>

### Solution.AddDirectionalVelocity()

Creates a new DirectionalVelocity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalVelocityPSD"></a>

### Solution.AddDirectionalVelocityPSD()

Creates a new DirectionalVelocityPSD

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddDirectionalVelocityRS"></a>

### Solution.AddDirectionalVelocityRS()

Creates a new DirectionalVelocityRS

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddElasticStrainFrequencyResponse"></a>

### Solution.AddElasticStrainFrequencyResponse()

Creates a new ElasticStrainFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddElasticStrainIntensity"></a>

### Solution.AddElasticStrainIntensity()

Creates a new ElasticStrainIntensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddElasticStrainPhaseResponse"></a>

### Solution.AddElasticStrainPhaseResponse()

Creates a new ElasticStrainPhaseResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddElectricFieldProbe"></a>

### Solution.AddElectricFieldProbe()

Creates a new ElectricFieldProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddElectricPotential"></a>

### Solution.AddElectricPotential()

Creates a new ElectricPotential

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddElectricVoltage"></a>

### Solution.AddElectricVoltage()

Creates a new ElectricVoltage

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVoltageProbe"></a>

### Solution.AddVoltageProbe()

Creates a new ElectricVoltageProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddElectromechanicalCouplingCoefficient"></a>

### Solution.AddElectromechanicalCouplingCoefficient()

Creates a new ElectromechanicalCouplingCoefficient

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddElementalEulerXYAngle"></a>

### Solution.AddElementalEulerXYAngle()

Creates a new ElementalEulerXYAngle

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddElementalEulerXZAngle"></a>

### Solution.AddElementalEulerXZAngle()

Creates a new ElementalEulerXZAngle

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddElementalEulerYZAngle"></a>

### Solution.AddElementalEulerYZAngle()

Creates a new ElementalEulerYZAngle

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddElementalStrainEnergy"></a>

### Solution.AddElementalStrainEnergy()

Creates a new ElementalStrainEnergy

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddElementalTriads"></a>

### Solution.AddElementalTriads()

Creates a new ElementalTriads

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEmagReactionProbe"></a>

### Solution.AddEmagReactionProbe()

Creates a new EmagReactionProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEnergyDissipatedPerUnitVolume"></a>

### Solution.AddEnergyDissipatedPerUnitVolume()

Creates a new EnergyDissipatedPerUnitVolume

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEnergyProbe"></a>

### Solution.AddEnergyProbe()

Creates a new EnergyProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentCreepStrain"></a>

### Solution.AddEquivalentCreepStrain()

Creates a new EquivalentCreepStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentCreepStrainRST"></a>

### Solution.AddEquivalentCreepStrainRST()

Creates a new EquivalentCreepStrainRST

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentElasticStrain"></a>

### Solution.AddEquivalentElasticStrain()

Creates a new EquivalentElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentElasticStrainRST"></a>

### Solution.AddEquivalentElasticStrainRST()

Creates a new EquivalentElasticStrainRST

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentPlasticStrain"></a>

### Solution.AddEquivalentPlasticStrain()

Creates a new EquivalentPlasticStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentPlasticStrainRST"></a>

### Solution.AddEquivalentPlasticStrainRST()

Creates a new EquivalentPlasticStrainRST

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentRadiatedPower"></a>

### Solution.AddEquivalentRadiatedPower()

Creates a new EquivalentRadiatedPower

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentRadiatedPowerLevel"></a>

### Solution.AddEquivalentRadiatedPowerLevel()

Creates a new EquivalentRadiatedPowerLevel

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentRadiatedPowerLevelWaterfallDiagram"></a>

### Solution.AddEquivalentRadiatedPowerLevelWaterfallDiagram()

Creates a new EquivalentRadiatedPowerLevelWaterfallDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentRadiatedPowerWaterfallDiagram"></a>

### Solution.AddEquivalentRadiatedPowerWaterfallDiagram()

Creates a new EquivalentRadiatedPowerWaterfallDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentStress"></a>

### Solution.AddEquivalentStress()

Creates a new EquivalentStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentStressPSD"></a>

### Solution.AddEquivalentStressPSD()

Creates a new EquivalentStressPSD

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentStressRS"></a>

### Solution.AddEquivalentStressRS()

Creates a new EquivalentStressRS

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddEquivalentTotalStrain"></a>

### Solution.AddEquivalentTotalStrain()

Creates a new EquivalentTotalStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddExpansionSettings"></a>

### Solution.AddExpansionSettings()

Creates a new ExpansionSettings

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFiberCompressiveDamageVariable"></a>

### Solution.AddFiberCompressiveDamageVariable()

Creates a new FiberCompressiveDamageVariable

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFiberCompressiveFailureCriterion"></a>

### Solution.AddFiberCompressiveFailureCriterion()

Creates a new FiberCompressiveFailureCriterion

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFiberTensileDamageVariable"></a>

### Solution.AddFiberTensileDamageVariable()

Creates a new FiberTensileDamageVariable

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFiberTensileFailureCriterion"></a>

### Solution.AddFiberTensileFailureCriterion()

Creates a new FiberTensileFailureCriterion

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFieldIntensityProbe"></a>

### Solution.AddFieldIntensityProbe()

Creates a new FieldIntensityProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFlexibleRotationProbe"></a>

### Solution.AddFlexibleRotationProbe()

Creates a new FlexibleRotationProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFluidFlowRate"></a>

### Solution.AddFluidFlowRate()

Creates a new FluidFlowRate

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFluidHeatConductionRate"></a>

### Solution.AddFluidHeatConductionRate()

Creates a new FluidHeatConductionRate

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFluidHeatTransportRate"></a>

### Solution.AddFluidHeatTransportRate()

Creates a new FluidHeatTransportRate

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFluxDensityProbe"></a>

### Solution.AddFluxDensityProbe()

Creates a new FluxDensityProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFluxLinkage"></a>

### Solution.AddFluxLinkage()

Creates a new FluxLinkage

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddForceReaction"></a>

### Solution.AddForceReaction()

Creates a new ForceReaction

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddForceReactionFrequencyResponse"></a>

### Solution.AddForceReactionFrequencyResponse()

Creates a new ForceReactionFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFractureTool"></a>

### Solution.AddFractureTool()

Creates a new FractureTool

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddGeneralizedPlaneStrainProbe"></a>

### Solution.AddGeneralizedPlaneStrainProbe()

Creates a new GeneralizedPlaneStrainProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddHeatFluxProbe"></a>

### Solution.AddHeatFluxProbe()

Creates a new HeatFluxProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddImpedanceFrequencyResponse"></a>

### Solution.AddImpedanceFrequencyResponse()

Creates a new ImpedanceFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddImpedanceProbe"></a>

### Solution.AddImpedanceProbe()

Creates a new ImpedanceProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddInductance"></a>

### Solution.AddInductance()

Creates a new Inductance

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddJointProbe"></a>

### Solution.AddJointProbe()

Creates a new JointProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddJouleHeat"></a>

### Solution.AddJouleHeat()

Creates a new JouleHeat

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddJouleHeatProbe"></a>

### Solution.AddJouleHeatProbe()

Creates a new JouleHeatProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddLatticeDensity"></a>

### Solution.AddLatticeDensity()

Creates a new LatticeDensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddLatticeElementalDensity"></a>

### Solution.AddLatticeElementalDensity()

Creates a new LatticeElementalDensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddLinearizedEquivalentStress"></a>

### Solution.AddLinearizedEquivalentStress()

Creates a new LinearizedEquivalentStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddLinearizedMaximumPrincipalStress"></a>

### Solution.AddLinearizedMaximumPrincipalStress()

Creates a new LinearizedMaximumPrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddLinearizedMaximumShearStress"></a>

### Solution.AddLinearizedMaximumShearStress()

Creates a new LinearizedMaximumShearStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddLinearizedMiddlePrincipalStress"></a>

### Solution.AddLinearizedMiddlePrincipalStress()

Creates a new LinearizedMiddlePrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddLinearizedMinimumPrincipalStress"></a>

### Solution.AddLinearizedMinimumPrincipalStress()

Creates a new LinearizedMinimumPrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddLinearizedNormalStress"></a>

### Solution.AddLinearizedNormalStress()

Creates a new LinearizedNormalStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddLinearizedShearStress"></a>

### Solution.AddLinearizedShearStress()

Creates a new LinearizedShearStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddLinearizedStressIntensity"></a>

### Solution.AddLinearizedStressIntensity()

Creates a new LinearizedStressIntensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddLinePressureResult"></a>

### Solution.AddLinePressureResult()

Creates a new LinePressureResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMagneticCoenergy"></a>

### Solution.AddMagneticCoenergy()

Creates a new MagneticCoenergy

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMagneticDirectionalForces"></a>

### Solution.AddMagneticDirectionalForces()

Creates a new MagneticDirectionalForces

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMagneticError"></a>

### Solution.AddMagneticError()

Creates a new MagneticError

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMagneticFluxProbe"></a>

### Solution.AddMagneticFluxProbe()

Creates a new MagneticFluxProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMagneticPotential"></a>

### Solution.AddMagneticPotential()

Creates a new MagneticPotential

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMagneticTotalForces"></a>

### Solution.AddMagneticTotalForces()

Creates a new MagneticTotalForces

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMatrixCompressiveDamageVariable"></a>

### Solution.AddMatrixCompressiveDamageVariable()

Creates a new MatrixCompressiveDamageVariable

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMatrixCompressiveFailureCriterion"></a>

### Solution.AddMatrixCompressiveFailureCriterion()

Creates a new MatrixCompressiveFailureCriterion

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMatrixTensileDamageVariable"></a>

### Solution.AddMatrixTensileDamageVariable()

Creates a new MatrixTensileDamageVariable

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMatrixTensileFailureCriterion"></a>

### Solution.AddMatrixTensileFailureCriterion()

Creates a new MatrixTensileFailureCriterion

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMaximumFailureCriteria"></a>

### Solution.AddMaximumFailureCriteria()

Creates a new MaximumFailureCriteria

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMaximumPrincipalElasticStrain"></a>

### Solution.AddMaximumPrincipalElasticStrain()

Creates a new MaximumPrincipalElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMaximumPrincipalStress"></a>

### Solution.AddMaximumPrincipalStress()

Creates a new MaximumPrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMaximumPrincipalThermalStrain"></a>

### Solution.AddMaximumPrincipalThermalStrain()

Creates a new MaximumPrincipalThermalStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMaximumShearElasticStrain"></a>

### Solution.AddMaximumShearElasticStrain()

Creates a new MaximumShearElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMaximumShearStress"></a>

### Solution.AddMaximumShearStress()

Creates a new MaximumShearStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMCFWaterfallDiagram"></a>

### Solution.AddMCFWaterfallDiagram()

Creates a new MCFWaterfallDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMembraneStressEquivalent"></a>

### Solution.AddMembraneStressEquivalent()

Creates a new MembraneStressEquivalent

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMembraneStressIntensity"></a>

### Solution.AddMembraneStressIntensity()

Creates a new MembraneStressIntensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMiddlePrincipalElasticStrain"></a>

### Solution.AddMiddlePrincipalElasticStrain()

Creates a new MiddlePrincipalElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMiddlePrincipalStress"></a>

### Solution.AddMiddlePrincipalStress()

Creates a new MiddlePrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMiddlePrincipalThermalStrain"></a>

### Solution.AddMiddlePrincipalThermalStrain()

Creates a new MiddlePrincipalThermalStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMinimumPrincipalElasticStrain"></a>

### Solution.AddMinimumPrincipalElasticStrain()

Creates a new MinimumPrincipalElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMinimumPrincipalStress"></a>

### Solution.AddMinimumPrincipalStress()

Creates a new MinimumPrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMomentReaction"></a>

### Solution.AddMomentReaction()

Creates a new MomentReaction

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMullinsDamageVariable"></a>

### Solution.AddMullinsDamageVariable()

Creates a new MullinsDamageVariable

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddMullinsMaximumPreviousStrainEnergy"></a>

### Solution.AddMullinsMaximumPreviousStrainEnergy()

Creates a new MullinsMaximumPreviousStrainEnergy

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddNewtonRaphsonResidualCharge"></a>

### Solution.AddNewtonRaphsonResidualCharge()

Creates a new NewtonRaphsonResidualCharge

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddNewtonRaphsonResidualForce"></a>

### Solution.AddNewtonRaphsonResidualForce()

Creates a new NewtonRaphsonResidualForce

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddNewtonRaphsonResidualHeat"></a>

### Solution.AddNewtonRaphsonResidualHeat()

Creates a new NewtonRaphsonResidualHeat

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddNewtonRaphsonResidualMoment"></a>

### Solution.AddNewtonRaphsonResidualMoment()

Creates a new NewtonRaphsonResidualMoment

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddNodalEulerXYAngle"></a>

### Solution.AddNodalEulerXYAngle()

Creates a new NodalEulerXYAngle

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddNodalEulerXZAngle"></a>

### Solution.AddNodalEulerXZAngle()

Creates a new NodalEulerXZAngle

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddNodalEulerYZAngle"></a>

### Solution.AddNodalEulerYZAngle()

Creates a new NodalEulerYZAngle

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddNodalTriads"></a>

### Solution.AddNodalTriads()

Creates a new NodalTriads

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddNormalElasticStrain"></a>

### Solution.AddNormalElasticStrain()

Creates a new NormalElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddNormalGasketPressure"></a>

### Solution.AddNormalGasketPressure()

Creates a new NormalGasketPressure

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddNormalGasketTotalClosure"></a>

### Solution.AddNormalGasketTotalClosure()

Creates a new NormalGasketTotalClosure

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddNormalStress"></a>

### Solution.AddNormalStress()

Creates a new NormalStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddPosition"></a>

### Solution.AddPosition()

Creates a new Position

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddPrimaryCriterion"></a>

### Solution.AddPrimaryCriterion()

Creates a new PrimaryCriterion

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddPythonCodeEventBased"></a>

### Solution.AddPythonCodeEventBased()

Creates a new PythonCodeEventBased

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddPythonResult"></a>

### Solution.AddPythonResult()

Creates a new PythonResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddQualityFactor"></a>

### Solution.AddQualityFactor()

Creates a new QualityFactor

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddRadiationProbe"></a>

### Solution.AddRadiationProbe()

Creates a new RadiationProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddReactionProbe"></a>

### Solution.AddReactionProbe()

Creates a new ReactionProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddResponsePSD"></a>

### Solution.AddResponsePSD()

Creates a new ResponsePSD

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddResultMesh"></a>

### Solution.AddResultMesh()

Creates a new ResultMesh

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddRotationProbe"></a>

### Solution.AddRotationProbe()

Creates a new RotationProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShapeFinder"></a>

### Solution.AddShapeFinder()

Creates a new ShapeFinder

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShapeFinderElemental"></a>

### Solution.AddShapeFinderElemental()

Creates a new ShapeFinderElemental

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearDamageVariable"></a>

### Solution.AddShearDamageVariable()

Creates a new ShearDamageVariable

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearElasticStrain"></a>

### Solution.AddShearElasticStrain()

Creates a new ShearElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearGasketPressure"></a>

### Solution.AddShearGasketPressure()

Creates a new ShearGasketPressure

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearGasketTotalClosure"></a>

### Solution.AddShearGasketTotalClosure()

Creates a new ShearGasketTotalClosure

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearStress"></a>

### Solution.AddShearStress()

Creates a new ShearStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShellBendingStress"></a>

### Solution.AddShellBendingStress()

Creates a new ShellBendingStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShellBottomPeakStress"></a>

### Solution.AddShellBottomPeakStress()

Creates a new ShellBottomPeakStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShellMembraneStress"></a>

### Solution.AddShellMembraneStress()

Creates a new ShellMembraneStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShellTopPeakStress"></a>

### Solution.AddShellTopPeakStress()

Creates a new ShellTopPeakStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddSpringProbe"></a>

### Solution.AddSpringProbe()

Creates a new SpringProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddStabilizationEnergy"></a>

### Solution.AddStabilizationEnergy()

Creates a new StabilizationEnergy

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddStrainProbe"></a>

### Solution.AddStrainProbe()

Creates a new StrainProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddStressFrequencyResponse"></a>

### Solution.AddStressFrequencyResponse()

Creates a new StressFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddStressIntensity"></a>

### Solution.AddStressIntensity()

Creates a new StressIntensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddStressPhaseResponse"></a>

### Solution.AddStressPhaseResponse()

Creates a new StressPhaseResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddStressProbe"></a>

### Solution.AddStressProbe()

Creates a new StressProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddStressTool"></a>

### Solution.AddStressTool()

Creates a new StressTool

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddStructuralError"></a>

### Solution.AddStructuralError()

Creates a new StructuralError

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddStructuralStrainEnergy"></a>

### Solution.AddStructuralStrainEnergy()

Creates a new StructuralStrainEnergy

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTemperatureProbe"></a>

### Solution.AddTemperatureProbe()

Creates a new TemperatureProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTemperature"></a>

### Solution.AddTemperature()

Creates a new TemperatureResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddThermalError"></a>

### Solution.AddThermalError()

Creates a new ThermalError

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddThermalStrainEnergy"></a>

### Solution.AddThermalStrainEnergy()

Creates a new ThermalStrainEnergy

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTopologyDensity"></a>

### Solution.AddTopologyDensity()

Creates a new TopologyDensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTopologyElementalDensity"></a>

### Solution.AddTopologyElementalDensity()

Creates a new TopologyElementalDensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalAcceleration"></a>

### Solution.AddTotalAcceleration()

Creates a new TotalAcceleration

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalAxialForce"></a>

### Solution.AddTotalAxialForce()

Creates a new TotalAxialForce

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalBendingMoment"></a>

### Solution.AddTotalBendingMoment()

Creates a new TotalBendingMoment

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalCurrentDensity"></a>

### Solution.AddTotalCurrentDensity()

Creates a new TotalCurrentDensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalDeformation"></a>

### Solution.AddTotalDeformation()

Creates a new TotalDeformation

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalElectricFieldIntensity"></a>

### Solution.AddTotalElectricFieldIntensity()

Creates a new TotalElectricFieldIntensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalElectricFluxDensity"></a>

### Solution.AddTotalElectricFluxDensity()

Creates a new TotalElectricFluxDensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalElectrostaticForce"></a>

### Solution.AddTotalElectrostaticForce()

Creates a new TotalElectrostaticForce

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalHeatFlux"></a>

### Solution.AddTotalHeatFlux()

Creates a new TotalHeatFlux

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalMagneticFieldIntensity"></a>

### Solution.AddTotalMagneticFieldIntensity()

Creates a new TotalMagneticFieldIntensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalMagneticFluxDensity"></a>

### Solution.AddTotalMagneticFluxDensity()

Creates a new TotalMagneticFluxDensity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalShearForce"></a>

### Solution.AddTotalShearForce()

Creates a new TotalShearForce

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearMomentDiagramMSUM"></a>

### Solution.AddShearMomentDiagramMSUM()

Creates a new TotalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearMomentDiagramUSUM"></a>

### Solution.AddShearMomentDiagramUSUM()

Creates a new TotalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddShearMomentDiagramVSUM"></a>

### Solution.AddShearMomentDiagramVSUM()

Creates a new TotalShearMomentDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalTorsionalMoment"></a>

### Solution.AddTotalTorsionalMoment()

Creates a new TotalTorsionalMoment

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddTotalVelocity"></a>

### Solution.AddTotalVelocity()

Creates a new TotalVelocity

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddUserDefinedResult"></a>

### Solution.AddUserDefinedResult()

Creates a new UserDefinedResult

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVariableGraph"></a>

### Solution.AddVariableGraph()

Creates a new VariableGraph

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVectorAxialForce"></a>

### Solution.AddVectorAxialForce()

Creates a new VectorAxialForce

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVectorBendingMoment"></a>

### Solution.AddVectorBendingMoment()

Creates a new VectorBendingMoment

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVectorDeformation"></a>

### Solution.AddVectorDeformation()

Creates a new VectorDeformation

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVectorHeatFlux"></a>

### Solution.AddVectorHeatFlux()

Creates a new VectorHeatFlux

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVectorPrincipalElasticStrain"></a>

### Solution.AddVectorPrincipalElasticStrain()

Creates a new VectorPrincipalElasticStrain

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVectorPrincipalStress"></a>

### Solution.AddVectorPrincipalStress()

Creates a new VectorPrincipalStress

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVectorShearForce"></a>

### Solution.AddVectorShearForce()

Creates a new VectorShearForce

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVectorTorsionalMoment"></a>

### Solution.AddVectorTorsionalMoment()

Creates a new VectorTorsionalMoment

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVelocityFrequencyResponse"></a>

### Solution.AddVelocityFrequencyResponse()

Creates a new VelocityFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVelocityPhaseResponse"></a>

### Solution.AddVelocityPhaseResponse()

Creates a new VelocityPhaseResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVelocityProbe"></a>

### Solution.AddVelocityProbe()

Creates a new VelocityProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVelocityWaterfallDiagram"></a>

### Solution.AddVelocityWaterfallDiagram()

Creates a new VelocityWaterfallDiagram

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVoltageFrequencyResponse"></a>

### Solution.AddVoltageFrequencyResponse()

Creates a new VoltageFrequencyResponse

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVolume"></a>

### Solution.AddVolume()

Creates a new Volume

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddVolumeProbe"></a>

### Solution.AddVolumeProbe()

Creates a new VolumeProbe

<!-- !! processed by numpydoc !! -->

<a id="Solution.GetChildren"></a>

### Solution.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id3"></a>

### Solution.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddComment"></a>

### Solution.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddFigure"></a>

### Solution.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Solution.AddImage"></a>

### Solution.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Solution.Activate"></a>

### Solution.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Solution.CopyTo"></a>

### Solution.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Solution.Duplicate"></a>

### Solution.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Solution.GroupAllSimilarChildren"></a>

### Solution.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Solution.GroupSimilarObjects"></a>

### Solution.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Solution.PropertyByName"></a>

### Solution.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Solution.PropertyByAPIName"></a>

### Solution.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Solution.CreateParameter"></a>

### Solution.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.GetParameter"></a>

### Solution.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Solution.RemoveParameter"></a>

### Solution.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

