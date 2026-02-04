# Class sysc::InputComplexScalarData

![][C++]
![][public]

**Definition**: `InputComplexScalarData.hpp` (line 24)

Provide a class for input complex scalar data.

Input scalar data provides read and write access to an array of complex scalars.

## Members

* [empty](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData_1ad7c8bad4fe00dc8e31160925a811eb5a)
* [getData1](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData_1a88e72a3976633fd62cd8c373ccbb6194)
* [getData2](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData_1a039392f0e599a4a2a2fca00787e546a0)
* [getDataType](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData_1a19522f922326595ae0eeafbb3807136b)
* [InputComplexScalarData](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData_1a9799ecb48164481feb8e3c234b5f17a2)
* [InputComplexScalarData](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData_1a4fd7a610e7b5bbf7e23fafed47354e4b)
* [InputComplexScalarData](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData_1a2651ceaed447865458a33e21feab6bc4)
* [InputComplexScalarData](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData_1aebb2f21dc9bb49e32ef384ea232fac2d)
* [InputComplexScalarData](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData_1aaad5ae16ce141940bf382347bfcde0fc)
* [InputComplexScalarData](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData_1ae35e1789225279bb36f03b24538c109c)
* [InputComplexScalarData](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData_1a4767c4598c7bf8e358581963281d116f)
* [InputComplexScalarData](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData_1a17e9c685d7df19afaab8c8d79a7f3a5e)
* [InputComplexScalarData](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData_1aa3af42841050f48442f7c799934464b1)
* [InputComplexScalarData](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData_1a3cb2a7e0408644aa704afe24a3c69680)
* [InputComplexScalarData](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData_1a87ddce421dd35973a0fb7e5ba971f1ab)
* [InputComplexScalarData](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData_1a580988b37a3df87bc3f7b8e54ab44bb1)
* [InputComplexScalarData](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData_1a04373a36866867b8d84d2eddca6c123e)
* [isSplitComplex](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData_1a77de5929a7ea7631649982e5fb3104da)
* [m\_data1](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData_1a216b4355c68bc40716d4f35430c02698)
* [m\_data2](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData_1ab91001f99844f033ad55ad3a9309889c)
* [m\_dataType](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData_1af0025f6a082772a145e8dc3518f421e4)
* [m\_isSplitComplex](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData_1af2cd5681cfae4f69b6f41c04f23e95e2)
* [m\_size](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData_1aa528e45207016d04e24ede1521684342)
* [operator=](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData_1a0f21d4c6de589c264c44a9a6203d46cf)
* [operator=](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData_1ac229c985802f1d806d13460ce35b4ae6)
* [size](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData_1a9034067801b82ce51fb707e45517d08b)

## Private attributes

<a id="classsysc_1_1InputComplexScalarData_1af0025f6a082772a145e8dc3518f421e4"></a>
### Variable m\_dataType

![][private]

**Definition**: `InputComplexScalarData.hpp` (line 219)

```cpp
PrimitiveType sysc::InputComplexScalarData::m_dataType {PrimitiveType::Double}
```







**Type**: [PrimitiveType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad3b1c73e4a63f4d292d65f3db875e844)

<a id="classsysc_1_1InputComplexScalarData_1af2cd5681cfae4f69b6f41c04f23e95e2"></a>
### Variable m\_isSplitComplex

![][private]

**Definition**: `InputComplexScalarData.hpp` (line 220)

```cpp
bool sysc::InputComplexScalarData::m_isSplitComplex {false}
```







**Type**: bool

<a id="classsysc_1_1InputComplexScalarData_1a216b4355c68bc40716d4f35430c02698"></a>
### Variable m\_data1

![][private]

**Definition**: `InputComplexScalarData.hpp` (line 222)

```cpp
void* sysc::InputComplexScalarData::m_data1 {nullptr}
```







**Type**: void *

<a id="classsysc_1_1InputComplexScalarData_1ab91001f99844f033ad55ad3a9309889c"></a>
### Variable m\_data2

![][private]

**Definition**: `InputComplexScalarData.hpp` (line 223)

```cpp
void* sysc::InputComplexScalarData::m_data2 {nullptr}
```







**Type**: void *

<a id="classsysc_1_1InputComplexScalarData_1aa528e45207016d04e24ede1521684342"></a>
### Variable m\_size

![][private]

**Definition**: `InputComplexScalarData.hpp` (line 225)

```cpp
std::size_t sysc::InputComplexScalarData::m_size {0}
```







**Type**: std::size_t

## Public functions

<a id="classsysc_1_1InputComplexScalarData_1a9799ecb48164481feb8e3c234b5f17a2"></a>
### Function InputComplexScalarData

![][public]

```cpp
sysc::InputComplexScalarData::InputComplexScalarData(std::vector< std::complex< double >> &dataComplex)
```

Provide a constructor for input complex scalar data with compact storage for complex components.

