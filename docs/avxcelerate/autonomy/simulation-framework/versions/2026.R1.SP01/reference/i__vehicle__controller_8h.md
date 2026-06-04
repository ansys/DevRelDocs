# File i_vehicle_controller.h

![][C++]

**Location**: `autonomy/simulation/utilities/vehicle_controller/i_vehicle_controller.h`





## Classes

* [simulation_framework::utilities::vehicle::controller::VehicleControllerInput](structsimulation__framework_1_1utilities_1_1vehicle_1_1controller_1_1VehicleControllerInput.md#structsimulation__framework_1_1utilities_1_1vehicle_1_1controller_1_1VehicleControllerInput)
* [simulation_framework::utilities::vehicle::controller::VehicleControllerReference](structsimulation__framework_1_1utilities_1_1vehicle_1_1controller_1_1VehicleControllerReference.md#structsimulation__framework_1_1utilities_1_1vehicle_1_1controller_1_1VehicleControllerReference)
* [simulation_framework::utilities::vehicle::controller::IVehicleController](classsimulation__framework_1_1utilities_1_1vehicle_1_1controller_1_1IVehicleController.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1controller_1_1IVehicleController)

## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::utilities](namespacesimulation__framework_1_1utilities.md#namespacesimulation__framework_1_1utilities)
* [simulation_framework::utilities::vehicle](namespacesimulation__framework_1_1utilities_1_1vehicle.md#namespacesimulation__framework_1_1utilities_1_1vehicle)
* [simulation_framework::utilities::vehicle::controller](namespacesimulation__framework_1_1utilities_1_1vehicle_1_1controller.md#namespacesimulation__framework_1_1utilities_1_1vehicle_1_1controller)

## Includes

* [autonomy/simulation/utilities/vehicle_state/vehicle_state.h](vehicle__state_8h.md#vehicle__state_8h)
* <memory>




## Included by

* [i_vehicle.h](i__vehicle_8h.md#i__vehicle_8h)
* [vehicle_controller_factory.h](vehicle__controller__factory_8h.md#vehicle__controller__factory_8h)




## Source


```cpp


#ifndef AUTONOMY_SIMULATION_UTILITIES_VEHICLECONTROLLER_IVEHICLE_CONTROLLER_H
#define AUTONOMY_SIMULATION_UTILITIES_VEHICLECONTROLLER_IVEHICLE_CONTROLLER_H

#include "autonomy/simulation/utilities/vehicle_state/vehicle_state.h"
#include <memory>
namespace simulation_framework
{
namespace utilities
{
namespace vehicle
{
namespace controller
{
struct VehicleControllerInput
{
    std::shared_ptr<void> input{};
};

struct VehicleControllerReference
{
    std::shared_ptr<void> reference{};
};

class IVehicleController
{
  public:
    virtual ~IVehicleController() = default;

    virtual vehicle::state::ControlInput Evaluate(const VehicleControllerInput& current,
                                                  const VehicleControllerReference& reference) const = 0;
};

}  // namespace controller
}  // namespace vehicle
}  // namespace utilities

}  // namespace simulation_framework

#endif  // AUTONOMY_SIMULATION_UTILITIES_VEHICLECONTROLLER_IVEHICLE_CONTROLLER_H
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)