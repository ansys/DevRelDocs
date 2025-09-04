# Interface fortran::syscgetvolumemeshf

![][Fortran]
![][public]

**Definition**: `syscVolumeMeshF.fi` (line 32)

Provide an interface to get volume mesh.



## Members

* [syscgetvolumemeshf\_elementbased](interfacefortran_1_1syscgetvolumemeshf.md#interfacefortran_1_1syscgetvolumemeshf_1ada22e9653def26be84289f9a1646854f)
* [syscgetvolumemeshf\_empty](interfacefortran_1_1syscgetvolumemeshf.md#interfacefortran_1_1syscgetvolumemeshf_1a8fdc69302a91089a36d3cc20b58affab)
* [syscgetvolumemeshf\_facebased](interfacefortran_1_1syscgetvolumemeshf.md#interfacefortran_1_1syscgetvolumemeshf_1acba9f96a6565a333e30f3725f507e3d5)

## Public functions

<a id="interfacefortran_1_1syscgetvolumemeshf_1a8fdc69302a91089a36d3cc20b58affab"></a>
### Function syscgetvolumemeshf\_empty

![][public]

```fortran
type(syscvolumemeshf) function syscgetvolumemeshf_empty()
```

Create an empty volume mesh access struct.





**Return type**: type([syscvolumemeshf](structfortran_1_1syscvolumemeshf.md#structfortran_1_1syscvolumemeshf)) function

<a id="interfacefortran_1_1syscgetvolumemeshf_1acba9f96a6565a333e30f3725f507e3d5"></a>
### Function syscgetvolumemeshf\_facebased

![][public]

```fortran
type(syscvolumemeshf) function syscgetvolumemeshf_facebased(nodes, faceNodeCounts, faceNodeConn, faceCellConn, cellIds)
```

Create a face-based volume mesh access struct.

**Parameters**:

* **nodes**: - mesh nodes
* **faceNodeCounts**: - face node counts
* **faceNodeConn**: - face-to-node connectivity
* **faceCellConn**: - face-to-cell connectivity
* **cellIds**: - cell ids



**Parameters**:

* nodesnodes
* faceNodeCountsfaceNodeCounts
* faceNodeConnfaceNodeConn
* faceCellConnfaceCellConn
* cellIdscellIds

**Return type**: type([syscvolumemeshf](structfortran_1_1syscvolumemeshf.md#structfortran_1_1syscvolumemeshf)) function

<a id="interfacefortran_1_1syscgetvolumemeshf_1ada22e9653def26be84289f9a1646854f"></a>
### Function syscgetvolumemeshf\_elementbased

![][public]

```fortran
type(syscvolumemeshf) function syscgetvolumemeshf_elementbased(nodes, cellTypes, cellNodeConn)
```

Create an element-based volume mesh access struct.

**Parameters**:

* **nodes**: - mesh nodes
* **cellTypes**: - cell types
* **cellNodeConn**: - cell-to-node connectivity



**Parameters**:

* nodesnodes
* cellTypescellTypes
* cellNodeConncellNodeConn

**Return type**: type([syscvolumemeshf](structfortran_1_1syscvolumemeshf.md#structfortran_1_1syscvolumemeshf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)