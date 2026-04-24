# SensorImmersive – Creating an immersive sensor

The following script sample shows you an example on how to create a Immersive Sensor.

```ironpython
immersiveSensor = SpeosSim.SensorImmersive.Create()

immersiveSensor.OriginPoint.Set(GetRootPart().CoordinateSystems[1])
immersiveSensor.TopDirection.Set(GetRootPart().CoordinateSystems[1].Axes[1])
immersiveSensor.FrontDirection.Set(GetRootPart().Curves[0])
immersiveSensor.FrontDirectionReverse = True

immersiveSensor.Back = False
immersiveSensor.Top = False
immersiveSensor.Bottom = False

immersiveSensor.LayerType = SpeosSim.SensorImmersive.EnumLayerType.OptisLayerSource
```