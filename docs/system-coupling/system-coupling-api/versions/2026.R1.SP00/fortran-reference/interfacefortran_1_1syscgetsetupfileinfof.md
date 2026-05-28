---
title: "Interface fortran::syscgetsetupfileinfof"
---

![][Fortran]
![][public]

**Definition**: `syscCommonTypesF.fi` (line 375)

Provide an interface to get a System Coupling setup file info type.



## Members

* [syscgetsetupfileinfof](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/interfacefortran_1_1syscgetsetupfileinfof)

## Public functions

<a id="interfacefortran_1_1syscgetsetupfileinfof_1abe48d99971ec8f83f367fdb7a87dfed3"></a>
### Function syscgetsetupfileinfof

![][public]

```fortran
type(syscsetupfileinfof) function syscgetsetupfileinfof(setupFileName)
```

Provide a function to create SetupFileInfoF type.

**Parameters**:

* **setupFileName**: Setup file name.


**Returns**:

a SyscSetupFileInfoF type



**Parameters**:

* setupFileNamesetupFileName

**Return type**: type([syscsetupfileinfof](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/structfortran_1_1syscsetupfileinfof)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)