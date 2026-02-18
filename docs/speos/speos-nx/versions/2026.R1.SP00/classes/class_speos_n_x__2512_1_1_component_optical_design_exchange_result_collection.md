---
uid: component_optical_design_exchange_result_collection
title: ComponentOpticalDesignExchangeResultCollection
---

# ComponentOpticalDesignExchangeResultCollection

**Full Name**: `SpeosNX_2512::ComponentOpticalDesignExchangeResultCollection`

**Language**: Python

**Inherits from**: `object`

## Description

Represents the collection of results belonging to an Optical Design Exchange feature.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 21640*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 21644*

---

## Public Methods

#### `FindFromName(self, name)`

`public`

Finds the result feature from its name.

**Parameters**:
- `name`: 
: String. 





**Returns**: The result feature.

*Defined in `SpeosNX_2512.py` at line 21647*

---

#### `CreateResultBuilder(self, featureToEdit)`

`public`

Creates a builder for an Optical Design Exchange Result.

**Parameters**:
- `featureToEdit`: 
the feature to be edited. 





**Returns**: CODXResuiltBuilder object.

*Defined in `SpeosNX_2512.py` at line 21655*

---

## Member Summary

| Member | Type |
|--------|------|
| `CreateResultBuilder` | public |
| `FindFromName` | public |
| `thisown` | public |
