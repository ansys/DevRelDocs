# Class sysc::OutputVectorData

![][C++]
![][public]

**Definition**: `OutputVectorData.hpp` (line 27)

Provide a class for output vector data.

Output vector data provides read-only access to an array of vector data.





The size is the total number of vectors, not the total number of components, i.e. if all data is stored in one contiguous array, then size is 1/3 the size of that array.

## Members

* [empty](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1ad6bc7562925ae28572cd41e890d95c2c)
* [getData0](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1a2faceb69c66ff2345844961532a3310a)
* [getData1](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1ac123a2afc965bec10383c7308045e4fd)
* [getData2](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1a280ae2fcfb4d72ba97a85e1d5ab40656)
* [getDataType](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1a17e8aa13a07402bd901c14b52e4645a1)
* [getDimension](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1a22aafd281edba30114f84de2d01fac6b)
* [isSplitVector](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1a4ec5da13d8806b713d25d12f2c2385e8)
* [m\_data0](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1a377245f77e3c5bdf17afd7e7b8de6e22)
* [m\_data1](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1a51a6727115cf209c9068f960948701ff)
* [m\_data2](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1a71a279c9748db9c7c8863ebef8629dfe)
* [m\_dataType](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1a4852944c582d2b0905ebd578929e7cd0)
* [m\_dimension](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1a6102a5a02916b073705db46fe01ed889)
* [m\_isSplitVector](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1a2db32f6af4b98a1679e1102621d1be87)
* [m\_size](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1a1ef4bf17f73bd6ef1fb8c9c03dc10f67)
* [operator=](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1ac8771e17bc6fbfce48d354ef0b8976a9)
* [operator=](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1a6247d77c62de13b7a92abbf157cef85d)
* [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1a5baa242c692e4c981534a3c4e3492ea4)
* [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1abed71ad1966f16f00f9596603c23446d)
* [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1aef88547a7694874f7fbf7956130e0066)
* [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1abb58544d6fe421936606fc665e8ab548)
* [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1a3f50f1e64c99ce81d0c0f3ba1df8461e)
* [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1a5e3662f00e1637635bfc861cf22bd5c9)
* [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1a030b346cb0d19cb872edc91e2e9c15e5)
* [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1a406d3ea15f90374c6e4c2c5a4a06f98e)
* [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1aebefd421a4e0e4b13715ab2cb140bc9b)
* [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1a79b9a2aa856cebaad7eba43bba1e7b4e)
* [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1a5d46caaf7a323c14dec7eef78370eef2)
* [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1a36e46b23e95000c56a5672ac14e5e59c)
* [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1ae242e3a4ecaf21e98161eeb9b76ddd96)
* [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1a22be92b580e7c0066b685727e37e136d)
* [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1aca273abdb13cb319c0a62fd1e1a3a6de)
* [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1a4f336e55e4dbce34271fb0c287e7efaa)
* [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1a9ec5428be66a6df185dd3ed80b0eb64e)
* [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1a25c63d3cb6b341e0f60e4b952340eaf8)
* [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1acd5db0cd2504d1bc6c933d0108982287)
* [size](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData_1a785bd4cc2083bb890f1892c373facb33)

## Private attributes

<a id="classsysc_1_1OutputVectorData_1a4852944c582d2b0905ebd578929e7cd0"></a>
### Variable m\_dataType

![][private]

**Definition**: `OutputVectorData.hpp` (line 260)

```cpp
sysc::PrimitiveType sysc::OutputVectorData::m_dataType {sysc::Double}
```







**Type**: [sysc::PrimitiveType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad3b1c73e4a63f4d292d65f3db875e844)

<a id="classsysc_1_1OutputVectorData_1a2db32f6af4b98a1679e1102621d1be87"></a>
### Variable m\_isSplitVector

![][private]

**Definition**: `OutputVectorData.hpp` (line 261)

```cpp
bool sysc::OutputVectorData::m_isSplitVector {false}
```







**Type**: bool

<a id="classsysc_1_1OutputVectorData_1a377245f77e3c5bdf17afd7e7b8de6e22"></a>
### Variable m\_data0

![][private]

**Definition**: `OutputVectorData.hpp` (line 262)

```cpp
const void* sysc::OutputVectorData::m_data0 {nullptr}
```







**Type**: const void *

<a id="classsysc_1_1OutputVectorData_1a51a6727115cf209c9068f960948701ff"></a>
### Variable m\_data1

![][private]

**Definition**: `OutputVectorData.hpp` (line 263)

```cpp
const void* sysc::OutputVectorData::m_data1 {nullptr}
```







**Type**: const void *

<a id="classsysc_1_1OutputVectorData_1a71a279c9748db9c7c8863ebef8629dfe"></a>
### Variable m\_data2

![][private]

**Definition**: `OutputVectorData.hpp` (line 264)

