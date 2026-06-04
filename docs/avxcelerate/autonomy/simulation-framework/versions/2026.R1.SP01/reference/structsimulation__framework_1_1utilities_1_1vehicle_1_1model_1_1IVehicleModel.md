# Structure simulation_framework::utilities::vehicle::model::IVehicleModel

![][C++]
![][public]

**Definition**: `autonomy/simulation/utilities/vehicle_model/i_vehicle_model.h` (line 24)

Abstract, templated vehicle dynamic model interface.

Implementations must provide an Evaluate method which computes the next MotionState given a control input, current state and delta time. The templated API allows use with both <code>double</code> and Ceres <code>Jet</code> types for integration into optimisation problems.






`parameterlist {"type":"element","name":"parameterlist","attributes":{"kind":"templateparam"},"children":[{"type":"element","name":"parameteritem","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"parameternamelist","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"parametername","attributes":{},"children":[{"type":"text","text":"T"}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"},{"type":"element","name":"parameterdescription","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"numeric scalar type (double or ceres::Jet) "}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"}]},{"type":"text","text":"\n"}]}`

**Template parameters**:

* typename T

## Members

* [Evaluate](structsimulation__framework_1_1utilities_1_1vehicle_1_1model_1_1IVehicleModel.md#structsimulation__framework_1_1utilities_1_1vehicle_1_1model_1_1IVehicleModel_1a226b10e6add5cf778b0f6c34d1615ca8)
* [~IVehicleModel](structsimulation__framework_1_1utilities_1_1vehicle_1_1model_1_1IVehicleModel.md#structsimulation__framework_1_1utilities_1_1vehicle_1_1model_1_1IVehicleModel_1aef859e950fa20370ce7203dd4dba6676)

## Public functions

<a id="structsimulation__framework_1_1utilities_1_1vehicle_1_1model_1_1IVehicleModel_1aef859e950fa20370ce7203dd4dba6676"></a>
### Function ~IVehicleModel

![][public]


```cpp
virtual simulation_framework::utilities::vehicle::model::IVehicleModel< T >::~IVehicleModel()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::utilities::vehicle::model::IVehicleModel::~IVehicleModel"}]}`
-->

<a id="structsimulation__framework_1_1utilities_1_1vehicle_1_1model_1_1IVehicleModel_1a226b10e6add5cf778b0f6c34d1615ca8"></a>
### Function Evaluate

![][public]
![][const]


```cpp
virtual vehicle::state::MotionStateT< T > simulation_framework::utilities::vehicle::model::IVehicleModel< T >::Evaluate(const vehicle::state::ControlInputT< T > &u, const vehicle::state::MotionStateT< T > &current, const T &dt) const =0
```


Predict next state given control input and current state.

**Parameters**:

* **u**: control input (steering, acceleration)
* **current**: current motion state
* **dt**: delta time for propagation


**Returns**:

predicted MotionStateT<T>



**Parameters**:

* const vehicle::state::ControlInputT< T > & **u**
* const vehicle::state::MotionStateT< T > & **current**
* const T & **dt**

**Return type**: vehicle::state::MotionStateT< T >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::utilities::vehicle::model::IVehicleModel::Evaluate"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)