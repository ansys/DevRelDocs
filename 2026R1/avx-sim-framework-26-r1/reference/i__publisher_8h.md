# File i_publisher.h

![][C++]

**Location**: `core/communication/i_publisher.h`





## Classes

* [simulation_framework::core::IPublisher](classsimulation__framework_1_1core_1_1IPublisher.md#classsimulation__framework_1_1core_1_1IPublisher)

## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)

## Includes

* <chrono>
* <memory>
* <string>
* <vector>




## Included by

* [i_topic.h](i__topic_8h.md#i__topic_8h)




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

class IPublisher
{
  public:
    virtual ~IPublisher() = default;
    virtual void Execute() = 0;
    virtual void Init() = 0;
    virtual bool WaitForSubscriber(std::chrono::milliseconds timeout = std::chrono::milliseconds(60000)) = 0;
    virtual bool WaitForSubscribersInNumberOf(const int subscriber_count,
                                              std::chrono::milliseconds timeout = std::chrono::milliseconds(60000)) = 0;
};

using Publishers = std::vector<std::unique_ptr<IPublisher>>;

}  // namespace core
}  // namespace simulation_framework
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)