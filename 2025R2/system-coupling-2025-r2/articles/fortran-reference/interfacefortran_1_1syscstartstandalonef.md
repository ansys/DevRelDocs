# Interface fortran::syscstartstandalonef

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 52)

Provide a function interface to start in standalone mode.



## Members

* [syscstartstandaloneparallelf](interfacefortran_1_1syscstartstandalonef.md#interfacefortran_1_1syscstartstandalonef_1ab6dcb024f6cf88d4c3125c6066a4152d)

## Public functions

<a id="interfacefortran_1_1syscstartstandalonef_1ab6dcb024f6cf88d4c3125c6066a4152d"></a>
### Function syscstartstandaloneparallelf

![][public]

```fortran
type(syscerrorf) function syscstartstandaloneparallelf(communicator)
```

Provide a function to start standalone mode in parallel.

**Parameters**:

* **communicator**: MPI communicator.

This will initialize the participant library in standalone mode and will use the provided MPI communicator for all parallel communication.





Note that if the MPI communicator is <code>MPI_COMM_WORLD</code>, then it is not necessary to call this function.



**Parameters**:

* communicatorcommunicator

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)