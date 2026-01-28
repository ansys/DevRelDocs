<a id="classsimulation__framework_1_1core_1_1logging_1_1ILogger"></a>
# Class simulation\_framework::core::logging::ILogger

![][C++]
![][public]

#include: <[i_logger.h](i__logger_8h.md#i__logger_8h)>

An interface for implementing custom logging mechanisms.



**Inherited by**:

* [simulation\_framework::core::logging::ConsoleLogger](classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger.md#classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger)

## Members

* [GetCurrentLogLevel](classsimulation__framework_1_1core_1_1logging_1_1ILogger.md#classsimulation__framework_1_1core_1_1logging_1_1ILogger_1a25d4f9e5ef0275800360d88a954fb6f9)
* [Log](classsimulation__framework_1_1core_1_1logging_1_1ILogger.md#classsimulation__framework_1_1core_1_1logging_1_1ILogger_1a4a984cd42c308ce570895a876337753f)
* [SetCurrentLogLevel](classsimulation__framework_1_1core_1_1logging_1_1ILogger.md#classsimulation__framework_1_1core_1_1logging_1_1ILogger_1ac6919addad8357c8e30bd3481b2974e7)
* [~ILogger](classsimulation__framework_1_1core_1_1logging_1_1ILogger.md#classsimulation__framework_1_1core_1_1logging_1_1ILogger_1ae6ab6320b1ed845bc087b4fcd9c58346)

## Public functions

<a id="classsimulation__framework_1_1core_1_1logging_1_1ILogger_1ae6ab6320b1ed845bc087b4fcd9c58346"></a>
### Function ~ILogger

![][public]


```cpp
virtual simulation_framework::core::logging::ILogger::~ILogger()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::logging::ILogger::~ILogger"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1logging_1_1ILogger_1a25d4f9e5ef0275800360d88a954fb6f9"></a>
### Function GetCurrentLogLevel

![][public]
![][const]


```cpp
virtual LogLevel simulation_framework::core::logging::ILogger::GetCurrentLogLevel() const =0
```




Get the current log level from the logging interface 
**Returns**:

The current log level



**Return type**: LogLevel

**Reimplemented by**:

* [GetCurrentLogLevel](classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger.md#classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger_1a5fa0554c57b1663845e43bd72bd7f483)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::logging::ILogger::GetCurrentLogLevel"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1logging_1_1ILogger_1ac6919addad8357c8e30bd3481b2974e7"></a>
### Function SetCurrentLogLevel

![][public]


```cpp
virtual void simulation_framework::core::logging::ILogger::SetCurrentLogLevel(LogLevel log_level)=0
```




Set the current log level 
**Parameters**:

* **level**: The log level of the message



**Parameters**:

* LogLevel **log_level**

**Return type**: void

**Reimplemented by**:

* [SetCurrentLogLevel](classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger.md#classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger_1aaf1a52b229da07a50705df5bf08307a3)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::logging::ILogger::SetCurrentLogLevel"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1logging_1_1ILogger_1a4a984cd42c308ce570895a876337753f"></a>
### Function Log

![][public]


```cpp
virtual void simulation_framework::core::logging::ILogger::Log(LogLevel level, std::string_view message)=0
```




Log a message on the logging interface 
**Parameters**:

* **level**: The log level of the message
* **message**: The log message



**Parameters**:

* LogLevel **level**
* std::string_view **message**

**Return type**: void

**Reimplemented by**:

* [Log](classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger.md#classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger_1a9d2ff51ab9e4e3b050fc243b55f03fb7)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::logging::ILogger::Log"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"i__logger_8h"},"children":[{"type":"text","text":"i_logger.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)