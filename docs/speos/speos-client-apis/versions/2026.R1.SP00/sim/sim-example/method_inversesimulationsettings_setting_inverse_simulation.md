# InverseSimulationSettings – Setting an inverse simulation

The following script sample shows you an example on how to set an Inverse Simulation.

**GetInverseSimulationSettings** returns an **InverseSimulationSettings** object that allows you to modify geometry and simulation settings.

The **InverseSimulationSettings** object includes five main methods:
 - **SetMonteCarlo** with the parameters
   - bool dispersion
   - bool splitting
   - int nbGatheringRaysPerSource
   - int maxGatheringError
   - bool fastTransmissionGathering
   - int automaticSaveFrequencySeconds
   - EnumOptimizedPropagationMode
   - optimizedPropagation
   - int nbStandardPassesBeforeOptimizedPasses, optional
 - **SetDeterminist** with the parameters:
   - EnumPhotonMapMode
   - photonMapMode
   - int ambientSampling
   - int maxNbSurfaceInteractions
   - bool antiAliasing
   - int specularApproxAngle
 - **SetDeterministPhotonMap** with the parameters:
   - int maxNeighbors
   - int maxSearchRadius
   - bool fastTransmissionGathering
   - bool useFinalGathering
   - int finalGatheringMaxNeighbors, optional
   - int finalGatheringSplittingNb, optional
 - **SetDeterministPhotonMapBuild** with the parameters:
   - int nbPhotonsInDirectPhase
   - int nbSurfaceInteractionsInDirectPhase
 - **SetPropagationErrorAnalysis\(*bool propagationErrorAnalysis*\)**

**SetInverseSimulationSettings** applies the changes made with the **GetInverseSimulationSettings** function.

```ironpython
settings = inverseSimulation2.GetInverseSimulationSettings()
settings.SetDeterminist(SIM.InverseSimulationSettings.EnumPhotonMapMode.Load, 100, 10, False, 0)
settings.SetDeterministPhotonMapBuild(10000,100)
settings.SetDeterministPhotonMap(100, 10000000, True, False)
settings.SetPropagationErrorAnalysis(True)
inverseSimulation2.SetInverseSimulationSettings(settings)
```