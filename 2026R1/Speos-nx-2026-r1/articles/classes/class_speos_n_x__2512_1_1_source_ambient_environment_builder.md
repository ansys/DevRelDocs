---
uid: source_ambient_environment_builder
title: SourceAmbientEnvironmentBuilder
---

# SourceAmbientEnvironmentBuilder

**Full Name**: `SpeosNX_2512::SourceAmbientEnvironmentBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents the builder for an ambient environment source.

The ambient environment source builder is used to create and edit ambient environment source features.


To create a new instance of this class, use `FeatureCollection::CreateSourceAmbientEnvironmentBuilder`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 18913*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 18917*

---

## Public Static Attributes

#### `BlueSpectrumFile` : str

`public` `static`

Gets or sets the blue spectrum file.

Prerequisite: The ColorSpace property must be 2.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetBlueSpectrumFile, fset=__SetBlueSpectrumFile)`

*Defined in `SpeosNX_2512.py` at line 19001*

---

#### `ColorSpace` : str

`public` `static`

Gets or sets the color space model type.

The values are:  

 0 - sRGB. Uses the standard and most commonly used RGB based model.  

 1 - Adobe RGB. Uses a larger gamut.  

 2 - User Defined RGB. Defines manually the white point of the standard illuminant.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetColorSpace, fset=__SetColorSpace)`

*Defined in `SpeosNX_2512.py` at line 19013*

---

#### `GreenSpectrumFile` : str

`public` `static`

Gets or sets the green spectrum file.

Prerequisite: The ColorSpace property must be 2.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetGreenSpectrumFile, fset=__SetGreenSpectrumFile)`

*Defined in `SpeosNX_2512.py` at line 19022*

---

#### `GroundOrigin` : str

`public` `static`

Gets or sets the ground origin.

The GroundOrigin property takes a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetGroundOrigin, fset=__SetGroundOrigin)`

*Defined in `SpeosNX_2512.py` at line 19031*

---

#### `Height` : str

`public` `static`

Gets or sets the height.

**Value type**: Double (in mm).  




The default value is 0.0 mm.

**Default value**: `=  property(fget=__GetHeight, fset=__SetHeight)`

*Defined in `SpeosNX_2512.py` at line 19038*

---

#### `ImageFilePath` : str

`public` `static`

Gets or sets the image file.

**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetImageFilePath, fset=__SetImageFilePath)`

*Defined in `SpeosNX_2512.py` at line 19045*

---

#### `Luminance` : str

`public` `static`

Gets or sets the luminance.

The luminance parameter is the source luminance for the white point in front direction of the source.  




**Value type**: Double (cd/m2).  

 **Range**: The value must be superior to 0.0.  




The default value is 1000.0 cd/m2.

**Default value**: `=  property(fget=__GetLuminance, fset=__SetLuminance)`

*Defined in `SpeosNX_2512.py` at line 19055*

---

#### `PreviewSize` : str

`public` `static`

Gets or sets the preview arrows size.

**Value type**: Double (in mm).  




The default value is 100.0 mm.

**Default value**: `=  property(fget=__GetPreviewSize, fset=__SetPreviewSize)`

*Defined in `SpeosNX_2512.py` at line 19062*

---

#### `RedSpectrumFile` : str

`public` `static`

Gets or sets the red spectrum file.

Prerequisite: The WhitePoint property must be 4.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetRedSpectrumFile, fset=__SetRedSpectrumFile)`

*Defined in `SpeosNX_2512.py` at line 19071*

---

#### `WhitePointType` : str

`public` `static`

Gets or sets the white point type of the standard illuminant.

Prerequisite: The ColorSpace property must be 2.  




The values are:  

 0 - C. Uses an average daylight illuminant.  

 1 - D50. Uses a natural, horizon light.  

 2 - D65. Uses a standard daylight illuminant that provides accurate color perception and evaluation.  

 3 - E. Uses an illuminant that gives equal weight to all wavelengths.  

 4 - User defined. Allows to edit the Color Coordinates of the white point.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetWhitePointType, fset=__SetWhitePointType)`

*Defined in `SpeosNX_2512.py` at line 19087*

---

#### `WhitePointX` : str

`public` `static`

Gets or sets the X coordinate of the white point.

Prerequisite: The WhitePoint property must be 4.  




**Value type**: Double.  




The default value is 0.31271.

**Default value**: `=  property(fget=__GetWhitePointX, fset=__SetWhitePointX)`

*Defined in `SpeosNX_2512.py` at line 19096*

---

#### `WhitePointY` : str

`public` `static`

Gets or sets the Y coordinate of the white point.

Prerequisite: The WhitePoint property must be 4.  




**Value type**: Double.  




The default value is 0.32902.

**Default value**: `=  property(fget=__GetWhitePointY, fset=__SetWhitePointY)`

*Defined in `SpeosNX_2512.py` at line 19105*

---

#### `ZenithNorthSystem` : str

`public` `static`

Gets the zenith north axis system.

**Value type**: ZenithNorthSystem object.

**Default value**: `=  property(fget=__GetZenithNorthSystem)`

*Defined in `SpeosNX_2512.py` at line 19110*

---

## Member Summary

| Member | Type |
|--------|------|
| `BlueSpectrumFile` | public |
| `ColorSpace` | public |
| `GreenSpectrumFile` | public |
| `GroundOrigin` | public |
| `Height` | public |
| `ImageFilePath` | public |
| `Luminance` | public |
| `PreviewSize` | public |
| `RedSpectrumFile` | public |
| `WhitePointType` | public |
| `WhitePointX` | public |
| `WhitePointY` | public |
| `ZenithNorthSystem` | public |
| `thisown` | public |
