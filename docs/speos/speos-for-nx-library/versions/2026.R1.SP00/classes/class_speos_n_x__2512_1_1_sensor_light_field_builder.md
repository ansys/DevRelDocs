---
uid: sensor_light_field_builder
title: SensorLightFieldBuilder
---

# SensorLightFieldBuilder

**Full Name**: `SpeosNX_2512::SensorLightFieldBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents a light field sensor builder.

The light field sensor builder creates or edits light field sensor features.   




To create a new instance of this class, use `FeatureCollection::CreateSensorLightFieldBuilder`.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 17078*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 17082*

---

## Public Static Attributes

#### `ArrowLength` : str

`public` `static`

Gets or sets the length of the arrow preview.

**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 10 mm.

**Default value**: `=  property(fget=__GetArrowLength, fset=__SetArrowLength)`

*Defined in `SpeosNX_2512.py` at line 17175*

---

#### `AxisSystem` : str

`public` `static`

Gets the Axis System of the source.

**Prerequisite**: The CustomAxisSystem property must be True.  




**Value type**: AxisSystem object.

**Default value**: `=  property(fget=__GetAxisSystem)`

*Defined in `SpeosNX_2512.py` at line 17182*

---

#### `AzimuthEnd` : str

`public` `static`

Gets the azimuth end.

**Value type**: Double (in degree).  




The default value is 360 deg.

**Default value**: `=  property(fget=__GetAzimuthEnd)`

*Defined in `SpeosNX_2512.py` at line 17189*

---

#### `AzimuthResolution` : str

`public` `static`

Gets or sets the azimuth resolution.

**Value type**: Double (in degree).  

 **Range**: The value must be superior to 0.0.  




The default value is 36 deg.

**Default value**: `=  property(fget=__GetAzimuthResolution, fset=__SetAzimuthResolution)`

*Defined in `SpeosNX_2512.py` at line 17197*

---

#### `AzimuthSampling` : str

`public` `static`

Gets or sets the azimuth sampling.

**Value type**: Integer.  

 **Range**: The value must be superior or equal to 2.  




The default value is 10.

**Default value**: `=  property(fget=__GetAzimuthSampling, fset=__SetAzimuthSampling)`

*Defined in `SpeosNX_2512.py` at line 17205*

---

#### `AzimuthStart` : str

`public` `static`

Gets the azimuth start.

**Value type**: Double (in degree).  




The default value is 0 deg.

**Default value**: `=  property(fget=__GetAzimuthStart)`

*Defined in `SpeosNX_2512.py` at line 17212*

---

#### `CustomAxisSystem` : str

`public` `static`

Gets or sets the custom axis system property.

True: Enables custom axis system.  

 False: Disables custom axis system.  




**Value type**: Boolean.   




The default value is False.

**Default value**: `=  property(fget=__GetCustomAxisSystem, fset=__SetCustomAxisSystem)`

*Defined in `SpeosNX_2512.py` at line 17222*

---

#### `IncidentEnd` : str

`public` `static`

Gets the incident angle end.

**Value type**: Double (in degree).  




The default value is 90 deg.

**Default value**: `=  property(fget=__GetIncidentEnd)`

*Defined in `SpeosNX_2512.py` at line 17229*

---

#### `IncidentResolution` : str

`public` `static`

Gets or sets the incident resolution.

**Value type**: Double (in degree).  

 **Range**: The value must be superior to 0.0.  




The default value is 9 deg.

**Default value**: `=  property(fget=__GetIncidentResolution, fset=__SetIncidentResolution)`

*Defined in `SpeosNX_2512.py` at line 17237*

---

#### `IncidentSampling` : str

`public` `static`

Gets or sets the incident sampling.

**Value type**: Integer.  

 **Range**: The value must be superior or equal to 2.  




The default value is 10.

**Default value**: `=  property(fget=__GetIncidentSampling, fset=__SetIncidentSampling)`

*Defined in `SpeosNX_2512.py` at line 17245*

---

#### `IncidentStart` : str

`public` `static`

Gets the incident angle start.

**Value type**: Double (in degree).  




The default value is 0 deg.

**Default value**: `=  property(fget=__GetIncidentStart)`

*Defined in `SpeosNX_2512.py` at line 17252*

---

#### `Selections` : str

`public` `static`

Returns the interface to select the oriented faces and bodies on which to measure the light distribution.

**Value type**: SensorLightFieldSelections object.

**Default value**: `=  property(fget=__GetSelections)`

*Defined in `SpeosNX_2512.py` at line 17258*

---

#### `Type` : str

`public` `static`

Gets or sets the sensor type.

The values are:  

 0 - Photometric.  

 1 - Radiometric.  

 2 - Spectral.  




**Value type**: Integer.  




The default value is 1.

**Default value**: `=  property(fget=__GetType, fset=__SetType)`

*Defined in `SpeosNX_2512.py` at line 17270*

---

#### `WavelengthEnd` : str

`public` `static`

Gets the wavelength end.

**Value type**: Double (in nm).  

 **Range**: The value must be superior to 0.0 and more than start value.  




The default value is 700 nm.

**Default value**: `=  property(fget=__GetWavelengthEnd, fset=__SetWavelengthEnd)`

*Defined in `SpeosNX_2512.py` at line 17278*

---

#### `WavelengthResolution` : str

`public` `static`

Gets or sets the wavelength resolution.

**Value type**: Double (in nm).  

 **Range**: The value must be superior to 0.0.  




The default value is 25 nm.

**Default value**: `=  property(fget=__GetWavelengthResolution, fset=__SetWavelengthResolution)`

*Defined in `SpeosNX_2512.py` at line 17286*

---

#### `WavelengthSampling` : str

`public` `static`

Gets or sets the wavelength sampling.

**Value type**: Integer.  

 **Range**: The value must be superior or equal to 2.  




The default value is 13.

**Default value**: `=  property(fget=__GetWavelengthSampling, fset=__SetWavelengthSampling)`

*Defined in `SpeosNX_2512.py` at line 17294*

---

#### `WavelengthStart` : str

`public` `static`

Gets the wavelength start.

**Value type**: Double (in nm).  

 **Range**: The value must be superior to 0.0 and less than end value.  




The default value is 400 nm.

**Default value**: `=  property(fget=__GetWavelengthStart, fset=__SetWavelengthStart)`

*Defined in `SpeosNX_2512.py` at line 17302*

---

## Member Summary

| Member | Type |
|--------|------|
| `ArrowLength` | public |
| `AxisSystem` | public |
| `AzimuthEnd` | public |
| `AzimuthResolution` | public |
| `AzimuthSampling` | public |
| `AzimuthStart` | public |
| `CustomAxisSystem` | public |
| `IncidentEnd` | public |
| `IncidentResolution` | public |
| `IncidentSampling` | public |
| `IncidentStart` | public |
| `Selections` | public |
| `Type` | public |
| `WavelengthEnd` | public |
| `WavelengthResolution` | public |
| `WavelengthSampling` | public |
| `WavelengthStart` | public |
| `thisown` | public |
