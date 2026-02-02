# Class simulation_framework::autonomy::ISimInstanceCreator

![][C++]
![][public]

**Definition**: `autonomy/simulation/sim_instance/i_sim_instance_creator.h` (line 33)

Defines a generic interface for creating instances of <code>[core::lifecycle::ISimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance)</code>.

This interface provides a flexible and domain-agnostic mechanism to create simulation instances. Users can implement this interface to create domain-specific instances of <code>ISimulationInstance</code> using generic simulation parameters.





The design supports extensibility by allowing the creation of simulation instances tailored to specific requirements based on <code>[core::SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters)</code>.







**See also**: [core::lifecycle::ISimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance), [core::SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters)

**Inherited by**:

* [simulation_framework::autonomy::AutonomySimInstanceCreator](classsimulation__framework_1_1autonomy_1_1AutonomySimInstanceCreator.md#classsimulation__framework_1_1autonomy_1_1AutonomySimInstanceCreator)

## Members

* [Create](classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator.md#classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator_1ab54ee20eeb15196c598e032d85f29624)
* [~ISimInstanceCreator](classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator.md#classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator_1ac065591079732dd1b8ce16a0662a5a8d)

## Public functions

<a id="classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator_1ac065591079732dd1b8ce16a0662a5a8d"></a>
### Function ~ISimInstanceCreator

![][public]


```cpp
virtual simulation_framework::autonomy::ISimInstanceCreator::~ISimInstanceCreator()=default
```


Virtual destructor for safe polymorphic deletion.





**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::ISimInstanceCreator::~ISimInstanceCreator"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1ISimInstanceCreator_1ab54ee20eeb15196c598e032d85f29624"></a>
### Function Create

![][public]


```cpp
virtual std::unique_ptr< core::lifecycle::ISimulationInstance > simulation_framework::autonomy::ISimInstanceCreator::Create(const core::SimulationParameters &core_parameters)=0
```


Creates a simulation instance using the provided core simulation parameters.

This method generates a domain-specific implementation of <code>ISimulationInstance</code> based on the provided <code>[core::SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters)</code>. 
**Parameters**:

* **core_parameters**: The generic parameters required to configure and initialize the simulation instance.


**Returns**:

A unique pointer to a concrete implementation of <code>[core::lifecycle::ISimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance)</code>.



**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [core::SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters) & **core_parameters**

**Return type**: std::unique_ptr< [core::lifecycle::ISimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance) >

**Reimplemented by**:

* [Create](classsimulation__framework_1_1autonomy_1_1AutonomySimInstanceCreator.md#classsimulation__framework_1_1autonomy_1_1AutonomySimInstanceCreator_1a2f1395805d36b67098af6722d3987ba3)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::ISimInstanceCreator::Create"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"i__sim__instance__creator_8h"},"children":[{"type":"text","text":"i_sim_instance_creator.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)