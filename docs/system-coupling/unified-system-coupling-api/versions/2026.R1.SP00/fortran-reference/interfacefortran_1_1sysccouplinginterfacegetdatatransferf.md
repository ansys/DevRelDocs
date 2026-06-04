# Interface fortran::sysccouplinginterfacegetdatatransferf

![][Fortran]
![][public]

**Definition**: `syscCouplingInterfaceF.fi` (line 253)

Provide an interface to get a data transfer from a coupling interface.



## Members

* [sysccouplinginterfacegetdatatransferf](interfacefortran_1_1sysccouplinginterfacegetdatatransferf.md#interfacefortran_1_1sysccouplinginterfacegetdatatransferf_1a64f4a6d41e2fa5bf6be37e13c0bebd34)

## Public functions

<a id="interfacefortran_1_1sysccouplinginterfacegetdatatransferf_1a64f4a6d41e2fa5bf6be37e13c0bebd34"></a>
### Function sysccouplinginterfacegetdatatransferf

![][public]


```fortran
type(syscdatatransferf) function sysccouplinginterfacegetdatatransferf(couplinginterface, index)
```


Get a data transfer from a coupling interface.





**Parameters**:

* couplinginterfacetype([sysccouplinginterfacef](structfortran_1_1sysccouplinginterfacef.md#structfortran_1_1sysccouplinginterfacef)), intent(in)
* indexinteger(kind=8), intent(in)

**Return type**: type([syscdatatransferf](structfortran_1_1syscdatatransferf.md#structfortran_1_1syscdatatransferf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)