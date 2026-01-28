<a id="i__cli__server_8h"></a>
# File i\_cli\_server.h

![][C++]

**Location**: `core/service/grpc/cli/i\_cli\_server.h`





## Classes

* [simulation\_framework::core::ISimfwkCliServer](classsimulation__framework_1_1core_1_1ISimfwkCliServer.md#classsimulation__framework_1_1core_1_1ISimfwkCliServer)

## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation\_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)

## Includes

* [core/service/sim_runner/i_sim_runner.h](i__sim__runner_8h.md#i__sim__runner_8h)
* <memory>


```mermaid
graph LR
1["i_cli_server.h"]
click 1 "i__cli__server_8h.md#i__cli__server_8h"
1 --> 2
1 --> 4

2["core/service/sim_runner/i_sim_runner.h"]
click 2 "i__sim__runner_8h_source.md#i__sim__runner_8h_source"
2 --> 3

4["memory"]

3["string"]

```


## Included by

* [cli.h](cli_8h.md#cli_8h)
* [cli_server.h](cli__server_8h.md#cli__server_8h)


```mermaid
graph RL
3["cli_provider.h"]
click 3 "cli__provider_8h_source.md#cli__provider_8h_source"

2["cli.h"]
click 2 "cli_8h_source.md#cli_8h_source"
3 --> 2

4["cli_server.h"]
click 4 "cli__server_8h_source.md#cli__server_8h_source"

1["i_cli_server.h"]
click 1 "i__cli__server_8h.md#i__cli__server_8h"
2 --> 1
4 --> 1

```


## Source


```cpp


#pragma once

#include "core/service/sim_runner/i_sim_runner.h"
#include <memory>

namespace simulation_framework
{
namespace core
{


class ISimfwkCliServer
{
  public:
    virtual ~ISimfwkCliServer() = default;
    virtual void BindSimRunner(std::unique_ptr<simulation_framework::core::ISimRunner> sim_runner) = 0;
    virtual void WaitForCommand() = 0;
    virtual std::string GetServerAddress() = 0;
};

}  // namespace core
}  // namespace simulation_framework
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)