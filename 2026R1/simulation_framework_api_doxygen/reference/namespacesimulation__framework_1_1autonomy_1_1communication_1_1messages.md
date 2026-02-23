# Namespace simulation_framework::autonomy::communication::messages

![][C++]

**Definition**: `autonomy/communication/messages/vehicle_control_input_msg/vehicle_control_input_msg.h` (line 16)





## Classes

* [simulation_framework::autonomy::communication::messages::AutonomyMsg](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1AutonomyMsg)
* [simulation_framework::autonomy::communication::messages::TimestampView](structsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1TimestampView.md#structsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1TimestampView)
* [simulation_framework::autonomy::communication::messages::VehicleControlInput](classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInput.md#classsimulation__framework_1_1autonomy_1_1communication_1_1messages_1_1VehicleControlInput)

## Enumeration types

<a id="vehicle__control__input__msg_8h_1af0ee521bf6068390e961609c3495c8c4"></a>
### Enumeration type VehicleControlMode

![][public]

**Definition**: `autonomy/communication/messages/vehicle_control_input_msg/vehicle_control_input_msg.h` (line 31)


```cpp
enum VehicleControlMode {
  ACC_N_STEER = 0,
  ANALOG = 1,
  BINARY = 2,
  INVALID = 255
}
```


Mode that describes how vehicle controls are interpreted.





<a id="vehicle__control__input__msg_8h_1af0ee521bf6068390e961609c3495c8c4ad91eb2d6aaf419ccf72997c056d98101"></a>
#### Enumerator ACC_N_STEER





<a id="vehicle__control__input__msg_8h_1af0ee521bf6068390e961609c3495c8c4a8b7d08163aa92ed2a8aceb06b9488e60"></a>
#### Enumerator ANALOG





<a id="vehicle__control__input__msg_8h_1af0ee521bf6068390e961609c3495c8c4a98ad0e8750ae10ad556ed7a62affb452"></a>
#### Enumerator BINARY





<a id="vehicle__control__input__msg_8h_1af0ee521bf6068390e961609c3495c8c4accc0377a8afbf50e7094f5c23a8af223"></a>
#### Enumerator INVALID





<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::VehicleControlMode"}]}`
-->

## Typedefs

<a id="vehicle__control__input__msg_8h_1a914d43868f4391b25b0a824b49f78cce"></a>
### Typedef ThrottleType

![][public]

**Definition**: `autonomy/communication/messages/vehicle_control_input_msg/vehicle_control_input_msg.h` (line 22)


```cpp
using simulation_framework::autonomy::communication::messages::ThrottleType = typedef std::variant<int, double>
```


Type used to represent throttle values.

?> Two representations are supported:
* int (discrete steps, e.g. -1, 0, 1)

* double (analog / continuous value)



**Return type**: std::variant< [int](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic), [double](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::ThrottleType"}]}`
-->

<a id="vehicle__control__input__msg_8h_1aadec9679bd9f44adbd963c941960d570"></a>
### Typedef SteeringType

![][public]

**Definition**: `autonomy/communication/messages/vehicle_control_input_msg/vehicle_control_input_msg.h` (line 28)


```cpp
using simulation_framework::autonomy::communication::messages::SteeringType = typedef std::variant<int, double>
```


Type used to represent steering values.

?> Two representations are supported:
* int (discrete steps, e.g. -1, 0, 1)

* double (analog / continuous value) [-1,1]



**Return type**: std::variant< [int](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic), [double](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::communication::messages::SteeringType"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)