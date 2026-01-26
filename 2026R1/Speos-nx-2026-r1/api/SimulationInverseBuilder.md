---
uid: class_speos_n_x__2512_1_1_simulation_inverse_builder
title: SimulationInverseBuilder
---

# SimulationInverseBuilder Class

**Namespace:** `SpeosNX_2512`

**Inherits from:** `SimulationCommonBuilder`

Represents an Inverse Simulation Builder.

## Description

The Inverse Simulation Builder is used to create and edit Inverse Simulation features.


To create a new instance of this class, use `FeatureCollection::CreateSimulationInverseBuilder`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `Duration` | `str` | toto |
| `FamilySelection` | `str` | Gets or sets the family selection list. |
| `MaximumNumberOfPaths` | `str` | Gets or sets the maximum number of paths. |
| `PassNumber` | `str` | Gets or sets the pass number. |
| `SourcesFacesFilteringReferences` | `str` | Gets the sources faces filtering. |
| `StopOnDuration` | `str` | Gets or sets the duration. |
| `StopOnPassNumber` | `str` | Gets or sets the property to enable stop on pass number. |
| `UsePartFamilies` | `str` | Gets or sets the property to use family tables. |

## Methods

### AddSourceFaceFilteringReferences

```python
AddSourceFaceFilteringReferences(self, tags) -> 'None'
```

Adds sources faces filtering into the simulation.

The AddSourceFaceFilteringRefs function takes a list of feature tag as parameter. 
**Parameters:**
- `tags`: : List of integer.


**Returns:** void.

**Parameters:**

- `tags` (tags)

### DeleteSourceFaceFilteringReferences

```python
DeleteSourceFaceFilteringReferences(self, tags) -> 'None'
```

Deletes sources faces filtering from the simulation.

The DeleteSourceFaceFilteringRefs function takes a list of feature tag as parameter. 
**Parameters:**
- `tags`: : List of integer.


**Returns:** void.

**Parameters:**

- `tags` (tags)
