---
uid: sensor_filter
title: SensorFilter
---

# SensorFilter

**Full Name**: `SpeosNX_2512::SensorFilter`

**Language**: Python

**Inherits from**: `object`

## Description

Data Model for Sensor Filter.

## Properties

#### `thisown`

`public` `static`

*Defined in `SpeosNX_2512.py` at line 10392*

---

## Private Static Attributes

#### `__repr__`

`private` `static`

*Defined in `SpeosNX_2512.py` at line 10396*

---

## Public Static Attributes

#### `ContributionSurfaces` : str

`public` `static`

Returns the contribution surfaces object.

Prerequisite: The Type property must be 2 - Data Separated by Face.  




**Value type**: The ContributionSurfaces object.

**Default value**: `=  property(fget=__GetContributionSurfaces)`

*Defined in `SpeosNX_2512.py` at line 10468*

---

#### `GroupNames` : str

`public` `static`

Returns the group names.

Prerequisite: The Type property must be 4.

**Default value**: `=  property(fget=__GetGroupNames)`

*Defined in `SpeosNX_2512.py` at line 10473*

---

#### `Groups` : str

`public` `static`

Returns the groups.

Prerequisite: The Type property must be 4.

**Default value**: `=  property(fget=__GetGroups)`

*Defined in `SpeosNX_2512.py` at line 10478*

---

#### `LayerType` : str

`public` `static`

Gets or sets the type of filter.

The values are:  

 0 - None. Get the simulation's results in one layer.  

 1 - Data Separated by Source.   

 2 - Data Separated by Face.   

 3 - Data Separated by Sequence.  

 4 - Data Separated by Group of Faces.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetLayerType, fset=__SetLayerType)`

*Defined in `SpeosNX_2512.py` at line 10492*

---

#### `MaximumSequences` : str

`public` `static`

Gets or sets the maximum number of sequences.

Prerequisite: The Type property must be 3.  




**Value type**: Integer.  




The default value is 10.

**Default value**: `=  property(fget=__GetMaximumSequences, fset=__SetMaximumSequences)`

*Defined in `SpeosNX_2512.py` at line 10501*

---

#### `SequencePerType` : str

`public` `static`

Gets or sets the sequence per type.

Prerequisite: The Type property must be 3.  




The values are:  

 0 - Faces.  

 1 - Volumes.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetSequencePerType, fset=__SetSequencePerType)`

*Defined in `SpeosNX_2512.py` at line 10514*

---

#### `SortSequencePerType` : str

`public` `static`

Gets or sets the property to sort the sequences per type.

Prerequisite: The Type property must be 3.  




The values are:  

 0 - RelativeEnergy.  

 1 - PeakValue.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetSortSequencePerType, fset=__SetSortSequencePerType)`

*Defined in `SpeosNX_2512.py` at line 10527*

---

#### `SurfaceContributionType` : str

`public` `static`

Gets or sets the surface contribution type.

The values are:  

 0 - Last Impact.  

 1 - Intersected One Time.  




**Value type**: Integer.  




The default value is 0.

**Default value**: `=  property(fget=__GetSurfaceContributionType, fset=__SetSurfaceContributionType)`

*Defined in `SpeosNX_2512.py` at line 10538*

---

## Public Methods

#### `AddNewGroup(self)`

`public`

Creates a new group.

Prerequisite: The Type property must be 4.

*Defined in `SpeosNX_2512.py` at line 10431*

---

#### `FindGroup(self, *args)`

`public`

Returns the targeted group.

Prerequisite: The Type property must be 4.  

 

**Parameters**:
- `index`: 
: The index of the group.

*Defined in `SpeosNX_2512.py` at line 10439*

---

#### `RemoveGroup(self, *args)`

`public`

Removes the targeted group.

Prerequisite: The Type property must be 4.  

 

**Parameters**:
- `index`: 
: The index of the group.

*Defined in `SpeosNX_2512.py` at line 10448*

---

## Member Summary

| Member | Type |
|--------|------|
| `AddNewGroup` | public |
| `ContributionSurfaces` | public |
| `FindGroup` | public |
| `GroupNames` | public |
| `Groups` | public |
| `LayerType` | public |
| `MaximumSequences` | public |
| `RemoveGroup` | public |
| `SequencePerType` | public |
| `SortSequencePerType` | public |
| `SurfaceContributionType` | public |
| `thisown` | public |
