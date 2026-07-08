# Interface fortran::sysccouplinginterfacegetsideoneregionf

![][Fortran]
![][public]

**Definition**: `syscCouplingInterfaceF.fi` (line 280)

Provide an interface to get side one region from a coupling interface.



## Members

* [sysccouplinginterfacegetsideoneregionf](interfacefortran_1_1sysccouplinginterfacegetsideoneregionf.md#interfacefortran_1_1sysccouplinginterfacegetsideoneregionf_1af0acce7e620672b20fd84b6ae8169407)

## Public functions

<a id="interfacefortran_1_1sysccouplinginterfacegetsideoneregionf_1af0acce7e620672b20fd84b6ae8169407"></a>
### Function sysccouplinginterfacegetsideoneregionf

![][public]


```fortran
type(syscregionf) function sysccouplinginterfacegetsideoneregionf(couplinginterface, index)
```


Get side one region from a coupling interface.





**Parameters**:

* couplinginterfacetype([sysccouplinginterfacef](structfortran_1_1sysccouplinginterfacef.md#structfortran_1_1sysccouplinginterfacef)), intent(in)
* indexinteger(kind=8), intent(in)

**Return type**: type([syscregionf](structfortran_1_1syscregionf.md#structfortran_1_1syscregionf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)