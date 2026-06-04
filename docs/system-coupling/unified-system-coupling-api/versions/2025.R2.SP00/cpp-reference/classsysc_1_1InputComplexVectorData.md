# Class sysc::InputComplexVectorData

![][C++]
![][public]

**Definition**: `InputComplexVectorData.hpp` (line 29)

Provide a class for input complex vector data.

Input vector data provides read and write access to an array of complex vector data.





The size is the total number of complex vectors, not the total number of components, i.e. if all data is stored in one contiguous array, then size is 1/6 the size of that array.

## Members

* [empty](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a3d23dad57825da22f06f1572f919b879)
* [getData1](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1ae26d2fa007face287e43123f207f04ba)
* [getData2](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a73fc5f5dfa2688897d9ca516d003a062)
* [getData3](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1ab04fe2abf3d1d7f20b42554a9abe22f5)
* [getData4](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a1382d51a7353f7872cc566df72cfeb23)
* [getData5](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a4e3ab20a71b75947621dee1abc490e30)
* [getData6](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a6f9fd6dc505471a6826f6638c28a893e)
* [getDataType](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a05fbe8f5573c5eac873f63ffda747134)
* [getDimension](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a29dcda46e3ccf38788b6415ac16e8a1d)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a7979652e853b1a632c35b2874b205268)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a1c522ee99d3acc780fad020ed8998210)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a35806ff7869d291b101464685447375f)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1af00dde7b6df40d9ef306b73146bb0a8a)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1ace3e39b39fb26d832a7d66ec8a329102)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a7686a586ff91fb11bd12d6ae354b7460)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a7dd946495a56e0f4674a07bbd54e2868)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1af417e2ffe46f6c5f7dc01bba762a9b1a)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1af89b20a5ade30d8a634bd327669d1710)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a78bc8800ab8f9d0ecba24156aaf791c7)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a4b3b25734f1590e0c1c900b9d78c89fe)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1ad8eebfebf13d28a4a15c8bb7cb609cc1)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a1ae2dd6f2ff845cadc1df703e26e5832)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a27f1b3a1f44ab41fb9a468314e2332eb)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1acba0e6560b239aafa66a6edd6481f33f)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a90f9102c8b54965c1faa7f532ecbeeb7)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a2a0c3cb3caf3c628e4b7dd67df2929a6)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1aec3a629659f337555c4a134fe8cab378)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1aab25dedf00a41d6ddca019bf44cec2f5)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a26132273684decd1d2004ba31b8918c7)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1af5285ef76f27059fd89ccf1135f7b930)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a4529854724c43dac4f3a74b32f7aebdb)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a4d340ca3ff83ad4f1b76fd61544b0c15)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a51da2b96b4c2c4d04a6c10ba7a6ed44b)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1abe0fb3a10b587f904cfebc9fdbaab7af)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1aecdc5bef4d837e9bd27099bd6e4ca061)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a2e05d32a1a48e4ad2144728526b3016a)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a00dec4920b1774f27c3556f0a2336cb8)
* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a9766225ad8e836fa5a354bcc6f449d92)
* [isSplitComplex](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1acb66a63b6228b76afd0e0c1e98167feb)
* [isSplitVector](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1ab32bd72da49357c8ed02e59aa2e63196)
* [m\_data1](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a447180ca18492a81cbc106ebc4f21560)
* [m\_data2](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a7760c17c5eb34cd61eb905f9217a5ffc)
* [m\_data3](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a028d2e9e78acc26ea66a5a733f46cbae)
* [m\_data4](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1ab83f3137c87950a01db7d49e3f255c1a)
* [m\_data5](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1af2fe89d83a9e1ca210d7020129eb3ce5)
* [m\_data6](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1ad07731fb9eaacf8e45fa048e1d742354)
* [m\_dataType](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a71915040696a9b62ae36adbdffd15159)
* [m\_dimension](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a74ae1dff29e22e10cd655a4685efa0e2)
* [m\_isSplitComplex](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1aec48744e230c2d8c6fe5c820ef08ae21)
* [m\_isSplitVector](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a9739f01ca1bd5429715b428e7056b748)
* [m\_size](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a5a9e0bdbc9ed3b070c72fb7b219d1c64)
* [operator=](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1ac1c37978bc9252b340862c4600d77b5e)
* [operator=](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a4dade0f1e2dd51bc4bae1abba988b53c)
* [size](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData_1a64d76b7df1fe0ce877cf9297cc584210)

