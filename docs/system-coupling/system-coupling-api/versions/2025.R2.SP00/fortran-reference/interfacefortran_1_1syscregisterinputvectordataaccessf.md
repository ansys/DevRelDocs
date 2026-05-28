---
title: "Interface fortran::syscregisterinputvectordataaccessf"
---

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 438)

Provide an interface to register input vector data access.



## Members

* [syscregisterinputvectordataaccessf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscregisterinputvectordataaccessf)

## Public functions

<a id="interfacefortran_1_1syscregisterinputvectordataaccessf_1a14140ef7064c644490baf161d6958081"></a>
### Function syscregisterinputvectordataaccessf

![][public]

```fortran
type(syscerrorf) function syscregisterinputvectordataaccessf(dataAccess)
```

Provide a function to register input vector data access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to SyscInputVectorDataAccessF interface.


**Returns**:

a <code>SyscErrorF</code> type for error checking.



**Parameters**:

* dataAccessdataAccess

**Return type**: type([syscerrorf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)