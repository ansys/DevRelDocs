<a id="simulation__parameters_8h"></a>
# File simulation\_parameters.h

![][C++]

**Location**: `core/service/parameter/simulation\_parameters.h`





## Classes

* [simulation\_framework::core::SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters)

## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation\_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)

## Includes

* <chrono>
* <string>
* <unordered_map>
* <vector>


```mermaid
graph LR
1["simulation_parameters.h"]
click 1 "simulation__parameters_8h.md#simulation__parameters_8h"
1 --> 2
1 --> 3
1 --> 4
1 --> 5

2["chrono"]

3["string"]

4["unordered_map"]

5["vector"]

```


## Included by

* [activity_factory.h](activity__factory_8h.md#activity__factory_8h)
* [cli_parser.h](cli__parser_8h.md#cli__parser_8h)
* [i_activity.h](i__activity_8h.md#i__activity_8h)
* [i_sim_instance_creator.h](i__sim__instance__creator_8h.md#i__sim__instance__creator_8h)
* [simulation_input_utils.h](simulation__input__utils_8h.md#simulation__input__utils_8h)
* [simulation_instance.h](simulation__instance_8h.md#simulation__instance_8h)


```mermaid
graph RL
15["cli_provider.h"]
click 15 "cli__provider_8h_source.md#cli__provider_8h_source"

2["activity_factory.h"]
click 2 "activity__factory_8h_source.md#activity__factory_8h_source"

14["autonomy_sim_instance_creator.h"]
click 14 "autonomy__sim__instance__creator_8h_source.md#autonomy__sim__instance__creator_8h_source"

13["i_sim_instance_creator.h"]
click 13 "i__sim__instance__creator_8h_source.md#i__sim__instance__creator_8h_source"
14 --> 13
15 --> 13

16["simulation_input_utils.h"]
click 16 "simulation__input__utils_8h_source.md#simulation__input__utils_8h_source"

5["base_activity.h"]
click 5 "base__activity_8h_source.md#base__activity_8h_source"
6 --> 5

4["i_activity.h"]
click 4 "i__activity_8h_source.md#i__activity_8h_source"
5 --> 4
7 --> 4
9 --> 4
11 --> 4

6["fmu_base_activity.h"]
click 6 "fmu__base__activity_8h_source.md#fmu__base__activity_8h_source"

7["i_activity_factory.h"]
click 7 "i__activity__factory_8h_source.md#i__activity__factory_8h_source"
2 --> 7
8 --> 7

8["simulation_instance.h"]
click 8 "simulation__instance_8h_source.md#simulation__instance_8h_source"

9["i_scheduler_client.h"]
click 9 "i__scheduler__client_8h_source.md#i__scheduler__client_8h_source"
2 --> 9
5 --> 9
6 --> 9
7 --> 9
10 --> 9

10["scheduler_client_creator.h"]
click 10 "scheduler__client__creator_8h_source.md#scheduler__client__creator_8h_source"

3["cli_parser.h"]
click 3 "cli__parser_8h_source.md#cli__parser_8h_source"

1["simulation_parameters.h"]
click 1 "simulation__parameters_8h.md#simulation__parameters_8h"
2 --> 1
3 --> 1
4 --> 1
13 --> 1
16 --> 1
8 --> 1

11["i_standalone_activity_creator.h"]
click 11 "i__standalone__activity__creator_8h_source.md#i__standalone__activity__creator_8h_source"
12 --> 11

12["standalone_activity_service.h"]
click 12 "standalone__activity__service_8h_source.md#standalone__activity__service_8h_source"

```


## Source


```cpp


#pragma once

#include <chrono>
#include <string>
#include <unordered_map>
#include <vector>

namespace simulation_framework
{
namespace core
{

struct SimulationParameters
{
    using CustomizedParameters = std::unordered_map<std::string, std::string>;

    static constexpr size_t kMaxCustomizedParamNameLength = 64;
    static constexpr size_t kMaxCustomizedParamValueLength = 1024;
    std::string version = "";

    std::string log_level = "Debug";

    std::string id = "";

    std::string simulation_config = "";

    std::string scheduling_config = "";

    std::string output_directory = "./";

    CustomizedParameters customized_parameters = {};

    std::string cli_control_grpc_address = "localhost:50051";

    bool cli_control_mode_enabled = false;

    std::chrono::milliseconds scheduler_event_timeout = std::chrono::milliseconds(60000);

    float timescale_factor = -1.0f;

    bool debugger_enabled = false;

    std::string breakpoints_file_path = "";
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