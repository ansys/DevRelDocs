---
uid: source_luminaire_builder
title: SourceLuminaireBuilder
---

# SourceLuminaireBuilder

**Full Name**: `SpeosNX_2512::SourceLuminaireBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents the builder for a luminaire source.

The luminaire source builder is used to create and edit luminaire source features.


To create a new instance of this class, use `FeatureCollection::CreateSourceLuminaireBuilder`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 20078*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 20082*

---

## Public Static Attributes

#### `AxisSystem` : str

`public` `static`

Gets the axis system.

**Value type**: AxisSystem object.

**Default value**: `=  property(fget=__GetAxisSystem)`

*Defined in `SpeosNX_2512.py` at line 20150*

---

#### `Flux` : str

`public` `static`

Gets or sets the flux.

**Prerequisite**: The IsFluxFromFile property must be False.  




**Value type**: Double (in lm or W).  

 **Range**: The value must be superior to 0.0.


The default value is 683.0.

**Default value**: `=  property(fget=__GetFlux, fset=__SetFlux)`

*Defined in `SpeosNX_2512.py` at line 20160*

---

#### `FluxFromFile` : str

`public` `static`

Gets or sets the property to enable or disable getting the flux from file.

True: Enables getting the flux from file.  

 False: Disables getting the flux from file.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetFluxFromFile, fset=__SetFluxFromFile)`

*Defined in `SpeosNX_2512.py` at line 20170*

---

#### `FluxUnit` : str

`public` `static`

Gets or sets the flux unit.

**Prerequisite**: The IsFluxFromFile property must be False or The IntensityFile property must be set.  




The values are:  

 0 - Lumen.  

 1 - Watt.  




**Value type**: Integer.   




The default value is 0.

**Default value**: `=  property(fget=__GetFluxUnit, fset=__SetFluxUnit)`

*Defined in `SpeosNX_2512.py` at line 20183*

---

#### `IntensityFilePath` : str

`public` `static`

Gets or sets the intensity distribution file path.

**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetIntensityFilePath, fset=__SetIntensityFilePath)`

*Defined in `SpeosNX_2512.py` at line 20190*

---

#### `NumberOfRays` : str

`public` `static`

Gets or sets the number of rays.

**Value type**: Integer.  

 **Range**: The value must be superior or equal to 0.  




The default value is 100.

**Default value**: `=  property(fget=__GetNumberOfRays, fset=__SetNumberOfRays)`

*Defined in `SpeosNX_2512.py` at line 20198*

---

#### `RayLength` : str

`public` `static`

Gets or sets the ray length.

**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 75.0 mm.

**Default value**: `=  property(fget=__GetRayLength, fset=__SetRayLength)`

*Defined in `SpeosNX_2512.py` at line 20206*

---

#### `ShowIntensityDistribution` : str

`public` `static`

Gets or sets the property to show the intensity distribution in the 3D view.

True: Shows the intensity distribution in the 3D view.  

 False: Does not show the intensity distribution in the 3D view.  




The default value is False.

**Default value**: `=  property(fget=__GetShowIntensityDistribution, fset=__SetShowIntensityDistribution)`

*Defined in `SpeosNX_2512.py` at line 20214*

---

#### `Spectrum` : str

`public` `static`

Gets or sets the spectrum type.

The values are:  

 0 - Blackbody, with this value the Temperature property is available.  

 1 - Library, with this value the File property is available.  

 2 - Incandescent.  

 3 - Warmwhite fluorescent.  

 4 - Daylight fluorescent.  

 5 - White LED.  

 6 - Halogen.  

 7 - Metal halide.  

 8 - High pressure sodium.   




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetSpectrum, fset=__SetSpectrum)`

*Defined in `SpeosNX_2512.py` at line 20232*

---

#### `SpectrumFilePath` : str

`public` `static`

Gets or sets the spectrum file path.

**Prerequisite**: The spectrum type must be 1.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetSpectrumFilePath, fset=__SetSpectrumFilePath)`

*Defined in `SpeosNX_2512.py` at line 20241*

---

#### `Temperature` : str

`public` `static`

Gets or sets the spectrum temperature.

**Prerequisite**: The spectrum type must be 0.  




**Value type**: Double (in Kelvin).  

 **Range**: The value must be superior to 0.0.  




The default value is 2856.0 Kelvin.

**Default value**: `=  property(fget=__GetTemperature, fset=__SetTemperature)`

*Defined in `SpeosNX_2512.py` at line 20251*

---

## Member Summary

| Member | Type |
|--------|------|
| `AxisSystem` | public |
| `Flux` | public |
| `FluxFromFile` | public |
| `FluxUnit` | public |
| `IntensityFilePath` | public |
| `NumberOfRays` | public |
| `RayLength` | public |
| `ShowIntensityDistribution` | public |
| `Spectrum` | public |
| `SpectrumFilePath` | public |
| `Temperature` | public |
| `thisown` | public |
