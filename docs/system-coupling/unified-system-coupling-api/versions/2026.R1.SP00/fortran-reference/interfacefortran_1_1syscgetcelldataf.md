# Interface fortran::syscgetcelldataf

![][Fortran]
![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 391)





## Members

* [syscgetcelldataf](interfacefortran_1_1syscgetcelldataf.md#interfacefortran_1_1syscgetcelldataf_1a48f9b149e7123172299ff88f71b26b80)
* [syscgetfacedataf\_i](interfacefortran_1_1syscgetcelldataf.md#interfacefortran_1_1syscgetcelldataf_1a46932060f6bbf635304ef73ad88bb37c)
* [syscgetfacedataf\_tn](interfacefortran_1_1syscgetcelldataf.md#interfacefortran_1_1syscgetcelldataf_1af3ef8a0138a0e70ed0e1643de3ca051a)

## Public functions

<a id="interfacefortran_1_1syscgetcelldataf_1a48f9b149e7123172299ff88f71b26b80"></a>
### Function syscgetcelldataf

![][public]


```fortran
type(sysccelldataf) function syscgetcelldataf()
```








**Return type**: type([sysccelldataf](structfortran_1_1sysccelldataf.md#structfortran_1_1sysccelldataf)) function

<a id="interfacefortran_1_1syscgetcelldataf_1a46932060f6bbf635304ef73ad88bb37c"></a>
### Function syscgetfacedataf\_i

![][public]


```fortran
type(sysccelldataf) function syscgetfacedataf_i(cellids)
```








**Parameters**:

* cellidstype([syscelementiddataf](structfortran_1_1syscelementiddataf.md#structfortran_1_1syscelementiddataf)), intent(in)

**Return type**: type([sysccelldataf](structfortran_1_1sysccelldataf.md#structfortran_1_1sysccelldataf)) function

<a id="interfacefortran_1_1syscgetcelldataf_1af3ef8a0138a0e70ed0e1643de3ca051a"></a>
### Function syscgetfacedataf\_tn

![][public]


```fortran
type(sysccelldataf) function syscgetfacedataf_tn(celltypes, cellnodeconnectivity)
```








**Parameters**:

* celltypestype([syscelementtypedataf](structfortran_1_1syscelementtypedataf.md#structfortran_1_1syscelementtypedataf)), intent(in)
* cellnodeconnectivitytype([syscelementnodeconnectivitydataf](structfortran_1_1syscelementnodeconnectivitydataf.md#structfortran_1_1syscelementnodeconnectivitydataf)), intent(in)

**Return type**: type([sysccelldataf](structfortran_1_1sysccelldataf.md#structfortran_1_1sysccelldataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)