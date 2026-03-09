# File syscOutputScalarData.h

![][C]

**Location**: `syscOutputScalarData.h`





## Classes

* [SyscOutputScalarData](structSyscOutputScalarData.md#structSyscOutputScalarData)

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

2["SystemCouplingParticipant/LibraryType.hpp"]

1["syscOutputScalarData.h"]
click 1 "syscOutputScalarData_8h.md#syscOutputScalarData_8h"
1 --> 2
1 --> 3
1 --> 4
1 --> 5

```

## Functions

<a id="group__SyscParticipantLibraryCAPI_1ga0097e203d597949f887e2f804c01fd21"></a>
### Function syscGetOutputScalarData

![][public]

```
SyscOutputScalarData syscGetOutputScalarData()
```

Create an output scalar data access struct.

Primitive type will default to double-precision. Data size will be set to zero. Data pointer will be set to null.



**Return type**: [SyscOutputScalarData](structSyscOutputScalarData.md#structSyscOutputScalarData)

<a id="group__SyscParticipantLibraryCAPI_1ga8a2803af36638c2ce3387bf89b83cda0"></a>
### Function syscGetOutputScalarDataDouble

![][public]

```
SyscOutputScalarData syscGetOutputScalarDataDouble(const double *const data, size_t dataSize)
```

Create an output scalar data access struct.

**Parameters**:

* **data**: - pointer to the double-precision (64-bit) array of data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* const double *const **data**
* size_t **dataSize**

**Return type**: [SyscOutputScalarData](structSyscOutputScalarData.md#structSyscOutputScalarData)

<a id="group__SyscParticipantLibraryCAPI_1ga0b0ae9e5ede552958b8bce1efd9b4978"></a>
### Function syscGetOutputScalarDataFloat

![][public]

```
SyscOutputScalarData syscGetOutputScalarDataFloat(const float *const data, size_t dataSize)
```

Create an output scalar data access struct.

**Parameters**:

* **data**: - pointer to the single-precision (32-bit) array of data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* const float *const **data**
* size_t **dataSize**

**Return type**: [SyscOutputScalarData](structSyscOutputScalarData.md#structSyscOutputScalarData)

<a id="group__SyscParticipantLibraryCAPI_1ga2334c8e25481b098d4263a2f60a7dac2"></a>
### Function syscGetOutputScalarDataInt32

![][public]

```
SyscOutputScalarData syscGetOutputScalarDataInt32(const int32_t *const data, size_t dataSize)
```

Create an output scalar data access struct.

**Parameters**:

* **data**: - pointer to the 32-bit array of integer data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* const int32_t *const **data**
* size_t **dataSize**

**Return type**: [SyscOutputScalarData](structSyscOutputScalarData.md#structSyscOutputScalarData)

<a id="group__SyscParticipantLibraryCAPI_1ga7a305d185afe565e1d3e8de66d7beca3"></a>
### Function syscGetOutputScalarDataInt64

![][public]

```
SyscOutputScalarData syscGetOutputScalarDataInt64(const int64_t *const data, size_t dataSize)
```

Create an output scalar data access struct.

**Parameters**:

* **data**: - pointer to the 64-bit array of integer data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* const int64_t *const **data**
* size_t **dataSize**

**Return type**: [SyscOutputScalarData](structSyscOutputScalarData.md#structSyscOutputScalarData)

<a id="group__SyscParticipantLibraryCAPI_1gabfcf7be83419cc31611e2ad100fdecb6"></a>
### Function syscGetOutputScalarDataUInt16

![][public]

```
SyscOutputScalarData syscGetOutputScalarDataUInt16(const uint16_t *const data, size_t dataSize)
```

Create an output scalar data access struct.

**Parameters**:

* **data**: - pointer to the 16-bit array of unsigned integer data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* const uint16_t *const **data**
* size_t **dataSize**

**Return type**: [SyscOutputScalarData](structSyscOutputScalarData.md#structSyscOutputScalarData)

<a id="group__SyscParticipantLibraryCAPI_1ga6645e1e9d1b163cea069ce42077f419f"></a>
### Function syscGetOutputScalarDataUInt64

![][public]

```
SyscOutputScalarData syscGetOutputScalarDataUInt64(const uint64_t *const data, size_t dataSize)
```

Create an output scalar data access struct.

**Parameters**:

* **data**: - pointer to the 64-bit array of unsigned integer data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* const uint64_t *const **data**
* size_t **dataSize**

**Return type**: [SyscOutputScalarData](structSyscOutputScalarData.md#structSyscOutputScalarData)

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
} SyscOutputScalarData;

SyscOutputScalarData syscGetOutputScalarData();

SyscOutputScalarData syscGetOutputScalarDataDouble(
  const double* const data,
  size_t dataSize);

SyscOutputScalarData syscGetOutputScalarDataFloat(
  const float* const data,
  size_t dataSize);

SyscOutputScalarData syscGetOutputScalarDataInt32(
  const int32_t* const data,
  size_t dataSize);

SyscOutputScalarData syscGetOutputScalarDataInt64(
  const int64_t* const data,
  size_t dataSize);

SyscOutputScalarData syscGetOutputScalarDataUInt16(
  const uint16_t* const data,
  size_t dataSize);

SyscOutputScalarData syscGetOutputScalarDataUInt64(
  const uint64_t* const data,
  size_t dataSize);

#ifdef __cplusplus
}
#endif
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)