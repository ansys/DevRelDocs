# Interface fortran::syscgetoutputcomplexvectordataf

![][Fortran]
![][public]

**Definition**: `syscOutputComplexVectorDataF.fi` (line 33)

Provide an interface to get output vector data.



## Members

* [syscgetoutputcomplexvectordataf](interfacefortran_1_1syscgetoutputcomplexvectordataf.md#interfacefortran_1_1syscgetoutputcomplexvectordataf_1a5fe888c272b66115e15f7b3ab3b2e8e6)

## Public functions

<a id="interfacefortran_1_1syscgetoutputcomplexvectordataf_1a5fe888c272b66115e15f7b3ab3b2e8e6"></a>
### Function syscgetoutputcomplexvectordataf

![][public]

```fortran
type(syscoutputcomplexvectordataf) function syscgetoutputcomplexvectordataf()
```

Create an output vector data access type.

Primitive type will default to double-precision. Data size will be set to zero. Data pointers will be set to null.



**Return type**: type([syscoutputcomplexvectordataf](structfortran_1_1syscoutputcomplexvectordataf.md#structfortran_1_1syscoutputcomplexvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)