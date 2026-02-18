# Class ansys::dpf::CacheInformation

<a id="classansys-dpf-cacheinformation"></a>

![][C++]
![][public]



To be used in order to write external operators

## Inner classes

* [ansys::dpf::CacheInformation::LevelAndDestination](classansys-dpf-cacheinformation-levelanddestination.md#classansys-dpf-cacheinformation-levelanddestination)

## Members

* [add](classansys-dpf-cacheinformation.md#classansys-dpf-cacheinformation-1a2013c0dba404b5949969a4d055bb57b0)
* [get](classansys-dpf-cacheinformation.md#classansys-dpf-cacheinformation-1a23ed03464c433acf6e9995a300ac832f)

## Public functions

<a id="classansys-dpf-cacheinformation-1a2013c0dba404b5949969a4d055bb57b0"></a>
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

<a id="classansys-dpf-cacheinformation-1a23ed03464c433acf6e9995a300ac832f"></a>
### Function get

![][public]
![][const]


```cpp
const DataTree & ansys::dpf::CacheInformation::get() const noexcept
```








**Return type**: const [DataTree](classansys-dpf-datatree.md#classansys-dpf-datatree) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CacheInformation::get"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)