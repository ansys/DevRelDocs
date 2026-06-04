# Class sysc::InputVectorData

![][C++]
![][public]

**Definition**: `InputVectorData.hpp` (line 27)

Provide a class for input vector data.

Input vector data provides read and write access to an array of vector data.





The size is the total number of vectors, not the total number of components, i.e. if all data is stored in one contiguous array, then size is 1/3 the size of that array.

## Members

* [empty](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1a4ce74ce70cf4f3b150392bc2e622f23e)
* [getData0](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1a0cc143921963b2735273f393f8c67bf6)
* [getData1](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1aa9a69a103005e12cbcb5e4c718b81975)
* [getData2](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1a13f54dd279d94b92c031266a7d006c70)
* [getDataType](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1a36c2f1ad1395f88faf59a1b6da0db099)
* [getDimension](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1a04a85b9650fe4c0b8f4e3ecbad088c52)
* [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1a9576407cff04f685f890b03512a22f8d)
* [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1a313b74bc43ee9519a03c7351d5a1b9e9)
* [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1a353712571f18e0d9c9113a6279fd4bd9)
* [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1a2b7ad10e29d9b8f9d5cc19bcb4880852)
* [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1ab859e8fda9352a223489fc9710ebc176)
* [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1a16a3d28c7a9176077b094d0c090ab8e8)
* [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1a93f8cbc6fd62623d017dd402e75ea60e)
* [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1aa49d763df2ced8b08b5f96d0fd581815)
* [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1ae46ff595736820fb92cb12797f05d62a)
* [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1a34e2f29605de1f3d218f61f305231f37)
* [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1a6290f72e042d38bee53f671eaeef382b)
* [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1a5e7ec5d5f55d26d79f5beb5f492e8173)
* [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1ad682d56f49fc69628ad18410cefad197)
* [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1a4fdc6e50b3aa55afc3375e9e8a25589f)
* [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1a6e884069f0f4f3cb1e58d3ee6894407f)
* [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1adeceff37584427f9b487228ed1619ad8)
* [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1aee6e8ae9cc5c83b4f016a68b6825643d)
* [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1a9c493ca8719b46214215275adcaf8a6d)
* [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1adf89794c1d53ceec3ed34f6c4820530b)
* [isSplitVector](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1a8b96a950634f0ed4dae6468e88319e53)
* [m\_data0](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1ac6bb5c281146d7de824962037331af81)
* [m\_data1](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1afbc0e2abcbc6843cd3c54aaf2bf5cfa9)
* [m\_data2](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1ae4dca6ad0c0824e2cbf6f75ac45177a2)
* [m\_dataType](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1a1ba66e8dc4bcd722ecafb2d666cbf400)
* [m\_dimension](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1a731076431c5aadf8dd9d01eba80e1168)
* [m\_isSplitVector](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1aabead20359f818ec6c5c479920a87c82)
* [m\_size](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1a21afc6c3bcbb03d3074a1454b7d2d164)
* [operator=](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1a212a413871c450f03411b1db5c9e1961)
* [operator=](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1a52b7dd64cf349976d3c4842463783c59)
* [size](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData_1a421e44762b642930822a119ae59751eb)

## Private attributes

<a id="classsysc_1_1InputVectorData_1a1ba66e8dc4bcd722ecafb2d666cbf400"></a>
### Variable m\_dataType

![][private]

**Definition**: `InputVectorData.hpp` (line 268)

```cpp
sysc::PrimitiveType sysc::InputVectorData::m_dataType {sysc::Double}
```







**Type**: [sysc::PrimitiveType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad3b1c73e4a63f4d292d65f3db875e844)

<a id="classsysc_1_1InputVectorData_1aabead20359f818ec6c5c479920a87c82"></a>
### Variable m\_isSplitVector

![][private]

**Definition**: `InputVectorData.hpp` (line 269)

```cpp
bool sysc::InputVectorData::m_isSplitVector {false}
```







**Type**: bool

<a id="classsysc_1_1InputVectorData_1ac6bb5c281146d7de824962037331af81"></a>
### Variable m\_data0

![][private]

**Definition**: `InputVectorData.hpp` (line 270)

```cpp
void* sysc::InputVectorData::m_data0 {nullptr}
```







**Type**: void *

<a id="classsysc_1_1InputVectorData_1afbc0e2abcbc6843cd3c54aaf2bf5cfa9"></a>
### Variable m\_data1

![][private]

**Definition**: `InputVectorData.hpp` (line 271)

```cpp
void* sysc::InputVectorData::m_data1 {nullptr}
```







**Type**: void *