```cpp
const void* sysc::OutputVectorData::m_data2 {nullptr}
```







**Type**: const void *

<a id="classsysc_1_1OutputVectorData_1a1ef4bf17f73bd6ef1fb8c9c03dc10f67"></a>
### Variable m\_size

![][private]

**Definition**: `OutputVectorData.hpp` (line 265)

```cpp
std::size_t sysc::OutputVectorData::m_size {0}
```







**Type**: std::size_t

<a id="classsysc_1_1OutputVectorData_1a6102a5a02916b073705db46fe01ed889"></a>
### Variable m\_dimension

![][private]

**Definition**: `OutputVectorData.hpp` (line 266)

```cpp
Dimension sysc::OutputVectorData::m_dimension {Dimension::D3}
```







**Type**: [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c)

## Public functions

<a id="classsysc_1_1OutputVectorData_1a5baa242c692e4c981534a3c4e3492ea4"></a>
### Function OutputVectorData

![][public]

```cpp
sysc::OutputVectorData::OutputVectorData(const double *data, std::size_t size)
```

Provide a constructor for output vector data with compact storage.

**Parameters**:

* **data**: - pointer to the array of double-precision data.
* **size**: - number of vectors.



**Parameters**:

* const double * **data**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputVectorData_1abed71ad1966f16f00f9596603c23446d"></a>
### Function OutputVectorData

![][public]

```cpp
sysc::OutputVectorData::OutputVectorData(const double *data, std::size_t size, Dimension dimension)
```

Provide a constructor for 2D output vector data with compact storage.

**Parameters**:

* **data**: - pointer to the array of double-precision data.
* **size**: - number of vectors.
* **dimension**: - dimension of double-precision vector data.



**Parameters**:

* const double * **data**
* std::size_t **size**
* [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c) **dimension**

**Return type**: 

<a id="classsysc_1_1OutputVectorData_1aef88547a7694874f7fbf7956130e0066"></a>
### Function OutputVectorData

![][public]

```cpp
sysc::OutputVectorData::OutputVectorData(const float *data, std::size_t size)
```

Provide a constructor for output vector data with compact storage.

**Parameters**:

* **data**: - pointer to the array of single-precision data.
* **size**: - number of vectors.



**Parameters**:

* const float * **data**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputVectorData_1abb58544d6fe421936606fc665e8ab548"></a>
### Function OutputVectorData

![][public]

```cpp
sysc::OutputVectorData::OutputVectorData(const float *data, std::size_t size, Dimension dimension)
```

Provide a constructor for 2D output vector data with compact storage.

**Parameters**:

* **data**: - pointer to the array of single-precision data.
* **size**: - number of vectors.
* **dimension**: - dimension of single-precision vector data.



**Parameters**:

* const float * **data**
* std::size_t **size**
* [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c) **dimension**

**Return type**: 

<a id="classsysc_1_1OutputVectorData_1a3f50f1e64c99ce81d0c0f3ba1df8461e"></a>
### Function OutputVectorData

![][public]

```cpp
sysc::OutputVectorData::OutputVectorData(const std::vector< double > &data)
```

Provide a constructor for output vector data with compact storage.

**Parameters**:

* **data**: - reference to the STL vector of double-precision data.



**Parameters**:

* const std::vector< double > & **data**

**Return type**: 

<a id="classsysc_1_1OutputVectorData_1a5e3662f00e1637635bfc861cf22bd5c9"></a>
### Function OutputVectorData

![][public]

```cpp
sysc::OutputVectorData::OutputVectorData(const std::vector< double > &data, Dimension dimension)
```

Provide a constructor for 2D output vector data with compact storage.

**Parameters**:

* **data**: - reference to the STL vector of double-precision data.
* **dimension**: - dimension of double-precision vector data.



**Parameters**:

* const std::vector< double > & **data**
* [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c) **dimension**

**Return type**: 

<a id="classsysc_1_1OutputVectorData_1a030b346cb0d19cb872edc91e2e9c15e5"></a>
### Function OutputVectorData

![][public]

```cpp
sysc::OutputVectorData::OutputVectorData(const std::vector< float > &data)
```

Provide a constructor for output vector data with compact storage.

**Parameters**:

* **data**: - reference to the STL vector of single-precision data.



**Parameters**:

* const std::vector< float > & **data**

**Return type**: 

<a id="classsysc_1_1OutputVectorData_1a406d3ea15f90374c6e4c2c5a4a06f98e"></a>
### Function OutputVectorData

![][public]

```cpp
sysc::OutputVectorData::OutputVectorData(const std::vector< float > &data, Dimension dimension)
```

Provide a constructor for 2D output vector data with compact storage.

**Parameters**:

* **data**: - reference to the STL vector of single-precision data.
* **dimension**: - dimension of single-precision vector data.



