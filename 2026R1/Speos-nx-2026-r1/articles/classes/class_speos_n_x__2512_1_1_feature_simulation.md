---
uid: feature_simulation
title: FeatureSimulation
---

# FeatureSimulation

**Full Name**: `SpeosNX_2512::FeatureSimulation`

**Language**: Python

**Inherits from**: `Feature`

## Description

Represents a Speos simulation feature.

A base class for all Speos simulation features.  




This is an abstract class that provides the basic functionality common to all simulation features.  

 This is an abstract class, and cannot be instantiated.  

 To obtain an instance of this class, refer to the simulation builders.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 23649*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 23653*

---

## Public Static Attributes

#### `GPUSimulationMode` : str

`public` `static`

Sets the simulation mode.

True: GPU simulation.  

 False: CPU simulation.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fset=__SetGPUSimulationMode)`

*Defined in `SpeosNX_2512.py` at line 23703*

---

#### `Results` : str

`public` `static`

Gets the result collection.

Returns the `ResultCollection` belonging to this simulation. 

**Returns**: The `ResultCollection`.

**Default value**: `=  property(fget=__GetResults)`

*Defined in `SpeosNX_2512.py` at line 23709*

---

## Public Methods

#### `Isolate(self)`

`public`

Isolates the simulation and its results.

**Prerequisite**: The simulation must be updated.

*Defined in `SpeosNX_2512.py` at line 23659*

---

#### `Export(self, path)`

`public`

Exports the simulation to a specified location.

**Prerequisite**: The simulation must be updated. 

**Parameters**:
- `path`: 
: The output folder.

*Defined in `SpeosNX_2512.py` at line 23667*

---

#### `LinkedExport(self)`

`public`

Exports the simulation to the Speos isolated folder.

Exports the simulation to the folder "./Speos isolated folder/"

*Defined in `SpeosNX_2512.py` at line 23676*

---

#### `RegenerationSpeosHPC(self)`

`public`

Runs the simulation on the Speos HPC cluster.

**Prerequisite**: The Speos HPC cluster must be configured.

*Defined in `SpeosNX_2512.py` at line 23684*

---

## Member Summary

| Member | Type |
|--------|------|
| `Export` | public |
| `GPUSimulationMode` | public |
| `Isolate` | public |
| `LinkedExport` | public |
| `RegenerationSpeosHPC` | public |
| `Results` | public |
| `thisown` | public |
