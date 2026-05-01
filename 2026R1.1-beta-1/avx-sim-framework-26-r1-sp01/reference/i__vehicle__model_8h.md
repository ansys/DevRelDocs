# File i_vehicle_model.h

![][C++]

**Location**: `autonomy/simulation/utilities/vehicle_model/i_vehicle_model.h`





## Classes

* [simulation_framework::utilities::vehicle::model::IVehicleModel](structsimulation__framework_1_1utilities_1_1vehicle_1_1model_1_1IVehicleModel.md#structsimulation__framework_1_1utilities_1_1vehicle_1_1model_1_1IVehicleModel)

## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::utilities](namespacesimulation__framework_1_1utilities.md#namespacesimulation__framework_1_1utilities)
* [simulation_framework::utilities::vehicle](namespacesimulation__framework_1_1utilities_1_1vehicle.md#namespacesimulation__framework_1_1utilities_1_1vehicle)
* [simulation_framework::utilities::vehicle::model](namespacesimulation__framework_1_1utilities_1_1vehicle_1_1model.md#namespacesimulation__framework_1_1utilities_1_1vehicle_1_1model)

## Includes

* [autonomy/simulation/utilities/vehicle_state/vehicle_state.h](vehicle__state_8h.md#vehicle__state_8h)




## Included by

* [i_vehicle.h](i__vehicle_8h.md#i__vehicle_8h)
* [vehicle_model_factory.h](vehicle__model__factory_8h.md#vehicle__model__factory_8h)




## Source


```cpp


#ifndef AUTONOMY_SIMULATION_UTILITIES_VEHICLEMODEL_IVEHICLEMODEL_H
#define AUTONOMY_SIMULATION_UTILITIES_VEHICLEMODEL_IVEHICLEMODEL_H

#include "autonomy/simulation/utilities/vehicle_state/vehicle_state.h"
namespace simulation_framework
{
namespace utilities
{
namespace vehicle
{
namespace model
{
template <typename T>
struct IVehicleModel
{
    virtual ~IVehicleModel() = default;

    virtual vehicle::state::MotionStateT<T> Evaluate(const vehicle::state::ControlInputT<T>& u,
                                                     const vehicle::state::MotionStateT<T>& current,
                                                     const T& dt) const = 0;
};

}  // namespace model
}  // namespace vehicle
}  // namespace utilities

}  // namespace simulation_framework
#endif  // AUTONOMY_SIMULATION_UTILITIES_VEHICLEMODEL_IVEHICLEMODEL_H
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)