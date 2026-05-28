---
title: "Class sysc::RealAttribute"
---

![][C++]
![][public]

**Definition**: `Attribute.hpp` (line 23)

Provide a class for a real-valued attribute.



## Members

* [getDimensionality](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1RealAttribute)
* [getName](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1RealAttribute)
* [getUnits](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1RealAttribute)
* [getValue](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1RealAttribute)
* [isModifiable](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1RealAttribute)
* [m\_dimensionality](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1RealAttribute)
* [m\_modifiable](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1RealAttribute)
* [m\_name](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1RealAttribute)
* [m\_value](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1RealAttribute)
* [RealAttribute](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1RealAttribute)
* [RealAttribute](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1RealAttribute)

## Private attributes

<a id="classsysc_1_1RealAttribute_1a62e520d7d57c79bf373ba46d6e2c33fd"></a>
### Variable m\_name

![][private]

**Definition**: `Attribute.hpp` (line 68)

```cpp
AttributeName sysc::RealAttribute::m_name
```







**Type**: [AttributeName](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/namespacesysc)

<a id="classsysc_1_1RealAttribute_1a6457405f9c984cc0f8cf1dd7e74514af"></a>
### Variable m\_value

![][private]

**Definition**: `Attribute.hpp` (line 69)

```cpp
double sysc::RealAttribute::m_value {0.0}
```







**Type**: double

<a id="classsysc_1_1RealAttribute_1ac2b012e50297a48b5f399c585a5b16e0"></a>
### Variable m\_dimensionality

![][private]

**Definition**: `Attribute.hpp` (line 70)

```cpp
Dimensionality sysc::RealAttribute::m_dimensionality
```







**Type**: [Dimensionality](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1Dimensionality)

<a id="classsysc_1_1RealAttribute_1af5804153bc3fa286fd94195110af1c2a"></a>
### Variable m\_modifiable

![][private]

**Definition**: `Attribute.hpp` (line 71)

```cpp
bool sysc::RealAttribute::m_modifiable {true}
```







**Type**: bool

## Public functions

<a id="classsysc_1_1RealAttribute_1ad46b89c811a79901af549e50173ca5f8"></a>
### Function RealAttribute

![][public]

```cpp
sysc::RealAttribute::RealAttribute(AttributeName name, double value, Dimensionality dimensionality)
```

Provide a constructor for the [RealAttribute](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1RealAttribute) class.

**Parameters**:

* **name**: - attribute name.
* **value**: - attribute value.
* **dimensionality**: - attribute dimensionality.



**Parameters**:

* [AttributeName](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/namespacesysc) **name**
* double **value**
* [Dimensionality](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1Dimensionality) **dimensionality**

**Return type**: 

<a id="classsysc_1_1RealAttribute_1a5fc9075ddc9f02df2fba129abdddfe85"></a>
### Function RealAttribute

![][public]

```cpp
sysc::RealAttribute::RealAttribute(AttributeName name, double value, Dimensionality dimensionality, bool modifiable)
```

Provide a constructor for the [RealAttribute](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1RealAttribute) class.

**Parameters**:

* **name**: - attribute name.
* **value**: - attribute value.
* **dimensionality**: - attribute dimensionality.
* **modifiable**: - attribute is modifiable.



**Parameters**:

* [AttributeName](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/namespacesysc) **name**
* double **value**
* [Dimensionality](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1Dimensionality) **dimensionality**
* bool **modifiable**

**Return type**: 

<a id="classsysc_1_1RealAttribute_1afa2d15feabc90d93113124609e76b765"></a>
### Function getName

![][public]
![][const]

```cpp
const AttributeName& sysc::RealAttribute::getName() const noexcept
```







**Return type**: const [AttributeName](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/namespacesysc) &

<a id="classsysc_1_1RealAttribute_1ac9132b5406b7c93c4fe2cce45bb8d31c"></a>
### Function getValue

![][public]
![][const]

```cpp
double sysc::RealAttribute::getValue() const noexcept
```







**Return type**: double

<a id="classsysc_1_1RealAttribute_1a447ebf2b4aa38ed25151afcbab997a20"></a>
### Function getDimensionality

![][public]
![][const]

```cpp
const Dimensionality& sysc::RealAttribute::getDimensionality() const noexcept
```







**Return type**: const [Dimensionality](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/structsysc_1_1Dimensionality) &

<a id="classsysc_1_1RealAttribute_1acaab66de9536925d8e187d7eeeeff3a8"></a>
### Function isModifiable

![][public]
![][const]

```cpp
bool sysc::RealAttribute::isModifiable() const noexcept
```







**Return type**: bool

<a id="classsysc_1_1RealAttribute_1a7a821f54d2cfc1427af46a5557fde959"></a>
### Function getUnits

![][public]
![][const]

```cpp
std::string sysc::RealAttribute::getUnits() const
```







**Return type**: std::string

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)