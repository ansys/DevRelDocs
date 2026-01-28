<a id="scheduler__client__creator_8h"></a>
# File scheduler\_client\_creator.h

![][C++]

**Location**: `core/scheduler/scheduler\_client/scheduler\_client\_creator.h`





## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation\_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)
* [simulation\_framework::core::scheduling](namespacesimulation__framework_1_1core_1_1scheduling.md#namespacesimulation__framework_1_1core_1_1scheduling)
* [simulation\_framework::core::scheduling::scheduling\_client\_creator](namespacesimulation__framework_1_1core_1_1scheduling_1_1scheduling__client__creator.md#namespacesimulation__framework_1_1core_1_1scheduling_1_1scheduling__client__creator)

## Includes

* [core/scheduler/i_scheduler_client/i_scheduler_client.h](i__scheduler__client_8h.md#i__scheduler__client_8h)
* <memory>


```mermaid
graph LR
3["core/lifecycle/activity/i_activity.h"]
click 3 "i__activity_8h_source.md#i__activity_8h_source"
3 --> 4
3 --> 5
3 --> 10
3 --> 6
3 --> 7

2["core/scheduler/i_scheduler_client/i_scheduler_client.h"]
click 2 "i__scheduler__client_8h_source.md#i__scheduler__client_8h_source"
2 --> 3
2 --> 4
2 --> 10
2 --> 7

1["scheduler_client_creator.h"]
click 1 "scheduler__client__creator_8h.md#scheduler__client__creator_8h"
1 --> 2
1 --> 12

5["core/service/parameter/simulation_parameters.h"]
click 5 "simulation__parameters_8h_source.md#simulation__parameters_8h_source"
5 --> 6
5 --> 7
5 --> 8
5 --> 9

10["core/time/i_clock/timestamp.h"]
click 10 "timestamp_8h_source.md#timestamp_8h_source"
10 --> 11
10 --> 7

6["chrono"]

4["core/scheduler/event/simulation_settings.h"]

11["cstdint"]

12["memory"]

7["string"]

8["unordered_map"]

9["vector"]

```


## Source


```cpp


#pragma once

#include "core/scheduler/i_scheduler_client/i_scheduler_client.h"
#include <memory>

namespace simulation_framework
{
namespace core
{
namespace scheduling
{
namespace scheduling_client_creator
{


std::unique_ptr<ISchedulerClient> Create(const SchedulerClientType type);

}  // namespace scheduling_client_creator
}  // namespace scheduling
}  // namespace core
}  // namespace simulation_framework
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)