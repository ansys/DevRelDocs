# Class ansys::dpf::SemanticVersion

<a id="classansys-dpf-semanticversion"></a>

![][C++]
![][public]



[SemanticVersion](classansys-dpf-semanticversion.md#classansys-dpf-semanticversion) class

## Members

* [getMajor](classansys-dpf-semanticversion.md#classansys-dpf-semanticversion-1a30b65ce36e5098afdce9e9a4fba285be)
* [getMinor](classansys-dpf-semanticversion.md#classansys-dpf-semanticversion-1aad3f08f119505d66f1a7837a26739ac9)
* [getPatch](classansys-dpf-semanticversion.md#classansys-dpf-semanticversion-1aa896e4b07458e57f12c3403bfd0aa3be)
* [operator!=](classansys-dpf-semanticversion.md#classansys-dpf-semanticversion-1af5f6a1a5bc721d3a328cfea846f05ba8)
* [operator==](classansys-dpf-semanticversion.md#classansys-dpf-semanticversion-1a374ea2a4a8cce25ed546ca82cb05ba50)
* [SemanticVersion](classansys-dpf-semanticversion.md#classansys-dpf-semanticversion-1ac62ceb60eefe9f0da253845e61b5b2f0)
* [toString](classansys-dpf-semanticversion.md#classansys-dpf-semanticversion-1a584f2c5ac6e52af7dd74118a7886835f)
* [~SemanticVersion](classansys-dpf-semanticversion.md#classansys-dpf-semanticversion-1a7e313813d45ed91cdced2e0ef8587aea)

## Friends

## Public functions

<a id="classansys-dpf-semanticversion-1ac62ceb60eefe9f0da253845e61b5b2f0"></a>
### Function SemanticVersion

![][public]


```cpp
ansys::dpf::SemanticVersion::SemanticVersion(uint16_t major, uint16_t minor, uint16_t patch)
```








**Parameters**:

* uint16_t **major**
* uint16_t **minor**
* uint16_t **patch**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::SemanticVersion::SemanticVersion"}]}`
-->

<a id="classansys-dpf-semanticversion-1a7e313813d45ed91cdced2e0ef8587aea"></a>
### Function ~SemanticVersion

![][public]


```cpp
virtual ansys::dpf::SemanticVersion::~SemanticVersion()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::SemanticVersion::~SemanticVersion"}]}`
-->

<a id="classansys-dpf-semanticversion-1a30b65ce36e5098afdce9e9a4fba285be"></a>
### Function getMajor

![][public]
![][const]


```cpp
uint16_t ansys::dpf::SemanticVersion::getMajor() const
```








**Return type**: uint16_t

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::SemanticVersion::getMajor"}]}`
-->

<a id="classansys-dpf-semanticversion-1aad3f08f119505d66f1a7837a26739ac9"></a>
### Function getMinor

![][public]
![][const]


```cpp
uint16_t ansys::dpf::SemanticVersion::getMinor() const
```








**Return type**: uint16_t

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::SemanticVersion::getMinor"}]}`
-->

<a id="classansys-dpf-semanticversion-1aa896e4b07458e57f12c3403bfd0aa3be"></a>
### Function getPatch

![][public]
![][const]


```cpp
uint16_t ansys::dpf::SemanticVersion::getPatch() const
```








**Return type**: uint16_t

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::SemanticVersion::getPatch"}]}`
-->

<a id="classansys-dpf-semanticversion-1a584f2c5ac6e52af7dd74118a7886835f"></a>
### Function toString

![][public]
![][const]


```cpp
std::string ansys::dpf::SemanticVersion::toString() const
```








**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::SemanticVersion::toString"}]}`
-->

<a id="classansys-dpf-semanticversion-1a374ea2a4a8cce25ed546ca82cb05ba50"></a>
### Function operator==

![][public]
![][const]


```cpp
bool ansys::dpf::SemanticVersion::operator==(const SemanticVersion &other) const
```








**Parameters**:

* const SemanticVersion & **other**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::SemanticVersion::operator=="}]}`
-->

<a id="classansys-dpf-semanticversion-1af5f6a1a5bc721d3a328cfea846f05ba8"></a>
### Function operator!=

![][public]
![][const]


```cpp
bool ansys::dpf::SemanticVersion::operator!=(const SemanticVersion &other) const
```








**Parameters**:

* const SemanticVersion & **other**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::SemanticVersion::operator!="}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)