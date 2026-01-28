<a id="core_2communication_2topic__registry_8h"></a>
# File core/communication/topic\_registry.h

![][C++]

**Location**: `core/communication/topic\_registry.h`





## Namespaces

* [rtidds](namespacertidds.md#namespacertidds)
* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation\_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)
* [topic\_registry](namespacetopic__registry.md#namespacetopic__registry)
* [simulation\_framework::core::topic\_registry](namespacesimulation__framework_1_1core_1_1topic__registry.md#namespacesimulation__framework_1_1core_1_1topic__registry)

## Includes

* [core/communication/topic.h](topic_8h.md#topic_8h)
* core/message/rtidds/common/common.hpp
* core/message/rtidds/fmu/fmu_message.hpp
* core/message/rtidds/generic_bytes/generic_bytes.hpp
* core/message/rtidds/kpi/kpi_message.hpp
* core/message/rtidds/variant_map/variant_map.hpp


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

2["core/communication/topic.h"]
click 2 "topic_8h_source.md#topic_8h_source"
2 --> 3
2 --> 10
2 --> 11

1["topic_registry.h"]
click 1 "core_2communication_2topic__registry_8h.md#core_2communication_2topic__registry_8h"
1 --> 2
1 --> 12
1 --> 13
1 --> 14
1 --> 15
1 --> 16

5["chrono"]

12["core/message/rtidds/common/common.hpp"]

13["core/message/rtidds/fmu/fmu_message.hpp"]

14["core/message/rtidds/generic_bytes/generic_bytes.hpp"]

15["core/message/rtidds/kpi/kpi_message.hpp"]

16["core/message/rtidds/variant_map/variant_map.hpp"]

10["functional"]

6["memory"]

11["stdexcept"]

7["string"]

8["vector"]

```


## Included by

* [base_activity.h](base__activity_8h.md#base__activity_8h)
* [topic_registry.h](autonomy_2communication_2topic__registry_2topic__registry_8h.md#autonomy_2communication_2topic__registry_2topic__registry_8h)


```mermaid
graph RL
4["topic_registry.h"]
click 4 "autonomy_2communication_2topic__registry_2topic__registry_8h.md#autonomy_2communication_2topic__registry_2topic__registry_8h"

1["topic_registry.h"]
click 1 "core_2communication_2topic__registry_8h.md#core_2communication_2topic__registry_8h"
2 --> 1
4 --> 1

2["base_activity.h"]
click 2 "base__activity_8h_source.md#base__activity_8h_source"
3 --> 2

3["fmu_base_activity.h"]
click 3 "fmu__base__activity_8h_source.md#fmu__base__activity_8h_source"

```


## Source


```cpp


#pragma once

#include "core/communication/topic.h"
#include "core/message/rtidds/common/common.hpp"
#include "core/message/rtidds/fmu/fmu_message.hpp"
#include "core/message/rtidds/generic_bytes/generic_bytes.hpp"
#include "core/message/rtidds/kpi/kpi_message.hpp"
#include "core/message/rtidds/variant_map/variant_map.hpp"

namespace rtidds
{
using VariantMessage = FmuMessage;

using VariantData = FmuData;

using VariantDatatype = FmuDatatype;
}  // namespace rtidds

namespace simulation_framework
{
namespace core
{
namespace topic_registry
{


using StringTopicType = Topic<rtidds::CommonString>;

using KpiMessageTopicType = Topic<rtidds::KpiMessage>;

using GenericBytesTopicType = Topic<rtidds::GenericBytesMessage>;

using FmuMessageTopicType = Topic<rtidds::FmuMessage>;

using VariantDataTopicType = Topic<rtidds::VariantMessage>;

using VariantMapTopicType = Topic<rtidds::VariantMap>;

}  // namespace topic_registry
}  // namespace core
}  // namespace simulation_framework
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)