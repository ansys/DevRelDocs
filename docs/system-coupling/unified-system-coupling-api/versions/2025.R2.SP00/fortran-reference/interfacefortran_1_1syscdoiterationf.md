# Interface fortran::syscdoiterationf

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 640)

Provide an interface to check whether to do a coupling iteration.



## Members

* [syscdoiterationf](interfacefortran_1_1syscdoiterationf.md#interfacefortran_1_1syscdoiterationf_1acc2cd7da0c5cc2a33785425659ba1f4d)

## Public functions

<a id="interfacefortran_1_1syscdoiterationf_1acc2cd7da0c5cc2a33785425659ba1f4d"></a>
### Function syscdoiterationf

![][public]

```fortran
logical function syscdoiterationf()
```

Provide a function to check whether to do a coupling iteration.

**Returns**:

true if another coupling iteration is required, otherwise it returns false.



**Return type**: logical function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)