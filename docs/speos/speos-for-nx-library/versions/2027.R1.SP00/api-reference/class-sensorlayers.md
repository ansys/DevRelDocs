# SensorLayers

## Description

Data Model for Sensor Filter  
  
/

## Member Summary

| Member | Type |
| --- | --- |
| [Type](#type) | public |
| [SurfaceContributionType](#surfacecontributiontype) | public |
| [ContributionSurfaces](#contributionsurfaces) | public |
| [MaximumSequences](#maximumsequences) | public |
| [SequencePerType](#sequencepertype) | public |
| [SortSequencePerType](#sortsequencepertype) | public |
| [GroupNames](#groupnames) | public |
| [Groups](#groups) | public |
| [AddNewGroup](#addnewgroup) | public |
| [FindGroup](#findgroup) | public |
| [FindGroupFromName](#findgroupfromname) | public |
| [RemoveGroup](#removegroup) | public |
| [RemoveGroupFromName](#removegroupfromname) | public |

## Public Static Attributes

### Type

`int Type`

Gets or sets the type of layer.

The values are:  
0 - None. Get the simulation's results in one layer.  
1 - Data Separated by Source.  
2 - Data Separated by Face.  
3 - Data Separated by Sequence.  
4 - Data Separated by Group of Faces.  
**Value type**: Integer.  
  
The default value is 0.

---

### SurfaceContributionType

`int SurfaceContributionType`

Gets or sets the surface contribution type.

The values are:  
0 - Last Impact.  
1 - Intersected One Time.  
**Value type**: Integer.  
  
The default value is 0.

---

### ContributionSurfaces

`SelectFaceList ContributionSurfaces`

Returns the contribution surfaces object.

**Prerequisite**: The Type property must be 2 - Data Separated by Face.  
**Value type**: CSelectFaceList object.

---

### MaximumSequences

`int MaximumSequences`

Gets or sets the maximum number of sequences.

**Prerequisite**: The Type property must be 3.  
**Value type**: Integer.  
  
The default value is 10.

---

### SequencePerType

`int SequencePerType`

Gets or sets the sequence per type.

**Prerequisite**: The Type property must be 3.  
  
The values are:  
0 - Faces.  
1 - Volumes.  
**Value type**: Integer.  
  
The default value is 0.

---

### SortSequencePerType

`int SortSequencePerType`

Gets or sets the property to sort the sequences per type.

**Prerequisite**: The Type property must be 3.  
  
The values are:  
0 - RelativeEnergy.  
1 - PeakValue.  
**Value type**: Integer.  
  
The default value is 0.

---

### GroupNames

`list[str] GroupNames`

Returns the group names.

**Prerequisite**: The Type property must be 4.

---

### Groups

`list[SensorLayersGroup] Groups`

Returns the groups.

**Prerequisite**: The Type property must be 4.

## Public Member Functions

### AddNewGroup

`SensorLayersGroup AddNewGroup(self)`

Creates a new group.

**Prerequisite**: The Type property must be 4.

---

### FindGroup

`SensorLayersGroup FindGroup(self, index)`

Returns the targeted group.

**Prerequisite**: The Type property must be 4.

**Parameters**:

- `int index`: Index of the group.

---

### FindGroupFromName

`SensorLayersGroup FindGroupFromName(self, name)`

Returns the targeted group.

**Prerequisite**: The Type property must be 4.

**Parameters**:

- `str name`: Name of the group.

---

### RemoveGroup

`void RemoveGroup(self, index)`

Removes the targeted group.

**Prerequisite**: The Type property must be 4.

**Parameters**:

- `int index`: Index of the group.

---

### RemoveGroupFromName

`void RemoveGroupFromName(self, name)`

Removes the targeted group.

**Prerequisite**: The Type property must be 4.

**Parameters**:

- `str name`: Name of the group.
