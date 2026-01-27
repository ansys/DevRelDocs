---
uid: source_ray_file_builder
title: SourceRayFileBuilder
---

# SourceRayFileBuilder

**Full Name**: `SpeosNX_2512::SourceRayFileBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents the builder for a ray file source.

The ray file source builder is used to create and edit ray file source features.


To create a new instance of this class, use `FeatureCollection::CreateSourceRayFileBuilder`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 20265*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 20269*

---

## Public Static Attributes

#### `AxisSystem` : str

`public` `static`

Gets the axis system.

**Value type**: AxisSystem object.

**Default value**: `=  property(fget=__GetAxisSystem)`

*Defined in `SpeosNX_2512.py` at line 20343*

---

#### `ExitGeometries` : str

`public` `static`

Gets or sets exit geometries.

The ExitGeometries property takes a list of feature tag and returns a list of feature tag.  




**Value type**: List of integer.  




The default value is an empty list.

**Default value**: `=  property(fget=__GetExitGeometries, fset=__SetExitGeometries)`

*Defined in `SpeosNX_2512.py` at line 20352*

---

#### `Flux` : str

`public` `static`

Gets or sets the flux.

**Value type**: Double (in lumen or watt).  

 **Range**: The value must be superior to 0.0.  




By default the value comes from the ray file, otherwise value is 683. lumen.

**Default value**: `=  property(fget=__GetFlux, fset=__SetFlux)`

*Defined in `SpeosNX_2512.py` at line 20361*

---

#### `FluxFromFile` : str

`public` `static`

Gets or sets the property to enable fetching the flux from file.

True: Enables fetching the flux from file.  

 False: Disables fetching the flux from file.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetFluxFromFile, fset=__SetFluxFromFile)`

*Defined in `SpeosNX_2512.py` at line 20371*

---

#### `FluxUnit` : str

`public` `static`

Gets or sets the flux unit.

The values are:  

 0 - lumen (lm).  

 1 - watt (W).  




**Value type**: Integer.   




The default value is 0.

**Default value**: `=  property(fget=__GetFluxUnit, fset=__SetFluxUnit)`

*Defined in `SpeosNX_2512.py` at line 20382*

---

#### `NumberOfRays` : str

`public` `static`

Gets or sets the number of rays.

**Value type**: Integer.  

 **Range**: The value must be superior or equal to 0.  




The default value is 100.

**Default value**: `=  property(fget=__GetNumberOfRays, fset=__SetNumberOfRays)`

*Defined in `SpeosNX_2512.py` at line 20390*

---

#### `RayFilePath` : str

`public` `static`

Gets or sets the ray file path.

**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetRayFilePath, fset=__SetRayFilePath)`

*Defined in `SpeosNX_2512.py` at line 20397*

---

#### `RayLength` : str

`public` `static`

Gets or sets the ray length.

**Value type**: Double (in millimeter).  

 **Range**: The value must be superior to 0.0.  




The default value is 75.0 mm.

**Default value**: `=  property(fget=__GetRayLength, fset=__SetRayLength)`

*Defined in `SpeosNX_2512.py` at line 20405*

---

#### `Spectrum` : str

`public` `static`

Gets or sets the spectrum type.

The values are:  

 0 - Monochromatic, with this value the wavelength property is available.  

 1 - Blackbody, with this value the temperature property is available.  

 2 - Library, with this value the spectrum file property is available.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetSpectrum, fset=__SetSpectrum)`

*Defined in `SpeosNX_2512.py` at line 20417*

---

#### `SpectrumFilePath` : str

`public` `static`

Gets or sets the spectrum file path.

**Prerequisite**: The SpectrumType must be 1.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetSpectrumFilePath, fset=__SetSpectrumFilePath)`

*Defined in `SpeosNX_2512.py` at line 20426*

---

#### `Temperature` : str

`public` `static`

Gets or sets the temperature.

**Prerequisite**: The SpectrumType must be 0.  




**Value type**: double (in Kelvin).  

 **Range**: The value must be superior to 0.0.  




The default value is 2856.0 K.

**Default value**: `=  property(fget=__GetTemperature, fset=__SetTemperature)`

*Defined in `SpeosNX_2512.py` at line 20436*

---

#### `Wavelength` : str

`public` `static`

Gets or sets the wavelength.

**Value type**: Double (in nanometer).  

 **Range**: The value must be superior to 0.0.  




The default value is 555.0 nm.

**Default value**: `=  property(fget=__GetWavelength, fset=__SetWavelength)`

*Defined in `SpeosNX_2512.py` at line 20444*

---

## Member Summary

| Member | Type |
|--------|------|
| `AxisSystem` | public |
| `ExitGeometries` | public |
| `Flux` | public |
| `FluxFromFile` | public |
| `FluxUnit` | public |
| `NumberOfRays` | public |
| `RayFilePath` | public |
| `RayLength` | public |
| `Spectrum` | public |
| `SpectrumFilePath` | public |
| `Temperature` | public |
| `Wavelength` | public |
| `thisown` | public |
