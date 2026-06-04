---
uid: sensor_camera_builder
title: SensorCameraBuilder
---

# SensorCameraBuilder

**Full Name**: `SpeosNX_2512::SensorCameraBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents a Camera Sensor Builder.

The Camera Sensor Builder creates or edits Camera Sensor features.   




To create a new instance of this class, use FeatureCollection.CreateSensorCameraBuilder.  




With a surface source, you can simulate rays integration as in a real camera according to the camera parameters set.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 15036*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 15040*

---

## Public Static Attributes

#### `AxisSystem` : str

`public` `static`

Gets the Axis System of the Sensor.

**Value type**: AxisSystem object.

**Default value**: `=  property(fget=__GetAxisSystem)`

*Defined in `SpeosNX_2512.py` at line 15256*

---

#### `BlueGain` : str

`public` `static`

Gets or sets the blue gain.

**Prerequisite**: The WhiteBalanceMode property must be 2.  




**Value type**: Double.  




The default value is 1.0.

**Default value**: `=  property(fget=__GetBlueGain, fset=__SetBlueGain)`

*Defined in `SpeosNX_2512.py` at line 15265*

---

#### `CameraMode` : str

`public` `static`

Gets or sets the camera mode.

The values are:  

 0 - Geometric, it is a simplified version of the Camera Sensor definition parameters.  

 1 - Photometric / Colorimetric, it allows you to set every Camera Sensor parameters, including the photometric definition parameters.   




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetCameraMode, fset=__SetCameraMode)`

*Defined in `SpeosNX_2512.py` at line 15277*

---

#### `ColorMode` : str

`public` `static`

Gets or sets the color mode.

**Prerequisite**: The CameraMode property must be 1.  




The values are:  

 0 - Monochrome, the simulation results are available in grey scale.  

 1 - Color, the simulation results are available in color according to the White Balance mode.  




**Value type**: Integer.  




The default value is 1.

**Default value**: `=  property(fget=__GetColorMode, fset=__SetColorMode)`

*Defined in `SpeosNX_2512.py` at line 15290*

---

#### `DisplayAperture` : str

`public` `static`

Gets or sets the property to enable the preview of the Aperture.

True: Displays the Aperture.  

 False: Does not display the Aperture  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetDisplayAperture, fset=__SetDisplayAperture)`

*Defined in `SpeosNX_2512.py` at line 15300*

---

#### `DisplayCameraField` : str

`public` `static`

Gets or sets the property to enable the preview of the Camera Field.

True: Displays the Camera Field.  

 False: Does not display the Camera Field  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetDisplayCameraField, fset=__SetDisplayCameraField)`

*Defined in `SpeosNX_2512.py` at line 15310*

---

#### `DisplayObjectField` : str

`public` `static`

Gets or sets the property to enable the preview of the Object Field.

