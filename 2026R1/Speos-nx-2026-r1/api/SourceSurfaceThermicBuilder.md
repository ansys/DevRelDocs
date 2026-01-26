---
uid: class_speos_n_x__2512_1_1_source_surface_thermic_builder
title: SourceSurfaceThermicBuilder
---

# SourceSurfaceThermicBuilder Class

**Namespace:** `SpeosNX`

**Inherits from:** `FeatureBuilder`

Represents a Thermic Surface Source Builder.

## Description

The Thermic Surface Source Builder creates or edits Thermic Surface Source features. 



To create a new instance of this class, use FeatureCollection.CreateSourceSurfaceThermicBuilder.



A thermic surface can define a source for which the total flux and the spectrum are defined by the source's temperature and the optical properties of the support geometry. You can define a thermic source on any face of the geometry.

## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `CosN` | `str` | Gets or sets the N value for Cos distribution. |
| `EmittanceFilePath` | `str` | Gets or sets the emittance file. |
| `EmittanceOrigin` | `str` | Gets or sets the emittance origin Point. |
| `EmittanceType` | `str` | Gets or sets the emittance type. |
| `EmittanceXDirection` | `str` | Gets or sets the emittance X direction. |
| `EmittanceXDirectionReversed` | `str` | Gets or sets the property to reverse the emittance of X direction. |
| `EmittanceYDirection` | `str` | Gets or sets the emittance Y direction. |
| `EmittanceYDirectionReversed` | `str` | Gets or sets the property to reverse the emittance of Y direction. |
| `EnableAutomaticUpdate` | `str` | Gets or sets the property to enable/disable the automatic update. |
| `Flux` | `str` | Gets the flux. |
| `FluxUnit` | `str` | Gets or sets the flux unit. |
| `IntensityType` | `str` | Gets or sets the intensity diagram. |
| `NumberOfRays` | `str` | Gets or sets the number of rays. |
| `PreviewMode` | `str` | Gets or sets the preview mode. |
| `RayLength` | `str` | Gets or sets the ray length. |
| `SOPLibraryFilePath` | `str` | Gets or sets the surface optical properties library file. |
| `SOPParametersFilePath` | `str` | Gets or sets the surface optical properties parameters file. |
| `SOPPluginFilePath` | `str` | Gets or sets the surface optical properties plug-in file. |
| `SOPReflectance` | `str` | Gets or sets the surface optical properties reflectance. |
| `SOPType` | `str` | Gets or sets the surface optical properties. |
| `SourceSurfaceEmissiveFaces` | `str` | Returns the interface to edit the emissive faces of the source. |
| `Temperature` | `str` | Gets or sets the temperature. |
