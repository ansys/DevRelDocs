# File OutputIntegerData.hpp

![][C++]

**Location**: `OutputIntegerData.hpp`





## Classes

* [sysc::OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData)

## Namespaces

* [sysc](namespacesysc.md#namespacesysc)

## Includes

* SystemCouplingParticipant/LibraryType.hpp
* SystemCouplingParticipant/CommonTypes.hpp
* SystemCouplingParticipant/OutputScalarData.hpp
* <cstddef>
* <cstdint>
* <vector>

```mermaid
graph LR
6["cstdint"]

1["OutputIntegerData.hpp"]
click 1 "OutputIntegerData_8hpp.md#OutputIntegerData_8hpp"
1 --> 2
1 --> 3
1 --> 4
1 --> 5
1 --> 6
1 --> 7

3["SystemCouplingParticipant/CommonTypes.hpp"]

4["SystemCouplingParticipant/OutputScalarData.hpp"]

7["vector"]

2["SystemCouplingParticipant/LibraryType.hpp"]

5["cstddef"]

```

## Source

```cpp
/*
* Copyright ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.
*/

#pragma once

#include "SystemCouplingParticipant/LibraryType.hpp"

#include "SystemCouplingParticipant/CommonTypes.hpp"
#include "SystemCouplingParticipant/OutputScalarData.hpp"

#include <cstddef>
#include <cstdint>
#include <vector>

namespace sysc {

class SYSTEM_COUPLING_PARTICIPANT_DLL OutputIntegerData {
public:
  OutputIntegerData(
    const std::uint16_t* data,
    std::size_t size);

  OutputIntegerData(const std::vector<std::uint16_t>& data);

  OutputIntegerData(
    const std::uint64_t* data,
    std::size_t size);

  OutputIntegerData(const std::vector<std::uint64_t>& data);

  OutputIntegerData(
    const std::int32_t* data,
    std::size_t size);

  OutputIntegerData(const std::vector<std::int32_t>& data);

  OutputIntegerData(
    const std::int64_t* data,
    std::size_t size);

  OutputIntegerData(const std::vector<std::int64_t>& data);

  OutputIntegerData(const OutputScalarData& data);

  OutputIntegerData() = default;

  OutputIntegerData(const OutputIntegerData&) = default;

  OutputIntegerData(OutputIntegerData&&) = default;

  OutputIntegerData& operator=(const OutputIntegerData&) = default;

  OutputIntegerData& operator=(OutputIntegerData&&) = default;

  std::size_t size() const noexcept;

  bool empty() const noexcept;

  sysc::PrimitiveType getDataType() const noexcept;

  const void* getData() const noexcept;

private:
  sysc::PrimitiveType m_dataType{sysc::Int64};
  const void* m_data{nullptr};
  std::size_t m_size{0};
};

}  // namespace sysc
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)