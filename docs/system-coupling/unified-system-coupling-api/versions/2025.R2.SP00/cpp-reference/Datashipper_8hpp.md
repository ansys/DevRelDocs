# File Datashipper.hpp

![][C++]

**Location**: `Datashipper.hpp`





## Namespaces

* [sysc](namespacesysc.md#namespacesysc)

## Includes

* SystemCouplingParticipant/LibraryType.hpp
* SystemCouplingParticipant/CommonTypes.hpp
* SystemCouplingParticipant/InputIntegerData.hpp
* SystemCouplingParticipant/InputScalarData.hpp
* SystemCouplingParticipant/InputVectorData.hpp
* SystemCouplingParticipant/OutputIntegerData.hpp
* SystemCouplingParticipant/OutputScalarData.hpp
* SystemCouplingParticipant/OutputVectorData.hpp
* SystemCouplingParticipant/PointCloud.hpp

```mermaid
graph LR
4["SystemCouplingParticipant/InputIntegerData.hpp"]

6["SystemCouplingParticipant/InputVectorData.hpp"]

5["SystemCouplingParticipant/InputScalarData.hpp"]

10["SystemCouplingParticipant/PointCloud.hpp"]

3["SystemCouplingParticipant/CommonTypes.hpp"]

7["SystemCouplingParticipant/OutputIntegerData.hpp"]

8["SystemCouplingParticipant/OutputScalarData.hpp"]

1["Datashipper.hpp"]
click 1 "Datashipper_8hpp.md#Datashipper_8hpp"
1 --> 2
1 --> 3
1 --> 4
1 --> 5
1 --> 6
1 --> 7
1 --> 8
1 --> 9
1 --> 10

9["SystemCouplingParticipant/OutputVectorData.hpp"]

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
#include "SystemCouplingParticipant/InputIntegerData.hpp"
#include "SystemCouplingParticipant/InputScalarData.hpp"
#include "SystemCouplingParticipant/InputVectorData.hpp"
#include "SystemCouplingParticipant/OutputIntegerData.hpp"
#include "SystemCouplingParticipant/OutputScalarData.hpp"
#include "SystemCouplingParticipant/OutputVectorData.hpp"
#include "SystemCouplingParticipant/PointCloud.hpp"

namespace sysc {

void SYSTEM_COUPLING_PARTICIPANT_DLL rearrange(
  OutputScalarData source, InputScalarData target);

void SYSTEM_COUPLING_PARTICIPANT_DLL rearrange(
  OutputVectorData source, InputVectorData target);

void SYSTEM_COUPLING_PARTICIPANT_DLL rearrange(
  OutputIntegerData source, InputIntegerData target);

void SYSTEM_COUPLING_PARTICIPANT_DLL rearrange(PointCloud source, InputPointCloud target);

}  // namespace sysc
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)