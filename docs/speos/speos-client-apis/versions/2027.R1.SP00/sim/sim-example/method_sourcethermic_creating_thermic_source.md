# SourceThermic – Creating a thermic source

The following script sample shows you an example on how to create a Thermic Source.

```ironpython
thermicSource = SpeosSim.SourceThermic.Create()
thermicSource.Name = "Landsystem"
thermicSource.EmittanceType = SpeosSim.SourceThermic.EnumEmittanceType.TemperatureField

thermicSource.TemperatureFieldFile = ".\\SPEOS input files\\TemperatureField_Tank.OPTTemperatureField"
thermicSource.OriginPoint.Set(GetRootPart().CoordinateSystems[0])
thermicSource.XDirection.Set(GetRootPart().CoordinateSystems[0].Axes[0])
thermicSource.YDirection.Set(GetRootPart().CoordinateSystems[0].Axes[2])
thermicSource.DisplayModeType = SpeosSim.SourceThermic.EnumDisplayModeType.BoundingBox

thermicSource.OpticalPropertiesType = SpeosSim.SourceThermic.EnumOpticalPropertiesType.Library
thermicSource.SOPLibrary = ".\\SPEOS input files\\LandSystem.scattering"
```