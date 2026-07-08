# File cli.h

![][C++]

**Location**: `core/service/cli/cli.h`





## Classes

* [simulation_framework::core::Cli](classsimulation__framework_1_1core_1_1Cli.md#classsimulation__framework_1_1core_1_1Cli)

## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)

## Includes

* core/export/simfwk_core_export.h
* [core/service/grpc/cli/i_cli_server.h](i__cli__server_8h.md#i__cli__server_8h)
* [core/service/sim_runner/i_sim_runner.h](i__sim__runner_8h.md#i__sim__runner_8h)
* <memory>




## Included by

* [cli_provider.h](cli__provider_8h.md#cli__provider_8h)




## Source


```cpp


#ifndef SIMFWK_CORE_SERVICE_CLI_CLI_H
#define SIMFWK_CORE_SERVICE_CLI_CLI_H

#include "core/export/simfwk_core_export.h"
#include "core/service/grpc/cli/i_cli_server.h"
#include "core/service/sim_runner/i_sim_runner.h"
#include <memory>

namespace simulation_framework
{
namespace core
{

class SIMFWK_CORE_API Cli
{
  public:
    Cli(std::unique_ptr<ISimRunner> sim_runner, std::unique_ptr<ISimfwkCliServer> simfwk_cli_server = nullptr);

    bool Execute();

  private:
    std::unique_ptr<ISimRunner> sim_runner_;

    std::unique_ptr<ISimfwkCliServer> simfwk_cli_server_;
};

}  // namespace core
}  // namespace simulation_framework

#endif  // SIMFWK_CORE_SERVICE_CLI_CLI_H
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)