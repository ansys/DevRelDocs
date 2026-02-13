<a id="structansys_1_1dpf_1_1core_1_1logging"></a>
# Structure ansys::dpf::core::logging

![][C++]
![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 6659)





## Inner classes

* [ansys::dpf::core::logging::LoggerConfig](classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig.md#classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig)
* [ansys::dpf::core::logging::internal](structansys_1_1dpf_1_1core_1_1logging_1_1internal.md#structansys_1_1dpf_1_1core_1_1logging_1_1internal)
* [ansys::dpf::core::logging::Logger](classansys_1_1dpf_1_1core_1_1logging_1_1Logger.md#classansys_1_1dpf_1_1core_1_1logging_1_1Logger)

## Members

* [eLoggerSink](structansys_1_1dpf_1_1core_1_1logging.md#structansys_1_1dpf_1_1core_1_1logging_1a9cf8329ed6cbf904ab61fa7c891f5483)
* [eLogLevel](structansys_1_1dpf_1_1core_1_1logging.md#structansys_1_1dpf_1_1core_1_1logging_1a48490078df162c963f2b931e6cd5bfd8)
* [flushAllLoggers](structansys_1_1dpf_1_1core_1_1logging.md#structansys_1_1dpf_1_1core_1_1logging_1ac86b0ab3c88a16cce14edad88b99f2a0)
* [getLogger](structansys_1_1dpf_1_1core_1_1logging.md#structansys_1_1dpf_1_1core_1_1logging_1af4e6af1f9879fb1fc1757559617376e0)
* [registerLogger](structansys_1_1dpf_1_1core_1_1logging.md#structansys_1_1dpf_1_1core_1_1logging_1aad2ae0b0c211e19c584b6bc4e807fa7f)

## Public types

<a id="structansys_1_1dpf_1_1core_1_1logging_1a48490078df162c963f2b931e6cd5bfd8"></a>
### Enumeration type eLogLevel

![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 6661)


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








<a id="structansys_1_1dpf_1_1core_1_1logging_1a48490078df162c963f2b931e6cd5bfd8a88183b946cc5f0e8c96b2e66e1c74a7e"></a>
#### Enumerator Unknown





<a id="structansys_1_1dpf_1_1core_1_1logging_1a48490078df162c963f2b931e6cd5bfd8add4ec0ac4e58f7c32a01244ae91150b1"></a>
#### Enumerator Trace





<a id="structansys_1_1dpf_1_1core_1_1logging_1a48490078df162c963f2b931e6cd5bfd8aa603905470e2a5b8c13e96b579ef0dba"></a>
#### Enumerator Debug





<a id="structansys_1_1dpf_1_1core_1_1logging_1a48490078df162c963f2b931e6cd5bfd8a4059b0251f66a18cb56f544728796875"></a>
#### Enumerator Info





<a id="structansys_1_1dpf_1_1core_1_1logging_1a48490078df162c963f2b931e6cd5bfd8a56525ae64d370c0b448ac0d60710ef17"></a>
#### Enumerator Warn





<a id="structansys_1_1dpf_1_1core_1_1logging_1a48490078df162c963f2b931e6cd5bfd8a902b0d55fddef6f8d651fe1035b7d4bd"></a>
#### Enumerator Error





<a id="structansys_1_1dpf_1_1core_1_1logging_1a48490078df162c963f2b931e6cd5bfd8a278d01e5af56273bae1bb99a98b370cd"></a>
#### Enumerator Critical





<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::eLogLevel"}]}`
-->

<a id="structansys_1_1dpf_1_1core_1_1logging_1a9cf8329ed6cbf904ab61fa7c891f5483"></a>
### Enumeration type eLoggerSink

![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 6672)


```cpp
enum eLoggerSink {
  Unknown = -1,
  Stdout = 0,
  File = 1
}
```








<a id="structansys_1_1dpf_1_1core_1_1logging_1a9cf8329ed6cbf904ab61fa7c891f5483a88183b946cc5f0e8c96b2e66e1c74a7e"></a>
#### Enumerator Unknown





<a id="structansys_1_1dpf_1_1core_1_1logging_1a9cf8329ed6cbf904ab61fa7c891f5483a21d983484658a89e3070776fae2261f5"></a>
#### Enumerator Stdout





<a id="structansys_1_1dpf_1_1core_1_1logging_1a9cf8329ed6cbf904ab61fa7c891f5483a0b27918290ff5323bea1e3b78a9cf04e"></a>
#### Enumerator File





<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::eLoggerSink"}]}`
-->

## Public static functions

<a id="structansys_1_1dpf_1_1core_1_1logging_1ac86b0ab3c88a16cce14edad88b99f2a0"></a>
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

<a id="structansys_1_1dpf_1_1core_1_1logging_1aad2ae0b0c211e19c584b6bc4e807fa7f"></a>
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



**See also**: [LoggerConfig](classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig.md#classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig)



**Parameters**:

* std::string const & **logger_name**

**Return type**: [Logger](classansys_1_1dpf_1_1core_1_1logging_1_1Logger.md#classansys_1_1dpf_1_1core_1_1logging_1_1Logger)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::registerLogger"}]}`
-->

<a id="structansys_1_1dpf_1_1core_1_1logging_1af4e6af1f9879fb1fc1757559617376e0"></a>
### Function getLogger

![][public]
![][static]


```cpp
static Logger ansys::dpf::core::logging::getLogger(std::string const &logger_name)
```


Get a [Logger](classansys_1_1dpf_1_1core_1_1logging_1_1Logger.md#classansys_1_1dpf_1_1core_1_1logging_1_1Logger) by its name. This function is thread-safe.

**Parameters**:

* **logger_name**: The logger name. This will appear in the log message to identify the message.


**Returns**:

std::shared_ptr<Logger>



**Parameters**:

* std::string const & **logger_name**

**Return type**: [Logger](classansys_1_1dpf_1_1core_1_1logging_1_1Logger.md#classansys_1_1dpf_1_1core_1_1logging_1_1Logger)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::getLogger"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)