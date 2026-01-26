---
uid: class_speos_n_x__2512_1_1_sensor_camera_builder
title: SensorCameraBuilder
---

# SensorCameraBuilder Class

**Namespace:** `SpeosNX_2512`

**Inherits from:** `FeatureBuilder`

Represents a Camera Sensor Builder.

## Description

The Camera Sensor Builder creates or edits Camera Sensor features. 



To create a new instance of this class, use FeatureCollection.CreateSensorCameraBuilder.



With a surface source, you can simulate rays integration as in a real camera according to the camera parameters set.

## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `AxisSystem` | `str` | Gets the Axis System of the Sensor. |
| `BlueGain` | `str` | Gets or sets the blue gain. |
| `CameraMode` | `str` | Gets or sets the camera mode. |
| `ColorMode` | `str` | Gets or sets the color mode. |
| `DisplayAperture` | `str` | Gets or sets the property to enable the preview of the Aperture. |
| `DisplayCameraField` | `str` | Gets or sets the property to enable the preview of the Camera Field. |
| `DisplayObjectField` | `str` | Gets or sets the property to enable the preview of the Object Field. |
| `DistortionFilePath` | `str` | Gets or sets the distortion file path. |
| `FNumber` | `str` | Gets or sets the F number. |
| `FocalLength` | `str` | Gets or sets the focal length. |
| `GammaCorrection` | `str` | Gets or sets the gamma correction. |
| `GreenGain` | `str` | Gets or sets the green gain. |
| `Height` | `str` | Gets or sets the height . |
| `HorizontalFOV` | `str` | Gets the Horizontal Field of View. |
| `HorizontalPixels` | `str` | Gets or sets the horizontal pixels . |
| `ImagerDistance` | `str` | Gets or sets the Image Distance. |
| `Layer` | `str` | Gets or sets the layer mode. |
| `PNGBits` | `str` | Gets or sets the PNG Bits. |
| `RedGain` | `str` | Gets or sets the red gain. |
| `SensitivityBlueSpectrumFilePath` | `str` | Gets or sets the sensitivity blue spectrum file path. |
| `SensitivityGreenSpectrumFilePath` | `str` | Gets or sets the sensitivity green spectrum file path. |
| `SensitivityMonochromaticSpectrumFilePath` | `str` | Gets or sets the sensitivity monochromatic spectrum file path. |
| `SensitivityRedSpectrumFilePath` | `str` | Gets or sets the sensitivity red spectrum file path. |
| `TransmittanceFilePath` | `str` | Gets or sets the transmittance file path. |
| `VerticalFOV` | `str` | Gets the Vertical Field of View. |
| `VerticalPixels` | `str` | Gets or sets the vertical pixels . |
| `VisualizationRadius` | `str` | Gets or sets the Visualization radius. |
| `WavelengthEnd` | `str` | Gets or sets the higher value of the wavelength range to be considered by the sensor. |
| `WavelengthResolution` | `str` | Gets the Wavelength resolution. |
| `WavelengthSampling` | `str` | Gets or sets the wavelength sampling. |
| `WavelengthStart` | `str` | Gets or sets the lower value of the wavelength range to be considered by the sensor. |
| `WhiteBalanceBlueSpectrumFilePath` | `str` | Gets or sets the white balance blue spectrum file path. |
| `WhiteBalanceGreenSpectrumFilePath` | `str` | Gets or sets the white balance green spectrum file path. |
| `WhiteBalanceMode` | `str` | Gets or sets the white balance mode. |
| `WhiteBalanceRedSpectrumFilePath` | `str` | Gets or sets the white balance red spectrum file path. |
| `Width` | `str` | Gets or sets the width . |

## Methods

### UpdateWavelengthSamplingFromResolution

```python
UpdateWavelengthSamplingFromResolution(self, resolution) -> 'None'
```

Updates the wavelength sampling from a resolution.

**Parameters:**
- `Resolution`: Double.

**Parameters:**

- `resolution` (resolution)
