# Namespace simulation_framework::autonomy::topic_registry

![][C++]

**Definition**: `autonomy/communication/topic_registry/topic_registry.h` (line 34)





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

* "VehicleControlInputTopic" -> <code>GenericBytesTopicType</code> (uses <code>rtidds::GenericBytesMessage</code>)








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
* For the RTI-DDS message type and Topic alias, see <code>[core/communication/topic_registry.h](core_2communication_2topic__registry_8h.md

* For the C++ native <code>VariantMap</code> API and bi-directional conversion helpers, see <code>core/communication/utils/variant_map.h</code> and <code>core/communication/utils/variant_map_converter.h</code>.

5) VehicleControlInput I/O (<code>VehicleControlInputTopic</code>) 
```cpp
AddPublisher<core::Topic<rtidds::GenericBytesMessage>>(
    "VehicleControlInputTopic", [&]() {
  autonomy::communication::messages::VehicleControlInput msg;
  return autonomy::communication::utils::ConvertAutonomyMsgToGenericBytes(frame_counter, header_name, msg); //
rtidds::GenericBytesMessage
}
);

AddSubscriber<core::Topic<rtidds::GenericBytesMessage>>(
    "VehicleControlInputTopic", [&](const rtidds::GenericBytesMessage& msg) {
  autonomy::communication::messages::VehicleControlInput inputs;
  autonomy::communication::utils::ConvertGenericBytesToAutonomyMsg(msg,inputs);}
);
```

<a id="autonomy_2communication_2topic__registry_2topic__registry_8h_1abc5d170dec018a5f04fd69307316a25a"></a>
### Typedef ScenarioVariableTopicType

![][public]

**Definition**: `autonomy/communication/topic_registry/topic_registry.h` (line 136)


```cpp
using simulation_framework::autonomy::topic_registry::ScenarioVariableTopicType = typedef simulation_framework::core::topic_registry::VariantMapTopicType
```


Alias for scenario variable Topic type in Autonomy.

?> Variant message aliases

In core, <code>[rtidds::VariantMessage](namespacertidds.md#namespacertidds_1a442f59bc02e5668d37a306af1c6faacd)</code> is currently an alias of <code>rtidds::FmuMessage</code>. Similarly, <code>[rtidds::VariantData](namespacertidds.md#namespacertidds_1a5d98a2ba88abe876a19cf09c458e06e1)</code> aliases <code>rtidds::FmuData</code>, and <code>[rtidds::VariantDatatype](namespacertidds.md#namespacertidds_1ae065fe2b5abd93b78891593a53ef039b)</code> aliases <code>rtidds::FmuDatatype</code>. This provides a semantic "Variant" naming today while retaining full compatibility with FMU message structure. If dedicated Variant types are introduced in the future, these aliases can be updated centrally. 
Maps to <code>simulation_framework::core::topic_registry::VariantMapTopicType</code> which uses <code>rtidds::VariantMap</code> as the underlying RTI-DDS message. 
**See also**: [core/communication/topic_registry.h](core_2communication_2topic__registry_8h.md



**Return type**: [simulation_framework::core::topic_registry::VariantMapTopicType](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

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

* **topic_id**: One of: "KpiLoggerTopic", "DriverInputTopic", "SensorViewTopic", "SensorDataTopic", "TrafficUpdateTopic", "TrafficCommandTopic", "MotionRequestTopic", "FmuInput", "FmuOutput", "ScenarioVariableTopic", "VehicleControlInputTopic".


**Returns**:

A <code>std::shared_ptr<[core::ITopic](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic)></code> of the appropriate concrete Topic type, or <code>nullptr</code> if the ID is not recognized.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string & **topic_id**

**Return type**: std::shared_ptr< [core::ITopic](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::topic_registry::GetExistingTopicById"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)