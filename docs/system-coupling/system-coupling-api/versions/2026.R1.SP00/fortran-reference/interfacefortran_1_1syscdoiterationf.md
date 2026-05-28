---
title: "Interface fortran::syscdoiterationf"
---

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 640)

Provide an interface to check whether to do a coupling iteration.



## Members

* [syscdoiterationf](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/interfacefortran_1_1syscdoiterationf)

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