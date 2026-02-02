# SourceAmbientUniformBuilder

**Full Name**: `SpeosNX_2512::SourceAmbientUniformBuilder`

**Language**: Python

**Inherits from**: `SourceAmbientCommonBuilder`

## Description

Represents the builder for an Ambient Source with Uniform type.

The Ambient Uniform Source Builder is used to create and edit Ambient Uniform Source features.


To create a new instance of this class, use `FeatureCollection::CreateSourceAmbientUniformBuilder`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 23470*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 23474*

---

## Public Static Attributes

#### `Luminance` : str

`public` `static`

Gets or sets the luminance.

**Value type**: Double (in cd/m2).  

 **Range**: The value must be superior to 0.  




The default value is 1000.0 cd/m2.

**Default value**: `=  property(fget=__GetLuminance, fset=__SetLuminance)`

*Defined in `SpeosNX_2512.py` at line 23542*

---

#### `MirroredExtent` : str

`public` `static`

Gets or sets the property to enable mirrored extent.

True: Gets an ambient light from all the space.   

 False: Gets an ambient light only in the upper half space.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetMirroredExtent, fset=__SetMirroredExtent)`

*Defined in `SpeosNX_2512.py` at line 23552*

---

#### `Spectrum` : str

`public` `static`

Gets or sets the spectrum type.

The values are:  

 0: Blackbody, then in the Temperature property, set the blackbody temperature of the source spectrum in Kdeg.   

 1: Library, then in the File property, browse a .spectrum file.


**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetSpectrum, fset=__SetSpectrum)`

*Defined in `SpeosNX_2512.py` at line 23563*

---

#### `SpectrumFilePath` : str

`public` `static`

Gets or sets the spectrum file path.

**Prerequisite**: The SpectrumType property must be 1.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetSpectrumFilePath, fset=__SetSpectrumFilePath)`

*Defined in `SpeosNX_2512.py` at line 23572*

---

#### `Sun` : str

`public` `static`

Gets or sets the property to enable the Sun.

True : Uses the Sun.  

 False : Does not use the Sun.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetSun, fset=__SetSun)`

*Defined in `SpeosNX_2512.py` at line 23582*

---

#### `SunDirection` : str

`public` `static`

Gets or sets the Sun direction.

**Prerequisite**: The UseSun property must be True.  




The Sun direction property takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetSunDirection, fset=__SetSunDirection)`

*Defined in `SpeosNX_2512.py` at line 23593*

---

#### `SunDirectionReverse` : str

`public` `static`

Gets or sets the reverse Sun direction.

**Prerequisite**: The UseSun property must be True.  




True: Reverses the Sun direction.  

 False: Does not reverse the Sun directio.n  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetSunDirectionReverse, fset=__SetSunDirectionReverse)`

*Defined in `SpeosNX_2512.py` at line 23605*

---

#### `Temperature` : str

`public` `static`

Gets or sets the temperature.

**Prerequisite**: The SpectrumType property must be 0.  




**Value type**: String.  

 **Range**: The value must be superior to 0.0.  




The default value is 8000.0 Kelvin.

**Default value**: `=  property(fget=__GetTemperature, fset=__SetTemperature)`

*Defined in `SpeosNX_2512.py` at line 23615*

---

#### `ZenithDirection` : str

`public` `static`

Gets or sets the zenith direction.

The zenith direction property takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetZenithDirection, fset=__SetZenithDirection)`

*Defined in `SpeosNX_2512.py` at line 23624*

---

#### `ZenithDirectionReversed` : str

`public` `static`

Gets or sets the reverse zenith direction.

True: Reverses the zenith direction.  

 False: Does not reverse the zenith direction  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetZenithDirectionReversed, fset=__SetZenithDirectionReversed)`

*Defined in `SpeosNX_2512.py` at line 23634*

---

## Member Summary

| Member | Type |
|--------|------|
| `Luminance` | public |
| `MirroredExtent` | public |
| `Spectrum` | public |
| `SpectrumFilePath` | public |
| `Sun` | public |
| `SunDirection` | public |
| `SunDirectionReverse` | public |
| `Temperature` | public |
| `ZenithDirection` | public |
| `ZenithDirectionReversed` | public |
| `thisown` | public |
