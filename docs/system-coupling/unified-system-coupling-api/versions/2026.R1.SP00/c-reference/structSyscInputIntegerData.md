# Structure SyscInputIntegerData

![][C]
![][public]

**Definition**: `syscInputIntegerData.h` (line 37)

Provide a struct for integer data.

Integer data provides access to an array of integer data.





To create and/or initialize [SyscInputIntegerData](structSyscInputIntegerData.md#structSyscInputIntegerData), it is highly recommended to use one of the functions with names starting with <code>syscGetInputIntegerData</code>. These functions will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:






```
 SyscInputIntegerData oid = syscGetInputIntegerDataDouble(array,
arraySize); 
```

## Members

* [data](structSyscInputIntegerData.md#structSyscInputIntegerData_1a7a11558ac0feb58ad78e4774dfdbf028)
* [primitiveType](structSyscInputIntegerData.md#structSyscInputIntegerData_1af4bb2290dc2f6cc1fd154721996312c9)
* [size](structSyscInputIntegerData.md#structSyscInputIntegerData_1adac4ffe635b7817a3eb9add44996f009)

## Public attributes

<a id="structSyscInputIntegerData_1af4bb2290dc2f6cc1fd154721996312c9"></a>
### Variable primitiveType

![][public]

**Definition**: `syscInputIntegerData.h` (line 38)


```
enum SyscPrimitiveType SyscInputIntegerData::primitiveType
```




Primitive type.



**Type**: enum [SyscPrimitiveType](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gade3becc3625d881bdd988111e0895a3c)

<a id="structSyscInputIntegerData_1a7a11558ac0feb58ad78e4774dfdbf028"></a>
### Variable data

![][public]

**Definition**: `syscInputIntegerData.h` (line 39)


```
void* SyscInputIntegerData::data
```




Pointer to the data array.



**Type**: void *

<a id="structSyscInputIntegerData_1adac4ffe635b7817a3eb9add44996f009"></a>
### Variable size

![][public]

**Definition**: `syscInputIntegerData.h` (line 40)


```
size_t SyscInputIntegerData::size
```




Array size.



**Type**: size_t

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)