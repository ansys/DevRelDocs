# Interface fortran::syscregistervolumemeshaccessf

![][Fortran]
![][public]

**Definition**: `syscSystemCouplingF.fi` (line 566)

Provide an interface to register volume mesh access.



## Members

* [syscregistervolumemeshaccessf](interfacefortran_1_1syscregistervolumemeshaccessf.md#interfacefortran_1_1syscregistervolumemeshaccessf_1af42f4d99edda21b00c2fb138f1826c02)

## Public functions

<a id="interfacefortran_1_1syscregistervolumemeshaccessf_1af42f4d99edda21b00c2fb138f1826c02"></a>
### Function syscregistervolumemeshaccessf

![][public]


```fortran
type(syscerrorf) function syscregistervolumemeshaccessf(dataaccess)
```


Provide a function to register volume mesh access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to SyscVolumeMeshAccessF interface.


**Returns**:

a <code>SyscErrorF</code> type for error checking.



**Parameters**:

* dataaccessprocedure([syscvolumemeshaccessf](interfacefortran_1_1syscvolumemeshaccessf.md#interfacefortran_1_1syscvolumemeshaccessf))

**Return type**: type([syscerrorf](structfortran_1_1syscerrorf.md#structfortran_1_1syscerrorf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)