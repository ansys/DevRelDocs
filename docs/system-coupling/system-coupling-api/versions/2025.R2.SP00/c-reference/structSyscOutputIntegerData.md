---
title: "Structure SyscOutputIntegerData"
---

![][C]
![][public]

**Definition**: `syscOutputIntegerData.h` (line 37)

Provide a struct for output integer data.

Output integer data provides read-only access to an array of integer data.





To create and/or initialize [SyscOutputIntegerData](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscOutputIntegerData), it is highly recommended to use one of the functions with names starting with <code>syscGetOutputIntegerData</code>. These functions will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```
 SyscOutputIntegerData oid = syscGetOutputIntegerDataDouble(array,
arraySize); 
```

## Members

* [data](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscOutputIntegerData)
* [primitiveType](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscOutputIntegerData)
* [size](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/structSyscOutputIntegerData)

## Public attributes

<a id="structSyscOutputIntegerData_1a208237662f53658a829a9ee82cfe3b24"></a>
### Variable primitiveType

![][public]

**Definition**: `syscOutputIntegerData.h` (line 98)

```
enum SyscPrimitiveType SyscOutputIntegerData::primitiveType
```



Primitive type.



**Type**: enum [SyscPrimitiveType](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/c-reference/syscCommonTypes_8h)

<a id="structSyscOutputIntegerData_1a27cf91c94d9a2550d8697e562831e2d4"></a>
### Variable data

![][public]

**Definition**: `syscOutputIntegerData.h` (line 39)

```
const void* SyscOutputIntegerData::data
```



Pointer to the data array.



**Type**: const void *

<a id="structSyscOutputIntegerData_1a4bfb506a93651c8c2519f6dd094ae53f"></a>
### Variable size

![][public]

**Definition**: `syscOutputIntegerData.h` (line 40)

```
size_t SyscOutputIntegerData::size
```



Array size.



**Type**: size_t

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)