# Class simulation_framework::core::lifecycle::SimulationInstance

![][C++]
![][public]

**Definition**: `core/lifecycle/simulation_instance/simulation_instance.h` (line 34)

class [SimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance)

[SimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance) combines the basic interface of [ISimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance) with the usage of an abstract ActivityFactory and Scheduler. It contains the activities defined in the scheduling config, if they are registered in the ActivityFactory.

**Inherits from**:

* [simulation_framework::core::lifecycle::ISimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance)

## Members

* [GetSimulationBaseCycleTime](classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1af6974f312cdfb505bcb95e6d7e7fa239)
* [GetSimulationDuration](classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1a2d9fb927c4cc2bfe836b2743b547c0a2)
* [Init](classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1a80fd1fe5ea5f8c1187464f0aab2cf035)
* [IsPauseRequested](classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1aa2fd258d5ef6c4b2f27e15d551748e21)
* [IsSimulationFinished](classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1ace04d54df178ccb14d5c17817d010489)
* [Reset](classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1a7828f047e5aa4ce477b5b3b55d85fe01)
* [SimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1ad1479260858b3f23ef24d5cdb2484f26)
* [SimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1a478f75ae1610aca1ef3f14b83f511774)
* [StepOnce](classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1a4567f8812aa9fb4909191dd0cd78f6d7)
* [~ISimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance_1addee87e95b1819ef9db341cca0a302a2)
* [~SimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1a40cfd8a4b227d2a02bc46554504ed372)

## Public functions

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1ad1479260858b3f23ef24d5cdb2484f26"></a>
### Function SimulationInstance

![][public]


```cpp
simulation_framework::core::lifecycle::SimulationInstance::SimulationInstance(std::unique_ptr< IActivityFactory > activity_factory, std::shared_ptr< core::time::IClock > sim_clock, std::unique_ptr< time::ISimulationCompletionChecker > sim_state_checker, const core::StandaloneInitData &standalone_init_data, const core::SimulationParameters &core_parameters)
```


Constructor for [SimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance), which initializes the simulation instance with specific SimulationParameter values.

**Parameters**:

* **activity_factory**: A unique pointer to an [IActivityFactory](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory) instance.
* **sim_clock**: A shared pointer to an IClock instance, which provides the simulation clock.
* **sim_state_checker**: A unique pointer to an ISimulationCompletionChecker instance, which checks if the simulation is complete.
* **standalone_init_data**: A StandaloneInitData object containing initialization data for standalone activities.
* **core_parameters**: A [SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters) object containing core simulation parameters.


