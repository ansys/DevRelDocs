# Type fortran::syscdatatransferf undefined

![][Fortran]
![][public]

**Definition**: `syscDataTransferF.fi` (line 12)

Provide a struct for a data transfer.



## Members

* [sourcevariable](structfortran_1_1syscdatatransferf.md#structfortran_1_1syscdatatransferf_1af21e64ccd79e4331f04477e979a5ad7e)
* [targetside](structfortran_1_1syscdatatransferf.md#structfortran_1_1syscdatatransferf_1a9f6c6078b224bb2f4b9d69236dae416c)
* [targetvariable](structfortran_1_1syscdatatransferf.md#structfortran_1_1syscdatatransferf_1a25b318e666a7df521caa1cf70944be48)

## Public attributes

<a id="structfortran_1_1syscdatatransferf_1af21e64ccd79e4331f04477e979a5ad7e"></a>
### Variable sourcevariable

![][public]

**Definition**: `syscDataTransferF.fi` (line 13)

```fortran
type(syscvariablef) sourcevariable
```

Source variable.





**Type**: type([syscvariablef](structfortran_1_1syscvariablef.md#structfortran_1_1syscvariablef))

<a id="structfortran_1_1syscdatatransferf_1a25b318e666a7df521caa1cf70944be48"></a>
### Variable targetvariable

![][public]

**Definition**: `syscDataTransferF.fi` (line 14)

```fortran
type(syscvariablef) targetvariable
```

Target variable.





**Type**: type([syscvariablef](structfortran_1_1syscvariablef.md#structfortran_1_1syscvariablef))

<a id="structfortran_1_1syscdatatransferf_1a9f6c6078b224bb2f4b9d69236dae416c"></a>
### Variable targetside

![][public]

**Definition**: `syscDataTransferF.fi` (line 15)

```fortran
integer(kind=4) targetside
```

Target side.





**Type**: integer(kind=4)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)