---
title: "Structure SyscCellData"
---

![][C]
![][public]

**Definition**: `syscMeshDefinition.h` (line 288)

Cell data struct.



## Members

* [cellIds](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscCellData)
* [cellNodeConnectivity](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscCellData)
* [cellTypes](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscCellData)

## Public attributes

<a id="structSyscCellData_1a18489ae2d9c8c4098cf5d2ac229ad98e"></a>
### Variable cellIds

![][public]

**Definition**: `syscMeshDefinition.h` (line 289)

```
SyscElementIdData SyscCellData::cellIds
```



cell ids.



**Type**: [SyscElementIdData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscElementIdData)

<a id="structSyscCellData_1a46f408f73e98f145d1bbf2972d3a68a5"></a>
### Variable cellTypes

![][public]

**Definition**: `syscMeshDefinition.h` (line 290)

```
SyscElementTypeData SyscCellData::cellTypes
```



cell types.



**Type**: [SyscElementTypeData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscElementTypeData)

<a id="structSyscCellData_1a8b84210695305eb77feac6d31f726650"></a>
### Variable cellNodeConnectivity

![][public]

**Definition**: `syscMeshDefinition.h` (line 291)

```
SyscElementNodeConnectivityData SyscCellData::cellNodeConnectivity
```



cell-to-node connectivity.



**Type**: [SyscElementNodeConnectivityData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscElementNodeConnectivityData)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)