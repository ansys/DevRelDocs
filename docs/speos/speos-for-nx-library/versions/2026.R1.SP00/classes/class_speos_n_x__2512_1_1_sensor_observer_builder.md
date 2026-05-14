---
uid: sensor_observer_builder
title: SensorObserverBuilder
---

# SensorObserverBuilder

**Full Name**: `SpeosNX_2512::SensorObserverBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents the builder for an observer sensor.

The observer sensor builder is used to create and edit observer sensor features.


To create a new instance of this class, use `FeatureCollection::CreateSensorObserverBuilder`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 17315*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 17319*

---

## Public Static Attributes

#### `AutoFramingHorizontal` : str

`public` `static`

Gets or sets the automatic framing horizontal position.

**Value type**: Integer.  

 **Range**: The value must be superior or equal to 0 and inferior or equal to the number of columns.


The default value is 0.

**Default value**: `=  property(fget=__GetAutoFramingHorizontal, fset=__SetAutoFramingHorizontal)`

*Defined in `SpeosNX_2512.py` at line 17523*

---

#### `AutoFramingVertical` : str

`public` `static`

Gets or sets the automatic framing horizontal position.

**Value type**: Integer.  

 **Range**: The value must be superior or equal to 0 and inferior or equal to the number of lines.


The default value is 0.

**Default value**: `=  property(fget=__GetAutoFramingVertical, fset=__SetAutoFramingVertical)`

*Defined in `SpeosNX_2512.py` at line 17531*

---

#### `AxisSystem` : str

`public` `static`

Gets the axis system.

**Value type**: AxisSystem object.

**Default value**: `=  property(fget=__GetAxisSystem)`

*Defined in `SpeosNX_2512.py` at line 17536*

---

#### `DimensionHorizontalEnd` : str

`public` `static`

Gets or sets the horizontal end for dimension.

**Value type**: Double (in mm).  




The default value is 50.0 mm.

**Default value**: `=  property(fget=__GetDimensionHorizontalEnd, fset=__SetDimensionHorizontalEnd)`

*Defined in `SpeosNX_2512.py` at line 17544*

---

#### `DimensionHorizontalMirroredExtent` : str

`public` `static`

Gets or sets the mirrored extent property for horizontal dimension.

True: DimensionHorizontalStart == -DimensionHorizontalEnd, you can only change the DimensionHorizontalEnd value.  

 False: DimensionHorizontalStart and DimensionHorizontalEnd can have different value.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetDimensionHorizontalMirroredExtent, fset=__SetDimensionHorizontalMirroredExtent)`

*Defined in `SpeosNX_2512.py` at line 17555*

---

#### `DimensionHorizontalResolution` : str

`public` `static`

Gets or sets the horizontal resolution for dimension.

**Value type**: Double.

**Default value**: `=  property(fget=__GetDimensionHorizontalResolution, fset=__SetDimensionHorizontalResolution)`

*Defined in `SpeosNX_2512.py` at line 17561*

---

#### `DimensionHorizontalSampling` : str

`public` `static`

Gets or sets the horizontal sampling for dimension.

**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 100.

**Default value**: `=  property(fget=__GetDimensionHorizontalSampling, fset=__SetDimensionHorizontalSampling)`

*Defined in `SpeosNX_2512.py` at line 17570*

---

#### `DimensionHorizontalStart` : str

`public` `static`

Gets or sets the horizontal start for dimension.

**Value type**: Double (in mm).  




The default value is -50.0 mm.

**Default value**: `=  property(fget=__GetDimensionHorizontalStart, fset=__SetDimensionHorizontalStart)`

*Defined in `SpeosNX_2512.py` at line 17578*

---

#### `DimensionVerticalEnd` : str

`public` `static`

Gets or sets the vertical end for dimension.

**Value type**: Double (in mm).  




The default value is 50.0 mm.

**Default value**: `=  property(fget=__GetDimensionVerticalEnd, fset=__SetDimensionVerticalEnd)`

*Defined in `SpeosNX_2512.py` at line 17586*

---

#### `DimensionVerticalMirroredExtent` : str

`public` `static`

Gets or sets the mirrored extent property for vertical dimension.

