<a id="i__standalone__activity__creator_8h"></a>
# File i\_standalone\_activity\_creator.h

![][C++]

**Location**: `core/service/standalone\_activity\_service/standalone\_activity\_creator/i\_standalone\_activity\_creator.h`





## Classes

* [simulation\_framework::core::IStandaloneActivityCreator](classsimulation__framework_1_1core_1_1IStandaloneActivityCreator.md#classsimulation__framework_1_1core_1_1IStandaloneActivityCreator)

## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation\_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)

## Includes

* [core/lifecycle/activity/i_activity.h](i__activity_8h.md#i__activity_8h)
* [core/service/standalone_activity_service/standalone_init_data/standalone_init_data.h](standalone__init__data_8h.md#standalone__init__data_8h)
* <memory>


```mermaid
graph LR
2["core/lifecycle/activity/i_activity.h"]
click 2 "i__activity_8h_source.md#i__activity_8h_source"
2 --> 3
2 --> 4
2 --> 9
2 --> 5
2 --> 6

4["core/service/parameter/simulation_parameters.h"]
click 4 "simulation__parameters_8h_source.md#simulation__parameters_8h_source"
4 --> 5
4 --> 6
4 --> 7
4 --> 8

1["i_standalone_activity_creator.h"]
click 1 "i__standalone__activity__creator_8h.md#i__standalone__activity__creator_8h"
1 --> 2
1 --> 11
1 --> 12

11["core/service/standalone_activity_service/standalone_init_data/standalone_init_data.h"]
click 11 "standalone__init__data_8h_source.md#standalone__init__data_8h_source"
11 --> 6

9["core/time/i_clock/timestamp.h"]
click 9 "timestamp_8h_source.md#timestamp_8h_source"
9 --> 10
9 --> 6

5["chrono"]

3["core/scheduler/event/simulation_settings.h"]

10["cstdint"]

12["memory"]

6["string"]

7["unordered_map"]

8["vector"]

```


## Included by

* [standalone_activity_service.h](standalone__activity__service_8h.md#standalone__activity__service_8h)


```mermaid
graph RL
1["i_standalone_activity_creator.h"]
click 1 "i__standalone__activity__creator_8h.md#i__standalone__activity__creator_8h"
2 --> 1

2["standalone_activity_service.h"]
click 2 "standalone__activity__service_8h_source.md#standalone__activity__service_8h_source"

```


## Source


```cpp


#pragma once

#include "core/lifecycle/activity/i_activity.h"
#include "core/service/standalone_activity_service/standalone_init_data/standalone_init_data.h"
#include <memory>

namespace simulation_framework
{
namespace core
{

// clang-format off
class IStandaloneActivityCreator
{
  public:
    virtual ~IStandaloneActivityCreator() = default;

    virtual std::string GetName() = 0;

    virtual std::unique_ptr<core::lifecycle::IActivity> Create(
        [[maybe_unused]] const core::StandaloneInitData& standalone_init_data) = 0;
};
// clang-format on

}  // namespace core
}  // namespace simulation_framework
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)