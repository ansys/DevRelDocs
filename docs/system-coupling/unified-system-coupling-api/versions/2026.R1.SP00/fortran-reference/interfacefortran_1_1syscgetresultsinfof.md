# Interface fortran::syscgetresultsinfof

![][Fortran]
![][public]

**Definition**: `syscCommonTypesF.fi` (line 411)

Provide an interface to get a System Coupling results info type.



## Members

* [syscgetresultsinfof](interfacefortran_1_1syscgetresultsinfof.md#interfacefortran_1_1syscgetresultsinfof_1aedf7568887b92f0cfe772a39febbccac)

## Public functions

<a id="interfacefortran_1_1syscgetresultsinfof_1aedf7568887b92f0cfe772a39febbccac"></a>
### Function syscgetresultsinfof

![][public]


```fortran
type(syscresultsinfof) function syscgetresultsinfof(basefilename)
```


Provide a function to create SyscResultsInfoF type.

**Parameters**:

* **baseFileName**: - base file name.


**Returns**:

a SyscResultsInfoF type



**Parameters**:

* basefilenamecharacter(len=*), intent(in)

**Return type**: type([syscresultsinfof](structfortran_1_1syscresultsinfof.md#structfortran_1_1syscresultsinfof)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)