## Private attributes

<a id="classsysc_1_1InputComplexVectorData_1a71915040696a9b62ae36adbdffd15159"></a>
### Variable m\_dataType

![][private]

**Definition**: `InputComplexVectorData.hpp` (line 615)

```cpp
sysc::PrimitiveType sysc::InputComplexVectorData::m_dataType {sysc::Double}
```







**Type**: [sysc::PrimitiveType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad3b1c73e4a63f4d292d65f3db875e844)

<a id="classsysc_1_1InputComplexVectorData_1a9739f01ca1bd5429715b428e7056b748"></a>
### Variable m\_isSplitVector

![][private]

**Definition**: `InputComplexVectorData.hpp` (line 616)

```cpp
bool sysc::InputComplexVectorData::m_isSplitVector {false}
```







**Type**: bool

<a id="classsysc_1_1InputComplexVectorData_1aec48744e230c2d8c6fe5c820ef08ae21"></a>
### Variable m\_isSplitComplex

![][private]

**Definition**: `InputComplexVectorData.hpp` (line 617)

```cpp
bool sysc::InputComplexVectorData::m_isSplitComplex {false}
```







**Type**: bool

<a id="classsysc_1_1InputComplexVectorData_1a447180ca18492a81cbc106ebc4f21560"></a>
### Variable m\_data1

![][private]

**Definition**: `InputComplexVectorData.hpp` (line 619)

```cpp
void* sysc::InputComplexVectorData::m_data1 {nullptr}
```







**Type**: void *

<a id="classsysc_1_1InputComplexVectorData_1a7760c17c5eb34cd61eb905f9217a5ffc"></a>
### Variable m\_data2

![][private]

**Definition**: `InputComplexVectorData.hpp` (line 620)

```cpp
void* sysc::InputComplexVectorData::m_data2 {nullptr}
```







**Type**: void *

<a id="classsysc_1_1InputComplexVectorData_1a028d2e9e78acc26ea66a5a733f46cbae"></a>
### Variable m\_data3

![][private]

**Definition**: `InputComplexVectorData.hpp` (line 621)

```cpp
void* sysc::InputComplexVectorData::m_data3 {nullptr}
```







**Type**: void *

<a id="classsysc_1_1InputComplexVectorData_1ab83f3137c87950a01db7d49e3f255c1a"></a>
### Variable m\_data4

![][private]

**Definition**: `InputComplexVectorData.hpp` (line 622)

```cpp
void* sysc::InputComplexVectorData::m_data4 {nullptr}
```







**Type**: void *

<a id="classsysc_1_1InputComplexVectorData_1af2fe89d83a9e1ca210d7020129eb3ce5"></a>
### Variable m\_data5

![][private]

**Definition**: `InputComplexVectorData.hpp` (line 623)

```cpp
void* sysc::InputComplexVectorData::m_data5 {nullptr}
```







**Type**: void *

<a id="classsysc_1_1InputComplexVectorData_1ad07731fb9eaacf8e45fa048e1d742354"></a>
### Variable m\_data6

![][private]

**Definition**: `InputComplexVectorData.hpp` (line 624)

```cpp
void* sysc::InputComplexVectorData::m_data6 {nullptr}
```







**Type**: void *

