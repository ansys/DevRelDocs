# Feature

**Full Name**: `SpeosNX_2512::Feature`

**Language**: Python

**Inherits from**: `object`

**Derived classes**: `ComponentOpticalDesignExchangeFeature`, `ComponentOpticalDesignExchangeResultFeature`, `FeatureSimulation`, `MeasureFeature`, `ResultFeature`, `RuleFeature`

## Description

Represents a Speos feature.

A base class for all Speos features.  




This is an abstract class that provides the basic functionality common to all simulation features.  

 This is an abstract class, and cannot be instantiated.  

 To obtain an instance of this class, refer to the simulation builders.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 11655*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 11659*

---

## Public Static Attributes

#### `Name` : str

`public` `static`

Returns the name of the feature.

**Value type**: String.

**Default value**: `=  property(fget=__GetName)`

*Defined in `SpeosNX_2512.py` at line 11679*

---

#### `Tag` : str

`public` `static`

Returns the NX tag for this feature.

**Value type**: Integer.

**Default value**: `=  property(fget=__GetTag)`

*Defined in `SpeosNX_2512.py` at line 11684*

---

## Public Methods

#### `Update(self)`

`public`

Updates the feature.

*Defined in `SpeosNX_2512.py` at line 11662*

---

#### `Delete(self)`

`public`

Deletes the feature.

*Defined in `SpeosNX_2512.py` at line 11672*

---

## Member Summary

| Member | Type |
|--------|------|
| `Delete` | public |
| `Name` | public |
| `Tag` | public |
| `Update` | public |
| `thisown` | public |
