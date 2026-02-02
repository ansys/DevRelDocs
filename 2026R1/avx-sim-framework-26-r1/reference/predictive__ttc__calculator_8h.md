# File predictive_ttc_calculator.h

![][C++]

**Location**: `autonomy/evaluator/predictive_ttc_calculator/predictive_ttc_calculator.h`





## Classes

* [simulation_framework::evaluator::PredictiveTimeToCollisionCalculator](classsimulation__framework_1_1evaluator_1_1PredictiveTimeToCollisionCalculator.md#classsimulation__framework_1_1evaluator_1_1PredictiveTimeToCollisionCalculator)

## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [evaluator](namespaceevaluator.md#namespaceevaluator)
* [simulation_framework::evaluator](namespacesimulation__framework_1_1evaluator.md#namespacesimulation__framework_1_1evaluator)

## Includes

* <osi_groundtruth.pb.h>




## Included by

* [predictive_min_ttc_evaluator.h](predictive__min__ttc__evaluator_8h.md#predictive__min__ttc__evaluator_8h)
* [predictive_ttc_calculator.cpp](predictive__ttc__calculator_8cpp.md#predictive__ttc__calculator_8cpp)




## Source


```cpp


#pragma once

#include <osi_groundtruth.pb.h>

namespace simulation_framework
{

namespace evaluator
{


class PredictiveTimeToCollisionCalculator
{
  public:
    std::chrono::milliseconds Calculate(const osi3::GroundTruth& ground_truth) const;

  private:
    uint64_t predictive_ttc_precision_{100};
    uint64_t predictive_ttc_max_{20000};
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