---
uid: class_speos_n_x__2512_1_1_simulation_common_builder
title: SimulationCommonBuilder
---

# SimulationCommonBuilder Class

**Namespace:** `SpeosNX`

**Inherits from:** `FeatureBuilder`

A base class for all Simulation Builders.

## Description

A Builder is an object that is used to create and edit Features.


This is an abstract class that provides the basic functionality common to all builders. See the Builder subclasses for details of application-specific builders.


This is an abstract class, and cannot be instantiated.

## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `AllPreset` | `str` | Gets all Preset. |
| `AmbientMaterial` | `str` | Gets or sets the ambient material. |
| `EstimatedRam` | `str` | Gets the estimated RAM usage. |
| `FeatureSimulation` | `str` | Gets the simulation feature object. |
| `Geometries` | `str` | Gets or sets geometries tag. |
| `LightExpert` | `str` | Gets or sets the property to enable Light Expert. |
| `Preset` | `str` | Gets or sets the Preset object. |
| `Sensors` | `str` | Gets or sets sensor features. |
| `Settings` | `str` | Gets or sets the simulation settings. |
| `Sources` | `str` | Gets or sets source features. |
| `StandardDeviation` | `str` | Gets or sets the standard deviation. |
| `UseAmbientMaterial` | `str` | Gets or sets the property to enable ambient material. |
| `UsePresetSettings` | `str` | Gets or sets the property to enable preset settings. |

## Methods

### RemoveSources

```python
RemoveSources(self, sources) -> 'None'
```

Deletes sources from the simulation.

**Parameters:**
- `sources`: : List of Feature object


**Returns:** void.

**Parameters:**

- `sources` (sources)

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
