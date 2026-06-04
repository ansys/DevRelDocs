# Interface fortran::syscgetfacecellconnectivitydataf

![][Fortran]
![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 213)





## Members

* [syscgetfacecellconnectivitydataf](interfacefortran_1_1syscgetfacecellconnectivitydataf.md#interfacefortran_1_1syscgetfacecellconnectivitydataf_1a43f49cb582008e64c9faaa61917648a2)
* [syscgetfacecellconnectivitydataf\_empty](interfacefortran_1_1syscgetfacecellconnectivitydataf.md#interfacefortran_1_1syscgetfacecellconnectivitydataf_1a2fad0cc937dff1f68861627e3e634149)

## Public functions

<a id="interfacefortran_1_1syscgetfacecellconnectivitydataf_1a2fad0cc937dff1f68861627e3e634149"></a>
### Function syscgetfacecellconnectivitydataf\_empty

![][public]


```fortran
type(syscfacecellconnectivitydataf) function syscgetfacecellconnectivitydataf_empty()
```








**Return type**: type([syscfacecellconnectivitydataf](structfortran_1_1syscfacecellconnectivitydataf.md#structfortran_1_1syscfacecellconnectivitydataf)) function

<a id="interfacefortran_1_1syscgetfacecellconnectivitydataf_1a43f49cb582008e64c9faaa61917648a2"></a>
### Function syscgetfacecellconnectivitydataf

![][public]


```fortran
type(syscfacecellconnectivitydataf) function syscgetfacecellconnectivitydataf(cell0ids, cell1ids)
```








**Parameters**:

* cell0idstype([syscoutputintegerdataf](structfortran_1_1syscoutputintegerdataf.md#structfortran_1_1syscoutputintegerdataf)), intent(in)
* cell1idstype([syscoutputintegerdataf](structfortran_1_1syscoutputintegerdataf.md#structfortran_1_1syscoutputintegerdataf)), intent(in)

**Return type**: type([syscfacecellconnectivitydataf](structfortran_1_1syscfacecellconnectivitydataf.md#structfortran_1_1syscfacecellconnectivitydataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)