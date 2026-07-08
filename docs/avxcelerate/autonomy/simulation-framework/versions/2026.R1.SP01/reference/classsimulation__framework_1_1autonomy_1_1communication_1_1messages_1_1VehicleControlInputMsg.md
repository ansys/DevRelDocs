# Class simulation_framework::autonomy::communication::messages::VehicleControlInputMsg

![][C++]
![][public]

**Definition**: `autonomy/communication/messages/vehicle_control_input_msg/vehicle_control_input_msg.h` (line 63)

[VehicleControlInputMsg](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg) message.

Inherits from <code>[AutonomyMsg](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg)</code> (see <code>[autonomy/communication/messages/autonomy_msg.h](autonomy__msg_8h.md which provides common fields and operations: <code>[timestamp()](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a9d188dca9d51d893167a66d5e589ad30)</code>, <code>[ByteSizeLong()](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1ab1d7519bb2ef8c3ce1b63d4eacc2491f)</code>, <code>[SerializeToArray()](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a4594467c0fcee627e73346fcd88e8309)</code> and <code>[ParseFromArray()](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a9c797cd827a921b16a05b941a35f518f)</code>.





This class implements the message-specific payload layout and the pair of virtual hooks the base class calls:
* [SerializePayload()](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg_1ac8e9a7b14bf4487b4120981d32a50ea6)

* [ParsePayload()](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg_1ac7d209a8eda6aaab71dc5e0308fba7bd)








?> The payload encodes the following fields (in this order):
* object_id (uint64_t)

* control_mode (uint8_t)

* throttle (tag + value). Tag: 0=int32, 1=double

* steering (tag + value). Tag: 0=int32, 1=double

* max_acceleration (double)

* max_deceleration (double)


?> Serialization/parsing helpers used by this class (<code>writeLE</code> / <code>readLE</code>) perform buffer bounds checks and will throw <code>std::runtime_error</code> on overflow/underflow.

**Inherits from**:

* [simulation_framework::autonomy::communication::messages::AutonomyMsg](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg)

## Members

* [AutonomyMsg](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1aeaf911af75e203864aea70d76a3f4f59)
* [BaseSize](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a225ea2d2de0b728008f5928fda670371)
* [ByteSizeLong](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1ab1d7519bb2ef8c3ce1b63d4eacc2491f)
* [control_mode](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg_1a034a49ab7319cc26b0896282214f0625)
* [max_acceleration](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg_1a851a028fdcdd852f001368861ea25212)
* [max_deceleration](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg_1a1b934670a94ad2ab0fd945d1345da2e3)
* [object_id](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg_1a399aaab733d2744fc7a1986b0d344346)
* [ParseFromArray](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a9c797cd827a921b16a05b941a35f518f)
* [ParsePayload](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg_1ac7d209a8eda6aaab71dc5e0308fba7bd)
* [PayloadSize](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg_1a77bf5b280fe7ec670a62a2a44813d18e)
* [readLE](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a0ebfb6da2f35c3bd0776a03d8fa08289)
* [sequence_id](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a9e516ea908430cfb4204525fd7468775)
* [SerializePayload](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg_1ac8e9a7b14bf4487b4120981d32a50ea6)
* [SerializeToArray](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a4594467c0fcee627e73346fcd88e8309)
* [SetTimestamp](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a68892ea85ca64c5335c455615e32e159)
* [steering](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg_1a111cf8bb70db36010cc7d7cea4bd3333)
* [throttle](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg_1ad72a4331427d247e82ae076ac947df33)
* [timestamp](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a9d188dca9d51d893167a66d5e589ad30)
* [VehicleControlInputMsg](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg_1a31367e265580008bde2d7bdc566ede1c)
* [writeLE](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a663e8417c75094713f34ddc278965f1e)

## Public attributes

<a id="classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg_1a399aaab733d2744fc7a1986b0d344346"></a>
### Variable object_id

![][public]

**Definition**: `autonomy/communication/messages/vehicle_control_input_msg/vehicle_control_input_msg.h` (line 70)


```cpp
uint64_t simulation_framework::autonomy::communication::messages::VehicleControlInputMsg::object_id {0}
```


Identifier for the controlled object (typically a unique actor id).





**Type**: [uint64_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::VehicleControlInputMsg::object_id"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg_1a034a49ab7319cc26b0896282214f0625"></a>
### Variable control_mode

![][public]

**Definition**: `autonomy/communication/messages/vehicle_control_input_msg/vehicle_control_input_msg.h` (line 73)


```cpp
VehicleControlMode simulation_framework::autonomy::communication::messages::VehicleControlInputMsg::control_mode {VehicleControlMode::INVALID}
```


How to interpret the throttle/steering values.





**Type**: VehicleControlMode

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::VehicleControlInputMsg::control_mode"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg_1ad72a4331427d247e82ae076ac947df33"></a>
### Variable throttle

![][public]

**Definition**: `autonomy/communication/messages/vehicle_control_input_msg/vehicle_control_input_msg.h` (line 76)


```cpp
ThrottleType simulation_framework::autonomy::communication::messages::VehicleControlInputMsg::throttle
```


Throttle value; variant - > ThrottleType.





**Type**: ThrottleType

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::VehicleControlInputMsg::throttle"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg_1a111cf8bb70db36010cc7d7cea4bd3333"></a>
### Variable steering

![][public]

**Definition**: `autonomy/communication/messages/vehicle_control_input_msg/vehicle_control_input_msg.h` (line 79)


```cpp
SteeringType simulation_framework::autonomy::communication::messages::VehicleControlInputMsg::steering
```


Steering value; variant -> SteeringType.





**Type**: SteeringType

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::VehicleControlInputMsg::steering"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg_1a851a028fdcdd852f001368861ea25212"></a>
### Variable max_acceleration

![][public]

**Definition**: `autonomy/communication/messages/vehicle_control_input_msg/vehicle_control_input_msg.h` (line 82)


```cpp
double simulation_framework::autonomy::communication::messages::VehicleControlInputMsg::max_acceleration {0.0}
```


Maximum allowed acceleration (m/s^2) for analog controllers.





**Type**: [double](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::VehicleControlInputMsg::max_acceleration"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg_1a1b934670a94ad2ab0fd945d1345da2e3"></a>
### Variable max_deceleration

![][public]

**Definition**: `autonomy/communication/messages/vehicle_control_input_msg/vehicle_control_input_msg.h` (line 85)


```cpp
double simulation_framework::autonomy::communication::messages::VehicleControlInputMsg::max_deceleration {0.0}
```


Maximum allowed deceleration (positive number, m/s^2).





**Type**: [double](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::VehicleControlInputMsg::max_deceleration"}]}`
-->

## Public functions

<a id="classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg_1a31367e265580008bde2d7bdc566ede1c"></a>
### Function VehicleControlInputMsg

![][public]


```cpp
simulation_framework::autonomy::communication::messages::VehicleControlInputMsg::VehicleControlInputMsg()=default
```


Default-construct a [VehicleControlInputMsg](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg) message.





**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::VehicleControlInputMsg::VehicleControlInputMsg"}]}`
-->

## Protected functions

<a id="classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg_1a77bf5b280fe7ec670a62a2a44813d18e"></a>
### Function PayloadSize

![][protected]
![][const]


```cpp
size_t simulation_framework::autonomy::communication::messages::VehicleControlInputMsg::PayloadSize() const noexcept override
```


Compute the size in bytes of the serialized payload only.

**Returns**:

number of bytes required to serialize the payload (not including base size)


?> This must match the bytes consumed/produced by SerializePayload/ParsePayload.



**Return type**: [size_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [PayloadSize](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a0605e85c074c8f567ea8721c14e578d2)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::VehicleControlInputMsg::PayloadSize"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg_1ac8e9a7b14bf4487b4120981d32a50ea6"></a>
### Function SerializePayload

![][protected]
![][const]


```cpp
void simulation_framework::autonomy::communication::messages::VehicleControlInputMsg::SerializePayload(unsigned char *&ptr, size_t &remaining) const override
```


Serialize the payload-specific fields into the provided buffer.

**Parameters**:

* **ptr**: Reference to the current write pointer; advanced as bytes are written.
* **remaining**: Reference to remaining bytes in the buffer; decreased as bytes are written.


**Exceptions**:

* **std::runtime_error**: if the buffer does not have enough space or if an internal serialization helper detects an error. Underlying helpers throw on overflow.


?> The function writes tag bytes for variant fields (<code>throttle</code> and <code>steering</code>):
* tag 0: int32 representation follows

* tag 1: double representation follows Implementations must not perform manual pointer arithmetic; use writeLE which already enforces bounds and endianness.



**Parameters**:

* [unsigned](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [char](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) *& **ptr**
* [size_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) & **remaining**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [SerializePayload](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a418d787425f08a611f1395355ab72221)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::VehicleControlInputMsg::SerializePayload"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInputMsg_1ac7d209a8eda6aaab71dc5e0308fba7bd"></a>
### Function ParsePayload

![][protected]


```cpp
void simulation_framework::autonomy::communication::messages::VehicleControlInputMsg::ParsePayload(const unsigned char *&ptr, size_t &remaining) override
```


Parse the payload-specific fields from the provided buffer.

**Parameters**:

* **ptr**: Reference to the current read pointer; advanced as bytes are consumed.
* **remaining**: Reference to remaining bytes in the buffer; decreased as bytes are read.


**Exceptions**:

* **std::runtime_error**: if the buffer does not contain the expected bytes or if an internal read helper detects an underflow or malformed value.


?> This function expects the same layout described in the class-level documentation and will reconstruct variant fields based on the tag bytes written by SerializePayload.If tags are invalid, it throws std::runtime_error.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [unsigned](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [char](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) *& **ptr**
* [size_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) & **remaining**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [ParsePayload](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg_1a9d6f1bd66fc8e6128d60f9cc4b034265)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::VehicleControlInputMsg::ParsePayload"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"vehicle__control__input__msg_8h"},"children":[{"type":"text","text":"vehicle_control_input_msg.h"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)