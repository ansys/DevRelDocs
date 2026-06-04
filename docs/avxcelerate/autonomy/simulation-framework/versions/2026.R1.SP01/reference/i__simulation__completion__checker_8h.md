# File i_simulation_completion_checker.h

![][C++]

**Location**: `core/time/i_simulation_completion_checker/i_simulation_completion_checker.h`





## Classes

* [simulation_framework::core::time::ISimulationCompletionChecker](classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker.md#classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker)

## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)
* [simulation_framework::core::time](namespacesimulation__framework_1_1core_1_1time.md#namespacesimulation__framework_1_1core_1_1time)

## Includes

* core/export/simfwk_core_export.h
* [core/time/i_clock/i_clock.h](i__clock_8h.md#i__clock_8h)




## Included by

* [simulation_completion_checker.h](simulation__completion__checker_8h.md#simulation__completion__checker_8h)
* [simulation_instance.h](simulation__instance_8h.md#simulation__instance_8h)




## Source


```cpp


#ifndef SIMFWK_CORE_TIME_ISIMULATIONCOMPLETIONCHECKER_ISIMULATIONCOMPLETIONCHECKER_H
#define SIMFWK_CORE_TIME_ISIMULATIONCOMPLETIONCHECKER_ISIMULATIONCOMPLETIONCHECKER_H

#include "core/export/simfwk_core_export.h"
#include "core/time/i_clock/i_clock.h"

namespace simulation_framework
{
namespace core
{
namespace time
{

class SIMFWK_CORE_API ISimulationCompletionChecker
{
  public:
    virtual bool IsSimulationFinished() const = 0;

    virtual ~ISimulationCompletionChecker() = default;

    virtual std::chrono::milliseconds GetSimulationDuration() const = 0;
};

}  // namespace time
}  // namespace core
}  // namespace simulation_framework

#endif  // SIMFWK_CORE_TIME_ISIMULATIONCOMPLETIONCHECKER_ISIMULATIONCOMPLETIONCHECKER_H
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)