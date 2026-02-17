<a id="classansys-dpf-core-logging-logger"></a>
# Class ansys::dpf::core::logging::Logger

![][C++]
![][public]

[Logger](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger) interface. All public methods are thread-safe.



## Members

* [critical](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger-1a3c0ae4ad90cb6e940d9d9fce2d51eded)
* [debug](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger-1a0d6afc34b35d16aced0f7ab7e7c0e44d)
* [error](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger-1a043296791982c6c29b84e57bd40b3dab)
* [flush](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger-1a8a32ca508e5afd4f884a837e89e0b630)
* [info](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger-1a6f6a31f9750e3edddc5e7c2df1e68ccc)
* [log](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger-1aa2e49a144e585dacee844c661aa64259)
* [name](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger-1a3feaa521731b1300642dbe3f66ec730e)
* [trace](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger-1aebee92154360756451a040db2baf0e44)
* [valid](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger-1af93f29066aead589c32ad6f0fa38e331)
* [warning](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger-1a445d9fc717e79f90fa375e681ad73bb5)

## Public functions

<a id="classansys-dpf-core-logging-logger-1af93f29066aead589c32ad6f0fa38e331"></a>
### Function valid

![][public]
![][const]


```cpp
bool ansys::dpf::core::logging::Logger::valid() const
```


Returns if the logger is valid. By design, the logging API will never error and there could be situations where a non-functional [Logger](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger) instance will be returned. E.g if trying to register a logger with a name that is already registered or with an invalid name, or get a logger with a name which does not exist or is invalid. If the [Logger](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger) is invalid, all method calls like [flush()](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger-1a8a32ca508e5afd4f884a837e89e0b630) or [log()](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger-1aa2e49a144e585dacee844c661aa64259) will be NOPs.

**Returns**:

std::string



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::Logger::valid"}]}`
-->

<a id="classansys-dpf-core-logging-logger-1a3feaa521731b1300642dbe3f66ec730e"></a>
### Function name

![][public]
![][const]


```cpp
std::string ansys::dpf::core::logging::Logger::name() const
```


Return the name of the [Logger](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger).

**Returns**:

std::string



**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::Logger::name"}]}`
-->

<a id="classansys-dpf-core-logging-logger-1a8a32ca508e5afd4f884a837e89e0b630"></a>
### Function flush

![][public]


```cpp
void ansys::dpf::core::logging::Logger::flush()
```


Flush all logger messages to the active sinks.





**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::Logger::flush"}]}`
-->

<a id="classansys-dpf-core-logging-logger-1aebee92154360756451a040db2baf0e44"></a>
### Function trace

![][public]


```cpp
void ansys::dpf::core::logging::Logger::trace(T const &message)
```


Logs a message with the trace loglevel.

**Parameters**:

* **message**: The string to be logged.



**Parameters**:

* T const & **message**

**Return type**: void

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename T"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::Logger::trace"}]}`
-->

<a id="classansys-dpf-core-logging-logger-1a0d6afc34b35d16aced0f7ab7e7c0e44d"></a>
### Function debug

![][public]


```cpp
void ansys::dpf::core::logging::Logger::debug(T const &message)
```


Logs a message with the debug loglevel.

**Parameters**:

* **message**: The string to be logged.



**Parameters**:

* T const & **message**

**Return type**: void

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename T"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::Logger::debug"}]}`
-->

<a id="classansys-dpf-core-logging-logger-1a6f6a31f9750e3edddc5e7c2df1e68ccc"></a>
### Function info

![][public]


```cpp
void ansys::dpf::core::logging::Logger::info(T const &message)
```


Logs a message with the info loglevel.

**Parameters**:

* **message**: The string to be logged.



**Parameters**:

* T const & **message**

**Return type**: void

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename T"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::Logger::info"}]}`
-->

<a id="classansys-dpf-core-logging-logger-1a445d9fc717e79f90fa375e681ad73bb5"></a>
### Function warning

![][public]


```cpp
void ansys::dpf::core::logging::Logger::warning(T const &message)
```


Logs a message with the warning loglevel.

**Parameters**:

* **message**: The string to be logged.



**Parameters**:

* T const & **message**

**Return type**: void

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename T"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::Logger::warning"}]}`
-->

<a id="classansys-dpf-core-logging-logger-1a043296791982c6c29b84e57bd40b3dab"></a>
### Function error

![][public]


```cpp
void ansys::dpf::core::logging::Logger::error(T const &message)
```


Logs a message with the error loglevel.

**Parameters**:

* **message**: The string to be logged.



**Parameters**:

* T const & **message**

**Return type**: void

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename T"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::Logger::error"}]}`
-->

<a id="classansys-dpf-core-logging-logger-1a3c0ae4ad90cb6e940d9d9fce2d51eded"></a>
### Function critical

![][public]


```cpp
void ansys::dpf::core::logging::Logger::critical(T const &message)
```


Logs a message with the critical loglevel.

**Parameters**:

* **message**: The string to be logged.



**Parameters**:

* T const & **message**

**Return type**: void

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename T"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::Logger::critical"}]}`
-->

<a id="classansys-dpf-core-logging-logger-1aa2e49a144e585dacee844c661aa64259"></a>
### Function log

![][public]


```cpp
void ansys::dpf::core::logging::Logger::log(T const &message, eLogLevel loglevel)
```


Logs a message with the critical loglevel.

**Parameters**:

* **message**: The string to be logged.



**Parameters**:

* T const & **message**
* eLogLevel **loglevel**

**Return type**: void

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename T"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::Logger::log"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)