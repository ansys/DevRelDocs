# Interface fortran::syscregisterinputvectordataaccessf

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 438)

Provide an interface to register input vector data access.



## Members

* [syscregisterinputvectordataaccessf](interfacefortran_1_1syscregisterinputvectordataaccessf.md#interfacefortran_1_1syscregisterinputvectordataaccessf_1a88e22ccf43973eeb0b20751ba7614476)

## Public functions

<a id="interfacefortran_1_1syscregisterinputvectordataaccessf_1a88e22ccf43973eeb0b20751ba7614476"></a>
### Function syscregisterinputvectordataaccessf

![][public]


```fortran
type(syscerrorf) function syscregisterinputvectordataaccessf(dataaccess)
```


Provide a function to register input vector data access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to SyscInputVectorDataAccessF interface.


**Returns**:

a <code>SyscErrorF</code> type for error checking.



**Parameters**:

* dataaccessprocedure([syscinputvectordataaccessf](interfacefortran_1_1syscinputvectordataaccessf.md#interfacefortran_1_1syscinputvectordataaccessf))

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)