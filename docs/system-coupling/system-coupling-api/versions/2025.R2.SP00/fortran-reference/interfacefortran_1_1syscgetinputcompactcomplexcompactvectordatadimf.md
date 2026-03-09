# Interface fortran::syscgetinputcompactcomplexcompactvectordatadimf

![][Fortran]
![][public]

**Definition**: `syscInputComplexVectorDataF.fi` (line 85)

Provide an interface to get input complex vector data with compact storage for complex and vector components based on dimension.



## Members

* [syscgetinputcompactcomplexcompactvectordatadimf\_c82d](interfacefortran_1_1syscgetinputcompactcomplexcompactvectordatadimf.md#interfacefortran_1_1syscgetinputcompactcomplexcompactvectordatadimf_1a2d739d19a7890ca491d99e1f068936e8)

## Public functions

<a id="interfacefortran_1_1syscgetinputcompactcomplexcompactvectordatadimf_1a2d739d19a7890ca491d99e1f068936e8"></a>
### Function syscgetinputcompactcomplexcompactvectordatadimf\_c82d

![][public]

```fortran
type(syscinputcomplexvectordataf) function syscgetinputcompactcomplexcompactvectordatadimf_c82d(data, dataSize, dimension)
```

Create an input complex vector data access type with split storage based on dimension.

**Parameters**:

* **data**: - two-dimensional array of complex vectors
* **dataSize**: - number of vectors.
* **dimension**: - dimension of vectors.



**Parameters**:

* datadata
* dataSizedataSize
* dimensiondimension

**Return type**: type([syscinputcomplexvectordataf](structfortran_1_1syscinputcomplexvectordataf.md#structfortran_1_1syscinputcomplexvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)