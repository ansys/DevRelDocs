# SimulationDirect – Creating a direct simulation

The following script sample shows you an example on how to create a Direct Simulation.

```ironpython
directSpeosSimulation = SpeosSim.SpeosSimulationDirect.Create()
directSpeosSimulation.Geometries.SelectAll()
directSpeosSimulation.Sources.SelectAll()
directSpeosSimulation.Sensors.SelectAll()
directSpeosSimulation.NbRays = 10000

directSpeosSimulation.Compute()
directSpeosSimulation.Isolate()
directSpeosSimulation.LinkedExport()
```