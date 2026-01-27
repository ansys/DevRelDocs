---
uid: sensor_human_eye_builder
title: SensorHumanEyeBuilder
---

# SensorHumanEyeBuilder

**Full Name**: `SpeosNX_2512::SensorHumanEyeBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents a Human Eye Sensor Builder.

The Human Eye Sensor Builder is used to create and edit Human Eye Sensor features.


To create a new instance of this class, use `FeatureCollection::CreateSensorHumanEyeBuilder`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 16011*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 16015*

---

## Public Static Attributes

#### `DisplayPropertiesFromFile` : str

`public` `static`

Gets or sets the property to enable the use of display properties that come from File.

**Prerequisite**: The property UseTemplateFile must be True.  




True: Uses all the grid related values from the .xml file.  

 False: Does not use the Display properties from file.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetDisplayPropertiesFromFile, fset=__SetDisplayPropertiesFromFile)`

*Defined in `SpeosNX_2512.py` at line 16195*

---

#### `EyePoint` : str

`public` `static`

Gets or sets the eye point.

The EyePoint property takes and returns a Tag from an NX object.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetEyePoint, fset=__SetEyePoint)`

*Defined in `SpeosNX_2512.py` at line 16204*

---

#### `GridOriginX` : str

`public` `static`

Gets or sets the grid X origin.

**Value type**: Double.  




The default value is 0.0.

**Default value**: `=  property(fget=__GetGridOriginX, fset=__SetGridOriginX)`

*Defined in `SpeosNX_2512.py` at line 16211*

---

#### `GridOriginY` : str

`public` `static`

Gets or sets the grid Y origin.

**Value type**: Double.  




The default value is 0.0.

**Default value**: `=  property(fget=__GetGridOriginY, fset=__SetGridOriginY)`

*Defined in `SpeosNX_2512.py` at line 16218*

---

#### `GridStepX` : str

`public` `static`

Gets or sets the grid X step.

**Value type**: Double.  

 **Range**: The value must be superior to 0.  




The default value is 10.0.

**Default value**: `=  property(fget=__GetGridStepX, fset=__SetGridStepX)`

*Defined in `SpeosNX_2512.py` at line 16226*

---

#### `GridStepY` : str

`public` `static`

Gets or sets the grid Y step.

**Value type**: Double.  

 **Range**: The value must be superior to 0.  




The default value is 10.0.

**Default value**: `=  property(fget=__GetGridStepY, fset=__SetGridStepY)`

*Defined in `SpeosNX_2512.py` at line 16234*

---

#### `LayerType` : str

`public` `static`

Gets or sets the layer mode.

The values are:  

 0 - None.  

 1 - Data Separated by Source.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetLayerType, fset=__SetLayerType)`

*Defined in `SpeosNX_2512.py` at line 16245*

---

#### `PupilDiameter` : str

`public` `static`

Gets or sets the pupil diameter.

**Value type**: Double.  

 **Range**: The value must be superior to 0.0.  




The default value is 4.0.

**Default value**: `=  property(fget=__GetPupilDiameter, fset=__SetPupilDiameter)`

*Defined in `SpeosNX_2512.py` at line 16253*

---

#### `ShowGrid` : str

`public` `static`

Gets or sets the property to enable grid preview.

True: Displays a grid on the sensor.  

 False: Does not display a grid on the sensor.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetShowGrid, fset=__SetShowGrid)`

*Defined in `SpeosNX_2512.py` at line 16263*

---

#### `TargetPoint` : str

`public` `static`

Gets or sets the target point.

The TargetPoint property takes and returns a Tag from an NX object.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetTargetPoint, fset=__SetTargetPoint)`

*Defined in `SpeosNX_2512.py` at line 16272*

---

#### `TemplateFilePath` : str

`public` `static`

Gets or sets the XM3 template file.

**Prerequisite**: The property TemplateFile must be True.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetTemplateFilePath, fset=__SetTemplateFilePath)`

*Defined in `SpeosNX_2512.py` at line 16281*

---

#### `Type` : str

`public` `static`

Gets or sets the sensor type.

The values are:  

 0 - Colorimetric to get the color results without any spectral layer separation.  

 1 - Spectral to get the color results and spectral data separated by wavelength.   




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetType, fset=__SetType)`

*Defined in `SpeosNX_2512.py` at line 16292*