<a id="classsysc_1_1InputComplexVectorData_1a5a9e0bdbc9ed3b070c72fb7b219d1c64"></a>
### Variable m\_size

![][private]

**Definition**: `InputComplexVectorData.hpp` (line 626)

```cpp
std::size_t sysc::InputComplexVectorData::m_size {0}
```







**Type**: std::size_t

<a id="classsysc_1_1InputComplexVectorData_1a74ae1dff29e22e10cd655a4685efa0e2"></a>
### Variable m\_dimension

![][private]

**Definition**: `InputComplexVectorData.hpp` (line 627)

```cpp
Dimension sysc::InputComplexVectorData::m_dimension {Dimension::D3}
```







**Type**: [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c)

## Public functions

<a id="classsysc_1_1InputComplexVectorData_1a7979652e853b1a632c35b2874b205268"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(std::vector< std::complex< double >> &dataComplex)
```

Provide a constructor for input complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **dataComplex**: - reference to the STL vector of complex double-precision data.



**Parameters**:

* std::vector< std::complex< double >> & **dataComplex**

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1a1c522ee99d3acc780fad020ed8998210"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(std::vector< std::complex< double >> &dataComplex, Dimension dimension)
```

Provide a constructor for 2D input complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **dataComplex**: - reference to the STL vector of complex double-precision data.
* **dimension**: - dimension of complex vector data.



**Parameters**:

* std::vector< std::complex< double >> & **dataComplex**
* [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c) **dimension**

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1a35806ff7869d291b101464685447375f"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(double *dataComplex, std::size_t size)
```

Provide a constructor for input complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **dataComplex**: - pointer to an array of complex double-precision vectors.
* **size**: - number of vectors.



**Parameters**:

* double * **dataComplex**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1af00dde7b6df40d9ef306b73146bb0a8a"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(double *dataComplex, std::size_t size, Dimension dimension)
```

Provide a constructor for 2D input complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **dataComplex**: - pointer to an array of complex double-precision vectors
* **size**: - number of vectors.
* **dimension**: - dimension of complex vector data.



**Parameters**:

* double * **dataComplex**
* std::size_t **size**
* [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c) **dimension**

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1ace3e39b39fb26d832a7d66ec8a329102"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(std::complex< double > *dataComplex, std::size_t size)
```

Provide a constructor for input complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **dataComplex**: - pointer to an array of complex double-precision vectors.
* **size**: - number of vectors.



**Parameters**:

* std::complex< double > * **dataComplex**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1a7686a586ff91fb11bd12d6ae354b7460"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(std::complex< double > *dataComplex, std::size_t size, Dimension dimension)
```

Provide a constructor for 2D input complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **data**: - pointer to an array of complex double-precision vectors.
* **size**: - number of vectors.
* **dimension**: - dimension of complex vector data.



**Parameters**:

* std::complex< double > * **dataComplex**
* std::size_t **size**
* [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c) **dimension**

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1a7dd946495a56e0f4674a07bbd54e2868"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(std::vector< double > &dataReal, std::vector< double > &dataImaginary)
```

Create an input complex vector data access object with compact storage for vector components and split storage for complex components.

**Parameters**:

* **dataReal**: - reference to the STL vector of double-precision data, that stores the real components of the complex vectors in compact storage format.
* **dataImaginary**: - reference to the STL vector of double-precision data, that stores the imaginary components of the complex vectors in compact storage format.



**Parameters**:

* std::vector< double > & **dataReal**
* std::vector< double > & **dataImaginary**

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1af417e2ffe46f6c5f7dc01bba762a9b1a"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(double *dataReal, double *dataImaginary, std::size_t size)
```

Create an input complex vector data access object with compact storage for vector components and split storage for complex components.

**Parameters**:

* **dataReal**: - pointer to an array of double-precision data, that stores the real components of the complex vectors in compact storage format.
* **dataImaginary**: - pointer to an array of double-precision data, that stores the imaginary components of the complex vectors in compact storage format.
* **size**: - number of vectors.



