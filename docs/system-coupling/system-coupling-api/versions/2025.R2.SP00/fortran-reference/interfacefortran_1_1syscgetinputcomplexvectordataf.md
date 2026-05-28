---
title: "Interface fortran::syscgetinputcomplexvectordataf"
---

![][Fortran]
![][public]

**Definition**: `syscInputComplexVectorDataF.fi` (line 33)

Provide an interface to get input complex vector data.



## Members

* [syscgetinputcomplexvectordataf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscgetinputcomplexvectordataf)

## Public functions

<a id="interfacefortran_1_1syscgetinputcomplexvectordataf_1ab9cf5d7c3c91ec97b045b952f530a8c8"></a>
### Function syscgetinputcomplexvectordataf

![][public]

```fortran
type(syscinputcomplexvectordataf) function syscgetinputcomplexvectordataf()
```

Create an input complex vector data access type.

Primitive type will default to double-precision. Data size will be set to zero. Data pointers will be set to null.



**Return type**: type([syscinputcomplexvectordataf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscinputcomplexvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)