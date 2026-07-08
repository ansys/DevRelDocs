# Interface fortran::syscgetdatatransferf

![][Fortran]
![][public]

**Definition**: `syscDataTransferF.fi` (line 21)

Provide an interface to get a data transfer.



## Members

* [syscgetdatatransferf](interfacefortran_1_1syscgetdatatransferf.md#interfacefortran_1_1syscgetdatatransferf_1ac52f9b1a5b54382e682daa312d5babd2)

## Public functions

<a id="interfacefortran_1_1syscgetdatatransferf_1ac52f9b1a5b54382e682daa312d5babd2"></a>
### Function syscgetdatatransferf

![][public]


```fortran
type(syscdatatransferf) function syscgetdatatransferf(sourcevariable, targetvariable, targetside)
```


Create a data transfer.

**Parameters**:

* **sourceVariable**: - source variable.
* **targetVariable**: - target variable.
* **targetSide**: - target side.



**Parameters**:

* sourcevariabletype([syscvariablef](structfortran_1_1syscvariablef.md#structfortran_1_1syscvariablef)), intent(in)
* targetvariabletype([syscvariablef](structfortran_1_1syscvariablef.md#structfortran_1_1syscvariablef)), intent(in)
* targetsideinteger(kind=4), intent(in)

**Return type**: type([syscdatatransferf](structfortran_1_1syscdatatransferf.md#structfortran_1_1syscdatatransferf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)