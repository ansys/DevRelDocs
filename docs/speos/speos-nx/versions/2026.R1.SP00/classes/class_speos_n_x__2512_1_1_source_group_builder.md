---
uid: source_group_builder
title: SourceGroupBuilder
---

# SourceGroupBuilder

**Full Name**: `SpeosNX_2512::SourceGroupBuilder`

**Language**: Python

**Inherits from**: `FeatureBuilder`

## Description

Represents a Source Group Builder.

The Source Group Builder is used to group several sources in the same group.


To create a new instance of this class, use `FeatureCollection::CreateSourceGroupBuilder`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 19659*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 19663*

---

## Public Static Attributes

#### `Sources` : str

`public` `static`

Gets source features.

Gets the current source features that are in the simulation.  




**Value type**: List of Feature object.

**Default value**: `=  property(fget=__GetSources)`

*Defined in `SpeosNX_2512.py` at line 19689*

---

## Public Methods

#### `AddSources(self, vSources)`

`public`

Adds sources into the simulation.

**Parameters**:
- `sources`: 
: List of Feature object 





**Returns**: void.

*Defined in `SpeosNX_2512.py` at line 19668*

---

#### `RemoveSources(self, vSources)`

`public`

Deletes sources from the simulation.

**Parameters**:
- `sources`: 
: List of Feature object 





**Returns**: void.

*Defined in `SpeosNX_2512.py` at line 19676*

---

## Member Summary

| Member | Type |
|--------|------|
| `AddSources` | public |
| `RemoveSources` | public |
| `Sources` | public |
| `thisown` | public |