**Parameters**:

* const std::vector< float > & **data**
* [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c) **dimension**

**Return type**: 

<a id="classsysc_1_1OutputVectorData_1aebefd421a4e0e4b13715ab2cb140bc9b"></a>
### Function OutputVectorData

![][public]

```cpp
sysc::OutputVectorData::OutputVectorData(const double *data0, const double *data1, const double *data2, std::size_t size)
```

Create an output vector data access object with split storage.

**Parameters**:

* **data0**: - pointer to the first array of double-precision data.
* **data1**: - pointer to the second array of double-precision data.
* **data2**: - pointer to the third array of double-precision data.
* **size**: - number of vectors.



**Parameters**:

* const double * **data0**
* const double * **data1**
* const double * **data2**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputVectorData_1a79b9a2aa856cebaad7eba43bba1e7b4e"></a>
### Function OutputVectorData

![][public]

```cpp
sysc::OutputVectorData::OutputVectorData(const double *data0, const double *data1, std::size_t size)
```

Create an 2D output vector data access object with split storage.

**Parameters**:

* **data0**: - pointer to the first array of double-precision data.
* **data1**: - pointer to the second array of double-precision data.
* **size**: - number of vectors.



**Parameters**:

* const double * **data0**
* const double * **data1**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputVectorData_1a5d46caaf7a323c14dec7eef78370eef2"></a>
### Function OutputVectorData

![][public]

```cpp
sysc::OutputVectorData::OutputVectorData(const float *data0, const float *data1, const float *data2, std::size_t size)
```

Create an output vector data access object with split storage.

**Parameters**:

* **data0**: - pointer to the first array of single-precision data.
* **data1**: - pointer to the second array of single-precision data.
* **data2**: - pointer to the third array of single-precision data.
* **size**: - number of vectors.



**Parameters**:

* const float * **data0**
* const float * **data1**
* const float * **data2**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputVectorData_1a36e46b23e95000c56a5672ac14e5e59c"></a>
### Function OutputVectorData

![][public]

```cpp
sysc::OutputVectorData::OutputVectorData(const float *data0, const float *data1, std::size_t size)
```

Create an 2D output vector data access object with split storage.

**Parameters**:

* **data0**: - pointer to the first array of single-precision data.
* **data1**: - pointer to the second array of single-precision data.
* **size**: - number of vectors.



**Parameters**:

* const float * **data0**
* const float * **data1**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputVectorData_1ae242e3a4ecaf21e98161eeb9b76ddd96"></a>
### Function OutputVectorData

![][public]

```cpp
sysc::OutputVectorData::OutputVectorData(const std::vector< double > &data0, const std::vector< double > &data1, const std::vector< double > &data2)
```

Create an output vector data access object with split storage.

**Parameters**:

* **data0**: - reference to the first STL vector of double-precision data.
* **data1**: - reference to the second STL vector of double-precision data.
* **data2**: - reference to the third STL vector of double-precision data.



**Parameters**:

* const std::vector< double > & **data0**
* const std::vector< double > & **data1**
* const std::vector< double > & **data2**

**Return type**: 

<a id="classsysc_1_1OutputVectorData_1a22be92b580e7c0066b685727e37e136d"></a>
### Function OutputVectorData

![][public]

```cpp
sysc::OutputVectorData::OutputVectorData(const std::vector< double > &data0, const std::vector< double > &data1)
```

Create an 2D output vector data access object with split storage.

**Parameters**:

* **data0**: - reference to the first STL vector of double-precision data.
* **data1**: - reference to the second STL vector of double-precision data.



**Parameters**:

* const std::vector< double > & **data0**
* const std::vector< double > & **data1**

**Return type**: 

<a id="classsysc_1_1OutputVectorData_1aca273abdb13cb319c0a62fd1e1a3a6de"></a>
### Function OutputVectorData

![][public]

```cpp
sysc::OutputVectorData::OutputVectorData(const std::vector< float > &data0, const std::vector< float > &data1, const std::vector< float > &data2)
```

Create an output vector data access object with split storage.

**Parameters**:

* **data0**: - reference to the first STL vector of single-precision data.
* **data1**: - reference to the second STL vector of single-precision data.
* **data2**: - reference to the third STL vector of single-precision data.



**Parameters**:

* const std::vector< float > & **data0**
* const std::vector< float > & **data1**
* const std::vector< float > & **data2**

**Return type**: 

<a id="classsysc_1_1OutputVectorData_1a4f336e55e4dbce34271fb0c287e7efaa"></a>
### Function OutputVectorData

![][public]

```cpp
sysc::OutputVectorData::OutputVectorData(const std::vector< float > &data0, const std::vector< float > &data1)
```

Create an 2D output vector data access object with split storage.

**Parameters**:

* **data0**: - reference to the first STL vector of single-precision data.
* **data1**: - reference to the second STL vector of single-precision data.



