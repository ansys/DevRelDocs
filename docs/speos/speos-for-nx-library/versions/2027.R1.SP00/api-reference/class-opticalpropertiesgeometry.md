# OpticalPropertiesGeometry

## Description

Represents interface for editing optical properties geometries.

## Member Summary

| Member | Type |
| --- | --- |
| [Add](#add) | public |
| [Remove](#remove) | public |
| [Clear](#clear) | public |
| [RevertGeometry](#revertgeometry) | public |
| [Direction](#direction) | public |
| [GeometryList](#geometrylist) | public |

## Public Member Functions

### Add

`void Add(self, tag)`

Adds a geometry.

The Add function takes a geometry tag.

**Parameters**:

- `int tag`: The tag of the geometry.

---

### Remove

`void Remove(self, tag)`

Removes a geometry.

The Remove function takes a geometry tag.

**Parameters**:

- `int tag`: The tag of the geometry.

---

### Clear

`void Clear(self)`

Clear all geometries.

---

### RevertGeometry

`void RevertGeometry(self, tag)`

Reverts a geometry.

The RevertFace function takes a feature tag.

**Parameters**:

- `int tag`: The tag of the geometry.

## Public Static Attributes

### Direction

`Value Direction`

Sets a direction for a certain geometry.

The SetDirection function takes a feature tag as the first parameter.  
The function changes the direction of a geometry.  
  
The reverse direction depends of the value parameter:  
0 - Does not reverse the direction.  
1 - Reverses the direction.

---

### GeometryList

`list[int] GeometryList`

Gets or sets the geometries.

The GeometryList property takes and returns a list of feature tag.  
**Value type**: List of integer.  
  
The default value is an empty list.
