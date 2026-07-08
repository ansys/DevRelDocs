# Interface fortran::syscgetoutputcompactcomplexcompactvectordataf

![][Fortran]
![][public]

**Definition**: `syscOutputComplexVectorDataF.fi` (line 56)

Provide an interface to get output complex vector data with compact storage for complex and vector components.



## Members

* [syscgetoutputcompactcomplexcompactvectordataf\_c82d](interfacefortran_1_1syscgetoutputcompactcomplexcompactvectordataf.md#interfacefortran_1_1syscgetoutputcompactcomplexcompactvectordataf_1a797268f8b67f44218fcc633e1cf6c731)

## Public functions

<a id="interfacefortran_1_1syscgetoutputcompactcomplexcompactvectordataf_1a797268f8b67f44218fcc633e1cf6c731"></a>
### Function syscgetoutputcompactcomplexcompactvectordataf\_c82d

![][public]


```fortran
type(syscoutputcomplexvectordataf) function syscgetoutputcompactcomplexcompactvectordataf_c82d(data, datasize)
```


Create an output vector data access type with split storage.

**Parameters**:

* **data**: - two-dimensional array of complex vectors
* **dataSize**: - number of vectors.



**Parameters**:

* datacomplex(kind=8), dimension(3, datasize), intent(in), target
* datasizeinteger(kind=8), intent(in)

**Return type**: type([syscoutputcomplexvectordataf](structfortran_1_1syscoutputcomplexvectordataf.md#structfortran_1_1syscoutputcomplexvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)