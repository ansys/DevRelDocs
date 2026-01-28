<a id="i__evaluator_8h"></a>
# File i\_evaluator.h

![][C++]

**Location**: `core/kpi/i\_evaluator/i\_evaluator.h`





## Classes

* [simulation\_framework::core::IEvaluator](classsimulation__framework_1_1core_1_1IEvaluator.md#classsimulation__framework_1_1core_1_1IEvaluator)

## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation\_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)

## Includes

* [core/kpi/i_kpi/i_kpi.h](i__kpi_8h.md#i__kpi_8h)


```mermaid
graph LR
3["core/kpi/definition/kpi_definition.h"]
click 3 "kpi__definition_8h_source.md#kpi__definition_8h_source"
3 --> 4
3 --> 7
3 --> 10

1["i_evaluator.h"]
click 1 "i__evaluator_8h.md#i__evaluator_8h"
1 --> 2

2["core/kpi/i_kpi/i_kpi.h"]
click 2 "i__kpi_8h_source.md#i__kpi_8h_source"
2 --> 3
2 --> 9

4["core/time/i_clock/i_clock.h"]
click 4 "i__clock_8h_source.md#i__clock_8h_source"
4 --> 5
4 --> 8
4 --> 9

5["core/time/i_clock/timestamp.h"]
click 5 "timestamp_8h_source.md#timestamp_8h_source"
5 --> 6
5 --> 7

8["chrono"]

6["cstdint"]

9["memory"]

7["string"]

10["vector"]

```


## Included by

* [gt_base_evaluator.h](gt__base__evaluator_8h.md#gt__base__evaluator_8h)


```mermaid
graph RL
2["gt_base_evaluator.h"]
click 2 "gt__base__evaluator_8h_source.md#gt__base__evaluator_8h_source"

1["i_evaluator.h"]
click 1 "i__evaluator_8h.md#i__evaluator_8h"
2 --> 1

```


## Source


```cpp


#pragma once

#include "core/kpi/i_kpi/i_kpi.h"

namespace simulation_framework
{
namespace core
{


template <typename T>
class IEvaluator
{
  public:
    virtual ~IEvaluator() = default;

    virtual void Init() = 0;

    virtual void Reset() = 0;

    virtual void Evaluate() = 0;

    // /**
    //  * Add one KPI into this evaluator
    //  * @param kpi iKpi interface
    //  */
    virtual void AddKpi(std::unique_ptr<kpi::IKpi<T>> kpi) = 0;

    virtual core::kpi::KpiMessage GetKpiMessage() const = 0;

    virtual void SetInput(const T& input) = 0;
};

}  // namespace core
}  // namespace simulation_framework
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)