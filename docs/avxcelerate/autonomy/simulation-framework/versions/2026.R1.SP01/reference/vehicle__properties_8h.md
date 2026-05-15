# File vehicle_properties.h

![][C++]

**Location**: `autonomy/simulation/utilities/vehicle_properties/vehicle_properties.h`





## Classes

* [simulation_framework::utilities::vehicle::properties::SingleTrackParameters](structsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1SingleTrackParameters.md#structsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1SingleTrackParameters)
* [simulation_framework::utilities::vehicle::properties::Limits](structsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1Limits.md#structsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1Limits)
* [simulation_framework::utilities::vehicle::properties::Sensitivity](structsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1Sensitivity.md#structsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1Sensitivity)
* [simulation_framework::utilities::vehicle::properties::Tracking](structsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1Tracking.md#structsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1Tracking)
* [simulation_framework::utilities::vehicle::properties::Restrictions](structsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1Restrictions.md#structsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1Restrictions)
* [simulation_framework::utilities::vehicle::properties::Optimisation](structsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1Optimisation.md#structsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1Optimisation)
* [simulation_framework::utilities::vehicle::properties::ControllerTuning](structsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1ControllerTuning.md#structsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1ControllerTuning)
* [simulation_framework::utilities::vehicle::properties::VehicleProperties](classsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1VehicleProperties.md#classsimulation__framework_1_1utilities_1_1vehicle_1_1properties_1_1VehicleProperties)

## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::utilities](namespacesimulation__framework_1_1utilities.md#namespacesimulation__framework_1_1utilities)
* [simulation_framework::utilities::vehicle](namespacesimulation__framework_1_1utilities_1_1vehicle.md#namespacesimulation__framework_1_1utilities_1_1vehicle)
* [simulation_framework::utilities::vehicle::properties](namespacesimulation__framework_1_1utilities_1_1vehicle_1_1properties.md#namespacesimulation__framework_1_1utilities_1_1vehicle_1_1properties)

## Includes

* <nlohmann/json.hpp>
* <string>




## Included by

* [vehicle_model_factory.h](vehicle__model__factory_8h.md#vehicle__model__factory_8h)




## Source


```cpp


#ifndef AUTONOMY_SIMULATION_UTILITIES_VEHICLEPROPERTIES_VEHICLEPROPERTIES_H
#define AUTONOMY_SIMULATION_UTILITIES_VEHICLEPROPERTIES_VEHICLEPROPERTIES_H

#include <nlohmann/json.hpp>
#include <string>
namespace simulation_framework
{
namespace utilities
{
namespace vehicle
{
namespace properties
{

struct SingleTrackParameters
{
    double lf;  // l_f [m] - Distance from front axle to center of gravity
    double lr;  // l_r [m] - Distance from rear axle to center of gravity

    bool operator==(const SingleTrackParameters& other) const { return lf == other.lf && lr == other.lr; }
};

struct Limits
{
    double max_acceleration;  // physical acceleration limit of vehicle
    double min_acceleration;

    double max_steering_angle;  // physical steering angle limit of vehicle
    double min_steering_angle;

    bool operator==(const Limits& other) const
    {
        return max_acceleration == other.max_acceleration && min_acceleration == other.min_acceleration &&
               max_steering_angle == other.max_steering_angle && min_steering_angle == other.min_steering_angle;
    }
};

struct Sensitivity
{
    double s_lon;       // sensitivity gain for longitudinal displacement
    double s_lat;       // sensitivity gain for lateral displacement
    double s_yaw;       // sensitivity gain for yaw
    double s_vel;       // sensitivity gain for velocity norm
    double s_jerk;      // sensitivity gain for jerk
    double s_steering;  // sensitivity gain for steering

    bool operator==(const Sensitivity& other) const
    {
        return s_lon == other.s_lon && s_lat == other.s_lat && s_yaw == other.s_yaw && s_vel == other.s_vel &&
               s_jerk == other.s_jerk && s_steering == other.s_steering;
    }
};

struct Tracking
{
    double q_lon;  // gain for longitudinal displacement error
    double q_lat;  // gain for lateral displacement error
    double q_yaw;  // gain for yaw error
    double q_vel;  // gain for velocity norm error

    bool operator==(const Tracking& other) const
    {
        return q_lon == other.q_lon && q_lat == other.q_lat && q_yaw == other.q_yaw && q_vel == other.q_vel;
    }
};

struct Restrictions
{
    double r_jerk;      // limiting gain for rate of change of acceleration
    double r_steering;  // limiting/regularization gain for steering

    bool operator==(const Restrictions& other) const
    {
        return r_jerk == other.r_jerk && r_steering == other.r_steering;
    }
};

struct Optimisation
{
    size_t prediction_horizon_steps;  // prediction horizon steps from reference path to follow
    size_t max_iterations;            // max iterations limit for optimisation solver

    bool operator==(const Optimisation& other) const
    {
        return prediction_horizon_steps == other.prediction_horizon_steps && max_iterations == other.max_iterations;
    }
};

struct ControllerTuning
{
    Sensitivity sensitivity;
    Tracking tracking;
    Restrictions restrictions;
    Optimisation optimisation;

    bool operator==(const ControllerTuning& other) const
    {
        return sensitivity == other.sensitivity && tracking == other.tracking && restrictions == other.restrictions &&
               optimisation == other.optimisation;
    }
};

class VehicleProperties
{

  public:
    VehicleProperties(const std::string& filename);

    VehicleProperties(const nlohmann::json& config);

    SingleTrackParameters GetSingleTrackParameters() const;

    Limits GetLimits() const;

    ControllerTuning GetControllerTuning() const;

  private:
    void ValidateVehicleJson(const nlohmann::json& vehicle_params) const;
    void ParseFromJson(const nlohmann::json& vehicle_params);
    SingleTrackParameters single_track_params_;
    std::string vehicle_name_;
    Limits limits_;
    ControllerTuning controller_tuning_;
};
}  // namespace properties
}  // namespace vehicle
}  // namespace utilities

}  // namespace simulation_framework
#endif  // AUTONOMY_SIMULATION_UTILITIES_VEHICLEPROPERTIES_VEHICLEPROPERTIES_H
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)