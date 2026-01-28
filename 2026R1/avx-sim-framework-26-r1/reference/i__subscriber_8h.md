<a id="i__subscriber_8h"></a>
# File i\_subscriber.h

![][C++]

**Location**: `core/communication/i\_subscriber.h`





## Classes

* [simulation\_framework::core::ISubscriber](classsimulation__framework_1_1core_1_1ISubscriber.md#classsimulation__framework_1_1core_1_1ISubscriber)

## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation\_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)

## Includes

* <chrono>
* <memory>
* <string>
* <vector>


```mermaid
graph LR
1["i_subscriber.h"]
click 1 "i__subscriber_8h.md#i__subscriber_8h"
1 --> 2
1 --> 3
1 --> 4
1 --> 5

2["chrono"]

3["memory"]

4["string"]

5["vector"]

```


## Included by

* [i_topic.h](i__topic_8h.md#i__topic_8h)


```mermaid
graph RL
8["topic_registry.h"]
click 8 "autonomy_2communication_2topic__registry_2topic__registry_8h.md#autonomy_2communication_2topic__registry_2topic__registry_8h"

6["communication_manager_creator.h"]
click 6 "communication__manager__creator_8h_source.md#communication__manager__creator_8h_source"

1["i_subscriber.h"]
click 1 "i__subscriber_8h.md#i__subscriber_8h"
2 --> 1

2["i_topic.h"]
click 2 "i__topic_8h_source.md#i__topic_8h_source"
3 --> 2
5 --> 2

5["topic.h"]
click 5 "topic_8h_source.md#topic_8h_source"
6 --> 5
7 --> 5

7["topic_registry.h"]
click 7 "core_2communication_2topic__registry_8h_source.md#core_2communication_2topic__registry_8h_source"
3 --> 7
8 --> 7

3["base_activity.h"]
click 3 "base__activity_8h_source.md#base__activity_8h_source"
4 --> 3

4["fmu_base_activity.h"]
click 4 "fmu__base__activity_8h_source.md#fmu__base__activity_8h_source"

```


## Source


```cpp


#pragma once

#include <chrono>
#include <memory>
#include <string>
#include <vector>

namespace simulation_framework
{
namespace core
{

class ISubscriber
{
  public:
    virtual ~ISubscriber() = default;
    virtual void Execute() = 0;
    virtual void Init() = 0;
    virtual bool WaitForPublisher(std::chrono::milliseconds timeout = std::chrono::milliseconds(60000)) = 0;
};

using Subscribers = std::vector<std::unique_ptr<ISubscriber>>;

}  // namespace core
}  // namespace simulation_framework
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)