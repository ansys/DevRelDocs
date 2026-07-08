# Structure sysc::InputIntegerData

![][C++]
![][public]

**Definition**: `InputIntegerData.hpp` (line 22)

Provide a class for input integer data.

Input integer data provides read & write access to integer data.

## Members

* [empty](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1aa1cac22d87bc3ae31320d794bc255f8d)
* [getData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a197d8f373d063f01a733ff48617f3b40)
* [getDataType](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1adb4d5c60740aa878670c1c35aabe31e4)
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a197118b58aae0a61e10db7c99daf8d3c)
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a2190dea65690927f4353cdb890747921)
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a499f4796323d0ef016854b3a2c5c44a3)
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1af0fe70c940080d3d2e87cfdae14372e1)
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a5e662f8b291be3db1757fd0b66c437d5)
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1aedd1b20bd8278de88a20dbaa32901fde)
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1afa9b5ddc4c3205decc140ceb2fc40041)
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a1ae9b165a1aaa28b5d972c0e4dc82045)
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a6f6c46e793a72b74015449828d6eb0e4)
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1ac30ff24c59c9733c4dabf4484e279817)
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a3fd5fbce5aaafb0ab45216cbe89f2923)
* [m\_data](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1afa1d6713b265b457a013f9e7c73ac6d7)
* [m\_dataType](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a5d0ed3f158f7e14f47f5d9b7c1bd53d5)
* [m\_size](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1aeaf16d21cbab591e42717ecf1f9b8ff8)
* [operator=](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1ae7564d354ab9f462eac9d17103801bb3)
* [operator=](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a486eeacc625aa6a7d21c592f937b8f1f)
* [size](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1ac76f3e89875fbb2f344fbaee9cda407e)

## Private attributes

<a id="structsysc_1_1InputIntegerData_1a5d0ed3f158f7e14f47f5d9b7c1bd53d5"></a>
### Variable m\_dataType

![][private]

**Definition**: `InputIntegerData.hpp` (line 178)


```cpp
sysc::PrimitiveType sysc::InputIntegerData::m_dataType {[sysc::PrimitiveType::Int32](group__SystemCouplingParticipantAPIs.md#group__SystemCouplingParticipantAPIs_1ggad3b1c73e4a63f4d292d65f3db875e844a65168a2fa10ccf906e55b9ae11f4d98d)}
```








**Type**: [sysc::PrimitiveType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad3b1c73e4a63f4d292d65f3db875e844)

<a id="structsysc_1_1InputIntegerData_1afa1d6713b265b457a013f9e7c73ac6d7"></a>
### Variable m\_data

![][private]

**Definition**: `InputIntegerData.hpp` (line 179)


```cpp
void* sysc::InputIntegerData::m_data {nullptr}
```








**Type**: void *

<a id="structsysc_1_1InputIntegerData_1aeaf16d21cbab591e42717ecf1f9b8ff8"></a>
### Variable m\_size

![][private]

**Definition**: `InputIntegerData.hpp` (line 180)


```cpp
std::size_t sysc::InputIntegerData::m_size {0}
```








**Type**: std::size_t

## Public functions

<a id="structsysc_1_1InputIntegerData_1a197118b58aae0a61e10db7c99daf8d3c"></a>
### Function InputIntegerData

![][public]


```cpp
sysc::InputIntegerData::InputIntegerData(std::uint16_t *data, std::size_t size)
```


Provide a constructor for input integer data, where data is an array of unsigned 16-bit integers.

**Parameters**:

* **data**: Pointer to the first index in the array of unsigned 16-bit integers.
* **size**: Number of elements in the array of unsigned 16-bit integers.



**Parameters**:

* std::uint16_t * **data**
* std::size_t **size**

**Return type**: 

**References**:

* [size](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1ac76f3e89875fbb2f344fbaee9cda407e)
* [sysc::UnsignedInt16](group__SystemCouplingParticipantAPIs.md#group__SystemCouplingParticipantAPIs_1ggad3b1c73e4a63f4d292d65f3db875e844aa75e06a552b1c3cbfd131efe80431fa0)

**Referenced by**:

* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1ac30ff24c59c9733c4dabf4484e279817)
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a3fd5fbce5aaafb0ab45216cbe89f2923)
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1aedd1b20bd8278de88a20dbaa32901fde)
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a1ae9b165a1aaa28b5d972c0e4dc82045)
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a2190dea65690927f4353cdb890747921)
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1af0fe70c940080d3d2e87cfdae14372e1)
* [operator=](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1ae7564d354ab9f462eac9d17103801bb3)
* [operator=](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a486eeacc625aa6a7d21c592f937b8f1f)

<a id="structsysc_1_1InputIntegerData_1a2190dea65690927f4353cdb890747921"></a>
### Function InputIntegerData

