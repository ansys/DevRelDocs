# File syscDataTransfer.h

![][C]

**Location**: `syscDataTransfer.h`





## Classes

* [SyscDataTransfer](structSyscDataTransfer.md#structSyscDataTransfer)

## Includes

* SystemCouplingParticipant/LibraryType.hpp
* SystemCouplingParticipant/syscCommonTypes.h
* SystemCouplingParticipant/syscVariable.h
* <stddef.h>

```mermaid
graph LR
3["SystemCouplingParticipant/syscCommonTypes.h"]

5["stddef.h"]

2["SystemCouplingParticipant/LibraryType.hpp"]

4["SystemCouplingParticipant/syscVariable.h"]

1["syscDataTransfer.h"]
click 1 "syscDataTransfer_8h.md#syscDataTransfer_8h"
1 --> 2
1 --> 3
1 --> 4
1 --> 5

```

## Typedefs

<a id="group__SyscParticipantLibraryCAPI_1ga8e23d76b7478495ca52b0e1f719607fc"></a>
### Typedef SyscDataTransfer

![][public]

**Definition**: `syscDataTransfer.h` (line 33)

```
typedef struct SyscDataTransfer SyscDataTransfer
```

Provide a struct for a data transfer.

Data transfer specifies the source and target variables for mapping.



**Return type**: struct [SyscDataTransfer](structSyscDataTransfer.md#structSyscDataTransfer)

## Functions

<a id="group__SyscParticipantLibraryCAPI_1ga10c3562aba2bdcef468fbde205008112"></a>
### Function syscGetDataTransfer

![][public]

```
SyscDataTransfer syscGetDataTransfer(SyscVariable sideOneVariable, SyscVariable sideTwoVariable, enum SyscInterfaceSide targetSide)
```

Create a data transfer using side{One|Two}Variable.

**Parameters**:

* **sideOneVariable**: - side one variable.
* **sideTwoVariable**: - side two variable.
* **targetSide**: - target side.



**Parameters**:

* [SyscVariable](structSyscVariable.md#structSyscVariable) **sideOneVariable**
* [SyscVariable](structSyscVariable.md#structSyscVariable) **sideTwoVariable**
* enum [SyscInterfaceSide](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gacf32f1d9c1566f28bee2b348b2dcd9f5) **targetSide**

**Return type**: [SyscDataTransfer](structSyscDataTransfer.md#structSyscDataTransfer)

<a id="group__SyscParticipantLibraryCAPI_1gadb07659695562864d8bc0df67bec847e"></a>
### Function syscGetDataTransferST

![][public]

```
SyscDataTransfer syscGetDataTransferST(SyscVariable sourceVariable, SyscVariable targetVariable, enum SyscInterfaceSide targetSide)
```

Create a data transfer using {source|target}Variable.

**Parameters**:

* **sourceVariable**: - source variable.
* **targetVariable**: - target variable.
* **targetSide**: - target side.



**Parameters**:

* [SyscVariable](structSyscVariable.md#structSyscVariable) **sourceVariable**
* [SyscVariable](structSyscVariable.md#structSyscVariable) **targetVariable**
* enum [SyscInterfaceSide](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gacf32f1d9c1566f28bee2b348b2dcd9f5) **targetSide**

**Return type**: [SyscDataTransfer](structSyscDataTransfer.md#structSyscDataTransfer)

## Source

```
/*
* Copyright ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.
*/

#pragma once

#include "SystemCouplingParticipant/LibraryType.hpp"

#include "SystemCouplingParticipant/syscCommonTypes.h"
#include "SystemCouplingParticipant/syscVariable.h"

#include <stddef.h>

#ifdef __cplusplus
extern "C" {
#endif

typedef struct SyscDataTransfer {
  SyscVariable sourceVariable;
  SyscVariable targetVariable;
  enum SyscInterfaceSide targetSide;
} SyscDataTransfer;

SyscDataTransfer syscGetDataTransfer(
  SyscVariable sideOneVariable,
  SyscVariable sideTwoVariable,
  enum SyscInterfaceSide targetSide);

SyscDataTransfer syscGetDataTransferST(
  SyscVariable sourceVariable,
  SyscVariable targetVariable,
  enum SyscInterfaceSide targetSide);

#ifdef __cplusplus
}
#endif
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)