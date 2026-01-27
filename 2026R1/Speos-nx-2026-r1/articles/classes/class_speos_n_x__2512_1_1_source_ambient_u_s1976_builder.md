# SourceAmbientUS1976Builder

**Full Name**: `SpeosNX_2512::SourceAmbientUS1976Builder`

**Language**: Python

**Inherits from**: `SourceAmbientCommonBuilder`

## Description

Represents the builder for an U.S Standard Atmosphere 1976 Source.

The Ambient US1976 Sky Source Builder is used to create and edit Ambient US1976 Sky Source features.


The U.S Standard Atmosphere 1976 source allows you to generate light from the sky according to a time and location. With this source, signals can be collected outside the visible spectrum including in the infrared.


To create a new instance of this class, use `FeatureCollection::CreateSourceAmbientUS1976Builder`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 23383*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 23387*

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

*Defined in `SpeosNX_2512.py` at line 23422*

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

*Defined in `SpeosNX_2512.py` at line 23434*

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

*Defined in `SpeosNX_2512.py` at line 23445*

---

#### `Timezone` : str

`public` `static`

Gets the Timezone and Location object.

**Prerequisite**: The SunType property must be 0.  




**Value type**: Timezone object.

**Default value**: `=  property(fget=__GetTimezone)`

*Defined in `SpeosNX_2512.py` at line 23452*

---

#### `ZenithNorthSystem` : str

`public` `static`

Gets the orientation object of the source.

**Value type**: ZenithNorthSystem object.

**Default value**: `=  property(fget=__GetZenithNorthSystem)`

*Defined in `SpeosNX_2512.py` at line 23457*

---

## Member Summary

| Member | Type |
|--------|------|
| `SunDirection` | public |
| `SunDirectionReversed` | public |
| `SunType` | public |
| `Timezone` | public |
| `ZenithNorthSystem` | public |
| `thisown` | public |
