# File cli_parser.h

![][C++]

**Location**: `core/service/cli/cli_parser.h`





## Classes

* [simulation_framework::core::CliParser](classsimulation__framework_1_1core_1_1CliParser.md#classsimulation__framework_1_1core_1_1CliParser)

## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)

## Includes

* [core/service/parameter/simulation_parameters.h](simulation__parameters_8h.md#simulation__parameters_8h)
* <optional>
* <string>
* <variant>
* <vector>




## Source


```cpp


#pragma once

#include "core/service/parameter/simulation_parameters.h"
#include <optional>
#include <string>
#include <variant>
#include <vector>

namespace simulation_framework
{
namespace core
{

class CliParser final
{
  public:
    bool Parse(int argc, const char** argv);

    std::string GetParserMessage() const;

    const SimulationParameters& GetSimulationParameters() const;

    std::string GetSimulationConfig() const;

  private:
    bool ConvertCustomizedParameterFromArgs(const std::vector<std::string>& input_args,
                                            SimulationParameters::CustomizedParameters& customized_parameters);

    SimulationParameters core_parameters_{};

    std::string parser_message_{};
};

}  // namespace core
}  // namespace simulation_framework
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)