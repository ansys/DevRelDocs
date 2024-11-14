# Interface fortran::syscaddinputvariablef

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 265)

Provide an interface to add an input variable.



## Members

* [syscaddinputvariablef](interfacefortran_1_1syscaddinputvariablef.md#interfacefortran_1_1syscaddinputvariablef_1ad4548778948f68041711cd36c26aca0e)

## Public functions

<a id="interfacefortran_1_1syscaddinputvariablef_1ad4548778948f68041711cd36c26aca0e"></a>
### Function syscaddinputvariablef

![][public]

```fortran
type(syscerrorf) function syscaddinputvariablef(reg, var)
```

Provide a function to add an input variable to the region.

If this variable has already been added to the region as an input variable, then this call will have no effect.





If a different variable with the same name has already been added to the region as an input variable, then an error will be returned.





If a variable with the same name has already been added to the region as an output variable, then an error will be returned.





If the variable name contains invalid characters, then an error will be returned.





If the region discretization type is point cloud, then the location of the variable added to this region is insignificant.






**Parameters**:

* **reg**: Region to which the input variable is to be added.
* **var**: Variable whose values are provided by System Coupling and consumed by the participant.


**Returns**:

a <code>SyscErrorF</code> type for error checking.



**Parameters**:

* regreg
* varvar

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)