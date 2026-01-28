<a id="kpi__message__converter_8h"></a>
# File kpi\_message\_converter.h

![][C++]

**Location**: `core/kpi/kpi\_message\_converter/kpi\_message\_converter.h`





## Classes

* [simulation\_framework::core::kpi::KpiMessageConverter](classsimulation__framework_1_1core_1_1kpi_1_1KpiMessageConverter.md#classsimulation__framework_1_1core_1_1kpi_1_1KpiMessageConverter)

## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation\_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)
* [simulation\_framework::core::kpi](namespacesimulation__framework_1_1core_1_1kpi.md#namespacesimulation__framework_1_1core_1_1kpi)

## Includes

* [core/kpi/kpi_message_converter/i_kpi_message_converter.h](i__kpi__message__converter_8h.md#i__kpi__message__converter_8h)


```mermaid
graph LR
3["core/kpi/definition/kpi_definition.h"]
click 3 "kpi__definition_8h_source.md#kpi__definition_8h_source"
3 --> 4
3 --> 7
3 --> 10

2["core/kpi/kpi_message_converter/i_kpi_message_converter.h"]
click 2 "i__kpi__message__converter_8h_source.md#i__kpi__message__converter_8h_source"
2 --> 3
2 --> 11

1["kpi_message_converter.h"]
click 1 "kpi__message__converter_8h.md#kpi__message__converter_8h"
1 --> 2

4["core/time/i_clock/i_clock.h"]
click 4 "i__clock_8h_source.md#i__clock_8h_source"
4 --> 5
4 --> 8
4 --> 9

5["core/time/i_clock/timestamp.h"]
click 5 "timestamp_8h_source.md#timestamp_8h_source"
5 --> 6
5 --> 7

8["chrono"]

11["core/message/rtidds/kpi/kpi_message.hpp"]

6["cstdint"]

9["memory"]

7["string"]

10["vector"]

```


## Source


```cpp


#pragma once

#include "core/kpi/kpi_message_converter/i_kpi_message_converter.h"

namespace simulation_framework
{
namespace core
{
namespace kpi
{


class KpiMessageConverter : public IKpiMessageConverter
{
  public:
    rtidds::KpiMessage ConvertToDds(const KpiMessage& kpi_msgs) override;
    KpiMessage DecodeFromDds(const rtidds::KpiMessage& kpi_msgs) override;
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