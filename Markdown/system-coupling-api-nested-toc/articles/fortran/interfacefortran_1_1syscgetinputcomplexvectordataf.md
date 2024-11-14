# Interface fortran::syscgetinputcomplexvectordataf

![][Fortran]
![][public]

**Definition**: `syscInputComplexVectorDataF.fi` (line 33)

Provide an interface to get input complex vector data.



## Members

* [syscgetinputcomplexvectordataf](interfacefortran_1_1syscgetinputcomplexvectordataf.md#interfacefortran_1_1syscgetinputcomplexvectordataf_1ab9cf5d7c3c91ec97b045b952f530a8c8)

## Public functions

<a id="interfacefortran_1_1syscgetinputcomplexvectordataf_1ab9cf5d7c3c91ec97b045b952f530a8c8"></a>
### Function syscgetinputcomplexvectordataf

![][public]

```fortran
type(syscinputcomplexvectordataf) function syscgetinputcomplexvectordataf()
```

Create an input complex vector data access type.

Primitive type will default to double-precision. Data size will be set to zero. Data pointers will be set to null.



**Return type**: type([syscinputcomplexvectordataf](structfortran_1_1syscinputcomplexvectordataf.md#structfortran_1_1syscinputcomplexvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)