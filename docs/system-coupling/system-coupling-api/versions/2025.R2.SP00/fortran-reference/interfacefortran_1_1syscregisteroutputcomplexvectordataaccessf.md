---
title: "Interface fortran::syscregisteroutputcomplexvectordataaccessf"
---

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 523)

Provide an interface to register output complex vector data access.



## Members

* [syscregisteroutputcomplexvectordataaccessf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscregisteroutputcomplexvectordataaccessf)

## Public functions

<a id="interfacefortran_1_1syscregisteroutputcomplexvectordataaccessf_1a18475061cfe59cb773c5c88c7dc43a09"></a>
### Function syscregisteroutputcomplexvectordataaccessf

![][public]

```fortran
type(syscerrorf) function syscregisteroutputcomplexvectordataaccessf(dataAccess)
```

Provide a function to register output complexvector data access.

**Parameters**:

* **dataAccess**: - a pointer to the callback function.


**Returns**:

a <code>SyscErrorF</code> type for error checking.



**Parameters**:

* dataAccessdataAccess

**Return type**: type([syscerrorf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)