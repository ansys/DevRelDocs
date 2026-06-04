---
uid: source_surface_builder
title: SourceSurfaceBuilder
---

# SourceSurfaceBuilder

**Full Name**: `SpeosNX_2512::SourceSurfaceBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents a Surface Source Builder.

The Surface Source Builder creates or edits Surface Source features.   




To create a new instance of this class, use FeatureCollection.CreateSourceSurfaceBuilder.  




With a surface source, you can model the light emission of a source taking into account its physical properties as the flux, the spectrum, the exitance and the intensity. A surface source can be defined with any face in a geometry which emits rays.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 20459*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 20463*

---

## Public Static Attributes

#### `AssociatedGeometries` : str

`public` `static`

Gets or sets associated geometries.

The AssociatedGeometries property takes a list of feature tag and returns a list of feature tag.  




**Value type**: List of integer.  




The default value is an empty list.

**Default value**: `=  property(fget=__GetAssociatedGeometries, fset=__SetAssociatedGeometries)`

*Defined in `SpeosNX_2512.py` at line 20668*

---

#### `ExitGeometries` : str

`public` `static`

Gets or sets the exit geometries.

The ExitGeometries property takes a list of feature tag and returns a list of feature tag.  




**Value type**: List of integer.  




The default value is an empty list.

**Default value**: `=  property(fget=__GetExitGeometries, fset=__SetExitGeometries)`

*Defined in `SpeosNX_2512.py` at line 20677*

---

#### `Exitance` : str

`public` `static`

Gets or sets the exitance type.

Exitance of a source describes how each point of a surface emits rays.  




The values are:  

 0 - Constant, ray energy is constant over surface source face.  

 1 - Variable, ray energy depends on xmp energy distribution.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetExitance, fset=__SetExitance)`

*Defined in `SpeosNX_2512.py` at line 20690*

---

#### `ExitanceDistributionDirectionReverse` : str

`public` `static`

Gets or sets the property to reverse the exitance distribution.

**Prerequisite**: The ExitanteType property must be 0.  




True: Reverses the exitance distribution direction.  

 False: Does not reverse the exitance distribution direction.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetExitanceDistributionDirectionReverse, fset=__SetExitanceDistributionDirectionReverse)`

*Defined in `SpeosNX_2512.py` at line 20702*

---

#### `ExitanceDistributionFilePath` : str

`public` `static`

Gets or sets the exitance distribution file.

**Prerequisite**: The ExitanteType property must be 1.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetExitanceDistributionFilePath, fset=__SetExitanceDistributionFilePath)`

*Defined in `SpeosNX_2512.py` at line 20711*

---

#### `ExitanceOriginPoint` : str

`public` `static`

Gets or sets the exitance origin Point.

**Prerequisite**: The ExitanceType property must be 1.  




The ExitanceOriginPoint property takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetExitanceOriginPoint, fset=__SetExitanceOriginPoint)`

*Defined in `SpeosNX_2512.py` at line 20722*

---

#### `ExitanceXDirection` : str

`public` `static`

Gets or sets the exitance X direction.

**Prerequisite**: The ExitanteType property must be 1.  




The ExitanceXDirection property takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetExitanceXDirection, fset=__SetExitanceXDirection)`

*Defined in `SpeosNX_2512.py` at line 20733*

---

#### `ExitanceXDirectionReversed` : str

`public` `static`

Gets or sets the property to reverse the exitance of X direction.

**Prerequisite**: The ExitanceType property must be 1.  




True: Reverses the exitance direction X.  

 False: Does not reverse the exitance direction X.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetExitanceXDirectionReversed, fset=__SetExitanceXDirectionReversed)`

*Defined in `SpeosNX_2512.py` at line 20745*

---

#### `ExitanceYDirection` : str

`public` `static`

Gets or sets the exitance Y direction.

**Prerequisite**: The ExitanteType property must be 1.  




The ExitanceYDirection property takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetExitanceYDirection, fset=__SetExitanceYDirection)`

*Defined in `SpeosNX_2512.py` at line 20756*

---

#### `ExitanceYDirectionReversed` : str

`public` `static`

Gets or sets the property to reverse the exitance of Y direction.

**Prerequisite**: The ExitanceType property must be 1.  




True: Reverses the exitance direction Y.  

 False: Does not reverse the exitance direction Y.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetExitanceYDirectionReversed, fset=__SetExitanceYDirectionReversed)`

*Defined in `SpeosNX_2512.py` at line 20768*

---

#### `Flux` : str

`public` `static`

Gets or sets the flux.

The unit depends on the FluxUnitType.  




**Value type**: Double (in lm, W or cd).  

 **Range**: The value must be superior to 0.0.  




The default value is 683.0 lm for FluxUnitType = 0, 1.0 W for FluxUnitType = 1 and 5.0 cd for FluxUnitType = 2.

**Default value**: `=  property(fget=__GetFlux, fset=__SetFlux)`

*Defined in `SpeosNX_2512.py` at line 20778*

---

#### `FluxUnit` : str

`public` `static`

Gets or sets the flux unit type.

The values are:   

 0 - Lumen.  

 1 - Watt.  

 2 - Candela.  




**Value type: Integer.  

**


** The default value is 0. **

**Default value**: `=  property(fget=__GetFluxUnit, fset=__SetFluxUnit)`

*Defined in `SpeosNX_2512.py` at line 20790*

---

#### `IntensityDistributionFilePath` : str

`public` `static`

Gets or sets the distribution file.

**Prerequisite**: The EnumIntensityType property must be 4.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetIntensityDistributionFilePath, fset=__SetIntensityDistributionFilePath)`

