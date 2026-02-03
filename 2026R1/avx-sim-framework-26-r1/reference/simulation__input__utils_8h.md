# File simulation_input_utils.h

![][C++]

**Location**: `autonomy/simulation/sim_instance/simulation_input_utils.h`





## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [autonomy](namespaceautonomy.md#namespaceautonomy)
* [simulation_framework::autonomy](namespacesimulation__framework_1_1autonomy.md#namespacesimulation__framework_1_1autonomy)
* [util](namespaceutil.md#namespaceutil)
* [simulation_framework::autonomy::util](namespacesimulation__framework_1_1autonomy_1_1util.md#namespacesimulation__framework_1_1autonomy_1_1util)

## Includes

* [core/service/parameter/simulation_parameters.h](simulation__parameters_8h.md#simulation__parameters_8h)
* <optional>




## Source


```cpp


#pragma once

#include "core/service/parameter/simulation_parameters.h"
#include <optional>

namespace simulation_framework
{
namespace autonomy
{

namespace util
{

std::optional<std::string> GetCustomizedParameterByName(const std::string& name,
                                                        const core::SimulationParameters& core_parameters);

std::string GetInputOpenScenarioFilePath(const core::SimulationParameters& core_parameters);

std::string GetGtGenUserSettingsFilePath(const core::SimulationParameters& core_parameters);

std::string GetDriverInputFilePath(const core::SimulationParameters& core_parameters);

}  // namespace util
}  // namespace autonomy
}  // namespace simulation_framework
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)