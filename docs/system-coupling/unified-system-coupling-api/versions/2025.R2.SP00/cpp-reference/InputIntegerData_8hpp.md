# File InputIntegerData.hpp

![][C++]

**Location**: `InputIntegerData.hpp`





## Classes

* [sysc::InputIntegerData](classsysc_1_1InputIntegerData.md#classsysc_1_1InputIntegerData)

## Namespaces

* [sysc](namespacesysc.md#namespacesysc)

## Includes

* SystemCouplingParticipant/LibraryType.hpp
* SystemCouplingParticipant/CommonTypes.hpp
* <cstddef>
* <cstdint>
* <vector>

```mermaid
graph LR
5["cstdint"]

3["SystemCouplingParticipant/CommonTypes.hpp"]

6["vector"]

1["InputIntegerData.hpp"]
click 1 "InputIntegerData_8hpp.md#InputIntegerData_8hpp"
1 --> 2
1 --> 3
1 --> 4
1 --> 5
1 --> 6

2["SystemCouplingParticipant/LibraryType.hpp"]

4["cstddef"]

```

## Source

```cpp
/*
* Copyright ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.
*/

#pragma once

#include "SystemCouplingParticipant/LibraryType.hpp"

#include "SystemCouplingParticipant/CommonTypes.hpp"

#include <cstddef>
#include <cstdint>
#include <vector>

namespace sysc {

class SYSTEM_COUPLING_PARTICIPANT_DLL InputIntegerData {
public:
  InputIntegerData(std::uint16_t* data, std::size_t size);

  InputIntegerData(std::vector<std::uint16_t>& data);

  InputIntegerData(std::uint64_t* data, std::size_t size);

  InputIntegerData(std::vector<std::uint64_t>& data);

  InputIntegerData(std::int32_t* data, std::size_t size);

  InputIntegerData(std::vector<std::int32_t>& data);

  InputIntegerData(std::int64_t* data, std::size_t size);

  InputIntegerData(std::vector<std::int64_t>& data);

  InputIntegerData() = default;

  InputIntegerData(const InputIntegerData&) = default;

  InputIntegerData(InputIntegerData&&) = default;

  InputIntegerData& operator=(const InputIntegerData&) = default;

  InputIntegerData& operator=(InputIntegerData&&) = default;

  std::size_t size() const noexcept;

  bool empty() const noexcept;

  sysc::PrimitiveType getDataType() const noexcept;

  void* getData() const noexcept;

private:
  sysc::PrimitiveType m_dataType{sysc::PrimitiveType::Int32};
  void* m_data{nullptr};
  std::size_t m_size{0};
};

}  // namespace sysc
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)