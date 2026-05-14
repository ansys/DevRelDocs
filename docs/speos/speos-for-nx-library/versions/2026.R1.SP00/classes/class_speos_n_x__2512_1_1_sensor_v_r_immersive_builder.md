---
uid: sensor_v_r_immersive_builder
title: SensorVRImmersiveBuilder
---

# SensorVRImmersiveBuilder

**Full Name**: `SpeosNX_2512::SensorVRImmersiveBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents the builder for an immersive sensor.

The immersive sensor builder is used to create and edit immersive sensor features.


To create a new instance of this class, use `FeatureCollection::CreateSensorVRImmersiveBuilder`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 17963*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 17967*

---

## Public Static Attributes

#### `ActivateAutomaticFraming` : str

`public` `static`

Gets or sets the automatic framing property.

True: Activates automatic framing.  

 False: Deactivates automatic framing.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetActivateAutomaticFraming, fset=__SetActivateAutomaticFraming)`

*Defined in `SpeosNX_2512.py` at line 18092*

---

#### `AxisSystem` : str

`public` `static`

Gets the axis system.

**Value type**: AxisSytem object.

**Default value**: `=  property(fget=__GetAxisSystem)`

*Defined in `SpeosNX_2512.py` at line 18097*

---

#### `Back` : str

`public` `static`

Gets or sets the back face property.

True: Enables back face in the simulation.  

 False: Disables back face in the simulation.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetBack, fset=__SetBack)`

*Defined in `SpeosNX_2512.py` at line 18107*

---

#### `Bottom` : str

`public` `static`

Gets or sets the bottom face property.

True: Enables bottom face in the simulation.  

 False: Disables bottom face in the simulation.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetBottom, fset=__SetBottom)`

*Defined in `SpeosNX_2512.py` at line 18117*

---

#### `FramingFace` : str

`public` `static`

Gets or sets the framing face.

**Prerequisite**: The EnableFraming property must be True.  

 Positions the camera, in the 3D view, according to the faces selected from the choice list.  




The values are:  

 0 - FRONT.  

 1 - BACK.  

 2 - TOP.  

 3 - BOTTOM.  

 4 - LEFT.  

 5 - RIGHT.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetFramingFace, fset=__SetFramingFace)`

*Defined in `SpeosNX_2512.py` at line 18135*

---

#### `Front` : str

`public` `static`

Gets or sets the front face property.

True: Enables front face in the simulation.  

 False: Disables front face in the simulation.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetFront, fset=__SetFront)`

*Defined in `SpeosNX_2512.py` at line 18145*

---

#### `IntegrationAngle` : str

`public` `static`

Gets or sets the integration angle.

**Value type**: Double (in degrees).  




The default value is 5.0 degrees.

**Default value**: `=  property(fget=__GetIntegrationAngle, fset=__SetIntegrationAngle)`

*Defined in `SpeosNX_2512.py` at line 18152*

---

#### `InterocularDistance` : str

`public` `static`

Gets or sets the interocular distance.

**Prerequisite**: The Stereo property must be True.  




**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.


The default value is 65.0 mm.

**Default value**: `=  property(fget=__GetInterocularDistance, fset=__SetInterocularDistance)`

*Defined in `SpeosNX_2512.py` at line 18162*

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

*Defined in `SpeosNX_2512.py` at line 18173*

---

#### `Left` : str

`public` `static`

Gets or sets the left face property.

True: Enables left face in the simulation.  

 False: Disables left face in the simulation.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetLeft, fset=__SetLeft)`

*Defined in `SpeosNX_2512.py` at line 18183*

---

#### `PreviewSize` : str

`public` `static`

Gets or sets the preview arrows size.

**Value type**: Double (in nm).  




The default value is 500.0 nm.

**Default value**: `=  property(fget=__GetPreviewSize, fset=__SetPreviewSize)`

*Defined in `SpeosNX_2512.py` at line 18190*

---

#### `Resolution` : str

`public` `static`

Gets the resolution.

**Value type**: Double.

**Default value**: `=  property(fget=__GetResolution)`

*Defined in `SpeosNX_2512.py` at line 18195*

---

#### `Right` : str

`public` `static`

Gets or sets the right face property.

True: Enables right face in the simulation.  

 False: Disables right face in the simulation.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetRight, fset=__SetRight)`

*Defined in `SpeosNX_2512.py` at line 18205*

---

#### `Sampling` : str

`public` `static`

Gets or sets the sampling.

Edits the value to compute the resolution of the result.  




**Value type**: Integer.  

 **Range**: The value must be superior or equal to 0.  




The default value is 600.

**Default value**: `=  property(fget=__GetSampling, fset=__SetSampling)`

*Defined in `SpeosNX_2512.py` at line 18215*

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

*Defined in `SpeosNX_2512.py` at line 18227*

---

#### `Top` : str

`public` `static`

Gets or sets the top face property.

True: Enables top face in the simulation.  

 False: Disables top face in the simulation.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetTop, fset=__SetTop)`

*Defined in `SpeosNX_2512.py` at line 18237*

---

#### `WavelengthEnd` : str

`public` `static`

Gets or sets the higher value of the wavelength range to be considered by the sensor.

The sensor does not take into account wavelengths beyond the borders that you define.  




**Value type**: Double (in nm).  




The default value is 700.0 nm.

**Default value**: `=  property(fget=__GetWavelengthEnd, fset=__SetWavelengthEnd)`

*Defined in `SpeosNX_2512.py` at line 18246*

---

#### `WavelengthResolution` : str

`public` `static`

Gets or sets the Wavelength resolution.

**Value type**: Double.

**Default value**: `=  property(fget=__GetWavelengthResolution, fset=__SetWavelengthResolution)`

*Defined in `SpeosNX_2512.py` at line 18251*

---

#### `WavelengthSampling` : str

`public` `static`

Gets or sets the wavelength sampling.

**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 13.

**Default value**: `=  property(fget=__GetWavelengthSampling, fset=__SetWavelengthSampling)`

*Defined in `SpeosNX_2512.py` at line 18259*

---

#### `WavelengthStart` : str

`public` `static`

Gets or sets the lower value of the wavelength range to be considered by the sensor.

The sensor does not take into account wavelengths beyond the borders that you define.  




**Value type**: Double (in nm).  




The default value is 400.0 nm.

**Default value**: `=  property(fget=__GetWavelengthStart, fset=__SetWavelengthStart)`

*Defined in `SpeosNX_2512.py` at line 18268*

---

## Member Summary

| Member | Type |
|--------|------|
| `ActivateAutomaticFraming` | public |
| `AxisSystem` | public |
| `Back` | public |
| `Bottom` | public |
| `FramingFace` | public |
| `Front` | public |
| `IntegrationAngle` | public |
| `InterocularDistance` | public |
| `Layer` | public |
| `Left` | public |
| `PreviewSize` | public |
| `Resolution` | public |
| `Right` | public |
| `Sampling` | public |
| `Stereo` | public |
| `Top` | public |
| `WavelengthEnd` | public |
| `WavelengthResolution` | public |
| `WavelengthSampling` | public |
| `WavelengthStart` | public |
| `thisown` | public |
