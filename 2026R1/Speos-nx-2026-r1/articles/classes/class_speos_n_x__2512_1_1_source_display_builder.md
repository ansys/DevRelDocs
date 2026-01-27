---
uid: source_display_builder
title: SourceDisplayBuilder
---

# SourceDisplayBuilder

**Full Name**: `SpeosNX_2512::SourceDisplayBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents the builder for a display source.

The display source builder is used to create and edit display source features.


To create a new instance of this class, use `FeatureCollection::CreateSourceDisplayBuilder`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 19124*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 19128*

---

## Public Static Attributes

#### `AxisSystem` : str

`public` `static`

Gets the axis system.

**Value type**: AxisSystem object.

**Default value**: `=  property(fget=__GetAxisSystem)`

*Defined in `SpeosNX_2512.py` at line 19328*

---

#### `BlueSpectrumFilePath` : str

`public` `static`

Gets or sets the blue spectrum file.

Prerequisite: The ColorSpace property must be 2.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetBlueSpectrumFilePath, fset=__SetBlueSpectrumFilePath)`

*Defined in `SpeosNX_2512.py` at line 19337*

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

*Defined in `SpeosNX_2512.py` at line 19349*

---

#### `Contrast` : str

`public` `static`

Gets or sets the contrast ratio.

Prerequisite: The IsInfiniteContrast property must be False.  




Contrast Ratio = (Luminance of the brightest color-Luminance of the darkest color)/(Luminance of the darkest color).  




**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 500.

**Default value**: `=  property(fget=__GetContrast, fset=__SetContrast)`

*Defined in `SpeosNX_2512.py` at line 19361*

---

#### `CosN` : str

`public` `static`

Gets or sets the N value for Cos distribution.

Prerequisite: The IntensityType property must be 1.  




**Value type**: Double.  




The default value is 3.0.

**Default value**: `=  property(fget=__GetCosN, fset=__SetCosN)`

*Defined in `SpeosNX_2512.py` at line 19370*

---

#### `GaussianFWHMAngle` : str

`public` `static`

Gets or sets the FWHM angle value for Symmetric Gaussian distribution.

Prerequisite: The IntensityType property must be 2.  




**Value type**: Double (in degrees).  

 **Range**: [0.0, 180.0].  




The default value is 30.0 degrees.

**Default value**: `=  property(fget=__GetGaussianFWHMAngle, fset=__SetGaussianFWHMAngle)`

*Defined in `SpeosNX_2512.py` at line 19380*

---

#### `GaussianFWHMAngleX` : str

`public` `static`

Gets or sets the FWHM X angle value for Asymmetric Gaussian distribution.

Prerequisite: The IntensityType property must be 3.  




**Value type**: Double (in degrees).  

 **Range**: [0.0, 180.0].  




The default value is 30.0 degrees.

**Default value**: `=  property(fget=__GetGaussianFWHMAngleX, fset=__SetGaussianFWHMAngleX)`

*Defined in `SpeosNX_2512.py` at line 19390*

---

#### `GaussianFWHMAngleY` : str

`public` `static`

Gets or sets the FWHM Y angle value for Asymmetric Gaussian distribution.

Prerequisite: The IntensityType property must be 3.  




**Value type**: Double (in degrees).  

 **Range**: [0.0, 180.0].  




The default value is 30.0 degrees.

**Default value**: `=  property(fget=__GetGaussianFWHMAngleY, fset=__SetGaussianFWHMAngleY)`

*Defined in `SpeosNX_2512.py` at line 19400*

---

#### `GreenSpectrumFilePath` : str

`public` `static`

Gets or sets the green spectrum file.

Prerequisite: The ColorSpace property must be 2.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetGreenSpectrumFilePath, fset=__SetGreenSpectrumFilePath)`

*Defined in `SpeosNX_2512.py` at line 19409*

---

#### `ImageFilePath` : str

`public` `static`

Gets or sets the image file.

Selects a .jpg or a .png file.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetImageFilePath, fset=__SetImageFilePath)`

*Defined in `SpeosNX_2512.py` at line 19418*

---

#### `InfiniteContrast` : str

`public` `static`

Gets or sets the property to enable infinite contrast ratio.

True: Enable contrast ratio.  

 False: Disable contrast ratio.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetInfiniteContrast, fset=__SetInfiniteContrast)`

*Defined in `SpeosNX_2512.py` at line 19428*

---

#### `IntensityFilePath` : str

`public` `static`

Gets or sets the intensity file for Library distribution.

Prerequisite: The IntensityType property must be 4.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetIntensityFilePath, fset=__SetIntensityFilePath)`

