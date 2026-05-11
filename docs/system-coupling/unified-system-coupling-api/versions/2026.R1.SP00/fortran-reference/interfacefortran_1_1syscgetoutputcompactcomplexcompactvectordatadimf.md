# Interface fortran::syscgetoutputcompactcomplexcompactvectordatadimf

![][Fortran]
![][public]

**Definition**: `syscOutputComplexVectorDataF.fi` (line 84)

Provide an interface to get output complex vector data.



## Members

* [syscgetoutputcompactcomplexcompactvectordatadimf\_c82d](interfacefortran_1_1syscgetoutputcompactcomplexcompactvectordatadimf.md#interfacefortran_1_1syscgetoutputcompactcomplexcompactvectordatadimf_1ab98a86f80ffbfa887a403c5d6065b455)

## Public functions

<a id="interfacefortran_1_1syscgetoutputcompactcomplexcompactvectordatadimf_1ab98a86f80ffbfa887a403c5d6065b455"></a>
### Function syscgetoutputcompactcomplexcompactvectordatadimf\_c82d

![][public]

```fortran
type(syscoutputcomplexvectordataf) function syscgetoutputcompactcomplexcompactvectordatadimf_c82d(data, dataSize, dimension)
```

Create an output complex vector data access type with split storage based on dimension.

**Parameters**:

* **data**: - two-dimensional array of complex vectors
* **dataSize**: - number of vectors.
* **dimension**: - dimension of vectors.



**Parameters**:

* datadata
* dataSizedataSize
* dimensiondimension

**Return type**: type([syscoutputcomplexvectordataf](structfortran_1_1syscoutputcomplexvectordataf.md#structfortran_1_1syscoutputcomplexvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)