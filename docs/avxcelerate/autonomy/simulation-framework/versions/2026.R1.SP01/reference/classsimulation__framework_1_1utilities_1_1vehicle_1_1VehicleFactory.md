# Class simulation_framework::utilities::vehicle::VehicleFactory

![][C++]
![][public]

**Definition**: `autonomy/simulation/utilities/vehicle/vehicle_factory.h` (line 14)





**Inherits from**:

* IVehicleFactory

## Members

* [Create](classsimulation__framework_1_1utilities_1_1vehicle_1_1VehicleFactory.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1VehicleFactory_1a41a64ec0d9a2216265afe3afb9d99b18)

## Public functions

<a id="classsimulation__framework_1_1utilities_1_1vehicle_1_1VehicleFactory_1a41a64ec0d9a2216265afe3afb9d99b18"></a>
### Function Create

![][public]


```cpp
std::unique_ptr< IVehicle > simulation_framework::utilities::vehicle::VehicleFactory::Create(const VehicleConfig &cfg, double dt) override
```


Create a default [IVehicle](classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle) instance from a configuration file.

**Parameters**:

* **config_file_path**: path to a vehicle JSON configuration
* **dt**: delta time-step used by created components (controller and model internally)


**Returns**:

unique_ptr owning a concrete [IVehicle](classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle) implementation

The factory constructs a Vehicle and configures a controller and model based on the provided configuration. Throws on configuration errors.



**Parameters**:

* const VehicleConfig & **cfg**
* double **dt**

**Return type**: std::unique_ptr< [IVehicle](classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::utilities::vehicle::VehicleFactory::Create"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)