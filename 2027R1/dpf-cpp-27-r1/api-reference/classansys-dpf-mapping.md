# Class ansys::dpf::Mapping

<a id="classansys-dpf-mapping"></a>

![][C++]
![][public]



Define a mapping between two spaces.

**Inherits from**:

* [ansys::dpf::DpfTypes](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes)

## Members

* [callAPI](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1aea34d37e0c080126eff70db34bf46597)
* [describe](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a9977945710983bc03d2940fa007847b2)
* [empty](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a39cd546c42518e2332be8f287db95459)
* [getClient](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a968afd9daa0b0f13b65a2ac61369d73a)
* [hasBeenMovedLocally](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a1a5634202c15404b6b24e8f50e51cb66)
* [hasInternalObject](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1ae198f89868d85c7db6dc1a934a1d3c15)
* [isOnCommonAPI](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a9f9789ff61cc9d400a2a344830706b73)
* [isSameObject](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1aa64d5f8fcd7d85ad6ebf708494dbefd7)
* [map](classansys-dpf-mapping.md#classansys-dpf-mapping-1aedd955d96f24f77a681f81436a13aa37)
* [Mapping](classansys-dpf-mapping.md#classansys-dpf-mapping-1a562c4764fd1a794f253676410ce96f2b)
* [Mapping](classansys-dpf-mapping.md#classansys-dpf-mapping-1aa7835cf638a6c5ef8d418376f70fdb55)
* [operator=](classansys-dpf-mapping.md#classansys-dpf-mapping-1a1d17d46e79d4d5d31c4bda58d71872c1)
* [operator=](classansys-dpf-mapping.md#classansys-dpf-mapping-1a65cf6727e34d6926ad0a58b06a3feab1)
* [~DpfTypes](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1ab7c83b6ea160c2b115e056f6c312112f)
* [~Mapping](classansys-dpf-mapping.md#classansys-dpf-mapping-1afd43f54f7d22509c247ad74405888d7b)

## Friends

## Public functions

<a id="classansys-dpf-mapping-1afd43f54f7d22509c247ad74405888d7b"></a>
### Function ~Mapping

![][public]


```cpp
ansys::dpf::Mapping::~Mapping()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Mapping::~Mapping"}]}`
-->

<a id="classansys-dpf-mapping-1a562c4764fd1a794f253676410ce96f2b"></a>
### Function Mapping

![][public]


```cpp
ansys::dpf::Mapping::Mapping(Mapping const &)
```








**Parameters**:

* Mapping const &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Mapping::Mapping"}]}`
-->

<a id="classansys-dpf-mapping-1aa7835cf638a6c5ef8d418376f70fdb55"></a>
### Function Mapping

![][public]


```cpp
ansys::dpf::Mapping::Mapping(Mapping &&) noexcept
```








**Parameters**:

* Mapping &&

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Mapping::Mapping"}]}`
-->

<a id="classansys-dpf-mapping-1a1d17d46e79d4d5d31c4bda58d71872c1"></a>
### Function operator=

![][public]


```cpp
Mapping & ansys::dpf::Mapping::operator=(Mapping const &)
```








**Parameters**:

* Mapping const &

**Return type**: Mapping &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Mapping::operator="}]}`
-->

<a id="classansys-dpf-mapping-1a65cf6727e34d6926ad0a58b06a3feab1"></a>
### Function operator=

![][public]


```cpp
Mapping & ansys::dpf::Mapping::operator=(Mapping &&)=delete
```








**Parameters**:

* Mapping &&

**Return type**: Mapping &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Mapping::operator="}]}`
-->

<a id="classansys-dpf-mapping-1aedd955d96f24f77a681f81436a13aa37"></a>
### Function map

![][public]


```cpp
Field ansys::dpf::Mapping::map(Field &in)
```




**Returns**:

[Field](classansys-dpf-field.md#classansys-dpf-field) mapped to new field.



**Parameters**:

* [Field](classansys-dpf-field.md#classansys-dpf-field) & **in**: [in] [Field](classansys-dpf-field.md#classansys-dpf-field) to map.

**Return type**: [Field](classansys-dpf-field.md#classansys-dpf-field)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Mapping::map"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)