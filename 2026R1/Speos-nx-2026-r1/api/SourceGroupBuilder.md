---
uid: class_speos_n_x__2512_1_1_source_group_builder
title: SourceGroupBuilder
---

# SourceGroupBuilder Class

**Namespace:** `SpeosNX_2512`

**Inherits from:** `FeatureBuilder`

Represents a Source Group Builder.

## Description

The Source Group Builder is used to group several sources in the same group.


To create a new instance of this class, use `FeatureCollection::CreateSourceGroupBuilder`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `Sources` | `str` | Gets source features. |

## Methods

### AddSources

```python
AddSources(self, vSources) -> 'None'
```

Adds sources into the simulation.

**Parameters:**
- `sources`: : List of Feature object


**Returns:** void.

**Parameters:**

- `vSources` (vSources)

### RemoveSources

```python
RemoveSources(self, vSources) -> 'None'
```

Deletes sources from the simulation.

**Parameters:**
- `sources`: : List of Feature object


**Returns:** void.

**Parameters:**

- `vSources` (vSources)
