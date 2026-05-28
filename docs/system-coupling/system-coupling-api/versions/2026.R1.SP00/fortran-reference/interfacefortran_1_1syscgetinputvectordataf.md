---
title: "Interface fortran::syscgetinputvectordataf"
---

![][Fortran]
![][public]

**Definition**: `syscInputVectorDataF.fi` (line 43)

Provide an interface to get input vector data.



## Members

* [syscgetinputvectordataf](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/interfacefortran_1_1syscgetinputvectordataf)

## Public functions

<a id="interfacefortran_1_1syscgetinputvectordataf_1aacb50f62f4cdfd7fb3cc871071170db7"></a>
### Function syscgetinputvectordataf

![][public]

```fortran
type(syscinputvectordataf) function syscgetinputvectordataf()
```

Create an input vector data access type.

Primitive type will default to double-precision. Data size will be set to zero. Data pointers will be set to null.



**Return type**: type([syscinputvectordataf](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/structfortran_1_1syscinputvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)