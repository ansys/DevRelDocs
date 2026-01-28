<a id="autonomy__sim__instance__creator_8h"></a>
# File autonomy\_sim\_instance\_creator.h

![][C++]

**Location**: `autonomy/simulation/sim\_instance/autonomy\_sim\_instance\_creator.h`





## Classes

* [simulation\_framework::autonomy::AutonomySimInstanceCreator](classsimulation__framework_1_1autonomy_1_1AutonomySimInstanceCreator.md#classsimulation__framework_1_1autonomy_1_1AutonomySimInstanceCreator)

## Namespaces

* [simulation\_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [autonomy](namespaceautonomy.md#namespaceautonomy)
* [simulation\_framework::autonomy](namespacesimulation__framework_1_1autonomy.md#namespacesimulation__framework_1_1autonomy)

## Includes

* [autonomy/simulation/sim_instance/i_sim_instance_creator.h](i__sim__instance__creator_8h.md#i__sim__instance__creator_8h)


```mermaid
graph LR
1["autonomy_sim_instance_creator.h"]
click 1 "autonomy__sim__instance__creator_8h.md#autonomy__sim__instance__creator_8h"
1 --> 2

2["autonomy/simulation/sim_instance/i_sim_instance_creator.h"]
click 2 "i__sim__instance__creator_8h_source.md#i__sim__instance__creator_8h_source"
2 --> 3
2 --> 5
2 --> 9

3["core/lifecycle/i_simulation_instance/i_simulation_instance.h"]
click 3 "i__simulation__instance_8h_source.md#i__simulation__instance_8h_source"
3 --> 4

5["core/service/parameter/simulation_parameters.h"]
click 5 "simulation__parameters_8h_source.md#simulation__parameters_8h_source"
5 --> 4
5 --> 6
5 --> 7
5 --> 8

4["chrono"]

9["memory"]

6["string"]

7["unordered_map"]

8["vector"]

```


## Source


```cpp


#pragma once

#include "autonomy/simulation/sim_instance/i_sim_instance_creator.h"

namespace simulation_framework
{

namespace autonomy
{

class AutonomySimInstanceCreator : public ISimInstanceCreator
{
  public:
    AutonomySimInstanceCreator() = default;
    ~AutonomySimInstanceCreator() = default;

    std::unique_ptr<core::lifecycle::ISimulationInstance> Create(
        const core::SimulationParameters& core_parameters) override;
};

}  // namespace autonomy
}  // namespace simulation_framework
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)