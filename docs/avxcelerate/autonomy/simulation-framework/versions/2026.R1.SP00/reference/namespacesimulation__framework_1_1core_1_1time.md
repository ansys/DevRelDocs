# Namespace simulation_framework::core::time

![][C++]

**Definition**: `core/time/i_simulation_completion_checker/i_simulation_completion_checker.h` (line 18)





## Classes

* [simulation_framework::core::time::Clock](classsimulation__framework_1_1core_1_1time_1_1Clock.md#classsimulation__framework_1_1core_1_1time_1_1Clock)
* [simulation_framework::core::time::IClock](classsimulation__framework_1_1core_1_1time_1_1IClock.md#classsimulation__framework_1_1core_1_1time_1_1IClock)
* [simulation_framework::core::time::ISimulationCompletionChecker](classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker.md#classsimulation__framework_1_1core_1_1time_1_1ISimulationCompletionChecker)
* [simulation_framework::core::time::Timestamp](structsimulation__framework_1_1core_1_1time_1_1Timestamp.md#structsimulation__framework_1_1core_1_1time_1_1Timestamp)

## Typedefs

<a id="i__clock_8h_1a933383468bb88c1c83b7295ee2deaac7"></a>
### Typedef timepoint

![][public]

**Definition**: `core/time/i_clock/i_clock.h` (line 28)


```cpp
using simulation_framework::core::time::timepoint = typedef std::chrono::time_point<std::chrono::system_clock, Duration>
```








**Return type**: std::chrono::time_point< std::chrono::system_clock, [Duration](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) >

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class Duration"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::time::timepoint"}]}`
-->

<a id="i__clock_8h_1a2759cf8fdb075261382ae0325c030245"></a>
### Typedef milliseconds

![][public]

**Definition**: `core/time/i_clock/i_clock.h` (line 29)


```cpp
using simulation_framework::core::time::milliseconds = typedef std::chrono::milliseconds
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

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) Timestamp & **lhs**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) Timestamp & **rhs**

**Return type**: [bool](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::time::operator=="}]}`
-->

<a id="timestamp_8h_1abd84aa885f0116e8f645ab004e7b1927"></a>
### Function operator\<\<

![][public]


```cpp
std::ostream & simulation_framework::core::time::operator<<(std::ostream &os, const Timestamp &timestamp)
```








**Parameters**:

* std::ostream & **os**
* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) Timestamp & **timestamp**

**Return type**: std::ostream &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::time::operator<<"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)