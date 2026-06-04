# Structure sysc::InputScalarData

![][C++]
![][public]

**Definition**: `InputScalarData.hpp` (line 21)

Provide a class for input scalar data.

Input scalar data provides read and write access to an array of scalar data.

## Members

* [empty](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1ac7440118cc57a71e6d25aeb9184d3693)
* [getData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1a5d8b2df6cc7be58d1c3e2a2aa289fc78)
* [getDataType](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1a6468902b8f2e27053c09c25ed05562de)
* [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1afb2631211cf5550a612983438f71479b)
* [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1aaa8a75a57967d0e25b33fe88d77553a5)
* [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1a90bffff1edbccc52b9807af3881c11ac)
* [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1a1380850d03279cd3f11e4e65cbc9f064)
* [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1a1dbb88c3363e1b40e8b60f281e42be05)
* [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1ae6c55f6cd5109f97f207e3ab2f07ad47)
* [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1ad8ff168a7cd8ed62728594cf3b22b791)
* [m\_data](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1a842acad8ad4a864a4af2158498d52fae)
* [m\_dataType](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1aa5f494154b74b3fad2d8b9b35294e887)
* [m\_size](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1a26eff37dacc07de408859505661bfcc3)
* [operator=](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1a1df3c00def6b68506e74ad80d374999f)
* [operator=](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1a65d10417b97836f95d57dd70c16b425a)
* [size](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1ab30285336db3ff38293904e8dbe6583d)

## Private attributes

<a id="structsysc_1_1InputScalarData_1aa5f494154b74b3fad2d8b9b35294e887"></a>
### Variable m\_dataType

![][private]

**Definition**: `InputScalarData.hpp` (line 119)


```cpp
sysc::PrimitiveType sysc::InputScalarData::m_dataType {[sysc::Double](group__SystemCouplingParticipantAPIs.md#group__SystemCouplingParticipantAPIs_1ggad3b1c73e4a63f4d292d65f3db875e844a29843d2c1bb5760f768dcc066dac1ac1)}
```








**Type**: [sysc::PrimitiveType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad3b1c73e4a63f4d292d65f3db875e844)

<a id="structsysc_1_1InputScalarData_1a842acad8ad4a864a4af2158498d52fae"></a>
### Variable m\_data

![][private]

**Definition**: `InputScalarData.hpp` (line 120)


```cpp
void* sysc::InputScalarData::m_data {nullptr}
```








**Type**: void *

<a id="structsysc_1_1InputScalarData_1a26eff37dacc07de408859505661bfcc3"></a>
### Variable m\_size

![][private]

**Definition**: `InputScalarData.hpp` (line 121)


```cpp
std::size_t sysc::InputScalarData::m_size {0}
```








**Type**: std::size_t

## Public functions

<a id="structsysc_1_1InputScalarData_1afb2631211cf5550a612983438f71479b"></a>
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

**References**:

* [size](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1ab30285336db3ff38293904e8dbe6583d)

**Referenced by**:

* [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1ae6c55f6cd5109f97f207e3ab2f07ad47)
* [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1ad8ff168a7cd8ed62728594cf3b22b791)
* [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1a90bffff1edbccc52b9807af3881c11ac)
* [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1a1380850d03279cd3f11e4e65cbc9f064)
* [operator=](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1a1df3c00def6b68506e74ad80d374999f)
* [operator=](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1a65d10417b97836f95d57dd70c16b425a)

<a id="structsysc_1_1InputScalarData_1aaa8a75a57967d0e25b33fe88d77553a5"></a>
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

**References**:

