<a id="i__activity_8h"></a>
# File i\_activity.h

![][C++]

**Location**: `core/lifecycle/activity/i\_activity.h`





## Classes

* [simulation\_framework::core::lifecycle::IActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity)

## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation\_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)
* [simulation\_framework::core::lifecycle](namespacesimulation__framework_1_1core_1_1lifecycle.md#namespacesimulation__framework_1_1core_1_1lifecycle)

## Includes

* core/scheduler/event/simulation_settings.h
* [core/service/parameter/simulation_parameters.h](simulation__parameters_8h.md#simulation__parameters_8h)
* [core/time/i_clock/timestamp.h](timestamp_8h.md#timestamp_8h)
* <chrono>
* <string>


```mermaid
graph LR
1["i_activity.h"]
click 1 "i__activity_8h.md#i__activity_8h"
1 --> 2
1 --> 3
1 --> 8
1 --> 4
1 --> 5

3["core/service/parameter/simulation_parameters.h"]
click 3 "simulation__parameters_8h_source.md#simulation__parameters_8h_source"
3 --> 4
3 --> 5
3 --> 6
3 --> 7

8["core/time/i_clock/timestamp.h"]
click 8 "timestamp_8h_source.md#timestamp_8h_source"
8 --> 9
8 --> 5

4["chrono"]

2["core/scheduler/event/simulation_settings.h"]

9["cstdint"]

5["string"]

6["unordered_map"]

7["vector"]

```


## Included by

* [base_activity.h](base__activity_8h.md#base__activity_8h)
* [i_activity_factory.h](i__activity__factory_8h.md#i__activity__factory_8h)
* [i_scheduler_client.h](i__scheduler__client_8h.md#i__scheduler__client_8h)
* [i_standalone_activity_creator.h](i__standalone__activity__creator_8h.md#i__standalone__activity__creator_8h)


```mermaid
graph RL
5["activity_factory.h"]
click 5 "activity__factory_8h_source.md#activity__factory_8h_source"

2["base_activity.h"]
click 2 "base__activity_8h_source.md#base__activity_8h_source"
3 --> 2

1["i_activity.h"]
click 1 "i__activity_8h.md#i__activity_8h"
2 --> 1
4 --> 1
7 --> 1
9 --> 1

3["fmu_base_activity.h"]
click 3 "fmu__base__activity_8h_source.md#fmu__base__activity_8h_source"

4["i_activity_factory.h"]
click 4 "i__activity__factory_8h_source.md#i__activity__factory_8h_source"
5 --> 4
6 --> 4

6["simulation_instance.h"]
click 6 "simulation__instance_8h_source.md#simulation__instance_8h_source"

7["i_scheduler_client.h"]
click 7 "i__scheduler__client_8h_source.md#i__scheduler__client_8h_source"
5 --> 7
2 --> 7
3 --> 7
4 --> 7
8 --> 7

8["scheduler_client_creator.h"]
click 8 "scheduler__client__creator_8h_source.md#scheduler__client__creator_8h_source"

9["i_standalone_activity_creator.h"]
click 9 "i__standalone__activity__creator_8h_source.md#i__standalone__activity__creator_8h_source"
10 --> 9

10["standalone_activity_service.h"]
click 10 "standalone__activity__service_8h_source.md#standalone__activity__service_8h_source"

```


## Source


```cpp


#pragma once

#include "core/scheduler/event/simulation_settings.h"
#include "core/service/parameter/simulation_parameters.h"
#include "core/time/i_clock/timestamp.h"
#include <chrono>
#include <string>

namespace simulation_framework
{
namespace core
{
namespace lifecycle
{

class IActivity
{
  public:
    virtual ~IActivity() = default;

    virtual void Init() = 0;

    virtual void WaitForPubSubConnection() = 0;

    virtual void Step() = 0;

    virtual void Finalize() = 0;

    virtual void Shutdown() = 0;

    virtual std::string GetName() const = 0;

    virtual time::Timestamp GetCurrentTimestamp() const = 0;

    virtual std::chrono::milliseconds GetCycleTime() const = 0;

    virtual const SimulationParameters::CustomizedParameters& GetCustomizedParameters() const = 0;

    virtual std::string GetSimulationOutputDirectory() const = 0;

    virtual void SetUpCommunication() = 0;

    virtual void SetSimulationSettings(const scheduling::SimulationSettings& sim_settings) = 0;
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