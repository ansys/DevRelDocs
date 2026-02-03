# Namespace simulation_framework::core::topic_registry

![][C++]

**Definition**: `core/communication/topic_registry.h` (line 59)





## Typedefs

<a id="core_2communication_2topic__registry_8h_1a9edbd07732d0c58d7c78107bc211bd46"></a>
### Typedef StringTopicType

![][public]

**Definition**: `core/communication/topic_registry.h` (line 133)


```cpp
using simulation_framework::core::topic_registry::StringTopicType = typedef Topic<rtidds::CommonString>
```


List of existing [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) Type with its underlying message Type.

This header file defines a list of concrete Topics that can be used for creation of communication channels with given underlying message. As default, DDS message/communication type will be applied. The name of [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) (TopicId), which is passed into constructor to [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic), is globally unique and represents one single [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic), the underlying message could be the same though.





Example of creating a new [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) with existing Message Type rtidds::GenericBytesMessage 
```cpp
std::shared_ptr<ITopic> your_topic = std::make_shared<Topic<rtidds::GenericBytesMessage>>("YourTopicId");
```
 rtidds::GenericBytesMessage is a generic type which allows you put any content there as serialized bytes array. E.g. GenericBytesTopicType , which stores the OSI protobuf message as underlying payload, is a good example to show how this mechanism works out. If you have a protobuf message which you want to send, you only need to call protobuf c++ API like following: 
```cpp

YourProtobufMessage protobuf_msg;

rtidds::GenericBytesMessage generic_msg{};

generic_msg.timestamp().seconds(1);
generic_msg.timestamp().nanoseconds(0)

size_t size = protobuf_msg.ByteSizeLong();
std::vector<unsigned char> proto_data_in_bytes;
proto_data_in_bytes.resize(size);

protobuf_msg.SerializeToArray(proto_data_in_bytes.data(), size);

generic_msg.size(size);
generic_msg.bytes_array(proto_data_in_bytes);
```






Then you will have a filled GenericBytesMessage generic_msg with your desired content and can publish it into the [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) defined with "YourTopicId".





On the subscriber side, you just need to decode the message from bytes array. 
```cpp
YourProtobufMessage protobuf_msg;
if (!protobuf_msg.ParseFromArray(generic_msg.bytes_array().data(),
                                 generic_msg.size()))
{
    throw std::runtime_error("Error parsing proto msg from bytes array in generic_msg! ");
}
ProcessYourProtoMsg(protobuf_msg);
```
 For complete example please refer /example/my_customized_topic after installation.





[Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) type for simple string messages.





Uses rtidds::CommonString which contains a single string field (data). This is the simplest message type, suitable for transmitting plain text data. 
```cpp
auto topic = std::make_shared<StringTopicType>("MyStringTopic");
rtidds::CommonString msg;
msg.data("Hello, World!");
topic->Publish(msg);
```
 

**See also**: rtidds::CommonString



**Return type**: [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)< rtidds::CommonString >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::topic_registry::StringTopicType"}]}`
-->

<a id="core_2communication_2topic__registry_8h_1a7e388e2d7f8cdf8897e06a4c19fa7462"></a>
### Typedef KpiMessageTopicType

![][public]

**Definition**: `core/communication/topic_registry.h` (line 157)


```cpp
using simulation_framework::core::topic_registry::KpiMessageTopicType = typedef Topic<rtidds::KpiMessage>
```


[Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) type for Key Performance Indicator (KPI) messages.

Uses rtidds::KpiMessage which contains a sequence of KpiContent entries. Each KpiContent includes timestamp, name, data_type (kDouble, kInteger, kString, kBoolean, kJson, kOther), value, unit, and type (kScalar, kTimeSeries, kLog, kOther). KPIs are used for evaluating simulation components or System Under Test (SUT) and can be logged to output files or databases. Messages published to KpiLoggerTopic are captured by default KpiLoggerActivity. 
```cpp
auto topic = std::make_shared<KpiMessageTopicType>("KpiLoggerTopic");
rtidds::KpiMessage kpi_msg;
rtidds::KpiContent content;
content.timestamp(rtidds::Timestamp{1000, 0});
content.name("simulation_speed");
content.data_type(rtidds::Datatype::kDouble);
content.value("65.5");
content.unit("km/h");
content.type(rtidds::Type::kScalar);
kpi_msg.data().push_back(content);
topic->Publish(kpi_msg);
```
 



