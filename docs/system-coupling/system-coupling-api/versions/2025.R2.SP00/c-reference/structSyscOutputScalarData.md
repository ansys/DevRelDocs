---
title: "Structure SyscOutputScalarData"
---

![][C]
![][public]

**Definition**: `syscOutputScalarData.h` (line 37)

Provide a struct for output scalar data.

Input scalar data provides read-only access to an array of scalar data.





To create and/or initialize [SyscOutputScalarData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscOutputScalarData), it is highly recommended to use one of the functions with names starting with <code>syscGetOutputScalarData</code>. These functions will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```
SyscOutputScalarData osd = syscGetOutputScalarDataDouble(array, arraySize);
```

## Members

* [data](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscOutputScalarData)
* [primitiveType](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscOutputScalarData)
* [size](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscOutputScalarData)

## Public attributes

<a id="structSyscOutputScalarData_1a8d379fbb21a0db72ca1e91725b1c4f17"></a>
### Variable primitiveType

![][public]

**Definition**: `syscOutputScalarData.h` (line 115)

```
enum SyscPrimitiveType SyscOutputScalarData::primitiveType
```



Primitive type.



**Type**: enum [SyscPrimitiveType](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/syscCommonTypes_8h)

<a id="structSyscOutputScalarData_1ac6e4962585166fdc6b76161f513525f8"></a>
### Variable data

![][public]

**Definition**: `syscOutputScalarData.h` (line 39)

```
const void* SyscOutputScalarData::data
```



Pointer to the data array.



**Type**: const void *

<a id="structSyscOutputScalarData_1a22d6699f074b01a21ee6072272cfa0f3"></a>
### Variable size

![][public]

**Definition**: `syscOutputScalarData.h` (line 40)

```
size_t SyscOutputScalarData::size
```



Array size.



**Type**: size_t

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)