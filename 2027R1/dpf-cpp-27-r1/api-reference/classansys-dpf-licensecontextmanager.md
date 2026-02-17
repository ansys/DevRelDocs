<a id="classansys-dpf-licensecontextmanager"></a>
# Class ansys::dpf::LicenseContextManager

![][C++]
![][public]





## Members

* [getStatus](classansys-dpf-licensecontextmanager.md#classansys-dpf-licensecontextmanager-1aba62d76d30827355d69e0a565685a2cf)
* [LicenseContextManager](classansys-dpf-licensecontextmanager.md#classansys-dpf-licensecontextmanager-1a354346a6ed7b1213e72e921372803ecb)
* [LicenseContextManager](classansys-dpf-licensecontextmanager.md#classansys-dpf-licensecontextmanager-1aec313d871268c341cc3fac58cdfd4804)
* [LicenseContextManager](classansys-dpf-licensecontextmanager.md#classansys-dpf-licensecontextmanager-1acf5fa66ad6835273f8241c17dcf82e27)

## Public functions

<a id="classansys-dpf-licensecontextmanager-1a354346a6ed7b1213e72e921372803ecb"></a>
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

<a id="classansys-dpf-licensecontextmanager-1aec313d871268c341cc3fac58cdfd4804"></a>
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

<a id="classansys-dpf-licensecontextmanager-1acf5fa66ad6835273f8241c17dcf82e27"></a>
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

<a id="classansys-dpf-licensecontextmanager-1aba62d76d30827355d69e0a565685a2cf"></a>
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
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)