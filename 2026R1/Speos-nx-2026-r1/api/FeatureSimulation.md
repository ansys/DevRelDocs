---
uid: class_speos_n_x__2512_1_1_feature_simulation
title: FeatureSimulation
---

# FeatureSimulation Class

**Namespace:** `SpeosNX`

**Inherits from:** `Feature`

Represents a Speos simulation feature.

## Description

A base class for all Speos simulation features.



This is an abstract class that provides the basic functionality common to all simulation features.
 This is an abstract class, and cannot be instantiated.
 To obtain an instance of this class, refer to the simulation builders.

## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `GPUSimulationMode` | `str` | Sets the simulation mode. |
| `Results` | `str` | Gets the result collection. |

## Methods

### Isolate

```python
Isolate(self) -> 'None'
```

Isolates the simulation and its results.

**Prerequisite**: The simulation must be updated.

### Export

```python
Export(self, path) -> 'None'
```

Exports the simulation to a specified location.

**Prerequisite**: The simulation must be updated. 
**Parameters:**
- `path`: : The output folder.

**Parameters:**

- `path` (path)

### LinkedExport

```python
LinkedExport(self) -> 'None'
```

Exports the simulation to the Speos isolated folder.

Exports the simulation to the folder "./Speos isolated folder/"

### RegenerationSpeosHPC

```python
RegenerationSpeosHPC(self) -> 'None'
```

Runs the simulation on the Speos HPC cluster.

**Prerequisite**: The Speos HPC cluster must be configured.
