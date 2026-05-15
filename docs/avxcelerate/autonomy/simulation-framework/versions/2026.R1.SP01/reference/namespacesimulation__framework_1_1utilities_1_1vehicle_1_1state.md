# Namespace simulation_framework::utilities::vehicle::state

![][C++]

**Definition**: `autonomy/simulation/utilities/vehicle_state/vehicle_state.h` (line 13)





## Classes

* [simulation_framework::utilities::vehicle::state::ControlInputT](structsimulation__framework_1_1utilities_1_1vehicle_1_1state_1_1ControlInputT.md#structsimulation__framework_1_1utilities_1_1vehicle_1_1state_1_1ControlInputT)
* [simulation_framework::utilities::vehicle::state::MotionStateT](structsimulation__framework_1_1utilities_1_1vehicle_1_1state_1_1MotionStateT.md#structsimulation__framework_1_1utilities_1_1vehicle_1_1state_1_1MotionStateT)
* [simulation_framework::utilities::vehicle::state::OrientationT](structsimulation__framework_1_1utilities_1_1vehicle_1_1state_1_1OrientationT.md#structsimulation__framework_1_1utilities_1_1vehicle_1_1state_1_1OrientationT)
* [simulation_framework::utilities::vehicle::state::Vector3DT](structsimulation__framework_1_1utilities_1_1vehicle_1_1state_1_1Vector3DT.md#structsimulation__framework_1_1utilities_1_1vehicle_1_1state_1_1Vector3DT)

## Typedefs

<a id="vehicle__state_8h_1ad2e6c841f09dbee82a9ccc420a97e301"></a>
### Typedef Orientation

![][public]

**Definition**: `autonomy/simulation/utilities/vehicle_state/vehicle_state.h` (line 63)


```cpp
using simulation_framework::utilities::vehicle::state::Orientation = typedef OrientationT<double>
```








**Return type**: OrientationT< double >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::utilities::vehicle::state::Orientation"}]}`
-->

<a id="vehicle__state_8h_1a93f3eea730e97ff3595b046676bdbbfe"></a>
### Typedef Vector3D

![][public]

**Definition**: `autonomy/simulation/utilities/vehicle_state/vehicle_state.h` (line 64)


```cpp
using simulation_framework::utilities::vehicle::state::Vector3D = typedef Vector3DT<double>
```








**Return type**: Vector3DT< double >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::utilities::vehicle::state::Vector3D"}]}`
-->

<a id="vehicle__state_8h_1a81af55a7985b862aceba5cb582fe1de2"></a>
### Typedef MotionState

![][public]

**Definition**: `autonomy/simulation/utilities/vehicle_state/vehicle_state.h` (line 65)


```cpp
using simulation_framework::utilities::vehicle::state::MotionState = typedef MotionStateT<double>
```








**Return type**: MotionStateT< double >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::utilities::vehicle::state::MotionState"}]}`
-->

<a id="vehicle__state_8h_1a29cd521c619bb99812b24b235c5d6109"></a>
### Typedef ControlInput

![][public]

**Definition**: `autonomy/simulation/utilities/vehicle_state/vehicle_state.h` (line 66)


```cpp
using simulation_framework::utilities::vehicle::state::ControlInput = typedef ControlInputT<double>
```








**Return type**: ControlInputT< double >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::utilities::vehicle::state::ControlInput"}]}`
-->

## Functions

<a id="vehicle__state_8h_1a2438e0bfa71bf0e2f6500968bae06979"></a>
### Function PrintMotionState

![][public]


```cpp
void simulation_framework::utilities::vehicle::state::PrintMotionState(const MotionStateT< T > &state, std::ostream &os=std::cout)
```


Print a MotionStateT to the provided output stream.

`parameterlist {"type":"element","name":"parameterlist","attributes":{"kind":"templateparam"},"children":[{"type":"element","name":"parameteritem","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"parameternamelist","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"parametername","attributes":{},"children":[{"type":"text","text":"T"}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"element","name":"parameterdescription","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"scalar type used inside the MotionState "}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"}]}`


**Parameters**:

* **state**: motion state to print
* **os**: output stream to write to (defaults to std::cout)



**Parameters**:

* const MotionStateT< T > & **state**
* std::ostream & **os** = std::cout 

**Return type**: void

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename T"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::utilities::vehicle::state::PrintMotionState"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)