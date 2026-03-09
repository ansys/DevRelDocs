# Class ansys::dpf::Changelog

<a id="classansys-dpf-changelog"></a>

![][C++]
![][public]



[Changelog](classansys-dpf-changelog.md#classansys-dpf-changelog) class

**Inherits from**:

* [ansys::dpf::CustomContainerBase](classansys-dpf-customcontainerbase.md#classansys-dpf-customcontainerbase)

## Members

* [Changelog](classansys-dpf-changelog.md#classansys-dpf-changelog-1a93e6beab26f0b25315c832c948ec6cb8)
* [Changelog](classansys-dpf-changelog.md#classansys-dpf-changelog-1aadce9fb026ef542b71a48e017c4899a6)
* [container](classansys-dpf-customcontainerbase.md#classansys-dpf-customcontainerbase-1a595ca7a2057dd128a01676b24e622c08)
* [container](classansys-dpf-customcontainerbase.md#classansys-dpf-customcontainerbase-1a43b2fea572fa3298d6405cf7f497c78b)
* [CustomContainerBase](classansys-dpf-customcontainerbase.md#classansys-dpf-customcontainerbase-1ab2649202d9da1730e164634a4d864f3e)
* [CustomContainerBase](classansys-dpf-customcontainerbase.md#classansys-dpf-customcontainerbase-1a0dbdad77df7b779da34e8fa283a6597f)
* [CustomContainerBase](classansys-dpf-customcontainerbase.md#classansys-dpf-customcontainerbase-1ae7229c52821828cec4fca9dce836ee55)
* [describe](classansys-dpf-customcontainerbase.md#classansys-dpf-customcontainerbase-1a65a8a6f6585ddf80c7e0dfdf9b9c50f5)
* [expectVersion](classansys-dpf-changelog.md#classansys-dpf-changelog-1a8d295ec0c234840d93b3ecb7ec68c469)
* [getAttributeNames](classansys-dpf-customcontainerbase.md#classansys-dpf-customcontainerbase-1a1ba98abe5c74497c829744f302de3cb5)
* [getChangesForVersion](classansys-dpf-changelog.md#classansys-dpf-changelog-1aea59789008aa6f51949dce368dba7a87)
* [getChangesForVersion](classansys-dpf-changelog.md#classansys-dpf-changelog-1aa4d437d707bd2f7b5f351b19da5eb389)
* [getClient](classansys-dpf-customcontainerbase.md#classansys-dpf-customcontainerbase-1ae048111b288fdbddfd3a5ab07438bc85)
* [getLastVersion](classansys-dpf-changelog.md#classansys-dpf-changelog-1acdd70e4b9bdb3907db774acfda81a24f)
* [getVersions](classansys-dpf-changelog.md#classansys-dpf-changelog-1ab000960d060460b60154dc881bc1219d)
* [getVersionsAsStrings](classansys-dpf-changelog.md#classansys-dpf-changelog-1a10c1b3d096703017bafc83517f30536c)
* [majorBump](classansys-dpf-changelog.md#classansys-dpf-changelog-1ac8e6dc63736847f1fc08a301258905fe)
* [minorBump](classansys-dpf-changelog.md#classansys-dpf-changelog-1ad88a847aca0163e5a19a4591818fb795)
* [patchBump](classansys-dpf-changelog.md#classansys-dpf-changelog-1a787041aa6ca6a5cc2b070a76e8edffde)
* [toMap](classansys-dpf-changelog.md#classansys-dpf-changelog-1aec6cd1c4222d9f9d5007262d013b1ece)
* [~Changelog](classansys-dpf-changelog.md#classansys-dpf-changelog-1a6740bbacf3550c55e5fa410c1e70102a)
* [~CustomContainerBase](classansys-dpf-customcontainerbase.md#classansys-dpf-customcontainerbase-1a352060b066a01aeda0631390b664f021)

## Friends

## Public functions

<a id="classansys-dpf-changelog-1a93e6beab26f0b25315c832c948ec6cb8"></a>
### Function Changelog

![][public]


```cpp
ansys::dpf::Changelog::Changelog()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Changelog::Changelog"}]}`
-->

<a id="classansys-dpf-changelog-1aadce9fb026ef542b71a48e017c4899a6"></a>
### Function Changelog

![][public]


```cpp
ansys::dpf::Changelog::Changelog(const GenericDataContainer gdc)
```








**Parameters**:

* const GenericDataContainer **gdc**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Changelog::Changelog"}]}`
-->

<a id="classansys-dpf-changelog-1a6740bbacf3550c55e5fa410c1e70102a"></a>
### Function ~Changelog

![][public]


```cpp
virtual ansys::dpf::Changelog::~Changelog()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Changelog::~Changelog"}]}`
-->

<a id="classansys-dpf-changelog-1a787041aa6ca6a5cc2b070a76e8edffde"></a>
### Function patchBump

![][public]


```cpp
Changelog & ansys::dpf::Changelog::patchBump(const std::string changes)
```








**Parameters**:

* const std::string **changes**

**Return type**: Changelog &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Changelog::patchBump"}]}`
-->

<a id="classansys-dpf-changelog-1ad88a847aca0163e5a19a4591818fb795"></a>
### Function minorBump

![][public]


```cpp
Changelog & ansys::dpf::Changelog::minorBump(const std::string changes)
```








**Parameters**:

* const std::string **changes**

**Return type**: Changelog &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Changelog::minorBump"}]}`
-->

<a id="classansys-dpf-changelog-1ac8e6dc63736847f1fc08a301258905fe"></a>
### Function majorBump

![][public]


```cpp
Changelog & ansys::dpf::Changelog::majorBump(const std::string changes)
```








**Parameters**:

* const std::string **changes**

**Return type**: Changelog &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Changelog::majorBump"}]}`
-->

<a id="classansys-dpf-changelog-1a8d295ec0c234840d93b3ecb7ec68c469"></a>
### Function expectVersion

![][public]


```cpp
Changelog & ansys::dpf::Changelog::expectVersion(const SemanticVersion &version)
```








**Parameters**:

* const [SemanticVersion](classansys-dpf-semanticversion.md#classansys-dpf-semanticversion) & **version**

**Return type**: Changelog &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Changelog::expectVersion"}]}`
-->

<a id="classansys-dpf-changelog-1acdd70e4b9bdb3907db774acfda81a24f"></a>
### Function getLastVersion

![][public]
![][const]


```cpp
SemanticVersion ansys::dpf::Changelog::getLastVersion() const
```








**Return type**: [SemanticVersion](classansys-dpf-semanticversion.md#classansys-dpf-semanticversion)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Changelog::getLastVersion"}]}`
-->

<a id="classansys-dpf-changelog-1ab000960d060460b60154dc881bc1219d"></a>
### Function getVersions

![][public]
![][const]


```cpp
std::vector< SemanticVersion > ansys::dpf::Changelog::getVersions() const
```








**Return type**: std::vector< [SemanticVersion](classansys-dpf-semanticversion.md#classansys-dpf-semanticversion) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Changelog::getVersions"}]}`
-->

<a id="classansys-dpf-changelog-1a10c1b3d096703017bafc83517f30536c"></a>
### Function getVersionsAsStrings

![][public]
![][const]


```cpp
std::vector< std::string > ansys::dpf::Changelog::getVersionsAsStrings() const
```








**Return type**: std::vector< std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Changelog::getVersionsAsStrings"}]}`
-->

<a id="classansys-dpf-changelog-1aea59789008aa6f51949dce368dba7a87"></a>
### Function getChangesForVersion

![][public]
![][const]


```cpp
std::string ansys::dpf::Changelog::getChangesForVersion(const SemanticVersion &version) const
```








**Parameters**:

* const [SemanticVersion](classansys-dpf-semanticversion.md#classansys-dpf-semanticversion) & **version**

**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Changelog::getChangesForVersion"}]}`
-->

<a id="classansys-dpf-changelog-1aa4d437d707bd2f7b5f351b19da5eb389"></a>
### Function getChangesForVersion

![][public]
![][const]


```cpp
std::string ansys::dpf::Changelog::getChangesForVersion(const std::string &version) const
```








**Parameters**:

* const std::string & **version**

**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Changelog::getChangesForVersion"}]}`
-->

<a id="classansys-dpf-changelog-1aec6cd1c4222d9f9d5007262d013b1ece"></a>
### Function toMap

![][public]
![][const]


```cpp
std::map< std::string, std::string > ansys::dpf::Changelog::toMap() const
```








**Return type**: std::map< std::string, std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Changelog::toMap"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)