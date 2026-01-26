---
uid: class_speos_n_x__2512_1_1_feature
title: Feature
---

# Feature Class

**Namespace:** `SpeosNX`

**Inherits from:** `object`

Represents a Speos feature.

## Description

A base class for all Speos features.



This is an abstract class that provides the basic functionality common to all simulation features.
 This is an abstract class, and cannot be instantiated.
 To obtain an instance of this class, refer to the simulation builders.

## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `Name` | `str` | Returns the name of the feature. |
| `Tag` | `str` | Returns the NX tag for this feature. |

## Methods

### Update

```python
Update(self) -> 'None'
```

Updates the feature.



### Delete

```python
Delete(self) -> 'None'
```

Deletes the feature.


