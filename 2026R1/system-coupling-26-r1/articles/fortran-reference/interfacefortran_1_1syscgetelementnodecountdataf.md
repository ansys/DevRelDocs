# Interface fortran::syscgetelementnodecountdataf

![][Fortran]
![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 140)





## Members

* [syscgetelementnodecountdataf](interfacefortran_1_1syscgetelementnodecountdataf.md#interfacefortran_1_1syscgetelementnodecountdataf_1a02e48c19319a5c7be2d6855ec7a4f7d2)
* [syscgetelementnodecountdataf\_empty](interfacefortran_1_1syscgetelementnodecountdataf.md#interfacefortran_1_1syscgetelementnodecountdataf_1a4065b012ee272691b873021b605771df)

## Public functions

<a id="interfacefortran_1_1syscgetelementnodecountdataf_1a4065b012ee272691b873021b605771df"></a>
### Function syscgetelementnodecountdataf\_empty

![][public]


```fortran
type(syscelementnodecountdataf) function syscgetelementnodecountdataf_empty()
```








**Return type**: type([syscelementnodecountdataf](structfortran_1_1syscelementnodecountdataf.md#structfortran_1_1syscelementnodecountdataf)) function

<a id="interfacefortran_1_1syscgetelementnodecountdataf_1a02e48c19319a5c7be2d6855ec7a4f7d2"></a>
### Function syscgetelementnodecountdataf

![][public]


```fortran
type(syscelementnodecountdataf) function syscgetelementnodecountdataf(elemnodecounts)
```








**Parameters**:

* elemnodecountstype([syscoutputintegerdataf](structfortran_1_1syscoutputintegerdataf.md#structfortran_1_1syscoutputintegerdataf)), intent(in)

**Return type**: type([syscelementnodecountdataf](structfortran_1_1syscelementnodecountdataf.md#structfortran_1_1syscelementnodecountdataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)