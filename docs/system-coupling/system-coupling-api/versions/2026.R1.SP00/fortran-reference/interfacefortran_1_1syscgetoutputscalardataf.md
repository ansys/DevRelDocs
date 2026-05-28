---
title: "Interface fortran::syscgetoutputscalardataf"
---

![][Fortran]
![][public]

**Definition**: `syscOutputScalarDataF.fi` (line 34)

Provide an interface to get output scalar data.



## Members

* [syscgetoutputscalardataf](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/interfacefortran_1_1syscgetoutputscalardataf)
* [syscgetoutputscalardataf\_i4](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/interfacefortran_1_1syscgetoutputscalardataf)
* [syscgetoutputscalardataf\_i8](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/interfacefortran_1_1syscgetoutputscalardataf)
* [syscgetoutputscalardataf\_r4](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/interfacefortran_1_1syscgetoutputscalardataf)
* [syscgetoutputscalardataf\_r8](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/interfacefortran_1_1syscgetoutputscalardataf)

## Public functions

<a id="interfacefortran_1_1syscgetoutputscalardataf_1a76a042a253abb91e8bcdc11ce3b8dd20"></a>
### Function syscgetoutputscalardataf

![][public]

```fortran
type(syscoutputscalardataf) function syscgetoutputscalardataf()
```







**Return type**: type([syscoutputscalardataf](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/structfortran_1_1syscoutputscalardataf)) function

<a id="interfacefortran_1_1syscgetoutputscalardataf_1aa0fc1202c9abbcc583566e27919afc2d"></a>
### Function syscgetoutputscalardataf\_r4

![][public]

```fortran
type(syscoutputscalardataf) function syscgetoutputscalardataf_r4(data, dataSize)
```

Create an output scalar data access type.

**Parameters**:

* **data**: - 32-bit array of floating point data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* datadata
* dataSizedataSize

**Return type**: type([syscoutputscalardataf](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/structfortran_1_1syscoutputscalardataf)) function

<a id="interfacefortran_1_1syscgetoutputscalardataf_1aea3e7515b6ad50dca7f13b8b459bf7a2"></a>
### Function syscgetoutputscalardataf\_r8

![][public]

```fortran
type(syscoutputscalardataf) function syscgetoutputscalardataf_r8(data, dataSize)
```

Create an output scalar data access type.

**Parameters**:

* **data**: - 64-bit array of floating point data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* datadata
* dataSizedataSize

**Return type**: type([syscoutputscalardataf](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/structfortran_1_1syscoutputscalardataf)) function

<a id="interfacefortran_1_1syscgetoutputscalardataf_1aba984631b55a3022f2868cf603110e2c"></a>
### Function syscgetoutputscalardataf\_i4

![][public]

```fortran
type(syscoutputscalardataf) function syscgetoutputscalardataf_i4(data, dataSize)
```

Create an output scalar data access type.

**Parameters**:

* **data**: - 32-bit array of integer data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* datadata
* dataSizedataSize

**Return type**: type([syscoutputscalardataf](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/structfortran_1_1syscoutputscalardataf)) function

<a id="interfacefortran_1_1syscgetoutputscalardataf_1ac4fbf5afb57f3e177fa8aaffca76a482"></a>
### Function syscgetoutputscalardataf\_i8

![][public]

```fortran
type(syscoutputscalardataf) function syscgetoutputscalardataf_i8(data, dataSize)
```

Create an output scalar data access type.

**Parameters**:

* **data**: - 64-bit array of integer data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* datadata
* dataSizedataSize

**Return type**: type([syscoutputscalardataf](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/fortran-reference/structfortran_1_1syscoutputscalardataf)) function

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[Fortran]: https://img.shields.io/badge/language-Fortran-blue (Fortran)