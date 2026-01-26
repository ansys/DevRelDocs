---
uid: class_speos_n_x__2512_1_1_source_surface_builder
title: SourceSurfaceBuilder
---

# SourceSurfaceBuilder Class

**Namespace:** `SpeosNX`

**Inherits from:** `FeatureBuilder`

Represents a Surface Source Builder.

## Description

The Surface Source Builder creates or edits Surface Source features. 



To create a new instance of this class, use FeatureCollection.CreateSourceSurfaceBuilder.



With a surface source, you can model the light emission of a source taking into account its physical properties as the flux, the spectrum, the exitance and the intensity. A surface source can be defined with any face in a geometry which emits rays.

## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `AssociatedGeometries` | `str` | Gets or sets associated geometries. |
| `ExitGeometries` | `str` | Gets or sets the exit geometries. |
| `Exitance` | `str` | Gets or sets the exitance type. |
| `ExitanceDistributionDirectionReverse` | `str` | Gets or sets the property to reverse the exitance distribution. |
| `ExitanceDistributionFilePath` | `str` | Gets or sets the exitance distribution file. |
| `ExitanceOriginPoint` | `str` | Gets or sets the exitance origin Point. |
| `ExitanceXDirection` | `str` | Gets or sets the exitance X direction. |
| `ExitanceXDirectionReversed` | `str` | Gets or sets the property to reverse the exitance of X direction. |
| `ExitanceYDirection` | `str` | Gets or sets the exitance Y direction. |
| `ExitanceYDirectionReversed` | `str` | Gets or sets the property to reverse the exitance of Y direction. |
| `Flux` | `str` | Gets or sets the flux. |
| `FluxUnit` | `str` | Gets or sets the flux unit type. |
| `IntensityDistributionFilePath` | `str` | Gets or sets the distribution file. |
| `IntensityFWHMAngle` | `str` | Gets or sets the Full Width At Half Maximum (FWHM) angle. |
| `IntensityFWHMAngleX` | `str` | Gets or sets the Full Width At Half Maximum (FWHM) X angle. |
| `IntensityFWHMAngleY` | `str` | Gets or sets the Full Width At Half Maximum (FWHM) Y angle. |
| `IntensityN` | `str` | Gets or sets the N. |
| `IntensityOrientation` | `str` | Gets or sets the orientation type. |
| `IntensityTotalAngle` | `str` | Gets or sets the intensity total angle. |
| `IntensityType` | `str` | Gets or sets the intensity type of the light source. |
| `IntensityXDirection` | `str` | Gets or sets the intensity X Direction. |
| `IntensityXDirectionReversed` | `str` | Gets or sets the property to reverse the intensity X direction. |
| `IntensityYDirection` | `str` | Gets or sets the intensity Y Direction. |
| `IntensityYDirectionReversed` | `str` | Gets or sets the property to reverse the intensity Y direction. |
| `NumberOfRays` | `str` | Gets or sets the number of rays. |
| `RayLength` | `str` | Gets or sets the ray length. |
| `ShowIntensityDistribution` | `str` | Gets or sets the property to show the intensity distribution. |
| `SourceSurfaceEmissiveFaces` | `str` | Returns the interface to edit the emissive faces of the source. |
| `Spectrum` | `str` | Gets or sets the spectrum type. |
| `SpectrumFilePath` | `str` | Gets or sets the spectrum file. |
| `Temperature` | `str` | Gets or sets the temperature. |
| `UseFluxFromFile` | `str` | Gets or sets the property to use the flux from file. |
| `Wavelength` | `str` | Gets or sets the wavelength. |
