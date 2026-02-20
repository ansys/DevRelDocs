# Class sysc::OutputScalarData

![][C++]
![][public]

**Definition**: `OutputScalarData.hpp` (line 24)

Provide a class for output scalar data.

Output scalar data provides read-only access to an array of scalar data.

## Members

* [empty](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData_1a840f69a7825eb32e1e8c63b3e208be83)
* [getData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData_1a7bbe6a6c38666b79590fd852b223c1ac)
* [getDataType](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData_1a7c8066141c2c20a9e0a1e6bbc088891c)
* [m\_data](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData_1a4334fce9994c8ed8815e768a14836d10)
* [m\_dataType](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData_1a324acb489f8e8c6f30aed11ecde238b3)
* [m\_size](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData_1a80e28ceb755427e85357d037c0c04990)
* [operator=](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData_1ace213c30537e145a0bb5a3210c673b9a)
* [operator=](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData_1a6fc4462b476c4c5131d5eae0776f8db2)
* [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData_1a0c295be497ed08e0e9831b54731edb06)
* [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData_1ab5c5cda94b99e246dc238885e8ab0a7e)
* [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData_1ad0f7ad860a57401cd183e8c689ef7514)
* [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData_1a5ed2f8ce333e14641f2254f542b97ff9)
* [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData_1a81966c06b45df17fcb3039e8e0e6e839)
* [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData_1ae3fe5b13c079f1f417966373da0d0f1a)
* [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData_1a97c1234dee15d9fc662f8f339543fdde)
* [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData_1a8ce242f8370551d3b45586b4d292585e)
* [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData_1af9ac21cfcac5b9870d58a526aaa8c10c)
* [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData_1a66895325f9405302665064f2d988f024)
* [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData_1a302c60d8c198a99c635fbdf9432bb9c2)
* [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData_1a4bfbce8b70e9015ad5f8b97d9feef0c9)
* [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData_1aaf3b08dff47cd5902d6ca62f0872312f)
* [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData_1a1dbc9822f6ac6d63df34c6816aeef47c)
* [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData_1a19925345654472e8bdbe3fa8e9b23fb5)
* [size](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData_1a75c7feb1b7eb4af572352c9ccabc7960)

## Private attributes

<a id="classsysc_1_1OutputScalarData_1a324acb489f8e8c6f30aed11ecde238b3"></a>
### Variable m\_dataType

![][private]

**Definition**: `OutputScalarData.hpp` (line 182)

```cpp
sysc::PrimitiveType sysc::OutputScalarData::m_dataType {sysc::Double}
```







**Type**: [sysc::PrimitiveType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad3b1c73e4a63f4d292d65f3db875e844)

<a id="classsysc_1_1OutputScalarData_1a4334fce9994c8ed8815e768a14836d10"></a>
### Variable m\_data

![][private]

**Definition**: `OutputScalarData.hpp` (line 183)

```cpp
const void* sysc::OutputScalarData::m_data {nullptr}
```







**Type**: const void *

<a id="classsysc_1_1OutputScalarData_1a80e28ceb755427e85357d037c0c04990"></a>
### Variable m\_size

![][private]

**Definition**: `OutputScalarData.hpp` (line 184)

```cpp
std::size_t sysc::OutputScalarData::m_size {0}
```







**Type**: std::size_t

## Public functions

<a id="classsysc_1_1OutputScalarData_1a0c295be497ed08e0e9831b54731edb06"></a>
### Function OutputScalarData

![][public]

```cpp
sysc::OutputScalarData::OutputScalarData(const double *data, std::size_t size)
```

Provide a constructor for output scalar data.

**Parameters**:

* **data**: - pointer to the double-precision array of data.
* **size**: - number of elements in the array.



**Parameters**:

* const double * **data**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputScalarData_1ab5c5cda94b99e246dc238885e8ab0a7e"></a>
### Function OutputScalarData

![][public]

```cpp
sysc::OutputScalarData::OutputScalarData(const float *data, std::size_t size)
```

Provide a constructor for output scalar data.

**Parameters**:

* **data**: - pointer to the single-precision array of data.
* **size**: - number of elements in the array.



**Parameters**:

