<a id="structsimulation__framework_1_1core_1_1StateFeedback"></a>
# Structure simulation\_framework::core::StateFeedback

![][C++]
![][public]

#include: <[i_sim_runner.h](i__sim__runner_8h.md#i__sim__runner_8h)>

Represents feedback for the execution status of a control command.



## Members

* [error\_msg](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback_1ac35cce08425ee09c1dd47b6d72f6b4ff)
* [execute\_status](structsimulation__framework_1_1core_1_1StateFeedback.md#structsimulation__framework_1_1core_1_1StateFeedback_1a8d8e5cd79fb548feec4dae9cc75bf024)

## Public attributes

<a id="structsimulation__framework_1_1core_1_1StateFeedback_1a8d8e5cd79fb548feec4dae9cc75bf024"></a>
### Variable execute\_status

![][public]

#include: <[i_sim_runner.h](i__sim__runner_8h.md#i__sim__runner_8h)>


```cpp
bool simulation_framework::core::StateFeedback::execute_status
```


Indicates whether the control command was executed successfully.





**Type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::StateFeedback::execute_status"}]}`
-->

<a id="structsimulation__framework_1_1core_1_1StateFeedback_1ac35cce08425ee09c1dd47b6d72f6b4ff"></a>
### Variable error\_msg

![][public]

#include: <[i_sim_runner.h](i__sim__runner_8h.md#i__sim__runner_8h)>


```cpp
std::string simulation_framework::core::StateFeedback::error_msg
```


Error message describing the issue if execution failed.





**Type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::StateFeedback::error_msg"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)