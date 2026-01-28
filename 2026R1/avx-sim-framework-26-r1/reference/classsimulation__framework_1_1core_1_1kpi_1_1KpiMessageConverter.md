<a id="classsimulation__framework_1_1core_1_1kpi_1_1KpiMessageConverter"></a>
# Class simulation\_framework::core::kpi::KpiMessageConverter

![][C++]
![][public]

#include: <[kpi_message_converter.h](kpi__message__converter_8h.md#kpi__message__converter_8h)>

class [KpiMessageConverter](classsimulation__framework_1_1core_1_1kpi_1_1KpiMessageConverter.md#classsimulation__framework_1_1core_1_1kpi_1_1KpiMessageConverter)

Implementation to convert KpiMessage struct into DDS type kpi message so that the msg can be published through DDS network

**Inherits from**:

* [simulation\_framework::core::kpi::IKpiMessageConverter](classsimulation__framework_1_1core_1_1kpi_1_1IKpiMessageConverter.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpiMessageConverter)

## Members

* [ConvertToDds](classsimulation__framework_1_1core_1_1kpi_1_1KpiMessageConverter.md#classsimulation__framework_1_1core_1_1kpi_1_1KpiMessageConverter_1a89ef06109941dddab49e4f134858ff9e)
* [DecodeFromDds](classsimulation__framework_1_1core_1_1kpi_1_1KpiMessageConverter.md#classsimulation__framework_1_1core_1_1kpi_1_1KpiMessageConverter_1a2ebb41223306f090d84657aeb770cbd8)
* [~IKpiMessageConverter](classsimulation__framework_1_1core_1_1kpi_1_1IKpiMessageConverter.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpiMessageConverter_1af54431daceb2d5ef852cba9bf59317d9)

## Public functions

<a id="classsimulation__framework_1_1core_1_1kpi_1_1KpiMessageConverter_1a89ef06109941dddab49e4f134858ff9e"></a>
### Function ConvertToDds

![][public]


```cpp
rtidds::KpiMessage simulation_framework::core::kpi::KpiMessageConverter::ConvertToDds(const KpiMessage &kpi_msgs) override
```


Converts a <code>KpiMessage</code> to a DDS-specific message format.

**Parameters**:

* **kpi_msgs**: The <code>KpiMessage</code> object to convert.


**Returns**:

The converted <code>rtidds::KpiMessage</code> object.



**Parameters**:

* const KpiMessage & **kpi_msgs**

**Return type**: rtidds::KpiMessage

**Reimplements**: [ConvertToDds](classsimulation__framework_1_1core_1_1kpi_1_1IKpiMessageConverter.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpiMessageConverter_1a699c2d4c5a9988817af01cc45b70f311)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::KpiMessageConverter::ConvertToDds"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1kpi_1_1KpiMessageConverter_1a2ebb41223306f090d84657aeb770cbd8"></a>
### Function DecodeFromDds

![][public]


```cpp
KpiMessage simulation_framework::core::kpi::KpiMessageConverter::DecodeFromDds(const rtidds::KpiMessage &kpi_msgs) override
```


Decodes a DDS-specific message into a <code>KpiMessage</code>.

**Parameters**:

* **kpi_msgs**: The <code>rtidds::KpiMessage</code> to decode.


**Returns**:

The decoded <code>KpiMessage</code> object.



**Parameters**:

* const rtidds::KpiMessage & **kpi_msgs**

**Return type**: KpiMessage

**Reimplements**: [DecodeFromDds](classsimulation__framework_1_1core_1_1kpi_1_1IKpiMessageConverter.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpiMessageConverter_1a561068ec047f83b66d3cea126d012851)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::KpiMessageConverter::DecodeFromDds"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"kpi__message__converter_8h"},"children":[{"type":"text","text":"kpi_message_converter.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)