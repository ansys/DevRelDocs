# File OutputScalarData.hpp

![][C++]

**Location**: `OutputScalarData.hpp`





## Classes

* [sysc::OutputScalarData](structsysc_1_1OutputScalarData.md#structsysc_1_1OutputScalarData)

## Namespaces

* [sysc](namespacesysc.md#namespacesysc)

## Includes

* SystemCouplingParticipant/CommonTypes.hpp
* SystemCouplingParticipant/InputScalarData.hpp
* <cstddef>
* <cstdint>
* <vector>


```mermaid
graph LR
1["OutputScalarData.hpp"]
click 1 "OutputScalarData_8hpp.md#OutputScalarData_8hpp"
1 --> 2
1 --> 3
1 --> 4
1 --> 5
1 --> 6

2["SystemCouplingParticipant/CommonTypes.hpp"]

3["SystemCouplingParticipant/InputScalarData.hpp"]

4["cstddef"]

5["cstdint"]

6["vector"]

```


## Source


```cpp
/*
 * © 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.
 */

#pragma once

#include "SystemCouplingParticipant/CommonTypes.hpp"
#include "SystemCouplingParticipant/InputScalarData.hpp"

#include <cstddef>
#include <cstdint>
#include <vector>

namespace sysc {

struct OutputScalarData {
public:
  OutputScalarData(
    const double* data,
    std::size_t size) :
      m_dataType(sysc::Double),
      m_data(data),
      m_size(size)
  {
  }

  OutputScalarData(
    const float* data,
    std::size_t size) :
      m_dataType(sysc::Float),
      m_data(data),
      m_size(size)
  {
  }

  OutputScalarData(const std::vector<double>& data) :
      m_dataType(sysc::Double),
      m_data(data.data()),
      m_size(data.size())
  {
  }

  OutputScalarData(const std::vector<float>& data) :
      m_dataType(sysc::Float),
      m_data(data.data()),
      m_size(data.size())
  {
  }

  OutputScalarData(
    const std::uint16_t* data,
    std::size_t size) :
      m_dataType(sysc::UnsignedInt16),
      m_data(data),
      m_size(size)
  {
  }

  OutputScalarData(const std::vector<std::uint16_t>& data) :
      m_dataType(sysc::UnsignedInt16),
      m_data(data.data()),
      m_size(data.size())
  {
  }

  OutputScalarData(
    const std::uint64_t* data,
    std::size_t size) :
      m_dataType(sysc::UnsignedInt64),
      m_data(data),
      m_size(size)
  {
  }

  OutputScalarData(const std::vector<std::uint64_t>& data) :
      m_dataType(sysc::UnsignedInt64),
      m_data(data.data()),
      m_size(data.size())
  {
  }

  OutputScalarData(
    const std::int32_t* data,
    std::size_t size) :
      m_dataType(sysc::Int32),
      m_data(data),
      m_size(size)
  {
  }

  OutputScalarData(const std::vector<std::int32_t>& data) :
      m_dataType(sysc::Int32),
      m_data(data.data()),
      m_size(data.size())
  {
  }

  OutputScalarData(
    const std::int64_t* data,
    std::size_t size) :
      m_dataType(sysc::Int64),
      m_data(data),
      m_size(size)
  {
  }

  OutputScalarData(const std::vector<std::int64_t>& data) :
      m_dataType(sysc::Int64),
      m_data(data.data()),
      m_size(data.size())
  {
  }

  OutputScalarData() = default;

  OutputScalarData(const OutputScalarData&) = default;

  OutputScalarData(OutputScalarData&&) = default;

  OutputScalarData& operator=(const OutputScalarData&) = default;

  OutputScalarData& operator=(OutputScalarData&&) = default;

  OutputScalarData(InputScalarData data) :
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
  sysc::PrimitiveType m_dataType{sysc::Double};
  const void* m_data{nullptr};
  std::size_t m_size{0};
};

}  // namespace sysc
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)