# Interface fortran::syscgetvolumemeshf

![][Fortran]
![][public]

**Definition**: `syscVolumeMeshF.fi` (line 38)

Provide an interface to get volume mesh.



## Members

* [syscgetvolumemeshf\_elementbased](interfacefortran_1_1syscgetvolumemeshf.md#interfacefortran_1_1syscgetvolumemeshf_1ac4dc22d1b343320bc499ba2f7f126a0d)
* [syscgetvolumemeshf\_empty](interfacefortran_1_1syscgetvolumemeshf.md#interfacefortran_1_1syscgetvolumemeshf_1a8fdc69302a91089a36d3cc20b58affab)
* [syscgetvolumemeshf\_facebased](interfacefortran_1_1syscgetvolumemeshf.md#interfacefortran_1_1syscgetvolumemeshf_1a67946a37e16edb40665a133c48f1f492)

## Public functions

<a id="interfacefortran_1_1syscgetvolumemeshf_1a8fdc69302a91089a36d3cc20b58affab"></a>
### Function syscgetvolumemeshf\_empty

![][public]


```fortran
type(syscvolumemeshf) function syscgetvolumemeshf_empty()
```


Create an empty volume mesh access struct.





**Return type**: type([syscvolumemeshf](structfortran_1_1syscvolumemeshf.md#structfortran_1_1syscvolumemeshf)) function

<a id="interfacefortran_1_1syscgetvolumemeshf_1a67946a37e16edb40665a133c48f1f492"></a>
### Function syscgetvolumemeshf\_facebased

![][public]


```fortran
type(syscvolumemeshf) function syscgetvolumemeshf_facebased(nodes, facenodecounts, facenodeconn, facecellconn, cellids)
```


Create a face-based volume mesh access struct.

**Parameters**:

* **nodes**: - mesh nodes
* **faceNodeCounts**: - face node counts
* **faceNodeConn**: - face-to-node connectivity
* **faceCellConn**: - face-to-cell connectivity
* **cellIds**: - cell ids



**Parameters**:

* nodestype([syscnodedataf](structfortran_1_1syscnodedataf.md#structfortran_1_1syscnodedataf)), intent(in)
* facenodecountstype([syscelementnodecountdataf](structfortran_1_1syscelementnodecountdataf.md#structfortran_1_1syscelementnodecountdataf)), intent(in)
* facenodeconntype([syscelementnodeconnectivitydataf](structfortran_1_1syscelementnodeconnectivitydataf.md#structfortran_1_1syscelementnodeconnectivitydataf)), intent(in)
* facecellconntype([syscfacecellconnectivitydataf](structfortran_1_1syscfacecellconnectivitydataf.md#structfortran_1_1syscfacecellconnectivitydataf)), intent(in)
* cellidstype([sysccelliddataf](structfortran_1_1sysccelliddataf.md#structfortran_1_1sysccelliddataf)), intent(in)

**Return type**: type([syscvolumemeshf](structfortran_1_1syscvolumemeshf.md#structfortran_1_1syscvolumemeshf)) function

<a id="interfacefortran_1_1syscgetvolumemeshf_1ac4dc22d1b343320bc499ba2f7f126a0d"></a>
### Function syscgetvolumemeshf\_elementbased

![][public]


```fortran
type(syscvolumemeshf) function syscgetvolumemeshf_elementbased(nodes, celltypes, cellnodeconn)
```


Create an element-based volume mesh access struct.

**Parameters**:

* **nodes**: - mesh nodes
* **cellTypes**: - cell types
* **cellNodeConn**: - cell-to-node connectivity



**Parameters**:

* nodestype([syscnodedataf](structfortran_1_1syscnodedataf.md#structfortran_1_1syscnodedataf)), intent(in)
* celltypestype([syscelementtypedataf](structfortran_1_1syscelementtypedataf.md#structfortran_1_1syscelementtypedataf)), intent(in)
* cellnodeconntype([syscelementnodeconnectivitydataf](structfortran_1_1syscelementnodeconnectivitydataf.md#structfortran_1_1syscelementnodeconnectivitydataf)), intent(in)

**Return type**: type([syscvolumemeshf](structfortran_1_1syscvolumemeshf.md#structfortran_1_1syscvolumemeshf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)