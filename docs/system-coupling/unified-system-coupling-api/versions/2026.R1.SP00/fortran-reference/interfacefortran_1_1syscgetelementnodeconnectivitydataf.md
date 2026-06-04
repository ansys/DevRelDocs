# Interface fortran::syscgetelementnodeconnectivitydataf

![][Fortran]
![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 176)





## Members

* [syscgetelementnodeconnectivitydataf](interfacefortran_1_1syscgetelementnodeconnectivitydataf.md#interfacefortran_1_1syscgetelementnodeconnectivitydataf_1affa4bba5db8c80d430069372d013f4f3)
* [syscgetelementnodeconnectivitydataf\_empty](interfacefortran_1_1syscgetelementnodeconnectivitydataf.md#interfacefortran_1_1syscgetelementnodeconnectivitydataf_1ae162150e9bff4d53f2e7a0fa8fe3859b)

## Public functions

<a id="interfacefortran_1_1syscgetelementnodeconnectivitydataf_1ae162150e9bff4d53f2e7a0fa8fe3859b"></a>
### Function syscgetelementnodeconnectivitydataf\_empty

![][public]


```fortran
type(syscelementnodeconnectivitydataf) function syscgetelementnodeconnectivitydataf_empty()
```








**Return type**: type([syscelementnodeconnectivitydataf](structfortran_1_1syscelementnodeconnectivitydataf.md#structfortran_1_1syscelementnodeconnectivitydataf)) function

<a id="interfacefortran_1_1syscgetelementnodeconnectivitydataf_1affa4bba5db8c80d430069372d013f4f3"></a>
### Function syscgetelementnodeconnectivitydataf

![][public]


```fortran
type(syscelementnodeconnectivitydataf) function syscgetelementnodeconnectivitydataf(elemnodeconn)
```








**Parameters**:

* elemnodeconntype([syscoutputintegerdataf](structfortran_1_1syscoutputintegerdataf.md#structfortran_1_1syscoutputintegerdataf)), intent(in)

**Return type**: type([syscelementnodeconnectivitydataf](structfortran_1_1syscelementnodeconnectivitydataf.md#structfortran_1_1syscelementnodeconnectivitydataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)