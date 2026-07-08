# Class sysc::RealAttribute

![][C++]
![][public]

**Definition**: `Attribute.hpp` (line 24)

Provide a class for a real-valued attribute.



## Members

* [getDimensionality](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute_1af148ae2b115b7c94e42f4420fbc77a89)
* [getLowerBound](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute_1ab2a58335646cdf0ddbecce9a0765d299)
* [getName](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute_1affbd33cc1f825e0ff2c4c7999c1c7dc7)
* [getUnits](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute_1a7a821f54d2cfc1427af46a5557fde959)
* [getUpperBound](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute_1a9381854be5ac8e78ea7fdccd8d049c04)
* [getValue](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute_1ac9132b5406b7c93c4fe2cce45bb8d31c)
* [hasLowerBound](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute_1a3616565d5319070c4623ce4386e3256c)
* [hasUpperBound](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute_1a44f6a43da73eb6cf3c80ccd3b8277457)
* [isModifiable](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute_1acaab66de9536925d8e187d7eeeeff3a8)
* [m\_dimensionality](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute_1ac2b012e50297a48b5f399c585a5b16e0)
* [m\_hasLowerBound](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute_1afaa40f1864a6a204b99e4d00cc6c65c2)
* [m\_hasUpperBound](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute_1ab30d13af56940ba57b85293bbb14bd8a)
* [m\_lowerBound](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute_1ae09b7152280a3592da6e2513f3f7e34e)
* [m\_modifiable](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute_1af5804153bc3fa286fd94195110af1c2a)
* [m\_name](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute_1a62e520d7d57c79bf373ba46d6e2c33fd)
* [m\_upperBound](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute_1abf470733db6ad976b1669dfdbb6306fc)
* [m\_value](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute_1a6457405f9c984cc0f8cf1dd7e74514af)
* [RealAttribute](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute_1ad46b89c811a79901af549e50173ca5f8)
* [RealAttribute](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute_1a5fc9075ddc9f02df2fba129abdddfe85)
* [RealAttribute](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute_1a70c0e2a553d37f459e3a7ba9866112ca)
* [setLowerBound](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute_1aca13bf82aa610e0d1d29671935464795)
* [setUpperBound](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute_1a790e1e9eba6a6f66b58482748b61ce65)

## Private attributes

<a id="classsysc_1_1RealAttribute_1a62e520d7d57c79bf373ba46d6e2c33fd"></a>
### Variable m\_name

![][private]

**Definition**: `Attribute.hpp` (line 111)


```cpp
AttributeName sysc::RealAttribute::m_name
```








**Type**: [AttributeName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gadd7264f1feec4bb8bcba956857090025)

<a id="classsysc_1_1RealAttribute_1a6457405f9c984cc0f8cf1dd7e74514af"></a>
### Variable m\_value

![][private]

**Definition**: `Attribute.hpp` (line 112)


```cpp
double sysc::RealAttribute::m_value {0.0}
```








**Type**: double

<a id="classsysc_1_1RealAttribute_1ae09b7152280a3592da6e2513f3f7e34e"></a>
### Variable m\_lowerBound

![][private]

**Definition**: `Attribute.hpp` (line 113)


```cpp
double sysc::RealAttribute::m_lowerBound {0.0}
```








**Type**: double

<a id="classsysc_1_1RealAttribute_1abf470733db6ad976b1669dfdbb6306fc"></a>
### Variable m\_upperBound

![][private]

**Definition**: `Attribute.hpp` (line 114)


```cpp
double sysc::RealAttribute::m_upperBound {0.0}
```








**Type**: double

<a id="classsysc_1_1RealAttribute_1afaa40f1864a6a204b99e4d00cc6c65c2"></a>
### Variable m\_hasLowerBound

![][private]

**Definition**: `Attribute.hpp` (line 115)


```cpp
bool sysc::RealAttribute::m_hasLowerBound {false}
```








**Type**: bool

<a id="classsysc_1_1RealAttribute_1ab30d13af56940ba57b85293bbb14bd8a"></a>
### Variable m\_hasUpperBound

![][private]

**Definition**: `Attribute.hpp` (line 116)


```cpp
bool sysc::RealAttribute::m_hasUpperBound {false}
```








**Type**: bool

<a id="classsysc_1_1RealAttribute_1ac2b012e50297a48b5f399c585a5b16e0"></a>
### Variable m\_dimensionality

![][private]

**Definition**: `Attribute.hpp` (line 117)


```cpp
Dimensionality sysc::RealAttribute::m_dimensionality
```








