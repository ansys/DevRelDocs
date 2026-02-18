<a id="structansys-dpf-core-logging-internal"></a>
# Structure ansys::dpf::core::logging::internal

![][C++]
![][public]





## Members

* [createGetLoggerParams](structansys-dpf-core-logging-internal.md#structansys-dpf-core-logging-internal-1a3a9e68b5ba988bc6efede0511b1c1a90)
* [createRegisterLoggerParams](structansys-dpf-core-logging-internal.md#structansys-dpf-core-logging-internal-1a13b90dd3f303664af8d31638e7afb0cb)

## Public static functions

<a id="structansys-dpf-core-logging-internal-1a13b90dd3f303664af8d31638e7afb0cb"></a>
### Function createRegisterLoggerParams

![][public]
![][static]


```cpp
static DataTree ansys::dpf::core::logging::internal::createRegisterLoggerParams(std::string const &logger_name, LoggerConfig const &config, Client const *const client=nullptr)
```








**Parameters**:

* std::string const & **logger_name**
* [LoggerConfig](classansys-dpf-core-logging-loggerconfig.md#classansys-dpf-core-logging-loggerconfig) const & **config**
* [Client](classansys-dpf-client.md#classansys-dpf-client) const *const **client** = nullptr 

**Return type**: [DataTree](classansys-dpf-datatree.md#classansys-dpf-datatree)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::internal::createRegisterLoggerParams"}]}`
-->

<a id="structansys-dpf-core-logging-internal-1a3a9e68b5ba988bc6efede0511b1c1a90"></a>
### Function createGetLoggerParams

![][public]
![][static]


```cpp
static DataTree ansys::dpf::core::logging::internal::createGetLoggerParams(std::string const &logger_name, Client const *const client=nullptr)
```








**Parameters**:

* std::string const & **logger_name**
* [Client](classansys-dpf-client.md#classansys-dpf-client) const *const **client** = nullptr 

**Return type**: [DataTree](classansys-dpf-datatree.md#classansys-dpf-datatree)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::internal::createGetLoggerParams"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)