**Parameters**:

* double * **dataReal**
* double * **dataImaginary**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1af89b20a5ade30d8a634bd327669d1710"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(std::vector< std::complex< double >> &dataComplex1, std::vector< std::complex< double >> &dataComplex2, std::vector< std::complex< double >> &dataComplex3)
```

Create an input complex vector data access object with split storage for vector components and compact storage for complex components.

**Parameters**:

* **dataComplex1**: - reference to the STL vector of complex double-precision data that stores the first components of the vectors of complex numbers.
* **dataComplex2**: - reference to the STL vector of complex double-precision data that stores the second components of the vectors of complex numbers.
* **dataComplex3**: - reference to the STL vector of complex double-precision data that stores the third components of the vectors of complex numbers.



**Parameters**:

* std::vector< std::complex< double >> & **dataComplex1**
* std::vector< std::complex< double >> & **dataComplex2**
* std::vector< std::complex< double >> & **dataComplex3**

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1a78bc8800ab8f9d0ecba24156aaf791c7"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(std::complex< double > *dataComplex1, std::complex< double > *dataComplex2, std::complex< double > *dataComplex3, std::size_t size)
```

Create an input complex vector data access object with split storage for vector components and compact storage for complex components.

**Parameters**:

* **dataComplex1**: - pointer to an array of double-precision complex data that stores the first components of the vectors of complex numbers.
* **dataComplex2**: - pointer to an array of double-precision complex data that stores the second components of the vectors of complex numbers.
* **dataComplex3**: - pointer to an array of double-precision complex data that stores the third components of the vectors of complex numbers.
* **size**: - number of vectors.



**Parameters**:

* std::complex< double > * **dataComplex1**
* std::complex< double > * **dataComplex2**
* std::complex< double > * **dataComplex3**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1a4b3b25734f1590e0c1c900b9d78c89fe"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(double *dataComplex1, double *dataComplex2, double *dataComplex3, std::size_t size)
```

Create an input complex vector data access object with split storage for vector components and compact storage for complex components.

**Parameters**:

* **dataComplex1**: - pointer to an array of double-precision data that stores the first components of the vectors of complex numbers.
* **dataComplex2**: - pointer to an array of double-precision data that stores the second components of the vectors of complex numbers.
* **dataComplex3**: - pointer to an array of double-precision data that stores the third components of the vectors of complex numbers.
* **size**: - number of vectors.



**Parameters**:

* double * **dataComplex1**
* double * **dataComplex2**
* double * **dataComplex3**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1ad8eebfebf13d28a4a15c8bb7cb609cc1"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(std::vector< double > &dataReal1, std::vector< double > &dataImaginary1, std::vector< double > &dataReal2, std::vector< double > &dataImaginary2, std::vector< double > &dataReal3, std::vector< double > &dataImaginary3)
```

Create an input complex vector data access object with split storage for vector components and split storage for complex components.

**Parameters**:

* **dataReal1**: - reference to the STL vector of double-precision data that stores the first real components of the vectors of complex numbers.
* **dataImaginary1**: - reference to the STL vector of double-precision data that stores the first imaginary components of the vectors of complex numbers.
* **dataReal2**: - reference to the STL vector of double-precision data that stores the second real components of the vectors of complex numbers.
* **dataImaginary2**: - reference to the STL vector of double-precision data that stores the second imaginary components of the vectors of complex numbers.
* **dataReal3**: - reference to the STL vector of double-precision data that stores the third real components of the vectors of complex numbers.
* **dataImaginary3**: - reference to the STL vector of double-precision data that stores the third imaginary components of the vectors of complex numbers.



**Parameters**:

