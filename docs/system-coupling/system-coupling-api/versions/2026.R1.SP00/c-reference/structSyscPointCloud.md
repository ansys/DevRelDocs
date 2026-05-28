---
title: "Structure SyscPointCloud"
---

![][C]
![][public]

**Definition**: `syscPointCloud.h` (line 41)

Provide a point cloud access struct.

To create and/or initialize [SyscPointCloud](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscPointCloud), it is highly recommended to use one of the functions with names starting with <code>syscGetPointCloud</code>. These functions will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```
SyscPointCloud pointCloud = syscGetPointCloud(nodeIds, nodeCoords);
```

## Members

* [connectivityStamp](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscPointCloud)
* [coordinatesStamp](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscPointCloud)
* [nodeCoords](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscPointCloud)
* [nodeIds](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscPointCloud)
* [partitioningStamp](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscPointCloud)

## Public attributes

<a id="structSyscPointCloud_1ae200d24d8c00514493ced578df4833c6"></a>
### Variable nodeIds

![][public]

**Definition**: `syscPointCloud.h` (line 42)

```
SyscOutputIntegerData SyscPointCloud::nodeIds
```



Access to node ids array.



**Type**: [SyscOutputIntegerData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscOutputIntegerData)

<a id="structSyscPointCloud_1ab4031cb1a5a369dff916411c7f9f88f7"></a>
### Variable nodeCoords

![][public]

**Definition**: `syscPointCloud.h` (line 43)

```
SyscOutputVectorData SyscPointCloud::nodeCoords
```



Access to node coordinates array(s).



**Type**: [SyscOutputVectorData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscOutputVectorData)

<a id="structSyscPointCloud_1aa4379bbf1a298606cf6e1a6c3bf5c186"></a>
### Variable connectivityStamp

![][public]

**Definition**: `syscPointCloud.h` (line 46)

```
int64_t SyscPointCloud::connectivityStamp
```

Mesh connectivity stamp. Update whenever re-meshing happens.





**Type**: int64_t

<a id="structSyscPointCloud_1ae3533d603b8bec31f67aebfe52a1c0dd"></a>
### Variable coordinatesStamp

![][public]

**Definition**: `syscPointCloud.h` (line 50)

```
int64_t SyscPointCloud::coordinatesStamp
```

Nodal coordinates stamp. Update whenever nodal coordinates get updated.





**Type**: int64_t

<a id="structSyscPointCloud_1aca4b9a3dd0f435423692745c200abb16"></a>
### Variable partitioningStamp

![][public]

**Definition**: `syscPointCloud.h` (line 53)

```
int64_t SyscPointCloud::partitioningStamp
```

Partitioning stamp. Update whenever the mesh is re-partitioned.





**Type**: int64_t

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)