# Interface fortran::syscgetresultsinfof

![][Fortran]
![][public]

**Definition**: `syscCommonTypesF.fi` (line 410)

Provide an interface to get a System Coupling results info type.



## Members

* [syscgetresultsinfof](interfacefortran_1_1syscgetresultsinfof.md#interfacefortran_1_1syscgetresultsinfof_1a0f2168e1376a79a7ccfc251f63f008d2)

## Public functions

<a id="interfacefortran_1_1syscgetresultsinfof_1a0f2168e1376a79a7ccfc251f63f008d2"></a>
### Function syscgetresultsinfof

![][public]

```fortran
type(syscresultsinfof) function syscgetresultsinfof(baseFileName)
```

Provide a function to create SyscResultsInfoF type.

**Parameters**:

* **baseFileName**: - base file name.


**Returns**:

a SyscResultsInfoF type



**Parameters**:

* baseFileNamebaseFileName

**Return type**: type([syscresultsinfof](structfortran_1_1syscresultsinfof.md#structfortran_1_1syscresultsinfof)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)