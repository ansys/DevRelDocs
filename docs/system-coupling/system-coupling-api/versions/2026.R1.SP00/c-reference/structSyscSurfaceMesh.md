# Structure SyscSurfaceMesh

![][C]
![][public]

**Definition**: `syscSurfaceMesh.h` (line 31)

Provide a surface mesh access struct.

Provides read-only access to the surface mesh for a given region.

## Members

* [connectivityStamp](structSyscSurfaceMesh.md#structSyscSurfaceMesh_1a3316249d696bd73986f538f76d8caf4b)
* [coordinatesStamp](structSyscSurfaceMesh.md#structSyscSurfaceMesh_1a11d7b54aad0e70cb5a5b7f197d0fbfc0)
* [faces](structSyscSurfaceMesh.md#structSyscSurfaceMesh_1a087162c1bc756237bc7fff5d6edc5a93)
* [nodes](structSyscSurfaceMesh.md#structSyscSurfaceMesh_1afec3edb82f09c5907cf562a5b7561073)
* [partitioningStamp](structSyscSurfaceMesh.md#structSyscSurfaceMesh_1a8f343bec777e3c98c927797e002c4182)
* [side0](structSyscSurfaceMesh.md#structSyscSurfaceMesh_1a6e87f7a6198b1ca86544ea73df6235b5)
* [side1](structSyscSurfaceMesh.md#structSyscSurfaceMesh_1a7b43da70685af52a3ca8444b29b769e8)

## Public attributes

<a id="structSyscSurfaceMesh_1afec3edb82f09c5907cf562a5b7561073"></a>
### Variable nodes

![][public]

**Definition**: `syscSurfaceMesh.h` (line 33)

```
SyscNodeData SyscSurfaceMesh::nodes
```



Mesh nodes.



**Type**: [SyscNodeData](structSyscNodeData.md#structSyscNodeData)

<a id="structSyscSurfaceMesh_1a087162c1bc756237bc7fff5d6edc5a93"></a>
### Variable faces

![][public]

**Definition**: `syscSurfaceMesh.h` (line 36)

```
SyscFaceData SyscSurfaceMesh::faces
```



Mesh faces.



**Type**: [SyscFaceData](structSyscFaceData.md#structSyscFaceData)

<a id="structSyscSurfaceMesh_1a6e87f7a6198b1ca86544ea73df6235b5"></a>
### Variable side0

![][public]

**Definition**: `syscSurfaceMesh.h` (line 39)

```
char SyscSurfaceMesh::side0[SYSC_STRING_LENGTH][SYSC_STRING_LENGTH]
```



Side 0.



**Type**: char

<a id="structSyscSurfaceMesh_1a7b43da70685af52a3ca8444b29b769e8"></a>
### Variable side1

![][public]

**Definition**: `syscSurfaceMesh.h` (line 42)

```
char SyscSurfaceMesh::side1[SYSC_STRING_LENGTH][SYSC_STRING_LENGTH]
```



Side 1.



**Type**: char

<a id="structSyscSurfaceMesh_1a3316249d696bd73986f538f76d8caf4b"></a>
### Variable connectivityStamp

![][public]

**Definition**: `syscSurfaceMesh.h` (line 45)

```
int64_t SyscSurfaceMesh::connectivityStamp
```

Mesh connectivity stamp. Update whenever re-meshing happens.





**Type**: int64_t

<a id="structSyscSurfaceMesh_1a11d7b54aad0e70cb5a5b7f197d0fbfc0"></a>
### Variable coordinatesStamp

![][public]

**Definition**: `syscSurfaceMesh.h` (line 49)

```
int64_t SyscSurfaceMesh::coordinatesStamp
```

Nodal coordinates stamp. Update whenever nodal coordinates get updated.





**Type**: int64_t

<a id="structSyscSurfaceMesh_1a8f343bec777e3c98c927797e002c4182"></a>
### Variable partitioningStamp

![][public]

**Definition**: `syscSurfaceMesh.h` (line 52)

```
int64_t SyscSurfaceMesh::partitioningStamp
```

Partitioning stamp. Update whenever the mesh is re-partitioned.





**Type**: int64_t

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)