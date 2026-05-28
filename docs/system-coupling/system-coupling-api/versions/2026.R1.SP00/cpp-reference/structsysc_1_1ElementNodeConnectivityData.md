---
title: "Structure sysc::ElementNodeConnectivityData"
---

![][C++]
![][public]

**Definition**: `MeshDefinition.hpp` (line 110)

Describes element-to-node connectivity.



## Members

* [ElementNodeConnectivityData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementNodeConnectivityData)
* [ElementNodeConnectivityData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementNodeConnectivityData)
* [ElementNodeConnectivityData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementNodeConnectivityData)
* [ElementNodeConnectivityData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementNodeConnectivityData)
* [elemNodeIds](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementNodeConnectivityData)
* [operator=](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementNodeConnectivityData)
* [operator=](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementNodeConnectivityData)

## Public attributes

<a id="structsysc_1_1ElementNodeConnectivityData_1a05900eb58a87d76c8f370123db44acb5"></a>
### Variable elemNodeIds

![][public]

**Definition**: `MeshDefinition.hpp` (line 111)

```cpp
OutputIntegerData sysc::ElementNodeConnectivityData::elemNodeIds
```



Element-to-node connectivity array.



**Type**: [OutputIntegerData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1OutputIntegerData)

## Public functions

<a id="structsysc_1_1ElementNodeConnectivityData_1a8f16a7e5fd8a94bc018ec22f188bb3c3"></a>
### Function ElementNodeConnectivityData

![][public]

```cpp
sysc::ElementNodeConnectivityData::ElementNodeConnectivityData(const OutputIntegerData &elemNodeIds)
```

Constructor that takes element-to-node connectivity array.





**Parameters**:

* const [OutputIntegerData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/classsysc_1_1OutputIntegerData) & **elemNodeIds**

**Return type**: 

<a id="structsysc_1_1ElementNodeConnectivityData_1ac314284a846e37733a53f18bcc035730"></a>
### Function ElementNodeConnectivityData

![][public]

```cpp
sysc::ElementNodeConnectivityData::ElementNodeConnectivityData()=default
```

Default constructor.





**Return type**: 

<a id="structsysc_1_1ElementNodeConnectivityData_1a54709b2109b645ba08dbd36df58ef0e4"></a>
### Function ElementNodeConnectivityData

![][public]

```cpp
sysc::ElementNodeConnectivityData::ElementNodeConnectivityData(const ElementNodeConnectivityData &)=default
```

Copy constructor.





**Parameters**:

* const [ElementNodeConnectivityData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementNodeConnectivityData) &

**Return type**: 

<a id="structsysc_1_1ElementNodeConnectivityData_1afea7915624bf249ee18e3b6590fc9652"></a>
### Function ElementNodeConnectivityData

![][public]

```cpp
sysc::ElementNodeConnectivityData::ElementNodeConnectivityData(ElementNodeConnectivityData &&)=default
```

Move constructor.





**Parameters**:

* [ElementNodeConnectivityData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementNodeConnectivityData) &&

**Return type**: 

<a id="structsysc_1_1ElementNodeConnectivityData_1a009282d0ad156090a5d0fa5bcafdeb79"></a>
### Function operator=

![][public]

```cpp
ElementNodeConnectivityData& sysc::ElementNodeConnectivityData::operator=(const ElementNodeConnectivityData &)=default
```

Copy-assign operator.





**Parameters**:

* const [ElementNodeConnectivityData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementNodeConnectivityData) &

**Return type**: [ElementNodeConnectivityData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementNodeConnectivityData) &

<a id="structsysc_1_1ElementNodeConnectivityData_1a08160f6e119ce49769850046bcedf310"></a>
### Function operator=

![][public]

```cpp
ElementNodeConnectivityData& sysc::ElementNodeConnectivityData::operator=(ElementNodeConnectivityData &&)=default
```

Move-assign operator.





**Parameters**:

* [ElementNodeConnectivityData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementNodeConnectivityData) &&

**Return type**: [ElementNodeConnectivityData](/docs/system-coupling/system-coupling-api/versions/2026.R1.SP00/cpp-reference/structsysc_1_1ElementNodeConnectivityData) &

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)