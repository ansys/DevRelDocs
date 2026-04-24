# SensorLidar – Creating a LiDAR sensor

The following script sample shows you an example on how to create a LiDAR Sensor.

```ironpython
lidarSensor = SpeosSim.SensorLidar.Create()
lidarSensor.Name = "Created LiDAR sensor"

lidarSensor.OriginPoint.Set(GetRootPart().Curves[0])
lidarSensor.SensorXDirection.Set(GetRootPart().Curves[1])
lidarSensor.SensorYDirection.Set(GetRootPart().Curves[2])

lidarSensor.SourceOriginPoint.Set(GetRootPart().Curves[0])
lidarSensor.SourceXDirection.Set(GetRootPart().Curves[1])
lidarSensor.SourceYDirection.Set(GetRootPart().Curves[2])

lidarSensor.IntensityFile = R".\SPEOS input files\(Defaut) IES C.ies"
lidarSensor.DistorsionFile = R".\SPEOS input files\Distortion.OPTDistortion"
```