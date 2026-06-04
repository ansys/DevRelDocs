# Interface fortran::syscregisterinputscalardataaccessf

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 417)

Provide an interface to register input scalar data access.



## Members

* [syscregisterinputscalardataaccessf](interfacefortran_1_1syscregisterinputscalardataaccessf.md#interfacefortran_1_1syscregisterinputscalardataaccessf_1ad15a524159de688be522c799ff8da3aa)

## Public functions

<a id="interfacefortran_1_1syscregisterinputscalardataaccessf_1ad15a524159de688be522c799ff8da3aa"></a>
### Function syscregisterinputscalardataaccessf

![][public]


```fortran
type(syscerrorf) function syscregisterinputscalardataaccessf(dataaccess)
```


Provide a function to register input scalar data access.

**Parameters**:

* **dataAccess**: - a pointer to a function that conforms to SyscInputScalarDataAccessF interface.


**Returns**:

a <code>SyscErrorF</code> type for error checking.



**Parameters**:

* dataaccessprocedure([syscinputscalardataaccessf](interfacefortran_1_1syscinputscalardataaccessf.md#interfacefortran_1_1syscinputscalardataaccessf))

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)