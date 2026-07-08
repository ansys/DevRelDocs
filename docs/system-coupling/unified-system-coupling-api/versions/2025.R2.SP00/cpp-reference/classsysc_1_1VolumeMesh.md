# Class sysc::VolumeMesh

![][C++]
![][public]

**Definition**: `VolumeMesh.hpp` (line 26)

Provide a volume mesh access class.

Provides read-only access to the volume mesh for a given region.

## Members

* [checkMeshValidity](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1aca7d146a22e72f8eca520ef69ea6858a)
* [checkValidity](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1a3bee2a4c68f47e4887323d31ce691b02)
* [connectivityStamp](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1adbab9e5317965d98b0e6b02c6ccce7b5)
* [coordinatesStamp](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1a6415bcc1a32f7374c51d4894d68e338e)
* [getCell0Ids](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1a417e50bee9c019e45cbedd39fd5bc6cb)
* [getCell1Ids](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1a1591d15487420143b463ef86835f1874)
* [getCellData](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1a5ccc339cd9160a32097e4a60277aa26d)
* [getCellIds](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1a798c79c54b8425b7e8b3060016547ea7)
* [getCellNodeConnectivity](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1a3bb98664fc0827d3ea1317ca034f493c)
* [getCellTypes](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1a159cf62afda4022acfbd2f5cbccfca7c)
* [getFaceData](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1a3b1a9c301f2fdbb47e84dc51873a9c82)
* [getFaceNodeCounts](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1a66ec70482e4fd44bc9edaa910e0abaf2)
* [getFaceNodeIds](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1a3a7635141a02711f1dcdacf848c157ab)
* [getFaceTypes](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1a7cd6df532799ff7878c5a3b30cf0ffe5)
* [getNodeCoords](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1a4307321266d855dd7ba48023e0b23f4e)
* [getNodeData](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1abb3afc8a600888ee5af947d4ce1f934a)
* [getNodeIds](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1a15835b560adaabcc1c73da43d7d25f3e)
* [getNumCells](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1a941931c2e13bc9b40a19637d1d7d3dcd)
* [getNumNodes](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1ab30f9a87cf0cc2c5d12f6ddf05e99fca)
* [m\_cells](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1a190c941c8bc341447d5c3c3fe1485b97)
* [m\_faces](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1abb3922ea549c83ecbc14b822c620a852)
* [m\_nodes](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1a50c484d16edd9b6fe72a044fd039da16)
* [operator=](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1a08f8d75fe5321ae67f0cf4c1c67625df)
* [operator=](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1ad0a9dfaf02ac0d677f7d993148272d69)
* [partitioningStamp](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1a9cf06f19acd1b0c3d0003f56ba7df89a)
* [VolumeMesh](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1ab01007a2dcb32f1a91b0ca7a26c94afb)
* [VolumeMesh](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1abb0f3e38d18bdfe8128e71da0dcf235f)
* [VolumeMesh](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1a714cfafbfb04be14720a195cc7590470)
* [VolumeMesh](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1ab3261c84e62bdcf25d92b69cbefb1cba)
* [VolumeMesh](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1af2f6fc62a27f5d69af987a82a8154e45)
* [VolumeMesh](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1ad901c126ab7372df0928446c7a5bede7)
* [VolumeMesh](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1ac048cda48c16766a7e04688d62203a70)
* [VolumeMesh](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1a2dfff826766714e9e95227bbc64336a3)

## Public attributes

<a id="classsysc_1_1VolumeMesh_1adbab9e5317965d98b0e6b02c6ccce7b5"></a>
### Variable connectivityStamp

![][public]

**Definition**: `VolumeMesh.hpp` (line 29)

```cpp
std::int64_t sysc::VolumeMesh::connectivityStamp {0}
```

Mesh connectivity stamp. Update whenever re-meshing happens.





**Type**: std::int64_t

<a id="classsysc_1_1VolumeMesh_1a6415bcc1a32f7374c51d4894d68e338e"></a>
### Variable coordinatesStamp

![][public]

**Definition**: `VolumeMesh.hpp` (line 32)

```cpp
std::int64_t sysc::VolumeMesh::coordinatesStamp {0}
```

Nodal coordinates stamp. Update whenever nodal coordinates get updated.





**Type**: std::int64_t

