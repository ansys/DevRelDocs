# Class sysc::InputScalarData

![][C++]
![][public]

**Definition**: `InputScalarData.hpp` (line 23)

Provide a class for input scalar data.

Input scalar data provides read and write access to an array of scalar data.

## Members

* [empty](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData_1ac7440118cc57a71e6d25aeb9184d3693)
* [getData](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData_1a70fafa6880145e0618cd828e1c7eb574)
* [getDataType](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData_1a6468902b8f2e27053c09c25ed05562de)
* [InputScalarData](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData_1afb2631211cf5550a612983438f71479b)
* [InputScalarData](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData_1aaa8a75a57967d0e25b33fe88d77553a5)
* [InputScalarData](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData_1a90bffff1edbccc52b9807af3881c11ac)
* [InputScalarData](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData_1a1380850d03279cd3f11e4e65cbc9f064)
* [InputScalarData](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData_1a1dbb88c3363e1b40e8b60f281e42be05)
* [InputScalarData](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData_1ae6c55f6cd5109f97f207e3ab2f07ad47)
* [InputScalarData](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData_1ad8ff168a7cd8ed62728594cf3b22b791)
* [m\_data](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData_1a842acad8ad4a864a4af2158498d52fae)
* [m\_dataType](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData_1aa5f494154b74b3fad2d8b9b35294e887)
* [m\_size](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData_1a26eff37dacc07de408859505661bfcc3)
* [operator=](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData_1a2fe5667de3d73e4c317d3ef1bc3c8893)
* [operator=](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData_1a62d7585f5fdad7c94ff4fefb8f38989e)
* [size](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData_1ab30285336db3ff38293904e8dbe6583d)

## Private attributes

<a id="classsysc_1_1InputScalarData_1aa5f494154b74b3fad2d8b9b35294e887"></a>
### Variable m\_dataType

![][private]

**Definition**: `InputScalarData.hpp` (line 94)

```cpp
sysc::PrimitiveType sysc::InputScalarData::m_dataType {sysc::Double}
```







**Type**: [sysc::PrimitiveType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad3b1c73e4a63f4d292d65f3db875e844)

<a id="classsysc_1_1InputScalarData_1a842acad8ad4a864a4af2158498d52fae"></a>
### Variable m\_data

![][private]

**Definition**: `InputScalarData.hpp` (line 95)

```cpp
void* sysc::InputScalarData::m_data {nullptr}
```







**Type**: void *

<a id="classsysc_1_1InputScalarData_1a26eff37dacc07de408859505661bfcc3"></a>
### Variable m\_size

![][private]

**Definition**: `InputScalarData.hpp` (line 96)

```cpp
std::size_t sysc::InputScalarData::m_size {0}
```







**Type**: std::size_t

## Public functions

<a id="classsysc_1_1InputScalarData_1afb2631211cf5550a612983438f71479b"></a>
### Function InputScalarData

![][public]

```cpp
sysc::InputScalarData::InputScalarData(double *data, std::size_t size)
```

Provide a constructor for input scalar data.

**Parameters**:

* **data**: - pointer to the double-precision array of data.
* **size**: - number of elements in the array.



**Parameters**:

* double * **data**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1InputScalarData_1aaa8a75a57967d0e25b33fe88d77553a5"></a>
### Function InputScalarData

![][public]

```cpp
sysc::InputScalarData::InputScalarData(float *data, std::size_t size)
```

Provide a constructor for input scalar data.

**Parameters**:

* **data**: - pointer to the single-precision array of data.
* **size**: - number of elements in the array.



**Parameters**:

* float * **data**
* std::size_t **size**

**Return type**: 

<a id="classsysc_1_1InputScalarData_1a90bffff1edbccc52b9807af3881c11ac"></a>
### Function InputScalarData

![][public]

```cpp
sysc::InputScalarData::InputScalarData(std::vector< double > &data)
```

