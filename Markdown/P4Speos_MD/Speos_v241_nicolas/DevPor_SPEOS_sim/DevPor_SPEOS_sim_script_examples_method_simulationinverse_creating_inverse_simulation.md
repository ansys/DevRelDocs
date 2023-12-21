# SimulationInverse – Creating an Inverse Simulation

The following script sample shows you an example on how to create an Inverse Simulation.

```
inverseSimulation = SpeosSim.SimulationInverse.Create()
inverseSimulation.Geometries.SelectAll()
inverseSimulation.Sensors.SelectAll()

simulationSetting = inverseSimulation.GetInverseSimulationSettings()
simulationSetting.SetDeterminist(SpeosSim.InverseSimulationSettings.EnumPhotonMapMode.None, 100, 10, False, 0)
inverseSimulation.SetInverseSimulationSettings(simulationSetting)
```