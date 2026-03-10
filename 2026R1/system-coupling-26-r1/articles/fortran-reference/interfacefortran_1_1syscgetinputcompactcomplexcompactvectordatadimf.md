# Interface fortran::syscgetinputcompactcomplexcompactvectordatadimf

![][Fortran]
![][public]

**Definition**: `syscInputComplexVectorDataF.fi` (line 85)

Provide an interface to get input complex vector data with compact storage for complex and vector components based on dimension.



## Members

* [syscgetinputcompactcomplexcompactvectordatadimf\_c82d](interfacefortran_1_1syscgetinputcompactcomplexcompactvectordatadimf.md#interfacefortran_1_1syscgetinputcompactcomplexcompactvectordatadimf_1addd59ac6bcef126caa7fc5dfcdb25f1c)

## Public functions

<a id="interfacefortran_1_1syscgetinputcompactcomplexcompactvectordatadimf_1addd59ac6bcef126caa7fc5dfcdb25f1c"></a>
### Function syscgetinputcompactcomplexcompactvectordatadimf\_c82d

![][public]


```fortran
type(syscinputcomplexvectordataf) function syscgetinputcompactcomplexcompactvectordatadimf_c82d(data, datasize, dimension)
```


Create an input complex vector data access type with split storage based on dimension.

**Parameters**:

* **data**: - two-dimensional array of complex vectors
* **dataSize**: - number of vectors.
* **dimension**: - dimension of vectors.



**Parameters**:

* datacomplex(kind=8), dimension(dimension, datasize), intent(in), target
* datasizeinteger(kind=8), intent(in)
* dimensioninteger(kind=8), intent(in)

**Return type**: type([syscinputcomplexvectordataf](structfortran_1_1syscinputcomplexvectordataf.md#structfortran_1_1syscinputcomplexvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)