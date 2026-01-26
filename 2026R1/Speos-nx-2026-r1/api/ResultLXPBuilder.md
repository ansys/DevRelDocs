---
uid: class_speos_n_x__2512_1_1_result_l_x_p_builder
title: ResultLXPBuilder
---

# ResultLXPBuilder Class

**Namespace:** `SpeosNX`

**Inherits from:** `FeatureBuilder`

Represents a Result Light Expert builder.

## Description

The ResultLXPBuilder is used to create and edit Result Light Expert features.



To create a new instance of this class, use `FeatureCollection::CreateResultLXPBuilder`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `DrawingOptions` | `str` | Gets or sets the drawing options. |
| `InfiniteRayLength` | `str` | Gets or sets the infinite ray length. |
| `NumberOfRays` | `str` | Gets or sets the number of rays. |
| `RejectedFaces` | `str` | Gets or sets rejected faces tag. |
| `RequiredFaces` | `str` | Gets or sets requiered faces tag. |
| `RequiredFacesMode` | `str` | Gets or sets the required faces mode. |
| `SelectedRaysMode` | `str` | Gets or sets the selected rays mode. |

## Methods

### CreateAreaRectangle

```python
CreateAreaRectangle(self, sensorIndex, xCenter, yCenter, width, height) -> 'None'
```

Create a rectangle area.

**Parameters:**
- `viewerId`: index of XMP in the sensor group (must be 0 for non group sensor) : Unsigned integer.
- `xCenter`: Center position X of the rectangle area : double.
- `yCenter`: Center position Y of the rectangle area : double.
- `width`: Width of the rectangle area : double.
- `height`: Height of the rectangle area : double.

The default value is no reactangle area.

**Parameters:**

- `sensorIndex` (sensorIndex)
- `xCenter` (xCenter)
- `yCenter` (yCenter)
- `width` (width)
- `height` (height)

### CreateAreaEllipse

```python
CreateAreaEllipse(self, sensorIndex, xCenter, yCenter, xRadius, yRadius) -> 'None'
```

Create an ellipse area.

**Parameters:**
- `viewerId`: index of XMP in the sensor group (must be 0 for non group sensor) : Unsigned integer.
- `xCenter`: Center position X of the ellipse area : double.
- `yCenter`: Center position Y of the ellipse area : double.
- `xRadius`: Radius X of the ellipse area : double.
- `yRadius`: Radius Y of the ellipse area : double.

The default value is no reactangle area.

**Parameters:**

- `sensorIndex` (sensorIndex)
- `xCenter` (xCenter)
- `yCenter` (yCenter)
- `xRadius` (xRadius)
- `yRadius` (yRadius)

### CreateAreaPolygon

```python
CreateAreaPolygon(self, sensorIndex, xPts, yPts) -> 'None'
```

Create an polygon area.

**Parameters:**
- `viewerId`: index of XMP in the sensor group (must be 0 for non group sensor) : Unsigned integer.
- `xPts`: List of X position of the polygon area : List of double.
- `yPts`: List of X position of the polygon area : List of double.

The default value is no reactangle area.

**Parameters:**

- `sensorIndex` (sensorIndex)
- `xPts` (xPts)
- `yPts` (yPts)

### RetrieveMeasureValue

```python
RetrieveMeasureValue(self, sensorIndex, measureType) -> 'float'
```

Retrieve measure value.

RetrieveMeasureValue return measure value by Type.
 
**Parameters:**
- `viewerId`: index of XMP in the sensor group (must be 0 for non group sensor) : Unsigned integer.
- `measureType`: the type of value to retrieve : Unsigned integer.
 The values are:
 1 - Maximum
 2 - Maximum position X
 3 - Maximum position Y
 4 - Minimum
 5 - Minimum position X
 6 - Minimum position Y
 7 - Average
 8 - Flux
 9 - Barycentre position X
 10 - Barycentre position Y
 11 - Sigma
 12 - Sigma position X
 13 - Sigma position Y
 14 - Contrast
 15 - RMS Contrast
 16 - Eye Irradiance
 17 - Range
 19 - Range position X
 2O - Range position Y
 21 - Area
 22 - UGR117
 28 - Deviation Min
 29 - Deviation Max
 30 - Deviation Average


**Returns:** the result measure.

**Parameters:**

- `sensorIndex` (sensorIndex)
- `measureType` (measureType)
