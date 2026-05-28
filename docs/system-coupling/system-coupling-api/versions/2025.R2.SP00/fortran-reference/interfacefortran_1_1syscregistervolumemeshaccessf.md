---
title: "Interface fortran::syscregistervolumemeshaccessf"
---

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 566)

Provide an interface to register volume mesh access.



## Members

* [syscregistervolumemeshaccessf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscregistervolumemeshaccessf)

## Public functions

<a id="interfacefortran_1_1syscregistervolumemeshaccessf_1ac79c4c99feafc1d4930df035071fee9e"></a>
### Function syscregistervolumemeshaccessf

![][public]

```fortran
type(syscerrorf) function syscregistervolumemeshaccessf(dataAccess)
```

Provide a function to register volume mesh access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to SyscVolumeMeshAccessF interface.


**Returns**:

a <code>SyscErrorF</code> type for error checking.



**Parameters**:

* dataAccessdataAccess

**Return type**: type([syscerrorf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)