# Class sysc::OutputComplexVectorData

![][C++]
![][public]

**Definition**: `OutputComplexVectorData.hpp` (line 29)

Provide a class for output complex vector data.

Output vector data provides read-only access to an array of complex vector data.





The size is the total number of complex vectors, not the total number of components, i.e. if all data is stored in one contiguous array, then size is 1/6 the size of that array.

## Members

* [empty](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a26050d359a4c03228a10104339e15742)
* [getData1](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a421c80ec3a9ea938dd639d45f24b1e62)
* [getData2](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a9244dd7290b72cef8552439264e20253)
* [getData3](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1abd98aac29626fcc0dfcf798d46f64d34)
* [getData4](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1abfff90d41fd9247c29ad8cad871cd15e)
* [getData5](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1acdf5e477c17c8799d7f3f3fdf65767b5)
* [getData6](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1ac7bc9f9bbae61fb00583716409764bc1)
* [getDataType](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1aaaacbd55863e4f5665a003d03582c029)
* [getDimension](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a65ea0556c7c60e5b5ce4e5c64cd89d23)
* [isSplitComplex](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1ad692cd914d58b28d4388222e9ad0da9a)
* [isSplitVector](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1ad633327c4ab64b8025e31e07dea73af8)
* [m\_data1](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a5197f7b2dd45d0917a73901fe594d262)
* [m\_data2](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a7f8917ecac4fbc06959bc0ce4dd89ea5)
* [m\_data3](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1ab17bd74994135d6b57fdf0ed268d0d67)
* [m\_data4](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a7df76d99f49b14f02b0418b099f66f2b)
* [m\_data5](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1ad3c5469b037367c8c73da05bdef9c510)
* [m\_data6](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a778685cfca013c81caa784f6716c8e3c)
* [m\_dataType](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1abfdc0e6e8e50178cb5372c1157ee1571)
* [m\_dimension](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a85391bf240adf97fe5fb2b109228ab81)
* [m\_isSplitComplex](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a49d681b5475b39ea836f18443f706e7d)
* [m\_isSplitVector](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1adc53b4ce05758a6a355a281153d6d642)
* [m\_size](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a09eaf0067383c96462accc37b8fd3d08)
* [operator=](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a3064622f31b27c8068c8c71a1e04d15f)
* [operator=](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a2b7932f3b641969564c42715b82b32e4)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1ad571aacd1829dc0d7907960c87aa610e)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1ac565c39f47dcf7509ebeadd4adf3f290)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a7998fc71c46f09f61f0d8efbcd44486f)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a9485fc481ada15549e825956d53865c3)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1ad9fa59ec12232ce098e58faeacc55ecf)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a7bbcf904ad9fc657e41cbd66457019dd)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1ae6c01e4b87abf5dda52e32894569ca48)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a7d0f3557699243d5001163745d16cad7)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a8b9de7ad81d4905a1373e569015a14ad)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a4105668c41bb56bb6198c0dd479ee072)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1aee3911cb975e9f34643a5cd76e1ac785)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a8041ada30628cd58679dd9eb29e02660)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a66092a0639747d9b26457ff317facb42)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1ac60170cee7654bcdf15376a1b7ab1918)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a54713f360bc83c2e7ea8e247e2d06090)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a4703a08a37827c639a1a4684a827f3f4)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a7575135c7f334a64292ca39772c41ded)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a5bb7c3333ac4c86a3925cb3f60c581f9)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1ae4a04e6ba7184bc132020dd4680a26dd)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a5aca8b7bda0a6865e0b832d58ec900b0)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a7e117f497d95e9ddbef533e4a81f8add)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a9681789740136700571499646dffc6c9)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1aafe600f880ff17bfeb2f2d2e37e3e75f)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a2d3dc32af10b693b12260bd68e34b8ca)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a0aa3e464e5ab41398573ee9f15c3c6b3)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1aa9b73dce4d355a8df7c6ed45710ee373)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1ae64aa4dc844fbb984b1b4c8be90a3cfb)
* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a0f1b75e43766676f2a54046d71203528)
* [size](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

## Private attributes

<a id="classsysc_1_1OutputComplexVectorData_1abfdc0e6e8e50178cb5372c1157ee1571"></a>
### Variable m\_dataType

![][private]

**Definition**: `OutputComplexVectorData.hpp` (line 615)

```cpp
sysc::PrimitiveType sysc::OutputComplexVectorData::m_dataType {sysc::Double}
```







**Type**: [sysc::PrimitiveType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad3b1c73e4a63f4d292d65f3db875e844)

<a id="classsysc_1_1OutputComplexVectorData_1adc53b4ce05758a6a355a281153d6d642"></a>
### Variable m\_isSplitVector

![][private]

**Definition**: `OutputComplexVectorData.hpp` (line 616)

```cpp
bool sysc::OutputComplexVectorData::m_isSplitVector {false}
```







**Type**: bool

<a id="classsysc_1_1OutputComplexVectorData_1a49d681b5475b39ea836f18443f706e7d"></a>
### Variable m\_isSplitComplex

![][private]

**Definition**: `OutputComplexVectorData.hpp` (line 617)

```cpp
bool sysc::OutputComplexVectorData::m_isSplitComplex {false}
```







**Type**: bool

<a id="classsysc_1_1OutputComplexVectorData_1a5197f7b2dd45d0917a73901fe594d262"></a>
### Variable m\_data1

![][private]

**Definition**: `OutputComplexVectorData.hpp` (line 619)

```cpp
const void* sysc::OutputComplexVectorData::m_data1 {nullptr}
```







**Type**: const void *

<a id="classsysc_1_1OutputComplexVectorData_1a7f8917ecac4fbc06959bc0ce4dd89ea5"></a>
### Variable m\_data2

![][private]

**Definition**: `OutputComplexVectorData.hpp` (line 620)

```cpp
const void* sysc::OutputComplexVectorData::m_data2 {nullptr}
```







**Type**: const void *

<a id="classsysc_1_1OutputComplexVectorData_1ab17bd74994135d6b57fdf0ed268d0d67"></a>
### Variable m\_data3

![][private]

**Definition**: `OutputComplexVectorData.hpp` (line 621)

```cpp
const void* sysc::OutputComplexVectorData::m_data3 {nullptr}
```







**Type**: const void *

<a id="classsysc_1_1OutputComplexVectorData_1a7df76d99f49b14f02b0418b099f66f2b"></a>
### Variable m\_data4

![][private]

**Definition**: `OutputComplexVectorData.hpp` (line 622)

```cpp
const void* sysc::OutputComplexVectorData::m_data4 {nullptr}
```







**Type**: const void *

<a id="classsysc_1_1OutputComplexVectorData_1ad3c5469b037367c8c73da05bdef9c510"></a>
### Variable m\_data5

![][private]

**Definition**: `OutputComplexVectorData.hpp` (line 623)

```cpp
const void* sysc::OutputComplexVectorData::m_data5 {nullptr}
```







**Type**: const void *

<a id="classsysc_1_1OutputComplexVectorData_1a778685cfca013c81caa784f6716c8e3c"></a>
### Variable m\_data6

![][private]

**Definition**: `OutputComplexVectorData.hpp` (line 624)

```cpp
const void* sysc::OutputComplexVectorData::m_data6 {nullptr}
```







**Type**: const void *

<a id="classsysc_1_1OutputComplexVectorData_1a09eaf0067383c96462accc37b8fd3d08"></a>
### Variable m\_size

![][private]

**Definition**: `OutputComplexVectorData.hpp` (line 626)

```cpp
std::size_t sysc::OutputComplexVectorData::m_size {0}
```







**Type**: std::size_t

<a id="classsysc_1_1OutputComplexVectorData_1a85391bf240adf97fe5fb2b109228ab81"></a>
### Variable m\_dimension

![][private]

**Definition**: `OutputComplexVectorData.hpp` (line 627)

```cpp
Dimension sysc::OutputComplexVectorData::m_dimension {Dimension::D3}
```







**Type**: [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c)

## Public functions

<a id="classsysc_1_1OutputComplexVectorData_1ad571aacd1829dc0d7907960c87aa610e"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const std::vector< std::complex< double >> &dataComplex)
```

Provide a constructor for output complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **dataComplex**: - reference to the STL vector of complex double-precision data.



**Parameters**:

* const std::vector< std::complex< double >> & **dataComplex**

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1ac565c39f47dcf7509ebeadd4adf3f290"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const std::vector< std::complex< double >> &dataComplex, Dimension dimension)
```

