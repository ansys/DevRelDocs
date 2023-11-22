<a id="structansys_1_1dpf_1_1UnitSystem"></a>
# Structure ansys::dpf::UnitSystem

![][C++]
![][public]

**Definition**: `dpf\_api\_base.h` (line 406)



System of measurement units.

## Members

* [\_ansys\_id](structansys_1_1dpf_1_1UnitSystem.md#structansys_1_1dpf_1_1UnitSystem_1ae3a235b762f3d011c238e587cc5684c7)
* [\_name](structansys_1_1dpf_1_1UnitSystem.md#structansys_1_1dpf_1_1UnitSystem_1ae77ec395cf66809b0c654040d4ad1409)
* [\_unit\_names](structansys_1_1dpf_1_1UnitSystem.md#structansys_1_1dpf_1_1UnitSystem_1a0c9cbebe59cea409b54bb609dcf1b0c9)
* [c\_str](structansys_1_1dpf_1_1UnitSystem.md#structansys_1_1dpf_1_1UnitSystem_1a300d1c711b3ef6b42f8a51b620079a5b)
* [getId](structansys_1_1dpf_1_1UnitSystem.md#structansys_1_1dpf_1_1UnitSystem_1a4344c11cdda170ff215ea0e8d9ab40e4)
* [getUnitNames](structansys_1_1dpf_1_1UnitSystem.md#structansys_1_1dpf_1_1UnitSystem_1a835847ebc0bbc0566938299f232e0bab)
* [operator std::string](structansys_1_1dpf_1_1UnitSystem.md#structansys_1_1dpf_1_1UnitSystem_1aed08cd4b0916d79cd83929674fd6a8d5)
* [operator==](structansys_1_1dpf_1_1UnitSystem.md#structansys_1_1dpf_1_1UnitSystem_1a49cfc761dd7c25410aea932346906bfc)
* [UnitSystem](structansys_1_1dpf_1_1UnitSystem.md#structansys_1_1dpf_1_1UnitSystem_1a87331afc8cfb97200f342280fd49e536)
* [UnitSystem](structansys_1_1dpf_1_1UnitSystem.md#structansys_1_1dpf_1_1UnitSystem_1a588643682966a84ffbed42a60eb5aa93)

## Private attributes

<a id="structansys_1_1dpf_1_1UnitSystem_1ae77ec395cf66809b0c654040d4ad1409"></a>
### Variable \_name

![][private]

**Definition**: `dpf\_api\_base.h` (line 409)

```cpp
std::string ansys::dpf::UnitSystem::_name
```







**Type**: std::string

<a id="structansys_1_1dpf_1_1UnitSystem_1ae3a235b762f3d011c238e587cc5684c7"></a>
### Variable \_ansys\_id

![][private]

**Definition**: `dpf\_api\_base.h` (line 410)

```cpp
int ansys::dpf::UnitSystem::_ansys_id
```







**Type**: int

<a id="structansys_1_1dpf_1_1UnitSystem_1a0c9cbebe59cea409b54bb609dcf1b0c9"></a>
### Variable \_unit\_names

![][private]

**Definition**: `dpf\_api\_base.h` (line 411)

```cpp
std::string ansys::dpf::UnitSystem::_unit_names
```







**Type**: std::string

## Public functions

<a id="structansys_1_1dpf_1_1UnitSystem_1a87331afc8cfb97200f342280fd49e536"></a>
### Function UnitSystem

![][public]

```cpp
ansys::dpf::UnitSystem::UnitSystem(std::string const &name, int id)
```



Create new unit system.



**Parameters**:

* std::string const & **name**: [in] Name of unit system.
* int **id**: [in] Common unit system identifier used by Ansys.

**Return type**: 

<a id="structansys_1_1dpf_1_1UnitSystem_1a588643682966a84ffbed42a60eb5aa93"></a>
### Function UnitSystem

![][public]

```cpp
ansys::dpf::UnitSystem::UnitSystem(std::string const &name, std::string const &unit_names)
```



Creates a new custom unit system from its base unit strings



**Parameters**:

* std::string const & **name**: [in] Name of unit system
* std::string const & **unit_names**: [in] semicolon-separated list of base units (Length, Mass, Time, Temperature, Electric Charge and Angle)

**Return type**: 

<a id="structansys_1_1dpf_1_1UnitSystem_1aed08cd4b0916d79cd83929674fd6a8d5"></a>
### Function operator std::string

![][public]
![][const]

```cpp
ansys::dpf::UnitSystem::operator std::string() const
```



Name of unit system.



**Return type**: 

<a id="structansys_1_1dpf_1_1UnitSystem_1a300d1c711b3ef6b42f8a51b620079a5b"></a>
### Function c\_str

![][public]
![][const]

```cpp
const char* ansys::dpf::UnitSystem::c_str() const
```



Gets name of unit system. 
**Returns**:

Name of unit system.



**Return type**: const char *

<a id="structansys_1_1dpf_1_1UnitSystem_1a4344c11cdda170ff215ea0e8d9ab40e4"></a>
### Function getId

![][public]
![][const]

```cpp
dp_id ansys::dpf::UnitSystem::getId() const
```



Gets identifer of unit system. 
**Returns**:

Id of unit system.



**Return type**: [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e)

<a id="structansys_1_1dpf_1_1UnitSystem_1a835847ebc0bbc0566938299f232e0bab"></a>
### Function getUnitNames

![][public]
![][const]

```cpp
std::string ansys::dpf::UnitSystem::getUnitNames() const
```



Gets unit_names of unit system (if it is custom). 
**Returns**:

unit_names string of unit system (if it is custom).



**Return type**: std::string

<a id="structansys_1_1dpf_1_1UnitSystem_1a49cfc761dd7c25410aea932346906bfc"></a>
### Function operator==

![][public]
![][const]

```cpp
bool ansys::dpf::UnitSystem::operator==(UnitSystem const &rhs) const
```







**Parameters**:

* [UnitSystem](structansys_1_1dpf_1_1UnitSystem.md#structansys_1_1dpf_1_1UnitSystem) const & **rhs**

**Return type**: bool

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)