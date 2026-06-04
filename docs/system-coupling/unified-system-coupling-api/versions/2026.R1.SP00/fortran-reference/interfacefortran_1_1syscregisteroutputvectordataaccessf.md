# Interface fortran::syscregisteroutputvectordataaccessf

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 479)

Provide an interface to register output vector data access.



## Members

* [syscregisteroutputvectordataaccessf](interfacefortran_1_1syscregisteroutputvectordataaccessf.md#interfacefortran_1_1syscregisteroutputvectordataaccessf_1a02da524737720f3d9e7f3bcf9f9d6442)

## Public functions

<a id="interfacefortran_1_1syscregisteroutputvectordataaccessf_1a02da524737720f3d9e7f3bcf9f9d6442"></a>
### Function syscregisteroutputvectordataaccessf

![][public]


```fortran
type(syscerrorf) function syscregisteroutputvectordataaccessf(dataaccess)
```


Provide a function to register output vector data access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to SyscOutputVectorDataAccessF interface.


**Returns**:

a <code>SyscErrorF</code> type for error checking.



**Parameters**:

* dataaccessprocedure([syscoutputvectordataaccessf](interfacefortran_1_1syscoutputvectordataaccessf.md#interfacefortran_1_1syscoutputvectordataaccessf))

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)