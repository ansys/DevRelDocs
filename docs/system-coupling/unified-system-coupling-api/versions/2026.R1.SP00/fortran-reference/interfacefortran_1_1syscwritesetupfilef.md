# Interface fortran::syscwritesetupfilef

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 866)

Provide an interface to write the setup file.



## Members

* [syscwritesetupfilef](interfacefortran_1_1syscwritesetupfilef.md#interfacefortran_1_1syscwritesetupfilef_1a9de821a238753f360282640b90837f4a)

## Public functions

<a id="interfacefortran_1_1syscwritesetupfilef_1a9de821a238753f360282640b90837f4a"></a>
### Function syscwritesetupfilef

![][public]


```fortran
logical function syscwritesetupfilef(setupfileinfo)
```


Provide a function to write the setup file.

This function can be used to generate a System Coupling setup file, which contains participant's setup information. It should be called after calling syscCompleteCouplingSetupF.






**Parameters**:

* **setupFileInfo**: - setup file info.


**Returns**:

true if the setup file was successfully written, and false otherwise.



**Parameters**:

* setupfileinfotype([syscsetupfileinfof](structfortran_1_1syscsetupfileinfof.md#structfortran_1_1syscsetupfileinfof)), intent(in)

**Return type**: logical function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)