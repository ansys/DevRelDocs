---
title: "Structure SyscInputScalarData"
---

![][C]
![][public]

**Definition**: `syscInputScalarData.h` (line 40)

Provide a struct for input scalar data.

Input scalar data provides read and write access to an array of scalar data.





To create and/or initialize [SyscInputScalarData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscInputScalarData), it is highly recommended to use one of the functions with names starting with <code>syscGetInputScalarData</code>. These functions will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```
SyscInputScalarData isd = syscGetInputScalarDataDouble(array, arraySize);
```

## Members

* [data](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscInputScalarData)
* [primitiveType](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscInputScalarData)
* [size](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscInputScalarData)

## Public attributes

<a id="structSyscInputScalarData_1ab177e62c0635afebce589c1a411144fe"></a>
### Variable primitiveType

![][public]

**Definition**: `syscInputScalarData.h` (line 77)

```
enum SyscPrimitiveType SyscInputScalarData::primitiveType
```



Primitive type.



**Type**: enum [SyscPrimitiveType](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/syscCommonTypes_8h)

<a id="structSyscInputScalarData_1a1a84599e793064d8c6275084ffe16cfe"></a>
### Variable data

![][public]

**Definition**: `syscInputScalarData.h` (line 42)

```
void* SyscInputScalarData::data
```



Pointer to the data array.



**Type**: void *

<a id="structSyscInputScalarData_1aab4ae5518bec7d42d01359b5459bf7e2"></a>
### Variable size

![][public]

**Definition**: `syscInputScalarData.h` (line 43)

```
size_t SyscInputScalarData::size
```



Array size.



**Type**: size_t

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)