<a id="classsysc_1_1InputVectorData_1ae4dca6ad0c0824e2cbf6f75ac45177a2"></a>
### Variable m\_data2

![][private]

**Definition**: `InputVectorData.hpp` (line 272)

```cpp
void* sysc::InputVectorData::m_data2 {nullptr}
```







**Type**: void *

<a id="classsysc_1_1InputVectorData_1a21afc6c3bcbb03d3074a1454b7d2d164"></a>
### Variable m\_size

![][private]

**Definition**: `InputVectorData.hpp` (line 273)

```cpp
std::size_t sysc::InputVectorData::m_size {0}
```







**Type**: std::size_t

<a id="classsysc_1_1InputVectorData_1a731076431c5aadf8dd9d01eba80e1168"></a>
### Variable m\_dimension

![][private]

**Definition**: `InputVectorData.hpp` (line 274)

```cpp
Dimension sysc::InputVectorData::m_dimension {Dimension::D3}
```







**Type**: [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c)

## Public functions

<a id="classsysc_1_1InputVectorData_1a9576407cff04f685f890b03512a22f8d"></a>
### Function InputVectorData

![][public]

```cpp
sysc::InputVectorData::InputVectorData(double *data, std::size_t size)
```

Provide a constructor for input vector data with compact storage.

**Parameters**:

* **data**: - pointer to the array of double-precision data.
* **size**: - number of vectors.



**Parameters**:

* double * **data**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1InputVectorData_1a313b74bc43ee9519a03c7351d5a1b9e9"></a>
### Function InputVectorData

![][public]

```cpp
sysc::InputVectorData::InputVectorData(double *data, std::size_t size, Dimension dimension)
```

Provide a constructor for 2D output vector data with compact storage.

**Parameters**:

* **data**: - pointer to the array of double-precision data.
* **size**: - number of vectors.
* **dimension**: - dimension of double-precision vector data.



**Parameters**:

* double * **data**
* std::size_t **size**
* [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c) **dimension**

**Return type**: 

<a id="classsysc_1_1InputVectorData_1a353712571f18e0d9c9113a6279fd4bd9"></a>
### Function InputVectorData

![][public]

```cpp
sysc::InputVectorData::InputVectorData(float *data, std::size_t size)
```

Provide a constructor for input vector data with compact storage.

**Parameters**:

* **data**: - pointer to the array of single-precision data.
* **size**: - number of vectors.



**Parameters**:

* float * **data**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1InputVectorData_1a2b7ad10e29d9b8f9d5cc19bcb4880852"></a>
### Function InputVectorData

![][public]

```cpp
sysc::InputVectorData::InputVectorData(float *data, std::size_t size, Dimension dimension)
```

Provide a constructor for 2D output vector data with compact storage.

**Parameters**:

* **data**: - pointer to the array of single-precision data.
* **size**: - number of vectors.
* **dimension**: - dimension of single-precision vector data.



**Parameters**:

* float * **data**
* std::size_t **size**
* [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c) **dimension**

**Return type**: 

<a id="classsysc_1_1InputVectorData_1ab859e8fda9352a223489fc9710ebc176"></a>
### Function InputVectorData

![][public]

```cpp
sysc::InputVectorData::InputVectorData(std::vector< double > &data)
```

Provide a constructor for input vector data with compact storage.

**Parameters**:

* **data**: - reference to the STL vector of double-precision data.



**Parameters**:

* std::vector< double > & **data**

**Return type**: 

<a id="classsysc_1_1InputVectorData_1a16a3d28c7a9176077b094d0c090ab8e8"></a>
### Function InputVectorData

![][public]

```cpp
sysc::InputVectorData::InputVectorData(std::vector< double > &data, Dimension dimension)
```

Provide a constructor for 2D output vector data with compact storage.

**Parameters**:

* **data**: - reference to the STL vector of double-precision data.
* **dimension**: - dimension of double-precision vector data.



**Parameters**:

* std::vector< double > & **data**
* [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c) **dimension**

**Return type**: 

<a id="classsysc_1_1InputVectorData_1a93f8cbc6fd62623d017dd402e75ea60e"></a>
### Function InputVectorData

![][public]

```cpp
sysc::InputVectorData::InputVectorData(std::vector< float > &data)
```

Provide a constructor for input vector data with compact storage.

**Parameters**:

* **data**: - reference to the STL vector of single-precision data.



**Parameters**:

* std::vector< float > & **data**

**Return type**: 

<a id="classsysc_1_1InputVectorData_1aa49d763df2ced8b08b5f96d0fd581815"></a>
### Function InputVectorData

![][public]

```cpp
sysc::InputVectorData::InputVectorData(std::vector< float > &data, Dimension dimension)
```

