---
uid: class_speos_n_x__2512_1_1_sensor_human_eye_builder
title: SensorHumanEyeBuilder
---

# SensorHumanEyeBuilder Class

**Namespace:** `SpeosNX_2512`

**Inherits from:** `FeatureBuilder`

Represents a Human Eye Sensor Builder.

## Description

The Human Eye Sensor Builder is used to create and edit Human Eye Sensor features.


To create a new instance of this class, use `FeatureCollection::CreateSensorHumanEyeBuilder`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `DisplayPropertiesFromFile` | `str` | Gets or sets the property to enable the use of display properties that come from File. |
| `EyePoint` | `str` | Gets or sets the eye point. |
| `GridOriginX` | `str` | Gets or sets the grid X origin. |
| `GridOriginY` | `str` | Gets or sets the grid Y origin. |
| `GridStepX` | `str` | Gets or sets the grid X step. |
| `GridStepY` | `str` | Gets or sets the grid Y step. |
| `LayerType` | `str` | Gets or sets the layer mode. |
| `PupilDiameter` | `str` | Gets or sets the pupil diameter. |
| `ShowGrid` | `str` | Gets or sets the property to enable grid preview. |
| `TargetPoint` | `str` | Gets or sets the target point. |
| `TemplateFilePath` | `str` | Gets or sets the XM3 template file. |
| `Type` | `str` | Gets or sets the sensor type. |
| `UseTemplateFile` | `str` | Gets or sets the property to enable or disable use of XM3 template file. |
| `VerticalDirection` | `str` | Gets or sets the vertical direction. |
| `VerticalDirectionReversed` | `str` | Gets or sets the reverse vertical direction. |
| `VisionFieldHorizontalEnd` | `str` | Gets or sets the horizontal end for vision field. |
| `VisionFieldHorizontalMirroredExtent` | `str` | Gets or sets the mirrored extent property for horizontal vision field. |
| `VisionFieldHorizontalResolution` | `str` | Gets or sets the horizontal resolution for vision field. |
| `VisionFieldHorizontalSampling` | `str` | Gets the horizontal sampling for vision field. |
| `VisionFieldHorizontalStart` | `str` | Gets or sets the horizontal start for vision field. |
| `VisionFieldVerticalEnd` | `str` | Gets or sets the vertical end for vision field. |
| `VisionFieldVerticalMirroredExtent` | `str` | Gets or sets the mirrored extent property for vertical vision field. |
| `VisionFieldVerticalResolution` | `str` | Gets or sets the vertical resolution for vision field. |
| `VisionFieldVerticalSampling` | `str` | Gets the vertical sampling for vision field. |
| `VisionFieldVerticalStart` | `str` | Gets or sets the vertical start for vision field. |
| `WavelengthEnd` | `str` | Gets the higher value of the wavelength range to be considered by the sensor. |
| `WavelengthResolution` | `str` | Gets or sets the Wavelength resolution. |
| `WavelengthSampling` | `str` | Gets or sets the wavelength sampling. |
| `WavelengthStart` | `str` | Gets the lower value of the wavelength range to be considered by the sensor. |

## Methods

### UdpateWavelengthSamplingFromResolution

```python
UdpateWavelengthSamplingFromResolution(self, value) -> 'None'
```





**Parameters:**

- `value` (value)
