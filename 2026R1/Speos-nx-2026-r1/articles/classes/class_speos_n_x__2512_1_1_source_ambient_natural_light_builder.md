---
uid: source_ambient_natural_light_builder
title: SourceAmbientNaturalLightBuilder
---

# SourceAmbientNaturalLightBuilder

**Full Name**: `SpeosNX_2512::SourceAmbientNaturalLightBuilder`

**Language**: Python

**Inherits from**: `SourceAmbientCommonBuilder`

## Description

Represents the builder for an Ambient Source with Natural Light type.

The Ambient Natural Light Source Builder is used to create and edit Ambient Natural Light Source features.


To create a new instance of this class, use `FeatureCollection::CreateSourceAmbientNaturalLightBuilder`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 23149*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 23153*

---

## Public Static Attributes

#### `SunDirection` : str

`public` `static`

Gets or sets the Sun direction.

**Prerequisite**: The SunType property must be 1.  




The Sun direction property takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetSunDirection, fset=__SetSunDirection)`

*Defined in `SpeosNX_2512.py` at line 23200*

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

*Defined in `SpeosNX_2512.py` at line 23212*

---

#### `SunType` : str

`public` `static`

Gets or sets the Sun type.

The values are:  

 0 - Automatic, you must set the values in the Timezone object.  

 1 - Direction, you must to set the sun direction property.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetSunType, fset=__SetSunType)`

*Defined in `SpeosNX_2512.py` at line 23223*

---

#### `Timezone` : str

`public` `static`

Gets the Timezone and Location object.

**Prerequisite**: The SunType property must be 0.  




**Value type**: Timezone object.

**Default value**: `=  property(fget=__GetTimezone)`

*Defined in `SpeosNX_2512.py` at line 23230*

---

#### `Turbidity` : str

`public` `static`

Gets or sets the turbidity.

Turbidity is a measure of the fraction of scattering due to haze as opposed to molecules.  




**Value type**: Double.  

 **Range**: [2.0, 9.0]  




The default value is 3.0.

**Default value**: `=  property(fget=__GetTurbidity, fset=__SetTurbidity)`

*Defined in `SpeosNX_2512.py` at line 23240*

---

#### `WithSky` : str

`public` `static`

Gets or sets the property to enable the sky.

True: Uses the sun and Sky in simulations.  

 False: Uses sun only in simulations.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetWithSky, fset=__SetWithSky)`

*Defined in `SpeosNX_2512.py` at line 23250*

---

#### `ZenithNorthSystem` : str

`public` `static`

Gets the orientation object of the source.

**Value type**: ZenithNorthSystem object.

**Default value**: `=  property(fget=__GetZenithNorthSystem)`

*Defined in `SpeosNX_2512.py` at line 23255*

---

## Member Summary

| Member | Type |
|--------|------|
| `SunDirection` | public |
| `SunDirectionReversed` | public |
| `SunType` | public |
| `Timezone` | public |
| `Turbidity` | public |
| `WithSky` | public |
| `ZenithNorthSystem` | public |
| `thisown` | public |
