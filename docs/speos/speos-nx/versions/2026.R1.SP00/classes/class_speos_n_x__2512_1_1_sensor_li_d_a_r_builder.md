---
uid: sensor_li_d_a_r_builder
title: SensorLiDARBuilder
---

# SensorLiDARBuilder

**Full Name**: `SpeosNX_2512::SensorLiDARBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents a LiDAR sensor Builder.

The Folder Builder creates or edits Folder features.   




To create a new instance of this class, use FeatureCollection.CreateSensorLiDARBuilder.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 16454*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 16458*

---

## Public Static Attributes

#### `AimingArea` : str

`public` `static`

Gets or sets the property to define an Aiming Area for the sensor.

True: Activates the Aiming Area.  

 False: Deactivates the Aiming Area.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetAimingArea, fset=__SetAimingArea)`

*Defined in `SpeosNX_2512.py` at line 16703*

---

#### `AimingAreaAxisSystem` : str

`public` `static`

Gets the aiming area axis system.

**Value type**: AxisSystem object.

**Default value**: `=  property(fget=__GetAimingAreaAxisSystem)`

*Defined in `SpeosNX_2512.py` at line 16708*

---

#### `AimingAreaHeight` : str

`public` `static`

Gets or sets the aiming area height of the sensor.

**Value type**: Double.  

 **Range**: The value must be superior to 0.0.  




The default value is 0.0.

**Default value**: `=  property(fget=__GetAimingAreaHeight, fset=__SetAimingAreaHeight)`

*Defined in `SpeosNX_2512.py` at line 16717*

---

#### `AimingAreaType` : str

`public` `static`

Gets or sets the aiming area type.

The values are:   

 0 - Rectangular.  

 1 - Elliptic.  




**Value type: Integer.  

**


** The default value is 1. **

**Default value**: `=  property(fget=__GetAimingAreaType, fset=__SetAimingAreaType)`

*Defined in `SpeosNX_2512.py` at line 16728*

---

#### `AimingAreaWidth` : str

`public` `static`

Gets or sets the aiming area width of the sensor.

**Value type**: Double.  

 **Range**: The value must be superior to 0.0.  




The default value is 0.0.

**Default value**: `=  property(fget=__GetAimingAreaWidth, fset=__SetAimingAreaWidth)`

*Defined in `SpeosNX_2512.py` at line 16737*

---

#### `DisplayObjectField` : str

`public` `static`

Gets or sets the property to display the object field.

True: Activates the visualization of the sensor's viewing angle in the 3D view.  

 False: Deactivates the visualization of the sensor's viewing angle in the 3D view.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetDisplayObjectField, fset=__SetDisplayObjectField)`

*Defined in `SpeosNX_2512.py` at line 16747*

---

#### `DisplayPupil` : str

`public` `static`

Gets or sets the property to display the pupil.

True: Activates the visualization of the sensor's lens in the 3D view.  

 False: Deactivates the visualization of the sensor's lens in the 3D view.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetDisplayPupil, fset=__SetDisplayPupil)`

*Defined in `SpeosNX_2512.py` at line 16757*

---

#### `DisplaySensorField` : str

`public` `static`

Gets or sets the property to display the sensor field.

True: Activates the visualization of the imager's field in the 3D view.  

 False: Deactivates the visualization of the imager's field in the 3D view.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetDisplaySensorField, fset=__SetDisplaySensorField)`

*Defined in `SpeosNX_2512.py` at line 16767*

---

#### `ObjectFieldRadius` : str

`public` `static`

Gets or sets the object field radius.

**Prerequisite**: The DisplayObjectField property must be True.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 100.0 mm.

**Default value**: `=  property(fget=__GetObjectFieldRadius, fset=__SetObjectFieldRadius)`

*Defined in `SpeosNX_2512.py` at line 16777*

---

#### `SensorAxisSystem` : str

`public` `static`

Gets the axis system of the sensor.

**Value type**: AxisSystem object.

**Default value**: `=  property(fget=__GetSensorAxisSystem)`

*Defined in `SpeosNX_2512.py` at line 16782*

---

#### `SensorDistortionFilePath` : str

`public` `static`

Gets or sets the distortion file of the sensor.

The file must be an .OPTDistortion file.


