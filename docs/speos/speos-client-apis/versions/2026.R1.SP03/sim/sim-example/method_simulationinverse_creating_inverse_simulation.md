# SimulationInverse – Creating an inverse simulation

The following script sample shows you an example on how to create an Inverse Simulation.

```ironpython
inverseSimulation = SpeosSim.SimulationInverse.Create()
inverseSimulation.Geometries.SelectAll()
inverseSimulation.Sensors.SelectAll()

simulationSetting = inverseSimulation.GetInverseSimulationSettings()
simulationSetting.SetDeterminist(SpeosSim.InverseSimulationSettings.EnumPhotonMapMode.None, 100, 10, False, 0)
inverseSimulation.SetInverseSimulationSettings(simulationSetting)
```