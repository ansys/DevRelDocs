---
uid: select_face_list
title: SelectFaceList
---

# SelectFaceList

**Full Name**: `SpeosNX_2512::SelectFaceList`

**Language**: Python

**Inherits from**: `object`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 10294*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 10298*

---

## Public Static Attributes

#### `Array` : str

`public` `static`

Gets or sets the faces.

The Array property takes a list of tags and returns a list of tags.


**Value type**: Integer.  




The default value is an empty list.

**Default value**: `=  property(fget=__GetArray, fset=__SetArray)`

*Defined in `SpeosNX_2512.py` at line 10366*

---

#### `Faces` : str

`public` `static`

Gets the faces that are alive.

Returns a list of tags.


**Value type**: Integer.  




The default value is an empty list.

**Default value**: `=  property(fget=__GetFaces)`

*Defined in `SpeosNX_2512.py` at line 10376*

---

## Public Methods

#### `Size(self)`

`public`

Gets the size of the list.

Returns the number of elements in the list.  




**Value type**: Integer.

*Defined in `SpeosNX_2512.py` at line 10301*

---

#### `Empty(self)`

`public`

Checks if the list has no face.

Returns True if the list is empty, False otherwise.  




**Value type**: Boolean.

*Defined in `SpeosNX_2512.py` at line 10311*

---

#### `Add(self, tag)`

`public`

Adds the given face to the list.

Returns True if the given face has been added, False otherwise.  




**Value type**: Boolean.

*Defined in `SpeosNX_2512.py` at line 10321*

---

#### `Remove(self, tag)`

`public`

Removes the given face from the list.

*Defined in `SpeosNX_2512.py` at line 10331*

---

#### `Clear(self)`

`public`

Removes all elements from the list.

*Defined in `SpeosNX_2512.py` at line 10344*

---

#### `Contains(self, tag)`

`public`

Checks if the given value exists in the list.

Returns True if the given face exists in the list, False otherwise.  




**Value type**: Boolean.

*Defined in `SpeosNX_2512.py` at line 10348*

---

## Member Summary

| Member | Type |
|--------|------|
| `Add` | public |
| `Array` | public |
| `Clear` | public |
| `Contains` | public |
| `Empty` | public |
| `Faces` | public |
| `Remove` | public |
| `Size` | public |
| `thisown` | public |
