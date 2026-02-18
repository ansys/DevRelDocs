---
uid: source_interactive_builder
title: SourceInteractiveBuilder
---

# SourceInteractiveBuilder

**Full Name**: `SpeosNX_2512::SourceInteractiveBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents an interactive source builder.

The interactive source builder creates or edits interactive source features.   




To create a new instance of this class, use `FeatureCollection::CreateSourceInteractiveBuilder`.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 19702*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 19706*

---

## Public Static Attributes

#### `EndCurve` : str

`public` `static`

Gets or sets the end curve.

The property takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetEndCurve, fset=__SetEndCurve)`

*Defined in `SpeosNX_2512.py` at line 19807*

---

#### `EndDirection` : str

`public` `static`

Gets or sets the end direction.

The property takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetEndDirection, fset=__SetEndDirection)`

*Defined in `SpeosNX_2512.py` at line 19817*

---

#### `EndDirectionReversed` : str

`public` `static`

Gets or sets the property to reverse the end direction.

True: Reverses the direction.  

 False: Does not reverse the direction.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetEndDirectionReversed, fset=__SetEndDirectionReversed)`

*Defined in `SpeosNX_2512.py` at line 19828*

---

#### `EndFace` : str

`public` `static`

Gets or sets the end face.

The property takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetEndFace, fset=__SetEndFace)`

*Defined in `SpeosNX_2512.py` at line 19838*

---

#### `EndFirstSampling` : str

`public` `static`

Gets or sets the end first sampling.

**Value type**: Integer.  

 **Range**: The value must be superior to 1.  




The default value is 5.

**Default value**: `=  property(fget=__GetEndFirstSampling, fset=__SetEndFirstSampling)`

*Defined in `SpeosNX_2512.py` at line 19846*

---

#### `EndPoint` : str

`public` `static`

Gets or sets the end point.

The property takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetEndPoint, fset=__SetEndPoint)`

*Defined in `SpeosNX_2512.py` at line 19856*

---

#### `EndSecondSampling` : str

`public` `static`

Gets or sets the end second sampling.

**Value type**: Integer.  

 **Range**: The value must be superior to 1.  




The default value is 5.

**Default value**: `=  property(fget=__GetEndSecondSampling, fset=__SetEndSecondSampling)`

*Defined in `SpeosNX_2512.py` at line 19864*

---

#### `RayLength` : str

`public` `static`

Gets or sets the ray length.

**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 75.0 mm.

**Default value**: `=  property(fget=__GetRayLength, fset=__SetRayLength)`

*Defined in `SpeosNX_2512.py` at line 19872*

---

#### `StartCurve` : str

`public` `static`

Gets or sets the start curve.

The property takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetStartCurve, fset=__SetStartCurve)`

*Defined in `SpeosNX_2512.py` at line 19882*

---

#### `StartFace` : str

`public` `static`

Gets or sets the start face.

The property takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetStartFace, fset=__SetStartFace)`

*Defined in `SpeosNX_2512.py` at line 19892*

---

#### `StartFirstSampling` : str

`public` `static`

Gets or sets the start first sampling.

**Value type**: Integer.  

 **Range**: The value must be superior to 1.  




The default value is 5.

**Default value**: `=  property(fget=__GetStartFirstSampling, fset=__SetStartFirstSampling)`

*Defined in `SpeosNX_2512.py` at line 19900*

---

#### `StartPoint` : str

`public` `static`

Gets or sets the start point.

The property takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetStartPoint, fset=__SetStartPoint)`

*Defined in `SpeosNX_2512.py` at line 19910*

---

#### `StartSecondSampling` : str

`public` `static`

Gets or sets the start second sampling.

**Value type**: Integer.  

 **Range**: The value must be superior to 1.  




The default value is 5.

**Default value**: `=  property(fget=__GetStartSecondSampling, fset=__SetStartSecondSampling)`

*Defined in `SpeosNX_2512.py` at line 19918*

---

#### `Type` : str

`public` `static`

Gets or sets the interactive source type.

The values are:  

 0 - POINT_POINT.  

 1 - POINT_DIRECTION.  

 2 - POINT_CURVE.  

 3 - POINT_FACE.  

 4 - CURVE_POINT.  

 5 - CURVE_DIRECTION.  

 6 - CURVE_CURVE.  

 7 - CURVE_FACE.  

 8 - FACE_POINT.  

 9 - FACE_DIRECTION.  

 10 - FACE_CURVE.  

 11 - FACE_FACE.  




**Value type**: Integer.  




The default value is 2 - POINT_CURVE.

**Default value**: `=  property(fget=__GetType, fset=__SetType)`

*Defined in `SpeosNX_2512.py` at line 19939*

---

#### `Wavelength` : str

`public` `static`

Gets or sets the wavelength.

**Prerequisite**: The SpectrumType property must be 0.  




**Value type**: Double (in nm).  

 **Range**: The value must be superior to 0.0.  




The default value is 555.0 nm.

**Default value**: `=  property(fget=__GetWavelength, fset=__SetWavelength)`

*Defined in `SpeosNX_2512.py` at line 19949*

---

## Member Summary

| Member | Type |
|--------|------|
| `EndCurve` | public |
| `EndDirection` | public |
| `EndDirectionReversed` | public |
| `EndFace` | public |
| `EndFirstSampling` | public |
| `EndPoint` | public |
| `EndSecondSampling` | public |
| `RayLength` | public |
| `StartCurve` | public |
| `StartFace` | public |
| `StartFirstSampling` | public |
| `StartPoint` | public |
| `StartSecondSampling` | public |
| `Type` | public |
| `Wavelength` | public |
| `thisown` | public |
