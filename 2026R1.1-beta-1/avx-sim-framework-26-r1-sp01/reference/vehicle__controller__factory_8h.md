# File vehicle_controller_factory.h

![][C++]

**Location**: `autonomy/simulation/utilities/vehicle_controller/vehicle_controller_factory.h`





## Classes

* [simulation_framework::utilities::vehicle::controller::VehicleControllerFactory](classsimulation__framework_1_1utilities_1_1vehicle_1_1controller_1_1VehicleControllerFactory.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1controller_1_1VehicleControllerFactory)

## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::utilities](namespacesimulation__framework_1_1utilities.md#namespacesimulation__framework_1_1utilities)
* [simulation_framework::utilities::vehicle](namespacesimulation__framework_1_1utilities_1_1vehicle.md#namespacesimulation__framework_1_1utilities_1_1vehicle)
* [simulation_framework::utilities::vehicle::controller](namespacesimulation__framework_1_1utilities_1_1vehicle_1_1controller.md#namespacesimulation__framework_1_1utilities_1_1vehicle_1_1controller)

## Includes

* [autonomy/simulation/utilities/vehicle_controller/i_vehicle_controller.h](i__vehicle__controller_8h.md#i__vehicle__controller_8h)
* autonomy/simulation/utilities/vehicle_controller/i_vehicle_controller_factory.h
* <memory>




## Source


```cpp


#ifndef AUTONOMY_SIMULATION_UTILITIES_VEHICLECONTROLLER_VEHICLECONTROLLERFACTORY_H
#define AUTONOMY_SIMULATION_UTILITIES_VEHICLECONTROLLER_VEHICLECONTROLLERFACTORY_H

#include "autonomy/simulation/utilities/vehicle_controller/i_vehicle_controller.h"
#include "autonomy/simulation/utilities/vehicle_controller/i_vehicle_controller_factory.h"
#include <memory>
namespace simulation_framework
{
namespace utilities
{
namespace vehicle
{
namespace controller
{
class VehicleControllerFactory : public I_VehicleControllerFactory
{
  public:
    // Single Create API implementation
    std::unique_ptr<IVehicleController> Create(const VehicleControllerConfig& cfg, double dt) override;
};
}  // namespace controller
}  // namespace vehicle
}  // namespace utilities

}  // namespace simulation_framework

#endif  // AUTONOMY_SIMULATION_UTILITIES_VEHICLECONTROLLER_VEHICLECONTROLLERFACTORY_H
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)