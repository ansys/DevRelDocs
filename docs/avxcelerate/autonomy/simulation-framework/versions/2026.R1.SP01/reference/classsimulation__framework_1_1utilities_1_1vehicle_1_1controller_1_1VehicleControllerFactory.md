# Class simulation_framework::utilities::vehicle::controller::VehicleControllerFactory

![][C++]
![][public]

**Definition**: `autonomy/simulation/utilities/vehicle_controller/vehicle_controller_factory.h` (line 17)





**Inherits from**:

* I_VehicleControllerFactory

## Members

* [Create](classsimulation__framework_1_1utilities_1_1vehicle_1_1controller_1_1VehicleControllerFactory.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1controller_1_1VehicleControllerFactory_1ab0df890bbdad15ac7c076e883e70190f)

## Public functions

<a id="classsimulation__framework_1_1utilities_1_1vehicle_1_1controller_1_1VehicleControllerFactory_1ab0df890bbdad15ac7c076e883e70190f"></a>
### Function Create

![][public]


```cpp
std::unique_ptr< IVehicleController > simulation_framework::utilities::vehicle::controller::VehicleControllerFactory::Create(const VehicleControllerConfig &cfg, double dt) override
```


Create a configured vehicle controller instance.

**Parameters**:

* **cfg**: should contain path to vehicle JSON configuration or structured field should have VehicleProperties type for structured kind



**Parameters**:

* **dt**: nominal controller delta time


**Returns**:

unique_ptr owning an [IVehicleController](classsimulation__framework_1_1utilities_1_1vehicle_1_1controller_1_1IVehicleController.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1controller_1_1IVehicleController)

This factory reads controller tuning, model parameters from the vehicle configuration and constructs a VehicleController pre-populated with those settings.
**See also**: I_VehicleControllerFactory for VehicleControllerConfig definition





Controller overview (concise):
* The controller minimizes a weighted nonlinear least squares cost between predicted motion state outputs and reference targets.

* Cost: C(x,u) = 0.5 * sum_i W_i (y_i(x,u) - y_i_ref)^2, where W_i = Q_i / (S_i * S_i). The controller tracks x, y, psi, v.

* Tuning groups in the config:
* "tracking" (q_lon, q_lat, q_yaw, q_vel): higher values increase tracking accuracy.

* "sensitivity" (s_*): scaling values; smaller means more sensitive.

* "restrictions" (r_*): restricts input rates (jerk, steering rate).



* Optimization controls:
* "prediction_horizon_steps": how many future steps are optimized (>=2 recommended).

* "max_iterations": solver iteration cap.







Sample vehicle_config (full, for reference): { "vehicle_name": "test_vehicle", "single_track": { "lf": 1.234, "lr": 1.234 }, "limits": { "max_acceleration": 8, "max_steering_angle": 0.654, "min_acceleration": -8, "min_steering_angle": -0.654 }, "controller_tuning": { "restrictions": { "r_jerk": 0.1, "r_steering": 2.0 }, "sensitivity": { "s_jerk": 0.1, "s_lat": 0.1, "s_lon": 0.1, "s_steering": 0.1, "s_vel": 0.1, "s_yaw": 0.1 }, "tracking": { "q_lat": 80, "q_lon": 100, "q_vel": 2000, "q_yaw": 2000 }, "optimisation": { "max_iterations": 50, "prediction_horizon_steps": 5 } } }





Note: Fields are read to populate VehicleProperties; ensure the configuration file contains the sections shown above. "dt" in the API is delta time (seconds) between controller steps.



**Parameters**:

* const VehicleControllerConfig & **cfg**
* double **dt**

**Return type**: std::unique_ptr< [IVehicleController](classsimulation__framework_1_1utilities_1_1vehicle_1_1controller_1_1IVehicleController.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1controller_1_1IVehicleController) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::utilities::vehicle::controller::VehicleControllerFactory::Create"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)