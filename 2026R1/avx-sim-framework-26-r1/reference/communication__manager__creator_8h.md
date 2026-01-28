<a id="communication__manager__creator_8h"></a>
# File communication\_manager\_creator.h

![][C++]

**Location**: `core/communication/communication\_manager\_creator.h`





## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation\_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)
* [simulation\_framework::core::communication\_manager\_creator](namespacesimulation__framework_1_1core_1_1communication__manager__creator.md#namespacesimulation__framework_1_1core_1_1communication__manager__creator)

## Includes

* [core/communication/topic.h](topic_8h.md#topic_8h)
* <memory>


```mermaid
graph LR
1["communication_manager_creator.h"]
click 1 "communication__manager__creator_8h.md#communication__manager__creator_8h"
1 --> 2
1 --> 6

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

2["core/communication/topic.h"]
click 2 "topic_8h_source.md#topic_8h_source"
2 --> 3
2 --> 10
2 --> 11

5["chrono"]

10["functional"]

6["memory"]

11["stdexcept"]

7["string"]

8["vector"]

```


## Source


```cpp


#pragma once

#include "core/communication/topic.h"
#include <memory>

namespace simulation_framework
{
namespace core
{

class CommunicationManager;


namespace communication_manager_creator
{

enum class Type
{
    kRTIDDS = 0,
    kMOCK,
};

std::shared_ptr<CommunicationManager> Create(const Type type, const Topics& topics = Topics{});

}  // namespace communication_manager_creator
}  // namespace core
}  // namespace simulation_framework
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)