<a id="classsysc_1_1VolumeMesh_1a9cf06f19acd1b0c3d0003f56ba7df89a"></a>
### Variable partitioningStamp

![][public]

**Definition**: `VolumeMesh.hpp` (line 35)

```cpp
std::int64_t sysc::VolumeMesh::partitioningStamp {0}
```

Partitioning stamp. Update whenever the mesh is re-partitioned.





**Type**: std::int64_t

## Private attributes

<a id="classsysc_1_1VolumeMesh_1a50c484d16edd9b6fe72a044fd039da16"></a>
### Variable m\_nodes

![][private]

**Definition**: `VolumeMesh.hpp` (line 142)

```cpp
NodeData sysc::VolumeMesh::m_nodes
```







**Type**: [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData)

<a id="classsysc_1_1VolumeMesh_1abb3922ea549c83ecbc14b822c620a852"></a>
### Variable m\_faces

![][private]

**Definition**: `VolumeMesh.hpp` (line 143)

```cpp
FaceData sysc::VolumeMesh::m_faces
```







**Type**: [FaceData](structsysc_1_1FaceData.md#structsysc_1_1FaceData)

<a id="classsysc_1_1VolumeMesh_1a190c941c8bc341447d5c3c3fe1485b97"></a>
### Variable m\_cells

![][private]

**Definition**: `VolumeMesh.hpp` (line 144)

```cpp
CellData sysc::VolumeMesh::m_cells
```







**Type**: [CellData](structsysc_1_1CellData.md#structsysc_1_1CellData)

## Public functions

<a id="classsysc_1_1VolumeMesh_1ab01007a2dcb32f1a91b0ca7a26c94afb"></a>
### Function VolumeMesh

![][public]

```cpp
sysc::VolumeMesh::VolumeMesh(NodeData nodeData, CellData cellData)
```

Provide a constructor for element-based volume mesh.





**Parameters**:

* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData) **nodeData**
* [CellData](structsysc_1_1CellData.md#structsysc_1_1CellData) **cellData**

**Return type**: 

<a id="classsysc_1_1VolumeMesh_1abb0f3e38d18bdfe8128e71da0dcf235f"></a>
### Function VolumeMesh

![][public]

```cpp
sysc::VolumeMesh::VolumeMesh(NodeData nodeData, FaceData faceData, CellData cellData)
```

Provide a constructor for face-based volume mesh.





**Parameters**:

* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData) **nodeData**
* [FaceData](structsysc_1_1FaceData.md#structsysc_1_1FaceData) **faceData**
* [CellData](structsysc_1_1CellData.md#structsysc_1_1CellData) **cellData**

**Return type**: 

<a id="classsysc_1_1VolumeMesh_1a714cfafbfb04be14720a195cc7590470"></a>
### Function VolumeMesh

![][public]

```cpp
sysc::VolumeMesh::VolumeMesh()=default
```

Provide a default constructor.





**Return type**: 

<a id="classsysc_1_1VolumeMesh_1ab3261c84e62bdcf25d92b69cbefb1cba"></a>
### Function VolumeMesh

![][public]

```cpp
sysc::VolumeMesh::VolumeMesh(const VolumeMesh &)=default
```

Provide a copy-constructor.





**Parameters**:

* const [VolumeMesh](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh) &

**Return type**: 

<a id="classsysc_1_1VolumeMesh_1af2f6fc62a27f5d69af987a82a8154e45"></a>
### Function VolumeMesh

![][public]

```cpp
sysc::VolumeMesh::VolumeMesh(VolumeMesh &&)=default
```

Provide a move-constructor.





**Parameters**:

* [VolumeMesh](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh) &&

**Return type**: 

<a id="classsysc_1_1VolumeMesh_1a08f8d75fe5321ae67f0cf4c1c67625df"></a>
### Function operator=

![][public]

```cpp
VolumeMesh& sysc::VolumeMesh::operator=(const VolumeMesh &)=default
```

Provide a copy-assign operator.





**Parameters**:

* const [VolumeMesh](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh) &

**Return type**: [VolumeMesh](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh) &

<a id="classsysc_1_1VolumeMesh_1ad0a9dfaf02ac0d677f7d993148272d69"></a>
### Function operator=

![][public]

```cpp
VolumeMesh& sysc::VolumeMesh::operator=(VolumeMesh &&)=default
```

Provide a move-assign operator.





**Parameters**:

* [VolumeMesh](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh) &&

**Return type**: [VolumeMesh](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh) &

<a id="classsysc_1_1VolumeMesh_1abb3afc8a600888ee5af947d4ce1f934a"></a>
### Function getNodeData

![][public]
![][const]

```cpp
const NodeData& sysc::VolumeMesh::getNodeData() const noexcept
```

Get node data.





**Return type**: const [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData) &

<a id="classsysc_1_1VolumeMesh_1a3b1a9c301f2fdbb47e84dc51873a9c82"></a>
### Function getFaceData

![][public]
![][const]

```cpp
const FaceData& sysc::VolumeMesh::getFaceData() const noexcept
```

Get face data.





**Return type**: const [FaceData](structsysc_1_1FaceData.md#structsysc_1_1FaceData) &

<a id="classsysc_1_1VolumeMesh_1a5ccc339cd9160a32097e4a60277aa26d"></a>
### Function getCellData

![][public]
![][const]

```cpp
const CellData& sysc::VolumeMesh::getCellData() const noexcept
```

Get cell data.





**Return type**: const [CellData](structsysc_1_1CellData.md#structsysc_1_1CellData) &

<a id="classsysc_1_1VolumeMesh_1a3bee2a4c68f47e4887323d31ce691b02"></a>
### Function checkValidity

![][public]
![][const]

```cpp
ValidityStatus sysc::VolumeMesh::checkValidity() const
```

Provide a method to perform simple mesh validity checks.





**Return type**: [ValidityStatus](structsysc_1_1ValidityStatus.md#structsysc_1_1ValidityStatus)

<a id="classsysc_1_1VolumeMesh_1ad901c126ab7372df0928446c7a5bede7"></a>
### Function VolumeMesh

![][public]

```cpp
sysc::VolumeMesh::VolumeMesh(NodeData nodeData, ElementTypeData faceTypeData, ElementNodeCountData faceNodeCountData, ElementNodeConnectivityData faceNodeConnectivityData, FaceCellConnectivityData faceCellConnectivityData, CellIdData cellIdData, ElementTypeData cellTypeData, ElementNodeConnectivityData cellNodeConnectivityData)
```

For internal use only.





**Parameters**:

* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData) **nodeData**
* [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData) **faceTypeData**
* [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData) **faceNodeCountData**
* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData) **faceNodeConnectivityData**
* [FaceCellConnectivityData](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData) **faceCellConnectivityData**
* [CellIdData](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData) **cellIdData**
* [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData) **cellTypeData**
* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData) **cellNodeConnectivityData**

**Return type**: 

<a id="classsysc_1_1VolumeMesh_1ab30f9a87cf0cc2c5d12f6ddf05e99fca"></a>
### Function getNumNodes

![][public]
![][const]

```cpp
std::size_t sysc::VolumeMesh::getNumNodes() const noexcept
```

Provide a method to get the number of nodes for this mesh.





**Return type**: std::size_t

<a id="classsysc_1_1VolumeMesh_1a941931c2e13bc9b40a19637d1d7d3dcd"></a>
### Function getNumCells

![][public]
![][const]

```cpp
std::size_t sysc::VolumeMesh::getNumCells() const noexcept
```

Get the number of cells.





**Return type**: std::size_t

<a id="classsysc_1_1VolumeMesh_1a15835b560adaabcc1c73da43d7d25f3e"></a>
### Function getNodeIds

![][public]
![][const]

```cpp
OutputIntegerData sysc::VolumeMesh::getNodeIds() const noexcept
```

Provide a method to access node ids array.





**Return type**: [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData)

<a id="classsysc_1_1VolumeMesh_1a4307321266d855dd7ba48023e0b23f4e"></a>
### Function getNodeCoords

![][public]
![][const]

```cpp
OutputVectorData sysc::VolumeMesh::getNodeCoords() const noexcept
```

Provide a method to access node coordinates array.





**Return type**: [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData)

<a id="classsysc_1_1VolumeMesh_1a7cd6df532799ff7878c5a3b30cf0ffe5"></a>
### Function getFaceTypes

![][public]
![][const]

```cpp
ElementTypeData sysc::VolumeMesh::getFaceTypes() const noexcept
```

Get face types.





**Return type**: [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData)

<a id="classsysc_1_1VolumeMesh_1a66ec70482e4fd44bc9edaa910e0abaf2"></a>
### Function getFaceNodeCounts

![][public]
![][const]

```cpp
OutputIntegerData sysc::VolumeMesh::getFaceNodeCounts() const noexcept
```

Provide a method to access face node counts array.





**Return type**: [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData)

<a id="classsysc_1_1VolumeMesh_1a3a7635141a02711f1dcdacf848c157ab"></a>
### Function getFaceNodeIds

![][public]
![][const]

```cpp
OutputIntegerData sysc::VolumeMesh::getFaceNodeIds() const noexcept
```

Provide a method to access face node ids array.





**Return type**: [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData)

<a id="classsysc_1_1VolumeMesh_1a417e50bee9c019e45cbedd39fd5bc6cb"></a>
### Function getCell0Ids

![][public]
![][const]

```cpp
OutputIntegerData sysc::VolumeMesh::getCell0Ids() const noexcept
```

Provide a method to access cell 0 ids array.





**Return type**: [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData)

<a id="classsysc_1_1VolumeMesh_1a1591d15487420143b463ef86835f1874"></a>
### Function getCell1Ids

![][public]
![][const]

```cpp
OutputIntegerData sysc::VolumeMesh::getCell1Ids() const noexcept
```

Provide a method to access cell 1 ids array.





**Return type**: [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData)

<a id="classsysc_1_1VolumeMesh_1a798c79c54b8425b7e8b3060016547ea7"></a>
### Function getCellIds

![][public]
![][const]

```cpp
CellIdData sysc::VolumeMesh::getCellIds() const noexcept
```

Provide a method to access cell ids array.





**Return type**: [CellIdData](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData)

<a id="classsysc_1_1VolumeMesh_1a159cf62afda4022acfbd2f5cbccfca7c"></a>
### Function getCellTypes

![][public]
![][const]

```cpp
ElementTypeData sysc::VolumeMesh::getCellTypes() const noexcept
```

Provide a method to access cell types data.





**Return type**: [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData)

<a id="classsysc_1_1VolumeMesh_1a3bb98664fc0827d3ea1317ca034f493c"></a>
### Function getCellNodeConnectivity

![][public]
![][const]

```cpp
ElementNodeConnectivityData sysc::VolumeMesh::getCellNodeConnectivity() const noexcept
```

Access cell-to-node connectivity data.





**Return type**: [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData)

<a id="classsysc_1_1VolumeMesh_1ac048cda48c16766a7e04688d62203a70"></a>
### Function VolumeMesh

![][public]

```cpp
sysc::VolumeMesh::VolumeMesh(NodeData nodeData, ElementTypeData cellTypes, ElementNodeConnectivityData cellNodeIds)
```

Provide a constructor for element-based volume mesh.





**Parameters**:

* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData) **nodeData**
* [ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData) **cellTypes**
* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData) **cellNodeIds**

**Return type**: 

<a id="classsysc_1_1VolumeMesh_1a2dfff826766714e9e95227bbc64336a3"></a>
### Function VolumeMesh

![][public]

```cpp
sysc::VolumeMesh::VolumeMesh(NodeData nodeData, ElementNodeCountData faceNodeCounts, ElementNodeConnectivityData faceNodeIds, FaceCellConnectivityData faceToCellConnectivity, CellIdData cellIds)
```

Provide a constructor for face-based volume mesh.





**Parameters**:

* [NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData) **nodeData**
* [ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData) **faceNodeCounts**
* [ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData) **faceNodeIds**
* [FaceCellConnectivityData](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData) **faceToCellConnectivity**
* [CellIdData](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData) **cellIds**

**Return type**: 

<a id="classsysc_1_1VolumeMesh_1aca7d146a22e72f8eca520ef69ea6858a"></a>
### Function checkMeshValidity

![][public]
![][const]

```cpp
MeshValidityStatus sysc::VolumeMesh::checkMeshValidity() const
```

This function is deprecated. Use [checkValidity()](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh_1a3bee2a4c68f47e4887323d31ce691b02) instead.





**Return type**: [MeshValidityStatus](structsysc_1_1MeshValidityStatus.md#structsysc_1_1MeshValidityStatus)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)