---
title: "Structure SyscFaceCellConnectivityData"
---

![][C]
![][public]

**Definition**: `syscMeshDefinition.h` (line 191)

Describes face-to-cell connectivity.



## Members

* [cell0Ids](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscFaceCellConnectivityData)
* [cell1Ids](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscFaceCellConnectivityData)

## Public attributes

<a id="structSyscFaceCellConnectivityData_1a33553e003b9aa6c8d85a4e1aa4f28367"></a>
### Variable cell0Ids

![][public]

**Definition**: `syscMeshDefinition.h` (line 192)

```
SyscOutputIntegerData SyscFaceCellConnectivityData::cell0Ids
```



cell ids on side 0.



**Type**: [SyscOutputIntegerData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscOutputIntegerData)

<a id="structSyscFaceCellConnectivityData_1af531282e2ae53cea1989f7ff6bb5eb82"></a>
### Variable cell1Ids

![][public]

**Definition**: `syscMeshDefinition.h` (line 193)

```
SyscOutputIntegerData SyscFaceCellConnectivityData::cell1Ids
```



cell ids on side 1.



**Type**: [SyscOutputIntegerData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscOutputIntegerData)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)