* std::vector< double > & **dataReal1**
* std::vector< double > & **dataImaginary1**
* std::vector< double > & **dataReal2**
* std::vector< double > & **dataImaginary2**
* std::vector< double > & **dataReal3**
* std::vector< double > & **dataImaginary3**

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1a1ae2dd6f2ff845cadc1df703e26e5832"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(double *dataReal1, double *dataImaginary1, double *dataReal2, double *dataImaginary2, double *dataReal3, double *dataImaginary3, std::size_t size)
```

Create an input complex vector data access object with split storage for vector components and split storage for complex components.

**Parameters**:

* **dataReal1**: - pointer to an array of double-precision data that stores the first real components of the vectors of complex numbers.
* **dataImaginary1**: - pointer to an array of double-precision data that stores the first imaginary components of the vectors of complex numbers.
* **dataReal2**: - pointer to an array of double-precision data that stores the second real components of the vectors of complex numbers.
* **dataImaginary2**: - pointer to an array of double-precision data that stores the second imaginary components of the vectors of complex numbers.
* **dataReal3**: - pointer to an array of double-precision data that stores the third real components of the vectors of complex numbers.
* **dataImaginary3**: - pointer to an array of double-precision data that stores the third imaginary components of the vectors of complex numbers.
* **size**: - number of vectors.



**Parameters**:

* double * **dataReal1**
* double * **dataImaginary1**
* double * **dataReal2**
* double * **dataImaginary2**
* double * **dataReal3**
* double * **dataImaginary3**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1a27f1b3a1f44ab41fb9a468314e2332eb"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(std::vector< std::complex< float >> &dataComplex)
```

Provide a constructor for input complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **dataComplex**: - reference to the STL vector of complex double-precision data.



**Parameters**:

* std::vector< std::complex< float >> & **dataComplex**

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1acba0e6560b239aafa66a6edd6481f33f"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(std::vector< std::complex< float >> &dataComplex, Dimension dimension)
```

Provide a constructor for 2D input complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **dataComplex**: - reference to the STL vector of complex double-precision data.
* **dimension**: dimension of complex vector data.



**Parameters**:

* std::vector< std::complex< float >> & **dataComplex**
* [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c) **dimension**

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1a90f9102c8b54965c1faa7f532ecbeeb7"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(float *dataComplex, std::size_t size)
```

Provide a constructor for input complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **dataComplex**: - pointer to an array of complex single-precision vectors.
* **size**: - number of vectors.



**Parameters**:

* float * **dataComplex**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1a2a0c3cb3caf3c628e4b7dd67df2929a6"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(float *dataComplex, std::size_t size, Dimension dimension)
```

Provide a constructor for 2D input complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **dataComplex**: - pointer to an array of complex single-precision vectors.
* **size**: - number of vectors.
* **dimension**: dimension of complex vector data.



**Parameters**:

* float * **dataComplex**
* std::size_t **size**
* [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c) **dimension**

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1aec3a629659f337555c4a134fe8cab378"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(std::complex< float > *dataComplex, std::size_t size)
```

Provide a constructor for input complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **dataComplex**: - pointer to an array of complex single-precision vectors.
* **size**: - number of vectors.



**Parameters**:

* std::complex< float > * **dataComplex**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1aab25dedf00a41d6ddca019bf44cec2f5"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(std::complex< float > *dataComplex, std::size_t size, Dimension dimension)
```

Provide a constructor for 2D input complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **data**: - pointer to an array of complex single-precision vectors.
* **size**: - number of vectors.
* **dimension**: dimension of complex vector data.



**Parameters**:

* std::complex< float > * **dataComplex**
* std::size_t **size**
* [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c) **dimension**

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1a26132273684decd1d2004ba31b8918c7"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(std::vector< float > &dataReal, std::vector< float > &dataImaginary)
```

Create an input complex vector data access object with compact storage for vector components and split storage for complex components.

**Parameters**:

* **dataReal**: - reference to the STL vector of single-precision data, that stores the real components of the complex vectors in compact storage format.
* **dataImaginary**: - reference to the STL vector of single-precision data, that stores the imaginary components of the complex vectors in compact storage format.



