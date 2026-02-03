# Class simulation_framework::core::logging::ConsoleLogger

![][C++]
![][public]

**Definition**: `core/logging/console_logger.h` (line 33)

A basic implementation of the logger which logs to stdout/stderr.



**Inherits from**:

* [simulation_framework::core::logging::ILogger](classsimulation__framework_1_1core_1_1logging_1_1ILogger.md#classsimulation__framework_1_1core_1_1logging_1_1ILogger)

## Members

* [GetCurrentLogLevel](classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger.md#classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger_1a5fa0554c57b1663845e43bd72bd7f483)
* [GetCurrentTimestamp](classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger.md#classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger_1a7ce6beb10222c900bd54acc10e78ba33)
* [Log](classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger.md#classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger_1a9d2ff51ab9e4e3b050fc243b55f03fb7)
* [SetCurrentLogLevel](classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger.md#classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger_1aaf1a52b229da07a50705df5bf08307a3)
* [ShouldUseColorsForStderr](classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger.md#classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger_1afc3230e4743964d30f8a0abb24e63851)
* [ShouldUseColorsForStdout](classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger.md#classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger_1aac76cb16f147da289364d73baf353d90)
* [~ConsoleLogger](classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger.md#classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger_1aaa9b346d25c28e8cb3d08a7bba1e44da)
* [~ILogger](classsimulation__framework_1_1core_1_1logging_1_1ILogger.md#classsimulation__framework_1_1core_1_1logging_1_1ILogger_1ae6ab6320b1ed845bc087b4fcd9c58346)

## Public functions

<a id="classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger_1aaa9b346d25c28e8cb3d08a7bba1e44da"></a>
### Function ~ConsoleLogger

![][public]


```cpp
virtual simulation_framework::core::logging::ConsoleLogger::~ConsoleLogger()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::logging::ConsoleLogger::~ConsoleLogger"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger_1aaf1a52b229da07a50705df5bf08307a3"></a>
### Function SetCurrentLogLevel

![][public]


```cpp
void simulation_framework::core::logging::ConsoleLogger::SetCurrentLogLevel(LogLevel log_level) final
```




Set the current log level 
**Parameters**:

* **level**: The log level of the message



**Parameters**:

* LogLevel **log_level**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [SetCurrentLogLevel](classsimulation__framework_1_1core_1_1logging_1_1ILogger.md#classsimulation__framework_1_1core_1_1logging_1_1ILogger_1ac6919addad8357c8e30bd3481b2974e7)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::logging::ConsoleLogger::SetCurrentLogLevel"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger_1a5fa0554c57b1663845e43bd72bd7f483"></a>
### Function GetCurrentLogLevel

![][public]
![][const]


```cpp
LogLevel simulation_framework::core::logging::ConsoleLogger::GetCurrentLogLevel() const final
```




Get the current log level from the logging interface 
**Returns**:

The current log level



**Return type**: LogLevel

**Reimplements**: [GetCurrentLogLevel](classsimulation__framework_1_1core_1_1logging_1_1ILogger.md#classsimulation__framework_1_1core_1_1logging_1_1ILogger_1a25d4f9e5ef0275800360d88a954fb6f9)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::logging::ConsoleLogger::GetCurrentLogLevel"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger_1a9d2ff51ab9e4e3b050fc243b55f03fb7"></a>
### Function Log

![][public]


```cpp
void simulation_framework::core::logging::ConsoleLogger::Log(LogLevel level, std::string_view log_message) final
```




Log a message on the logging interface 
**Parameters**:

* **level**: The log level of the message
* **message**: The log message



**Parameters**:

* LogLevel **level**
* std::string_view **message**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

**Reimplements**: [Log](classsimulation__framework_1_1core_1_1logging_1_1ILogger.md#classsimulation__framework_1_1core_1_1logging_1_1ILogger_1a4a984cd42c308ce570895a876337753f)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::logging::ConsoleLogger::Log"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)