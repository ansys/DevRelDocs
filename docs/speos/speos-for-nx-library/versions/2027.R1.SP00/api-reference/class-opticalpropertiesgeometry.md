# OpticalPropertiesGeometry

## Description

Represents interface for editing optical properties geometries.

## Member Summary

| Member | Type | Description |
| --- | --- | --- |
| [Add](#add) | public | Adds a geometry. |
| [Remove](#remove) | public | Removes a geometry. |
| [Clear](#clear) | public | Clear all geometries. |
| [RevertGeometry](#revertgeometry) | public | Reverts a geometry. |
| [Direction](#direction) | public | Sets a direction for a certain geometry. |
| [GeometryList](#geometrylist) | public | Gets or sets the geometries. |

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

`int Direction`

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
