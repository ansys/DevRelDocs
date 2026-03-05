# File syscDatashipper.h

![][C]

**Location**: `syscDatashipper.h`





## Includes

* SystemCouplingParticipant/LibraryType.hpp
* SystemCouplingParticipant/syscCommonTypes.h
* SystemCouplingParticipant/syscInputIntegerData.h
* SystemCouplingParticipant/syscOutputIntegerData.h
* SystemCouplingParticipant/syscInputScalarData.h
* SystemCouplingParticipant/syscOutputScalarData.h
* SystemCouplingParticipant/syscInputVectorData.h
* SystemCouplingParticipant/syscOutputVectorData.h
* <stddef.h>


```mermaid
graph LR
1["syscDatashipper.h"]
click 1 "syscDatashipper_8h.md#syscDatashipper_8h"
1 --> 2
1 --> 3
1 --> 4
1 --> 5
1 --> 6
1 --> 7
1 --> 8
1 --> 9
1 --> 10

2["SystemCouplingParticipant/LibraryType.hpp"]

3["SystemCouplingParticipant/syscCommonTypes.h"]

4["SystemCouplingParticipant/syscInputIntegerData.h"]

6["SystemCouplingParticipant/syscInputScalarData.h"]

8["SystemCouplingParticipant/syscInputVectorData.h"]

5["SystemCouplingParticipant/syscOutputIntegerData.h"]

7["SystemCouplingParticipant/syscOutputScalarData.h"]

9["SystemCouplingParticipant/syscOutputVectorData.h"]

10["stddef.h"]

```


## Source


```
/*
* Copyright ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.
*/

#pragma once

#include "SystemCouplingParticipant/LibraryType.hpp"

#include "SystemCouplingParticipant/syscCommonTypes.h"
#include "SystemCouplingParticipant/syscInputIntegerData.h"
#include "SystemCouplingParticipant/syscOutputIntegerData.h"
#include "SystemCouplingParticipant/syscInputScalarData.h"
#include "SystemCouplingParticipant/syscOutputScalarData.h"
#include "SystemCouplingParticipant/syscInputVectorData.h"
#include "SystemCouplingParticipant/syscOutputVectorData.h"

#include <stddef.h>

#ifdef __cplusplus
extern "C" {
#endif

#ifdef __cplusplus
}
#endif
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)