# File autonomy_sim_instance_creator.h

![][C++]

**Location**: `autonomy/simulation/sim_instance/autonomy_sim_instance_creator.h`





## Classes

* [simulation_framework::autonomy::AutonomySimInstanceCreator](classsimulation__framework_1_1autonomy_1_1AutonomySimInstanceCreator.md#classsimulation__framework_1_1autonomy_1_1AutonomySimInstanceCreator)

## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [autonomy](namespaceautonomy.md#namespaceautonomy)
* [simulation_framework::autonomy](namespacesimulation__framework_1_1autonomy.md#namespacesimulation__framework_1_1autonomy)

## Includes

* [autonomy/simulation/sim_instance/i_sim_instance_creator.h](i__sim__instance__creator_8h.md#i__sim__instance__creator_8h)




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


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)