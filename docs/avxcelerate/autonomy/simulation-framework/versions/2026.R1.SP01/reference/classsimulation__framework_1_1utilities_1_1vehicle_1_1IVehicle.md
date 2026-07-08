# Class simulation_framework::utilities::vehicle::IVehicle

![][C++]
![][public]

**Definition**: `autonomy/simulation/utilities/vehicle/i_vehicle.h` (line 24)

Abstract vehicle interface used by simulation components.

[IVehicle](classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle) defines the minimal API required by higher-level systems to request predicted motion states and to provide concrete controller and model implementations. Implementations own the controller and model instances and expose const accessors for inspection.

## Members

* [GetController](classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle_1aeca05c9758733092ec26fc72cfbd598c)
* [GetModel](classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle_1af5a2d017fc77d564ea19d11c4cf1368b)
* [RegisterController](classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle_1aa39218d7816b692d462755701f0abd20)
* [RegisterModel](classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle_1a90f9e9496ff556231a1ca07170d29dff)
* [RequestMotionState](classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle_1a8d958c27dfe5b7c9da42f4082fff2e01)
* [~IVehicle](classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle_1abad1d84eaece661544f9313048ad4641)

## Public functions

<a id="classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle_1abad1d84eaece661544f9313048ad4641"></a>
### Function ~IVehicle

![][public]


```cpp
virtual simulation_framework::utilities::vehicle::IVehicle::~IVehicle()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::utilities::vehicle::IVehicle::~IVehicle"}]}`
-->

<a id="classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle_1a8d958c27dfe5b7c9da42f4082fff2e01"></a>
### Function RequestMotionState

![][public]


```cpp
virtual std::pair< state::MotionState, state::ControlInput > simulation_framework::utilities::vehicle::IVehicle::RequestMotionState(const state::MotionState &current, const std::vector< state::MotionState > &request, double dt)=0
```


Compute a predicted motion state and applied control for a given reference trajectory.

**Parameters**:

* **current**: current measured motion state
* **request**: sequence of reference MotionState values to follow
* **dt**: delta time step used for prediction


**Returns**:

pair of (predicted MotionState after applying control, ControlInput used)



**Parameters**:

* const state::MotionState & **current**
* const std::vector< state::MotionState > & **request**
* double **dt**

**Return type**: std::pair< state::MotionState, state::ControlInput >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::utilities::vehicle::IVehicle::RequestMotionState"}]}`
-->

<a id="classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle_1aa39218d7816b692d462755701f0abd20"></a>
### Function RegisterController

![][public]


```cpp
virtual void simulation_framework::utilities::vehicle::IVehicle::RegisterController(std::unique_ptr< controller::IVehicleController > controller)=0
```


Register a vehicle controller implementation.

**Parameters**:

* **controller**: ownership of a controller implementation



**Parameters**:

* std::unique_ptr< [controller::IVehicleController](classsimulation__framework_1_1utilities_1_1vehicle_1_1controller_1_1IVehicleController.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1controller_1_1IVehicleController) > **controller**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::utilities::vehicle::IVehicle::RegisterController"}]}`
-->

<a id="classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle_1a90f9e9496ff556231a1ca07170d29dff"></a>
### Function RegisterModel

![][public]


```cpp
virtual void simulation_framework::utilities::vehicle::IVehicle::RegisterModel(std::unique_ptr< model::IVehicleModel< double > > model)=0
```


Register a vehicle model implementation.

**Parameters**:

* **model**: ownership of a vehicle model templated on double



**Parameters**:

* std::unique_ptr< [model::IVehicleModel](structsimulation__framework_1_1utilities_1_1vehicle_1_1model_1_1IVehicleModel.md#structsimulation__framework_1_1utilities_1_1vehicle_1_1model_1_1IVehicleModel)< double > > **model**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::utilities::vehicle::IVehicle::RegisterModel"}]}`
-->

<a id="classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle_1aeca05c9758733092ec26fc72cfbd598c"></a>
### Function GetController

![][public]
![][const]


```cpp
virtual const controller::IVehicleController * simulation_framework::utilities::vehicle::IVehicle::GetController() const =0
```


Get the registered controller (read-only).

**Returns**:

pointer to the registered controller or nullptr if none



**Return type**: const [controller::IVehicleController](classsimulation__framework_1_1utilities_1_1vehicle_1_1controller_1_1IVehicleController.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1controller_1_1IVehicleController) *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::utilities::vehicle::IVehicle::GetController"}]}`
-->

<a id="classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle_1af5a2d017fc77d564ea19d11c4cf1368b"></a>
### Function GetModel

![][public]
![][const]


```cpp
virtual const model::IVehicleModel< double > * simulation_framework::utilities::vehicle::IVehicle::GetModel() const =0
```


Get the registered vehicle model (read-only).

**Returns**:

pointer to the registered model or nullptr if none



**Return type**: const [model::IVehicleModel](structsimulation__framework_1_1utilities_1_1vehicle_1_1model_1_1IVehicleModel.md#structsimulation__framework_1_1utilities_1_1vehicle_1_1model_1_1IVehicleModel)< double > *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::utilities::vehicle::IVehicle::GetModel"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"i__vehicle_8h"},"children":[{"type":"text","text":"i_vehicle.h"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)