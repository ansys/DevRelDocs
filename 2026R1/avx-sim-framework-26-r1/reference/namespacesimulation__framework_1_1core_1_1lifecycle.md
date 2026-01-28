<a id="namespacesimulation__framework_1_1core_1_1lifecycle"></a>
# Namespace simulation\_framework::core::lifecycle

![][C++]

#include: <[fmu_config.h](fmu__config_8h.md#fmu__config_8h)>





## Classes

* [simulation\_framework::core::lifecycle::BaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity)
* [simulation\_framework::core::lifecycle::FmuBaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity)
* [simulation\_framework::core::lifecycle::FmuConfig](structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig.md#structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig)
* [simulation\_framework::core::lifecycle::FmuLogic](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic)
* [simulation\_framework::core::lifecycle::IActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity)
* [simulation\_framework::core::lifecycle::IActivityFactory](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory)
* [simulation\_framework::core::lifecycle::IFmuLogic](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic)
* [simulation\_framework::core::lifecycle::ISimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance)
* [simulation\_framework::core::lifecycle::SimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance)

## Typedefs

<a id="fmu__config_8h_1aee91e795e024afcf1bedec48619532c7"></a>
### Typedef FmuInOutType

![][public]

#include: <[fmu_config.h](fmu__config_8h.md#fmu__config_8h)>


```cpp
using simulation_framework::core::lifecycle::FmuInOutType =  std::variant<bool, int, double, std::string, std::vector<uint8_t>>
```








**Return type**: std::variant< bool, int, double, std::string, std::vector< uint8_t > >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuInOutType"}]}`
-->

<a id="fmu__config_8h_1a2b25e1d983b035db430681a5be5fcea7"></a>
### Typedef FmuInOutMap

![][public]

#include: <[fmu_config.h](fmu__config_8h.md#fmu__config_8h)>


```cpp
using simulation_framework::core::lifecycle::FmuInOutMap =  std::map<std::string, FmuInOutType>
```








**Return type**: std::map< std::string, FmuInOutType >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuInOutMap"}]}`
-->

<a id="fmu__config_8h_1a88b7bd9eb6919a835658f6974721f51b"></a>
### Typedef FmuTopicToVarNames

![][public]

#include: <[fmu_config.h](fmu__config_8h.md#fmu__config_8h)>


```cpp
using simulation_framework::core::lifecycle::FmuTopicToVarNames =  std::map<std::string, std::set<std::string>>
```








**Return type**: std::map< std::string, std::set< std::string > >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuTopicToVarNames"}]}`
-->

<a id="fmu__config_8h_1a35c84d026c232d0921f0ed18f3d8811c"></a>
### Typedef FmuTopicToVarMap

![][public]

#include: <[fmu_config.h](fmu__config_8h.md#fmu__config_8h)>


```cpp
using simulation_framework::core::lifecycle::FmuTopicToVarMap =  std::map<std::string, FmuInOutMap>
```








**Return type**: std::map< std::string, FmuInOutMap >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuTopicToVarMap"}]}`
-->

<a id="fmu__config_8h_1a78c39e5dfb4b262c96fd85670713a436"></a>
### Typedef FmuMessageToVarNames

![][public]

#include: <[fmu_config.h](fmu__config_8h.md#fmu__config_8h)>


```cpp
using simulation_framework::core::lifecycle::FmuMessageToVarNames =  std::map<std::string, std::string>
```








**Return type**: std::map< std::string, std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuMessageToVarNames"}]}`
-->

<a id="fmu__config_8h_1ab05b2be965fae08d37bbf5e32c976477"></a>
### Typedef FmuVarToMessageNames

![][public]

#include: <[fmu_config.h](fmu__config_8h.md#fmu__config_8h)>


```cpp
using simulation_framework::core::lifecycle::FmuVarToMessageNames =  std::map<std::string, std::string>
```








**Return type**: std::map< std::string, std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuVarToMessageNames"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)