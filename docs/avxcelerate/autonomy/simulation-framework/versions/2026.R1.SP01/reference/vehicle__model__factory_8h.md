# File vehicle_model_factory.h

![][C++]

**Location**: `autonomy/simulation/utilities/vehicle_model/vehicle_model_factory.h`





## Includes

* [autonomy/simulation/utilities/vehicle_model/i_vehicle_model.h](i__vehicle__model_8h.md#i__vehicle__model_8h)
* autonomy/simulation/utilities/vehicle_model/i_vehicle_model_factory.h
* [autonomy/simulation/utilities/vehicle_properties/vehicle_properties.h](vehicle__properties_8h.md#vehicle__properties_8h)
* <memory>
* <string>




## Source


```cpp


#ifndef AUTONOMY_SIMULATION_UTILITIES_VEHICLEMODEL_VEHICLEMODELFACTORY_H
#define AUTONOMY_SIMULATION_UTILITIES_VEHICLEMODEL_VEHICLEMODELFACTORY_H

#include "autonomy/simulation/utilities/vehicle_model/i_vehicle_model.h"
#include "autonomy/simulation/utilities/vehicle_model/i_vehicle_model_factory.h"
#include "autonomy/simulation/utilities/vehicle_properties/vehicle_properties.h"
#include <memory>
#include <string>
namespace simulation_framework
{
namespace utilities
{
namespace vehicle
{
namespace model
{
class VehicleModelFactory : public I_VehicleModelFactory
{
  public:
    std::unique_ptr<IVehicleModel<double>> Create(const VehicleModelConfig& cfg) override;
};

}  // namespace model
}  // namespace vehicle
}  // namespace utilities

}  // namespace simulation_framework

#endif  // AUTONOMY_SIMULATION_UTILITIES_VEHICLEMODEL_VEHICLEMODELFACTORY_H
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)