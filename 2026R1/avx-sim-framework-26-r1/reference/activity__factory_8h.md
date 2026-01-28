<a id="activity__factory_8h"></a>
# File activity\_factory.h

![][C++]

**Location**: `autonomy/simulation/activity\_factory/activity\_factory.h`





## Classes

* [simulation\_framework::autonomy::ActivityFactory](classsimulation__framework_1_1autonomy_1_1ActivityFactory.md#classsimulation__framework_1_1autonomy_1_1ActivityFactory)

## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [autonomy](namespaceautonomy.md#namespaceautonomy)
* [simulation\_framework::autonomy](namespacesimulation__framework_1_1autonomy.md#namespacesimulation__framework_1_1autonomy)

## Includes

* co_sim/avx_sensor/avx_sensor_setting/avx_sensor_setting.h
* [core/lifecycle/i_activity_factory/i_activity_factory.h](i__activity__factory_8h.md#i__activity__factory_8h)
* [core/scheduler/i_scheduler_client/i_scheduler_client.h](i__scheduler__client_8h.md#i__scheduler__client_8h)
* [core/service/parameter/simulation_parameters.h](simulation__parameters_8h.md#simulation__parameters_8h)


```mermaid
graph LR
1["activity_factory.h"]
click 1 "activity__factory_8h.md#activity__factory_8h"
1 --> 2
1 --> 3
1 --> 17
1 --> 6

4["core/lifecycle/activity/i_activity.h"]
click 4 "i__activity_8h_source.md#i__activity_8h_source"
4 --> 5
4 --> 6
4 --> 11
4 --> 7
4 --> 8

13["core/lifecycle/fmu_activity/fmu_config.h"]
click 13 "fmu__config_8h_source.md#fmu__config_8h_source"
13 --> 14
13 --> 15
13 --> 8
13 --> 16
13 --> 10

3["core/lifecycle/i_activity_factory/i_activity_factory.h"]
click 3 "i__activity__factory_8h_source.md#i__activity__factory_8h_source"
3 --> 4
3 --> 13
3 --> 17
3 --> 18
3 --> 8

17["core/scheduler/i_scheduler_client/i_scheduler_client.h"]
click 17 "i__scheduler__client_8h_source.md#i__scheduler__client_8h_source"
17 --> 4
17 --> 5
17 --> 11
17 --> 8

6["core/service/parameter/simulation_parameters.h"]
click 6 "simulation__parameters_8h_source.md#simulation__parameters_8h_source"
6 --> 7
6 --> 8
6 --> 9
6 --> 10

18["core/time/i_clock/i_clock.h"]
click 18 "i__clock_8h_source.md#i__clock_8h_source"
18 --> 11
18 --> 7
18 --> 19

11["core/time/i_clock/timestamp.h"]
click 11 "timestamp_8h_source.md#timestamp_8h_source"
11 --> 12
11 --> 8

7["chrono"]

2["co_sim/avx_sensor/avx_sensor_setting/avx_sensor_setting.h"]

5["core/scheduler/event/simulation_settings.h"]

12["cstdint"]

14["map"]

19["memory"]

15["set"]

8["string"]

9["unordered_map"]

16["variant"]

10["vector"]

```


## Source


```cpp


#pragma once

#include "co_sim/avx_sensor/avx_sensor_setting/avx_sensor_setting.h"
#include "core/lifecycle/i_activity_factory/i_activity_factory.h"
#include "core/scheduler/i_scheduler_client/i_scheduler_client.h"
#include "core/service/parameter/simulation_parameters.h"

namespace simulation_framework
{

namespace autonomy
{

using namespace simulation_framework::core;
using namespace simulation_framework::core::lifecycle;

class ActivityFactory : public IActivityFactory
{
  public:
    explicit ActivityFactory(const core::SimulationParameters& sim_params,
                             const time::milliseconds& base_cycle_time = time::milliseconds{50});

    std::unique_ptr<core::lifecycle::IActivity> Create(
        const std::string& activity_name,
        const core::scheduling::SchedulerClientType type = core::scheduling::SchedulerClientType::kDUMMY) override;

    std::unique_ptr<IActivity> CreateFmuActivity(
        const std::string& activity_name,
        const core::lifecycle::FmuConfig& fmu_config,
        const scheduling::SchedulerClientType type = scheduling::SchedulerClientType::kDUMMY) override;

    time::milliseconds GetSimulationBaseCycleTime() const override;

    void SetSimulationBaseCycleTime(const time::milliseconds& time) override;

  private:
    bool IfAvxSensorSettingsDefined(const std::string& activity_name,
                                    const std::vector<avx_sensor_cosim::AvxSensorSetting>& avx_sensor_settings) const;

    core::SimulationParameters sim_params_;

    time::milliseconds base_cycle_time_;
};

}  // namespace autonomy
}  // namespace simulation_framework
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)