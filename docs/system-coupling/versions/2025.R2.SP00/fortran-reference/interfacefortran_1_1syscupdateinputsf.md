# Interface fortran::syscupdateinputsf

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 725)

Provide an interface to update the input variables.



## Members

* [syscupdateinputsf](interfacefortran_1_1syscupdateinputsf.md#interfacefortran_1_1syscupdateinputsf_1a282cf35e41538096120e21e2e110f5c0)

## Public functions

<a id="interfacefortran_1_1syscupdateinputsf_1a282cf35e41538096120e21e2e110f5c0"></a>
### Function syscupdateinputsf

![][public]

```fortran
type(syscerrorf) function syscupdateinputsf()
```

Provide a function to update the input variables.

Solution data for all input variables will be updated. Depending on the defined interfaces, data will be transferred from another coupling participant solver, or from the opposite side of the same-participant coupling interface.





When doing cosimulation, this function must be called from inside the coupled analysis loop. It tells System Coupling that the participant is about to begin its solver iterations. All input variable data will be up-to-date after returning from this function. If any local coupling interfaces are defined, all corresponding input variable data will also be updated.





When doing same-participant mapping only (without cosimulation), this function should be called whenever input data needs to be brought up-to-date.



**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)