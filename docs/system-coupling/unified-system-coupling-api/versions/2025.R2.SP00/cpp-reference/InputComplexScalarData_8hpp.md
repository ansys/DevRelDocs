# File InputComplexScalarData.hpp

![][C++]

**Location**: `InputComplexScalarData.hpp`





## Classes

* [sysc::InputComplexScalarData](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData)

## Namespaces

* [sysc](namespacesysc.md#namespacesysc)

## Includes

* SystemCouplingParticipant/LibraryType.hpp
* SystemCouplingParticipant/CommonTypes.hpp
* <complex>
* <cstddef>
* <vector>

```mermaid
graph LR
1["InputComplexScalarData.hpp"]
click 1 "InputComplexScalarData_8hpp.md#InputComplexScalarData_8hpp"
1 --> 2
1 --> 3
1 --> 4
1 --> 5
1 --> 6

3["SystemCouplingParticipant/CommonTypes.hpp"]

6["vector"]

2["SystemCouplingParticipant/LibraryType.hpp"]

5["cstddef"]

4["complex"]

```

## Source

```cpp
/*
* Copyright ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.
*/

#pragma once

#include "SystemCouplingParticipant/LibraryType.hpp"

#include "SystemCouplingParticipant/CommonTypes.hpp"

#include <complex>
#include <cstddef>
#include <vector>

namespace sysc {

class SYSTEM_COUPLING_PARTICIPANT_DLL InputComplexScalarData {
public:
  InputComplexScalarData(std::vector<std::complex<double>>& dataComplex);

  InputComplexScalarData(std::complex<double>* dataComplex, std::size_t size);

  InputComplexScalarData(double* dataComplex, std::size_t size);

  InputComplexScalarData(
    std::vector<double>& dataReal,
    std::vector<double>& dataImaginary);

  InputComplexScalarData(
    double* dataReal,
    double* dataImaginary,
    std::size_t size);

  InputComplexScalarData(std::vector<std::complex<float>>& dataComplex);

  InputComplexScalarData(std::complex<float>* dataComplex, std::size_t size);

  InputComplexScalarData(float* dataComplex, std::size_t size);

  InputComplexScalarData(
    std::vector<float>& dataReal,
    std::vector<float>& dataImaginary);

  InputComplexScalarData(
    float* dataReal,
    float* dataImaginary,
    std::size_t size);

  InputComplexScalarData() = default;

  InputComplexScalarData(const InputComplexScalarData&) = default;

  InputComplexScalarData(InputComplexScalarData&&) = default;

  InputComplexScalarData& operator=(const InputComplexScalarData&) = default;

  InputComplexScalarData& operator=(InputComplexScalarData&&) = default;

  std::size_t size() const noexcept;

  bool empty() const noexcept;

  sysc::PrimitiveType getDataType() const noexcept;

  bool isSplitComplex() const noexcept;

  void* getData1() const noexcept;

  void* getData2() const noexcept;

private:
  PrimitiveType m_dataType{PrimitiveType::Double};
  bool m_isSplitComplex{false};

  void* m_data1{nullptr};
  void* m_data2{nullptr};

  std::size_t m_size{0};
};

}  // namespace sysc
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)