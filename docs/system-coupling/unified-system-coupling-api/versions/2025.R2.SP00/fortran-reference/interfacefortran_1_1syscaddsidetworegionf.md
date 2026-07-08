# Interface fortran::syscaddsidetworegionf

![][Fortran]
![][public]

**Definition**: `syscCouplingInterfaceF.fi` (line 109)

Provide an interface to add side two region.



## Members

* [syscaddsidetworegionf](interfacefortran_1_1syscaddsidetworegionf.md#interfacefortran_1_1syscaddsidetworegionf_1a9bd8b8ff8727de23eabd530fef19e5ac)

## Public functions

<a id="interfacefortran_1_1syscaddsidetworegionf_1a9bd8b8ff8727de23eabd530fef19e5ac"></a>
### Function syscaddsidetworegionf

![][public]

```fortran
type(syscerrorf) function syscaddsidetworegionf(interface, region)
```

Add region to side two of the interface.

If this region has already been added to the interface on side two, then this call will have no effect.





If a different region with the same name has already been added to the interface on side two, then a runtime error will be thrown.





If a region with the same name has already been added to the interface on side one, then a runtime error will be thrown.





If the region name contains invalid characters, a runtime error will be thrown.






**Parameters**:

* **interface**: Coupling interface to which the output variable is to be added.
* **region**: Region to be added to side two of the interface.



**Parameters**:

* interfaceinterface
* regionregion

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)