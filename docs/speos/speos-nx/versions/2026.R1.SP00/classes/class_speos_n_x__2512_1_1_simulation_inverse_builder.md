---
uid: simulation_inverse_builder
title: SimulationInverseBuilder
---

# SimulationInverseBuilder

**Full Name**: `SpeosNX_2512::SimulationInverseBuilder`

**Language**: Python

**Inherits from**: `SimulationCommonBuilder`

## Description

Represents an Inverse Simulation Builder.

The Inverse Simulation Builder is used to create and edit Inverse Simulation features.


To create a new instance of this class, use `FeatureCollection::CreateSimulationInverseBuilder`

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 22857*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 22861*

---

## Public Static Attributes

#### `Duration` : str

`public` `static`

toto

toto 

**Returns**: toto

**Default value**: `=  property(fget=__GetDuration, fset=__SetDuration)`

*Defined in `SpeosNX_2512.py` at line 22932*

---

#### `FamilySelection` : str

`public` `static`

Gets or sets the family selection list.

**Prerequisite**: The UseFamilyTables property must be True.  




Selects the configurations to run with the simulation.


**Value type**: List of string.  




The default value is an empty list.

**Default value**: `=  property(fget=__GetFamilySelection, fset=__SetFamilySelection)`

*Defined in `SpeosNX_2512.py` at line 22943*

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

*Defined in `SpeosNX_2512.py` at line 22955*

---

#### `PassNumber` : str

`public` `static`

Gets or sets the pass number.

**Prerequisite**: The StopOnPassNumber property must be True.  




**Value type**: Integer.  

 **Range**: the value must be superior to 0.


The default value is 5.

**Default value**: `=  property(fget=__GetPassNumber, fset=__SetPassNumber)`

*Defined in `SpeosNX_2512.py` at line 22965*

---

#### `SourcesFacesFilteringReferences` : str

`public` `static`

Gets the sources faces filtering.

The SourcesFacesFilteringRef property returns a list of feature tag.  




**Value type**: List of integer.

**Default value**: `=  property(fget=__GetSourcesFacesFilteringReferences)`

*Defined in `SpeosNX_2512.py` at line 22972*

---

#### `StopOnDuration` : str

`public` `static`

Gets or sets the duration.

**Prerequisite**: The StopOnDuration property must be True.  




Time necessary to reach for the simulation to end.   




**Value type**: Double (in second).  

 **Range**: The value must be superior to 0.0.  




The default value is 1800.0 s.

**Default value**: `=  property(fget=__GetStopOnDuration, fset=__SetStopOnDuration)`

*Defined in `SpeosNX_2512.py` at line 22984*

---

#### `StopOnPassNumber` : str

`public` `static`

Gets or sets the property to enable stop on pass number.

True: Enables stop on PassNumber property  

 False: Disables stop on PassNumber property  




**Value type**: Boolean.  




The default value is True.

**Default value**: `=  property(fget=__GetStopOnPassNumber, fset=__SetStopOnPassNumber)`

*Defined in `SpeosNX_2512.py` at line 22994*

---

#### `UsePartFamilies` : str

`public` `static`

Gets or sets the property to use family tables.

True: Enables multi-configuration to run in the simulation.  

 False: Disables multi-configuration to run in the simulation.  




**Value type**: Boolean.  




The default value is False.

**Default value**: `=  property(fget=__GetUsePartFamilies, fset=__SetUsePartFamilies)`

*Defined in `SpeosNX_2512.py` at line 23004*

---

## Public Methods

#### `AddSourceFaceFilteringReferences(self, tags)`

`public`

Adds sources faces filtering into the simulation.

The AddSourceFaceFilteringRefs function takes a list of feature tag as parameter. 

**Parameters**:
- `tags`: 
: List of integer. 





**Returns**: void.

*Defined in `SpeosNX_2512.py` at line 22867*

---

#### `DeleteSourceFaceFilteringReferences(self, tags)`

`public`

Deletes sources faces filtering from the simulation.

The DeleteSourceFaceFilteringRefs function takes a list of feature tag as parameter. 

**Parameters**:
- `tags`: 
: List of integer. 





**Returns**: void.

*Defined in `SpeosNX_2512.py` at line 22877*

---

## Member Summary

| Member | Type |
|--------|------|
| `AddSourceFaceFilteringReferences` | public |
| `DeleteSourceFaceFilteringReferences` | public |
| `Duration` | public |
| `FamilySelection` | public |
| `MaximumNumberOfPaths` | public |
| `PassNumber` | public |
| `SourcesFacesFilteringReferences` | public |
| `StopOnDuration` | public |
| `StopOnPassNumber` | public |
| `UsePartFamilies` | public |
| `thisown` | public |
