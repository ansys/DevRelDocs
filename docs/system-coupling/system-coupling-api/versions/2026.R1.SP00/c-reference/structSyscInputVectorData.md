---
title: "Structure SyscInputVectorData"
---

![][C]
![][public]

**Definition**: `syscInputVectorData.h` (line 42)

Provide a struct for input vector data.

Input vector data provides read and write access to an array of vector data.





The size is the total number of vectors, not the total number of components, i.e. if all data is stored in one contiguous array, then size is 1/3 the size of that array.





To create and/or initialize [SyscInputVectorData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscInputVectorData), it is highly recommended to use one of the functions with names starting with <code>syscGetInputVectorData</code>. These functions will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```
SyscInputVectorData ivd = syscGetInputVectorDataSplitDouble(x, y, z, size);
```

## Members

* [data0](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscInputVectorData)
* [data1](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscInputVectorData)
* [data2](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscInputVectorData)
* [dimension](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscInputVectorData)
* [primitiveType](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscInputVectorData)
* [size](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/structSyscInputVectorData)

## Public attributes

<a id="structSyscInputVectorData_1a9f94dd62dccc2b3899c69b2ce1c6d1ea"></a>
### Variable primitiveType

![][public]

**Definition**: `syscInputVectorData.h` (line 177)

```
enum SyscPrimitiveType SyscInputVectorData::primitiveType
```



Primitive type.



**Type**: enum [SyscPrimitiveType](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/syscCommonTypes_8h)

<a id="structSyscInputVectorData_1a5d82442ce980b42b83952c7cc5add7c1"></a>
### Variable data0

![][public]

**Definition**: `syscInputVectorData.h` (line 44)

```
void* SyscInputVectorData::data0
```



Pointer to the first array.



**Type**: void *

<a id="structSyscInputVectorData_1a55afda92952939d2ff72b07e3792e509"></a>
### Variable data1

![][public]

**Definition**: `syscInputVectorData.h` (line 45)

```
void* SyscInputVectorData::data1
```



Pointer to the second array.



**Type**: void *

<a id="structSyscInputVectorData_1a8e8fa224f82b93e781c57d6b9db9fe19"></a>
### Variable data2

![][public]

**Definition**: `syscInputVectorData.h` (line 46)

```
void* SyscInputVectorData::data2
```



Pointer to the third array.



**Type**: void *

<a id="structSyscInputVectorData_1aef2f006ed5084f3c78dd98f7b4bf5429"></a>
### Variable size

![][public]

**Definition**: `syscInputVectorData.h` (line 47)

```
size_t SyscInputVectorData::size
```



Array size.



**Type**: size_t

<a id="structSyscInputVectorData_1a7bb398945453b66b673ddc252458f69d"></a>
### Variable dimension

![][public]

**Definition**: `syscInputVectorData.h` (line 47)

```
enum SyscDimension SyscInputVectorData::dimension
```



Array Dimension



**Type**: enum [SyscDimension](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/c-reference/syscCommonTypes_8h)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)