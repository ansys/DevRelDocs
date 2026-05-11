# Interface fortran::syscgetdatatransferf

![][Fortran]
![][public]

**Definition**: `syscDataTransferF.fi` (line 21)

Provide an interface to get a data transfer.



## Members

* [syscgetdatatransferf](interfacefortran_1_1syscgetdatatransferf.md#interfacefortran_1_1syscgetdatatransferf_1a7dfe2901d48eab20fe578ec65a3d1343)

## Public functions

<a id="interfacefortran_1_1syscgetdatatransferf_1a7dfe2901d48eab20fe578ec65a3d1343"></a>
### Function syscgetdatatransferf

![][public]

```fortran
type(syscdatatransferf) function syscgetdatatransferf(sourceVariable, targetVariable, targetSide)
```

Create a data transfer.

**Parameters**:

* **sourceVariable**: - source variable.
* **targetVariable**: - target variable.
* **targetSide**: - target side.



**Parameters**:

* sourceVariablesourceVariable
* targetVariabletargetVariable
* targetSidetargetSide

**Return type**: type([syscdatatransferf](structfortran_1_1syscdatatransferf.md#structfortran_1_1syscdatatransferf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)