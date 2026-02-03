# Structure simulation_framework::core::StateFeedback

![][C++]
![][public]

**Definition**: `core/service/sim_runner/i_sim_runner.h` (line 18)

Represents feedback for the execution status of a control command.



## Members

* [error_msg](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback_1ac35cce08425ee09c1dd47b6d72f6b4ff)
* [execute_status](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback_1a8d8e5cd79fb548feec4dae9cc75bf024)

## Public attributes

<a id="structsimulation__framework_1_1core_1_1StateFeedback_1a8d8e5cd79fb548feec4dae9cc75bf024"></a>
### Variable execute_status

![][public]

**Definition**: `core/service/sim_runner/i_sim_runner.h` (line 21)


```cpp
bool simulation_framework::core::StateFeedback::execute_status
```


Indicates whether the control command was executed successfully.





**Type**: [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::StateFeedback::execute_status"}]}`
-->

<a id="structsimulation__framework_1_1core_1_1StateFeedback_1ac35cce08425ee09c1dd47b6d72f6b4ff"></a>
### Variable error_msg

![][public]

**Definition**: `core/service/sim_runner/i_sim_runner.h` (line 24)


```cpp
std::string simulation_framework::core::StateFeedback::error_msg
```


Error message describing the issue if execution failed.





**Type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::StateFeedback::error_msg"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)