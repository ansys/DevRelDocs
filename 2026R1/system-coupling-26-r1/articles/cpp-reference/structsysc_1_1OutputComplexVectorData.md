# Structure sysc::OutputComplexVectorData

![][C++]
![][public]

**Definition**: `OutputComplexVectorData.hpp` (line 28)

Provide a class for output complex vector data.

Output vector data provides read-only access to an array of complex vector data.





The size is the total number of complex vectors, not the total number of components, i.e. if all data is stored in one contiguous array, then size is 1/6 the size of that array.

## Members

* [empty](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a26050d359a4c03228a10104339e15742)
* [getData1](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4777c2ca8f829598a165312d6259ba73)
* [getData2](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a0c29e874a82133b6f70582a459bc4a56)
* [getData3](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a16125f108574b2b4a2ddb1dafd310f0e)
* [getData4](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a49c779b373087aa02c79652261a7927f)
* [getData5](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1ab7b90e7de696923238c5af585b992a9a)
* [getData6](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1addcc63a9e9424a1aedf619e7e86f60d6)
* [getDataType](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1aaaacbd55863e4f5665a003d03582c029)
* [getDimension](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a65ea0556c7c60e5b5ce4e5c64cd89d23)
* [isSplitComplex](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1ad692cd914d58b28d4388222e9ad0da9a)
* [isSplitVector](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1ad633327c4ab64b8025e31e07dea73af8)
* [m\_data1](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a5197f7b2dd45d0917a73901fe594d262)
* [m\_data2](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a7f8917ecac4fbc06959bc0ce4dd89ea5)
* [m\_data3](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1ab17bd74994135d6b57fdf0ed268d0d67)
* [m\_data4](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a7df76d99f49b14f02b0418b099f66f2b)
* [m\_data5](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1ad3c5469b037367c8c73da05bdef9c510)
* [m\_data6](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a778685cfca013c81caa784f6716c8e3c)
* [m\_dataType](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1abfdc0e6e8e50178cb5372c1157ee1571)
* [m\_dimension](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a85391bf240adf97fe5fb2b109228ab81)
* [m\_isSplitComplex](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a49d681b5475b39ea836f18443f706e7d)
* [m\_isSplitVector](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1adc53b4ce05758a6a355a281153d6d642)
* [m\_size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a09eaf0067383c96462accc37b8fd3d08)
* [operator=](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1ab6199540d8793358d0c00e3664fb3009)
* [operator=](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4f9406d7ad5a28e45bf5ed28a737fe6a)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a7998fc71c46f09f61f0d8efbcd44486f)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1ae6c01e4b87abf5dda52e32894569ca48)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4105668c41bb56bb6198c0dd479ee072)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8041ada30628cd58679dd9eb29e02660)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4703a08a37827c639a1a4684a827f3f4)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a54713f360bc83c2e7ea8e247e2d06090)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a5aca8b7bda0a6865e0b832d58ec900b0)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1aafe600f880ff17bfeb2f2d2e37e3e75f)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a0aa3e464e5ab41398573ee9f15c3c6b3)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1ad9fa59ec12232ce098e58faeacc55ecf)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a9485fc481ada15549e825956d53865c3)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a45be87b68d93d27303ef07d8de2a5064)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1ae71d4071f8212f170bef0c1e5c5719c0)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a7bbcf904ad9fc657e41cbd66457019dd)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8b9de7ad81d4905a1373e569015a14ad)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a840410def5dd4ef7019a0a994023999c)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1aee3911cb975e9f34643a5cd76e1ac785)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a1063efc74898166858297e8b6f929c63)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8205f903b8670be6a42125c0bca6e936)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a5bb7c3333ac4c86a3925cb3f60c581f9)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a7575135c7f334a64292ca39772c41ded)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1ae4a04e6ba7184bc132020dd4680a26dd)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a3aedf28edd2d0725f79a9e36f6b81f82)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a9681789740136700571499646dffc6c9)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a2d3dc32af10b693b12260bd68e34b8ca)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1aa9b73dce4d355a8df7c6ed45710ee373)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1ae64aa4dc844fbb984b1b4c8be90a3cfb)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a0f1b75e43766676f2a54046d71203528)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a31967577be688239469d99f8693f2a30)
* [size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

## Private attributes

<a id="structsysc_1_1OutputComplexVectorData_1abfdc0e6e8e50178cb5372c1157ee1571"></a>
### Variable m\_dataType

![][private]

**Definition**: `OutputComplexVectorData.hpp` (line 765)


```cpp
sysc::PrimitiveType sysc::OutputComplexVectorData::m_dataType {[sysc::Double](group__SystemCouplingParticipantAPIs.md#group__SystemCouplingParticipantAPIs_1ggad3b1c73e4a63f4d292d65f3db875e844a29843d2c1bb5760f768dcc066dac1ac1)}
```








**Type**: [sysc::PrimitiveType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad3b1c73e4a63f4d292d65f3db875e844)

<a id="structsysc_1_1OutputComplexVectorData_1adc53b4ce05758a6a355a281153d6d642"></a>
### Variable m\_isSplitVector

![][private]

**Definition**: `OutputComplexVectorData.hpp` (line 766)


```cpp
bool sysc::OutputComplexVectorData::m_isSplitVector {false}
```








**Type**: bool

<a id="structsysc_1_1OutputComplexVectorData_1a49d681b5475b39ea836f18443f706e7d"></a>
### Variable m\_isSplitComplex

![][private]

**Definition**: `OutputComplexVectorData.hpp` (line 767)


```cpp
bool sysc::OutputComplexVectorData::m_isSplitComplex {false}
```








**Type**: bool

<a id="structsysc_1_1OutputComplexVectorData_1a5197f7b2dd45d0917a73901fe594d262"></a>
### Variable m\_data1

![][private]

**Definition**: `OutputComplexVectorData.hpp` (line 769)


```cpp
const void* sysc::OutputComplexVectorData::m_data1 {nullptr}
```








**Type**: const void *

<a id="structsysc_1_1OutputComplexVectorData_1a7f8917ecac4fbc06959bc0ce4dd89ea5"></a>
### Variable m\_data2

![][private]

**Definition**: `OutputComplexVectorData.hpp` (line 770)


```cpp
const void* sysc::OutputComplexVectorData::m_data2 {nullptr}
```








**Type**: const void *

<a id="structsysc_1_1OutputComplexVectorData_1ab17bd74994135d6b57fdf0ed268d0d67"></a>
### Variable m\_data3

![][private]

**Definition**: `OutputComplexVectorData.hpp` (line 771)


```cpp
const void* sysc::OutputComplexVectorData::m_data3 {nullptr}
```








**Type**: const void *

<a id="structsysc_1_1OutputComplexVectorData_1a7df76d99f49b14f02b0418b099f66f2b"></a>
### Variable m\_data4

![][private]

**Definition**: `OutputComplexVectorData.hpp` (line 772)


```cpp
const void* sysc::OutputComplexVectorData::m_data4 {nullptr}
```








**Type**: const void *

<a id="structsysc_1_1OutputComplexVectorData_1ad3c5469b037367c8c73da05bdef9c510"></a>
### Variable m\_data5

![][private]

**Definition**: `OutputComplexVectorData.hpp` (line 773)


```cpp
const void* sysc::OutputComplexVectorData::m_data5 {nullptr}
```








**Type**: const void *

<a id="structsysc_1_1OutputComplexVectorData_1a778685cfca013c81caa784f6716c8e3c"></a>
### Variable m\_data6

![][private]

**Definition**: `OutputComplexVectorData.hpp` (line 774)


```cpp
const void* sysc::OutputComplexVectorData::m_data6 {nullptr}
```








**Type**: const void *

<a id="structsysc_1_1OutputComplexVectorData_1a09eaf0067383c96462accc37b8fd3d08"></a>
### Variable m\_size

![][private]

**Definition**: `OutputComplexVectorData.hpp` (line 776)


```cpp
std::size_t sysc::OutputComplexVectorData::m_size {0}
```








**Type**: std::size_t

<a id="structsysc_1_1OutputComplexVectorData_1a85391bf240adf97fe5fb2b109228ab81"></a>
### Variable m\_dimension

![][private]

**Definition**: `OutputComplexVectorData.hpp` (line 777)


```cpp
Dimension sysc::OutputComplexVectorData::m_dimension {Dimension::D3}
```








**Type**: [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c)

## Public functions

<a id="structsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb"></a>
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

**References**:

* [size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

**Referenced by**:

* [operator=](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1ab6199540d8793358d0c00e3664fb3009)
* [operator=](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4f9406d7ad5a28e45bf5ed28a737fe6a)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a7998fc71c46f09f61f0d8efbcd44486f)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a54713f360bc83c2e7ea8e247e2d06090)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1ae64aa4dc844fbb984b1b4c8be90a3cfb)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a9485fc481ada15549e825956d53865c3)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1ad9fa59ec12232ce098e58faeacc55ecf)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8b9de7ad81d4905a1373e569015a14ad)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a7575135c7f334a64292ca39772c41ded)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a5bb7c3333ac4c86a3925cb3f60c581f9)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a9681789740136700571499646dffc6c9)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a7bbcf904ad9fc657e41cbd66457019dd)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1aee3911cb975e9f34643a5cd76e1ac785)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1ae4a04e6ba7184bc132020dd4680a26dd)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a2d3dc32af10b693b12260bd68e34b8ca)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1ae71d4071f8212f170bef0c1e5c5719c0)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a45be87b68d93d27303ef07d8de2a5064)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a840410def5dd4ef7019a0a994023999c)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8205f903b8670be6a42125c0bca6e936)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a1063efc74898166858297e8b6f929c63)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a3aedf28edd2d0725f79a9e36f6b81f82)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a0f1b75e43766676f2a54046d71203528)

