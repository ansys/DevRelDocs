# Interface fortran::syscgetnodedataf

![][Fortran]
![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 31)





## Members

* [syscgetnodedataf](interfacefortran_1_1syscgetnodedataf.md#interfacefortran_1_1syscgetnodedataf_1ab0c2e03306ceb3c4874622518edf3cef)
* [syscgetnodedataf\_c](interfacefortran_1_1syscgetnodedataf.md#interfacefortran_1_1syscgetnodedataf_1ae51ae4c08f838ee67325b2f61c1fe04e)
* [syscgetnodedataf\_ic](interfacefortran_1_1syscgetnodedataf.md#interfacefortran_1_1syscgetnodedataf_1a67e36ddde585dbf1176ec3c9314d5d9b)

## Public functions

<a id="interfacefortran_1_1syscgetnodedataf_1ab0c2e03306ceb3c4874622518edf3cef"></a>
### Function syscgetnodedataf

![][public]


```fortran
type(syscnodedataf) function syscgetnodedataf()
```








**Return type**: type([syscnodedataf](structfortran_1_1syscnodedataf.md#structfortran_1_1syscnodedataf)) function

<a id="interfacefortran_1_1syscgetnodedataf_1a67e36ddde585dbf1176ec3c9314d5d9b"></a>
### Function syscgetnodedataf\_ic

![][public]


```fortran
type(syscnodedataf) function syscgetnodedataf_ic(nodeids, nodecoords)
```








**Parameters**:

* nodeidstype([syscoutputintegerdataf](structfortran_1_1syscoutputintegerdataf.md#structfortran_1_1syscoutputintegerdataf)), intent(in)
* nodecoordstype([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)), intent(in)

**Return type**: type([syscnodedataf](structfortran_1_1syscnodedataf.md#structfortran_1_1syscnodedataf)) function

<a id="interfacefortran_1_1syscgetnodedataf_1ae51ae4c08f838ee67325b2f61c1fe04e"></a>
### Function syscgetnodedataf\_c

![][public]


```fortran
type(syscnodedataf) function syscgetnodedataf_c(nodecoords)
```








**Parameters**:

* nodecoordstype([syscoutputvectordataf](structfortran_1_1syscoutputvectordataf.md#structfortran_1_1syscoutputvectordataf)), intent(in)

**Return type**: type([syscnodedataf](structfortran_1_1syscnodedataf.md#structfortran_1_1syscnodedataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)