*Defined in `SpeosNX_2512.py` at line 20799*

---

#### `IntensityFWHMAngle` : str

`public` `static`

Gets or sets the Full Width At Half Maximum (FWHM) angle.

**Prerequisite**: The EnumIntensityType property must be 2.  




**Value type**: Double (in degrees).  

 **Range**: [0, 180].  




The default value is 30.0 degrees.

**Default value**: `=  property(fget=__GetIntensityFWHMAngle, fset=__SetIntensityFWHMAngle)`

*Defined in `SpeosNX_2512.py` at line 20809*

---

#### `IntensityFWHMAngleX` : str

`public` `static`

Gets or sets the Full Width At Half Maximum (FWHM) X angle.

**Prerequisite**: The EnumIntensityType property must be 3.  




**Value type**: Double (in degrees).  

 **Range**: [0, 180].  




The default value is 30.0 degrees.

**Default value**: `=  property(fget=__GetIntensityFWHMAngleX, fset=__SetIntensityFWHMAngleX)`

*Defined in `SpeosNX_2512.py` at line 20819*

---

#### `IntensityFWHMAngleY` : str

`public` `static`

Gets or sets the Full Width At Half Maximum (FWHM) Y angle.

**Prerequisite**: The EnumIntensityType property must be 3.  




**Value type**: Double (in degrees).  

 **Range**: [0, 180].  




The default value is 30.0 degrees.

**Default value**: `=  property(fget=__GetIntensityFWHMAngleY, fset=__SetIntensityFWHMAngleY)`

*Defined in `SpeosNX_2512.py` at line 20829*

---

#### `IntensityN` : str

`public` `static`

Gets or sets the N.

**Prerequisite**: The EnumIntensityType property must be 1.  




**Value type**: Double.  

 **Range**: The value must be superior to -1.0.  




The default value is 3.0.

**Default value**: `=  property(fget=__GetIntensityN, fset=__SetIntensityN)`

*Defined in `SpeosNX_2512.py` at line 20839*

---

#### `IntensityOrientation` : str

`public` `static`

Gets or sets the orientation type.

The values are:  

 0 - AxisSystem.  

 1 - NormalToSurface.  

 2 - NormalToUVMap.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetIntensityOrientation, fset=__SetIntensityOrientation)`

*Defined in `SpeosNX_2512.py` at line 20851*

---

#### `IntensityTotalAngle` : str

`public` `static`

Gets or sets the intensity total angle.

**Prerequisite**: The EnumIntensityType property must be 0, 1, 2 or 3.  




**Value type**: Double (in degrees).  

 **Range**: [0, 180].  




The default value is 180.0 degrees.

**Default value**: `=  property(fget=__GetIntensityTotalAngle, fset=__SetIntensityTotalAngle)`

*Defined in `SpeosNX_2512.py` at line 20861*

---

#### `IntensityType` : str

`public` `static`

Gets or sets the intensity type of the light source.

The values are:  

 0 - Lambertian.  

 1 - Cos.  

 2 - Symmetric Gaussian.  

 3 - Asymmetric Gaussian.  

 4 - Library.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetIntensityType, fset=__SetIntensityType)`

*Defined in `SpeosNX_2512.py` at line 20876*

---

#### `IntensityXDirection` : str

`public` `static`

Gets or sets the intensity X Direction.

**Prerequisite**: The EnumIntensityType property must be 3.  




The property IntensityXDirection takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetIntensityXDirection, fset=__SetIntensityXDirection)`

*Defined in `SpeosNX_2512.py` at line 20887*

---

#### `IntensityXDirectionReversed` : str

`public` `static`

Gets or sets the property to reverse the intensity X direction.

**Prerequisite**: The EnumIntensityType property must be 3.  




True: Reverses the intensity X direction.  

 False: Does not reverse the intensity X direction.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetIntensityXDirectionReversed, fset=__SetIntensityXDirectionReversed)`

*Defined in `SpeosNX_2512.py` at line 20899*

---

#### `IntensityYDirection` : str

`public` `static`

Gets or sets the intensity Y Direction.

**Prerequisite**: The EnumIntensityType property must be 3.  




The property IntensityYDirection takes a feature tag and returns a feature tag.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetIntensityYDirection, fset=__SetIntensityYDirection)`

*Defined in `SpeosNX_2512.py` at line 20910*

---

#### `IntensityYDirectionReversed` : str

`public` `static`

Gets or sets the property to reverse the intensity Y direction.

**Prerequisite**: The EnumIntensityType property must be 3 or The IntensityOrientationType must be 0.  




True: Reverses the intensity Y direction.  

 False: Does not reverse the intensity Y direction.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetIntensityYDirectionReversed, fset=__SetIntensityYDirectionReversed)`

