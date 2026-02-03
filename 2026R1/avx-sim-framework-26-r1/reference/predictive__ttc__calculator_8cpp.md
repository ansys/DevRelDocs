# File predictive_ttc_calculator.cpp

![][C++]

**Location**: `autonomy/evaluator/predictive_ttc_calculator/predictive_ttc_calculator.cpp`





## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::evaluator](namespacesimulation__framework_1_1evaluator.md#namespacesimulation__framework_1_1evaluator)
* [utils](namespaceutils.md#namespaceutils)

## Includes

* [autonomy/evaluator/predictive_ttc_calculator/predictive_ttc_calculator.h](predictive__ttc__calculator_8h.md#predictive__ttc__calculator_8h)
* autonomy/evaluator/predictive_ttc_calculator/utils.h
* <optional>




## Source


```cpp


#include "autonomy/evaluator/predictive_ttc_calculator/predictive_ttc_calculator.h"
#include "autonomy/evaluator/predictive_ttc_calculator/utils.h"
#include <optional>
namespace simulation_framework
{
namespace evaluator
{

using namespace utils;

std::chrono::milliseconds PredictiveTimeToCollisionCalculator::Calculate(const osi3::GroundTruth& ground_truth) const
{
    auto host_vehicle_validation = std::make_optional<int>();

    const auto& host_vehicle_id = ground_truth.host_vehicle_id();
    BoundingBox bounding_box_ego;
    const auto& gt_moving_objects = ground_truth.moving_object();
    for (auto object : gt_moving_objects)
    {
        if (host_vehicle_id.value() == object.id().value())
        {
            host_vehicle_validation = object.id().value();
            bounding_box_ego.x = object.base().position().x();
            bounding_box_ego.y = object.base().position().y();
            bounding_box_ego.width = object.base().dimension().width();
            bounding_box_ego.length = object.base().dimension().length();
            bounding_box_ego.yaw = object.base().orientation().yaw();
            bounding_box_ego.velocity_x = object.base().velocity().x();
            bounding_box_ego.velocity_y = object.base().velocity().y();
            break;
        }
    }

    if (!host_vehicle_validation.has_value())
    {
        return std::chrono::milliseconds::max();
    }

    auto predictive_minimum_ttc{std::chrono::milliseconds::max()};

    for (auto object : gt_moving_objects)
    {
        if (host_vehicle_id.value() == object.id().value())
        {
            continue;
        }

        const auto& vehicle_base = object.base();
        BoundingBox bounding_box_vehicle{vehicle_base.position().x(),
                                         vehicle_base.position().y(),
                                         vehicle_base.dimension().width(),
                                         vehicle_base.dimension().length(),
                                         vehicle_base.orientation().yaw(),
                                         vehicle_base.velocity().x(),
                                         vehicle_base.velocity().y()};

        if (AreBoundingBoxesOverlapped(bounding_box_vehicle, bounding_box_ego))
        {
            return std::chrono::milliseconds(0);
        }
        predictive_minimum_ttc =
            std::min(PredictTimeToCollision(
                         bounding_box_vehicle, bounding_box_ego, predictive_ttc_precision_, predictive_ttc_max_),
                     predictive_minimum_ttc);
    }

    return predictive_minimum_ttc;
};

}  // namespace evaluator
}  // namespace simulation_framework
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)