**Parameters**:

* **dataComplex**: - reference to the STL vector of complex double-precision data



**Parameters**:

* std::vector< std::complex< double >> & **dataComplex**

**Return type**: 

<a id="classsysc_1_1InputComplexScalarData_1a4fd7a610e7b5bbf7e23fafed47354e4b"></a>
### Function InputComplexScalarData

![][public]

```cpp
sysc::InputComplexScalarData::InputComplexScalarData(std::complex< double > *dataComplex, std::size_t size)
```

Provide a constructor for input complex scalar data with compact storage for complex components.

**Parameters**:

* **dataComplex**: - pointer to an array of complex double-precision scalars
* **size**: - number of scalars



**Parameters**:

* std::complex< double > * **dataComplex**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1InputComplexScalarData_1a2651ceaed447865458a33e21feab6bc4"></a>
### Function InputComplexScalarData

![][public]

```cpp
sysc::InputComplexScalarData::InputComplexScalarData(double *dataComplex, std::size_t size)
```

Provide a constructor for input complex scalar data with compact storage for complex components.

**Parameters**:

* **dataComplex**: - pointer to an array of complex double-precision scalars
* **size**: - number of scalars



**Parameters**:

* double * **dataComplex**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1InputComplexScalarData_1aebb2f21dc9bb49e32ef384ea232fac2d"></a>
### Function InputComplexScalarData

![][public]

```cpp
sysc::InputComplexScalarData::InputComplexScalarData(std::vector< double > &dataReal, std::vector< double > &dataImaginary)
```

Create an input complex scalar data access object with split storage for complex components.

**Parameters**:

* **dataReal**: - reference to an STL vector of double-precision data, that stores the real components of the complex scalars.
* **dataImaginary**: - reference to an STL vector of double-precision data, that stores the imaginary components of the complex scalars.



**Parameters**:

* std::vector< double > & **dataReal**
* std::vector< double > & **dataImaginary**

**Return type**: 

<a id="classsysc_1_1InputComplexScalarData_1aaad5ae16ce141940bf382347bfcde0fc"></a>
### Function InputComplexScalarData

![][public]

```cpp
sysc::InputComplexScalarData::InputComplexScalarData(double *dataReal, double *dataImaginary, std::size_t size)
```

Create an input complex scalar data access object with split storage for complex components.

**Parameters**:

* **dataReal**: - pointer to an array of double-precision data, that stores the real components of the complex scalars.
* **dataImaginary**: - pointer to an array of double-precision data, that stores the imaginary components of the complex scalars.
* **size**: - number of complex scalars



**Parameters**:

* double * **dataReal**
* double * **dataImaginary**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1InputComplexScalarData_1ae35e1789225279bb36f03b24538c109c"></a>
### Function InputComplexScalarData

![][public]

```cpp
sysc::InputComplexScalarData::InputComplexScalarData(std::vector< std::complex< float >> &dataComplex)
```

Provide a constructor for input complex scalar data with compact storage for complex components.

**Parameters**:

* **dataComplex**: - reference to the STL vector of complex single-precision data



**Parameters**:

* std::vector< std::complex< float >> & **dataComplex**

**Return type**: 

<a id="classsysc_1_1InputComplexScalarData_1a4767c4598c7bf8e358581963281d116f"></a>
### Function InputComplexScalarData

![][public]

```cpp
sysc::InputComplexScalarData::InputComplexScalarData(std::complex< float > *dataComplex, std::size_t size)
```

Provide a constructor for input complex scalar data with compact storage for complex components.

**Parameters**:

* **dataComplex**: - pointer to an array of complex single-precision scalars
* **size**: - number of scalars



**Parameters**:

* std::complex< float > * **dataComplex**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1InputComplexScalarData_1a17e9c685d7df19afaab8c8d79a7f3a5e"></a>
### Function InputComplexScalarData

![][public]

```cpp
sysc::InputComplexScalarData::InputComplexScalarData(float *dataComplex, std::size_t size)
```

Provide a constructor for input complex scalar data with compact storage for complex components.

**Parameters**:

* **dataComplex**: - pointer to an array of complex single-precision scalars
* **size**: - number of scalars



**Parameters**:

* float * **dataComplex**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1InputComplexScalarData_1aa3af42841050f48442f7c799934464b1"></a>
### Function InputComplexScalarData

![][public]

```cpp
sysc::InputComplexScalarData::InputComplexScalarData(std::vector< float > &dataReal, std::vector< float > &dataImaginary)
```

Create an input complex scalar data access object with split storage for complex components.

**Parameters**:

* **dataReal**: - reference to an STL vector of single-precision data, that stores the real components of the complex scalars.
* **dataImaginary**: - reference to an STL vector of single-precision data, that stores the imaginary components of the complex scalars.



**Parameters**:

* std::vector< float > & **dataReal**
* std::vector< float > & **dataImaginary**

**Return type**: 