Provide a constructor for 2D output complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **dataComplex**: - reference to the STL vector of complex double-precision data.
* **dimension**: - dimension of complex vector data.



**Parameters**:

* const std::vector< std::complex< double >> & **dataComplex**
* [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c) **dimension**

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1a7998fc71c46f09f61f0d8efbcd44486f"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const double *dataComplex, std::size_t size)
```

Provide a constructor for output complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **dataComplex**: - pointer to an array of complex double-precision vectors.
* **size**: - number of vectors.



**Parameters**:

* const double * **dataComplex**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const double *dataComplex, std::size_t size, Dimension dimension)
```

Provide a constructor for 2D output complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **dataComplex**: - pointer to an array of complex double-precision vectors.
* **size**: - number of vectors.
* **dimension**: - dimension of complex vector data.



**Parameters**:

* const double * **dataComplex**
* std::size_t **size**
* [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c) **dimension**

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1a9485fc481ada15549e825956d53865c3"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const std::complex< double > *dataComplex, std::size_t size)
```

Provide a constructor for output complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **dataComplex**: - pointer to an array of complex double-precision vectors.
* **size**: - number of vectors.



**Parameters**:

* const std::complex< double > * **dataComplex**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1ad9fa59ec12232ce098e58faeacc55ecf"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const std::complex< double > *dataComplex, std::size_t size, Dimension dimension)
```

