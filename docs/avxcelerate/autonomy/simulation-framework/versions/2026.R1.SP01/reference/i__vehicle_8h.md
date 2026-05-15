# File i_vehicle.h

![][C++]

**Location**: `autonomy/simulation/utilities/vehicle/i_vehicle.h`





## Classes

* [simulation_framework::utilities::vehicle::IVehicle](classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1IVehicle)

## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::utilities](namespacesimulation__framework_1_1utilities.md#namespacesimulation__framework_1_1utilities)
* [simulation_framework::utilities::vehicle](namespacesimulation__framework_1_1utilities_1_1vehicle.md#namespacesimulation__framework_1_1utilities_1_1vehicle)

## Includes

* [autonomy/simulation/utilities/vehicle_controller/i_vehicle_controller.h](i__vehicle__controller_8h.md#i__vehicle__controller_8h)
* [autonomy/simulation/utilities/vehicle_model/i_vehicle_model.h](i__vehicle__model_8h.md#i__vehicle__model_8h)
* [autonomy/simulation/utilities/vehicle_state/vehicle_state.h](vehicle__state_8h.md#vehicle__state_8h)
* <memory>
* <utility>
* <vector>




## Source


```cpp


#ifndef AUTONOMY_SIMULATION_UTILITIES_VEHICLE_IVEHICLE_H
#define AUTONOMY_SIMULATION_UTILITIES_VEHICLE_IVEHICLE_H

#include "autonomy/simulation/utilities/vehicle_controller/i_vehicle_controller.h"
#include "autonomy/simulation/utilities/vehicle_model/i_vehicle_model.h"
#include "autonomy/simulation/utilities/vehicle_state/vehicle_state.h"
#include <memory>
#include <utility>
#include <vector>
namespace simulation_framework
{
namespace utilities
{
namespace vehicle
{
class IVehicle
{
  public:
    virtual ~IVehicle() = default;

    virtual std::pair<state::MotionState, state::ControlInput> RequestMotionState(
        const state::MotionState& current,
        const std::vector<state::MotionState>& request,
        double dt) = 0;

    virtual void RegisterController(std::unique_ptr<controller::IVehicleController> controller) = 0;

    virtual void RegisterModel(std::unique_ptr<model::IVehicleModel<double>> model) = 0;

    virtual const controller::IVehicleController* GetController() const = 0;

    virtual const model::IVehicleModel<double>* GetModel() const = 0;
};

}  // namespace vehicle
}  // namespace utilities

}  // namespace simulation_framework

#endif  // AUTONOMY_SIMULATION_UTILITIES_VEHICLE_IVEHICLE_H
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)