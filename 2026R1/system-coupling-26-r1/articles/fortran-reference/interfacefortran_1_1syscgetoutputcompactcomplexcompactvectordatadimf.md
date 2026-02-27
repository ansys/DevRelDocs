# Interface fortran::syscgetoutputcompactcomplexcompactvectordatadimf

![][Fortran]
![][public]

**Definition**: `syscOutputComplexVectorDataF.fi` (line 84)

Provide an interface to get output complex vector data.



## Members

* [syscgetoutputcompactcomplexcompactvectordatadimf\_c82d](interfacefortran_1_1syscgetoutputcompactcomplexcompactvectordatadimf.md#interfacefortran_1_1syscgetoutputcompactcomplexcompactvectordatadimf_1a061060a94e2ecc98efc61e34c8aefde4)

## Public functions

<a id="interfacefortran_1_1syscgetoutputcompactcomplexcompactvectordatadimf_1a061060a94e2ecc98efc61e34c8aefde4"></a>
### Function syscgetoutputcompactcomplexcompactvectordatadimf\_c82d

![][public]


```fortran
type(syscoutputcomplexvectordataf) function syscgetoutputcompactcomplexcompactvectordatadimf_c82d(data, datasize, dimension)
```


Create an output complex vector data access type with split storage based on dimension.

**Parameters**:

* **data**: - two-dimensional array of complex vectors
* **dataSize**: - number of vectors.
* **dimension**: - dimension of vectors.



**Parameters**:

* datacomplex(kind=8), dimension(dimension, datasize), intent(in), target
* datasizeinteger(kind=8), intent(in)
* dimensioninteger(kind=8), intent(in)

**Return type**: type([syscoutputcomplexvectordataf](structfortran_1_1syscoutputcomplexvectordataf.md#structfortran_1_1syscoutputcomplexvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)