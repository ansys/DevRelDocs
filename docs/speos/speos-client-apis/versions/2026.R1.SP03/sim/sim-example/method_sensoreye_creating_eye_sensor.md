# SensorEye – Creating an eye sensor

The following script sample shows you an example on how to create a Human Eye Sensor.

```ironpython
eyeSensor = SpeosSim.SensorEye.Create()
eyeSensor.OriginPoint.Set(GetRootPart().Curves[1])
eyeSensor.TargetPoint.Set(GetRootPart().Curves[0])
eyeSensor.TopDirection.Set(GetRootPart().Curves[2])

eyeSensor.XMirrorExtent = True
eyeSensor.XEnd = 5
eyeSensor.YMirrorExtent = True
eyeSensor.YEnd = 5

tempSamples = eyeSensor.XNbSamples
eyeSensor.XNbSamples = int(tempSamples/10)

tempSamples = eyeSensor.YNbSamples
eyeSensor.YNbSamples = int(tempSamples/10)
```