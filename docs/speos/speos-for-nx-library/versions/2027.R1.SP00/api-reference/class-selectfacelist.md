# SelectFaceList

## Member Summary

| Member | Type | Description |
| --- | --- | --- |
| [Size](#size) | public | Gets the size of the list. |
| [Empty](#empty) | public | Checks if the list has no face. |
| [Add](#add) | public | Adds the given face to the list. |
| [Remove](#remove) | public | Removes the given face from the list. |
| [Clear](#clear) | public | Removes all elements from the list. |
| [Contains](#contains) | public | Checks if the given value exists in the list. |
| [Array](#array) | public | Gets or sets the faces. |
| [Faces](#faces) | public | Gets the faces that are alive. |

## Public Member Functions

### Size

`int Size(self)`

Gets the size of the list.

Returns the number of elements in the list.  
  
**Value type**: Integer.

---

### Empty

`bool Empty(self)`

Checks if the list has no face.

Returns True if the list is empty, False otherwise.  
  
**Value type**: Boolean.

---

### Add

`bool Add(self, tag)`

Adds the given face to the list.

Returns True if the given face has been added, False otherwise.  
  
**Value type**: Boolean.

**Parameters**:

- `int tag`

---

### Remove

`void Remove(self, tag)`

Removes the given face from the list.

**Parameters**:

- `int tag`

---

### Clear

`void Clear(self)`

Removes all elements from the list.

---

### Contains

`bool Contains(self, tag)`

Checks if the given value exists in the list.

Returns True if the given face exists in the list, False otherwise.  
  
**Value type**: Boolean.

**Parameters**:

- `int tag`

## Public Static Attributes

### Array

`list[int] Array`

Gets or sets the faces.

The Array property takes a list of tags and returns a list of tags.  
  
**Value type**: Integer.  
  
The default value is an empty list.

---

### Faces

`list[int] Faces`

Gets the faces that are alive.

Returns a list of tags.  
  
**Value type**: Integer.  
  
The default value is an empty list.