---

#### `UseTemplateFile` : str

`public` `static`

Gets or sets the property to enable or disable use of XM3 template file.

True: Uses XM3 template file.  

 False: Does not use XM3 template file.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetUseTemplateFile, fset=__SetUseTemplateFile)`

*Defined in `SpeosNX_2512.py` at line 16302*

---

#### `VerticalDirection` : str

`public` `static`

Gets or sets the vertical direction.

The VerticalDirection property takes and returns a Tag from an NX object.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetVerticalDirection, fset=__SetVerticalDirection)`

*Defined in `SpeosNX_2512.py` at line 16311*

---

#### `VerticalDirectionReversed` : str

`public` `static`

Gets or sets the reverse vertical direction.

Returns the flag to indicate the vertical direction is reversed.  

 True: Reverses the vertical direction.  

 False: Does not reverse the vertical direction.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetVerticalDirectionReversed, fset=__SetVerticalDirectionReversed)`

*Defined in `SpeosNX_2512.py` at line 16322*

---

#### `VisionFieldHorizontalEnd` : str

`public` `static`

Gets or sets the horizontal end for vision field.

Vision Field corresponds to the surface on which are located observer positions around target point.  




**Value type**: Double (in degrees).  

 **Range**: [-90.0, 90.0]  




The default value is 20.0 degrees.

**Default value**: `=  property(fget=__GetVisionFieldHorizontalEnd, fset=__SetVisionFieldHorizontalEnd)`

*Defined in `SpeosNX_2512.py` at line 16332*

---

#### `VisionFieldHorizontalMirroredExtent` : str

`public` `static`

Gets or sets the mirrored extent property for horizontal vision field.

Vision Field corresponds to the surface on which are located observer positions around target point.  




True: VisionFieldHorizontalStart == -VisionFieldHorizontalEnd, you can only change the VisionFieldHorizontalEnd value.  

 False: VisionFieldHorizontalStart and VisionFieldHorizontalEnd can have different value.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetVisionFieldHorizontalMirroredExtent, fset=__SetVisionFieldHorizontalMirroredExtent)`

*Defined in `SpeosNX_2512.py` at line 16344*

---

#### `VisionFieldHorizontalResolution` : str

`public` `static`

Gets or sets the horizontal resolution for vision field.

Vision Field corresponds to the surface on which are located observer positions around target point.  




**Value type**: Double.  

 **Range**: The value must be superior to 0.

**Default value**: `=  property(fget=__GetVisionFieldHorizontalResolution, fset=__SetVisionFieldHorizontalResolution)`

*Defined in `SpeosNX_2512.py` at line 16352*

---

#### `VisionFieldHorizontalSampling` : str

`public` `static`

Gets the horizontal sampling for vision field.

Vision Field corresponds to the surface on which are located observer positions around target point.

**Default value**: `=  property(fget=__GetVisionFieldHorizontalSampling, fset=__SetVisionFieldHorizontalSampling)`

*Defined in `SpeosNX_2512.py` at line 16357*

---

#### `VisionFieldHorizontalStart` : str

`public` `static`

Gets or sets the horizontal start for vision field.

Vision Field corresponds to the surface on which are located observer positions around target point.  




**Value type**: Double (in degrees).  

 **Range**: [-90.0, 90.0]  




The default value is -20.0 degrees.

**Default value**: `=  property(fget=__GetVisionFieldHorizontalStart, fset=__SetVisionFieldHorizontalStart)`

*Defined in `SpeosNX_2512.py` at line 16367*

---

#### `VisionFieldVerticalEnd` : str

`public` `static`

Gets or sets the vertical end for vision field.

Vision Field corresponds to the surface on which are located observer positions around target point.  




**Value type**: Double (in degrees).  

 **Range**: [-90.0, 90.0]  




The default value is 10.0 degrees.

**Default value**: `=  property(fget=__GetVisionFieldVerticalEnd, fset=__SetVisionFieldVerticalEnd)`

*Defined in `SpeosNX_2512.py` at line 16377*

---

#### `VisionFieldVerticalMirroredExtent` : str

`public` `static`

Gets or sets the mirrored extent property for vertical vision field.

Vision Field corresponds to the surface on which are located observer positions around target point.  




