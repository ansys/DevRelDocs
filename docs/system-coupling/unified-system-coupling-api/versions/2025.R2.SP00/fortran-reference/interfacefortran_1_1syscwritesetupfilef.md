# Interface fortran::syscwritesetupfilef

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 866)

Provide an interface to write the setup file.



## Members

* [syscwritesetupfilef](interfacefortran_1_1syscwritesetupfilef.md#interfacefortran_1_1syscwritesetupfilef_1a1d34ce9930173c4e42050e52d940770b)

## Public functions

<a id="interfacefortran_1_1syscwritesetupfilef_1a1d34ce9930173c4e42050e52d940770b"></a>
### Function syscwritesetupfilef

![][public]

```fortran
logical function syscwritesetupfilef(setupFileInfo)
```

Provide a function to write the setup file.

This function can be used to generate a System Coupling setup file, which contains participant's setup information. It should be called after calling syscCompleteCouplingSetupF.






**Parameters**:

* **setupFileInfo**: - setup file info.


**Returns**:

true if the setup file was successfully written, and false otherwise.



**Parameters**:

* setupFileInfosetupFileInfo

**Return type**: logical function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)