![][public]


```cpp
sysc::InputIntegerData::InputIntegerData(std::vector< std::uint16_t > &data)
```


Provide a constructor for input integer data, where data is an STL vector of unsigned 16-bit integers.

**Parameters**:

* **data**: Reference to STL vector of unsigned 16-bit integers.



**Parameters**:

* std::vector< std::uint16_t > & **data**

**Return type**: 

**References**:

* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a197118b58aae0a61e10db7c99daf8d3c)
* [size](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1ac76f3e89875fbb2f344fbaee9cda407e)

<a id="structsysc_1_1InputIntegerData_1a499f4796323d0ef016854b3a2c5c44a3"></a>
### Function InputIntegerData

![][public]


```cpp
sysc::InputIntegerData::InputIntegerData(std::uint64_t *data, std::size_t size)
```


Provide a constructor for input integer data, where data is an array of unsigned 64-bit integers.

**Parameters**:

* **data**: Pointer to the first index in the array of unsigned 64-bit integers.
* **size**: Number of elements in the array of unsigned 64-bit integers.



**Parameters**:

* std::uint64_t * **data**
* std::size_t **size**

**Return type**: 

**References**:

* [size](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1ac76f3e89875fbb2f344fbaee9cda407e)
* [sysc::UnsignedInt64](group__SystemCouplingParticipantAPIs.md#group__SystemCouplingParticipantAPIs_1ggad3b1c73e4a63f4d292d65f3db875e844a89e71558fbcaabe137d0bcf04df90462)

<a id="structsysc_1_1InputIntegerData_1af0fe70c940080d3d2e87cfdae14372e1"></a>
### Function InputIntegerData

![][public]


```cpp
sysc::InputIntegerData::InputIntegerData(std::vector< std::uint64_t > &data)
```


Provide a constructor for input integer data, where data is an STL vector of unsigned 64-bit integers.

**Parameters**:

* **data**: Reference to STL vector of unsigned 64-bit integers.



**Parameters**:

* std::vector< std::uint64_t > & **data**

**Return type**: 

**References**:

* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a197118b58aae0a61e10db7c99daf8d3c)
* [size](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1ac76f3e89875fbb2f344fbaee9cda407e)

<a id="structsysc_1_1InputIntegerData_1a5e662f8b291be3db1757fd0b66c437d5"></a>
### Function InputIntegerData

![][public]


```cpp
sysc::InputIntegerData::InputIntegerData(std::int32_t *data, std::size_t size)
```


Provide a constructor for input integer data, where data is an array of signed 32-bit integers.

**Parameters**:

* **data**: Pointer to the first index in the array of signed 32-bit integers.
* **size**: Number of elements in the array of unsigned 64-bit integers.



**Parameters**:

* std::int32_t * **data**
* std::size_t **size**

**Return type**: 

**References**:

* [sysc::Int32](group__SystemCouplingParticipantAPIs.md#group__SystemCouplingParticipantAPIs_1ggad3b1c73e4a63f4d292d65f3db875e844a65168a2fa10ccf906e55b9ae11f4d98d)
* [size](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1ac76f3e89875fbb2f344fbaee9cda407e)

<a id="structsysc_1_1InputIntegerData_1aedd1b20bd8278de88a20dbaa32901fde"></a>
### Function InputIntegerData

![][public]


```cpp
sysc::InputIntegerData::InputIntegerData(std::vector< std::int32_t > &data)
```


Provide a constructor for input integer data, where data is an STL vector of signed 32-bit integers.

**Parameters**:

* **data**: Reference to STL vector of signed 32-bit integers.



**Parameters**:

* std::vector< std::int32_t > & **data**

**Return type**: 

**References**:

* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a197118b58aae0a61e10db7c99daf8d3c)
* [size](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1ac76f3e89875fbb2f344fbaee9cda407e)

<a id="structsysc_1_1InputIntegerData_1afa9b5ddc4c3205decc140ceb2fc40041"></a>
### Function InputIntegerData

![][public]


```cpp
sysc::InputIntegerData::InputIntegerData(std::int64_t *data, std::size_t size)
```


Provide a constructor for input integer data, where data is an array of signed 64-bit integers.

**Parameters**:

* **data**: Pointer to the first index in the array of signed 64-bit integers.
* **size**: Number of elements in the array of unsigned 64-bit integers.



**Parameters**:

* std::int64_t * **data**
* std::size_t **size**

**Return type**: 

**References**:

