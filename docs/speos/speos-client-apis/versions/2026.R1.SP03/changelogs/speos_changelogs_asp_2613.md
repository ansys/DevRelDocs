# Speos Changelog 2026 R1 SP03

## Improvements

### Sensor Camera: Enhanced Features

Starting from version 2026 R1.3, the *.OPTDistortion binary file can now include diffraction effects data when exported from Ansys Zemax OpticStudio with the diffraction option enabled. Diffraction effects model the physical phenomenon where light waves bend and spread as they pass through small apertures or around obstacles, which affects image quality particularly in systems with small apertures or high-precision imaging requirements.

- SensorCamera API
  - Added [DiffractionEffectMode](./../sim/client-speos-sim.md#sensorcamera) property to the **SensorCamera** API
  - Added [DiffractionEffectModeIndex](./../sim/client-speos-sim.md#sensorcamera) property to the **SensorCamera** API
  - Added [EnableDiffractionEffect](./../sim/client-speos-sim.md#sensorcamera) property to the **SensorCamera** API
