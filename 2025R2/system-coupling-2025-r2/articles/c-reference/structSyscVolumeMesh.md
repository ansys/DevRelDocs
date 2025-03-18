# Structure SyscVolumeMesh

![][C]
![][public]

**Definition**: `syscVolumeMesh.h` (line 42)

Provide a volume mesh access struct.

To create and/or initialize [SyscVolumeMesh](structSyscVolumeMesh.md#structSyscVolumeMesh), it is highly recommended to use one of the functions with names starting with <code>syscGetVolumeMesh</code>. These functions will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```
SyscVolumeMesh mesh = syscGetFaceBasedVolumeMesh(
    nodeCoords, elemNodeCounts, elemNodeIds);
```

## Members

* [cells](structSyscVolumeMesh.md#structSyscVolumeMesh_1a13e403f46c840923ccfcf3d8003927fc)
* [connectivityStamp](structSyscVolumeMesh.md#structSyscVolumeMesh_1ac79a8a4e024bf5df6495b20d8cd533fc)
* [coordinatesStamp](structSyscVolumeMesh.md#structSyscVolumeMesh_1a4c9b66b024653d14861a7b0c3bbc5c3c)
* [faces](structSyscVolumeMesh.md#structSyscVolumeMesh_1a20300f5632818f7755cb5e68915a5fc5)
* [nodes](structSyscVolumeMesh.md#structSyscVolumeMesh_1a3b96b3e7b16a3dc292d5645fde68bc6b)
* [partitioningStamp](structSyscVolumeMesh.md#structSyscVolumeMesh_1afffad005aa559eb275891f7ce643b6a4)

## Public attributes

<a id="structSyscVolumeMesh_1a3b96b3e7b16a3dc292d5645fde68bc6b"></a>
### Variable nodes

![][public]

**Definition**: `syscVolumeMesh.h` (line 44)

```
SyscNodeData SyscVolumeMesh::nodes
```

Mesh nodes.





**Type**: [SyscNodeData](structSyscNodeData.md#structSyscNodeData)

<a id="structSyscVolumeMesh_1a20300f5632818f7755cb5e68915a5fc5"></a>
### Variable faces

![][public]

**Definition**: `syscVolumeMesh.h` (line 47)

```
SyscFaceData SyscVolumeMesh::faces
```

Mesh faces.





**Type**: [SyscFaceData](structSyscFaceData.md#structSyscFaceData)

<a id="structSyscVolumeMesh_1a13e403f46c840923ccfcf3d8003927fc"></a>
### Variable cells

![][public]

**Definition**: `syscVolumeMesh.h` (line 50)

```
SyscCellData SyscVolumeMesh::cells
```

Mesh cells.





**Type**: [SyscCellData](structSyscCellData.md#structSyscCellData)

<a id="structSyscVolumeMesh_1ac79a8a4e024bf5df6495b20d8cd533fc"></a>
### Variable connectivityStamp

![][public]

**Definition**: `syscVolumeMesh.h` (line 53)

```
int64_t SyscVolumeMesh::connectivityStamp
```

Mesh connectivity stamp. Update whenever re-meshing happens.





**Type**: int64_t

<a id="structSyscVolumeMesh_1a4c9b66b024653d14861a7b0c3bbc5c3c"></a>
### Variable coordinatesStamp

![][public]

**Definition**: `syscVolumeMesh.h` (line 57)

```
int64_t SyscVolumeMesh::coordinatesStamp
```

Nodal coordinates stamp. Update whenever nodal coordinates get updated.





**Type**: int64_t

<a id="structSyscVolumeMesh_1afffad005aa559eb275891f7ce643b6a4"></a>
### Variable partitioningStamp

![][public]

**Definition**: `syscVolumeMesh.h` (line 60)

```
int64_t SyscVolumeMesh::partitioningStamp
```

Partitioning stamp. Update whenever the mesh is re-partitioned.





**Type**: int64_t

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)