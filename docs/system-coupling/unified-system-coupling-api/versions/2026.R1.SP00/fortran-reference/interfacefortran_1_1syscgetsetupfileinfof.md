# Interface fortran::syscgetsetupfileinfof

![][Fortran]
![][public]

**Definition**: `syscCommonTypesF.fi` (line 376)

Provide an interface to get a System Coupling setup file info type.



## Members

* [syscgetsetupfileinfof](interfacefortran_1_1syscgetsetupfileinfof.md#interfacefortran_1_1syscgetsetupfileinfof_1a229b1f07d15719212cf4a6f65e0a016a)

## Public functions

<a id="interfacefortran_1_1syscgetsetupfileinfof_1a229b1f07d15719212cf4a6f65e0a016a"></a>
### Function syscgetsetupfileinfof

![][public]


```fortran
type(syscsetupfileinfof) function syscgetsetupfileinfof(setupfilename)
```


Provide a function to create SetupFileInfoF type.

**Parameters**:

* **setupFileName**: Setup file name.


**Returns**:

a SyscSetupFileInfoF type



**Parameters**:

* setupfilenamecharacter(len=*), intent(in)

**Return type**: type([syscsetupfileinfof](structfortran_1_1syscsetupfileinfof.md#structfortran_1_1syscsetupfileinfof)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)