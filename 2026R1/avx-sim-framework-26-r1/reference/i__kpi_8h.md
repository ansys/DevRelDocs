<a id="i__kpi_8h"></a>
# File i\_kpi.h

![][C++]

**Location**: `core/kpi/i\_kpi/i\_kpi.h`





## Classes

* [simulation\_framework::core::kpi::IKpi](classsimulation__framework_1_1core_1_1kpi_1_1IKpi.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpi)

## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [core](namespacecore.md#namespacecore)
* [simulation\_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)
* [kpi](namespacekpi.md#namespacekpi)
* [simulation\_framework::core::kpi](namespacesimulation__framework_1_1core_1_1kpi.md#namespacesimulation__framework_1_1core_1_1kpi)

## Includes

* [core/kpi/definition/kpi_definition.h](kpi__definition_8h.md#kpi__definition_8h)
* <memory>


```mermaid
graph LR
2["core/kpi/definition/kpi_definition.h"]
click 2 "kpi__definition_8h_source.md#kpi__definition_8h_source"
2 --> 3
2 --> 6
2 --> 9

1["i_kpi.h"]
click 1 "i__kpi_8h.md#i__kpi_8h"
1 --> 2
1 --> 8

3["core/time/i_clock/i_clock.h"]
click 3 "i__clock_8h_source.md#i__clock_8h_source"
3 --> 4
3 --> 7
3 --> 8

4["core/time/i_clock/timestamp.h"]
click 4 "timestamp_8h_source.md#timestamp_8h_source"
4 --> 5
4 --> 6

7["chrono"]

5["cstdint"]

8["memory"]

6["string"]

9["vector"]

```


## Included by

* [distance_driven_evaluator.h](distance__driven__evaluator_8h.md#distance__driven__evaluator_8h)
* [i_evaluator.h](i__evaluator_8h.md#i__evaluator_8h)
* [min_ttc_evaluator.h](min__ttc__evaluator_8h.md#min__ttc__evaluator_8h)
* [predictive_min_ttc_evaluator.h](predictive__min__ttc__evaluator_8h.md#predictive__min__ttc__evaluator_8h)


```mermaid
graph RL
3["distance_driven_evaluator.cpp"]
click 3 "distance__driven__evaluator_8cpp_source.md#distance__driven__evaluator_8cpp_source"

2["distance_driven_evaluator.h"]
click 2 "distance__driven__evaluator_8h_source.md#distance__driven__evaluator_8h_source"
3 --> 2

5["gt_base_evaluator.h"]
click 5 "gt__base__evaluator_8h_source.md#gt__base__evaluator_8h_source"

7["min_ttc_evaluator.cpp"]
click 7 "min__ttc__evaluator_8cpp_source.md#min__ttc__evaluator_8cpp_source"

6["min_ttc_evaluator.h"]
click 6 "min__ttc__evaluator_8h_source.md#min__ttc__evaluator_8h_source"
7 --> 6

9["predictive_min_ttc_evaluator.cpp"]
click 9 "predictive__min__ttc__evaluator_8cpp_source.md#predictive__min__ttc__evaluator_8cpp_source"

8["predictive_min_ttc_evaluator.h"]
click 8 "predictive__min__ttc__evaluator_8h_source.md#predictive__min__ttc__evaluator_8h_source"
9 --> 8

4["i_evaluator.h"]
click 4 "i__evaluator_8h_source.md#i__evaluator_8h_source"
5 --> 4

1["i_kpi.h"]
click 1 "i__kpi_8h.md#i__kpi_8h"
2 --> 1
4 --> 1
6 --> 1
8 --> 1

```


## Source


```cpp


#pragma once

#include "core/kpi/definition/kpi_definition.h"
#include <memory>

namespace simulation_framework
{
namespace core
{
namespace kpi
{

template <typename T>
class IKpi
{
  public:
    virtual ~IKpi() = default;

    virtual void Init() = 0;

    virtual void Reset() = 0;

    virtual KpiContent CalculateKpi(const T& input) = 0;

    virtual kpi::Type GetKpiType() const = 0;
};

}  // namespace kpi
}  // namespace core
}  // namespace simulation_framework
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)