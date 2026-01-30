# File distance_calculator.h

![][C++]

**Location**: `autonomy/evaluator/distance_calculator/distance_calculator.h`





## Classes

* [simulation_framework::evaluator::DistanceDrivenCalculator](classsimulation__framework_1_1evaluator_1_1DistanceDrivenCalculator.md#classsimulation__framework_1_1evaluator_1_1DistanceDrivenCalculator)

## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [evaluator](namespaceevaluator.md#namespaceevaluator)
* [simulation_framework::evaluator](namespacesimulation__framework_1_1evaluator.md#namespacesimulation__framework_1_1evaluator)

## Includes

* <osi_groundtruth.pb.h>
* <optional>




## Included by

* [distance_calculator.cpp](distance__calculator_8cpp.md#distance__calculator_8cpp)
* [distance_driven_evaluator.h](distance__driven__evaluator_8h.md#distance__driven__evaluator_8h)




## Source


```cpp


#pragma once

#include <osi_groundtruth.pb.h>
#include <optional>

namespace simulation_framework
{

namespace evaluator
{


class DistanceDrivenCalculator
{
  public:
    double Calculate(const osi3::GroundTruth& ground_truth);

  private:
    std::optional<double> last_xpos_;
    std::optional<double> last_ypos_;
    bool is_initialized_{false};
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