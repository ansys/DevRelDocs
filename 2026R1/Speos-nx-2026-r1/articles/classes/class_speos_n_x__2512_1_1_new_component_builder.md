# NewComponentBuilder

**Full Name**: `SpeosNX_2512::NewComponentBuilder`

**Language**: Python

**Inherits from**: `Builder`

## Description

Represents a builder to create new assembly components.

This builder creates new assembly components.   




To create a new instance of this class, use Part.CreateNewComponentBuilder.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 11908*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 11912*

---

## Public Static Attributes

#### `Name` : str

`public` `static`

Gets or sets the name of the new component to create.

**Value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetName, fset=__SetName)`

*Defined in `SpeosNX_2512.py` at line 11935*

---

#### `NewComponent` : str

`public` `static`

Returns the created component tag.

**Value type**: Component tag.  




The default value is 0.

**Default value**: `=  property(fget=__GetNewComponent)`

*Defined in `SpeosNX_2512.py` at line 11943*

---

#### `ReferenceSetName` : str

`public` `static`

Gets or sets the name of the NX reference set to use.

**Value type**: String.  




The default value is "Entire Part" Reference Set.

**Default value**: `=  property(fget=__GetReferenceSetName, fset=__SetReferenceSetName)`

*Defined in `SpeosNX_2512.py` at line 11950*

---

## Member Summary

| Member | Type |
|--------|------|
| `Name` | public |
| `NewComponent` | public |
| `ReferenceSetName` | public |
| `thisown` | public |