* [sysc::Float](group__SystemCouplingParticipantAPIs.md#group__SystemCouplingParticipantAPIs_1ggad3b1c73e4a63f4d292d65f3db875e844af25f11e4d5a18405d2880727956e3c06)
* [size](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1ab30285336db3ff38293904e8dbe6583d)

<a id="structsysc_1_1InputScalarData_1a90bffff1edbccc52b9807af3881c11ac"></a>
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

**References**:

* [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1afb2631211cf5550a612983438f71479b)
* [size](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1ab30285336db3ff38293904e8dbe6583d)

<a id="structsysc_1_1InputScalarData_1a1380850d03279cd3f11e4e65cbc9f064"></a>
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

**References**:

* [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1afb2631211cf5550a612983438f71479b)
* [size](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1ab30285336db3ff38293904e8dbe6583d)

<a id="structsysc_1_1InputScalarData_1a1dbb88c3363e1b40e8b60f281e42be05"></a>
### Function InputScalarData

![][public]


```cpp
sysc::InputScalarData::InputScalarData()=default
```


Provide a default constructor.





**Return type**: 

<a id="structsysc_1_1InputScalarData_1ae6c55f6cd5109f97f207e3ab2f07ad47"></a>
### Function InputScalarData

![][public]


```cpp
sysc::InputScalarData::InputScalarData(const InputScalarData &)=default
```


Provide a copy-constructor.





**Parameters**:

* const [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData) &

**Return type**: 

**References**:

* [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1afb2631211cf5550a612983438f71479b)

<a id="structsysc_1_1InputScalarData_1ad8ff168a7cd8ed62728594cf3b22b791"></a>
### Function InputScalarData

![][public]


```cpp
sysc::InputScalarData::InputScalarData(InputScalarData &&)=default
```


Provide a move-constructor.





**Parameters**:

* [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData) &&

**Return type**: 

**References**:

* [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1afb2631211cf5550a612983438f71479b)

<a id="structsysc_1_1InputScalarData_1a1df3c00def6b68506e74ad80d374999f"></a>
### Function operator=

![][public]


```cpp
InputScalarData & sysc::InputScalarData::operator=(const InputScalarData &)=default
```


Provide a copy-assign operator.





**Parameters**:

* const [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData) &

**Return type**: [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData) &

**References**:

* [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1afb2631211cf5550a612983438f71479b)

<a id="structsysc_1_1InputScalarData_1a65d10417b97836f95d57dd70c16b425a"></a>
### Function operator=

![][public]


```cpp
InputScalarData & sysc::InputScalarData::operator=(InputScalarData &&)=default
```


Provide a move-assign operator.





**Parameters**:

* [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData) &&

**Return type**: [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData) &

**References**:

* [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1afb2631211cf5550a612983438f71479b)

<a id="structsysc_1_1InputScalarData_1ab30285336db3ff38293904e8dbe6583d"></a>
### Function size

![][public]
![][const]


```cpp
std::size_t sysc::InputScalarData::size() const noexcept
```


Get the size of data.





**Return type**: std::size_t

**Referenced by**:

* [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1afb2631211cf5550a612983438f71479b)
* [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1aaa8a75a57967d0e25b33fe88d77553a5)
* [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1a90bffff1edbccc52b9807af3881c11ac)
* [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData_1a1380850d03279cd3f11e4e65cbc9f064)

<a id="structsysc_1_1InputScalarData_1ac7440118cc57a71e6d25aeb9184d3693"></a>
### Function empty

![][public]
![][const]


```cpp
bool sysc::InputScalarData::empty() const noexcept
```


Check if array "data" is empty.





**Return type**: bool

<a id="structsysc_1_1InputScalarData_1a6468902b8f2e27053c09c25ed05562de"></a>
### Function getDataType

![][public]
![][const]


```cpp
sysc::PrimitiveType sysc::InputScalarData::getDataType() const noexcept
```


Get the primitive type of data.

For internal use only (no back-compatibility guarantee).



**Return type**: [sysc::PrimitiveType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad3b1c73e4a63f4d292d65f3db875e844)

<a id="structsysc_1_1InputScalarData_1a5d8b2df6cc7be58d1c3e2a2aa289fc78"></a>
### Function getData

![][public]
![][const]


```cpp
void * sysc::InputScalarData::getData() const noexcept
```


Get the pointer to the data.

For internal use only (no back-compatibility guarantee).



**Return type**: void *

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)