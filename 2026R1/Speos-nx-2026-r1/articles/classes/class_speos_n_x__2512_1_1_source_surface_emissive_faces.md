# SourceSurfaceEmissiveFaces

**Full Name**: `SpeosNX_2512::SourceSurfaceEmissiveFaces`

**Language**: Python

**Inherits from**: `object`

## Description

Builder for emissive faces of a surface source.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 9585*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 9589*

---

## Public Static Attributes

#### `Direction` : str

`public` `static`

Sets a direction for a certain face.

The SetDirection function takes a feature tag as the first parameter.  

 The function changes the direction of a face.  




The reverse direction depends of the value parameter:  

 0 - Does not reverse the direction.  

 1 - Reverses the direction. 

**Parameters**:
- `tag`: 
: Integer. 



- `value`: 
: Integer. 





**Returns**: Void.

**Default value**: `=  property(fset=__SetDirection)`

*Defined in `SpeosNX_2512.py` at line 9649*

---

#### `Faces` : str

`public` `static`

Gets or sets the faces.

The Faces property takes a list of feature tag and returns a list of feature tag.  




**Value type**: List of integer.


The default value is an empty list.

**Default value**: `=  property(fget=__GetFaces, fset=__SetFaces)`

*Defined in `SpeosNX_2512.py` at line 9658*

---

## Public Methods

#### `Add(self, tag)`

`public`

Adds a face.

The Add function takes a feature tag. 

**Parameters**:
- `tag`: 
Integer. 





**Returns**: Void.

*Defined in `SpeosNX_2512.py` at line 9592*

---

#### `Remove(self, tag)`

`public`

Removes a face.

The Remove function takes a feature tag. 

**Parameters**:
- `tag`: 
Integer. 





**Returns**: Void.

*Defined in `SpeosNX_2512.py` at line 9602*

---

#### `Clear(self)`

`public`

Clear all faces.

**Returns**: Void.

*Defined in `SpeosNX_2512.py` at line 9612*

---

#### `RevertFace(self, tag)`

`public`

Reverts a face.

The RevertFace function takes a feature tag. 

**Parameters**:
- `tag`: 
: Integer. 





**Returns**: Void.

*Defined in `SpeosNX_2512.py` at line 9622*

---

## Member Summary

| Member | Type |
|--------|------|
| `Add` | public |
| `Clear` | public |
| `Direction` | public |
| `Faces` | public |
| `Remove` | public |
| `RevertFace` | public |
| `thisown` | public |
