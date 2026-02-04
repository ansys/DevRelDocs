# File ttc_calculator.cpp

![][C++]

**Location**: `autonomy/evaluator/ttc_calculator/ttc_calculator.cpp`





## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::evaluator](namespacesimulation__framework_1_1evaluator.md#namespacesimulation__framework_1_1evaluator)

## Includes

* [autonomy/evaluator/ttc_calculator/ttc_calculator.h](ttc__calculator_8h.md#ttc__calculator_8h)
* autonomy/evaluator/ttc_calculator/utils.h
* <optional>




## Source


```cpp


#include "autonomy/evaluator/ttc_calculator/ttc_calculator.h"
#include "autonomy/evaluator/ttc_calculator/utils.h"
#include <optional>

namespace simulation_framework
{
namespace evaluator
{

using namespace utils;

std::chrono::milliseconds TimeToCollisionCalculator::Calculate(const osi3::GroundTruth& ground_truth) const
{
    auto host_vehicle_index = std::make_optional<int>();

    const auto& host_vehicle_id = ground_truth.host_vehicle_id();
    const auto moving_objects_count = ground_truth.moving_object_size();

    for (int i = 0; i < moving_objects_count; ++i)
    {
        if (host_vehicle_id.value() == ground_truth.moving_object(i).id().value())
        {
            host_vehicle_index.value() = i;
            break;
        }
    }

    if (!host_vehicle_index.has_value())
    {
        return std::chrono::milliseconds::max();
    }

    const auto& host_vehicle_base = ground_truth.moving_object(host_vehicle_index.value()).base();
    BoundingBox bounding_box_ego{host_vehicle_base.position().x(),
                                 host_vehicle_base.position().y(),
                                 host_vehicle_base.dimension().width(),
                                 host_vehicle_base.dimension().length(),
                                 host_vehicle_base.orientation().yaw(),
                                 host_vehicle_base.velocity().x(),
                                 host_vehicle_base.velocity().y()};
    BoundingBox bounding_box_target{};
    std::optional<int> target_vehicle_index = std::make_optional<int>();

    auto minimum_distance_to_host{std::numeric_limits<double>::infinity()};

    for (int i = 0; i < moving_objects_count; ++i)
    {
        if (host_vehicle_index == i)
        {
            continue;
        }

        const auto& vehicle_base = ground_truth.moving_object(i).base();
        BoundingBox bounding_box_vehicle{vehicle_base.position().x(),
                                         vehicle_base.position().y(),
                                         vehicle_base.dimension().width(),
                                         vehicle_base.dimension().length(),
                                         vehicle_base.orientation().yaw(),
                                         vehicle_base.velocity().x(),
                                         vehicle_base.velocity().y()};

        if (!CanPotentiallyHit(bounding_box_ego, bounding_box_vehicle))
        {
            continue;
        }

        auto host_to_vehicle_distance = Calculate2dVectorNorm({bounding_box_ego.x, bounding_box_ego.y},
                                                              {bounding_box_vehicle.x, bounding_box_vehicle.y}) -
                                        (bounding_box_ego.length * 0.5 + bounding_box_vehicle.length * 0.5);

        if (minimum_distance_to_host > host_to_vehicle_distance)
        {
            minimum_distance_to_host = host_to_vehicle_distance;
            target_vehicle_index.value() = i;
            bounding_box_target = bounding_box_vehicle;
        }
    }

    if (!target_vehicle_index.has_value())
    {
        return std::chrono::milliseconds::max();
    }

    const double host_to_target_relative_velocity =
        Calculate2dVectorNorm({bounding_box_ego.velocity_x, bounding_box_ego.velocity_y}, {}) -
        Calculate2dVectorNorm({bounding_box_target.velocity_x, bounding_box_target.velocity_y}, {});

    double distance_to_target = minimum_distance_to_host;

    if ((bounding_box_ego.x - bounding_box_target.x) > 0.0)
    {
        distance_to_target = -minimum_distance_to_host;
    }

    std::chrono::milliseconds time_to_collision{std::chrono::milliseconds::max()};

    if (AreBoundingBoxesOverlapped(bounding_box_ego, bounding_box_target))
    {
        return std::chrono::milliseconds{0};
    }

    if (host_to_target_relative_velocity != 0.0 &&
        (std::signbit(distance_to_target) == std::signbit(host_to_target_relative_velocity)))
    {
        // Introducing the following factor to get milliseconds instead of seconds
        uint64_t time_conversion_factor = 1000u;
        time_to_collision = std::chrono::milliseconds{static_cast<uint64_t>(
            std::abs(distance_to_target / host_to_target_relative_velocity) * time_conversion_factor)};
    }

    return time_to_collision;
};

}  // namespace evaluator
}  // namespace simulation_framework
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)