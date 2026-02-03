# File predictive_min_ttc_evaluator.h

![][C++]

**Location**: `autonomy/evaluator/predictive_min_ttc_evaluator/predictive_min_ttc_evaluator.h`





## Classes

* [simulation_framework::evaluator::PredictiveMinTtcEvaluator](classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator.md#classsimulation__framework_1_1evaluator_1_1PredictiveMinTtcEvaluator)

## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [evaluator](namespaceevaluator.md#namespaceevaluator)
* [simulation_framework::evaluator](namespacesimulation__framework_1_1evaluator.md#namespacesimulation__framework_1_1evaluator)

## Includes

* [autonomy/evaluator/predictive_ttc_calculator/predictive_ttc_calculator.h](predictive__ttc__calculator_8h.md#predictive__ttc__calculator_8h)
* [core/kpi/i_kpi/i_kpi.h](i__kpi_8h.md#i__kpi_8h)




## Included by

* [predictive_min_ttc_evaluator.cpp](predictive__min__ttc__evaluator_8cpp.md#predictive__min__ttc__evaluator_8cpp)




## Source


```cpp


#pragma once

#include "autonomy/evaluator/predictive_ttc_calculator/predictive_ttc_calculator.h"
#include "core/kpi/i_kpi/i_kpi.h"

namespace simulation_framework
{

namespace evaluator
{


class PredictiveMinTtcEvaluator : public core::kpi::IKpi<osi3::GroundTruth>
{
  public:
    PredictiveMinTtcEvaluator(const std::string& kpi_name = "predictive_min_ttc");
    ~PredictiveMinTtcEvaluator() = default;

    void Init() override;
    void Reset() override;
    core::kpi::KpiContent CalculateKpi(const osi3::GroundTruth& ground_truth) override;
    core::kpi::Type GetKpiType() const override;

  private:
    std::chrono::milliseconds min_ttc_;
    std::string kpi_name_;
    PredictiveTimeToCollisionCalculator predictive_ttc_calculator_{};
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