Provide a constructor for 2D output complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **dataComplex**: - pointer to an array of complex double-precision vectors.
* **size**: - number of vectors.
* **dimension**: - dimension of complex vector data.



**Parameters**:

* const std::complex< double > * **dataComplex**
* std::size_t **size**
* [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c) **dimension**

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1a7bbcf904ad9fc657e41cbd66457019dd"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const std::vector< double > &dataReal, const std::vector< double > &dataImaginary)
```

Create an output complex vector data access object with compact storage for vector components and split storage for complex components.

**Parameters**:

* **dataReal**: - reference to the STL vector of double-precision data, that stores the real components of the complex vectors in compact storage format.
* **dataImaginary**: - reference to the STL vector of double-precision data, that stores the imaginary components of the complex vectors in compact storage format.



**Parameters**:

* const std::vector< double > & **dataReal**
* const std::vector< double > & **dataImaginary**

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1ae6c01e4b87abf5dda52e32894569ca48"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const double *dataReal, const double *dataImaginary, std::size_t size)
```

Create an output complex vector data access object with compact storage for vector components and split storage for complex components.

**Parameters**:

* **dataReal**: - pointer to an array of double-precision data, that stores the real components of the complex vectors in compact storage format.
* **dataImaginary**: - pointer to an array of double-precision data, that stores the imaginary components of the complex vectors in compact storage format.
* **size**: - number of vectors.



**Parameters**:

* const double * **dataReal**
* const double * **dataImaginary**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1a7d0f3557699243d5001163745d16cad7"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const std::vector< std::complex< double >> &dataComplex1, const std::vector< std::complex< double >> &dataComplex2, const std::vector< std::complex< double >> &dataComplex3)
```

Create an output complex vector data access object with split storage for vector components and compact storage for complex components.

**Parameters**:

* **dataComplex1**: - reference to the STL vector of complex double-precision data that stores the first components of the vectors of complex numbers.
* **dataComplex2**: - reference to the STL vector of complex double-precision data that stores the second components of the vectors of complex numbers.
* **dataComplex3**: - reference to the STL vector of complex double-precision data that stores the third components of the vectors of complex numbers.



**Parameters**:

* const std::vector< std::complex< double >> & **dataComplex1**
* const std::vector< std::complex< double >> & **dataComplex2**
* const std::vector< std::complex< double >> & **dataComplex3**

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1a8b9de7ad81d4905a1373e569015a14ad"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const std::complex< double > *dataComplex1, const std::complex< double > *dataComplex2, const std::complex< double > *dataComplex3, std::size_t size)
```

Create an output complex vector data access object with split storage for vector components and compact storage for complex components.

**Parameters**:

* **dataComplex1**: - pointer to an array of double-precision complex data that stores the first components of the vectors of complex numbers.
* **dataComplex2**: - pointer to an array of double-precision complex data that stores the second components of the vectors of complex numbers.
* **dataComplex3**: - pointer to an array of double-precision complex data that stores the third components of the vectors of complex numbers.
* **size**: - number of vectors.



**Parameters**:

