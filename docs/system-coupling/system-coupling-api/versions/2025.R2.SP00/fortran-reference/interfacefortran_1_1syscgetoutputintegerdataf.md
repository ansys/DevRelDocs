---
title: "Interface fortran::syscgetoutputintegerdataf"
---

![][Fortran]
![][public]

**Definition**: `syscOutputIntegerDataF.fi` (line 38)

Provide an interface to get output integer data.



## Members

* [syscgetoutputintegerdataf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscgetoutputintegerdataf)
* [syscgetoutputintegerdataf\_i4](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscgetoutputintegerdataf)
* [syscgetoutputintegerdataf\_i8](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/interfacefortran_1_1syscgetoutputintegerdataf)

## Public functions

<a id="interfacefortran_1_1syscgetoutputintegerdataf_1a1e799f9998240be1a86b4d010b00f85c"></a>
### Function syscgetoutputintegerdataf

![][public]

```fortran
type(syscoutputintegerdataf) function syscgetoutputintegerdataf()
```







**Return type**: type([syscoutputintegerdataf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscoutputintegerdataf)) function

<a id="interfacefortran_1_1syscgetoutputintegerdataf_1ae1a0e75930a3da5a7919c2f51f5b41e7"></a>
### Function syscgetoutputintegerdataf\_i4

![][public]

```fortran
type(syscoutputintegerdataf) function syscgetoutputintegerdataf_i4(data, dataSize)
```

Create an output integer data access type.

**Parameters**:

* **data**: - 32-bit array of integer data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* datadata
* dataSizedataSize

**Return type**: type([syscoutputintegerdataf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscoutputintegerdataf)) function

<a id="interfacefortran_1_1syscgetoutputintegerdataf_1af330e0d8cf14659775297c3f08a20263"></a>
### Function syscgetoutputintegerdataf\_i8

![][public]

```fortran
type(syscoutputintegerdataf) function syscgetoutputintegerdataf_i8(data, dataSize)
```

Create an output integer data access type.

**Parameters**:

* **data**: - 64-bit array of integer data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* datadata
* dataSizedataSize

**Return type**: type([syscoutputintegerdataf](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/fortran-reference/structfortran_1_1syscoutputintegerdataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)