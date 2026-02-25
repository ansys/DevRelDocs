# File min_ttc_evaluator.cpp

![][C++]

**Location**: `autonomy/evaluator/min_ttc_evaluator/min_ttc_evaluator.cpp`





## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [evaluator](namespaceevaluator.md#namespaceevaluator)
* [simulation_framework::evaluator](namespacesimulation__framework_1_1evaluator.md#namespacesimulation__framework_1_1evaluator)

## Includes

* [autonomy/evaluator/min_ttc_evaluator/min_ttc_evaluator.h](min__ttc__evaluator_8h.md#min__ttc__evaluator_8h)




## Source


```cpp


#include "autonomy/evaluator/min_ttc_evaluator/min_ttc_evaluator.h"

namespace simulation_framework
{

namespace evaluator
{

MinTtcEvaluator::MinTtcEvaluator(const std::string& kpi_name)
    : min_ttc_(std::chrono::milliseconds::max()), kpi_name_(kpi_name)
{
}

void MinTtcEvaluator::Init() {}

void MinTtcEvaluator::Reset()
{
    min_ttc_ = std::chrono::milliseconds::max();
}

core::kpi::KpiContent MinTtcEvaluator::CalculateKpi(const osi3::GroundTruth& ground_truth)
{
    core::kpi::KpiContent kpi_content;
    kpi_content.name = kpi_name_;
    kpi_content.data_type = core::kpi::Datatype::Value::kDouble;
    kpi_content.type = GetKpiType();
    kpi_content.unit = "ms";
    kpi_content.timestamp.seconds = ground_truth.timestamp().seconds();
    kpi_content.timestamp.nanoseconds = ground_truth.timestamp().nanos();

    const auto ttc = ttc_calculator_.Calculate(ground_truth);

    if (ttc < min_ttc_)
    {
        min_ttc_ = ttc;
    }

    kpi_content.value = std::to_string(min_ttc_.count());

    return kpi_content;
}

core::kpi::Type MinTtcEvaluator::GetKpiType() const
{
    return core::kpi::Type::kScalar;
}

}  // namespace evaluator
}  // namespace simulation_framework
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)