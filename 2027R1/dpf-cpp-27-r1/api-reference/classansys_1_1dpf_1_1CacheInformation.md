<a id="classansys_1_1dpf_1_1CacheInformation"></a>
# Class ansys::dpf::CacheInformation

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 4602)



To be used in order to write external operators

## Inner classes

* [ansys::dpf::CacheInformation::LevelAndDestination](classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination.md#classansys_1_1dpf_1_1CacheInformation_1_1LevelAndDestination)

## Members

* [\_data](classansys_1_1dpf_1_1CacheInformation.md#classansys_1_1dpf_1_1CacheInformation_1a469c7ef5f0a5cfbf954416d5842c3b3d)
* [add](classansys_1_1dpf_1_1CacheInformation.md#classansys_1_1dpf_1_1CacheInformation_1a2013c0dba404b5949969a4d055bb57b0)
* [get](classansys_1_1dpf_1_1CacheInformation.md#classansys_1_1dpf_1_1CacheInformation_1a23ed03464c433acf6e9995a300ac832f)

## Private attributes

<a id="classansys_1_1dpf_1_1CacheInformation_1a469c7ef5f0a5cfbf954416d5842c3b3d"></a>
### Variable \_data

![][private]

**Definition**: `dpf\_api.h` (line 4650)


```cpp
DataTree ansys::dpf::CacheInformation::_data
```








**Type**: [DataTree](classansys_1_1dpf_1_1DataTree.md#classansys_1_1dpf_1_1DataTree)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CacheInformation::_data"}]}`
-->

## Public functions

<a id="classansys_1_1dpf_1_1CacheInformation_1a2013c0dba404b5949969a4d055bb57b0"></a>
### Function add

![][public]


```cpp
void ansys::dpf::CacheInformation::add(const std::string &pinName, const LevelAndDestination &levelAndDestination)
```








**Parameters**:

* const std::string & **pinName**
* const LevelAndDestination & **levelAndDestination**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CacheInformation::add"}]}`
-->

<a id="classansys_1_1dpf_1_1CacheInformation_1a23ed03464c433acf6e9995a300ac832f"></a>
### Function get

![][public]
![][const]


```cpp
const DataTree & ansys::dpf::CacheInformation::get() const noexcept
```








**Return type**: const [DataTree](classansys_1_1dpf_1_1DataTree.md#classansys_1_1dpf_1_1DataTree) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CacheInformation::get"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)