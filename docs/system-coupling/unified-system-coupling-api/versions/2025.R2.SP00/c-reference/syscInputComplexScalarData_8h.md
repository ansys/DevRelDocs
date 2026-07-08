# File syscInputComplexScalarData.h

![][C]

**Location**: `syscInputComplexScalarData.h`





## Classes

* [SyscInputComplexScalarData](structSyscInputComplexScalarData.md#structSyscInputComplexScalarData)

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

1["syscInputComplexScalarData.h"]
click 1 "syscInputComplexScalarData_8h.md#syscInputComplexScalarData_8h"
1 --> 2
1 --> 3
1 --> 4
1 --> 5

```

## Functions

<a id="group__SyscParticipantLibraryCAPI_1ga1843bbb3648ac07766c7e6ea9f309a54"></a>
### Function syscGetInputComplexScalarData

![][public]

```
SyscInputComplexScalarData syscGetInputComplexScalarData()
```

Create an empty input copmlex scalar data access struct.

Primitive type will default to double-precision. Data size will be set to zero. Data pointers will be set to null.



**Return type**: [SyscInputComplexScalarData](structSyscInputComplexScalarData.md#structSyscInputComplexScalarData)

<a id="group__SyscParticipantLibraryCAPI_1gaaed0337275d991d2cd2a1ec4dbf2a595"></a>
### Function syscGetInputComplexScalarDataSplitDouble

![][public]

```
SyscInputComplexScalarData syscGetInputComplexScalarDataSplitDouble(double *const dataReal, double *const dataImag, size_t dataSize)
```

Create a complex input scalar data access struct.

**Parameters**:

* **dataReal**: - pointer to the double-precision real data component.
* **dataImag**: - pointer to the double-precision imaginary data component.
* **dataSize**: - data size.



**Parameters**:

* double *const **dataReal**
* double *const **dataImag**
* size_t **dataSize**

**Return type**: [SyscInputComplexScalarData](structSyscInputComplexScalarData.md#structSyscInputComplexScalarData)

<a id="group__SyscParticipantLibraryCAPI_1ga11c65e99f509cd226f13b0932aba8eb7"></a>
### Function syscGetInputComplexScalarDataSplitFloat

![][public]

```
SyscInputComplexScalarData syscGetInputComplexScalarDataSplitFloat(float *const dataReal, float *const dataImag, size_t dataSize)
```

Create a complex input scalar data access struct.

**Parameters**:

* **dataReal**: - pointer to the single-precision real data component.
* **dataImag**: - pointer to the single-precision imaginary data component.
* **dataSize**: - data size.



**Parameters**:

* float *const **dataReal**
* float *const **dataImag**
* size_t **dataSize**

**Return type**: [SyscInputComplexScalarData](structSyscInputComplexScalarData.md#structSyscInputComplexScalarData)

<a id="group__SyscParticipantLibraryCAPI_1ga5cbb0ff3aa857c03d3626038e3a20ffa"></a>
### Function syscGetInputComplexScalarDataCompactDouble

![][public]

```
SyscInputComplexScalarData syscGetInputComplexScalarDataCompactDouble(double *const data, size_t dataSize)
```

Create a complex input scalar data access struct.

**Parameters**:

* **data**: - pointer to the double-precision data.
* **dataSize**: - data size.



**Parameters**:

* double *const **data**
* size_t **dataSize**

**Return type**: [SyscInputComplexScalarData](structSyscInputComplexScalarData.md#structSyscInputComplexScalarData)

<a id="group__SyscParticipantLibraryCAPI_1ga0ff093e80497efd6dccb6ea29c9face3"></a>
### Function syscGetInputComplexScalarDataCompactFloat

![][public]

```
SyscInputComplexScalarData syscGetInputComplexScalarDataCompactFloat(float *const data, size_t dataSize)
```

Create a complex input scalar data access struct.

**Parameters**:

* **data**: - pointer to the single-precision data.
* **dataSize**: - data size.



**Parameters**:

* float *const **data**
* size_t **dataSize**

**Return type**: [SyscInputComplexScalarData](structSyscInputComplexScalarData.md#structSyscInputComplexScalarData)

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
  void* data1;                          
  void* data2;                          
  size_t size;                          
} SyscInputComplexScalarData;

SyscInputComplexScalarData syscGetInputComplexScalarData();

SyscInputComplexScalarData syscGetInputComplexScalarDataSplitDouble(
  double* const dataReal,
  double* const dataImag,
  size_t dataSize);

SyscInputComplexScalarData syscGetInputComplexScalarDataSplitFloat(
  float* const dataReal,
  float* const dataImag,
  size_t dataSize);

SyscInputComplexScalarData syscGetInputComplexScalarDataCompactDouble(
  double* const data,
  size_t dataSize);

SyscInputComplexScalarData syscGetInputComplexScalarDataCompactFloat(
  float* const data,
  size_t dataSize);

#ifdef __cplusplus
}
#endif
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)