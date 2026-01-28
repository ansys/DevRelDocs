<a id="i__topic_8h"></a>
# File i\_topic.h

![][C++]

**Location**: `core/communication/i\_topic.h`





## Classes

* [simulation\_framework::core::ITopic](classsimulation__framework_1_1core_1_1ITopic.md#classsimulation__framework_1_1core_1_1ITopic)

## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation\_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)

## Includes

* [core/communication/i_publisher.h](i__publisher_8h.md#i__publisher_8h)
* [core/communication/i_subscriber.h](i__subscriber_8h.md#i__subscriber_8h)


```mermaid
graph LR
2["core/communication/i_publisher.h"]
click 2 "i__publisher_8h_source.md#i__publisher_8h_source"
2 --> 3
2 --> 4
2 --> 5
2 --> 6

7["core/communication/i_subscriber.h"]
click 7 "i__subscriber_8h_source.md#i__subscriber_8h_source"
7 --> 3
7 --> 4
7 --> 5
7 --> 6

1["i_topic.h"]
click 1 "i__topic_8h.md#i__topic_8h"
1 --> 2
1 --> 7

3["chrono"]

4["memory"]

5["string"]

6["vector"]

```


## Included by

* [base_activity.h](base__activity_8h.md#base__activity_8h)
* [topic.h](topic_8h.md#topic_8h)


```mermaid
graph RL
7["topic_registry.h"]
click 7 "autonomy_2communication_2topic__registry_2topic__registry_8h.md#autonomy_2communication_2topic__registry_2topic__registry_8h"

5["communication_manager_creator.h"]
click 5 "communication__manager__creator_8h_source.md#communication__manager__creator_8h_source"

1["i_topic.h"]
click 1 "i__topic_8h.md#i__topic_8h"
2 --> 1
4 --> 1

4["topic.h"]
click 4 "topic_8h_source.md#topic_8h_source"
5 --> 4
6 --> 4

6["topic_registry.h"]
click 6 "core_2communication_2topic__registry_8h_source.md#core_2communication_2topic__registry_8h_source"
2 --> 6
7 --> 6

2["base_activity.h"]
click 2 "base__activity_8h_source.md#base__activity_8h_source"
3 --> 2

3["fmu_base_activity.h"]
click 3 "fmu__base__activity_8h_source.md#fmu__base__activity_8h_source"

```


## Source


```cpp


#pragma once

#include "core/communication/i_publisher.h"
#include "core/communication/i_subscriber.h"

namespace simulation_framework
{
namespace core
{

enum class TopicType
{
    kRTIDDS = 0,
    kGRPC
};
using TopicId = std::string;

class ITopic
{
  public:
    virtual ~ITopic() = default;

    virtual TopicId GetId() const = 0;

    virtual TopicType GetType() const = 0;

    virtual std::size_t SubscriberCount() const = 0;

    virtual std::size_t PublisherCount() const = 0;

    virtual void AddPublisher(std::unique_ptr<IPublisher> pub_ptr) = 0;

    virtual void AddSubscriber(std::unique_ptr<ISubscriber> sub_ptr) = 0;

    virtual void ClearPubSub() = 0;

    virtual const Subscribers& GetSubscribers() const = 0;

    virtual const Publishers& GetPublishers() const = 0;
};

using TopicIdVector = std::vector<TopicId>;
using Topics = std::vector<std::shared_ptr<ITopic>>;

}  // namespace core
}  // namespace simulation_framework
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)