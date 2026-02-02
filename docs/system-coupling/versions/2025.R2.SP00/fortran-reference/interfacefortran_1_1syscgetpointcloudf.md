# Interface fortran::syscgetpointcloudf

![][Fortran]
![][public]

**Definition**: `syscPointCloudF.fi` (line 20)

Provide an interface to get point cloud.



## Members

* [syscgetpointcloudf](interfacefortran_1_1syscgetpointcloudf.md#interfacefortran_1_1syscgetpointcloudf_1a9c8dc2d4d850a43b30daa744c6a58b9d)
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

<a id="interfacefortran_1_1syscgetpointcloudf_1a9c8dc2d4d850a43b30daa744c6a58b9d"></a>
### Function syscgetpointcloudf

![][public]

```fortran
type(syscpointcloudf) function syscgetpointcloudf(nodeIds, nodeCoords)
```

Create a face-based volume mesh access struct.

**Parameters**:

* **nodes**: - mesh nodes
* **faceNodeCounts**: - face node counts
* **faceNodeConn**: - face-to-node connectivity
* **faceCellConn**: - face-to-cell connectivity



**Parameters**:

* nodeIdsnodeIds
* nodeCoordsnodeCoords

**Return type**: type([syscpointcloudf](structfortran_1_1syscpointcloudf.md#structfortran_1_1syscpointcloudf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)