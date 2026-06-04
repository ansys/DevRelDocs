# Structure SyscOutputComplexScalarData

![][C]
![][public]

**Definition**: `syscOutputComplexScalarData.h` (line 29)

Struct for output complex scalar data.

Output complex scalar data provides read-only access to an array of complex scalar data.

## Members

* [data1](structSyscOutputComplexScalarData.md#structSyscOutputComplexScalarData_1abd9b452fbcdb3e8873a49230f214367f)
* [data2](structSyscOutputComplexScalarData.md#structSyscOutputComplexScalarData_1a9d10751192e85779a192ff20697eac77)
* [primitiveType](structSyscOutputComplexScalarData.md#structSyscOutputComplexScalarData_1aacc2944e127d01c2063a7b6ccb129009)
* [size](structSyscOutputComplexScalarData.md#structSyscOutputComplexScalarData_1a07857702e4d8dffa2716d229f0a25c2b)

## Public attributes

<a id="structSyscOutputComplexScalarData_1aacc2944e127d01c2063a7b6ccb129009"></a>
### Variable primitiveType

![][public]

**Definition**: `syscOutputComplexScalarData.h` (line 96)

```
enum SyscPrimitiveType SyscOutputComplexScalarData::primitiveType
```



Primitive type.



**Type**: enum [SyscPrimitiveType](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gade3becc3625d881bdd988111e0895a3c)

<a id="structSyscOutputComplexScalarData_1abd9b452fbcdb3e8873a49230f214367f"></a>
### Variable data1

![][public]

**Definition**: `syscOutputComplexScalarData.h` (line 31)

```
const void* SyscOutputComplexScalarData::data1
```



First data pointer.



**Type**: const void *

<a id="structSyscOutputComplexScalarData_1a9d10751192e85779a192ff20697eac77"></a>
### Variable data2

![][public]

**Definition**: `syscOutputComplexScalarData.h` (line 32)

```
const void* SyscOutputComplexScalarData::data2
```



Second data pointer.



**Type**: const void *

<a id="structSyscOutputComplexScalarData_1a07857702e4d8dffa2716d229f0a25c2b"></a>
### Variable size

![][public]

**Definition**: `syscOutputComplexScalarData.h` (line 33)

```
size_t SyscOutputComplexScalarData::size
```



Data size.



**Type**: size_t

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)