<a id="structsysc_1_1OutputComplexVectorData_1a7998fc71c46f09f61f0d8efbcd44486f"></a>
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

**References**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb)
* [size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

<a id="structsysc_1_1OutputComplexVectorData_1ae6c01e4b87abf5dda52e32894569ca48"></a>
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

**References**:

* [size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

<a id="structsysc_1_1OutputComplexVectorData_1a4105668c41bb56bb6198c0dd479ee072"></a>
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

**References**:

* [size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

<a id="structsysc_1_1OutputComplexVectorData_1a8041ada30628cd58679dd9eb29e02660"></a>
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

**References**:

* [size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

<a id="structsysc_1_1OutputComplexVectorData_1a4703a08a37827c639a1a4684a827f3f4"></a>
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

**References**:

* [sysc::Float](group__SystemCouplingParticipantAPIs.md#group__SystemCouplingParticipantAPIs_1ggad3b1c73e4a63f4d292d65f3db875e844af25f11e4d5a18405d2880727956e3c06)
* [size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

<a id="structsysc_1_1OutputComplexVectorData_1a54713f360bc83c2e7ea8e247e2d06090"></a>
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

**References**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb)
* [size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

<a id="structsysc_1_1OutputComplexVectorData_1a5aca8b7bda0a6865e0b832d58ec900b0"></a>
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

**References**:

* [sysc::Float](group__SystemCouplingParticipantAPIs.md#group__SystemCouplingParticipantAPIs_1ggad3b1c73e4a63f4d292d65f3db875e844af25f11e4d5a18405d2880727956e3c06)
* [size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

<a id="structsysc_1_1OutputComplexVectorData_1aafe600f880ff17bfeb2f2d2e37e3e75f"></a>
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

**References**:

* [sysc::Float](group__SystemCouplingParticipantAPIs.md#group__SystemCouplingParticipantAPIs_1ggad3b1c73e4a63f4d292d65f3db875e844af25f11e4d5a18405d2880727956e3c06)
* [size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

<a id="structsysc_1_1OutputComplexVectorData_1a0aa3e464e5ab41398573ee9f15c3c6b3"></a>
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

**References**:

* [sysc::Float](group__SystemCouplingParticipantAPIs.md#group__SystemCouplingParticipantAPIs_1ggad3b1c73e4a63f4d292d65f3db875e844af25f11e4d5a18405d2880727956e3c06)
* [size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

<a id="structsysc_1_1OutputComplexVectorData_1ad9fa59ec12232ce098e58faeacc55ecf"></a>
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

**References**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb)
* [size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

<a id="structsysc_1_1OutputComplexVectorData_1a9485fc481ada15549e825956d53865c3"></a>
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

**References**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb)
* [size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

<a id="structsysc_1_1OutputComplexVectorData_1a45be87b68d93d27303ef07d8de2a5064"></a>
### Function OutputComplexVectorData

![][public]


```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const std::vector< std::complex< double > > &dataComplex, Dimension dimension)
```


Provide a constructor for 2D output complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **dataComplex**: - reference to the STL vector of complex double-precision data.
* **dimension**: - dimension of complex vector data.



**Parameters**:

* const std::vector< std::complex< double > > & **dataComplex**
* [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c) **dimension**

**Return type**: 

**References**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb)
* [size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

<a id="structsysc_1_1OutputComplexVectorData_1ae71d4071f8212f170bef0c1e5c5719c0"></a>
### Function OutputComplexVectorData

![][public]


```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const std::vector< std::complex< double > > &dataComplex)
```


Provide a constructor for output complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **dataComplex**: - reference to the STL vector of complex double-precision data.



**Parameters**:

* const std::vector< std::complex< double > > & **dataComplex**

**Return type**: 

**References**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb)

<a id="structsysc_1_1OutputComplexVectorData_1a7bbcf904ad9fc657e41cbd66457019dd"></a>
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

**References**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb)
* [size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

<a id="structsysc_1_1OutputComplexVectorData_1a8b9de7ad81d4905a1373e569015a14ad"></a>
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

**References**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb)
* [size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

<a id="structsysc_1_1OutputComplexVectorData_1a840410def5dd4ef7019a0a994023999c"></a>
### Function OutputComplexVectorData

![][public]


```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const std::vector< std::complex< double > > &dataComplex1, const std::vector< std::complex< double > > &dataComplex2, const std::vector< std::complex< double > > &dataComplex3)
```


Create an output complex vector data access object with split storage for vector components and compact storage for complex components.

**Parameters**:

* **dataComplex1**: - reference to the STL vector of complex double-precision data that stores the first components of the vectors of complex numbers.
* **dataComplex2**: - reference to the STL vector of complex double-precision data that stores the second components of the vectors of complex numbers.
* **dataComplex3**: - reference to the STL vector of complex double-precision data that stores the third components of the vectors of complex numbers.



**Parameters**:

* const std::vector< std::complex< double > > & **dataComplex1**
* const std::vector< std::complex< double > > & **dataComplex2**
* const std::vector< std::complex< double > > & **dataComplex3**

**Return type**: 

**References**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb)
* [size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

<a id="structsysc_1_1OutputComplexVectorData_1aee3911cb975e9f34643a5cd76e1ac785"></a>
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

**References**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb)
* [size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

<a id="structsysc_1_1OutputComplexVectorData_1a1063efc74898166858297e8b6f929c63"></a>
### Function OutputComplexVectorData

![][public]


```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const std::vector< std::complex< float > > &dataComplex, Dimension dimension)
```


Provide a constructor for 2D output complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **dataComplex**: - reference to the STL vector of complex double-precision data.
* **dimension**: dimension of complex vector data.



**Parameters**:

* const std::vector< std::complex< float > > & **dataComplex**
* [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c) **dimension**

**Return type**: 

**References**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb)
* [size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

<a id="structsysc_1_1OutputComplexVectorData_1a8205f903b8670be6a42125c0bca6e936"></a>
### Function OutputComplexVectorData

![][public]


```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const std::vector< std::complex< float > > &dataComplex)
```


Provide a constructor for output complex vector data with compact storage for both vector components and complex components.

**Parameters**:

* **dataComplex**: - reference to the STL vector of complex double-precision data.



**Parameters**:

* const std::vector< std::complex< float > > & **dataComplex**

**Return type**: 

**References**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb)

<a id="structsysc_1_1OutputComplexVectorData_1a5bb7c3333ac4c86a3925cb3f60c581f9"></a>
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

**References**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb)
* [size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

<a id="structsysc_1_1OutputComplexVectorData_1a7575135c7f334a64292ca39772c41ded"></a>
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

**References**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb)
* [size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

<a id="structsysc_1_1OutputComplexVectorData_1ae4a04e6ba7184bc132020dd4680a26dd"></a>
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

**References**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb)
* [size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

<a id="structsysc_1_1OutputComplexVectorData_1a3aedf28edd2d0725f79a9e36f6b81f82"></a>
### Function OutputComplexVectorData

![][public]


```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const std::vector< std::complex< float > > &dataComplex1, const std::vector< std::complex< float > > &dataComplex2, const std::vector< std::complex< float > > &dataComplex3)
```


Create an output complex vector data access object with split storage for vector components and compact storage for complex components.

**Parameters**:

* **dataComplex1**: - reference to the STL vector of complex single-precision data that stores the first components of the vectors of complex numbers.
* **dataComplex2**: - reference to the STL vector of complex single-precision data that stores the second components of the vectors of complex numbers.
* **dataComplex3**: - reference to the STL vector of complex single-precision data that stores the third components of the vectors of complex numbers.



**Parameters**:

* const std::vector< std::complex< float > > & **dataComplex1**
* const std::vector< std::complex< float > > & **dataComplex2**
* const std::vector< std::complex< float > > & **dataComplex3**

**Return type**: 

**References**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb)
* [size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

<a id="structsysc_1_1OutputComplexVectorData_1a9681789740136700571499646dffc6c9"></a>
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

**References**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb)
* [size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

<a id="structsysc_1_1OutputComplexVectorData_1a2d3dc32af10b693b12260bd68e34b8ca"></a>
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

**References**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb)
* [size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

<a id="structsysc_1_1OutputComplexVectorData_1aa9b73dce4d355a8df7c6ed45710ee373"></a>
### Function OutputComplexVectorData

![][public]


```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData()=default
```


Provide a default constructor.





**Return type**: 

<a id="structsysc_1_1OutputComplexVectorData_1ae64aa4dc844fbb984b1b4c8be90a3cfb"></a>
### Function OutputComplexVectorData

![][public]


```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(const OutputComplexVectorData &)=default
```


Provide a copy-constructor.





**Parameters**:

* const [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData) &

**Return type**: 

**References**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb)

<a id="structsysc_1_1OutputComplexVectorData_1a0f1b75e43766676f2a54046d71203528"></a>
### Function OutputComplexVectorData

![][public]


```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(OutputComplexVectorData &&)=default
```


Provide a move-constructor.





**Parameters**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData) &&

**Return type**: 

**References**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb)

<a id="structsysc_1_1OutputComplexVectorData_1ab6199540d8793358d0c00e3664fb3009"></a>
### Function operator=

![][public]


```cpp
OutputComplexVectorData & sysc::OutputComplexVectorData::operator=(const OutputComplexVectorData &)=default
```


Provide a copy-assign operator.





**Parameters**:

* const [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData) &

**Return type**: [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData) &

**References**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb)

<a id="structsysc_1_1OutputComplexVectorData_1a4f9406d7ad5a28e45bf5ed28a737fe6a"></a>
### Function operator=

![][public]


```cpp
OutputComplexVectorData & sysc::OutputComplexVectorData::operator=(OutputComplexVectorData &&)=default
```


Provide a move-assign operator.





**Parameters**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData) &&

**Return type**: [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData) &

**References**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb)

<a id="structsysc_1_1OutputComplexVectorData_1a31967577be688239469d99f8693f2a30"></a>
### Function OutputComplexVectorData

![][public]


```cpp
sysc::OutputComplexVectorData::OutputComplexVectorData(InputComplexVectorData icvd)
```


Provide a constructor from input data.





**Parameters**:

* [InputComplexVectorData](structsysc_1_1InputComplexVectorData.md#structsysc_1_1InputComplexVectorData) **icvd**

**Return type**: 

**References**:

* [getData1](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4777c2ca8f829598a165312d6259ba73)
* [getData2](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a0c29e874a82133b6f70582a459bc4a56)
* [getData3](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a16125f108574b2b4a2ddb1dafd310f0e)
* [getData4](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a49c779b373087aa02c79652261a7927f)
* [getData5](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1ab7b90e7de696923238c5af585b992a9a)
* [getData6](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1addcc63a9e9424a1aedf619e7e86f60d6)
* [getDataType](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1aaaacbd55863e4f5665a003d03582c029)
* [getDimension](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a65ea0556c7c60e5b5ce4e5c64cd89d23)
* [isSplitComplex](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1ad692cd914d58b28d4388222e9ad0da9a)
* [isSplitVector](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1ad633327c4ab64b8025e31e07dea73af8)
* [size](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110)

<a id="structsysc_1_1OutputComplexVectorData_1a8e2a26fe4075a97d2002191e6f8cb110"></a>
### Function size

![][public]
![][const]


```cpp
std::size_t sysc::OutputComplexVectorData::size() const noexcept
```


Get the size of data.





**Return type**: std::size_t

**Referenced by**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a7998fc71c46f09f61f0d8efbcd44486f)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4a0c2b826be4c8ab2bcf2cf851a213eb)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4105668c41bb56bb6198c0dd479ee072)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1ae6c01e4b87abf5dda52e32894569ca48)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8041ada30628cd58679dd9eb29e02660)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a54713f360bc83c2e7ea8e247e2d06090)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a4703a08a37827c639a1a4684a827f3f4)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1aafe600f880ff17bfeb2f2d2e37e3e75f)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a5aca8b7bda0a6865e0b832d58ec900b0)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a0aa3e464e5ab41398573ee9f15c3c6b3)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a9485fc481ada15549e825956d53865c3)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1ad9fa59ec12232ce098e58faeacc55ecf)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a8b9de7ad81d4905a1373e569015a14ad)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a7575135c7f334a64292ca39772c41ded)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a5bb7c3333ac4c86a3925cb3f60c581f9)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a9681789740136700571499646dffc6c9)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a7bbcf904ad9fc657e41cbd66457019dd)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1aee3911cb975e9f34643a5cd76e1ac785)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1ae4a04e6ba7184bc132020dd4680a26dd)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a2d3dc32af10b693b12260bd68e34b8ca)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a45be87b68d93d27303ef07d8de2a5064)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a840410def5dd4ef7019a0a994023999c)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a1063efc74898166858297e8b6f929c63)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a3aedf28edd2d0725f79a9e36f6b81f82)
* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a31967577be688239469d99f8693f2a30)

