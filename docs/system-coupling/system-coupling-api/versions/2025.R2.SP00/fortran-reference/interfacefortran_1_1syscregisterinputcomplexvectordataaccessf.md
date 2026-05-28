---
title: "Interface fortran::syscregisterinputcomplexvectordataaccessf"
---

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 500)

Provide an interface to register input complex vector data access.



## Members

* [syscregisterinputcomplexvectordataaccessf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscregisterinputcomplexvectordataaccessf)

## Public functions

<a id="interfacefortran_1_1syscregisterinputcomplexvectordataaccessf_1a34798d15bb59a7323ab5c31bdc740a21"></a>
### Function syscregisterinputcomplexvectordataaccessf

![][public]

```fortran
type(syscerrorf) function syscregisterinputcomplexvectordataaccessf(dataAccess)
```

Provide a function to register input complexvector data access.

**Parameters**:

* **dataAccess**: - a pointer to the callback function.


**Returns**:

a <code>SyscErrorF</code> type for error checking.



**Parameters**:

* dataAccessdataAccess

**Return type**: type([syscerrorf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)