# Interface fortran::syscgetoutputcompactcomplexcompactvectordataf

![][Fortran]
![][public]

**Definition**: `syscOutputComplexVectorDataF.fi` (line 56)

Provide an interface to get output complex vector data with compact storage for complex and vector components.



## Members

* [syscgetoutputcompactcomplexcompactvectordataf\_c82d](interfacefortran_1_1syscgetoutputcompactcomplexcompactvectordataf.md#interfacefortran_1_1syscgetoutputcompactcomplexcompactvectordataf_1af73e0007ec09554bf257669ad117e2b9)

## Public functions

<a id="interfacefortran_1_1syscgetoutputcompactcomplexcompactvectordataf_1af73e0007ec09554bf257669ad117e2b9"></a>
### Function syscgetoutputcompactcomplexcompactvectordataf\_c82d

![][public]

```fortran
type(syscoutputcomplexvectordataf) function syscgetoutputcompactcomplexcompactvectordataf_c82d(data, dataSize)
```

Create an output vector data access type with split storage.

**Parameters**:

* **data**: - two-dimensional array of complex vectors
* **dataSize**: - number of vectors.



**Parameters**:

* datadata
* dataSizedataSize

**Return type**: type([syscoutputcomplexvectordataf](structfortran_1_1syscoutputcomplexvectordataf.md#structfortran_1_1syscoutputcomplexvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)