# Interface fortran::syscregisterinputscalardataaccessf

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 417)

Provide an interface to register input scalar data access.



## Members

* [syscregisterinputscalardataaccessf](interfacefortran_1_1syscregisterinputscalardataaccessf.md#interfacefortran_1_1syscregisterinputscalardataaccessf_1ac02c967ea25012baa1d0fa6c7f8b2f56)

## Public functions

<a id="interfacefortran_1_1syscregisterinputscalardataaccessf_1ac02c967ea25012baa1d0fa6c7f8b2f56"></a>
### Function syscregisterinputscalardataaccessf

![][public]

```fortran
type(syscerrorf) function syscregisterinputscalardataaccessf(dataAccess)
```

Provide a function to register input scalar data access.

**Parameters**:

* **dataAccess**: - a pointer to a function that conforms to SyscInputScalarDataAccessF interface.


**Returns**:

a <code>SyscErrorF</code> type for error checking.



**Parameters**:

* dataAccessdataAccess

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)