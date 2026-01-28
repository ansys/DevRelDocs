<a id="timestamp_8h"></a>
# File timestamp.h

![][C++]

**Location**: `core/time/i\_clock/timestamp.h`





## Classes

* [simulation\_framework::core::time::Timestamp](structsimulation__framework_1_1core_1_1time_1_1Timestamp.md#structsimulation__framework_1_1core_1_1time_1_1Timestamp)

## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation\_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)
* [simulation\_framework::core::time](namespacesimulation__framework_1_1core_1_1time.md#namespacesimulation__framework_1_1core_1_1time)

## Includes

* <cstdint>
* <string>


```mermaid
graph LR
1["timestamp.h"]
click 1 "timestamp_8h.md#timestamp_8h"
1 --> 2
1 --> 3

2["cstdint"]

3["string"]

```


## Included by

* [i_activity.h](i__activity_8h.md#i__activity_8h)
* [i_clock.h](i__clock_8h.md#i__clock_8h)
* [i_scheduler_client.h](i__scheduler__client_8h.md#i__scheduler__client_8h)


```mermaid
graph RL
19["distance_driven_evaluator.cpp"]
click 19 "distance__driven__evaluator_8cpp_source.md#distance__driven__evaluator_8cpp_source"

18["distance_driven_evaluator.h"]
click 18 "distance__driven__evaluator_8h_source.md#distance__driven__evaluator_8h_source"
19 --> 18

21["gt_base_evaluator.h"]
click 21 "gt__base__evaluator_8h_source.md#gt__base__evaluator_8h_source"

23["min_ttc_evaluator.cpp"]
click 23 "min__ttc__evaluator_8cpp_source.md#min__ttc__evaluator_8cpp_source"

22["min_ttc_evaluator.h"]
click 22 "min__ttc__evaluator_8h_source.md#min__ttc__evaluator_8h_source"
23 --> 22

25["predictive_min_ttc_evaluator.cpp"]
click 25 "predictive__min__ttc__evaluator_8cpp_source.md#predictive__min__ttc__evaluator_8cpp_source"

24["predictive_min_ttc_evaluator.h"]
click 24 "predictive__min__ttc__evaluator_8h_source.md#predictive__min__ttc__evaluator_8h_source"
25 --> 24

6["activity_factory.h"]
click 6 "activity__factory_8h_source.md#activity__factory_8h_source"

15["simulation_completion_checker.h"]
click 15 "simulation__completion__checker_8h_source.md#simulation__completion__checker_8h_source"

16["kpi_definition.h"]
click 16 "kpi__definition_8h_source.md#kpi__definition_8h_source"
17 --> 16
26 --> 16

20["i_evaluator.h"]
click 20 "i__evaluator_8h_source.md#i__evaluator_8h_source"
21 --> 20

17["i_kpi.h"]
click 17 "i__kpi_8h_source.md#i__kpi_8h_source"
18 --> 17
20 --> 17
22 --> 17
24 --> 17

26["i_kpi_message_converter.h"]
click 26 "i__kpi__message__converter_8h_source.md#i__kpi__message__converter_8h_source"
27 --> 26

27["kpi_message_converter.h"]
click 27 "kpi__message__converter_8h_source.md#kpi__message__converter_8h_source"

3["base_activity.h"]
click 3 "base__activity_8h_source.md#base__activity_8h_source"
4 --> 3

2["i_activity.h"]
click 2 "i__activity_8h_source.md#i__activity_8h_source"
3 --> 2
5 --> 2
8 --> 2
10 --> 2

4["fmu_base_activity.h"]
click 4 "fmu__base__activity_8h_source.md#fmu__base__activity_8h_source"

5["i_activity_factory.h"]
click 5 "i__activity__factory_8h_source.md#i__activity__factory_8h_source"
6 --> 5
7 --> 5

7["simulation_instance.h"]
click 7 "simulation__instance_8h_source.md#simulation__instance_8h_source"

8["i_scheduler_client.h"]
click 8 "i__scheduler__client_8h_source.md#i__scheduler__client_8h_source"
6 --> 8
3 --> 8
4 --> 8
5 --> 8
9 --> 8

9["scheduler_client_creator.h"]
click 9 "scheduler__client__creator_8h_source.md#scheduler__client__creator_8h_source"

10["i_standalone_activity_creator.h"]
click 10 "i__standalone__activity__creator_8h_source.md#i__standalone__activity__creator_8h_source"
11 --> 10

11["standalone_activity_service.h"]
click 11 "standalone__activity__service_8h_source.md#standalone__activity__service_8h_source"

13["clock.h"]
click 13 "clock_8h_source.md#clock_8h_source"

12["i_clock.h"]
click 12 "i__clock_8h_source.md#i__clock_8h_source"
13 --> 12
5 --> 12
14 --> 12
16 --> 12
15 --> 12
7 --> 12

1["timestamp.h"]
click 1 "timestamp_8h.md#timestamp_8h"
2 --> 1
12 --> 1
8 --> 1

14["i_simulation_completion_checker.h"]
click 14 "i__simulation__completion__checker_8h_source.md#i__simulation__completion__checker_8h_source"
15 --> 14
7 --> 14

```


## Source


```cpp


#pragma once

#include <cstdint>
#include <string>

namespace simulation_framework
{
namespace core
{
namespace time
{

struct Timestamp
{
    uint32_t seconds;
    uint32_t nanoseconds;
    std::string DebugString() const
    {
        return "Simulation timestamp: " + std::to_string(seconds) + " second and " + std::to_string(nanoseconds) +
               " nanos ";
    }
};

inline bool operator==(const Timestamp& lhs, const Timestamp& rhs)
{
    return (lhs.seconds == rhs.seconds) && (lhs.nanoseconds == rhs.nanoseconds);
}

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