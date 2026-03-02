# Interface fortran::syscgetsurfacemeshf

![][Fortran]
![][public]

**Definition**: `syscSurfaceMeshF.fi` (line 29)

Provide an interface to get surface mesh.



## Members

* [syscgetsurfacemeshf](interfacefortran_1_1syscgetsurfacemeshf.md#interfacefortran_1_1syscgetsurfacemeshf_1a4ef0ff3b7efc57e9ae1f8e79dbd65838)
* [syscgetsurfacemeshf\_a](interfacefortran_1_1syscgetsurfacemeshf.md#interfacefortran_1_1syscgetsurfacemeshf_1ab5f9ab028c6786eb0912d0818a4cb23b)
* [syscgetsurfacemeshf\_b](interfacefortran_1_1syscgetsurfacemeshf.md#interfacefortran_1_1syscgetsurfacemeshf_1a7182edb45db6be1686ec89ac95eb16cd)
* [syscgetsurfacemeshf\_nci](interfacefortran_1_1syscgetsurfacemeshf.md#interfacefortran_1_1syscgetsurfacemeshf_1a6a21b652341e9634fb6792178b9497be)
* [syscgetsurfacemeshf\_nf](interfacefortran_1_1syscgetsurfacemeshf.md#interfacefortran_1_1syscgetsurfacemeshf_1abe50f734fb16ce0550b03bb673c96e9d)
* [syscgetsurfacemeshf\_ntci](interfacefortran_1_1syscgetsurfacemeshf.md#interfacefortran_1_1syscgetsurfacemeshf_1ade13fcbec56cc5825f733dbd7e95dc83)
* [syscgetsurfacemeshf\_nti](interfacefortran_1_1syscgetsurfacemeshf.md#interfacefortran_1_1syscgetsurfacemeshf_1aa2aeb30b4effcd2ce4ef38dd87499f0f)

## Public functions

<a id="interfacefortran_1_1syscgetsurfacemeshf_1a4ef0ff3b7efc57e9ae1f8e79dbd65838"></a>
### Function syscgetsurfacemeshf

![][public]

```fortran
type(syscsurfacemeshf) function syscgetsurfacemeshf()
```

Create a surface mesh access struct.

Returns a type representing empty surface mesh. All members will be assigned default values.



**Return type**: type([syscsurfacemeshf](structfortran_1_1syscsurfacemeshf.md#structfortran_1_1syscsurfacemeshf)) function

<a id="interfacefortran_1_1syscgetsurfacemeshf_1abe50f734fb16ce0550b03bb673c96e9d"></a>
### Function syscgetsurfacemeshf\_nf

![][public]

```fortran
type(syscsurfacemeshf) function syscgetsurfacemeshf_nf(nodes, faces)
```

Create a surface mesh access struct.

**Parameters**:

* **nodes**: - mesh nodes
* **faces**: - mesh faces



**Parameters**:

* nodesnodes
* facesfaces

**Return type**: type([syscsurfacemeshf](structfortran_1_1syscsurfacemeshf.md#structfortran_1_1syscsurfacemeshf)) function

<a id="interfacefortran_1_1syscgetsurfacemeshf_1ade13fcbec56cc5825f733dbd7e95dc83"></a>
### Function syscgetsurfacemeshf\_ntci

![][public]

```fortran
type(syscsurfacemeshf) function syscgetsurfacemeshf_ntci(nodes, elemTypes, elemNodeCounts, elemNodeConn)
```

Create a surface mesh access struct.

**Parameters**:

* **nodes**: - mesh nodes
* **elemTypes**: - element types
* **elemNodeCounts**: - element node counts
* **elemNodeConn**: - element-to-node connectivity



**Parameters**:

* nodesnodes
* elemTypeselemTypes
* elemNodeCountselemNodeCounts
* elemNodeConnelemNodeConn

**Return type**: type([syscsurfacemeshf](structfortran_1_1syscsurfacemeshf.md#structfortran_1_1syscsurfacemeshf)) function

<a id="interfacefortran_1_1syscgetsurfacemeshf_1a6a21b652341e9634fb6792178b9497be"></a>
### Function syscgetsurfacemeshf\_nci

![][public]

```fortran
type(syscsurfacemeshf) function syscgetsurfacemeshf_nci(nodes, elemNodeCounts, elemNodeConn)
```

Create a surface mesh access struct.

**Parameters**:

* **nodes**: - mesh nodes
* **elemNodeCounts**: - element node counts
* **elemNodeConn**: - element-to-node connectivity



**Parameters**:

* nodesnodes
* elemNodeCountselemNodeCounts
* elemNodeConnelemNodeConn

**Return type**: type([syscsurfacemeshf](structfortran_1_1syscsurfacemeshf.md#structfortran_1_1syscsurfacemeshf)) function

<a id="interfacefortran_1_1syscgetsurfacemeshf_1aa2aeb30b4effcd2ce4ef38dd87499f0f"></a>
### Function syscgetsurfacemeshf\_nti

![][public]

```fortran
type(syscsurfacemeshf) function syscgetsurfacemeshf_nti(nodes, elemTypes, elemNodeConn)
```

Create a surface mesh access struct.

**Parameters**:

* **nodes**: - mesh nodes
* **elemTypes**: - element types
* **elemNodeConn**: - element-to-node connectivity



**Parameters**:

* nodesnodes
* elemTypeselemTypes
* elemNodeConnelemNodeConn

**Return type**: type([syscsurfacemeshf](structfortran_1_1syscsurfacemeshf.md#structfortran_1_1syscsurfacemeshf)) function

<a id="interfacefortran_1_1syscgetsurfacemeshf_1ab5f9ab028c6786eb0912d0818a4cb23b"></a>
### Function syscgetsurfacemeshf\_a

![][public]

```fortran
type(syscsurfacemeshf) function syscgetsurfacemeshf_a(nodeIds, nodeCoords, elemNodeCounts, elemNodeIds)
```

Create a surface mesh access struct.

Note - this function is deprecated, use <code>syscGetSurfaceMeshF_NCI</code>






**Parameters**:

* **nodeIds**: - output scalar data access for node ids
* **nodeCoords**: - output vector data access for node coordinates, provided in the same order as node ids
* **elemNodeCounts**: - output scalar data access for element node counts
* **elemNodeIds**: - output scalar data access for element node ids



**Parameters**:

* nodeIdsnodeIds
* nodeCoordsnodeCoords
* elemNodeCountselemNodeCounts
* elemNodeIdselemNodeIds

**Return type**: type([syscsurfacemeshf](structfortran_1_1syscsurfacemeshf.md#structfortran_1_1syscsurfacemeshf)) function

<a id="interfacefortran_1_1syscgetsurfacemeshf_1a7182edb45db6be1686ec89ac95eb16cd"></a>
### Function syscgetsurfacemeshf\_b

![][public]

```fortran
type(syscsurfacemeshf) function syscgetsurfacemeshf_b(nodeCoords, elemNodeCounts, elemNodeIds)
```

Create a surface mesh access struct.

Note - this function is deprecated, use <code>syscGetSurfaceMeshF_NCI</code>






**Parameters**:

* **nodeCoords**: - output vector data access for node coordinates, provided in ascending node ids order
* **elemNodeCounts**: - output scalar data access for element node counts
* **elemNodeIds**: - output scalar data access for element node ids



**Parameters**:

* nodeCoordsnodeCoords
* elemNodeCountselemNodeCounts
* elemNodeIdselemNodeIds

**Return type**: type([syscsurfacemeshf](structfortran_1_1syscsurfacemeshf.md#structfortran_1_1syscsurfacemeshf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)