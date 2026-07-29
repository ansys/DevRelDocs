# SimulationRotatingLidar – Creating a rotating LiDAR simulation

The following script sample shows you an example on how to create a Rotating LiDAR Simulation.

```ironpython
lidarGeoSimu = SpeosSim.SimulationRotatingLidar.Create()
lidarGeoSimu.Name = "New geometrical rotating LiDAR simulation"

lidarGeoSimu.Geometries.SelectAll()
lidarGeoSimu.Sensors.SelectAll()
lidarGeoSimu.Visualization = SpeosSim.SimulationRotatingLidar.EnumVisualization.ImpactsAndRays
```