Provide a constructor for input scalar data.

**Parameters**:

* **data**: Reference to STL vector of doubles.



**Parameters**:

* std::vector< double > & **data**

**Return type**: 

<a id="classsysc_1_1InputScalarData_1a1380850d03279cd3f11e4e65cbc9f064"></a>
### Function InputScalarData

![][public]

```cpp
sysc::InputScalarData::InputScalarData(std::vector< float > &data)
```

Provide a constructor for input scalar data.

**Parameters**:

* **data**: Reference to STL vector of floats.



**Parameters**:

* std::vector< float > & **data**

**Return type**: 

<a id="classsysc_1_1InputScalarData_1a1dbb88c3363e1b40e8b60f281e42be05"></a>
### Function InputScalarData

![][public]

```cpp
sysc::InputScalarData::InputScalarData()=default
```

Provide a default constructor.





**Return type**: 

<a id="classsysc_1_1InputScalarData_1ae6c55f6cd5109f97f207e3ab2f07ad47"></a>
### Function InputScalarData

![][public]

```cpp
sysc::InputScalarData::InputScalarData(const InputScalarData &)=default
```

Provide a copy-constructor.





**Parameters**:

* const [InputScalarData](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData) &

**Return type**: 

<a id="classsysc_1_1InputScalarData_1ad8ff168a7cd8ed62728594cf3b22b791"></a>
### Function InputScalarData

![][public]

```cpp
sysc::InputScalarData::InputScalarData(InputScalarData &&)=default
```

Provide a move-constructor.





**Parameters**:

* [InputScalarData](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData) &&

**Return type**: 

<a id="classsysc_1_1InputScalarData_1a2fe5667de3d73e4c317d3ef1bc3c8893"></a>
### Function operator=

![][public]

```cpp
InputScalarData& sysc::InputScalarData::operator=(const InputScalarData &)=default
```

Provide a copy-assign operator.





**Parameters**:

* const [InputScalarData](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData) &

**Return type**: [InputScalarData](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData) &

<a id="classsysc_1_1InputScalarData_1a62d7585f5fdad7c94ff4fefb8f38989e"></a>
### Function operator=

![][public]

```cpp
InputScalarData& sysc::InputScalarData::operator=(InputScalarData &&)=default
```

Provide a move-assign operator.





**Parameters**:

* [InputScalarData](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData) &&

**Return type**: [InputScalarData](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData) &

<a id="classsysc_1_1InputScalarData_1ab30285336db3ff38293904e8dbe6583d"></a>
### Function size

![][public]
![][const]

```cpp
std::size_t sysc::InputScalarData::size() const noexcept
```

Get the size of data.





**Return type**: std::size_t

<a id="classsysc_1_1InputScalarData_1ac7440118cc57a71e6d25aeb9184d3693"></a>
### Function empty

![][public]
![][const]

```cpp
bool sysc::InputScalarData::empty() const noexcept
```

Check if array "data" is empty.





**Return type**: bool

<a id="classsysc_1_1InputScalarData_1a6468902b8f2e27053c09c25ed05562de"></a>
### Function getDataType

![][public]
![][const]

```cpp
sysc::PrimitiveType sysc::InputScalarData::getDataType() const noexcept
```

Get the primitive type of data.

For internal use only (no back-compatibility guarantee).



**Return type**: [sysc::PrimitiveType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad3b1c73e4a63f4d292d65f3db875e844)

<a id="classsysc_1_1InputScalarData_1a70fafa6880145e0618cd828e1c7eb574"></a>
### Function getData

![][public]
![][const]

```cpp
void* sysc::InputScalarData::getData() const noexcept
```

Get the pointer to the data.

For internal use only (no back-compatibility guarantee).



**Return type**: void *

**References**:

* [sysc::Double](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ggad3b1c73e4a63f4d292d65f3db875e844a29843d2c1bb5760f768dcc066dac1ac1)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)