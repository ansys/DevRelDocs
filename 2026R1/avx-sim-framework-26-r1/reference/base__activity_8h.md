<a id="base__activity_8h"></a>
# File base\_activity.h

![][C++]

**Location**: `core/lifecycle/activity/base\_activity.h`





## Classes

* [simulation\_framework::core::lifecycle::BaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity)

## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation\_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)
* [simulation\_framework::core::lifecycle](namespacesimulation__framework_1_1core_1_1lifecycle.md#namespacesimulation__framework_1_1core_1_1lifecycle)

## Includes

* [core/communication/i_topic.h](i__topic_8h.md#i__topic_8h)
* [core/communication/topic_registry.h](core_2communication_2topic__registry_8h.md#core_2communication_2topic__registry_8h)
* [core/lifecycle/activity/i_activity.h](i__activity_8h.md#i__activity_8h)
* [core/scheduler/i_scheduler_client/i_scheduler_client.h](i__scheduler__client_8h.md#i__scheduler__client_8h)


```mermaid
graph LR
3["core/communication/i_publisher.h"]
click 3 "i__publisher_8h_source.md#i__publisher_8h_source"
3 --> 4
3 --> 5
3 --> 6
3 --> 7

8["core/communication/i_subscriber.h"]
click 8 "i__subscriber_8h_source.md#i__subscriber_8h_source"
8 --> 4
8 --> 5
8 --> 6
8 --> 7

2["core/communication/i_topic.h"]
click 2 "i__topic_8h_source.md#i__topic_8h_source"
2 --> 3
2 --> 8

10["core/communication/topic.h"]
click 10 "topic_8h_source.md#topic_8h_source"
10 --> 2
10 --> 11
10 --> 12

9["core/communication/topic_registry.h"]
click 9 "core_2communication_2topic__registry_8h_source.md#core_2communication_2topic__registry_8h_source"
9 --> 10
9 --> 13
9 --> 14
9 --> 15
9 --> 16
9 --> 17

1["base_activity.h"]
click 1 "base__activity_8h.md#base__activity_8h"
1 --> 2
1 --> 9
1 --> 18
1 --> 24

18["core/lifecycle/activity/i_activity.h"]
click 18 "i__activity_8h_source.md#i__activity_8h_source"
18 --> 19
18 --> 20
18 --> 22
18 --> 4
18 --> 6

24["core/scheduler/i_scheduler_client/i_scheduler_client.h"]
click 24 "i__scheduler__client_8h_source.md#i__scheduler__client_8h_source"
24 --> 18
24 --> 19
24 --> 22
24 --> 6

20["core/service/parameter/simulation_parameters.h"]
click 20 "simulation__parameters_8h_source.md#simulation__parameters_8h_source"
20 --> 4
20 --> 6
20 --> 21
20 --> 7

22["core/time/i_clock/timestamp.h"]
click 22 "timestamp_8h_source.md#timestamp_8h_source"
22 --> 23
22 --> 6

4["chrono"]

13["core/message/rtidds/common/common.hpp"]

14["core/message/rtidds/fmu/fmu_message.hpp"]

15["core/message/rtidds/generic_bytes/generic_bytes.hpp"]

16["core/message/rtidds/kpi/kpi_message.hpp"]

17["core/message/rtidds/variant_map/variant_map.hpp"]

19["core/scheduler/event/simulation_settings.h"]

23["cstdint"]

11["functional"]

5["memory"]

12["stdexcept"]

6["string"]

21["unordered_map"]

7["vector"]

```


## Included by

* [fmu_base_activity.h](fmu__base__activity_8h.md#fmu__base__activity_8h)


```mermaid
graph RL
1["base_activity.h"]
click 1 "base__activity_8h.md#base__activity_8h"
2 --> 1

2["fmu_base_activity.h"]
click 2 "fmu__base__activity_8h_source.md#fmu__base__activity_8h_source"

```


## Source


```cpp


#pragma once

#include "core/communication/i_topic.h"
#include "core/communication/topic_registry.h"
#include "core/lifecycle/activity/i_activity.h"
#include "core/scheduler/i_scheduler_client/i_scheduler_client.h"

namespace simulation_framework
{
namespace core
{

class CommunicationManager;

namespace lifecycle
{
// clang-format off
// clang-format on

class BaseActivity : public IActivity
{
  public:
    BaseActivity(const std::string& activity_name,
                 std::shared_ptr<core::CommunicationManager> communication_manager_ptr,
                 std::unique_ptr<scheduling::ISchedulerClient> scheduler_client);

    BaseActivity(const std::string& activity_name,
                 std::shared_ptr<core::CommunicationManager> communication_manager_ptr,
                 std::unique_ptr<scheduling::ISchedulerClient> scheduler_client,
                 std::chrono::milliseconds timeout);

    BaseActivity(const std::string& activity_name, const Topics& topics);

    BaseActivity(const std::string& activity_name, const Topics& topics, std::chrono::milliseconds timeout);

    virtual ~BaseActivity();

    std::string GetName() const override;

    void SetUpCommunication() final;

    void Step() final;

    void Shutdown() final;

    time::Timestamp GetCurrentTimestamp() const final;

    std::chrono::milliseconds GetCycleTime() const final;

    std::string GetSimulationOutputDirectory() const final;

    const SimulationParameters::CustomizedParameters& GetCustomizedParameters() const final;

    void SetSimulationSettings(const scheduling::SimulationSettings& sim_settings) final;

  protected:
    void Init() override {}

    void Finalize() override{};

    virtual void ExecuteStep() = 0;

    virtual void AddPublisherAndSubscriber() = 0;

    template <typename Topic>
    void AddPublisher(const core::TopicId& topic_id, typename Topic::PublisherCallback callback);
    template <typename Topic>
    void AddSubscriber(const core::TopicId& topic_id, typename Topic::SubscriberMessageCallback callback);

  private:
    void WaitForPubSubConnection() override;

    std::string name_;
    std::shared_ptr<core::CommunicationManager> communication_manager_ptr_;
    std::unique_ptr<scheduling::ISchedulerClient> scheduler_client_ptr_;
    std::chrono::milliseconds timeout_;
    bool is_init_step_finished_{false};
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