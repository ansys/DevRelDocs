# Class simulation_framework::core::SimRunner

![][C++]
![][public]

**Definition**: `core/service/sim_runner/sim_runner.h` (line 26)

Simulation runner with external control logic.

The <code>[SimRunner](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner)</code> class implements the <code>[ISimRunner](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner)</code> interface and provides methods to control the flow of a simulation, including starting, pausing, stepping, and terminating it. Internally, it delegates these operations to a <code>SimRunnerImpl</code> object. 

**See also**: [ISimRunner](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner), [lifecycle::ISimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance)

**Inherits from**:

* [simulation_framework::core::ISimRunner](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner)

## Members

* [GetExecutedStepCount](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner_1ab7b56bf2aa50f1ca9b14b928268939eb)
* [GetSimulationState](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner_1ab5f6d34b0bbd35000cfff95bcfeb901f)
* [Pause](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner_1a2008706db821aed76b79bee747a220ac)
* [Resume](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner_1a0bc52ce914b51ce4fc709b0686d05475)
* [Run](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner_1aa47196cb107ebc1c200ab5fd43fc22f9)
* [RunOverSimulation](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner_1a4ba901d04097297295b7b680ac151da9)
* [SimRunner](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner_1a961cc52e44842a326e1fc638a6e6f404)
* [StepN](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner_1aa2aecf086a4535c9a4d05b977deb29f3)
* [Stop](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner_1a122aef144fa4620085078b7ef1d58645)
* [Terminate](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner_1a6b54a3a3676bc74deea17f50910c3e5b)
* [~ISimRunner](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner_1a28739232c9e3879e863cd5fa158ef709)
* [~SimRunner](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner_1a86df4168e20485587e74801f5400dda4)

## Public functions

<a id="classsimulation__framework_1_1core_1_1SimRunner_1a86df4168e20485587e74801f5400dda4"></a>
### Function ~SimRunner

![][public]


```cpp
simulation_framework::core::SimRunner::~SimRunner()
```


Destructor for <code>[SimRunner](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner)</code>.





**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimRunner::~SimRunner"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1SimRunner_1a961cc52e44842a326e1fc638a6e6f404"></a>
### Function SimRunner

![][public]


```cpp
simulation_framework::core::SimRunner::SimRunner(std::unique_ptr< lifecycle::ISimulationInstance > sim_instance)
```


