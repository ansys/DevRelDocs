# Structure sysc::ValidityStatus

![][C++]
![][public]

**Definition**: `CommonTypes.hpp` (line 202)

Provide a struct that contains information about validity.



## Members

* [isValid](structsysc_1_1ValidityStatus.md#structsysc_1_1ValidityStatus_1ac45ce7d05d6ab0126511da670f3e10a9)
* [message](structsysc_1_1ValidityStatus.md#structsysc_1_1ValidityStatus_1ad78928b787427d9c0edf9e7a1e3d857c)
* [ValidityStatus](structsysc_1_1ValidityStatus.md#structsysc_1_1ValidityStatus_1a6f7ad1e877aa19ab835c1023164f9c65)
* [ValidityStatus](structsysc_1_1ValidityStatus.md#structsysc_1_1ValidityStatus_1a11dcd716f4542e1231c0e2ec25ff0d71)

## Public attributes

<a id="structsysc_1_1ValidityStatus_1ac45ce7d05d6ab0126511da670f3e10a9"></a>
### Variable isValid

![][public]

**Definition**: `CommonTypes.hpp` (line 203)

```cpp
bool sysc::ValidityStatus::isValid
```



Validity status flag.



**Type**: bool

<a id="structsysc_1_1ValidityStatus_1ad78928b787427d9c0edf9e7a1e3d857c"></a>
### Variable message

![][public]

**Definition**: `CommonTypes.hpp` (line 204)

```cpp
std::string sysc::ValidityStatus::message
```



Message explaining errors (if any).



**Type**: std::string

## Public functions

<a id="structsysc_1_1ValidityStatus_1a6f7ad1e877aa19ab835c1023164f9c65"></a>
### Function ValidityStatus

![][public]

```cpp
sysc::ValidityStatus::ValidityStatus()
```







**Return type**: 

<a id="structsysc_1_1ValidityStatus_1a11dcd716f4542e1231c0e2ec25ff0d71"></a>
### Function ValidityStatus

![][public]

```cpp
sysc::ValidityStatus::ValidityStatus(bool isValid, std::string message)
```

Provide a non-default constructor for [ValidityStatus](structsysc_1_1ValidityStatus.md#structsysc_1_1ValidityStatus).

**Parameters**:

* **isValid**: Validity status flag.
* **message**: Message explaining errors (if any).



**Parameters**:

* bool **isValid**
* std::string **message**

**Return type**: 

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)