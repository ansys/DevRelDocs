# Structure SyscNodeData

![][C]
![][public]

**Definition**: `syscMeshDefinition.h` (line 41)

Node data access struct, provides read-only access to the mesh nodes.

To create and/or initialize [SyscNodeData](structSyscNodeData.md#structSyscNodeData), it is highly recommended to use one of the functions with names starting with <code>syscGetNodeData</code>. These functions will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```
SyscNodeData nodeData = syscGetNodeDataC(nodeCoords);
```

## Members

* [nodeCoords](structSyscNodeData.md#structSyscNodeData_1a4da0b55605c39346dd83b830ab7eb54e)
* [nodeIds](structSyscNodeData.md#structSyscNodeData_1a227ac3d62c2c7224c7844028b014d6c8)

## Public attributes

<a id="structSyscNodeData_1a227ac3d62c2c7224c7844028b014d6c8"></a>
### Variable nodeIds

![][public]

**Definition**: `syscMeshDefinition.h` (line 42)

```
SyscOutputIntegerData SyscNodeData::nodeIds
```



Node ids array access.



**Type**: [SyscOutputIntegerData](structSyscOutputIntegerData.md#structSyscOutputIntegerData)

<a id="structSyscNodeData_1a4da0b55605c39346dd83b830ab7eb54e"></a>
### Variable nodeCoords

![][public]

**Definition**: `syscMeshDefinition.h` (line 43)

```
SyscOutputVectorData SyscNodeData::nodeCoords
```



Node coordinates array access.



**Type**: [SyscOutputVectorData](structSyscOutputVectorData.md#structSyscOutputVectorData)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)