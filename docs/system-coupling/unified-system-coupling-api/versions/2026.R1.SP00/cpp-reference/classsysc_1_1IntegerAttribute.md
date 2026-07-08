# Class sysc::IntegerAttribute

![][C++]
![][public]

**Definition**: `Attribute.hpp` (line 129)

Provide a class for an integer-valued attribute.



## Members

* [getLowerBound](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute_1a6d7e3f93b08ccfcd2cf5667a8ec4429e)
* [getName](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute_1add95f971ab6a6864b765b1a1fd7b4e37)
* [getUpperBound](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute_1a8264f86da9fd25320af035b04984e9ad)
* [getValue](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute_1a7988b7e0be9211f02cc9c2c27222bddd)
* [hasLowerBound](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute_1a053da9a3f7dc3fa28b34aebada508bbd)
* [hasUpperBound](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute_1a5a2bcba3b3d3b912389ecb904498bf02)
* [IntegerAttribute](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute_1afb0787aba682b1564ca5b23d506b264c)
* [IntegerAttribute](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute_1a18a6abf9327ed02ca9c683a7405514d4)
* [IntegerAttribute](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute_1aa2d45dafcc5fa23d743189c1501fe0bd)
* [isModifiable](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute_1a3160540026ecf02ec23169089c9b1137)
* [m\_hasLowerBound](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute_1a050df3750c3e5d781b3f7de7388d9490)
* [m\_hasUpperBound](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute_1a102b366f8290c3419ac59714e3d37f1f)
* [m\_lowerBound](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute_1aac68f3ea536b348f71b0dc8fb5d34e5f)
* [m\_modifiable](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute_1ace37e743b8d79b5e822d6dcf1c589c3c)
* [m\_name](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute_1a67c2e22a922c2ee6fe4eb7f2861bbda1)
* [m\_upperBound](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute_1a12778d1adbf16e7b1f4515e6971bc39a)
* [m\_value](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute_1a4aec60e453ab5f3d27d35f736312bd45)
* [setLowerBound](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute_1a8ef4ba6ead616b69a01c50d9031fa41c)
* [setUpperBound](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute_1aeda3c0a27024d92bd5d573489f22c25a)

## Private attributes

<a id="classsysc_1_1IntegerAttribute_1a67c2e22a922c2ee6fe4eb7f2861bbda1"></a>
### Variable m\_name

![][private]

**Definition**: `Attribute.hpp` (line 202)


```cpp
AttributeName sysc::IntegerAttribute::m_name
```








**Type**: [AttributeName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gadd7264f1feec4bb8bcba956857090025)

<a id="classsysc_1_1IntegerAttribute_1a4aec60e453ab5f3d27d35f736312bd45"></a>
### Variable m\_value

![][private]

**Definition**: `Attribute.hpp` (line 203)


```cpp
std::int64_t sysc::IntegerAttribute::m_value {0}
```








**Type**: std::int64_t

<a id="classsysc_1_1IntegerAttribute_1aac68f3ea536b348f71b0dc8fb5d34e5f"></a>
### Variable m\_lowerBound

![][private]

**Definition**: `Attribute.hpp` (line 204)


```cpp
std::int64_t sysc::IntegerAttribute::m_lowerBound {0}
```








**Type**: std::int64_t

<a id="classsysc_1_1IntegerAttribute_1a12778d1adbf16e7b1f4515e6971bc39a"></a>
### Variable m\_upperBound

![][private]

**Definition**: `Attribute.hpp` (line 205)


```cpp
std::int64_t sysc::IntegerAttribute::m_upperBound {0}
```








**Type**: std::int64_t

<a id="classsysc_1_1IntegerAttribute_1a050df3750c3e5d781b3f7de7388d9490"></a>
### Variable m\_hasLowerBound

![][private]

**Definition**: `Attribute.hpp` (line 206)


```cpp
bool sysc::IntegerAttribute::m_hasLowerBound {false}
```








**Type**: bool

<a id="classsysc_1_1IntegerAttribute_1a102b366f8290c3419ac59714e3d37f1f"></a>
### Variable m\_hasUpperBound

![][private]

**Definition**: `Attribute.hpp` (line 207)


```cpp
bool sysc::IntegerAttribute::m_hasUpperBound {false}
```








**Type**: bool

<a id="classsysc_1_1IntegerAttribute_1ace37e743b8d79b5e822d6dcf1c589c3c"></a>
### Variable m\_modifiable

