---
title: "Structure sysc::ElementNodeCountData"
---

![][C++]
![][public]

**Definition**: `MeshDefinition.hpp` (line 83)

Describes element node counts.



## Members

* [ElementNodeCountData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementNodeCountData)
* [ElementNodeCountData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementNodeCountData)
* [ElementNodeCountData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementNodeCountData)
* [ElementNodeCountData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementNodeCountData)
* [elemNodeCounts](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementNodeCountData)
* [operator=](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementNodeCountData)
* [operator=](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementNodeCountData)

## Public attributes

<a id="structsysc_1_1ElementNodeCountData_1a7464dda1219e853c893b4991c7382a85"></a>
### Variable elemNodeCounts

![][public]

**Definition**: `MeshDefinition.hpp` (line 84)

```cpp
OutputIntegerData sysc::ElementNodeCountData::elemNodeCounts
```



Element node counts array.



**Type**: [OutputIntegerData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1OutputIntegerData)

## Public functions

<a id="structsysc_1_1ElementNodeCountData_1a8878810b0df0cca773e6dd98e56dbb77"></a>
### Function ElementNodeCountData

![][public]

```cpp
sysc::ElementNodeCountData::ElementNodeCountData(OutputIntegerData elemNodeCounts)
```

Constructor that takes element node counts array.





**Parameters**:

* [OutputIntegerData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1OutputIntegerData) **elemNodeCounts**

**Return type**: 

<a id="structsysc_1_1ElementNodeCountData_1ae090e9435488439d9280babc73243c23"></a>
### Function ElementNodeCountData

![][public]

```cpp
sysc::ElementNodeCountData::ElementNodeCountData()=default
```

Default constructor.





**Return type**: 

<a id="structsysc_1_1ElementNodeCountData_1a790b1bd482fce93ad7569ca20f473acd"></a>
### Function ElementNodeCountData

![][public]

```cpp
sysc::ElementNodeCountData::ElementNodeCountData(const ElementNodeCountData &)=default
```

Copy constructor.





**Parameters**:

* const [ElementNodeCountData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementNodeCountData) &

**Return type**: 

<a id="structsysc_1_1ElementNodeCountData_1aa208c18aabf8e21b6914d598b79b4180"></a>
### Function ElementNodeCountData

![][public]

```cpp
sysc::ElementNodeCountData::ElementNodeCountData(ElementNodeCountData &&)=default
```

Move constructor.





**Parameters**:

* [ElementNodeCountData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementNodeCountData) &&

**Return type**: 

<a id="structsysc_1_1ElementNodeCountData_1a195f2617754465c545017174602a3918"></a>
### Function operator=

![][public]

```cpp
ElementNodeCountData& sysc::ElementNodeCountData::operator=(const ElementNodeCountData &)=default
```

Copy-assign operator.





**Parameters**:

* const [ElementNodeCountData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementNodeCountData) &

**Return type**: [ElementNodeCountData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementNodeCountData) &

<a id="structsysc_1_1ElementNodeCountData_1a84f9e03ef2d2736870a55268ce4601eb"></a>
### Function operator=

![][public]

```cpp
ElementNodeCountData& sysc::ElementNodeCountData::operator=(ElementNodeCountData &&)=default
```

Move-assign operator.





**Parameters**:

* [ElementNodeCountData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementNodeCountData) &&

**Return type**: [ElementNodeCountData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementNodeCountData) &

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)