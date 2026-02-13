<a id="classansys_1_1dpf_1_1LicenseContextManager"></a>
# Class ansys::dpf::LicenseContextManager

![][C++]
![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 7049)





## Members

* [\_licensing\_operator](classansys_1_1dpf_1_1LicenseContextManager.md#classansys_1_1dpf_1_1LicenseContextManager_1acad6de18945844e886403e02dfb97554)
* [getStatus](classansys_1_1dpf_1_1LicenseContextManager.md#classansys_1_1dpf_1_1LicenseContextManager_1aba62d76d30827355d69e0a565685a2cf)
* [LicenseContextManager](classansys_1_1dpf_1_1LicenseContextManager.md#classansys_1_1dpf_1_1LicenseContextManager_1a354346a6ed7b1213e72e921372803ecb)
* [LicenseContextManager](classansys_1_1dpf_1_1LicenseContextManager.md#classansys_1_1dpf_1_1LicenseContextManager_1aec313d871268c341cc3fac58cdfd4804)
* [LicenseContextManager](classansys_1_1dpf_1_1LicenseContextManager.md#classansys_1_1dpf_1_1LicenseContextManager_1acf5fa66ad6835273f8241c17dcf82e27)

## Private attributes

<a id="classansys_1_1dpf_1_1LicenseContextManager_1acad6de18945844e886403e02dfb97554"></a>
### Variable \_licensing\_operator

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 7056)


```cpp
Operator ansys::dpf::LicenseContextManager::_licensing_operator
```








**Type**: [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::LicenseContextManager::_licensing_operator"}]}`
-->

## Public functions

<a id="classansys_1_1dpf_1_1LicenseContextManager_1a354346a6ed7b1213e72e921372803ecb"></a>
### Function LicenseContextManager

![][public]


```cpp
ansys::dpf::LicenseContextManager::LicenseContextManager(const std::string &increment_name="", const double &license_timeout_in_seconds=-1)
```








**Parameters**:

* const std::string & **increment_name** = "" 
* const double & **license_timeout_in_seconds** = -1 

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::LicenseContextManager::LicenseContextManager"}]}`
-->

<a id="classansys_1_1dpf_1_1LicenseContextManager_1aec313d871268c341cc3fac58cdfd4804"></a>
### Function LicenseContextManager

![][public]


```cpp
ansys::dpf::LicenseContextManager::LicenseContextManager(const std::vector< std::string > &vincrement_name, int delay_checkout=1, const double &license_timeout_in_seconds=-1)
```








**Parameters**:

* const std::vector< std::string > & **vincrement_name**
* int **delay_checkout** = 1 
* const double & **license_timeout_in_seconds** = -1 

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::LicenseContextManager::LicenseContextManager"}]}`
-->

<a id="classansys_1_1dpf_1_1LicenseContextManager_1acf5fa66ad6835273f8241c17dcf82e27"></a>
### Function LicenseContextManager

![][public]


```cpp
ansys::dpf::LicenseContextManager::LicenseContextManager(const double &license_timeout_in_seconds)
```








**Parameters**:

* const double & **license_timeout_in_seconds**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::LicenseContextManager::LicenseContextManager"}]}`
-->

<a id="classansys_1_1dpf_1_1LicenseContextManager_1aba62d76d30827355d69e0a565685a2cf"></a>
### Function getStatus

![][public]


```cpp
std::string ansys::dpf::LicenseContextManager::getStatus()
```








**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::LicenseContextManager::getStatus"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)