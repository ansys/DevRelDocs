# Interface fortran::syscgetcurrenttimestepf

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 695)

Provide an interface to get current time step.



## Members

* [syscgetcurrenttimestepf](interfacefortran_1_1syscgetcurrenttimestepf.md#interfacefortran_1_1syscgetcurrenttimestepf_1ae938904830076cfae024948f393b1443)

## Public functions

<a id="interfacefortran_1_1syscgetcurrenttimestepf_1ae938904830076cfae024948f393b1443"></a>
### Function syscgetcurrenttimestepf

![][public]

```fortran
type(sysctimestepf) function syscgetcurrenttimestepf()
```

Provide a function to get current time step.

This function returns a time step struct, which contains time step number, start time, and time step size for the current coupling time step.





A default value (time step number 0, start time 0.0, time step size 0.0) is returned if this function is called outside the coupled analysis loop or if the analysis is steady.






**Returns**:

a <code>SyscTimeStepF</code> type for current time step



**Return type**: type([sysctimestepf](structfortran_1_1sysctimestepf.md#structfortran_1_1sysctimestepf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)