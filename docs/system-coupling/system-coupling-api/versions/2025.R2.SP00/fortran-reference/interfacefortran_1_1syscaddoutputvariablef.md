# Interface fortran::syscaddoutputvariablef

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 311)

Provide an interface to add an output variable.



## Members

* [syscaddoutputvariablef](interfacefortran_1_1syscaddoutputvariablef.md#interfacefortran_1_1syscaddoutputvariablef_1a9b2b363022ddacc75a4151891aed83b8)

## Public functions

<a id="interfacefortran_1_1syscaddoutputvariablef_1a9b2b363022ddacc75a4151891aed83b8"></a>
### Function syscaddoutputvariablef

![][public]

```fortran
type(syscerrorf) function syscaddoutputvariablef(reg, var)
```

Provide a function to add an output variable to the region.

If this variable has already been added to the region as an output variable, then this call will have no effect.





If a different variable with the same name has already been added to the region as an output variable, then an error will be returned.





If a variable with the same name has already been added to the region as an input variable, then an error will be returned.





If the variable name contains invalid characters, then an error will be returned.





If the region discretization type is point cloud, then the location of the variable added to this region is insignificant.






**Parameters**:

* **reg**: Region to which the output variable is to be added.
* **var**: Variable whose values are consumed by System Coupling and provided by the participant.


**Returns**:

a <code>SyscErrorF</code> type for error checking.



**Parameters**:

* regreg
* varvar

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)