<a id="classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig"></a>
# Class ansys::dpf::core::logging::LoggerConfig

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 6683)

The configuration associated to a [Logger](classansys_1_1dpf_1_1core_1_1logging_1_1Logger.md#classansys_1_1dpf_1_1core_1_1logging_1_1Logger). It allows setting the log level and the sinks of a logger.



## Members

* [\_log\_level](classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig.md#classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig_1aeee2c0107f687daf35ecf7c4ede3d94c)
* [\_sinks](classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig.md#classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig_1a9f21a038624f2840a9fa157e0623a06f)
* [defaultConfig](classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig.md#classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig_1af32d34dcb6b85561e8afec9f3d7fcccf)
* [getLogLevel](classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig.md#classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig_1a28a5fcb631af6a4b6fce9accc454d0b6)
* [getSinks](classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig.md#classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig_1a7e8c7c7932c1cae127097be0c7fd319b)
* [LoggerConfig](classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig.md#classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig_1a4b15b9ab50086d77382b8a6f4e26e04a)
* [withLogLevel](classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig.md#classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig_1a2983b56f4fe817a94ee5be8b26cfdcf1)
* [withSinks](classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig.md#classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig_1a1a4aed950f872b32cea69ef415b2f7b7)
* [withSinks](classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig.md#classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig_1a141dbb92316f11466e18bdb9ffb1e21e)

## Private attributes

<a id="classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig_1aeee2c0107f687daf35ecf7c4ede3d94c"></a>
### Variable \_log\_level

![][private]

**Definition**: `dpf\_api.h` (line 6686)


```cpp
eLogLevel ansys::dpf::core::logging::LoggerConfig::_log_level
```








**Type**: eLogLevel

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::LoggerConfig::_log_level"}]}`
-->

<a id="classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig_1a9f21a038624f2840a9fa157e0623a06f"></a>
### Variable \_sinks

![][private]

**Definition**: `dpf\_api.h` (line 6687)


```cpp
std::set<eLoggerSink> ansys::dpf::core::logging::LoggerConfig::_sinks
```








**Type**: std::set< eLoggerSink >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::LoggerConfig::_sinks"}]}`
-->

## Public functions

<a id="classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig_1a4b15b9ab50086d77382b8a6f4e26e04a"></a>
### Function LoggerConfig

![][public]


```cpp
ansys::dpf::core::logging::LoggerConfig::LoggerConfig()
```


Construct a new [Logger](classansys_1_1dpf_1_1core_1_1logging_1_1Logger.md#classansys_1_1dpf_1_1core_1_1logging_1_1Logger) Config object.





**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::LoggerConfig::LoggerConfig"}]}`
-->

<a id="classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig_1a28a5fcb631af6a4b6fce9accc454d0b6"></a>
### Function getLogLevel

![][public]
![][const]


```cpp
eLogLevel ansys::dpf::core::logging::LoggerConfig::getLogLevel() const
```


Get the loglevel for the [Logger](classansys_1_1dpf_1_1core_1_1logging_1_1Logger.md#classansys_1_1dpf_1_1core_1_1logging_1_1Logger).

**Returns**:

eLogLevel



**Return type**: eLogLevel

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::LoggerConfig::getLogLevel"}]}`
-->

<a id="classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig_1a7e8c7c7932c1cae127097be0c7fd319b"></a>
### Function getSinks

![][public]
![][const]


```cpp
std::set< eLoggerSink > const  & ansys::dpf::core::logging::LoggerConfig::getSinks() const
```


Get the list of sink types supported by the [Logger](classansys_1_1dpf_1_1core_1_1logging_1_1Logger.md#classansys_1_1dpf_1_1core_1_1logging_1_1Logger).

**Returns**:

std::set<eLoggerSink> const&



**Return type**: std::set< eLoggerSink > const &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::LoggerConfig::getSinks"}]}`
-->

<a id="classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig_1a2983b56f4fe817a94ee5be8b26cfdcf1"></a>
### Function withLogLevel

![][public]


```cpp
LoggerConfig & ansys::dpf::core::logging::LoggerConfig::withLogLevel(eLogLevel log_level)
```


Sets the log level for the [Logger](classansys_1_1dpf_1_1core_1_1logging_1_1Logger.md#classansys_1_1dpf_1_1core_1_1logging_1_1Logger).

**Parameters**:

* **log_level**: The [Logger](classansys_1_1dpf_1_1core_1_1logging_1_1Logger.md#classansys_1_1dpf_1_1core_1_1logging_1_1Logger) loglevel.


**Returns**:

[LoggerConfig](classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig.md#classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig)&



**Parameters**:

* eLogLevel **log_level**

**Return type**: [LoggerConfig](classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig.md#classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig_1a4b15b9ab50086d77382b8a6f4e26e04a) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::LoggerConfig::withLogLevel"}]}`
-->

<a id="classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig_1a1a4aed950f872b32cea69ef415b2f7b7"></a>
### Function withSinks

![][public]


```cpp
LoggerConfig & ansys::dpf::core::logging::LoggerConfig::withSinks(eLoggerSink sink)
```


Sets a single sink for the [Logger](classansys_1_1dpf_1_1core_1_1logging_1_1Logger.md#classansys_1_1dpf_1_1core_1_1logging_1_1Logger) to write to.

**Parameters**:

* **sink**: The sink to write to.


**Returns**:

[LoggerConfig](classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig.md#classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig)&



**Parameters**:

* eLoggerSink **sink**

**Return type**: [LoggerConfig](classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig.md#classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig_1a4b15b9ab50086d77382b8a6f4e26e04a) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::LoggerConfig::withSinks"}]}`
-->

<a id="classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig_1a141dbb92316f11466e18bdb9ffb1e21e"></a>
### Function withSinks

![][public]


```cpp
LoggerConfig & ansys::dpf::core::logging::LoggerConfig::withSinks(std::set< eLoggerSink > const &sinks)
```


Sets a list of sinks for the [Logger](classansys_1_1dpf_1_1core_1_1logging_1_1Logger.md#classansys_1_1dpf_1_1core_1_1logging_1_1Logger) to write to.

**Parameters**:

* **sinks**: The sinks to write to.


**Returns**:

[LoggerConfig](classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig.md#classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig)&



**Parameters**:

* std::set< eLoggerSink > const & **sinks**

**Return type**: [LoggerConfig](classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig.md#classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig_1a4b15b9ab50086d77382b8a6f4e26e04a) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::LoggerConfig::withSinks"}]}`
-->

## Public static functions

<a id="classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig_1af32d34dcb6b85561e8afec9f3d7fcccf"></a>
### Function defaultConfig

![][public]
![][static]


```cpp
static LoggerConfig ansys::dpf::core::logging::LoggerConfig::defaultConfig()
```


Returns the default config for logging.

**Returns**:

[LoggerConfig](classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig.md#classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig)



**Return type**: [LoggerConfig](classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig.md#classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig_1a4b15b9ab50086d77382b8a6f4e26e04a)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::LoggerConfig::defaultConfig"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)