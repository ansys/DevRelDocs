# File Datashipper.hpp

![][C++]

**Location**: `Datashipper.hpp`





## Namespaces

* [sysc](namespacesysc.md#namespacesysc)

## Includes

* SystemCouplingParticipant/LibraryType.hpp
* SystemCouplingParticipant/CommonTypes.hpp
* SystemCouplingParticipant/InputScalarData.hpp
* SystemCouplingParticipant/OutputScalarData.hpp
* <string>

```mermaid
graph LR
4["SystemCouplingParticipant/InputScalarData.hpp"]

6["string"]

3["SystemCouplingParticipant/CommonTypes.hpp"]

5["SystemCouplingParticipant/OutputScalarData.hpp"]

1["Datashipper.hpp"]
click 1 "Datashipper_8hpp.md#Datashipper_8hpp"
1 --> 2
1 --> 3
1 --> 4
1 --> 5
1 --> 6

2["SystemCouplingParticipant/LibraryType.hpp"]

```

## Source

```cpp
/*
* Copyright ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.
*/

#pragma once

#include "SystemCouplingParticipant/LibraryType.hpp"

#include "SystemCouplingParticipant/CommonTypes.hpp"
#include "SystemCouplingParticipant/InputScalarData.hpp"
#include "SystemCouplingParticipant/OutputScalarData.hpp"

#include <string>

namespace sysc {

void SYSTEM_COUPLING_PARTICIPANT_DLL rearrange(
  OutputScalarData source, InputScalarData target);

}  // namespace sysc
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)