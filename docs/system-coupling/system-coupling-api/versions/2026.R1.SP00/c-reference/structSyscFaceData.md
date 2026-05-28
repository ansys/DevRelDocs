---
title: "Structure SyscFaceData"
---

![][C]
![][public]

**Definition**: `syscMeshDefinition.h` (line 239)

Face data struct.



## Members

* [faceCellConnectivity](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscFaceData)
* [faceIds](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscFaceData)
* [faceNodeConnectivity](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscFaceData)
* [faceNodeCounts](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscFaceData)
* [faceTypes](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscFaceData)

## Public attributes

<a id="structSyscFaceData_1ab06db951659e8d349a540904d6831b38"></a>
### Variable faceIds

![][public]

**Definition**: `syscMeshDefinition.h` (line 240)

```
SyscElementIdData SyscFaceData::faceIds
```



face ids.



**Type**: [SyscElementIdData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscElementIdData)

<a id="structSyscFaceData_1ab78be0450a2fade5154ad69875cff375"></a>
### Variable faceTypes

![][public]

**Definition**: `syscMeshDefinition.h` (line 241)

```
SyscElementTypeData SyscFaceData::faceTypes
```



face types.



**Type**: [SyscElementTypeData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscElementTypeData)

<a id="structSyscFaceData_1a1834bd4b6994f302fa8e91f101eadb9f"></a>
### Variable faceNodeCounts

![][public]

**Definition**: `syscMeshDefinition.h` (line 242)

```
SyscElementNodeCountData SyscFaceData::faceNodeCounts
```



face node counts.



**Type**: [SyscElementNodeCountData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscElementNodeCountData)

<a id="structSyscFaceData_1a0ecb329fe163fb5fc7591fcd7531569a"></a>
### Variable faceNodeConnectivity

![][public]

**Definition**: `syscMeshDefinition.h` (line 243)

```
SyscElementNodeConnectivityData SyscFaceData::faceNodeConnectivity
```



face-to-node connectivity.



**Type**: [SyscElementNodeConnectivityData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscElementNodeConnectivityData)

<a id="structSyscFaceData_1a12560838da4a3f554793e027b6c43bc9"></a>
### Variable faceCellConnectivity

![][public]

**Definition**: `syscMeshDefinition.h` (line 244)

```
SyscFaceCellConnectivityData SyscFaceData::faceCellConnectivity
```



face-to-cell connectivity.



**Type**: [SyscFaceCellConnectivityData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscFaceCellConnectivityData)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)