* [sysc::Int64](group__SystemCouplingParticipantAPIs.md#group__SystemCouplingParticipantAPIs_1ggad3b1c73e4a63f4d292d65f3db875e844a7280672fe5e965512085d9837dbacf7f)
* [size](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1ac76f3e89875fbb2f344fbaee9cda407e)

<a id="structsysc_1_1InputIntegerData_1a1ae9b165a1aaa28b5d972c0e4dc82045"></a>
### Function InputIntegerData

![][public]


```cpp
sysc::InputIntegerData::InputIntegerData(std::vector< std::int64_t > &data)
```


Provide a constructor for input integer data, where data is an STL vector of signed 64-bit integers.

**Parameters**:

* **data**: Reference to STL vector of signed 64-bit integers.



**Parameters**:

* std::vector< std::int64_t > & **data**

**Return type**: 

**References**:

* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a197118b58aae0a61e10db7c99daf8d3c)
* [size](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1ac76f3e89875fbb2f344fbaee9cda407e)

<a id="structsysc_1_1InputIntegerData_1a6f6c46e793a72b74015449828d6eb0e4"></a>
### Function InputIntegerData

![][public]


```cpp
sysc::InputIntegerData::InputIntegerData()=default
```


Provide a default constructor.





**Return type**: 

<a id="structsysc_1_1InputIntegerData_1ac30ff24c59c9733c4dabf4484e279817"></a>
### Function InputIntegerData

![][public]


```cpp
sysc::InputIntegerData::InputIntegerData(const InputIntegerData &)=default
```


Provide a copy-constructor.





**Parameters**:

* const [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData) &

**Return type**: 

**References**:

* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a197118b58aae0a61e10db7c99daf8d3c)

<a id="structsysc_1_1InputIntegerData_1a3fd5fbce5aaafb0ab45216cbe89f2923"></a>
### Function InputIntegerData

![][public]


```cpp
sysc::InputIntegerData::InputIntegerData(InputIntegerData &&)=default
```


Provide a move-constructor.





**Parameters**:

* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData) &&

**Return type**: 

**References**:

* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a197118b58aae0a61e10db7c99daf8d3c)

<a id="structsysc_1_1InputIntegerData_1ae7564d354ab9f462eac9d17103801bb3"></a>
### Function operator=

![][public]


```cpp
InputIntegerData & sysc::InputIntegerData::operator=(const InputIntegerData &)=default
```


Provide a copy-assign operator.





**Parameters**:

* const [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData) &

**Return type**: [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData) &

**References**:

* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a197118b58aae0a61e10db7c99daf8d3c)

<a id="structsysc_1_1InputIntegerData_1a486eeacc625aa6a7d21c592f937b8f1f"></a>
### Function operator=

![][public]


```cpp
InputIntegerData & sysc::InputIntegerData::operator=(InputIntegerData &&)=default
```


Provide a move-assign operator.





**Parameters**:

* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData) &&

**Return type**: [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData) &

**References**:

* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a197118b58aae0a61e10db7c99daf8d3c)

<a id="structsysc_1_1InputIntegerData_1ac76f3e89875fbb2f344fbaee9cda407e"></a>
### Function size

![][public]
![][const]


```cpp
std::size_t sysc::InputIntegerData::size() const noexcept
```


Get the size of data.





**Return type**: std::size_t

**Referenced by**:

* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a5e662f8b291be3db1757fd0b66c437d5)
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1afa9b5ddc4c3205decc140ceb2fc40041)
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a197118b58aae0a61e10db7c99daf8d3c)
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a499f4796323d0ef016854b3a2c5c44a3)
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1aedd1b20bd8278de88a20dbaa32901fde)
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a1ae9b165a1aaa28b5d972c0e4dc82045)
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1a2190dea65690927f4353cdb890747921)
* [InputIntegerData](structsysc_1_1InputIntegerData.md#structsysc_1_1InputIntegerData_1af0fe70c940080d3d2e87cfdae14372e1)

<a id="structsysc_1_1InputIntegerData_1aa1cac22d87bc3ae31320d794bc255f8d"></a>
### Function empty

![][public]
![][const]


```cpp
bool sysc::InputIntegerData::empty() const noexcept
```


Check if array "data" is empty.





**Return type**: bool

<a id="structsysc_1_1InputIntegerData_1adb4d5c60740aa878670c1c35aabe31e4"></a>
### Function getDataType

![][public]
![][const]


```cpp
sysc::PrimitiveType sysc::InputIntegerData::getDataType() const noexcept
```


Get the primitive type of data.

For internal use only (no back-compatibility guarantee).



**Return type**: [sysc::PrimitiveType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad3b1c73e4a63f4d292d65f3db875e844)

<a id="structsysc_1_1InputIntegerData_1a197d8f373d063f01a733ff48617f3b40"></a>
### Function getData

![][public]
![][const]


```cpp
void * sysc::InputIntegerData::getData() const noexcept
```


Get the pointer to the data.

For internal use only (no back-compatibility guarantee).



**Return type**: void *

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)