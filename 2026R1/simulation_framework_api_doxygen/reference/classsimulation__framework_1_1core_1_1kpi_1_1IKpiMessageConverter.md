# Class simulation_framework::core::kpi::IKpiMessageConverter

![][C++]
![][public]

**Definition**: `core/kpi/kpi_message_converter/i_kpi_message_converter.h` (line 28)

Interface for converting KPI messages between different formats.

The <code>[IKpiMessageConverter](classsimulation__framework_1_1core_1_1kpi_1_1IKpiMessageConverter.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpiMessageConverter)</code> interface provides methods to transform <code>KpiMessage</code> objects into other message types (e.g., DDS messages) and decode them back. This is useful for communication and interoperability between systems. 


**See also**: KpiMessage, rtidds::KpiMessage

**Inherited by**:

* [simulation_framework::core::kpi::KpiMessageConverter](classsimulation__framework_1_1core_1_1kpi_1_1KpiMessageConverter.md#classsimulation__framework_1_1core_1_1kpi_1_1KpiMessageConverter)

## Members

* [ConvertToDds](classsimulation__framework_1_1core_1_1kpi_1_1IKpiMessageConverter.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpiMessageConverter_1a699c2d4c5a9988817af01cc45b70f311)
* [DecodeFromDds](classsimulation__framework_1_1core_1_1kpi_1_1IKpiMessageConverter.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpiMessageConverter_1a561068ec047f83b66d3cea126d012851)
* [~IKpiMessageConverter](classsimulation__framework_1_1core_1_1kpi_1_1IKpiMessageConverter.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpiMessageConverter_1af54431daceb2d5ef852cba9bf59317d9)

## Public functions

<a id="classsimulation__framework_1_1core_1_1kpi_1_1IKpiMessageConverter_1af54431daceb2d5ef852cba9bf59317d9"></a>
### Function ~IKpiMessageConverter

![][public]


```cpp
virtual simulation_framework::core::kpi::IKpiMessageConverter::~IKpiMessageConverter()=default
```


Virtual destructor for proper cleanup of derived classes.





**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::IKpiMessageConverter::~IKpiMessageConverter"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1kpi_1_1IKpiMessageConverter_1a699c2d4c5a9988817af01cc45b70f311"></a>
### Function ConvertToDds

![][public]


```cpp
virtual rtidds::KpiMessage simulation_framework::core::kpi::IKpiMessageConverter::ConvertToDds(const KpiMessage &kpi_msgs)=0
```


Converts a <code>KpiMessage</code> to a DDS-specific message format.

**Parameters**:

* **kpi_msgs**: The <code>KpiMessage</code> object to convert.


**Returns**:

The converted <code>rtidds::KpiMessage</code> object.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) KpiMessage & **kpi_msgs**

**Return type**: rtidds::KpiMessage

**Reimplemented by**:

* [ConvertToDds](classsimulation__framework_1_1core_1_1kpi_1_1KpiMessageConverter.md#classsimulation__framework_1_1core_1_1kpi_1_1KpiMessageConverter_1a89ef06109941dddab49e4f134858ff9e)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::IKpiMessageConverter::ConvertToDds"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1kpi_1_1IKpiMessageConverter_1a561068ec047f83b66d3cea126d012851"></a>
### Function DecodeFromDds

![][public]


```cpp
virtual KpiMessage simulation_framework::core::kpi::IKpiMessageConverter::DecodeFromDds(const rtidds::KpiMessage &kpi_msgs)=0
```


Decodes a DDS-specific message into a <code>KpiMessage</code>.

**Parameters**:

* **kpi_msgs**: The <code>rtidds::KpiMessage</code> to decode.


**Returns**:

The decoded <code>KpiMessage</code> object.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) rtidds::KpiMessage & **kpi_msgs**

**Return type**: KpiMessage

**Reimplemented by**:

* [DecodeFromDds](classsimulation__framework_1_1core_1_1kpi_1_1KpiMessageConverter.md#classsimulation__framework_1_1core_1_1kpi_1_1KpiMessageConverter_1a2ebb41223306f090d84657aeb770cbd8)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::kpi::IKpiMessageConverter::DecodeFromDds"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"i__kpi__message__converter_8h"},"children":[{"type":"text","text":"i_kpi_message_converter.h"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)