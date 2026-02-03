---
uid: session
title: Session
---

# Session

**Full Name**: `SpeosNX_2512::Session`

**Language**: Python

**Inherits from**: `object`

## Description

Represents the Speos For NX session.

To obtain an instance of this class, refer to `Session::GetSession()`.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 21777*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 21781*

---

## Public Static Attributes

#### `NXSessionTag` : str

`public` `static`

Gets the NX Session Tag.

Returns the Tag for the NX Session. 

**Returns**: The Tag as an integer.

**Default value**: `=  property(fget=__GetNXSessionTag)`

*Defined in `SpeosNX_2512.py` at line 21821*

---

#### `Parts` : str

`public` `static`

Gets the part collection.

Returns the `PartCollection` belonging to this session. 

**Returns**: The `PartCollection`.

**Default value**: `=  property(fget=__GetParts)`

*Defined in `SpeosNX_2512.py` at line 21827*

---

## Public Static Methods

#### `GetSession()`

`public` `static`

Gets the unique instance of the Speos For NX session.

Returns the singleton for `Session`. 

**Returns**: The Speos For NX session.

*Defined in `SpeosNX_2512.py` at line 21785*

---

## Public Methods

#### `Preferences(self)`

`public`

Gets the session Speos Preferences.

Returns the `Preferences` belonging to this session. 

**Returns**: The `Preferences`.

*Defined in `SpeosNX_2512.py` at line 21808*

---

## Member Summary

| Member | Type |
|--------|------|
| `GetSession` | public |
| `NXSessionTag` | public |
| `Parts` | public |
| `Preferences` | public |
| `thisown` | public |
