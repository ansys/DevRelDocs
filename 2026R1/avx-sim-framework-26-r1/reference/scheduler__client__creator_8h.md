# File scheduler_client_creator.h

![][C++]

**Location**: `core/scheduler/scheduler_client/scheduler_client_creator.h`





## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)
* [simulation_framework::core::scheduling](namespacesimulation__framework_1_1core_1_1scheduling.md#namespacesimulation__framework_1_1core_1_1scheduling)
* [simulation_framework::core::scheduling::scheduling_client_creator](namespacesimulation__framework_1_1core_1_1scheduling_1_1scheduling__client__creator.md#namespacesimulation__framework_1_1core_1_1scheduling_1_1scheduling__client__creator)

## Includes

* [core/scheduler/i_scheduler_client/i_scheduler_client.h](i__scheduler__client_8h.md#i__scheduler__client_8h)
* <memory>




## Source


```cpp


#pragma once

#include "core/scheduler/i_scheduler_client/i_scheduler_client.h"
#include <memory>

namespace simulation_framework
{
namespace core
{
namespace scheduling
{
namespace scheduling_client_creator
{


std::unique_ptr<ISchedulerClient> Create(const SchedulerClientType type);

}  // namespace scheduling_client_creator
}  // namespace scheduling
}  // namespace core
}  // namespace simulation_framework
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)