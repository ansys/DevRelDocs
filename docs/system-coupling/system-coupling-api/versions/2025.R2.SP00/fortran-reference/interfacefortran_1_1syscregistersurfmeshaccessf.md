---
title: "Interface fortran::syscregistersurfmeshaccessf"
---

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 545)

Provide an interface to register surface mesh access.



## Members

* [syscregistersurfmeshaccessf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscregistersurfmeshaccessf)

## Public functions

<a id="interfacefortran_1_1syscregistersurfmeshaccessf_1a13731e65e2090ced6dc8c91c33619707"></a>
### Function syscregistersurfmeshaccessf

![][public]

```fortran
type(syscerrorf) function syscregistersurfmeshaccessf(dataAccess)
```

Provide a function to register surface mesh access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to SyscSurfaceMeshAccessF interface.


**Returns**:

a <code>SyscErrorF</code> type for error checking.



**Parameters**:

* dataAccessdataAccess

**Return type**: type([syscerrorf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)