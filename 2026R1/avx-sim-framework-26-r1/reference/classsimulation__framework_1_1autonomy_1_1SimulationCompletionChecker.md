# Class simulation_framework::autonomy::SimulationCompletionChecker

![][C++]
![][public]

**Definition**: `autonomy/simulation/simulation_completion_checker/simulation_completion_checker.h` (line 35)

Checks for the completion status of a simulation.

The <code>[SimulationCompletionChecker](classsimulation__framework_1_1autonomy_1_1SimulationCompletionChecker.md#classsimulation__framework_1_1autonomy_1_1SimulationCompletionChecker)</code> class implements the <code>ISimulationCompletionChecker</code> interface to determine whether a simulation has finished. It uses a clock interface only as duration depends on actual run and shutdown triggers.





The class leverages the clock interface for time-based operations.







**See also**: ISimulationCompletionChecker, [core::time::IClock](classsimulation__framework_1_1core_1_1time_1_1IClock.md#classsimulation__framework_1_1core_1_1time_1_1IClock)

**Inherits from**:

* [simulation_framework::core::time::ISimulationCompletionChecker](classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker.md#classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker)

## Members

* [GetSimulationDuration](classsimulation__framework_1_1autonomy_1_1SimulationCompletionChecker.md#classsimulation__framework_1_1autonomy_1_1SimulationCompletionChecker_1a674728b07de32646b3cb51aa3e24f61f)
* [IsSimulationFinished](classsimulation__framework_1_1autonomy_1_1SimulationCompletionChecker.md#classsimulation__framework_1_1autonomy_1_1SimulationCompletionChecker_1a0645db7a9eac221d6bb082aa9e17ee40)
* [SimulationCompletionChecker](classsimulation__framework_1_1autonomy_1_1SimulationCompletionChecker.md#classsimulation__framework_1_1autonomy_1_1SimulationCompletionChecker_1a85bd966e1832c48fc6c12667dc5f5e78)
* [~ISimulationCompletionChecker](classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker.md#classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker_1ac4b8c8898ef46c452ef5631a5c4c62ee)

## Public functions

<a id="classsimulation__framework_1_1autonomy_1_1SimulationCompletionChecker_1a85bd966e1832c48fc6c12667dc5f5e78"></a>
### Function SimulationCompletionChecker

![][public]


```cpp
simulation_framework::autonomy::SimulationCompletionChecker::SimulationCompletionChecker(std::shared_ptr< core::time::IClock > clock_ptr)
```


Constructs a <code>[SimulationCompletionChecker](classsimulation__framework_1_1autonomy_1_1SimulationCompletionChecker.md#classsimulation__framework_1_1autonomy_1_1SimulationCompletionChecker)</code> instance.

Initializes the checker with a clock interface.






**Parameters**:

* **clock_ptr**: A shared pointer to the clock interface for time management during the simulation.



**Parameters**:

* std::shared_ptr< [core::time::IClock](classsimulation__framework_1_1core_1_1time_1_1IClock.md#classsimulation__framework_1_1core_1_1time_1_1IClock) > **clock_ptr**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::SimulationCompletionChecker::SimulationCompletionChecker"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1SimulationCompletionChecker_1a0645db7a9eac221d6bb082aa9e17ee40"></a>
### Function IsSimulationFinished

![][public]
![][const]


```cpp
bool simulation_framework::autonomy::SimulationCompletionChecker::IsSimulationFinished() const
```


Checks if the simulation has completed.

**Returns**:

<code>false</code> always for interface completion purpose, actual completion depends on the run and shutdown triggers.



**Return type**: [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [IsSimulationFinished](classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker.md#classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker_1a3c2a846e58738327837d794ed4ce6136)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::SimulationCompletionChecker::IsSimulationFinished"}]}`
-->

<a id="classsimulation__framework_1_1autonomy_1_1SimulationCompletionChecker_1a674728b07de32646b3cb51aa3e24f61f"></a>
### Function GetSimulationDuration

![][public]
![][const]


```cpp
std::chrono::milliseconds simulation_framework::autonomy::SimulationCompletionChecker::GetSimulationDuration() const
```


Retrieves the total duration of the simulation.

Returns the default value of -1 as scenario duration depends on the actual run.






**Returns**:

The total simulation duration in milliseconds.



**Return type**: std::chrono::milliseconds

**Reimplements**: [GetSimulationDuration](classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker.md#classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker_1a7c36f8d7309df7770a08208f5157a3a1)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::autonomy::SimulationCompletionChecker::GetSimulationDuration"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"simulation__completion__checker_8h"},"children":[{"type":"text","text":"simulation_completion_checker.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)