<a id="structsysc_1_1OutputComplexVectorData_1a26050d359a4c03228a10104339e15742"></a>
### Function empty

![][public]
![][const]


```cpp
bool sysc::OutputComplexVectorData::empty() const noexcept
```


Check if array "data" is empty.





**Return type**: bool

<a id="structsysc_1_1OutputComplexVectorData_1aaaacbd55863e4f5665a003d03582c029"></a>
### Function getDataType

![][public]
![][const]


```cpp
sysc::PrimitiveType sysc::OutputComplexVectorData::getDataType() const noexcept
```


Get the primitive type of data.

For internal use only (no back-compatibility guarantee).



**Return type**: [sysc::PrimitiveType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad3b1c73e4a63f4d292d65f3db875e844)

**Referenced by**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a31967577be688239469d99f8693f2a30)

<a id="structsysc_1_1OutputComplexVectorData_1ad633327c4ab64b8025e31e07dea73af8"></a>
### Function isSplitVector

![][public]
![][const]


```cpp
bool sysc::OutputComplexVectorData::isSplitVector() const noexcept
```


Query whether it's a split or compact vector layout.

For internal use only (no back-compatibility guarantee).



**Return type**: bool

**Referenced by**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a31967577be688239469d99f8693f2a30)

<a id="structsysc_1_1OutputComplexVectorData_1ad692cd914d58b28d4388222e9ad0da9a"></a>
### Function isSplitComplex