* const std::complex< double > * **dataComplex1**
* const std::complex< double > * **dataComplex2**
* const std::complex< double > * **dataComplex3**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1a4105668c41bb56bb6198c0dd479ee072"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const double *dataComplex1, const double *dataComplex2, const double *dataComplex3, std::size_t size)
```

Create an output complex vector data access object with split storage for vector components and compact storage for complex components.

**Parameters**:

* **dataComplex1**: - pointer to an array of double-precision data that stores the first components of the vectors of complex numbers.
* **dataComplex2**: - pointer to an array of double-precision data that stores the second components of the vectors of complex numbers.
* **dataComplex3**: - pointer to an array of double-precision data that stores the third components of the vectors of complex numbers.
* **size**: - number of vectors.



**Parameters**:

* const double * **dataComplex1**
* const double * **dataComplex2**
* const double * **dataComplex3**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1aee3911cb975e9f34643a5cd76e1ac785"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const std::vector< double > &dataReal1, const std::vector< double > &dataImaginary1, const std::vector< double > &dataReal2, const std::vector< double > &dataImaginary2, const std::vector< double > &dataReal3, const std::vector< double > &dataImaginary3)
```

Create an output complex vector data access object with split storage for vector components and split storage for complex components.

**Parameters**:

* **dataReal1**: - reference to the STL vector of double-precision data that stores the first real components of the vectors of complex numbers.
* **dataImaginary1**: - reference to the STL vector of double-precision data that stores the first imaginary components of the vectors of complex numbers.
* **dataReal2**: - reference to the STL vector of double-precision data that stores the second real components of the vectors of complex numbers.
* **dataImaginary2**: - reference to the STL vector of double-precision data that stores the second imaginary components of the vectors of complex numbers.
* **dataReal3**: - reference to the STL vector of double-precision data that stores the third real components of the vectors of complex numbers.
* **dataImaginary3**: - reference to the STL vector of double-precision data that stores the third imaginary components of the vectors of complex numbers.



**Parameters**:

* const std::vector< double > & **dataReal1**
* const std::vector< double > & **dataImaginary1**
* const std::vector< double > & **dataReal2**
* const std::vector< double > & **dataImaginary2**
* const std::vector< double > & **dataReal3**
* const std::vector< double > & **dataImaginary3**

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1a8041ada30628cd58679dd9eb29e02660"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const double *dataReal1, const double *dataImaginary1, const double *dataReal2, const double *dataImaginary2, const double *dataReal3, const double *dataImaginary3, std::size_t size)
```

Create an output complex vector data access object with split storage for vector components and split storage for complex components.

**Parameters**:

* **dataReal1**: - pointer to an array of double-precision data that stores the first real components of the vectors of complex numbers.
* **dataImaginary1**: - pointer to an array of double-precision data that stores the first imaginary components of the vectors of complex numbers.
* **dataReal2**: - pointer to an array of double-precision data that stores the second real components of the vectors of complex numbers.
* **dataImaginary2**: - pointer to an array of double-precision data that stores the second imaginary components of the vectors of complex numbers.
* **dataReal3**: - pointer to an array of double-precision data that stores the third real components of the vectors of complex numbers.
* **dataImaginary3**: - pointer to an array of double-precision data that stores the third imaginary components of the vectors of complex numbers.
* **size**: - number of vectors.



**Parameters**:

* const double * **dataReal1**
* const double * **dataImaginary1**
* const double * **dataReal2**
* const double * **dataImaginary2**
* const double * **dataReal3**
* const double * **dataImaginary3**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1a66092a0639747d9b26457ff317facb42"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const std::vector< std::complex< float >> &dataComplex)
```

Provide a constructor for output complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **dataComplex**: - reference to the STL vector of complex double-precision data.



**Parameters**:

* const std::vector< std::complex< float >> & **dataComplex**

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1ac60170cee7654bcdf15376a1b7ab1918"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const std::vector< std::complex< float >> &dataComplex, Dimension dimension)
```

Provide a constructor for 2D output complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **dataComplex**: - reference to the STL vector of complex double-precision data.
* **dimension**: dimension of complex vector data.



**Parameters**:

* const std::vector< std::complex< float >> & **dataComplex**
* [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c) **dimension**

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1a54713f360bc83c2e7ea8e247e2d06090"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const float *dataComplex, std::size_t size)
```

Provide a constructor for output complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **dataComplex**: - pointer to an array of complex single-precision vectors.
* **size**: - number of vectors.



