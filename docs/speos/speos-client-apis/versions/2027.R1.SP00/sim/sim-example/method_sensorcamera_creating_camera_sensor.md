# SensorCamera – Creating a camera sensor

The following script sample shows you an example on how to create a Camera Sensor.

```ironpython
cameraSensor = SpeosSim.SensorCamera.Create()
cameraSensor.Name = "Created camera sensor"

cameraSensor.OriginPoint.Set(GetRootPart().Curves[0])
cameraSensor.XDirection.Set(GetRootPart().Curves[1])
cameraSensor.YDirection.Set(GetRootPart().Curves[2])

cameraSensor.DistorsionFile = R".\SPEOS input files\CameraDistortion.OPTDistortion"
cameraSensor.TransmittanceFile = R".\SPEOS input files\OPTIS_Transmittance.spectrum"
cameraSensor.RedSpectrumFile = R".\SPEOS input files\OPTIS_Sensitivity_Red.spectrum"
cameraSensor.GreenSpectrumFile = R".\SPEOS input files\OPTIS_Sensitivity_Green.spectrum"
cameraSensor.BlueSpectrumFile = R".\SPEOS input files\OPTIS_Sensitivity_Blue.spectrum"
cameraSensor.VisuRadius = 100

cameraSensor.Visible = False
```