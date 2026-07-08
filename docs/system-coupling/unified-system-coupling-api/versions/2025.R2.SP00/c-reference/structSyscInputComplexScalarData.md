# Structure SyscInputComplexScalarData

![][C]
![][public]

**Definition**: `syscInputComplexScalarData.h` (line 29)

Struct for input complex scalar data.

Input complex scalar data provides read-and-write access to complex scalar data.

## Members

* [data1](structSyscInputComplexScalarData.md#structSyscInputComplexScalarData_1aee021b7ac05827ac6d4d8dffc97605f5)
* [data2](structSyscInputComplexScalarData.md#structSyscInputComplexScalarData_1a57b73d00a5b261093b572c2f02c8e6a0)
* [primitiveType](structSyscInputComplexScalarData.md#structSyscInputComplexScalarData_1a68e7a5dcd79c528810151c82f29affdb)
* [size](structSyscInputComplexScalarData.md#structSyscInputComplexScalarData_1a3f5223d8696f734edf5ed4efe2ec21f8)

## Public attributes

<a id="structSyscInputComplexScalarData_1a68e7a5dcd79c528810151c82f29affdb"></a>
### Variable primitiveType

![][public]

**Definition**: `syscInputComplexScalarData.h` (line 96)

```
enum SyscPrimitiveType SyscInputComplexScalarData::primitiveType
```



Primitive type.



**Type**: enum [SyscPrimitiveType](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gade3becc3625d881bdd988111e0895a3c)

<a id="structSyscInputComplexScalarData_1aee021b7ac05827ac6d4d8dffc97605f5"></a>
### Variable data1

![][public]

**Definition**: `syscInputComplexScalarData.h` (line 31)

```
void* SyscInputComplexScalarData::data1
```



First data pointer.



**Type**: void *

<a id="structSyscInputComplexScalarData_1a57b73d00a5b261093b572c2f02c8e6a0"></a>
### Variable data2

![][public]

**Definition**: `syscInputComplexScalarData.h` (line 32)

```
void* SyscInputComplexScalarData::data2
```



Second data pointer.



**Type**: void *

<a id="structSyscInputComplexScalarData_1a3f5223d8696f734edf5ed4efe2ec21f8"></a>
### Variable size

![][public]

**Definition**: `syscInputComplexScalarData.h` (line 33)

```
size_t SyscInputComplexScalarData::size
```



Data size.



**Type**: size_t

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)