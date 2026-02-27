# Interface fortran::syscgetinputcompactcomplexcompactvectordataf

![][Fortran]
![][public]

**Definition**: `syscInputComplexVectorDataF.fi` (line 56)

Provide an interface to get input complex vector data with compact storage for complex and vector components.



## Members

* [syscgetinputcompactcomplexcompactvectordataf\_c82d](interfacefortran_1_1syscgetinputcompactcomplexcompactvectordataf.md#interfacefortran_1_1syscgetinputcompactcomplexcompactvectordataf_1ac7fc75a8887a8ad9ac27847995a8250a)

## Public functions

<a id="interfacefortran_1_1syscgetinputcompactcomplexcompactvectordataf_1ac7fc75a8887a8ad9ac27847995a8250a"></a>
### Function syscgetinputcompactcomplexcompactvectordataf\_c82d

![][public]


```fortran
type(syscinputcomplexvectordataf) function syscgetinputcompactcomplexcompactvectordataf_c82d(data, datasize)
```


Create an input vector data access type with split storage.

**Parameters**:

* **data**: - two-dimensional array of complex vectors
* **dataSize**: - number of vectors.



**Parameters**:

* datacomplex(kind=8), dimension(3, datasize), intent(in), target
* datasizeinteger(kind=8), intent(in)

**Return type**: type([syscinputcomplexvectordataf](structfortran_1_1syscinputcomplexvectordataf.md#structfortran_1_1syscinputcomplexvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)