Provide a constructor for 2D output vector data with compact storage.

**Parameters**:

* **data**: - reference to the STL vector of single-precision data.
* **dimension**: - dimension of single-precision vector data.



**Parameters**:

* std::vector< float > & **data**
* [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c) **dimension**

**Return type**: 

<a id="classsysc_1_1InputVectorData_1ae46ff595736820fb92cb12797f05d62a"></a>
### Function InputVectorData

![][public]

```cpp
sysc::InputVectorData::InputVectorData(double *data0, double *data1, double *data2, std::size_t size)
```

Create an input vector data access object with split storage.

**Parameters**:

* **data0**: - pointer to the first array of double-precision data.
* **data1**: - pointer to the second array of double-precision data.
* **data2**: - pointer to the third array of double-precision data.
* **size**: - number of vectors.



**Parameters**:

* double * **data0**
* double * **data1**
* double * **data2**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1InputVectorData_1a34e2f29605de1f3d218f61f305231f37"></a>
### Function InputVectorData

![][public]

```cpp
sysc::InputVectorData::InputVectorData(double *data0, double *data1, std::size_t size)
```

Create an 2D output vector data access object with split storage.

**Parameters**:

* **data0**: - pointer to the first array of double-precision data.
* **data1**: - pointer to the second array of double-precision data.
* **size**: - number of vectors.



**Parameters**:

* double * **data0**
* double * **data1**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1InputVectorData_1a6290f72e042d38bee53f671eaeef382b"></a>
### Function InputVectorData

![][public]

```cpp
sysc::InputVectorData::InputVectorData(float *data0, float *data1, float *data2, std::size_t size)
```

Create an input vector data access object with split storage.

**Parameters**:

* **data0**: - pointer to the first array of single-precision data.
* **data1**: - pointer to the second array of single-precision data.
* **data2**: - pointer to the third array of single-precision data.
* **size**: - number of vectors.



**Parameters**:

* float * **data0**
* float * **data1**
* float * **data2**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1InputVectorData_1a5e7ec5d5f55d26d79f5beb5f492e8173"></a>
### Function InputVectorData

![][public]

```cpp
sysc::InputVectorData::InputVectorData(float *data0, float *data1, std::size_t size)
```

Create an 2D output vector data access object with split storage.

**Parameters**:

* **data0**: - pointer to the first array of single-precision data.
* **data1**: - pointer to the second array of single-precision data.
* **size**: - number of vectors.



**Parameters**:

* float * **data0**
* float * **data1**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1InputVectorData_1ad682d56f49fc69628ad18410cefad197"></a>
### Function InputVectorData

![][public]

```cpp
sysc::InputVectorData::InputVectorData(std::vector< double > &data0, std::vector< double > &data1, std::vector< double > &data2)
```

Create an input vector data access object with split storage.

**Parameters**:

* **data0**: - reference to the first STL vector of double-precision data.
* **data1**: - reference to the second STL vector of double-precision data.
* **data2**: - reference to the third STL vector of double-precision data.



**Parameters**:

* std::vector< double > & **data0**
* std::vector< double > & **data1**
* std::vector< double > & **data2**

**Return type**: 

<a id="classsysc_1_1InputVectorData_1a4fdc6e50b3aa55afc3375e9e8a25589f"></a>
### Function InputVectorData

![][public]

```cpp
sysc::InputVectorData::InputVectorData(std::vector< double > &data0, std::vector< double > &data1)
```

Create an 2D output vector data access object with split storage.

**Parameters**:

* **data0**: - reference to the first STL vector of double-precision data.
* **data1**: - reference to the second STL vector of double-precision data.



**Parameters**:

* std::vector< double > & **data0**
* std::vector< double > & **data1**

**Return type**: 

<a id="classsysc_1_1InputVectorData_1a6e884069f0f4f3cb1e58d3ee6894407f"></a>
### Function InputVectorData

![][public]

```cpp
sysc::InputVectorData::InputVectorData(std::vector< float > &data0, std::vector< float > &data1, std::vector< float > &data2)
```

Create an input vector data access object with split storage.

**Parameters**:

* **data0**: - reference to the first STL vector of single-precision data.
* **data1**: - reference to the second STL vector of single-precision data.
* **data2**: - reference to the third STL vector of single-precision data.



**Parameters**:

* std::vector< float > & **data0**
* std::vector< float > & **data1**
* std::vector< float > & **data2**

**Return type**: 

<a id="classsysc_1_1InputVectorData_1adeceff37584427f9b487228ed1619ad8"></a>
### Function InputVectorData

![][public]