True: Displays the Object Field.  

 False: Does not display the Object Field  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetDisplayObjectField, fset=__SetDisplayObjectField)`

*Defined in `SpeosNX_2512.py` at line 15320*

---

#### `DistortionFilePath` : str

`public` `static`

Gets or sets the distortion file path.

**Value type**: String.  




The default value is an empty file path (string).

**Default value**: `=  property(fget=__GetDistortionFilePath, fset=__SetDistortionFilePath)`

*Defined in `SpeosNX_2512.py` at line 15327*

---

#### `FNumber` : str

`public` `static`

Gets or sets the F number.

Represents the aperture of the front lens.  




**Value type**: Double.  

 **Range**: The value must be superior to 0.  




The default value is 15.0.

**Default value**: `=  property(fget=__GetFNumber, fset=__SetFNumber)`

*Defined in `SpeosNX_2512.py` at line 15337*

---

#### `FocalLength` : str

`public` `static`

Gets or sets the focal length.

Distance between the center of the optical system and the focus.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.  




The default value is 15.0 mm.

**Default value**: `=  property(fget=__GetFocalLength, fset=__SetFocalLength)`

*Defined in `SpeosNX_2512.py` at line 15347*

---

#### `GammaCorrection` : str

`public` `static`

Gets or sets the gamma correction.

**Prerequisite**: The CameraMode property must be 1.  




Compensates the curve before the display on the screen.  




**Value type**: Double.  




The default value is 2.2.

**Default value**: `=  property(fget=__GetGammaCorrection, fset=__SetGammaCorrection)`

*Defined in `SpeosNX_2512.py` at line 15358*

---

#### `GreenGain` : str

`public` `static`

Gets or sets the green gain.

**Prerequisite**: The WhiteBalanceMode property must be 2.  




**Value type**: Double.  




The default value is 1.0.

**Default value**: `=  property(fget=__GetGreenGain, fset=__SetGreenGain)`

*Defined in `SpeosNX_2512.py` at line 15367*

---

#### `Height` : str

`public` `static`

Gets or sets the height .

Defines the sensor's height.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.  




The default value is 5.0 mm.

**Default value**: `=  property(fget=__GetHeight, fset=__SetHeight)`

*Defined in `SpeosNX_2512.py` at line 15377*

---

#### `HorizontalFOV` : str

`public` `static`

Gets the Horizontal Field of View.

**Value type**: Double.

**Default value**: `=  property(fget=__GetHorizontalFOV)`

*Defined in `SpeosNX_2512.py` at line 15383*

---

#### `HorizontalPixels` : str

`public` `static`

Gets or sets the horizontal pixels .

Defines the horizontal pixels number corresponding to the camera resolution.  




**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 640.

**Default value**: `=  property(fget=__GetHorizontalPixels, fset=__SetHorizontalPixels)`

*Defined in `SpeosNX_2512.py` at line 15393*

---

#### `ImagerDistance` : str

`public` `static`

Gets or sets the Image Distance.

**Value type**: Double (in mm).  




The default value is 15.0 mm.

**Default value**: `=  property(fget=__GetImagerDistance, fset=__SetImagerDistance)`

*Defined in `SpeosNX_2512.py` at line 15401*

---

#### `Layer` : str

`public` `static`

Gets or sets the layer mode.

The values are:  

 0 - None, the simulation generates a Speos360 file with one layer for all sources.  

 1 - Data separated by Source, the result includes one layer per active source.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetLayer, fset=__SetLayer)`

*Defined in `SpeosNX_2512.py` at line 15412*

---

#### `PNGBits` : str

`public` `static`

Gets or sets the PNG Bits.

**Prerequisite**: The CameraMode property must be 1.  




The values are:  

 0 - 8 Bits.  

 1 - 10 Bits.  

 2 - 12 Bits.  

 3 - 16 Bits.  




**Value type**: Integer.  




The default value is 3.

**Default value**: `=  property(fget=__GetPNGBits, fset=__SetPNGBits)`

*Defined in `SpeosNX_2512.py` at line 15427*

---

#### `RedGain` : str

`public` `static`

Gets or sets the red gain.

**Prerequisite**: The WhiteBalanceMode property must be 2.  




**Value type**: Double.  




The default value is 1.0.

**Default value**: `=  property(fget=__GetRedGain, fset=__SetRedGain)`

*Defined in `SpeosNX_2512.py` at line 15436*

---

#### `SensitivityBlueSpectrumFilePath` : str

`public` `static`

Gets or sets the sensitivity blue spectrum file path.

**Prerequisite**: The ColorMode property must be 1.  




**Value type**: String.  




The default value is an empty file path (string).

**Default value**: `=  property(fget=__GetSensitivityBlueSpectrumFilePath, fset=__SetSensitivityBlueSpectrumFilePath)`

*Defined in `SpeosNX_2512.py` at line 15445*

---

#### `SensitivityGreenSpectrumFilePath` : str

`public` `static`

Gets or sets the sensitivity green spectrum file path.

**Prerequisite**: The ColorMode property must be 1.  




**Value type**: String.  




The default value is an empty file path (string).

**Default value**: `=  property(fget=__GetSensitivityGreenSpectrumFilePath, fset=__SetSensitivityGreenSpectrumFilePath)`

