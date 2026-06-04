# File vehicle_state.h

![][C++]

**Location**: `autonomy/simulation/utilities/vehicle_state/vehicle_state.h`





## Classes

* [simulation_framework::utilities::vehicle::state::OrientationT](structsimulation__framework_1_1utilities_1_1vehicle_1_1state_1_1OrientationT.md#structsimulation__framework_1_1utilities_1_1vehicle_1_1state_1_1OrientationT)
* [simulation_framework::utilities::vehicle::state::Vector3DT](structsimulation__framework_1_1utilities_1_1vehicle_1_1state_1_1Vector3DT.md#structsimulation__framework_1_1utilities_1_1vehicle_1_1state_1_1Vector3DT)
* [simulation_framework::utilities::vehicle::state::MotionStateT](structsimulation__framework_1_1utilities_1_1vehicle_1_1state_1_1MotionStateT.md#structsimulation__framework_1_1utilities_1_1vehicle_1_1state_1_1MotionStateT)
* [simulation_framework::utilities::vehicle::state::ControlInputT](structsimulation__framework_1_1utilities_1_1vehicle_1_1state_1_1ControlInputT.md#structsimulation__framework_1_1utilities_1_1vehicle_1_1state_1_1ControlInputT)

## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::utilities](namespacesimulation__framework_1_1utilities.md#namespacesimulation__framework_1_1utilities)
* [simulation_framework::utilities::vehicle](namespacesimulation__framework_1_1utilities_1_1vehicle.md#namespacesimulation__framework_1_1utilities_1_1vehicle)
* [simulation_framework::utilities::vehicle::state](namespacesimulation__framework_1_1utilities_1_1vehicle_1_1state.md#namespacesimulation__framework_1_1utilities_1_1vehicle_1_1state)

## Includes

* <iostream>




## Included by

* [i_vehicle.h](i__vehicle_8h.md#i__vehicle_8h)
* [i_vehicle_controller.h](i__vehicle__controller_8h.md#i__vehicle__controller_8h)
* [i_vehicle_model.h](i__vehicle__model_8h.md#i__vehicle__model_8h)




## Source


```cpp


#ifndef AUTONOMY_SIMULATION_UTILITIES_VEHICLESTATE_VEHICLESTATE_H
#define AUTONOMY_SIMULATION_UTILITIES_VEHICLESTATE_VEHICLESTATE_H

#include <iostream>
namespace simulation_framework
{
namespace utilities
{
namespace vehicle
{
namespace state
{

template <typename T>
struct OrientationT
{
    T yaw;
    T roll;
    T pitch;
};

template <typename T>
struct Vector3DT
{
    T x;
    T y;
    T z;
};

template <typename T>
struct MotionStateT
{
    Vector3DT<T> position;
    OrientationT<T> orientation;
    Vector3DT<T> velocity;
    Vector3DT<T> acceleration;
};

template <typename T>
struct ControlInputT
{
    T steering_angle;
    T acceleration;
};

template <typename T>
void PrintMotionState(const MotionStateT<T>& state, std::ostream& os = std::cout)
{
    os << "Position: (" << state.position.x << ", " << state.position.y << ", " << state.position.z << ")\n";
    os << "Orientation: (Yaw: " << state.orientation.yaw << ", Roll: " << state.orientation.roll
       << ", Pitch: " << state.orientation.pitch << ")\n";
    os << "Velocity: (" << state.velocity.x << ", " << state.velocity.y << ", " << state.velocity.z << ")\n";
    os << "Acceleration: (" << state.acceleration.x << ", " << state.acceleration.y << ", " << state.acceleration.z
       << ")\n";
}

using Orientation = OrientationT<double>;
using Vector3D = Vector3DT<double>;
using MotionState = MotionStateT<double>;
using ControlInput = ControlInputT<double>;

}  // namespace state
}  // namespace vehicle
}  // namespace utilities

}  // namespace simulation_framework

#endif  // AUTONOMY_SIMULATION_UTILITIES_VEHICLESTATE_VEHICLESTATE_H
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)