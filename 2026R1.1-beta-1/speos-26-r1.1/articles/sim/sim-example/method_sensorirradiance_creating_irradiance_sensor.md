# SensorIrradiance – Creating an irradiance sensor

The following script sample shows you an example on how to create an Irradiance Sensor.

```ironpython
irradianceSensor = SpeosSim.SensorIrradiance.Create()

irradianceSensor.OriginPoint.Set(GetRootPart().CoordinateSystems[0])
irradianceSensor.XDirection.Set(GetRootPart().CoordinateSystems[0].Axes[0])
irradianceSensor.XDirectionReverse = True
irradianceSensor.YDirection.Set(GetRootPart().CoordinateSystems[0].Axes[1])

irradianceSensor.XIsMirrored = True
irradianceSensor.XEnd = 15
irradianceSensor.YIsMirrored = True
irradianceSensor.YEnd = 15
```