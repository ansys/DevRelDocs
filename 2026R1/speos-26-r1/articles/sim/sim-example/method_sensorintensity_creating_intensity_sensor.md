# SensorIntensity – Creating an intensity sensor

The following script sample shows you an example on how to create a 3D Energy Density Sensor.

```ironpython
densitySensor = SpeosSim.Sensor3DED.Create()

densitySensor.OriginPoint.Set(GetRootPart().CoordinateSystems[1])
densitySensor.XDirection.Set(GetRootPart().CoordinateSystems[1].Axes[0])
densitySensor.YDirection.Set(GetRootPart().CoordinateSystems[1].Axes[1])

densitySensor.SensorType = SpeosSim.Sensor3DED.EnumSensorType.Radiometric
densitySensor.SizeX = 20
densitySensor.SizeY = 45
densitySensor.SizeZ = 20
densitySensor.SamplingX = 200
densitySensor.SamplingY = 450
densitySensor.SamplingZ = 200
```