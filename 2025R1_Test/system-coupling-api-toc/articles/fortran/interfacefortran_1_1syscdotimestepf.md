# Interface fortran::syscdotimestepf

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 662)

Provide an interface to check whether to do another coupling time step.



## Members

* [syscdotimestepf](interfacefortran_1_1syscdotimestepf.md#interfacefortran_1_1syscdotimestepf_1a9b644720595aa300c0da2f01500d0b8a)

## Public functions

<a id="interfacefortran_1_1syscdotimestepf_1a9b644720595aa300c0da2f01500d0b8a"></a>
### Function syscdotimestepf

![][public]

```fortran
logical function syscdotimestepf()
```

Provide a function to check whether to do a coupling time step.

This function should be called to check if another coupling time step should be done. If the previous coupling time step is finished and another time step should be performed, then calling this function will tell System Coupling that the coupling participant is going to advance to the next time step (i.e. calling syscDoTimeStepF() will cause syscDoIterationF() to change from returning false to returning true, under the conditions described above).





This function only makes sense for transient analysis. It will always return false for steady analysis.






**Returns**:

true if another coupling time step is required, otherwise it returns false.



**Return type**: logical function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)