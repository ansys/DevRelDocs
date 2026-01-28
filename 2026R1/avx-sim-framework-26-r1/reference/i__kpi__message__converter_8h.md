<a id="i__kpi__message__converter_8h"></a>
# File i\_kpi\_message\_converter.h

![][C++]

**Location**: `core/kpi/kpi\_message\_converter/i\_kpi\_message\_converter.h`





## Classes

* [simulation\_framework::core::kpi::IKpiMessageConverter](classsimulation__framework_1_1core_1_1kpi_1_1IKpiMessageConverter.md#classsimulation__framework_1_1core_1_1kpi_1_1IKpiMessageConverter)

## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation\_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)
* [simulation\_framework::core::kpi](namespacesimulation__framework_1_1core_1_1kpi.md#namespacesimulation__framework_1_1core_1_1kpi)

## Includes

* [core/kpi/definition/kpi_definition.h](kpi__definition_8h.md#kpi__definition_8h)
* core/message/rtidds/kpi/kpi_message.hpp


```mermaid
graph LR
2["core/kpi/definition/kpi_definition.h"]
click 2 "kpi__definition_8h_source.md#kpi__definition_8h_source"
2 --> 3
2 --> 6
2 --> 9

1["i_kpi_message_converter.h"]
click 1 "i__kpi__message__converter_8h.md#i__kpi__message__converter_8h"
1 --> 2
1 --> 10

3["core/time/i_clock/i_clock.h"]
click 3 "i__clock_8h_source.md#i__clock_8h_source"
3 --> 4
3 --> 7
3 --> 8

4["core/time/i_clock/timestamp.h"]
click 4 "timestamp_8h_source.md#timestamp_8h_source"
4 --> 5
4 --> 6

7["chrono"]

10["core/message/rtidds/kpi/kpi_message.hpp"]

5["cstdint"]

8["memory"]

6["string"]

9["vector"]

```


## Included by

* [kpi_message_converter.h](kpi__message__converter_8h.md#kpi__message__converter_8h)


```mermaid
graph RL
1["i_kpi_message_converter.h"]
click 1 "i__kpi__message__converter_8h.md#i__kpi__message__converter_8h"
2 --> 1

2["kpi_message_converter.h"]
click 2 "kpi__message__converter_8h_source.md#kpi__message__converter_8h_source"

```


## Source


```cpp


#pragma once

#include "core/kpi/definition/kpi_definition.h"
#include "core/message/rtidds/kpi/kpi_message.hpp"

namespace simulation_framework
{
namespace core
{
namespace kpi
{

class IKpiMessageConverter
{
  public:
    virtual ~IKpiMessageConverter() = default;

    virtual rtidds::KpiMessage ConvertToDds(const KpiMessage& kpi_msgs) = 0;

    virtual KpiMessage DecodeFromDds(const rtidds::KpiMessage& kpi_msgs) = 0;
};

}  // namespace kpi
}  // namespace core
}  // namespace simulation_framework
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)