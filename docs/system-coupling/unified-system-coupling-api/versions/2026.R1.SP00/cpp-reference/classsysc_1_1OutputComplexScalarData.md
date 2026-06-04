# Class sysc::OutputComplexScalarData

![][C++]
![][public]

**Definition**: `OutputComplexScalarData.hpp` (line 24)

Provide a class for output complex scalar data.

Output scalar data provides read-only access to an array of complex scalars.

## Members

* [empty](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData_1ade274ee7bd0e02ea712cfac8c9c3df1e)
* [getData1](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData_1afc4cf635f16255debd5367c71e2eeebb)
* [getData2](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData_1a7bb7e81085550fad868b9dc8927160e6)
* [getDataType](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData_1aa9fde7656420e140ec4b575dc27e3ed1)
* [isSplitComplex](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData_1a2d9a5cce0e6fcb99344276db9b0d1030)
* [m\_data1](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData_1a02d71d668a939fea124133f764b3ff31)
* [m\_data2](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData_1a341bffbbe4ffcc305b48399cf0b91413)
* [m\_dataType](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData_1a726ea48a7544291ef53d65c6561b14de)
* [m\_isSplitComplex](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData_1a6a6b836aca95c061a9751274ffdbb9af)
* [m\_size](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData_1a5786039737c03fb8873ceb8cb5a04cad)
* [operator=](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData_1ae3e6b55441d7702c04f998f307cc957d)
* [operator=](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData_1aa14627de46b45ac3070900803114062c)
* [OutputComplexScalarData](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData_1adf91ed9369ea790ff25efc8138429b3d)
* [OutputComplexScalarData](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData_1addb41ddd037b27dd19e6654294f7c194)
* [OutputComplexScalarData](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData_1aef2fe0ae45472d732a8fa1b6c3bf83a2)
* [OutputComplexScalarData](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData_1a883a5a886f1ec85c866f73d93bb170bf)
* [OutputComplexScalarData](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData_1a76a7cea2727d9cfad5419c65265e507e)
* [OutputComplexScalarData](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData_1a1da27e8572b96fb4687735b8a32a3aa6)
* [OutputComplexScalarData](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData_1a723362aff534d9a651bb9ce11cd82f7a)
* [OutputComplexScalarData](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData_1a684da76ee59e2dcae970dfc34e89f9aa)
* [OutputComplexScalarData](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData_1a509c85873eece0980798e7d0263b1552)
* [OutputComplexScalarData](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData_1acc8f1a93aaf429db11baf9043ea34bf9)
* [OutputComplexScalarData](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData_1a6826d90466e7bf1fabc6e1b8f78cda5a)
* [OutputComplexScalarData](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData_1af33df90acece2bce5d93d7357c4b3d59)
* [OutputComplexScalarData](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData_1a869ea682dbf359db976655f2e3098408)
* [size](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData_1a961c32a17e1d33ceb346c15768b5290a)

## Private attributes

<a id="classsysc_1_1OutputComplexScalarData_1a726ea48a7544291ef53d65c6561b14de"></a>
### Variable m\_dataType

![][private]

**Definition**: `OutputComplexScalarData.hpp` (line 219)

```cpp
sysc::PrimitiveType sysc::OutputComplexScalarData::m_dataType {sysc::Double}
```







**Type**: [sysc::PrimitiveType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad3b1c73e4a63f4d292d65f3db875e844)

<a id="classsysc_1_1OutputComplexScalarData_1a6a6b836aca95c061a9751274ffdbb9af"></a>
### Variable m\_isSplitComplex

![][private]

**Definition**: `OutputComplexScalarData.hpp` (line 220)

```cpp
bool sysc::OutputComplexScalarData::m_isSplitComplex {false}
```







**Type**: bool

<a id="classsysc_1_1OutputComplexScalarData_1a02d71d668a939fea124133f764b3ff31"></a>
### Variable m\_data1

![][private]

**Definition**: `OutputComplexScalarData.hpp` (line 222)

```cpp
const void* sysc::OutputComplexScalarData::m_data1 {nullptr}
```







**Type**: const void *

<a id="classsysc_1_1OutputComplexScalarData_1a341bffbbe4ffcc305b48399cf0b91413"></a>
### Variable m\_data2

![][private]

**Definition**: `OutputComplexScalarData.hpp` (line 223)

```cpp
const void* sysc::OutputComplexScalarData::m_data2 {nullptr}
```







**Type**: const void *

<a id="classsysc_1_1OutputComplexScalarData_1a5786039737c03fb8873ceb8cb5a04cad"></a>
### Variable m\_size

![][private]

**Definition**: `OutputComplexScalarData.hpp` (line 225)

```cpp
std::size_t sysc::OutputComplexScalarData::m_size {0}
```







**Type**: std::size_t

## Public functions

<a id="classsysc_1_1OutputComplexScalarData_1adf91ed9369ea790ff25efc8138429b3d"></a>
### Function OutputComplexScalarData

![][public]

