---
title: "Interface fortran::syscgetoutputvariablef"
---

![][Fortran]
![][public]

**Definition**: `syscRegionF.fi` (line 232)

Provide an interface to return an output variable.



## Members

* [syscgetoutputvariablef](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/interfacefortran_1_1syscgetoutputvariablef)

## Public functions

<a id="interfacefortran_1_1syscgetoutputvariablef_1a470e9f0eb67dd6b6c733fa76a0f44f3b"></a>
### Function syscgetoutputvariablef

![][public]

```fortran
type(syscvariablef) function syscgetoutputvariablef(region, index)
```

Return an output variable.

**Parameters**:

* **region**: - region
* **index**: - region index


**Returns**:

Variable at specified index.



**Parameters**:

* regionregion
* indexindex

**Return type**: type([syscvariablef](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/structfortran_1_1syscvariablef)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)