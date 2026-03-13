# Interface fortran::syscgetcelliddataf

![][Fortran]
![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 250)





## Members

* [syscgetcelliddataf](interfacefortran_1_1syscgetcelliddataf.md#interfacefortran_1_1syscgetcelliddataf_1a95dc1931b339bbbc2303964975cca554)
* [syscgetcelliddataf\_empty](interfacefortran_1_1syscgetcelliddataf.md#interfacefortran_1_1syscgetcelliddataf_1a61d27cce7825bf31a339ef02bdfa26bf)

## Public functions

<a id="interfacefortran_1_1syscgetcelliddataf_1a61d27cce7825bf31a339ef02bdfa26bf"></a>
### Function syscgetcelliddataf\_empty

![][public]


```fortran
type(sysccelliddataf) function syscgetcelliddataf_empty()
```








**Return type**: type([sysccelliddataf](structfortran_1_1sysccelliddataf.md#structfortran_1_1sysccelliddataf)) function

<a id="interfacefortran_1_1syscgetcelliddataf_1a95dc1931b339bbbc2303964975cca554"></a>
### Function syscgetcelliddataf

![][public]


```fortran
type(sysccelliddataf) function syscgetcelliddataf(cellids)
```








**Parameters**:

* cellidstype([syscoutputintegerdataf](structfortran_1_1syscoutputintegerdataf.md#structfortran_1_1syscoutputintegerdataf)), intent(in)

**Return type**: type([sysccelliddataf](structfortran_1_1sysccelliddataf.md#structfortran_1_1sysccelliddataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)