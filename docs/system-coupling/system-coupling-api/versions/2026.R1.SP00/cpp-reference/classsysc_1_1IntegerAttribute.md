---
title: "Class sysc::IntegerAttribute"
---

![][C++]
![][public]

**Definition**: `Attribute.hpp` (line 82)

Provide a class for an integer-valued attribute.



## Members

* [getName](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1IntegerAttribute)
* [getValue](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1IntegerAttribute)
* [IntegerAttribute](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1IntegerAttribute)
* [IntegerAttribute](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1IntegerAttribute)
* [isModifiable](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1IntegerAttribute)
* [m\_modifiable](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1IntegerAttribute)
* [m\_name](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1IntegerAttribute)
* [m\_value](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1IntegerAttribute)

## Private attributes

<a id="classsysc_1_1IntegerAttribute_1a67c2e22a922c2ee6fe4eb7f2861bbda1"></a>
### Variable m\_name

![][private]

**Definition**: `Attribute.hpp` (line 117)

```cpp
AttributeName sysc::IntegerAttribute::m_name
```







**Type**: [AttributeName](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc)

<a id="classsysc_1_1IntegerAttribute_1a4aec60e453ab5f3d27d35f736312bd45"></a>
### Variable m\_value

![][private]

**Definition**: `Attribute.hpp` (line 118)

```cpp
std::int64_t sysc::IntegerAttribute::m_value {0}
```







**Type**: std::int64_t

<a id="classsysc_1_1IntegerAttribute_1ace37e743b8d79b5e822d6dcf1c589c3c"></a>
### Variable m\_modifiable

![][private]

**Definition**: `Attribute.hpp` (line 119)

```cpp
bool sysc::IntegerAttribute::m_modifiable {true}
```







**Type**: bool

## Public functions

<a id="classsysc_1_1IntegerAttribute_1afb0787aba682b1564ca5b23d506b264c"></a>
### Function IntegerAttribute

![][public]

```cpp
sysc::IntegerAttribute::IntegerAttribute(AttributeName name, std::int64_t value)
```

Provide a constructor for the [IntegerAttribute](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1IntegerAttribute) class.

**Parameters**:

* **name**: - attribute name.
* **value**: - attribute value.



**Parameters**:

* [AttributeName](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) **name**
* std::int64_t **value**

**Return type**: 

<a id="classsysc_1_1IntegerAttribute_1a18a6abf9327ed02ca9c683a7405514d4"></a>
### Function IntegerAttribute

![][public]

```cpp
sysc::IntegerAttribute::IntegerAttribute(AttributeName name, std::int64_t value, bool modifiable)
```

Provide a constructor for the [IntegerAttribute](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1IntegerAttribute) class.

**Parameters**:

* **name**: - attribute name.
* **value**: - attribute value.


* 
**Parameters**:

* **modifiable**: - attribute is modifiable.



**Parameters**:

* [AttributeName](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) **name**
* std::int64_t **value**
* bool **modifiable**

**Return type**: 

<a id="classsysc_1_1IntegerAttribute_1a2e6ac3f7c7a68e88f541b870d9348892"></a>
### Function getName

![][public]
![][const]

```cpp
const AttributeName& sysc::IntegerAttribute::getName() const noexcept
```







**Return type**: const [AttributeName](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/namespacesysc) &

<a id="classsysc_1_1IntegerAttribute_1a7988b7e0be9211f02cc9c2c27222bddd"></a>
### Function getValue

![][public]
![][const]

```cpp
std::int64_t sysc::IntegerAttribute::getValue() const noexcept
```







**Return type**: std::int64_t

<a id="classsysc_1_1IntegerAttribute_1a3160540026ecf02ec23169089c9b1137"></a>
### Function isModifiable

![][public]
![][const]

```cpp
bool sysc::IntegerAttribute::isModifiable() const noexcept
```







**Return type**: bool

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)