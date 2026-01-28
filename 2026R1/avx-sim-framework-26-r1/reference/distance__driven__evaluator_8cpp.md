<a id="distance__driven__evaluator_8cpp"></a>
# File distance\_driven\_evaluator.cpp

![][C++]

**Location**: `autonomy/evaluator/distance\_driven\_evaluator/distance\_driven\_evaluator.cpp`





## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation\_framework::evaluator](namespacesimulation__framework_1_1evaluator.md#namespacesimulation__framework_1_1evaluator)

## Includes

* [autonomy/evaluator/distance_driven_evaluator/distance_driven_evaluator.h](distance__driven__evaluator_8h.md#distance__driven__evaluator_8h)


```mermaid
graph LR
3["autonomy/evaluator/distance_calculator/distance_calculator.h"]
click 3 "distance__calculator_8h_source.md#distance__calculator_8h_source"
3 --> 4
3 --> 5

1["distance_driven_evaluator.cpp"]
click 1 "distance__driven__evaluator_8cpp.md#distance__driven__evaluator_8cpp"
1 --> 2

2["autonomy/evaluator/distance_driven_evaluator/distance_driven_evaluator.h"]
click 2 "distance__driven__evaluator_8h_source.md#distance__driven__evaluator_8h_source"
2 --> 3
2 --> 6

7["core/kpi/definition/kpi_definition.h"]
click 7 "kpi__definition_8h_source.md#kpi__definition_8h_source"
7 --> 8
7 --> 11
7 --> 14

6["core/kpi/i_kpi/i_kpi.h"]
click 6 "i__kpi_8h_source.md#i__kpi_8h_source"
6 --> 7
6 --> 13

8["core/time/i_clock/i_clock.h"]
click 8 "i__clock_8h_source.md#i__clock_8h_source"
8 --> 9
8 --> 12
8 --> 13

9["core/time/i_clock/timestamp.h"]
click 9 "timestamp_8h_source.md#timestamp_8h_source"
9 --> 10
9 --> 11

12["chrono"]

10["cstdint"]

13["memory"]

5["optional"]

4["osi_groundtruth.pb.h"]

11["string"]

14["vector"]

```


## Source


```cpp


#include "autonomy/evaluator/distance_driven_evaluator/distance_driven_evaluator.h"

namespace simulation_framework
{
namespace evaluator
{

DistanceDrivenEvaluator::DistanceDrivenEvaluator(const std::string& kpi_name) : driven_dist_(0.0), kpi_name_(kpi_name)
{
}

void DistanceDrivenEvaluator::Init() {}

void DistanceDrivenEvaluator::Reset()
{
    driven_dist_ = 0.0;
}

core::kpi::KpiContent DistanceDrivenEvaluator::CalculateKpi(const osi3::GroundTruth& ground_truth)
{
    core::kpi::KpiContent kpi_content;
    kpi_content.name = kpi_name_;
    kpi_content.data_type = core::kpi::Datatype::Value::kDouble;
    kpi_content.type = GetKpiType();
    kpi_content.unit = "m";
    kpi_content.timestamp.seconds = ground_truth.timestamp().seconds();
    kpi_content.timestamp.nanoseconds = ground_truth.timestamp().nanos();

    const auto dist_from_last_position = distance_calculator_.Calculate(ground_truth);
    driven_dist_ += dist_from_last_position;
    kpi_content.value = std::to_string(driven_dist_);

    return kpi_content;
}

core::kpi::Type DistanceDrivenEvaluator::GetKpiType() const
{
    return core::kpi::Type::kScalar;
}

}  // namespace evaluator
}  // namespace simulation_framework
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)