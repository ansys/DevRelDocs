---
uid: class_speos_n_x__2512_1_1_select_face_list
title: SelectFaceList
---

# SelectFaceList Class

**Namespace:** `SpeosNX`

**Inherits from:** `object`



## Description



## Properties

| Name | Type | Description |
|------|------|-------------|
| `thisown` | `object` |  |
| `Array` | `str` | Gets or sets the faces. |
| `Faces` | `str` | Gets the faces that are alive. |

## Methods

### Size

```python
Size(self) -> 'int'
```

Gets the size of the list.

Returns the number of elements in the list.



**Value type**: Integer.

### Empty

```python
Empty(self) -> 'bool'
```

Checks if the list has no face.

Returns True if the list is empty, False otherwise.



**Value type**: Boolean.

### Add

```python
Add(self, tag) -> 'bool'
```

Adds the given face to the list.

Returns True if the given face has been added, False otherwise.



**Value type**: Boolean.

**Parameters:**

- `tag` (tag)

### Remove

```python
Remove(self, tag) -> 'None'
```

Removes the given face from the list.



**Parameters:**

- `tag` (tag)

### Clear

```python
Clear(self) -> 'None'
```

Removes all elements from the list.



### Contains

```python
Contains(self, tag) -> 'bool'
```

Checks if the given value exists in the list.

Returns True if the given face exists in the list, False otherwise.



**Value type**: Boolean.

**Parameters:**

- `tag` (tag)
