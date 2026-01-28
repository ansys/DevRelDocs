<a id="namespacesimulation__framework_1_1core_1_1time"></a>
# Namespace simulation\_framework::core::time

![][C++]

#include: <[i_simulation_completion_checker.h](i__simulation__completion__checker_8h.md#i__simulation__completion__checker_8h)>





## Classes

* [simulation\_framework::core::time::Clock](classsimulation__framework_1_1core_1_1time_1_1Clock.md#classsimulation__framework_1_1core_1_1time_1_1Clock)
* [simulation\_framework::core::time::IClock](classsimulation__framework_1_1core_1_1time_1_1IClock.md#classsimulation__framework_1_1core_1_1time_1_1IClock)
* [simulation\_framework::core::time::ISimulationCompletionChecker](classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker.md#classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker)
* [simulation\_framework::core::time::Timestamp](structsimulation__framework_1_1core_1_1time_1_1Timestamp.md#structsimulation__framework_1_1core_1_1time_1_1Timestamp)

## Typedefs

<a id="i__clock_8h_1a6d411443fa093d24c8ae81aa1cc6d9c2"></a>
### Typedef timepoint

![][public]

#include: <[i_clock.h](i__clock_8h.md#i__clock_8h)>


```cpp
using simulation_framework::core::time::timepoint =  std::chrono::time_point<std::chrono::system_clock, Duration>
```








**Return type**: std::chrono::time_point< std::chrono::system_clock, Duration >

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class Duration"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::time::timepoint"}]}`
-->

<a id="i__clock_8h_1addb83cb03e230754522bfc8c59f63baf"></a>
### Typedef milliseconds

![][public]

#include: <[i_clock.h](i__clock_8h.md#i__clock_8h)>


```cpp
using simulation_framework::core::time::milliseconds =  std::chrono::milliseconds
```








**Return type**: std::chrono::milliseconds

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::time::milliseconds"}]}`
-->

## Functions

<a id="timestamp_8h_1a3086344f06f610fe2b98ed7d1dec802e"></a>
### Function operator==

![][public]


```cpp
bool simulation_framework::core::time::operator==(const Timestamp &lhs, const Timestamp &rhs)
```








**Parameters**:

* const Timestamp & **lhs**
* const Timestamp & **rhs**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::time::operator=="}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)