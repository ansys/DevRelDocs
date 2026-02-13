<a id="structansys_1_1dpf_1_1UnitSystem"></a>
# Structure ansys::dpf::UnitSystem

![][C++]
![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api\_base.h` (line 437)

System of measurement units.

## Members

* [\_ansys\_id](structansys_1_1dpf_1_1UnitSystem.md#structansys_1_1dpf_1_1UnitSystem_1ae3a235b762f3d011c238e587cc5684c7)
* [\_name](structansys_1_1dpf_1_1UnitSystem.md#structansys_1_1dpf_1_1UnitSystem_1ae77ec395cf66809b0c654040d4ad1409)
* [\_unit\_names](structansys_1_1dpf_1_1UnitSystem.md#structansys_1_1dpf_1_1UnitSystem_1a0c9cbebe59cea409b54bb609dcf1b0c9)
* [c\_str](structansys_1_1dpf_1_1UnitSystem.md#structansys_1_1dpf_1_1UnitSystem_1a7e8ff2d5918c48d3a4be9c30beffc8d7)
* [getId](structansys_1_1dpf_1_1UnitSystem.md#structansys_1_1dpf_1_1UnitSystem_1a4344c11cdda170ff215ea0e8d9ab40e4)
* [getUnitNames](structansys_1_1dpf_1_1UnitSystem.md#structansys_1_1dpf_1_1UnitSystem_1a835847ebc0bbc0566938299f232e0bab)
* [operator std::string](structansys_1_1dpf_1_1UnitSystem.md#structansys_1_1dpf_1_1UnitSystem_1aed08cd4b0916d79cd83929674fd6a8d5)
* [operator==](structansys_1_1dpf_1_1UnitSystem.md#structansys_1_1dpf_1_1UnitSystem_1a49cfc761dd7c25410aea932346906bfc)
* [UnitSystem](structansys_1_1dpf_1_1UnitSystem.md#structansys_1_1dpf_1_1UnitSystem_1a87331afc8cfb97200f342280fd49e536)
* [UnitSystem](structansys_1_1dpf_1_1UnitSystem.md#structansys_1_1dpf_1_1UnitSystem_1a588643682966a84ffbed42a60eb5aa93)

## Private attributes

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

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::UnitSystem::UnitSystem"}]}`
-->

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

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::UnitSystem::UnitSystem"}]}`
-->

<a id="structansys_1_1dpf_1_1UnitSystem_1aed08cd4b0916d79cd83929674fd6a8d5"></a>
### Function operator std::string

![][public]
![][const]

```cpp
ansys::dpf::UnitSystem::operator std::string() const
```

Name of unit system.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::UnitSystem::string"}]}`
-->

<a id="structansys_1_1dpf_1_1UnitSystem_1a7e8ff2d5918c48d3a4be9c30beffc8d7"></a>
### Function c\_str

![][public]
![][const]

```cpp
const char * ansys::dpf::UnitSystem::c_str() const
```

Gets name of unit system. 
**Returns**:

Name of unit system.

**Return type**: const char *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::UnitSystem::c_str"}]}`
-->

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

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::UnitSystem::getId"}]}`
-->

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

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::UnitSystem::getUnitNames"}]}`
-->

<a id="structansys_1_1dpf_1_1UnitSystem_1a49cfc761dd7c25410aea932346906bfc"></a>
### Function operator==

![][public]
![][const]

```cpp
bool ansys::dpf::UnitSystem::operator==(UnitSystem const &rhs) const
```

**Parameters**:

* [UnitSystem](structansys_1_1dpf_1_1UnitSystem.md#structansys_1_1dpf_1_1UnitSystem_1a87331afc8cfb97200f342280fd49e536) const & **rhs**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::UnitSystem::operator=="}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)