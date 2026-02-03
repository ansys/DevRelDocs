# Class simulation_framework::core::logging::LoggingInstance

![][C++]
![][public]

**Definition**: `core/logging/logging.h` (line 28)

A singleton class to be used for all logging purposes. It can be used to register additional loggers based on the ILogger class to introduce additional logging mechanisms. By default a ConsoleLogger will be registered with each new [LoggingInstance](classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance.md#classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance). If logging to console is not desired in your use case, you can call [ClearLoggers()](classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance.md#classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance_1a8d0242626303b56597a921397ccf0313) before adding your custom loggers to disable console logging.



## Members

* [ClearLoggers](classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance.md#classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance_1a8d0242626303b56597a921397ccf0313)
* [GetInstance](classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance.md#classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance_1a452a2f89b01be3de22e5c93b9e515747)
* [GetLoggers](classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance.md#classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance_1a2eb401fe3115b87936427b9ca29cd05a)
* [ILoggerContainer](classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance.md#classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance_1a6dd9f78b23d7faf49ba8f998bb803224)
* [Log](classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance.md#classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance_1a2536343b1dc6df11fa67321a4e41e525)
* [LoggingInstance](classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance.md#classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance_1a3946cfed6c421a90ffc1e5cc92da5da1)
* [LoggingInstance](classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance.md#classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance_1ab22c29e95f6416514eb26f0fc30b2aab)
* [operator=](classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance.md#classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance_1a63a61b155ccf69d9dbae7efe7f338791)
* [RegisterLogger](classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance.md#classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance_1ac2a261893f38c22e6a86d333e7a93644)
* [SetLogLevel](classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance.md#classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance_1a3062c31daef0227b191825fc9ce19d1a)
* [~LoggingInstance](classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance.md#classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance_1a88b1a6386d8363f77ad46615ee9e46f4)

## Public types

<a id="classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance_1a6dd9f78b23d7faf49ba8f998bb803224"></a>
### Typedef ILoggerContainer

![][public]

**Definition**: `core/logging/logging.h` (line 31)


```cpp
using simulation_framework::core::logging::LoggingInstance::ILoggerContainer =  std::vector<std::unique_ptr<ILogger> >
```








**Return type**: std::vector< std::unique_ptr< [ILogger](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) > >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::logging::LoggingInstance::ILoggerContainer"}]}`
-->

## Public functions

<a id="classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance_1a88b1a6386d8363f77ad46615ee9e46f4"></a>
### Function ~LoggingInstance

![][public]


```cpp
virtual simulation_framework::core::logging::LoggingInstance::~LoggingInstance()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::logging::LoggingInstance::~LoggingInstance"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance_1a3946cfed6c421a90ffc1e5cc92da5da1"></a>
### Function LoggingInstance

![][public]


```cpp
simulation_framework::core::logging::LoggingInstance::LoggingInstance(const LoggingInstance &)=delete
```








**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [LoggingInstance](classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance.md#classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance) &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::logging::LoggingInstance::LoggingInstance"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance_1a63a61b155ccf69d9dbae7efe7f338791"></a>
### Function operator=

![][public]


```cpp
LoggingInstance & simulation_framework::core::logging::LoggingInstance::operator=(const LoggingInstance &)=delete
```








**Parameters**:

* [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) [LoggingInstance](classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance.md#classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance) &

**Return type**: [LoggingInstance](classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance.md#classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::logging::LoggingInstance::operator="}]}`
-->

<a id="classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance_1ac2a261893f38c22e6a86d333e7a93644"></a>
### Function RegisterLogger

![][public]


```cpp
void simulation_framework::core::logging::LoggingInstance::RegisterLogger(std::unique_ptr< ILogger > logger)
```


Register a new logger.

**Parameters**:

* **logger**: The logger to be registered



**Parameters**:

* std::unique_ptr< [ILogger](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) > **logger**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::logging::LoggingInstance::RegisterLogger"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance_1a8d0242626303b56597a921397ccf0313"></a>
### Function ClearLoggers

![][public]


```cpp
void simulation_framework::core::logging::LoggingInstance::ClearLoggers()
```


Remove all currently registered loggers.





**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::logging::LoggingInstance::ClearLoggers"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance_1a2eb401fe3115b87936427b9ca29cd05a"></a>
### Function GetLoggers

![][public]
![][const]


```cpp
const ILoggerContainer & simulation_framework::core::logging::LoggingInstance::GetLoggers() const
```


Return a const reference to the container of registered loggers.





**Return type**: [const](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) ILoggerContainer &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::logging::LoggingInstance::GetLoggers"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance_1a2536343b1dc6df11fa67321a4e41e525"></a>
### Function Log

![][public]


```cpp
void simulation_framework::core::logging::LoggingInstance::Log(LogLevel level, std::string_view message)
```


Log a message on the logging interface.

**Parameters**:

* **level**: The log level of the message
* **message**: The log message



**Parameters**:

* [LogLevel](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **level**
* std::string_view **message**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::logging::LoggingInstance::Log"}]}`
-->

<a id="classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance_1a3062c31daef0227b191825fc9ce19d1a"></a>
### Function SetLogLevel

![][public]


```cpp
void simulation_framework::core::logging::LoggingInstance::SetLogLevel(LogLevel log_level)
```


Set Log level of all registered loggers.

**Parameters**:

* **level**: The log level of the message



**Parameters**:

* [LogLevel](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic) **log_level**

**Return type**: [void](classsimulation__framework_1_1core_1_1Topic.md#classsimulation__framework_1_1core_1_1Topic)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::logging::LoggingInstance::SetLogLevel"}]}`
-->

## Public static functions

<a id="classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance_1a452a2f89b01be3de22e5c93b9e515747"></a>
### Function GetInstance

![][public]
![][static]


```cpp
static LoggingInstance & simulation_framework::core::logging::LoggingInstance::GetInstance()
```


Returns a reference to global singleton logging instance.





**Return type**: [LoggingInstance](classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance.md#classsimulation__framework_1_1core_1_1logging_1_1LoggingInstance) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"simulation_framework::core::logging::LoggingInstance::GetInstance"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)