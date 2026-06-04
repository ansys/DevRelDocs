# Interface fortran::syscgetfacedataf

![][Fortran]
![][public]

**Definition**: `syscMeshDefinitionF.fi` (line 323)





## Members

* [syscgetfacedataf](interfacefortran_1_1syscgetfacedataf.md#interfacefortran_1_1syscgetfacedataf_1ae9a6152011424543a301b1091a863f5b)
* [syscgetfacedataf\_cn](interfacefortran_1_1syscgetfacedataf.md#interfacefortran_1_1syscgetfacedataf_1a6a82674e043b7d6ce5289152b6cdaf5b)
* [syscgetfacedataf\_itn](interfacefortran_1_1syscgetfacedataf.md#interfacefortran_1_1syscgetfacedataf_1ac44052176ff2892bea55a1cf4151883a)

## Public functions

<a id="interfacefortran_1_1syscgetfacedataf_1ae9a6152011424543a301b1091a863f5b"></a>
### Function syscgetfacedataf

![][public]


```fortran
type(syscfacedataf) function syscgetfacedataf()
```








**Return type**: type([syscfacedataf](structfortran_1_1syscfacedataf.md#structfortran_1_1syscfacedataf)) function

<a id="interfacefortran_1_1syscgetfacedataf_1ac44052176ff2892bea55a1cf4151883a"></a>
### Function syscgetfacedataf\_itn

![][public]


```fortran
type(syscfacedataf) function syscgetfacedataf_itn(faceids, facetypes, facenodeconnectivity)
```








**Parameters**:

* faceidstype([syscelementiddataf](structfortran_1_1syscelementiddataf.md#structfortran_1_1syscelementiddataf)), intent(in)
* facetypestype([syscelementtypedataf](structfortran_1_1syscelementtypedataf.md#structfortran_1_1syscelementtypedataf)), intent(in)
* facenodeconnectivitytype([syscelementnodeconnectivitydataf](structfortran_1_1syscelementnodeconnectivitydataf.md#structfortran_1_1syscelementnodeconnectivitydataf)), intent(in)

**Return type**: type([syscfacedataf](structfortran_1_1syscfacedataf.md#structfortran_1_1syscfacedataf)) function

<a id="interfacefortran_1_1syscgetfacedataf_1a6a82674e043b7d6ce5289152b6cdaf5b"></a>
### Function syscgetfacedataf\_cn

![][public]


```fortran
type(syscfacedataf) function syscgetfacedataf_cn(facenodecounts, facenodeconnectivity)
```








**Parameters**:

* facenodecountstype([syscelementnodecountdataf](structfortran_1_1syscelementnodecountdataf.md#structfortran_1_1syscelementnodecountdataf)), intent(in)
* facenodeconnectivitytype([syscelementnodeconnectivitydataf](structfortran_1_1syscelementnodeconnectivitydataf.md#structfortran_1_1syscelementnodeconnectivitydataf)), intent(in)

**Return type**: type([syscfacedataf](structfortran_1_1syscfacedataf.md#structfortran_1_1syscfacedataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)