**See also**: rtidds::KpiMessage, [core/kpi/definition/kpi_definition.h](kpi__definition_8h.md documentation/markdown/kpi_and_kpi_logging.md



**Return type**: [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)< rtidds::KpiMessage >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::topic_registry::KpiMessageTopicType"}]}`
-->

<a id="core_2communication_2topic__registry_8h_1a967762d6bfe6d9cadfd09a40bab7a9f1"></a>
### Typedef GenericBytesTopicType

![][public]

**Definition**: `core/communication/topic_registry.h` (line 175)


```cpp
using simulation_framework::core::topic_registry::GenericBytesTopicType = typedef Topic<rtidds::GenericBytesMessage>
```


[Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) type for generic binary data messages.

Uses rtidds::GenericBytesMessage which allows transmission of arbitrary serialized data as a bytes array. This is ideal for protobuf messages, custom binary formats, or any serialized content. The message includes header, topic_id, frame_number, timestamp, size, and bytes_array fields. Commonly used for OSI protobuf messages and other serialized protocols. 
```cpp
auto topic = std::make_shared<GenericBytesTopicType>("MyBytesTopic");
rtidds::GenericBytesMessage msg;
msg.timestamp(rtidds::Timestamp{1, 0});
std::vector<uint8_t> data{0x01, 0x02, 0x03};
msg.size(data.size());
msg.bytes_array(data);
topic->Publish(msg);
```
 


**See also**: rtidds::GenericBytesMessage, documentation/markdown/communication.md



**Return type**: [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)< rtidds::GenericBytesMessage >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::topic_registry::GenericBytesTopicType"}]}`
-->

<a id="core_2communication_2topic__registry_8h_1aa347191e2437a3c66320fe75e0b4a143"></a>
### Typedef FmuMessageTopicType

![][public]

**Definition**: `core/communication/topic_registry.h` (line 194)


```cpp
using simulation_framework::core::topic_registry::FmuMessageTopicType = typedef Topic<rtidds::FmuMessage>
```


[Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) type for Functional Mock-up Unit (FMU) input/output messages.

Uses rtidds::FmuMessage which contains a sequence of FmuData entries. Each FmuData includes data_type (kBoolean, kInteger, kDouble, kString, kBytes), name, and the corresponding value field. Used for communication between FMU activities and other simulation components, allowing FMUs to exchange input/output variables over DDS topics. 
```cpp
auto topic = std::make_shared<FmuMessageTopicType>("FmuInputTopic");
rtidds::FmuMessage msg;
rtidds::FmuData data;
data.name("velocity");
data.data_type(rtidds::FmuDatatype::kDouble);
data.double_value(65.5);
msg.data().push_back(data);
topic->Publish(msg);
```
 


**See also**: rtidds::FmuMessage, [core/lifecycle/fmu_activity/fmu_base_activity.h](fmu__base__activity_8h.md



**Return type**: [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)< rtidds::FmuMessage >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::topic_registry::FmuMessageTopicType"}]}`
-->

<a id="core_2communication_2topic__registry_8h_1a362ca8d00ab5265ca118b7d810b1ad96"></a>
### Typedef VariantDataTopicType

![][public]

**Definition**: `core/communication/topic_registry.h` (line 212)


```cpp
using simulation_framework::core::topic_registry::VariantDataTopicType = typedef Topic<rtidds::VariantMessage>
```


[Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) type for variant data messages.

Uses [rtidds::VariantMessage](namespacertidds.md#namespacertidds_1a442f59bc02e5668d37a306af1c6faacd) (currently aliased to rtidds::FmuMessage) as the underlying message type. This topic type is intended for variant data communication, sharing the same structure as FmuMessage with support for multiple data types (boolean, integer, double, string, bytes) in a single message. 
```cpp
auto topic = std::make_shared<VariantDataTopicType>("VariantDataTopic");
rtidds::VariantMessage msg;  // or rtidds::FmuMessage
rtidds::VariantData data;
data.name("sensor_value");
data.data_type(rtidds::VariantDatatype::kDouble);
data.double_value(42.5);
msg.data().push_back(data);
topic->Publish(msg);
```
 


**See also**: [rtidds::VariantMessage](namespacertidds.md#namespacertidds_1a442f59bc02e5668d37a306af1c6faacd), rtidds::FmuMessage



**Return type**: [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)< [rtidds::VariantMessage](namespacertidds.md#namespacertidds_1a442f59bc02e5668d37a306af1c6faacd) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::topic_registry::VariantDataTopicType"}]}`
-->

<a id="core_2communication_2topic__registry_8h_1a4b336cd1471bdad879e9680854039b6f"></a>
### Typedef VariantMapTopicType

![][public]

**Definition**: `core/communication/topic_registry.h` (line 233)


```cpp
using simulation_framework::core::topic_registry::VariantMapTopicType = typedef Topic<rtidds::VariantMap>
```


[Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) type for variant map messages with key-value pairs.

Uses rtidds::VariantMap which contains a sequence of Entry structures. Each Entry includes a key (string), reference (string), value (Variant union supporting uint32_t, uint64_t, double, float, int32_t, int64_t, string, bool), and timestamp. This provides a flexible key-value store format for structured data exchange with type safety. 
```cpp
auto topic = std::make_shared<VariantMapTopicType>("VariantMapTopic");
rtidds::VariantMap msg;
rtidds::Entry entry;
entry.key("temperature");
entry.reference("sensor_001");
entry.value().double_value(25.5);
entry.timestamp(rtidds::Timestamp{1000, 500000});
msg.entries().push_back(entry);
topic->Publish(msg);
```
 



**See also**: rtidds::VariantMap, core/communication/utils/variant_map.h, core/communication/utils/variant_map_converter.h



**Return type**: [Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)< rtidds::VariantMap >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::topic_registry::VariantMapTopicType"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)