* const float * **data**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputScalarData_1ad0f7ad860a57401cd183e8c689ef7514"></a>
### Function OutputScalarData

![][public]

```cpp
sysc::OutputScalarData::OutputScalarData(const std::vector< double > &data)
```

Provide a constructor for output scalar data.

**Parameters**:

* **data**: Reference to STL vector of doubles.



**Parameters**:

* const std::vector< double > & **data**

**Return type**: 

<a id="classsysc_1_1OutputScalarData_1a5ed2f8ce333e14641f2254f542b97ff9"></a>
### Function OutputScalarData

![][public]

```cpp
sysc::OutputScalarData::OutputScalarData(const std::vector< float > &data)
```

Provide a constructor for output scalar data.

**Parameters**:

* **data**: Reference to STL vector of floats.



**Parameters**:

* const std::vector< float > & **data**

**Return type**: 

<a id="classsysc_1_1OutputScalarData_1a81966c06b45df17fcb3039e8e0e6e839"></a>
### Function OutputScalarData

![][public]

```cpp
sysc::OutputScalarData::OutputScalarData(const std::uint16_t *data, std::size_t size)
```

Provide a constructor for [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData), which provides read-only access to scalar array of unsigned 16-bit integers.

**Parameters**:

* **data**: Pointer to the first index in the array of unsigned 16-bit integers.
* **size**: Number of elements in the array of unsigned 16-bit integers.



**Parameters**:

* const std::uint16_t * **data**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputScalarData_1ae3fe5b13c079f1f417966373da0d0f1a"></a>
### Function OutputScalarData

![][public]

```cpp
sysc::OutputScalarData::OutputScalarData(const std::vector< std::uint16_t > &data)
```

Provide an STL vector variation of constructor for [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData), which provides read-only access to scalar array of unsigned 16-bit integers.

**Parameters**:

* **data**: Reference to STL vector of unsigned 16-bit integers.



**Parameters**:

* const std::vector< std::uint16_t > & **data**

**Return type**: 

<a id="classsysc_1_1OutputScalarData_1a97c1234dee15d9fc662f8f339543fdde"></a>
### Function OutputScalarData

![][public]

```cpp
sysc::OutputScalarData::OutputScalarData(const std::uint64_t *data, std::size_t size)
```

Provide a constructor for [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData), which provides read-only access to scalar array of unsigned 64-bit integers.

**Parameters**:

* **data**: Pointer to the first index in the array of unsigned 64-bit integers.
* **size**: Number of elements in the array of unsigned 64-bit integers.



**Parameters**:

* const std::uint64_t * **data**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputScalarData_1a8ce242f8370551d3b45586b4d292585e"></a>
### Function OutputScalarData

![][public]

```cpp
sysc::OutputScalarData::OutputScalarData(const std::vector< std::uint64_t > &data)
```

Provide an STL vector variation of constructor for [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData), which provides read-only access to scalar array of unsigned 64-bit integers.

**Parameters**:

* **data**: Reference to STL vector of unsigned 64-bit integers.



**Parameters**:

* const std::vector< std::uint64_t > & **data**

**Return type**: 

<a id="classsysc_1_1OutputScalarData_1af9ac21cfcac5b9870d58a526aaa8c10c"></a>
### Function OutputScalarData

![][public]

```cpp
sysc::OutputScalarData::OutputScalarData(const std::int32_t *data, std::size_t size)
```

Provide a constructor for [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData), which provides read-only access to scalar array of 32-bit integers.

**Parameters**:

* **data**: Pointer to the first index in the array of unsigned 32-bit integers.
* **size**: Number of elements in the array of unsigned 16-bit integers.



**Parameters**:

* const std::int32_t * **data**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputScalarData_1a66895325f9405302665064f2d988f024"></a>
### Function OutputScalarData

![][public]

```cpp
sysc::OutputScalarData::OutputScalarData(const std::vector< std::int32_t > &data)
```

Provide an STL vector variation of constructor for [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData), which provides read-only access to scalar array of 32-bit integers.

**Parameters**:

* **data**: Reference to STL vector of 32-bit integers.



**Parameters**:

* const std::vector< std::int32_t > & **data**

**Return type**: 

<a id="classsysc_1_1OutputScalarData_1a302c60d8c198a99c635fbdf9432bb9c2"></a>
### Function OutputScalarData

