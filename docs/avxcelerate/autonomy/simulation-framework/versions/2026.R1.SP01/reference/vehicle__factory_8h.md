# File vehicle_factory.h

![][C++]

**Location**: `autonomy/simulation/utilities/vehicle/vehicle_factory.h`





## Classes

* [simulation_framework::utilities::vehicle::VehicleFactory](classsimulation__framework_1_1utilities_1_1vehicle_1_1VehicleFactory.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1VehicleFactory)

## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::utilities](namespacesimulation__framework_1_1utilities.md#namespacesimulation__framework_1_1utilities)
* [simulation_framework::utilities::vehicle](namespacesimulation__framework_1_1utilities_1_1vehicle.md#namespacesimulation__framework_1_1utilities_1_1vehicle)

## Includes

* autonomy/simulation/utilities/vehicle/i_vehicle_factory.h
* <memory>




## Source


```cpp


#ifndef AUTONOMY_SIMULATION_UTILITIES_VEHICLE_VEHICLEFACTORY_H
#define AUTONOMY_SIMULATION_UTILITIES_VEHICLE_VEHICLEFACTORY_H

#include "autonomy/simulation/utilities/vehicle/i_vehicle_factory.h"
#include <memory>
namespace simulation_framework
{
namespace utilities
{
namespace vehicle
{
class VehicleFactory : public IVehicleFactory
{
  public:
    std::unique_ptr<IVehicle> Create(const VehicleConfig& cfg, double dt) override;
};

}  // namespace vehicle
}  // namespace utilities

}  // namespace simulation_framework

#endif  // AUTONOMY_SIMULATION_UTILITIES_VEHICLE_VEHICLEFACTORY_H
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)