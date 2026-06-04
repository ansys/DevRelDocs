# Structure sysc::MeshValidityStatus

![][C++]
![][public]

**Definition**: `CommonTypes.hpp` (line 222)

Provide a struct that contains information about mesh validity.



## Members

* [isInvalid](structsysc_1_1MeshValidityStatus.md#structsysc_1_1MeshValidityStatus_1a3ee3cb844b3594fb7c3be7fce89a4f62)
* [MeshValidityStatus](structsysc_1_1MeshValidityStatus.md#structsysc_1_1MeshValidityStatus_1ad9c263935ed13d2ee2e5e97816c00ef3)
* [MeshValidityStatus](structsysc_1_1MeshValidityStatus.md#structsysc_1_1MeshValidityStatus_1ad75cfb4f98778300a21ac1d72efba379)
* [message](structsysc_1_1MeshValidityStatus.md#structsysc_1_1MeshValidityStatus_1ab175079553f6cc1591dbb3d0e74c8ec4)

## Public attributes

<a id="structsysc_1_1MeshValidityStatus_1a3ee3cb844b3594fb7c3be7fce89a4f62"></a>
### Variable isInvalid

![][public]

**Definition**: `CommonTypes.hpp` (line 223)

```cpp
bool sysc::MeshValidityStatus::isInvalid
```



Indicates whether the mesh is valid.



**Type**: bool

<a id="structsysc_1_1MeshValidityStatus_1ab175079553f6cc1591dbb3d0e74c8ec4"></a>
### Variable message

![][public]

**Definition**: `CommonTypes.hpp` (line 224)

```cpp
std::string sysc::MeshValidityStatus::message
```



Message explaining errors (if any).



**Type**: std::string

## Public functions

<a id="structsysc_1_1MeshValidityStatus_1ad9c263935ed13d2ee2e5e97816c00ef3"></a>
### Function MeshValidityStatus

![][public]

```cpp
sysc::MeshValidityStatus::MeshValidityStatus()
```







**Return type**: 

<a id="structsysc_1_1MeshValidityStatus_1ad75cfb4f98778300a21ac1d72efba379"></a>
### Function MeshValidityStatus

![][public]

```cpp
sysc::MeshValidityStatus::MeshValidityStatus(bool isInvalid, std::string message)
```

Provide a non-default constructor for [MeshValidityStatus](structsysc_1_1MeshValidityStatus.md#structsysc_1_1MeshValidityStatus).

**Parameters**:

* **isInvalid**: Flag indicating whether the mesh is valid or not.
* **message**: Message explaining errors (if any).



**Parameters**:

* bool **isInvalid**
* std::string **message**

**Return type**: 

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)