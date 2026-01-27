# SourceAmbientGeneralSkyBuilder

**Full Name**: `SpeosNX_2512::SourceAmbientGeneralSkyBuilder`

**Language**: Python

**Inherits from**: `SourceAmbientCommonBuilder`

## Description

Represents the builder for an Ambient Source with CIE Standard General Sky type.

The Ambient General Sky Source Builder is used to create and edit Ambient General Sky Source features.


This sky model is based on the publication of the CIE: ISO 15469:2004/CIE S 011:2003: Spatial distribution of daylight - CIE standard general sky.


To create a new instance of this class, use `FeatureCollection::CreateSourceAmbientGeneralSkyBuilder`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 23018*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 23022*

---

## Public Static Attributes

#### `CIEType` : str

`public` `static`

Gets or sets the CIE type.

The values are:  

 0 - CIE standard overcast sky.  

 1 - Overcast with steep luminance gradation and slight brightening towards the sun.  

 2 - Overcast, moderately graded with azimuthal uniformity.  

 3 - Overcast, moderately graded and slight brightening towards the sun.  

 4 - Sky of uniform luminance.  

 5 - Partly cloudy sky, no gradation towards zenith, slight brightnening.  

 6 - Partly cloudy sky, no gradation towards zenith, brighter circumsolar region.  

 7 - Partly cloudy sky, no gradation towards zenith, distinct solar corona.  

 8 - Partly cloudy sky, with the obscured sun.  

 9 - Partly cloudy sky, with brighter circumsolar region.  

 10 - White blue sky with distinct solar corona.  

 11 - CIE standard clear sky, low luminance turbidity.   

 12 - CIE standard clear sky, polluted atmosphere.  

 13 - Cloudless turbid sky with broad solar corona.  

 14 - White blue turbid sky with broad solar corona.  




**Value type**: Integer.  




The default value is 5.

**Default value**: `=  property(fget=__GetCIEType, fset=__SetCIEType)`

*Defined in `SpeosNX_2512.py` at line 23082*

---

#### `Luminance` : str

`public` `static`

Gets or sets the luminance.

**Value type**: Double (in cd/m2).  

 **Range**: The value must be superior to 0.  




The default value is 1000.0 cd/m2.

**Default value**: `=  property(fget=__GetLuminance, fset=__SetLuminance)`

*Defined in `SpeosNX_2512.py` at line 23090*

---

#### `SunDirection` : str

`public` `static`

Gets or sets the Sun direction.

**Prerequisite**: The SunType property must be 1.  




The Sun direction property takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetSunDirection, fset=__SetSunDirection)`

*Defined in `SpeosNX_2512.py` at line 23101*

---

#### `SunDirectionReversed` : str

`public` `static`

Gets or sets the reverse Sun direction.

**Prerequisite**: The SunType property must be 1.  




True: Reverses the Sun direction.  

 False: Does not reverse the Sun direction.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetSunDirectionReversed, fset=__SetSunDirectionReversed)`

*Defined in `SpeosNX_2512.py` at line 23113*

---

#### `SunType` : str

`public` `static`

Gets or sets the Sun type.

The values are:  

 0 - Automatic, you must set the values in the Timezone and Location object.  

 1 - Direction, you must to set the sun direction property.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetSunType, fset=__SetSunType)`

*Defined in `SpeosNX_2512.py` at line 23124*

---

#### `Timezone` : str

`public` `static`

Gets the Timezone and Location object.

**Prerequisite**: The SunType property must be 0.  




**Value type**: Timezone object.

**Default value**: `=  property(fget=__GetTimezone)`

*Defined in `SpeosNX_2512.py` at line 23131*

---

#### `ZenithNorthSystem` : str

`public` `static`

Gets the orientation object of the source.

**Value type**: ZenithNorthSystem object.

**Default value**: `=  property(fget=__GetZenithNorthSystem)`

*Defined in `SpeosNX_2512.py` at line 23136*

---

## Member Summary

| Member | Type |
|--------|------|
| `CIEType` | public |
| `Luminance` | public |
| `SunDirection` | public |
| `SunDirectionReversed` | public |
| `SunType` | public |
| `Timezone` | public |
| `ZenithNorthSystem` | public |
| `thisown` | public |
