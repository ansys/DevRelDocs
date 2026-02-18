# Interface fortran::syscgetinputcompactcomplexcompactvectordataf

![][Fortran]
![][public]

**Definition**: `syscInputComplexVectorDataF.fi` (line 56)

Provide an interface to get input complex vector data with compact storage for complex and vector components.



## Members

* [syscgetinputcompactcomplexcompactvectordataf\_c82d](interfacefortran_1_1syscgetinputcompactcomplexcompactvectordataf.md#interfacefortran_1_1syscgetinputcompactcomplexcompactvectordataf_1a9c00860a0e9a7ba103aab9b5c71b1666)

## Public functions

<a id="interfacefortran_1_1syscgetinputcompactcomplexcompactvectordataf_1a9c00860a0e9a7ba103aab9b5c71b1666"></a>
### Function syscgetinputcompactcomplexcompactvectordataf\_c82d

![][public]

```fortran
type(syscinputcomplexvectordataf) function syscgetinputcompactcomplexcompactvectordataf_c82d(data, dataSize)
```

Create an input vector data access type with split storage.

**Parameters**:

* **data**: - two-dimensional array of complex vectors
* **dataSize**: - number of vectors.



**Parameters**:

* datadata
* dataSizedataSize

**Return type**: type([syscinputcomplexvectordataf](structfortran_1_1syscinputcomplexvectordataf.md#structfortran_1_1syscinputcomplexvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)