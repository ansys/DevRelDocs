# SensorObserver – Creating an observer sensor

The following script sample shows you an example on how to create an Observer Sensor.

```ironpython
observerSensor = SpeosSim.SensorObserver.Create()

observerSensor.OriginPoint.Set(GetRootPart().Curves[0])
observerSensor.VerticalDirection.Set(GetRootPart().CoordinateSystems[0].Axes[1])
observerSensor.HorizontalDirection.Set(GetRootPart().CoordinateSystems[0].Axes[0])

observerSensor.ObserverVStart = 20
observerSensor.ObserverVEnd = 40
observerSensor.ObserverVSampling = 1

observerSensor.ObserverHStart = -180
observerSensor.ObserverHEnd =180
observerSensor.ObserverHSampling = 18

observerSensor.SizeHMirrorExtent = True
observerSensor.SizeHEnd = 40
observerSensor.SizeHSampling = 400
observerSensor.SizeVMirrorExtent = True
observerSensor.SizeVEnd = 40
observerSensor.SizeVSampling = 400

observerSensor.Distance = 200
observerSensor.Focal = 100
```