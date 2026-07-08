# Sensor3Dirradiance – Creating a 3D irradiance sensor

The following script sample shows you an example on how to create a 3D Irradiance Sensor.

```ironpython
irradiance3DSensor = SpeosSim.Sensor3DIrradiance.Create()
irradiance3DSensor.SensorType = SpeosSim.Sensor3DIrradiance.EnumSensorType.Radiometric

irradiance3DSensor.Geometries.Set(GetRootPart().Bodies[1], GetRootPart().Bodies[2])

irradiance3DSensor.Absorption = True
irradiance3DSensor.Transmission = True
irradiance3DSensor.Reflection = True
```