**Type**: [Dimensionality](structsysc_1_1Dimensionality.md#structsysc_1_1Dimensionality)

<a id="classsysc_1_1RealAttribute_1af5804153bc3fa286fd94195110af1c2a"></a>
### Variable m\_modifiable

![][private]

**Definition**: `Attribute.hpp` (line 118)


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


Provide a constructor for the [RealAttribute](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute) class.

**Parameters**:

* **name**: - attribute name.
* **value**: - attribute value.
* **dimensionality**: - attribute dimensionality.



**Parameters**:

* [AttributeName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gadd7264f1feec4bb8bcba956857090025) **name**
* double **value**
* [Dimensionality](structsysc_1_1Dimensionality.md#structsysc_1_1Dimensionality) **dimensionality**

**Return type**: 

<a id="classsysc_1_1RealAttribute_1a5fc9075ddc9f02df2fba129abdddfe85"></a>
### Function RealAttribute

![][public]


```cpp
sysc::RealAttribute::RealAttribute(AttributeName name, double value, Dimensionality dimensionality, bool modifiable)
```


Provide a constructor for the [RealAttribute](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute) class.

**Parameters**:

* **name**: - attribute name.
* **value**: - attribute value.
* **dimensionality**: - attribute dimensionality.
* **modifiable**: - attribute is modifiable.



**Parameters**:

* [AttributeName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gadd7264f1feec4bb8bcba956857090025) **name**
* double **value**
* [Dimensionality](structsysc_1_1Dimensionality.md#structsysc_1_1Dimensionality) **dimensionality**
* bool **modifiable**

**Return type**: 

<a id="classsysc_1_1RealAttribute_1a70c0e2a553d37f459e3a7ba9866112ca"></a>
### Function RealAttribute

![][public]


```cpp
sysc::RealAttribute::RealAttribute(AttributeName name, double value, Dimensionality dimensionality, bool modifiable, bool hasLowerBound, double lowerBound, bool hasUpperBound, double upperBound)
```


Provide a constructor for the [RealAttribute](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute) class.

**Parameters**:

* **name**: - attribute name.
* **value**: - attribute value.
* **dimensionality**: - attribute dimensionality.
* **modifiable**: - attribute is modifiable.
* **hasLowerBound**: - attribute has a lower bound.
* **lowerBound**: - lower bound of the attribute value.
* **hasUpperBound**: - attribute has an upper bound.
* **upperBound**: - upper bound of the attribute value.



**Parameters**:

* [AttributeName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gadd7264f1feec4bb8bcba956857090025) **name**
* double **value**
* [Dimensionality](structsysc_1_1Dimensionality.md#structsysc_1_1Dimensionality) **dimensionality**
* bool **modifiable**
* bool **hasLowerBound**
* double **lowerBound**
* bool **hasUpperBound**
* double **upperBound**

**Return type**: 

<a id="classsysc_1_1RealAttribute_1affbd33cc1f825e0ff2c4c7999c1c7dc7"></a>
### Function getName

![][public]
![][const]


```cpp
const AttributeName & sysc::RealAttribute::getName() const noexcept
```








**Return type**: const [AttributeName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gadd7264f1feec4bb8bcba956857090025) &

<a id="classsysc_1_1RealAttribute_1ac9132b5406b7c93c4fe2cce45bb8d31c"></a>
### Function getValue

![][public]
![][const]


```cpp
double sysc::RealAttribute::getValue() const noexcept
```








**Return type**: double

<a id="classsysc_1_1RealAttribute_1af148ae2b115b7c94e42f4420fbc77a89"></a>
### Function getDimensionality

![][public]
![][const]


```cpp
const Dimensionality & sysc::RealAttribute::getDimensionality() const noexcept
```








**Return type**: const [Dimensionality](structsysc_1_1Dimensionality.md#structsysc_1_1Dimensionality) &

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

<a id="classsysc_1_1RealAttribute_1aca13bf82aa610e0d1d29671935464795"></a>
### Function setLowerBound

![][public]


```cpp
void sysc::RealAttribute::setLowerBound(double lowerBound) noexcept
```








**Parameters**:

* double **lowerBound**

**Return type**: void

<a id="classsysc_1_1RealAttribute_1a790e1e9eba6a6f66b58482748b61ce65"></a>
### Function setUpperBound

![][public]


```cpp
void sysc::RealAttribute::setUpperBound(double upperBound) noexcept
```








**Parameters**:

* double **upperBound**

**Return type**: void

<a id="classsysc_1_1RealAttribute_1a3616565d5319070c4623ce4386e3256c"></a>
### Function hasLowerBound

![][public]
![][const]


```cpp
bool sysc::RealAttribute::hasLowerBound() const noexcept
```








**Return type**: bool

<a id="classsysc_1_1RealAttribute_1a44f6a43da73eb6cf3c80ccd3b8277457"></a>
### Function hasUpperBound

![][public]
![][const]


```cpp
bool sysc::RealAttribute::hasUpperBound() const noexcept
```








**Return type**: bool

<a id="classsysc_1_1RealAttribute_1ab2a58335646cdf0ddbecce9a0765d299"></a>
### Function getLowerBound

![][public]
![][const]


```cpp
double sysc::RealAttribute::getLowerBound() const
```








**Return type**: double

<a id="classsysc_1_1RealAttribute_1a9381854be5ac8e78ea7fdccd8d049c04"></a>
### Function getUpperBound

![][public]
![][const]


```cpp
double sysc::RealAttribute::getUpperBound() const
```








**Return type**: double

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)