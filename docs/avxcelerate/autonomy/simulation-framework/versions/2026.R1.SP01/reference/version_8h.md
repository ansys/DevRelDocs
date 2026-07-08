# File version.h

![][C++]

**Location**: `core/version/version.h`





## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)

## Includes

* core/export/simfwk_core_export.h
* <string>




## Source


```cpp


#ifndef SIMFWK_CORE_VERSION_VERSION_H
#define SIMFWK_CORE_VERSION_VERSION_H

#include "core/export/simfwk_core_export.h"
#include <string>

namespace simulation_framework
{
namespace core
{

SIMFWK_CORE_API std::string GetCoreVersion();
SIMFWK_CORE_API std::string GetCorePublicVersion();
SIMFWK_CORE_API std::string GetCoreInternalVersion();

}  // namespace core
}  // namespace simulation_framework

#endif  // SIMFWK_CORE_VERSION_VERSION_H
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)