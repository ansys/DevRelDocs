# File version.h

![][C++]

**Location**: `core/version/version.h`





## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)

## Includes

* <string>




## Source


```cpp


#ifndef EXPORT_VERSION_VERSION_H_
#define EXPORT_VERSION_VERSION_H_

#include <string>

namespace simulation_framework
{
namespace core
{

std::string GetCoreVersion();
std::string GetCorePublicVersion();
std::string GetCoreInternalVersion();

}  // namespace core
}  // namespace simulation_framework

#endif  // EXPORT_VERSION_VERSION_H_
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)