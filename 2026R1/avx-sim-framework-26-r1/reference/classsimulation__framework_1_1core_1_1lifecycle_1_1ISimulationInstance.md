# Class simulation_framework::core::lifecycle::ISimulationInstance

![][C++]
![][public]

**Definition**: `core/lifecycle/i_simulation_instance/i_simulation_instance.h` (line 24)

class [ISimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance)

[ISimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance) defines the common interface for a Simulation Instance which needs to be controlled by [SimRunner](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner)

**Inherited by**:

* [simulation_framework::core::lifecycle::SimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance)

## Members

* [GetSimulationBaseCycleTime](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance_1a99d8248ac91814b9503b4ba7301723fc)
* [GetSimulationDuration](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance_1a490a9b9214cd38ae2405bd326a30a6af)
* [Init](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance_1a871729a4dedeafe05c8bece8d1792e0d)
* [IsPauseRequested](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance_1a018d76d8a42d2371d0740b2ee7601a68)
* [IsSimulationFinished](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance_1ac7571086e9a65bb13fef8dd79d94edba)
* [Reset](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance_1a5cdfd3b69391a260cdc1611cf4b5adff)
* [StepOnce](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance_1a80cbbbd41aa237e59428d0becfe1dc0d)
* [~ISimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance_1addee87e95b1819ef9db341cca0a302a2)

## Public functions

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance_1addee87e95b1819ef9db341cca0a302a2"></a>
### Function ~ISimulationInstance

![][public]


```cpp
virtual simulation_framework::core::lifecycle::ISimulationInstance::~ISimulationInstance()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::ISimulationInstance::~ISimulationInstance"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance_1a80cbbbd41aa237e59428d0becfe1dc0d"></a>
### Function StepOnce

![][public]


```cpp
virtual void simulation_framework::core::lifecycle::ISimulationInstance::StepOnce()=0
```


Step the simulation based on base cycle time.





**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [StepOnce](classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1a4567f8812aa9fb4909191dd0cd78f6d7)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::ISimulationInstance::StepOnce"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance_1a5cdfd3b69391a260cdc1611cf4b5adff"></a>
### Function Reset

![][public]


```cpp
virtual void simulation_framework::core::lifecycle::ISimulationInstance::Reset()=0
```


provides the reset to [SimRunner](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner) to let the simulation back to init state





**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [Reset](classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1a7828f047e5aa4ce477b5b3b55d85fe01)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::ISimulationInstance::Reset"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance_1a871729a4dedeafe05c8bece8d1792e0d"></a>
### Function Init

![][public]


```cpp
virtual void simulation_framework::core::lifecycle::ISimulationInstance::Init()=0
```


Initialize based on user config and turn the instance to ready state.





**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [Init](classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1a80fd1fe5ea5f8c1187464f0aab2cf035)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::ISimulationInstance::Init"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance_1ac7571086e9a65bb13fef8dd79d94edba"></a>
### Function IsSimulationFinished

![][public]


```cpp
virtual bool simulation_framework::core::lifecycle::ISimulationInstance::IsSimulationFinished()=0
```


indicates whether this run if simulation reaches the end





**Return type**: [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [IsSimulationFinished](classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1ace04d54df178ccb14d5c17817d010489)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::ISimulationInstance::IsSimulationFinished"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance_1a018d76d8a42d2371d0740b2ee7601a68"></a>
### Function IsPauseRequested

![][public]


```cpp
virtual bool simulation_framework::core::lifecycle::ISimulationInstance::IsPauseRequested()=0
```


indicates whether pause is requested





**Return type**: [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [IsPauseRequested](classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1aa2fd258d5ef6c4b2f27e15d551748e21)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::ISimulationInstance::IsPauseRequested"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance_1a490a9b9214cd38ae2405bd326a30a6af"></a>
### Function GetSimulationDuration

![][public]
![][const]


```cpp
virtual std::chrono::milliseconds simulation_framework::core::lifecycle::ISimulationInstance::GetSimulationDuration() const =0
```


return the duration of the simulation in milliseconds





**Return type**: std::chrono::milliseconds

**Reimplemented by**:

* [GetSimulationDuration](classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1a2d9fb927c4cc2bfe836b2743b547c0a2)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::ISimulationInstance::GetSimulationDuration"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance_1a99d8248ac91814b9503b4ba7301723fc"></a>
### Function GetSimulationBaseCycleTime

![][public]
![][const]


```cpp
virtual std::chrono::milliseconds simulation_framework::core::lifecycle::ISimulationInstance::GetSimulationBaseCycleTime() const =0
```


return the base cycle time of the simulation in milliseconds, which usually is the greatest common divisor of all activity cycle times





**Return type**: std::chrono::milliseconds

**Reimplemented by**:

* [GetSimulationBaseCycleTime](classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1af6974f312cdfb505bcb95e6d7e7fa239)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::ISimulationInstance::GetSimulationBaseCycleTime"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"i__simulation__instance_8h"},"children":[{"type":"text","text":"i_simulation_instance.h"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)