![][public]

```cpp
sysc::OutputScalarData::OutputScalarData(const std::int64_t *data, std::size_t size)
```

Provide a constructor for [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData), which provides read-only access to scalar array of 64-bit integers.

**Parameters**:

* **data**: Pointer to the first index in the array of unsigned 64-bit integers.
* **size**: Number of elements in the array of unsigned 64-bit integers.



**Parameters**:

* const std::int64_t * **data**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputScalarData_1a4bfbce8b70e9015ad5f8b97d9feef0c9"></a>
### Function OutputScalarData

![][public]

```cpp
sysc::OutputScalarData::OutputScalarData(const std::vector< std::int64_t > &data)
```

Provide an STL vector variation of constructor for [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData), which provides read-only access to scalar array of 64-bit integers.

**Parameters**:

* **data**: Reference to STL vector of 64-bit integers.



**Parameters**:

* const std::vector< std::int64_t > & **data**

**Return type**: 

<a id="classsysc_1_1OutputScalarData_1aaf3b08dff47cd5902d6ca62f0872312f"></a>
### Function OutputScalarData

![][public]

```cpp
sysc::OutputScalarData::OutputScalarData()=default
```

Provide a default constructor.





**Return type**: 

<a id="classsysc_1_1OutputScalarData_1a1dbc9822f6ac6d63df34c6816aeef47c"></a>
### Function OutputScalarData

![][public]

```cpp
sysc::OutputScalarData::OutputScalarData(const OutputScalarData &)=default
```

Provide a copy-constructor.





**Parameters**:

* const [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData) &

**Return type**: 

<a id="classsysc_1_1OutputScalarData_1a19925345654472e8bdbe3fa8e9b23fb5"></a>
### Function OutputScalarData

![][public]

```cpp
sysc::OutputScalarData::OutputScalarData(OutputScalarData &&)=default
```

Provide a move-constructor.





**Parameters**:

* [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData) &&

**Return type**: 

<a id="classsysc_1_1OutputScalarData_1ace213c30537e145a0bb5a3210c673b9a"></a>
### Function operator=

![][public]

```cpp
OutputScalarData& sysc::OutputScalarData::operator=(const OutputScalarData &)=default
```

Provide a copy-assign operator.





**Parameters**:

* const [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData) &

**Return type**: [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData) &

<a id="classsysc_1_1OutputScalarData_1a6fc4462b476c4c5131d5eae0776f8db2"></a>
### Function operator=

![][public]

```cpp
OutputScalarData& sysc::OutputScalarData::operator=(OutputScalarData &&)=default
```

Provide a move-assign operator.





**Parameters**:

* [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData) &&

**Return type**: [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData) &

<a id="classsysc_1_1OutputScalarData_1a75c7feb1b7eb4af572352c9ccabc7960"></a>
### Function size

![][public]
![][const]

```cpp
std::size_t sysc::OutputScalarData::size() const noexcept
```

Get the size of data.





**Return type**: std::size_t

<a id="classsysc_1_1OutputScalarData_1a840f69a7825eb32e1e8c63b3e208be83"></a>
### Function empty

![][public]
![][const]

```cpp
bool sysc::OutputScalarData::empty() const noexcept
```

Check if array "data" is empty.





**Return type**: bool

<a id="classsysc_1_1OutputScalarData_1a7c8066141c2c20a9e0a1e6bbc088891c"></a>
### Function getDataType

![][public]
![][const]

```cpp
sysc::PrimitiveType sysc::OutputScalarData::getDataType() const noexcept
```

Get the primitive type of data.

For internal use only (no back-compatibility guarantee).



**Return type**: [sysc::PrimitiveType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad3b1c73e4a63f4d292d65f3db875e844)

<a id="classsysc_1_1OutputScalarData_1a7bbe6a6c38666b79590fd852b223c1ac"></a>
### Function getData

![][public]
![][const]

```cpp
const void* sysc::OutputScalarData::getData() const noexcept
```

Get the pointer to the data.

For internal use only (no back-compatibility guarantee).



**Return type**: const void *

**References**:

* [sysc::Double](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ggad3b1c73e4a63f4d292d65f3db875e844a29843d2c1bb5760f768dcc066dac1ac1)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)