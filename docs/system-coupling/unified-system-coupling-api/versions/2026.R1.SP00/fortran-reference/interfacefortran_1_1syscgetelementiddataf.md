# Interface fortran::syscgetelementiddataf

![][Fortran]
![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 284)





## Members

* [syscgetelementiddataf](interfacefortran_1_1syscgetelementiddataf.md#interfacefortran_1_1syscgetelementiddataf_1abc83c80a971a891dc176201dafb54b8c)
* [syscgetelementiddataf\_empty](interfacefortran_1_1syscgetelementiddataf.md#interfacefortran_1_1syscgetelementiddataf_1a06d46b003d0cb5bb92ec4263f5a53feb)

## Public functions

<a id="interfacefortran_1_1syscgetelementiddataf_1a06d46b003d0cb5bb92ec4263f5a53feb"></a>
### Function syscgetelementiddataf\_empty

![][public]


```fortran
type(syscelementiddataf) function syscgetelementiddataf_empty()
```








**Return type**: type([syscelementiddataf](structfortran_1_1syscelementiddataf.md#structfortran_1_1syscelementiddataf)) function

<a id="interfacefortran_1_1syscgetelementiddataf_1abc83c80a971a891dc176201dafb54b8c"></a>
### Function syscgetelementiddataf

![][public]


```fortran
type(syscelementiddataf) function syscgetelementiddataf(elementids)
```








**Parameters**:

* elementidstype([syscoutputintegerdataf](structfortran_1_1syscoutputintegerdataf.md#structfortran_1_1syscoutputintegerdataf)), intent(in)

**Return type**: type([syscelementiddataf](structfortran_1_1syscelementiddataf.md#structfortran_1_1syscelementiddataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)