# Class ansys::dpf::RuntimeConfig

<a id="classansys-dpf-runtimeconfig"></a>

![][C++]
![][public]





**Inherited by**:

* [ansys::dpf::RuntimeClientConfig](classansys-dpf-runtimeclientconfig.md#classansys-dpf-runtimeclientconfig)
* [ansys::dpf::RuntimeCoreConfig](classansys-dpf-runtimecoreconfig.md#classansys-dpf-runtimecoreconfig)

## Members

* [getAvailableOptions](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1add61c48a143d2603ab22e1028dc8a25f)
* [getBoolValue](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1aa611e355441057cef04ef164008da8c8)
* [getDoubleValue](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1abcbfdbc481d8fe2c2d5454830104b216)
* [getIntValue](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1a155763466ea3c190bf5b5090080edeae)
* [getStringValue](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1ae73075c73be83d06188b1708b8ebff47)
* [RuntimeConfig](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1ab8144e943554f8eaab1002be7b92c8cd)
* [RuntimeConfig](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1af6f35d3d6b1aec5480004ae4ed1fe625)
* [set](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1ab1b88cf95976b49097ccc460bf8035ed)
* [set](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1a02d687d1252675cab169991475aa343d)
* [set](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1af559e97f012ddd2a31dbbf4185b4cfe5)
* [set](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1aef94b87f0abba8d508181b8fa62af304)
* [setSubOption](classansys-dpf-runtimeconfig.md#classansys-dpf-runtimeconfig-1aa7dcdc58bbf5639bad4036ded9785905)

## Friends

## Public functions

<a id="classansys-dpf-runtimeconfig-1ab8144e943554f8eaab1002be7b92c8cd"></a>
### Function RuntimeConfig

![][public]


```cpp
ansys::dpf::RuntimeConfig::RuntimeConfig(RuntimeConfig const &rhs)
```








**Parameters**:

* RuntimeConfig const & **rhs**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeConfig::RuntimeConfig"}]}`
-->

<a id="classansys-dpf-runtimeconfig-1af6f35d3d6b1aec5480004ae4ed1fe625"></a>
### Function RuntimeConfig

![][public]


```cpp
ansys::dpf::RuntimeConfig::RuntimeConfig(RuntimeConfig &&rhs) noexcept
```








**Parameters**:

* RuntimeConfig && **rhs**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeConfig::RuntimeConfig"}]}`
-->

<a id="classansys-dpf-runtimeconfig-1add61c48a143d2603ab22e1028dc8a25f"></a>
### Function getAvailableOptions

![][public]
![][const]


```cpp
std::vector< std::string > ansys::dpf::RuntimeConfig::getAvailableOptions() const
```








**Return type**: std::vector< std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeConfig::getAvailableOptions"}]}`
-->

<a id="classansys-dpf-runtimeconfig-1a155763466ea3c190bf5b5090080edeae"></a>
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

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeConfig::getIntValue"}]}`
-->

<a id="classansys-dpf-runtimeconfig-1abcbfdbc481d8fe2c2d5454830104b216"></a>
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

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeConfig::getDoubleValue"}]}`
-->

<a id="classansys-dpf-runtimeconfig-1aa611e355441057cef04ef164008da8c8"></a>
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

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeConfig::getBoolValue"}]}`
-->

<a id="classansys-dpf-runtimeconfig-1ae73075c73be83d06188b1708b8ebff47"></a>
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

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeConfig::getStringValue"}]}`
-->

<a id="classansys-dpf-runtimeconfig-1ab1b88cf95976b49097ccc460bf8035ed"></a>
### Function set

![][public]


```cpp
void ansys::dpf::RuntimeConfig::set(std::string const &option, dp_int value)
```




Sets option to integer value.



**Parameters**:

* std::string const & **option**: [in] Option name.
* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **value**: [in] Value for option.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeConfig::set"}]}`
-->

<a id="classansys-dpf-runtimeconfig-1a02d687d1252675cab169991475aa343d"></a>
### Function set

![][public]


```cpp
void ansys::dpf::RuntimeConfig::set(std::string const &option, dp_double value)
```




Sets option to double value.



**Parameters**:

* std::string const & **option**: [in] Option name.
* [dp\_double](namespaceansys-dpf.md#namespaceansys-dpf-1acb480013bfed185b5e34a0bdcb0e3790) **value**: [in] Value for option.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeConfig::set"}]}`
-->

<a id="classansys-dpf-runtimeconfig-1af559e97f012ddd2a31dbbf4185b4cfe5"></a>
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

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeConfig::set"}]}`
-->

<a id="classansys-dpf-runtimeconfig-1aef94b87f0abba8d508181b8fa62af304"></a>
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

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeConfig::set"}]}`
-->

<a id="classansys-dpf-runtimeconfig-1aa7dcdc58bbf5639bad4036ded9785905"></a>
### Function setSubOption

![][public]


```cpp
void ansys::dpf::RuntimeConfig::setSubOption(std::string const &sub_name, DataTree const &)
```




Sets the suboption.



**Parameters**:

* std::string const & **sub_name**: [in] Sub-tree name.
* [DataTree](classansys-dpf-datatree.md#classansys-dpf-datatree) const &

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::RuntimeConfig::setSubOption"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)