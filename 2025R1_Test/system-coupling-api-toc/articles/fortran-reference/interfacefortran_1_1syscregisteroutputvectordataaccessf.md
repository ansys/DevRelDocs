# Interface fortran::syscregisteroutputvectordataaccessf

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 479)

Provide an interface to register output vector data access.



## Members

* [syscregisteroutputvectordataaccessf](interfacefortran_1_1syscregisteroutputvectordataaccessf.md#interfacefortran_1_1syscregisteroutputvectordataaccessf_1a6592bbd8cf292782b35886dd769a0b3f)

## Public functions

<a id="interfacefortran_1_1syscregisteroutputvectordataaccessf_1a6592bbd8cf292782b35886dd769a0b3f"></a>
### Function syscregisteroutputvectordataaccessf

![][public]

```fortran
type(syscerrorf) function syscregisteroutputvectordataaccessf(dataAccess)
```

Provide a function to register output vector data access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to SyscOutputVectorDataAccessF interface.


**Returns**:

a <code>SyscErrorF</code> type for error checking.



**Parameters**:

* dataAccessdataAccess

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)