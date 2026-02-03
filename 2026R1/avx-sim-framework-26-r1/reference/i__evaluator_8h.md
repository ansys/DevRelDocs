# File i_evaluator.h

![][C++]

**Location**: `core/kpi/i_evaluator/i_evaluator.h`





## Classes

* [simulation_framework::core::IEvaluator](classsimulation__framework_1_1core_1_1IEvaluator.md#classsimulation__framework_1_1core_1_1IEvaluator)

## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)

## Includes

* [core/kpi/i_kpi/i_kpi.h](i__kpi_8h.md#i__kpi_8h)




## Included by

* [gt_base_evaluator.h](gt__base__evaluator_8h.md#gt__base__evaluator_8h)




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


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)