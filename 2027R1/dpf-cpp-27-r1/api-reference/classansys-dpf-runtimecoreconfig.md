# Class ansys::dpf::RuntimeCoreConfig

<a id="classansys-dpf-runtimecoreconfig"></a>

![][C++]
![][public]



enables to set runtime configuration options to the DPF process (DataProcessingCore).

**Inherits from**:

* ansys::dpf::RuntimeConfig

## Members

* [getAvailableOptions](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1add61c48a143d2603ab22e1028dc8a25f)
* [getBoolValue](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1aa611e355441057cef04ef164008da8c8)
* [getDoubleValue](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1abcbfdbc481d8fe2c2d5454830104b216)
* [getIntValue](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1a155763466ea3c190bf5b5090080edeae)
* [getNumberOfThreadsToUse](classansys-dpf-runtimecoreconfig.md#classansys-dpf-runtimecoreconfig-1a4ae882d7ed1e89ad3d03a761f6f485c1)
* [getStringValue](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1ae73075c73be83d06188b1708b8ebff47)
* [RuntimeConfig](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1ab8144e943554f8eaab1002be7b92c8cd)
* [RuntimeConfig](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1af6f35d3d6b1aec5480004ae4ed1fe625)
* [RuntimeCoreConfig](classansys-dpf-runtimecoreconfig.md#classansys-dpf-runtimecoreconfig-1a9cedb8f684ca41889ed7c4ed65b29e9a)
* [RuntimeCoreConfig](classansys-dpf-runtimecoreconfig.md#classansys-dpf-runtimecoreconfig-1a9cd9782bb8c79716f3b540d14a561b98)
* [set](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1ab1b88cf95976b49097ccc460bf8035ed)
* [set](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1a02d687d1252675cab169991475aa343d)
* [set](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1af559e97f012ddd2a31dbbf4185b4cfe5)
* [set](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1aef94b87f0abba8d508181b8fa62af304)
* [setNumberOfThreadsToUse](classansys-dpf-runtimecoreconfig.md#classansys-dpf-runtimecoreconfig-1af02bd1ff8d573d83cecefcdd647f0a0b)
* [setSubOption](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1aa7dcdc58bbf5639bad4036ded9785905)

## Friends

## Public functions

<a id="classansys-dpf-runtimecoreconfig-1a9cedb8f684ca41889ed7c4ed65b29e9a"></a>
### Function RuntimeCoreConfig

![][public]


```cpp
ansys::dpf::RuntimeCoreConfig::RuntimeCoreConfig(RuntimeCoreConfig const &rhs)
```








**Parameters**:

* RuntimeCoreConfig const & **rhs**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeCoreConfig::RuntimeCoreConfig"}]}`
-->

<a id="classansys-dpf-runtimecoreconfig-1a9cd9782bb8c79716f3b540d14a561b98"></a>
### Function RuntimeCoreConfig

![][public]


```cpp
ansys::dpf::RuntimeCoreConfig::RuntimeCoreConfig(RuntimeCoreConfig &&rhs) noexcept
```








**Parameters**:

* RuntimeCoreConfig && **rhs**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeCoreConfig::RuntimeCoreConfig"}]}`
-->

<a id="classansys-dpf-runtimecoreconfig-1af02bd1ff8d573d83cecefcdd647f0a0b"></a>
### Function setNumberOfThreadsToUse

![][public]


```cpp
void ansys::dpf::RuntimeCoreConfig::setNumberOfThreadsToUse(int num_threads)
```




Sets the default number of threads to use for all operators, default is omp_get_num_threads.



**Parameters**:

* int **num_threads**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeCoreConfig::setNumberOfThreadsToUse"}]}`
-->

<a id="classansys-dpf-runtimecoreconfig-1a4ae882d7ed1e89ad3d03a761f6f485c1"></a>
### Function getNumberOfThreadsToUse

![][public]
![][const]


```cpp
int ansys::dpf::RuntimeCoreConfig::getNumberOfThreadsToUse() const
```




**Returns**:

The default number of threads to use for all operators.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeCoreConfig::getNumberOfThreadsToUse"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)