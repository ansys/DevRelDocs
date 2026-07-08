# Interface fortran::syscaddsideoneregionf

![][Fortran]
![][public]

**Definition**: `syscCouplingInterfaceF.fi` (line 66)

Provide an interface to add side one region.



## Members

* [syscaddsideoneregionf](interfacefortran_1_1syscaddsideoneregionf.md#interfacefortran_1_1syscaddsideoneregionf_1a6a2f1fe1b0c810365fec64d98be79d79)

## Public functions

<a id="interfacefortran_1_1syscaddsideoneregionf_1a6a2f1fe1b0c810365fec64d98be79d79"></a>
### Function syscaddsideoneregionf

![][public]

```fortran
type(syscerrorf) function syscaddsideoneregionf(interface, region)
```

Add region to side one of the couping interface.

If this region has already been added to the interface on side one, then this call will have no effect.





If a different region with the same name has already been added to the interface on side one, then a runtime error will be thrown.





If a region with the same name has already been added to the interface on side two, then a runtime error will be thrown.





If the region name contains invalid characters, a runtime error will be thrown.






**Parameters**:

* **interface**: Coupling interface to which the output variable is to be added.
* **region**: Region to be added to side one of the interface.



**Parameters**:

* interfaceinterface
* regionregion

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)