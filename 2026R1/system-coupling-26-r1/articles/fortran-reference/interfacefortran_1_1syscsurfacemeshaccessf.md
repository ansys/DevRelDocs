# Interface fortran::syscsurfacemeshaccessf

![][Fortran]
![][public]

**Definition**: `syscFunctionTypesF.fi` (line 132)

Provide function interface for access to surface mesh.



## Members

* [syscsurfacemeshaccessf](interfacefortran_1_1syscsurfacemeshaccessf.md#interfacefortran_1_1syscsurfacemeshaccessf_1a7ba1201328606418ecbe3bf9f5cc823b)

## Public functions

<a id="interfacefortran_1_1syscsurfacemeshaccessf_1a7ba1201328606418ecbe3bf9f5cc823b"></a>
### Function syscsurfacemeshaccessf

![][public]


```fortran
type(syscsurfacemeshf) function syscsurfacemeshaccessf(regionname)
```


Provide a function prototype for access to surface mesh.

**Parameters**:

* **regionName**: - the name of the region



**Parameters**:

* regionnamecharacter(len=syscstrlen), intent(in)

**Return type**: type([syscsurfacemeshf](structfortran_1_1syscsurfacemeshf.md#structfortran_1_1syscsurfacemeshf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)