True: VisionFieldVerticalStart == -VisionFieldVerticalEnd, you can only change the VisionFieldVerticalEnd value.  

 False: VisionFieldVerticalStart and VisionFieldVerticalEnd can have different value.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetVisionFieldVerticalMirroredExtent, fset=__SetVisionFieldVerticalMirroredExtent)`

*Defined in `SpeosNX_2512.py` at line 16389*

---

#### `VisionFieldVerticalResolution` : str

`public` `static`

Gets or sets the vertical resolution for vision field.

Vision Field corresponds to the surface on which are located observer positions around target point.   




**Value type**: Double.

**Default value**: `=  property(fget=__GetVisionFieldVerticalResolution, fset=__SetVisionFieldVerticalResolution)`

*Defined in `SpeosNX_2512.py` at line 16396*

---

#### `VisionFieldVerticalSampling` : str

`public` `static`

Gets the vertical sampling for vision field.

Vision Field corresponds to the surface on which are located observer positions around target point.  




**Value type**: Integer.

**Default value**: `=  property(fget=__GetVisionFieldVerticalSampling, fset=__SetVisionFieldVerticalSampling)`

*Defined in `SpeosNX_2512.py` at line 16403*

---

#### `VisionFieldVerticalStart` : str

`public` `static`

Gets or sets the vertical start for vision field.

Vision Field corresponds to the surface on which are located observer positions around target point.   




**Value type**: Double (in degrees).  

 **Range**: [-90.0, 90.0]  




The default value is -10.0 degrees.

**Default value**: `=  property(fget=__GetVisionFieldVerticalStart, fset=__SetVisionFieldVerticalStart)`

*Defined in `SpeosNX_2512.py` at line 16413*

---

#### `WavelengthEnd` : str

`public` `static`

Gets the higher value of the wavelength range to be considered by the sensor.

**Value type**: Double (in nm).  




The default value is 830.0 nm.

**Default value**: `=  property(fget=__GetWavelengthEnd)`

*Defined in `SpeosNX_2512.py` at line 16421*

---

#### `WavelengthResolution` : str

`public` `static`

Gets or sets the Wavelength resolution.

**Value type**: Double.

**Default value**: `=  property(fget=__GetWavelengthResolution)`

*Defined in `SpeosNX_2512.py` at line 16426*

---

#### `WavelengthSampling` : str

`public` `static`

Gets or sets the wavelength sampling.

**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 13.

**Default value**: `=  property(fget=__GetWavelengthSampling, fset=__SetWavelengthSampling)`

*Defined in `SpeosNX_2512.py` at line 16434*

---

#### `WavelengthStart` : str

`public` `static`

Gets the lower value of the wavelength range to be considered by the sensor.

**Value type**: Double (in nm).  




The default value is 360.0 nm.

**Default value**: `=  property(fget=__GetWavelengthStart)`

*Defined in `SpeosNX_2512.py` at line 16441*

---

## Public Methods

#### `UdpateWavelengthSamplingFromResolution(self, value)`

`public`

*Defined in `SpeosNX_2512.py` at line 16182*

---

## Member Summary

| Member | Type |
|--------|------|
| `DisplayPropertiesFromFile` | public |
| `EyePoint` | public |
| `GridOriginX` | public |
| `GridOriginY` | public |
| `GridStepX` | public |
| `GridStepY` | public |
| `LayerType` | public |
| `PupilDiameter` | public |
| `ShowGrid` | public |
| `TargetPoint` | public |
| `TemplateFilePath` | public |
| `Type` | public |
| `UdpateWavelengthSamplingFromResolution` | public |
| `UseTemplateFile` | public |
| `VerticalDirection` | public |
| `VerticalDirectionReversed` | public |
| `VisionFieldHorizontalEnd` | public |
| `VisionFieldHorizontalMirroredExtent` | public |
| `VisionFieldHorizontalResolution` | public |
| `VisionFieldHorizontalSampling` | public |
| `VisionFieldHorizontalStart` | public |
| `VisionFieldVerticalEnd` | public |
| `VisionFieldVerticalMirroredExtent` | public |
| `VisionFieldVerticalResolution` | public |
| `VisionFieldVerticalSampling` | public |
| `VisionFieldVerticalStart` | public |
| `WavelengthEnd` | public |
| `WavelengthResolution` | public |
| `WavelengthSampling` | public |
| `WavelengthStart` | public |
| `thisown` | public |
