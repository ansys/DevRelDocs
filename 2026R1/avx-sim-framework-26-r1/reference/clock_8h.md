<a id="clock_8h"></a>
# File clock.h

![][C++]

**Location**: `core/time/clock/clock.h`





## Classes

* [simulation\_framework::core::time::Clock](classsimulation__framework_1_1core_1_1time_1_1Clock.md#classsimulation__framework_1_1core_1_1time_1_1Clock)

## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation\_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)
* [simulation\_framework::core::time](namespacesimulation__framework_1_1core_1_1time.md#namespacesimulation__framework_1_1core_1_1time)

## Includes

* [core/time/i_clock/i_clock.h](i__clock_8h.md#i__clock_8h)


```mermaid
graph LR
1["clock.h"]
click 1 "clock_8h.md#clock_8h"
1 --> 2

2["core/time/i_clock/i_clock.h"]
click 2 "i__clock_8h_source.md#i__clock_8h_source"
2 --> 3
2 --> 6
2 --> 7

3["core/time/i_clock/timestamp.h"]
click 3 "timestamp_8h_source.md#timestamp_8h_source"
3 --> 4
3 --> 5

6["chrono"]

4["cstdint"]

7["memory"]

5["string"]

```


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


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)