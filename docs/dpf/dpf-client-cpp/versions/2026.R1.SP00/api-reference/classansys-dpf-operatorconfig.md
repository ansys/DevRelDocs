# Class ansys::dpf::OperatorConfig

<a id="classansys-dpf-operatorconfig"></a>

![][C++]
![][public]



used to configure options on how the operator is running.

**Inherits from**:

* [ansys::dpf::DpfTypes](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes)

## Inner classes

* [ansys::dpf::OperatorConfig::options](structansys-dpf-operatorconfig-options.md#structansys-dpf-operatorconfig-options)

## Members

* [callAPI](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1aea34d37e0c080126eff70db34bf46597)
* [describe](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a9977945710983bc03d2940fa007847b2)
* [empty](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a39cd546c42518e2332be8f287db95459)
* [getBoolValue](classansys-dpf-operatorconfig.md#classansys-dpf-operatorconfig-1a3948249196192234ee24269ba8e994b7)
* [getClient](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a968afd9daa0b0f13b65a2ac61369d73a)
* [getDoubleValue](classansys-dpf-operatorconfig.md#classansys-dpf-operatorconfig-1a8401495df9777cc8a53f35ecaca55460)
* [getIntValue](classansys-dpf-operatorconfig.md#classansys-dpf-operatorconfig-1a01286ef94df39436cb4696d87e606121)
* [hasBeenMovedLocally](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a1a5634202c15404b6b24e8f50e51cb66)
* [hasInternalObject](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1ae198f89868d85c7db6dc1a934a1d3c15)
* [hasOption](classansys-dpf-operatorconfig.md#classansys-dpf-operatorconfig-1add327e8dbb91f54919cce1a6966955e6)
* [isOnCommonAPI](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a9f9789ff61cc9d400a2a344830706b73)
* [isSameObject](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1aa64d5f8fcd7d85ad6ebf708494dbefd7)
* [numOptions](classansys-dpf-operatorconfig.md#classansys-dpf-operatorconfig-1aadd5caf726b8a6298c1b774dd6fd2710)
* [operator=](classansys-dpf-operatorconfig.md#classansys-dpf-operatorconfig-1a6775bcdd902b40d67a1a6621000c95a7)
* [operator=](classansys-dpf-operatorconfig.md#classansys-dpf-operatorconfig-1a533a898113954f598ecff282260a1c83)
* [OperatorConfig](classansys-dpf-operatorconfig.md#classansys-dpf-operatorconfig-1afb8f35dc440a52bca9ebc000bb47f61a)
* [OperatorConfig](classansys-dpf-operatorconfig.md#classansys-dpf-operatorconfig-1a3612c4dc533aa2cce61167723dccb9a9)
* [OperatorConfig](classansys-dpf-operatorconfig.md#classansys-dpf-operatorconfig-1a51d61d8a882880bbf6bbece60306ba92)
* [OperatorConfig](classansys-dpf-operatorconfig.md#classansys-dpf-operatorconfig-1ad050600a10a4b6c5abffe8a92715c24e)
* [options](classansys-dpf-operatorconfig.md#classansys-dpf-operatorconfig-1ae02e4297e6fa9030d1ff3179fefe04b5)
* [optionsAndValues](classansys-dpf-operatorconfig.md#classansys-dpf-operatorconfig-1a1a374278aa4699eb86506544b1c573e1)
* [set](classansys-dpf-operatorconfig.md#classansys-dpf-operatorconfig-1a13fa51659fa378a6f67b344bbb9ea1be)
* [set](classansys-dpf-operatorconfig.md#classansys-dpf-operatorconfig-1a0d8e1b93cb98e68d514566a3b8bd15c3)
* [set](classansys-dpf-operatorconfig.md#classansys-dpf-operatorconfig-1ac299a4de0fbf84d4405d35c7bfe0d9f6)
* [~DpfTypes](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1ab7c83b6ea160c2b115e056f6c312112f)

## Friends

## Public functions

<a id="classansys-dpf-operatorconfig-1afb8f35dc440a52bca9ebc000bb47f61a"></a>
### Function OperatorConfig

![][public]


```cpp
ansys::dpf::OperatorConfig::OperatorConfig()
```








**Return type**:

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorConfig::OperatorConfig"}]}`
-->

<a id="classansys-dpf-operatorconfig-1a3612c4dc533aa2cce61167723dccb9a9"></a>
### Function OperatorConfig

![][public]


```cpp
ansys::dpf::OperatorConfig::OperatorConfig(Client const *const client)
```








**Parameters**:

* [Client](classansys-dpf-client.md#classansys-dpf-client) const *const **client**: [in] [Client](classansys-dpf-client.md#classansys-dpf-client) instance designating the IP, port and protocol to use.

**Return type**:

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorConfig::OperatorConfig"}]}`
-->

<a id="classansys-dpf-operatorconfig-1a51d61d8a882880bbf6bbece60306ba92"></a>
### Function OperatorConfig

![][public]


```cpp
ansys::dpf::OperatorConfig::OperatorConfig(OperatorConfig &&) noexcept
```








**Parameters**:

* OperatorConfig &&

**Return type**:

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorConfig::OperatorConfig"}]}`
-->

<a id="classansys-dpf-operatorconfig-1ad050600a10a4b6c5abffe8a92715c24e"></a>
### Function OperatorConfig

![][public]


```cpp
ansys::dpf::OperatorConfig::OperatorConfig(OperatorConfig const &)
```








**Parameters**:

* OperatorConfig const &

**Return type**:

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorConfig::OperatorConfig"}]}`
-->

<a id="classansys-dpf-operatorconfig-1a6775bcdd902b40d67a1a6621000c95a7"></a>
### Function operator=

![][public]


```cpp
OperatorConfig & ansys::dpf::OperatorConfig::operator=(OperatorConfig const &)
```








**Parameters**:

* OperatorConfig const &

**Return type**: OperatorConfig &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorConfig::operator="}]}`
-->

<a id="classansys-dpf-operatorconfig-1a533a898113954f598ecff282260a1c83"></a>
### Function operator=

![][public]


```cpp
OperatorConfig & ansys::dpf::OperatorConfig::operator=(OperatorConfig &&) noexcept
```








**Parameters**:

* OperatorConfig &&

**Return type**: OperatorConfig &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorConfig::operator="}]}`
-->

<a id="classansys-dpf-operatorconfig-1aadd5caf726b8a6298c1b774dd6fd2710"></a>
### Function numOptions

![][public]
![][const]


```cpp
int ansys::dpf::OperatorConfig::numOptions() const
```




**Returns**:

Number of avalable options.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorConfig::numOptions"}]}`
-->

<a id="classansys-dpf-operatorconfig-1ae02e4297e6fa9030d1ff3179fefe04b5"></a>
### Function options

![][public]


```cpp
std::vector< std::string > ansys::dpf::OperatorConfig::options()
```




**Returns**:

Vector of option names.



**Return type**: std::vector< std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorConfig::options"}]}`
-->

<a id="classansys-dpf-operatorconfig-1a1a374278aa4699eb86506544b1c573e1"></a>
### Function optionsAndValues

![][public]


```cpp
std::map< std::string, std::string > ansys::dpf::OperatorConfig::optionsAndValues()
```




**Returns**:

Map of option and printable values.



**Return type**: std::map< std::string, std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorConfig::optionsAndValues"}]}`
-->

<a id="classansys-dpf-operatorconfig-1a13fa51659fa378a6f67b344bbb9ea1be"></a>
### Function set

![][public]


```cpp
void ansys::dpf::OperatorConfig::set(std::string const &option, dp_int value)
```




Sets option to integer value.



**Parameters**:

* std::string const & **option**: [in] Option name.
* [dp_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **value**: [in] Value for option.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorConfig::set"}]}`
-->

<a id="classansys-dpf-operatorconfig-1a0d8e1b93cb98e68d514566a3b8bd15c3"></a>
### Function set

![][public]


```cpp
void ansys::dpf::OperatorConfig::set(std::string const &option, dp_double value)
```




Sets option to double value.



**Parameters**:

* std::string const & **option**: [in] Option name.
* [dp_double](namespaceansys-dpf.md#namespaceansys-dpf-1acb480013bfed185b5e34a0bdcb0e3790) **value**: [in] Value for option.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorConfig::set"}]}`
-->

<a id="classansys-dpf-operatorconfig-1ac299a4de0fbf84d4405d35c7bfe0d9f6"></a>
### Function set

![][public]


```cpp
void ansys::dpf::OperatorConfig::set(std::string const &option, bool value)
```




Sets option to boolean value.



**Parameters**:

* std::string const & **option**: [in] Option name.
* bool **value**: [in] Value for option.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorConfig::set"}]}`
-->

<a id="classansys-dpf-operatorconfig-1a01286ef94df39436cb4696d87e606121"></a>
### Function getIntValue

![][public]
![][const]


```cpp
int ansys::dpf::OperatorConfig::getIntValue(std::string const &option) const
```




**Returns**:

Integer value of given option.



**Parameters**:

* std::string const & **option**: [in] Option name.

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorConfig::getIntValue"}]}`
-->

<a id="classansys-dpf-operatorconfig-1a8401495df9777cc8a53f35ecaca55460"></a>
### Function getDoubleValue

![][public]
![][const]


```cpp
double ansys::dpf::OperatorConfig::getDoubleValue(std::string const &option) const
```




**Returns**:

Double value of given option.



**Parameters**:

* std::string const & **option**: [in] Option name.

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorConfig::getDoubleValue"}]}`
-->

<a id="classansys-dpf-operatorconfig-1a3948249196192234ee24269ba8e994b7"></a>
### Function getBoolValue

![][public]
![][const]


```cpp
bool ansys::dpf::OperatorConfig::getBoolValue(std::string const &option) const
```




**Returns**:

Boolean value of given option.



**Parameters**:

* std::string const & **option**: [in] Option name.

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorConfig::getBoolValue"}]}`
-->

<a id="classansys-dpf-operatorconfig-1add327e8dbb91f54919cce1a6966955e6"></a>
### Function hasOption

![][public]
![][const]


```cpp
bool ansys::dpf::OperatorConfig::hasOption(std::string const &option) const
```




**Returns**:

Boolean value if given optin exists in config.



**Parameters**:

* std::string const & **option**: [in] Option name.

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::OperatorConfig::hasOption"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)