*Defined in `SpeosNX_2512.py` at line 15454*

---

#### `SensitivityMonochromaticSpectrumFilePath` : str

`public` `static`

Gets or sets the sensitivity monochromatic spectrum file path.

**Prerequisite**: The ColorMode property must be 0.  




**Value type**: String.  




The default value is an empty file path (string).

**Default value**: `=  property(fget=__GetSensitivityMonochromaticSpectrumFilePath, fset=__SetSensitivityMonochromaticSpectrumFilePath)`

*Defined in `SpeosNX_2512.py` at line 15463*

---

#### `SensitivityRedSpectrumFilePath` : str

`public` `static`

Gets or sets the sensitivity red spectrum file path.

**Prerequisite**: The ColorMode property must be 1.  




**Value type**: String.  




The default value is an empty file path (string).

**Default value**: `=  property(fget=__GetSensitivityRedSpectrumFilePath, fset=__SetSensitivityRedSpectrumFilePath)`

*Defined in `SpeosNX_2512.py` at line 15472*

---

#### `TransmittanceFilePath` : str

`public` `static`

Gets or sets the transmittance file path.

**Value type**: String.  




The default value is an empty file path (string).

**Default value**: `=  property(fget=__GetTransmittanceFilePath, fset=__SetTransmittanceFilePath)`

*Defined in `SpeosNX_2512.py` at line 15479*

---

#### `VerticalFOV` : str

`public` `static`

Gets the Vertical Field of View.

**Value type**: Double.

**Default value**: `=  property(fget=__GetVerticalFOV)`

*Defined in `SpeosNX_2512.py` at line 15485*

---

#### `VerticalPixels` : str

`public` `static`

Gets or sets the vertical pixels .

Defines the vertical pixels number corresponding to the camera resolution.  




**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 480.

**Default value**: `=  property(fget=__GetVerticalPixels, fset=__SetVerticalPixels)`

*Defined in `SpeosNX_2512.py` at line 15495*

---

#### `VisualizationRadius` : str

`public` `static`

Gets or sets the Visualization radius.

Changes the radius of the Object field of the camera.  




**Value type**: Double (in mm).  

 **Range**: The parameter must be superior to 0.0.  




The default value is 1000.0 mm.

**Default value**: `=  property(fget=__GetVisualizationRadius, fset=__SetVisualizationRadius)`

*Defined in `SpeosNX_2512.py` at line 15505*

---

#### `WavelengthEnd` : str

`public` `static`

Gets or sets the higher value of the wavelength range to be considered by the sensor.

**Prerequisite**: The CameraMode property must be 1.  




The sensor does not take into account wavelengths beyond the borders that you define.  




**Value type**: Double (in nm).  




The default value is 700.0 nm.

**Default value**: `=  property(fget=__GetWavelengthEnd, fset=__SetWavelengthEnd)`

*Defined in `SpeosNX_2512.py` at line 15516*

---

#### `WavelengthResolution` : str

`public` `static`

Gets the Wavelength resolution.

**Prerequisite**: The CameraMode property must be 1.  




**Value type**: Double.

**Default value**: `=  property(fget=__GetWavelengthResolution)`

*Defined in `SpeosNX_2512.py` at line 15523*

---

#### `WavelengthSampling` : str

`public` `static`

Gets or sets the wavelength sampling.

**Prerequisite**: The CameraMode property must be 1.  




**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 13.

**Default value**: `=  property(fget=__GetWavelengthSampling, fset=__SetWavelengthSampling)`

*Defined in `SpeosNX_2512.py` at line 15533*

---

#### `WavelengthStart` : str

`public` `static`

Gets or sets the lower value of the wavelength range to be considered by the sensor.

**Prerequisite**: The CameraMode property must be 1.  




The sensor does not take into account wavelengths beyond the borders that you define.  




**Value type**: Double (in nm).  




The default value is 400.0 nm.

**Default value**: `=  property(fget=__GetWavelengthStart, fset=__SetWavelengthStart)`

*Defined in `SpeosNX_2512.py` at line 15544*

---