**Parameters**:

* std::vector< float > & **dataReal**
* std::vector< float > & **dataImaginary**

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1af5285ef76f27059fd89ccf1135f7b930"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(float *dataReal, float *dataImaginary, std::size_t size)
```

Create an input complex vector data access object with compact storage for vector components and split storage for complex components.

**Parameters**:

* **dataReal**: - pointer to an array of single-precision data, that stores the real components of the complex vectors in compact storage format.
* **dataImaginary**: - pointer to an array of single-precision data, that stores the imaginary components of the complex vectors in compact storage format.
* **size**: - number of vectors.



**Parameters**:

* float * **dataReal**
* float * **dataImaginary**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1a4529854724c43dac4f3a74b32f7aebdb"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(std::vector< std::complex< float >> &dataComplex1, std::vector< std::complex< float >> &dataComplex2, std::vector< std::complex< float >> &dataComplex3)
```

Create an input complex vector data access object with split storage for vector components and compact storage for complex components.

**Parameters**:

* **dataComplex1**: - reference to the STL vector of complex single-precision data that stores the first components of the vectors of complex numbers.
* **dataComplex2**: - reference to the STL vector of complex single-precision data that stores the second components of the vectors of complex numbers.
* **dataComplex3**: - reference to the STL vector of complex single-precision data that stores the third components of the vectors of complex numbers.



**Parameters**:

* std::vector< std::complex< float >> & **dataComplex1**
* std::vector< std::complex< float >> & **dataComplex2**
* std::vector< std::complex< float >> & **dataComplex3**

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1a4d340ca3ff83ad4f1b76fd61544b0c15"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(std::complex< float > *dataComplex1, std::complex< float > *dataComplex2, std::complex< float > *dataComplex3, std::size_t size)
```

Create an input complex vector data access object with split storage for vector components and compact storage for complex components.

**Parameters**:

* **dataComplex1**: - pointer to an array of single-precision complex data that stores the first components of the vectors of complex numbers.
* **dataComplex2**: - pointer to an array of single-precision complex data that stores the second components of the vectors of complex numbers.
* **dataComplex3**: - pointer to an array of single-precision complex data that stores the third components of the vectors of complex numbers.
* **size**: - number of vectors.



**Parameters**:

* std::complex< float > * **dataComplex1**
* std::complex< float > * **dataComplex2**
* std::complex< float > * **dataComplex3**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1a51da2b96b4c2c4d04a6c10ba7a6ed44b"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(float *dataComplex1, float *dataComplex2, float *dataComplex3, std::size_t size)
```

Create an input complex vector data access object with split storage for vector components and compact storage for complex components.

**Parameters**:

* **dataComplex1**: - pointer to an array of single-precision data that stores the first components of the vectors of complex numbers.
* **dataComplex2**: - pointer to an array of single-precision data that stores the second components of the vectors of complex numbers.
* **dataComplex3**: - pointer to an array of single-precision data that stores the third components of the vectors of complex numbers.
* **size**: - number of vectors.



**Parameters**:

