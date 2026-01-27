# SourceAmbientOvercastSkyBuilder

**Full Name**: `SpeosNX_2512::SourceAmbientOvercastSkyBuilder`

**Language**: Python

**Inherits from**: `SourceAmbientCommonBuilder`

## Description

Represents the builder for an Ambient Source with CIE Standard Overcast Sky type.

The Ambient Overcast Sky Source Builder is used to create and edit Ambient Overcast Sky Source features.


This sky model is based on the publication of the CIE: ISO 15469:2004/CIE S 011:2003: Spatial distribution of daylight - CIE standard general sky.


To create a new instance of this class, use `FeatureCollection::CreateSourceAmbientOvercastSkyBuilder`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 23270*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 23274*

---

## Public Static Attributes

#### `Luminance` : str

`public` `static`

Gets or sets the luminance.

**Value type**: Double (cd/m2).  

 **Range**: The value must be superior to 0.  




The default value is 1000.0 cd/m2.

**Default value**: `=  property(fget=__GetLuminance, fset=__SetLuminance)`

*Defined in `SpeosNX_2512.py` at line 23318*

---

#### `Spectrum` : str

`public` `static`

Gets or sets the spectrum type.

The values are:  

 0 - Blackbody, then in the Temperature property, set the blackbody temperature of the source spectrum in Kelvin.  

 1 - Library, then in the File property, browse a .spectrum file.


**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetSpectrum, fset=__SetSpectrum)`

*Defined in `SpeosNX_2512.py` at line 23329*

---

#### `SpectrumFilePath` : str

`public` `static`

Gets or sets the spectrum file path.

**Prerequisite**: The SpectrumType property must be 1.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetSpectrumFilePath, fset=__SetSpectrumFilePath)`

*Defined in `SpeosNX_2512.py` at line 23338*

---

#### `Temperature` : str

`public` `static`

Gets or sets the temperature.

**Prerequisite**: The SpectrumType property must be 0.  




**Value type**: Double (in Kelvin).  

 **Range**: The value must be superior to 0.0.  




The default value is 8000.0 Kelvin.

**Default value**: `=  property(fget=__GetTemperature, fset=__SetTemperature)`

*Defined in `SpeosNX_2512.py` at line 23348*

---

#### `ZenithDirection` : str

`public` `static`

Gets or sets the zenith direction.

The zenith direction property takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetZenithDirection, fset=__SetZenithDirection)`

*Defined in `SpeosNX_2512.py` at line 23357*

---

#### `ZenithDirectionReversed` : str

`public` `static`

Gets or sets the reverse zenith direction.

True: Reverses the zenith direction.  

 False: Not reverse the zenith direction  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetZenithDirectionReversed, fset=__SetZenithDirectionReversed)`

*Defined in `SpeosNX_2512.py` at line 23367*

---

## Member Summary

| Member | Type |
|--------|------|
| `Luminance` | public |
| `Spectrum` | public |
| `SpectrumFilePath` | public |
| `Temperature` | public |
| `ZenithDirection` | public |
| `ZenithDirectionReversed` | public |
| `thisown` | public |