#### `WhiteBalanceBlueSpectrumFilePath` : str

`public` `static`

Gets or sets the white balance blue spectrum file path.

**Prerequisite**: The WhiteBalanceMode property must be 3.  




**Value type**: String.  




The default value is an empty file path (string).

**Default value**: `=  property(fget=__GetWhiteBalanceBlueSpectrumFilePath, fset=__SetWhiteBalanceBlueSpectrumFilePath)`

*Defined in `SpeosNX_2512.py` at line 15553*

---

#### `WhiteBalanceGreenSpectrumFilePath` : str

`public` `static`

Gets or sets the white balance green spectrum file path.

**Prerequisite**: The WhiteBalanceMode property must be 3.  




**Value type**: String.  




The default value is an empty file path (string).

**Default value**: `=  property(fget=__GetWhiteBalanceGreenSpectrumFilePath, fset=__SetWhiteBalanceGreenSpectrumFilePath)`

*Defined in `SpeosNX_2512.py` at line 15562*

---

#### `WhiteBalanceMode` : str

`public` `static`

Gets or sets the white balance mode.

**Prerequisite**: The ColorMode property must be 1.  




The values are:  

 0 - None.  

 1 - Grey World.  

 2 - Use White Balance.  

 3 - Display Primaries.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetWhiteBalanceMode, fset=__SetWhiteBalanceMode)`

*Defined in `SpeosNX_2512.py` at line 15577*

---

#### `WhiteBalanceRedSpectrumFilePath` : str

`public` `static`

Gets or sets the white balance red spectrum file path.

**Prerequisite**: The WhiteBalanceMode property must be 3.  




**Value type**: String.  




The default value is an empty file path (string).

**Default value**: `=  property(fget=__GetWhiteBalanceRedSpectrumFilePath, fset=__SetWhiteBalanceRedSpectrumFilePath)`

*Defined in `SpeosNX_2512.py` at line 15586*

---

#### `Width` : str

`public` `static`

Gets or sets the width .

Defines the sensor's width.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.  




The default value is 5.0 mm.

**Default value**: `=  property(fget=__GetWidth, fset=__SetWidth)`

*Defined in `SpeosNX_2512.py` at line 15596*

---

## Public Methods

#### `UpdateWavelengthSamplingFromResolution(self, resolution)`

`public`

Updates the wavelength sampling from a resolution.

**Parameters**:
- `Resolution`: 
Double.

*Defined in `SpeosNX_2512.py` at line 15246*

---

## Member Summary

| Member | Type |
|--------|------|
| `AxisSystem` | public |
| `BlueGain` | public |
| `CameraMode` | public |
| `ColorMode` | public |
| `DisplayAperture` | public |
| `DisplayCameraField` | public |
| `DisplayObjectField` | public |
| `DistortionFilePath` | public |
| `FNumber` | public |
| `FocalLength` | public |
| `GammaCorrection` | public |
| `GreenGain` | public |
| `Height` | public |
| `HorizontalFOV` | public |
| `HorizontalPixels` | public |
| `ImagerDistance` | public |
| `Layer` | public |
| `PNGBits` | public |
| `RedGain` | public |
| `SensitivityBlueSpectrumFilePath` | public |
| `SensitivityGreenSpectrumFilePath` | public |
| `SensitivityMonochromaticSpectrumFilePath` | public |
| `SensitivityRedSpectrumFilePath` | public |
| `TransmittanceFilePath` | public |
| `UpdateWavelengthSamplingFromResolution` | public |
| `VerticalFOV` | public |
| `VerticalPixels` | public |
| `VisualizationRadius` | public |
| `WavelengthEnd` | public |
| `WavelengthResolution` | public |
| `WavelengthSampling` | public |
| `WavelengthStart` | public |
| `WhiteBalanceBlueSpectrumFilePath` | public |
| `WhiteBalanceGreenSpectrumFilePath` | public |
| `WhiteBalanceMode` | public |
| `WhiteBalanceRedSpectrumFilePath` | public |
| `Width` | public |
| `thisown` | public |
