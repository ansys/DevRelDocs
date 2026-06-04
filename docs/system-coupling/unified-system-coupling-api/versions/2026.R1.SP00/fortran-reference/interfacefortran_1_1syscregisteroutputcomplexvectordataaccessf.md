# Interface fortran::syscregisteroutputcomplexvectordataaccessf

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 523)

Provide an interface to register output complex vector data access.



## Members

* [syscregisteroutputcomplexvectordataaccessf](interfacefortran_1_1syscregisteroutputcomplexvectordataaccessf.md#interfacefortran_1_1syscregisteroutputcomplexvectordataaccessf_1aacbe2f7f7b6d8ea64ab328f88e33516d)

## Public functions

<a id="interfacefortran_1_1syscregisteroutputcomplexvectordataaccessf_1aacbe2f7f7b6d8ea64ab328f88e33516d"></a>
### Function syscregisteroutputcomplexvectordataaccessf

![][public]


```fortran
type(syscerrorf) function syscregisteroutputcomplexvectordataaccessf(dataaccess)
```


Provide a function to register output complexvector data access.

**Parameters**:

* **dataAccess**: - a pointer to the callback function.


**Returns**:

a <code>SyscErrorF</code> type for error checking.



**Parameters**:

* dataaccessprocedure([syscoutputcomplexvectordataaccessf](interfacefortran_1_1syscoutputcomplexvectordataaccessf.md#interfacefortran_1_1syscoutputcomplexvectordataaccessf))

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)