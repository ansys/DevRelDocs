# File InputScalarData.hpp

![][C++]

**Location**: `InputScalarData.hpp`





## Classes

* [sysc::InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData)

## Namespaces

* [sysc](namespacesysc.md#namespacesysc)

## Includes

* SystemCouplingParticipant/CommonTypes.hpp
* <cstddef>
* <vector>


```mermaid
graph LR
1["InputScalarData.hpp"]
click 1 "InputScalarData_8hpp.md#InputScalarData_8hpp"
1 --> 2
1 --> 3
1 --> 4

2["SystemCouplingParticipant/CommonTypes.hpp"]

3["cstddef"]

4["vector"]

```


## Source


```cpp
/*
 * © 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.
 */

#pragma once

#include "SystemCouplingParticipant/CommonTypes.hpp"

#include <cstddef>
#include <vector>

namespace sysc {

struct InputScalarData {
public:
  InputScalarData(
    double* data,
    std::size_t size) :
      m_data(data),
      m_size(size)
  {
  }

  InputScalarData(
    float* data,
    std::size_t size) :
      m_dataType(sysc::Float),
      m_data(data),
      m_size(size)
  {
  }

  InputScalarData(std::vector<double>& data) :
      InputScalarData(data.data(), data.size())
  {
  }

  InputScalarData(std::vector<float>& data) :
      InputScalarData(data.data(), data.size())
  {
  }

  InputScalarData() = default;

  InputScalarData(const InputScalarData&) = default;

  InputScalarData(InputScalarData&&) = default;

  InputScalarData& operator=(const InputScalarData&) = default;

  InputScalarData& operator=(InputScalarData&&) = default;

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

  void* getData() const noexcept
  {
    return m_data;
  }

private:
  sysc::PrimitiveType m_dataType{sysc::Double};
  void* m_data{nullptr};
  std::size_t m_size{0};
};

using ScalarData = InputScalarData;

}  // namespace sysc
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)