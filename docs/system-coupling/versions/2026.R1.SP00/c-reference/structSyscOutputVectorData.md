# Structure SyscOutputVectorData

![][C]
![][public]

**Definition**: `syscOutputVectorData.h` (line 42)

Create an output vector data access struct.

Output vector data provides read-only access to an array of vector data.





The size is the total number of vectors, not the total number of components, i.e. if all data is stored in one contiguous array, then size is 1/3 the size of that array.





To create and/or initialize [SyscOutputVectorData](structSyscOutputVectorData.md#structSyscOutputVectorData), it is highly recommended to use one of the functions with names starting with <code>syscGetOutputVectorData</code>. These functions will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```
SyscOutputVectorData isd = syscGetOutputVectorDataSplitDouble(
    x, y, z, size);
```

## Members

* [data0](structSyscOutputVectorData.md#structSyscOutputVectorData_1ab5b43e2fbbdd158e838e34b6061a547a)
* [data1](structSyscOutputVectorData.md#structSyscOutputVectorData_1a07d6e4c76622e108c8d55052bf24a06b)
* [data2](structSyscOutputVectorData.md#structSyscOutputVectorData_1ad05ef31b30bf25b8337e221af20c4f44)
* [dimension](structSyscOutputVectorData.md#structSyscOutputVectorData_1a563bb9ca0465602dcdd88b572cb2a74a)
* [primitiveType](structSyscOutputVectorData.md#structSyscOutputVectorData_1a1db75a7cee8680c78f2d5e9199ed2a98)
* [size](structSyscOutputVectorData.md#structSyscOutputVectorData_1abb605a01aa1090eec8d79b34caf9463b)

## Public attributes

<a id="structSyscOutputVectorData_1a1db75a7cee8680c78f2d5e9199ed2a98"></a>
### Variable primitiveType

![][public]

**Definition**: `syscOutputVectorData.h` (line 168)

```
enum SyscPrimitiveType SyscOutputVectorData::primitiveType
```



Primitive type.



**Type**: enum [SyscPrimitiveType](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gade3becc3625d881bdd988111e0895a3c)

<a id="structSyscOutputVectorData_1ab5b43e2fbbdd158e838e34b6061a547a"></a>
### Variable data0

![][public]

**Definition**: `syscOutputVectorData.h` (line 44)

```
const void* SyscOutputVectorData::data0
```



Pointer to the first array.



**Type**: const void *

<a id="structSyscOutputVectorData_1a07d6e4c76622e108c8d55052bf24a06b"></a>
### Variable data1

![][public]

**Definition**: `syscOutputVectorData.h` (line 45)

```
const void* SyscOutputVectorData::data1
```



Pointer to the second array.



**Type**: const void *

<a id="structSyscOutputVectorData_1ad05ef31b30bf25b8337e221af20c4f44"></a>
### Variable data2

![][public]

**Definition**: `syscOutputVectorData.h` (line 46)

```
const void* SyscOutputVectorData::data2
```



Pointer to the third array.



**Type**: const void *

<a id="structSyscOutputVectorData_1abb605a01aa1090eec8d79b34caf9463b"></a>
### Variable size

![][public]

**Definition**: `syscOutputVectorData.h` (line 47)

```
size_t SyscOutputVectorData::size
```



Array size.



**Type**: size_t

<a id="structSyscOutputVectorData_1a563bb9ca0465602dcdd88b572cb2a74a"></a>
### Variable dimension

![][public]

**Definition**: `syscOutputVectorData.h` (line 47)

```
enum SyscDimension SyscOutputVectorData::dimension
```



Array dimension.



**Type**: enum [SyscDimension](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gac5a5f66ee72fd8015eab632a642cf26d)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)