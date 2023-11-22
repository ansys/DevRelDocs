<a id="classansys_1_1dpf_1_1RuntimeConfig"></a>
# Class ansys::dpf::RuntimeConfig

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 4810)





**Inherited by**:

* [ansys::dpf::RuntimeClientConfig](classansys_1_1dpf_1_1RuntimeClientConfig.md#classansys_1_1dpf_1_1RuntimeClientConfig)
* [ansys::dpf::RuntimeCoreConfig](classansys_1_1dpf_1_1RuntimeCoreConfig.md#classansys_1_1dpf_1_1RuntimeCoreConfig)

## Members

* [\_data\_tree](classansys_1_1dpf_1_1RuntimeConfig.md#classansys_1_1dpf_1_1RuntimeConfig_1a70592b16d6be93b22cefc57d07e6f528)
* [getAvailableOptions](classansys_1_1dpf_1_1RuntimeConfig.md#classansys_1_1dpf_1_1RuntimeConfig_1ad63be5dcd8eb27fe5492e4d1f70ce38e)
* [getBoolValue](classansys_1_1dpf_1_1RuntimeConfig.md#classansys_1_1dpf_1_1RuntimeConfig_1aa611e355441057cef04ef164008da8c8)
* [getDoubleValue](classansys_1_1dpf_1_1RuntimeConfig.md#classansys_1_1dpf_1_1RuntimeConfig_1abcbfdbc481d8fe2c2d5454830104b216)
* [getIntValue](classansys_1_1dpf_1_1RuntimeConfig.md#classansys_1_1dpf_1_1RuntimeConfig_1a155763466ea3c190bf5b5090080edeae)
* [getStringValue](classansys_1_1dpf_1_1RuntimeConfig.md#classansys_1_1dpf_1_1RuntimeConfig_1ae73075c73be83d06188b1708b8ebff47)
* [RuntimeConfig](classansys_1_1dpf_1_1RuntimeConfig.md#classansys_1_1dpf_1_1RuntimeConfig_1ae3747f608918c2c091d9f34770401d2a)
* [RuntimeConfig](classansys_1_1dpf_1_1RuntimeConfig.md#classansys_1_1dpf_1_1RuntimeConfig_1ab8144e943554f8eaab1002be7b92c8cd)
* [RuntimeConfig](classansys_1_1dpf_1_1RuntimeConfig.md#classansys_1_1dpf_1_1RuntimeConfig_1a79b0dfe9cca871e54b5bc60d04d737f0)
* [set](classansys_1_1dpf_1_1RuntimeConfig.md#classansys_1_1dpf_1_1RuntimeConfig_1ab1b88cf95976b49097ccc460bf8035ed)
* [set](classansys_1_1dpf_1_1RuntimeConfig.md#classansys_1_1dpf_1_1RuntimeConfig_1a02d687d1252675cab169991475aa343d)
* [set](classansys_1_1dpf_1_1RuntimeConfig.md#classansys_1_1dpf_1_1RuntimeConfig_1af559e97f012ddd2a31dbbf4185b4cfe5)
* [set](classansys_1_1dpf_1_1RuntimeConfig.md#classansys_1_1dpf_1_1RuntimeConfig_1aef94b87f0abba8d508181b8fa62af304)

## Friends

<a id="classansys_1_1dpf_1_1RuntimeConfig_1af764561c544bacc1b90b526ee8d3c708"></a>
### Friend core

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 4813)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class core"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1core"},"children":[{"type":"text","text":"core"}]}]},{"type":"text","text":"\n        "}]}

## Private attributes

<a id="classansys_1_1dpf_1_1RuntimeConfig_1a70592b16d6be93b22cefc57d07e6f528"></a>
### Variable \_data\_tree

![][private]

**Definition**: `dpf\_api.h` (line 4814)

```cpp
DataTree ansys::dpf::RuntimeConfig::_data_tree
```







**Type**: [DataTree](classansys_1_1dpf_1_1DataTree.md#classansys_1_1dpf_1_1DataTree)

## Private functions

<a id="classansys_1_1dpf_1_1RuntimeConfig_1ae3747f608918c2c091d9f34770401d2a"></a>
### Function RuntimeConfig

![][private]

```cpp
ansys::dpf::RuntimeConfig::RuntimeConfig(DataTree &data_tree)
```







**Parameters**:

* [DataTree](classansys_1_1dpf_1_1DataTree.md#classansys_1_1dpf_1_1DataTree) & **data_tree**

**Return type**: 

## Public functions

<a id="classansys_1_1dpf_1_1RuntimeConfig_1ab8144e943554f8eaab1002be7b92c8cd"></a>
### Function RuntimeConfig

![][public]

```cpp
ansys::dpf::RuntimeConfig::RuntimeConfig(RuntimeConfig const &rhs)
```







**Parameters**:

* RuntimeConfig const & **rhs**

**Return type**: 

<a id="classansys_1_1dpf_1_1RuntimeConfig_1a79b0dfe9cca871e54b5bc60d04d737f0"></a>
### Function RuntimeConfig

![][public]

```cpp
ansys::dpf::RuntimeConfig::RuntimeConfig(RuntimeConfig &&rhs)
```







**Parameters**:

* RuntimeConfig && **rhs**

**Return type**: 

<a id="classansys_1_1dpf_1_1RuntimeConfig_1ad63be5dcd8eb27fe5492e4d1f70ce38e"></a>
### Function getAvailableOptions

![][public]
![][const]

```cpp
std::vector<std::string> ansys::dpf::RuntimeConfig::getAvailableOptions() const
```







**Return type**: std::vector< std::string >

<a id="classansys_1_1dpf_1_1RuntimeConfig_1a155763466ea3c190bf5b5090080edeae"></a>
### Function getIntValue

![][public]
![][const]

```cpp
int ansys::dpf::RuntimeConfig::getIntValue(std::string const &option) const
```



**Returns**:

Integer value of given option.



**Parameters**:

* std::string const & **option**: [in] Option name.

**Return type**: int

<a id="classansys_1_1dpf_1_1RuntimeConfig_1abcbfdbc481d8fe2c2d5454830104b216"></a>
### Function getDoubleValue

![][public]
![][const]

```cpp
double ansys::dpf::RuntimeConfig::getDoubleValue(std::string const &option) const
```



**Returns**:

Double value of given option.



**Parameters**:

* std::string const & **option**: [in] Option name.

**Return type**: double

<a id="classansys_1_1dpf_1_1RuntimeConfig_1aa611e355441057cef04ef164008da8c8"></a>
### Function getBoolValue

![][public]
![][const]

```cpp
bool ansys::dpf::RuntimeConfig::getBoolValue(std::string const &option) const
```



**Returns**:

Boolean value of given option.



**Parameters**:

* std::string const & **option**: [in] Option name.

**Return type**: bool

<a id="classansys_1_1dpf_1_1RuntimeConfig_1ae73075c73be83d06188b1708b8ebff47"></a>
### Function getStringValue

![][public]
![][const]

```cpp
std::string ansys::dpf::RuntimeConfig::getStringValue(std::string const &option) const
```



**Returns**:

Boolean value of given option.



**Parameters**:

* std::string const & **option**: [in] Option name.

**Return type**: std::string

<a id="classansys_1_1dpf_1_1RuntimeConfig_1ab1b88cf95976b49097ccc460bf8035ed"></a>
### Function set

![][public]

```cpp
void ansys::dpf::RuntimeConfig::set(std::string const &option, dp_int value)
```



Sets option to integer value.



**Parameters**:

* std::string const & **option**: [in] Option name.
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **value**: [in] Value for option.

**Return type**: void

<a id="classansys_1_1dpf_1_1RuntimeConfig_1a02d687d1252675cab169991475aa343d"></a>
### Function set

![][public]

```cpp
void ansys::dpf::RuntimeConfig::set(std::string const &option, dp_double value)
```



Sets option to double value.



**Parameters**:

* std::string const & **option**: [in] Option name.
* [dp\_double](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1acb480013bfed185b5e34a0bdcb0e3790) **value**: [in] Value for option.

**Return type**: void

<a id="classansys_1_1dpf_1_1RuntimeConfig_1af559e97f012ddd2a31dbbf4185b4cfe5"></a>
### Function set

![][public]

```cpp
void ansys::dpf::RuntimeConfig::set(std::string const &option, bool value)
```



Sets option to boolean value.



**Parameters**:

* std::string const & **option**: [in] Option name.
* bool **value**: [in] Value for option.

**Return type**: void

<a id="classansys_1_1dpf_1_1RuntimeConfig_1aef94b87f0abba8d508181b8fa62af304"></a>
### Function set

![][public]

```cpp
void ansys::dpf::RuntimeConfig::set(std::string const &option, std::string value)
```



Sets option to boolean value.



**Parameters**:

* std::string const & **option**: [in] Option name.
* std::string **value**: [in] Value for option.

**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)