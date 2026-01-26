---
uid: class_speos_n_x__2512_1_1_source_surface_emissive_faces
title: SourceSurfaceEmissiveFaces
---

# SourceSurfaceEmissiveFaces Class

**Namespace:** `SpeosNX`

**Inherits from:** `object`

Builder for emissive faces of a surface source.

## Description



## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `Direction` | `str` | Sets a direction for a certain face. |
| `Faces` | `str` | Gets or sets the faces. |

## Methods

### Add

```python
Add(self, tag) -> 'None'
```

Adds a face.

The Add function takes a feature tag. 
**Parameters:**
- `tag`: Integer.


**Returns:** Void.

**Parameters:**

- `tag` (tag)

### Remove

```python
Remove(self, tag) -> 'None'
```

Removes a face.

The Remove function takes a feature tag. 
**Parameters:**
- `tag`: Integer.


**Returns:** Void.

**Parameters:**

- `tag` (tag)

### Clear

```python
Clear(self) -> 'None'
```

Clear all faces.

**Returns:** Void.

### RevertFace

```python
RevertFace(self, tag) -> 'None'
```

Reverts a face.

The RevertFace function takes a feature tag. 
**Parameters:**
- `tag`: : Integer.


**Returns:** Void.

**Parameters:**

- `tag` (tag)
