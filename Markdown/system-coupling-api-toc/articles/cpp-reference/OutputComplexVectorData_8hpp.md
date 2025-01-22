# File OutputComplexVectorData.hpp

![][C++]

**Location**: `OutputComplexVectorData.hpp`





## Classes

* [sysc::OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData)

## Namespaces

* [sysc](namespacesysc.md#namespacesysc)

## Includes

* SystemCouplingParticipant/LibraryType.hpp
* SystemCouplingParticipant/CommonTypes.hpp
* <cstddef>
* <complex>
* <vector>

```mermaid
graph LR
3["SystemCouplingParticipant/CommonTypes.hpp"]

1["OutputComplexVectorData.hpp"]
click 1 "OutputComplexVectorData_8hpp.md#OutputComplexVectorData_8hpp"
1 --> 2
1 --> 3
1 --> 4
1 --> 5
1 --> 6

6["vector"]

2["SystemCouplingParticipant/LibraryType.hpp"]

4["cstddef"]

5["complex"]

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
#include <complex>
#include <vector>

namespace sysc {

class SYSTEM_COUPLING_PARTICIPANT_DLL OutputComplexVectorData {
public:
  OutputComplexVectorData(const std::vector<std::complex<double>>& dataComplex);

  OutputComplexVectorData(const std::vector<std::complex<double>>& dataComplex, Dimension dimension);

  OutputComplexVectorData(const double* dataComplex, std::size_t size);

  OutputComplexVectorData(const double* dataComplex, std::size_t size, Dimension dimension);

  OutputComplexVectorData(const std::complex<double>* dataComplex, std::size_t size);

  OutputComplexVectorData(const std::complex<double>* dataComplex, std::size_t size, Dimension dimension);

  OutputComplexVectorData(
    const std::vector<double>& dataReal,
    const std::vector<double>& dataImaginary);

  OutputComplexVectorData(
    const double* dataReal,
    const double* dataImaginary,
    std::size_t size);

  OutputComplexVectorData(
    const std::vector<std::complex<double>>& dataComplex1,
    const std::vector<std::complex<double>>& dataComplex2,
    const std::vector<std::complex<double>>& dataComplex3);

  OutputComplexVectorData(
    const std::complex<double>* dataComplex1,
    const std::complex<double>* dataComplex2,
    const std::complex<double>* dataComplex3,
    std::size_t size);

  OutputComplexVectorData(
    const double* dataComplex1,
    const double* dataComplex2,
    const double* dataComplex3,
    std::size_t size);

  OutputComplexVectorData(
    const std::vector<double>& dataReal1,
    const std::vector<double>& dataImaginary1,
    const std::vector<double>& dataReal2,
    const std::vector<double>& dataImaginary2,
    const std::vector<double>& dataReal3,
    const std::vector<double>& dataImaginary3);

  OutputComplexVectorData(
    const double* dataReal1,
    const double* dataImaginary1,
    const double* dataReal2,
    const double* dataImaginary2,
    const double* dataReal3,
    const double* dataImaginary3,
    std::size_t size);

  OutputComplexVectorData(const std::vector<std::complex<float>>& dataComplex);

  OutputComplexVectorData(const std::vector<std::complex<float>>& dataComplex, Dimension dimension);

  OutputComplexVectorData(const float* dataComplex, std::size_t size);

  OutputComplexVectorData(const float* dataComplex, std::size_t size, Dimension dimension);

  OutputComplexVectorData(const std::complex<float>* dataComplex, std::size_t size);

  OutputComplexVectorData(const std::complex<float>* dataComplex, std::size_t size, Dimension dimension);

  OutputComplexVectorData(
    const std::vector<float>& dataReal,
    const std::vector<float>& dataImaginary);

  OutputComplexVectorData(
    const float* dataReal,
    const float* dataImaginary,
    std::size_t size);

  OutputComplexVectorData(
    const std::vector<std::complex<float>>& dataComplex1,
    const std::vector<std::complex<float>>& dataComplex2,
    const std::vector<std::complex<float>>& dataComplex3);

  OutputComplexVectorData(
    const std::complex<float>* dataComplex1,
    const std::complex<float>* dataComplex2,
    const std::complex<float>* dataComplex3,
    std::size_t size);

  OutputComplexVectorData(
    const float* dataComplex1,
    const float* dataComplex2,
    const float* dataComplex3,
    std::size_t size);

  OutputComplexVectorData(
    const std::vector<float>& dataReal1,
    const std::vector<float>& dataImaginary1,
    const std::vector<float>& dataReal2,
    const std::vector<float>& dataImaginary2,
    const std::vector<float>& dataReal3,
    const std::vector<float>& dataImaginary3);

  OutputComplexVectorData(
    const float* dataReal1,
    const float* dataImaginary1,
    const float* dataReal2,
    const float* dataImaginary2,
    const float* dataReal3,
    const float* dataImaginary3,
    std::size_t size);

  OutputComplexVectorData() = default;

  OutputComplexVectorData(const OutputComplexVectorData&) = default;

  OutputComplexVectorData(OutputComplexVectorData&&) = default;

  OutputComplexVectorData& operator=(const OutputComplexVectorData&) = default;

  OutputComplexVectorData& operator=(OutputComplexVectorData&&) = default;

  std::size_t size() const noexcept;

  bool empty() const noexcept;

  sysc::PrimitiveType getDataType() const noexcept;

  bool isSplitVector() const noexcept;

  bool isSplitComplex() const noexcept;

  const void* getData1() const noexcept;

  const void* getData2() const noexcept;

  const void* getData3() const noexcept;

  const void* getData4() const noexcept;

  const void* getData5() const noexcept;

  const void* getData6() const noexcept;

  Dimension getDimension() const noexcept;

private:
  sysc::PrimitiveType m_dataType{sysc::Double};
  bool m_isSplitVector{false};
  bool m_isSplitComplex{false};

  const void* m_data1{nullptr};
  const void* m_data2{nullptr};
  const void* m_data3{nullptr};
  const void* m_data4{nullptr};
  const void* m_data5{nullptr};
  const void* m_data6{nullptr};

  std::size_t m_size{0};
  Dimension m_dimension{Dimension::D3};
};
}  // namespace sysc
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)