**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetSensorDistortionFilePath, fset=__SetSensorDistortionFilePath)`

*Defined in `SpeosNX_2512.py` at line 16791*

---

#### `SensorEnd` : str

`public` `static`

Gets or sets the end of the sensor.

**Value type**: Double.  

 **Range**: The value must be superior or equal to 0.0.  




The default value is 0.0.

**Default value**: `=  property(fget=__GetSensorEnd, fset=__SetSensorEnd)`

*Defined in `SpeosNX_2512.py` at line 16800*

---

#### `SensorFocalLength` : str

`public` `static`

Gets or sets the focal length of the sensor.

**Value type**: Double (in mm).  

 **Range**: The value must be superior or equal to 0.0.  




The default value is 15.0 mm.

**Default value**: `=  property(fget=__GetSensorFocalLength, fset=__SetSensorFocalLength)`

*Defined in `SpeosNX_2512.py` at line 16809*

---

#### `SensorHorizontalFOV` : str

`public` `static`

Gets the horizontal field of view of the sensor.

**Value type**: Double.

**Default value**: `=  property(fget=__GetSensorHorizontalFOV)`

*Defined in `SpeosNX_2512.py` at line 16815*

---

#### `SensorHorizontalPixels` : str

`public` `static`

Gets or sets the number of horizontal pixels of the sensor.

**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 64.

**Default value**: `=  property(fget=__GetSensorHorizontalPixels, fset=__SetSensorHorizontalPixels)`

*Defined in `SpeosNX_2512.py` at line 16824*

---

#### `SensorImagerHeight` : str

`public` `static`

Gets or sets the image height of the sensor.

**Value type**: Double.  

 **Range**: The value must be superior to 0.0.  




The default value is 3.2.

**Default value**: `=  property(fget=__GetSensorImagerHeight, fset=__SetSensorImagerHeight)`

*Defined in `SpeosNX_2512.py` at line 16833*

---

#### `SensorImagerWidth` : str

`public` `static`

Gets or sets the image width of the sensor.

**Value type**: Double.  

 **Range**: The value must be superior to 0.0.  




The default value is 3.2.

**Default value**: `=  property(fget=__GetSensorImagerWidth, fset=__SetSensorImagerWidth)`

*Defined in `SpeosNX_2512.py` at line 16842*

---

#### `SensorPupilDiameter` : str

`public` `static`

Gets or sets the pupil diameter of the sensor.

**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 10.0 mm.

**Default value**: `=  property(fget=__GetSensorPupilDiameter, fset=__SetSensorPupilDiameter)`

*Defined in `SpeosNX_2512.py` at line 16851*

---

#### `SensorResolution` : str

`public` `static`

Gets or sets the property to activate or deactivate the use of the sensor resolution.

True: Activates the use of the sensor resolution.  

 False: Deactivates the use of the sensor resolution.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetSensorResolution, fset=__SetSensorResolution)`

*Defined in `SpeosNX_2512.py` at line 16861*

---

#### `SensorSpatialAccuracy` : str

`public` `static`

Gets or sets the spatial accuracy of the sensor.

**Value type**: Double.  

 **Range**: The value must be superior to 0.0.  




The default value is 100.0.

**Default value**: `=  property(fget=__GetSensorSpatialAccuracy, fset=__SetSensorSpatialAccuracy)`

*Defined in `SpeosNX_2512.py` at line 16870*

---

#### `SensorStart` : str

`public` `static`

Gets or sets the start of the sensor.

**Value type**: Double.  

 **Range**: The value must be superior or equal to 0.0.  




The default value is 0.0.

**Default value**: `=  property(fget=__GetSensorStart, fset=__SetSensorStart)`

*Defined in `SpeosNX_2512.py` at line 16879*

---

#### `SensorTransmittance` : str

`public` `static`

Gets or sets the transmittance of the sensor.

**Value type**: Double.  

 **Range**: The value must be superior to 0.0.  




The default value is 85.0.

**Default value**: `=  property(fget=__GetSensorTransmittance, fset=__SetSensorTransmittance)`

*Defined in `SpeosNX_2512.py` at line 16888*

---

#### `SensorTransmittanceFilePath` : str

`public` `static`

Gets or sets the transmittance file of the sensor.

**Prerequisite**: This property is only available for LiDAR sensor scanning or rotating with the SourceSpectrumType property sets to Library.  




The file must be a spectrum (.spectrum).