```cpp
sysc::OutputComplexScalarData::OutputComplexScalarData(const std::vector< std::complex< double >> &dataComplex)
```

Provide a constructor for output complex scalar data with compact storage for complex components.

**Parameters**:

* **dataComplex**: - reference to the STL vector of complex double-precision data



**Parameters**:

* const std::vector< std::complex< double >> & **dataComplex**

**Return type**: 

<a id="classsysc_1_1OutputComplexScalarData_1addb41ddd037b27dd19e6654294f7c194"></a>
### Function OutputComplexScalarData

![][public]

```cpp
sysc::OutputComplexScalarData::OutputComplexScalarData(const std::complex< double > *dataComplex, std::size_t size)
```

Provide a constructor for output complex scalar data with compact storage for complex components.

**Parameters**:

* **dataComplex**: - pointer to an array of complex double-precision scalars
* **size**: - number of scalars



**Parameters**:

* const std::complex< double > * **dataComplex**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputComplexScalarData_1aef2fe0ae45472d732a8fa1b6c3bf83a2"></a>
### Function OutputComplexScalarData

![][public]

```cpp
sysc::OutputComplexScalarData::OutputComplexScalarData(const double *dataComplex, std::size_t size)
```

Provide a constructor for output complex scalar data with compact storage for complex components.

**Parameters**:

* **dataComplex**: - pointer to an array of complex double-precision scalars
* **size**: - number of scalars



**Parameters**:

* const double * **dataComplex**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputComplexScalarData_1a883a5a886f1ec85c866f73d93bb170bf"></a>
### Function OutputComplexScalarData

![][public]

```cpp
sysc::OutputComplexScalarData::OutputComplexScalarData(const std::vector< double > &dataReal, const std::vector< double > &dataImaginary)
```

Create an output complex scalar data access object with split storage for compex components.

**Parameters**:

* **dataReal**: - reference to an STL vector of double-precision data, that stores the real components of the complex scalars.
* **dataImaginary**: - reference to an STL vector of double-precision data, that stores the imaginary components of the complex scalars.



**Parameters**:

* const std::vector< double > & **dataReal**
* const std::vector< double > & **dataImaginary**

**Return type**: 

<a id="classsysc_1_1OutputComplexScalarData_1a76a7cea2727d9cfad5419c65265e507e"></a>
### Function OutputComplexScalarData

![][public]

```cpp
sysc::OutputComplexScalarData::OutputComplexScalarData(const double *dataReal, const double *dataImaginary, std::size_t size)
```

Create an output complex scalar data access object with split storage for compex components.

**Parameters**:

* **dataReal**: - pointer to an array of double-precision data, that stores the real components of the complex scalars.
* **dataImaginary**: - pointer to an array of double-precision data, that stores the imaginary components of the complex scalars.
* **size**: - number of complex scalars



**Parameters**:

* const double * **dataReal**
* const double * **dataImaginary**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputComplexScalarData_1a1da27e8572b96fb4687735b8a32a3aa6"></a>
### Function OutputComplexScalarData

![][public]

```cpp
sysc::OutputComplexScalarData::OutputComplexScalarData(const std::vector< std::complex< float >> &dataComplex)
```

Provide a constructor for output complex scalar data with compact storage for complex components.

**Parameters**:

* **dataComplex**: - reference to the STL vector of complex single-precision data



**Parameters**:

* const std::vector< std::complex< float >> & **dataComplex**

**Return type**: 

<a id="classsysc_1_1OutputComplexScalarData_1a723362aff534d9a651bb9ce11cd82f7a"></a>
### Function OutputComplexScalarData

![][public]

```cpp
sysc::OutputComplexScalarData::OutputComplexScalarData(const std::complex< float > *dataComplex, std::size_t size)
```

Provide a constructor for output complex scalar data with compact storage for complex components.

**Parameters**:

* **dataComplex**: - pointer to an array of complex single-precision scalars
* **size**: - number of scalars



**Parameters**:

* const std::complex< float > * **dataComplex**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputComplexScalarData_1a684da76ee59e2dcae970dfc34e89f9aa"></a>
### Function OutputComplexScalarData

![][public]

```cpp
sysc::OutputComplexScalarData::OutputComplexScalarData(const float *dataComplex, std::size_t size)
```

Provide a constructor for output complex scalar data with compact storage for complex components.

**Parameters**:

* **dataComplex**: - pointer to an array of complex single-precision scalars
* **size**: - number of scalars



**Parameters**:

* const float * **dataComplex**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputComplexScalarData_1a509c85873eece0980798e7d0263b1552"></a>
### Function OutputComplexScalarData

![][public]

```cpp
sysc::OutputComplexScalarData::OutputComplexScalarData(const std::vector< float > &dataReal, const std::vector< float > &dataImaginary)
```

Create an output complex scalar data access object with split storage for compex components.

**Parameters**:

* **dataReal**: - reference to an STL vector of single-precision data, that stores the real components of the complex scalars.
* **dataImaginary**: - reference to an STL vector of single-precision data, that stores the imaginary components of the complex scalars.



**Parameters**:

* const std::vector< float > & **dataReal**
* const std::vector< float > & **dataImaginary**

