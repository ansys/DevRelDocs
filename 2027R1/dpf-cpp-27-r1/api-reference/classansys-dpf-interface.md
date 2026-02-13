<a id="classansys_1_1dpf_1_1Interface"></a>
# Class ansys::dpf::Interface

![][C++]
![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 5613)

[Interface](classansys_1_1dpf_1_1Interface.md#classansys_1_1dpf_1_1Interface) specifies a set of constraints that an underlying implementation (operator or workflow) must respect.

## Members

* [\_cache\_property](classansys_1_1dpf_1_1Interface.md#classansys_1_1dpf_1_1Interface_1affc863dddc1a27ae780026c82402df49)
* [\_data](classansys_1_1dpf_1_1Interface.md#classansys_1_1dpf_1_1Interface_1af5fd6d11e90665950f007c741561d81f)
* [\_exposedInputs\_property](classansys_1_1dpf_1_1Interface.md#classansys_1_1dpf_1_1Interface_1a9c5f721cedcd11e524c997e27a625c32)
* [\_exposedOutputs\_property](classansys_1_1dpf_1_1Interface.md#classansys_1_1dpf_1_1Interface_1a6b2792174a71c603706446ad00fbe1b3)
* [\_name\_property](classansys_1_1dpf_1_1Interface.md#classansys_1_1dpf_1_1Interface_1aa68dccce48508a14ec1ea27da9239657)
* [\_optional\_property](classansys_1_1dpf_1_1Interface.md#classansys_1_1dpf_1_1Interface_1aba786c3a4352f0a036e3b5ba9e27858b)
* [get](classansys_1_1dpf_1_1Interface.md#classansys_1_1dpf_1_1Interface_1a2f04134d6869e0e2850b163098d7f60d)
* [getCacheInformation](classansys_1_1dpf_1_1Interface.md#classansys_1_1dpf_1_1Interface_1aa11f77e7c6afac065eed67320bc76152)
* [getExposedInputs](classansys_1_1dpf_1_1Interface.md#classansys_1_1dpf_1_1Interface_1ad95dea740aaabe8b28151116205d9015)
* [getExposedOutputs](classansys_1_1dpf_1_1Interface.md#classansys_1_1dpf_1_1Interface_1aae0d89447d85a705dad45f87fe5a6ddc)
* [getName](classansys_1_1dpf_1_1Interface.md#classansys_1_1dpf_1_1Interface_1aadad56bc25f8e1cfa01e776138e2a40e)
* [Interface](classansys_1_1dpf_1_1Interface.md#classansys_1_1dpf_1_1Interface_1a3f86c8753b44a5ff8ff372698a99f44f)
* [Interface](classansys_1_1dpf_1_1Interface.md#classansys_1_1dpf_1_1Interface_1ae7b77e9e0a3b3c9e0b6fb360bce69574)
* [Interface](classansys_1_1dpf_1_1Interface.md#classansys_1_1dpf_1_1Interface_1a886749ab22972009fb46b4369452b5a7)
* [isOptional](classansys_1_1dpf_1_1Interface.md#classansys_1_1dpf_1_1Interface_1a5ec662354dff0bc0c21efea29a50c135)
* [isToCache](classansys_1_1dpf_1_1Interface.md#classansys_1_1dpf_1_1Interface_1acdd838b3056830bb4e4f6beb8328d926)

## Private attributes

## Private static attributes

## Public functions

<a id="classansys_1_1dpf_1_1Interface_1a3f86c8753b44a5ff8ff372698a99f44f"></a>
### Function Interface

![][public]

```cpp
ansys::dpf::Interface::Interface()=default
```

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Interface::Interface"}]}`
-->

<a id="classansys_1_1dpf_1_1Interface_1ae7b77e9e0a3b3c9e0b6fb360bce69574"></a>
### Function Interface

![][public]

```cpp
ansys::dpf::Interface::Interface(const std::string &name, const std::vector< std::string > &exposedInputs, const std::vector< std::string > &exposedOutputs, const CacheInformation &cacheInformation=CacheInformation(), bool isOptional=false)
```

**Parameters**:

* const std::string & **name**
* const std::vector< std::string > & **exposedInputs**
* const std::vector< std::string > & **exposedOutputs**
* const [CacheInformation](classansys_1_1dpf_1_1CacheInformation.md#classansys_1_1dpf_1_1CacheInformation) & **cacheInformation** = [CacheInformation](classansys_1_1dpf_1_1CacheInformation.md#classansys_1_1dpf_1_1CacheInformation)() 
* bool **isOptional** = false 

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Interface::Interface"}]}`
-->

<a id="classansys_1_1dpf_1_1Interface_1a886749ab22972009fb46b4369452b5a7"></a>
### Function Interface

![][public]

```cpp
ansys::dpf::Interface::Interface(const DataTree &dt)
```

**Parameters**:

* const [DataTree](classansys_1_1dpf_1_1DataTree.md#classansys_1_1dpf_1_1DataTree) & **dt**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Interface::Interface"}]}`
-->

<a id="classansys_1_1dpf_1_1Interface_1aadad56bc25f8e1cfa01e776138e2a40e"></a>
### Function getName

![][public]
![][const]

```cpp
std::string ansys::dpf::Interface::getName() const noexcept
```

**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Interface::getName"}]}`
-->

<a id="classansys_1_1dpf_1_1Interface_1a2f04134d6869e0e2850b163098d7f60d"></a>
### Function get

![][public]
![][const]

```cpp
DataTree ansys::dpf::Interface::get() const
```

**Return type**: [DataTree](classansys_1_1dpf_1_1DataTree.md#classansys_1_1dpf_1_1DataTree)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Interface::get"}]}`
-->

<a id="classansys_1_1dpf_1_1Interface_1ad95dea740aaabe8b28151116205d9015"></a>
### Function getExposedInputs

![][public]
![][const]

```cpp
std::vector< std::string > ansys::dpf::Interface::getExposedInputs() const noexcept
```

**Return type**: std::vector< std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Interface::getExposedInputs"}]}`
-->

<a id="classansys_1_1dpf_1_1Interface_1aae0d89447d85a705dad45f87fe5a6ddc"></a>
### Function getExposedOutputs

![][public]
![][const]

```cpp
std::vector< std::string > ansys::dpf::Interface::getExposedOutputs() const noexcept
```

**Return type**: std::vector< std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Interface::getExposedOutputs"}]}`
-->

<a id="classansys_1_1dpf_1_1Interface_1aa11f77e7c6afac065eed67320bc76152"></a>
### Function getCacheInformation

![][public]
![][const]

```cpp
std::map< std::string, CacheInformation::LevelAndDestination > ansys::dpf::Interface::getCacheInformation() const
```

**Return type**: std::map< std::string, CacheInformation::LevelAndDestination >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Interface::getCacheInformation"}]}`
-->

<a id="classansys_1_1dpf_1_1Interface_1acdd838b3056830bb4e4f6beb8328d926"></a>
### Function isToCache

![][public]
![][const]

```cpp
bool ansys::dpf::Interface::isToCache(const std::string &pinName) const noexcept
```

**Parameters**:

* const std::string & **pinName**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Interface::isToCache"}]}`
-->

<a id="classansys_1_1dpf_1_1Interface_1a5ec662354dff0bc0c21efea29a50c135"></a>
### Function isOptional

![][public]
![][const]

```cpp
bool ansys::dpf::Interface::isOptional() const noexcept
```

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Interface::isOptional"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)