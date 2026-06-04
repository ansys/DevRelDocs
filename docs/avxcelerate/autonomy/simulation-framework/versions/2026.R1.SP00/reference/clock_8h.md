# File clock.h

![][C++]

**Location**: `core/time/clock/clock.h`





## Classes

* [simulation_framework::core::time::Clock](classsimulation__framework_1_1core_1_1time_1_1Clock.md#classsimulation__framework_1_1core_1_1time_1_1Clock)

## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)
* [simulation_framework::core::time](namespacesimulation__framework_1_1core_1_1time.md#namespacesimulation__framework_1_1core_1_1time)

## Includes

* [core/time/i_clock/i_clock.h](i__clock_8h.md#i__clock_8h)




## Source


```cpp


#pragma once

#include "core/time/i_clock/i_clock.h"

namespace simulation_framework
{
namespace core
{
namespace time
{


class Clock : public IClock
{
  public:
    Clock(const milliseconds& ms = milliseconds(0));
    void SetNow(const milliseconds& ms) override;
    void SetNow(const Timestamp& timestamp) override;
    milliseconds GetNow() const override;
    Timestamp GetNowAsTimestamp() const override;
    void IncrementBy(const milliseconds& ms) override;

  private:
    timepoint<milliseconds> ms_;
};

}  // namespace time
}  // namespace core
}  // namespace simulation_framework
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)