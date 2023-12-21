# SensorRotatingLidar – Creating a Rotating LiDAR Sensor

The following script sample shows you an example on how to create a Rotating LiDAR Sensor.

```
rotatingLidarSensor = SpeosSim.SensorRotatingLidar.Create()
rotatingLidarSensor.Name = "Created geometrical rotating LiDAR sensor"

rotatingLidarSensor.OriginPoint.Set(GetRootPart().Curves[0])
rotatingLidarSensor.HorizontalDirection.Set(GetRootPart().Curves[1])
rotatingLidarSensor.VerticalDirection.Set(GetRootPart().Curves[2])

rotatingLidarSensor.VerticalChannelFile = R".\SPEOS input files\hesai.txt"
```