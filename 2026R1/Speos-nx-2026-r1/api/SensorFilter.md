---
uid: class_speos_n_x__2512_1_1_sensor_filter
title: SensorFilter
---

# SensorFilter Class

**Namespace:** `SpeosNX`

**Inherits from:** `object`

Data Model for Sensor Filter.

## Description



## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `ContributionSurfaces` | `str` | Returns the contribution surfaces object. |
| `GroupNames` | `str` | Returns the group names. |
| `Groups` | `str` | Returns the groups. |
| `LayerType` | `str` | Gets or sets the type of filter. |
| `MaximumSequences` | `str` | Gets or sets the maximum number of sequences. |
| `SequencePerType` | `str` | Gets or sets the sequence per type. |
| `SortSequencePerType` | `str` | Gets or sets the property to sort the sequences per type. |
| `SurfaceContributionType` | `str` | Gets or sets the surface contribution type. |

## Methods

### AddNewGroup

```python
AddNewGroup(self) -> '`SensorFilterGroup`'
```

Creates a new group.

Prerequisite: The Type property must be 4.

### FindGroup

```python
FindGroup(self, *args) -> '`SensorFilterGroup`'
```

Returns the targeted group.

Prerequisite: The Type property must be 4.
 
**Parameters:**
- `index`: : The index of the group.

**Parameters:**

- `args` (*)

### RemoveGroup

```python
RemoveGroup(self, *args) -> 'None'
```

Removes the targeted group.

Prerequisite: The Type property must be 4.
 
**Parameters:**
- `index`: : The index of the group.

**Parameters:**

- `args` (*)
