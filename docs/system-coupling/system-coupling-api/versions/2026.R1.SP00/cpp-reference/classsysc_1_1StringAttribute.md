# Class sysc::StringAttribute

![][C++]
![][public]

**Definition**: `Attribute.hpp` (line 130)

Provide a class for a string-valued attribute.



## Members

* [getName](classsysc_1_1StringAttribute.md#classsysc_1_1StringAttribute_1a33aeab216103cc03b94fc47a5b86a46d)
* [getValue](classsysc_1_1StringAttribute.md#classsysc_1_1StringAttribute_1adbe87236601b9b9a63feb0a875498d7e)
* [isModifiable](classsysc_1_1StringAttribute.md#classsysc_1_1StringAttribute_1afb8acdca0d571ae39e54091fd9d28f52)
* [m\_modifiable](classsysc_1_1StringAttribute.md#classsysc_1_1StringAttribute_1afea355b26d47d73a6a957afd1ac1deae)
* [m\_name](classsysc_1_1StringAttribute.md#classsysc_1_1StringAttribute_1a53e3c4a6e018a1fdd9dac6f7331906c0)
* [m\_value](classsysc_1_1StringAttribute.md#classsysc_1_1StringAttribute_1a8a7b21a53592e456b6bfcc5a2cb04166)
* [StringAttribute](classsysc_1_1StringAttribute.md#classsysc_1_1StringAttribute_1a772d8bd459e5f582deac1a611767fe22)
* [StringAttribute](classsysc_1_1StringAttribute.md#classsysc_1_1StringAttribute_1ae97a688e0fb2609aa44cef6e139ade08)

## Private attributes

<a id="classsysc_1_1StringAttribute_1a53e3c4a6e018a1fdd9dac6f7331906c0"></a>
### Variable m\_name

![][private]

**Definition**: `Attribute.hpp` (line 165)

```cpp
AttributeName sysc::StringAttribute::m_name
```







**Type**: [AttributeName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gadb06eacf4ed0787d18e8ddbf0612c83c)

<a id="classsysc_1_1StringAttribute_1a8a7b21a53592e456b6bfcc5a2cb04166"></a>
### Variable m\_value

![][private]

**Definition**: `Attribute.hpp` (line 166)

```cpp
std::string sysc::StringAttribute::m_value {0}
```







**Type**: std::string

<a id="classsysc_1_1StringAttribute_1afea355b26d47d73a6a957afd1ac1deae"></a>
### Variable m\_modifiable

![][private]

**Definition**: `Attribute.hpp` (line 167)

```cpp
bool sysc::StringAttribute::m_modifiable {true}
```







**Type**: bool

## Public functions

<a id="classsysc_1_1StringAttribute_1a772d8bd459e5f582deac1a611767fe22"></a>
### Function StringAttribute

![][public]

```cpp
sysc::StringAttribute::StringAttribute(AttributeName name, std::string value)
```

Provide a constructor for the [StringAttribute](classsysc_1_1StringAttribute.md#classsysc_1_1StringAttribute) class.

**Parameters**:

* **name**: - attribute name.
* **value**: - attribute value.



**Parameters**:

* [AttributeName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gadb06eacf4ed0787d18e8ddbf0612c83c) **name**
* std::string **value**

**Return type**: 

<a id="classsysc_1_1StringAttribute_1ae97a688e0fb2609aa44cef6e139ade08"></a>
### Function StringAttribute

![][public]

```cpp
sysc::StringAttribute::StringAttribute(AttributeName name, std::string value, bool modifiable)
```

Provide a constructor for the [StringAttribute](classsysc_1_1StringAttribute.md#classsysc_1_1StringAttribute) class.

**Parameters**:

* **name**: - attribute name.
* **value**: - attribute value.


* 
**Parameters**:

* **modifiable**: - attribute is modifiable.



**Parameters**:

* [AttributeName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gadb06eacf4ed0787d18e8ddbf0612c83c) **name**
* std::string **value**
* bool **modifiable**

**Return type**: 

<a id="classsysc_1_1StringAttribute_1a33aeab216103cc03b94fc47a5b86a46d"></a>
### Function getName

![][public]
![][const]

```cpp
const AttributeName& sysc::StringAttribute::getName() const noexcept
```







**Return type**: const [AttributeName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gadb06eacf4ed0787d18e8ddbf0612c83c) &

<a id="classsysc_1_1StringAttribute_1adbe87236601b9b9a63feb0a875498d7e"></a>
### Function getValue

![][public]
![][const]

```cpp
std::string sysc::StringAttribute::getValue() const
```







**Return type**: std::string

<a id="classsysc_1_1StringAttribute_1afb8acdca0d571ae39e54091fd9d28f52"></a>
### Function isModifiable

![][public]
![][const]

```cpp
bool sysc::StringAttribute::isModifiable() const noexcept
```







**Return type**: bool

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)