![][public]
![][const]


```cpp
bool sysc::OutputComplexVectorData::isSplitComplex() const noexcept
```


Query whether it's a split or compact vector layout.

For internal use only (no back-compatibility guarantee).



**Return type**: bool

**Referenced by**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a31967577be688239469d99f8693f2a30)

<a id="structsysc_1_1OutputComplexVectorData_1a4777c2ca8f829598a165312d6259ba73"></a>
### Function getData1

![][public]
![][const]


```cpp
const void * sysc::OutputComplexVectorData::getData1() const noexcept
```


Get pointer to data1.

For internal use only (no back-compatibility guarantee).



**Return type**: const void *

**Referenced by**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a31967577be688239469d99f8693f2a30)

<a id="structsysc_1_1OutputComplexVectorData_1a0c29e874a82133b6f70582a459bc4a56"></a>
### Function getData2

![][public]
![][const]


```cpp
const void * sysc::OutputComplexVectorData::getData2() const noexcept
```


Get pointer to data2.

For internal use only (no back-compatibility guarantee).



**Return type**: const void *

**Referenced by**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a31967577be688239469d99f8693f2a30)

<a id="structsysc_1_1OutputComplexVectorData_1a16125f108574b2b4a2ddb1dafd310f0e"></a>
### Function getData3

