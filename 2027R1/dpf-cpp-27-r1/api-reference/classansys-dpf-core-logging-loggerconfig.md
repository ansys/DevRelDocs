# Class ansys::dpf::core::logging::LoggerConfig

<a id="classansys-dpf-core-logging-loggerconfig"></a>

![][C++]
![][public]

The configuration associated to a [Logger](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger). It allows setting the log level and the sinks of a logger.



## Members

* [defaultConfig](classansys-dpf-core-logging-loggerconfig.md#classansys-dpf-core-logging-loggerconfig-1af32d34dcb6b85561e8afec9f3d7fcccf)
* [getLogLevel](classansys-dpf-core-logging-loggerconfig.md#classansys-dpf-core-logging-loggerconfig-1a28a5fcb631af6a4b6fce9accc454d0b6)
* [getSinks](classansys-dpf-core-logging-loggerconfig.md#classansys-dpf-core-logging-loggerconfig-1a7e8c7c7932c1cae127097be0c7fd319b)
* [LoggerConfig](classansys-dpf-core-logging-loggerconfig.md#classansys-dpf-core-logging-loggerconfig-1a4b15b9ab50086d77382b8a6f4e26e04a)
* [withLogLevel](classansys-dpf-core-logging-loggerconfig.md#classansys-dpf-core-logging-loggerconfig-1a2983b56f4fe817a94ee5be8b26cfdcf1)
* [withSinks](classansys-dpf-core-logging-loggerconfig.md#classansys-dpf-core-logging-loggerconfig-1a1a4aed950f872b32cea69ef415b2f7b7)
* [withSinks](classansys-dpf-core-logging-loggerconfig.md#classansys-dpf-core-logging-loggerconfig-1a141dbb92316f11466e18bdb9ffb1e21e)

## Public functions

<a id="classansys-dpf-core-logging-loggerconfig-1a4b15b9ab50086d77382b8a6f4e26e04a"></a>
### Function LoggerConfig

![][public]


```cpp
ansys::dpf::core::logging::LoggerConfig::LoggerConfig()
```


Construct a new [Logger](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger) Config object.





**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::LoggerConfig::LoggerConfig"}]}`
-->

<a id="classansys-dpf-core-logging-loggerconfig-1a28a5fcb631af6a4b6fce9accc454d0b6"></a>
### Function getLogLevel

![][public]
![][const]


```cpp
eLogLevel ansys::dpf::core::logging::LoggerConfig::getLogLevel() const
```


Get the loglevel for the [Logger](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger).

**Returns**:

eLogLevel



**Return type**: eLogLevel

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::LoggerConfig::getLogLevel"}]}`
-->

<a id="classansys-dpf-core-logging-loggerconfig-1a7e8c7c7932c1cae127097be0c7fd319b"></a>
### Function getSinks

![][public]
![][const]


```cpp
std::set< eLoggerSink > const  & ansys::dpf::core::logging::LoggerConfig::getSinks() const
```


Get the list of sink types supported by the [Logger](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger).

**Returns**:

std::set<eLoggerSink> const&



**Return type**: std::set< eLoggerSink > const &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::LoggerConfig::getSinks"}]}`
-->

<a id="classansys-dpf-core-logging-loggerconfig-1a2983b56f4fe817a94ee5be8b26cfdcf1"></a>
### Function withLogLevel

![][public]


```cpp
LoggerConfig & ansys::dpf::core::logging::LoggerConfig::withLogLevel(eLogLevel log_level)
```


Sets the log level for the [Logger](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger).

**Parameters**:

* **log_level**: The [Logger](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger) loglevel.


**Returns**:

[LoggerConfig](classansys-dpf-core-logging-loggerconfig.md#classansys-dpf-core-logging-loggerconfig)&



**Parameters**:

* eLogLevel **log_level**

**Return type**: [LoggerConfig](classansys-dpf-core-logging-loggerconfig.md#classansys-dpf-core-logging-loggerconfig-1a4b15b9ab50086d77382b8a6f4e26e04a) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::LoggerConfig::withLogLevel"}]}`
-->

<a id="classansys-dpf-core-logging-loggerconfig-1a1a4aed950f872b32cea69ef415b2f7b7"></a>
### Function withSinks

![][public]


```cpp
LoggerConfig & ansys::dpf::core::logging::LoggerConfig::withSinks(eLoggerSink sink)
```


Sets a single sink for the [Logger](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger) to write to.

**Parameters**:

* **sink**: The sink to write to.


**Returns**:

[LoggerConfig](classansys-dpf-core-logging-loggerconfig.md#classansys-dpf-core-logging-loggerconfig)&



**Parameters**:

* eLoggerSink **sink**

**Return type**: [LoggerConfig](classansys-dpf-core-logging-loggerconfig.md#classansys-dpf-core-logging-loggerconfig-1a4b15b9ab50086d77382b8a6f4e26e04a) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::LoggerConfig::withSinks"}]}`
-->

<a id="classansys-dpf-core-logging-loggerconfig-1a141dbb92316f11466e18bdb9ffb1e21e"></a>
### Function withSinks

![][public]


```cpp
LoggerConfig & ansys::dpf::core::logging::LoggerConfig::withSinks(std::set< eLoggerSink > const &sinks)
```


Sets a list of sinks for the [Logger](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger) to write to.

**Parameters**:

* **sinks**: The sinks to write to.


**Returns**:

[LoggerConfig](classansys-dpf-core-logging-loggerconfig.md#classansys-dpf-core-logging-loggerconfig)&



**Parameters**:

* std::set< eLoggerSink > const & **sinks**

**Return type**: [LoggerConfig](classansys-dpf-core-logging-loggerconfig.md#classansys-dpf-core-logging-loggerconfig-1a4b15b9ab50086d77382b8a6f4e26e04a) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::LoggerConfig::withSinks"}]}`
-->

## Public static functions

<a id="classansys-dpf-core-logging-loggerconfig-1af32d34dcb6b85561e8afec9f3d7fcccf"></a>
### Function defaultConfig

![][public]
![][static]


```cpp
static LoggerConfig ansys::dpf::core::logging::LoggerConfig::defaultConfig()
```


Returns the default config for logging.

**Returns**:

[LoggerConfig](classansys-dpf-core-logging-loggerconfig.md#classansys-dpf-core-logging-loggerconfig)



**Return type**: [LoggerConfig](classansys-dpf-core-logging-loggerconfig.md#classansys-dpf-core-logging-loggerconfig-1a4b15b9ab50086d77382b8a6f4e26e04a)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::LoggerConfig::defaultConfig"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)