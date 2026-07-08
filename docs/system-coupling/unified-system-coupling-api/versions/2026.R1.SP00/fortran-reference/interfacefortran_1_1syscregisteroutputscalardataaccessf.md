# Interface fortran::syscregisteroutputscalardataaccessf

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 459)

Provide an interface to register output scalar data.



## Members

* [syscregisteroutputscalardataaccessf](interfacefortran_1_1syscregisteroutputscalardataaccessf.md#interfacefortran_1_1syscregisteroutputscalardataaccessf_1a6e600bba7913fad2d337e158fa783d79)

## Public functions

<a id="interfacefortran_1_1syscregisteroutputscalardataaccessf_1a6e600bba7913fad2d337e158fa783d79"></a>
### Function syscregisteroutputscalardataaccessf

![][public]


```fortran
type(syscerrorf) function syscregisteroutputscalardataaccessf(dataaccess)
```


Provide a function to register output scalar data access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to SyscOutputScalarDataAccessF interface.


**Returns**:

a <code>SyscErrorF</code> type for error checking.



**Parameters**:

* dataaccessprocedure([syscoutputscalardataaccessf](interfacefortran_1_1syscoutputscalardataaccessf.md#interfacefortran_1_1syscoutputscalardataaccessf))

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)