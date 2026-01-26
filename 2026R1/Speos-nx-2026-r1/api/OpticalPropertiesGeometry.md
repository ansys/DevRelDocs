---
uid: class_speos_n_x__2512_1_1_optical_properties_geometry
title: OpticalPropertiesGeometry
---

# OpticalPropertiesGeometry Class

**Namespace:** `SpeosNX`

**Inherits from:** `object`

Represents interface for editing optical properties geometries.

## Description

This interface is used to edit geometries on which the optical properties are applied.


To create a new instance of this class, use `COpticalPropertiesBuilder::GetOpticalPropertiesGeometry`

## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `Direction` | `str` | Sets a direction for a certain geometry. |
| `GeometryList` | `str` | Gets or sets the geometries. |

## Methods

### Add

```python
Add(self, tag) -> 'None'
```

Adds a geometry.

The Add function takes a geometry tag. 
**Parameters:**
- `tag`: Integer.

**Parameters:**

- `tag` (tag)

### Remove

```python
Remove(self, tag) -> 'None'
```

Removes a feature.

The Remove function takes a geometry tag. 
**Parameters:**
- `tag`: Integer.

**Parameters:**

- `tag` (tag)

### Clear

```python
Clear(self) -> 'None'
```

Clear all geometries.



### RevertGeometry

```python
RevertGeometry(self, tag) -> 'None'
```

Reverts a geometry.

The RevertFace function takes a feature tag. 
**Parameters:**
- `tag`: : Integer.

**Parameters:**

- `tag` (tag)
