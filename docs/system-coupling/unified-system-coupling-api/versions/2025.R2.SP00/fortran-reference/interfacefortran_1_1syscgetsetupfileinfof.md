# Interface fortran::syscgetsetupfileinfof

![][Fortran]
![][public]

**Definition**: `syscCommonTypesF.fi` (line 375)

Provide an interface to get a System Coupling setup file info type.



## Members

* [syscgetsetupfileinfof](interfacefortran_1_1syscgetsetupfileinfof.md#interfacefortran_1_1syscgetsetupfileinfof_1abe48d99971ec8f83f367fdb7a87dfed3)

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

**Return type**: type([syscsetupfileinfof](structfortran_1_1syscsetupfileinfof.md#structfortran_1_1syscsetupfileinfof)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)