?> The [CliParser](classsimulation__framework_1_1core_1_1CliParser.md#classsimulation__framework_1_1core_1_1CliParser) can be used to create the [SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters) object, which can be passed to this constructor.



**Parameters**:

* std::unique_ptr< [IActivityFactory](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory) > **activity_factory**
* std::shared_ptr< [core::time::IClock](classsimulation__framework_1_1core_1_1time_1_1IClock.md#classsimulation__framework_1_1core_1_1time_1_1IClock) > **sim_clock**
* std::unique_ptr< [time::ISimulationCompletionChecker](classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker.md#classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker) > **sim_state_checker**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) core::StandaloneInitData & **standalone_init_data**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [core::SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters) & **core_parameters**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::SimulationInstance::SimulationInstance"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1a478f75ae1610aca1ef3f14b83f511774"></a>
### Function SimulationInstance

![][public]


```cpp
simulation_framework::core::lifecycle::SimulationInstance::SimulationInstance(std::unique_ptr< IActivityFactory > activity_factory, std::shared_ptr< core::time::IClock > sim_clock, std::unique_ptr< time::ISimulationCompletionChecker > sim_state_checker, const core::StandaloneInitData &standalone_init_data, const std::string &scheduling_config_path, const logging::LogLevel log_level=logging::LogLevel::kDebug)
```


Constructor for [SimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance) where most of the [SimulationParameters](structsimulation__framework_1_1core_1_1SimulationParameters.md#structsimulation__framework_1_1core_1_1SimulationParameters) are the default values.

**Parameters**:

* **activity_factory**: A unique pointer to an [IActivityFactory](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory) instance.
* **sim_clock**: A shared pointer to an IClock instance, which provides the simulation clock.
* **sim_state_checker**: A unique pointer to an ISimulationCompletionChecker instance, which checks if the simulation is complete.
* **standalone_init_data**: A StandaloneInitData object containing initialization data for standalone activities.
* **scheduling_config_path**: A string representing the path to the scheduling configuration file.
* **log_level**: The logging level for the simulation, defaulting to Debug.



**Parameters**:

* std::unique_ptr< [IActivityFactory](classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory.md#classsimulation__framework_1_1core_1_1lifecycle_1_1IActivityFactory) > **activity_factory**
* std::shared_ptr< [core::time::IClock](classsimulation__framework_1_1core_1_1time_1_1IClock.md#classsimulation__framework_1_1core_1_1time_1_1IClock) > **sim_clock**
* std::unique_ptr< [time::ISimulationCompletionChecker](classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker.md#classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker) > **sim_state_checker**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) core::StandaloneInitData & **standalone_init_data**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) std::string & **scheduling_config_path**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) logging::LogLevel **log_level** = logging::LogLevel::kDebug 

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::SimulationInstance::SimulationInstance"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1a40cfd8a4b227d2a02bc46554504ed372"></a>
### Function ~SimulationInstance

![][public]


```cpp
simulation_framework::core::lifecycle::SimulationInstance::~SimulationInstance()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::SimulationInstance::~SimulationInstance"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1a80fd1fe5ea5f8c1187464f0aab2cf035"></a>
### Function Init

![][public]


```cpp
void simulation_framework::core::lifecycle::SimulationInstance::Init() override
```


Initialize based on user config and turn the instance to ready state.





**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [Init](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance_1a871729a4dedeafe05c8bece8d1792e0d)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::SimulationInstance::Init"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1a4567f8812aa9fb4909191dd0cd78f6d7"></a>
### Function StepOnce

![][public]


```cpp
void simulation_framework::core::lifecycle::SimulationInstance::StepOnce() override
```


Step the simulation based on base cycle time.





**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [StepOnce](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance_1a80cbbbd41aa237e59428d0becfe1dc0d)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::SimulationInstance::StepOnce"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1a7828f047e5aa4ce477b5b3b55d85fe01"></a>
### Function Reset

![][public]


```cpp
void simulation_framework::core::lifecycle::SimulationInstance::Reset() override
```


provides the reset to [SimRunner](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner) to let the simulation back to init state





**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [Reset](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance_1a5cdfd3b69391a260cdc1611cf4b5adff)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::SimulationInstance::Reset"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1ace04d54df178ccb14d5c17817d010489"></a>
### Function IsSimulationFinished

![][public]


```cpp
bool simulation_framework::core::lifecycle::SimulationInstance::IsSimulationFinished() override
```


indicates whether this run if simulation reaches the end





**Return type**: [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [IsSimulationFinished](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance_1ac7571086e9a65bb13fef8dd79d94edba)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::SimulationInstance::IsSimulationFinished"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1aa2fd258d5ef6c4b2f27e15d551748e21"></a>
### Function IsPauseRequested

![][public]


```cpp
bool simulation_framework::core::lifecycle::SimulationInstance::IsPauseRequested() override
```


indicates whether pause is requested





**Return type**: [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [IsPauseRequested](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance_1a018d76d8a42d2371d0740b2ee7601a68)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::SimulationInstance::IsPauseRequested"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1a2d9fb927c4cc2bfe836b2743b547c0a2"></a>
### Function GetSimulationDuration

![][public]
![][const]


```cpp
std::chrono::milliseconds simulation_framework::core::lifecycle::SimulationInstance::GetSimulationDuration() const override
```


return the duration of the simulation in milliseconds





**Return type**: std::chrono::milliseconds

**Reimplements**: [GetSimulationDuration](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance_1a490a9b9214cd38ae2405bd326a30a6af)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::SimulationInstance::GetSimulationDuration"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1lifecycle_1_1SimulationInstance_1af6974f312cdfb505bcb95e6d7e7fa239"></a>
### Function GetSimulationBaseCycleTime

![][public]
![][const]


```cpp
std::chrono::milliseconds simulation_framework::core::lifecycle::SimulationInstance::GetSimulationBaseCycleTime() const override
```


return the base cycle time of the simulation in milliseconds, which usually is the greatest common divisor of all activity cycle times





**Return type**: std::chrono::milliseconds

**Reimplements**: [GetSimulationBaseCycleTime](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance_1a99d8248ac91814b9503b4ba7301723fc)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::lifecycle::SimulationInstance::GetSimulationBaseCycleTime"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"simulation__instance_8h"},"children":[{"type":"text","text":"simulation_instance.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)