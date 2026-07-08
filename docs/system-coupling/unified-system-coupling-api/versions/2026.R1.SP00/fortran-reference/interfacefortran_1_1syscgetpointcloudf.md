# Interface fortran::syscgetpointcloudf

![][Fortran]
![][public]

**Definition**: `syscPointCloudF.fi` (line 23)

Provide an interface to get point cloud.



## Members

* [syscgetpointcloudf](interfacefortran_1_1syscgetpointcloudf.md#interfacefortran_1_1syscgetpointcloudf_1a3e611ce6fba0868e8068bdd19fd64b9a)
* [syscgetpointcloudf\_empty](interfacefortran_1_1syscgetpointcloudf.md#interfacefortran_1_1syscgetpointcloudf_1a6b35486af7700d2b1882bc3999ee6532)

## Public functions

<a id="interfacefortran_1_1syscgetpointcloudf_1a6b35486af7700d2b1882bc3999ee6532"></a>
### Function syscgetpointcloudf\_empty

![][public]


```fortran
type(syscpointcloudf) function syscgetpointcloudf_empty()
```


Create an empty volume mesh access struct.





**Return type**: type([syscpointcloudf](structfortran_1_1syscpointcloudf.md#structfortran_1_1syscpointcloudf)) function

<a id="interfacefortran_1_1syscgetpointcloudf_1a3e611ce6fba0868e8068bdd19fd64b9a"></a>
### Function syscgetpointcloudf

![][public]


```fortran
type(syscpointcloudf) function syscgetpointcloudf(nodeids, nodecoords)
```


Create a face-based volume mesh access struct.

**Parameters**:

* **nodes**: - mesh nodes
* **faceNodeCounts**: - face node counts
* **faceNodeConn**: - face-to-node connectivity
* **faceCellConn**: - face-to-cell connectivity



**Parameters**:

* nodeidstype([syscoutputintegerdataf](structfortran_1_1syscoutputintegerdataf.md#structfortran_1_1syscoutputintegerdataf)), intent(in)
* nodecoordstype([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)), intent(in)

**Return type**: type([syscpointcloudf](structfortran_1_1syscpointcloudf.md#structfortran_1_1syscpointcloudf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)