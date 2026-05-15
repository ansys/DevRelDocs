# Interface fortran::syscvolumemeshaccessf

![][Fortran]
![][public]

**Definition**: `syscFunctionTypesF.fi` (line 147)

Provide function interface for access to volume mesh.



## Members

* [syscvolumemeshaccessf](interfacefortran_1_1syscvolumemeshaccessf.md#interfacefortran_1_1syscvolumemeshaccessf_1a66e485205b175c5209284df22fb87d7e)

## Public functions

<a id="interfacefortran_1_1syscvolumemeshaccessf_1a66e485205b175c5209284df22fb87d7e"></a>
### Function syscvolumemeshaccessf

![][public]


```fortran
type(syscvolumemeshf) function syscvolumemeshaccessf(regionname)
```


Provide a function prototype for access to volume mesh.

**Parameters**:

* **regionName**: - the name of the region



**Parameters**:

* regionnamecharacter(len=syscstrlen), intent(in)

**Return type**: type([syscvolumemeshf](structfortran_1_1syscvolumemeshf.md#structfortran_1_1syscvolumemeshf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)