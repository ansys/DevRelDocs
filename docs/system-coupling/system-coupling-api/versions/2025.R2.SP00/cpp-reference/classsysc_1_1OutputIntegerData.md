# Class sysc::OutputIntegerData

![][C++]
![][public]

**Definition**: `OutputIntegerData.hpp` (line 25)

Provide a class for output integer data.

Output integer data provides read-only access to an array of integer data.

## Members

* [empty](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData_1a8819c1e3b85cd5eccad2343fc2b3864b)
* [getData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData_1a5260a1044cbf48fc08861592f27ef830)
* [getDataType](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData_1a2518ac18b1229dcdcd3a6e8cb231ce31)
* [m\_data](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData_1a09cec7a96f71f3c09778dbd39d38a5c1)
* [m\_dataType](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData_1a2ec0819486d3e775ba9140b8fc3388eb)
* [m\_size](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData_1a145fa5cddb80e05fe993c5798c72c126)
* [operator=](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData_1a6e2dbe8549ce9a6e5eab1191bfc2c9c8)
* [operator=](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData_1aea30a96b33149b9e5f0f76a6c11457e9)
* [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData_1aaff24bd17a31494539fe166a58c14a61)
* [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData_1aac9c3dafa5cfd8b1c0faa8a0dfaf4b8b)
* [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData_1a1b00e76dc5eb0ecaf543f43df90dbe1d)
* [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData_1a6bb7fdf48c06f729b453d0cc476b0d51)
* [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData_1a434b5d77b41e183c5e8c66a66feab677)
* [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData_1a77f661f442e22e6ef767046363675577)
* [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData_1a3e9b3743b43def94e796ce6ca2440bb5)
* [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData_1a0b95e5e0c9bd3d32a2896d4ef46751da)
* [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData_1a0e6a549839197abac135cae92a4bacc2)
* [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData_1a22df364015b79855a8e7b7d7e2f5950a)
* [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData_1adc76f136fc2140e796d82a5b28c7c11b)
* [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData_1a815f75642b0a3b4f607cefe02b114805)
* [size](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData_1a066b9985cc448f197b0e247dfe11ea3c)

## Private attributes

<a id="classsysc_1_1OutputIntegerData_1a2ec0819486d3e775ba9140b8fc3388eb"></a>
### Variable m\_dataType

![][private]

**Definition**: `OutputIntegerData.hpp` (line 154)

```cpp
sysc::PrimitiveType sysc::OutputIntegerData::m_dataType {sysc::Int64}
```







**Type**: [sysc::PrimitiveType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad3b1c73e4a63f4d292d65f3db875e844)

<a id="classsysc_1_1OutputIntegerData_1a09cec7a96f71f3c09778dbd39d38a5c1"></a>
### Variable m\_data

![][private]

**Definition**: `OutputIntegerData.hpp` (line 155)

```cpp
const void* sysc::OutputIntegerData::m_data {nullptr}
```







**Type**: const void *

<a id="classsysc_1_1OutputIntegerData_1a145fa5cddb80e05fe993c5798c72c126"></a>
### Variable m\_size

![][private]

**Definition**: `OutputIntegerData.hpp` (line 156)

```cpp
std::size_t sysc::OutputIntegerData::m_size {0}
```







**Type**: std::size_t

## Public functions

<a id="classsysc_1_1OutputIntegerData_1aaff24bd17a31494539fe166a58c14a61"></a>
### Function OutputIntegerData

![][public]

```cpp
sysc::OutputIntegerData::OutputIntegerData(const std::uint16_t *data, std::size_t size)
```

Provide a constructor for [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData), which provides read-only access to an array of unsigned 16-bit integers.

**Parameters**:

* **data**: Pointer to the first index in the array of unsigned 16-bit integers.
* **size**: Number of elements in the array of unsigned 16-bit integers.



**Parameters**:

* const std::uint16_t * **data**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputIntegerData_1aac9c3dafa5cfd8b1c0faa8a0dfaf4b8b"></a>
### Function OutputIntegerData

![][public]

```cpp
sysc::OutputIntegerData::OutputIntegerData(const std::vector< std::uint16_t > &data)
```

Provide an STL vector variation of constructor for [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData), which provides read-only access to an array of unsigned 16-bit integers.

**Parameters**:

* **data**: Reference to STL vector of unsigned 16-bit integers.



**Parameters**:

* const std::vector< std::uint16_t > & **data**

**Return type**: 

<a id="classsysc_1_1OutputIntegerData_1a1b00e76dc5eb0ecaf543f43df90dbe1d"></a>
### Function OutputIntegerData

![][public]

```cpp
sysc::OutputIntegerData::OutputIntegerData(const std::uint64_t *data, std::size_t size)
```

Provide a constructor for [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData), which provides read-only access to an array of unsigned 64-bit integers.

**Parameters**:

* **data**: Pointer to the first index in the array of unsigned 64-bit integers.
* **size**: Number of elements in the array of unsigned 64-bit integers.



**Parameters**:

* const std::uint64_t * **data**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputIntegerData_1a6bb7fdf48c06f729b453d0cc476b0d51"></a>
### Function OutputIntegerData

![][public]

```cpp
sysc::OutputIntegerData::OutputIntegerData(const std::vector< std::uint64_t > &data)
```

Provide an STL vector variation of constructor for [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData), which provides read-only access to an array of unsigned 64-bit integers.

**Parameters**:

* **data**: Reference to STL vector of unsigned 64-bit integers.



**Parameters**:

* const std::vector< std::uint64_t > & **data**

**Return type**: 

<a id="classsysc_1_1OutputIntegerData_1a434b5d77b41e183c5e8c66a66feab677"></a>
### Function OutputIntegerData

