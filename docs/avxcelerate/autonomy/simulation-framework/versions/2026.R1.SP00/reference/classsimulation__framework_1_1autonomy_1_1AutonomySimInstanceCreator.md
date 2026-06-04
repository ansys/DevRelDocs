# Class simulation_framework::autonomy::AutonomySimInstanceCreator

![][C++]
![][public]

**Definition**: `autonomy/simulation/sim_instance/autonomy_sim_instance_creator.h` (line 31)

Creates simulation instances specific to autonomy simulation.

This class implements the <code>[ISimInstanceCreator](classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator.md#classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator)</code> interface to provide a concrete mechanism for creating instances of <code>ISimulationInstance</code> tailored to simulations in the autonomy simulation domain.





The implementation uses the provided <code>[core::SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters)</code> to configure the simulation instance with parameters relevant to autonomy simulations.







**See also**: [ISimInstanceCreator](classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator.md#classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator), [core::lifecycle::ISimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance), [core::SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters)

**Inherits from**:

* [simulation_framework::autonomy::ISimInstanceCreator](classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator.md#classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator)

## Members

* [AutonomySimInstanceCreator](classsimulation__framework_1_1autonomy_1_1AutonomySimInstanceCreator.md#classsimulation__framework_1_1autonomy_1_1AutonomySimInstanceCreator_1a00c061d307d3248e1523beaf4304377e)
* [Create](classsimulation__framework_1_1autonomy_1_1AutonomySimInstanceCreator.md#classsimulation__framework_1_1autonomy_1_1AutonomySimInstanceCreator_1a2f1395805d36b67098af6722d3987ba3)
* [~AutonomySimInstanceCreator](classsimulation__framework_1_1autonomy_1_1AutonomySimInstanceCreator.md#classsimulation__framework_1_1autonomy_1_1AutonomySimInstanceCreator_1a23d0eb3602e5d64c237a7d7d5aa2f5d9)
* [~ISimInstanceCreator](classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator.md#classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator_1ac065591079732dd1b8ce16a0662a5a8d)

## Public functions

<a id="classsimulation__framework_1_1autonomy_1_1AutonomySimInstanceCreator_1a00c061d307d3248e1523beaf4304377e"></a>
### Function AutonomySimInstanceCreator

![][public]


```cpp
simulation_framework::autonomy::AutonomySimInstanceCreator::AutonomySimInstanceCreator()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::AutonomySimInstanceCreator::AutonomySimInstanceCreator"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1AutonomySimInstanceCreator_1a23d0eb3602e5d64c237a7d7d5aa2f5d9"></a>
### Function ~AutonomySimInstanceCreator

![][public]


```cpp
simulation_framework::autonomy::AutonomySimInstanceCreator::~AutonomySimInstanceCreator()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::AutonomySimInstanceCreator::~AutonomySimInstanceCreator"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1AutonomySimInstanceCreator_1a2f1395805d36b67098af6722d3987ba3"></a>
### Function Create

![][public]


```cpp
std::unique_ptr< core::lifecycle::ISimulationInstance > simulation_framework::autonomy::AutonomySimInstanceCreator::Create(const core::SimulationParameters &core_parameters) override
```


Creates a simulation instance specific to autonomy simulation.

Implements the <code>Create</code> method from the <code>[ISimInstanceCreator](classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator.md#classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator)</code> interface, producing an <code>ISimulationInstance</code> configured for autonomy simulations. The provided <code>[core::SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters)</code> are used to customize the instance as needed.






**Parameters**:

* **core_parameters**: The simulation parameters used to configure the autonomy instance.


**Returns**:

A unique pointer to a domain-specific implementation of <code>[core::lifecycle::ISimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance)</code>.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [core::SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters) & **core_parameters**

**Return type**: std::unique_ptr< [core::lifecycle::ISimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance) >

**Reimplements**: [Create](classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator.md#classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator_1ab54ee20eeb15196c598e032d85f29624)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::AutonomySimInstanceCreator::Create"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"autonomy__sim__instance__creator_8h"},"children":[{"type":"text","text":"autonomy_sim_instance_creator.h"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)