# Interface fortran::syscaddregionf

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 177)

Provide an interface to add a region.



## Members

* [syscaddregionf](interfacefortran_1_1syscaddregionf.md#interfacefortran_1_1syscaddregionf_1a76e91c428f581da4c6695c7a66027839)

## Public functions

<a id="interfacefortran_1_1syscaddregionf_1a76e91c428f581da4c6695c7a66027839"></a>
### Function syscaddregionf

![][public]

```fortran
type(syscerrorf) function syscaddregionf(reg)
```

Provide a function to add a region to be used in a coupled analysis.

If this region has already been added, then this call will have no effect.





If a different region with the same has already been added, then an error will be returned.





If the region name contains invalid characters, then a runtime eror will be thrown.






**Parameters**:

* **reg**: - region to be added


**Returns**:

a <code>SyscErrorF</code> type for error checking.



**Parameters**:

* regreg

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)