*Defined in `SpeosNX_2512.py` at line 20922*

---

#### `NumberOfRays` : str

`public` `static`

Gets or sets the number of rays.

Edits the value to set the number of rays displayed in the preview.


**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 100.

**Default value**: `=  property(fget=__GetNumberOfRays, fset=__SetNumberOfRays)`

*Defined in `SpeosNX_2512.py` at line 20931*

---

#### `RayLength` : str

`public` `static`

Gets or sets the ray length.

Edits the value to set the length of the rays preview in the 3D view.


**Value type**: Double (in mm).  

 **Range**: The value must be superior to 0.0.  




The default value is 75.0 mm.

**Default value**: `=  property(fget=__GetRayLength, fset=__SetRayLength)`

*Defined in `SpeosNX_2512.py` at line 20941*

---

#### `ShowIntensityDistribution` : str

`public` `static`

Gets or sets the property to show the intensity distribution.

True: Shows the intensity distribution in the preview.  

 False: Does not show the intensity distribution in the preview.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetShowIntensityDistribution, fset=__SetShowIntensityDistribution)`

*Defined in `SpeosNX_2512.py` at line 20951*

---

#### `SourceSurfaceEmissiveFaces` : str

`public` `static`

Returns the interface to edit the emissive faces of the source.

**Prerequisite**: The ExitanteType property must be 0.  




**Value type**: SourceSurfaceEmissiveFaces object.

**Default value**: `=  property(fget=__GetSourceSurfaceEmissiveFaces)`

*Defined in `SpeosNX_2512.py` at line 20958*

---

#### `Spectrum` : str

`public` `static`

Gets or sets the spectrum type.

The values are:  

 0 - Monochromatic, you can edit the wavelength value.  

 1 - Blackbody, you can edit the temperature value.  

 2 - Library, you can browse a .spectrum file.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetSpectrum, fset=__SetSpectrum)`

*Defined in `SpeosNX_2512.py` at line 20970*

---

#### `SpectrumFilePath` : str

`public` `static`

Gets or sets the spectrum file.

**Prerequisite**: The SpectrumType property must be 2.  




**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetSpectrumFilePath, fset=__SetSpectrumFilePath)`

*Defined in `SpeosNX_2512.py` at line 20979*

---

#### `Temperature` : str

`public` `static`

Gets or sets the temperature.

**Prerequisite**: The SpectrumType property must be 1.  




**Value type**: Double (in Kelvin).  

 **Range**: The value must be superior to 0.0.  




The default value is 2856.0 Kelvin.

**Default value**: `=  property(fget=__GetTemperature, fset=__SetTemperature)`

*Defined in `SpeosNX_2512.py` at line 20989*

---

#### `UseFluxFromFile` : str

`public` `static`

Gets or sets the property to use the flux from file.

True: Uses the flux from a file.  

 False: Does not use the flux from a file.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetUseFluxFromFile, fset=__SetUseFluxFromFile)`

*Defined in `SpeosNX_2512.py` at line 20999*

---

#### `Wavelength` : str

`public` `static`

Gets or sets the wavelength.

**Prerequisite**: The SpectrumType property must be 0.  




**Value type**: Double (in nm).  

 **Range**: The value must be superior to 0.0.  




The default value is 555.0 nm.

**Default value**: `=  property(fget=__GetWavelength, fset=__SetWavelength)`

*Defined in `SpeosNX_2512.py` at line 21009*

---

## Member Summary

| Member | Type |
|--------|------|
| `AssociatedGeometries` | public |
| `ExitGeometries` | public |
| `Exitance` | public |
| `ExitanceDistributionDirectionReverse` | public |
| `ExitanceDistributionFilePath` | public |
| `ExitanceOriginPoint` | public |
| `ExitanceXDirection` | public |
| `ExitanceXDirectionReversed` | public |
| `ExitanceYDirection` | public |
| `ExitanceYDirectionReversed` | public |
| `Flux` | public |
| `FluxUnit` | public |
| `IntensityDistributionFilePath` | public |
| `IntensityFWHMAngle` | public |
| `IntensityFWHMAngleX` | public |
| `IntensityFWHMAngleY` | public |
| `IntensityN` | public |
| `IntensityOrientation` | public |
| `IntensityTotalAngle` | public |
| `IntensityType` | public |
| `IntensityXDirection` | public |
| `IntensityXDirectionReversed` | public |
| `IntensityYDirection` | public |
| `IntensityYDirectionReversed` | public |
| `NumberOfRays` | public |
| `RayLength` | public |
| `ShowIntensityDistribution` | public |
| `SourceSurfaceEmissiveFaces` | public |
| `Spectrum` | public |
| `SpectrumFilePath` | public |
| `Temperature` | public |
| `UseFluxFromFile` | public |
| `Wavelength` | public |
| `thisown` | public |
