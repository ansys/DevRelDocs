# Structure ansys::dpf::core::logging

<a id="structansys-dpf-core-logging"></a>

![][C++]
![][public]





## Inner classes

* [ansys::dpf::core::logging::LoggerConfig](classansys-dpf-core-logging-loggerconfig.md#classansys-dpf-core-logging-loggerconfig)
* [ansys::dpf::core::logging::internal](structansys-dpf-core-logging-internal.md#structansys-dpf-core-logging-internal)
* [ansys::dpf::core::logging::Logger](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger)

## Members

* [eLoggerSink](structansys-dpf-core-logging.md#structansys-dpf-core-logging-1a9cf8329ed6cbf904ab61fa7c891f5483)
* [eLogLevel](structansys-dpf-core-logging.md#structansys-dpf-core-logging-1a48490078df162c963f2b931e6cd5bfd8)
* [flushAllLoggers](structansys-dpf-core-logging.md#structansys-dpf-core-logging-1ac86b0ab3c88a16cce14edad88b99f2a0)
* [getLogger](structansys-dpf-core-logging.md#structansys-dpf-core-logging-1af4e6af1f9879fb1fc1757559617376e0)
* [registerLogger](structansys-dpf-core-logging.md#structansys-dpf-core-logging-1aad2ae0b0c211e19c584b6bc4e807fa7f)

## Public types

<a id="structansys-dpf-core-logging-1a48490078df162c963f2b931e6cd5bfd8"></a>
### Enumeration type eLogLevel

![][public]


```cpp
enum eLogLevel {
  Unknown = -1,
  Trace = 0,
  Debug = 1,
  Info = 2,
  Warn = 3,
  Error = 4,
  Critical = 5
}
```








<a id="structansys-dpf-core-logging-1a48490078df162c963f2b931e6cd5bfd8a88183b946cc5f0e8c96b2e66e1c74a7e"></a>
#### Enumerator Unknown





<a id="structansys-dpf-core-logging-1a48490078df162c963f2b931e6cd5bfd8add4ec0ac4e58f7c32a01244ae91150b1"></a>
#### Enumerator Trace





<a id="structansys-dpf-core-logging-1a48490078df162c963f2b931e6cd5bfd8aa603905470e2a5b8c13e96b579ef0dba"></a>
#### Enumerator Debug





<a id="structansys-dpf-core-logging-1a48490078df162c963f2b931e6cd5bfd8a4059b0251f66a18cb56f544728796875"></a>
#### Enumerator Info





<a id="structansys-dpf-core-logging-1a48490078df162c963f2b931e6cd5bfd8a56525ae64d370c0b448ac0d60710ef17"></a>
#### Enumerator Warn





<a id="structansys-dpf-core-logging-1a48490078df162c963f2b931e6cd5bfd8a902b0d55fddef6f8d651fe1035b7d4bd"></a>
#### Enumerator Error





<a id="structansys-dpf-core-logging-1a48490078df162c963f2b931e6cd5bfd8a278d01e5af56273bae1bb99a98b370cd"></a>
#### Enumerator Critical





<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::eLogLevel"}]}`
-->

<a id="structansys-dpf-core-logging-1a9cf8329ed6cbf904ab61fa7c891f5483"></a>
### Enumeration type eLoggerSink

![][public]


```cpp
enum eLoggerSink {
  Unknown = -1,
  Stdout = 0,
  File = 1
}
```








<a id="structansys-dpf-core-logging-1a9cf8329ed6cbf904ab61fa7c891f5483a88183b946cc5f0e8c96b2e66e1c74a7e"></a>
#### Enumerator Unknown





<a id="structansys-dpf-core-logging-1a9cf8329ed6cbf904ab61fa7c891f5483a21d983484658a89e3070776fae2261f5"></a>
#### Enumerator Stdout





<a id="structansys-dpf-core-logging-1a9cf8329ed6cbf904ab61fa7c891f5483a0b27918290ff5323bea1e3b78a9cf04e"></a>
#### Enumerator File





<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::eLoggerSink"}]}`
-->

## Public static functions

<a id="structansys-dpf-core-logging-1ac86b0ab3c88a16cce14edad88b99f2a0"></a>
### Function flushAllLoggers

![][public]
![][static]


```cpp
static void ansys::dpf::core::logging::flushAllLoggers()
```


Flush all loggers. This function is thread-safe.





**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::flushAllLoggers"}]}`
-->

<a id="structansys-dpf-core-logging-1aad2ae0b0c211e19c584b6bc4e807fa7f"></a>
### Function registerLogger

![][public]
![][static]


```cpp
static Logger ansys::dpf::core::logging::registerLogger(std::string const &logger_name)
```


Registers a logger into the logging infrastructure. This function is thread-safe.

**Parameters**:

* **logger_name**: The logger name. This will appear in the log message to identify the message.


**Returns**:

std::shared_ptr<Logger> The registered logger.



**See also**: [LoggerConfig](classansys-dpf-core-logging-loggerconfig.md#classansys-dpf-core-logging-loggerconfig)



**Parameters**:

* std::string const & **logger_name**

**Return type**: [Logger](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::registerLogger"}]}`
-->

<a id="structansys-dpf-core-logging-1af4e6af1f9879fb1fc1757559617376e0"></a>
### Function getLogger

![][public]
![][static]


```cpp
static Logger ansys::dpf::core::logging::getLogger(std::string const &logger_name)
```


Get a [Logger](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger) by its name. This function is thread-safe.

**Parameters**:

* **logger_name**: The logger name. This will appear in the log message to identify the message.


**Returns**:

std::shared_ptr<Logger>



**Parameters**:

* std::string const & **logger_name**

**Return type**: [Logger](classansys-dpf-core-logging-logger.md#classansys-dpf-core-logging-logger)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::getLogger"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)