*Defined in `SpeosNX_2512.py` at line 19437*

---

#### `IntensityType` : str

`public` `static`

Gets or sets the intensity diagram.

The intensity diagram of a source describes in which directions is made the emission.  




The values are:  

 0 - Lambertian.  

 1 - Cos.  

 2 - Symmetric Gaussian.  

 3 - Asymmetric Gaussian.  

 4 - Library.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetIntensityType, fset=__SetIntensityType)`

*Defined in `SpeosNX_2512.py` at line 19453*

---

#### `LambertianMaximumAngle` : str

`public` `static`

Gets or sets the theta value for Lambertian distribution.

Prerequisite: The IntensityType property must be 0.  




**Value type**: Double (in degrees).  

 **Range**: [0.0, 180.0].  




The default value is 180.0 degrees.

**Default value**: `=  property(fget=__GetLambertianMaximumAngle, fset=__SetLambertianMaximumAngle)`

*Defined in `SpeosNX_2512.py` at line 19463*

---

#### `Luminance` : str

`public` `static`

Gets or sets the luminance.

The luminance parameter is the source luminance for the white point in front direction of the source.  




**Value type**: Double (in cd/m2).  

 **Range**: The value must be superior to 0.0.  




The default value is 50.0 cd/m2.

**Default value**: `=  property(fget=__GetLuminance, fset=__SetLuminance)`

*Defined in `SpeosNX_2512.py` at line 19473*

---

#### `NumberOfRays` : str

`public` `static`

Gets or sets the number of rays.

**Value type**: Integer.  

 **Range**: The value must be superior or equal to 0.  




The default value is 100.

**Default value**: `=  property(fget=__GetNumberOfRays, fset=__SetNumberOfRays)`

*Defined in `SpeosNX_2512.py` at line 19481*

---

#### `RayLength` : str

`public` `static`

Gets or sets the ray length.

**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 75.0 mm.

**Default value**: `=  property(fget=__GetRayLength, fset=__SetRayLength)`

*Defined in `SpeosNX_2512.py` at line 19489*

---

#### `RedSpectrumFilePath` : str

`public` `static`

Gets or sets the red spectrum file.

Prerequisite: The ColorSpace property must be 2.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetRedSpectrumFilePath, fset=__SetRedSpectrumFilePath)`

*Defined in `SpeosNX_2512.py` at line 19498*

---

#### `ShowImage` : str

`public` `static`

Gets or sets the property to show the image.

True: Shows the image.  

 False: Does not show the image.  




The default value is True.

**Default value**: `=  property(fget=__GetShowImage, fset=__SetShowImage)`

*Defined in `SpeosNX_2512.py` at line 19506*

---

#### `ShowIntensityDistribution` : str

`public` `static`

Gets or sets the property to show the intensity distribution in the 3D view.

Prerequisite: The IntensityType property must be 4.  




True: Shows the intensity distribution in the 3D view.  

 False: Does not show the intensity distribution in the 3D view.  




The default value is False.

**Default value**: `=  property(fget=__GetShowIntensityDistribution, fset=__SetShowIntensityDistribution)`

*Defined in `SpeosNX_2512.py` at line 19516*

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

 4 - User defined. Edits the Color Coordinates of the white point.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetWhitePointType, fset=__SetWhitePointType)`

*Defined in `SpeosNX_2512.py` at line 19532*

---

#### `WhitePointX` : str

`public` `static`

Gets or sets the X coordinate of the white point.

Prerequisite: The WhitePoint property must be 4.  




**Value type**: Double.  




The default value is 0.31271.

**Default value**: `=  property(fget=__GetWhitePointX, fset=__SetWhitePointX)`

*Defined in `SpeosNX_2512.py` at line 19541*

---

#### `WhitePointY` : str

`public` `static`

Gets or sets the Y coordinate of the white point.

Prerequisite: The WhitePoint property must be 4.  




**Value type**: Double.  




The default value is 0.32902.

**Default value**: `=  property(fget=__GetWhitePointY, fset=__SetWhitePointY)`

*Defined in `SpeosNX_2512.py` at line 19550*

---

#### `XDirection` : str

`public` `static`

Gets or sets the X direction.

Prerequisite: The IntensityType property must be 3 or 4.  




The XDirection property takes a feature tag and returns a feature tag.  

 You can modify the property if the distribution is Asymmetric Gaussian or Library  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetXDirection, fset=__SetXDirection)`

*Defined in `SpeosNX_2512.py` at line 19562*

