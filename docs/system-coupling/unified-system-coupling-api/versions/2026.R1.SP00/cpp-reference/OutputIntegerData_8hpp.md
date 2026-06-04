# File OutputIntegerData.hpp

![][C++]

**Location**: `OutputIntegerData.hpp`





## Classes

* [sysc::OutputIntegerData](structsysc_1_1OutputIntegerData.md#structsysc_1_1OutputIntegerData)

## Namespaces

* [sysc](namespacesysc.md#namespacesysc)

## Includes

* SystemCouplingParticipant/CommonTypes.hpp
* SystemCouplingParticipant/InputIntegerData.hpp
* SystemCouplingParticipant/OutputScalarData.hpp
* <cstddef>
* <cstdint>
* <vector>


```mermaid
graph LR
1["OutputIntegerData.hpp"]
click 1 "OutputIntegerData_8hpp.md#OutputIntegerData_8hpp"
1 --> 2
1 --> 3
1 --> 4
1 --> 5
1 --> 6
1 --> 7

2["SystemCouplingParticipant/CommonTypes.hpp"]

3["SystemCouplingParticipant/InputIntegerData.hpp"]

4["SystemCouplingParticipant/OutputScalarData.hpp"]

5["cstddef"]

6["cstdint"]

7["vector"]

```


## Source


```cpp
/*
 * © 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.
 */

#pragma once

#include "SystemCouplingParticipant/CommonTypes.hpp"
#include "SystemCouplingParticipant/InputIntegerData.hpp"
#include "SystemCouplingParticipant/OutputScalarData.hpp"

#include <cstddef>
#include <cstdint>
#include <vector>

namespace sysc {

struct OutputIntegerData {
public:
  OutputIntegerData(
    const std::uint16_t* data,
    std::size_t size) :
      m_dataType(sysc::UnsignedInt16),
      m_data(data),
      m_size(size)
  {
  }

  OutputIntegerData(const std::vector<std::uint16_t>& data) :
      m_dataType(sysc::UnsignedInt16),
      m_data(data.data()),
      m_size(data.size())
  {
  }

  OutputIntegerData(
    const std::uint64_t* data,
    std::size_t size) :
      m_dataType(sysc::UnsignedInt64),
      m_data(data),
      m_size(size)
  {
  }

  OutputIntegerData(const std::vector<std::uint64_t>& data) :
      m_dataType(sysc::UnsignedInt64),
      m_data(data.data()),
      m_size(data.size())
  {
  }

  OutputIntegerData(
    const std::int32_t* data,
    std::size_t size) :
      m_dataType(sysc::Int32),
      m_data(data),
      m_size(size)
  {
  }

  OutputIntegerData(const std::vector<std::int32_t>& data) :
      m_dataType(sysc::Int32),
      m_data(data.data()),
      m_size(data.size())
  {
  }

  OutputIntegerData(
    const std::int64_t* data,
    std::size_t size) :
      m_dataType(sysc::Int64),
      m_data(data),
      m_size(size)
  {
  }

  OutputIntegerData(const std::vector<std::int64_t>& data) :
      m_dataType(sysc::Int64),
      m_data(data.data()),
      m_size(data.size())
  {
  }

  OutputIntegerData(const OutputScalarData& data) :
      m_dataType(data.getDataType()),
      m_data(data.getData()),
      m_size(data.size())
  {
  }

  OutputIntegerData() = default;

  OutputIntegerData(const OutputIntegerData&) = default;

  OutputIntegerData(OutputIntegerData&&) = default;

  OutputIntegerData& operator=(const OutputIntegerData&) = default;

  OutputIntegerData& operator=(OutputIntegerData&&) = default;

  OutputIntegerData(InputIntegerData data) :
      m_dataType(data.getDataType()),
      m_data(data.getData()),
      m_size(data.size())
  {
  }

  std::size_t size() const noexcept
  {
    return m_size;
  }

  bool empty() const noexcept
  {
    return m_size == 0;
  }

  sysc::PrimitiveType getDataType() const noexcept
  {
    return m_dataType;
  }

  const void* getData() const noexcept
  {
    return m_data;
  }

private:
  sysc::PrimitiveType m_dataType{sysc::Int64};
  const void* m_data{nullptr};
  std::size_t m_size{0};
};

}  // namespace sysc
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)