![][public]

```cpp
sysc::OutputIntegerData::OutputIntegerData(const std::int32_t *data, std::size_t size)
```

Provide a constructor for [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData), which provides read-only access to an array of 32-bit integers.

**Parameters**:

* **data**: Pointer to the first index in the array of unsigned 32-bit integers.
* **size**: Number of elements in the array of unsigned 16-bit integers.



**Parameters**:

* const std::int32_t * **data**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputIntegerData_1a77f661f442e22e6ef767046363675577"></a>
### Function OutputIntegerData

![][public]

```cpp
sysc::OutputIntegerData::OutputIntegerData(const std::vector< std::int32_t > &data)
```

Provide an STL vector variation of constructor for [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData), which provides read-only access to an array of 32-bit integers.

**Parameters**:

* **data**: Reference to STL vector of 32-bit integers.



**Parameters**:

* const std::vector< std::int32_t > & **data**

**Return type**: 

<a id="classsysc_1_1OutputIntegerData_1a3e9b3743b43def94e796ce6ca2440bb5"></a>
### Function OutputIntegerData

![][public]

```cpp
sysc::OutputIntegerData::OutputIntegerData(const std::int64_t *data, std::size_t size)
```

Provide a constructor for [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData), which provides read-only access to an array of 64-bit integers.

**Parameters**:

* **data**: Pointer to the first index in the array of unsigned 64-bit integers.
* **size**: Number of elements in the array of unsigned 64-bit integers.



**Parameters**:

* const std::int64_t * **data**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputIntegerData_1a0b95e5e0c9bd3d32a2896d4ef46751da"></a>
### Function OutputIntegerData

![][public]

```cpp
sysc::OutputIntegerData::OutputIntegerData(const std::vector< std::int64_t > &data)
```

Provide an STL vector variation of constructor for [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData), which provides read-only access to an array of 64-bit integers.

**Parameters**:

* **data**: Reference to STL vector of 64-bit integers.



**Parameters**:

* const std::vector< std::int64_t > & **data**

**Return type**: 

<a id="classsysc_1_1OutputIntegerData_1a0e6a549839197abac135cae92a4bacc2"></a>
### Function OutputIntegerData

![][public]

```cpp
sysc::OutputIntegerData::OutputIntegerData(const OutputScalarData &data)
```

Provide a constructor to convert [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData) into [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData).





**Parameters**:

* const [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData) & **data**

**Return type**: 

<a id="classsysc_1_1OutputIntegerData_1a22df364015b79855a8e7b7d7e2f5950a"></a>
### Function OutputIntegerData

![][public]

```cpp
sysc::OutputIntegerData::OutputIntegerData()=default
```

Provide a default constructor.





**Return type**: 

<a id="classsysc_1_1OutputIntegerData_1adc76f136fc2140e796d82a5b28c7c11b"></a>
### Function OutputIntegerData

![][public]

```cpp
sysc::OutputIntegerData::OutputIntegerData(const OutputIntegerData &)=default
```

Provide a copy-constructor.





**Parameters**:

* const [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData) &

**Return type**: 

<a id="classsysc_1_1OutputIntegerData_1a815f75642b0a3b4f607cefe02b114805"></a>
### Function OutputIntegerData

![][public]

```cpp
sysc::OutputIntegerData::OutputIntegerData(OutputIntegerData &&)=default
```

Provide a move-constructor.





**Parameters**:

* [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData) &&

**Return type**: 

<a id="classsysc_1_1OutputIntegerData_1a6e2dbe8549ce9a6e5eab1191bfc2c9c8"></a>
### Function operator=

![][public]

```cpp
OutputIntegerData& sysc::OutputIntegerData::operator=(const OutputIntegerData &)=default
```

Provide a copy-assign operator.





**Parameters**:

* const [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData) &

**Return type**: [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData) &

<a id="classsysc_1_1OutputIntegerData_1aea30a96b33149b9e5f0f76a6c11457e9"></a>
### Function operator=

![][public]

```cpp
OutputIntegerData& sysc::OutputIntegerData::operator=(OutputIntegerData &&)=default
```

Provide a move-assign operator.





**Parameters**:

* [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData) &&

**Return type**: [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData) &

<a id="classsysc_1_1OutputIntegerData_1a066b9985cc448f197b0e247dfe11ea3c"></a>
### Function size

![][public]
![][const]

```cpp
std::size_t sysc::OutputIntegerData::size() const noexcept
```

Get the size of data.





**Return type**: std::size_t

<a id="classsysc_1_1OutputIntegerData_1a8819c1e3b85cd5eccad2343fc2b3864b"></a>
### Function empty

![][public]
![][const]

```cpp
bool sysc::OutputIntegerData::empty() const noexcept
```

Check if array “data” is empty.





**Return type**: bool

<a id="classsysc_1_1OutputIntegerData_1a2518ac18b1229dcdcd3a6e8cb231ce31"></a>
### Function getDataType

![][public]
![][const]

```cpp
sysc::PrimitiveType sysc::OutputIntegerData::getDataType() const noexcept
```

Get the primitive type of data.

For internal use only (no back-compatibility guarantee).



**Return type**: [sysc::PrimitiveType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad3b1c73e4a63f4d292d65f3db875e844)

<a id="classsysc_1_1OutputIntegerData_1a5260a1044cbf48fc08861592f27ef830"></a>
### Function getData

![][public]
![][const]

```cpp
const void* sysc::OutputIntegerData::getData() const noexcept
```

Get the pointer to the data.

For internal use only (no back-compatibility guarantee).



**Return type**: const void *

**References**:

* [sysc::Int64](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ggad3b1c73e4a63f4d292d65f3db875e844a7280672fe5e965512085d9837dbacf7f)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)