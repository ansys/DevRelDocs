<a id="standalone__activity__service_8h"></a>
# File standalone\_activity\_service.h

![][C++]

**Location**: `core/service/standalone\_activity\_service/standalone\_activity\_service.h`





## Classes

* [simulation\_framework::core::StandaloneActivityService](classsimulation__framework_1_1core_1_1StandaloneActivityService.md#classsimulation__framework_1_1core_1_1StandaloneActivityService)

## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation\_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)

## Includes

* [core/service/standalone_activity_service/standalone_activity_creator/i_standalone_activity_creator.h](i__standalone__activity__creator_8h.md#i__standalone__activity__creator_8h)


```mermaid
graph LR
3["core/lifecycle/activity/i_activity.h"]
click 3 "i__activity_8h_source.md#i__activity_8h_source"
3 --> 4
3 --> 5
3 --> 10
3 --> 6
3 --> 7

5["core/service/parameter/simulation_parameters.h"]
click 5 "simulation__parameters_8h_source.md#simulation__parameters_8h_source"
5 --> 6
5 --> 7
5 --> 8
5 --> 9

2["core/service/standalone_activity_service/standalone_activity_creator/i_standalone_activity_creator.h"]
click 2 "i__standalone__activity__creator_8h_source.md#i__standalone__activity__creator_8h_source"
2 --> 3
2 --> 12
2 --> 13

1["standalone_activity_service.h"]
click 1 "standalone__activity__service_8h.md#standalone__activity__service_8h"
1 --> 2

12["core/service/standalone_activity_service/standalone_init_data/standalone_init_data.h"]
click 12 "standalone__init__data_8h_source.md#standalone__init__data_8h_source"
12 --> 7

10["core/time/i_clock/timestamp.h"]
click 10 "timestamp_8h_source.md#timestamp_8h_source"
10 --> 11
10 --> 7

6["chrono"]

4["core/scheduler/event/simulation_settings.h"]

11["cstdint"]

13["memory"]

7["string"]

8["unordered_map"]

9["vector"]

```


## Source


```cpp


#pragma once

#include "core/service/standalone_activity_service/standalone_activity_creator/i_standalone_activity_creator.h"

namespace simulation_framework
{
namespace core
{

class StandaloneActivityService final
{
  public:
    StandaloneActivityService(std::unique_ptr<IStandaloneActivityCreator> standalone_activity_creator);
    ~StandaloneActivityService();

    int Run();
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