![][public]
![][const]


```cpp
const void * sysc::OutputComplexVectorData::getData3() const noexcept
```


Get pointer to data3.

For internal use only (no back-compatibility guarantee).



**Return type**: const void *

**Referenced by**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a31967577be688239469d99f8693f2a30)

<a id="structsysc_1_1OutputComplexVectorData_1a49c779b373087aa02c79652261a7927f"></a>
### Function getData4

![][public]
![][const]


```cpp
const void * sysc::OutputComplexVectorData::getData4() const noexcept
```


Get pointer to data4.

For internal use only (no back-compatibility guarantee).



**Return type**: const void *

**Referenced by**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a31967577be688239469d99f8693f2a30)

<a id="structsysc_1_1OutputComplexVectorData_1ab7b90e7de696923238c5af585b992a9a"></a>
### Function getData5

![][public]
![][const]


```cpp
const void * sysc::OutputComplexVectorData::getData5() const noexcept
```


Get pointer to data5.

For internal use only (no back-compatibility guarantee).



**Return type**: const void *

**Referenced by**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a31967577be688239469d99f8693f2a30)

<a id="structsysc_1_1OutputComplexVectorData_1addcc63a9e9424a1aedf619e7e86f60d6"></a>
### Function getData6

![][public]
![][const]


```cpp
const void * sysc::OutputComplexVectorData::getData6() const noexcept
```


Get pointer to data6.

For internal use only (no back-compatibility guarantee).



**Return type**: const void *

**Referenced by**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a31967577be688239469d99f8693f2a30)

<a id="structsysc_1_1OutputComplexVectorData_1a65ea0556c7c60e5b5ce4e5c64cd89d23"></a>
### Function getDimension

![][public]
![][const]


```cpp
Dimension sysc::OutputComplexVectorData::getDimension() const noexcept
```


Get the [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c) object.

**Returns**:

[Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c)



**Return type**: [Dimension](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c)

**Referenced by**:

* [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData_1a31967577be688239469d99f8693f2a30)

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)