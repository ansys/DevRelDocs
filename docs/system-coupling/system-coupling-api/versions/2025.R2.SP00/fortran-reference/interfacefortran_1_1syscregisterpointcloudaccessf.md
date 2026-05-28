---
title: "Interface fortran::syscregisterpointcloudaccessf"
---

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 587)

Provide an interface to register point cloud access.



## Members

* [syscregisterpointcloudaccessf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscregisterpointcloudaccessf)

## Public functions

<a id="interfacefortran_1_1syscregisterpointcloudaccessf_1af933d1b622485436686e9a3296d209dc"></a>
### Function syscregisterpointcloudaccessf

![][public]

```fortran
type(syscerrorf) function syscregisterpointcloudaccessf(dataAccess)
```

Provide a function to register point cloud access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to SyscPointCloudAccessF interface.


**Returns**:

a <code>SyscErrorF</code> type for error checking.



**Parameters**:

* dataAccessdataAccess

**Return type**: type([syscerrorf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)