---
uid: optical_properties_geometry
title: OpticalPropertiesGeometry
---

# OpticalPropertiesGeometry

**Full Name**: `SpeosNX_2512::OpticalPropertiesGeometry`

**Language**: Python

**Inherits from**: `object`

## Description

Represents interface for editing optical properties geometries.

This interface is used to edit geometries on which the optical properties are applied.


To create a new instance of this class, use `COpticalPropertiesBuilder::GetOpticalPropertiesGeometry`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 9434*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 9438*

---

## Public Static Attributes

#### `Direction` : str

`public` `static`

Sets a direction for a certain geometry.

The SetDirection function takes a feature tag as the first parameter.  

 The function changes the direction of a geometry.  




The reverse direction depends of the value parameter:  

 0 - Does not reverse the direction.  

 1 - Reverses the direction. 

**Parameters**:
- `tag`: 
: Integer. 



- `value`: 
: Integer.

**Default value**: `=  property(fset=__SetDirection)`

*Defined in `SpeosNX_2512.py` at line 9491*

---

#### `GeometryList` : str

`public` `static`

Gets or sets the geometries.

The GeometryList property takes and returns a list of feature tag.  




**Value type**: List of integer.


The default value is an empty list.

**Default value**: `=  property(fget=__GetGeometryList, fset=__SetGeometryList)`

*Defined in `SpeosNX_2512.py` at line 9500*

---

## Public Methods

#### `Add(self, tag)`

`public`

Adds a geometry.

The Add function takes a geometry tag. 

**Parameters**:
- `tag`: 
Integer.

*Defined in `SpeosNX_2512.py` at line 9441*

---

#### `Remove(self, tag)`

`public`

Removes a feature.

The Remove function takes a geometry tag. 

**Parameters**:
- `tag`: 
Integer.

*Defined in `SpeosNX_2512.py` at line 9450*

---

#### `Clear(self)`

`public`

Clear all geometries.

*Defined in `SpeosNX_2512.py` at line 9459*

---

#### `RevertGeometry(self, tag)`

`public`

Reverts a geometry.

The RevertFace function takes a feature tag. 

**Parameters**:
- `tag`: 
: Integer.

*Defined in `SpeosNX_2512.py` at line 9466*

---

## Member Summary

| Member | Type |
|--------|------|
| `Add` | public |
| `Clear` | public |
| `Direction` | public |
| `GeometryList` | public |
| `Remove` | public |
| `RevertGeometry` | public |
| `thisown` | public |
