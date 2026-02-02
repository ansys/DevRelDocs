# SpeosPatternBuilder

**Full Name**: `SpeosNX_2512::SpeosPatternBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents a Speos pattern builder.

The Speos pattern builder is used to create and edit Speos pattern features.  




To create a new instance of this class, use `FeatureCollection::CreateSpeosPatternBuilder`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 21388*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 21392*

---

## Public Static Attributes

#### `NumberOfRay` : str

`public` `static`

Gets or sets the number of rays.

**Value type**: Integer.  

 **Range**: The value must be superior or equal to 0.  




The default value is 100.

**Default value**: `=  property(fget=__GetNumberOfRay, fset=__SetNumberOfRay)`

*Defined in `SpeosNX_2512.py` at line 21491*

---

#### `OneLayerPerInstance` : str

`public` `static`

Gets or sets the property to enable/disable one layer per instance.

True: Enables one layer per instance.  

 False: Disables one layer per instance.  




**Prerequisite**: The Pattern file must be a Lightbox file.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetOneLayerPerInstance, fset=__SetOneLayerPerInstance)`

*Defined in `SpeosNX_2512.py` at line 21503*

---

#### `OneLayerPerSource` : str

`public` `static`

Gets or sets the property to enable/disable one layer per source.

True: Enables one layer per source.  

 False: Disables one layer per source.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetOneLayerPerSource, fset=__SetOneLayerPerSource)`

*Defined in `SpeosNX_2512.py` at line 21513*

---

#### `Origins` : str

`public` `static`

Gets or sets the origin coordinate systems.

This property takes/returns a list of NX Datum System feature tags.  




**Value type**: List of integer (NX Tags).  




The default value is an empty list.

**Default value**: `=  property(fget=__GetOrigins, fset=__SetOrigins)`

*Defined in `SpeosNX_2512.py` at line 21522*

---

#### `PatternFilePassword` : str

`public` `static`

Sets the pattern file password.

**Prerequisite**: The Pattern file must be a Lightbox file.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fset=__SetPatternFilePassword)`

*Defined in `SpeosNX_2512.py` at line 21531*

---

#### `PatternFilePath` : str

`public` `static`

Gets or sets the property pattern file path.

**Value type**: String.  




The default value is an empty file path (string).

**Default value**: `=  property(fget=__GetPatternFilePath, fset=__SetPatternFilePath)`

*Defined in `SpeosNX_2512.py` at line 21538*

---

#### `PreviewMode` : str

`public` `static`

Gets or sets the preview mode.

The values are:  

 0 - Meshing.  

 1 - BoundingBox.  




**Value type**: Integer.  




The default value is Meshing (0).

**Default value**: `=  property(fget=__GetPreviewMode, fset=__SetPreviewMode)`

*Defined in `SpeosNX_2512.py` at line 21549*

---

#### `RayFileData` : str

`public` `static`

Returns the ray file data object.

**Value type**: CRayFileData.  

 This object allows to read data from a ray file.

**Default value**: `=  property(fget=__GetRayFileData)`

*Defined in `SpeosNX_2512.py` at line 21555*

---

#### `RayFileFlux` : str

`public` `static`

Gets or sets the flux of the ray file source.

**Prerequisite**: The Pattern file must be a ray file.  




**Value type**: Double (in lumen or watt).  

 **Range**: The value must be superior to 0.0.  




By default the value comes from the ray file, otherwise value is 683. lumen.

**Default value**: `=  property(fget=__GetRayFileFlux, fset=__SetRayFileFlux)`

*Defined in `SpeosNX_2512.py` at line 21565*

---

#### `RayFileFluxFromFile` : str

`public` `static`

Gets or sets the property to enable fetching the flux from file.

True: Enables fetching the flux from file.  

 False: Disables fetching the flux from file.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetRayFileFluxFromFile, fset=__SetRayFileFluxFromFile)`

*Defined in `SpeosNX_2512.py` at line 21575*

---

#### `RayFileFluxUnit` : str

`public` `static`

Gets or sets the flux unit of the ray file source.

**Prerequisite**: The Pattern file must be a ray file.  

 The values are:  

 0 - lumen (lm).  

 1 - watt (W).  




**Value type**: Integer.   




The default value is 0.

**Default value**: `=  property(fget=__GetRayFileFluxUnit, fset=__SetRayFileFluxUnit)`

*Defined in `SpeosNX_2512.py` at line 21587*

---

#### `RayFileSpectrumType` : str

`public` `static`

Gets or sets the spectrum type.

The values are:  

 0 - Monochromatic, with this value the wavelength property is available.  

 1 - Blackbody, with this value the temperature property is available.  

 2 - Library, with this value the spectrum file property is available.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetRayFileSpectrumType, fset=__SetRayFileSpectrumType)`

*Defined in `SpeosNX_2512.py` at line 21599*

---

#### `RayFileTemperature` : str

`public` `static`

Gets or sets the temperature.

**Prerequisite**: The SpectrumType must be 0.  




**Value type**: double (in Kelvin).  

 **Range**: The value must be superior to 0.0.  




The default value is 2856.0 K.

**Default value**: `=  property(fget=__GetRayFileTemperature, fset=__SetRayFileTemperature)`

*Defined in `SpeosNX_2512.py` at line 21609*

---

#### `RayFileWavelength` : str

`public` `static`

Gets or sets the wavelength.

**Value type**: Double (in nanometer).  

 **Range**: The value must be superior to 0.0.  




The default value is 555.0 nm.

**Default value**: `=  property(fget=__GetRayFileWavelength, fset=__SetRayFileWavelength)`

*Defined in `SpeosNX_2512.py` at line 21617*

---

#### `RayLength` : str

`public` `static`

Gets or sets the ray length.

**Value type**: Double (in millimeter).  

 **Range**: The value must be superior to 0.0.  




The default value is 75.0 mm.

**Default value**: `=  property(fget=__GetRayLength, fset=__SetRayLength)`

*Defined in `SpeosNX_2512.py` at line 21625*

---

#### `SpectrumFilePath` : str

`public` `static`

Gets or sets the spectrum file path.

**Prerequisite**: The SpectrumType must be 1.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetSpectrumFilePath, fset=__SetSpectrumFilePath)`

*Defined in `SpeosNX_2512.py` at line 21634*

---

## Member Summary

| Member | Type |
|--------|------|
| `NumberOfRay` | public |
| `OneLayerPerInstance` | public |
| `OneLayerPerSource` | public |
| `Origins` | public |
| `PatternFilePassword` | public |
| `PatternFilePath` | public |
| `PreviewMode` | public |
| `RayFileData` | public |
| `RayFileFlux` | public |
| `RayFileFluxFromFile` | public |
| `RayFileFluxUnit` | public |
| `RayFileSpectrumType` | public |
| `RayFileTemperature` | public |
| `RayFileWavelength` | public |
| `RayLength` | public |
| `SpectrumFilePath` | public |
| `thisown` | public |
