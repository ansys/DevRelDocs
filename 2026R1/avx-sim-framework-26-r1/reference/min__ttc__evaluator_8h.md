<a id="min__ttc__evaluator_8h"></a>
# File min\_ttc\_evaluator.h

![][C++]

**Location**: `autonomy/evaluator/min\_ttc\_evaluator/min\_ttc\_evaluator.h`





## Classes

* [simulation\_framework::evaluator::MinTtcEvaluator](classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator.md#classsimulation__framework_1_1evaluator_1_1MinTtcEvaluator)

## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [evaluator](namespaceevaluator.md#namespaceevaluator)
* [simulation\_framework::evaluator](namespacesimulation__framework_1_1evaluator.md#namespacesimulation__framework_1_1evaluator)

## Includes

* [autonomy/evaluator/ttc_calculator/ttc_calculator.h](ttc__calculator_8h.md#ttc__calculator_8h)
* [core/kpi/i_kpi/i_kpi.h](i__kpi_8h.md#i__kpi_8h)


```mermaid
graph LR
1["min_ttc_evaluator.h"]
click 1 "min__ttc__evaluator_8h.md#min__ttc__evaluator_8h"
1 --> 2
1 --> 4

2["autonomy/evaluator/ttc_calculator/ttc_calculator.h"]
click 2 "ttc__calculator_8h_source.md#ttc__calculator_8h_source"
2 --> 3

5["core/kpi/definition/kpi_definition.h"]
click 5 "kpi__definition_8h_source.md#kpi__definition_8h_source"
5 --> 6
5 --> 9
5 --> 12

4["core/kpi/i_kpi/i_kpi.h"]
click 4 "i__kpi_8h_source.md#i__kpi_8h_source"
4 --> 5
4 --> 11

6["core/time/i_clock/i_clock.h"]
click 6 "i__clock_8h_source.md#i__clock_8h_source"
6 --> 7
6 --> 10
6 --> 11

7["core/time/i_clock/timestamp.h"]
click 7 "timestamp_8h_source.md#timestamp_8h_source"
7 --> 8
7 --> 9

10["chrono"]

8["cstdint"]

11["memory"]

3["osi_groundtruth.pb.h"]

9["string"]

12["vector"]

```


## Included by

* [min_ttc_evaluator.cpp](min__ttc__evaluator_8cpp.md#min__ttc__evaluator_8cpp)


```mermaid
graph RL
2["min_ttc_evaluator.cpp"]
click 2 "min__ttc__evaluator_8cpp_source.md#min__ttc__evaluator_8cpp_source"

1["min_ttc_evaluator.h"]
click 1 "min__ttc__evaluator_8h.md#min__ttc__evaluator_8h"
2 --> 1

```


## Source


```cpp


#pragma once

#include "autonomy/evaluator/ttc_calculator/ttc_calculator.h"
#include "core/kpi/i_kpi/i_kpi.h"

namespace simulation_framework
{

namespace evaluator
{


class MinTtcEvaluator : public core::kpi::IKpi<osi3::GroundTruth>
{
  public:
    MinTtcEvaluator(const std::string& kpi_name = "min_ttc");
    ~MinTtcEvaluator() = default;

    void Init() override;
    void Reset() override;
    core::kpi::KpiContent CalculateKpi(const osi3::GroundTruth& ground_truth) override;
    core::kpi::Type GetKpiType() const override;

  private:
    std::chrono::milliseconds min_ttc_;
    std::string kpi_name_;
    TimeToCollisionCalculator ttc_calculator_{};
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