* float * **dataComplex1**
* float * **dataComplex2**
* float * **dataComplex3**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1abe0fb3a10b587f904cfebc9fdbaab7af"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(std::vector< float > &dataReal1, std::vector< float > &dataImaginary1, std::vector< float > &dataReal2, std::vector< float > &dataImaginary2, std::vector< float > &dataReal3, std::vector< float > &dataImaginary3)
```

Create an input complex vector data access object with split storage for vector components and split storage for complex components.

**Parameters**:

* **dataReal1**: - reference to the STL vector of single-precision data that stores the first real components of the vectors of complex numbers.
* **dataImaginary1**: - reference to the STL vector of single-precision data that stores the first imaginary components of the vectors of complex numbers.
* **dataReal2**: - reference to the STL vector of single-precision data that stores the second real components of the vectors of complex numbers.
* **dataImaginary2**: - reference to the STL vector of single-precision data that stores the second imaginary components of the vectors of complex numbers.
* **dataReal3**: - reference to the STL vector of single-precision data that stores the third real components of the vectors of complex numbers.
* **dataImaginary3**: - reference to the STL vector of single-precision data that stores the third imaginary components of the vectors of complex numbers.



**Parameters**:

* std::vector< float > & **dataReal1**
* std::vector< float > & **dataImaginary1**
* std::vector< float > & **dataReal2**
* std::vector< float > & **dataImaginary2**
* std::vector< float > & **dataReal3**
* std::vector< float > & **dataImaginary3**

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1aecdc5bef4d837e9bd27099bd6e4ca061"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(float *dataReal1, float *dataImaginary1, float *dataReal2, float *dataImaginary2, float *dataReal3, float *dataImaginary3, std::size_t size)
```

Create an input complex vector data access object with split storage for vector components and split storage for complex components.

**Parameters**:

* **dataReal1**: - pointer to an array of single-precision data that stores the first real components of the vectors of complex numbers.
* **dataImaginary1**: - pointer to an array of single-precision data that stores the first imaginary components of the vectors of complex numbers.
* **dataReal2**: - pointer to an array of single-precision data that stores the second real components of the vectors of complex numbers.
* **dataImaginary2**: - pointer to an array of single-precision data that stores the second imaginary components of the vectors of complex numbers.
* **dataReal3**: - pointer to an array of single-precision data that stores the third real components of the vectors of complex numbers.
* **dataImaginary3**: - pointer to an array of single-precision data that stores the third imaginary components of the vectors of complex numbers.
* **size**: - number of vectors.



**Parameters**:

* float * **dataReal1**
* float * **dataImaginary1**
* float * **dataReal2**
* float * **dataImaginary2**
* float * **dataReal3**
* float * **dataImaginary3**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1a2e05d32a1a48e4ad2144728526b3016a"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData()=default
```

Provide a default constructor.





**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1a00dec4920b1774f27c3556f0a2336cb8"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(const InputComplexVectorData &)=default
```

Provide a copy-constructor.





**Parameters**:

* const [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData) &

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1a9766225ad8e836fa5a354bcc6f449d92"></a>
### Function InputComplexVectorData

![][public]

```cpp
sysc::InputComplexVectorData::InputComplexVectorData(InputComplexVectorData &&)=default
```

Provide a move-constructor.





**Parameters**:

* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData) &&

**Return type**: 

<a id="classsysc_1_1InputComplexVectorData_1ac1c37978bc9252b340862c4600d77b5e"></a>
### Function operator=

![][public]

```cpp
InputComplexVectorData& sysc::InputComplexVectorData::operator=(const InputComplexVectorData &)=default
```

Provide a copy-assign operator.





**Parameters**:

* const [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData) &

**Return type**: [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData) &

<a id="classsysc_1_1InputComplexVectorData_1a4dade0f1e2dd51bc4bae1abba988b53c"></a>
### Function operator=

![][public]

```cpp
InputComplexVectorData& sysc::InputComplexVectorData::operator=(InputComplexVectorData &&)=default
```

Provide a move-assign operator.





**Parameters**:

* [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData) &&

**Return type**: [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData) &

<a id="classsysc_1_1InputComplexVectorData_1a64d76b7df1fe0ce877cf9297cc584210"></a>
### Function size

![][public]
![][const]

```cpp
std::size_t sysc::InputComplexVectorData::size() const noexcept
```

Get the size of data.





**Return type**: std::size_t

<a id="classsysc_1_1InputComplexVectorData_1a3d23dad57825da22f06f1572f919b879"></a>
### Function empty

![][public]
![][const]

```cpp
bool sysc::InputComplexVectorData::empty() const noexcept
```

