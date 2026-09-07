# SensorLightFieldSelections

## Description

Builder for emissive faces of a surface source.  
/

## Member Summary

| Member | Type | Description |
| --- | --- | --- |
| [Add](#add) | public | Adds a face. |
| [Remove](#remove) | public | Removes a face. |
| [Clear](#clear) | public | Clear all faces. |
| [RevertFace](#revertface) | public | Reverts a face. |
| [Direction](#direction) | public | Sets a direction for a certain face. |
| [Faces](#faces) | public | Gets or sets the faces. |

## Public Member Functions

### Add

`void Add(self, tag)`

Adds a face.

The Add function takes a feature tag.

**Parameters**:

- `int tag`: The feature tag.

---

### Remove

`void Remove(self, tag)`

Removes a face.

The Remove function takes a feature tag.

**Parameters**:

- `int tag`: The feature tag.

---

### Clear

`void Clear(self)`

Clear all faces.

---

### RevertFace

`void RevertFace(self, tag)`

Reverts a face.

The RevertFace function takes a feature tag.

**Parameters**:

- `int tag`: The feature tag.

## Public Static Attributes

### Direction

`int Direction`

Sets a direction for a certain face.

The SetDirection function takes a feature tag as the first parameter.  
The function changes the direction of a face.  
  
The reverse direction depends of the value parameter:  
0 - Does not reverse the direction.  
1 - Reverses the direction.

---

### Faces

`list[int] Faces`

Gets or sets the faces.

The Faces property takes a list of feature tag and returns a list of feature tag.  
  
**Value type**: List of integer.  
  
The default value is an empty list.
