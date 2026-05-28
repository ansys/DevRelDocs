---
title: "Class sysc::SurfaceMesh"
---

![][C++]
![][public]

**Definition**: `SurfaceMesh.hpp` (line 27)

Provide a surface mesh access class.

Provides read-only access to the surface mesh for a given region.

## Members

* [checkMeshValidity](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [checkValidity](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [connectivityStamp](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [coordinatesStamp](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [getElemNodeCounts](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [getElemNodeIds](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [getElemTypes](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [getFaceCellConnectivity](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [getFaceData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [getNodeCoords](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [getNodeData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [getNodeIds](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [getNumElems](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [getNumNodes](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [getSide0](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [getSide1](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [hasSide0](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [hasSide1](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [m\_faces](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [m\_nodes](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [m\_side0](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [m\_side1](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [operator=](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [operator=](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [partitioningStamp](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [setSide0](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [setSide1](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [SurfaceMesh](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [SurfaceMesh](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [SurfaceMesh](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [SurfaceMesh](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [SurfaceMesh](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [SurfaceMesh](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [SurfaceMesh](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [SurfaceMesh](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [SurfaceMesh](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)
* [SurfaceMesh](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh)

## Public attributes

<a id="classsysc_1_1SurfaceMesh_1aa0399097b006a460acab8136f5b546c8"></a>
### Variable connectivityStamp

![][public]

**Definition**: `SurfaceMesh.hpp` (line 30)

```cpp
std::int64_t sysc::SurfaceMesh::connectivityStamp {0}
```

Mesh connectivity stamp. Update whenever re-meshing happens.





**Type**: std::int64_t

<a id="classsysc_1_1SurfaceMesh_1a26e8d40282423e06168eb558359e6b4f"></a>
### Variable coordinatesStamp

![][public]

**Definition**: `SurfaceMesh.hpp` (line 33)

```cpp
std::int64_t sysc::SurfaceMesh::coordinatesStamp {0}
```

Nodal coordinates stamp. Update whenever nodal coordinates get updated.





**Type**: std::int64_t

<a id="classsysc_1_1SurfaceMesh_1a5a697ca4a8e2276ddd7fcb5a63cae622"></a>
### Variable partitioningStamp

![][public]

**Definition**: `SurfaceMesh.hpp` (line 36)

```cpp
std::int64_t sysc::SurfaceMesh::partitioningStamp {0}
```

Partitioning stamp. Update whenever the mesh is re-partitioned.





**Type**: std::int64_t

## Private attributes

<a id="classsysc_1_1SurfaceMesh_1aeef98ea436468d69989f567507548d6b"></a>
### Variable m\_nodes

![][private]

**Definition**: `SurfaceMesh.hpp` (line 170)

```cpp
NodeData sysc::SurfaceMesh::m_nodes
```







**Type**: [NodeData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1NodeData)

<a id="classsysc_1_1SurfaceMesh_1a811ae19b877ab68db5e6cb228c2cc659"></a>
### Variable m\_faces

![][private]

**Definition**: `SurfaceMesh.hpp` (line 171)

```cpp
FaceData sysc::SurfaceMesh::m_faces
```







**Type**: [FaceData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1FaceData)

<a id="classsysc_1_1SurfaceMesh_1ab113f26dc7a544320cb76274cfa73f5f"></a>
### Variable m\_side0

![][private]

**Definition**: `SurfaceMesh.hpp` (line 173)

```cpp
RegionName sysc::SurfaceMesh::m_side0
```







**Type**: [RegionName](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/namespacesysc)

<a id="classsysc_1_1SurfaceMesh_1a0fe5c42bd6fee3c690f18b97c32a1ee8"></a>
### Variable m\_side1

![][private]

**Definition**: `SurfaceMesh.hpp` (line 174)

```cpp
RegionName sysc::SurfaceMesh::m_side1
```







**Type**: [RegionName](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/namespacesysc)

## Public functions

<a id="classsysc_1_1SurfaceMesh_1ae8dbea460cf8d1076a09229dc8b84c8c"></a>
### Function SurfaceMesh

![][public]

```cpp
sysc::SurfaceMesh::SurfaceMesh(NodeData nodes, FaceData faces)
```

Constructor.





**Parameters**:

* [NodeData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1NodeData) **nodes**
* [FaceData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1FaceData) **faces**

**Return type**: 

<a id="classsysc_1_1SurfaceMesh_1a7345e4cf4c0242275e9d2b2e31d565be"></a>
### Function SurfaceMesh

![][public]

```cpp
sysc::SurfaceMesh::SurfaceMesh()=default
```







**Return type**: 

<a id="classsysc_1_1SurfaceMesh_1ac8acf16ad4e8f6c4788bf81a284af87d"></a>
### Function SurfaceMesh

![][public]

```cpp
sysc::SurfaceMesh::SurfaceMesh(const SurfaceMesh &)=default
```

Provide a copy-constructor.





**Parameters**:

* const [SurfaceMesh](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh) &

**Return type**: 

<a id="classsysc_1_1SurfaceMesh_1a6ce8618c7363d5c62ad8df814d37e484"></a>
### Function SurfaceMesh

![][public]

```cpp
sysc::SurfaceMesh::SurfaceMesh(SurfaceMesh &&)=default
```

Provide a move-constructor.





**Parameters**:

* [SurfaceMesh](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh) &&

**Return type**: 

<a id="classsysc_1_1SurfaceMesh_1ac277c153888885714a6f70a41261f102"></a>
### Function operator=

![][public]

```cpp
SurfaceMesh& sysc::SurfaceMesh::operator=(const SurfaceMesh &)=default
```

Provide a copy-assign operator.





**Parameters**:

* const [SurfaceMesh](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh) &

**Return type**: [SurfaceMesh](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh) &

<a id="classsysc_1_1SurfaceMesh_1a2d6d7cf5a81f9c9bfb39508947ff4ed4"></a>
### Function operator=

![][public]

```cpp
SurfaceMesh& sysc::SurfaceMesh::operator=(SurfaceMesh &&)=default
```

Provide a move-assign operator.





**Parameters**:

* [SurfaceMesh](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh) &&

**Return type**: [SurfaceMesh](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SurfaceMesh) &

<a id="classsysc_1_1SurfaceMesh_1a49cc3f38274acfaea64527899f43df49"></a>
### Function getNodeData

![][public]
![][const]

```cpp
const NodeData& sysc::SurfaceMesh::getNodeData() const noexcept
```

Get node data.





**Return type**: const [NodeData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1NodeData) &

<a id="classsysc_1_1SurfaceMesh_1a6dbb920338f44a6762265810ad8afae3"></a>
### Function getFaceData

![][public]
![][const]

```cpp
const FaceData& sysc::SurfaceMesh::getFaceData() const noexcept
```

Get face data.





**Return type**: const [FaceData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1FaceData) &

<a id="classsysc_1_1SurfaceMesh_1a79ad7197266d3814f477f7326e6dc04a"></a>
### Function getNumNodes

![][public]
![][const]

```cpp
std::size_t sysc::SurfaceMesh::getNumNodes() const
```

Provide a method to get the number of nodes for this mesh.





**Return type**: std::size_t

<a id="classsysc_1_1SurfaceMesh_1a0f3aa7623beead3c2925dcc89f451360"></a>
### Function getNumElems

![][public]
![][const]

```cpp
std::size_t sysc::SurfaceMesh::getNumElems() const
```

Provide a method to get the number of elements for this mesh.





**Return type**: std::size_t

<a id="classsysc_1_1SurfaceMesh_1a9d34d5c3fa3c6d87f12e94642fadeb91"></a>
### Function getNodeIds

![][public]
![][const]

```cpp
OutputIntegerData sysc::SurfaceMesh::getNodeIds() const
```

Provide a method to access node ids array.





**Return type**: [OutputIntegerData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1OutputIntegerData)

<a id="classsysc_1_1SurfaceMesh_1a9e5add5718e83f6144004bacc2650d14"></a>
### Function getNodeCoords

![][public]
![][const]

```cpp
OutputVectorData sysc::SurfaceMesh::getNodeCoords() const
```

Provide a method to access node coordinates array.





**Return type**: [OutputVectorData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1OutputVectorData)

<a id="classsysc_1_1SurfaceMesh_1aa4e1d85cc62dc422100a8f6c9180eead"></a>
### Function getElemTypes

![][public]
![][const]

```cpp
OutputIntegerData sysc::SurfaceMesh::getElemTypes() const
```

Provide a method to access element types array.





**Return type**: [OutputIntegerData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1OutputIntegerData)

<a id="classsysc_1_1SurfaceMesh_1a477d04741fd375efcc702c785e0136dd"></a>
### Function getElemNodeCounts

![][public]
![][const]

```cpp
OutputIntegerData sysc::SurfaceMesh::getElemNodeCounts() const
```

Provide a method to access element node counts array.





**Return type**: [OutputIntegerData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1OutputIntegerData)

<a id="classsysc_1_1SurfaceMesh_1a891d7359d0536c58984e1c521a367e86"></a>
### Function getElemNodeIds

![][public]
![][const]

```cpp
OutputIntegerData sysc::SurfaceMesh::getElemNodeIds() const
```

Provide a method to access element node ids array.





**Return type**: [OutputIntegerData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1OutputIntegerData)

<a id="classsysc_1_1SurfaceMesh_1ad86260da5f6d2980105280f5408cdad7"></a>
### Function getFaceCellConnectivity

![][public]
![][const]

```cpp
FaceCellConnectivityData sysc::SurfaceMesh::getFaceCellConnectivity() const noexcept
```

Return face-to-cell connectivity data.





**Return type**: [FaceCellConnectivityData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1FaceCellConnectivityData)

<a id="classsysc_1_1SurfaceMesh_1a08e683009bed220d25e4848b24d92a39"></a>
### Function setSide0

![][public]

```cpp
void sysc::SurfaceMesh::setSide0(const RegionName &regionName)
```

Set side 0 region.

If this region is not a surface mesh region, then a run-time error will be thrown.





If the provided side 0 region is not a volume mesh region, then a run-time error will be thrown.



**Parameters**:

* const [RegionName](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/namespacesysc) & **regionName**

**Return type**: void

<a id="classsysc_1_1SurfaceMesh_1a15fb1ea02b021107f995e50ec4b35237"></a>
### Function setSide1

![][public]

```cpp
void sysc::SurfaceMesh::setSide1(const RegionName &regionName)
```

Set side 1 region.

If this region is not a surface mesh region, then a run-time error will be thrown.





If the provided side 0 region is not a volume mesh region, then a run-time error will be thrown.



**Parameters**:

* const [RegionName](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/namespacesysc) & **regionName**

**Return type**: void

<a id="classsysc_1_1SurfaceMesh_1a504afae8d069ededcc257e430b66d635"></a>
### Function hasSide0

![][public]
![][const]

```cpp
bool sysc::SurfaceMesh::hasSide0() const noexcept
```

Returns whether side 0 region is set.





**Return type**: bool

<a id="classsysc_1_1SurfaceMesh_1a73d353dd486f22a5e17b11fcab360df7"></a>
### Function hasSide1

![][public]
![][const]

```cpp
bool sysc::SurfaceMesh::hasSide1() const noexcept
```

Returns whether side 1 region is set.





**Return type**: bool

<a id="classsysc_1_1SurfaceMesh_1a9670c34062f7137cb45ac3105c78980b"></a>
### Function getSide0

![][public]
![][const]

```cpp
const RegionName& sysc::SurfaceMesh::getSide0() const
```

Get side 0 region.





**Return type**: const [RegionName](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/namespacesysc) &

<a id="classsysc_1_1SurfaceMesh_1a4e64f080b3e23ed534f4ff5b31e829dc"></a>
### Function getSide1

![][public]
![][const]

```cpp
const RegionName& sysc::SurfaceMesh::getSide1() const
```

Get side 1 region.





**Return type**: const [RegionName](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/namespacesysc) &

<a id="classsysc_1_1SurfaceMesh_1afe6bfa2f60fa4b106a1809428e9cec29"></a>
### Function checkValidity

![][public]
![][const]

```cpp
ValidityStatus sysc::SurfaceMesh::checkValidity() const
```

Provide a method to perform simple mesh validity checks.

See [SystemCoupling::checkMeshValidity](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1SystemCoupling) for more details.



**Return type**: [ValidityStatus](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1ValidityStatus)

<a id="classsysc_1_1SurfaceMesh_1a76a9ff65458582744b60e5eb7bbcd13a"></a>
### Function SurfaceMesh

![][public]

```cpp
sysc::SurfaceMesh::SurfaceMesh(NodeData nodes, ElementTypeData elemTypes, ElementNodeCountData elemNodeCounts, ElementNodeConnectivityData elemNodeIds, FaceCellConnectivityData faceCellConnectivity)
```

Construct the surface mesh object.





**Parameters**:

* [NodeData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1NodeData) **nodes**
* [ElementTypeData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1ElementTypeData) **elemTypes**
* [ElementNodeCountData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1ElementNodeCountData) **elemNodeCounts**
* [ElementNodeConnectivityData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1ElementNodeConnectivityData) **elemNodeIds**
* [FaceCellConnectivityData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1FaceCellConnectivityData) **faceCellConnectivity**

**Return type**: 

<a id="classsysc_1_1SurfaceMesh_1a87991fd2bb3260b835c6872d860e4f74"></a>
### Function SurfaceMesh

![][public]

```cpp
sysc::SurfaceMesh::SurfaceMesh(NodeData nodes, ElementTypeData elementTypes, ElementNodeConnectivityData elementNodeIds)
```

Construct the surface mesh object.





**Parameters**:

* [NodeData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1NodeData) **nodes**
* [ElementTypeData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1ElementTypeData) **elementTypes**
* [ElementNodeConnectivityData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1ElementNodeConnectivityData) **elementNodeIds**

**Return type**: 

<a id="classsysc_1_1SurfaceMesh_1a1f062afae5b75dfce4d4a60c6e3a60d0"></a>
### Function SurfaceMesh

![][public]

```cpp
sysc::SurfaceMesh::SurfaceMesh(NodeData meshNodes, ElementNodeCountData faceNodeCounts, ElementNodeConnectivityData faceNodeIds)
```

Construct the surface mesh object.





**Parameters**:

* [NodeData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1NodeData) **meshNodes**
* [ElementNodeCountData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1ElementNodeCountData) **faceNodeCounts**
* [ElementNodeConnectivityData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1ElementNodeConnectivityData) **faceNodeIds**

**Return type**: 

<a id="classsysc_1_1SurfaceMesh_1a39dd2b26100e08bd41e00a9d9373bd3a"></a>
### Function SurfaceMesh

![][public]

```cpp
sysc::SurfaceMesh::SurfaceMesh(NodeData meshNodes, ElementNodeCountData faceNodeCounts, ElementNodeConnectivityData faceNodeIds, FaceCellConnectivityData faceCellConnectivity)
```

Construct the surface mesh object.





**Parameters**:

* [NodeData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1NodeData) **meshNodes**
* [ElementNodeCountData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1ElementNodeCountData) **faceNodeCounts**
* [ElementNodeConnectivityData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1ElementNodeConnectivityData) **faceNodeIds**
* [FaceCellConnectivityData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1FaceCellConnectivityData) **faceCellConnectivity**

**Return type**: 

<a id="classsysc_1_1SurfaceMesh_1a90c944bfd9d09536be22b607f8c84abd"></a>
### Function SurfaceMesh

![][public]

```cpp
sysc::SurfaceMesh::SurfaceMesh(OutputIntegerData nodeIds, OutputVectorData nodeCoords, OutputIntegerData elemNodeCounts, OutputIntegerData elemNodeIds)
```







**Parameters**:

* [OutputIntegerData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1OutputIntegerData) **nodeIds**
* [OutputVectorData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1OutputVectorData) **nodeCoords**
* [OutputIntegerData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1OutputIntegerData) **elemNodeCounts**
* [OutputIntegerData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1OutputIntegerData) **elemNodeIds**

**Return type**: 

<a id="classsysc_1_1SurfaceMesh_1a1f4417e620f5c79b8c855c203978be84"></a>
### Function SurfaceMesh

![][public]

```cpp
sysc::SurfaceMesh::SurfaceMesh(OutputVectorData nodeCoords, OutputIntegerData elemNodeCounts, OutputIntegerData elemNodeIds)
```







**Parameters**:

* [OutputVectorData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1OutputVectorData) **nodeCoords**
* [OutputIntegerData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1OutputIntegerData) **elemNodeCounts**
* [OutputIntegerData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1OutputIntegerData) **elemNodeIds**

**Return type**: 

<a id="classsysc_1_1SurfaceMesh_1a786a6cbbf2ab08214207b4fe38f0f013"></a>
### Function checkMeshValidity

![][public]
![][const]

```cpp
MeshValidityStatus sysc::SurfaceMesh::checkMeshValidity() const
```

This method is deprecated - do not use.





**Return type**: [MeshValidityStatus](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1MeshValidityStatus)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)