True: DimensionVerticalStart == -DimensionVerticalEnd, you can only change the DimensionVerticalEnd value.  

 False: DimensionVerticalStart and DimensionVerticalEnd can have different value.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetDimensionVerticalMirroredExtent, fset=__SetDimensionVerticalMirroredExtent)`

*Defined in `SpeosNX_2512.py` at line 17597*

---

#### `DimensionVerticalResolution` : str

`public` `static`

Gets or sets the vertical resolution for dimension.

**Value type**: Double.

**Default value**: `=  property(fget=__GetDimensionVerticalResolution, fset=__SetDimensionVerticalResolution)`

*Defined in `SpeosNX_2512.py` at line 17603*

---

#### `DimensionVerticalSampling` : str

`public` `static`

Gets or sets the vertical sampling for dimension.

**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 100.

**Default value**: `=  property(fget=__GetDimensionVerticalSampling, fset=__SetDimensionVerticalSampling)`

*Defined in `SpeosNX_2512.py` at line 17612*

---

#### `DimensionVerticalStart` : str

`public` `static`

Gets or sets the vertical start for dimension.

**Value type**: Double (in mm).  




The default value is -50.0 mm.

**Default value**: `=  property(fget=__GetDimensionVerticalStart, fset=__SetDimensionVerticalStart)`

*Defined in `SpeosNX_2512.py` at line 17620*

---

#### `Distance` : str

`public` `static`

Gets or sets the distance.

Adjusts the radius of the sphere to narrow or widen the global field of vision.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.  




The default value is 1000.0 mm.

**Default value**: `=  property(fget=__GetDistance, fset=__SetDistance)`

*Defined in `SpeosNX_2512.py` at line 17630*

---

#### `Focal` : str

`public` `static`

Gets or sets the focal.

Adjusts the distance between the sensor radiance plan and the origin point of the observed object. The larger the focal, the closer to the object.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.  




The default value is 50.0 mm.

**Default value**: `=  property(fget=__GetFocal, fset=__SetFocal)`

*Defined in `SpeosNX_2512.py` at line 17640*

---

#### `IntegrationAngle` : str

`public` `static`

Gets or sets the integration angle.

**Value type**: Double (in degrees).  




The default value is 5.0 degrees.

**Default value**: `=  property(fget=__GetIntegrationAngle, fset=__SetIntegrationAngle)`

*Defined in `SpeosNX_2512.py` at line 17647*

---

#### `InterocularDistance` : str

`public` `static`

Gets or sets the interocular distance.

**Prerequisite**: The Stereo property must be True.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.


The default value is 65.0 mm.

**Default value**: `=  property(fget=__GetInterocularDistance, fset=__SetInterocularDistance)`

*Defined in `SpeosNX_2512.py` at line 17657*

---

#### `Layer` : str

`public` `static`

Gets or sets the layer mode.

The values are:  

 0 - None, the simulation generates a Speos360 file with one layer for all sources.  

 1 - Source, the result includes one layer per active source.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetLayer, fset=__SetLayer)`

*Defined in `SpeosNX_2512.py` at line 17668*

---

#### `Stereo` : str

`public` `static`

gets or sets the stereo property.

When you define a stereo sensor, make sure that the Front direction is horizontal, the Top direction is vertical, and the Central resolution matches the intended 3D display.  