**Parameters**:

* const float * **dataComplex**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1a4703a08a37827c639a1a4684a827f3f4"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const float *dataComplex, std::size_t size, Dimension dimension)
```

Provide a constructor for 2D output complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **dataComplex**: - pointer to an array of complex single-precision vectors.
* **size**: - number of vectors.
* **dimension**: dimension of complex vector data.



**Parameters**:

* const float * **dataComplex**
* std::size_t **size**
* [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c) **dimension**

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1a7575135c7f334a64292ca39772c41ded"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const std::complex< float > *dataComplex, std::size_t size)
```

Provide a constructor for output complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **dataComplex**: - pointer to an array of complex single-precision vectors.
* **size**: - number of vectors.



**Parameters**:

* const std::complex< float > * **dataComplex**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1a5bb7c3333ac4c86a3925cb3f60c581f9"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const std::complex< float > *dataComplex, std::size_t size, Dimension dimension)
```

Provide a constructor for 2D output complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **dataComplex**: - pointer to an array of complex single-precision vectors.
* **size**: - number of vectors.
* **dimension**: dimension of complex vector data.



**Parameters**:

* const std::complex< float > * **dataComplex**
* std::size_t **size**
* [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c) **dimension**

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1ae4a04e6ba7184bc132020dd4680a26dd"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const std::vector< float > &dataReal, const std::vector< float > &dataImaginary)
```

Create an output complex vector data access object with compact storage for vector components and split storage for complex components.

**Parameters**:

* **dataReal**: - reference to the STL vector of single-precision data, that stores the real components of the complex vectors in compact storage format.
* **dataImaginary**: - reference to the STL vector of single-precision data, that stores the imaginary components of the complex vectors in compact storage format.



**Parameters**:

* const std::vector< float > & **dataReal**
* const std::vector< float > & **dataImaginary**

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1a5aca8b7bda0a6865e0b832d58ec900b0"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const float *dataReal, const float *dataImaginary, std::size_t size)
```

Create an output complex vector data access object with compact storage for vector components and split storage for complex components.

**Parameters**:

* **dataReal**: - pointer to an array of single-precision data, that stores the real components of the complex vectors in compact storage format.
* **dataImaginary**: - pointer to an array of single-precision data, that stores the imaginary components of the complex vectors in compact storage format.
* **size**: - number of vectors.



**Parameters**:

* const float * **dataReal**
* const float * **dataImaginary**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1a7e117f497d95e9ddbef533e4a81f8add"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const std::vector< std::complex< float >> &dataComplex1, const std::vector< std::complex< float >> &dataComplex2, const std::vector< std::complex< float >> &dataComplex3)
```

Create an output complex vector data access object with split storage for vector components and compact storage for complex components.

**Parameters**:

* **dataComplex1**: - reference to the STL vector of complex single-precision data that stores the first components of the vectors of complex numbers.
* **dataComplex2**: - reference to the STL vector of complex single-precision data that stores the second components of the vectors of complex numbers.
* **dataComplex3**: - reference to the STL vector of complex single-precision data that stores the third components of the vectors of complex numbers.



**Parameters**:

* const std::vector< std::complex< float >> & **dataComplex1**
* const std::vector< std::complex< float >> & **dataComplex2**
* const std::vector< std::complex< float >> & **dataComplex3**

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1a9681789740136700571499646dffc6c9"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const std::complex< float > *dataComplex1, const std::complex< float > *dataComplex2, const std::complex< float > *dataComplex3, std::size_t size)
```

Create an output complex vector data access object with split storage for vector components and compact storage for complex components.

**Parameters**:

* **dataComplex1**: - pointer to an array of single-precision complex data that stores the first components of the vectors of complex numbers.
* **dataComplex2**: - pointer to an array of single-precision complex data that stores the second components of the vectors of complex numbers.
* **dataComplex3**: - pointer to an array of single-precision complex data that stores the third components of the vectors of complex numbers.
* **size**: - number of vectors.



**Parameters**:

* const std::complex< float > * **dataComplex1**
* const std::complex< float > * **dataComplex2**
* const std::complex< float > * **dataComplex3**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1aafe600f880ff17bfeb2f2d2e37e3e75f"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const float *dataComplex1, const float *dataComplex2, const float *dataComplex3, std::size_t size)
```