**Return type**: 

<a id="classsysc_1_1OutputComplexScalarData_1acc8f1a93aaf429db11baf9043ea34bf9"></a>
### Function OutputComplexScalarData

![][public]

```cpp
sysc::OutputComplexScalarData::OutputComplexScalarData(const float *dataReal, const float *dataImaginary, std::size_t size)
```

Create an output complex scalar data access object with split storage for compex components.

**Parameters**:

* **dataReal**: - pointer to an array of single-precision data, that stores the real components of the complex scalars.
* **dataImaginary**: - pointer to an array of single-precision data, that stores the imaginary components of the complex scalars.
* **size**: - number of complex scalars



**Parameters**:

* const float * **dataReal**
* const float * **dataImaginary**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputComplexScalarData_1a6826d90466e7bf1fabc6e1b8f78cda5a"></a>
### Function OutputComplexScalarData

![][public]

```cpp
sysc::OutputComplexScalarData::OutputComplexScalarData()=default
```

Provide a default constructor.





**Return type**: 

<a id="classsysc_1_1OutputComplexScalarData_1af33df90acece2bce5d93d7357c4b3d59"></a>
### Function OutputComplexScalarData

![][public]

```cpp
sysc::OutputComplexScalarData::OutputComplexScalarData(const OutputComplexScalarData &)=default
```

Provide a copy-constructor.





**Parameters**:

* const [OutputComplexScalarData](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData) &

**Return type**: 

<a id="classsysc_1_1OutputComplexScalarData_1a869ea682dbf359db976655f2e3098408"></a>
### Function OutputComplexScalarData

![][public]

```cpp
sysc::OutputComplexScalarData::OutputComplexScalarData(OutputComplexScalarData &&)=default
```

Provide a move-constructor.





**Parameters**:

* [OutputComplexScalarData](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData) &&

**Return type**: 

<a id="classsysc_1_1OutputComplexScalarData_1ae3e6b55441d7702c04f998f307cc957d"></a>
### Function operator=

![][public]

```cpp
OutputComplexScalarData& sysc::OutputComplexScalarData::operator=(const OutputComplexScalarData &)=default
```

Provide a copy-assign operator.





**Parameters**:

* const [OutputComplexScalarData](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData) &

**Return type**: [OutputComplexScalarData](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData) &

<a id="classsysc_1_1OutputComplexScalarData_1aa14627de46b45ac3070900803114062c"></a>
### Function operator=

![][public]

```cpp
OutputComplexScalarData& sysc::OutputComplexScalarData::operator=(OutputComplexScalarData &&)=default
```

Provide a move-assign operator.





**Parameters**:

* [OutputComplexScalarData](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData) &&

**Return type**: [OutputComplexScalarData](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData) &

<a id="classsysc_1_1OutputComplexScalarData_1a961c32a17e1d33ceb346c15768b5290a"></a>
### Function size

![][public]
![][const]

```cpp
std::size_t sysc::OutputComplexScalarData::size() const noexcept
```

Get the size of data.





**Return type**: std::size_t

<a id="classsysc_1_1OutputComplexScalarData_1ade274ee7bd0e02ea712cfac8c9c3df1e"></a>
### Function empty

![][public]
![][const]

```cpp
bool sysc::OutputComplexScalarData::empty() const noexcept
```

Check if array "data" is empty.





**Return type**: bool

<a id="classsysc_1_1OutputComplexScalarData_1aa9fde7656420e140ec4b575dc27e3ed1"></a>
### Function getDataType

![][public]
![][const]

```cpp
sysc::PrimitiveType sysc::OutputComplexScalarData::getDataType() const noexcept
```

Get the primitive type of data.

For internal use only (no back-compatibility guarantee).



**Return type**: [sysc::PrimitiveType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad3b1c73e4a63f4d292d65f3db875e844)

<a id="classsysc_1_1OutputComplexScalarData_1a2d9a5cce0e6fcb99344276db9b0d1030"></a>
### Function isSplitComplex

![][public]
![][const]

```cpp
bool sysc::OutputComplexScalarData::isSplitComplex() const noexcept
```

Query whether it's a split or compact vector layout.

For internal use only (no back-compatibility guarantee).



**Return type**: bool

<a id="classsysc_1_1OutputComplexScalarData_1afc4cf635f16255debd5367c71e2eeebb"></a>
### Function getData1

![][public]
![][const]

```cpp
const void* sysc::OutputComplexScalarData::getData1() const noexcept
```

Get pointer to data1.

For internal use only (no back-compatibility guarantee).



**Return type**: const void *

<a id="classsysc_1_1OutputComplexScalarData_1a7bb7e81085550fad868b9dc8927160e6"></a>
### Function getData2

![][public]
![][const]

```cpp
const void* sysc::OutputComplexScalarData::getData2() const noexcept
```

Get pointer to data2.

For internal use only (no back-compatibility guarantee).



**Return type**: const void *

**References**:

* [sysc::Double](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ggad3b1c73e4a63f4d292d65f3db875e844a29843d2c1bb5760f768dcc066dac1ac1)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)