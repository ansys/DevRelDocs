<a id="classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination"></a>
# Class ansys::dpf::CacheInformation::LevelAndDestination

![][C++]
![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 4605)





## Members

* [\_data](classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination.md#classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination_1afcb0c4770af96a069509b3268f514fbd)
* [\_destination\_property](classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination.md#classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination_1a0f41cf7694abd66f7b464c5b9cf4db57)
* [\_level\_property](classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination.md#classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination_1a9d4ab0be2b48d2e8a1a0df3558922a36)
* [Destination](classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination.md#classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination_1a688d62a5059a0a6e4a3fc6389bb25730)
* [get](classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination.md#classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination_1ae0e573e2894a2a3fb6fd3e113fd38d6c)
* [getDestination](classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination.md#classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination_1af4246fcfacf65e32bc5848941bc33208)
* [getLevel](classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination.md#classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination_1af75c633724dda9c32bc1f27587be321a)
* [Level](classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination.md#classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination_1a70af213b42855440433a7d5bbc1ecbf5)
* [LevelAndDestination](classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination.md#classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination_1a13603a73f2a4c2c35c23f6b2f9de43b9)

## Public types

<a id="classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination_1a70af213b42855440433a7d5bbc1ecbf5"></a>
### Enumeration type Level

![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 4608)


```cpp
enum Level {
  MIN_LEVEL = 0,
  LEVEL_ONE = 1,
  LEVEL_TWO = 2,
  LEVEL_THREE = 3,
  MAX_LEVEL = 4
}
```








<a id="classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination_1a70af213b42855440433a7d5bbc1ecbf5a46da30641de35664521d2362911d957e"></a>
#### Enumerator MIN\_LEVEL





<a id="classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination_1a70af213b42855440433a7d5bbc1ecbf5ab2e608ecb42cdc24c5d0c7a0cf8879c7"></a>
#### Enumerator LEVEL\_ONE





<a id="classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination_1a70af213b42855440433a7d5bbc1ecbf5aa421c0089d8a62445ffb1e6a22bf898a"></a>
#### Enumerator LEVEL\_TWO





<a id="classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination_1a70af213b42855440433a7d5bbc1ecbf5a7b581e62b0cb0bd1755c40fc89b0a7f7"></a>
#### Enumerator LEVEL\_THREE





<a id="classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination_1a70af213b42855440433a7d5bbc1ecbf5a220d1e7fac4735d1001d0104c0d01ea9"></a>
#### Enumerator MAX\_LEVEL





<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CacheInformation::LevelAndDestination::Level"}]}`
-->

<a id="classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination_1a688d62a5059a0a6e4a3fc6389bb25730"></a>
### Enumeration type Destination

![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 4617)


```cpp
enum Destination {
  RAM,
  DISK
}
```








<a id="classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination_1a688d62a5059a0a6e4a3fc6389bb25730ae53619c1fe611a51eeeb8d148ba6e532"></a>
#### Enumerator RAM





<a id="classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination_1a688d62a5059a0a6e4a3fc6389bb25730a290d4b81f4e2b47d86fd1b0170e9aab7"></a>
#### Enumerator DISK





<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CacheInformation::LevelAndDestination::Destination"}]}`
-->

## Private attributes

<a id="classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination_1afcb0c4770af96a069509b3268f514fbd"></a>
### Variable \_data

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 4635)


```cpp
DataTree ansys::dpf::CacheInformation::LevelAndDestination::_data
```








**Type**: [DataTree](classansys_1_1dpf_1_1DataTree.md#classansys_1_1dpf_1_1DataTree)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CacheInformation::LevelAndDestination::_data"}]}`
-->

## Public static attributes

<a id="classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination_1a9d4ab0be2b48d2e8a1a0df3558922a36"></a>
### Variable \_level\_property

![][public]
![][static]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 4637)


```cpp
const std::string ansys::dpf::CacheInformation::LevelAndDestination::_level_property
```








**Type**: const std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CacheInformation::LevelAndDestination::_level_property"}]}`
-->

<a id="classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination_1a0f41cf7694abd66f7b464c5b9cf4db57"></a>
### Variable \_destination\_property

![][public]
![][static]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 4638)


```cpp
const std::string ansys::dpf::CacheInformation::LevelAndDestination::_destination_property
```








**Type**: const std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CacheInformation::LevelAndDestination::_destination_property"}]}`
-->

## Public functions

<a id="classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination_1a13603a73f2a4c2c35c23f6b2f9de43b9"></a>
### Function LevelAndDestination

![][public]


```cpp
ansys::dpf::CacheInformation::LevelAndDestination::LevelAndDestination(const Level level=Level::MIN_LEVEL, const Destination &destination=Destination::RAM)
```








**Parameters**:

* const Level **level** = Level::MIN_LEVEL 
* const Destination & **destination** = Destination::RAM 

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CacheInformation::LevelAndDestination::LevelAndDestination"}]}`
-->

<a id="classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination_1af75c633724dda9c32bc1f27587be321a"></a>
### Function getLevel

![][public]
![][const]


```cpp
int ansys::dpf::CacheInformation::LevelAndDestination::getLevel() const
```








**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CacheInformation::LevelAndDestination::getLevel"}]}`
-->

<a id="classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination_1af4246fcfacf65e32bc5848941bc33208"></a>
### Function getDestination

![][public]
![][const]


```cpp
int ansys::dpf::CacheInformation::LevelAndDestination::getDestination() const
```








**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CacheInformation::LevelAndDestination::getDestination"}]}`
-->

<a id="classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination_1ae0e573e2894a2a3fb6fd3e113fd38d6c"></a>
### Function get

![][public]
![][const]


```cpp
const DataTree & ansys::dpf::CacheInformation::LevelAndDestination::get() const
```








**Return type**: const [DataTree](classansys_1_1dpf_1_1DataTree.md#classansys_1_1dpf_1_1DataTree) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CacheInformation::LevelAndDestination::get"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)