---

#### `XDirectionReversed` : str

`public` `static`

Gets or sets the property to reverse the X direction.

Prerequisite: The IntensityType property must be 3 or 4.  




True: Reverses the X direction.  

 False: Does not reverse the X direction.  




**Value type**: Boolean.


The default value is False.

**Default value**: `=  property(fget=__GetXDirectionReversed, fset=__SetXDirectionReversed)`

*Defined in `SpeosNX_2512.py` at line 19574*

---

#### `XEnd` : str

`public` `static`

Gets or sets the sensor X end dimension value.

**Value type**: Double (in mm).  




The default value is 50.0 mm.

**Default value**: `=  property(fget=__GetXEnd, fset=__SetXEnd)`

*Defined in `SpeosNX_2512.py` at line 19581*

---

#### `XMirroredExtent` : str

`public` `static`

Gets or sets the sensor X dimension mirrored value.

True: XStart == -XEnd, you can only change the XEnd value.  

 False: XStart and XEnd can have different value.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetXMirroredExtent, fset=__SetXMirroredExtent)`

*Defined in `SpeosNX_2512.py` at line 19591*

---

#### `XStart` : str

`public` `static`

Gets or sets the sensor X start dimension value.

**Value type**: Double (in mm).  




The default value is -50.0 mm.

**Default value**: `=  property(fget=__GetXStart, fset=__SetXStart)`

*Defined in `SpeosNX_2512.py` at line 19598*

---

#### `YDirection` : str

`public` `static`

Gets or sets the Y direction.

Prerequisite: The IntensityType property must be 3 or 4.  




The YDirection property takes a feature tag and returns a feature tag.  

 You can modify the property if the distribution is Asymmetric Gaussian or Library  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetYDirection, fset=__SetYDirection)`

*Defined in `SpeosNX_2512.py` at line 19610*

---

#### `YDirectionReversed` : str

`public` `static`

Gets or sets the property to reverse the Y direction.

Prerequisite: The IntensityType property must be 3 or 4.  




True: Reverses the Y direction.  

 False: Does not reverse the Y direction.  




**Value type**: Boolean.


The default value is False.

**Default value**: `=  property(fget=__GetYDirectionReversed, fset=__SetYDirectionReversed)`

*Defined in `SpeosNX_2512.py` at line 19622*

---

#### `YEnd` : str

`public` `static`

Gets or sets the sensor Y start dimension value.

**Value type**: Double (in mm).  




The default value is 50.0 mm.

**Default value**: `=  property(fget=__GetYEnd, fset=__SetYEnd)`

*Defined in `SpeosNX_2512.py` at line 19629*

---

#### `YMirroredExtent` : str

`public` `static`

Gets or sets the sensor Y dimension mirrored value.

True: YStart == -YEnd, you can only change the YEnd value.  

 False: YStart and YEnd can have different value.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetYMirroredExtent, fset=__SetYMirroredExtent)`

*Defined in `SpeosNX_2512.py` at line 19639*

---

#### `YStart` : str

`public` `static`

Gets or sets the sensor Y start dimension value.

**Value type**: Double (in mm).  




The default value is -50.0 mm.

**Default value**: `=  property(fget=__GetYStart, fset=__SetYStart)`

*Defined in `SpeosNX_2512.py` at line 19646*

---

## Member Summary

| Member | Type |
|--------|------|
| `AxisSystem` | public |
| `BlueSpectrumFilePath` | public |
| `ColorSpace` | public |
| `Contrast` | public |
| `CosN` | public |
| `GaussianFWHMAngle` | public |
| `GaussianFWHMAngleX` | public |
| `GaussianFWHMAngleY` | public |
| `GreenSpectrumFilePath` | public |
| `ImageFilePath` | public |
| `InfiniteContrast` | public |
| `IntensityFilePath` | public |
| `IntensityType` | public |
| `LambertianMaximumAngle` | public |
| `Luminance` | public |
| `NumberOfRays` | public |
| `RayLength` | public |
| `RedSpectrumFilePath` | public |
| `ShowImage` | public |
| `ShowIntensityDistribution` | public |
| `WhitePointType` | public |
| `WhitePointX` | public |
| `WhitePointY` | public |
| `XDirection` | public |
| `XDirectionReversed` | public |
| `XEnd` | public |
| `XMirroredExtent` | public |
| `XStart` | public |
| `YDirection` | public |
| `YDirectionReversed` | public |
| `YEnd` | public |
| `YMirroredExtent` | public |
| `YStart` | public |
| `thisown` | public |
