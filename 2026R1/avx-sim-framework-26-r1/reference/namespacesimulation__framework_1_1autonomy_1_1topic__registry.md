<a id="namespacesimulation__framework_1_1autonomy_1_1topic__registry"></a>
# Namespace simulation\_framework::autonomy::topic\_registry

![][C++]

#include: <topic_registry.h>





## Autonomy Topic IDs and their Topic types (RTI-DDS backed)

Use these Topic types when adding publishers/subscribers for the listed IDs.






* "KpiLoggerTopic" -> <code>KpiMessageTopicType</code> (uses <code>rtidds::KpiMessage</code>)

* "DriverInputTopic" -> <code>KpiMessageTopicType</code> (uses <code>rtidds::KpiMessage</code>)

* "SensorViewTopic" -> <code>GenericBytesTopicType</code> (uses <code>rtidds::GenericBytesMessage</code>)

* "SensorDataTopic" -> <code>GenericBytesTopicType</code> (uses <code>rtidds::GenericBytesMessage</code>)

* "TrafficUpdateTopic" -> <code>GenericBytesTopicType</code> (uses <code>rtidds::GenericBytesMessage</code>)

* "TrafficCommandTopic" -> <code>GenericBytesTopicType</code> (uses <code>rtidds::GenericBytesMessage</code>)

* "MotionRequestTopic" -> <code>GenericBytesTopicType</code> (uses <code>rtidds::GenericBytesMessage</code>)

* "FmuInput" -> <code>FmuMessageTopicType</code> (uses <code>rtidds::FmuMessage</code>)

* "FmuOutput" -> <code>FmuMessageTopicType</code> (uses <code>rtidds::FmuMessage</code>)

* "ScenarioVariableTopic" -> <code>VariantMapTopicType</code> (uses <code>rtidds::VariantMap</code>)








**Examples**:

1) KPI (<code>KpiMessageTopicType</code>) 
```cpp
// Publish to KPI logger
AddPublisher<core::topic_registry::KpiMessageTopicType>(
    "KpiLoggerTopic", [&]() { return kpi_msg_; }  // rtidds::KpiMessage kpi_msg_;
);
// Subscribe driver input
AddSubscriber<core::topic_registry::KpiMessageTopicType>(
    "DriverInputTopic", [&](const rtidds::KpiMessage& msg) { HandleDriverInput(msg); }
);
```

2) Generic bytes (<code>GenericBytesTopicType</code>) for serialized payloads (e.g., protobuf/OSI) 
```cpp
AddPublisher<core::topic_registry::GenericBytesTopicType>(
    "SensorDataTopic", [&]() { return bytes_msg_; }  // rtidds::GenericBytesMessage bytes_msg_;
);
// Fill bytes_msg_ with serialized data; see communication.md for details
AddSubscriber<core::topic_registry::GenericBytesTopicType>(
    "SensorViewTopic", [&](const rtidds::GenericBytesMessage& msg) { ParseAndUse(msg); }
);
```






3) FMU I/O (<code>FmuMessageTopicType</code>) 
```cpp
AddPublisher<core::topic_registry::FmuMessageTopicType>(
    "FmuInput", [&]() { return fmu_msg_; }  // rtidds::FmuMessage fmu_msg_;
);
AddSubscriber<core::topic_registry::FmuMessageTopicType>(
    "FmuOutput", [&](const rtidds::FmuMessage& msg) { HandleFmuOutputs(msg); }
);
```






4) Scenario variables (<code>VariantMapTopicType</code>) 
```cpp
AddPublisher<core::topic_registry::VariantMapTopicType>(
    "ScenarioVariableTopic", [&]() { return var_map_msg_; }  // rtidds::VariantMap var_map_msg_;
);
AddSubscriber<core::topic_registry::VariantMapTopicType>(
    "ScenarioVariableTopic", [&](const rtidds::VariantMap& msg) { ApplyScenarioVariables(msg); }
);
```







?> VariantMap references
* For the RTI-DDS message type and Topic alias, see <code>[core/communication/topic\_registry.h](core_2communication_2topic__registry_8h_source.md#core_2communication_2topic__registry_8h_source)</code>.

* For the C++ native <code>VariantMap</code> API and bi-directional conversion helpers, see <code>core/communication/utils/variant_map.h</code> and <code>core/communication/utils/variant_map_converter.h</code>.

<a id="autonomy_2communication_2topic__registry_2topic__registry_8h_1a26a786b44e80d8a6b2ba42ba4b689554"></a>
### Typedef ScenarioVariableTopicType

![][public]

#include: <topic_registry.h>


```cpp
using simulation_framework::autonomy::topic_registry::ScenarioVariableTopicType =  simulation_framework::core::topic_registry::VariantMapTopicType
```


Alias for scenario variable Topic type in Autonomy.

?> Variant message aliases

In core, <code>[rtidds::VariantMessage](namespacertidds.md#namespacertidds_1ac35b14c276cd5d698f53163f30132293)</code> is currently an alias of <code>rtidds::FmuMessage</code>. Similarly, <code>[rtidds::VariantData](namespacertidds.md#namespacertidds_1aae35e1634347f425630b55b8e956864d)</code> aliases <code>rtidds::FmuData</code>, and <code>[rtidds::VariantDatatype](namespacertidds.md#namespacertidds_1a4641aa3b5d2f6aa988504f083bb15126)</code> aliases <code>rtidds::FmuDatatype</code>. This provides a semantic "Variant" naming today while retaining full compatibility with FMU message structure. If dedicated Variant types are introduced in the future, these aliases can be updated centrally. 
Maps to <code>simulation_framework::core::topic_registry::VariantMapTopicType</code> which uses <code>rtidds::VariantMap</code> as the underlying RTI-DDS message. 
**See also**: [core/communication/topic\_registry.h](core_2communication_2topic__registry_8h_source.md#core_2communication_2topic__registry_8h_source)



**Return type**: [simulation\_framework::core::topic\_registry::VariantMapTopicType](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::topic_registry::ScenarioVariableTopicType"}]}`
-->

<a id="autonomy_2communication_2topic__registry_2topic__registry_8h_1a7e5a96139f19e44af79116bc58dd0341"></a>
### Function GetExistingTopicById

![][public]


```cpp
std::shared_ptr< core::ITopic > simulation_framework::autonomy::topic_registry::GetExistingTopicById(const std::string &topic_id)
```


Return a concrete Topic instance for a known Autonomy Topic ID.

**Parameters**:

* **topic_id**: One of: "KpiLoggerTopic", "DriverInputTopic", "SensorViewTopic", "SensorDataTopic", "TrafficUpdateTopic", "TrafficCommandTopic", "MotionRequestTopic", "FmuInput", "FmuOutput", "ScenarioVariableTopic".


**Returns**:

A <code>std::shared_ptr<[core::ITopic](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic)></code> of the appropriate concrete Topic type, or <code>nullptr</code> if the ID is not recognized.



**Parameters**:

* const std::string & **topic_id**

**Return type**: std::shared_ptr< [core::ITopic](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::topic_registry::GetExistingTopicById"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)