**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetSensorTransmittanceFilePath, fset=__SetSensorTransmittanceFilePath)`

*Defined in `SpeosNX_2512.py` at line 16899*

---

#### `SensorType` : str

`public` `static`

Gets or sets the sensor type.

The values are:   

 0 - Static.  

 1 - Scanning.  

 2 - Rotating.  




**Value type: Integer.  

**


** The default value is 0. **

**Default value**: `=  property(fget=__GetSensorType, fset=__SetSensorType)`

*Defined in `SpeosNX_2512.py` at line 16911*

---

#### `SensorVerticalFOV` : str

`public` `static`

Gets the vertical field of view of the sensor.

**Value type**: Double.

**Default value**: `=  property(fget=__GetSensorVerticalFOV)`

*Defined in `SpeosNX_2512.py` at line 16917*

---

#### `SensorVerticalPixels` : str

`public` `static`

Gets or sets the number of vertical pixels of the sensor.

**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 64.

**Default value**: `=  property(fget=__GetSensorVerticalPixels, fset=__SetSensorVerticalPixels)`

*Defined in `SpeosNX_2512.py` at line 16926*

---

#### `SourceAxisSystem` : str

`public` `static`

Gets the axis system of the source.

**Value type**: AxisSystem object.

**Default value**: `=  property(fget=__GetSourceAxisSystem)`

*Defined in `SpeosNX_2512.py` at line 16931*

---

#### `SourceIntensityFWHMXAngle` : str

`public` `static`

Gets or sets the FWHM angle for X direction of the source.

**Value type**: Double (in degree).  

 **Range**: [0.0, 180.0].  




The default value is 0.2 deg.

**Default value**: `=  property(fget=__GetSourceIntensityFWHMXAngle, fset=__SetSourceIntensityFWHMXAngle)`

*Defined in `SpeosNX_2512.py` at line 16940*

---

#### `SourceIntensityFWHMYAngle` : str

`public` `static`

Gets or sets the FWHM angle for Y direction of the source.

**Value type**: Double (in degree).  

 **Range**: [0.0, 180.0].  




The default value is 0.2 deg.

**Default value**: `=  property(fget=__GetSourceIntensityFWHMYAngle, fset=__SetSourceIntensityFWHMYAngle)`

*Defined in `SpeosNX_2512.py` at line 16949*

---

#### `SourceIntensityFilePath` : str

`public` `static`

Gets or sets the intensity distribution file of the source.

The file must be an IES (.ies) or Eulumdat (.ldt).  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetSourceIntensityFilePath, fset=__SetSourceIntensityFilePath)`

*Defined in `SpeosNX_2512.py` at line 16958*

---

#### `SourceIntensityTotalAngle` : str

`public` `static`

Gets or sets the total angle of emission of the source.

**Value type**: Double (in degree).  

 **Range**: [0.0, 180.0].  




The default value is 180 deg.

**Default value**: `=  property(fget=__GetSourceIntensityTotalAngle, fset=__SetSourceIntensityTotalAngle)`

*Defined in `SpeosNX_2512.py` at line 16967*

---

#### `SourceIntensityType` : str

`public` `static`

Gets or sets the intensity type of the source.

The values are:   

 0 - Library.  

 1 - Gaussian.  




**Value type: Integer.  

**


** The default value is 1. **

**Default value**: `=  property(fget=__GetSourceIntensityType, fset=__SetSourceIntensityType)`

*Defined in `SpeosNX_2512.py` at line 16978*

---

#### `SourceMinIntensityThreshold` : str

`public` `static`

Gets or sets the minimum intensity threshold of the source.

**Value type**: Double.  

 **Range**: [0.0, 100.0]  




The default value is 1.0.

**Default value**: `=  property(fget=__GetSourceMinIntensityThreshold, fset=__SetSourceMinIntensityThreshold)`

*Defined in `SpeosNX_2512.py` at line 16987*

---

#### `SourcePulseEnergy` : str

`public` `static`

Gets or sets the pulse energy of the source.

**Value type**: Double (in joule).  

 **Range**: The value must be superior to 0.0.  




The default value is 0.0000003 j.

**Default value**: `=  property(fget=__GetSourcePulseEnergy, fset=__SetSourcePulseEnergy)`

*Defined in `SpeosNX_2512.py` at line 16996*

---

#### `SourceRotatingSequenceFilePath` : str

`public` `static`

Gets or sets the rotating sequence file of the source.

