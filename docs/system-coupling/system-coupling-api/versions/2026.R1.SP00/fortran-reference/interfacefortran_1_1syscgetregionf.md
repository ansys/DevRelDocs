---
title: "Interface fortran::syscgetregionf"
---

![][Fortran]
![][public]

**Definition**: `syscRegionF.fi` (line 44)

Provide an interface to get a System Coupling region.



## Members

* [syscgetregionf](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/interfacefortran_1_1syscgetregionf)
* [syscgetregionf\_dt](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/interfacefortran_1_1syscgetregionf)
* [syscgetregionf\_t](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/interfacefortran_1_1syscgetregionf)
* [syscgetregionf\_tm](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/interfacefortran_1_1syscgetregionf)

## Public functions

<a id="interfacefortran_1_1syscgetregionf_1a54b1b07b43df89ae124a82bf7b2984b0"></a>
### Function syscgetregionf

![][public]

```fortran
type(syscregionf) function syscgetregionf(regionName)
```

Create region to be used in a coupled analysis.

**Parameters**:

* **regionName**: - Unique name for this region. String length should not exceed <code>SyscStrLen</code>.

Display name will default to the same as name.





Topology will default to surface.






**Returns**:

a <code>SyscRegionF</code> type



**Parameters**:

* regionNameregionName

**Return type**: type([syscregionf](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/structfortran_1_1syscregionf)) function

<a id="interfacefortran_1_1syscgetregionf_1a6ddf1e36616695a0bb954425a1b30896"></a>
### Function syscgetregionf\_t

![][public]

```fortran
type(syscregionf) function syscgetregionf_t(regionName, topology)
```

Create region to be used in a coupled analysis.

**Parameters**:

* **regionName**: - Unique name for this region. String length should not exceed SyscStrLen.
* **topology**: - region topology.

Display name will default to the same as name.






**Returns**:

a <code>SyscRegionF</code> type



**Parameters**:

* regionNameregionName
* topologytopology

**Return type**: type([syscregionf](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/structfortran_1_1syscregionf)) function

<a id="interfacefortran_1_1syscgetregionf_1a5195a09454601955d703e0359b40731a"></a>
### Function syscgetregionf\_dt

![][public]

```fortran
type(syscregionf) function syscgetregionf_dt(regionName, displayName, topology)
```

Create region to be used in a coupled analysis.

**Parameters**:

* **regionName**: - Unique name for this region. String length should not exceed SyscStrLen.
* **displayName**: - region display name. String length should not exceed SyscStrLen.
* **topology**: - region topology.


**Returns**:

a <code>SyscRegionF</code> type



**Parameters**:

* regionNameregionName
* displayNamedisplayName
* topologytopology

**Return type**: type([syscregionf](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/structfortran_1_1syscregionf)) function

<a id="interfacefortran_1_1syscgetregionf_1a314e7f693be1c5c4d7833bfd467de815"></a>
### Function syscgetregionf\_tm

![][public]

```fortran
type(syscregionf) function syscgetregionf_tm(regionName, topology, discretization)
```

Create a region.

**Parameters**:

* **regionName**: - Unique name for this region. String length should not exceed SyscStrLen.
* **topology**: - region topology.
* **discretization**: - region discretization type.


**Returns**:

a <code>SyscRegionF</code> type



**Parameters**:

* regionNameregionName
* topologytopology
* discretizationdiscretization

**Return type**: type([syscregionf](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/structfortran_1_1syscregionf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)