Check if array "data" is empty.





**Return type**: bool

<a id="classsysc_1_1InputComplexVectorData_1a05fbe8f5573c5eac873f63ffda747134"></a>
### Function getDataType

![][public]
![][const]

```cpp
sysc::PrimitiveType sysc::InputComplexVectorData::getDataType() const noexcept
```

Get the primitive type of data.

For internal use only (no back-compatibility guarantee).



**Return type**: [sysc::PrimitiveType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad3b1c73e4a63f4d292d65f3db875e844)

<a id="classsysc_1_1InputComplexVectorData_1ab32bd72da49357c8ed02e59aa2e63196"></a>
### Function isSplitVector

![][public]
![][const]

```cpp
bool sysc::InputComplexVectorData::isSplitVector() const noexcept
```

Query whether it's a split or compact vector layout.

For internal use only (no back-compatibility guarantee).



**Return type**: bool

<a id="classsysc_1_1InputComplexVectorData_1acb66a63b6228b76afd0e0c1e98167feb"></a>
### Function isSplitComplex

![][public]
![][const]

```cpp
bool sysc::InputComplexVectorData::isSplitComplex() const noexcept
```

Query whether it's a split or compact vector layout.

For internal use only (no back-compatibility guarantee).



**Return type**: bool

<a id="classsysc_1_1InputComplexVectorData_1ae26d2fa007face287e43123f207f04ba"></a>
### Function getData1

![][public]
![][const]

```cpp
void* sysc::InputComplexVectorData::getData1() const noexcept
```

Get pointer to data1.

For internal use only (no back-compatibility guarantee).



**Return type**: void *

<a id="classsysc_1_1InputComplexVectorData_1a73fc5f5dfa2688897d9ca516d003a062"></a>
### Function getData2

![][public]
![][const]

```cpp
void* sysc::InputComplexVectorData::getData2() const noexcept
```

Get pointer to data2.

For internal use only (no back-compatibility guarantee).



**Return type**: void *

<a id="classsysc_1_1InputComplexVectorData_1ab04fe2abf3d1d7f20b42554a9abe22f5"></a>
### Function getData3

![][public]
![][const]

```cpp
void* sysc::InputComplexVectorData::getData3() const noexcept
```

Get pointer to data3.

For internal use only (no back-compatibility guarantee).



**Return type**: void *

<a id="classsysc_1_1InputComplexVectorData_1a1382d51a7353f7872cc566df72cfeb23"></a>
### Function getData4

![][public]
![][const]

```cpp
void* sysc::InputComplexVectorData::getData4() const noexcept
```

Get pointer to data4.

For internal use only (no back-compatibility guarantee).



**Return type**: void *

<a id="classsysc_1_1InputComplexVectorData_1a4e3ab20a71b75947621dee1abc490e30"></a>
### Function getData5

![][public]
![][const]

```cpp
void* sysc::InputComplexVectorData::getData5() const noexcept
```

Get pointer to data5.

For internal use only (no back-compatibility guarantee).



**Return type**: void *

<a id="classsysc_1_1InputComplexVectorData_1a6f9fd6dc505471a6826f6638c28a893e"></a>
### Function getData6

![][public]
![][const]

```cpp
void* sysc::InputComplexVectorData::getData6() const noexcept
```

Get pointer to data6.

For internal use only (no back-compatibility guarantee).



**Return type**: void *

<a id="classsysc_1_1InputComplexVectorData_1a29dcda46e3ccf38788b6415ac16e8a1d"></a>
### Function getDimension

![][public]
![][const]

```cpp
Dimension sysc::InputComplexVectorData::getDimension() const noexcept
```

Get the Dimension object.

**Returns**:

Dimension



**Return type**: [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c)

**References**:

* [sysc::Double](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ggad3b1c73e4a63f4d292d65f3db875e844a29843d2c1bb5760f768dcc066dac1ac1)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)