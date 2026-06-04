# Interface fortran::syscgetoutputvariablef

![][Fortran]
![][public]

**Definition**: `syscRegionF.fi` (line 232)

Provide an interface to return an output variable.



## Members

* [syscgetoutputvariablef](interfacefortran_1_1syscgetoutputvariablef.md#interfacefortran_1_1syscgetoutputvariablef_1a470e9f0eb67dd6b6c733fa76a0f44f3b)

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

**Return type**: type([syscvariablef](structfortran_1_1syscvariablef.md#structfortran_1_1syscvariablef)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)