<a id="PointCloud_8hpp"></a>
# File PointCloud.hpp

![][C++]

**Location**: `PointCloud.hpp`





## Classes

* [sysc::PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud)

## Namespaces

* [sysc](namespacesysc.md#namespacesysc)

## Includes

* SystemCouplingParticipant/LibraryType.hpp
* SystemCouplingParticipant/CommonTypes.hpp
* SystemCouplingParticipant/OutputIntegerData.hpp
* SystemCouplingParticipant/OutputVectorData.hpp
* <cstddef>

```mermaid
graph LR
3["SystemCouplingParticipant/CommonTypes.hpp"]

4["SystemCouplingParticipant/OutputIntegerData.hpp"]

5["SystemCouplingParticipant/OutputVectorData.hpp"]

2["SystemCouplingParticipant/LibraryType.hpp"]

6["cstddef"]

1["PointCloud.hpp"]
click 1 "PointCloud_8hpp.md#PointCloud_8hpp"
1 --> 2
1 --> 3
1 --> 4
1 --> 5
1 --> 6

```

## Source

```cpp
/*
 * Copyright ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.
 */

#pragma once

#include "SystemCouplingParticipant/LibraryType.hpp"

#include "SystemCouplingParticipant/CommonTypes.hpp"
#include "SystemCouplingParticipant/OutputIntegerData.hpp"
#include "SystemCouplingParticipant/OutputVectorData.hpp"

#include <cstddef>

namespace sysc {

class SYSTEM_COUPLING_PARTICIPANT_DLL PointCloud {
public:
  std::int64_t connectivityStamp{0};

  std::int64_t coordinatesStamp{0};

  std::int64_t partitioningStamp{0};

  PointCloud(
    OutputIntegerData nodeIds,
    OutputVectorData nodeCoords);

  PointCloud() = default;

  PointCloud(const PointCloud&) = default;

  PointCloud(PointCloud&&) = default;

  PointCloud& operator=(const PointCloud&) = default;

  PointCloud& operator=(PointCloud&&) = default;

  std::size_t getNumNodes() const noexcept;

  OutputIntegerData getNodeIds() const;

  OutputVectorData getNodeCoords() const;

  ValidityStatus checkValidity() const;

private:
  OutputIntegerData m_nodeIds;
  OutputVectorData m_nodeCoords;
};

}  // namespace sysc
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)