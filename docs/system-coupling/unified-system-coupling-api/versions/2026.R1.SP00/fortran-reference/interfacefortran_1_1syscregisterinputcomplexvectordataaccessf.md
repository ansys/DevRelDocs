# Interface fortran::syscregisterinputcomplexvectordataaccessf

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 500)

Provide an interface to register input complex vector data access.



## Members

* [syscregisterinputcomplexvectordataaccessf](interfacefortran_1_1syscregisterinputcomplexvectordataaccessf.md#interfacefortran_1_1syscregisterinputcomplexvectordataaccessf_1a1ca4f059d3d7ec2b4243b8b2adbd47c7)

## Public functions

<a id="interfacefortran_1_1syscregisterinputcomplexvectordataaccessf_1a1ca4f059d3d7ec2b4243b8b2adbd47c7"></a>
### Function syscregisterinputcomplexvectordataaccessf

![][public]


```fortran
type(syscerrorf) function syscregisterinputcomplexvectordataaccessf(dataaccess)
```


Provide a function to register input complexvector data access.

**Parameters**:

* **dataAccess**: - a pointer to the callback function.


**Returns**:

a <code>SyscErrorF</code> type for error checking.



**Parameters**:

* dataaccessprocedure([syscinputcomplexvectordataaccessf](interfacefortran_1_1syscinputcomplexvectordataaccessf.md#interfacefortran_1_1syscinputcomplexvectordataaccessf))

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)