The file must be a text (.txt).  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetSourceRotatingSequenceFilePath, fset=__SetSourceRotatingSequenceFilePath)`

*Defined in `SpeosNX_2512.py` at line 17005*

---

#### `SourceScanningSequenceFilePath` : str

`public` `static`

Gets or sets the scanning sequence file of the source.

The file must be a scanning sequence (.OPTScanSequence) or text (.txt).  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetSourceScanningSequenceFilePath, fset=__SetSourceScanningSequenceFilePath)`

*Defined in `SpeosNX_2512.py` at line 17014*

---

#### `SourceSpectrumFilePath` : str

`public` `static`

Gets or sets the spectrum file of the source.

The file must be a spectrum (.spectrum).  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetSourceSpectrumFilePath, fset=__SetSourceSpectrumFilePath)`

*Defined in `SpeosNX_2512.py` at line 17023*

---

#### `SourceSpectrumType` : str

`public` `static`

Gets or sets the spectrum type of the source.

The values are:   

 0 - Library.  

 1 - Monochromatic.  




**Value type: Integer.  

**


** The default value is 1. **

**Default value**: `=  property(fget=__GetSourceSpectrumType, fset=__SetSourceSpectrumType)`

*Defined in `SpeosNX_2512.py` at line 17034*

---

#### `SourceTrajectoryFilePath` : str

`public` `static`

Gets or sets the trajectory file of the source.

The file must be a Json (.json).  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetSourceTrajectoryFilePath, fset=__SetSourceTrajectoryFilePath)`

*Defined in `SpeosNX_2512.py` at line 17043*

---

#### `SourceUseTrajectoryFile` : str

`public` `static`

Gets or sets the property to activate or deactivate the use of the trajectory file.

True: Activates the use of the trajectory file.  

 False: Deactivates the use of the trajectory file.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetSourceUseTrajectoryFile, fset=__SetSourceUseTrajectoryFile)`

*Defined in `SpeosNX_2512.py` at line 17053*

---

#### `SourceWavelength` : str

`public` `static`

Gets or sets the wavelength of the source.

**Value type**: Double (in nm).  

 **Range**: The value must be superior to 0.0.  




The default value is 940.0 nm.

**Default value**: `=  property(fget=__GetSourceWavelength, fset=__SetSourceWavelength)`

*Defined in `SpeosNX_2512.py` at line 17061*

---

#### `SystemAxisSystem` : str

`public` `static`

Gets the axis system of the LiDAR system.

**Value type**: AxisSystem object.

**Default value**: `=  property(fget=__GetSystemAxisSystem)`

*Defined in `SpeosNX_2512.py` at line 17066*

---

## Member Summary

| Member | Type |
|--------|------|
| `AimingArea` | public |
| `AimingAreaAxisSystem` | public |
| `AimingAreaHeight` | public |
| `AimingAreaType` | public |
| `AimingAreaWidth` | public |
| `DisplayObjectField` | public |
| `DisplayPupil` | public |
| `DisplaySensorField` | public |
| `ObjectFieldRadius` | public |
| `SensorAxisSystem` | public |
| `SensorDistortionFilePath` | public |
| `SensorEnd` | public |
| `SensorFocalLength` | public |
| `SensorHorizontalFOV` | public |
| `SensorHorizontalPixels` | public |
| `SensorImagerHeight` | public |
| `SensorImagerWidth` | public |
| `SensorPupilDiameter` | public |
| `SensorResolution` | public |
| `SensorSpatialAccuracy` | public |
| `SensorStart` | public |
| `SensorTransmittance` | public |
| `SensorTransmittanceFilePath` | public |
| `SensorType` | public |
| `SensorVerticalFOV` | public |
| `SensorVerticalPixels` | public |
| `SourceAxisSystem` | public |
| `SourceIntensityFWHMXAngle` | public |
| `SourceIntensityFWHMYAngle` | public |
| `SourceIntensityFilePath` | public |
| `SourceIntensityTotalAngle` | public |
| `SourceIntensityType` | public |
| `SourceMinIntensityThreshold` | public |
| `SourcePulseEnergy` | public |
| `SourceRotatingSequenceFilePath` | public |
| `SourceScanningSequenceFilePath` | public |
| `SourceSpectrumFilePath` | public |
| `SourceSpectrumType` | public |
| `SourceTrajectoryFilePath` | public |
| `SourceUseTrajectoryFile` | public |
| `SourceWavelength` | public |
| `SystemAxisSystem` | public |
| `thisown` | public |
