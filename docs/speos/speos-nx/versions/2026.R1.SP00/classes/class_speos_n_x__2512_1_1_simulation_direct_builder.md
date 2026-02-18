---
uid: simulation_direct_builder
title: SimulationDirectBuilder
---

# SimulationDirectBuilder

**Full Name**: `SpeosNX_2512::SimulationDirectBuilder`

**Language**: Python

**Inherits from**: `SimulationCommonBuilder`

## Description

Represents an Direct Simulation Builder.

The Direct Simulation Builder is used to create and edit Direct Simulation features.


To create a new instance of this class, use `FeatureCollection::CreateSimulationDirectBuilder`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 22628*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 22632*

---

## Public Static Attributes

#### `Duration` : str

`public` `static`

Gets or sets the duration.

**Prerequisite**: The StopOnDuration property must be True.  




Time necessary to reach for the simulation to end.   




**Value type**: Double (in second).  

 **Range**: The value must be superior to 0.0.  




The default value is 1800.0 s.

**Default value**: `=  property(fget=__GetDuration, fset=__SetDuration)`

*Defined in `SpeosNX_2512.py` at line 22705*

---

#### `FamilySelection` : str

`public` `static`

Gets or sets the family selection list.

**Prerequisite**: The UseFamilyTables property must be True.  




Selects the configurations to run with the simulation.


**Value type**: List of string.  




The default value is an empty list.

**Default value**: `=  property(fget=__GetFamilySelection, fset=__SetFamilySelection)`

*Defined in `SpeosNX_2512.py` at line 22716*

---

#### `MaximumNumberOfPaths` : str

`public` `static`

Gets or sets the maximum number of paths.

**Prerequisite**: The EnableLightExpert property must be True.  




The Maximum paths corresponds to the maximum number of rays the Light Path Finder file (*.lpf or *.lp3) can contain.  




**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 100,000.

**Default value**: `=  property(fget=__GetMaximumNumberOfPaths, fset=__SetMaximumNumberOfPaths)`

*Defined in `SpeosNX_2512.py` at line 22728*

---

#### `RayFileFormat` : str

`public` `static`

Gets or sets the ray file format.

**Prerequisite**: The EnableRayFile property must be True.  




Type of ray file that the simulation creates at the end.  




The values are:  

 0 - Speos without Polarization.  

 1 - Speos with Polarization.  

 2 - IES TM-25 without Polarization.  

 3 - IES TM-25 with Polarization.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetRayFileFormat, fset=__SetRayFileFormat)`

*Defined in `SpeosNX_2512.py` at line 22745*

---

#### `RayNumberMultiplier` : str

`public` `static`

Gets or sets the ray number multiplier.

**Prerequisite**: The StopOnRaysNumber property must be True.  




The values are:  

 0 - Rays.  

 1 - Kilo-Rays.  

 2 - Mega-Rays.  

 3 - Giga-Rays.


**Value type**: Integer.  




The default value is 1.

**Default value**: `=  property(fget=__GetRayNumberMultiplier, fset=__SetRayNumberMultiplier)`

*Defined in `SpeosNX_2512.py` at line 22760*

---

#### `RaysNumber` : str

`public` `static`

Gets or sets the number of rays.

**Prerequisite**: The StopOnRaysNumber property must be True.  




Number of rays necessary to reach for the simulation to end.  




**Value type**: Integer.  

 **Range**: The value must be superior to 0.  




The default value is 200.

**Default value**: `=  property(fget=__GetRaysNumber, fset=__SetRaysNumber)`

*Defined in `SpeosNX_2512.py` at line 22772*

---

#### `StopOnDuration` : str

`public` `static`

Gets or sets the property to stop on duration.

True: Enables stop on Duration property  

 False: Disables stop on Duration property  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetStopOnDuration, fset=__SetStopOnDuration)`

*Defined in `SpeosNX_2512.py` at line 22782*

---

#### `StopOnRaysNumber` : str

`public` `static`

Gets or sets the property to enable stop on rays number.

True: Enables stop on RaysNumber property.  

 False: Disables stop on RaysNumber property.  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetStopOnRaysNumber, fset=__SetStopOnRaysNumber)`

*Defined in `SpeosNX_2512.py` at line 22792*

---

#### `UsePartFamilies` : str

`public` `static`

Gets or sets the property to use family tables.

True: Enables multi-configuration to run in the simulation.  

 False: Disables multi-configuration to run in the simulation.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetUsePartFamilies, fset=__SetUsePartFamilies)`

*Defined in `SpeosNX_2512.py` at line 22802*

---

#### `UseRayFile` : str

`public` `static`

Gets or sets the property to enable ray file.

True: Enables Ray file.  

 False: Disables Ray file.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetUseRayFile, fset=__SetUseRayFile)`

*Defined in `SpeosNX_2512.py` at line 22812*

---

## Member Summary

| Member | Type |
|--------|------|
| `Duration` | public |
| `FamilySelection` | public |
| `MaximumNumberOfPaths` | public |
| `RayFileFormat` | public |
| `RayNumberMultiplier` | public |
| `RaysNumber` | public |
| `StopOnDuration` | public |
| `StopOnRaysNumber` | public |
| `UsePartFamilies` | public |
| `UseRayFile` | public |
| `thisown` | public |
