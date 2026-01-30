# Namespace simulation_framework::core::logging

![][C++]

**Definition**: `core/logging/logging.h` (line 20)





## Classes

* [simulation_framework::core::logging::ConsoleLogger](classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger.md#classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger)
* [simulation_framework::core::logging::ILogger](classsimulation__framework_1_1core_1_1logging_1_1ILogger.md#classsimulation__framework_1_1core_1_1logging_1_1ILogger)
* [simulation_framework::core::logging::LoggingInstance](classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance.md#classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance)

## Enumeration types

<a id="i__logger_8h_1a06ff84d486ccb89f1ca084e7d2b1063e"></a>
### Enumeration type LogLevel

![][public]

**Definition**: `core/logging/i_logger.h` (line 20)


```cpp
enum LogLevel {
  kDebug = 0,
  kInfo,
  kWarning,
  kError
}
```


Log levels for the logging interface.





<a id="i__logger_8h_1a06ff84d486ccb89f1ca084e7d2b1063eabb53ce21b7c0b7c8a8f7860a41901d29"></a>
#### Enumerator kDebug





<a id="i__logger_8h_1a06ff84d486ccb89f1ca084e7d2b1063ea176a473e63c17ccdac91640c67f149bf"></a>
#### Enumerator kInfo





<a id="i__logger_8h_1a06ff84d486ccb89f1ca084e7d2b1063eaec0da41f4e48b52c362303eb27ed5dee"></a>
#### Enumerator kWarning





<a id="i__logger_8h_1a06ff84d486ccb89f1ca084e7d2b1063eae3587c730cc1aa530fa4ddc9c4204e97"></a>
#### Enumerator kError





<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::logging::LogLevel"}]}`
-->

## Functions

<a id="logging_8h_1a3620e08da764e24634a79d1855f9d16c"></a>
### Function SetLogLevel

![][public]
![][static]


```cpp
static void simulation_framework::core::logging::SetLogLevel(LogLevel log_level) noexcept
```


Set Log level of logging instance.

**Parameters**:

* **level**: The log level of the message



**Parameters**:

* LogLevel **log_level**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::logging::SetLogLevel"}]}`
-->

<a id="logging_8h_1a271b769dd8c1312409a2e9082bc87b9c"></a>
### Function Debug

![][public]
![][static]


```cpp
static void simulation_framework::core::logging::Debug(std::string_view message) noexcept
```




Log a message with log level "Debug". This will use the singleton [LoggingInstance](classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance.md#classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance) to get the message logged by all registered loggers. 
**Parameters**:

* **message**: The log message



**Parameters**:

* std::string_view **message**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::logging::Debug"}]}`
-->

<a id="logging_8h_1a9905ad665cb34c3c9f0c2bc7f619d434"></a>
### Function Info

![][public]
![][static]


```cpp
static void simulation_framework::core::logging::Info(std::string_view message) noexcept
```




Log a message with log level "Info". This will use the singleton [LoggingInstance](classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance.md#classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance) to get the message logged by all registered loggers. 
**Parameters**:

* **message**: The log message



**Parameters**:

* std::string_view **message**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::logging::Info"}]}`
-->

<a id="logging_8h_1aec8442f1cd4b626846d6917c918bd225"></a>
### Function Warning

![][public]
![][static]


```cpp
static void simulation_framework::core::logging::Warning(std::string_view message) noexcept
```




Log a message with log level "Warning". This will use the singleton [LoggingInstance](classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance.md#classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance) to get the message logged by all registered loggers. 
**Parameters**:

* **message**: The log message



**Parameters**:

* std::string_view **message**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::logging::Warning"}]}`
-->

<a id="logging_8h_1ae2778842b88c9cb0cae44779738d61b0"></a>
### Function Error

![][public]
![][static]


```cpp
static void simulation_framework::core::logging::Error(std::string_view message) noexcept
```




Log a message with log level "Error". This will use the singleton [LoggingInstance](classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance.md#classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance) to get the message logged by all registered loggers. 
**Parameters**:

* **message**: The log message



**Parameters**:

* std::string_view **message**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::logging::Error"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)