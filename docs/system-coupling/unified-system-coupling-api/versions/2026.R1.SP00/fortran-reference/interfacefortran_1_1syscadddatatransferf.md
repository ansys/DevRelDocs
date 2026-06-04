# Interface fortran::syscadddatatransferf

![][Fortran]
![][public]

**Definition**: `syscCouplingInterfaceF.fi` (line 152)

Provide an interface to add data transfer.



## Members

* [syscadddatatransferf](interfacefortran_1_1syscadddatatransferf.md#interfacefortran_1_1syscadddatatransferf_1a6848395ab0ad1cbe86aa5b0ea170bd28)

## Public functions

<a id="interfacefortran_1_1syscadddatatransferf_1a6848395ab0ad1cbe86aa5b0ea170bd28"></a>
### Function syscadddatatransferf

![][public]


```fortran
type(syscerrorf) function syscadddatatransferf(couplinginterface, datatransfer)
```


Add data transfer to the coupling interface.





**Parameters**:

* couplinginterfacetype([sysccouplinginterfacef](structfortran_1_1sysccouplinginterfacef.md#structfortran_1_1sysccouplinginterfacef)), intent(in)
* datatransfertype([syscdatatransferf](structfortran_1_1syscdatatransferf.md#structfortran_1_1syscdatatransferf)), intent(in)

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)