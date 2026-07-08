# Interface fortran::syscgetfacedataf

![][Fortran]
![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 323)





## Members

* [syscgetfacedataf](interfacefortran_1_1syscgetfacedataf.md#interfacefortran_1_1syscgetfacedataf_1ae9a6152011424543a301b1091a863f5b)
* [syscgetfacedataf\_cn](interfacefortran_1_1syscgetfacedataf.md#interfacefortran_1_1syscgetfacedataf_1a20801c611ee9d84e56a5ce3f1b179f5c)
* [syscgetfacedataf\_itn](interfacefortran_1_1syscgetfacedataf.md#interfacefortran_1_1syscgetfacedataf_1a90367f1647e014b59ed7fbd5437500a9)

## Public functions

<a id="interfacefortran_1_1syscgetfacedataf_1ae9a6152011424543a301b1091a863f5b"></a>
### Function syscgetfacedataf

![][public]

```fortran
type(syscfacedataf) function syscgetfacedataf()
```







**Return type**: type([syscfacedataf](structfortran_1_1syscfacedataf.md#structfortran_1_1syscfacedataf)) function

<a id="interfacefortran_1_1syscgetfacedataf_1a90367f1647e014b59ed7fbd5437500a9"></a>
### Function syscgetfacedataf\_itn

![][public]

```fortran
type(syscfacedataf) function syscgetfacedataf_itn(faceIds, faceTypes, faceNodeConnectivity)
```







**Parameters**:

* faceIdsfaceIds
* faceTypesfaceTypes
* faceNodeConnectivityfaceNodeConnectivity

**Return type**: type([syscfacedataf](structfortran_1_1syscfacedataf.md#structfortran_1_1syscfacedataf)) function

<a id="interfacefortran_1_1syscgetfacedataf_1a20801c611ee9d84e56a5ce3f1b179f5c"></a>
### Function syscgetfacedataf\_cn

![][public]

```fortran
type(syscfacedataf) function syscgetfacedataf_cn(faceNodeCounts, faceNodeConnectivity)
```







**Parameters**:

* faceNodeCountsfaceNodeCounts
* faceNodeConnectivityfaceNodeConnectivity

**Return type**: type([syscfacedataf](structfortran_1_1syscfacedataf.md#structfortran_1_1syscfacedataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)