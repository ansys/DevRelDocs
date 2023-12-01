<a id="classansys_1_1dpf_1_1RuntimeCoreConfig"></a>
# Class ansys::dpf::RuntimeCoreConfig

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 4854)



enables to set runtime configuration options to the DPF process (DataProcessingCore).

**Inherits from**:

* [ansys::dpf::RuntimeConfig](undefined.md#undefined)

## Members

* [getAvailableOptions](classansys_1_1dpf_1_1RuntimeConfig.md#classansys_1_1dpf_1_1RuntimeConfig_1ad63be5dcd8eb27fe5492e4d1f70ce38e)
* [getBoolValue](classansys_1_1dpf_1_1RuntimeConfig.md#classansys_1_1dpf_1_1RuntimeConfig_1aa611e355441057cef04ef164008da8c8)
* [getDoubleValue](classansys_1_1dpf_1_1RuntimeConfig.md#classansys_1_1dpf_1_1RuntimeConfig_1abcbfdbc481d8fe2c2d5454830104b216)
* [getIntValue](classansys_1_1dpf_1_1RuntimeConfig.md#classansys_1_1dpf_1_1RuntimeConfig_1a155763466ea3c190bf5b5090080edeae)
* [getNumberOfThreadsToUse](classansys_1_1dpf_1_1RuntimeCoreConfig.md#classansys_1_1dpf_1_1RuntimeCoreConfig_1a4ae882d7ed1e89ad3d03a761f6f485c1)
* [getStringValue](classansys_1_1dpf_1_1RuntimeConfig.md#classansys_1_1dpf_1_1RuntimeConfig_1ae73075c73be83d06188b1708b8ebff47)
* [RuntimeConfig](classansys_1_1dpf_1_1RuntimeConfig.md#classansys_1_1dpf_1_1RuntimeConfig_1ab8144e943554f8eaab1002be7b92c8cd)
* [RuntimeConfig](classansys_1_1dpf_1_1RuntimeConfig.md#classansys_1_1dpf_1_1RuntimeConfig_1a79b0dfe9cca871e54b5bc60d04d737f0)
* [RuntimeCoreConfig](classansys_1_1dpf_1_1RuntimeCoreConfig.md#classansys_1_1dpf_1_1RuntimeCoreConfig_1a96ef33b2d74d74303fb6a4b0efe38b69)
* [RuntimeCoreConfig](classansys_1_1dpf_1_1RuntimeCoreConfig.md#classansys_1_1dpf_1_1RuntimeCoreConfig_1a9cedb8f684ca41889ed7c4ed65b29e9a)
* [RuntimeCoreConfig](classansys_1_1dpf_1_1RuntimeCoreConfig.md#classansys_1_1dpf_1_1RuntimeCoreConfig_1adb6375d1bc9f0d8bdb755219a12afc3d)
* [set](classansys_1_1dpf_1_1RuntimeConfig.md#classansys_1_1dpf_1_1RuntimeConfig_1ab1b88cf95976b49097ccc460bf8035ed)
* [set](classansys_1_1dpf_1_1RuntimeConfig.md#classansys_1_1dpf_1_1RuntimeConfig_1a02d687d1252675cab169991475aa343d)
* [set](classansys_1_1dpf_1_1RuntimeConfig.md#classansys_1_1dpf_1_1RuntimeConfig_1af559e97f012ddd2a31dbbf4185b4cfe5)
* [set](classansys_1_1dpf_1_1RuntimeConfig.md#classansys_1_1dpf_1_1RuntimeConfig_1aef94b87f0abba8d508181b8fa62af304)
* [setNumberOfThreadsToUse](classansys_1_1dpf_1_1RuntimeCoreConfig.md#classansys_1_1dpf_1_1RuntimeCoreConfig_1af02bd1ff8d573d83cecefcdd647f0a0b)

## Friends

<a id="classansys_1_1dpf_1_1RuntimeCoreConfig_1af764561c544bacc1b90b526ee8d3c708"></a>
### Friend core

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 4857)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class core"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1core"},"children":[{"type":"text","text":"core"}]}]},{"type":"text","text":"\n        "}]}

## Private functions

<a id="classansys_1_1dpf_1_1RuntimeCoreConfig_1a96ef33b2d74d74303fb6a4b0efe38b69"></a>
### Function RuntimeCoreConfig

![][private]

```cpp
ansys::dpf::RuntimeCoreConfig::RuntimeCoreConfig(DataTree &data_tree)
```







**Parameters**:

* [DataTree](classansys_1_1dpf_1_1DataTree.md#classansys_1_1dpf_1_1DataTree) & **data_tree**

**Return type**: 

## Public functions

<a id="classansys_1_1dpf_1_1RuntimeCoreConfig_1a9cedb8f684ca41889ed7c4ed65b29e9a"></a>
### Function RuntimeCoreConfig

![][public]

```cpp
ansys::dpf::RuntimeCoreConfig::RuntimeCoreConfig(RuntimeCoreConfig const &rhs)
```







**Parameters**:

* [RuntimeCoreConfig](classansys_1_1dpf_1_1RuntimeCoreConfig.md#classansys_1_1dpf_1_1RuntimeCoreConfig) const & **rhs**

**Return type**: 

<a id="classansys_1_1dpf_1_1RuntimeCoreConfig_1adb6375d1bc9f0d8bdb755219a12afc3d"></a>
### Function RuntimeCoreConfig

![][public]

```cpp
ansys::dpf::RuntimeCoreConfig::RuntimeCoreConfig(RuntimeCoreConfig &&rhs)
```







**Parameters**:

* [RuntimeCoreConfig](classansys_1_1dpf_1_1RuntimeCoreConfig.md#classansys_1_1dpf_1_1RuntimeCoreConfig) && **rhs**

**Return type**: 

<a id="classansys_1_1dpf_1_1RuntimeCoreConfig_1af02bd1ff8d573d83cecefcdd647f0a0b"></a>
### Function setNumberOfThreadsToUse

![][public]

```cpp
void ansys::dpf::RuntimeCoreConfig::setNumberOfThreadsToUse(int num_threads)
```



Sets the default number of threads to use for all operators, default is omp_get_num_threads.



**Parameters**:

* int **num_threads**

**Return type**: void

<a id="classansys_1_1dpf_1_1RuntimeCoreConfig_1a4ae882d7ed1e89ad3d03a761f6f485c1"></a>
### Function getNumberOfThreadsToUse

![][public]
![][const]

```cpp
int ansys::dpf::RuntimeCoreConfig::getNumberOfThreadsToUse() const
```



**Returns**:

The default number of threads to use for all operators.



**Return type**: int

**TODO**:

* includes {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)