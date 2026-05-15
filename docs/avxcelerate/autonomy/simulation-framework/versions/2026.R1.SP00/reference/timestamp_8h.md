# File timestamp.h

![][C++]

**Location**: `core/time/i_clock/timestamp.h`





## Classes

* [simulation_framework::core::time::Timestamp](structsimulation__framework_1_1core_1_1time_1_1Timestamp.md#structsimulation__framework_1_1core_1_1time_1_1Timestamp)

## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)
* [simulation_framework::core::time](namespacesimulation__framework_1_1core_1_1time.md#namespacesimulation__framework_1_1core_1_1time)

## Includes

* <cstdint>
* <iomanip>
* <iostream>
* <string>




## Included by

* [i_activity.h](i__activity_8h.md#i__activity_8h)
* [i_clock.h](i__clock_8h.md#i__clock_8h)
* [i_scheduler_client.h](i__scheduler__client_8h.md#i__scheduler__client_8h)




## Source


```cpp


#pragma once

#include <cstdint>
#include <iomanip>
#include <iostream>
#include <string>
namespace simulation_framework
{
namespace core
{
namespace time
{

struct Timestamp
{
    uint32_t seconds;
    uint32_t nanoseconds;
    std::string DebugString() const
    {
        return "Simulation timestamp: " + std::to_string(seconds) + " second and " + std::to_string(nanoseconds) +
               " nanos ";
    }
};

inline bool operator==(const Timestamp& lhs, const Timestamp& rhs)
{
    return (lhs.seconds == rhs.seconds) && (lhs.nanoseconds == rhs.nanoseconds);
}

inline std::ostream& operator<<(std::ostream& os, const Timestamp& timestamp)
{
    double formatted_time = timestamp.seconds + timestamp.nanoseconds * 1e-9;
    os << std::right << std::setw(10) << std::fixed << std::setprecision(3) << formatted_time << " s";
    return os;
}

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