**Parameters**:

* const std::vector< float > & **data0**
* const std::vector< float > & **data1**

**Return type**: 

<a id="classsysc_1_1OutputVectorData_1a9ec5428be66a6df185dd3ed80b0eb64e"></a>
### Function OutputVectorData

![][public]

```cpp
sysc::OutputVectorData::OutputVectorData()=default
```

Provide a default constructor.





**Return type**: 

<a id="classsysc_1_1OutputVectorData_1a25c63d3cb6b341e0f60e4b952340eaf8"></a>
### Function OutputVectorData

![][public]

```cpp
sysc::OutputVectorData::OutputVectorData(const OutputVectorData &)=default
```

Provide a copy-constructor.





**Parameters**:

* const [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData) &

**Return type**: 

<a id="classsysc_1_1OutputVectorData_1acd5db0cd2504d1bc6c933d0108982287"></a>
### Function OutputVectorData

![][public]

```cpp
sysc::OutputVectorData::OutputVectorData(OutputVectorData &&)=default
```

Provide a move-constructor.





**Parameters**:

* [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData) &&

**Return type**: 

<a id="classsysc_1_1OutputVectorData_1ac8771e17bc6fbfce48d354ef0b8976a9"></a>
### Function operator=

![][public]

```cpp
OutputVectorData& sysc::OutputVectorData::operator=(const OutputVectorData &)=default
```

Provide a copy-assign operator.





**Parameters**:

* const [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData) &

**Return type**: [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData) &

<a id="classsysc_1_1OutputVectorData_1a6247d77c62de13b7a92abbf157cef85d"></a>
### Function operator=

![][public]

```cpp
OutputVectorData& sysc::OutputVectorData::operator=(OutputVectorData &&)=default
```

Provide a move-assign operator.





**Parameters**:

* [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData) &&

**Return type**: [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData) &

<a id="classsysc_1_1OutputVectorData_1a785bd4cc2083bb890f1892c373facb33"></a>
### Function size

![][public]
![][const]

```cpp
std::size_t sysc::OutputVectorData::size() const noexcept
```

Get the size of data.





**Return type**: std::size_t

<a id="classsysc_1_1OutputVectorData_1ad6bc7562925ae28572cd41e890d95c2c"></a>
### Function empty

![][public]
![][const]

```cpp
bool sysc::OutputVectorData::empty() const noexcept
```

Check if array "data" is empty.





**Return type**: bool

<a id="classsysc_1_1OutputVectorData_1a17e8aa13a07402bd901c14b52e4645a1"></a>
### Function getDataType

![][public]
![][const]

```cpp
sysc::PrimitiveType sysc::OutputVectorData::getDataType() const noexcept
```

Get the primitive type of data.

For internal use only (no back-compatibility guarantee).



**Return type**: [sysc::PrimitiveType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad3b1c73e4a63f4d292d65f3db875e844)

<a id="classsysc_1_1OutputVectorData_1a4ec5da13d8806b713d25d12f2c2385e8"></a>
### Function isSplitVector

![][public]
![][const]

```cpp
bool sysc::OutputVectorData::isSplitVector() const noexcept
```

Query whether it's a split or compact vector layout.

For internal use only (no back-compatibility guarantee).



**Return type**: bool

<a id="classsysc_1_1OutputVectorData_1a2faceb69c66ff2345844961532a3310a"></a>
### Function getData0

![][public]
![][const]

```cpp
const void* sysc::OutputVectorData::getData0() const noexcept
```

Get pointer to data0.

For internal use only (no back-compatibility guarantee).



**Return type**: const void *

<a id="classsysc_1_1OutputVectorData_1ac123a2afc965bec10383c7308045e4fd"></a>
### Function getData1

![][public]
![][const]

```cpp
const void* sysc::OutputVectorData::getData1() const noexcept
```

Get pointer to data1.

For internal use only (no back-compatibility guarantee).



**Return type**: const void *

<a id="classsysc_1_1OutputVectorData_1a280ae2fcfb4d72ba97a85e1d5ab40656"></a>
### Function getData2

![][public]
![][const]

```cpp
const void* sysc::OutputVectorData::getData2() const noexcept
```

Get pointer to data2.

For internal use only (no back-compatibility guarantee).



**Return type**: const void *

<a id="classsysc_1_1OutputVectorData_1a22aafd281edba30114f84de2d01fac6b"></a>
### Function getDimension

![][public]
![][const]

```cpp
Dimension sysc::OutputVectorData::getDimension() const noexcept
```

Get the Dimension object.

**Returns**:

const Dimension



**Return type**: [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c)

**References**:

* [sysc::Double](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ggad3b1c73e4a63f4d292d65f3db875e844a29843d2c1bb5760f768dcc066dac1ac1)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)