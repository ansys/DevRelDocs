<a id="simulation__instance_8h"></a>
# File simulation\_instance.h

![][C++]

**Location**: `core/lifecycle/simulation\_instance/simulation\_instance.h`





## Classes

* [simulation\_framework::core::lifecycle::SimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance)

## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation\_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)
* [simulation\_framework::core::lifecycle](namespacesimulation__framework_1_1core_1_1lifecycle.md#namespacesimulation__framework_1_1core_1_1lifecycle)

## Includes

* [core/lifecycle/i_activity_factory/i_activity_factory.h](i__activity__factory_8h.md#i__activity__factory_8h)
* [core/lifecycle/i_simulation_instance/i_simulation_instance.h](i__simulation__instance_8h.md#i__simulation__instance_8h)
* [core/logging/logging.h](logging_8h.md#logging_8h)
* [core/service/parameter/simulation_parameters.h](simulation__parameters_8h.md#simulation__parameters_8h)
* [core/service/standalone_activity_service/standalone_init_data/standalone_init_data.h](standalone__init__data_8h.md#standalone__init__data_8h)
* [core/time/i_clock/i_clock.h](i__clock_8h.md#i__clock_8h)
* [core/time/i_simulation_completion_checker/i_simulation_completion_checker.h](i__simulation__completion__checker_8h.md#i__simulation__completion__checker_8h)


```mermaid
graph LR
3["core/lifecycle/activity/i_activity.h"]
click 3 "i__activity_8h_source.md#i__activity_8h_source"
3 --> 4
3 --> 5
3 --> 10
3 --> 6
3 --> 7

12["core/lifecycle/fmu_activity/fmu_config.h"]
click 12 "fmu__config_8h_source.md#fmu__config_8h_source"
12 --> 13
12 --> 14
12 --> 7
12 --> 15
12 --> 9

2["core/lifecycle/i_activity_factory/i_activity_factory.h"]
click 2 "i__activity__factory_8h_source.md#i__activity__factory_8h_source"
2 --> 3
2 --> 12
2 --> 16
2 --> 17
2 --> 7

19["core/lifecycle/i_simulation_instance/i_simulation_instance.h"]
click 19 "i__simulation__instance_8h_source.md#i__simulation__instance_8h_source"
19 --> 6

1["simulation_instance.h"]
click 1 "simulation__instance_8h.md#simulation__instance_8h"
1 --> 2
1 --> 19
1 --> 20
1 --> 5
1 --> 28
1 --> 17
1 --> 29

21["core/logging/console_logger.h"]
click 21 "console__logger_8h_source.md#console__logger_8h_source"
21 --> 22
21 --> 6
21 --> 24
21 --> 25
21 --> 26
21 --> 23
21 --> 27

22["core/logging/i_logger.h"]
click 22 "i__logger_8h_source.md#i__logger_8h_source"
22 --> 7
22 --> 23

20["core/logging/logging.h"]
click 20 "logging_8h_source.md#logging_8h_source"
20 --> 21
20 --> 22
20 --> 18
20 --> 23
20 --> 9

16["core/scheduler/i_scheduler_client/i_scheduler_client.h"]
click 16 "i__scheduler__client_8h_source.md#i__scheduler__client_8h_source"
16 --> 3
16 --> 4
16 --> 10
16 --> 7

5["core/service/parameter/simulation_parameters.h"]
click 5 "simulation__parameters_8h_source.md#simulation__parameters_8h_source"
5 --> 6
5 --> 7
5 --> 8
5 --> 9

28["core/service/standalone_activity_service/standalone_init_data/standalone_init_data.h"]
click 28 "standalone__init__data_8h_source.md#standalone__init__data_8h_source"
28 --> 7

17["core/time/i_clock/i_clock.h"]
click 17 "i__clock_8h_source.md#i__clock_8h_source"
17 --> 10
17 --> 6
17 --> 18

10["core/time/i_clock/timestamp.h"]
click 10 "timestamp_8h_source.md#timestamp_8h_source"
10 --> 11
10 --> 7

29["core/time/i_simulation_completion_checker/i_simulation_completion_checker.h"]
click 29 "i__simulation__completion__checker_8h_source.md#i__simulation__completion__checker_8h_source"
29 --> 17

6["chrono"]

4["core/scheduler/event/simulation_settings.h"]

11["cstdint"]

24["iomanip"]

25["iostream"]

13["map"]

18["memory"]

14["set"]

26["sstream"]

7["string"]

23["string_view"]

27["unistd.h"]

8["unordered_map"]

15["variant"]

9["vector"]

```


## Source


```cpp


#pragma once

#include "core/lifecycle/i_activity_factory/i_activity_factory.h"
#include "core/lifecycle/i_simulation_instance/i_simulation_instance.h"
#include "core/logging/logging.h"
#include "core/service/parameter/simulation_parameters.h"
#include "core/service/standalone_activity_service/standalone_init_data/standalone_init_data.h"
#include "core/time/i_clock/i_clock.h"
#include "core/time/i_simulation_completion_checker/i_simulation_completion_checker.h"

namespace simulation_framework
{
namespace core
{
namespace lifecycle
{

class SimulationInstanceImpl;


class SimulationInstance final : public ISimulationInstance
{

  public:
    SimulationInstance(std::unique_ptr<IActivityFactory> activity_factory,
                       std::shared_ptr<core::time::IClock> sim_clock,
                       std::unique_ptr<time::ISimulationCompletionChecker> sim_state_checker,
                       const core::StandaloneInitData& standalone_init_data,
                       const core::SimulationParameters& core_parameters);

    SimulationInstance(std::unique_ptr<IActivityFactory> activity_factory,
                       std::shared_ptr<core::time::IClock> sim_clock,
                       std::unique_ptr<time::ISimulationCompletionChecker> sim_state_checker,
                       const core::StandaloneInitData& standalone_init_data,
                       const std::string& scheduling_config_path,
                       const logging::LogLevel log_level = logging::LogLevel::kDebug);

    ~SimulationInstance();

    void Init() override;
    void StepOnce() override;
    void Reset() override;
    bool IsSimulationFinished() override;
    bool IsPauseRequested() override;
    std::chrono::milliseconds GetSimulationDuration() const override;
    std::chrono::milliseconds GetSimulationBaseCycleTime() const override;

  private:
    std::unique_ptr<SimulationInstanceImpl> impl_;
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