![][private]

**Definition**: `Attribute.hpp` (line 208)


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


Provide a constructor for the [IntegerAttribute](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute) class.

**Parameters**:

* **name**: - attribute name.
* **value**: - attribute value.



**Parameters**:

* [AttributeName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gadd7264f1feec4bb8bcba956857090025) **name**
* std::int64_t **value**

**Return type**: 

<a id="classsysc_1_1IntegerAttribute_1a18a6abf9327ed02ca9c683a7405514d4"></a>
### Function IntegerAttribute

![][public]


```cpp
sysc::IntegerAttribute::IntegerAttribute(AttributeName name, std::int64_t value, bool modifiable)
```


Provide a constructor for the [IntegerAttribute](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute) class.

**Parameters**:

* **name**: - attribute name.
* **value**: - attribute value.
* **modifiable**: - attribute is modifiable.



**Parameters**:

* [AttributeName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gadd7264f1feec4bb8bcba956857090025) **name**
* std::int64_t **value**
* bool **modifiable**

**Return type**: 

<a id="classsysc_1_1IntegerAttribute_1aa2d45dafcc5fa23d743189c1501fe0bd"></a>
### Function IntegerAttribute

![][public]


```cpp
sysc::IntegerAttribute::IntegerAttribute(AttributeName name, std::int64_t value, bool modifiable, bool hasLowerBound, std::int64_t lowerBound, bool hasUpperBound, std::int64_t upperBound)
```


Provide a constructor for the [IntegerAttribute](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute) class.

**Parameters**:

* **name**: - attribute name.
* **value**: - attribute value.
* **modifiable**: - attribute is modifiable.
* **hasLowerBound**: - attribute has a lower bound.
* **lowerBound**: - lower bound of the attribute value.
* **hasUpperBound**: - attribute has an upper bound.
* **upperBound**: - upper bound of the attribute value.



**Parameters**:

* [AttributeName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gadd7264f1feec4bb8bcba956857090025) **name**
* std::int64_t **value**
* bool **modifiable**
* bool **hasLowerBound**
* std::int64_t **lowerBound**
* bool **hasUpperBound**
* std::int64_t **upperBound**

**Return type**: 

<a id="classsysc_1_1IntegerAttribute_1add95f971ab6a6864b765b1a1fd7b4e37"></a>
### Function getName

![][public]
![][const]


```cpp
const AttributeName & sysc::IntegerAttribute::getName() const noexcept
```








**Return type**: const [AttributeName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gadd7264f1feec4bb8bcba956857090025) &

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

<a id="classsysc_1_1IntegerAttribute_1a8ef4ba6ead616b69a01c50d9031fa41c"></a>
### Function setLowerBound

![][public]


```cpp
void sysc::IntegerAttribute::setLowerBound(std::int64_t lowerBound) noexcept
```








**Parameters**:

* std::int64_t **lowerBound**

**Return type**: void

<a id="classsysc_1_1IntegerAttribute_1aeda3c0a27024d92bd5d573489f22c25a"></a>
### Function setUpperBound

![][public]


```cpp
void sysc::IntegerAttribute::setUpperBound(std::int64_t upperBound) noexcept
```








**Parameters**:

* std::int64_t **upperBound**

**Return type**: void

<a id="classsysc_1_1IntegerAttribute_1a053da9a3f7dc3fa28b34aebada508bbd"></a>
### Function hasLowerBound

![][public]
![][const]


```cpp
bool sysc::IntegerAttribute::hasLowerBound() const noexcept
```








**Return type**: bool

<a id="classsysc_1_1IntegerAttribute_1a5a2bcba3b3d3b912389ecb904498bf02"></a>
### Function hasUpperBound

![][public]
![][const]


```cpp
bool sysc::IntegerAttribute::hasUpperBound() const noexcept
```








**Return type**: bool

<a id="classsysc_1_1IntegerAttribute_1a6d7e3f93b08ccfcd2cf5667a8ec4429e"></a>
### Function getLowerBound

![][public]
![][const]


```cpp
std::int64_t sysc::IntegerAttribute::getLowerBound() const
```








**Return type**: std::int64_t

<a id="classsysc_1_1IntegerAttribute_1a8264f86da9fd25320af035b04984e9ad"></a>
### Function getUpperBound

![][public]
![][const]


```cpp
std::int64_t sysc::IntegerAttribute::getUpperBound() const
```








**Return type**: std::int64_t

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)