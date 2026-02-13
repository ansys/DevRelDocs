<a id="structansys_1_1dpf_1_1core_1_1logging_1_1internal"></a>
# Structure ansys::dpf::core::logging::internal

![][C++]
![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 6746)

## Members

* [createGetLoggerParams](structansys_1_1dpf_1_1core_1_1logging_1_1internal.md#structansys_1_1dpf_1_1core_1_1logging_1_1internal_1a3a9e68b5ba988bc6efede0511b1c1a90)
* [createRegisterLoggerParams](structansys_1_1dpf_1_1core_1_1logging_1_1internal.md#structansys_1_1dpf_1_1core_1_1logging_1_1internal_1a13b90dd3f303664af8d31638e7afb0cb)

## Public static functions

<a id="structansys_1_1dpf_1_1core_1_1logging_1_1internal_1a13b90dd3f303664af8d31638e7afb0cb"></a>
### Function createRegisterLoggerParams

![][public]
![][static]

```cpp
static DataTree ansys::dpf::core::logging::internal::createRegisterLoggerParams(std::string const &logger_name, LoggerConfig const &config, Client const *const client=nullptr)
```

**Parameters**:

* std::string const & **logger_name**
* [LoggerConfig](classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig.md#classansys_1_1dpf_1_1core_1_1logging_1_1LoggerConfig) const & **config**
* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client** = nullptr 

**Return type**: [DataTree](classansys_1_1dpf_1_1DataTree.md#classansys_1_1dpf_1_1DataTree)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::internal::createRegisterLoggerParams"}]}`
-->

<a id="structansys_1_1dpf_1_1core_1_1logging_1_1internal_1a3a9e68b5ba988bc6efede0511b1c1a90"></a>
### Function createGetLoggerParams

![][public]
![][static]

```cpp
static DataTree ansys::dpf::core::logging::internal::createGetLoggerParams(std::string const &logger_name, Client const *const client=nullptr)
```

**Parameters**:

* std::string const & **logger_name**
* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client** = nullptr 

**Return type**: [DataTree](classansys_1_1dpf_1_1DataTree.md#classansys_1_1dpf_1_1DataTree)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::core::logging::internal::createGetLoggerParams"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)