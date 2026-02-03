# Class simulation_framework::core::kpi::Datatype

![][C++]
![][public]

**Definition**: `core/kpi/definition/kpi_definition.h` (line 32)





## Members

* [Datatype](classsimulation__framework_1_1core_1_1kpi_1_1Datatype.md#classsimulation__framework_1_1core_1_1kpi_1_1Datatype_1a5e7dfd9dc099a2a02096b46d3e287249)
* [Datatype](classsimulation__framework_1_1core_1_1kpi_1_1Datatype.md#classsimulation__framework_1_1core_1_1kpi_1_1Datatype_1aed5261be1380c64c1d3c758697fd946e)
* [Datatype](classsimulation__framework_1_1core_1_1kpi_1_1Datatype.md#classsimulation__framework_1_1core_1_1kpi_1_1Datatype_1ab2cafeb4549b893014be3dcd0cdf1e6d)
* [FromString](classsimulation__framework_1_1core_1_1kpi_1_1Datatype.md#classsimulation__framework_1_1core_1_1kpi_1_1Datatype_1abba602ae17c98e1bb12c3ac29148c56f)
* [operator Value](classsimulation__framework_1_1core_1_1kpi_1_1Datatype.md#classsimulation__framework_1_1core_1_1kpi_1_1Datatype_1a8759e64a51bdfce7d3060f634066d519)
* [operator==](classsimulation__framework_1_1core_1_1kpi_1_1Datatype.md#classsimulation__framework_1_1core_1_1kpi_1_1Datatype_1a3d785be16a1608f79fcdb9d5add8b136)
* [ToString](classsimulation__framework_1_1core_1_1kpi_1_1Datatype.md#classsimulation__framework_1_1core_1_1kpi_1_1Datatype_1a38259bca11339cce1a9174bcdd0a19ec)
* [Value](classsimulation__framework_1_1core_1_1kpi_1_1Datatype.md#classsimulation__framework_1_1core_1_1kpi_1_1Datatype_1a8e5ae86a5a1e5379617e5a6fc39d0bea)
* [~Datatype](classsimulation__framework_1_1core_1_1kpi_1_1Datatype.md#classsimulation__framework_1_1core_1_1kpi_1_1Datatype_1a8ed281e5a363b6554fea3a1dc5edd691)

## Public types

<a id="classsimulation__framework_1_1core_1_1kpi_1_1Datatype_1a8e5ae86a5a1e5379617e5a6fc39d0bea"></a>
### Enumeration type Value

![][public]

**Definition**: `core/kpi/definition/kpi_definition.h` (line 35)


```cpp
enum Value {
  kDouble = 0,
  kInteger,
  kString,
  kBoolean,
  kJson,
  kOther
}
```








<a id="classsimulation__framework_1_1core_1_1kpi_1_1Datatype_1a8e5ae86a5a1e5379617e5a6fc39d0beaa7fb3efa35444cd88d5a31dc125ca9c28"></a>
#### Enumerator kDouble

Datatype of this KPI.



<a id="classsimulation__framework_1_1core_1_1kpi_1_1Datatype_1a8e5ae86a5a1e5379617e5a6fc39d0beaab7400e777db61f5f726caeeab0a7dcc2"></a>
#### Enumerator kInteger





<a id="classsimulation__framework_1_1core_1_1kpi_1_1Datatype_1a8e5ae86a5a1e5379617e5a6fc39d0beaa302e56d566a2561033b27c13680ea4b2"></a>
#### Enumerator kString





<a id="classsimulation__framework_1_1core_1_1kpi_1_1Datatype_1a8e5ae86a5a1e5379617e5a6fc39d0beaa57f58630ea0106aa965e5bf61a49d02c"></a>
#### Enumerator kBoolean





<a id="classsimulation__framework_1_1core_1_1kpi_1_1Datatype_1a8e5ae86a5a1e5379617e5a6fc39d0beaa319f3b99b8d96c21e2f6b7ebc6fe8d8f"></a>
#### Enumerator kJson





<a id="classsimulation__framework_1_1core_1_1kpi_1_1Datatype_1a8e5ae86a5a1e5379617e5a6fc39d0beaa341b8a8f03cf33821c46aa5c3aad4b7a"></a>
#### Enumerator kOther





<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::Datatype::Value"}]}`
-->

## Public functions

<a id="classsimulation__framework_1_1core_1_1kpi_1_1Datatype_1a5e7dfd9dc099a2a02096b46d3e287249"></a>
### Function Datatype

![][public]


```cpp
simulation_framework::core::kpi::Datatype::Datatype()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::Datatype::Datatype"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1kpi_1_1Datatype_1aed5261be1380c64c1d3c758697fd946e"></a>
### Function Datatype

![][public]


```cpp
simulation_framework::core::kpi::Datatype::Datatype(Value value)
```








**Parameters**:

* Value **value**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::Datatype::Datatype"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1kpi_1_1Datatype_1ab2cafeb4549b893014be3dcd0cdf1e6d"></a>
### Function Datatype

![][public]


```cpp
simulation_framework::core::kpi::Datatype::Datatype(const std::string &value_string)
```








**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string & **value_string**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::Datatype::Datatype"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1kpi_1_1Datatype_1a8ed281e5a363b6554fea3a1dc5edd691"></a>
### Function ~Datatype

![][public]


```cpp
simulation_framework::core::kpi::Datatype::~Datatype()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::Datatype::~Datatype"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1kpi_1_1Datatype_1a8759e64a51bdfce7d3060f634066d519"></a>
### Function operator Value

![][public]
![][const]


```cpp
simulation_framework::core::kpi::Datatype::operator Value() const
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::Datatype::operator Value"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1kpi_1_1Datatype_1a38259bca11339cce1a9174bcdd0a19ec"></a>
### Function ToString

![][public]
![][const]


```cpp
std::string simulation_framework::core::kpi::Datatype::ToString() const noexcept
```








**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::Datatype::ToString"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1kpi_1_1Datatype_1abba602ae17c98e1bb12c3ac29148c56f"></a>
### Function FromString

![][public]


```cpp
void simulation_framework::core::kpi::Datatype::FromString(const std::string &value_string) noexcept
```








**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string & **value_string**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::Datatype::FromString"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1kpi_1_1Datatype_1a3d785be16a1608f79fcdb9d5add8b136"></a>
### Function operator==

![][public]
![][const]


```cpp
bool simulation_framework::core::kpi::Datatype::operator==(Datatype other) const
```








**Parameters**:

* Datatype **other**

**Return type**: [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::Datatype::operator=="}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)