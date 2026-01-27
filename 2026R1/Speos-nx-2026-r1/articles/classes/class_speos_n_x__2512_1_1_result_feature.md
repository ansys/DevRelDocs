---
uid: result_feature
title: ResultFeature
---

# ResultFeature

**Full Name**: `SpeosNX_2512::ResultFeature`

**Language**: Python

**Inherits from**: `Feature`

## Description

Represents a Speos result feature.

A base class for all Speos result features.  




This class provides the basic functionality common to all result features.  

 To obtain an instance of this class, refer to `FeatureSimulation::GetResults()`.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 12040*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 12044*

---

## Public Static Attributes

#### `AssociatedLPFResult` : str

`public` `static`

Returns the LPF result feature associated to this XMP result feature.

**Prerequisite**: The result feature must be an XMP result.  

 

**Returns**: The result feature or None.

**Default value**: `=  property(fget=__GetAssociatedLPFResult)`

*Defined in `SpeosNX_2512.py` at line 12066*

---

#### `FilePath` : str

`public` `static`

Gets the result file path.

**value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetFilePath)`

*Defined in `SpeosNX_2512.py` at line 12074*

---

#### `Filename` : str

`public` `static`

Gets the result file name with its extension.

**value type**: String.  




The default value is an empty string.

**Default value**: `=  property(fget=__GetFilename)`

*Defined in `SpeosNX_2512.py` at line 12082*

---

#### `Measures` : str

`public` `static`

Returns the collection of measures belonging to this result.

**Returns**: The collection of measures.

**Default value**: `=  property(fget=__GetMeasures)`

*Defined in `SpeosNX_2512.py` at line 12087*

---

#### `Rules` : str

`public` `static`

Returns the collection of rules belonging to this result.

**Returns**: The collection of rules.

**Default value**: `=  property(fget=__GetRules)`

*Defined in `SpeosNX_2512.py` at line 12092*

---

## Member Summary

| Member | Type |
|--------|------|
| `AssociatedLPFResult` | public |
| `FilePath` | public |
| `Filename` | public |
| `Measures` | public |
| `Rules` | public |
| `thisown` | public |
