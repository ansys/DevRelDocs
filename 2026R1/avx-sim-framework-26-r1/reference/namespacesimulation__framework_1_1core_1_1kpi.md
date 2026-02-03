# Namespace simulation_framework::core::kpi

![][C++]

**Definition**: `core/kpi/kpi_message_converter/kpi_message_converter.h` (line 18)





## Classes

* [simulation_framework::core::kpi::Datatype](classsimulation__framework_1_1core_1_1kpi_1_1Datatype.md#classsimulation__framework_1_1core_1_1kpi_1_1Datatype)
* [simulation_framework::core::kpi::IKpi](classsimulation__framework_1_1core_1_1kpi_1_1IKpi.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpi)
* [simulation_framework::core::kpi::IKpiMessageConverter](classsimulation__framework_1_1core_1_1kpi_1_1IKpiMessageConverter.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpiMessageConverter)
* [simulation_framework::core::kpi::KpiContent](structsimulation__framework_1_1core_1_1kpi_1_1KpiContent.md#structsimulation__framework_1_1core_1_1kpi_1_1KpiContent)
* [simulation_framework::core::kpi::KpiMessageConverter](classsimulation__framework_1_1core_1_1kpi_1_1KpiMessageConverter.md#classsimulation__framework_1_1core_1_1kpi_1_1KpiMessageConverter)

## Enumeration types

<a id="kpi__definition_8h_1adade5b8284e150d681b5618eb2d7a2e8"></a>
### Enumeration type Type

![][public]

**Definition**: `core/kpi/definition/kpi_definition.h` (line 23)


```cpp
enum Type {
  kScalar = 0,
  kTimeSeries,
  kLog,
  kOther
}
```








<a id="kpi__definition_8h_1adade5b8284e150d681b5618eb2d7a2e8ad84b20d8e2277928cd3c2efeef3a302b"></a>
#### Enumerator kScalar

Type of this KPI, this affects how the KPI should be logged.

kScalar: The KPI is scalar value with unit

<a id="kpi__definition_8h_1adade5b8284e150d681b5618eb2d7a2e8a6924d0ba6199974f7267f213066b4069"></a>
#### Enumerator kTimeSeries

kTimeSeries: The KPI is a time serie



<a id="kpi__definition_8h_1adade5b8284e150d681b5618eb2d7a2e8af7971cffe1eeab35748c8d08e50703ec"></a>
#### Enumerator kLog

kLog: The KPI is a continuous log



<a id="kpi__definition_8h_1adade5b8284e150d681b5618eb2d7a2e8a341b8a8f03cf33821c46aa5c3aad4b7a"></a>
#### Enumerator kOther

kOther: Other type of KPI



<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::Type"}]}`
-->

## Typedefs

<a id="kpi__definition_8h_1a1cab1b867d784412904244d649583679"></a>
### Typedef KpiMessage

![][public]

**Definition**: `core/kpi/definition/kpi_definition.h` (line 90)


```cpp
using simulation_framework::core::kpi::KpiMessage = typedef std::vector<KpiContent>
```


C++ type definition: KpiMessage is a vector of [KpiContent](structsimulation__framework_1_1core_1_1kpi_1_1KpiContent.md#structsimulation__framework_1_1core_1_1kpi_1_1KpiContent). This is native C++ type and it can be converted into DDS message type rtidds::KpiMessage using converter evaluator/kpi/kpi_message_converter/kpi_message_converter.h. Message published into KpiLoggerTopic will be captured by default <code>KpiLoggerActivity</code> and each extra KPI content will be logged into the output json as additional value of complete KPI results.





**Return type**: std::vector< [KpiContent](structsimulation__framework_1_1core_1_1kpi_1_1KpiContent.md#structsimulation__framework_1_1core_1_1kpi_1_1KpiContent) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::KpiMessage"}]}`
-->

## Functions

<a id="kpi__definition_8h_1a5592166abd473357a83880a8b4cd68c4"></a>
### Function operator==

![][public]


```cpp
bool simulation_framework::core::kpi::operator==(const core::kpi::KpiContent &lhs, const core::kpi::KpiContent &rhs)
```








**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [core::kpi::KpiContent](structsimulation__framework_1_1core_1_1kpi_1_1KpiContent.md#structsimulation__framework_1_1core_1_1kpi_1_1KpiContent) & **lhs**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [core::kpi::KpiContent](structsimulation__framework_1_1core_1_1kpi_1_1KpiContent.md#structsimulation__framework_1_1core_1_1kpi_1_1KpiContent) & **rhs**

**Return type**: [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::operator=="}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)