```cpp
sysc::InputVectorData::InputVectorData(std::vector< float > &data0, std::vector< float > &data1)
```

Create an 2D output vector data access object with split storage.

**Parameters**:

* **data0**: - reference to the first STL vector of single-precision data.
* **data1**: - reference to the second STL vector of single-precision data.



**Parameters**:

* std::vector< float > & **data0**
* std::vector< float > & **data1**

**Return type**: 

<a id="classsysc_1_1InputVectorData_1aee6e8ae9cc5c83b4f016a68b6825643d"></a>
### Function InputVectorData

![][public]

```cpp
sysc::InputVectorData::InputVectorData()=default
```

Provide a default constructor.





**Return type**: 

<a id="classsysc_1_1InputVectorData_1a9c493ca8719b46214215275adcaf8a6d"></a>
### Function InputVectorData

![][public]

```cpp
sysc::InputVectorData::InputVectorData(const InputVectorData &)=default
```

Provide a copy-constructor.





**Parameters**:

* const [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData) &

**Return type**: 

<a id="classsysc_1_1InputVectorData_1adf89794c1d53ceec3ed34f6c4820530b"></a>
### Function InputVectorData

![][public]

```cpp
sysc::InputVectorData::InputVectorData(InputVectorData &&)=default
```

Provide a move-constructor.





**Parameters**:

* [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData) &&

**Return type**: 

<a id="classsysc_1_1InputVectorData_1a212a413871c450f03411b1db5c9e1961"></a>
### Function operator=

![][public]

```cpp
InputVectorData& sysc::InputVectorData::operator=(const InputVectorData &)=default
```

Provide a copy-assign operator.





**Parameters**:

* const [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData) &

**Return type**: [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData) &

<a id="classsysc_1_1InputVectorData_1a52b7dd64cf349976d3c4842463783c59"></a>
### Function operator=

![][public]

```cpp
InputVectorData& sysc::InputVectorData::operator=(InputVectorData &&)=default
```

Provide a move-assign operator.





**Parameters**:

* [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData) &&

**Return type**: [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData) &

<a id="classsysc_1_1InputVectorData_1a421e44762b642930822a119ae59751eb"></a>
### Function size

![][public]
![][const]

```cpp
std::size_t sysc::InputVectorData::size() const noexcept
```

Get the size of data.





**Return type**: std::size_t

<a id="classsysc_1_1InputVectorData_1a4ce74ce70cf4f3b150392bc2e622f23e"></a>
### Function empty

![][public]
![][const]

```cpp
bool sysc::InputVectorData::empty() const noexcept
```

Check if array "data" is empty.





**Return type**: bool

<a id="classsysc_1_1InputVectorData_1a36c2f1ad1395f88faf59a1b6da0db099"></a>
### Function getDataType

![][public]
![][const]

```cpp
sysc::PrimitiveType sysc::InputVectorData::getDataType() const noexcept
```

Get the primitive type of data.

For internal use only (no back-compatibility guarantee).



**Return type**: [sysc::PrimitiveType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad3b1c73e4a63f4d292d65f3db875e844)

<a id="classsysc_1_1InputVectorData_1a8b96a950634f0ed4dae6468e88319e53"></a>
### Function isSplitVector

![][public]
![][const]

```cpp
bool sysc::InputVectorData::isSplitVector() const noexcept
```

Query whether it's a split or compact vector layout.

For internal use only (no back-compatibility guarantee).



**Return type**: bool

<a id="classsysc_1_1InputVectorData_1a0cc143921963b2735273f393f8c67bf6"></a>
### Function getData0

![][public]
![][const]

```cpp
void* sysc::InputVectorData::getData0() const noexcept
```

Get pointer to data0.

For internal use only (no back-compatibility guarantee).



**Return type**: void *

<a id="classsysc_1_1InputVectorData_1aa9a69a103005e12cbcb5e4c718b81975"></a>
### Function getData1

![][public]
![][const]

```cpp
void* sysc::InputVectorData::getData1() const noexcept
```

Get pointer to data1.

For internal use only (no back-compatibility guarantee).



**Return type**: void *

<a id="classsysc_1_1InputVectorData_1a13f54dd279d94b92c031266a7d006c70"></a>
### Function getData2

![][public]
![][const]

```cpp
void* sysc::InputVectorData::getData2() const noexcept
```

Get pointer to data2.

For internal use only (no back-compatibility guarantee).



**Return type**: void *

<a id="classsysc_1_1InputVectorData_1a04a85b9650fe4c0b8f4e3ecbad088c52"></a>
### Function getDimension

![][public]
![][const]

```cpp
Dimension sysc::InputVectorData::getDimension() const noexcept
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