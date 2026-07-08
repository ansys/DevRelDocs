# File syscOutputIntegerData.h

![][C]

**Location**: `syscOutputIntegerData.h`





## Classes

* [SyscOutputIntegerData](structSyscOutputIntegerData.md#structSyscOutputIntegerData)

## Includes

* SystemCouplingParticipant/LibraryType.hpp
* SystemCouplingParticipant/syscCommonTypes.h
* <stddef.h>
* <stdint.h>

```mermaid
graph LR
5["stdint.h"]

3["SystemCouplingParticipant/syscCommonTypes.h"]

4["stddef.h"]

1["syscOutputIntegerData.h"]
click 1 "syscOutputIntegerData_8h.md#syscOutputIntegerData_8h"
1 --> 2
1 --> 3
1 --> 4
1 --> 5

2["SystemCouplingParticipant/LibraryType.hpp"]

```

## Functions

<a id="group__SyscParticipantLibraryCAPI_1gac46cbb29463ecf81dfbba42a81e5b5c9"></a>
### Function syscGetOutputIntegerData

![][public]

```
SyscOutputIntegerData syscGetOutputIntegerData()
```

Create an output integer data access struct.

Primitive type will default to 64-bit signed integer. Data size will be set to zero. Data pointer will be set to null.



**Return type**: [SyscOutputIntegerData](structSyscOutputIntegerData.md#structSyscOutputIntegerData)

<a id="group__SyscParticipantLibraryCAPI_1gaea5bb5bd0b4ddd4217745dad38b405b2"></a>
### Function syscGetOutputIntegerDataInt32

![][public]

```
SyscOutputIntegerData syscGetOutputIntegerDataInt32(const int32_t *const data, size_t dataSize)
```

Create an output integer data access struct.

**Parameters**:

* **data**: - pointer to the signed (32-bit) array of data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* const int32_t *const **data**
* size_t **dataSize**

**Return type**: [SyscOutputIntegerData](structSyscOutputIntegerData.md#structSyscOutputIntegerData)

<a id="group__SyscParticipantLibraryCAPI_1ga43be8cb6b2e2b156d7c40fa3cbf28f03"></a>
### Function syscGetOutputIntegerDataInt64

![][public]

```
SyscOutputIntegerData syscGetOutputIntegerDataInt64(const int64_t *const data, size_t dataSize)
```

Create an output integer data access struct.

**Parameters**:

* **data**: - pointer to the 64-bit array of integer data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* const int64_t *const **data**
* size_t **dataSize**

**Return type**: [SyscOutputIntegerData](structSyscOutputIntegerData.md#structSyscOutputIntegerData)

<a id="group__SyscParticipantLibraryCAPI_1ga46a87bfd729531e482d320f695537c0b"></a>
### Function syscGetOutputIntegerDataUInt16

![][public]

```
SyscOutputIntegerData syscGetOutputIntegerDataUInt16(const uint16_t *const data, size_t dataSize)
```

Create an output integer data access struct.

**Parameters**:

* **data**: - pointer to the 16-bit array of unsigned integer data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* const uint16_t *const **data**
* size_t **dataSize**

**Return type**: [SyscOutputIntegerData](structSyscOutputIntegerData.md#structSyscOutputIntegerData)

<a id="group__SyscParticipantLibraryCAPI_1gaed7a48d94e2545e78562b8ff911dfd2a"></a>
### Function syscGetOutputIntegerDataUInt64

![][public]

```
SyscOutputIntegerData syscGetOutputIntegerDataUInt64(const uint64_t *const data, size_t dataSize)
```

Create an output integer data access struct.

**Parameters**:

* **data**: - pointer to the 64-bit array of unsigned integer data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* const uint64_t *const **data**
* size_t **dataSize**

**Return type**: [SyscOutputIntegerData](structSyscOutputIntegerData.md#structSyscOutputIntegerData)

## Source

```
/*
* Copyright ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.
*/

#pragma once

#include "SystemCouplingParticipant/LibraryType.hpp"

#include "SystemCouplingParticipant/syscCommonTypes.h"

#include <stddef.h>
#include <stdint.h>

#ifdef __cplusplus
extern "C" {
#endif

typedef struct {
  enum SyscPrimitiveType primitiveType; 
  const void* data;                     
  size_t size;                          
} SyscOutputIntegerData;

SyscOutputIntegerData syscGetOutputIntegerData();

SyscOutputIntegerData syscGetOutputIntegerDataInt32(
  const int32_t* const data,
  size_t dataSize);

SyscOutputIntegerData syscGetOutputIntegerDataInt64(
  const int64_t* const data,
  size_t dataSize);

SyscOutputIntegerData syscGetOutputIntegerDataUInt16(
  const uint16_t* const data,
  size_t dataSize);

SyscOutputIntegerData syscGetOutputIntegerDataUInt64(
  const uint64_t* const data,
  size_t dataSize);

#ifdef __cplusplus
}
#endif
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)