# Interface fortran::sysccouplinginterfacegetsidetworegionf

![][Fortran]
![][public]

**Definition**: `syscCouplingInterfaceF.fi` (line 307)

Provide an interface to get side two region from a coupling interface.



## Members

* [sysccouplinginterfacegetsidetworegionf](interfacefortran_1_1sysccouplinginterfacegetsidetworegionf.md#interfacefortran_1_1sysccouplinginterfacegetsidetworegionf_1a6c0ec26d5adfd97fdf8423f16baa238d)

## Public functions

<a id="interfacefortran_1_1sysccouplinginterfacegetsidetworegionf_1a6c0ec26d5adfd97fdf8423f16baa238d"></a>
### Function sysccouplinginterfacegetsidetworegionf

![][public]


```fortran
type(syscregionf) function sysccouplinginterfacegetsidetworegionf(couplinginterface, index)
```


Get side two region from a coupling interface.





**Parameters**:

* couplinginterfacetype([sysccouplinginterfacef](structfortran_1_1sysccouplinginterfacef.md#structfortran_1_1sysccouplinginterfacef)), intent(in)
* indexinteger(kind=8), intent(in)

**Return type**: type([syscregionf](structfortran_1_1syscregionf.md#structfortran_1_1syscregionf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)