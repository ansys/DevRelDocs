<a id="i__activity__factory_8h"></a>
# File i\_activity\_factory.h

![][C++]

**Location**: `core/lifecycle/i\_activity\_factory/i\_activity\_factory.h`





## Classes

* [simulation\_framework::core::lifecycle::IActivityFactory](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory)

## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation\_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)
* [simulation\_framework::core::lifecycle](namespacesimulation__framework_1_1core_1_1lifecycle.md#namespacesimulation__framework_1_1core_1_1lifecycle)

## Includes

* [core/lifecycle/activity/i_activity.h](i__activity_8h.md#i__activity_8h)
* [core/lifecycle/fmu_activity/fmu_config.h](fmu__config_8h.md#fmu__config_8h)
* [core/scheduler/i_scheduler_client/i_scheduler_client.h](i__scheduler__client_8h.md#i__scheduler__client_8h)
* [core/time/i_clock/i_clock.h](i__clock_8h.md#i__clock_8h)
* <string>


```mermaid
graph LR
2["core/lifecycle/activity/i_activity.h"]
click 2 "i__activity_8h_source.md#i__activity_8h_source"
2 --> 3
2 --> 4
2 --> 9
2 --> 5
2 --> 6

11["core/lifecycle/fmu_activity/fmu_config.h"]
click 11 "fmu__config_8h_source.md#fmu__config_8h_source"
11 --> 12
11 --> 13
11 --> 6
11 --> 14
11 --> 8

1["i_activity_factory.h"]
click 1 "i__activity__factory_8h.md#i__activity__factory_8h"
1 --> 2
1 --> 11
1 --> 15
1 --> 16
1 --> 6

15["core/scheduler/i_scheduler_client/i_scheduler_client.h"]
click 15 "i__scheduler__client_8h_source.md#i__scheduler__client_8h_source"
15 --> 2
15 --> 3
15 --> 9
15 --> 6

4["core/service/parameter/simulation_parameters.h"]
click 4 "simulation__parameters_8h_source.md#simulation__parameters_8h_source"
4 --> 5
4 --> 6
4 --> 7
4 --> 8

16["core/time/i_clock/i_clock.h"]
click 16 "i__clock_8h_source.md#i__clock_8h_source"
16 --> 9
16 --> 5
16 --> 17

9["core/time/i_clock/timestamp.h"]
click 9 "timestamp_8h_source.md#timestamp_8h_source"
9 --> 10
9 --> 6

5["chrono"]

3["core/scheduler/event/simulation_settings.h"]

10["cstdint"]

12["map"]

17["memory"]

13["set"]

6["string"]

7["unordered_map"]

14["variant"]

8["vector"]

```


## Included by

* [activity_factory.h](activity__factory_8h.md#activity__factory_8h)
* [simulation_instance.h](simulation__instance_8h.md#simulation__instance_8h)


```mermaid
graph RL
2["activity_factory.h"]
click 2 "activity__factory_8h_source.md#activity__factory_8h_source"

1["i_activity_factory.h"]
click 1 "i__activity__factory_8h.md#i__activity__factory_8h"
2 --> 1
3 --> 1

3["simulation_instance.h"]
click 3 "simulation__instance_8h_source.md#simulation__instance_8h_source"

```


## Source


```cpp


#pragma once

#include "core/lifecycle/activity/i_activity.h"
#include "core/lifecycle/fmu_activity/fmu_config.h"
#include "core/scheduler/i_scheduler_client/i_scheduler_client.h"
#include "core/time/i_clock/i_clock.h"
#include <string>

namespace simulation_framework
{
namespace core
{
namespace lifecycle
{

class IActivityFactory
{
  public:
    virtual ~IActivityFactory() = default;

    virtual std::unique_ptr<IActivity> Create(
        const std::string& activity_name,
        const scheduling::SchedulerClientType type = scheduling::SchedulerClientType::kDUMMY) = 0;

    virtual std::unique_ptr<IActivity> CreateFmuActivity(
        const std::string& activity_name,
        const FmuConfig& fmu_config,
        const scheduling::SchedulerClientType type = scheduling::SchedulerClientType::kDUMMY) = 0;

    virtual time::milliseconds GetSimulationBaseCycleTime() const = 0;

    virtual void SetSimulationBaseCycleTime(const time::milliseconds& time) = 0;
};

}  // namespace lifecycle
}  // namespace core
}  // namespace simulation_framework
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)