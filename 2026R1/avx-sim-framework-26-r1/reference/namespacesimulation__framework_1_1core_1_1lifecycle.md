# Namespace simulation_framework::core::lifecycle

![][C++]

**Definition**: `core/lifecycle/fmu_activity/fmu_config.h` (line 20)





## Classes

* [simulation_framework::core::lifecycle::BaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1BaseActivity)
* [simulation_framework::core::lifecycle::FmuBaseActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuBaseActivity)
* [simulation_framework::core::lifecycle::FmuConfig](structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig.md#structsimulation__framework_1_1core_1_1lifecycle_1_1FmuConfig)
* [simulation_framework::core::lifecycle::FmuLogic](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic)
* [simulation_framework::core::lifecycle::IActivity](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivity)
* [simulation_framework::core::lifecycle::IActivityFactory](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory)
* [simulation_framework::core::lifecycle::IFmuLogic](classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IFmuLogic)
* [simulation_framework::core::lifecycle::ISimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance)
* [simulation_framework::core::lifecycle::SimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance)

## Typedefs

<a id="fmu__config_8h_1a076e42c1fd44e91ae78c9c07c528ac93"></a>
### Typedef FmuInOutType

![][public]

**Definition**: `core/lifecycle/fmu_activity/fmu_config.h` (line 23)


```cpp
using simulation_framework::core::lifecycle::FmuInOutType = typedef std::variant<bool, int, double, std::string, std::vector<uint8_t> >
```








**Return type**: std::variant< [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic), [int](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic), [double](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic), std::string, std::vector< [uint8_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) > >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuInOutType"}]}`
-->

<a id="fmu__config_8h_1a0cb1cc423853afcdeeba0c345220300a"></a>
### Typedef FmuInOutMap

![][public]

**Definition**: `core/lifecycle/fmu_activity/fmu_config.h` (line 24)


```cpp
using simulation_framework::core::lifecycle::FmuInOutMap = typedef std::map<std::string, FmuInOutType>
```








**Return type**: std::map< std::string, FmuInOutType >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuInOutMap"}]}`
-->

<a id="fmu__config_8h_1a96dba9ee13e27b2626149f3c09395fad"></a>
### Typedef FmuTopicToVarNames

![][public]

**Definition**: `core/lifecycle/fmu_activity/fmu_config.h` (line 25)


```cpp
using simulation_framework::core::lifecycle::FmuTopicToVarNames = typedef std::map<std::string, std::set<std::string> >
```








**Return type**: std::map< std::string, std::set< std::string > >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuTopicToVarNames"}]}`
-->

<a id="fmu__config_8h_1a9eb7f9109cf2cabfe412834db2a16885"></a>
### Typedef FmuTopicToVarMap

![][public]

**Definition**: `core/lifecycle/fmu_activity/fmu_config.h` (line 26)


```cpp
using simulation_framework::core::lifecycle::FmuTopicToVarMap = typedef std::map<std::string, FmuInOutMap>
```








**Return type**: std::map< std::string, FmuInOutMap >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuTopicToVarMap"}]}`
-->

<a id="fmu__config_8h_1a695c57b25dad6a03e577093bfae307ed"></a>
### Typedef FmuMessageToVarNames

![][public]

**Definition**: `core/lifecycle/fmu_activity/fmu_config.h` (line 27)


```cpp
using simulation_framework::core::lifecycle::FmuMessageToVarNames = typedef std::map<std::string, std::string>
```








**Return type**: std::map< std::string, std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuMessageToVarNames"}]}`
-->

<a id="fmu__config_8h_1add76c5db8faaf7433d7c251a192d7fc7"></a>
### Typedef FmuVarToMessageNames

![][public]

**Definition**: `core/lifecycle/fmu_activity/fmu_config.h` (line 28)


```cpp
using simulation_framework::core::lifecycle::FmuVarToMessageNames = typedef std::map<std::string, std::string>
```








**Return type**: std::map< std::string, std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::FmuVarToMessageNames"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)