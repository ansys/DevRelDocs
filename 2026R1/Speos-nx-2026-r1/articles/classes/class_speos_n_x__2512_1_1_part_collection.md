# PartCollection

**Full Name**: `SpeosNX_2512::PartCollection`

**Language**: Python

**Inherits from**: `object`

## Description

Represents the collection of all parts in a Speos For NX session.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 21687*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 21691*

---

## Public Static Attributes

#### `Display` : str

`public` `static`

Returns the currently active display part of the session.

**Returns**: The currently active display part.

**Default value**: `=  property(fget=__GetDisplay)`

*Defined in `SpeosNX_2512.py` at line 21724*

---

#### `Work` : str

`public` `static`

Returns the current work part of the session.

**Returns**: The current work part.

**Default value**: `=  property(fget=__GetWork)`

*Defined in `SpeosNX_2512.py` at line 21728*

---

## Public Methods

#### `Load(self)`

`public`

Loads all open parts in the session.

*Defined in `SpeosNX_2512.py` at line 21694*

---

#### `FindFromName(self, name)`

`public`

Finds the part with the given name.

**Prerequisite**: The part must have been loaded in this session. 

**Parameters**:
- `name`: 
: String. 





**Returns**: The part with the given name.

*Defined in `SpeosNX_2512.py` at line 21698*

---

#### `FindFromTag(self, tag)`

`public`

Finds the part with the given Tag.

**Parameters**:
- `tag`: 
: Integer. The Part Tag. 





**Returns**: The part with the given Tag.

*Defined in `SpeosNX_2512.py` at line 21708*

---

## Member Summary

| Member | Type |
|--------|------|
| `Display` | public |
| `FindFromName` | public |
| `FindFromTag` | public |
| `Load` | public |
| `Work` | public |
| `thisown` | public |