True: Enables stereo.  

 False: Disables stereo.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetStereo, fset=__SetStereo)`

*Defined in `SpeosNX_2512.py` at line 17680*

---

#### `VisionFieldHorizontalEnd` : str

`public` `static`

Gets or sets the horizontal end for vision field.

Vision Field corresponds to the surface on which are located observer positions around target point.  




**Value type**: Double (in degrees).  

 **Range**: [-180.0, 180.0]  




The default value is 180.0 degrees.

**Default value**: `=  property(fget=__GetVisionFieldHorizontalEnd, fset=__SetVisionFieldHorizontalEnd)`

*Defined in `SpeosNX_2512.py` at line 17690*

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

*Defined in `SpeosNX_2512.py` at line 17702*

---

#### `VisionFieldHorizontalResolution` : str

`public` `static`

Gets or sets the horizontal resolution for vision field.

Vision Field corresponds to the surface on which are located observer positions around target point.  




**Value type**: Double.

**Default value**: `=  property(fget=__GetVisionFieldHorizontalResolution, fset=__SetVisionFieldHorizontalResolution)`

*Defined in `SpeosNX_2512.py` at line 17709*

---

#### `VisionFieldHorizontalSampling` : str

`public` `static`

Gets or sets the horizontal sampling for vision field.

Vision Field corresponds to the surface on which are located observer positions around target point.  




**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 9.

**Default value**: `=  property(fget=__GetVisionFieldHorizontalSampling, fset=__SetVisionFieldHorizontalSampling)`

*Defined in `SpeosNX_2512.py` at line 17719*

---

#### `VisionFieldHorizontalStart` : str

`public` `static`

Gets or sets the horizontal start for vision field.

Vision Field corresponds to the surface on which are located observer positions around target point.  




**Value type**: Double (in degrees).  

 **Range**: [-180.0, 180.0]  




The default value is -180.0 degrees.

**Default value**: `=  property(fget=__GetVisionFieldHorizontalStart, fset=__SetVisionFieldHorizontalStart)`

*Defined in `SpeosNX_2512.py` at line 17729*

---

#### `VisionFieldVerticalEnd` : str

`public` `static`

Gets or sets the vertical end for vision field.

Vision Field corresponds to the surface on which are located observer positions around target point.  




**Value type**: Double (in degrees).  

 **Range**: [-90.0, 90.0]  




The default value is 90.0 degrees.

**Default value**: `=  property(fget=__GetVisionFieldVerticalEnd, fset=__SetVisionFieldVerticalEnd)`

*Defined in `SpeosNX_2512.py` at line 17739*

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

*Defined in `SpeosNX_2512.py` at line 17751*

---

#### `VisionFieldVerticalResolution` : str

`public` `static`

Gets or sets the vertical resolution for vision field.

Vision Field corresponds to the surface on which are located observer positions around target point.   




**Value type**: Double.

**Default value**: `=  property(fget=__GetVisionFieldVerticalResolution, fset=__SetVisionFieldVerticalResolution)`

*Defined in `SpeosNX_2512.py` at line 17758*

---

#### `VisionFieldVerticalSampling` : str

`public` `static`

Gets or sets the vertical sampling for vision field.

Vision Field corresponds to the surface on which are located observer positions around target point.  




**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 5.

**Default value**: `=  property(fget=__GetVisionFieldVerticalSampling, fset=__SetVisionFieldVerticalSampling)`

*Defined in `SpeosNX_2512.py` at line 17768*

---

#### `VisionFieldVerticalStart` : str

`public` `static`

Gets or sets the vertical start for vision field.

Vision Field corresponds to the surface on which are located observer positions around target point.   




**Value type**: Double (in degrees).  

 **Range**: [-90.0, 90.0]  




The default value is -90.0 degrees.

**Default value**: `=  property(fget=__GetVisionFieldVerticalStart, fset=__SetVisionFieldVerticalStart)`

*Defined in `SpeosNX_2512.py` at line 17778*

---

#### `WavelengthEnd` : str

`public` `static`

Gets or sets the higher value of the wavelength range to be considered by the sensor.

The sensor does not take into account wavelengths beyond the borders that you define.  




**Value type**: Double (in nm).  




The default value is 700.0 nm.

**Default value**: `=  property(fget=__GetWavelengthEnd, fset=__SetWavelengthEnd)`

*Defined in `SpeosNX_2512.py` at line 17787*

---

#### `WavelengthResolution` : str

`public` `static`

Gets or sets the Wavelength resolution.

**Value type**: Double.

**Default value**: `=  property(fget=__GetWavelengthResolution, fset=__SetWavelengthResolution)`

*Defined in `SpeosNX_2512.py` at line 17792*

---

#### `WavelengthSampling` : str

`public` `static`

Gets or sets the wavelength sampling.

**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 13.

**Default value**: `=  property(fget=__GetWavelengthSampling, fset=__SetWavelengthSampling)`

*Defined in `SpeosNX_2512.py` at line 17800*

---

#### `WavelengthStart` : str

`public` `static`

Gets or sets the lower value of the wavelength range to be considered by the sensor.

The sensor does not take into account wavelengths beyond the borders that you define.  




**Value type**: Double (in nm).  




The default value is 400.0 nm.

**Default value**: `=  property(fget=__GetWavelengthStart, fset=__SetWavelengthStart)`

*Defined in `SpeosNX_2512.py` at line 17809*

---

## Member Summary

| Member | Type |
|--------|------|
| `AutoFramingHorizontal` | public |
| `AutoFramingVertical` | public |
| `AxisSystem` | public |
| `DimensionHorizontalEnd` | public |
| `DimensionHorizontalMirroredExtent` | public |
| `DimensionHorizontalResolution` | public |
| `DimensionHorizontalSampling` | public |
| `DimensionHorizontalStart` | public |
| `DimensionVerticalEnd` | public |
| `DimensionVerticalMirroredExtent` | public |
| `DimensionVerticalResolution` | public |
| `DimensionVerticalSampling` | public |
| `DimensionVerticalStart` | public |
| `Distance` | public |
| `Focal` | public |
| `IntegrationAngle` | public |
| `InterocularDistance` | public |
| `Layer` | public |
| `Stereo` | public |
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