Create an output complex vector data access object with split storage for vector components and compact storage for complex components.

**Parameters**:

* **dataComplex1**: - pointer to an array of single-precision data that stores the first components of the vectors of complex numbers.
* **dataComplex2**: - pointer to an array of single-precision data that stores the second components of the vectors of complex numbers.
* **dataComplex3**: - pointer to an array of single-precision data that stores the third components of the vectors of complex numbers.
* **size**: - number of vectors.



**Parameters**:

* const float * **dataComplex1**
* const float * **dataComplex2**
* const float * **dataComplex3**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1a2d3dc32af10b693b12260bd68e34b8ca"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const std::vector< float > &dataReal1, const std::vector< float > &dataImaginary1, const std::vector< float > &dataReal2, const std::vector< float > &dataImaginary2, const std::vector< float > &dataReal3, const std::vector< float > &dataImaginary3)
```

Create an output complex vector data access object with split storage for vector components and split storage for complex components.

**Parameters**:

* **dataReal1**: - reference to the STL vector of single-precision data that stores the first real components of the vectors of complex numbers.
* **dataImaginary1**: - reference to the STL vector of single-precision data that stores the first imaginary components of the vectors of complex numbers.
* **dataReal2**: - reference to the STL vector of single-precision data that stores the second real components of the vectors of complex numbers.
* **dataImaginary2**: - reference to the STL vector of single-precision data that stores the second imaginary components of the vectors of complex numbers.
* **dataReal3**: - reference to the STL vector of single-precision data that stores the third real components of the vectors of complex numbers.
* **dataImaginary3**: - reference to the STL vector of single-precision data that stores the third imaginary components of the vectors of complex numbers.



**Parameters**:

* const std::vector< float > & **dataReal1**
* const std::vector< float > & **dataImaginary1**
* const std::vector< float > & **dataReal2**
* const std::vector< float > & **dataImaginary2**
* const std::vector< float > & **dataReal3**
* const std::vector< float > & **dataImaginary3**

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1a0aa3e464e5ab41398573ee9f15c3c6b3"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const float *dataReal1, const float *dataImaginary1, const float *dataReal2, const float *dataImaginary2, const float *dataReal3, const float *dataImaginary3, std::size_t size)
```

Create an output complex vector data access object with split storage for vector components and split storage for complex components.

**Parameters**:

* **dataReal1**: - pointer to an array of single-precision data that stores the first real components of the vectors of complex numbers.
* **dataImaginary1**: - pointer to an array of single-precision data that stores the first imaginary components of the vectors of complex numbers.
* **dataReal2**: - pointer to an array of single-precision data that stores the second real components of the vectors of complex numbers.
* **dataImaginary2**: - pointer to an array of single-precision data that stores the second imaginary components of the vectors of complex numbers.
* **dataReal3**: - pointer to an array of single-precision data that stores the third real components of the vectors of complex numbers.
* **dataImaginary3**: - pointer to an array of single-precision data that stores the third imaginary components of the vectors of complex numbers.
* **size**: - number of vectors.



**Parameters**:

* const float * **dataReal1**
* const float * **dataImaginary1**
* const float * **dataReal2**
* const float * **dataImaginary2**
* const float * **dataReal3**
* const float * **dataImaginary3**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1aa9b73dce4d355a8df7c6ed45710ee373"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData()=default
```

Provide a default constructor.





**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1ae64aa4dc844fbb984b1b4c8be90a3cfb"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const OutputComplexVectorData &)=default
```

Provide a copy-constructor.





**Parameters**:

* const [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData) &

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1a0f1b75e43766676f2a54046d71203528"></a>
### Function OutputComplexVectorData

![][public]

```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(OutputComplexVectorData &&)=default
```

Provide a move-constructor.





**Parameters**:

* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData) &&

**Return type**: 

<a id="classsysc_1_1OutputComplexVectorData_1a3064622f31b27c8068c8c71a1e04d15f"></a>
### Function operator=

![][public]

```cpp
OutputComplexVectorData& sysc::OutputComplexVectorData::operator=(const OutputComplexVectorData &)=default
```

Provide a copy-assign operator.





**Parameters**:

* const [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData) &

**Return type**: [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData) &

<a id="classsysc_1_1OutputComplexVectorData_1a2b7932f3b641969564c42715b82b32e4"></a>
### Function operator=

![][public]

