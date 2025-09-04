# SensorRadiance – Creating a radiance sensor

The following script sample shows you an example on how to create a Radiance Sensor.

```ironpython
radianceSensor = SpeosSim.SensorRadiance.Create()
radianceSensor.SensorType = SpeosSim.SensorRadiance.EnumSensorType.Colorimetric
radianceSensor.LayerType = SpeosSim.SensorRadiance.EnumLayerType.OptisLayerSource
radianceSensor.Name = "Outside"

radianceSensor.OriginPoint.Set(GetRootPart().CoordinateSystems[0])
radianceSensor.XDirection.Set(GetRootPart().CoordinateSystems[0].Axes[0])
radianceSensor.YDirection.Set(GetRootPart().CoordinateSystems[0].Axes[1])

radianceSensor.XIsMirrored = True
radianceSensor.XEnd = 800
radianceSensor.XNbSamples = 800

radianceSensor.YIsMirrored = True
radianceSensor.YEnd = 600
radianceSensor.YNbSamples = 600

radianceSensor.Focal = 2000
```