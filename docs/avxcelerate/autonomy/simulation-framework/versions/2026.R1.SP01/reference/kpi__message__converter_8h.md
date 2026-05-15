# File kpi_message_converter.h

![][C++]

**Location**: `core/kpi/kpi_message_converter/kpi_message_converter.h`





## Classes

* [simulation_framework::core::kpi::KpiMessageConverter](classsimulation__framework_1_1core_1_1kpi_1_1KpiMessageConverter.md#classsimulation__framework_1_1core_1_1kpi_1_1KpiMessageConverter)

## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)
* [simulation_framework::core::kpi](namespacesimulation__framework_1_1core_1_1kpi.md#namespacesimulation__framework_1_1core_1_1kpi)

## Includes

* core/export/simfwk_core_export.h
* [core/kpi/kpi_message_converter/i_kpi_message_converter.h](i__kpi__message__converter_8h.md#i__kpi__message__converter_8h)




## Source


```cpp


#ifndef SIMFWK_CORE_KPI_KPIMESSAGECONVERTER_KPIMESSAGECONVERTER_H
#define SIMFWK_CORE_KPI_KPIMESSAGECONVERTER_KPIMESSAGECONVERTER_H

#include "core/export/simfwk_core_export.h"
#include "core/kpi/kpi_message_converter/i_kpi_message_converter.h"

namespace simulation_framework
{
namespace core
{
namespace kpi
{


class SIMFWK_CORE_API KpiMessageConverter : public IKpiMessageConverter
{
  public:
    rtidds::KpiMessage ConvertToDds(const KpiMessage& kpi_msgs) override;
    KpiMessage DecodeFromDds(const rtidds::KpiMessage& kpi_msgs) override;
};

}  // namespace kpi
}  // namespace core
}  // namespace simulation_framework

#endif  // SIMFWK_CORE_KPI_KPIMESSAGECONVERTER_KPIMESSAGECONVERTER_H
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)