---
title: "Interface fortran::syscgetoutputvectordataf"
---

![][Fortran]
![][public]

**Definition**: `syscOutputVectorDataF.fi` (line 43)

Provide an interface to get output vector data.



## Members

* [syscgetoutputvectordataf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscgetoutputvectordataf)

## Public functions

<a id="interfacefortran_1_1syscgetoutputvectordataf_1ab48ad870ee7444be74d20c7015b65923"></a>
### Function syscgetoutputvectordataf

![][public]

```fortran
type(syscoutputvectordataf) function syscgetoutputvectordataf()
```

Create an output vector data access type.

Primitive type will default to double-precision. Data size will be set to zero. Data pointers will be set to null.



**Return type**: type([syscoutputvectordataf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscoutputvectordataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)