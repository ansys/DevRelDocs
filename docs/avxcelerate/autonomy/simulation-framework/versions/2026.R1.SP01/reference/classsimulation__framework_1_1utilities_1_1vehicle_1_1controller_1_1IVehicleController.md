# Class simulation_framework::utilities::vehicle::controller::IVehicleController

![][C++]
![][public]

**Definition**: `autonomy/simulation/utilities/vehicle_controller/i_vehicle_controller.h` (line 31)

Abstract vehicle controller interface.

Implementations provide control inputs for a reference trajectory given the current vehicle state. The controller returns a <code>ControlInput</code> that can be applied to a vehicle model.

## Members

* [Evaluate](classsimulation__framework_1_1utilities_1_1vehicle_1_1controller_1_1IVehicleController.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1controller_1_1IVehicleController_1a68236dc9254cc0a9cc411c1316406753)
* [~IVehicleController](classsimulation__framework_1_1utilities_1_1vehicle_1_1controller_1_1IVehicleController.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1controller_1_1IVehicleController_1a96888ebbb710fed49724374ee1ba3384)

## Public functions

<a id="classsimulation__framework_1_1utilities_1_1vehicle_1_1controller_1_1IVehicleController_1a96888ebbb710fed49724374ee1ba3384"></a>
### Function ~IVehicleController

![][public]


```cpp
virtual simulation_framework::utilities::vehicle::controller::IVehicleController::~IVehicleController()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::utilities::vehicle::controller::IVehicleController::~IVehicleController"}]}`
-->

<a id="classsimulation__framework_1_1utilities_1_1vehicle_1_1controller_1_1IVehicleController_1a68236dc9254cc0a9cc411c1316406753"></a>
### Function Evaluate

![][public]
![][const]


```cpp
virtual vehicle::state::ControlInput simulation_framework::utilities::vehicle::controller::IVehicleController::Evaluate(const VehicleControllerInput &current, const VehicleControllerReference &reference) const =0
```


Evaluate control inputs to follow the provided reference.

**Parameters**:

* **current**: VehicleControllerInput holding void pointer to current state data (user-defined type)
* **reference**: VehicleControllerReference holding void pointer to reference data (user-defined type)


**Returns**:

ControlInput containing steering and acceleration commands



**Parameters**:

* const VehicleControllerInput & **current**
* const VehicleControllerReference & **reference**

**Return type**: vehicle::state::ControlInput

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::utilities::vehicle::controller::IVehicleController::Evaluate"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"i__vehicle__controller_8h"},"children":[{"type":"text","text":"i_vehicle_controller.h"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)