```cpp
OutputComplexVectorData& sysc::OutputComplexVectorData::operator=(OutputComplexVectorData &&)=default
```

Provide a move-assign operator.





**Parameters**:

* [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData) &&

**Return type**: [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData) &

<a id="classsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110"></a>
### Function size

![][public]
![][const]

```cpp
std::size_t sysc::OutputComplexVectorData::size() const noexcept
```

Get the size of data.





**Return type**: std::size_t

<a id="classsysc_1_1OutputComplexVectorData_1a26050d359a4c03228a10104339e15742"></a>
### Function empty

![][public]
![][const]

```cpp
bool sysc::OutputComplexVectorData::empty() const noexcept
```

Check if array "data" is empty.





**Return type**: bool

<a id="classsysc_1_1OutputComplexVectorData_1aaaacbd55863e4f5665a003d03582c029"></a>
### Function getDataType

![][public]
![][const]

```cpp
sysc::PrimitiveType sysc::OutputComplexVectorData::getDataType() const noexcept
```

Get the primitive type of data.

For internal use only (no back-compatibility guarantee).



**Return type**: [sysc::PrimitiveType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad3b1c73e4a63f4d292d65f3db875e844)

<a id="classsysc_1_1OutputComplexVectorData_1ad633327c4ab64b8025e31e07dea73af8"></a>
### Function isSplitVector

![][public]
![][const]

```cpp
bool sysc::OutputComplexVectorData::isSplitVector() const noexcept
```

Query whether it's a split or compact vector layout.

For internal use only (no back-compatibility guarantee).



**Return type**: bool

<a id="classsysc_1_1OutputComplexVectorData_1ad692cd914d58b28d4388222e9ad0da9a"></a>
### Function isSplitComplex

![][public]
![][const]

```cpp
bool sysc::OutputComplexVectorData::isSplitComplex() const noexcept
```

Query whether it's a split or compact vector layout.

For internal use only (no back-compatibility guarantee).



**Return type**: bool

<a id="classsysc_1_1OutputComplexVectorData_1a421c80ec3a9ea938dd639d45f24b1e62"></a>
### Function getData1

![][public]
![][const]

```cpp
const void* sysc::OutputComplexVectorData::getData1() const noexcept
```

Get pointer to data1.

For internal use only (no back-compatibility guarantee).



**Return type**: const void *

<a id="classsysc_1_1OutputComplexVectorData_1a9244dd7290b72cef8552439264e20253"></a>
### Function getData2

![][public]
![][const]

```cpp
const void* sysc::OutputComplexVectorData::getData2() const noexcept
```

Get pointer to data2.

For internal use only (no back-compatibility guarantee).



**Return type**: const void *

<a id="classsysc_1_1OutputComplexVectorData_1abd98aac29626fcc0dfcf798d46f64d34"></a>
### Function getData3

![][public]
![][const]

```cpp
const void* sysc::OutputComplexVectorData::getData3() const noexcept
```

Get pointer to data3.

For internal use only (no back-compatibility guarantee).



**Return type**: const void *

<a id="classsysc_1_1OutputComplexVectorData_1abfff90d41fd9247c29ad8cad871cd15e"></a>
### Function getData4

![][public]
![][const]

```cpp
const void* sysc::OutputComplexVectorData::getData4() const noexcept
```

Get pointer to data4.

For internal use only (no back-compatibility guarantee).



**Return type**: const void *

<a id="classsysc_1_1OutputComplexVectorData_1acdf5e477c17c8799d7f3f3fdf65767b5"></a>
### Function getData5

![][public]
![][const]

```cpp
const void* sysc::OutputComplexVectorData::getData5() const noexcept
```

Get pointer to data5.

For internal use only (no back-compatibility guarantee).



**Return type**: const void *

<a id="classsysc_1_1OutputComplexVectorData_1ac7bc9f9bbae61fb00583716409764bc1"></a>
### Function getData6

![][public]
![][const]

```cpp
const void* sysc::OutputComplexVectorData::getData6() const noexcept
```

Get pointer to data6.

For internal use only (no back-compatibility guarantee).



**Return type**: const void *

<a id="classsysc_1_1OutputComplexVectorData_1a65ea0556c7c60e5b5ce4e5c64cd89d23"></a>
### Function getDimension

![][public]
![][const]

```cpp
Dimension sysc::OutputComplexVectorData::getDimension() const noexcept
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