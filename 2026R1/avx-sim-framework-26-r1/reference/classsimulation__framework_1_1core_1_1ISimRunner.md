# Class simulation_framework::core::ISimRunner

![][C++]
![][public]

**Definition**: `core/service/sim_runner/i_sim_runner.h` (line 41)

Interface for controlling and managing simulation execution.

The <code>[ISimRunner](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner)</code> interface provides a set of external control APIs for managing the lifecycle and execution of a simulation.

**Inherited by**:

* [simulation_framework::core::SimRunner](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner)

## Members

* [GetExecutedStepCount](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner_1ae60fbe830aef619e8cbd39a092f1f995)
* [GetSimulationState](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner_1a66d4287f6da13af21331fbfc1c5ff226)
* [Pause](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner_1a7cc05d7d61c4cb7af9eca9fb85bce8d7)
* [Resume](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner_1a4b448f77a70ea37643cff04f6d1c7c1c)
* [Run](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner_1ab7615f9b015b1c52e3af9e21ef2bf6ee)
* [RunOverSimulation](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner_1af5cc40c4bdd9360cd2e95e1c2f8e5626)
* [StepN](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner_1a11b61afe9fa80c71aae36c16449ac831)
* [Stop](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner_1a659d260f4146f46ffe51bc17f93179ac)
* [Terminate](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner_1aa5b44639fefef47817aafb6f99719802)
* [~ISimRunner](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner_1a28739232c9e3879e863cd5fa158ef709)

## Public functions

<a id="classsimulation__framework_1_1core_1_1ISimRunner_1a28739232c9e3879e863cd5fa158ef709"></a>
### Function ~ISimRunner

![][public]


```cpp
virtual simulation_framework::core::ISimRunner::~ISimRunner()=default
```


Virtual destructor for proper cleanup of derived classes.





**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ISimRunner::~ISimRunner"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1ISimRunner_1ab7615f9b015b1c52e3af9e21ef2bf6ee"></a>
### Function Run

![][public]


```cpp
virtual StateFeedback simulation_framework::core::ISimRunner::Run()=0
```


Starts the simulation.

**Returns**:

A <code>[StateFeedback](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback)</code> object indicating the result of the operation.



**Return type**: [StateFeedback](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback)

**Reimplemented by**:

* [Run](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner_1aa47196cb107ebc1c200ab5fd43fc22f9)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ISimRunner::Run"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1ISimRunner_1a7cc05d7d61c4cb7af9eca9fb85bce8d7"></a>
### Function Pause

![][public]


```cpp
virtual StateFeedback simulation_framework::core::ISimRunner::Pause()=0
```


Pauses the simulation.

**Returns**:

A <code>[StateFeedback](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback)</code> object indicating the result of the operation.



**Return type**: [StateFeedback](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback)

**Reimplemented by**:

* [Pause](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner_1a2008706db821aed76b79bee747a220ac)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ISimRunner::Pause"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1ISimRunner_1a4b448f77a70ea37643cff04f6d1c7c1c"></a>
### Function Resume

![][public]


```cpp
virtual StateFeedback simulation_framework::core::ISimRunner::Resume()=0
```


Resumes the simulation if it is paused.

**Returns**:

A <code>[StateFeedback](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback)</code> object indicating the result of the operation.



**Return type**: [StateFeedback](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback)

**Reimplemented by**:

* [Resume](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner_1a0bc52ce914b51ce4fc709b0686d05475)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ISimRunner::Resume"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1ISimRunner_1a11b61afe9fa80c71aae36c16449ac831"></a>
### Function StepN

![][public]


```cpp
virtual StateFeedback simulation_framework::core::ISimRunner::StepN(int n)=0
```


Advances the simulation by a specified number of steps.

**Parameters**:

* **n**: The number of simulation steps to execute.


**Returns**:

A <code>[StateFeedback](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback)</code> object indicating the result of the operation.



**Parameters**:

* [int](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **n**

**Return type**: [StateFeedback](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback)

**Reimplemented by**:

* [StepN](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner_1aa2aecf086a4535c9a4d05b977deb29f3)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ISimRunner::StepN"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1ISimRunner_1a659d260f4146f46ffe51bc17f93179ac"></a>
### Function Stop

![][public]


```cpp
virtual StateFeedback simulation_framework::core::ISimRunner::Stop()=0
```


Stops the simulation.

**Returns**:

A <code>[StateFeedback](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback)</code> object indicating the result of the operation.



**Return type**: [StateFeedback](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback)

**Reimplemented by**:

* [Stop](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner_1a122aef144fa4620085078b7ef1d58645)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ISimRunner::Stop"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1ISimRunner_1aa5b44639fefef47817aafb6f99719802"></a>
### Function Terminate

![][public]


```cpp
virtual StateFeedback simulation_framework::core::ISimRunner::Terminate()=0
```


Terminates the simulation completely.

**Returns**:

A <code>[StateFeedback](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback)</code> object indicating the result of the operation.



**Return type**: [StateFeedback](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback)

**Reimplemented by**:

* [Terminate](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner_1a6b54a3a3676bc74deea17f50910c3e5b)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ISimRunner::Terminate"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1ISimRunner_1a66d4287f6da13af21331fbfc1c5ff226"></a>
### Function GetSimulationState

![][public]
![][const]


```cpp
virtual SimState simulation_framework::core::ISimRunner::GetSimulationState() const =0
```


Retrieves the current state of the simulation.

**Returns**:

The current simulation state as a <code>SimState</code> enum value.



**Return type**: SimState

**Reimplemented by**:

* [GetSimulationState](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner_1ab5f6d34b0bbd35000cfff95bcfeb901f)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ISimRunner::GetSimulationState"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1ISimRunner_1ae60fbe830aef619e8cbd39a092f1f995"></a>
### Function GetExecutedStepCount

![][public]
![][const]


```cpp
virtual uint64_t simulation_framework::core::ISimRunner::GetExecutedStepCount() const =0
```


Retrieves the number of steps executed so far.

**Returns**:

The total number of steps executed as a 64-bit unsigned integer.



**Return type**: [uint64_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [GetExecutedStepCount](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner_1ab7b56bf2aa50f1ca9b14b928268939eb)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ISimRunner::GetExecutedStepCount"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1ISimRunner_1af5cc40c4bdd9360cd2e95e1c2f8e5626"></a>
### Function RunOverSimulation

![][public]


```cpp
virtual void simulation_framework::core::ISimRunner::RunOverSimulation()=0
```


Runs any remaining parts of the simulation to completion.





**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [RunOverSimulation](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner_1a4ba901d04097297295b7b680ac151da9)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::ISimRunner::RunOverSimulation"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"i__sim__runner_8h"},"children":[{"type":"text","text":"i_sim_runner.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)