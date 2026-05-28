---
title: "Interface fortran::syscgetinputvariablef"
---

![][Fortran]
![][public]

**Definition**: `syscRegionF.fi` (line 182)

Provide an interface to return an input variable.



## Members

* [syscgetinputvariablef](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscgetinputvariablef)

## Public functions

<a id="interfacefortran_1_1syscgetinputvariablef_1a7346cda68038880dbd5f690e5a7f5054"></a>
### Function syscgetinputvariablef

![][public]

```fortran
type(syscvariablef) function syscgetinputvariablef(region, index)
```

Return an input variable.

**Parameters**:

* **region**: - region
* **index**: - region index


**Returns**:

Variable at specified index.



**Parameters**:

* regionregion
* indexindex

**Return type**: type([syscvariablef](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscvariablef)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)