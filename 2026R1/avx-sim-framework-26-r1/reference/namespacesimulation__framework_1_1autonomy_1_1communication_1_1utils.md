# Namespace simulation_framework::autonomy::communication::utils

![][C++]

**Definition**: `autonomy/communication/utils/osi_to_dds_converter.h` (line 16)





## Functions

<a id="osi__to__dds__converter_8h_1ae82f0d1c345a05db16e2203ab801fa13"></a>
### Function CreateDdsMessageFromOsiProto

![][public]


```cpp
rtidds::GenericBytesMessage simulation_framework::autonomy::communication::utils::CreateDdsMessageFromOsiProto(const int frame_counter, const std::string &header_name, const OsiProtoType &osi_proto_msg)
```


Converts an OSI proto message to a DDS GenericBytesMessage.

`parameterlist {"type":"element","name":"parameterlist","attributes":{"kind":"templateparam"},"children":[{"type":"element","name":"parameteritem","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"parameternamelist","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"parametername","attributes":{},"children":[{"type":"text","text":"OsiProtoType"}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"element","name":"parameterdescription","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"The OSI proto message type (e.g., osi3::SensorView, osi3::SensorData, osi3::TrafficUpdate) "}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"}]}`


**Parameters**:

* **frame_counter**: The frame counter for the message
* **header_name**: The header name to use for the DDS message (e.g., "SensorView", "SensorData", "TrafficUpdate", "MotionRequest")
* **osi_proto_msg**: The OSI proto message to convert


**Returns**:

A GenericBytesMessage containing the serialized OSI proto message


?> The OsiProtoType must have:
* timestamp() method returning an object with seconds() and nanos() methods

* ByteSizeLong() method

* SerializeToArray() method


?> Supported OSI message types include: SensorView, SensorData, TrafficUpdate, MotionRequest



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [int](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **frame_counter**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string & **header_name**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [OsiProtoType](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) & **osi_proto_msg**

**Return type**: rtidds::GenericBytesMessage

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename OsiProtoType"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::utils::CreateDdsMessageFromOsiProto"}]}`
-->

<a id="osi__to__dds__converter_8h_1aafc666d7c2564e9ae290e2d4f78fa186"></a>
### Function ParseOsiProtoFromDdsMessage

![][public]


```cpp
void simulation_framework::autonomy::communication::utils::ParseOsiProtoFromDdsMessage(const rtidds::GenericBytesMessage &dds_msg, OsiProtoType &osi_proto_msg)
```


Converts a DDS GenericBytesMessage back to an OSI proto message.

`parameterlist {"type":"element","name":"parameterlist","attributes":{"kind":"templateparam"},"children":[{"type":"element","name":"parameteritem","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"parameternamelist","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"parametername","attributes":{},"children":[{"type":"text","text":"OsiProtoType"}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"element","name":"parameterdescription","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"The OSI proto message type (e.g., osi3::SensorView, osi3::SensorData, osi3::TrafficUpdate) "}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"}]}`


**Parameters**:

* **dds_msg**: The DDS GenericBytesMessage to convert
* **osi_proto_msg**: Reference to the OSI proto message to populate


**Exceptions**:

* **std::runtime_error**: If parsing fails


?> The OsiProtoType must have:
* ParseFromArray() method


?> Supported OSI message types include: SensorView, SensorData, TrafficUpdate



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) rtidds::GenericBytesMessage & **dds_msg**
* [OsiProtoType](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) & **osi_proto_msg**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename OsiProtoType"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::utils::ParseOsiProtoFromDdsMessage"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)