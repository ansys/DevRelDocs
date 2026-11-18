# File PointCloud.hpp

![][C++]

**Location**: `PointCloud.hpp`





## Classes

* [sysc::InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud)
* [sysc::PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud)

## Namespaces

* [sysc](namespacesysc.md#namespacesysc)

## Includes

* SystemCouplingParticipant/LibraryType.hpp
* SystemCouplingParticipant/InputIntegerData.hpp
* SystemCouplingParticipant/InputVectorData.hpp
* SystemCouplingParticipant/OutputIntegerData.hpp
* SystemCouplingParticipant/OutputVectorData.hpp
* SystemCouplingParticipant/ValidityStatus.hpp
* <cstddef>


```mermaid
graph LR
1["PointCloud.hpp"]
click 1 "PointCloud_8hpp.md#PointCloud_8hpp"
1 --> 2
1 --> 3
1 --> 4
1 --> 5
1 --> 6
1 --> 7
1 --> 8

3["SystemCouplingParticipant/InputIntegerData.hpp"]

4["SystemCouplingParticipant/InputVectorData.hpp"]

2["SystemCouplingParticipant/LibraryType.hpp"]

5["SystemCouplingParticipant/OutputIntegerData.hpp"]

6["SystemCouplingParticipant/OutputVectorData.hpp"]

7["SystemCouplingParticipant/ValidityStatus.hpp"]

8["cstddef"]

```


## Source


```cpp
/*
 * © 2026 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.
 */

#pragma once

#include "SystemCouplingParticipant/LibraryType.hpp"

#include "SystemCouplingParticipant/InputIntegerData.hpp"
#include "SystemCouplingParticipant/InputVectorData.hpp"
#include "SystemCouplingParticipant/OutputIntegerData.hpp"
#include "SystemCouplingParticipant/OutputVectorData.hpp"
#include "SystemCouplingParticipant/ValidityStatus.hpp"

#include <cstddef>

namespace sysc {

struct InputPointCloud {
public:
  InputPointCloud(
    InputIntegerData nodeIds,
    InputVectorData nodeCoords) :
      nodeIds(nodeIds),
      nodeCoords(nodeCoords) {}

  InputPointCloud() = default;

  InputPointCloud(const InputPointCloud&) = default;

  InputPointCloud(InputPointCloud&&) = default;

  InputPointCloud& operator=(const InputPointCloud&) = default;

  InputPointCloud& operator=(InputPointCloud&&) = default;

  std::size_t getNumNodes() const noexcept
  {
    return nodeCoords.size();
  }

  std::size_t size() const noexcept
  {
    return getNumNodes();
  }

  InputIntegerData nodeIds;
  InputVectorData nodeCoords;
};

class SYSTEM_COUPLING_PARTICIPANT_DLL PointCloud {
public:
  std::int64_t connectivityStamp{0};

  std::int64_t coordinatesStamp{0};

  std::int64_t partitioningStamp{0};

  PointCloud(InputPointCloud ipc) :
      m_nodeIds(ipc.nodeIds),
      m_nodeCoords(ipc.nodeCoords) {}

  PointCloud(
    OutputIntegerData nodeIds,
    OutputVectorData nodeCoords) :
      m_nodeIds(nodeIds),
      m_nodeCoords(nodeCoords) {}

  PointCloud() = default;

  PointCloud(const PointCloud&) = default;

  PointCloud(PointCloud&&) = default;

  PointCloud& operator=(const PointCloud&) = default;

  PointCloud& operator=(PointCloud&&) = default;

  std::size_t getNumNodes() const noexcept { return m_nodeCoords.size(); }

  OutputIntegerData getNodeIds() const { return m_nodeIds; }

  OutputVectorData getNodeCoords() const { return m_nodeCoords; }

  ValidityStatus checkValidity() const
  {
    if (!m_nodeIds.empty() && m_nodeIds.size() != m_nodeCoords.size()) {
      const std::string msg("Node ids and node coords sizes are inconsistent: " +
                            std::to_string(m_nodeIds.size()) + " and " +
                            std::to_string(m_nodeCoords.size()) + " respectively.");

      return {false, msg};
    }

    // report that no issues were found
    return {true, ""};
  }

  std::size_t size() const noexcept
  {
    return getNumNodes();
  }

private:
  OutputIntegerData m_nodeIds;
  OutputVectorData m_nodeCoords;
};

}  // namespace sysc
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)