---
uid: copy_paste_builder
title: CopyPasteBuilder
---

# CopyPasteBuilder

**Full Name**: `SpeosNX_2512::CopyPasteBuilder`

**Language**: Python

**Inherits from**: `Builder`

## Description

Represents a Copy/Paste Builder.

The Copy/Paste Builder creates a copy of the given feature for each commit.   




To create a new instance of this class, use `FeatureCollection::CreateCopyPasteBuilder`.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 11696*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 11700*

---

## Public Static Attributes

#### `Feature` : str

`public` `static`

Returns the copy of the feature.

If the builder has not yet been commited, returns Null. 

**Returns**: Returns the copy of the feature, or Null.

**Default value**: `=  property(fget=__GetFeature)`

*Defined in `SpeosNX_2512.py` at line 11710*

---

## Member Summary

| Member | Type |
|--------|------|
| `Feature` | public |
| `thisown` | public |
