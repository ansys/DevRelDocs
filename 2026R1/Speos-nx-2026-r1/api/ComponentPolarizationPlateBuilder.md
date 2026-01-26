---
uid: class_speos_n_x__2512_1_1_component_polarization_plate_builder
title: ComponentPolarizationPlateBuilder
---

# ComponentPolarizationPlateBuilder Class

**Namespace:** `SpeosNX_2512`

**Inherits from:** `FeatureBuilder`

Represents a Polarization Plate Component Builder.

## Description

The Polarization Plate Component Builder creates or edits Polarization Plate Component features. 



To create a new instance of this class, use `FeatureCollection::CreateComponentPolarizationPlateBuilder`.



Polarization plate is used to define polarization components like polarizers, wave plates, or any component whose Jones matrix is known.

## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `Angle` | `str` | Gets or sets the angle value. |
| `AxisSystem` | `str` | Gets the Axis System of the Component. |
| `DiattenuationType` | `str` | Gets or sets the Diattenuation type of the component. |
| `MaterialFilePath` | `str` | Gets or sets the material file path. |
| `OptimalWavelength` | `str` | Gets or sets the optimal wavelength value. |
| `PolarizationType` | `str` | Gets or sets the polarization type of the component. |
| `PolarizerFilePath` | `str` | Gets or sets the polarizer file path. |
| `RetardanceDivisor` | `str` | Gets or sets the retardance deivisor value. |
| `RetardanceMultiplicator` | `str` | Gets or sets the retardance multiplicator value. |
| `Thickness` | `str` | Gets the Thickness value. |
| `WavelengthIncidenceDependency` | `str` | Gets or sets the wavelength and incidence dependency value. |
| `XEnd` | `str` | Gets or sets the component X end dimension value. |
| `XMirroredExtent` | `str` | Gets or sets the component X dimension mirrored extent value. |
| `XStart` | `str` | Gets or sets the component X start dimension value. |
| `YEnd` | `str` | Gets or sets the component Y end dimension value. |
| `YMirroredExtent` | `str` | Gets or sets the component Y dimension mirrored extent value. |
| `YStart` | `str` | Gets or sets the component Y start dimension value. |
