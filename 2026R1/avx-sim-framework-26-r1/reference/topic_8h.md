<a id="topic_8h"></a>
# File topic.h

![][C++]

**Location**: `core/communication/topic.h`





## Classes

* [simulation\_framework::core::Topic](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation\_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)

## Includes

* [core/communication/i_topic.h](i__topic_8h.md#i__topic_8h)
* <functional>
* <stdexcept>


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

1["topic.h"]
click 1 "topic_8h.md#topic_8h"
1 --> 2
1 --> 9
1 --> 10

4["chrono"]

9["functional"]

5["memory"]

10["stdexcept"]

6["string"]

7["vector"]

```


## Included by

* [communication_manager_creator.h](communication__manager__creator_8h.md#communication__manager__creator_8h)
* [topic_registry.h](core_2communication_2topic__registry_8h.md#core_2communication_2topic__registry_8h)


```mermaid
graph RL
6["topic_registry.h"]
click 6 "autonomy_2communication_2topic__registry_2topic__registry_8h.md#autonomy_2communication_2topic__registry_2topic__registry_8h"

2["communication_manager_creator.h"]
click 2 "communication__manager__creator_8h_source.md#communication__manager__creator_8h_source"

1["topic.h"]
click 1 "topic_8h.md#topic_8h"
2 --> 1
3 --> 1

3["topic_registry.h"]
click 3 "core_2communication_2topic__registry_8h_source.md#core_2communication_2topic__registry_8h_source"
4 --> 3
6 --> 3

4["base_activity.h"]
click 4 "base__activity_8h_source.md#base__activity_8h_source"
5 --> 4

5["fmu_base_activity.h"]
click 5 "fmu__base__activity_8h_source.md#fmu__base__activity_8h_source"

```


## Source


```cpp


#pragma once

#include "core/communication/i_topic.h"
#include <functional>
#include <stdexcept>

namespace simulation_framework
{
namespace core
{

using TopicId = std::string;

template <typename TopicMsgType>
class Topic : public ITopic
{
  public:
    using PublisherCallback = std::function<TopicMsgType()>;
    using SubscriberMessageCallback = std::function<void(const TopicMsgType&)>;
    using TopicMessageType = TopicMsgType;

    Topic(const TopicId& topic_id, const TopicType topic_type = TopicType::kRTIDDS)
        : ITopic{}, topic_id_(topic_id), topic_type_(topic_type)
    {
    }

    TopicId GetId() const override { return topic_id_; }
    TopicType GetType() const override { return topic_type_; }

    void AddPublisher(std::unique_ptr<IPublisher> pub_ptr) override
    {
        if (publishers_.size() == 1)
        {
            throw std::range_error("Already a Publisher for topic " + topic_id_ +
                                   " has been set. Multiple publishers for same topic is NOT allowed! ");
        }
        publishers_.push_back(std::move(pub_ptr));
    }
    void AddSubscriber(std::unique_ptr<ISubscriber> sub_ptr) override { subscribers_.push_back(std::move(sub_ptr)); }

    std::size_t SubscriberCount() const override { return subscribers_.size(); }
    std::size_t PublisherCount() const override { return publishers_.size(); }

    void ClearPubSub() override
    {
        publishers_.clear();
        subscribers_.clear();
    }

    const Subscribers& GetSubscribers() const override { return subscribers_; }
    const Publishers& GetPublishers() const override { return publishers_; }

  private:
    TopicId topic_id_{};
    Subscribers subscribers_{};
    Publishers publishers_{};

    const core::TopicType topic_type_{core::TopicType::kRTIDDS};
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