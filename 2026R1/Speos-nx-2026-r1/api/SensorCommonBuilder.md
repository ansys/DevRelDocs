---
uid: class_speos_n_x__2512_1_1_sensor_common_builder
title: SensorCommonBuilder
---

# SensorCommonBuilder Class

**Namespace:** `SpeosNX`

**Inherits from:** `FeatureBuilder`

A base class for all Sensor Builders.

## Description

A Builder is an object that is used to create and edit Features.


This is an abstract class that provides the basic functionality common to all builders. See the Builder subclasses for details of application-specific builders.


This is an abstract class, and cannot be instantiated.

## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `AxisSystem` | `str` | Gets the Axis System of the Sensor. |
| `DimensionFromFile` | `str` | Gets or sets the property to enable the use of dimensions that come from File. |
| `DisplayPropertiesFromFile` | `str` | Gets or sets the property to enable the use of display properties that come from File. |
| `GridOriginX` | `str` | Gets or sets the grid X origin. |
| `GridOriginY` | `str` | Gets or sets the grid Y origin. |
| `GridStepX` | `str` | Gets or sets the grid X step. |
| `GridStepY` | `str` | Gets or sets the grid Y step. |
| `SensorFilter` | `str` | Gets the sensor filter. |
| `ShowGrid` | `str` | Gets or sets the property to enable grid preview. |
| `TemplateFilePath` | `str` | Gets or sets the template file's path. |
| `TemplateType` | `str` | Gets or sets the template type. |
| `Type` | `str` | Gets or sets the type of the sensor. |
| `UseTemplateFile` | `str` | Gets or sets the property to enable the use of template file. |
| `WavelengthEnd` | `str` | Gets or sets the wavelength ending border. |
| `WavelengthResolution` | `str` | Gets or sets the Wavelength resolution. |
| `WavelengthSampling` | `str` | Gets or sets the wavelength sampling. |
| `WavelengthStart` | `str` | Gets or sets the wavelength starting border. |
| `XEnd` | `str` | Gets or sets the Sensor X end dimension value. |
| `XMirroredExtent` | `str` | Gets the Sensor X dimension mirrored extent value. |
| `XResolution` | `str` | Gets or sets the Sensor X dimension resolution value. |
| `XSampling` | `str` | Gets or sets the Sensor X dimension sampling value. |
| `XStart` | `str` | Gets or sets the Sensor X start dimension value. |
| `YEnd` | `str` | Gets or sets the Sensor Y end dimension value. |
| `YMirroredExtent` | `str` | Gets the Sensor Y dimension mirrored extent value. |
| `YResolution` | `str` | Gets or sets the Sensor Y dimension resolution value. |
| `YSampling` | `str` | Gets or sets the Sensor Y dimension sampling value. |
| `YStart` | `str` | Gets or sets the Sensor Y start dimension value. |

## Methods

### IsTemplateFileValid

```python
IsTemplateFileValid(self) -> 'bool'
```

Checks whether the template file is valid.

**Returns:** True: The template file is valid.
 False: The template file is not valid.
