# File OutputComplexVectorData.hpp

![][C++]

**Location**: `OutputComplexVectorData.hpp`





## Classes

* [sysc::OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData)

## Namespaces

* [sysc](namespacesysc.md#namespacesysc)

## Includes

* SystemCouplingParticipant/CommonTypes.hpp
* SystemCouplingParticipant/InputComplexVectorData.hpp
* <cstddef>
* <complex>
* <vector>


```mermaid
graph LR
1["OutputComplexVectorData.hpp"]
click 1 "OutputComplexVectorData_8hpp.md#OutputComplexVectorData_8hpp"
1 --> 2
1 --> 3
1 --> 4
1 --> 5
1 --> 6

2["SystemCouplingParticipant/CommonTypes.hpp"]

3["SystemCouplingParticipant/InputComplexVectorData.hpp"]

5["complex"]

4["cstddef"]

6["vector"]

```


## Source


```cpp
/*
 * © 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.
 */

#pragma once

#include "SystemCouplingParticipant/CommonTypes.hpp"
#include "SystemCouplingParticipant/InputComplexVectorData.hpp"

#include <cstddef>
#include <complex>
#include <vector>

namespace sysc {

struct OutputComplexVectorData {
public:
  OutputComplexVectorData(
    const double* dataComplex,
    std::size_t size,
    Dimension dimension) :
      m_data1(dataComplex),
      m_size(size),
      m_dimension(dimension) {}

  OutputComplexVectorData(const double* dataComplex, std::size_t size) :
      OutputComplexVectorData(dataComplex, size, Dimension::D3) {}

  OutputComplexVectorData(
    const double* dataReal,
    const double* dataImaginary,
    std::size_t size) :
      m_isSplitComplex(true),
      m_data1(dataReal),
      m_data2(dataImaginary),
      m_size(size) {}

  OutputComplexVectorData(
    const double* dataComplex1,
    const double* dataComplex2,
    const double* dataComplex3,
    std::size_t size) :
      m_isSplitVector(true),
      m_data1(dataComplex1),
      m_data2(dataComplex2),
      m_data3(dataComplex3),
      m_size(size) {}

  OutputComplexVectorData(
    const double* dataReal1,
    const double* dataImaginary1,
    const double* dataReal2,
    const double* dataImaginary2,
    const double* dataReal3,
    const double* dataImaginary3,
    std::size_t size) :
      m_isSplitVector(true),
      m_isSplitComplex(true),
      m_data1(dataReal1),
      m_data2(dataImaginary1),
      m_data3(dataReal2),
      m_data4(dataImaginary2),
      m_data5(dataReal3),
      m_data6(dataImaginary3),
      m_size(size) {}

  OutputComplexVectorData(
    const float* dataComplex,
    std::size_t size,
    Dimension dimension) :
      m_dataType(PrimitiveType::Float),
      m_data1(dataComplex),
      m_size(size),
      m_dimension(dimension) {}

  OutputComplexVectorData(const float* dataComplex, std::size_t size) :
      OutputComplexVectorData(dataComplex, size, Dimension::D3) {}

  OutputComplexVectorData(
    const float* dataReal,
    const float* dataImaginary,
    std::size_t size) :
      m_dataType(PrimitiveType::Float),
      m_isSplitComplex(true),
      m_data1(dataReal),
      m_data2(dataImaginary),
      m_size(size) {}

  OutputComplexVectorData(
    const float* dataComplex1,
    const float* dataComplex2,
    const float* dataComplex3,
    std::size_t size) :
      m_dataType(PrimitiveType::Float),
      m_isSplitVector(true),
      m_data1(dataComplex1),
      m_data2(dataComplex2),
      m_data3(dataComplex3),
      m_size(size) {}

  OutputComplexVectorData(
    const float* dataReal1,
    const float* dataImaginary1,
    const float* dataReal2,
    const float* dataImaginary2,
    const float* dataReal3,
    const float* dataImaginary3,
    std::size_t size) :
      m_dataType(PrimitiveType::Float),
      m_isSplitVector(true),
      m_isSplitComplex(true),
      m_data1(dataReal1),
      m_data2(dataImaginary1),
      m_data3(dataReal2),
      m_data4(dataImaginary2),
      m_data5(dataReal3),
      m_data6(dataImaginary3),
      m_size(size) {}

  OutputComplexVectorData(
    const std::complex<double>* dataComplex,
    std::size_t size,
    Dimension dimension) :
      OutputComplexVectorData(
        reinterpret_cast<const double*>(dataComplex),
        size,
        dimension) {}

  OutputComplexVectorData(
    const std::complex<double>* dataComplex,
    std::size_t size) :
      OutputComplexVectorData(dataComplex, size, Dimension::D3) {}

  OutputComplexVectorData(
    const std::vector<std::complex<double>>& dataComplex,
    Dimension dimension) :
      OutputComplexVectorData(
        dataComplex.data(),
        dataComplex.size() / getNumDimensions(dimension),
        dimension) {}

  OutputComplexVectorData(
    const std::vector<std::complex<double>>& dataComplex) :
      OutputComplexVectorData(dataComplex, Dimension::D3) {}

  OutputComplexVectorData(
    const std::vector<double>& dataReal,
    const std::vector<double>& dataImaginary) :
      OutputComplexVectorData(
        dataReal.data(),
        dataImaginary.data(),
        dataReal.size() / getNumDimensions(Dimension::D3)) {}

  OutputComplexVectorData(
    const std::complex<double>* dataComplex1,
    const std::complex<double>* dataComplex2,
    const std::complex<double>* dataComplex3,
    std::size_t size) :
      OutputComplexVectorData(
        reinterpret_cast<const double*>(dataComplex1),
        reinterpret_cast<const double*>(dataComplex2),
        reinterpret_cast<const double*>(dataComplex3),
        size)
  {
  }

  OutputComplexVectorData(
    const std::vector<std::complex<double>>& dataComplex1,
    const std::vector<std::complex<double>>& dataComplex2,
    const std::vector<std::complex<double>>& dataComplex3) :
      OutputComplexVectorData(
        dataComplex1.data(),
        dataComplex2.data(),
        dataComplex3.data(),
        dataComplex1.size()) {}

  OutputComplexVectorData(
    const std::vector<double>& dataReal1,
    const std::vector<double>& dataImaginary1,
    const std::vector<double>& dataReal2,
    const std::vector<double>& dataImaginary2,
    const std::vector<double>& dataReal3,
    const std::vector<double>& dataImaginary3) :
      OutputComplexVectorData(
        dataReal1.data(),
        dataImaginary1.data(),
        dataReal2.data(),
        dataImaginary2.data(),
        dataReal3.data(),
        dataImaginary3.data(),
        dataReal1.size()) {}

  OutputComplexVectorData(
    const std::vector<std::complex<float>>& dataComplex,
    Dimension dimension) :
      OutputComplexVectorData(
        dataComplex.data(),
        dataComplex.size(),
        dimension) {}

  OutputComplexVectorData(const std::vector<std::complex<float>>& dataComplex) :
      OutputComplexVectorData(dataComplex, Dimension::D3) {}

  OutputComplexVectorData(
    const std::complex<float>* dataComplex,
    std::size_t size,
    Dimension dimension) :
      OutputComplexVectorData(
        reinterpret_cast<const float*>(dataComplex),
        size,
        dimension) {}

  OutputComplexVectorData(
    const std::complex<float>* dataComplex,
    std::size_t size) :
      OutputComplexVectorData(dataComplex, size, Dimension::D3) {}

  OutputComplexVectorData(
    const std::vector<float>& dataReal,
    const std::vector<float>& dataImaginary) :
      OutputComplexVectorData(
        dataReal.data(),
        dataImaginary.data(),
        dataReal.size() / getNumDimensions(Dimension::D3)) {}

  OutputComplexVectorData(
    const std::vector<std::complex<float>>& dataComplex1,
    const std::vector<std::complex<float>>& dataComplex2,
    const std::vector<std::complex<float>>& dataComplex3) :
      OutputComplexVectorData(
        dataComplex1.data(),
        dataComplex2.data(),
        dataComplex3.data(),
        dataComplex1.size()) {}

  OutputComplexVectorData(
    const std::complex<float>* dataComplex1,
    const std::complex<float>* dataComplex2,
    const std::complex<float>* dataComplex3,
    std::size_t size) :
      OutputComplexVectorData(
        reinterpret_cast<const float*>(dataComplex1),
        reinterpret_cast<const float*>(dataComplex2),
        reinterpret_cast<const float*>(dataComplex3),
        size) {}

  OutputComplexVectorData(
    const std::vector<float>& dataReal1,
    const std::vector<float>& dataImaginary1,
    const std::vector<float>& dataReal2,
    const std::vector<float>& dataImaginary2,
    const std::vector<float>& dataReal3,
    const std::vector<float>& dataImaginary3) :
      OutputComplexVectorData(
        dataReal1.data(),
        dataImaginary1.data(),
        dataReal2.data(),
        dataImaginary2.data(),
        dataReal3.data(),
        dataImaginary3.data(),
        dataReal1.size()) {}

  OutputComplexVectorData() = default;

  OutputComplexVectorData(const OutputComplexVectorData&) = default;

  OutputComplexVectorData(OutputComplexVectorData&&) = default;

  OutputComplexVectorData& operator=(const OutputComplexVectorData&) = default;

  OutputComplexVectorData& operator=(OutputComplexVectorData&&) = default;

  OutputComplexVectorData(InputComplexVectorData icvd) :
      m_dataType(icvd.getDataType()),
      m_isSplitVector(icvd.isSplitVector()),
      m_isSplitComplex(icvd.isSplitComplex()),
      m_data1(icvd.getData1()),
      m_data2(icvd.getData2()),
      m_data3(icvd.getData3()),
      m_data4(icvd.getData4()),
      m_data5(icvd.getData5()),
      m_data6(icvd.getData6()),
      m_size(icvd.size()),
      m_dimension(icvd.getDimension())
  {
  }

  std::size_t size() const noexcept { return m_size; }

  bool empty() const noexcept { return m_size == 0; }

  sysc::PrimitiveType getDataType() const noexcept { return m_dataType; }

  bool isSplitVector() const noexcept { return m_isSplitVector; }

  bool isSplitComplex() const noexcept { return m_isSplitComplex; }

  const void* getData1() const noexcept { return m_data1; }

  const void* getData2() const noexcept { return m_data2; }

  const void* getData3() const noexcept { return m_data3; }

  const void* getData4() const noexcept { return m_data4; }

  const void* getData5() const noexcept { return m_data5; }

  const void* getData6() const noexcept { return m_data6; }

  Dimension getDimension() const noexcept { return m_dimension; }

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


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)