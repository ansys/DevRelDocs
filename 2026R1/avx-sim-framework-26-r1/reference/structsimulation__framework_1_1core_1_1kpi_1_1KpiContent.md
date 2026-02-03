# Structure simulation_framework::core::kpi::KpiContent

![][C++]
![][public]

**Definition**: `core/kpi/definition/kpi_definition.h` (line 67)

struct [KpiContent](structsimulation__framework_1_1core_1_1kpi_1_1KpiContent.md#structsimulation__framework_1_1core_1_1kpi_1_1KpiContent)

[KpiContent](structsimulation__framework_1_1core_1_1kpi_1_1KpiContent.md#structsimulation__framework_1_1core_1_1kpi_1_1KpiContent) defines the basic data structure where one KPI value can be stored.

## Members

* [data_type](structsimulation__framework_1_1core_1_1kpi_1_1KpiContent.md#structsimulation__framework_1_1core_1_1kpi_1_1KpiContent_1a4e2c56824798e6d55c9062552059d1bd)
* [name](structsimulation__framework_1_1core_1_1kpi_1_1KpiContent.md#structsimulation__framework_1_1core_1_1kpi_1_1KpiContent_1a19f476823880c2ce9f0b54bec0553410)
* [timestamp](structsimulation__framework_1_1core_1_1kpi_1_1KpiContent.md#structsimulation__framework_1_1core_1_1kpi_1_1KpiContent_1a73325646ec9fb7f492a862661dacb6c5)
* [type](structsimulation__framework_1_1core_1_1kpi_1_1KpiContent.md#structsimulation__framework_1_1core_1_1kpi_1_1KpiContent_1a2c9ab36a6b5e02f52ea9faa9ba7eed73)
* [unit](structsimulation__framework_1_1core_1_1kpi_1_1KpiContent.md#structsimulation__framework_1_1core_1_1kpi_1_1KpiContent_1a19b45ebebdf32046936fd03eb4576989)
* [value](structsimulation__framework_1_1core_1_1kpi_1_1KpiContent.md#structsimulation__framework_1_1core_1_1kpi_1_1KpiContent_1a3e00b46acd4f898e02d3045b52d5bdbc)

## Public attributes

<a id="structsimulation__framework_1_1core_1_1kpi_1_1KpiContent_1a73325646ec9fb7f492a862661dacb6c5"></a>
### Variable timestamp

![][public]

**Definition**: `core/kpi/definition/kpi_definition.h` (line 69)


```cpp
core::time::Timestamp simulation_framework::core::kpi::KpiContent::timestamp
```








**Type**: core::time::Timestamp

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::KpiContent::timestamp"}]}`
-->

<a id="structsimulation__framework_1_1core_1_1kpi_1_1KpiContent_1a19f476823880c2ce9f0b54bec0553410"></a>
### Variable name

![][public]

**Definition**: `core/kpi/definition/kpi_definition.h` (line 70)


```cpp
std::string simulation_framework::core::kpi::KpiContent::name
```








**Type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::KpiContent::name"}]}`
-->

<a id="structsimulation__framework_1_1core_1_1kpi_1_1KpiContent_1a4e2c56824798e6d55c9062552059d1bd"></a>
### Variable data_type

![][public]

**Definition**: `core/kpi/definition/kpi_definition.h` (line 73)


```cpp
Datatype simulation_framework::core::kpi::KpiContent::data_type
```




?> data_type, value and unit are all defined in string, so that different KPI could be logged into different formats with more freedom



**Type**: Datatype

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::KpiContent::data_type"}]}`
-->

<a id="structsimulation__framework_1_1core_1_1kpi_1_1KpiContent_1a3e00b46acd4f898e02d3045b52d5bdbc"></a>
### Variable value

![][public]

**Definition**: `core/kpi/definition/kpi_definition.h` (line 74)


```cpp
std::string simulation_framework::core::kpi::KpiContent::value
```








**Type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::KpiContent::value"}]}`
-->

<a id="structsimulation__framework_1_1core_1_1kpi_1_1KpiContent_1a19b45ebebdf32046936fd03eb4576989"></a>
### Variable unit

![][public]

**Definition**: `core/kpi/definition/kpi_definition.h` (line 75)


```cpp
std::string simulation_framework::core::kpi::KpiContent::unit
```








**Type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::KpiContent::unit"}]}`
-->

<a id="structsimulation__framework_1_1core_1_1kpi_1_1KpiContent_1a2c9ab36a6b5e02f52ea9faa9ba7eed73"></a>
### Variable type

![][public]

**Definition**: `core/kpi/definition/kpi_definition.h` (line 76)


```cpp
Type simulation_framework::core::kpi::KpiContent::type
```








**Type**: Type

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::KpiContent::type"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)