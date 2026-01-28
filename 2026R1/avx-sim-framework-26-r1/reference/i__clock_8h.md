<a id="i__clock_8h"></a>
# File i\_clock.h

![][C++]

**Location**: `core/time/i\_clock/i\_clock.h`





## Classes

* [simulation\_framework::core::time::IClock](classsimulation__framework_1_1core_1_1time_1_1IClock.md#classsimulation__framework_1_1core_1_1time_1_1IClock)

## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation\_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)
* [time](namespacetime.md#namespacetime)
* [simulation\_framework::core::time](namespacesimulation__framework_1_1core_1_1time.md#namespacesimulation__framework_1_1core_1_1time)

## Includes

* [core/time/i_clock/timestamp.h](timestamp_8h.md#timestamp_8h)
* <chrono>
* <memory>


```mermaid
graph LR
1["i_clock.h"]
click 1 "i__clock_8h.md#i__clock_8h"
1 --> 2
1 --> 5
1 --> 6

2["core/time/i_clock/timestamp.h"]
click 2 "timestamp_8h_source.md#timestamp_8h_source"
2 --> 3
2 --> 4

5["chrono"]

3["cstdint"]

6["memory"]

4["string"]

```


## Included by

* [clock.h](clock_8h.md#clock_8h)
* [i_activity_factory.h](i__activity__factory_8h.md#i__activity__factory_8h)
* [i_simulation_completion_checker.h](i__simulation__completion__checker_8h.md#i__simulation__completion__checker_8h)
* [kpi_definition.h](kpi__definition_8h.md#kpi__definition_8h)
* [simulation_completion_checker.h](simulation__completion__checker_8h.md#simulation__completion__checker_8h)
* [simulation_instance.h](simulation__instance_8h.md#simulation__instance_8h)


```mermaid
graph RL
11["distance_driven_evaluator.cpp"]
click 11 "distance__driven__evaluator_8cpp_source.md#distance__driven__evaluator_8cpp_source"

10["distance_driven_evaluator.h"]
click 10 "distance__driven__evaluator_8h_source.md#distance__driven__evaluator_8h_source"
11 --> 10

13["gt_base_evaluator.h"]
click 13 "gt__base__evaluator_8h_source.md#gt__base__evaluator_8h_source"

15["min_ttc_evaluator.cpp"]
click 15 "min__ttc__evaluator_8cpp_source.md#min__ttc__evaluator_8cpp_source"

14["min_ttc_evaluator.h"]
click 14 "min__ttc__evaluator_8h_source.md#min__ttc__evaluator_8h_source"
15 --> 14

17["predictive_min_ttc_evaluator.cpp"]
click 17 "predictive__min__ttc__evaluator_8cpp_source.md#predictive__min__ttc__evaluator_8cpp_source"

16["predictive_min_ttc_evaluator.h"]
click 16 "predictive__min__ttc__evaluator_8h_source.md#predictive__min__ttc__evaluator_8h_source"
17 --> 16

4["activity_factory.h"]
click 4 "activity__factory_8h_source.md#activity__factory_8h_source"

7["simulation_completion_checker.h"]
click 7 "simulation__completion__checker_8h_source.md#simulation__completion__checker_8h_source"

8["kpi_definition.h"]
click 8 "kpi__definition_8h_source.md#kpi__definition_8h_source"
9 --> 8
18 --> 8

12["i_evaluator.h"]
click 12 "i__evaluator_8h_source.md#i__evaluator_8h_source"
13 --> 12

9["i_kpi.h"]
click 9 "i__kpi_8h_source.md#i__kpi_8h_source"
10 --> 9
12 --> 9
14 --> 9
16 --> 9

18["i_kpi_message_converter.h"]
click 18 "i__kpi__message__converter_8h_source.md#i__kpi__message__converter_8h_source"
19 --> 18

19["kpi_message_converter.h"]
click 19 "kpi__message__converter_8h_source.md#kpi__message__converter_8h_source"

3["i_activity_factory.h"]
click 3 "i__activity__factory_8h_source.md#i__activity__factory_8h_source"
4 --> 3
5 --> 3

5["simulation_instance.h"]
click 5 "simulation__instance_8h_source.md#simulation__instance_8h_source"

2["clock.h"]
click 2 "clock_8h_source.md#clock_8h_source"

1["i_clock.h"]
click 1 "i__clock_8h.md#i__clock_8h"
2 --> 1
3 --> 1
6 --> 1
8 --> 1
7 --> 1
5 --> 1

6["i_simulation_completion_checker.h"]
click 6 "i__simulation__completion__checker_8h_source.md#i__simulation__completion__checker_8h_source"
7 --> 6
5 --> 6

```


## Source


```cpp


#pragma once

#include "core/time/i_clock/timestamp.h"
#include <chrono>
#include <memory>

namespace simulation_framework
{
namespace core
{
namespace time
{

template <class Duration>
using timepoint = std::chrono::time_point<std::chrono::system_clock, Duration>;
using milliseconds = std::chrono::milliseconds;

class IClock
{
  public:
    virtual ~IClock() = default;

    virtual void SetNow(const milliseconds& ms) = 0;

    virtual void SetNow(const Timestamp& timestamp) = 0;

    virtual milliseconds GetNow() const = 0;

    virtual Timestamp GetNowAsTimestamp() const = 0;

    virtual void IncrementBy(const milliseconds& ms) = 0;
};

}  // namespace time
}  // namespace core
}  // namespace simulation_framework
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)