---
uid: class_speos_n_x__2512_1_1_simulation_li_d_a_r_builder
title: SimulationLiDARBuilder
---

# SimulationLiDARBuilder Class

**Namespace:** `SpeosNX_2512`

**Inherits from:** `FeatureBuilder`

Represents an LiDAR Simulation Builder.

## Description

The LiDAR Simulation Builder is used to create and edit LiDAR Simulation features.


To create a new instance of this class, use `FeatureCollection::CreateSimulationLiDARBuilder`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `AllPreset` | `str` | Gets all Preset. |
| `AmbientMaterial` | `str` | Gets or sets the ambient material. |
| `Duration` | `str` | Gets or sets the duration. |
| `FamilySelection` | `str` | Gets or sets the family selection list. |
| `FeatureSimulation` | `str` | Gets the simulation feature object. |
| `FieldsOfView` | `str` | Gets or sets the property to enable the field of view. |
| `Geometries` | `str` | Gets or sets geometries tag. |
| `MapOfDepth` | `str` | Gets or sets the property to enable the map of depth. |
| `Preset` | `str` | Gets or sets the Preset object. |
| `RawTimeOfFlight` | `str` | Gets or sets the property to enable the raw time of flight. |
| `RayNumberMultiplier` | `str` | Gets or sets the ray number multiplier. |
| `RaysNumber` | `str` | Gets or sets the number of rays. |
| `SensorPixelGridSampling` | `str` | Gets or sets the pixel grid sampling of the sensor. |
| `Sensors` | `str` | Gets or sets sensor features. |
| `Settings` | `str` | Gets or sets the simulation settings. |
| `SourceGridSampling` | `str` | Gets or sets the grid sampling of the source. |
| `StopOnDuration` | `str` | Gets or sets the property to stop on duration. |
| `StopOnRaysNumber` | `str` | Gets or sets the property to enable stop on rays number. |
| `Timeline` | `str` | Gets or sets the property to enable the timeline. |
| `TimelineEnd` | `str` | Gets or sets the timeline end. |
| `TimelineStart` | `str` | Gets or sets the timeline start. |
| `UseAmbientMaterial` | `str` | Gets or sets the property to enable ambient material. |
| `UsePartFamilies` | `str` | Gets or sets the property to use family tables. |
| `UsePresetSettings` | `str` | Gets or sets the property to enable preset settings. |

## Methods

### RemoveGeometries

```python
RemoveGeometries(self, tags) -> 'None'
```

Deletes geometries from the simulation.

The DeleteGeometries function takes a list of feature tag as parameter. 
**Parameters:**
- `tags`: : List of integer.


**Returns:** void.

**Parameters:**

- `tags` (tags)

### RemoveSensors

```python
RemoveSensors(self, sensors) -> 'None'
```

Deletes sensors from the simulation.

**Parameters:**
- `sensors`: : List of Feature object.


**Returns:** void.

**Parameters:**

- `sensors` (sensors)