Constructs a <code>[SimRunner](classsimulation__framework_1_1core_1_1SimRunner.md#classsimulation__framework_1_1core_1_1SimRunner)</code> with a simulation instance.

**Parameters**:

* **sim_instance**: A unique pointer to the simulation instance to control.



**Parameters**:

* std::unique_ptr< [lifecycle::ISimulationInstance](classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance.md#classsimulation__framework_1_1core_1_1lifecycle_1_1ISimulationInstance) > **sim_instance**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimRunner::SimRunner"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1SimRunner_1aa47196cb107ebc1c200ab5fd43fc22f9"></a>
### Function Run

![][public]


```cpp
StateFeedback simulation_framework::core::SimRunner::Run() override
```


Executes the simulation and changes the state to <code>kRunning</code>.

The simulation runs until the scenario ends unless paused or stopped by the user. 
**Returns**:

A <code>[StateFeedback](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback)</code> object containing execution status and error information, if any.



**Return type**: [StateFeedback](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback)

**Reimplements**: [Run](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner_1ab7615f9b015b1c52e3af9e21ef2bf6ee)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimRunner::Run"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1SimRunner_1a2008706db821aed76b79bee747a220ac"></a>
### Function Pause

![][public]


```cpp
StateFeedback simulation_framework::core::SimRunner::Pause() override
```


Pauses the simulation.

If the simulation is in the <code>kRunning</code> state, it transitions to the <code>kPaused</code> state. 
**Returns**:

A <code>[StateFeedback](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback)</code> object containing the status of the pause operation.



**Return type**: [StateFeedback](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback)

**Reimplements**: [Pause](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner_1a7cc05d7d61c4cb7af9eca9fb85bce8d7)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimRunner::Pause"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1SimRunner_1a0bc52ce914b51ce4fc709b0686d05475"></a>
### Function Resume

![][public]


```cpp
StateFeedback simulation_framework::core::SimRunner::Resume() override
```


Resumes the simulation.

The simulation state changes from <code>kPaused</code> back to <code>kRunning</code>. 
**Returns**:

A <code>[StateFeedback](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback)</code> object containing the status of the resume operation.



**Return type**: [StateFeedback](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback)

**Reimplements**: [Resume](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner_1a4b448f77a70ea37643cff04f6d1c7c1c)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimRunner::Resume"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1SimRunner_1aa2aecf086a4535c9a4d05b977deb29f3"></a>
### Function StepN

![][public]


```cpp
StateFeedback simulation_framework::core::SimRunner::StepN(int n) override
```


Steps the simulation forward by a specified number of frames.

**Parameters**:

* **n**: The number of simulation steps to execute.


**Returns**:

A <code>[StateFeedback](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback)</code> object containing the status of the step operation.



**Parameters**:

* [int](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **n**

**Return type**: [StateFeedback](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback)

**Reimplements**: [StepN](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner_1a11b61afe9fa80c71aae36c16449ac831)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimRunner::StepN"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1SimRunner_1a122aef144fa4620085078b7ef1d58645"></a>
### Function Stop

![][public]


```cpp
StateFeedback simulation_framework::core::SimRunner::Stop() override
```


Stops the simulation immediately.

The simulation state resets to <code>kInitialized</code>. 
**Returns**:

A <code>[StateFeedback](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback)</code> object containing the status of the stop operation.



**Return type**: [StateFeedback](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback)

**Reimplements**: [Stop](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner_1a659d260f4146f46ffe51bc17f93179ac)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimRunner::Stop"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1SimRunner_1a6b54a3a3676bc74deea17f50910c3e5b"></a>
### Function Terminate

![][public]


```cpp
StateFeedback simulation_framework::core::SimRunner::Terminate() override
```


Terminates the simulation.

**Returns**:

A <code>[StateFeedback](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback)</code> object containing the status of the termination operation.



**Return type**: [StateFeedback](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback)

**Reimplements**: [Terminate](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner_1aa5b44639fefef47817aafb6f99719802)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimRunner::Terminate"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1SimRunner_1ab5f6d34b0bbd35000cfff95bcfeb901f"></a>
### Function GetSimulationState

![][public]
![][const]


```cpp
SimState simulation_framework::core::SimRunner::GetSimulationState() const
```


Retrieves the current state of the simulation.

**Returns**:

The current simulation state as a <code>SimState</code> enum value.



**Return type**: SimState

**Reimplements**: [GetSimulationState](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner_1a66d4287f6da13af21331fbfc1c5ff226)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimRunner::GetSimulationState"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1SimRunner_1ab7b56bf2aa50f1ca9b14b928268939eb"></a>
### Function GetExecutedStepCount

![][public]
![][const]


```cpp
uint64_t simulation_framework::core::SimRunner::GetExecutedStepCount() const
```


Retrieves the number of executed simulation steps.

The step counter resets if the simulation is restarted. 
**Returns**:

The number of executed simulation steps.



**Return type**: [uint64_t](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [GetExecutedStepCount](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner_1ae60fbe830aef619e8cbd39a092f1f995)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimRunner::GetExecutedStepCount"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1SimRunner_1a4ba901d04097297295b7b680ac151da9"></a>
### Function RunOverSimulation

![][public]


```cpp
void simulation_framework::core::SimRunner::RunOverSimulation() override
```


Runs the simulation until it ends without accepting further commands.





**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [RunOverSimulation](classsimulation__framework_1_1core_1_1ISimRunner.md#classsimulation__framework_1_1core_1_1ISimRunner_1af5cc40c4bdd9360cd2e95e1c2f8e5626)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::SimRunner::RunOverSimulation"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"sim__runner_8h"},"children":[{"type":"text","text":"sim_runner.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)