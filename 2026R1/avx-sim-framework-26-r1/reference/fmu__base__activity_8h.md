<a id="fmu__base__activity_8h"></a>
# File fmu\_base\_activity.h

![][C++]

**Location**: `core/lifecycle/fmu\_activity/fmu\_base\_activity.h`





## Classes

* [simulation\_framework::core::lifecycle::FmuBaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity)

## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation\_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)
* [simulation\_framework::core::lifecycle](namespacesimulation__framework_1_1core_1_1lifecycle.md#namespacesimulation__framework_1_1core_1_1lifecycle)

## Includes

* [core/lifecycle/activity/base_activity.h](base__activity_8h.md#base__activity_8h)
* [core/lifecycle/fmu_activity/fmu_config.h](fmu__config_8h.md#fmu__config_8h)
* [core/lifecycle/fmu_activity/i_fmu_logic.h](i__fmu__logic_8h.md#i__fmu__logic_8h)
* core/message/rtidds/fmu/fmu_message.hpp
* [core/scheduler/i_scheduler_client/i_scheduler_client.h](i__scheduler__client_8h.md#i__scheduler__client_8h)
* <optional>


```mermaid
graph LR
4["core/communication/i_publisher.h"]
click 4 "i__publisher_8h_source.md#i__publisher_8h_source"
4 --> 5
4 --> 6
4 --> 7
4 --> 8

9["core/communication/i_subscriber.h"]
click 9 "i__subscriber_8h_source.md#i__subscriber_8h_source"
9 --> 5
9 --> 6
9 --> 7
9 --> 8

3["core/communication/i_topic.h"]
click 3 "i__topic_8h_source.md#i__topic_8h_source"
3 --> 4
3 --> 9

11["core/communication/topic.h"]
click 11 "topic_8h_source.md#topic_8h_source"
11 --> 3
11 --> 12
11 --> 13

10["core/communication/topic_registry.h"]
click 10 "core_2communication_2topic__registry_8h_source.md#core_2communication_2topic__registry_8h_source"
10 --> 11
10 --> 14
10 --> 15
10 --> 16
10 --> 17
10 --> 18

2["core/lifecycle/activity/base_activity.h"]
click 2 "base__activity_8h_source.md#base__activity_8h_source"
2 --> 3
2 --> 10
2 --> 19
2 --> 25

19["core/lifecycle/activity/i_activity.h"]
click 19 "i__activity_8h_source.md#i__activity_8h_source"
19 --> 20
19 --> 21
19 --> 23
19 --> 5
19 --> 7

1["fmu_base_activity.h"]
click 1 "fmu__base__activity_8h.md#fmu__base__activity_8h"
1 --> 2
1 --> 26
1 --> 30
1 --> 15
1 --> 25
1 --> 32

26["core/lifecycle/fmu_activity/fmu_config.h"]
click 26 "fmu__config_8h_source.md#fmu__config_8h_source"
26 --> 27
26 --> 28
26 --> 7
26 --> 29
26 --> 8

30["core/lifecycle/fmu_activity/i_fmu_logic.h"]
click 30 "i__fmu__logic_8h_source.md#i__fmu__logic_8h_source"
30 --> 26
30 --> 31
30 --> 28
30 --> 7

25["core/scheduler/i_scheduler_client/i_scheduler_client.h"]
click 25 "i__scheduler__client_8h_source.md#i__scheduler__client_8h_source"
25 --> 19
25 --> 20
25 --> 23
25 --> 7

21["core/service/parameter/simulation_parameters.h"]
click 21 "simulation__parameters_8h_source.md#simulation__parameters_8h_source"
21 --> 5
21 --> 7
21 --> 22
21 --> 8

23["core/time/i_clock/timestamp.h"]
click 23 "timestamp_8h_source.md#timestamp_8h_source"
23 --> 24
23 --> 7

5["chrono"]

31["core/lifecycle/fmu_activity/fmu_state.h"]

14["core/message/rtidds/common/common.hpp"]

15["core/message/rtidds/fmu/fmu_message.hpp"]

16["core/message/rtidds/generic_bytes/generic_bytes.hpp"]

17["core/message/rtidds/kpi/kpi_message.hpp"]

18["core/message/rtidds/variant_map/variant_map.hpp"]

20["core/scheduler/event/simulation_settings.h"]

24["cstdint"]

12["functional"]

27["map"]

6["memory"]

32["optional"]

28["set"]

13["stdexcept"]

7["string"]

22["unordered_map"]

29["variant"]

8["vector"]

```


## Source


```cpp


#pragma once

#include "core/lifecycle/activity/base_activity.h"
#include "core/lifecycle/fmu_activity/fmu_config.h"
#include "core/lifecycle/fmu_activity/i_fmu_logic.h"
#include "core/message/rtidds/fmu/fmu_message.hpp"
#include "core/scheduler/i_scheduler_client/i_scheduler_client.h"
#include <optional>

namespace simulation_framework
{
namespace core
{

class CommunicationManager;

namespace lifecycle
{

class FmuBaseActivity : public BaseActivity
{
  public:
    FmuBaseActivity(const std::string& name,
                    std::shared_ptr<CommunicationManager> communication_manager,
                    std::unique_ptr<scheduling::ISchedulerClient> scheduler_client,
                    FmuConfig fmu_config,
                    std::unique_ptr<IFmuLogic> fmu_logic,
                    const std::optional<double> step_size = std::nullopt);

    virtual void ExecuteStep() override;

    virtual void Init() override;

    virtual void AddPublisherAndSubscriber() override;

  protected:
    FmuInOutMap DecodeMessage(const rtidds::FmuMessage& message) const;

    rtidds::FmuMessage EncodeMessage(const FmuInOutMap& outputs) const;

    FmuInOutMap DecodeBytesMessage(const rtidds::GenericBytesMessage& message) const;

    rtidds::GenericBytesMessage EncodeBytesMessage(const FmuInOutMap& outputs) const;

    void AddSubscriberForTopic(const std::string& topic_name, FmuInOutMap& var_map);

    void AddPublisherForTopic(const std::string& topic_name, const FmuInOutMap& var_map);

    FmuConfig fmu_config_{};

    std::unique_ptr<IFmuLogic> fmu_logic_;

    std::optional<double> step_size_;

    FmuTopicToVarMap init_param_topics_to_var_map_{};

    FmuTopicToVarMap input_topics_to_var_map_{};

    FmuTopicToVarMap output_topics_to_var_map_{};
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