<a id="classsysc_1_1InputComplexScalarData_1a3cb2a7e0408644aa704afe24a3c69680"></a>
### Function InputComplexScalarData

![][public]

```cpp
sysc::InputComplexScalarData::InputComplexScalarData(float *dataReal, float *dataImaginary, std::size_t size)
```

Create an input complex scalar data access object with split storage for complex components.

**Parameters**:

* **dataReal**: - pointer to an array of single-precision data, that stores the real components of the complex scalars.
* **dataImaginary**: - pointer to an array of single-precision data, that stores the imaginary components of the complex scalars.
* **size**: - number of complex scalars



**Parameters**:

* float * **dataReal**
* float * **dataImaginary**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1InputComplexScalarData_1a87ddce421dd35973a0fb7e5ba971f1ab"></a>
### Function InputComplexScalarData

![][public]

```cpp
sysc::InputComplexScalarData::InputComplexScalarData()=default
```

Provide a default constructor.





**Return type**: 

<a id="classsysc_1_1InputComplexScalarData_1a580988b37a3df87bc3f7b8e54ab44bb1"></a>
### Function InputComplexScalarData

![][public]

```cpp
sysc::InputComplexScalarData::InputComplexScalarData(const InputComplexScalarData &)=default
```

Provide a copy-constructor.





**Parameters**:

* const [InputComplexScalarData](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData) &

**Return type**: 

<a id="classsysc_1_1InputComplexScalarData_1a04373a36866867b8d84d2eddca6c123e"></a>
### Function InputComplexScalarData

![][public]

```cpp
sysc::InputComplexScalarData::InputComplexScalarData(InputComplexScalarData &&)=default
```

Provide a move-constructor.





**Parameters**:

* [InputComplexScalarData](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData) &&

**Return type**: 

<a id="classsysc_1_1InputComplexScalarData_1a0f21d4c6de589c264c44a9a6203d46cf"></a>
### Function operator=

![][public]

```cpp
InputComplexScalarData& sysc::InputComplexScalarData::operator=(const InputComplexScalarData &)=default
```

Provide a copy-assign operator.





**Parameters**:

* const [InputComplexScalarData](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData) &

**Return type**: [InputComplexScalarData](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData) &

<a id="classsysc_1_1InputComplexScalarData_1ac229c985802f1d806d13460ce35b4ae6"></a>
### Function operator=

![][public]

```cpp
InputComplexScalarData& sysc::InputComplexScalarData::operator=(InputComplexScalarData &&)=default
```

Provide a move-assign operator.





**Parameters**:

* [InputComplexScalarData](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData) &&

**Return type**: [InputComplexScalarData](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData) &

<a id="classsysc_1_1InputComplexScalarData_1a9034067801b82ce51fb707e45517d08b"></a>
### Function size

![][public]
![][const]

```cpp
std::size_t sysc::InputComplexScalarData::size() const noexcept
```

Get the size of data.





**Return type**: std::size_t

<a id="classsysc_1_1InputComplexScalarData_1ad7c8bad4fe00dc8e31160925a811eb5a"></a>
### Function empty

![][public]
![][const]

```cpp
bool sysc::InputComplexScalarData::empty() const noexcept
```

Check if array "data" is empty.





**Return type**: bool

<a id="classsysc_1_1InputComplexScalarData_1a19522f922326595ae0eeafbb3807136b"></a>
### Function getDataType

![][public]
![][const]

```cpp
sysc::PrimitiveType sysc::InputComplexScalarData::getDataType() const noexcept
```

Get the primitive type of data.

For internal use only (no back-compatibility guarantee).



**Return type**: [sysc::PrimitiveType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad3b1c73e4a63f4d292d65f3db875e844)

<a id="classsysc_1_1InputComplexScalarData_1a77de5929a7ea7631649982e5fb3104da"></a>
### Function isSplitComplex

![][public]
![][const]

```cpp
bool sysc::InputComplexScalarData::isSplitComplex() const noexcept
```

Query whether it's a split or compact vector layout.

For internal use only (no back-compatibility guarantee).



**Return type**: bool

<a id="classsysc_1_1InputComplexScalarData_1a88e72a3976633fd62cd8c373ccbb6194"></a>
### Function getData1

![][public]
![][const]

```cpp
void* sysc::InputComplexScalarData::getData1() const noexcept
```

Get pointer to data1.

For internal use only (no back-compatibility guarantee).



**Return type**: void *

<a id="classsysc_1_1InputComplexScalarData_1a039392f0e599a4a2a2fca00787e546a0"></a>
### Function getData2

![][public]
![][const]

```cpp
void* sysc::InputComplexScalarData::getData2() const noexcept
```

Get pointer to data2.

For internal use only (no back-compatibility guarantee).



**Return type**: void *

**References**:

* [sysc::Double](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ggad3b1c73e4a63f4d292d65f3db875e844a29843d2c1bb5760f768dcc066dac1ac1)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)