# Class simulation_framework::core::time::ISimulationCompletionChecker

![][C++]
![][public]

**Definition**: `core/time/i_simulation_completion_checker/i_simulation_completion_checker.h` (line 25)

Interface for determining simulation completion.

The <code>[ISimulationCompletionChecker](classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker.md#classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker)</code> provides methods to check if a simulation has finished running and to retrieve its total duration. This interface is used to encapsulate the logic for determining simulation completion.

**Inherited by**:

* [simulation_framework::autonomy::SimulationCompletionChecker](classsimulation__framework_1_1autonomy_1_1SimulationCompletionChecker.md#classsimulation__framework_1_1autonomy_1_1SimulationCompletionChecker)

## Members

* [GetSimulationDuration](classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker.md#classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker_1a7c36f8d7309df7770a08208f5157a3a1)
* [IsSimulationFinished](classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker.md#classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker_1a3c2a846e58738327837d794ed4ce6136)
* [~ISimulationCompletionChecker](classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker.md#classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker_1ac4b8c8898ef46c452ef5631a5c4c62ee)

## Public functions

<a id="classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker_1a3c2a846e58738327837d794ed4ce6136"></a>
### Function IsSimulationFinished

![][public]
![][const]


```cpp
virtual bool simulation_framework::core::time::ISimulationCompletionChecker::IsSimulationFinished() const =0
```


Checks if the simulation has finished.

**Returns**:

<code>true</code> if the simulation is finished; otherwise, <code>false</code>.



**Return type**: [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplemented by**:

* [IsSimulationFinished](classsimulation__framework_1_1autonomy_1_1SimulationCompletionChecker.md#classsimulation__framework_1_1autonomy_1_1SimulationCompletionChecker_1a0645db7a9eac221d6bb082aa9e17ee40)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::time::ISimulationCompletionChecker::IsSimulationFinished"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker_1ac4b8c8898ef46c452ef5631a5c4c62ee"></a>
### Function ~ISimulationCompletionChecker

![][public]


```cpp
virtual simulation_framework::core::time::ISimulationCompletionChecker::~ISimulationCompletionChecker()=default
```


Virtual destructor for proper cleanup of derived classes.





**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::time::ISimulationCompletionChecker::~ISimulationCompletionChecker"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker_1a7c36f8d7309df7770a08208f5157a3a1"></a>
### Function GetSimulationDuration

![][public]
![][const]


```cpp
virtual std::chrono::milliseconds simulation_framework::core::time::ISimulationCompletionChecker::GetSimulationDuration() const =0
```


Retrieves the total duration of the simulation.

**Returns**:

The simulation duration as a <code>std::chrono::milliseconds</code> object.



**Return type**: std::chrono::milliseconds

**Reimplemented by**:

* [GetSimulationDuration](classsimulation__framework_1_1autonomy_1_1SimulationCompletionChecker.md#classsimulation__framework_1_1autonomy_1_1SimulationCompletionChecker_1a674728b07de32646b3cb51aa3e24f61f)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::time::ISimulationCompletionChecker::GetSimulationDuration"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"i__simulation__completion__checker_8h"},"children":[{"type":"text","text":"i_simulation_completion_checker.h"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)