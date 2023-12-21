# FTGEnabledGeometry – Activating the Fast Transmission Gathering on a Geometry

The following script sample shows you an example on how to activate the Fast Transmission Gathering on a geometry.

This action is done handling **FTGEnabledGeometry** object:

```
ftgGeometry = SpeosSim.FTGEnabledGeometry.Create()
ftgGeometry.FTGGeometry.Set(GetRootPart().Bodies[0])
ftgGeometry.IsFTG = True

directSimulation = SpeosSim.SimulationDirect.Create()
directSimulation.SetDirectSimulationSettings(True, True, 1800 )
directSimulation.Geometries.Add(ftgGeometry)
```