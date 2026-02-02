# Structure simulation_framework::core::lifecycle::FmuConfig

![][C++]
![][public]

**Definition**: `core/lifecycle/fmu_activity/fmu_config.h` (line 32)

A helper struct to pass necessary information to create [FmuBaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity).

**See also**: [FmuBaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity)

## Members

* [message_to_var_name](structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig.md#structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig_1a4ef56beea7ad1e6fd2a4cd5ea946a5b4)
* [MessageType](structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig.md#structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig_1a5b7524bfcab172e0d161c88aec679232)
* [path](structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig.md#structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig_1a3ce88d8094180550abc85335f25ef154)
* [topic_to_message_type](structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig.md#structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig_1aa9811f8dd43a6451679082273223883e)
* [topics_to_init_params](structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig.md#structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig_1a8868da8c0ec4e6245a2ae2c0e8fcd4f0)
* [topics_to_inputs](structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig.md#structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig_1ae9a0cf231b10adcf4c58faa184549895)
* [topics_to_outputs](structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig.md#structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig_1a939d9a485202244d144f22c4335d376d)
* [var_to_message_name](structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig.md#structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig_1ac92f7f1e13f5722988ddcba3a63dff28)

## Public types

<a id="structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig_1a5b7524bfcab172e0d161c88aec679232"></a>
### Enumeration type MessageType

![][public]

**Definition**: `core/lifecycle/fmu_activity/fmu_config.h` (line 34)


```cpp
enum MessageType {
  kFmuMessage,
  kGenericBytesMessage
}
```








<a id="structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig_1a5b7524bfcab172e0d161c88aec679232aa34d479d4dc2fa62e3fa7c8f58d2f998"></a>
#### Enumerator kFmuMessage





<a id="structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig_1a5b7524bfcab172e0d161c88aec679232a65ca5a1a8b3417b8294240f3ba50712b"></a>
#### Enumerator kGenericBytesMessage





<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuConfig::MessageType"}]}`
-->

## Public attributes

<a id="structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig_1a3ce88d8094180550abc85335f25ef154"></a>
### Variable path

![][public]

**Definition**: `core/lifecycle/fmu_activity/fmu_config.h` (line 41)


```cpp
std::string simulation_framework::core::lifecycle::FmuConfig::path
```


The path to the FMU file.





**Type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuConfig::path"}]}`
-->

<a id="structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig_1ae9a0cf231b10adcf4c58faa184549895"></a>
### Variable topics_to_inputs

![][public]

**Definition**: `core/lifecycle/fmu_activity/fmu_config.h` (line 44)


```cpp
FmuTopicToVarNames simulation_framework::core::lifecycle::FmuConfig::topics_to_inputs {}
```


A map where the keys are input topics and the values are names of FMU variable are sent over that topic.





**Type**: FmuTopicToVarNames

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuConfig::topics_to_inputs"}]}`
-->

<a id="structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig_1a8868da8c0ec4e6245a2ae2c0e8fcd4f0"></a>
### Variable topics_to_init_params

![][public]

**Definition**: `core/lifecycle/fmu_activity/fmu_config.h` (line 48)


```cpp
FmuTopicToVarNames simulation_framework::core::lifecycle::FmuConfig::topics_to_init_params {}
```


A map where the keys are init param topics and the values are names of FMU variable initialized with that topic.





**Type**: FmuTopicToVarNames

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuConfig::topics_to_init_params"}]}`
-->

<a id="structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig_1a939d9a485202244d144f22c4335d376d"></a>
### Variable topics_to_outputs

![][public]

**Definition**: `core/lifecycle/fmu_activity/fmu_config.h` (line 51)


```cpp
FmuTopicToVarNames simulation_framework::core::lifecycle::FmuConfig::topics_to_outputs {}
```


A map where the keys are output topics and the values are names of FMU variable are sent over that topic.





**Type**: FmuTopicToVarNames

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuConfig::topics_to_outputs"}]}`
-->

<a id="structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig_1a4ef56beea7ad1e6fd2a4cd5ea946a5b4"></a>
### Variable message_to_var_name

![][public]

**Definition**: `core/lifecycle/fmu_activity/fmu_config.h` (line 56)


```cpp
FmuMessageToVarNames simulation_framework::core::lifecycle::FmuConfig::message_to_var_name {}
```


A map used to coordinate variable names between the rtidds::FmuMessage and the FMU variable names.

This is needed when connecting multiple FMUs when the FMU variable names do not match between the inputs of one FMU and the outputs of another FMU. This is the opposite mapping of <code>var_to_message_name</code>.



**Type**: FmuMessageToVarNames

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuConfig::message_to_var_name"}]}`
-->

<a id="structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig_1ac92f7f1e13f5722988ddcba3a63dff28"></a>
### Variable var_to_message_name

![][public]

**Definition**: `core/lifecycle/fmu_activity/fmu_config.h` (line 61)


```cpp
FmuVarToMessageNames simulation_framework::core::lifecycle::FmuConfig::var_to_message_name {}
```


A map used to coordinate variable names between the FMU variable names and the rtidds::FmuMessage.

This is needed for connecting multiple FMUs when the FMU variable names do not match between the inputs of one FMU and the outputs of another FMU. This is the opposite mapping of <code>message_to_var_name</code>.



**Type**: FmuVarToMessageNames

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuConfig::var_to_message_name"}]}`
-->

<a id="structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig_1aa9811f8dd43a6451679082273223883e"></a>
### Variable topic_to_message_type

![][public]

**Definition**: `core/lifecycle/fmu_activity/fmu_config.h` (line 64)


```cpp
std::map<std::string, MessageType> simulation_framework::core::lifecycle::FmuConfig::topic_to_message_type {}
```


A map used to store the message type for each topic.





**Type**: std::map< std::string, MessageType >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuConfig::topic_to_message_type"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)